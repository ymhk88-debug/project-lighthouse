"use client";

import { useEffect, useRef, useState } from "react";

const TIMESTAMP = "1795074476928";
const ROUGHMAP_KEY = "5an3x3cqbp4";
const MAP_WIDTH = 640;
const CONTAINER_ID = `daumRoughmapContainer${TIMESTAMP}`;
const LOADER_SRC = "https://t1.kakaocdn.net/kakaomapweb/roughmap/loader/prod/roughmapLoader.js";

type RoughmapApi = {
  cdn?: string;
  phase?: string;
  url_protocal?: string;
  url_cdn_domain?: string;
  Lander?: new (options: {
    timestamp: string;
    key: string;
    mapWidth: string;
    mapHeight: string;
  }) => { render: () => void };
};

declare global {
  interface Window {
    daum?: { roughmap?: RoughmapApi };
    __roughmapReady?: Promise<void>;
  }
}

function landerSrc(roughmap: RoughmapApi) {
  if (!roughmap.cdn || !roughmap.url_cdn_domain) return "";
  const protocol = roughmap.url_protocal || "https:";
  const phase = roughmap.phase || "prod";
  return `${protocol}${roughmap.url_cdn_domain}/kakaomapweb/roughmap/place/${phase}/${roughmap.cdn}/roughmapLander.js`;
}

function appendScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("script failed")), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("script failed"));
    document.body.appendChild(script);
  });
}

function loadRoughmap() {
  if (window.daum?.roughmap?.Lander) return Promise.resolve();
  if (window.__roughmapReady) return window.__roughmapReady;

  window.__roughmapReady = new Promise<void>((resolve, reject) => {
    const originalWrite = document.write.bind(document);
    let landerLoad: Promise<void> = Promise.resolve();

    document.write = (markup: string) => {
      const match = String(markup).match(/src="([^"]+)"/);
      if (!match) return;
      landerLoad = appendScript(match[1]);
    };

    const loader = document.createElement("script");
    loader.src = LOADER_SRC;
    loader.async = false;
    loader.onload = () => {
      document.write = originalWrite;
      const src = window.daum?.roughmap ? landerSrc(window.daum.roughmap) : "";
      const pending = landerLoad.then(() => {
        if (!window.daum?.roughmap?.Lander && src) return appendScript(src);
      });
      pending.then(resolve).catch(reject);
    };
    loader.onerror = () => {
      document.write = originalWrite;
      reject(new Error("roughmap loader failed"));
    };
    document.body.appendChild(loader);
  }).catch((error) => {
    window.__roughmapReady = undefined;
    throw error;
  });

  return window.__roughmapReady;
}

export function KakaoRoughMap() {
  const hostRef = useRef<HTMLDivElement>(null);
  const renderedRef = useRef(false);
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(480);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const updateScale = () => {
      const width = host.clientWidth;
      setScale(width > 0 ? Math.min(1, width / MAP_WIDTH) : 1);
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const map = document.getElementById(CONTAINER_ID);
    if (!map) return;

    const measure = () => {
      if (map.offsetHeight > 40) setContentHeight(map.offsetHeight);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(map);
    return () => observer.disconnect();
  }, [failed]);

  useEffect(() => {
    let cancelled = false;

    loadRoughmap()
      .then(() => {
        if (cancelled || renderedRef.current) return;
        const root = document.getElementById(CONTAINER_ID);
        const Lander = window.daum?.roughmap?.Lander;
        if (!root || !Lander) {
          setFailed(true);
          return;
        }
        renderedRef.current = true;
        root.replaceChildren();
        new Lander({
          timestamp: TIMESTAMP,
          key: ROUGHMAP_KEY,
          mapWidth: String(MAP_WIDTH),
          mapHeight: "360",
        }).render();
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div ref={hostRef} className="w-full min-w-0 max-w-full">
      {failed ? (
        <p className="text-base leading-7 text-primary/75 md:text-[17px] md:leading-7">
          지도를 불러오지 못했습니다. 주소와 아래 버튼으로 위치를 확인하실 수 있습니다.
        </p>
      ) : (
        <div
          className="max-w-full overflow-hidden"
          style={{ width: Math.round(MAP_WIDTH * scale), height: Math.round(contentHeight * scale) }}
        >
          <div style={{ width: MAP_WIDTH, transform: `scale(${scale})`, transformOrigin: "top left" }}>
            <div id={CONTAINER_ID} className="root_daum_roughmap root_daum_roughmap_landing" />
          </div>
        </div>
      )}
    </div>
  );
}

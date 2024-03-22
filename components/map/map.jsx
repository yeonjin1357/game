"use client";

import { useEffect, useRef } from "react";

import SearchPlaces from "../searchForm/searchForm";
import classes from "./map.module.css";

export default function Map() {
  // 지도 인스턴스를 저장하기 위한 ref 생성
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = (latitude, longitude) => {
      if (mapRef.current) return; // 지도 인스턴스가 이미 존재하면 초기화 중단

      const mapOptions = {
        center: new naver.maps.LatLng(latitude, longitude),
        zoom: 15,
      };

      // 지도 인스턴스를 생성하고 ref에 저장
      mapRef.current = new naver.maps.Map("map", mapOptions);
    };

    const loadMapWithCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            initMap(position.coords.latitude, position.coords.longitude);
          },
          () => {
            // Geolocation API를 사용할 수 없거나 사용자가 위치 정보 제공을 거부한 경우 기본 위치 사용
            initMap(37.3595704, 127.105399);
          }
        );
      } else {
        // 브라우저가 Geolocation API를 지원하지 않는 경우
        initMap(37.3595704, 127.105399);
      }
    };

    if (window.naver && window.naver.maps) {
      loadMapWithCurrentLocation();
    } else {
      const mapScript = document.createElement("script");
      mapScript.onload = () => loadMapWithCurrentLocation();
      mapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_CLIENT_ID}`;
      document.head.appendChild(mapScript);
    }
  }, []);

  return (
    <div id="map" className={classes.map}>
      <SearchPlaces></SearchPlaces>
    </div>
  );
}

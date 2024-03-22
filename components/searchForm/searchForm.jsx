import { useState } from "react";

import classes from "./searchForm.module.css";

// 검색 폼과 검색 결과를 처리하는 함수 추가
export default function SearchPlaces() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    if (!searchKeyword.trim()) {
      alert("검색어를 입력해주세요.");
      return;
    }

    const navermaps = window.naver.maps;
    console.log(navermaps);
    navermaps.Service.geocode(
      {
        query: searchKeyword,
      },
      function (status, response) {
        if (status !== navermaps.Service.Status.OK) {
          alert("검색 결과가 없습니다.");
          return;
        }
        console.log(navermaps.Service.Status);
        const result = response.result,
          item = result.items[0],
          addrType = item.isRoadAddress ? "[도로명 주소]" : "[지번 주소]",
          point = new navermaps.Point(item.point.x, item.point.y);

        // 검색 결과를 기반으로 지도 중심 이동 및 마커 표시
        map.setCenter(point);
        new navermaps.Marker({
          position: point,
          map: map,
        });
      }
    );
  };

  return (
    <form className={classes.searchContainer} onSubmit={onSearch}>
      <input type="text" placeholder="검색 위치를 입력하세요" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
      <button type="submit">검색</button>
    </form>
  );
}

import React from "react";
import { SubLayout } from "../../layouts/SubLayout";
import { MainLayout } from "../../layouts/MainLayout";

export const DirectionPage = () => {
  return (
    <MainLayout>
      <SubLayout>
        <p>
          <strong>팜스토리</strong>
          <br />
          주소: 경기도 이천시 잘한다구 신난다동 123
          <br />
          전화: 01-234-5678
          <br />
        </p>

        <p>
          <strong>찾아오시는길</strong>
          <br />
          {/* 카카오맵 - 지도퍼가기 */}
          {/* 1. 지도 노드 */}
          <div
            id="daumRoughmapContainer1668214668575"
            class="root_daum_roughmap root_daum_roughmap_landing"
          ></div>
        </p>

        {/* 2. 설치 스크립트
         * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
         */}
        <script
          charset="UTF-8"
          class="daum_roughmap_loader_script"
          src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"
        ></script>

        {/* 3. 실행 스크립트 */}
        <script charset="UTF-8">
          {/*new daum.roughmap.Lander({
                            "timestamp" : "1668214668575",
                            "key" : "2ci7x",
                            "mapWidth" : "760",
                            "mapHeight" : "400"
                        }).render();*/}
        </script>
      </SubLayout>
    </MainLayout>
  );
};

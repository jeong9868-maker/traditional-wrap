// 강의 내용 — 모두 「전통포장교안」 슬라이드 내용 그대로 옮김 (교안에 없는 내용 추가하지 않음)
window.COURSE = {
  title: "한국전통포장",
  parts: [
    {
      tag: "PART 1",
      title: "한국전통포장의 필요성",
      summary: "동양과 서양 · 현대 포장과 전통 포장 · 계승",
      sections: [
        {
          id: "value",
          title: "동양인과 서양인",
          html: `
            <table class="tbl">
              <tr><th>동양인</th><td>정신적인 가치 추구</td></tr>
              <tr><th>서양인</th><td>물질적인 가치 추구</td></tr>
            </table>
            <p class="callout">사람에 대한 배려와 사랑, 정성을 담은 선물이 더욱 가치 있게 표현되는 전통적인 포장 방식은 <strong>정신적인 가치를 추구하는 우리의 정서에 부합</strong>됨.</p>`
        },
        {
          id: "compare",
          title: "현대적인 포장과 전통적인 포장",
          html: `
            <div class="compare">
              <div class="cmp">
                <h4>현대적인 포장</h4>
                <p>인위적인 기교로 편의성과 판촉성, 일회성.</p>
              </div>
              <div class="cmp cmp--accent">
                <h4>전통적인 포장</h4>
                <p>정형화되지 않은 자연스러움.<br>재사용, 재활용되어 친환경적.</p>
              </div>
            </div>`
        },
        {
          id: "inherit",
          title: "계승",
          html: `<p class="callout callout--navy">우리의 정서와 문화를 재인식하고 전통포장을 현대적으로 재해석하여 계승</p>`
        }
      ]
    },
    {
      tag: "PART 2",
      title: "전통 포장 재료",
      summary: "보자기 · 표구지 · 한지 · 노리개 · 끈 · 자수 패치 · 매듭 끈 · 금속 장식",
      sections: [
        {
          id: "materials",
          title: "전통 포장 재료",
          html: `
            <dl class="defs">
              <div><dt>보자기</dt><dd>다양한 색과 재질의 사각 천</dd></div>
              <div><dt>표구지</dt><dd>한지에 비단을 배접한 종이</dd></div>
              <div><dt>한지</dt><dd>닥나무가 주원료. 필요에 따라 여러가지 원료를 혼합하여 만듦.<br>재료, 생산지, 모양, 색 등에 따라 명칭이 다양함.</dd></div>
              <div><dt>노리개</dt><dd>여자들이 몸치장으로 한복 저고리의 고름이나 치마 허리에 다는 것.<br>주로 금, 은, 보석 따위에 명주실을 늘어뜨림.</dd></div>
              <div><dt>끈, 리본</dt><dd></dd></div>
              <div><dt>자수 패치</dt><dd></dd></div>
              <div><dt>전통 매듭 끈</dt><dd>국화 매듭, 나비 매듭, 잠자리 매듭 등으로 장식한 끈</dd></div>
              <div><dt>전통 문양 금속 장식</dt><dd>식물, 꽃, 나비, 문자 등의 다양한 문양의 금속 장식</dd></div>
            </dl>`
        }
      ]
    },
    {
      tag: "PART 3",
      title: "보자기 원단 종류",
      summary: "갑사 · 모시 · 소창 · 공단 · 양단 · 면TC · 린넨 · 크리스탈 · 슬러브",
      sections: [
        {
          id: "fabrics",
          title: "전통 포장 재료 (보자기 원단 종류)",
          html: `
            <dl class="defs">
              <div><dt>갑사</dt><dd>품질 좋은 비단으로 얇고 성겨서 여름 옷감으로 많이 쓰임.<br>봄, 여름과 한가위의 포장에 사용하면 고급스러움.</dd></div>
              <div><dt>모시</dt><dd>모시풀 껍질로 만듦. 빛깔이 희며 여름철 옷감으로 애용. 천연염색의 발달로 다양함.</dd></div>
              <div><dt>소창</dt><dd>이불 안감이나 기저귀감 등으로 쓰임.</dd></div>
              <div><dt>공단</dt><dd>표면이 매끄럽고 부드러운 수자 직물이며, 두껍고 무늬는 없지만 윤기가 도는 비단.<br>보자기를 두 겹으로 만들어도 부드럽고 양면 다른 색으로 제작하여 효과적으로 사용.</dd></div>
              <div><dt>양단</dt><dd>양면의 색과 광택이 다름. 홑 겹으로 제작하여도 겹 보자기의 효과.</dd></div>
              <div><dt>면TC</dt><dd>면과 폴리 혼방. 손수건, 스카프로 주로 사용. 색이 선명하고 무늬가 다양함.</dd></div>
              <div><dt>린넨</dt><dd>아마(亞麻)의 실로 짠 얇은 직물. 손수건, 스카프, 식탁매트, 장바구니, 도시락 가방으로 활용.</dd></div>
              <div><dt>크리스탈</dt><dd>얇고 반짝이며 투명감이 있으며 다소 뻣뻣한 감촉.</dd></div>
              <div><dt>슬러브 (slub)</dt><dd>천을 짤 때, 실의 꼬임 수가 적거나 꼬이지 않은 상태를 슬러브라고 함.<br>슬러브로 인해 은은한 빗살무늬가 보이며 광택이 있고 다소 뻣뻣한 감촉.</dd></div>
            </dl>`
        }
      ]
    },
    {
      tag: "PART 4",
      title: "배색 (配色)",
      summary: "색채의 중요성 → 전통 포장 배색 이미지",
      sections: [
        {
          id: "color",
          title: "색채의 중요성",
          html: `
            <figure class="fig"><img src="img/color-chart.jpg" alt="색상 견본 부채" loading="lazy"></figure>
            <ul class="points">
              <li>색채가 감성을 자극하는 효과로 인한 <strong>배색의 중요성</strong></li>
              <li>개인의 경험과 환경, 성별에 따라 색채 감성이 다소 다르지만, 보편성을 가짐.</li>
              <li>용도에 따른 <strong>색상과 톤</strong>의 구체적인 파악이 중요</li>
            </ul>`
        },
        {
          id: "image",
          title: "전통 포장 배색 이미지",
          html: `
            <div class="moods"><span>화려한</span><span>점잖은</span><span>고상한</span><span>은은한</span></div>
            <figure class="fig fig--zoom"><a href="img/color-image-scale.jpg" target="_blank" rel="noopener"><img src="img/color-image-scale.jpg" alt="배색 이미지 스케일" loading="lazy"></a><figcaption>사진을 누르면 크게 볼 수 있어요</figcaption></figure>
            <div class="gallery">
              <img src="img/color-1.jpg" alt="전통 포장 배색 예시 1" loading="lazy">
              <img src="img/color-2.jpg" alt="전통 포장 배색 예시 2" loading="lazy">
              <img src="img/color-3.jpg" alt="전통 포장 배색 예시 3" loading="lazy">
              <img src="img/color-4.jpg" alt="전통 포장 배색 예시 4" loading="lazy">
              <img src="img/color-5.jpg" alt="전통 포장 배색 예시 5" loading="lazy">
            </div>`
        }
      ]
    },
    {
      tag: "PART 5",
      title: "보자기 SIZE",
      summary: "기본 사이즈 · 매듭이 클 때",
      sections: [
        {
          id: "size",
          title: "보자기 SIZE",
          html: `
            <div class="formula">
              <div class="formula__label">기본</div>
              <div class="formula__body">상자의 <b>가로 + 세로 + 높이</b> + <em>5 ~ 10 cm</em></div>
            </div>
            <div class="formula formula--accent">
              <div class="formula__label">매듭이 클 때<small>(주름이 들어 가는 기법 등)</small></div>
              <div class="formula__body">상자의 <b>가로 + 세로 + 높이</b> + <em>25 ~ 30 cm</em></div>
            </div>`
        }
      ]
    },
    {
      tag: "PART 6",
      title: "고객의 눈길을 사로잡는 보자기 포장",
      summary: "01 기본 매기 · 02 기본 감기매듭 · 03 교차비껴매기 · 04 빗금가마 꽃장식 · 05 작약 · 06 여밈가방",
      sections: [
        { id: "t1", title: "01 기본 매기", html: `
            <figure class="fig fig--white"><img src="img/gibon-maegi.jpg" alt="기본 매기 완성 모습" loading="lazy"></figure>
            <ul class="points">
              <li>상자를 감싸 한쪽 귀가 앞자락으로 내려 덮이게 장식하고, 반대쪽 면의 마주보는 두 귀는 기본 매기 하는 방법</li>
              <li><strong>보자기 포장의 가장 기본이 되는 기법</strong></li>
            </ul>` },
        { id: "t2", title: "02 기본 감기매듭", html: `
            <figure class="fig fig--white"><img src="img/gibon-gamgi.jpg" alt="기본 감기매듭 완성 모습" loading="lazy"></figure>
            <ul class="points">
              <li>상자의 한쪽 면을 감싸고 반대쪽은 매듭 지워 감싸 두었던 한 귀로 매듭을 감싸서 <strong>단아한 분위기</strong>의 포장이 되게 하는 기법</li>
            </ul>` },
        { id: "t3", title: "03 교차비껴매기", html: `
            <figure class="fig fig--white"><img src="img/gyocha-2.jpg" alt="교차비껴매기 완성 모습" loading="lazy"></figure>
            <ul class="points">
              <li><strong>긴 상자에 효과적인</strong> 보자기 포장 방법</li>
              <li>보자기로 감싸 두 개의 매듭으로 나란히 묶어 긴 상자를 단단히 포장할 수 있고 두 개의 매듭이 장식되는 방법</li>
            </ul>` },
        { id: "t4", title: "04 빗금가마 꽃장식", html: `
            <figure class="fig fig--white"><img src="img/bitgeum-gama.jpg" alt="빗금가마 꽃장식 완성 모습" loading="lazy"></figure>
            <ul class="points">
              <li>마주 보는 두 귀를 각각 한 번씩 매고, 네 귀를 각각 같은 방향으로 돌아가며 바로 옆 칸의 매듭 아래에 깔끔하게 끼워 넣는 방법</li>
              <li><strong>가마형태의 꽃모양</strong>이 연상되는 기법</li>
            </ul>` },
        { id: "t5", title: "05 작약", html: `
            <figure class="fig fig--white"><img src="img/jakyak.jpg" alt="작약 포장 완성 모습" loading="lazy"></figure>
            <ul class="points">
              <li>전통적인 분위기의 보자기를 이용한 <strong>화려하면서 고급스러운</strong> 포장 방법</li>
              <li>작약 꽃을 연상할 수 있는 기법</li>
            </ul>` },
        { id: "t6", title: "06 여밈가방", html: `
            <figure class="fig fig--white"><img src="img/yeomim-bag.jpg" alt="여밈가방 완성 모습" loading="lazy"></figure>
            <ul class="points">
              <li>보자기를 이용한 <strong>실용적인 가방</strong></li>
              <li>두 귀 씩 여미고 매듭을 지어 수월하게 여닫을 수 있는 기법의 가방</li>
            </ul>` }
      ]
    }
  ],
  // 목차 카드 사진 (교안 속 사진 사용)
  covers: ["img/bitgeum-gama.jpg", "img/color-2.jpg", "img/color-1.jpg", "img/color-chart.jpg", "img/gibon-maegi.jpg", "img/jakyak.jpg"]
};

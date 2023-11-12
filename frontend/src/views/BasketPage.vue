<template>
  <div>
    <div class="ButtonArea">
      <div>
        <button @click="selectAll">전체 선택</button>
        <button @click="selectDel">선택 삭제</button>
      </div>
      <router-link to="/ResultPage">
        <BlueButton ButtonText="확인" @click="checknews"
      /></router-link>
    </div>

    <div class="dropdownBox">
      <div
        v-for="(dropdown, index) in items"
        :key="index"
        :id="'dropdown-' + index"
        class="dropdown">
        <div class="toggle" @click="toggleDropdown(index)">
          {{
            isOpen[index] ? "△ " + dropdown.category : "▽ " + dropdown.category
          }}
        </div>
        <div class="list" v-if="isOpen[index]">
          <div
            class="list-item"
            v-for="(item, itemIndex) in dropdown.news"
            :key="itemIndex">
            <input type="checkbox" :id="'item' + index + itemIndex" />
            <label :for="'item' + index + itemIndex">
              <div class="item-title">{{ item.title }}</div>
              <div class="item-content">{{ item.content }}</div>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlueButton from "../components/BlueButton.vue";

export default {
  components: { BlueButton },

  data() {
    return {
      isOpen: [true, true, true, true],

      items: [
        {
          category: "산업정책 동향",
          news: [
            {
              title:
                "산업재해 자기규율 예방체계 구축…고용부 법령정비추진반 가동",
              content:
                "정부가 산업재해 감축을 위해 위험성평가 중심의 자기규율 예방체계 확산을 제도적으로 뒷받침한다. 고용노동부는 10일 로얄호텔 서울에서 ‘산업안전보건 법령 정비 추진반’ 출범식을 개최했다. 추진반은 학계·법조계를 중심으로 다양한 분야의 전문가가 참여한 가운데 안경덕 전 고용부 장관이 좌장을 맡는다. 고용부와 한국산업안전보건공단 등 실무자도 참여해 연내 법령과 기준의 전면 정비방안을 마련할 계획이다.",
            },
            {
              title:
                "교통안전공단, ICT 기반 자동차검사소 스마트 안전관리 시스템 개발 추진",
              content:
                "인공지능(AI)과 사물인터넷(IoT) 결합한 안전관리 시스템[보안뉴스 박미영 기자] 한국교통안전공단은 자동차검사소에 존재하는 안전관리 사각지대로부터 자동차검사원과 고객의 안전사고를 예방하기 위해 첨단기술(AI+IoT)을 이용한 ‘자동차검사소 스마트 안전관리 시스템’을 개발한다고 밝혔다.",
            },
          ],
        },
        {
          category: "건설정책 동향",
          news: [
            {
              title: "건설폐기물 관리 깐깐해진다",
              content:
                "‘건설폐기물법’ 개정안 국회 본회의 의결 건설폐기물업자 영업정지 갈음 과징금 최대 2억원으로 상향, 신고 민원 신속 처리 위한 신고수리 간주제도 도입",
            },
            {
              title:
                "DL건설, 미세먼지 흡착·저감 필터 사용...시범 운영 후 타 현장 적용",
              content:
                "DL건설은 자사 현장을 대상으로 미세먼지 흡착·저감 필터를 시범 적용하고 있다고 7일 밝혔다. 이날 DL건설에 따르면 대상 현장은 ‘부산진해경제자유구역 명지지구 2단계 1공구 조성공사’로 관할구청과의 협의를 통해 인근 어린이 보호 구역 내 안전 울타리 및 현장 출입 차량 등에 필터가 설치됐다.",
            },
          ],
        },
        {
          category: "조선정책 동향",
          news: [
            {
              title:
                "한국조선해양, '사업 연속성 관리체계' 인증 획득…ESG경영 강화",
              content:
                "HD현대 조선 중간 지주사인 한국조선해양(009540)이 국내 조선업계 최초로 사업 연속성에 대한 국제 인증을 획득했다. 한국조선해양은 최근 노르웨이선급협회(DNV)로부터 '사업 연속성 관리체계'(Business Continuity Management System, BCMS)에 대한 국제표준인 ISO22301 인증을 획득했다고 3일 밝혔다.",
            },
            {
              title:
                "한국조선해양, '사업 연속성 관리체계' 인증 획득…ESG경영 강화",
              content:
                "HD현대 조선 중간 지주사인 한국조선해양(009540)이 국내 조선업계 최초로 사업 연속성에 대한 국제 인증을 획득했다. 한국조선해양은 최근 노르웨이선급협회(DNV)로부터 '사업 연속성 관리체계'(Business Continuity Management System, BCMS)에 대한 국제표준인 ISO22301 인증을 획득했다고 3일 밝혔다.",
            },
            {
              title:
                "한국조선해양, '사업 연속성 관리체계' 인증 획득…ESG경영 강화",
              content:
                "HD현대 조선 중간 지주사인 한국조선해양(009540)이 국내 조선업계 최초로 사업 연속성에 대한 국제 인증을 획득했다. 한국조선해양은 최근 노르웨이선급협회(DNV)로부터 '사업 연속성 관리체계'(Business Continuity Management System, BCMS)에 대한 국제표준인 ISO22301 인증을 획득했다고 3일 밝혔다.",
            },
          ],
        },
        {
          category: "IT 동향",
          news: [
            {
              title: "구글 클라우드, MWC서 통신 부문 신제품 발표",
              content:
                "구글 클라우드가 세계 최대 이동통신 전시회 'MWC 2023'에서 통신 부문 신제품을 발표했다고 2일 밝혔다. 구글 클라우드는 ‘통신 네트워크 자동화’, ‘통신 데이터 패브릭’, ‘통신 가입자 인사이트’ 등 세 가지 제품을 전 세계 지역에 프라이빗 프리뷰 버전으로 출시했다. 통합 클라우드 솔루션 형태로 제공되는 이번 신제품은 하이브리드 클라우드 네이티브 네트워크의 구축·배포·운영, 네트워크 데이터 수집 및 관리, 인공지능(AI) 및 분석 기반 고객 경험 향상을 지원한다.",
            },
            {
              title: "로봇 시장 커지는데…일할 사람이 없다",
              content:
                "[MT리포트]삼성·LG도 뛰어든 177조 로봇시장, 'K파워' 통할까 ③ [편집자주] 공상과학(SF) 영화 속 로봇은 더 이상 영화 속 이야기가 아니다. 로봇과 함께 하는 생활은 이미 시작됐다. 서비스 로봇 시장 규모는 2027년 177조원에 달할 전망이다. 차세대 먹거리를 찾는 기업들이 뛰어들기 충분한 규모다. 이재용 삼성전자 회장, 구광모 LG 회장 등 국내 대표 기업의 총수들은 미래 먹거리로 로봇을 낙점하고 투자를 확대하고 있다. 과연 한국 로봇산업은 글로벌 시장에서 제2의 '반도체 신화'를 쓸 수 있을까.",
            },
            {
              title: "구글 클라우드, MWC서 통신 부문 신제품 발표",
              content:
                "구글 클라우드가 세계 최대 이동통신 전시회 'MWC 2023'에서 통신 부문 신제품을 발표했다고 2일 밝혔다. 구글 클라우드는 ‘통신 네트워크 자동화’, ‘통신 데이터 패브릭’, ‘통신 가입자 인사이트’ 등 세 가지 제품을 전 세계 지역에 프라이빗 프리뷰 버전으로 출시했다. 통합 클라우드 솔루션 형태로 제공되는 이번 신제품은 하이브리드 클라우드 네이티브 네트워크의 구축·배포·운영, 네트워크 데이터 수집 및 관리, 인공지능(AI) 및 분석 기반 고객 경험 향상을 지원한다.",
            },
            {
              title: "로봇 시장 커지는데…일할 사람이 없다",
              content:
                "[MT리포트]삼성·LG도 뛰어든 177조 로봇시장, 'K파워' 통할까 ③ [편집자주] 공상과학(SF) 영화 속 로봇은 더 이상 영화 속 이야기가 아니다. 로봇과 함께 하는 생활은 이미 시작됐다. 서비스 로봇 시장 규모는 2027년 177조원에 달할 전망이다. 차세대 먹거리를 찾는 기업들이 뛰어들기 충분한 규모다. 이재용 삼성전자 회장, 구광모 LG 회장 등 국내 대표 기업의 총수들은 미래 먹거리로 로봇을 낙점하고 투자를 확대하고 있다. 과연 한국 로봇산업은 글로벌 시장에서 제2의 '반도체 신화'를 쓸 수 있을까.",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    // 로컬 스토리지에서 장바구니 아이템 불러오기
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      thisitems = JSON.parse(storedItems);
    }
  },
  methods: {
    toggleDropdown(index) {
      this.isOpen[index] = !this.isOpen[index];
    },
    selectAll() {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      const allSelected = [...checkboxes].every((checkbox) => checkbox.checked);

      checkboxes.forEach((checkbox) => {
        checkbox.checked = !allSelected;
      });
    },
    selectDel() {
      const updatedItems = JSON.parse(JSON.stringify(this.items)); // Create a deep copy

      updatedItems.forEach((category, categoryIndex) => {
        category.news = category.news.filter((item, itemIndex) => {
          const checkbox = document.getElementById(
            `item${categoryIndex}${itemIndex}`
          );
          return !checkbox || !checkbox.checked;
        });
      });

      this.items = updatedItems;
    },

    checknews() {
      const checkedItems = [];
      const checkboxes = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      checkboxes.forEach((checkbox) => {
        const id = checkbox.id;
        const categoryIndex = parseInt(id.charAt(4));
        const itemIndex = parseInt(id.substr(5));
        checkedItems.push(this.items[categoryIndex].news[itemIndex]);
      });

      console.log("Checked Items:", checkedItems);
    },
  },
};
</script>

<style scoped>
.ButtonArea {
  margin: 0px 50px;
  padding: 30px 0px;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
}

button {
  cursor: pointer;
  font-size: 1.2em;
  border: 3px solid #0096e7;
  border-radius: 50px;
  color: #0096e7;
  background-color: white;
  width: 150px;
  height: 50px;
  margin-right: 50px;
}

input[type="checkbox"] {
  min-width: 1.25rem;
  min-height: 1.25rem;
}
input[type="checkbox"]:checked {
  width: 1.25rem;
  height: 1.25rem;
}
.dropdownBox {
  font-size: 1.5em;
  margin: 0px 30px;
  margin-bottom: 50px;
}
.dropdown {
  padding: 10px 0px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: 100%;
}

.toggle {
  font-style: bold;
  padding: 10px;
  color: #0096e7;
  border-bottom: 1px solid #0096e7;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid #aaa;
  border-top: 0;
  max-height: 200px;
  overflow-y: auto;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #aaa;
}

input[type="checkbox"] {
  margin: 20px 10px;
}
.item-title {
  font-style: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px;
}

.item-content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 10px;
}
</style>

# 📱 Instagram Mockup Project

인스타그램 웹 클론 코딩 프로젝트 - 반응형 디자인을 적용한 인스타그램 UI 목업

> HTML, CSS, JavaScript를 활용하여 인스타그램 화면을 목업으로 구성한 프로젝트입니다.  
> 모바일 뷰포트를 고려한 반응형 웹 개발을 목표로 진행했습니다.

---

## ✨ 주요 기능

- 🏠 **피드 페이지**: 스토리 슬라이드, 게시물 피드, 추천 친구 목록
- 🔍 **탐색 페이지**: 그리드 레이아웃, 호버 효과, JSON 데이터 기반 동적 렌더링
- 🎬 **릴스 페이지**: 세로형 비디오 레이아웃, 스크롤 네비게이션, 비디오 제어
- 👤 **프로필 페이지**: 사용자 정보, 게시물 그리드, 팔로워/팔로잉 정보
- 📱 **반응형 디자인**: 데스크톱 & 모바일 최적화
- 🧩 **컴포넌트 기반**: 재사용 가능한 사이드바, 하단바

---

## 👥 팀 구성 및 역할

| 담당자 | 담당 페이지 | 주요 파일 |
|--------|-------------|-----------|
| **김다은** | 피드 페이지 | `index.html`, `js/feed.js`, `styles/feed.css` |
| **정윤서** | 탐색 페이지 | `explore.html`, `js/explore.js`, `styles/explore.css` |
| **조아영** | 릴스 페이지 & 통합 | `reels.html`, `js/reels.js`, `styles/reels.css` |
| **최희원** | 프로필 페이지 | `profile.html`, `styles/profile.css` |

---

## 🌿 브랜치 전략

```
main                      # 최종 배포 브랜치
├─ feature/feed          # 피드 페이지 작업
├─ feature/explore       # 탐색 페이지 작업
├─ feature/reels         # 릴스 페이지 작업
└─ feature/profile       # 프로필 페이지 작업
```

### 워크플로우
1. `feature/기능명` 브랜치 생성
2. 개발 및 커밋
3. Pull Request 생성
4. 코드 리뷰 및 승인
5. `main` 브랜치에 병합

---

## 💻 구현 화면

### 피드 페이지 (메인)


### 탐색 페이지


### 릴스 페이지


### 프로필 페이지


---

## 🛠 기술 스택

- **HTML5**: 시맨틱 마크업 (`<header>`, `<aside>`, `<main>`, `<section>`, `<article>`, `<nav>`)
- **CSS3**: Flexbox, Grid, CSS Variables, Media Queries
- **JavaScript (ES6+)**: Fetch API, DOM Manipulation, Event Handling

---

## 📂 프로젝트 구조

```
instagram-mockup-team5/
│
├─ index.html                # 피드 페이지 (메인)
├─ explore.html              # 탐색 페이지
├─ reels.html                # 릴스 페이지
├─ profile.html              # 프로필 페이지
│
├─ script.js                 # 공통 스크립트 (사이드바/하단바 로드)
│
├─ components/               # HTML 컴포넌트
│  ├─ sidebar.html          # 사이드바 (데스크톱)
│  └─ bottom-nav.html       # 하단 네비게이션 (모바일)
│
├─ js/                       # JavaScript 파일
│  ├─ feed.js               # 피드 페이지 (스토리 스크롤, 더보기)
│  ├─ explore.js            # 탐색 페이지 (그리드 렌더링)
│  └─ reels.js              # 릴스 페이지 (비디오 제어)
│
├─ styles/                   # CSS 스타일시트
│  ├─ reset.css             # 브라우저 기본 스타일 초기화
│  ├─ variables.css         # CSS 변수 (색상, 크기 등)
│  ├─ general.css           # 전역 스타일
│  ├─ main.css              # 메인 레이아웃
│  ├─ sidebar.css           # 사이드바 스타일
│  ├─ mobile.css            # 모바일 반응형
│  ├─ feed.css              # 피드 페이지
│  ├─ explore.css           # 탐색 페이지
│  ├─ reels.css             # 릴스 페이지
│  └─ profile.css           # 프로필 페이지
│
├─ assets/                   # 정적 리소스
│  ├─ icons/                # SVG/PNG 아이콘
│  ├─ images/               # 이미지 파일
│  └─ videos/               # 비디오 파일
│
└─ data/                     # JSON 데이터
   ├─ explore.json          # 탐색 페이지 데이터
   └─ reels.json            # 릴스 페이지 데이터
```

---

## 🔧 구현 세부사항

### HTML 구조 및 접근성
- 시맨틱 태그를 활용한 구조적 마크업
- 모든 이미지에 `alt` 속성 추가
- 버튼에 `aria-label` 사용
- 키보드 네비게이션 지원

### CSS 스타일링
- **레이아웃**: Flexbox (사이드바, 버튼, 스토리), CSS Grid (탐색/프로필 그리드)
- **스타일**: Instagram 폰트 스택, `border-radius`, `box-shadow`, hover 효과
- **반응형**: 모바일 우선 접근, 미디어 쿼리 활용

### 반응형 브레이크포인트

| 요소 | 모바일 (0~767px) | 데스크톱 (1024px+) |
|------|------------------|---------------------|
| 사이드바 | 숨김 | 표시 |
| 하단바 | 표시 | 숨김 |
| 추천 영역 | 숨김 | 표시 |

### JavaScript 기능
- 컴포넌트 동적 로드 (Fetch API)
- 스토리 스크롤 (좌우 버튼)
- JSON 데이터 기반 렌더링
- 이벤트 처리 (클릭, 스크롤, 호버)

### 리소스 최적화
- SVG 아이콘 사용 (확대 시 선명도 유지)
- `currentColor`로 아이콘 색상 제어
- 적절한 이미지 해상도 사용

---








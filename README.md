# 📱 Instagram Mockup Project

인스타그램 웹 클론 코딩 프로젝트 - 반응형 디자인을 적용한 인스타그램 UI 목업

## 🎯 프로젝트 소개

이 프로젝트는 Instagram의 주요 기능들을 웹으로 구현한 목업입니다. 
피드, 탐색, 릴스, 프로필 페이지를 포함하며, 데스크톱과 모바일 환경 모두를 지원합니다.

## ✨ 주요 기능

- 🏠 **피드 페이지**: 스토리, 게시물 피드, 추천 친구
- 🔍 **탐색 페이지**: 그리드 레이아웃의 탐색 콘텐츠
- 🎬 **릴스 페이지**: 세로형 비디오 콘텐츠
- 👤 **프로필 페이지**: 사용자 프로필 및 게시물
- 📱 **반응형 디자인**: 데스크톱 & 모바일 최적화
- 🧩 **컴포넌트 기반**: 재사용 가능한 사이드바, 하단바

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
│  ├─ feed.js               # 피드 페이지 전용 (스토리 스크롤, 더보기)
│  ├─ explore.js            # 탐색 페이지 전용 (그리드 렌더링)
│  └─ reels.js              # 릴스 페이지 전용 (비디오 제어)
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

## 🛠 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, CSS Variables, Media Queries
- **JavaScript (ES6+)**: Fetch API, DOM Manipulation, Event Handling
- **반응형 디자인**: 모바일 우선 접근 방식

## 👥 팀 구성 및 역할

| 담당자 | 역할 | 담당 페이지 |
|--------|------|-------------|
| **김다은** | 피드 페이지 개발 | `index.html`, `js/feed.js`, `styles/feed.css` |
| **정윤서** | 탐색 페이지 개발 | `explore.html`, `js/explore.js`, `styles/explore.css` |
| **조아영** | 릴스 페이지 개발 & 통합 | `reels.html`, `js/reels.js`, `styles/reels.css` |
| **최희원** | 프로필 페이지 개발 | `profile.html`, `styles/profile.css` |

## 🌿 브랜치 전략

각 페이지별로 독립적인 브랜치를 생성하여 작업한 뒤, 리뷰 후 `main` 브랜치에 병합합니다.

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

## 📝 코드 구조 설명

### 공통 스크립트 (`script.js`)

모든 페이지에서 로드되며, 사이드바와 하단 네비게이션을 동적으로 삽입합니다.

```javascript
// 모든 HTML 페이지에 포함
<script src="script.js" defer></script>
```

### 페이지별 스크립트

각 페이지는 전용 스크립트를 추가로 로드합니다.

```javascript
// 예: 피드 페이지
<script src="script.js" defer></script>       // 공통
<script src="js/feed.js" defer></script>      // 페이지 전용
```

### CSS 로드 순서

```html
<link rel="stylesheet" href="styles/reset.css" />      <!-- 1. 리셋 -->
<link rel="stylesheet" href="styles/variables.css" />  <!-- 2. 변수 -->
<link rel="stylesheet" href="styles/general.css" />    <!-- 3. 전역 -->
<link rel="stylesheet" href="styles/sidebar.css" />    <!-- 4. 컴포넌트 -->
<link rel="stylesheet" href="styles/mobile.css" />     <!-- 5. 반응형 -->
<link rel="stylesheet" href="styles/feed.css" />       <!-- 6. 페이지별 -->
```

## 🎨 디자인 시스템

### CSS 변수 (`styles/variables.css`)

프로젝트 전체에서 사용되는 색상, 크기, 간격 등을 변수로 관리합니다.

```css
:root {
  --primary-color: #000000;
  --background-color: #ffffff;
  --border-color: #dbdbdb;
  --text-color: #262626;
  /* ... */
}
```

### 반응형 브레이크포인트

- **Desktop**: 1024px 이상
- **Tablet**: 768px ~ 1023px
- **Mobile**: 767px 이하

## 🧩 컴포넌트 가이드

### 사이드바 (`components/sidebar.html`)

- 데스크톱에서 표시
- 네비게이션 메뉴 포함
- 다크모드 토글 등

### 하단 네비게이션 (`components/bottom-nav.html`)

- 모바일에서 표시
- 주요 메뉴 바로가기
- Fixed 포지션

## 📊 데이터 구조

### `data/explore.json`

```json
[
  {
    "src": "assets/images/explore-01.svg",
    "alt": "explore item",
    "likes": 1200,
    "comments": 45,
    "size": "tall",
    "badge": "video",
    "href": "#"
  }
]
```

### `data/reels.json`

```json
[
  {
    "id": 1,
    "videoSrc": "assets/videos/cake.mp4",
    "username": "cooking_master",
    "avatar": "assets/images/avatar.png",
    "description": "케이크 만들기",
    "likes": "2.4천",
    "comments": "123"
  }
]
```


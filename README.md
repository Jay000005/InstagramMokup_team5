# 📱 Instagram Mockup Project

인스타그램 웹 클론 코딩 프로젝트 - 반응형 디자인을 적용한 인스타그램 UI 목업

> JS 강의를 통해 자바스크립트를 학습하고, HTML과 CSS를 활용하여 인스타그램 화면을 목업으로 구성한 프로젝트입니다.  
> 모바일 뷰포트를 고려한 반응형 웹 개발을 목표로 진행했습니다.

## 📸 프로젝트 미리보기

### 데스크톱 화면
![데스크톱 메인 화면](screenshots/desktop-main.png)
<!-- 스크린샷을 screenshots/desktop-main.png 경로에 저장하세요 -->

### 모바일 화면
<p align="center">
  <img src="screenshots/mobile-main.png" width="300" alt="모바일 메인 화면">
</p>
<!-- 스크린샷을 screenshots/mobile-main.png 경로에 저장하세요 -->

---

## 🎯 프로젝트 목표

이 프로젝트는 Instagram의 주요 UI를 웹으로 구현하여 프론트엔드 개발 역량을 향상시키는 것을 목표로 합니다.

### 학습 목표
- ✅ 시맨틱 HTML을 활용한 구조적 마크업
- ✅ CSS를 이용한 반응형 웹 디자인 구현
- ✅ JavaScript로 동적 UI 구현 및 DOM 조작
- ✅ 컴포넌트 기반 설계 및 재사용성 향상
- ✅ Git을 활용한 협업 워크플로우 경험

### 습득 역량

| 역량 | 설명 |
|------|------|
| **HTML 마크업 기술** | 시맨틱 태그(`<header>`, `<main>`, `<aside>`, `<section>`)를 활용한 의미있는 구조 설계 |
| **CSS 스타일링 및 반응형 웹 구현** | Flexbox, Grid, Media Query를 활용한 반응형 레이아웃 구현 |
| **UI/UX 디자인 이해** | 실제 서비스의 사용자 경험을 분석하고 재현 |
| **DOM 구조 활용** | JavaScript를 이용한 동적 콘텐츠 렌더링 및 이벤트 처리 |
| **API 통신 로직 기초** | Fetch API를 활용한 JSON 데이터 로드 및 처리 |

---

## 💻 구현 화면

### 1. 피드 페이지 (메인)
![피드 페이지](screenshots/feed-page.png)
<!-- 피드 페이지 전체 스크린샷을 screenshots/feed-page.png에 저장하세요 -->

- 스토리 슬라이드 기능
- 게시물 피드
- 좋아요, 댓글, 공유 버튼
- 추천 친구 목록

### 2. 탐색 페이지
![탐색 페이지](screenshots/explore-page.png)
<!-- 탐색 페이지 스크린샷을 screenshots/explore-page.png에 저장하세요 -->

- 그리드 레이아웃 (반응형)
- 호버 시 좋아요/댓글 수 표시
- JSON 데이터 기반 동적 렌더링

### 3. 릴스 페이지
![릴스 페이지](screenshots/reels-page.png)
<!-- 릴스 페이지 스크린샷을 screenshots/reels-page.png에 저장하세요 -->

- 세로형 비디오 레이아웃
- 스크롤 네비게이션
- 비디오 제어 기능

### 4. 프로필 페이지
![프로필 페이지](screenshots/profile-page.png)
<!-- 프로필 페이지 스크린샷을 screenshots/profile-page.png에 저장하세요 -->

- 사용자 정보 표시
- 게시물 그리드
- 팔로워/팔로잉 정보

### 5. 반응형 디자인
<p align="center">
  <img src="screenshots/responsive-comparison.png" width="800" alt="반응형 비교">
</p>
<!-- 데스크톱/태블릿/모바일 화면을 나란히 비교한 이미지를 screenshots/responsive-comparison.png에 저장하세요 -->

---

## 🛠 개발 과정

### 1단계: HTML 구조 분석 및 설계
- Instagram UI 구조 분석
- 시맨틱 HTML 태그를 이용한 뼈대 구현
- 페이지별 영역 설계 (헤더, 사이드바, 메인, 푸터 등)

### 2단계: 시맨틱 태그를 이용한 마크업 구현
- `<header>`, `<main>`, `<aside>`, `<section>`, `<article>` 활용
- 시각적 요소 없이 구조적 마크업 완성
- 접근성(Accessibility) 고려

### 3단계: CSS 레이아웃 구성 및 스타일링
- CSS Reset으로 브라우저 기본 스타일 초기화
- CSS Variables로 디자인 시스템 구축
- Flexbox/Grid를 활용한 레이아웃 구현
- 실제 Instagram 디자인에 가깝게 스타일링

### 4단계: 반응형 미디어 쿼리 적용
- 모바일 퍼스트(Mobile-First) 접근 방식
- 768px, 1024px 브레이크포인트 설정
- 데스크톱: 사이드바 표시
- 모바일: 하단 네비게이션 표시

### 5단계: 리소스(아이콘, 이미지 등) 적용
- SVG 아이콘 최적화 및 적용
- 이미지 리소스 배치
- 비디오 파일 삽입

### 6단계: JavaScript 기능 구현
- 동적 컴포넌트 로드 (사이드바, 하단바)
- 스토리 스크롤 기능
- 탐색/릴스 페이지 JSON 데이터 렌더링
- 이벤트 핸들링 (클릭, 스크롤 등)

---

## ✨ 주요 기능

- 🏠 **피드 페이지**: 스토리, 게시물 피드, 추천 친구
- 🔍 **탐색 페이지**: 그리드 레이아웃의 탐색 콘텐츠
- 🎬 **릴스 페이지**: 세로형 비디오 콘텐츠
- 👤 **프로필 페이지**: 사용자 프로필 및 게시물
- 📱 **반응형 디자인**: 데스크톱 & 모바일 최적화
- 🧩 **컴포넌트 기반**: 재사용 가능한 사이드바, 하단바

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
├─ data/                     # JSON 데이터
│  ├─ explore.json          # 탐색 페이지 데이터
│  └─ reels.json            # 릴스 페이지 데이터
│
└─ screenshots/              # 프로젝트 스크린샷 (README용)
   ├─ desktop-main.png
   ├─ mobile-main.png
   ├─ feed-page.png
   ├─ explore-page.png
   ├─ reels-page.png
   ├─ profile-page.png
   └─ responsive-comparison.png
```

---

## 🚀 실행 방법

이 프로젝트는 `fetch()` API를 사용하므로 **로컬 서버가 필요**합니다.

### 방법 1: VSCode Live Server (추천)

1. VSCode에서 **Live Server** 확장 프로그램 설치
2. `index.html` 파일 우클릭
3. **"Open with Live Server"** 선택
4. 브라우저가 자동으로 열립니다 (`http://localhost:5500`)

### 방법 2: Python 내장 서버

```bash
# Python 3
python -m http.server 8000

# 브라우저에서 http://localhost:8000 접속
```

### 방법 3: Node.js http-server

```bash
# http-server 설치 (전역)
npm install -g http-server

# 서버 실행
http-server

# 브라우저에서 http://localhost:8080 접속
```

---

## 🛠 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, CSS Variables, Media Queries
- **JavaScript (ES6+)**: Fetch API, DOM Manipulation, Event Handling
- **반응형 디자인**: 모바일 우선 접근 방식

---

## 👥 팀 구성 및 역할

| 담당자 | 역할 | 담당 페이지 |
|--------|------|-------------|
| **김다은** | 피드 페이지 개발 | `index.html`, `js/feed.js`, `styles/feed.css` |
| **정윤서** | 탐색 페이지 개발 | `explore.html`, `js/explore.js`, `styles/explore.css` |
| **조아영** | 릴스 페이지 개발 & 통합 | `reels.html`, `js/reels.js`, `styles/reels.css` |
| **최희원** | 프로필 페이지 개발 | `profile.html`, `styles/profile.css` |

---

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

---

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

---

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

---

## 🧩 컴포넌트 가이드

### 사이드바 (`components/sidebar.html`)

- 데스크톱에서 표시
- 네비게이션 메뉴 포함
- 다크모드 토글 등

### 하단 네비게이션 (`components/bottom-nav.html`)

- 모바일에서 표시
- 주요 메뉴 바로가기
- Fixed 포지션

---

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

---

## 🔧 개발 가이드

### 새 페이지 추가하기

1. HTML 파일 생성 (예: `messages.html`)
2. JS 파일 생성 (`js/messages.js`)
3. CSS 파일 생성 (`styles/messages.css`)
4. HTML에 스크립트 추가:
   ```html
   <script src="script.js" defer></script>
   <script src="js/messages.js" defer></script>
   ```

### 컴포넌트 수정하기

`components/` 폴더의 HTML을 수정하면 모든 페이지에 자동 반영됩니다.

---

## 📦 제출 결과물

### 1. 웹 서비스 목업 기획 및 개발 문서
- ✅ README.md (본 문서)
- ✅ 프로젝트 구조 설명
- ✅ 개발 과정 및 기술 스택 정리

### 2. 인스타그램 UI 구현 결과물
- ✅ GitHub Repository: [레포지토리 URL]
- ✅ 배포 URL: [GitHub Pages 또는 Vercel 배포 URL]

### 3. 발표 자료
- 📊 프로젝트 소개 슬라이드
- 🎥 시연 영상 (각 페이지별 기능 시연)
- 📸 스크린샷 모음

---

## 🐛 알려진 이슈

- [ ] 프로필 페이지 JavaScript 미구현 (`js/profile.js` 필요)
- [ ] 다크모드 기능 부분 구현
- [ ] 실제 API 연동 필요

---

## 📌 향후 개선 사항

- [ ] JSON 데이터 확장 (users.json, stories.json, posts.json)
- [ ] 이미지 최적화 (WebP 변환)
- [ ] 접근성(A11y) 개선
- [ ] TypeScript 마이그레이션
- [ ] 컴포넌트 라이브러리 도입 (React/Vue)
- [ ] 실제 백엔드 API 연동

---

## 📄 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다.

---

## 🙏 감사의 말

Instagram UI를 참고하여 제작된 목업 프로젝트입니다.

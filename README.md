# 📱 Instagram Mockup Project

인스타그램 웹 클론 코딩 프로젝트 - 반응형 디자인을 적용한 인스타그램 UI 목업

> JS 강의를 통해 자바스크립트를 학습하고, HTML과 CSS를 활용하여 인스타그램 화면을 목업으로 구성한 프로젝트입니다.  
> 모바일 뷰포트를 고려한 반응형 웹 개발을 목표로 진행했습니다.

## 📸 프로젝트 미리보기

### 데스크톱 화면


### 모바일 화면


---

## 💻 구현 화면

### 1. 피드 페이지 (메인)


- 스토리 슬라이드 기능
- 게시물 피드
- 좋아요, 댓글, 공유 버튼
- 추천 친구 목록

### 2. 탐색 페이지


- 그리드 레이아웃 (반응형)
- 호버 시 좋아요/댓글 수 표시
- JSON 데이터 기반 동적 렌더링

### 3. 릴스 페이지


- 세로형 비디오 레이아웃
- 스크롤 네비게이션
- 비디오 제어 기능

### 4. 프로필 페이지


- 사용자 정보 표시
- 게시물 그리드
- 팔로워/팔로잉 정보

### 5. 반응형 디자인

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
├─ explore.json          # 탐색 페이지 데이터
└─ reels.json            # 릴스 페이지 데이터

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








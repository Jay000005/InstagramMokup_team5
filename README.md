# Instagram Mockup Project

인스타그램 사이트 목업 만들기

## 🛠 협업 규칙

### 브랜치 전략

각 페이지별로 독립적인 브랜치를 생성하여 작업한 뒤, 검토 후 `main` 브랜치에 합칩니다.

- **main**: 최종 배포 및 완성된 코드가 올라가는 브랜치
- **feature/feed**: 피드 페이지 작업
- **feature/explore**: 탐색 페이지 작업
- **feature/reels**: 릴스 페이지 작업
- **feature/profile**: 프로필 페이지 작업
- **workflow**: `feature` 브랜치 → `PR` 생성 → 리뷰 및 승인 → `Merge`

## 👥 역할 분담
| 담당자 | 역할 | 작업 내용 |
| --- | --- | --- |
| **김다은** | **홈(피드) 페이지** |  |
| **정윤서** | **탐색 페이지** |  |
| **조아영** | **릴스 페이지 및 통합** |  |
| **최희원** | **프로필 페이지** |  |

---

## 📂 폴더 구조

```text
instagram-pc/
├─ index.html
├─ feed.html
├─ explore.html
├─ reels.html
├─ profile.html
│
├─ assets/
│  ├─ icons/
│  └─ images/
│
├─ styles/
│  ├─ general.css
│  ├─ layout.css
│  ├─ header.css
│  ├─ side.css
│  ├─ feed.css
│  ├─ explore.css
│  ├─ reels.css
│  └─ profile.css
│
├─ js/
│  ├─ common.js
│  ├─ feed.js
│  ├─ explore.js
│  ├─ reels.js
│  └─ profile.js
│
├─ data/
│  ├─ users.json
│  ├─ stories.json
│  ├─ posts.json
│  ├─ explore.json
│  └─ reels.json
│
└─ components/
   ├─ sidebar.html
   ├─ side-menu.html
   ├─ post-card.html
   └─ story-item.html

# InstagramMokup_team5
## 협업 규칙 
기준 폴더는 29.instagram로 간다. PC 화면 레이아웃(헤더·메인·사이드)은 이미 거기 있으니까 그걸 그대로 쓴다.

페이지는 HTML 전환 방식으로 만든다.

feed.html / explore.html / profile.html / reels.html 이렇게 페이지를 나눈다.

각 페이지는 헤더랑 사이드 메뉴는 그대로 두고, 가운데 내용만 바꾼다.

instagram-mockup-main은 참고용이다.

여기서:
- 피드 구조
- 탐색 그리드
- 프로필 화면 구성
- 데이터(json)나 JS 로직

이런 것만 가져와서 29.instagram 구조 안에 맞게 끼워 넣는다.

파트 분담은 페이지 기준으로 한다.

- feed 담당 → feed.html + feed.css + feed.js

- explore 담당 → explore.html + explore.css + explore.js

- profile 담당 → profile.html + profile.css + profile.js

- reels 담당 → reels.html + reels.css + reels.js

헤더, 사이드 메뉴, 공통 CSS는 통합 담당만 수정한다. 각자는 자기 페이지 파일만 PR 보낸다.

요약하면

PC 틀은 29.instagram 그대로 쓰고,
모바일 mockup은 내용만 참고해서 가져오고,
각자 한 페이지씩 맡아서 만든다.

### 폴더 구조 
```
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
│  ├─ sidebar.css
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
```

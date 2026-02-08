// 릴스 데이터 로드 함수
async function loadReels() {
  try {
    const response = await fetch('data/reels.json'); 
    const reelsData = await response.json();
    
    const container = document.querySelector('.reels-container');
    container.innerHTML = ''; // 기존 HTML 비우기

    reelsData.forEach(data => {
      // 1. HTML 구조를 백틱( ` ) 안에 통째로 넣습니다.
      const reelHTML = `
        <article class="reel-wrapper">
            <div class="reel-video-card">
                <video src="${data.videoSrc}" loop muted autoplay></video>
                <div class="reel-overlay">
                    <div class="user-info">
                        <img src="${data.userProfile}" class="pic" alt="프로필">
                        <span class="name">${data.userName}</span>
                        <button class="follow">${data.isFollowing ? '팔로잉' : '팔로우'}</button>
                    </div>
                    <div class="desc">${data.description}</div>
                </div>
            </div>

            <div class="reel-actions">
                <button class="action-btn" data-tooltip="좋아요">
                  <img src="assets/icons/heart.svg" alt="좋아요"> 
                  <span>${data.likes}</span>
                </button>
                <button class="action-btn" data-tooltip="댓글">
                  <img src="assets/icons/comment.svg" alt="댓글"> 
                  <span>${data.comments}</span>
                </button>
                <button class="action-btn" data-tooltip="리포스트">
                  <img src="assets/icons/repost.svg" alt="리포스트"> 
                  <span>${data.reposts}</span>
                </button>
                <button class="action-btn" data-tooltip="공유하기">
                  <img src="assets/icons/share.svg" alt="공유하기"> 
                </button>
                <button class="action-btn" data-tooltip="저장">
                  <img src="assets/icons/bookmark.svg" alt="저장"> 
                </button>
                <button class="action-btn" data-tooltip="더보기">
                  <img src="assets/icons/more.svg" alt="더보기"> 
                </button>
            </div>
        </article>
      `;
      // 2. 컨테이너에 하나씩 추가
      container.insertAdjacentHTML('beforeend', reelHTML);
    });

    // 3. 영상 재생 관련 로직 (선택사항: 첫 번째 영상 자동 재생)
    const firstVideo = container.querySelector('video');
    if (firstVideo) firstVideo.play();

  } catch (error) {
    console.error('데이터 로드 실패:', error);
  }
}


// 스크롤 제어 함수
function initScrollControl() {
  const container = document.querySelector('.content-area'); // 스크롤이 발생하는 부모 요소
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');

  // 다음 버튼 클릭 시
  btnNext.addEventListener('click', () => {
    container.scrollBy({
      top: window.innerHeight, // 화면 높이만큼 아래로
      behavior: 'smooth'      // 부드럽게 이동
    });
  });

  // 이전 버튼 클릭 시
  btnPrev.addEventListener('click', () => {
    container.scrollBy({
      top: -window.innerHeight, // 화면 높이만큼 위로
      behavior: 'smooth'
    });
  });
}

// 3. 실제 실행: 모든 준비가 끝나면 순서대로 실행
document.addEventListener('DOMContentLoaded', async () => {
    await loadReels();      
    initScrollControl();    
});
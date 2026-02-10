document.addEventListener('DOMContentLoaded', () => {
  /* =========================
      sidebar / bottom-nav 공통 삽입
  ========================= */
  
  // 1. 사이드바 삽입
  const sidebarEl = document.getElementById('sidebar');
  if (sidebarEl) {
      fetch('/sidebar.html')
      .then(res => {
        if (!res.ok) throw new Error('sidebar.html 로드 실패');
        return res.text();
      })
      .then(html => {
        sidebarEl.innerHTML = html;
      })
      .catch(err => console.error(err));
  }

  // 2. bottom-nav 삽입
  const bottomNavEl = document.getElementById('bottom-nav');
  if (bottomNavEl) {
    fetch('/bottom-nav.html')
      .then(res => {
        if (!res.ok) throw new Error('bottom-nav.html 로드 실패');
        return res.text();
      })
      .then(html => {
        bottomNavEl.innerHTML = html;
      })
      .catch(err => console.error(err));
  }
});
/* =========================
   다크모드 토글
========================= */
const toggleThemeBtn = document.querySelector('.header__theme-button');

function setInitialTheme(themeKey) {
  if (themeKey === 'dark') {
    document.documentElement.classList.add('darkTheme');
  } else {
    document.documentElement.classList.remove('darkTheme');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // 초기 테마
  setInitialTheme(localStorage.getItem('theme'));

  // 버튼이 있을 때만 이벤트 등록
  if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('darkTheme');

      if (document.documentElement.classList.contains('darkTheme')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }

  /* =========================
     sidebar / bottom-nav 공통 삽입
  ========================= */
  const sidebarEl = document.getElementById('sidebar');
  if (sidebarEl) {
    fetch('sidebar.html')
      .then(res => res.text())
      .then(html => {
        sidebarEl.innerHTML = html;
      });
  }

  const bottomNavEl = document.getElementById('bottom-nav');
  if (bottomNavEl) {
    fetch('bottom-nav.html')
      .then(res => res.text())
      .then(html => {
        bottomNavEl.innerHTML = html;
      });
  }
});

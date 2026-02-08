// sidebar, bottom-nav 공통 삽입

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

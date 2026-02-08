// 공통 사이드바
async function loadComponent(id, url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("네트워크 응답이 좋지 않습니다.");
        const data = await response.text();
        document.getElementById(id).innerHTML = data;
        
        // 사이드바 로드 후 현재 페이지 활성화 표시 (옵션)
        highlightActiveMenu();
    } catch (error) {
        console.error("컴포넌트를 불러오는 데 실패했습니다:", error);
    }
}

// 현재 페이지 경로에 따라 메뉴 아이콘 활성화
function highlightActiveMenu() {
    const currentPage = window.location.pathname.split("/").pop();
    const navItems = document.querySelectorAll('.nav-item a');
    
    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.parentElement.classList.add('active');
        }
    });
}

// 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("sidebar", "sidebar.html");
});
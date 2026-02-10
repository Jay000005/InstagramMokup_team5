// const toggleThemeBtn = document.querySelector('.header__theme-button');

// document.onload = setInitialTheme(localStorage.getItem('theme'));
// function setInitialTheme(themeKey) {
//     if (themeKey === 'dark') {
//         document.documentElement.classList.add('darkTheme');
//     } else {
//         document.documentElement.classList.remove('darkTheme');
//     }
// }

// toggleThemeBtn.addEventListener('click', () => {
//     document.documentElement.classList.toggle('darkTheme');

//     if (document.documentElement.classList.contains('darkTheme')) {
//         localStorage.setItem('theme', 'dark');
//     } else {
//         localStorage.setItem('theme', 'light');
//     }
// });


const btn = document.querySelector(".more-btn");
const caption = btn.previousElementSibling;
btn.addEventListener("click", () => caption.classList.toggle("caption-text-open"));


const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const storyBar = document.querySelector('.story-bar');

nextBtn.onclick = () => {
    storyBar.scrollBy({ left: 300, behavior: 'smooth' });
};

prevBtn.onclick = () => {
    storyBar.scrollBy({ left: -300, behavior: 'smooth' });
};

storyBar.onscroll = () => {
    prevBtn.style.display = storyBar.scrollLeft > 0 ? 'flex' : 'none';
    
    const isEnd = storyBar.scrollLeft + storyBar.clientWidth >= storyBar.scrollWidth - 10;
    nextBtn.style.display = isEnd ? 'none' : 'flex';
};

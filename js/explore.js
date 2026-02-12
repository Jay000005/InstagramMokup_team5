const grid = document.getElementById("exploreGrid");
const modal = document.getElementById("exploreModal");
const modalMedia = document.getElementById("exploreModalMedia");
const modalComments = document.getElementById("exploreModalComments");
const modalLikes = document.getElementById("exploreModalLikes");
const modalCount = document.getElementById("exploreModalCount");
const modalAuthor = document.getElementById("exploreModalAuthor");
const inlineExploreData = document.getElementById("exploreData");
let activeItem = null;

function sizeClass(size) {
    if (size === "tall") return "explore__item--tall";
    if (size === "wide") return "explore__item--wide";
    return "";
}

function mediaClass(mediaType) {
    if (mediaType === "reel") return "explore__item--reel";
    if (mediaType === "photo") return "explore__item--photo";
    if (mediaType === "carousel") return "explore__item--carousel";
    return "";
}

function renderBadge(mediaType) {
    if (mediaType === "reel") {
        return `
            <span class="explore__badge explore__badge--reel" aria-label="reel">
                <img src="assets/icons/reels.svg" alt="reel" />
            </span>
        `;
    }

    if (mediaType === "carousel") {
        return `<span class="explore__badge explore__badge--carousel" aria-label="carousel"></span>`;
    }

    return "";
}

function formatCount(value) {
    return Number(value ?? 0).toLocaleString("ko-KR");
}

function defaultComments(item) {
    const title = item.alt || "재밌는 게시물";
    return [
        { user: "daily_zip", text: `${title} 진짜 유용하네요.` },
        { user: "mood_93", text: "저장하고 따라해볼게요!" },
        { user: "today.pick", text: "다음 편도 기다릴게요 👀" }
    ];
}

function renderComments(comments) {
    if (!modalComments) return;

    modalComments.innerHTML = comments
        .map(
            (comment) => `
                <article class="explore-modal__comment">
                    <strong>${comment.user}</strong>
                    <p>${comment.text}</p>
                </article>
            `
        )
        .join("");
}

function renderModalMedia(item) {
    if (!modalMedia) return;

    if (item.mediaType === "reel" && item.videoSrc) {
        modalMedia.innerHTML = `
            <video src="${item.videoSrc}" controls autoplay muted loop playsinline></video>
        `;
        return;
    }

    modalMedia.innerHTML = `
        <img src="${item.src}" alt="${item.alt || "explore item"}" />
    `;
}

function openModal(item) {
    if (!modal) return;
    activeItem = item;

    renderModalMedia(item);
    renderComments(item.commentList || defaultComments(item));

    if (modalLikes) modalLikes.textContent = `좋아요 ${formatCount(item.likes)}개`;
    if (modalCount) modalCount.textContent = `댓글 ${formatCount(item.comments)}개`;
    if (modalAuthor) modalAuthor.textContent = item.author || "instagram_user";

    modal.classList.add("explore-modal--open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("explore-modal-open");
}

function closeModal() {
    if (!modal) return;
    activeItem = null;
    modal.classList.remove("explore-modal--open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("explore-modal-open");
}

function bindModalEvents() {
    if (!modal) return;

    modal.addEventListener("click", (event) => {
        if (event.target.closest("[data-close-modal]")) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && activeItem) {
            closeModal();
        }
    });
}

async function loadExplore() {
    if (!grid) return;

    let items = [];
    try {
        const res = await fetch("data/explore.json");
        if (!res.ok) throw new Error("Failed to load explore.json");
        items = await res.json();
    } catch (error) {
        if (inlineExploreData?.textContent) {
            items = JSON.parse(inlineExploreData.textContent);
        } else {
            throw error;
        }
    }

    grid.innerHTML = "";

    items.forEach((item) => {
        const a = document.createElement("a");
        const classes = ["explore__item", sizeClass(item.size), mediaClass(item.mediaType)];
        a.className = classes.filter(Boolean).join(" ");
        a.href = item.href || "#";

        a.innerHTML = `
            ${renderBadge(item.mediaType)}
            <img src="${item.src}" alt="${item.alt || "explore item"}" />
            <div class="explore__overlay">
                <span class="explore__metric">
                    <img src="assets/icons/heart.svg" alt="likes" />
                    ${item.likes ?? 0}
                </span>
                <span class="explore__metric">
                    <img src="assets/icons/comment.svg" alt="comments" />
                    ${item.comments ?? 0}
                </span>
            </div>
        `;

        a.addEventListener("click", (event) => {
            event.preventDefault();
            openModal(item);
        });

        grid.appendChild(a);
    });
}

async function init() {
    try {
        bindModalEvents();
        await loadExplore();
    } catch (err) {
        console.error(err);
    }
}

init();

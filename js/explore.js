const grid = document.getElementById("exploreGrid");
const layout = document.getElementById("exploreLayout");
const navToggle = document.getElementById("exploreNavToggle");
const navScrim = document.getElementById("exploreNavScrim");

function sizeClass(size) {
    if (size === "tall") return "explore__item--tall";
    if (size === "wide") return "explore__item--wide";
    return "";
}

function badgeLabel(badge) {
    if (badge === "video") return "VIDEO";
    if (badge === "multi") return "MULTI";
    return "";
}

async function loadExplore() {
    if (!grid) return;

    const res = await fetch("data/explore.json");
    if (!res.ok) throw new Error("Failed to load explore.json");

    const items = await res.json();
    grid.innerHTML = "";

    items.forEach((item) => {
        const a = document.createElement("a");
        a.className = ["explore__item", sizeClass(item.size)].filter(Boolean).join(" ");
        a.href = item.href || "#";

        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.alt || "explore item";

        const overlay = document.createElement("div");
        overlay.className = "explore__overlay";
        overlay.innerHTML = `
            <span class="explore__metric">
                <img src="assets/icons/heart.svg" alt="likes" />
                ${item.likes ?? 0}
            </span>
            <span class="explore__metric">
                <img src="assets/icons/comment.svg" alt="comments" />
                ${item.comments ?? 0}
            </span>
        `;

        if (item.badge) {
            const badge = document.createElement("span");
            badge.className = "explore__badge";
            badge.textContent = badgeLabel(item.badge);
            a.appendChild(badge);
        }

        a.appendChild(img);
        a.appendChild(overlay);
        grid.appendChild(a);
    });
}

function bindNavToggle() {
    if (!layout || !navToggle || !navScrim) return;

    const setOpen = (open) => {
        layout.classList.toggle("explore-layout--nav-open", open);
        navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    };

    navToggle.addEventListener("click", () => {
        const isOpen = layout.classList.contains("explore-layout--nav-open");
        setOpen(!isOpen);
    });

    navScrim.addEventListener("click", () => setOpen(false));
}

async function init() {
    try {
        bindNavToggle();
        await loadExplore();
    } catch (err) {
        console.error(err);
    }
}

init();

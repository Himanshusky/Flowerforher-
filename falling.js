function createFallingItem(type) {
    const item = document.createElement("div");
    item.classList.add("falling");
    item.innerHTML = type === "heart" ? "💖" : "🌸";

    item.style.left = Math.random() * 100 + "vw";
    item.style.animationDuration = (Math.random() * 3 + 3) + "s";
    item.style.fontSize = (Math.random() * 20 + 20) + "px";

    document.body.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 7000);
}

// Create hearts and roses
setInterval(() => createFallingItem("heart"), 400);
setInterval(() => createFallingItem("rose"), 700);
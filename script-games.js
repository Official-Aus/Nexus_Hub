const gamePlayer = document.getElementById("gamePlayer");
const gameFrame = document.getElementById("gameFrame");

// Add click listeners to all game images
document.querySelectorAll("#games img").forEach(game => {
    game.addEventListener("click", () => {
        const src = game.dataset.game;
        gameFrame.src = src;
        gamePlayer.style.display = "flex";
    });
});

// Close game button
document.getElementById("closeGame").addEventListener("click", () => {
    gameFrame.src = "";
    gamePlayer.style.display = "none";
});

// Reload game button
document.getElementById("reloadGame").addEventListener("click", () => {
    gameFrame.src = gameFrame.src;
});

// Fullscreen button
document.getElementById("fullscreenGame").addEventListener("click", () => {
    if (gameFrame.requestFullscreen) {
        gameFrame.requestFullscreen();
    }
});
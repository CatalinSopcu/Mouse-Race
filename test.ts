import { ScoreCounter } from "./Common/ScoreCounter";
import { Player } from "./Common/Player";
import { Canvas } from "./Common/RenderComponents/Canvas";
const startContainer = document.querySelector(".start_container") as HTMLElement;

startContainer.addEventListener("click", function () {
    startContainer.classList.add("hidden");
    setTimeout(function () {
        const scoreCounter = new ScoreCounter();
        scoreCounter.startCounter();

        startContainer.style.display = "none";
        const playContainer = document.querySelector(".play_container") as HTMLElement;
        playContainer.style.display = "flex";

        const canvasObj = new Canvas();
        const player = new Player();

        setInterval(() => {
            canvasObj.clear();
            player.render();
        }, 5);

    }, 1000);
});
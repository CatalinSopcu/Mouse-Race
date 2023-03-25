import { ScoreCounter } from "./Common/ScoreCounter";
import { Random } from "./Common/GameComponents/Random";
import { Player } from "./Common/Player";
import { Canvas } from "./Common/RenderComponents/Canvas";
import { Escape } from "./Common/GameComponents/Escape";
import { Chase } from "./Common/GameComponents/Chase";
const startContainer = document.querySelector(".start_container") as HTMLElement;

startContainer.addEventListener("click", function () {
    startContainer.classList.add("hidden");
    setTimeout(function () {
        const scoreCounter = new ScoreCounter();
        scoreCounter.startCounter();

        startContainer.style.display = "none";
        const playContainer = document.querySelector(".play_container") as HTMLElement;
        playContainer.style.display = "flex";

        const random = new Random();
        const escape = new Escape();
        const chase = new Chase();
        const canvasObj = new Canvas();
        const player = new Player();

        setInterval(() => {
            canvasObj.clear();
            player.render();
            random.render();
            escape.render();
            chase.render();
        }, 5);

    }, 1000);
});
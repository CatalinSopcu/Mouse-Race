import { Random } from "./Common/GameComponents/Random";
import { Player } from "./Common/Player";
import { Canvas } from "./Common/RenderComponents/Canvas";
import { Escape } from "./Common/GameComponents/Escape";
import { Chase } from "./Common/GameComponents/Chase";
import { UIManager } from "./Common/UIManager";
const startContainer = document.querySelector(".start_container") as HTMLElement;

startContainer.addEventListener("click", function () {
    var uiManager = UIManager.getInstance();
    uiManager.startGame();
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
});
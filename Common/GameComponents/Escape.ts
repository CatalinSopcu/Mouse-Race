import { Element } from "./Element";
import { Transform } from "../RenderComponents/Transform";
import { Player } from "../Player";
import { Canvas } from "../RenderComponents/Canvas";
import { Vector2 } from "../RenderComponents/Vector2";
import { ElementsConstants } from "../Constants/ElementsConstants";
import { CanvasConstants } from "../Constants/CanvasConstants";
import { UIManager } from "../UIManager";

export class Escape extends Element {
    protected Transform: Transform = new Transform();
    protected Player: Player = new Player();
    protected Canvas: Canvas = new Canvas();

    private CanSpawn: boolean = false;

    constructor() {
        super();
        this.spawn();
        setTimeout(() => {
            this.CanSpawn = true;
            this.Transform.setColor(ElementsConstants.ESCAPE_COLOR);
        }, ElementsConstants.SPAWN_TIME);
    }

    public override render(): void {
        if (!this.CanSpawn) {
            super.draw();
            return;
        }
        if (this.Transform.collide(this.Player.getTransform())) {
            this.onCollision();
        }
        this.draw();
    }

    protected override onCollision(): void {
        console.log("A collision with an escape element has occur.");
        var uiManager = UIManager.getInstance();
        uiManager.addScore(ElementsConstants.ESCAPE_POINTS);
        this.spawn();
    }

    protected override draw() {
        const objPos = this.Transform.getPosition();
        const objSize = this.Transform.getSize();
        const objColor = this.Transform.getColor();

        const renderingContext = this.Canvas.getCanvasRenderingContext();
        renderingContext.fillStyle = objColor;
        renderingContext.beginPath();
        renderingContext.rect(objPos.X + objSize.X / 3, objPos.Y, objSize.X / 3, objSize.Y); // Vertical rectangle
        renderingContext.rect(objPos.X, objPos.Y + objSize.Y / 3, objSize.X, objSize.Y / 3); // Horizontal rectangle
        renderingContext.fill();
    }
}
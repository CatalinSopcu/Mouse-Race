import { Element } from "./Element";
import { Transform } from "../RenderComponents/Transform";
import { Player } from "../Player";
import { Canvas } from "../RenderComponents/Canvas";
import { Vector2 } from "../RenderComponents/Vector2";
import { ElementsConstants } from "../Constants/ElementsConstants";
import { CanvasConstants } from "../Constants/CanvasConstants";
import { UIManager } from "../UIManager";

export class Chase extends Element{
    protected Transform: Transform = new Transform();
    protected Player: Player = new Player();
    protected Canvas: Canvas = new Canvas();

    private CanSpawn: boolean = false;

    constructor() {
        super();
        this.spawn();
        setTimeout(() => {
            this.CanSpawn = true;
            this.Transform.setColor(ElementsConstants.CHASE_COLOR);
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
        console.log("A collision with an chase element has occur.");
        var uiManager = UIManager.getInstance();
        uiManager.endGame();
    }

    protected override draw() {
        const objPos = this.Transform.getPosition();
        const objSize = this.Transform.getSize();
        const objColor = this.Transform.getColor();

        const renderingContext = this.Canvas.getCanvasRenderingContext();
        renderingContext.fillStyle = objColor;
        renderingContext.beginPath();
        renderingContext.moveTo(objPos.X + objSize.X / 4, objPos.Y);
        renderingContext.lineTo(objPos.X + 3 * objSize.X / 4, objPos.Y);
        renderingContext.lineTo(objPos.X + objSize.X, objPos.Y + objSize.Y / 4);
        renderingContext.lineTo(objPos.X + objSize.X, objPos.Y + 3 * objSize.Y / 4);
        renderingContext.lineTo(objPos.X + 3 * objSize.X / 4, objPos.Y + objSize.Y);
        renderingContext.lineTo(objPos.X + objSize.X / 4, objPos.Y + objSize.Y);
        renderingContext.lineTo(objPos.X, objPos.Y + 3 * objSize.Y / 4);
        renderingContext.lineTo(objPos.X, objPos.Y + objSize.Y / 4);
        renderingContext.closePath();
        renderingContext.fill();
    }

    protected update() {
        
    }
}
import { Element } from "./Element";
import { Transform } from "../RenderComponents/Transform";
import { Player } from "../Player";
import { Canvas } from "../RenderComponents/Canvas";
import { Vector2 } from "../RenderComponents/Vector2";
import { ElementsConstants } from "../Constants/ElementsConstants";
import { CanvasConstants } from "../Constants/CanvasConstants";

export class Random extends Element {
    protected Transform: Transform = new Transform();
    protected Player: Player = new Player();
    protected Canvas: Canvas = new Canvas();

    constructor() {
        super();
        this.spawn();
        this.Transform.setColor(ElementsConstants.RANDOM_COLOR);
    }

    public override render(): void {
        if (this.Transform.collide(this.Player.getTransform())) {
            this.onCollision();
        }
        this.draw();
    }

    protected override onCollision(): void {
        console.log("A collision with an random element has occur.");
    }

    protected override draw() {
        const objPos = this.Transform.getPosition();
        const objSize = this.Transform.getSize();
        const objColor = this.Transform.getColor();

        const renderingContext = this.Canvas.getCanvasRenderingContext();
        renderingContext.fillStyle = objColor;
        renderingContext.beginPath();
        renderingContext.moveTo(objPos.X + objSize.X / 2, objPos.Y);
        renderingContext.lineTo(objPos.X + objSize.X, objPos.Y + objSize.Y / 2.5);
        renderingContext.lineTo(objPos.X + 4 * objSize.X / 5, objPos.Y + objSize.Y);
        renderingContext.lineTo(objPos.X + objSize.X / 5, objPos.Y + objSize.Y);
        renderingContext.lineTo(objPos.X, objPos.Y + objSize.Y / 2.5);
        renderingContext.closePath();
        renderingContext.fill();
    }
}
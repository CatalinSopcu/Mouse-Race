import { Element } from "./Element";
import { Transform } from "../RenderComponents/Transform";
import { Player } from "../Player";
import { Canvas } from "../RenderComponents/Canvas";
import { Vector2 } from "../RenderComponents/Vector2";

export class Escape extends Element {
    protected Transform: Transform = new Transform();
    protected Player: Player = new Player();
    protected Canvas: Canvas = new Canvas();

    constructor() {
        super();
        this.Transform.setPosition(new Vector2(150, 120));
        this.Transform.setSize(new Vector2(20, 20));
        this.Transform.setColor("orange");
    }

    public override render(): void {
        if (this.Transform.collide(this.Player.getTransform())) {
            this.onCollision();
        }

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

    protected override onCollision(): void {
        console.log("A collision with an escape element has occur.");
    }
}
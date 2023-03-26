import { Transform } from "../RenderComponents/Transform";
import { Player } from "../Player";
import { Canvas } from "../RenderComponents/Canvas";
import { Vector2 } from "../RenderComponents/Vector2";
import { ElementsConstants } from "../Constants/ElementsConstants";
import { CanvasConstants } from "../Constants/CanvasConstants";
import { IRendable } from "../Interfaces/IRendable";

export abstract class Element implements IRendable {
    protected Transform: Transform = new Transform(); 
    protected Player: Player = new Player();
    protected Canvas: Canvas = new Canvas();

    constructor() {
        this.Transform.setColor(ElementsConstants.UNKNOWN_COLOR);
    }

    public render(): void {
        if (this.Transform.collide(this.Player.getTransform())) {
            this.onCollision();
        }
        this.draw();
    }

    protected onCollision(): void {
         console.log("A collision with an element has occur.");
    }

    protected draw() {
        const renderingContext = this.Canvas.getCanvasRenderingContext();
        const objPos = this.Transform.getPosition();
        const objSize = this.Transform.getSize();
        const objColor = this.Transform.getColor();

        renderingContext.lineWidth = 2;
        renderingContext.strokeStyle = objColor;

        renderingContext.strokeRect(objPos.X, objPos.Y, objSize.X, objSize.Y);
    }

    protected spawn() {
        const randomSizeNumber = Math.floor(Math.random() * (ElementsConstants.MAX_SIZE - ElementsConstants.MIN_SIZE)) + ElementsConstants.MIN_SIZE;
        const objSize = new Vector2(randomSizeNumber, randomSizeNumber);
        this.Transform.setSize(objSize);

        const randomPosX = Math.floor(Math.random() * (CanvasConstants.WIDTH - randomSizeNumber)) + 1;
        const randomPosY = Math.floor(Math.random() * (CanvasConstants.HEIGHT - randomSizeNumber)) + 1;
        const objPosition = new Vector2(randomPosX, randomPosY);
        this.Transform.setPosition(objPosition);
    }
}
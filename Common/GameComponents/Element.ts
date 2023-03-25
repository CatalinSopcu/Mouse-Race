import { Transform } from "../RenderComponents/Transform";
import { Player } from "../Player";
import { Canvas } from "../RenderComponents/Canvas";
import { IRendable } from "../Interfaces/IRendable";

export abstract class Element implements IRendable {
    protected Transform: Transform = new Transform(); 
    protected Player: Player = new Player();
    protected Canvas: Canvas = new Canvas();

    constructor() { }

    public render(): void {
        if (this.Transform.collide(this.Player.getTransform())) {
            this.onCollision();
        }
        const renderingContext = this.Canvas.getCanvasRenderingContext();
        const objPos = this.Transform.getPosition();
        const objSize = this.Transform.getSize();
        const objColor = this.Transform.getColor();

        renderingContext.lineWidth = 2;
        renderingContext.strokeStyle = 'black'; //pune toate culorile in ElementsConstants

        renderingContext.strokeRect(objPos.X, objPos.Y, objSize.X, objSize.Y);
    }

    protected onCollision(): void {
         console.log("A collision with an element has occur.");
    }
}
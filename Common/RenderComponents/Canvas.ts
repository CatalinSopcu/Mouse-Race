import { Transform } from "../RenderComponents/Transform";
import { CanvasConstants } from "../Constants/CanvasConstants";

export class Canvas {
    private Canvas: HTMLCanvasElement;

    constructor() {
        this.Canvas = document.querySelector('canvas') as HTMLCanvasElement;
        this.Canvas.width = CanvasConstants.WIDTH;
        this.Canvas.height = CanvasConstants.HEIGHT;
    }

    public draw(transform: Transform): void {
        const objPos = transform.getPosition();
        const objSize = transform.getSize();
        const objColor = transform.getColor();
        const ctx = this.Canvas.getContext('2d') as CanvasRenderingContext2D;
        ctx.fillStyle = objColor;
        ctx.fillRect(objPos.X, objPos.Y, objSize.X, objSize.Y);
    }

    public clear(): void {
        const ctx = this.Canvas.getContext('2d') as CanvasRenderingContext2D;
        ctx.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
    }

    public getRectangle(): DOMRect {
        const canvasRect = this.Canvas.getBoundingClientRect();
        return canvasRect;
    }
}
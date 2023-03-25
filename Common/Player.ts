import { Transform } from "./RenderComponents/Transform";
import { Vector2 } from "./RenderComponents/Vector2";
import { Canvas } from "./RenderComponents/Canvas";
import { CanvasConstants } from "./Constants/CanvasConstants";
import { IRendable } from "./Interfaces/IRendable";

export class Player implements IRendable {
    private Transform: Transform = new Transform();
    private Canvas: Canvas = new Canvas(); 

    private readonly PLAYER_XSIZE: number = 20;
    private readonly PLAYER_YSIZE: number = 20;
    private readonly PLAYER_COLOR: string = "brown";

    constructor() {
        this.Transform.setSize(new Vector2(this.PLAYER_XSIZE, this.PLAYER_YSIZE));
        this.Transform.setColor(this.PLAYER_COLOR);
        this.setMouseOverEvent();
    }

    public render(): void {
        this.Canvas.draw(this.Transform);
    }

    public getTransform(): Transform {
        return this.Transform;
    }

    private setMouseOverEvent() {
        window.addEventListener('mousemove', event => {
            const playerSize = this.Transform.getSize();
            const canvasRect = this.Canvas.getRectangle();
            const mouseX = event.clientX - canvasRect.left;
            const mouseY = event.clientY - canvasRect.top;

            const posX = Math.min(Math.max(mouseX - playerSize.X / 2, 0), CanvasConstants.WIDTH - playerSize.X);
            const posY = Math.min(Math.max(mouseY - playerSize.Y / 2, 0), CanvasConstants.HEIGHT - playerSize.Y);

            const newPos = new Vector2(posX, posY);
            this.Transform.setPosition(newPos);
        });
    }
}
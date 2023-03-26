import { Element } from "./Element";
import { Transform } from "../RenderComponents/Transform";
import { Player } from "../Player";
import { Canvas } from "../RenderComponents/Canvas";
import { Vector2 } from "../RenderComponents/Vector2";
import { ElementsConstants } from "../Constants/ElementsConstants";
import { CanvasConstants } from "../Constants/CanvasConstants";
import { UIManager } from "../UIManager";

export class Random extends Element {
    protected Transform: Transform = new Transform();
    protected Player: Player = new Player();
    protected Canvas: Canvas = new Canvas();

    private CanSpawn: boolean = false;
    private LastXCollision: number = 0;
    private LastYCollision: number = 0;

    constructor() {
        super();
        this.spawn();
        setTimeout(() => {
            this.CanSpawn = true;
            this.Transform.setColor(ElementsConstants.RANDOM_COLOR);
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
        this.updateTransform();
        this.draw();
    }

    protected override onCollision(): void {
        console.log("A collision with an random element has occur.");
        var uiManager = UIManager.getInstance();
        uiManager.endState();
    }

    protected spawn() {
        const randomSizeNumber = this.getRandomNumber(ElementsConstants.MIN_SIZE, ElementsConstants.MAX_SIZE);
        const objSize = new Vector2(randomSizeNumber, randomSizeNumber);
        this.Transform.setSize(objSize);

        const randomPosX = this.getRandomNumber(1, CanvasConstants.WIDTH - objSize.X);
        const randomPosY = this.getRandomNumber(1, CanvasConstants.HEIGHT - objSize.Y);
        const objPosition = new Vector2(randomPosX, randomPosY);
        this.Transform.setPosition(objPosition);
        
        const randomVelocityX = this.getRandomNumber(ElementsConstants.MIN_SPEED, ElementsConstants.MAX_SPEED);
        const randomVelocityY = this.getRandomNumber(ElementsConstants.MIN_SPEED, ElementsConstants.MAX_SPEED);
        const objVelocity = new Vector2(randomVelocityX, randomVelocityY);
        this.Transform.setVelocity(objVelocity);
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

    protected updateTransform() {
        const objPos = this.Transform.getPosition();
        const objSize = this.Transform.getSize();
        const objVelocity = this.Transform.getVelocity();

        var fixedVelocityX = objVelocity.X;
        if (objPos.X < 0) {
            this.getRandomNumber(1, CanvasConstants.WIDTH);
            fixedVelocityX = this.getRandomNumber(ElementsConstants.MIN_SPEED, ElementsConstants.MAX_SPEED);
        }
        else if (objPos.X + objSize.X > CanvasConstants.WIDTH) {
            fixedVelocityX = (this.getRandomNumber(ElementsConstants.MIN_SPEED, ElementsConstants.MAX_SPEED)) * (-1);
        }

        var fixedVelocityY = objVelocity.Y;
        if (objPos.Y < 0 ) {
            fixedVelocityY = this.getRandomNumber(ElementsConstants.MIN_SPEED, ElementsConstants.MAX_SPEED);
        }
        else if (objPos.Y + objSize.Y > CanvasConstants.HEIGHT) {
            fixedVelocityY = (this.getRandomNumber(ElementsConstants.MIN_SPEED, ElementsConstants.MAX_SPEED)) * (-1);
        }

        const newVelocity = new Vector2(fixedVelocityX, fixedVelocityY);
        this.Transform.setVelocity(newVelocity);

        const newPosX = objPos.X + newVelocity.X;
        const newPosY = objPos.Y + newVelocity.Y;
        const newPosition = new Vector2(newPosX, newPosY);
        this.Transform.setPosition(newPosition);
    }
}
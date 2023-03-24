import { Transform } from "../RenderComponents/Transform";
import { Player } from "../Player";
import { IRendable } from "../Interfaces/IRendable";

export abstract class Element implements IRendable {
    protected Transform: Transform; 
    protected Player: Player;

    constructor() { }

    protected onCollision(): void {
         console.log("A collision with an element has occur.");
    }

    public render(): void {
        if (this.Transform.collide(this.Player.getTransform())) {
            this.onCollision();
        }
    }
}
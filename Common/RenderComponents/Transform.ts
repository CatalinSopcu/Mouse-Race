import { Vector2 } from "./Vector2";

export class Transform{
    private Size: Vector2;
    private Position: Vector2;
    private Velocity: Vector2;

    constructor() { }

    public getSize(): Vector2 {
        return this.Size;
    }

    public getPosition(): Vector2 {
        return this.Position;
    }

    public getVelocity(): Vector2 {
        return this.Velocity;
    }

    public collide(other: Transform): boolean {
        const thisPos = this.Position;
        const thisSize = this.Size;
        const otherPos = other.getPosition();
        const otherSize = other.getSize();
        return (
            thisPos.X < otherPos.X + otherSize.X &&
            thisPos.X + thisSize.X > otherPos.X &&
            thisPos.Y < otherPos.Y + otherSize.Y &&
            thisPos.Y + thisSize.Y > otherPos.Y
        );
    }
}
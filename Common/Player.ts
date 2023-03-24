import { Transform } from "./RenderComponents/Transform";

export class Player {
    protected Transform: Transform; 
    constructor() {
    }

    public getTransform(): Transform {
        return this.Transform;
    }
}
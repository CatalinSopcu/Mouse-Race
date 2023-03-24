
export class ScoreCounter {
    private counter: number = 0;
    constructor() { }

    public startCounter(): void {
        setInterval(() => {
            this.counter++;
            document.getElementById("score_counter")!.innerHTML = "Score: " + this.counter;
        }, 1000);
        console.log("asd");
    }

    public addScore(addValue): void {
        this.counter += addValue;
    }

    public getScore(): number {
        return this.counter;
    }
}

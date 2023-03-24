import { ScoreCounter } from "./Common/ScoreCounter";
const startContainer = document.querySelector(".start_container") as HTMLElement;

startContainer.addEventListener("click", function () {
    startContainer.classList.add("hidden");
    setTimeout(function () {


        // Create an instance of the ScoreCounter class
        const scoreCounter = new ScoreCounter();

        // Call the startCounter method to start the score counter
        scoreCounter.startCounter();
        startContainer.style.display = "none";
        const playContainer = document.querySelector(".play_container") as HTMLElement;
        playContainer.style.display = "flex";
        const canvas = document.querySelector('canvas') as HTMLCanvasElement;

        // Set the canvas width and height to match the window size
        canvas.width = 300;
        canvas.height = 260;

        // Get the canvas drawing context
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        // Listen for mouse movement events
        window.addEventListener('mousemove', event => {
            // Clear the canvas on each frame
            const canvasRect = canvas.getBoundingClientRect();

            // Get the mouse position
            const mouseX = event.clientX - canvasRect.left;
            const mouseY = event.clientY - canvasRect.top;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw a square centered on the mouse position
            const squareSize = 20;

            let squareX = mouseX - squareSize / 2;
            if (squareX > 280) {
                squareX = 280;
            }
            else if (squareX < 0) {
                squareX = 0;
            }

            let squareY = mouseY - squareSize / 2;
            if (squareY > 240) {
                squareY = 240;
            }
            else if (squareY < 0) {
                squareY = 0;
            }

            ctx.fillStyle = 'brown';
            ctx.strokeStyle = 'black'; // set the color of the border
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
            ctx.strokeRect(squareX + 0.5, squareY + 0.5, squareSize - 1, squareSize - 1); // draw the square with a border
        });
    }, 1000);
});
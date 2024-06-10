import p5 from "p5";
import "../css/Sketch.css";
const Sketch = (p) => {
  p.setup = () => {
    const canvas = p.createCanvas(800, 600);
    canvas.parent("p5-canvas");
    canvas.style("border", "2px solid black"); // Add border to the canvas
  };

  p.windowResized = () => {
    const canvasWidth = Math.min(window.innerWidth, 640);
    const canvasHeight = canvasWidth / 2; // Maintain aspect ratio
    p.resizeCanvas(canvasWidth, canvasHeight);
  };
};

export default Sketch;

import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect } from "react";

function App() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [ctx, setCtx] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {

    if(!canvasRef) return;

    const ctx = canvasRef.current.getContext("2d");
    const image = new Image();
    image.src = "https://storage.needpix.com/rsynced_images/sea-1547609_1280.jpg";

    image.onload = function() {
      ctx.drawImage(image, 0, 0, 500, 500);
    }
  
    /* const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.5;
    canvas.height = window.innerWidth * 0.5;

    const context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = 2.5;
    contextRef.current = context;

    setCtx(context); */
  }, [canvasRef]);

/*   const startDrawing = () => {
    setIsDrawing(true);
  }

  const finishDrawing = () => {
    setIsDrawing(false);
  }

  const drawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    if(ctx) {
      if(!isDrawing) {
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
      }
      else {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
      }
    }
  } */

  return (
    <div className="App">
      <div className='testbox'>
        <canvas
          className='test-canvas'
          ref={canvasRef}
          /* onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={drawing}
          onMouseLeave={finishDrawing} */>
        </canvas>
      </div>
    </div>
  );
}

export default App;

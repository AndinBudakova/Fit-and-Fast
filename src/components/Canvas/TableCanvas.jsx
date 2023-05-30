import React, { useRef, useEffect, useState } from 'react';
import "./TableCanvas.css";

const TableCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const startDrawing = (event) => {
      setIsDrawing(true);
      const { left, top } = canvas.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const draw = (event) => {
      if (!isDrawing) return;
      const { left, top } = canvas.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      ctx.lineTo(x, y);
      ctx.stroke();
    };

    const stopDrawing = () => {
      setIsDrawing(false);
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    // Clean up event listeners when the component unmounts
    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseleave', stopDrawing);
    };
  }, [isDrawing]);

  const resetCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className='divCanv'>
      <span>Draw a LOGO</span>
      <canvas className='boxCanv' ref={canvasRef} />
      <button className='butonii' onClick={resetCanvas}>Clear</button>
    </div>
  );
};

export default TableCanvas;

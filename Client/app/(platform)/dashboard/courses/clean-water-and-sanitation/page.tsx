"use client";

import React, { useEffect } from 'react';

const CleanWaterSanitation = () => {
  useEffect(() => {
    // Draw curve on component mount (similar to window.onload)
    drawCurve();

    // Set up window resize event listener to redraw the curve
    const handleResize = () => {
      drawCurve();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="p-20 module-container" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <div
        className="z-10"
        id="item1"
        style={{
          alignSelf: 'flex-start',
          backgroundColor: 'lightblue',
          padding: '10px',
          margin: '5px 0',
          boxSizing: 'border-box',
          maxWidth: '50%', // Optional: Limit the width for better visual alignment
        }}
      >
        Item 1
      </div>
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <path id="curve1" stroke="black" strokeWidth="2" fill="transparent" />
      </svg>
      <div
        className="z-10"
        id="item2"
        style={{
          alignSelf: 'flex-end',
          backgroundColor: 'lightblue',
          padding: '10px',
          margin: '5px 0',
          boxSizing: 'border-box',
          maxWidth: '50%', // Optional: Limit the width for better visual alignment
        }}
      >
        Item 2
      </div>

      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <path id="curve2" stroke="black" strokeWidth="2" fill="transparent" />
      </svg>

      <div
        className="z-10"
        id="item3"
        style={{
          alignSelf: 'flex-start',
          backgroundColor: 'lightblue',
          padding: '10px',
          margin: '5px 0',
          boxSizing: 'border-box',
          maxWidth: '50%', // Optional: Limit the width for better visual alignment
        }}
      >
        Item 3
      </div>

      <style jsx>{`
        .module-container {
          background: url('/wave-image.jpg') no-repeat center center fixed; /* Replace with your wave image */
          background-size: cover;
          min-height: 100vh;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          gap: 15rem;
        }
      `}</style>
    </div>
  );

  function getOffset(el: HTMLElement | null) {
    const rect = el?.getBoundingClientRect();
    if (!rect) {
      return { x: 0, y: 0 }; // Default values or handle the error as needed
    }
    return {
      x: rect.left + window.scrollX + rect.width / 2 - 200, // center X
      y: rect.top + window.scrollY + rect.height / 2, // center Y
    };
  }

  function drawCurve() {
    const item1 = document.getElementById('item1');
    const item2 = document.getElementById('item2');
    const item3 = document.getElementById('item3');
    const curve1 = document.getElementById('curve1');
    const curve2 = document.getElementById('curve2');

    if (!item1 || !item2 || !item3 || !curve1 || !curve2) return;

    const pos1 = getOffset(item1);
    const pos2 = getOffset(item2);
    const pos3 = getOffset(item3);


    // Adjust the control points for the curve as needed
    const controlPointX = (pos1.x + pos2.x) / 2;
    const controlPointX2 = (pos2.x + pos3.x) / 2;
    const controlPointY1 = pos1.y - 100; // Adjust control point for the curve's shape
    const controlPointY2 = pos2.y + 100;
    const controlPointY3 = pos3.y - 100;

    // Construct the path string for the curve
    const path = `M ${pos1.x},${pos1.y} C ${controlPointX},${controlPointY1}, ${controlPointX},${controlPointY2}, ${pos2.x},${pos2.y}`;
    const path2 = `M ${pos2.x},${pos2.y} C ${controlPointX2},${controlPointY2}, ${controlPointX2},${controlPointY3}, ${pos3.x},${pos3.y}`;

    curve1.setAttribute('d', path);
    curve2.setAttribute('d', path2);
  }
};

export default CleanWaterSanitation;

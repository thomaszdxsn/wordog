import React from 'react';


const Page = () => {
  React.useEffect(() => {
    if (!process.browser) {
      return
    }
    // Copy from: https://stackoverflow.com/a/23572465/8764162
    const canvasElement = document.getElementById('404noise')! as HTMLCanvasElement;
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;

    const canvasCtx = canvasElement.getContext('2d')!;


    const imgData = canvasCtx.createImageData(canvasElement.width, canvasElement.height);
    const pixels = imgData.data;
    let time = 0;

    function makeNoise() {
      for (let i = 0, n = pixels.length; i < n; i += 4) {
        const c = 7 + Math.sin(i/50000 + time/7);                    // A sine wave of the form sin(ax + bt)
        pixels[i] = pixels[i+1] = pixels[i+2] = 40 * Math.random() * c; // Set a random gray
        pixels[i+3] = 255;                                              // 100% opaque
      }
      canvasCtx.putImageData(imgData, 0, 0);

      canvasCtx.textAlign = "center";
      canvasCtx.textBaseline = 'middle';
      canvasCtx.font = '52px san-serif';
      canvasCtx.fillStyle = 'red';
      const text = '404 - Not Found';
      canvasCtx.fillText(text, (canvasElement.width / 2), window.innerHeight / 2 - 52);

      time = (time + 1) % canvasElement.height;
      requestAnimationFrame(makeNoise)
    }
    makeNoise();

  }, [process.browser]);
  return (
   <>
     <canvas id={'404noise'} />
      <style jsx global>{`
        body {
          width:  100%;
          height: 100%;
          margin: 0;
        }
      `}</style>
   </>
  )
};

export default Page;
import React, { FC } from "react";

interface canvasImageProps {
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
  helperCanvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
  imgRef: any;
  imgUrl: any;
}

const CanvasImage: FC<canvasImageProps> = ({
  canvasRef,
  helperCanvasRef,
  imgRef,
  imgUrl,
}) => {
  return (
    <>
      <canvas ref={canvasRef} width="500px" />
      <canvas ref={helperCanvasRef} style={{ display: "none" }} />
      <img ref={imgRef} src={imgUrl} alt="Puzzle display" />
    </>
  );
};

export default CanvasImage;

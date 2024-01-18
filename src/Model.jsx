import { OBJModel } from "react-3d-viewer";
import model from "./model/model.obj";

function Model() {
  const height = window.innerHeight;
  const width = window.innerWidth;
  return (
    <OBJModel
      height={height}
      position={{ x: 0, y: -2.5, z: 0 }}
      scale={{ x: 0.25, y: 0.25, z: 0.25 }}
      src={model}
      width={width}
    />
  );
}

export default Model;

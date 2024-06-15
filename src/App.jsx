import React from "react";
import { Canvas } from "@react-three/fiber";
import { Services } from "./components/Services";
import "./index.css";

const App = () => {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3],
      }}
    >
      <Services />
    </Canvas>
  );
};

export default App;

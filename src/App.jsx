import React from "react";
import { Canvas } from "@react-three/fiber";
import { Services } from "./components/Services";
import "./index.css";

const App = () => {
  return (
    <Canvas>
      <Services />
    </Canvas>
  );
};

export default App;

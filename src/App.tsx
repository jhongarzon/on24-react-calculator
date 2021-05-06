import { hot } from "react-hot-loader";
import React, { FC } from "react";
import Calculator from "./main/Calculator";

const App: FC = () => {
  return (
    <div>
      <h1>On24 Calculator code challenge</h1>
      <Calculator></Calculator>
    </div>
  );
};

export default hot(module)(App);

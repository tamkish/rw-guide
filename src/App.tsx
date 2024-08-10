import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Crossroad } from "./Crossroad.tsx";
import { RainMap } from "./RainMap.tsx";

function App() {
  return (
    <Routes>
      <Route path={"/"} Component={Crossroad} />
      <Route path={"/map/*"} Component={RainMap} />
      <Route path={"/spin"} />
    </Routes>
  );
}

export default App;

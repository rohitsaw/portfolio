import { BrowserRouter } from "react-router-dom";
import AnimateRoutes from "./component/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimateRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;

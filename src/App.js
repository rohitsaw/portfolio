import { BrowserRouter } from "react-router-dom";
import AnimateRoutes from "./component/routes";
import { Provider } from "react-redux";
import store from "../src/redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <AnimateRoutes />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
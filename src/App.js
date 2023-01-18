import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Rourer/router/Route";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

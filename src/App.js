import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Routes from "./Pages/Routers/Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={Routes}></RouterProvider>
      <Toaster></Toaster>
      <h1>Ha ha ha</h1>
      <h2>world</h2>
      <h4>too foo</h4>
    </div>
  );
}

export default App;

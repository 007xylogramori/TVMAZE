import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./pages/movie/Movie";
import Error from "./pages/error/Error.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="*" element={<Error />} />
          {/* <Route path="/form" element={<Form/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./pages/Movie/Movie";
import Error from "./pages/Error/Error.jsx";
import Form from "./components/form/Form";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="*" element={<Error />} />
          <Route path="/form" element={<Form/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

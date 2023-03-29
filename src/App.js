import "./app.scss";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Lists } from "./pages/lists/Lists";
import { List } from "./pages/list/List";
import { SearchBy } from "./pages/searchBy/SearchBy";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/lists/:id" element={<List />} />
          <Route path="/search" element={<SearchBy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
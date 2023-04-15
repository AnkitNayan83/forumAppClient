import "./app.scss";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Lists } from "./pages/lists/Lists";
import { List } from "./pages/list/List";
import Question from "./pages/question/Question";
import { SearchBy } from "./pages/searchBy/SearchBy";
import { User } from "./pages/user/User";
import { EditUser } from "./pages/editUser/EditUser";
import { EditPost } from "./pages/editPost/EditPost";
import { useSelector } from "react-redux";

function App() {
   const user = useSelector((state) => state.user.currentUser);
   return (
      <div className="app">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={user ? <Home /> : <Login />} />
               <Route
                  path="/register"
                  element={user ? <Home /> : <Register />}
               />
               <Route path="/lists" element={<Lists />} />
               <Route path="/lists/:id" element={<List />} />
               <Route path="/search" element={<SearchBy />} />
               <Route path="/post" element={<Question />} />
               <Route path="/editPost" element={<EditPost />} />
               <Route path="/user/:id" element={<User />} />
               <Route path="/useredit/:id" element={<EditUser />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import UserStart from "./component/User/UserStart";
import Signin from "./component/User/Signin";
import Signup from "./component/User/Signup";
import ShopHome from "./component/Shop/ShopHome";
import BrandShop from "./component/Shop/BrandShop";
import Wishlist from "./component/Shop/Wishlist";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="userStart" Component={UserStart} />
          <Route path="signin" Component={Signin}></Route>
          <Route path="signup" Component={Signup}></Route>
          <Route path="shop" Component={ShopHome}></Route>
          <Route path="brand/:name" Component={BrandShop}></Route>
          <Route path="wishlist" Component={Wishlist}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

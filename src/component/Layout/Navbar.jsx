import { NavLink, useLocation } from "react-router-dom";
import heart from "../../assets/icons/Heart.png";
import bag from "../../assets/icons/Bag.png";
import wallet from "../../assets/icons/Wallet.png";
import home from "../../assets/icons/Home.png";

export default function Navbar() {
  const location = useLocation();

  return (
    <section
      id="navbar"
      className="font-Inter w-dvw fixed left-0 bottom-0 h-20 bg-bg flex justify-evenly px-4 items-center"
      style={{ boxShadow: "0 -4px 20px 0 rgba(29,30,32, 0.08)" }}
    >
      <NavLink
        to="/shop"
        className="text-xs font-medium w-16 text-center text-text1 flex justify-center"
        id="link-shop"
      >
        {location.pathname.split("/")[1] === "shop" ? (
          "Home"
        ) : (
          <img src={home} alt="heart-icon" />
        )}
      </NavLink>
      <NavLink
        to="/wishlist"
        className="text-xs font-medium w-16 text-center text-text1"
        id="link-wishlist"
      >
        {location.pathname.split("/")[1] === "wishlist" ? (
          "Wishlist"
        ) : (
          <img src={heart} alt="heart-icon" />
        )}
      </NavLink>
      <NavLink
        to="/cart"
        className="text-xs font-medium w-16 text-center text-text1"
        id="link-cart"
      >
        {location.pathname.split("/")[1] === "cart" ? (
          "Cart"
        ) : (
          <img src={bag} alt="bag-icon" />
        )}
      </NavLink>
      <NavLink
        to="/wallet"
        className="text-xs font-medium w-16 text-center text-text1"
        id="link-wallet"
      >
        {location.pathname.split("/")[1] === "wallet" ? (
          "Wallet"
        ) : (
          <img src={wallet} alt="wallet-icon" />
        )}
      </NavLink>
    </section>
  );
}

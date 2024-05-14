import { NavLink, useNavigate } from "react-router-dom";
import arrowLeft from "../../assets/icons/Arrow - Left.png";
import bag from "../../assets/icons/Bag2.png";
import sort from "../../assets/icons/sort.png";
import ProductCard from "./ProductCard";
import Navbar from "../Layout/Navbar";
export default function BrandShop() {
  const navigate = useNavigate();
  return (
    <>
      <section
        id="brand-shop"
        className="flex flex-col items-center w-dvw h-dvh transition-opacity duration-500 font-Inter px-5 pt-10 py-28"
      >
        <div className="flex justify-between mb-5 items-center w-full">
          <NavLink
            to={"/shop"}
            className="bg-backBtn w-11 h-11 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("brand-shop").classList.add("fadeout");
              setTimeout(() => {
                navigate("/shop");
              }, 450);
            }}
          >
            <img
              src={arrowLeft}
              alt="arrow_left"
              className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6"
            />
          </NavLink>
          <span className="title-1 text-lg">Wishlist</span>
          <NavLink
            to={"/cart"}
            className="bg-backBtn w-11 h-11 rounded-full relative"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("brand-shop").classList.add("fadeout");
              setTimeout(() => {
                navigate("/cart");
              }, 450);
            }}
          >
            <img
              src={bag}
              alt="arrow_left"
              className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </NavLink>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <h3 className="text-lg text-1">365 Items</h3>
            <span className="text-base text-text1 leading-4">
              Available in stock
            </span>
          </div>
          <div className="flex w-20 h-10 rounded-md10 bg-backBtn items-center px-3 justify-between text-1">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5625 12.4363H12.5481"
                stroke="#1D1E20"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.0342 3.0973C8.49482 2.51042 9.2392 2.54105 9.8267 3.00167L10.6954 3.68292C11.2829 4.14355 11.4911 4.85792 11.0304 5.44605L5.84982 12.0554C5.6767 12.2767 5.41232 12.4073 5.13107 12.4104L3.13295 12.4361L2.68045 10.4892C2.6167 10.2161 2.68045 9.92855 2.85357 9.70668L8.0342 3.0973Z"
                stroke="#1D1E20"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.06445 4.33507L10.0607 6.68382"
                stroke="#1D1E20"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Edit
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 py-6 pb-28">
          <ProductCard></ProductCard>
        </div>
      </section>
      <Navbar />
    </>
  );
}

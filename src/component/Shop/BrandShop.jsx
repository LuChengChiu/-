import { NavLink, useNavigate } from "react-router-dom";
import arrowLeft from "../../assets/icons/Arrow - Left.png";
import bag from "../../assets/icons/Bag2.png";
import sort from "../../assets/icons/sort.png";
import nike from "../../assets/brand/Nike_lg.png";
import ProductCard from "./ProductCard";
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
          <div className="bg-backBtn p-3 rounded-md10">
            <img src={nike} alt="" />
          </div>
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
            <img src={sort} alt="sort-icon" className="w-4 h-4" />
            Sort
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 py-6">
          <ProductCard></ProductCard>
        </div>
      </section>
    </>
  );
}

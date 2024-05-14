import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import vector from "../../assets/icons/Vector.png";
import bag from "../../assets/icons/Bag2.png";
import search from "../../assets/icons/Search.png";
import voice from "../../assets/icons/Voice.png";
import nike from "../../assets/brand/Nike.png";
import adidas from "../../assets/brand/Adidas.png";
import puma from "../../assets/brand/puma-logo.png";
import fila from "../../assets/brand/fila-9 1.png";
import ProductCard from "./ProductCard";
import Sidebar from "../Layout/Sidebar";
import { useState } from "react";

export default function ShopHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const brandList = [
    { name: "Adidas", img: adidas },
    { name: "Nike", img: nike },
    { name: "Fila", img: fila },
    { name: "Puma", img: puma },
  ];
  return (
    <>
      <section
        id="shopHome"
        className=" w-dvw h-fit transition-opacity duration-500 font-Inter px-5 pt-11 py-28"
      >
        <div className="flex justify-between mb-5">
          <button
            className="bg-backBtn w-11 h-11 rounded-full relative z-50"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <img
              src={vector}
              alt="arrow_left"
              className={
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-3  transition-transform duration-500 " +
                (sidebarOpen ? "rotate-90" : "rotate-0")
              }
            />
          </button>
          <NavLink
            to={"/cart"}
            className="bg-backBtn w-11 h-11 rounded-full relative"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("shopHome").classList.add("fadeout");
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
        <div className="mb-5">
          <h1 className="text-title1 text-3xl title-1">Hello</h1>
          <p className="text-base text-text1">Welcome to Laza.</p>
        </div>
        <div className="flex justify-between">
          <div className="flex relative">
            <button>
              <img
                src={search}
                alt="search-img"
                className="cursor-pointer w-5 h-5 absolute top-1/2 -translate-y-1/2 left-4"
              />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="input-search bg-backBtn rounded-xl pl-12"
            />
          </div>
          <button className="cursor-pointer bg-primary w-12 h-12 content-center relative rounded-md10">
            <img
              src={voice}
              alt="microphone-img"
              className="left-1/2 translate-x-1/2"
            />
          </button>
        </div>
        <div className="flex flex-col mt-2 overflow-x-auto">
          <div className="capitalize text-1 flex pt-3 pb-2 justify-between items-center">
            <h2 className="text-lg">choose brand</h2>
            <span className="text-sm text-text1">view all</span>
          </div>
          <div className="flex ">
            {brandList.map((brand) => {
              return (
                <NavLink
                  to="/brand/nike"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("shopHome")
                      .classList.add("fadeout");
                    setTimeout(() => {
                      navigate(`/brand/${brand.name}`);
                    }, 450);
                  }}
                >
                  <div className="flex bg-backBtn h-12 mr-3 rounded-md10 items-center pl-0.5 pr-2">
                    <div className="w-10 h-10 bg-bg rounded-md10 flex items-center justify-center ml-1 mr-2">
                      <img src={brand.img} alt={`${brand.name}_img`} />
                    </div>
                    <span>{brand.name}</span>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div>
          <div className="capitalize text-1 flex py-2 pt-2 justify-between items-center">
            <h2 className="text-lg">new arrival</h2>
            <span className="text-sm text-text1">view all</span>
          </div>
          <div className="grid grid-cols-2 gap-x-2 gap-y-3">
            <ProductCard />
          </div>
        </div>
      </section>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Navbar></Navbar>
    </>
  );
}

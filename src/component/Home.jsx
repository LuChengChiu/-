import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import manImg from "../assets/home_img_man.png";

const Splash = ({ showSplash }) => {
  return (
    <>
      <div
        id="splash"
        className={
          "bg-primary w-dvw h-dvh absolute transition-opacity duration-700 ease-out z-30 " +
          (!showSplash && "opacity-0 select-none")
        }
      >
        <img
          src={logo}
          alt="logo"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
        />
      </div>
    </>
  );
};

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
    setTimeout(() => {
      document.getElementById("splash").style.zIndex = -1;
    }, 1100);
  }, []);

  return (
    <>
      <Splash showSplash={showSplash}></Splash>
      <section
        id="home"
        className="screen-1 bg-primary w-dvw h-dvh flex justify-center relative font-Inter transition-opacity duration-500"
      >
        <img
          src={manImg}
          alt="image_man"
          className="w-full max-w-full max-h-full"
        />
        <div className="absolute bottom-5 bg-white w-11/12 flex flex-col items-center p-4 justify-between z-10 rounded-lg15 h-60">
          <h1 className="title-1 text-title1 text-2xl leading-7 mt-2">
            look good, feel good
          </h1>
          <p
            className="text-text1 text-center"
            style={{ fontSize: "15px", lineHeight: "21px" }}
          >
            Create your individual & unique style and look amazing everyday.
          </p>
          <div className="flex gap-3 mt-2">
            <div
              className="frame text-1 flex justify-center items-center text-text1"
              style={{ background: "#F5F6FA" }}
            >
              <NavLink
                to="/shop"
                id="link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("home").classList.add("fadeout");
                  setTimeout(() => {
                    navigate("/shop");
                  }, 450);
                }}
              >
                Men
              </NavLink>
            </div>
            <div
              className="frame text-1 flex justify-center items-center text-white"
              style={{ background: "#9775FA" }}
            >
              <NavLink
                to="signin"
                id="link"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("home").classList.add("fadeout");
                  setTimeout(() => {
                    navigate("userStart");
                  }, 450);
                }}
              >
                Women
              </NavLink>
            </div>
          </div>
          <span className="text-text1 text1">
            {" "}
            <NavLink
              to="/shop"
              id="link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("home").classList.add("fadeout");
                setTimeout(() => {
                  navigate("/shop");
                }, 450);
              }}
            >
              Skip{" "}
            </NavLink>
          </span>
        </div>
        <div className="absolute -top-20 -left-10 w-64 h-64 rounded-full bg-gradient-to-br from-white/70 blur-xl"></div>
        <div className=" absolute rounded-full bg-gradient-to-br from-white w-36 h-36 -left-16 top-2/4 blur-xl"></div>
        <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-white/50 blur-xl bottom-12 -right-1/2"></div>
      </section>
    </>
  );
}

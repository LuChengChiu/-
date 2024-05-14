import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import arrowLeft from "../../assets/icons/Arrow - Left.png";
export default function UserStart() {
  const navigate = useNavigate();
  return (
    <>
      <section
        id="userStart"
        className="w-dvw h-dvh flex flex-col items-center pt-24 relative font-Inter transition-opacity duration-500"
      >
        <NavLink
          to={"/"}
          className="bg-backBtn w-11 h-11 rounded-full absolute top-12 left-5"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("userStart").classList.add("fadeout");
            setTimeout(() => {
              navigate("/");
            }, 450);
          }}
        >
          <img
            src={arrowLeft}
            alt="arrow_left"
            className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6"
          />
        </NavLink>
        <h1 className="title-1 text-2xl">let's get started</h1>
        <div className="flex flex-col w-full items-center gap-4 text-white translate-y-full ">
          <button
            className="w-10/12 bg-red-300 rounded-md10 p-2.5"
            style={{ background: "#4267B2" }}
          >
            <FontAwesomeIcon icon={fab.faFacebookF} /> Facebook
          </button>
          <button
            className="w-10/12 bg-red-300 rounded-md10 p-2.5"
            style={{ background: "#1DA1F2" }}
          >
            <FontAwesomeIcon icon={fab.faTwitter} /> Twitter
          </button>
          <button
            className="w-10/12 bg-red-300 rounded-md10 p-2.5"
            style={{ background: "#EA4335" }}
          >
            <FontAwesomeIcon icon={fab.faGoogle} /> Google
          </button>
        </div>
        <span className="text-base absolute bottom-24 text-title-1 text-text1">
          Already have an account?{" "}
          <NavLink
            to={"signin"}
            className="font-medium text-title1"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("userStart").classList.add("fadeout");
              setTimeout(() => {
                navigate("/signin");
              }, 450);
            }}
          >
            Signin
          </NavLink>
        </span>
        <NavLink
          to={"signup"}
          className="absolute bottom-0 bg-primary w-full text-1 text-white px-2.5 pt-3.5 pb-2.5 text-center"
          style={{ height: "75px" }}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("userStart").classList.add("fadeout");
            setTimeout(() => {
              navigate("/signup");
            }, 450);
          }}
        >
          Create an Account
        </NavLink>
      </section>
    </>
  );
}

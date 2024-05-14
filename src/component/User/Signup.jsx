import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import arrowLeft from "../../assets/icons/Arrow - Left.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

const USERNAME_REGEX = /.{3,}/;
const EMAIL_REGEX = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [pwdStrength, setPwdStrength] = useState("");
  const [pwdFocus, setPwdFocus] = useState(false);

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  useEffect(() => {
    const result = USERNAME_REGEX.test(username);
    console.log("username", result, username);
    setValidUsername(result);
  }, [username]);
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log("email", result, email, validEmail);
    setValidEmail(result);
  }, [email]);
  useEffect(() => {
    console.log("pwd", pwd, pwd.length);
    if (pwd.length < 8) {
      setPwdStrength("Weak");
    } else {
      setPwdStrength("Strong");
    }
  }, [pwd]);

  return (
    <>
      <section
        id="signup"
        className="w-dvw h-dvh relative transition-opacity duration-500 font-Inter flex flex-col items-center pt-24 px-5"
      >
        <NavLink
          to={"/userStart"}
          className="bg-backBtn w-11 h-11 rounded-full absolute top-12 left-5"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("signup").classList.add("fadeout");
            setTimeout(() => {
              navigate("/userStart");
            }, 450);
          }}
        >
          <img
            src={arrowLeft}
            alt="arrow_left"
            className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6"
          />
        </NavLink>
        <h1 className="title-1 text-2xl">Sign Up</h1>
        <div className="flex flex-col w-full translate-y-1/2">
          <label
            htmlFor="username"
            className="label flex flex-col text-text1 relative"
          >
            Username
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              aria-invalid={validUsername ? false : true}
              aria-describedby="usernamenote"
              onFocus={() => setUsernameFocus(true)}
              onBlur={() => setUsernameFocus(false)}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
              className="input border-b border-line h-9 mt-2 mb-5"
            />
            <span
              className={
                "absolute right-2 top-1/2 -translate-y-1/2 text-check " +
                (validUsername && username ? "opacity-100" : "opacity-0")
              }
            >
              <FontAwesomeIcon icon={fas.faCheck} />
            </span>
            <span
              className={
                "absolute right-2 top-1/2 -translate-y-1/2 text-ErrorRed " +
                (validUsername || !username ? "opacity-0" : "opacity-100")
              }
            >
              <FontAwesomeIcon icon={fas.faXmark} />
            </span>
            <p
              id="usernamenote"
              className={
                "absolute left-0 bottom-0 " +
                (usernameFocus && !username ? "block" : "hidden")
              }
            >
              Username can't be blank.
            </p>
          </label>{" "}
          <label
            htmlFor="password"
            className="label flex flex-col text-text1 relative"
          >
            Password
            <input
              type="text"
              name="password"
              id="password"
              aria-invalid={pwdStrength ? false : true}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
              autoComplete="off"
              required
              className="input border-b border-line h-9 mt-2 mb-5"
            />
            <span
              className={
                "absolute right-2 top-1/2 -translate-y-1/2 text-xs " +
                (pwdStrength === "Strong" ? "text-check" : "text-ErrorRed") +
                (pwdFocus || pwd ? " opacity-100" : " opacity-0")
              }
            >
              {pwdStrength}
            </span>
            <p
              id="pwdnote"
              className={
                "absolute left-0 bottom-0 " +
                (pwdFocus && pwdStrength === "Weak" ? "block" : "hidden")
              }
            >
              It's better to have a longer password.
            </p>
          </label>
          <label
            htmlFor="email"
            className="label flex flex-col text-text1 relative"
          >
            Email Address
            <input
              type="email"
              name="email"
              id="email"
              aria-invalid={validEmail ? false : true}
              aria-describedby="emailnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              autoComplete="off"
              required
              className="input border-b border-line h-9 mt-2 mb-5"
            />
            <span
              className={
                "absolute right-2 top-1/2 -translate-y-1/2 text-check " +
                (validEmail ? "opacity-100" : "opacity-0")
              }
            >
              <FontAwesomeIcon icon={fas.faCheck} />
            </span>
            <span
              className={
                "absolute right-2 top-1/2 -translate-y-1/2 text-red-700 " +
                (validEmail || !email ? "opacity-0" : "opacity-100")
              }
            >
              <FontAwesomeIcon icon={fas.faXmark} />
            </span>
            <p
              id="emailnote"
              className={
                "absolute left-0 bottom-0 " +
                (emailFocus && !validEmail && email ? "block" : "hidden")
              }
            >
              Please fill in a valid Email account.
            </p>
          </label>
          <div className="flex justify-between items-center font-Manrope text-sm font-medium mt-7">
            Remember me
            <input
              type="checkbox"
              id="switch"
              defaultChecked={true}
              className="checkbox-input hidden"
            />
            <label htmlFor="switch" className="block checkbox-switch"></label>
          </div>
        </div>
        <NavLink
          to={"/signin"}
          className="absolute bottom-0 bg-primary w-full text-1 text-white px-2.5 pt-3.5 pb-2.5 text-center"
          style={{ height: "75px" }}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("signup").classList.add("fadeout");
            setTimeout(() => {
              navigate("/signin");
            }, 450);
          }}
        >
          Sign Up
        </NavLink>
      </section>
    </>
  );
}

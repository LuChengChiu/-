import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/user.png";
import badge from "../../assets/icons/Badge.png";
import logoutBtn from "../../assets/icons/Logout.png";
import heart from "../../assets/icons/Heart.png";
export default function Sidebar({ sidebarOpen }) {
  return (
    <>
      <section
        id="sidebar"
        className={
          "w-72 h-full absolute top-0 left-0 z-20 bg-white py-32 px-5 transition-all  duration-300 ease-in-out " +
          (sidebarOpen
            ? " translate-x-0 opacity-100"
            : "-translate-x-full opacity-30")
        }
      >
        <div className="flex items-center full justify-between mb-7">
          <img src={userPhoto} alt="User Photo" className="w-11 rounded-full" />
          <div className="capitalize">
            <span className="block text-1 text-title1">mrh raju</span>
            <span className="text-sm text-text1 flex items-center mt-1">
              verified profile{" "}
              <img src={badge} alt="badge icon" className="inline" />
            </span>
          </div>
          <div className="w-16 h-8 rounded-md10 bg-backBtn2 flex items-center justify-center">
            <span className="text-1 text-xs text-text1">3 Orders</span>
          </div>
        </div>
        <ul className="capitalize tracking-tight text-title1">
          <li className="flex items-center h-11 justify-between">
            <span className="flex">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_234_351)">
                  <path
                    d="M12.4998 1.04166V3.12499M12.4998 21.875V23.9583M4.39561 4.39583L5.87478 5.87499M19.1247 19.125L20.6039 20.6042M1.0415 12.5H3.12484M21.8748 12.5H23.9581M4.39561 20.6042L5.87478 19.125M19.1247 5.87499L20.6039 4.39583M17.7082 12.5C17.7082 15.3765 15.3763 17.7083 12.4998 17.7083C9.62335 17.7083 7.2915 15.3765 7.2915 12.5C7.2915 9.62351 9.62335 7.29166 12.4998 7.29166C15.3763 7.29166 17.7082 9.62351 17.7082 12.5Z"
                    stroke="#1D1E20"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_234_351">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="ml-2.5">dark mode</span>
            </span>
            <input
              type="checkbox"
              id="switch"
              defaultChecked={true}
              className="checkbox-input hidden"
            />
            <label
              htmlFor="switch"
              className="block checkbox-switch w-11 h-6 after:w-5 after:h-5 after:left-0.5"
            ></label>
          </li>
          <li className="h-11 content-center my-0.5">
            <NavLink to="#" className="flex text-base">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.4997 2.86481C17.8216 2.86481 22.1351 7.17939 22.1351 12.5002C22.1351 17.821 17.8216 22.1356 12.4997 22.1356C7.17884 22.1356 2.86426 17.821 2.86426 12.5002C2.86426 7.17939 7.17884 2.86481 12.4997 2.86481Z"
                  stroke="#1D1E20"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.4946 8.54617V13.1493"
                  stroke="#1D1E20"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.4946 16.4543H12.5046"
                  stroke="#1D1E20"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="ml-2.5">account information</span>
            </NavLink>
          </li>
          <li className="h-11 content-center my-0.5">
            <NavLink to="#" className="flex text-base">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.1075 9.84145V7.60499C17.1075 4.98728 14.9846 2.86437 12.3669 2.86437C9.74915 2.85291 7.6179 4.96541 7.60645 7.58416V7.60499V9.84145"
                  stroke="#1D1E20"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.3366 22.135H8.37725C6.196 22.135 4.42725 20.3673 4.42725 18.185V13.7173C4.42725 11.535 6.196 9.76727 8.37725 9.76727H16.3366C18.5179 9.76727 20.2866 11.535 20.2866 13.7173V18.185C20.2866 20.3673 18.5179 22.135 16.3366 22.135Z"
                  stroke="#1D1E20"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.3574 14.7945V17.108"
                  stroke="#1D1E20"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="ml-2.5">password</span>
            </NavLink>
          </li>
          <li className="h-11 content-center my-0.5">
            <NavLink to="#" className="flex text-base">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.7982 22.3958H16.4939C19.6879 22.3958 22.1383 21.2421 21.4424 16.5988L20.6319 10.3058C20.2028 7.98887 18.725 7.10214 17.4282 7.10214H6.82566C5.50986 7.10214 4.1178 8.05562 3.62199 10.3058L2.81154 16.5988C2.2204 20.7177 4.60407 22.3958 7.7982 22.3958Z"
                  stroke="#1D1E20"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.65527 6.87332C7.65527 4.38783 9.67016 2.37293 12.1556 2.37293C13.3525 2.36786 14.5021 2.83977 15.3502 3.68431C16.1983 4.52884 16.6751 5.67644 16.6751 6.87332"
                  stroke="#1D1E20"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.06641 11.5644H9.11408"
                  stroke="#1D1E20"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.1401 11.5644H15.1878"
                  stroke="#1D1E20"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="ml-2.5">order</span>
            </NavLink>
          </li>
          <li className="h-11 content-center my-0.5">
            <NavLink to="#" className="flex text-base">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5403 14.9956H18.3233C16.775 14.9947 15.52 13.7405 15.519 12.1922C15.519 10.6438 16.775 9.38972 18.3233 9.38876H22.5403"
                  stroke="#1D1E20"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.8008 12.128H18.4761"
                  stroke="#1D1E20"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.07032 3.125H17.0739C20.0928 3.125 22.5403 5.57241 22.5403 8.59131V16.0674C22.5403 19.0864 20.0928 21.5338 17.0739 21.5338H8.07032C5.05141 21.5338 2.604 19.0864 2.604 16.0674V8.59131C2.604 5.57241 5.05141 3.125 8.07032 3.125Z"
                  stroke="#1D1E20"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.32861 7.85226H12.9526"
                  stroke="#1D1E20"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="ml-2.5">my cards</span>
            </NavLink>
          </li>
          <li className="h-11 content-center my-0.5">
            <NavLink to="#" className="flex text-base">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.2509 21.7227C9.98984 20.3311 7.88641 18.6933 5.97826 16.8388C4.63675 15.503 3.61547 13.8748 2.99265 12.0785C1.87186 8.59408 3.18101 4.60503 6.84475 3.4245C8.77026 2.80462 10.8732 3.15891 12.4958 4.37654C14.1189 3.1604 16.2212 2.80623 18.1468 3.4245C21.8106 4.60503 23.1291 8.59408 22.0083 12.0785C21.3855 13.8748 20.3642 15.503 19.0226 16.8388C17.1145 18.6933 15.0111 20.3311 12.75 21.7227L12.5051 21.875L12.2509 21.7227Z"
                  stroke="#1D1E20"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.395 7.34689C17.5047 7.70137 18.2931 8.69762 18.3917 9.86979"
                  stroke="#1D1E20"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="ml-2.5">wishlist</span>
            </NavLink>
          </li>
          <li className="h-11 content-center my-0.5">
            <NavLink to="#" className="flex text-base">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.6734 7.94122L21.0251 6.81612C20.4766 5.86412 19.261 5.53571 18.3077 6.08196C17.854 6.34927 17.3125 6.42511 16.8027 6.29276C16.2929 6.16039 15.8568 5.83071 15.5903 5.37638C15.419 5.08761 15.3269 4.75869 15.3233 4.42291C15.3388 3.88456 15.1357 3.36287 14.7603 2.9767C14.3849 2.59052 13.8692 2.37273 13.3306 2.37296H12.0244C11.4968 2.37295 10.9908 2.5832 10.6186 2.95718C10.2464 3.33118 10.0386 3.83807 10.0411 4.36571C10.0255 5.45508 9.13787 6.32997 8.04838 6.32985C7.7126 6.32636 7.38368 6.23427 7.09491 6.06288C6.14161 5.51663 4.92603 5.84505 4.37751 6.79706L3.68148 7.94122C3.13363 8.89203 3.45758 10.1068 4.40612 10.6586C5.02269 11.0146 5.40251 11.6725 5.40251 12.3844C5.40251 13.0963 5.02269 13.7542 4.40612 14.1102C3.45878 14.6582 3.13448 15.8701 3.68148 16.818L4.33938 17.9527C4.59638 18.4164 5.02759 18.7586 5.53758 18.9035C6.04757 19.0485 6.59428 18.9843 7.05677 18.725C7.51141 18.4597 8.05319 18.387 8.56168 18.5231C9.07018 18.6592 9.50324 18.9927 9.76463 19.4496C9.93601 19.7384 10.0281 20.0673 10.0316 20.4031C10.0316 21.5036 10.9237 22.3958 12.0244 22.3958H13.3306C14.4275 22.3958 15.3181 21.5095 15.3233 20.4126C15.3208 19.8833 15.53 19.375 15.9042 19.0007C16.2784 18.6264 16.7869 18.4173 17.3161 18.4199C17.6511 18.4288 17.9786 18.5205 18.2696 18.6869C19.2204 19.2347 20.4352 18.9107 20.987 17.9622L21.6734 16.818C21.9392 16.362 22.0122 15.8187 21.8761 15.3086C21.7401 14.7986 21.4063 14.3638 20.9488 14.1006C20.4912 13.8374 20.1576 13.4026 20.0216 12.8926C19.8855 12.3826 19.9584 11.8394 20.2242 11.3832C20.397 11.0815 20.6472 10.8314 20.9488 10.6586C21.8917 10.1071 22.2149 8.89942 21.6734 7.95076V7.94122Z"
                  stroke="#1D1E20"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.6825 15.1304C14.1991 15.1304 15.4285 13.9009 15.4285 12.3844C15.4285 10.8678 14.1991 9.63837 12.6825 9.63837C11.1659 9.63837 9.93652 10.8678 9.93652 12.3844C9.93652 13.9009 11.1659 15.1304 12.6825 15.1304Z"
                  stroke="#1D1E20"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="ml-2.5">settings</span>
            </NavLink>
          </li>
        </ul>
        <NavLink className="flex items-center w-full absolute bottom-24">
          <img src={logoutBtn} alt="Logout Button" />
          <span className="text-lgoutRed text-1 text-base ml-3">Logout</span>
        </NavLink>
      </section>{" "}
      <div
        className={
          "absolute top-0 right-0 z-10 bg-title1/20 w-full h-full  backdrop-blur transition-opacity duration-300 " +
          (sidebarOpen ? "opacity-100" : "opacity-0 hidden")
        }
      ></div>
    </>
  );
}

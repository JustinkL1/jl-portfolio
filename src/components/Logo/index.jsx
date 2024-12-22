import logoPic from "../../assets/logo/jl_logo.png";

import "./index.css";

function Logo() {
  return (
    <div
      className="app-logo"
      onClick={() => {
        const homeSection = document.getElementById("home");

        if (homeSection) {
          const navbarHeight = document.getElementById("navbar").offsetHeight;
          const top =
            homeSection.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
    >
      <img src={logoPic} alt="Justin's logo" className="app-logo" />
    </div>
  );
}

export default Logo;

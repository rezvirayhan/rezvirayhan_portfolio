import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../img/facebook.png";
import github from "../../img/github.png";
import gmail from "../../img/gmail.png";
import linkedin from "../../img/linkedin.png";

const SocialLink = () => {
  return (
    <div
      className="p-3"
      style={{
        background:
          "linear-gradient(45deg, rgb(11 16 26), rgb(18 76 110 / 98%))",
        color: "white",
      }}
    >
      <div className="ml-10">
        <div class="avatar px-2">
          <div class="w-12 rounded-full">
            <Link to="/https://web.facebook.com/">
              {" "}
              <img src={github} />
            </Link>
          </div>
        </div>
        <div class="avatar px-2">
          <div class="w-12 rounded-full">
            <img src={linkedin} />
          </div>
        </div>
        <div class="avatar px-2">
          <div class="w-12 rounded-full">
            <img src={gmail} />
          </div>
        </div>
        <div class="avatar px-2">
          <div class="w-12 rounded-full">
            <img src={facebook} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLink;

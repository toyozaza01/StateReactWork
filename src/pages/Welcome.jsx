import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon
import Girl from "../images/gif/G.gif";
import Men from "../images/gif/M.gif";

const Welcome = () => {
  return (
    <div>
      <div className="grid grid-flow-col auto-cols-max">
        <div>
          <img src={Girl} style={{ height: "800px" }} alt="" />
        </div>
        <div>
          <div className="p-4 flex items-center justify-center mt-52">
            <h1
              className="text-9xl justify-items-center drop-shadow-xl text-[#f87171]"
              style={{ fontFamily: "Josefin Sans", fontWeight: "700" }}
            >
              WELCOME
            </h1>
          </div>
          <div
            className="text-[#5eead4]"
            style={{ fontFamily: "Josefin Sans", fontWeight: "700" }}
          >
            <h1 className="text-7xl">TO</h1>
          </div>
          <div className="m-5 mb-10 text-[#2dd4bf]">
            <h1
              className="text-7xl"
              style={{ fontFamily: "Josefin Sans", fontWeight: "600" }}
            >
              TCT-RA SURVEY
            </h1>
          </div>
          <div>
            <Link to={'/survey'}>
              <button
                className="btn btn-outline btn-success btn-lg rounded-full text-3xl"
                style={{ fontFamily: "Josefin Sans", fontWeight: "700" }}
              >
                Next <FontAwesomeIcon icon={faArrowRight} bounce />
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src={Men} alt="" style={{ height: "800px" }} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;

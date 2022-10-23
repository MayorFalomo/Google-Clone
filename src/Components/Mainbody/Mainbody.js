import React, { useContext } from "react";
import { Main } from "../Style/Mainbody.styled";
import { AppContext } from "../../Helpers/Helpers";
import { Logo } from "../Style/Mainbody.styled";

const Mainbody = () => {
  const { activity, displayActivity, handleFunctions } = useContext(AppContext);

  return (
    <Main>
      <ul>
        <Logo src="./googleLogo.svg" alt="img"></Logo>
      </ul>
      <div>
        <button onClick={handleFunctions}>
          Bored?? get a random activity{" "}
        </button>
        {displayActivity ? <p> Random Activity: {activity.activity}</p> : " "}
      </div>
    </Main>
  );
};

export default Mainbody;

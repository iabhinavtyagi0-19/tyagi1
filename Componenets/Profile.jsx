import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Add from "../Componenets/Add";
export default function Profile({ total }) {
  const [t, setTotal] = useState(0);
  const income = 12000;
  const navi = useNavigate();
  return (
    <div>
      Profile Page
      <button
        onClick={() => navi("/")}
        style={{ backgroundColor: "red", marginRight: "1110px" }}
      >
        Back
      </button>
      <div
        style={{
          backgroundColor: "grey",
          width: "240px",
          height: "70px",
          padding: "30px",
          border: "3px solid red",
          marginLeft: "360px",
          marginTop: "40px",
        }}
      >
        Total Income - {income}
        <br />
        <br />
        User Total Expense - {t}
      </div>
    </div>
  );
}

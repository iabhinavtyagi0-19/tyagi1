import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add({ expense, setExpense }) {
  const [name, setName] = useState("");
  const [amt, setAmt] = useState("");
  const [cat, setCat] = useState("");
  const [totalexp, setTe] = useState(0);

  const navi = useNavigate();

  function handleAdd() {
    const exp = {
      id: Date.now(),
      name,
      cat,
      amt: Number(amt),
    };
    if (cat == "" || name == "") {
      alert("Add Full Details");
      return;
    }
    setTe((prev) => prev + Number(amt));

    setExpense([...expense, exp]);

    // reset fields
    setName("");
    setAmt("");
    setCat("");

    navi("/"); // go back to home
  }

  return (
    <div>
      <button
        onClick={() => navi("/")}
        style={{ backgroundColor: "red", marginRight: "1110px" }}
      >
        Back
      </button>

      <div
        style={{
          border: "3px solid black",
          backgroundColor: "grey",
          width: "350px",
          height: "140px",
          marginLeft: "350px",
          marginTop: "60px",
        }}
      >
        <input
          style={{ marginTop: "20px" }}
          type="text"
          value={name}
          placeholder="Enter Expense Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          style={{ marginTop: "10px" }}
          type="number"
          value={amt}
          placeholder="Enter Amount"
          onChange={(e) => setAmt(e.target.value)}
        />
        <br />
        <select
          value={cat}
          style={{ marginTop: "10px" }}
          onChange={(e) => setCat(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Food">Food & Drinks </option>
          <option value="Travel">Travel</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Health">Health</option>
        </select>
        <br />

        <button
          onClick={handleAdd}
          style={{ backgroundColor: "lightgreen", marginTop: "10px" }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

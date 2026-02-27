import "./styles.css";
import Profile from "../Componenets/Profile";
import Show from "../Componenets/Show";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Componenets/Home";
import Add from "../Componenets/Add";
import { useState } from "react";

export default function App() {
  const [expense, setExpense] = useState([]);
  const [total, setTotal] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home expenseArr={expense} setExpense={setExpense} />,
    },
    {
      path: "/add",
      element: (
        <Add expense={expense} setExpense={setExpense} setTotal={setTotal} />
      ),
    },
    {
      path: "/profile",
      element: <Profile total={total} />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

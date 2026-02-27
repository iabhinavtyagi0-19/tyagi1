imp
export default function Home({ expense = [] }) {
  const navi = useNavigate();

  return (
    <div>
      <Header />

      <button onClick={() => navi("/add")}>+</button>
      <button onClick={() => navi("/show")}>Show</button>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {expense.map((obj) => (
            <tr key={obj.id}>
              <td>{obj.name}</td>
              <td>{obj.cat}</td>
              <td>{obj.amt}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/profile">🪪</Link>
      <Footer />
    </div>
  );
}
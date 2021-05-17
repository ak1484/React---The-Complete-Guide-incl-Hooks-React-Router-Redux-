import Expenses from './Components/Expenses'
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.67,
      date: new Date(2021, 7, 18),
    },
    { id: "e2", title: "TV", amount: 774.67, date: new Date(2021, 2, 2) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New desk (wooden)",
      amount: 27,
      date: new Date(2021, 5, 28),
    },
  ];
  return (
    <div>
      <h2>start</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

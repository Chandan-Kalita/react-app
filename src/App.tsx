import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"];

  let cities = [
    "Guwahati",
    "Nalbari",
    "Dibrugarh",
    "Barpeta",
    "Jorhat",
    "Tezpur",
  ];

  return (
    <div>
      <ListGroup items={items} heading="Items" />
      <ListGroup items={cities} heading="Cities" />
    </div>
  );
}
export default App;

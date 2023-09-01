function ListGroup() {
  let items = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"];
  return (
    <>
      <h2>List</h2>
      {/* Not a good way */}
      {/* {items.length === 0 ? <p>No Items</p> : null} */}

      {/* Good way */}
      {items.length === 0 && <p>No Items</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

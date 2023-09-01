import { useState } from "react";
interface Prop {
  items: string[];
  heading: string;
}
function ListGroup({ items, heading }: Prop) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h2>{heading}</h2>
      {/* Not a good way */}
      {/* {items.length === 0 ? <p>No Items</p> : null} */}

      {/* Good way */}
      {items.length === 0 && <p>No Items</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

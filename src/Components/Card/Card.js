import React, { useEffect, useState } from "react";
import { CardWrapper, Cards } from "./Card.styles";

const ans = ["jfsnv", "kjfsv", "lks lkv", "ask adsijm"];

const Card = () => {
  const [selected, setSelected] = useState([]);

  const handleAns = (e, item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((x) => x !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  useEffect(() => {}, []);

  const selectedItem = () => {
    return <span> &larr; </span>;
  };

  return (
    <CardWrapper>
      <Cards>
        <h2>1) lorem dfdsbv svbfb uyeGhjCB asxlkaodj</h2>
        <ul>
          {ans.map((item, index) => (
            <li key={index} onClick={(e) => handleAns(e, item)} className={selected.includes(item) ? "selected" : ""}>
              {/* {selected.map((x) => (x === item ? selectedItem() : ""))} */}
              {selected.includes(item) ? selectedItem() : ""}
              {item}
            </li>
          ))}
        </ul>
        <button type="button" className="btn mt-8">
          Next
        </button>
      </Cards>
    </CardWrapper>
  );
};

export default Card;

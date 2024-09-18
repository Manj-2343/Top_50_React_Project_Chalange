import data from "./data";
import { useState } from "react";
import "./index.css";

export default function MyAccordian() {
  const [selectedData, setSelectedData] = useState(null);
  const handleClick = (id) => {
    setSelectedData(id === selectedData ? null : id);
  };
  return (
    <div className="card">
      <div>
        {data &&
          data.map((item) => {
            return (
              <div key={item.id}>
                <h3 onClick={() => handleClick(item.id)} className="heading">
                  {item.question}
                </h3>
                {selectedData && selectedData === item.id && (
                  <p className="paragraph">{item.answer}</p>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

//this is part is the single selection

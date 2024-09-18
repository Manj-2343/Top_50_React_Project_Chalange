import data from "./data";
import { useState } from "react";
import "./index.css";

export default function MyAccordian() {
  const [selectedData, setSelectedData] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleClick = (currentId) => {
    setSelectedData(currentId === selectedData ? null : currentId);
  };

  const handleMultipleClick = (currentMuId) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(currentMuId);
    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(currentMuId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(cpyMultiple);
  };

  console.log(enableMultiSelection);
  return (
    <div className="card">
      <button
        className="button"
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        Add Multiple selection
      </button>
      <div>
        {data &&
          data.map((item) => {
            return (
              <div key={item.id}>
                <h3
                  onClick={
                    enableMultiSelection
                      ? () => handleMultipleClick(item.id)
                      : () => handleClick(item.id)
                  }
                  className="heading"
                >
                  {item.question}
                </h3>
                {enableMultiSelection
                  ? multiple.indexOf(item.id) !== -1 && ( //item is present in the array
                      <p className="paragraph">{item.answer}</p>
                    )
                  : selectedData &&
                    selectedData === item.id && (
                      <p className="paragraph">{item.answer}</p>
                    )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

//this is part is the multiple  selection

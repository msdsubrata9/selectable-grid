import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [twoDMatrix, setTwoDMatrix] = useState([]);
  const [dragStartPos, setDragStartPos] = useState([]);
  const [dragEndPos, setDragEndPos] = useState([]);

  const prepareTwoDMatrix = () => {
    const matrix = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const obj = {
          pos: [i, j],
          isColor: false,
        };
        matrix.push(obj);
      }
    }
    setTwoDMatrix(matrix);
  };

  function handleOnDrag(e, pos) {
    setDragStartPos(pos);
    prepareTwoDMatrix();
  }

  function handleOnDragOver(e, pos) {
    setDragEndPos(pos);
  }

  useEffect(() => {
    prepareTwoDMatrix();
  }, []);

  const fillColor = (startPos, endPos) => {
    const [startRow, startCol] = startPos;
    const [endRow, endCol] = endPos;
    const selectedGrid = [];

    for (let i = startRow; i <= endRow; i++) {
      for (let j = startCol; j <= endCol; j++) {
        selectedGrid.push([i, j].join(""));
      }
    }

    let copyMatrix = [...twoDMatrix];
    copyMatrix.map((item) => {
      const { pos } = item;
      const stringPos = pos.join("");
      if (selectedGrid.includes(stringPos)) {
        item.isColor = true;
      }
    });
    setTwoDMatrix(copyMatrix);
  };

  useEffect(() => {
    if (dragEndPos.length > 1 && dragStartPos.length > 1) {
      fillColor(dragStartPos, dragEndPos);
    }
  }, [dragStartPos, dragEndPos]);

  return (
    <div className="App">
      <h1>Selectable Grid</h1>
      <div className="grid">
        <div className="board">
          {twoDMatrix.map((item, index) => (
            <div
              className={`cell ${item.isColor && "selected-cell"}`}
              draggable
              onDragOver={(e) => handleOnDragOver(e, item.pos)}
              onDrag={(e) => handleOnDrag(e, item.pos)}
              key={index}
            >
              {item.pos}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

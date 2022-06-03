import React, { useState, useMemo, useEffect} from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";

let url = 'https://www.dnd5eapi.co/api/monsters';

const Monsters = () => {
  const [rowData, setRowData] = useState([]);

  const [columnDefs] = useState([
    { field: "name", width: 1910 },
  ]);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  useEffect(() => {
   fetch(url)
  .then(result => result.json())
   .then(fetchResults => setRowData(fetchResults.results))
}, [])


  return (
    <div
      className="ag-theme-alpine-dark"
      style={{ height: 1000, width: 1930}}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default Monsters;

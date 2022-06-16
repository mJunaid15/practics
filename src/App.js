import { useState } from "react";
import "./App.css";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useEffect } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

function App() {
  const [data, setData] = useState([]);
  const [val, setVal] = useState([]);
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const handler = (e) => {
    setVal(e.target.value);
  };

 
  
 useEffect(() => {
  const test = ()=>{
    const rowData = [];
  
    rows.filter((assem, index) => {
      if (assem.lastName.includes(val) ) {
        rowData.push(rows[index]);
        setData(rowData);
        console.log(rowData);
      } else {
        console.log("else block");
      }
    });
   }
   test()
 }, [val])
 

  console.log(val);
  return (
    <div className="App">
      <input type="text" value={val} onChange={handler} />
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    </div>
  );
}

export default App;

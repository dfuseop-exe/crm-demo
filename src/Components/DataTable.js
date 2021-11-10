import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './DataTable.css';


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'name',
      headerName: 'NAME',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },

    {
      
      field: 'Email',
      headerName: 'Email',
      type: 'text', 
      width: 200,
    },
   
    {
      field: 'phone',
      headerName: 'PHONE NUMBER',
      type: 'phone', 
      width: 200,
    },

    {
      
      field: 'contactowner',
      headerName: 'CONTACT OWNER',
      type: 'text', 
      width: 200,
    },
    
    {
      
      field: 'leadstatus',
      headerName: 'LEAD STATUS',
     
      width: 200,
    },
    
  ];
  
  
 

const DataTable = (props) => {



    return (
        <div>
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                
                rows={props.rows}
                columns={columns}
                pageSize={10}
                checkboxSelection
              
                style={{backgroundColor : props.mode ==="white" ?"white":"#14130c" , color : props.mode ==="white" ?"black":"white" , fontFamily : 'Comfortaa'}}
                
               
            />
            </div>
            
        </div>
    )
}

export default DataTable
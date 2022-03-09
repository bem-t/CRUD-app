import React from 'react';
import { Checkbox, TableCell, TableRow, TableHead as MuiTableHead} from '@mui/material';


const TABLE_HEADER_NAMES = {
    firstName: 'First Name',
    lastName: 'Last Name',
    dataOfBirth: 'D.O.B',
    maritalStatus: 'Marital Status'
};


export default function TableHead() {
  return (
    <MuiTableHead>
      <TableRow>
          <TableCell
            sortDirection={'asc'}
            align='center'
            width='18%'
          >
              <Checkbox />
          </TableCell>
          {Object.values(TABLE_HEADER_NAMES).map((value)=>{
              <TableCell>{value}</TableCell>
          })}
      </TableRow>
    </MuiTableHead>
  )
}

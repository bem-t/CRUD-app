import { TableBody } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import User from './user'
import TableHead from './table-head'
import { Paper } from '@mui/material'

export default function Users({users}) {
  return (
    <Box sx={{width: '100%'}}>
      <Paper sx={{width: '100%', mb:2}}>
          <TableHead order='asc' rowCount={users.length}/>
          <TableBody>
              {
                  users.map((user)=>{
                      <User user={user} />
                  })
              }
          </TableBody>
      </Paper>
    </Box>
  )
}

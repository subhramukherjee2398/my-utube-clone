import { IconButton, Paper } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Searchbar() {
  return (
    <Paper
      component='form'
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 1,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default Searchbar;
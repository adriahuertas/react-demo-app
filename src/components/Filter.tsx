import { AccountCircle } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'
import { type FC } from 'react'

interface FilterProps {
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  filterValue: string
}

const Filter: FC<FilterProps> = ({ handleFilterChange, filterValue }) => {
  return (
    <TextField
      sx={{ width: '300px', marginBottom: '20px', backgroundColor: 'rgb(243, 243, 243)' }}
      id="input-with-icon-textfield"
      value={filterValue}
      label="Buscar usuario"
      onChange={handleFilterChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        )
      }}
      variant="standard"
    />
  )
}

export default Filter

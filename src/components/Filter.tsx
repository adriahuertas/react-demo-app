import { AccountCircle } from "@mui/icons-material"
import { InputAdornment, TextField } from "@mui/material"

interface FilterProps {
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  filterValue: string
}

const Filter: React.FC<FilterProps> = ({ handleFilterChange, filterValue }) => {
  return (
    <TextField
      id="input-with-icon-textfield"
      value={filterValue}
      label="Buscar usuario"
      onChange={handleFilterChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
      variant="standard"
    />
  )
}

export default Filter

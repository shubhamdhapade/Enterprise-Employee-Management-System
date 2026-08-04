import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

interface EmployeeSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const EmployeeSearch = ({
  value,
  onChange,
}: EmployeeSearchProps) => {
  return (
    <TextField
      fullWidth
      size="small"
      placeholder="Search employees..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default EmployeeSearch;
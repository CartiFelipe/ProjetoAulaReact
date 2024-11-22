import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

type CheckboxProps = {
  labels: string[];
  handleCheckChnage?: () => void;
};

const index = ({ labels, handleCheckChnage }: CheckboxProps) => {
  return (
    <FormGroup sx={{ padding: 1 }}>
      {labels.map((label) => (
        <FormControlLabel
          control={<Checkbox />}
          label={label}
          onChange={handleCheckChnage && handleCheckChnage}
        />
      ))}
    </FormGroup>
  );
};
export default index;

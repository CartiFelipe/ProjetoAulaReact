import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ptBR } from "@mui/x-date-pickers/locales";
import { useState } from "react";
import { Button } from "@mui/material";

const index = () => {
  const date = dayjs(Date());
  const [value, setValue] = useState(date);

  return (
    <>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
      >
        <DatePicker
          format="DD/MM/YYYY"
          value={value}
          onChange={(selectedDate) => {
            selectedDate ? setValue(selectedDate) : setValue(dayjs(Date.now()));
          }}
        />
      </LocalizationProvider>
      <Button onClick={() => alert(value)}>Click me </Button>
    </>
  );
};
export default index;

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { ptBR } from "@mui/x-date-pickers/locales";
import { useState } from "react";
import { Button } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const index = () => {
  const date = dayjs(Date());
  const [value, setValue] = useState<Dayjs | null>(date);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker"]}>
          <DateTimePicker
            label="Selecione uma data e um horário"
            onChange={(date) => setValue(date)}
            value={value}
            format="DD/MM/YYYY HH:mm"
            sx={{ width: 300 }}
          />
        </DemoContainer>
      </LocalizationProvider>
      <Button onClick={() => alert(value)}>clica </Button>
    </>
  );
};
export default index;

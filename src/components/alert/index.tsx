import { Alert, AlertTitle } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect, useState } from "react";
type AlertProps = {
  title: string;
  label: string;
  handleClose?: () => void;
};

const index = ({ title, label, handleClose }: AlertProps) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsOpen(false), 2000);
  }, []);

  return (
    <>
      {isOpen && (
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          onClose={() => {
            setIsOpen(false);
            handleClose && handleClose();
          }}
        >
          <AlertTitle>{title}</AlertTitle>
          {label}
        </Alert>
      )}
    </>
  );
};
export default index;

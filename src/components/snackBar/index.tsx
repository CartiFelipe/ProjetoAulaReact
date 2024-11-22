import Button from "@mui/material/Button";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { FC, useState } from "react";

type SnackBarProps = {
  message: string;
  autoHidenDuration?: number;
};

const index: FC<SnackBarProps> = ({ message, autoHidenDuration = 2000 }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);
  const action = (
    <>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={autoHidenDuration}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </div>
  );
};
export default index;

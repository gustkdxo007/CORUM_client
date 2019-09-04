import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Login from "./Login";

function LoginBtn() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        Log In
      </Button>
      <Dialog
        aria-labelledby="simple-dialog-title"
        open={open}
        onClose={handleClose}
      >
        <Login />
      </Dialog>
    </div>
  );
}

export default LoginBtn;

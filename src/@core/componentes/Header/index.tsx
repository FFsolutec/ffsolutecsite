import React from "react";

import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      className="header"
    >
      <Toolbar>
        <Typography variant="h6" className="logo">
          FFSolutec
        </Typography>
        <Button color="inherit">Sobre</Button>
        <Button color="inherit">Serviços</Button>
        <Button color="inherit">Clientes</Button>
        <Button color="inherit">Contato</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

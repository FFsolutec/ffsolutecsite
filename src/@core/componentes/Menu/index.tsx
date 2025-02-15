import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const menuItems = [
    { text: "Sobre", link: "#sobre" },
    { text: "Serviços", link: "#servicos" },
    { text: "Contato", link: "#contato" },
  ];

  return (
    <AppBar position="static" className="menu">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="toolBar"
      >
        {/* Logo */}
        <img src="/logoColored.png" alt="logo" style={{ height: 40 }} />

        {/* Links de navegação para telas maiores */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            alignItems: "center",
          }}
        >
          {menuItems.map((item) => (
            <Typography
              key={item.text}
              component="a"
              href={item.link}
              sx={{ color: "white", textDecoration: "none" }}
            >
              {item.text}
            </Typography>
          ))}
        </Box>

        {/* Botão WhatsApp */}
        <Button
          variant="contained"
          className="buttonPadrao"
          href="https://api.whatsapp.com/send?phone=5521999991286&amp;text=Bom%20dia%20gostaria%20de%20saber%20sobre%20os%20serviços%20da%20FFSOLUTEC!"
          target="_blank"
        >
          Fale com um especialista
        </Button>

        {/* Menu hamburguer para telas menores */}
        {isMobile && (
          <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Drawer (Menu lateral) */}
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 250 }}>
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}
            >
              <CloseIcon />
            </IconButton>
            <List>
              {menuItems.map((item) => (
                <ListItem
                  key={item.text}
                  component="a"
                  href={item.link}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
              <ListItem>
                <Button
                  fullWidth
                  variant="contained"
                  href="https://api.whatsapp.com/send?phone=5521999991286&amp;text=Bom%20dia%20gostaria%20de%20saber%20sobre%20os%20serviços%20da%20FFSOLUTEC!"
                  target="_blank"
                  className="buttonPadrao"
                >
                  Fale com um especialista
                </Button>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;

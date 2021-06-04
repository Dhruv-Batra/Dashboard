import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleMenu}>
            <MenuIcon />

            <Typography>Menu</Typography>
          </IconButton>
          <Typography variant="h5" style={{ paddingLeft: "500px" }}> TJ Elementary Dashboard </Typography>

          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => history.push("/")}>Homepage</MenuItem>
            <MenuItem onClick={() => history.push("/teacher")}>
              Teacher Directory
            </MenuItem>
            <MenuItem onClick={() => history.push("/student")}>
              Student Directory
            </MenuItem>
            <MenuItem onClick={() => history.push("/calendar")}>
              Calendar
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

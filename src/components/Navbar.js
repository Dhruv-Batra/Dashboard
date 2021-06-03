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

  // const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleMenu}>
            <MenuIcon />

            <Typography>Menu</Typography>
          </IconButton>

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

// const StyledButton = withStyles({
//   root: {
//     background: "linear-gradient(45deg, #FDC700 30%, #FDC700 90%)", // gradient color l -> r
//     borderRadius: 3,
//     border: 0,
//     color: "black", // text color
//     height: 48,
//     padding: "0 30px",
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//   },
//   label: {
//     //textTransform: 'capitalize',
//   },
// }) (Button);

// return (
//   <div
//     style={{
//       padding: "15px",
//       backgroundColor: "#003c6c",
//       display: "flex",
//       flexDirection: "row",
//       justifyContent: "center",
//     }}

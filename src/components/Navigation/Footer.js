import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export default function Footer() {
  const theme = createMuiTheme({
    overrides: { MuiAppBar: { colorPrimary: { backgroundColor: "#003c6c" } } },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="body1" color="003c6c">
            © 2021 Positivity, Respect, Diversity, Education, Comradery. | 1609
            University Ave, Charlottesville, VA 22903 | Phone: 434-293-4402 |
            Email: contactus@tjes.edu
          </Typography>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
}

import * as React from "react";

import { AppBar, Toolbar, Typography, Container, Box } from "@material-ui/core";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../actions";

const MainPage = () => {
    const dispatch = useDispatch()

 const handleLogOutClick = () => {
      dispatch(userLoggedOut())
  };

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Witaj
            </Typography>
            <Button color="inherit" onClick={handleLogOutClick}>
              Wyloguj
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Container maxWidth="md">
        <div>
          <Typography variant="h2" gutterBottom>
            Lista danych
          </Typography>

          <Typography gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus eius cupiditate sit, eligendi consequuntur similique
            nisi error sunt iusto exercitationem modi pariatur hic corporis
            aperiam veniam labore? Inventore, qui sit.
          </Typography>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default MainPage;

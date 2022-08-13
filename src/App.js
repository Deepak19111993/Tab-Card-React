import logo from "./logo.svg";
import "./App.css";
import Tab from "./Container/Tab/Tab";
import GlobalStyles from "./Global.styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Settings from "./Container/Settings/Settings";
import Questions from "./Container/Questions/Questions";
import FinalScreen from "./Container/FinalScreen/FinalScreen";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <Typography variant="h2" fontWeight="bold">
                      Quiz App
                    </Typography>
                    <Settings />
                  </>
                }
              />
              <Route exact path="/question" element={<Questions />} />
              <Route exact path="/score" element={<FinalScreen />} />
              <Route exact path="/tab" element={<Tab />} />
              <Route exact path="/tab/:id" element={<Tab />} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {StepperStep} from "./component/StepperStep";
import {createTheme, ThemeProvider} from "@mui/material";

function App() {
    const theme = createTheme({
        palette:{
            mode:"dark"
        }
    })
  return (
    <div className="App">
      <header className="App-header">
          <ThemeProvider theme={theme}>
              <StepperStep/>
          </ThemeProvider>
      </header>
    </div>
  );
}

export default App;

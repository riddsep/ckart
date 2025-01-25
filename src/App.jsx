import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

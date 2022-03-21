import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle"
function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <SideBar />
        <Routes></Routes>
      </Router>
    </>
  );
}

export default App;

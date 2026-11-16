import "./App.css";

import { MainLayout } from "./MainLayout";
import { ImportMatchPage } from "../pages/match-import/MatchImportPage";
import { Routes } from "react-router";
import { Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/import-match" element={<ImportMatchPage/>}></Route>
      </Route>
    </Routes>
  
  );
}

export default App;

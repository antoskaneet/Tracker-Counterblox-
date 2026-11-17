import "./App.css";

import { Routes, Route } from "react-router";
import { MainLayout } from "./MainLayout";

import { ImportMatchPage } from "../pages/match-import/MatchImportPage";
import { StartPage } from "../pages/StartPage";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                {<Route path="/import-match" element={<ImportMatchPage />} />}
                <Route path="/" element={<StartPage />} />
            </Route>
        </Routes>
    );
}

export default App;
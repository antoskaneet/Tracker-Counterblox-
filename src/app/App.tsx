import "./App.css";

import { Routes, Route } from "react-router";
import { MainLayout } from "./MainLayout";

import { ImportMatchPage } from "../pages/match-import/MatchImportPage";
import { StartPage } from "../pages/StartPage";
import { MatchHistory } from "../pages/MatchHistory";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/import-match" element={<ImportMatchPage />} />
                <Route path="/" element={<StartPage />} />
                <Route path="/match-history" element={<MatchHistory />} />
            </Route>
        </Routes>
    );
}

export default App;
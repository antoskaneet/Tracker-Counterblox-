import "./App.css";

import { init } from "./shared/api/database/database";

import { ImportMatchPage } from "./pages/match-import/MatchImportPage";

function App() {
  init()

  return (
    <ImportMatchPage></ImportMatchPage>
  );
}

export default App;

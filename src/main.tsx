import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { init } from "./shared/api/database/database";

async function startApp() {
    await init();

    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
}

startApp();
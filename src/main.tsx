import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { isTauri } from "@tauri-apps/api/core";

import App from "./app/App";
import { init } from "./shared/api/database/database";

async function startApp() {
    if (isTauri()) {
        await init();
    }

    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

startApp();
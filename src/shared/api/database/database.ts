
import Database from "@tauri-apps/plugin-sql";

let db: Database | null = null;

export async function init() {
    db = await Database.load("sqlite:tracker.db");

    await db.execute("PRAGMA foreign_keys = ON");

    await db.execute(`
        CREATE TABLE IF NOT EXISTS matches (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
    `);

    await db.execute(`
        CREATE TABLE IF NOT EXISTS players (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            match_id INTEGER NOT NULL,
            nickname TEXT NOT NULL,
            team TEXT NOT NULL CHECK(team IN ('T', 'CT')),
            kills INTEGER NOT NULL DEFAULT 0,
            deaths INTEGER NOT NULL DEFAULT 0,

            FOREIGN KEY (match_id)
                REFERENCES matches(id)
                ON DELETE CASCADE
        )
    `);

    console.log("Database initialized!");
}

export async function getDatabase(): Promise<Database> {
    if (!db) {
        throw new Error("Database is not initialized!");
    }

    return db;
}

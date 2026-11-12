
import { getDatabase } from "../../../shared/api/database/database";

import type {
    Match,
    MatchPlayer,
    MatchWithPlayers,
    NewMatchPlayer
} from "../model/types";

export async function createMatch(players: NewMatchPlayer[]): Promise<number> {
    const db = await getDatabase();

    const result = await db.execute(
        "INSERT INTO matches DEFAULT VALUES"
    );

    const matchId = result.lastInsertId;

    if (matchId === undefined) {
        throw new Error("Failed to get match ID");
    }

    for (const player of players) {
        await db.execute(
            `INSERT INTO players
            (match_id, nickname, team, kills, deaths)
            VALUES (?, ?, ?, ?, ?)`,
            [
                matchId,
                player.nickname,
                player.team,
                player.kills,
                player.deaths
            ]
        );
    }

    return matchId;
}

export async function getAllMatches(): Promise<Match[]> {
    const db = await getDatabase();

    return await db.select<Match[]>(
        "SELECT * FROM matches ORDER BY id DESC"
    );
}

export async function getMatchById(
    matchId: number
): Promise<MatchWithPlayers | null> {
    const db = await getDatabase();

    const [match] = await db.select<Match[]>(
        "SELECT * FROM matches WHERE id = ?",
        [matchId]
    );

    if (!match) {
        return null;
    }

    const players = await db.select<MatchPlayer[]>(
        "SELECT * FROM players WHERE match_id = ? ORDER BY id ASC",
        [matchId]
    );

    return {
        ...match,
        players
    };
}

export async function deleteMatch(matchId: number): Promise<void> {
    const db = await getDatabase();

    await db.execute(
        "DELETE FROM matches WHERE id = ?",
        [matchId]
    );
}

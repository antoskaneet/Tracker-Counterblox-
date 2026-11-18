import { useEffect, useState } from "react";
import { getAllMatches, getMatchById } from "../entities";
import type { MatchWithPlayers } from "../entities";
import "./MatchHistory.css";

export function MatchHistory() {
    const [matches, setMatches] = useState<MatchWithPlayers[]>([]);

    useEffect(() => {
        async function loadMatches() {
            const allMatches = await getAllMatches();

            const matchesWithPlayers = await Promise.all(
                allMatches.map(match => getMatchById(match.id))
            );

            setMatches(
                matchesWithPlayers.filter(match => match !== null)
            );
        }

        loadMatches();
    }, []);

    return (
        <div className="match-history">
            <pre>
                {JSON.stringify(matches, null, 2)}
            </pre>
        </div>
    );
}
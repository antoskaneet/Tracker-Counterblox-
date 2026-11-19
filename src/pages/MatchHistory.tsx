
import { useEffect, useState } from "react";
import "./MatchHistory.css";

import { Match } from "../widget/match/Match";

import { getAllMatches, getMatchById, MatchWithPlayers} from "../entities";



export function MatchHistory() {
    const [matches, setMatches] = useState<MatchWithPlayers[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    async function loadMatches() {
        try {
            setError(null);

            const allMatches = await getAllMatches();

            const fullMatches = await Promise.all(
                allMatches.map(async (match) => {
                    return await getMatchById(match.id);
                })
            );

            const validMatches = fullMatches.filter(
                (match): match is MatchWithPlayers => match !== null
            );

            setMatches(validMatches);

        } catch (error) {
            console.error(error);
            setError("Не удалось загрузить матчи");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadMatches();
    }, []);

    if (loading) {
        return <div>Загрузка матчей...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="match-history">

            {matches.length === 0 ? (
                <p>Матчей пока нет</p>
            ) : (
                matches.map((match) => (
                    <Match
                        key={match.id}
                        match={match}
                    />
                ))
            )}

        </div>
    );
}

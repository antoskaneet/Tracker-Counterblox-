
import { useState } from "react";
import "./Match.css";
import { MatchWithPlayers } from "../../entities";
import { getProfile } from "../../features/profile-user/model/useProfile";
import { PlayerMatch } from "./MatchPlayer";

type MatchProps = {
    match: MatchWithPlayers;
};

export function Match({ match }: MatchProps) {
    const [isOpen, setIsOpen] = useState(false);

    const currentPlayer = match.players.find(
        (player) => player.nickname === getProfile()
    );

    const tPlayers = match.players.filter(
        (player) => player.team === "T"
    );

    const ctPlayers = match.players.filter(
        (player) => player.team === "CT"
    );

    return (
        <div className="match-card">
            <div
                className="match-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="match-map">de_zalupa</span>

                <span className="match-date">
                    {match.created_at}
                </span>

                <span className="match-kd">
                    {currentPlayer
                        ? `${currentPlayer.kills} / ${currentPlayer.deaths}`
                        : "Нет данных"
                    }
                </span>

                <span className="match-arrow">
                    {isOpen ? "▲" : "▼"}
                </span>
            </div>

            {isOpen && (
                <div className="match-players">
                    <div className="team-title t-title">
                        T — ТЕРРОРИСТЫ
                    </div>

                    <div className="player-row player-heading">
                        <span>Игрок</span>
                        <span>Команда</span>
                        <span>K</span>
                        <span>D</span>
                        <span>A</span>
                    </div>

                    {tPlayers.map((player) => (
                        <PlayerMatch
                            key={player.id}
                            player={player}
                        />
                    ))}


                    <div className="team-title ct-title">
                        КОНТР-ТЕРРОРИСТЫ
                    </div>

                    <div className="player-row player-heading">
                        <span>Игрок</span>
                        <span>Команда</span>
                        <span>K</span>
                        <span>D</span>
                        <span>A</span>
                    </div>

                    {ctPlayers.map((player) => (
                        <PlayerMatch
                            key={player.id}
                            player={player}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

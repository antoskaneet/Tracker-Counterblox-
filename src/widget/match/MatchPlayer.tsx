
import { MatchPlayer } from "../../entities";

type PlayerMatchProps = {
    player: MatchPlayer;
};

export function PlayerMatch({ player }: PlayerMatchProps) {
    return (
        <div className="player-row">
            <span>{player.nickname}</span>
            <span>{player.team}</span>
            <span>{player.kills}</span>
            <span>{player.deaths}</span>
            <span>0</span>
        </div>
    );
}

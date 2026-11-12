
import { NewMatchPlayer } from "../../../entities";

type OcrItem = {
    text: string;
    score: number;
    poly: number[][];
};

export function parseMatchPlayers(items: OcrItem[]): NewMatchPlayer[] {
    const players: NewMatchPlayer[] = [];

    for (let i = 0; i < 5; i++) {
        players.push({
            nickname: items[i].text,
            team: "CT",
            kills: Number(items[i + 5].text),
            deaths: Number(items[i + 10].text)
        });
    }

    for (let i = 0; i < 5; i++) {
        players.push({
            nickname: items[i + 15].text,
            team: "T",
            deaths: Number(items[i + 20].text),
            kills: Number(items[i + 25].text)
        });
    }

    return players;
}

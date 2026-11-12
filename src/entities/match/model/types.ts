
export type Team = "T" | "CT";

export type MatchPlayer = {
    id: number;
    match_id: number;
    nickname: string;
    team: Team;
    kills: number;
    deaths: number;
};

export type NewMatchPlayer = {
    nickname: string;
    team: Team;
    kills: number;
    deaths: number;
};

export type Match = {
    id: number;
    created_at: string;
};

export type MatchWithPlayers = Match & {
    players: MatchPlayer[];
};

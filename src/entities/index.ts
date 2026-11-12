
export {
    createMatch,
    getAllMatches,
    getMatchById,
    deleteMatch
} from "./match/api/matchRepository";

export type {
    Team,
    Match,
    MatchPlayer,
    NewMatchPlayer,
    MatchWithPlayers
} from "./match/model/types";

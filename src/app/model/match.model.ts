import team from "./team.model";
/**
 * Created by kevinkreuzer on 16.11.16.
 */
interface match {
  leagueId: string,
  homeTeam: team,
  awayTeam: team
}

export default match;


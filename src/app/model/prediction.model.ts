/**
 * Created by kevinkreuzer on 24.12.16.
 */

interface prediction {
  leagueID: string,
  leagueName: string,
  homeTeam: string,
  homeTeamId: number,
  awayTeam: string,
  awayTeamId: number,
  winner: string,
  matchDate: string
}

export default prediction;

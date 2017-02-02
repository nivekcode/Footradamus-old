/**
 * Created by kevinkreuzer on 24.12.16.
 */

interface prediction {
  //ID is optional because it gets generated in the Backend
  id ?: number,
  leagueID: string,
  leagueName: string,
  homeTeam: string,
  homeTeamId: number,
  awayTeam: string,
  awayTeamId: number,
  winner: string,
  matchDate: string,
  wasPredictionCorrect ?: boolean
}

export default prediction;

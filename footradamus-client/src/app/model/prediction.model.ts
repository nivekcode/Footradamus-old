/**
 * Created by kevinkreuzer on 24.12.16.
 */

interface predictionHistory {
  correctlyPredicted: boolean
}

interface prediction {
  //ID is optional because it gets generated in the Backend
  _id ?: number,
  leagueID: string,
  leagueName: string,
  homeTeam: string,
  homeTeamId: number,
  awayTeam: string,
  awayTeamId: number,
  winner: string,
  matchDate: string,
  predictionHistory?: predictionHistory
}

export default prediction;

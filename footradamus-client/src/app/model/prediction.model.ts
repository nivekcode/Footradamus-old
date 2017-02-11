/**
 * Created by kevinkreuzer on 24.12.16.
 */

interface predictionHistory {
  correctlyPredicted: boolean
}

interface prediction {
  //ID is optional for Posts - it gets generated in the Backend
  _id ?: string,
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

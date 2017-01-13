/**
 * Created by kevinkreuzer on 09.01.17.
 */

export interface leaguePredictions{
  leagueId: string,
  leagueName: string,
  totalCorrectPredictions: number,
  totalFalsePredictions: number
}


interface predictionStatistics {
  totalFalsePredictions: number,
  totalCorrectPredictions: number,
  statisticsPerLeague: Array<leaguePredictions>,
}

export default predictionStatistics;

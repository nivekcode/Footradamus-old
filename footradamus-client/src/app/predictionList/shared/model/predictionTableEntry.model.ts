/**
 * Created by kevinkreuzer on 23.01.17.
 */
interface predictionTableEntry {
  id: string,
  leagueName: string,
  homeTeam: string,
  awayTeam: string,
  winner: string,
  matchDate: string,
  //Needs to be a string because the content ist HTML
  isPredicted: string,
  //Needs to be a string because the content ist HTML
  isCorrectlyPredicted: string,
  actions: string
}

export default predictionTableEntry;

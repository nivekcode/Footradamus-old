/**
 * Created by kevinkreuzer on 23.01.17.
 */

interface predictionTableEntry {
  id: number,
  leagueName: string,
  homeTeam: string,
  awayTeam: string,
  winner: string,
  matchDate: string,
  actions: string
}

export default predictionTableEntry;

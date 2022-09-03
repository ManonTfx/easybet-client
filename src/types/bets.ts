export interface GetAllBets_getAllBets {
  __typename: 'IBet';
  id: string;
  name: string;
  stake: number;
  bookmaker: string;
  odd: number;
  category: string;
  result: number | null;
  date: string;
  createdAt: any;
}

export interface GetAllBets {
  getAllBets: GetAllBets_getAllBets[];
}

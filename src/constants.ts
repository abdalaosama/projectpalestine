export type Reference = {
  refrenceId: string;
  title: string;
  link: string;
};

export type Claim = {
  claimId: string;
  title: string;
  date: string;
  description: string;
  rating: string;
  refrences: Array<Reference>;
};

export type Company = {
  logo: string;
  name: string;
  description: string;
  companyId: string;
  rating: 1 | 2 | 3;
  claims: Array<Claim>;
};

export type User = {
  username: string;
  userId: string;
  userRating: string;
  userSubmissions: Array<string>; //array of claimIDs that we can retrieve from the database
};

export const Tags = {
  Technology: "Technology",
  Automotive: "Automotive",
  Pharmaceuticals: "Pharmaceuticals",
  FoodAndBeverages: "Food and Beverages",
  Entertainment: "Entertainment",
  FashionAndApparel: "Fashion and Apparel",
  FinanceAndBanking: "Finance and Banking",
  Retail: "Retail",
  Telecommunications: "Telecommunications",
  TravelAndHospitality: "Travel and Hospitality",
  SportsAndFitness: "Sports and Fitness",
  Other: "Other",
};

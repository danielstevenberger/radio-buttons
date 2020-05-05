export class Card {
  public cardTitle: string;
  public cardOptions: string[];
  constructor(cardTitle: string, cardOptions: string[]) {
    this.cardTitle = cardTitle;
    this.cardOptions = cardOptions;
  }
}

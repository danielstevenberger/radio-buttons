import { Component, OnInit } from "@angular/core";
import { CardService } from "../cards/card.service";
import { Card } from "../cards/card.model";

@Component({
  selector: "app-operations",
  templateUrl: "./operations.component.html",
  styleUrls: ["./operations.component.css"],
})
export class OperationsComponent implements OnInit {
  cards: Card[];

  constructor(private cardSerivce: CardService) {
    this.cards = cardSerivce.getCards();
  }

  ngOnInit(): void {}
}

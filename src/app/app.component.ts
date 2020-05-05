import { Component } from "@angular/core";
import { CardService } from "./cards/card.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private cardService: CardService) {}
  currentOption: string;
  currentTitle: string;
  getValue() {
    this.currentTitle = this.cardService.getCardTitle();
    if (this.cardService.getValue()) {
      this.currentOption = this.cardService.getValue();
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { CardService } from "./cards/card.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit{
  constructor(private cardService: CardService ) {}
  currentOption: string;
  currentTitle: string;

  ngOnInit(){
    this.cardService.cardTitle.subscribe((cardTitle: string )=>{
      this.currentTitle = cardTitle
    })
    this.cardService.cardOption.subscribe((cardOption: string )=>{
      this.currentOption = cardOption
    })
  }
}

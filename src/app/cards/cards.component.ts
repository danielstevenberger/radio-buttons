import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CardService } from './card.service';

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.css"],
})
export class CardsComponent implements OnInit {
  @Input() cardTitle: string;
  @Input() cardOptions: string[];
  cardForm: FormGroup;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardForm = new FormGroup({
      options: new FormControl(null, Validators.required),
    });
    this.cardService.addForm(this.cardForm)
  }

  submitForm(){
    this.cardService.clearForms(this.cardForm)
  }


}

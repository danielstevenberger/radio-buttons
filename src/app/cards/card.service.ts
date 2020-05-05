import { Injectable } from "@angular/core";
import { Card } from "./card.model";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class CardService {
  private forms: FormGroup[];
  private cardTitle: string;

  private card: Card[] = [
    new Card("One", ["one1"]),
    new Card("Two", ["two1", "two2"]),
    new Card("Three", ["three1", "three2", "three3"]),
  ];
  constructor() {}

  getCards() {
    return this.card.slice();
  }

  addForm(form: FormGroup) {
    if (!this.forms) {
      this.forms = [form];
    } else {
      this.forms.push(form);
    }
  }

  getForms() {
    return this.forms.slice();
  }
  clearForms(selectedForm: FormGroup) {
    for (let form of this.forms) {
      if (form != selectedForm) {
        form.get("options").setValue(null);
      }
    }
  }
  getValue() {
    for (let form of this.forms) {
      if (form.valid) {
        return form.get("options").value.slice();
      }
    }
  }
  setCardTitle(cardTitle: string){
    this.cardTitle = cardTitle
  }
  getCardTitle(){
    return this.cardTitle.slice()
  }
}

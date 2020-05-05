import { Component} from '@angular/core';
import { CardService } from './cards/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cardService: CardService){

  }
  currentOption = "none"
  getValue(){
    if(this.cardService.getValue()){
    this.currentOption = this.cardService.getValue();
    }
  }

}

import {Component} from '@angular/core';
import {OverAllService} from './over-all.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;

  constructor(private overAllService: OverAllService) {
    this.user = this.overAllService.user;
  }
}

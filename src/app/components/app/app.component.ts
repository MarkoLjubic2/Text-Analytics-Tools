import { Component } from '@angular/core';
import {ConfigurationService} from "../../services/configuration-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Text-Analytics-Tools';

  constructor(private configurationService: ConfigurationService) {}

}

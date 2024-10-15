import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from "../../services/configuration-service";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  token: string;

  constructor(private configurationService: ConfigurationService) {
    this.token = this.configurationService.getToken();
  }

  ngOnInit(): void {
  }

  setToken() {
    this.configurationService.setToken(this.token);
  }
}

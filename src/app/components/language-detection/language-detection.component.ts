import {Component, OnInit} from '@angular/core';
import {RestService} from "../../services/rest-service";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text: string = '';
  clean: boolean = false;

  result: string[] = [];

  constructor(private restService: RestService) { }

  ngOnInit(): void {}

  submit(): void {
    this.restService.submitLanguageDetection(this.text, this.clean)
      .subscribe(result => {
        this.result = [];
        result.detectedLangs.forEach(item => {
          this.result.push(item.lang + ' (' + item.confidence + ')');
        })
      });
  }
}

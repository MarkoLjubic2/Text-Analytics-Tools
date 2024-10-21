import {Component, OnInit} from '@angular/core';
import {RestService} from "../../services/rest-service";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text: string = '';
  language: string = 'auto';

  type: string = '';
  score: number = -1;
  color: string = '';

  constructor(private restService: RestService) { }

  ngOnInit(): void {}

  submit(): void {
    this.restService.submitSentimentAnalysis(this.text, this.language)
      .subscribe(result  => {
        this.type = result.sentiment.type;
        this.score = result.sentiment.score;
        this.color = this.getColor(this.score);
      });
  }

  private getColor(score: number): string {
    const r = Math.round(255 * (1 - (score + 1) / 2));
    const g = Math.round(255 * ((score + 1) / 2));
    return `rgb(${r}, ${g}, 0)`;
  }

}

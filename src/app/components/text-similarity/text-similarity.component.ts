import {Component, OnInit} from '@angular/core';
import {RestService} from "../../services/rest-service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  text1: string = '';
  text2: string = '';

  similarity: string = '';

  constructor(private restService: RestService) {}

  ngOnInit(): void {
  }

  submit(): void {
    this.restService.submitTextSimilarity(this.text1, this.text2)
      .subscribe(result => {
        this.similarity = result.similarity;
      });
  }

}

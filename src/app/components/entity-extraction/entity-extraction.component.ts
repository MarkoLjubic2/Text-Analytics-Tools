import {Component, OnInit} from '@angular/core';
import {EEResult} from "../../model";
import {RestService} from "../../services/rest-service";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})

export class EntityExtractionComponent implements OnInit{

  inputText: string = '';
  minConfidence: number = 0.5;
  includeImages: boolean = false;
  includeAbstract: boolean = false;
  includeCategories: boolean = false;

  result : EEResult | undefined;

  constructor(private restService: RestService) {}

  ngOnInit(): void {}

  private buildIncludeArray(): string[] {
    return [
      'types',
      ...(this.includeImages ? ['image'] : []),
      ...(this.includeAbstract ? ['abstract'] : []),
      ...(this.includeCategories ? ['categories'] : [])
    ];
  }

  extractEntities() {
    const include = this.buildIncludeArray();

    this.restService.submitEntityExtraction(this.inputText, this.minConfidence, include.join(','))
      .subscribe((result) => {
          this.result = result;
        },
        (error) => {
          console.error('Error extracting entities:', error);
        }
      );
  }

}


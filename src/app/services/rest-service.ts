import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {ConfigurationService} from "./configuration-service";
import {HttpClient} from "@angular/common/http";
import {EntityExtractionResult, LanguageDetectionResult, SentimentAnalysisResult, TextSimilarityResult} from "../model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private readonly apiUrl = environment.apiUrl;

  constructor(
    private configurationService: ConfigurationService,
    private httpClient: HttpClient
  ) {
  }

  submitEntityExtraction(text: string, minConfidence: number, include: string): Observable<EntityExtractionResult> {
    const params = {
      text: text,
      min_confidence: minConfidence.toString(),
      include: include,
      token: this.configurationService.getToken(),
    };

    return this.httpClient.get<EntityExtractionResult>(
      `${this.apiUrl}/datatxt/nex/v1/`,
      {params}
    );
  }

  submitTextSimilarity(text1: string, text2: string): Observable<TextSimilarityResult> {
    const params = {
      text1: text1,
      text2: text2,
      token: this.configurationService.getToken(),
    };

    return this.httpClient.get<TextSimilarityResult>(
      `${this.apiUrl}/datatxt/sim/v1`,
      {params}
    );
  }

  submitLanguageDetection(text: string, clean: boolean): Observable<LanguageDetectionResult> {
    const params = {
      text: text,
      clean: clean,
      token: this.configurationService.getToken(),
    };
    return this.httpClient.get<LanguageDetectionResult>(
      `${this.apiUrl}/datatxt/li/v1`,
      {params}
    );
  }

  submitSentimentAnalysis(text: string, lang: string): Observable<SentimentAnalysisResult> {
    const params = {
      text: text,
      lang: lang,
      token: this.configurationService.getToken(),
    };
    return this.httpClient.get<any>(
      `${this.apiUrl}/datatxt/sent/v1`,
      {params}
    );
  }

}

import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {ConfigurationService} from "./configuration-service";
import {HttpClient} from "@angular/common/http";
import {EEResult} from "../model";
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

  submitEntityExtraction(
    text: string,
    minConfidence: number,
    include: string
  ): Observable<EEResult> {
    const params = {
      text: text,
      min_confidence: minConfidence.toString(),
      include: include,
      token: this.configurationService.getToken(),
    };

    return this.httpClient.get<EEResult>(
      `${this.apiUrl}/datatxt/nex/v1/`,
      { params }
    );
  }

}

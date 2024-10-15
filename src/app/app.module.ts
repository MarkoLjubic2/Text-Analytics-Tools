import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from "@angular/common/http";
import {ConfigurationComponent} from './components/configuration/configuration.component';
import {HomeComponent} from './components/home/home.component';
import {FormsModule} from "@angular/forms";
import {EntityExtractionComponent} from './components/entity-extraction/entity-extraction.component';
import {TextSimilarityComponent} from './components/text-similarity/text-similarity.component';
import {LanguageDetectionComponent} from './components/language-detection/language-detection.component';
import {SentimentAnalysisComponent} from './components/sentiment-analysis/sentiment-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    HomeComponent,
    EntityExtractionComponent,
    TextSimilarityComponent,
    LanguageDetectionComponent,
    SentimentAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

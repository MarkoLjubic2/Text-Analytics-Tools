import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { EntityExtractionComponent } from './components/entity-extraction/entity-extraction.component';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { HistoryComponent } from './components/history/history.component';
import { AuthGuard } from './services/auth-service';

const routes: Routes = [
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
  { path: 'entity-extraction', component: EntityExtractionComponent, canActivate: [AuthGuard] },
  { path: 'text-similarity', component: TextSimilarityComponent, canActivate: [AuthGuard] },
  { path: 'language-detection', component: LanguageDetectionComponent, canActivate: [AuthGuard] },
  { path: 'sentiment-analysis', component: SentimentAnalysisComponent, canActivate: [AuthGuard] },
  { path: 'configuration', component: ConfigurationComponent },
  { path: '', redirectTo: '/entity-extraction', pathMatch: 'full' },
  { path: '**', redirectTo: '/configuration' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// Entity Extraction

export interface EntityExtractionImage {
  thumbnail: string
}

export interface EntityExtractionItem {
  title: string
  abstract: string
  categories: []
  image: EntityExtractionImage
}

export interface EntityExtractionResult {
  annotations: EntityExtractionItem[]
}

//Text Similarity

export interface TextSimilarityResult {
  similarity: string
}

//Language Detection

export interface LanguageDetectionResult {
  detectedLangs: LanguageDetectionItem[]
}

export interface LanguageDetectionItem {
  lang: string
  confidence: string
}

//Sentiment Analysis

export interface SentimentAnalysisResultItem {
  score: number;
  type: string;
}

export interface SentimentAnalysisResult {
  sentiment: SentimentAnalysisResultItem;
}

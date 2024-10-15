// Entity Extraction
export class EEImage {
  full: string = ''
  thumbnail: string = ''
}

export class EEItem {
  title: string = ''
  abstract: string = ''
  categories: [] = []
  image: EEImage = new EEImage
}

export interface EEResult {
  annotations: EEItem[]
}

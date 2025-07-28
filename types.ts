
export interface Movement {
  id: string;
  englishName: string;
  hebrewName: string;
}

export interface BodyPart {
  id: string;
  hebrewName: string;
  englishName: string;
  movements: Movement[];
}

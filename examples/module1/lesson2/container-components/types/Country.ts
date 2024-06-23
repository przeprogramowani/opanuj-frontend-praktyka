export interface Country {
  cca2?: string;
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  population?: number;
  quizMode?: boolean;
}
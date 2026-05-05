export type TemplateId = "ieee" | "springer" | "apa";

export interface TemplateSpec {
  id: TemplateId;
  name: string;
  description: string;
  font: string;
  bodySize: number; // half-points
  titleSize: number;
  headingSize: number;
  columns: 1 | 2;
  lineSpacing: number; // 240 = single
  margin: number; // twips
  refStyle: "numbered" | "author-year";
}

export const TEMPLATES: Record<TemplateId, TemplateSpec> = {
  ieee: {
    id: "ieee",
    name: "IEEE Conference",
    description: "Two-column, Times Roman, numbered references",
    font: "Times New Roman",
    bodySize: 20,
    titleSize: 48,
    headingSize: 24,
    columns: 2,
    lineSpacing: 240,
    margin: 1080,
    refStyle: "numbered",
  },
  springer: {
    id: "springer",
    name: "Springer LNCS",
    description: "Single-column, formal, numbered references",
    font: "Times New Roman",
    bodySize: 20,
    titleSize: 32,
    headingSize: 24,
    columns: 1,
    lineSpacing: 276,
    margin: 1440,
    refStyle: "numbered",
  },
  apa: {
    id: "apa",
    name: "APA 7th Edition",
    description: "Single-column, double-spaced, author-year",
    font: "Times New Roman",
    bodySize: 24,
    titleSize: 28,
    headingSize: 26,
    columns: 1,
    lineSpacing: 480,
    margin: 1440,
    refStyle: "author-year",
  },
};

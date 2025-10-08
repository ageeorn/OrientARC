export interface Artifact {
  id: string;
  name: string;
  description: string;
  period: string;
  origin: string;
  category: string;
  imageUrl: string;
  materials: string[];
  dimensions: string;
  significance: string;
  relatedTags: string[];
}

export interface ScanResult {
  artifact: Artifact;
  confidence: number;
  recommendedArtifacts: Artifact[];
}
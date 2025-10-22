import React from 'react';
import { CheckCircle, ArrowLeft, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ArtifactCard } from './ArtifactCard';
import { ScanResult as ScanResultType } from '../types/artifact';

interface ScanResultProps {
  result: ScanResultType;
  onBack: () => void;
  onArtifactSelect: (artifactId: string) => void;
}

export function ScanResult({ result, onBack, onArtifactSelect }: ScanResultProps) {
  const { artifact, confidence, recommendedArtifacts } = result;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <h2>Artifact Identified</h2>
        </div>
      </div>

      {/* Identification Result */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Identified Artifact
            </CardTitle>
            <Badge variant="secondary">
              {confidence}% Match
            </Badge>
          </div>
          <Progress value={confidence} className="w-full" />
        </CardHeader>
        <CardContent>
          <ArtifactCard 
            artifact={artifact} 
            showFullDetails={true}
            onClick={() => onArtifactSelect(artifact.id)}
          />
          
          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <h4 className="mb-2">Cultural Significance</h4>
            <p className="text-sm text-muted-foreground">
              {artifact.significance}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Related Artifacts You Might Like</CardTitle>
          <p className="text-sm text-muted-foreground">
            Based on similar materials, origin, and cultural context
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recommendedArtifacts.map((recommendedArtifact) => (
              <ArtifactCard
                key={recommendedArtifact.id}
                artifact={recommendedArtifact}
                onClick={() => onArtifactSelect(recommendedArtifact.id)}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

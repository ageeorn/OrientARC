import React from 'react';
import { ArrowLeft, MapPin, Calendar, Ruler, Tag } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ArtifactCard } from './ArtifactCard';
import { Artifact } from '../types/artifact';
import { getRecommendedArtifacts } from '../data/artifacts';

interface ArtifactDetailProps {
  artifact: Artifact;
  onBack: () => void;
  onArtifactSelect: (artifactId: string) => void;
}

export function ArtifactDetail({ artifact, onBack, onArtifactSelect }: ArtifactDetailProps) {
  const recommendations = getRecommendedArtifacts(artifact, 3);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h2>Artifact Details</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image and Basic Info */}
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={artifact.imageUrl}
                    alt={artifact.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h1 className="mb-2">{artifact.name}</h1>
                    <Badge variant="outline" className="mb-4">
                      {artifact.category}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Origin:</span>
                      <span>{artifact.origin}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Period:</span>
                      <span>{artifact.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Ruler className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Dimensions:</span>
                      <span>{artifact.dimensions}</span>
                    </div>
                  </div>

                  <Separator />
                  
                  <div>
                    <h4 className="mb-2">Materials</h4>
                    <div className="flex flex-wrap gap-2">
                      {artifact.materials.map((material, index) => (
                        <Badge key={index} variant="secondary">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Description and Significance */}
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{artifact.description}</p>
              
              <Separator />
              
              <div>
                <h4 className="mb-2">Cultural Significance</h4>
                <p className="text-muted-foreground">{artifact.significance}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Related Themes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {artifact.relatedTags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Similar Artifacts</CardTitle>
              <p className="text-sm text-muted-foreground">
                Explore related pieces from our collection
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((recommendedArtifact) => (
                  <div key={recommendedArtifact.id} className="border rounded-lg overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={recommendedArtifact.imageUrl}
                        alt={recommendedArtifact.name}
                        className="w-full h-full object-cover cursor-pointer hover:scale-102 transition-transform"
                        onClick={() => onArtifactSelect(recommendedArtifact.id)}
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="text-sm line-clamp-2 cursor-pointer hover:text-primary" 
                          onClick={() => onArtifactSelect(recommendedArtifact.id)}>
                        {recommendedArtifact.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {recommendedArtifact.origin} • {recommendedArtifact.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
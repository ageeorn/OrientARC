import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Calendar, Ruler } from 'lucide-react';
import { Artifact } from '../types/artifact';

interface ArtifactCardProps {
  artifact: Artifact;
  onClick?: () => void;
  showFullDetails?: boolean;
}

export function ArtifactCard({ artifact, onClick, showFullDetails = false }: ArtifactCardProps) {
  return (
    <Card 
      className={`overflow-hidden transition-all duration-200 ${
        onClick ? 'cursor-pointer hover:shadow-lg hover:scale-102' : ''
      }`}
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={artifact.imageUrl}
          alt={artifact.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="line-clamp-2">{artifact.name}</h3>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>{artifact.origin}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>{artifact.period}</span>
          </div>

          {showFullDetails && (
            <>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Ruler className="w-3 h-3" />
                <span>{artifact.dimensions}</span>
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-3">
                {artifact.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mt-2">
                {artifact.materials.map((material, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {material}
                  </Badge>
                ))}
              </div>
            </>
          )}
          
          <Badge variant="outline" className="w-fit">
            {artifact.category}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
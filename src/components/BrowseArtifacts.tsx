import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ArtifactCard } from './ArtifactCard';
import { mockArtifacts } from '../data/artifacts';
import { Artifact } from '../types/artifact';

interface BrowseArtifactsProps {
  onArtifactSelect: (artifactId: string) => void;
}

export function BrowseArtifacts({ onArtifactSelect }: BrowseArtifactsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('all');

  const categories = ['all', ...new Set(mockArtifacts.map(a => a.category))];
  const origins = ['all', ...new Set(mockArtifacts.map(a => a.origin))];

  const filteredArtifacts = mockArtifacts.filter((artifact) => {
    const matchesSearch = artifact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artifact.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artifact.relatedTags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || artifact.category === selectedCategory;
    const matchesOrigin = selectedOrigin === 'all' || artifact.origin === selectedOrigin;
    
    return matchesSearch && matchesCategory && matchesOrigin;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2>Browse Collection</h2>
        <p className="text-muted-foreground">
          Explore our curated collection of oriental artifacts
        </p>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Search & Filter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search artifacts, descriptions, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedOrigin} onValueChange={setSelectedOrigin}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Origin" />
                </SelectTrigger>
                <SelectContent>
                  {origins.map(origin => (
                    <SelectItem key={origin} value={origin}>
                      {origin === 'all' ? 'All Origins' : origin}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {(searchTerm || selectedCategory !== 'all' || selectedOrigin !== 'all') && (
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedOrigin('all');
                  }}
                >
                  Clear
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground">
            {filteredArtifacts.length} artifact{filteredArtifacts.length !== 1 ? 's' : ''} found
          </p>
          
          {(searchTerm || selectedCategory !== 'all' || selectedOrigin !== 'all') && (
            <div className="flex gap-2">
              {searchTerm && (
                <Badge variant="secondary">
                  Search: "{searchTerm}"
                </Badge>
              )}
              {selectedCategory !== 'all' && (
                <Badge variant="secondary">
                  Category: {selectedCategory}
                </Badge>
              )}
              {selectedOrigin !== 'all' && (
                <Badge variant="secondary">
                  Origin: {selectedOrigin}
                </Badge>
              )}
            </div>
          )}
        </div>
        
        {filteredArtifacts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredArtifacts.map((artifact) => (
              <ArtifactCard
                key={artifact.id}
                artifact={artifact}
                onClick={() => onArtifactSelect(artifact.id)}
              />
            ))}
          </div>
        ) : (
          <Card className="p-8 text-center">
            <div className="space-y-2">
              <Search className="w-12 h-12 text-muted-foreground mx-auto" />
              <h3>No artifacts found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
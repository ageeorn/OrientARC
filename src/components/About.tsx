// About.tsx: About page for the app
// Shows app features, statistics, and purpose for users
import React from 'react';
import { Scan, Search, Lightbulb, Users, Camera, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function About() {
  // List of app features
  const features = [
    {
      icon: Camera,
      title: 'AI-Powered Scanning',
      description: 'Use your device camera to instantly identify artifacts using advanced machine learning algorithms.'
    },
    {
      icon: Search,
      title: 'Smart Recommendations',
      description: 'Discover related artifacts based on cultural context, materials, time period, and artistic style.'
    },
    {
      icon: BookOpen,
      title: 'Rich Information',
      description: 'Access detailed descriptions, historical context, and cultural significance for each artefact.'
    },
    {
      icon: Users,
      title: 'Educational Experience',
      description: 'Perfect for students, researchers, and anyone interested in oriental art and culture.'
    }
  ];

  // App statistics
  const stats = [
    { label: 'Artifacts', value: '1,000+' },
    { label: 'Categories', value: '15+' },
    { label: 'Time Periods', value: '2,000+ years' },
    { label: 'Countries', value: '8' }
  ];

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Scan className="w-8 h-8 text-primary" />
          <h1>OrientARC</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the rich cultural heritage of the Orient through our AI-powered artefact identification 
          and recommendation system. Scan, learn, and explore thousands of precious artifacts.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-semibold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features */}
      <div>
        <h2 className="mb-6 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Collection Highlights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Collection Highlights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Our collection spans thousands of years of oriental art and culture, featuring pieces from:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4>Time Periods</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Tang Dynasty</Badge>
                <Badge variant="outline">Song Dynasty</Badge>
                <Badge variant="outline">Ming Dynasty</Badge>
                <Badge variant="outline">Qing Dynasty</Badge>
                <Badge variant="outline">Edo Period</Badge>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4>Categories</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Ceramics</Badge>
                <Badge variant="outline">Sculpture</Badge>
                <Badge variant="outline">Painting</Badge>
                <Badge variant="outline">Calligraphy</Badge>
                <Badge variant="outline">Religious Art</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How to Use */}
      <Card>
        <CardHeader>
          <CardTitle>How to Use</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-semibold">1</span>
              </div>
              <h4>Scan</h4>
              <p className="text-sm text-muted-foreground">
                Use the scanner to upload an image of any artefact you encounter
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-semibold">2</span>
              </div>
              <h4>Identify</h4>
              <p className="text-sm text-muted-foreground">
                Our AI will analyze and identify the artefact with detailed information
              </p>
            </div>
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary font-semibold">3</span>
              </div>
              <h4>Explore</h4>
              <p className="text-sm text-muted-foreground">
                Discover related artifacts and expand your knowledge of oriental culture
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
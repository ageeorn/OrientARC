import { Artifact } from '../types/artifact';

export const mockArtifacts: Artifact[] = [
  {
    id: '1',
    name: 'Ming Dynasty Porcelain Vase',
    description: 'An exquisite blue and white porcelain vase featuring traditional dragon motifs, crafted during the Ming Dynasty period.',
    period: 'Ming Dynasty (1368-1644)',
    origin: 'China',
    category: 'Ceramics',
    imageUrl: 'https://images.unsplash.com/photo-1622258699373-89e5c8437b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwY2hpbmVzZSUyMHZhc2UlMjBwb3JjZWxhaW58ZW58MXx8fHwxNzU4NjE0NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    materials: ['Porcelain', 'Cobalt Blue Glaze'],
    dimensions: '45cm H x 20cm W',
    significance: 'Represents the pinnacle of Chinese ceramic artistry during the Ming period.',
    relatedTags: ['dragons', 'porcelain', 'blue-and-white', 'imperial', 'ceramics']
  },
  {
    id: '2',
    name: 'Japanese Tea Ceremony Bowl',
    description: 'A handcrafted ceramic tea bowl used in traditional Japanese tea ceremonies, featuring subtle earth tones and imperfect beauty.',
    period: 'Edo Period (1603-1868)',
    origin: 'Japan',
    category: 'Ceramics',
    imageUrl: 'https://images.unsplash.com/photo-1670665042990-a012942e7961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNlcmFtaWMlMjBib3dsfGVufDF8fHx8MTc1ODYxNDQyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    materials: ['Stoneware', 'Natural Ash Glaze'],
    dimensions: '12cm H x 15cm W',
    significance: 'Embodies the Japanese aesthetic philosophy of wabi-sabi, finding beauty in imperfection.',
    relatedTags: ['tea-ceremony', 'wabi-sabi', 'stoneware', 'meditation', 'japanese-culture']
  },
  {
    id: '3',
    name: 'Jade Dragon Sculpture',
    description: 'An intricately carved jade sculpture depicting a celestial dragon, symbolizing power and good fortune in Chinese culture.',
    period: 'Qing Dynasty (1644-1912)',
    origin: 'China',
    category: 'Sculpture',
    imageUrl: 'https://images.unsplash.com/photo-1746929468168-5d8b8d3b367f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmllbnRhbCUyMGphZGUlMjBzY3VscHR1cmV8ZW58MXx8fHwxNzU4NjE0NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    materials: ['Nephrite Jade'],
    dimensions: '25cm H x 35cm W x 15cm D',
    significance: 'Jade was considered more precious than gold in ancient China, reserved for imperial use.',
    relatedTags: ['jade', 'dragons', 'imperial', 'sculpture', 'fortune']
  },
  {
    id: '4',
    name: 'Traditional Landscape Scroll',
    description: 'A silk scroll painting depicting misty mountains and flowing rivers, exemplifying the philosophical connection between nature and humanity.',
    period: 'Song Dynasty (960-1279)',
    origin: 'China',
    category: 'Painting',
    imageUrl: 'https://images.unsplash.com/photo-1701966571995-3c422b126009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGFzaWFuJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzU4NjE0NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    materials: ['Silk', 'Ink', 'Mineral Pigments'],
    dimensions: '180cm H x 95cm W',
    significance: 'Represents the Chinese literati tradition of scholar-artists who sought to capture the essence of nature.',
    relatedTags: ['landscape', 'silk-painting', 'mountains', 'rivers', 'philosophy']
  },
  {
    id: '5',
    name: 'Calligraphy Masterpiece',
    description: 'An elegant piece of Chinese calligraphy featuring classical poetry, demonstrating the highest level of brushwork artistry.',
    period: 'Tang Dynasty (618-907)',
    origin: 'China',
    category: 'Calligraphy',
    imageUrl: 'https://images.unsplash.com/photo-1720702214632-a7ae2d2b899d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwY2FsbGlncmFwaHklMjBzY3JvbGx8ZW58MXx8fHwxNzU4NTkyOTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    materials: ['Rice Paper', 'Ink', 'Silk Mounting'],
    dimensions: '120cm H x 60cm W',
    significance: 'Calligraphy is considered the highest form of Chinese art, combining literary content with visual beauty.',
    relatedTags: ['calligraphy', 'poetry', 'brushwork', 'literature', 'art']
  },
  {
    id: '6',
    name: 'Buddhist Meditation Statue',
    description: 'A serene bronze statue of Buddha in meditation pose, crafted with exceptional detail and spiritual presence.',
    period: 'Northern Wei Dynasty (386-535)',
    origin: 'China',
    category: 'Sculpture',
    imageUrl: 'https://images.unsplash.com/photo-1677672691642-4d9757116df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWRkaGlzdCUyMHN0YXR1ZSUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzU4NjE0NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    materials: ['Bronze', 'Gold Leaf'],
    dimensions: '85cm H x 60cm W x 45cm D',
    significance: 'Represents the introduction and evolution of Buddhism in Chinese culture and art.',
    relatedTags: ['buddhism', 'meditation', 'bronze', 'spirituality', 'religious-art']
  }
];

export const getArtifactById = (id: string): Artifact | undefined => {
  return mockArtifacts.find(artifact => artifact.id === id);
};

export const getRecommendedArtifacts = (artifact: Artifact, count: number = 3): Artifact[] => {
  // Simple recommendation algorithm based on shared tags and category
  const recommendations = mockArtifacts
    .filter(a => a.id !== artifact.id)
    .map(a => ({
      artifact: a,
      score: calculateSimilarityScore(artifact, a)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(item => item.artifact);
  
  return recommendations;
};

const calculateSimilarityScore = (artifact1: Artifact, artifact2: Artifact): number => {
  let score = 0;
  
  // Same category gets high score
  if (artifact1.category === artifact2.category) score += 10;
  
  // Same origin gets moderate score
  if (artifact1.origin === artifact2.origin) score += 5;
  
  // Shared tags get points
  const sharedTags = artifact1.relatedTags.filter(tag => 
    artifact2.relatedTags.includes(tag)
  );
  score += sharedTags.length * 3;
  
  return score;
};
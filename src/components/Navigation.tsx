import React from 'react';
import { Camera, Search, Grid, Info } from 'lucide-react';
import { Button } from './ui/button';

type NavigationTab = 'scanner' | 'browse' | 'about';

interface NavigationProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const tabs = [
    { id: 'scanner' as NavigationTab, label: 'Scanner', icon: Camera },
    { id: 'browse' as NavigationTab, label: 'Browse', icon: Grid },
    { id: 'about' as NavigationTab, label: 'About', icon: Info },
  ];

  return (
    <nav className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Search className="w-6 h-6 text-primary" />
            <h1 className="text-lg font-medium">OrientARC</h1>
          </div>
          
          <div className="flex gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => onTabChange(tab.id)}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
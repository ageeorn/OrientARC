import React, { useState, useRef } from 'react';
import { Camera, Upload, Scan, StopCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Toggle } from './ui/toggle';
import { mockArtifacts, getRecommendedArtifacts } from '../data/artifacts';
import { ScanResult } from '../types/artifact';

interface ScannerProps {
  onScanComplete: (result: ScanResult) => void;
}

export function Scanner({ onScanComplete }: ScannerProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const handleCameraToggle = async (pressed: boolean) => {
    setShowCamera(pressed);
    if (pressed) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (err) {
        console.error('Error accessing camera:', err);
        setShowCamera(false);
      }
    } else {
      stopCamera();
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    setIsCapturing(true);
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      // Set canvas size to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      // Draw the current video frame to canvas
      ctx.drawImage(video, 0, 0);
      // Convert to data URL
      const imageUrl = canvas.toDataURL('image/png');
      setPreviewImage(imageUrl);
      stopCamera();
      setShowCamera(false);
      simulateScan();
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setPreviewImage(imageUrl);
        simulateScan();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateScan = () => {
    setIsScanning(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      // Mock identification - randomly select an artifact
      const randomArtifact = mockArtifacts[Math.floor(Math.random() * mockArtifacts.length)];
      const recommendations = getRecommendedArtifacts(randomArtifact, 4);
      
      const result: ScanResult = {
        artifact: randomArtifact,
        confidence: Math.floor(Math.random() * 25) + 75, // 75-100% confidence
        recommendedArtifacts: recommendations
      };
      
      setIsScanning(false);
      onScanComplete(result);
    }, 2000);
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  if (isScanning) {
    return (
      <Card className="p-8 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <Scan className="w-16 h-16 text-primary animate-pulse" />
            <div className="absolute inset-0 animate-spin">
              <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full"></div>
            </div>
          </div>
          <div>
            <h3>Analyzing Artifact...</h3>
            <p className="text-muted-foreground">Using AI to identify the scanned item</p>
          </div>
        </div>
      </Card>
    );
  }

return (
    <Card className="p-6">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <Scan className="w-12 h-12 text-primary mx-auto" />
          <h2>Scan an Artifact</h2>
          <p className="text-muted-foreground">
            Take a photo or upload an image of an artifact to identify it and discover related pieces
          </p>
        </div>

        {previewImage && (
          <div className="max-w-xs mx-auto">
            <img 
              src={previewImage} 
              alt="Preview" 
              className="w-full h-48 object-cover rounded-lg border"
            />
          </div>
        )}

        {!previewImage && (
          <div className="flex justify-center">
            <Button
              onClick={handleCameraToggle}
              className="flex items-center gap-2"
            >
              <Camera className="w-4 h-4" />
              Enable camera scan
            </Button>
          </div>
        )}

        {showCamera && !previewImage && (
          <div className="relative max-w-xs mx-auto space-y-3">
            <div className="relative">
              <video
                ref={videoRef}
                className="w-full h-48 object-cover rounded-lg border"
                playsInline
              />
              <canvas ref={canvasRef} className="hidden" />
              <div className="absolute inset-0 rounded-lg pointer-events-none">
                <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                <div className="absolute left-4 top-4 w-1/3 h-1/3 border-2 border-primary rounded-lg"></div>
                <div className="absolute right-4 top-4 w-1/3 h-1/3 border-2 border-primary rounded-lg"></div>
                <div className="absolute left-4 bottom-4 w-1/3 h-1/3 border-2 border-primary rounded-lg"></div>
                <div className="absolute right-4 bottom-4 w-1/3 h-1/3 border-2 border-primary rounded-lg"></div>
              </div>
            </div>
            <Button 
              onClick={capturePhoto}
              disabled={isCapturing}
              className="flex items-center gap-2 w-full"
            >
              {isCapturing ? (
                <>
                  <Scan className="w-4 h-4 animate-pulse" />
                  Capturing...
                </>
              ) : (
                <>
                  <StopCircle className="w-4 h-4" />
                  Capture Photo
                </>
              )}
            </Button>
            <Button 
              onClick={() => {
                stopCamera();
                setShowCamera(false);
              }}
              variant="ghost"
              size="sm"
              className="w-full"
            >
              Upload image instead
            </Button>
          </div>
        )}

        {!showCamera && !previewImage && (
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={triggerFileSelect}
              variant="outline"
            >
              <Upload className="w-4 h-4" />
              Upload Image
            </Button>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        )}

        <div className="text-sm text-muted-foreground">
          <p>Supported formats: JPG, PNG</p>
          <p>For best results, ensure good lighting and clear focus</p>
        </div>
      </div>
    </Card>
  );
}
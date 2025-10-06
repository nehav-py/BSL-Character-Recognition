
import React, { useRef, useEffect, useState } from "react";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WebcamCaptureProps {
  onCapture?: (imageSrc: string) => void;
}

const WebcamCapture: React.FC<WebcamCaptureProps> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [prediction, setPrediction] = useState<string | null>(null);

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
      }
    } catch (err) {
      console.error("Error accessing webcam:", err);
    }
  };

  const stopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setIsStreaming(false);
    }
  };

  const captureFrame = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageSrc = canvas.toDataURL("image/png");
        
        // Simulate BSL recognition with a random letter
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));
        setPrediction(randomLetter);
        
        if (onCapture) {
          onCapture(imageSrc);
        }
      }
    }
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopWebcam();
    };
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 w-full">
      <div className="relative w-full max-w-md rounded-lg overflow-hidden border-2 border-custom-blue">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full aspect-video bg-black"
        />
        <canvas ref={canvasRef} className="hidden" />
        
        {!isStreaming && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80">
            <Button 
              onClick={startWebcam}
              className="bg-white hover:bg-gray-100 text-black border border-gray-300 flex items-center gap-2"
            >
              <Camera size={18} />
              Start Camera
            </Button>
          </div>
        )}
      </div>
      
      {isStreaming && (
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <Button 
              onClick={captureFrame}
              variant="outline" 
              className="border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white"
            >
              Recognize Sign
            </Button>
            <Button 
              onClick={stopWebcam}
              variant="outline" 
              className="border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white"
            >
              Stop Camera
            </Button>
          </div>
          
          {prediction && (
            <div className="text-center mt-4">
              <span className="block text-lg font-medium text-custom-text">Predicted Letter:</span>
              <span className="text-5xl font-bold text-custom-green">{prediction}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WebcamCapture;

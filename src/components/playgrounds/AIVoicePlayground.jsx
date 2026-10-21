import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Volume2, Loader2, PlayCircle } from 'lucide-react';
import { EXTERNAL_LINKS } from '@/config/links';

export default function AIVoicePlayground() {
  const [text, setText] = useState('Hello, welcome to ESDS AI Studio. You can test our advanced text-to-speech capabilities here.');
  const [language, setLanguage] = useState('en-IN-Female');
  const [isLoading, setIsLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);

  const handleGenerate = () => {
    if (!text) return;
    setIsLoading(true);
    setAudioUrl(null);
    // Simulate API call
    setTimeout(() => {
      // In a real scenario, you would call an API and get an audio file URL
      // For this demo, we'll just pretend and enable the play button
      const demoAudio = EXTERNAL_LINKS.demoAudio; // Placeholder sound
      setAudioUrl(demoAudio);
      setIsLoading(false);
    }, 2000);
  };

  const playAudio = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };

  return (
    <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 h-full flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Volume2 className="w-6 h-6 text-green-600" />
        <h3 className="text-xl font-bold text-slate-800">Voice Synthesis Playground</h3>
      </div>
      
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to synthesize..."
        className="flex-grow text-base bg-white h-40"
      />
      
      <div className="grid md:grid-cols-2 gap-4">
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="Select a voice..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en-IN-Female">English (India, Female)</SelectItem>
            <SelectItem value="en-IN-Male">English (India, Male)</SelectItem>
            <SelectItem value="hi-IN-Female">Hindi (Female)</SelectItem>
            <SelectItem value="mr-IN-Female">Marathi (Female)</SelectItem>
          </SelectContent>
        </Select>
        
        <Button onClick={handleGenerate} disabled={isLoading || !text} className="bg-green-600 hover:bg-green-700 text-white">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            'Generate Audio'
          )}
        </Button>
      </div>

      {audioUrl && !isLoading && (
        <div className="p-4 bg-green-50 rounded-lg border border-green-200 flex items-center justify-between">
          <p className="text-sm font-medium text-green-800">Audio generated successfully.</p>
          <Button onClick={playAudio} variant="outline" size="icon" className="text-green-600 border-green-200 hover:bg-green-100">
            <PlayCircle className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
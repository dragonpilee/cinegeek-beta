'use client';
import React from 'react';

interface EmbedPlayerProps {
  url: string;
}

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

function EmbedPlayer(props: EmbedPlayerProps) {
  const router = useRouter();

  React.useEffect(() => {
    if (ref.current) {
      ref.current.src = props.url;
    }

    const iframe: HTMLIFrameElement | null = ref.current;
    iframe?.addEventListener('load', handleIframeLoaded);
    return () => {
      iframe?.removeEventListener('load', handleIframeLoaded);
    };
  }, []);

  const ref = React.useRef<HTMLIFrameElement>(null);

  const handleIframeLoaded = () => {
    if (!ref.current) {
      return;
    }
    const iframe: HTMLIFrameElement = ref.current;
    if (iframe) iframe.style.opacity = '1';
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: '#000',
      }}>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-20 z-50 text-white hover:bg-black/50 hover:text-white"
        onClick={() => router.back()}
      >
        <ArrowLeft className="h-6 w-6" />
        <span className="sr-only">Back</span>
      </Button>
      <iframe
        ref={ref}
        width="100%"
        height="100%"
        allowFullScreen
        style={{ opacity: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default EmbedPlayer;

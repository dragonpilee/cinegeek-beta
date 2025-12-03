'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function PwaInstallButton() {
    const [prompt, setPrompt] = useState<any>(null);

    useEffect(() => {
        console.log('PwaInstallButton mounted');
        const handler = (e: any) => {
            console.log('beforeinstallprompt fired', e);
            e.preventDefault();
            setPrompt(e);
        };
        window.addEventListener('beforeinstallprompt', handler);
        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const onClick = () => {
        if (!prompt) return;
        prompt.prompt();
        prompt.userChoice.then((choiceResult: any) => {
            if (choiceResult.outcome === 'accepted') {
                setPrompt(null);
            }
        });
    };

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={onClick}
            disabled={!prompt}
            title={prompt ? 'Install App' : 'Install Unavailable'}
        >
            <Download className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Install App</span>
        </Button>
    );
}

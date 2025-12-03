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

    if (!prompt) return null;

    return (
        <Button
            variant="outline"
            onClick={onClick}
            title="Install App"
        >
            <Download className="mr-2 h-4 w-4" />
            <span>Install App</span>
        </Button>
    );
}

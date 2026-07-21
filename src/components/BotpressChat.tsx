import { useEffect } from 'react';

declare global {
    interface Window {
        botpressWebChat: any;
    }
}

const BotpressChat = () => {
    useEffect(() => {
        // Add class to body to show chatbot via CSS
        document.body.classList.add('show-chatbot');

        // Create the script for inject.js
        const script1 = document.createElement('script');
        script1.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
        script1.async = true;
        document.body.appendChild(script1);

        // Create the script for the config
        const script2 = document.createElement('script');
        script2.src = "https://files.bpcontent.cloud/2025/09/26/17/20250926170110-YXT53HC7.js";
        script2.defer = true;
        document.body.appendChild(script2);

        // Styling is now handled in index.css for better control

        return () => {
            // Remove class from body to hide chatbot
            document.body.classList.remove('show-chatbot');

            // Cleanup scripts
            if (document.body.contains(script1)) document.body.removeChild(script1);
            if (document.body.contains(script2)) document.body.removeChild(script2);

            // Aggressively remove Botpress UI elements from DOM
            const removeBotpressElements = () => {
                const selectors = [
                    '#bp-web-widget-container',
                    '.bpw-widget-container',
                    '#bp-widget',
                    'div[id^="bp-"]',
                    'iframe[id^="bp-"]'
                ];

                selectors.forEach(selector => {
                    document.querySelectorAll(selector).forEach(el => el.remove());
                });

                if (window.botpressWebChat) {
                    try {
                        window.botpressWebChat.sendEvent({ type: 'hide' });
                        // Some versions support 'destroy'
                        if (typeof window.botpressWebChat.destroy === 'function') {
                            window.botpressWebChat.destroy();
                        }
                    } catch (e) {
                        // Ignore errors during disposal
                    }
                }
            };

            removeBotpressElements();
            // Run again after a short delay to catch late-loading elements
            setTimeout(removeBotpressElements, 500);
            setTimeout(removeBotpressElements, 2000);
        };
    }, []);

    return null;
};

export default BotpressChat;

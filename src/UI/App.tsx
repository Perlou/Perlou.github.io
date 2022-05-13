import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import LoadingScreen from './components/LoadingScreen'
import HelpPrompt from './components/HelpPrompt'
import InterfaceUI from './components/InterfaceUI'
import eventBus from './EventBus'
import './style.css'

const App = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        eventBus.on('loadingScreenDone', () => {
            setLoading(false);
        });
    }, []);

    return (
        <div id="ui-app">
            {!loading && <HelpPrompt />}
            <LoadingScreen />
        </div>
    )
}

const createUI = () => {
    createRoot(document.getElementById('ui')!).render(<App />)
}

const createVolumeUI = () => {
    createRoot(document.getElementById('ui-interactive')!).render(<InterfaceUI />)
}

export {
    createUI,
    createVolumeUI
}

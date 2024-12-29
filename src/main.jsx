import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'
import "react-multi-carousel/lib/styles.css";
import "react-image-gallery/styles/css/image-gallery.css"
createRoot(document.getElementById('root')).render(
        <App/>
)

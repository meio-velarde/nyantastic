import React, {useEffect} from 'react'
import StorageProvider from '../util/storages/StorageProvider'
import WebFont from 'webfontloader'
import WebFontConfig from '../theming/fonts/WebFontConfig'
import Home from './pages/Home'
import Details from './pages/Details'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import styles from './styles'

function App() {
    useEffect(() => {
        WebFont.load(WebFontConfig)
    }, [])

    const provider = StorageProvider.init()

    return <Box sx={styles}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home storageProvider={provider} />} />
                <Route path="/:catId" element={<Details storageProvider={provider} />} />
            </Routes>
        </BrowserRouter>
    </Box>
}

export default App

import {useState} from 'react'
import './index.css'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROUTES_PATH} from "./constants/routes";
import Header from "./components/header/Header";
import MainPage from "./pages/main/MainPage";
import Footer from "./components/footer/Footer";
import CatalogPage from "./pages/catalog/CatalogPage";
import {Box, createTheme, Stack, ThemeProvider} from "@mui/material";
import CarView from "./pages/car-view/CarView";
import ServicePage from "./pages/services/ServicePage";
import ContactsPage from "./pages/contacts/ContactsPage";
import JostFont from "../public/Jost-VariableFont_wght.ttf";

function App() {

    console.log(JostFont)
    const theme = createTheme({
        typography: {
            fontFamily: 'Jost'
        },

    })
    return (
        <BrowserRouter>
            <Stack height="100vh">
                <ThemeProvider theme={theme}>
                    <Header/>
                    <Box sx={{flex: 1}}>
                        <Routes>
                            <Route path={ROUTES_PATH.MAIN} element={<MainPage/>}/>
                            <Route path={ROUTES_PATH.CATALOG} element={<CatalogPage/>}/>
                            <Route path={`${ROUTES_PATH.CATALOG}/:id`} element={<CarView/>}/>
                            <Route path={ROUTES_PATH.SERVICE} element={<ServicePage/>}/>
                            <Route path={ROUTES_PATH.CONTACTS} element={<ContactsPage/>}/>
                        </Routes>
                    </Box>
                    <Footer/>
                </ThemeProvider>
            </Stack>
        </BrowserRouter>
    )
}

export default App

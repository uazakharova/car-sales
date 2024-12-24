import BannerSection from './components/BannerSection';
import {Container} from "@mui/material";
import PopularCars from "./components/PopularCars";
import {useEffect, useState} from "react";
import {getAllCarsWithFullInfo} from "../../api/cars";

function MainPage() {
    const [cars, setCars] = useState<any[]>();

    useEffect(() => {
        getAllCarsWithFullInfo().then(res => setCars(res?.data))

    }, [])
    return (
        <Container>
            <BannerSection bannerCars={cars}/>
            <PopularCars cars={cars}/>
        </Container>
    );
}

export default MainPage;
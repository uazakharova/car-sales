import {Box, Button, Card, CardContent, CardHeader, CardMedia, Icon, Stack, Typography} from "@mui/material";
import Carousel from "react-multi-carousel";
import {NavLink} from "react-router-dom";
import {ROUTES_PATH} from "../../../constants/routes";
import React from "react";

const PopularCars = ({cars}) => {
    if (cars) console.log(cars.filter(car => car.rating).sort((a, b) =>a.rating -  b.rating))

    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    return (
        <Stack>
            <Typography
                variant="h4"
                mb={3}
            >
                Популярные автомобили
            </Typography>
            {
                cars &&
                <Carousel responsive={responsive} itemClass="carousel-item-padding-40-px">
                    {
                        cars.filter(car => car.rating).sort((a, b) => a.rating -  b.rating).map(car => <Card
                            sx={{height: '100%', boxShadow: 2}}>
                            <CardHeader
                                title={`${car.brand?.carName} ${car.model?.modelCar}`}
                                // avatar={
                                //     <Avatar
                                //         src="https://placehold.co/50x50?text=Logo"
                                //     />
                                // }
                            />
                            <CardMedia sx={{height: 180}}>
                                <img style={{width: '100%', height: '100%', objectFit: 'cover'}}
                                     src={car.model?.base64ImageSrc} alt="Not found"/>
                            </CardMedia>
                            <CardContent>
                                <Box
                                    display="flex"
                                    justifyContent="space-around"
                                    mb={6}
                                >
                                    <Typography
                                        variant="body2"
                                        align="center"
                                    >
                                        <span>Двигатель</span>
                                        <div/>
                                        <span>{car.configuration?.powerCar} л.с</span>
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        align="center"
                                    >
                                        <span>Запас хода</span>
                                        <div/>
                                        <span>{car.configuration?.range} км</span>
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        align="center"
                                    >
                                        <span>Привод</span>
                                        <div/>
                                        <span>{car.configuration?.driveType?.driveType}</span>
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="h6"
                                    align="center"
                                    mb={1}
                                    sx={{fontWeight: 'bold'}}
                                >
                                    {`${car.configuration?.showPriceFrom ? "От" : ""} ${Intl.NumberFormat().format(car.configuration?.priceCar)} ₽`}
                                </Typography>
                                <NavLink to={`${ROUTES_PATH.CATALOG}/${car.id}`}>
                                    <Button
                                        variant="outlined"
                                        color="success"
                                        fullWidth
                                        sx={{mt: 1,backgroundColor: "#B3FDA7",color:"#0D1B2A",border:'none'}}
                                    >
                                        Подробнее
                                    </Button>
                                </NavLink>
                            </CardContent>
                        </Card>)
                    }
                </Carousel>
            }
        </Stack>
    );
};

export default PopularCars;
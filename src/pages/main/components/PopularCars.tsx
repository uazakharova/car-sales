import {Box, Card, CardContent, CardHeader, CardMedia, Icon, Stack, Typography} from "@mui/material";
import Carousel from "react-multi-carousel";

const PopularCars = ({cars}) => {
    if (cars) console.log(cars.filter(car => car.rating).sort((a, b) => b.rating - a.rating))

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
                Популярные электромобили
            </Typography>
            {
                cars &&
                <Carousel responsive={responsive} itemClass="carousel-item-padding-40-px">
                    {
                        cars.filter(car => car.rating).sort((a, b) => b.rating - a.rating).map(car => <Card
                            sx={{height: '100%',boxShadow:2}}>
                            <CardHeader
                                title="Tesla Model 3"
                                // avatar={
                                //     <Avatar
                                //         src="https://placehold.co/50x50?text=Logo"
                                //     />
                                // }
                            />
                            <CardMedia>
                                <img style={{width: '100%'}} src={car.model?.base64ImageSrc} alt="Not found"/>
                            </CardMedia>
                            <CardContent>
                                <Box
                                    display="flex"
                                    justifyContent="space-around"
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
                                    sx={{fontWeight: 'bold', marginTop: '30px'}}
                                >
                                    {`${car.configuration?.showPriceFrom ? "От" : ""} ${car.configuration?.priceCar} ₽`}
                                </Typography>
                            </CardContent>
                        </Card>)
                    }
                </Carousel>
            }
        </Stack>
    );
};

export default PopularCars;
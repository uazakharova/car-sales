import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import Carousel from "react-multi-carousel";
import {useEffect, useState} from "react";
import {getAllCarsWithFullInfo} from "../../../api/cars/index";
import Grid from '@mui/material/Grid2';
import {ROUTES_PATH} from "../../../constants/routes";
import {NavLink} from "react-router-dom";

const BannerSection = ({bannerCars}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const carsData = [
        {

            image: "https://rucars.ru/image/cache/webp/catalog/slider/zsport-600x356.webp",
            title: "Zeekr 001 YOU",
            price: "от 5.4 млн ₽*",
            link: "https://rucars.ru/avtomobili/zeekr-001"
        },
        {
            title: "Lotus Eletre",
            price: "от 14.1 млн ₽*",
            link: "https://rucars.ru/image/cache/webp/catalog/slider/zsport-600x356.webp"
        },
        {
            title: "Lixiang L7",
            price: "от 6 млн ₽*",
            link: "https://rucars.ru/avtomobili/lixiang-l9"
        }
    ];

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 1
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    console.log(bannerCars)
    return (
        <Grid container={true} alignItems="center" spacing={4} mb={6}>
            <Grid alignItems="space-between" size={{sm: 12, md: 6}}>
                <Typography
                    pb={2}
                    sx={{ typography: { sm: 'h2', xs: 'h3' } }}
                >
                    Умные машины для умных людей
                </Typography>
                <Typography
                    sx={{ typography: { sm: 'subtitle', xs: 'h5' }}}
                    mb={5}
                >
                    Профессиональный подбор и продажа автомобилей на самых выгодных условиях
                </Typography>
                <Box
                    display="flex"
                    gap="16px"
                    marginTop="16px"
                >
                    <NavLink to={ROUTES_PATH.CATALOG}>
                        <Button
                            variant="contained"
                            sx={{backgroundColor: "#0D1B2A",color:"#B4FEA8"}}
                            color="success"
                            size="large"
                        >
                            Перейти в каталог
                        </Button>
                    </NavLink>
                </Box>
            </Grid>
            <Grid
                size={{sm: 12, md: 6}}
                boxShadow={3}
                borderRadius="8px"
                overflow="hidden"
            >
                {/*<Box*/}
                {/*>*/}
                {bannerCars &&
                    <Carousel containerClass="carousel-container" showDots={true} responsive={responsive} itemClass="carousel-item-padding-100-px" >
                        {
                            bannerCars?.filter(car => car.showOnMain).map(bannerCar => (
                                <Stack
                                    padding="16px"
                                    pb={4}
                                    justifyContent="space-between"
                                    alignContent="space-between"
                                >

                                    {/*<Stack>*/}
                                        <Box width="100%" mb={2}>
                                            <img
                                                src={bannerCar.model?.base64ImageSrc}
                                                alt="Image not found"
                                                style={{objectFit: "cover"}}
                                                width="100%"
                                                height="300px"
                                                // height="100%"
                                            />
                                        </Box>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            {bannerCar.configuration?.engineType?.engineType}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            mb={2}
                                        >
                                            {`${bannerCar.brand?.carName} ${bannerCar.model?.modelCar}`}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                        >
                                            {`${bannerCar.configuration?.showPriceFrom ? "От" : ""} ${Intl.NumberFormat().format(bannerCar.configuration?.priceCar)} ₽`}
                                        </Typography>
                                    {/*</Stack>*/}
                                    <NavLink to={`${ROUTES_PATH.CATALOG}/${bannerCar.id}`}>
                                        <Button
                                            variant="outlined"
                                            color="success"
                                            fullWidth={true}
                                            sx={{backgroundColor: "#B3FDA7",color:"#0D1B2A",border:'none'}}
                                            style={{marginTop: '16px'}}
                                        >
                                            Подробнее
                                        </Button>
                                    </NavLink>
                                </Stack>
                            ))
                        }
                    </Carousel>
                }
                {/*</Box>*/}
            </Grid>
        </Grid>
    );
};

export default BannerSection;
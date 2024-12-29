import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid2";
import {
    Badge,
    Box,
    Button,
    ButtonGroup,
    Card, Container, Divider, Link,
    MenuItem,
    Select,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Typography
} from "@mui/material";
import {getAllCarsWithSortAndFiltering} from "../../api/cars";
import {getAllEngineTypes} from "../../api/engine-types";
import {getAllStatuses} from "../../api/statuses";
import {ROUTES_PATH} from "../../constants/routes";
import {NavLink} from "react-router-dom";
import Bolt from "../../../public/bolt.svg"
import DarkBolt from "../../../public/dark-bolt.svg"

const CatalogPage = () => {
    const [cars, setCars] = useState([])
    const [statuses, setStatuses] = useState()
    const [engineType, setEngineType] = useState()
    const [sortingSelectValue, setSortingSelectValue] = useState('priceAsc');
    const [engineTypesValue, setEngineTypesValue] = useState();
    const [onStockFilter, setOnStockFilter] = useState();
    const [statusFilter, setStatusFilter] = useState();

    useEffect(() => {
        const filters = generateFilterQueryParams();
        const sort = generateSoringQueryParam()
        getAllCarsWithSortAndFiltering({
            sort,
            filters
        }).then(res => setCars(res.data))
    }, [engineTypesValue, sortingSelectValue, onStockFilter, statusFilter])
    useEffect(() => {
        getAllEngineTypes().then(res => setEngineType(res.data))
        getAllStatuses().then(res => setStatuses(res.data))

    }, [])

    const generateFilterQueryParams = () => {
        let queryParams = "";

        if (engineTypesValue) {
            console.log(engineTypesValue)
            queryParams += `&engineType=${engineTypesValue}`
        }
        if (onStockFilter !== undefined && onStockFilter !== null) {
            console.log(onStockFilter)


            queryParams += `&onStock=${onStockFilter}`
        }
        if (statusFilter) {
            console.log(statusFilter)
            queryParams += `&status=${statusFilter}`
        }
        return queryParams
    }
    const generateSoringQueryParam = () => {
        return sortingSelectValue === 'priceAsc' ? '["configuration.priceCar","ASC"]' : '["price","DESC"]'
    };
    const handleChangeEngineType = (
        event: React.MouseEvent<HTMLElement>,
        engineType: string,
    ) => {
        setEngineTypesValue(engineType);
    };
    const handleChangeOnStockFilter = (
        event: React.MouseEvent<HTMLElement>,
        onStockFilter: string,
    ) => {
        setOnStockFilter(onStockFilter);
    };
    const handleChangeStatusFilter = (
        event: React.MouseEvent<HTMLElement>,
        onStockFilter: string,
    ) => {
        setStatusFilter(onStockFilter);
    };

    return (
        <Container maxWidth="xl">
            <Grid
                container={true}
                spacing={3}
            >
                <Stack
                    direction={{sm: "column", md: "row"}}
                    spacing={3}
                >
                    <Stack spacing={2}>
                        <Typography
                            variant="body1"
                        >
                            Тип двигателя
                        </Typography>
                        <ToggleButtonGroup
                            color="success"
                            exclusive
                            value={engineTypesValue}
                            onChange={handleChangeEngineType}
                        >
                            {
                                engineType?.map(engineType =>
                                    <ToggleButton value={engineType.engineType}>
                                        {engineType.engineType}
                                    </ToggleButton>)
                            }
                        </ToggleButtonGroup>
                    </Stack>
                    <Stack spacing={2}>
                        <Typography
                            variant="body1"
                        >
                            Наличие автомобиля
                        </Typography>
                        <ToggleButtonGroup
                            color="success"
                            exclusive
                            value={onStockFilter}
                            onChange={handleChangeOnStockFilter}
                        >
                            <ToggleButton value={true}>
                                В наличии
                            </ToggleButton>
                            <ToggleButton value={false}>
                                Под заказ
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Stack>
                    <Stack spacing={2}>
                        <Typography
                            variant="body1"
                        >
                            Статус автомобиля
                        </Typography>
                        <ToggleButtonGroup
                            color="success"
                            exclusive
                            value={statusFilter}
                            onChange={handleChangeStatusFilter}
                        >
                            {
                                statuses?.map(status =>
                                    <ToggleButton value={status.status}>
                                        {status.status}
                                    </ToggleButton>)
                            }
                        </ToggleButtonGroup>
                    </Stack>

                </Stack>
                <Grid
                    size={12}
                >
                    <Typography
                        variant="body1"
                    >
                        Сортировать:
                    </Typography>
                </Grid>
                <Grid
                    mb={3}
                >
                    <Select
                        defaultValue="цене"
                        value={sortingSelectValue}
                        onChange={(...args) => {
                            let value = args[0].target.value;
                            setSortingSelectValue(value);
                        }}
                    >
                        <MenuItem
                            value="priceAsc"
                        >
                            По возрастанию цены
                        </MenuItem>
                        <MenuItem
                            value="priceDesc"
                        >
                            По убыванию цены
                        </MenuItem>
                        {/*<MenuItem*/}
                        {/*    value="новизне"*/}
                        {/*>*/}
                        {/*    по новизне*/}
                        {/*</MenuItem>*/}
                    </Select>
                </Grid>
            </Grid>
            <Grid
                container={true}
                spacing={3}
            >
                {
                    cars?.map
                    (car =>
                        <Grid
                            size={{xs: 12, sm: 6}}
                        >
                            <Card
                                sx={{
                                    position: 'relative',
                                    background: 'linear-gradient(90deg, #B3FDA7 0%, rgb(236 240 245 / .15) 60%)',
                                    borderRadius: "6px 12px"
                                }}
                                // sx={{display: 'flex', alignItems: 'center', height: 240}}
                            >
                                <Stack spacing={1} sx={{
                                    position: 'absolute', top: 0,
                                    right: 0,

                                }}>
                                    {car.showOnMain && <Box sx={{
                                        position: "relative",
                                        padding: "25px 20px 4px 4px", background: "#0D1B2A",
                                        borderRadius: "6px"
                                    }}>
                                        <img style={{position: 'absolute', top: '10px', right: '10px', width: '10px'}}
                                             src={Bolt} alt=""/>
                                        <Typography
                                            variant="body2"
                                            color="#b2c7fc"
                                            sx={{fontWeight: 'bold'}}
                                            // align="center"
                                        >
                                            HOT
                                        </Typography>
                                    </Box>}
                                    {car.onStock && <Box sx={{
                                        position: "relative",
                                        padding: "25px 10px 4px 4px", background: "#b2c7fc",
                                        borderRadius: "6px"
                                    }}>
                                        <img style={{position: 'absolute', top: '10px', right: '10px', width: '10px'}}
                                             src={DarkBolt} alt=""/>

                                        <Typography
                                            variant="body2"
                                            color="#0D1B2A"
                                            sx={{fontWeight: 'bold'}}
                                        >
                                            в наличии
                                        </Typography>
                                    </Box>}
                                </Stack>

                                <Grid
                                    p={5}
                                    spacing={3}
                                    container
                                >
                                    <Grid size={{sm: 12, lg: 7}}>
                                        <Stack spacing={2}>
                                            <Stack>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {car.configuration?.engineType.engineType}
                                                </Typography>
                                                <Typography
                                                    variant="h6"
                                                >
                                                    {car.brand?.carName} {car.model?.modelCar}
                                                </Typography>
                                            </Stack>
                                            <Box width="100%" height={240}>
                                                <img
                                                    src={car.model?.base64ImageSrc}
                                                    alt="Image not found"
                                                    style={{objectFit: "cover"}}
                                                    width="100%"
                                                    height="100%"
                                                />
                                            </Box>
                                        </Stack>

                                    </Grid>
                                    <Grid display="flex" alignItems="center" size={{sm: 12, lg: 5}}>
                                        <Stack spacing={2}>

                                            <Typography
                                                variant="h5"
                                            >
                                                {`${car.configuration?.showPriceFrom ? "От" : ""} ${car.configuration?.priceCar} ₽`}
                                            </Typography>
                                            <Divider/>
                                            <Grid
                                                container
                                            >
                                                <Grid>
                                                    <Typography
                                                        variant="body2"
                                                    >
                                                        Разгон до 100 км/ч: {car.configuration?.acceleration} секунды
                                                    </Typography>
                                                </Grid>
                                                <Grid>
                                                    <Typography
                                                        variant="body2"
                                                    >
                                                        Мощность: 646 лс
                                                    </Typography>
                                                </Grid>
                                                <Grid>
                                                    <Typography
                                                        variant="body2"
                                                    >
                                                        Запас хода: 705 км
                                                    </Typography>
                                                </Grid>
                                                <Grid>
                                                    <Typography
                                                        variant="body2"
                                                    >
                                                        Привод: AWD (Полный)
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Divider/>
                                            <Stack>
                                                {/*<Button*/}
                                                {/*    variant="contained"*/}
                                                {/*    sx={{mt: 2}}*/}
                                                {/*>*/}
                                                {/*    Заказать*/}
                                                {/*</Button>*/}
                                                <NavLink to={`${ROUTES_PATH.CATALOG}/${car.id}`}>
                                                    <Button
                                                        variant="contained"
                                                        color="success"
                                                        fullWidth
                                                        sx={{
                                                            mt: 1,
                                                            backgroundColor: "#B3FDA7",
                                                            color: "#0D1B2A",
                                                            border: 'none'
                                                        }}
                                                        // sx={{backgroundColor: "#0D1B2A",color:"#B4FEA8"}}
                                                    >
                                                        Подробнее
                                                    </Button>
                                                </NavLink>
                                            </Stack>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    );
};

export default CatalogPage;
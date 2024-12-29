import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getCarByIdWithFullInfo} from "../../api/cars";
import {Box, Button, Container, Divider, Stack, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ImageGallery from "react-image-gallery";
import {AddBox, AddRoad, Battery1Bar, Battery6Bar, Bolt, DirectionsCar, Speed} from "@mui/icons-material";

type GalleryItem = { original: string, thumbnail: string, originalHeight: string, originalWidth: string };
const CarView = () => {
    const {id} = useParams()
    const [carData, setCarData] = useState<any>()
    const [chosenConfigId, setChosenConfigId] = useState()
    const [chosenConfig, setChosenConfig] = useState<any>()
    console.log(chosenConfigId, chosenConfig)

    useEffect(() => {
        getCarByIdWithFullInfo(id).then(res => setCarData(res.data))
    }, [])
    useEffect(() => {
        carData && setChosenConfigId(carData.configuration?.id)
    }, [carData])
    useEffect(() => {
        if (chosenConfigId) {
            const configData = carData.model?.configurations.find(config => config.id === chosenConfigId)
            setChosenConfig(configData)
        }
    }, [chosenConfigId])
    const formatImagesForGallery = () => {
        const galleryItems: GalleryItem[] = []

        if (carData) {
            const galleryImages = carData.model?.galleryImages;
            const base64ImageSrc = carData.model?.base64ImageSrc;
            galleryItems.push({
                original: base64ImageSrc,
                thumbnail: base64ImageSrc,
                originalHeight: '100%',
                originalWidth: '100%'
            })
            if (galleryImages) {
                const transformedImages: GalleryItem[] = galleryImages.map(image => ({
                    original: image,
                    thumbnail: image,
                    originalHeight: '100%', originalWidth: '100%'
                }))
                galleryItems.push(...transformedImages)
            }
        }
        return galleryItems
    };
    const handleChangeChosenConfig = (
        event: React.MouseEvent<HTMLElement>,
        config: string,
    ) => {
        setChosenConfigId(config);
    };
    return carData && (
        <Container maxWidth="xl">

            <Grid container mb={5} spacing={5}>
                <Grid size={{sm: 12, md: 6}}>
                    <Stack>
                        <Typography
                            variant="h4"
                            gutterBottom={true}
                        >
                            {carData.brand?.carName} {carData.model?.modelCar}
                        </Typography>
                        <Typography
                            variant="body1"
                            mb={3}
                        >
                            Производитель: {carData.brand?.carName} |
                            Тип: {carData.configuration?.engineType?.engineType} | Модель: {carData.model?.modelCar}
                        </Typography>

                        <ImageGallery
                            showFullscreenButton={false}
                            showPlayButton={false}
                            items={formatImagesForGallery()}/>
                    </Stack>
                </Grid>
                <Grid size={{sm: 12, md: 6}}>
                    <Stack spacing={2} justifyContent="center">
                        <Typography
                            variant="h6"
                            sx={{fontWeight: 'bold'}}
                        >
                            Выберите комплектацию
                        </Typography>

                        {
                            carData.model?.configurations.length > 0 ?
                                <ToggleButtonGroup
                                    color="success"
                                    exclusive
                                    value={chosenConfigId}
                                    onChange={handleChangeChosenConfig}
                                >
                                    {
                                        carData.model?.configurations.map(config =>
                                            <ToggleButton value={config.id}>
                                                {config.configuration}
                                            </ToggleButton>)
                                    }
                                </ToggleButtonGroup>
                                : <Typography> У этой модели конфигураций нет </Typography>
                        }

                        <Stack spacing={2}>
                            <Typography
                                variant="h6"
                            >
                                Цвет кузова
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                {
                                    carData.configuration?.exteriorColors?.map(color =>
                                        <Box
                                            sx={{
                                                width: 24,
                                                height: 24,
                                                backgroundColor: color.colorValue,
                                                borderRadius: '50%'
                                            }}
                                        />
                                    )
                                }

                            </Stack>
                            {/*<Typography*/}
                            {/*    variant="h6"*/}
                            {/*>*/}
                            {/*    зеленый*/}
                            {/*</Typography>*/}
                            <Divider/>
                        </Stack>
                        <Stack spacing={2}>
                            <Typography
                                variant="h6"
                            >
                                Цвет салона
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                {
                                    carData.configuration?.exteriorColors?.map(color =>
                                        <Box
                                            sx={{
                                                width: 24,
                                                height: 24,
                                                backgroundColor: color.colorValue,
                                                borderRadius: '50%'
                                            }}
                                        />
                                    )
                                }
                            </Stack>
                            {/*<Typography*/}
                            {/*    variant="h6"*/}
                            {/*>*/}
                            {/*    зеленый*/}
                            {/*</Typography>*/}
                            <Divider/>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <Divider/>
            {chosenConfig &&
                <Stack sx={{background: "#B4FEA8"}} py={5} direction={{sm: "column", md: "row"}} justifyContent="center" spacing={3}>
                    <Stack
                        alignItems="center"
                    >
                        <Bolt/>
                        <Typography variant="h6">
                            Двигатель, л.с
                        </Typography>
                        <Typography variant="h4">
                            {chosenConfig.powerCar}
                        </Typography>
                    </Stack>

                    <Stack
                        alignItems="center"
                    >
                        <AddRoad/>

                        <Typography variant="h6">
                            Запас хода, км
                        </Typography>
                        <Typography variant="h4">
                            {chosenConfig.range}
                        </Typography>
                    </Stack>
                    <Stack
                        alignItems="center"
                    >
                        <DirectionsCar/>
                        <Typography variant="h6">
                            Привод
                        </Typography>
                        <Typography variant="h4">
                            {chosenConfig.driveType?.driveType}
                        </Typography>
                    </Stack>
                    <Stack
                        alignItems="center"
                    >
                        <AddBox/>
                        <Typography variant="h6">
                            Коробка передач
                        </Typography>
                        <Typography variant="h4">
                            {chosenConfig.gearBox}
                        </Typography>
                    </Stack>
                    <Stack
                        alignItems="center"
                    >
                        <Speed/>
                        <Typography variant="h6">
                            Разгон до 100 км/ч, сек
                        </Typography>
                        <Typography variant="h4">
                            {chosenConfig.acceleration}
                        </Typography>
                    </Stack>
                    <Stack
                        alignItems="center"
                    >
                        <Battery6Bar/>
                        <Typography variant="h6">
                            Объем батареи, кВт/ч
                        </Typography>
                        <Typography variant="h4">
                            {chosenConfig.battery}
                        </Typography>
                    </Stack>
                </Stack>
            }
            <Divider/>
            <Stack mt={3}>
                <Typography
                    variant="h4"
                    gutterBottom={true}
                >
                    Параметры комплектации
                </Typography>
                {
                    carData.model?.configurations.length > 0 ?
                        <ToggleButtonGroup
                            color="success"
                            exclusive
                            value={chosenConfigId}
                            onChange={handleChangeChosenConfig}
                        >
                            {
                                carData.model?.configurations.map(config =>
                                    <ToggleButton value={config.id}>
                                        {config.configuration}
                                    </ToggleButton>)
                            }
                        </ToggleButtonGroup>
                        : <Typography> У этой модели конфигураций нет </Typography>
                }
                <Typography
                    my={3}
                    variant="h5"
                    gutterBottom={true}
                >
                    Характеристики
                </Typography>

                {
                    chosenConfig &&
                    <Grid container spacing={5}>
                        <Grid>

                            <Typography
                                variant="h6"
                                gutterBottom={true}
                            >
                                Общая информация
                            </Typography>

                            <Stack>
                                <Typography>
                                    Бренд: {carData.brand?.carName}
                                </Typography>
                                <Typography>
                                    Год выпуска: {carData.yearOfProduction}
                                </Typography>
                                <Typography>
                                    Комплектация: {chosenConfig.configuration}
                                </Typography>
                                <Typography>
                                    Страна производства: {carData.manufactureCountry}
                                </Typography>

                                <Typography
                                    variant="h6"
                                    gutterBottom={true}
                                    marginTop="20px"
                                >
                                    Трансмиссия
                                </Typography>
                                <Typography>
                                    Коробка передач: {chosenConfig.gearBox}
                                </Typography>
                                <Typography>
                                    Тип привода: {chosenConfig.driveType?.driveType}
                                </Typography>
                            </Stack>
                            <Typography
                                variant="h6"
                                gutterBottom={true}
                                marginTop="20px"
                            >
                                Эксплуатационные показатели
                            </Typography>
                            <Stack>

                                <Typography>
                                    Макс. скорость, км/ч: {carData.model?.maxSpeed}
                                </Typography>
                                <Typography>
                                    Разгон 0-100 км/ч, сек.: {chosenConfig.acceleration}
                                </Typography>
                                <Typography>
                                    Расход
                                    топлива: {carData.model?.fuelEconomy} {["ДВС", "Гибрид"].indexOf(chosenConfig.engineType.engineType) >= 0 ? "л/100 км" : "кВт.ч/100 км"}
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid>
                            <Stack>
                                <Typography
                                    variant="h6"
                                    gutterBottom={true}
                                >
                                    Двигатель
                                </Typography>
                                <Typography>
                                    Макс. крутящий момент, Н•м/об/мин: {chosenConfig.maxTorque}
                                </Typography>
                                <Typography>
                                    Макс. мощность двигателя, кВт/об/мин: {chosenConfig.maxPower}
                                </Typography>
                                <Typography>
                                    Мощность двигателя, л.с.: {chosenConfig.powerCar}
                                </Typography>
                                <Typography>
                                    Запас хода, км: {chosenConfig.range}
                                </Typography>
                            </Stack>
                            <Stack>
                                <Typography
                                    variant="h6"
                                    gutterBottom={true}
                                    marginTop="20px"
                                >
                                    Подвеска и тормоза
                                </Typography>
                                <Typography>
                                    Тип тормозной системы: {chosenConfig.breakType}
                                </Typography>
                                <Typography>
                                    Тип подвески: {chosenConfig.typeSuspension}
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid>
                            <Typography
                                variant="h6"
                                gutterBottom={true}
                            >
                                Кузов
                            </Typography>
                            <Typography>
                                Длина, мм: {carData.model?.length}
                            </Typography>
                            <Typography>
                                Ширина, мм: {carData.model?.width}
                            </Typography>
                            <Typography>
                                Высота, мм: {carData.model?.height}
                            </Typography>
                            <Typography>
                                Количество дверей: {carData.model?.doorsCount}
                            </Typography>
                            <Typography>
                                Количество мест: {carData.model?.seatCount}
                            </Typography>
                            <Typography>
                                Клиренс, см: {carData.model?.clearance}
                            </Typography>
                            <Typography>
                                Колёсная база, мм: {carData.model?.wheelBase}
                            </Typography>
                            <Typography>
                                Максимальная масса, кг: {carData.model?.maxWeight}
                            </Typography>
                            <Typography>
                                Мин. Объем багажника, л: {carData.model?.bagSpace}
                            </Typography>
                        </Grid>
                    </Grid>
                }
            </Stack>
        </Container>
    )
        ;
};

export default CarView;
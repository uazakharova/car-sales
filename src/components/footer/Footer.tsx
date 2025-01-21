import {Box, Button, Container, Divider, Icon, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {SCHEDULE} from "../../constants/public/schedule";
import {Instagram, Telegram, WhatsApp} from "@mui/icons-material";
import {INSTAGRAM_LINK, TELEGRAM_LINK, WHATSUP_LINK} from "../../constants/public/socials";
import {MAIN_PHONE, PHONES_LIST} from "../../constants/public/contancs";
import {NavLink} from "react-router-dom";
import {ROUTES_PATH} from "../../constants/routes";
import {Link} from "react-router-dom/dist";
import Logo from "../../../public/LOGO.PNG";

const Footer = () => {
    return (
        <Box
            width="100%"
            sx={{background: '#b2c7fc'}}
            mt={3}
        >
            <Container>
                <Grid
                    container={true}
                    spacing={4}
                    justifyContent="space-between"
                    alignItems="center"
                    pt={4}
                >
                    <Grid
                    >
                        <Box
                            sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                        >
                            <img style={{height: '80px', marginBottom: '5px'}} src={Logo} alt=""/>
                            {/*<Image*/}
                            {/*    src="https://placehold.co/150x50?text=logo"*/}
                            {/*    alt="Company logo"*/}
                            {/*    width="150px"*/}
                            {/*    height="50px"*/}
                            {/*/>*/}

                            <Stack
                                direction="row"
                                // width="100%"
                                justifyContent="space-between"
                                spacing={2}
                            >
                                <a href={WHATSUP_LINK}>
                                    <WhatsApp/>
                                </a>
                                <a href={TELEGRAM_LINK}>
                                    <Telegram/>
                                </a>
                                <a href={INSTAGRAM_LINK}>
                                    <Instagram/>
                                </a>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid
                    >
                        <Stack
                            direction="row"
                            spacing={2}
                        >
                            <NavLink style={{color: "#0D1B2A", textDecoration: "none"}} to={ROUTES_PATH.MAIN}>
                                <Typography
                                    variant="body1"
                                >
                                    Главная
                                </Typography>
                            </NavLink>
                            <NavLink style={{color: "#0D1B2A", textDecoration: "none"}} to={ROUTES_PATH.CATALOG}>
                                <Typography
                                    variant="body1"
                                >
                                    Каталог
                                </Typography>
                            </NavLink>
                            <NavLink style={{color: "#0D1B2A", textDecoration: "none"}} to={ROUTES_PATH.SERVICE}>
                                <Typography
                                    variant="body1"
                                >
                                    Сервис
                                </Typography>
                            </NavLink>
                            <NavLink style={{color: "#0D1B2A", textDecoration: "none"}} to={ROUTES_PATH.CONTACTS}>
                                <Typography
                                    variant="body1"
                                >
                                    Контакты
                                </Typography>
                            </NavLink>
                        </Stack>
                    </Grid>
                    <Stack
                        alignItems="center"
                    >
                        <a class="phone" href={`tel:${MAIN_PHONE.replace(/ /g,'')}`}>
                        <Typography
                            variant="body2"
                            sx={{fontWeight: 'bold'}}
                        >
                            {MAIN_PHONE}
                        </Typography>
                        </a>
                        <Typography
                            variant="body2"
                        >
                            {SCHEDULE}
                        </Typography>
                    </Stack>
                </Grid>
                <Divider
                    sx={{my: 1}}
                />
                <Typography
                    variant="body2"
                    sx={{color: '#888'}}
                >
                    *Цены на автомобили носят ознакомительный характер, в связи с сильными колебаниями курса уточняйте
                    итоговую стоимость автомобиля у менеджеров
                </Typography>
                <Typography
                    variant="body2"
                    sx={{color: '#888', mt: 2}}
                >
                    © 2025. Все права защищены. Подробности о ценах и предложениях уточняйте у менеджеров
                </Typography>
                <Box
                    sx={{display: 'flex', justifyContent: 'center', mt: 2}}
                >
                    {/*<Typography*/}
                    {/*    variant="body2"*/}
                    {/*    sx={{ color: '#888', mx: 2 }}*/}
                    {/*>*/}
                    {/*    Пользовательское соглашение*/}
                    {/*</Typography>*/}
                    {/*<Typography*/}
                    {/*    variant="body2"*/}
                    {/*    sx={{ color: '#888', mx: 2 }}*/}
                    {/*>*/}
                    {/*    Политика конфиденциальности*/}
                    {/*</Typography>*/}

                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
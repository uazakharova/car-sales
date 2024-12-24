import {Box, Button, Container, Divider, Icon, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {SCHEDULE} from "../../constants/public/schedule";
import {Telegram, WhatsApp} from "@mui/icons-material";
import {WHATSUP_LINK} from "../../constants/public/socials";
import {PHONES_LIST} from "../../constants/public/contancs";
import {NavLink} from "react-router-dom";
import {ROUTES_PATH} from "../../constants/routes";
import {Link} from "react-router-dom/dist";

const Footer = () => {
    return (
        <Box
            width="100%"
            sx={{backgroundColor: '#f9f9f9'}}
            mt={3}
        >
            <Container>
                <Grid
                    container={true}
                    spacing={4}
                    alignItems="center"
                    pt={4}
                >
                    <Grid
                    >
                        <Box
                            sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}
                        >
                            {/*<Image*/}
                            {/*    src="https://placehold.co/150x50?text=logo"*/}
                            {/*    alt="Company logo"*/}
                            {/*    width="150px"*/}
                            {/*    height="50px"*/}
                            {/*/>*/}

                            <Stack
                                direction="row"
                                spacing={1}
                            >
                                <a href={WHATSUP_LINK}>
                                    <WhatsApp/>
                                </a>
                                <a href={WHATSUP_LINK}>
                                    <Telegram/>
                                </a>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid
                    >
                        <Box
                            sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}
                        >
                            <NavLink style={{color: "black", textDecoration: "none"}} to={ROUTES_PATH.MAIN}>
                                <Typography
                                    variant="body1"
                                >
                                    Главная
                                </Typography>
                            </NavLink>
                            <NavLink style={{color: "black", textDecoration: "none"}} to={ROUTES_PATH.CATALOG}>
                                <Typography
                                    variant="body1"
                                >
                                    Каталог
                                </Typography>
                            </NavLink>
                            <NavLink style={{color: "black", textDecoration: "none"}} to={ROUTES_PATH.SERVICE}>
                                <Typography
                                    variant="body1"
                                >
                                    Сервис
                                </Typography>
                            </NavLink>
                            <NavLink style={{color: "black", textDecoration: "none"}} to={ROUTES_PATH.CONTACTS}>
                                <Typography
                                    variant="body1"
                                >
                                    Контакты
                                </Typography>
                            </NavLink>
                        </Box>
                    </Grid>
                    <Stack
                        alignItems="center"
                    >
                        <Stack>
                            {PHONES_LIST.map(phone => <Typography
                                variant="body1"
                                sx={{fontWeight: 'bold', fontSize: '20px'}}
                            >
                                {phone}
                            </Typography>)}
                        </Stack>


                        <Typography
                            variant="body2"
                        >
                            {SCHEDULE}
                        </Typography>
                    </Stack>
                </Grid>
                <Divider
                    sx={{my: 4}}
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
                    © 2024. Все права защищены. Подробности о ценах и предложениях уточняйте у менеджеров
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
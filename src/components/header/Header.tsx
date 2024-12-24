import {Box, Divider, Stack, Typography} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import {ROUTES_PATH} from "../../constants/routes";
import {MAIN_PHONE} from "../../constants/public/contancs";
import {SCHEDULE} from "../../constants/public/schedule";
import Grid from "@mui/material/Grid2";

function Header() {
    return (
        <Stack mb={3}
        >
            <Grid
                display="flex"
                sx={{justifyContent:{ sm: 'space-between', xs: 'center' }}}
                justifyContent="space-between"
                alignItems="center"
                padding="16px"
                container
            >
                <Grid
                    width="100px"
                    height="50px"
                />
                <Grid
                    display="flex"
                    gap="16px"
                >
                    <Link style={{color: "black", textDecoration: "none"}} to={ROUTES_PATH.MAIN}>
                        <Typography
                            variant="body1"
                        >
                            Главная
                        </Typography>
                    </Link>
                    <Link style={{color: "black", textDecoration: "none"}} to={ROUTES_PATH.CATALOG}>
                        <Typography
                            variant="body1"
                        >
                            Каталог
                        </Typography>
                    </Link>
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
                </Grid>
                <Grid>
                    <Typography
                        variant="body1"
                    >
                        {MAIN_PHONE}
                    </Typography>
                    <Typography
                        variant="body2"
                    >
                        {SCHEDULE}
                    </Typography>
                </Grid>
            </Grid>
            <Divider/>
        </Stack>
    );
}

export default Header;
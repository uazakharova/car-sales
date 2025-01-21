import {Box, Divider, Stack, Typography} from "@mui/material";
import {Link, NavLink} from "react-router-dom";
import {ROUTES_PATH} from "../../constants/routes";
import {MAIN_PHONE} from "../../constants/public/contancs";
import {SCHEDULE} from "../../constants/public/schedule";
import Grid from "@mui/material/Grid2";
import DarkLogo from "../../../public/DARK_LOGO.PNG";
function Header() {

    return (
        <Stack mb={3}
               sx={{background:"#0D1B2A"}}
        >
            <Grid
                display="flex"
                sx={{justifyContent:{ sm: 'space-between', xs: 'center' }}}
                justifyContent="space-between"
                alignItems="center"
                padding="26px 16px"
                container
            >
                <Grid
                    maxWidth="210px"
                    height="80px"
                
                >
                    <Link style={{color: "black", textDecoration: "none"}} to={ROUTES_PATH.MAIN}>
                    <img style={{width:'100%',height:'100%'}} src={DarkLogo} alt=""/>
                    </Link>
                </Grid>
                <Grid
                    display="flex"
                    gap="30px"
                >
                    <Link style={{color: "black", textDecoration: "none"}} to={ROUTES_PATH.MAIN}>
                        <Typography
                            color="#B3FDA7"
                            sx={{ typography: { sm: 'h6', xs: 'body1' }}}
                        >
                            ГЛАВНАЯ
                        </Typography>
                    </Link>
                    <Link style={{color: "black", textDecoration: "none"}} to={ROUTES_PATH.CATALOG}>
                        <Typography
                            color="#B3FDA7"
                            sx={{ typography: { sm: 'h6', xs: 'body1' }}}
                        >
                            КАТАЛОГ
                        </Typography>
                    </Link>
                    <NavLink style={{color: "black", textDecoration: "none"}} to={ROUTES_PATH.SERVICE}>
                        <Typography
                            color="#B3FDA7"
                            sx={{ typography: { sm: 'h6', xs: 'body1' }}}
                        >
                            СЕРВИС
                        </Typography>
                    </NavLink>
                    <NavLink style={{color: "black", textDecoration: "none"}} to={ROUTES_PATH.CONTACTS}>
                        <Typography
                            color="#B3FDA7"
                            sx={{ typography: { sm: 'h6', xs: 'body1' },mb:{sm:0,xs:3}}}
                        >
                            КОНТАКТЫ
                        </Typography>
                    </NavLink>
                </Grid>
                <Grid>
                    <a href={`tel:${MAIN_PHONE.replace(/ /g,'')}`}>
                        <Typography
                            color="#B3FDA7"
                            variant="body1"
                            sx={{fontWeight: 'bold'}}
                        >
                            {MAIN_PHONE}
                        </Typography>
                    </a>
                    <Typography
                        color="#B3FDA7"
                        variant="body2"
                        align="right"
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
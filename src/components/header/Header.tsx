import { Box, Typography } from "@mui/material";
import {NavLink} from "react-router-dom";
import {ROUTES_PATH} from "../../constants/routes";
import {MAIN_PHONE} from "../../constants/public/contancs";
import {SCHEDULE} from "../../constants/public/schedule";

function Header() {
    return (<Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="16px"
        mb={3}

      >
        <Box
          src="https://placehold.co/100x50?text=logo"
          alt="Company Logo"
          width="100px"
          height="50px"
        />
        <Box
          display="flex"
          gap="16px"
        >
          <NavLink style={{color:"black",textDecoration:"none"}} to={ROUTES_PATH.MAIN}>
            <Typography
                variant="body1"
            >
              Главная
            </Typography>
          </NavLink>
          <NavLink style={{color:"black",textDecoration:"none"}} to={ROUTES_PATH.MAIN}>
            <Typography
                variant="body1"
            >
              Каталог
            </Typography>
          </NavLink>
          <NavLink style={{color:"black",textDecoration:"none"}} to={ROUTES_PATH.MAIN}>
            <Typography
                variant="body1"
            >
              Сервис
            </Typography>
          </NavLink>
          <NavLink style={{color:"black",textDecoration:"none"}} to={ROUTES_PATH.MAIN}>
            <Typography
                variant="body1"
            >
              Контакты
            </Typography>
          </NavLink>
        </Box>
        <Box>
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
        </Box>
      </Box>);
}

export default Header;
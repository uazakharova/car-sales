import { Box, Typography } from "@mui/material";

function Header() {
    return (<Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="16px"
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
          <Typography
            variant="body1"
          >
            Каталог
          </Typography>
          <Typography
            variant="body1"
            bgcolor="green"
            color="white"
            padding="4px 8px"
          >
            Авто в наличии
          </Typography>
          <Typography
            variant="body1"
          >
            Доставка и оплата
          </Typography>
          <Typography
            variant="body1"
          >
            Контакты
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
          >
            +7 (495) 255-70-30
          </Typography>
          <Typography
            variant="body2"
          >
            Ежедневно с 10:00 до 20:00
          </Typography>
        </Box>
      </Box>);
}

export default Header;
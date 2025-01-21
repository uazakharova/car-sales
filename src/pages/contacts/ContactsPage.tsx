import {Container, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {SCHEDULE} from "../../constants/public/schedule";
import {PHONES_LIST} from "../../constants/public/contancs";
import {INSTAGRAM_LINK, TELEGRAM_LINK, WHATSUP_LINK} from "../../constants/public/socials";
import {Instagram, Telegram, WhatsApp} from "@mui/icons-material";

const ContactsPage = () => {
    return (
        <Container maxWidth="xl">
            <Grid>
                <Typography variant="h4" mb={3}>
                    Контакты
                </Typography>
                <Stack spacing={3}>
                    <Stack spacing={1}>
                        <Typography sx={{fontWeight: 'bold'}} variant="h6">
                            Время работы: 
                        </Typography>
                        <Typography variant="h6">
                            {SCHEDULE}
                        </Typography>
                    </Stack>
                    <Stack spacing={1}>
                        <Typography sx={{fontWeight: 'bold'}} variant="h6">
                            Телефоны для связи:
                        </Typography>
                        <Stack>
                            {PHONES_LIST.map(phone =><a class="phone" href={`tel:${phone.replace(/ /g,'')}`}><Typography variant="h6">{phone}</Typography></a>)}
                        </Stack>


                    </Stack>
                    <Stack spacing={1}>
                        <Typography sx={{fontWeight: 'bold'}} variant="h6">
                            Способы связи:
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={1}
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
                    </Stack>
                </Stack>
            </Grid>
        </Container>
    );
};

export default ContactsPage;
import {Container, Stack, Typography} from "@mui/material";

const ServicePage = () => {
    const services = ["1. Любые работы с электромобилями и гибридами", "2. Техническое обслуживание", "3. Диагностика Lotus, AITO", "4. Расширенные услуги для владельцев Lixiang. Привязка ключей к Lixiang, восстановление аккаунтов"]
    return (
        <Container maxWidth="xl">
            <Stack>
                <Typography variant="h4" mb={3}>
                    Мы предлагаем следующие услуги сервиса:
                </Typography>
                {
                    services.map(service =>
                        <Typography mb={1}>
                            {service}
                        </Typography>
                    )
                }
            </Stack>
        </Container>
    );
};

export default ServicePage;
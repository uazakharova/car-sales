import {Show, TextField, ReferenceField, Labeled, NumberField, ImageField, SimpleShowLayout} from "react-admin";

const ShowModel = () => {
    const renderBase64ImageSrc = () => (
        <img src={record.base64ImageSrc} alt="Model image" style={{maxWidth: '200px'}}/>
    );

    // const renderConfigurations = () => (
    //     <ArrayField source="configurations">
    //         <Datagrid>
    //             {/* Здесь можно добавить отображение полей конфигурации */}
    //         </Datagrid>
    //     </ArrayField>
    // );

    return (
        <Show>
            <SimpleShowLayout>
                <TextField source="id"/>
                <Labeled label="Фото">
                    <ImageField source="base64ImageSrc" alt="Model image"/>
                    {/*{renderBase64ImageSrc()}*/}
                </Labeled>
                <Labeled label="Модель автомобиля"><TextField source="modelCar"/></Labeled>
                <Labeled label="Максимальная скорость"><NumberField source="maxSpeed"/></Labeled>
                <Labeled label="Экономия топлива"><NumberField source="fuelEconomy"/></Labeled>
                <Labeled label="Длина"><NumberField source="length"/></Labeled>
                <Labeled label="Ширина"><NumberField source="width"/></Labeled>
                <Labeled label="Высота"><NumberField source="height"/></Labeled>
                <Labeled label="Количество дверей"><NumberField source="doorsCount"/></Labeled>
                <Labeled label="Количество мест"><NumberField source="seatCount"/></Labeled>
                <Labeled label="Объем багажника"><NumberField source="bagSpace"/></Labeled>
                <Labeled label="Максимальный вес"><NumberField source="maxWeight"/></Labeled>
                <Labeled label="База"><NumberField source="wheelBase"/></Labeled>
                <Labeled label="Загрузочная высота"><NumberField source="clearance"/></Labeled>
            </SimpleShowLayout>

            {/*<Labeled label="Конфигурации">*/}
            {/*    {renderConfigurations()}*/}
            {/*</Labeled>*/}

            {/*<Labeled label="Связанный автомобиль">*/}
            {/*    <ReferenceField label="Автомобиль" source="car_id" reference="cars">*/}
            {/*        <TextField source="modelCar"/>*/}
            {/*    </ReferenceField>*/}
            {/*</Labeled>*/}

            {/* Добавьте здесь отображение поля car */}
        </Show>
    );
};

export default ShowModel;
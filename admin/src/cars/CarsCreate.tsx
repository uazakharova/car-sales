import {Create, required, SimpleForm, TextInput, ImageInput, ImageField} from "react-admin";

const CarsCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="carNumber" validate={[required()]}/>
                <TextInput source="rating" validate={[required()]}/>
                <TextInput source="brand" validate={[required()]}/>
                <ImageInput source="base64ImageSrc" label="Фото">
                    <ImageField source="src"/>
                </ImageInput>
            </SimpleForm>
            {/*<Simple*/}
        </Create>
    );
};

export default CarsCreate;
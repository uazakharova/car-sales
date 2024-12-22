import {Create, required, SimpleForm, TextInput} from "react-admin";

const CreateBrand = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="carName" validate={[required()]}/>
            </SimpleForm>
        </Create>
    );
};

export default CreateBrand;
import {Create, required, SimpleForm, TextInput} from "react-admin";

const CreateDriveTypes = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="driveType" validate={[required()]}/>
            </SimpleForm>
        </Create>
    );
};

export default CreateDriveTypes;
import {Create, required, SimpleForm, TextInput} from "react-admin";

const CreateStatus = () => {
    return (
        <div>
            <Create>
                <SimpleForm>
                    <TextInput source="status" validate={[required()]}/>
                </SimpleForm>
            </Create>
        </div>
    );
};

export default CreateStatus;
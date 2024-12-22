import React from 'react';
import {Create, required, SimpleForm, TextInput} from "react-admin";

const CreateEngineTypes = () => {
    return (
        <div>
            <Create>
                <SimpleForm>
                    <TextInput source="engineType" validate={[required()]}/>
                </SimpleForm>
            </Create>
        </div>
    );
};

export default CreateEngineTypes;
import React from 'react';
import {BooleanInput, Create, NumberInput, SimpleForm, TextInput,SelectInput,ReferenceInput} from "react-admin";

const CreateConfiguration = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="configuration" />
                <BooleanInput source="showPriceFrom" />
                <NumberInput source="priceCar" />
                <NumberInput source="acceleration" />
                <NumberInput source="battery" optional />
                <NumberInput source="powerCar" />
                <NumberInput source="range" optional />
                <TextInput source="gearBox" optional />
                <TextInput source="exteriorColor" />
                <TextInput source="interiorColor" />
                <NumberInput source="maxTorque" optional />
                <NumberInput source="maxPower" />
                <TextInput source="breakType" />
                <TextInput source="typeSuspension" />
                <ReferenceInput source="engineType" reference="engine-types">
                    <SelectInput optionText="engineType" />
                </ReferenceInput>
                <ReferenceInput source="model" reference="models">
                    <SelectInput optionText="modelCar" />
                </ReferenceInput>
                <ReferenceInput source="driveType" reference="drive-types">
                    <SelectInput optionText="driveType" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
};

export default CreateConfiguration;
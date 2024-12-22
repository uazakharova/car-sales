import {List, Datagrid, TextField, ImageField, ChipField, ReferenceField,ReferenceManyField, NumberField,BooleanField} from "react-admin";

const CarList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <BooleanField source="showOnMain" label="Show on Main Page" />
                <NumberField source="rating" />
                <TextField source="manufactureCountry" />
                <NumberField source="yearOfProduction" />
                <ReferenceField source="model" reference="models">
                    <TextField source="modelCar" />
                </ReferenceField>
                <ReferenceField source="configuration" reference="configuration">
                    <TextField source="configuration" />
                </ReferenceField>
                <ReferenceField source="status" reference="statuses">
                    <TextField source="status" />
                </ReferenceField>
                <ReferenceField source="brand" reference="brands">
                    <TextField source="carName" />
                </ReferenceField>
            </Datagrid>
        </List>
    );
};

export default CarList;
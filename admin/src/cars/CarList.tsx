import {List, Datagrid, TextField, ImageField} from "react-admin";

const CarList = () => {
    const textFields =  ["id","rating","carNumber"]
    return (
        <List>
            <Datagrid>
                {textFields.map(field => <TextField source={field}/>)}
                <ImageField source="base64ImageSrc" />
            </Datagrid>
        </List>
    );
};

export default CarList;
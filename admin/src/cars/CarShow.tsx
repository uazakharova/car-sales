import {Show,SimpleShowLayout,TextField} from "react-admin";

const CarShow = () => {
    const textFields =  ["id","rating","carNumber"]
    return (
        <Show>
            <SimpleShowLayout>
                {textFields.map(field =><TextField source={field}/>)}

            </SimpleShowLayout>
        </Show>
    );
};

export default CarShow;
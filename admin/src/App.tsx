import {
    Admin,
    Resource,
    ListGuesser,
    EditGuesser,
    ShowGuesser,
} from "react-admin";
import {Layout} from "./Layout";
import {dataProvider} from "./dataProvider";
import {authProvider} from "./authProvider";
import CarsCreate from "./cars/CarsCreate";
import CarShow from "./cars/CarShow";
import CarList from "./cars/CarList";

export const App = () => {
    fetch("http://localhost:3000/cars?filter=%7B%7D&range=%5B0%2C9%5D&sort=%5B%22id%22%2C%22DESC%22%5D")
        .then(res => console.log(res))
    return <Admin
        layout={Layout}
        dataProvider={dataProvider}
        authProvider={authProvider}
    >
        <Resource
            name="cars"
            list={CarList}
            create={CarsCreate}
            edit={EditGuesser}
            show={CarShow}
        />
    </Admin>
};

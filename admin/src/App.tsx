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

import ShowModel from "./models/ShowModel";
import ListModel from "./models/ListModel";
import CreateEngineTypes from "./engine-types/CreateEngineTypes";
import CreateDriveTypes from "./drive-types/CreateDriveTypes";
import CreateStatus from "./statuses/CreateStatus";
import CreateConfiguration from "./configurations/CreateConfiguration";
import CreateModel from "./models/CreateModel";
import CarList from "./cars/CarList";

export const App = () => {

    return <Admin
        layout={Layout}
        dataProvider={dataProvider}
        authProvider={authProvider}
    >
        <Resource
            name="engine-types"
            list={ListGuesser}
            create={CreateEngineTypes}
            edit={EditGuesser}
            show={ShowGuesser}
        />
        <Resource
            name="drive-types"
            list={ListGuesser}
            create={CreateDriveTypes}
            edit={EditGuesser}
            show={ShowGuesser}
        />
        <Resource
            name="statuses"
            list={ListGuesser}
            create={CreateStatus}
            edit={EditGuesser}
            show={ShowGuesser}
        />
        <Resource
            name="models"
            create={CreateModel}
            list={ListModel}
            show={ShowModel}
        />
        <Resource
            name="configuration"
            list={ListGuesser}
            create={CreateConfiguration}
            edit={EditGuesser}
            show={ShowGuesser}
        />
        <Resource
            name="brands"
            list={ListGuesser}
            create={CreateConfiguration}
            edit={EditGuesser}
            show={ShowGuesser}
        />
        <Resource
            name="cars"
            list={CarList}
            create={CarsCreate}
            edit={EditGuesser}
            show={ShowGuesser}
        />
        <Resource
            name="configurations"

        />
    </Admin>
};

import {axiosInstance} from "../axios";
import {GET_ALL_CARS_API} from "../../constants/api.routes";

export const getAllCarsWithFullInfo = () => axiosInstance.get(`${GET_ALL_CARS_API}?loadFullInfo=true`)
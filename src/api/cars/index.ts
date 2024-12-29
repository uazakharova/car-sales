import {axiosInstance} from "../axios";
import {GET_ALL_CARS_API} from "../../constants/api.routes";

const carsLoadFullInfoUrl = `${GET_ALL_CARS_API}?loadFullInfo=true`;
export const getAllCarsWithFullInfo = () => axiosInstance.get(carsLoadFullInfoUrl)
export const getAllCarsWithSortAndFiltering = ({
                                                   sort,
                                                   filters
                                               }: { sort?: string, filters?: string }) => axiosInstance.get(`${carsLoadFullInfoUrl}&sort=${sort}${filters}`)
export const getCarByIdWithFullInfo = (id: string) => axiosInstance.get(`${GET_ALL_CARS_API}/${id}?loadFullInfo=true`)
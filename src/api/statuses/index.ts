import {axiosInstance} from "../axios";
import {GET_ALL_STATUSES_API} from "../../constants/api.routes";

export const getAllStatuses = () => axiosInstance.get(GET_ALL_STATUSES_API)
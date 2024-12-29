import {axiosInstance} from "../axios";
import {GET_ALL_ENGINE_TYPES_API} from "../../constants/api.routes";

export const getAllEngineTypes = () => axiosInstance.get(GET_ALL_ENGINE_TYPES_API)
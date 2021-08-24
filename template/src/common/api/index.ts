import axios from "axios";
import { BASE_URL } from "react-native-dotenv";

export const axiosClient = axios.create({ baseURL: BASE_URL });

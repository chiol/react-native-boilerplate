import { useQuery } from "react-query";
import { ApiService } from "../services";

export default function useGetProduct() {
    return useQuery("productItems", () => ApiService.getAllPost());
}

import { useQuery } from "react-query";
import { ApiService } from "../services";
import { useEffect } from "react";

export default function useGetProduct() {
    return useQuery("productItems", () => ApiService.getAllPost());
}

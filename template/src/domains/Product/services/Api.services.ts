import { AxiosInstance } from "axios";
import { axiosClient } from "common/api";
class Api {
    private static instance: Api;
    private api: AxiosInstance;
    constructor() {
        this.api = axiosClient;
    }
    public static get Instance(): Api {
        return this.instance || (this.instance = new this());
    }
    public async getAllPost(): Promise<void> {
        const { data } = await this.api.get("/posts");
        return data;
    }
}

export const ApiService = Api.Instance;

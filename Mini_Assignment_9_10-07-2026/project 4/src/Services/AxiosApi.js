import axios from "axios";

const API = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

export const getData = async () => {
    const response = await API.get("/");
    return response.data;
};

export const addData = async (data) => {
    const response = await API.post("/", data);
    return response.data;
};

export const updateData = async (id, data) => {
    const response = await API.put(`/${id}`, data);
    return response.data;
};

export const patchData = async (id, data) => {
    const response = await API.patch(`/${id}`, data);
    return response.data;
};

export const deleteData = async (id) => {
    await API.delete(`/${id}`);
};
import axios from "axios";

export const apiKey = "457d679cf07d20390be93bc8e61de2bf";

const url = "https://api.themoviedb.org/3/";

export const api = axios.create({
    baseURL: url,
})
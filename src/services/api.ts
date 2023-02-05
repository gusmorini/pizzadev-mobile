import { SERVER } from "@env";
import axios from "axios";

const api = axios.create({
  baseURL: SERVER,
});

export { api };

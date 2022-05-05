import axios from "axios";

import { FormState } from "../models";
import { IPeople } from "../models/people.model";

const CUSTOM_API = import.meta.env.VITE_APP_CUSTOM_API_GHIBLI;

export function createPeople(data: FormState) {
  return axios.post<IPeople>(`${CUSTOM_API}/people`, data);
}

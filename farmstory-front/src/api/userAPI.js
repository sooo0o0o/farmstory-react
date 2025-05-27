import axios from "axios";
import { USER_TERMS } from "./http";

export const getTerms = async () => {
  try {
    const response = await axios.get(`${USER_TERMS}`);
    console.log(response);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

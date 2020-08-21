import axios from "axios";

const URL = "http://tsg-vending.herokuapp.com";
export default class Api {
  getAll = async () => {
    return await axios.get(URL + "/items");
  };

  buyItem = async (amount, id) => {
    return await axios.post(`${URL}/money/${amount}/item/${id}`);
  };
}

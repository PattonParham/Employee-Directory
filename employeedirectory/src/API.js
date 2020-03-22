import axios from "axios";
const JSON = "/freinds.json";

export default {
    search: function(query) {
      return axios.get(JSON + query);
    }
}
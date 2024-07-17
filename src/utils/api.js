import axios from "axios";

export default axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    'x-rapidapi-key': 'df36766df4msh611d2126b0e0dd2p1a7b86jsn19e479662678',
    'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
  },
});

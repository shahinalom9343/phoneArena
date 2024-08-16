import axios from "axios";

export const axiosPulic = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosPublic = () => {
  return axiosPulic;
};

export default useAxiosPublic;

import axios from "axios";

export const axiosPulic = axios.create({
  baseURL: "https://phone-arena-server-nine.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPulic;
};

export default useAxiosPublic;

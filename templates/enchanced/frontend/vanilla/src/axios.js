const axios = require("axios");
const nexoClient = require("./nexo");
const {getSessionToken} = require("@tiendanube/nexo/helpers");

const axiosIntance = axios.create({
  baseURL: 'http://localhost:3200',
});

axiosIntance.interceptors.request.use(async (request) => {
  const token = await getSessionToken(nexoClient);
  const bearerToken = `Bearer ${token}`;
  request.headers = { ...request.headers, Authorization: bearerToken };
  return request;
});

module.exports = axiosIntance;
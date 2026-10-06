import axios from 'axios'

const commonApi = async (httpMethod, url, reqBody, reqHeader) => {
  const reqConfig = { method: httpMethod, url, data: reqBody, headers: reqHeader }
  return await axios(reqConfig)
}
export default commonApi

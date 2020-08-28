import axios from 'axios'

const instanceAxios = axios.create({
  baseURL: 'http://152.136.185.210:8000/api/z8',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

export function axiosRequest(config) {
  // instanceAxios.interceptors.request.use(config => {
  //   console.log(config);
  //   return config;
  // }, error => {
  //   console.log(error);
  //   return error
  // });
  // instanceAxios.interceptors.response.use();


  instanceAxios.interceptors.response.use(res => {
    console.log(res);
    return res.data
  }, error => {
    console.log(error);
  })

  return instanceAxios(config)
  // return new Promise((resolve, reject) => {
  //   instanceAxios(config)
  //     .then(res => {
  //       resolve(res);
  //     })
  //     .catch(err => {
  //       reject(err);
  //     });
  // });
}

export default axiosRequest
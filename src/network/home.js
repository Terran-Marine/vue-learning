import axiosRequest from "@/network/request";

export function getHttpHomeMultiData() {
  return axiosRequest({
    url: '/home/multidata'
  });
}

export function getHttpGoodsData(type, page) {
  return axiosRequest({
    url: '/home/data', params: {
      type: type,
      page: page,
    }
  });
}
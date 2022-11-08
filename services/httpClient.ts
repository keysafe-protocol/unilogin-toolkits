import axios, { AxiosResponse } from "axios";
const httpClient = axios.create({
  baseURL: "/ks",
});
export async function oAuthLogin(code: string) {
  const res: any = await httpClient.post("/auth_github_oauth", {
    data: code,
  });
  localStorage.setItem("token", res.token);
}
export async function getUserInfo() {
  const token = localStorage.getItem("token");
  return httpClient.get("/user_info", { headers: { authorization: token } });
}
export async function transfer() {
  const token = localStorage.getItem("token");
  return httpClient.get("/user_info", { headers: { authorization: token } });
}
export async function sign(message: string) {
  const token = localStorage.getItem("token");
  return httpClient.post(
    "/sign",
    { message },
    { headers: { authorization: token } }
  );
}

httpClient.interceptors.response.use(
  (response: AxiosResponse) => {
    const data = response.data;
    switch (data.status) {
      case "success":
        return data;
      case "fail":
        // message({
        //   content: `Fail: ${
        //     response.config.url === "/auth_confirm"
        //       ? "Error code"
        //       : response.config.url
        //   }`,
        // });
        throw Error(data);
      default:
        return data;
    }
  },
  (error: any) => {
    //     if (error.response.status === 401) {
    //       window.location.href = `#${ROUTES.LOGIN_HOME}`;
    //     } else {
    //       message({
    //         content: error?.response?.data || error?.message,
    //       });
    //     }
    //     throw Error(error);
    //   }
  }
);

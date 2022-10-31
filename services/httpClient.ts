import axios, { AxiosResponse } from "axios";
const httpClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "/ks"
      : "https://demo.keysafe.network:30002",
});
export async function oAuthLogin(code: string) {
  const res: any = await httpClient.post("/auth_github_oauth", {
    data: code,
  });
  localStorage.setItem("token", res.token);
}
export async function getUserInfo() {
  const token = localStorage.getItem("token");
  const res = await httpClient.get(
    "/user_info",
    { headers: { authorization: token } }
  );
  console.log(res);
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

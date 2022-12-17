import Cookies from "js-cookie";

const Auth = {
  isAuthorization() {
    if (Cookies.get("token") || Cookies.get("refresh")) return true;
    return null;
  },
  getAccessToken() {
    return Cookies.get("token");
  },
  getRefreshToken() {
    return Cookies.get("refresh");
  },
  // getUserId() {
  //   return Cookies.get("sub");
  // },

  signOut(navigate) {
    Cookies.remove("token");
    Cookies.remove("refresh");
    // Cookies.remove("sub");
    navigate("/login");
  },
  storeUserInfoToCookie(data) {
    if (!data.access_token || !data.refresh_token) return null;
    const { access_token, refresh_token } = data;
    // const accessExpires = new Date(access.expires);
    // const refreshExpires = new Date(refresh.expires);
    Cookies.set("token", access_token);
    Cookies.set("refresh", refresh_token);
    // Cookies.set("sub", sub, { expires: accessExpires });
    return data;
  },
};

export default Auth;

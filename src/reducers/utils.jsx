import jwt from "jsonwebtoken";
import base64 from "base-64";
import axios from "axios";
import cookie from "react-cookies";
const baseURL = "https://elite-heal.herokuapp.com";

export const signIn = async (username, password) => {
  const encoded = base64.encode(`${username}:${password}`);
  const user = await axios.post(
    `${baseURL}/signin`,
    {},
    {
      headers: {
        Authorization: `Basic ${encoded}`,
        "Access-Control-Allow-Origin": baseURL,
      },
    }
  );
  console.log("finishawait");
  if (user.data) {
    cookie.save("auth-cookie", user.data.token);
    return jwt.decode(user.data.token);
  } else {
    return "Invalid user";
  }
};

export const signUp = async (data) => {
  console.log(data);
  const result = await axios({
    baseURL: baseURL,
    url: "/admin/patient",
    method: "post",
    data: { data },
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": baseURL,
    },
  });

  if (result.data) {
    console.log(result.data);
    cookie.save("auth-token", result.data.token);
  }
};

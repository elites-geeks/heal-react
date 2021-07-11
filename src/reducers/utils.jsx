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
  if (user.data) {
    cookie.save("auth-token", user.data.token);
    return jwt.decode(user.data.token);
  } else {
    return "Invalid user";
  }
};

export const signUp = async (data) => {
  switch (data.type) {
    case 'client':
      data = { ...data, role: 'user', type: 'patient' }
      break;
    case 'doctor':
      data = { ...data, role: 'user', type: 'doctor' }
      break;
    case 'employee':
      data = { ...data, role: 'user', type: 'employee' }
      break;
    default:
      data = { ...data }
  }
  try {
    console.log('data', data)
    console.log(`/admin/${data.type}`)
    console.log('data.type', data.type)
    const result = await axios({
      baseURL: baseURL,
      url: `/admin/${data.type}`,
      method: "post",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": baseURL,
      },
    });
    console.log(result.data)
    if (result.data) {
      console.log(result.data);
      cookie.save("auth-token", result.data.token);
    }
  } catch (err) {
    console.log(err.message)
  }
};

export const getCookie = () => {
  const token = cookie.load('auth-token')
  if (token) {
    const user = jwt.decode(token);
    return user;
  } else {
    return null;
  }
}


export const signOut = () => {
  cookie.remove('auth-token');
}

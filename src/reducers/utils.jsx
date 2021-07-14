import jwt from "jsonwebtoken";
import base64 from "base-64";
import axios from "axios";
import moment from "moment";
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
      data = { ...data, role: 'user', type: 'patient', date_of_birth: data.date_of_birth.slice(0, 10) }
      break;
    case 'doctor':
      data = { ...data, role: 'user', type: 'doctor', date_of_birth: data.date_of_birth.slice(0, 10) }
      break;
    case 'employee':
      data = { ...data, role: 'user', type: 'employee', date_of_birth: data.date_of_birth.slice(0, 10) }
      break;
    default:
      data = { ...data }
  }
  try {
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
    if (result.data) {
      cookie.save("auth-token", result.data.token);
      return result.data.user
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


export const searchForDoctor = async (search) => {
  try {
    const docs = await axios.post(`${baseURL}/patient/appointment/search`, search, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": baseURL,
      }
    });
    return docs.data;
  } catch (err) {
    console.log(err.message)
  }
}

export const reserveAppointment = async (appointment) => {
  let time = moment(appointment.time).format("HH:00");
  let date = moment(appointment.date).format("YYYY-MM-DD");
  let patientId = appointment.patientId;
  try {
    const reservation = await axios.post(`${baseURL}/patient/appointment/search/${appointment.docId}`, { patientId, time, date }, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": baseURL,
      }
    });
    return reservation.data;
  } catch (err) {
    console.log(err.message)
  }
}


export const docNotif = (elem) => {
  return ({
    userImage: elem.patient.userProfile.img,
    name: elem.patient.userProfile.firstname.toUpperCase() + " " + elem.patient.userProfile.lastname.toUpperCase(),
    type: "New appointment reserved",
    message: `${elem.patient.userProfile.firstname.toUpperCase()} reserved a new appointment to your clinic at ${elem.savedApp.time}, on ${elem.savedApp.date}`
  })
}
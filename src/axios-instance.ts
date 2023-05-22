import axios from "axios";
import { getSession } from "next-auth/react";

const instance = axios.create({
  baseURL: process.env.NEXTAUTH_URL + "/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

let session: any = null;
instance.interceptors.request.use(async (config) => {
  if (!session) {
    session = await getToken();
  }

  if (session) {
    config.headers["Authorization"] = `Bearer ${session.user.token}`;
  } else {
    delete config.headers["Authorization"];
  }

  return config;
});

const getToken = async () => {
  const session = await getSession();
  if (session) {
    return session;
  }
  return null;
};

export { instance as API };

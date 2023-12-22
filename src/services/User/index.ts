import axios from 'axios';
import { LOGIN_URL, REGISTER_URL } from '../../urls';
import { User, UserLogin } from '../../models/User';
axios.defaults.withCredentials = true;

export const register = async (userBody: User, file: any) => {
  try {
    const form = new FormData();
    form.append('image', file);
    form.append('body', JSON.stringify(userBody));
    const res = await axios.post(REGISTER_URL, form);
    return { data: res.data };
  } catch (err) {
    return {
      error: true,
      data: err.response.data,
      code: err.response.status,
    };
  }
};

export const login = async (user: UserLogin) => {
  try {
    const res = await axios.post(LOGIN_URL, user);
    return { data: res.data };
  } catch (err) {
    return {
      error: true,
      data: err.response.data,
    };
  }
};

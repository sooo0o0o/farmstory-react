import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const loadStateFromCookie = () => {
  const username = Cookies.get("username");

  return { username };
};

const initState = {
  username: "",
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: loadStateFromCookie || initState,
  reducers: {
    //함수들
    login: (state, action) => {
      //리덕스 username 초기화
      const data = action.payload;

      state.username = data.username;

      //username 쿠키 저장
      Cookies.set("username", state.username, 1);
    },
    logout: (state) => {
      state.username = null;

      //쿠키 삭제
      {
        /*
        Cookies.remove("access_token"); //httpOnly == readonly 쿠키
        Cookies.remove("refresh_token"); //httpOnly == readonly 쿠키
        */
      }
      Cookies.remove("username");
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;

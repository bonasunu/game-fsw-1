import axios from "axios";
import {
  USER_EDIT_REQUEST,
  USER_EDIT_UPDATED,
  USER_EDIT_FAILED,
} from "../constants/editprofileConstants";
import Router from "next/router";
export const editprofileActions = (jwt, data) => async (dispatch) => {
  try {
    console.log(data);
    console.log("ini jwt dari redux", jwt);
    dispatch({
      type: USER_EDIT_REQUEST,
    });
    const userEditData = await axios.put(
      "https://pacific-taiga-53059.herokuapp.com/edit-player",
      data,
      {
        headers: {
          Authorization: jwt,
        },
      }
    );
    dispatch({
      type: USER_EDIT_UPDATED,
      payload: userEditData.data,
    });
    Router.push("/profile");
  } catch (error) {
    dispatch({
      type: USER_EDIT_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    // alert(error.message)
  }
};

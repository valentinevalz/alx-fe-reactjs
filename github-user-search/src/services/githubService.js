import axios from "axios";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return { data: response.data };
  } catch (error) {
    return { error: true };
  }
};

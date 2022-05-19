import axios from 'axios';

const baseURL = `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`;

const TaskRequest = async (endpoint) => {
  const { data } = await axios.get((baseURL + endpoint));
  return data;
};

export {
  TaskRequest,
}
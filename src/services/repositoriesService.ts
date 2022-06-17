import API from './API';

const getRepositories = async (username: string, page: number) => {
  const response = await API().get(`/users/${username}/repos?&page=${page}`);
  return response.data;
};

export default { getRepositories };

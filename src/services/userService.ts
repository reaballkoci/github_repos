import API from './API';

const getUsers = async (searchText: string, page: number) => {
  const response = await API().get(`search/users?q=${searchText}+in:fullname&page=${page}`);
  return response.data;
};

export default { getUsers };

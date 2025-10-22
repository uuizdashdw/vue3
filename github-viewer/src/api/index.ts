import api from '../axios';
import type { GitHubUser, SearchUsersParams } from '../types';

/** 🔍 유저 검색 */
export const searchUsers = ({ params }: SearchUsersParams) => {
  return api.get('/search/users', { params });
};

/** 👤 단일 유저 상세 */
export const getUser = async (username: string): Promise<GitHubUser> => {
  const { data } = await api.get(`/users/${username}`);
  return data;
};

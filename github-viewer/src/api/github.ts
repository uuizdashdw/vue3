// import api from '../axios';
// import type { GitHubUser } from '../types';

import { AxiosError } from 'axios';
import { searchUsers } from '.';
import type { GitHubUser, SearchUsersParams } from '../types';

// /** 🔍 유저 검색 */
// export const searchUsers = async (q: string, page = 1, perPage = 20) => {
//   const { data } = await api.get('/search/users', {
//     params: { q, page, per_page: perPage },
//   });
//   return data;
// };
export const getSearchUsers = async ({ params }: SearchUsersParams) => {
  try {
    const { data } = await searchUsers({ params });
    return data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return {
        ok: false,
        code: err.response?.status ?? 500,
        message: err.response?.data?.message ?? err.message,
      };
    }
  }
};

// /** 👤 단일 유저 상세 */
// export const getUser = async (username: string): Promise<GitHubUser> => {
//   const { data } = await api.get(`/users/${username}`);
//   return data;
// };

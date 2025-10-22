import { AxiosError } from 'axios';

// 공통 API 헬퍼 함수
export const apiHandler = async <T>(fn: () => Promise<T>) => {
  try {
    const data = await fn();
    return { ok: true, data } as const;
  } catch (err) {
    // Axios 에러 처리
    if (err instanceof AxiosError) {
      return {
        ok: false,
        code: err.response?.status ?? 500,
        message: err.response?.data?.message ?? err.message,
      } as const;
    }

    // 일반 JS 에러 처리
    if (err instanceof Error) {
      return {
        ok: false,
        code: 500,
        message: err.message,
      } as const;
    }

    // 알 수 없는 에러 처리
    return {
      ok: false,
      code: 500,
      message: err instanceof Error ? err.message : '알 수 없는 오류입니다.',
    } as const;
  }
};

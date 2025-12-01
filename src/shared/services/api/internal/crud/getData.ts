import { AxiosResponse } from 'axios';
import { AxiosRequestOptions, ContextResponse } from './req.types';
import { setAxiosDefaultRequestHeader } from '../requesters/setAxiosDefaultRequestHeader';
import { baseApiRequester } from '../requesters/baseApiRequester';

export async function getData<R, C extends boolean = false>(
  url: string,
  options?: AxiosRequestOptions & (C extends true ? { context: true } : { context?: false })
): Promise<C extends true ? AxiosResponse<R> : R> {
  const modifiedConfig = setAxiosDefaultRequestHeader(options?.config, options?.signal);
  const response = await baseApiRequester.get<R>(url, modifiedConfig);

  return (options?.context ? response : response.data) as ContextResponse<R, C>;
}

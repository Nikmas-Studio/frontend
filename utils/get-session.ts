import { GET_SESSION_ROUTE } from '@/constants/general';
import { Session } from '@/types/session';
import axios from 'axios';
import { buildBackendUrl } from './build-backend-url';

export async function getSession(): Promise<Session | null> {
  let res;
  try {
    res = await axios.post(buildBackendUrl(GET_SESSION_ROUTE));
  } catch (e) {
    return null;
  }

  return res.data;
}

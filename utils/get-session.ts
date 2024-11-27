import { GET_SESSION_URL } from '@/constants/general';
import { Session } from '@/types/session';
import axios from 'axios';

export async function getSession(): Promise<Session | null> {
  let res;
  try {
    res = await axios.post(GET_SESSION_URL);
  } catch (e) {
    return null;
  }

  return res.data;
}

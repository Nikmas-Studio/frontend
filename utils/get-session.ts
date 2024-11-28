import { GET_SESSION_ROUTE } from '@/constants/general';
import { Session } from '@/types/session';
import axios from 'axios';

export async function getSession(): Promise<Session | null> {
  let res;
  try {
    res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${GET_SESSION_ROUTE}`,
    );
  } catch (e) {
    return null;
  }

  return res.data;
}

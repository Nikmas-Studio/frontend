import { VALIDATE_SESSION_URL } from '@/constants/general';
import axios from 'axios';

export async function validateSession(): Promise<boolean> {
  let res;
  try {
    res = await axios.post(VALIDATE_SESSION_URL);
  } catch (e) {
    return false;
  }

  if (res.data && res.data.valid === true) {
    return true;
  }

  return false;
}

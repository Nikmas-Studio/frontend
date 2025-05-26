import { TranslateProps, Translation } from '@/types/translations';
import axios from 'axios';

export async function translate(props: TranslateProps): Promise<Translation> {
  const res = await axios.post(`/api/translate`, props);
  return res.data.translation;
}

import { BookVersion } from '@/types/book-version';
import { TranslateProps, Translation } from '@/types/translations';
import axios from 'axios';

export async function translate(props: TranslateProps): Promise<Translation> {
  const route =
    props.bookVersion === BookVersion.DEMO
      ? '/api/translate-demo'
      : '/api/translate';

  const res = await axios.post(route, props);
  return res.data.translation;
}

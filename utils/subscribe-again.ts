import axios from 'axios';

export async function subscribeAgain(bookURI: string): Promise<void> {
  await axios.post(`/api/books/${bookURI}/subscribe-again`, {
    bookURI,
  });
}

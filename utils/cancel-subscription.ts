import axios from 'axios';

export async function cancelSubscription(bookURI: string): Promise<void> {
  await axios.post(`/api/books/${bookURI}/cancel-subscription`);
}

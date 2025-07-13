import axios from 'axios';

export async function resumeSubscription(bookURI: string): Promise<void> {
  await axios.post(`/api/books/${bookURI}/resume-subscription`);
}

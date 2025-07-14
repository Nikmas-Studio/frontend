import axios from 'axios';

export async function getLastVisitedPageRoute(
  bookURI: string,
): Promise<string | null> {
  const res = await axios.get(`/api/books/${bookURI}/last-visited-page`);
  return res.data.lastVisitedPage;
}

import axios from 'axios';

export async function assignLastVisitedPageRoute(
  bookURI: string,
  lastVisitedPage: string,
): Promise<void> {
  await axios.post(
    `/api/books/${bookURI}/assign-last-visited-page/${lastVisitedPage}`,
  );
}

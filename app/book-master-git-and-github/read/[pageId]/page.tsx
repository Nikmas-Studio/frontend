'use client';

import BookRead from '@/components/modules/master-git-and-github-book/BookRead';
import { MASTER_GIT_AND_GITHUB_BOOK_URI } from '@/constants/general';
import { BookState } from '@/types/book-state';
import { buildBookAccessRoute } from '@/utils/build-book-access-route';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ReactElement, useEffect, useState } from 'react';

interface BookReadProps {
  params: {
    pageId: string;
  };
}

function MasterGitAndGithubBookReadWithPageNumber({
  params: { pageId },
}: BookReadProps): ReactElement {
  const [bookState, setBookState] = useState<BookState>(BookState.LOADING);
  const router = useRouter();

  useEffect(() => {
    async function defineBookState(): Promise<void> {
      const res = await axios.get(
        buildBookAccessRoute(MASTER_GIT_AND_GITHUB_BOOK_URI),
      );
      if (res.data.accessGranted) {
        setBookState(BookState.BOUGHT);
      } else {
        setBookState(BookState.UNBOUGHT);
      }
    }

    defineBookState();
  }, []);

  if (bookState === BookState.LOADING) {
    return (
      <div
        className='flex  
                      h-screen  w-screen  justify-center  [background:linear-gradient(135deg,#ff5013,#271ad3)]'
      ></div>
    );
  }

  if (bookState === BookState.UNBOUGHT) {
    console.log('router push');
    router.push(`/${MASTER_GIT_AND_GITHUB_BOOK_URI}`);
    return (
      <div
        className='flex  
                    h-screen  w-screen  justify-center  [background:linear-gradient(135deg,#ff5013,#271ad3)]'
      ></div>
    );
  }

  return <BookRead initialPageId={pageId} />;
}

export default MasterGitAndGithubBookReadWithPageNumber;

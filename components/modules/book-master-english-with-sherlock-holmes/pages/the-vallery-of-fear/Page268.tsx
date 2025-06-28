import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page268({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;VALLEY&nbsp;OF&nbsp;FEAR'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “So I joined your infernal lodge, and I took my share in your
              councils. Maybe they will say that I was as bad as you. They can
              say what they like, so long as I get you. But what is the truth?
              The night I joined you beat up old man Stanger. I could not warn
              him, for there was no time; but I held your hand, Baldwin, when
              you would have killed him. If ever I have suggested things, so as
              to keep my place among you, they were things which I knew I could
              prevent. I could not save Dunn and Menzies, for I did not know
              enough; but I will see that their murderers are hanged. I gave
              Chester Wilcox warning, so that when I blew his house in he and
              his folk were in hiding. There was many a crime that I could not
              stop; but if you look back and think how often your man came home
              the other road, or was down in town when you went for him, or
              stayed indoors when you thought he would come out, you'll see my
              work.”
            </TextNode>

            <TextNode>
              “You blasted traitor!” hissed McGinty through his closed teeth.
            </TextNode>

            <TextNode>
              “Ay, John McGinty, you may call me that if it eases your smart.
              You and your like have been the enemy of God and man in these
              parts. It took a man to get between you and the poor devils of men
              and women that you held under your grip. There was just one way of
              doing it, and I did it. You call me a traitor; but I guess there's
              many a thousand will call me a deliverer that went down into hell
              to save them. I've had three months of it. I wouldn't have three
              such months again if they let me loose in the treasury at
              Washington for it. I had to stay till I had it all, every man and
              every secret right here in this hand. I'd have waited a little
              longer if it hadn't come to my knowledge that my secret was coming
              out. A letter had come into the town that would have set you wise
              to it all. Then I had to act and act quickly.
            </TextNode>

            <TextNode>
              “I've nothing more to say to you, except that when my time comes
              I'll die the easier when I think of the work I have done in this
              valley. Now, Marvin, I'll keep you no more. Take them in and get
              it over.”
            </TextNode>

            <TextNode>
              There is little more to tell. Scanlan had been given a sealed note
              to be left at the address of Miss Ettie Shafter, a mission which
              he had accepted with a wink and a knowing smile. In the early
              hours of the morning a beautiful woman and a much muffled man
              boarded a special train which had been sent by the railroad
              company, and made a swift, unbroken journey out of the land of
              danger. It was the last time that ever either Ettie or her lover
              set foot in the Valley of Fear. Ten days later they were married
              in Chicago, with old Jacob Shafter as witness of the wedding.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              The trial of the Scowrers was held far from the place where their
              adherents might have terrified the guardians of the law. In vain
              they struggled. In vain the money of the lodge—money squeezed by
              blackmail out of the whole countryside—was spent like water in the
              attempt to save them. That cold, clear, unimpassioned statement
              from one who knew every detail of their lives, their organization,
              and their crimes was unshaken by all the wiles of their defenders.
              At last after so many years they were broken and scattered. The
              cloud was lifted forever from the valley.
            </TextNode>

            <TextNode>
              McGinty met his fate upon the scaffold, cringing and whining when
              the last hour came. Eight of his chief followers shared his fate.
              Fifty-odd had various degrees of imprisonment. The work of Birdy
              Edwards was complete.
            </TextNode>

            <TextNode>
              And yet, as he had guessed, the game was not over yet. There was
              another hand to be played, and yet another and another. Ted
              Baldwin, for one, had escaped the scaffold; so had the Willabys;
              so had several others of the fiercest spirits of the gang. For ten
              years they were out of the world, and then came a day when they
              were free once more—a day which Edwards, who knew his men, was
              very sure would be an end of his life of peace. They had sworn an
              oath on all that they thought holy to have his blood as a
              vengeance for their comrades. And well they strove to keep their
              vow!
            </TextNode>

            <TextNode>
              From Chicago he was chased, after two attempts so near success
              that it was sure that the third would get him. From Chicago he
              went under a changed name to California, and it was there that the
              light went for a time out of his life when Ettie Edwards died.
              Once again he was nearly killed, and once again under the name of
              Douglas he worked in a lonely canyon, where with an English
              partner named Barker he amassed a fortune. At last there came a
              warning to him that the bloodhounds were on his track once more,
              and he cleared—only just in time—for England. And thence came the
              John Douglas who for a second time married a worthy mate, and
              lived for five years as a Sussex county gentleman, a life which
              ended with the strange happenings of which we have heard.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page268;

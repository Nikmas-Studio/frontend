import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page111({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;NOBLE&nbsp;BACHELOR'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Perhaps, Mrs. Moulton, you would like my friend and me to leave
              the room while you explain this matter?”
            </TextNode>

            <TextNode>
              “If I may give an opinion,” remarked the strange gentleman, “we've
              had just a little too much secrecy over this business already. For
              my part, I should like all Europe and America to hear the rights
              of it.” He was a small, wiry, sunburnt man, clean-shaven, with a
              sharp face and alert manner.
            </TextNode>

            <TextNode>
              “Then I'll tell our story right away,” said the lady. “Frank here
              and I met in '84, in McQuire's camp, near the Rockies, where pa
              was working a claim. We were engaged to each other, Frank and I;
              but then one day father struck a rich pocket and made a pile,
              while poor Frank here had a claim that petered out and came to
              nothing. The richer pa grew the poorer was Frank; so at last pa
              wouldn't hear of our engagement lasting any longer, and he took me
              away to 'Frisco. Frank wouldn't throw up his hand, though; so he
              followed me there, and he saw me without pa knowing anything about
              it. It would only have made him mad to know, so we just fixed it
              all up for ourselves. Frank said that he would go and make his
              pile, too, and never come back to claim me until he had as much as
              pa. So then I promised to wait for him to the end of time and
              pledged myself not to marry anyone else while he lived. ‘Why
              shouldn't we be married right away, then,’ said he, ‘and then I
              will feel sure of you; and I won't claim to be your husband until
              I come back?’ Well, we talked it over, and he had fixed it all up
              so nicely, with a clergyman all ready in waiting, that we just did
              it right there; and then Frank went off to seek his fortune, and I
              went back to pa.
            </TextNode>

            <TextNode>
              “The next I heard of Frank was that he was in Montana, and then he
              went prospecting in Arizona, and then I heard of him from New
              Mexico. After that came a long newspaper story about how a miners'
              camp had been attacked by Apache Indians, and there was my Frank's
              name among the killed. I fainted dead away, and I was very sick
              for months after. Pa thought I had a decline and took me to half
              the doctors in 'Frisco. Not a word of news came for a year and
              more, so that I never doubted that Frank was really dead. Then
              Lord St. Simon came to 'Frisco, and we came to London, and a
              marriage was arranged, and pa was very pleased, but I felt all the
              time that no man on this earth would ever take the place in my
              heart that had been given to my poor Frank.
            </TextNode>

            <TextNode>
              “Still, if I had married Lord St. Simon, of course I'd have done
              my duty by him. We can't command our love, but we can our actions.
              I went to the altar with him with the intention to make him just
              as good a wife as it was in me to be. But you may imagine what I
              felt when, just as I came to the altar rails, I glanced back and
              saw Frank standing and looking at me out of the first pew. I
              thought it was his ghost at first; but when I looked again there
              he was still, with a kind of question in his eyes, as if to ask me
              whether I were glad or sorry to see him. I wonder I didn't drop. I
              know that everything was turning round, and the words of the
              clergyman were just like the buzz of a bee in my ear. I didn't
              know what to do. Should I stop the service and make a scene in the
              church? I glanced at him again, and he seemed to know what I was
              thinking, for he raised his finger to his lips to tell me to be
              still. Then I saw him scribble on a piece of paper, and I knew
              that he was writing me a note. As I passed his pew on the way out
              I dropped my bouquet over to him, and he slipped the note into my
              hand when he returned me the flowers. It was only a line asking me
              to join him when he made the sign to me to do so. Of course I
              never doubted for a moment that my first duty was now to him, and
              I determined to do just whatever he might direct.
            </TextNode>

            <TextNode>
              “When I got back I told my maid, who had known him in California,
              and had always been his friend. I ordered her to say nothing, but
              to get a few things packed and my ulster ready. I know I ought to
              have spoken to Lord St. Simon, but it was dreadful hard before his
              mother and all those great people. I just made up my mind to run
              away and explain afterwards. I hadn't been at the table ten
              minutes before I saw Frank out of the window at the other side of
              the road. He beckoned to me and then began walking into the Park.
              I slipped out, put on my things, and followed him. Some woman came
              talking something or other about Lord St. Simon to me—seemed to me
              from the little I heard as if he had a little secret of his own
              before marriage also—but I managed to get away from her and soon
              overtook Frank. We got into a cab together, and away we drove to
              some lodgings he had taken in Gordon Square, and that was my true
              wedding after all those years of waiting. Frank had been a
              prisoner among the Apaches, had escaped, came on to 'Frisco, found
              that I had given him up for dead and had gone to England, followed
              me there, and had come upon me at last on the very morning of my
              second wedding.”
            </TextNode>

            <TextNode>
              “I saw it in a paper,” explained the American. “It gave the name
              and the church but not where the lady lived.”
            </TextNode>

            <TextNode>
              “Then we had a talk as to what we should do, and Frank was all for
              openness, but I was so ashamed of it all that I felt as if I
              should like to vanish away and never see any of them again—just
              sending a line to pa, perhaps, to show him that I was alive. It
              was awful to me to think of all those lords and ladies sitting
              round that breakfast-table and waiting for me to come back. So
              Frank took my wedding-clothes and things and made a bundle of
              them, so that I should not be traced, and dropped them away
              somewhere where no one could find them. It is likely that we
              should have gone on to Paris to-morrow, only that this good
              gentleman, Mr. Holmes, came round to us this evening, though how
              he found us is more than I can think, and he showed us very
              clearly and kindly that I was wrong and that Frank was right, and
              that we should be putting ourselves in the wrong if we were so
              secret. Then he offered to give us a chance of talking to Lord St.
              Simon alone, and so we came right away round to his rooms at once.
              Now, Robert, you have heard it all, and I am very sorry if I have
              given you pain, and I hope that you do not think very meanly of
              me.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              Lord St. Simon had by no means relaxed his rigid attitude, but had
              listened with a frowning brow and a compressed lip to this long
              narrative.
            </TextNode>

            <TextNode>
              “Excuse me,” he said, “but it is not my custom to discuss my most
              intimate personal affairs in this public manner.”
            </TextNode>

            <TextNode>
              “Then you won't forgive me? You won't shake hands before I go?”
            </TextNode>

            <TextNode>
              “Oh, certainly, if it would give you any pleasure.” He put out his
              hand and coldly grasped that which she extended to him.
            </TextNode>

            <TextNode>
              “I had hoped,” suggested Holmes, “that you would have joined us in
              a friendly supper.”
            </TextNode>

            <TextNode>
              “I think that there you ask a little too much,” responded his
              Lordship. “I may be forced to acquiesce in these recent
              developments, but I can hardly be expected to make merry over
              them. I think that with your permission I will now wish you all a
              very good-night.” He included us all in a sweeping bow and stalked
              out of the room.
            </TextNode>

            <TextNode>
              “Then I trust that you at least will honour me with your company,”
              said Sherlock Holmes. “It is always a joy to meet an American, Mr.
              Moulton, for I am one of those who believe that the folly of a
              monarch and the blundering of a minister in far-gone years will
              not prevent our children from being some day citizens of the same
              world-wide country under a flag which shall be a quartering of the
              Union Jack with the Stars and Stripes.”
            </TextNode>

            <TextNode>
              “The case has been an interesting one,” remarked Holmes when our
              visitors had left us, “because it serves to show very clearly how
              simple the explanation may be of an affair which at first sight
              seems to be almost inexplicable. Nothing could be more natural
              than the sequence of events as narrated by this lady, and nothing
              stranger than the result when viewed, for instance, by Mr.
              Lestrade of Scotland Yard.”
            </TextNode>

            <TextNode>“You were not yourself at fault at all, then?”</TextNode>

            <TextNode>
              “From the first, two facts were very obvious to me, the one that
              the lady had been quite willing to undergo the wedding ceremony,
              the other that she had repented of it within a few minutes of
              returning home. Obviously something had occurred during the
              morning, then, to cause her to change her mind. What could that
              something be? She could not have spoken to anyone when she was
              out, for she had been in the company of the bridegroom. Had she
              seen someone, then? If she had, it must be someone from America
              because she had spent so short a time in this country that she
              could hardly have allowed anyone to acquire so deep an influence
              over her that the mere sight of him would induce her to change her
              plans so completely. You see we have already arrived, by a process
              of exclusion, at the idea that she might have seen an American.
              Then who could this American be, and why should he possess so much
              influence over her? It might be a lover; it might be a husband.
              Her young womanhood had, I knew, been spent in rough scenes and
              under strange conditions. So far I had got before I ever heard
              Lord St. Simon's narrative. When he told us of a man in a pew, of
              the change in the bride's manner, of so transparent a device for
              obtaining a note as the dropping of a bouquet, of her resort to
              her confidential maid, and of her very significant allusion to
              claim-jumping—which in miners' parlance means taking possession of
              that which another person has a prior claim to—the whole situation
              became absolutely clear. She had gone off with a man, and the man
              was either a lover or was a previous husband—the chances being in
              favour of the latter.”
            </TextNode>

            <TextNode>“And how in the world did you find them?”</TextNode>

            <TextNode>
              “It might have been difficult, but friend Lestrade held
              information in his hands the value of which he did not himself
              know. The initials were, of course, of the highest importance, but
              more valuable still was it to know that within a week he had
              settled his bill at one of the most select London hotels.”
            </TextNode>

            <TextNode>“How did you deduce the select?”</TextNode>

            <TextNode>
              “By the select prices. Eight shillings for a bed and eightpence
              for a glass of sherry pointed to one of the most expensive hotels.
              There are not many in London which charge at that rate. In the
              second one which I visited in Northumberland Avenue, I learned by
              an inspection of the book that Francis H. Moulton, an American
              gentleman, had left only the day before, and on looking over the
              entries against him, I came upon the very items which I had seen
              in the duplicate bill. His letters were to be forwarded to 226
              Gordon Square; so thither I travelled, and being fortunate enough
              to find the loving couple at home, I ventured to give them some
              paternal advice and to point out to them that it would be better
              in every way that they should make their position a little clearer
              both to the general public and to Lord St. Simon in particular. I
              invited them to meet him here, and, as you see, I made him keep
              the appointment.”
            </TextNode>

            <TextNode>
              “But with no very good result,” I remarked. “His conduct was
              certainly not very gracious.”
            </TextNode>

            <TextNode>
              “Ah, Watson,” said Holmes, smiling, “perhaps you would not be very
              gracious either, if, after all the trouble of wooing and wedding,
              you found yourself deprived in an instant of wife and of fortune.
              I think that we may judge Lord St. Simon very mercifully and thank
              our stars that we are never likely to find ourselves in the same
              position. Draw your chair up and hand me my violin, for the only
              problem we have still to solve is how to while away these bleak
              autumnal evenings.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page111;

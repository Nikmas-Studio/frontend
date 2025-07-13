import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
import Indent from '@/components/elements/book-master-english-with-sherlock-holmes/Indent';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page221({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;HOUND OF&nbsp;THE&nbsp;BASKERVILLES'
      />
      <BookMainContainer biggerTopPadding>
        <H4>
          Chapter V.
          <br />
          Three Broken Threads
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              Sherlock Holmes had, in a very remarkable degree, the power of
              detaching his mind at will. For two hours the strange business in
              which we had been involved appeared to be forgotten, and he was
              entirely absorbed in the pictures of the modern Belgian masters.
              He would talk of nothing but art, of which he had the crudest
              ideas, from our leaving the gallery until we found ourselves at
              the Northumberland Hotel.
            </TextNode>

            <TextNode>
              “Sir Henry Baskerville is upstairs expecting you,” said the clerk.
              “He asked me to show you up at once when you came.”
            </TextNode>

            <TextNode>
              “Have you any objection to my looking at your register?” said
              Holmes.
            </TextNode>

            <TextNode>“Not in the least.”</TextNode>

            <TextNode>
              The book showed that two names had been added after that of
              Baskerville. One was Theophilus Johnson and family, of Newcastle;
              the other Mrs. Oldmore and maid, of High Lodge, Alton.
            </TextNode>

            <TextNode>
              “Surely that must be the same Johnson whom I used to know,” said
              Holmes to the porter. “A lawyer, is he not, gray-headed, and walks
              with a limp?”
            </TextNode>

            <TextNode>
              “No, sir; this is Mr. Johnson, the coal-owner, a very active
              gentleman, not older than yourself.”
            </TextNode>

            <TextNode>“Surely you are mistaken about his trade?”</TextNode>

            <TextNode>
              “No, sir! he has used this hotel for many years, and he is very
              well known to us.”
            </TextNode>

            <TextNode>
              “Ah, that settles it. Mrs. Oldmore, too; I seem to remember the
              name. Excuse my curiosity, but often in calling upon one friend
              one finds another.”
            </TextNode>

            <TextNode>
              “She is an invalid lady, sir. Her husband was once mayor of
              Gloucester. She always comes to us when she is in town.”
            </TextNode>

            <TextNode>
              “Thank you; I am afraid I cannot claim her acquaintance. We have
              established a most important fact by these questions, Watson,” he
              continued in a low voice as we went upstairs together. “We know
              now that the people who are so interested in our friend have not
              settled down in his own hotel. That means that while they are, as
              we have seen, very anxious to watch him, they are equally anxious
              that he should not see them. Now, this is a most suggestive fact.”
            </TextNode>

            <TextNode>“What does it suggest?”</TextNode>

            <TextNode>
              “It suggests—halloa, my dear fellow, what on earth is the matter?”
            </TextNode>

            <TextNode>
              As we came round the top of the stairs we had run up against Sir
              Henry Baskerville himself. His face was flushed with anger, and he
              held an old and dusty boot in one of his hands. So furious was he
              that he was hardly articulate, and when he did speak it was in a
              much broader and more Western dialect than any which we had heard
              from him in the morning.
            </TextNode>

            <TextNode>
              “Seems to me they are playing me for a sucker in this hotel,” he
              cried. “They'll find they've started in to monkey with the wrong
              man unless they are careful. By thunder, if that chap can't find
              my missing boot there will be trouble. I can take a joke with the
              best, Mr. Holmes, but they've got a bit over the mark this time.”
            </TextNode>

            <TextNode>“Still looking for your boot?”</TextNode>

            <TextNode>“Yes, sir, and mean to find it.”</TextNode>

            <TextNode>
              “But, surely, you said that it was a new brown boot?”
            </TextNode>

            <TextNode>
              “So it was, sir. And now it's an old black one.”
            </TextNode>

            <TextNode>“What! you don't mean to say—?”</TextNode>

            <TextNode>
              “That's just what I do mean to say. I only had three pairs in the
              world—the new brown, the old black, and the patent leathers, which
              I am wearing. Last night they took one of my brown ones, and
              to-day they have sneaked one of the black. Well, have you got it?
              Speak out, man, and don't stand staring!”
            </TextNode>

            <TextNode>
              An agitated German waiter had appeared upon the scene.
            </TextNode>

            <TextNode>
              “No, sir; I have made inquiry all over the hotel, but I can hear
              no word of it.”
            </TextNode>

            <TextNode>
              “Well, either that boot comes back before sundown or I'll see the
              manager and tell him that I go right straight out of this hotel.”
            </TextNode>

            <TextNode>
              “It shall be found, sir—I promise you that if you will have a
              little patience it will be found.”
            </TextNode>

            <TextNode>
              “Mind it is, for it's the last thing of mine that I'll lose in
              this den of thieves. Well, well, Mr. Holmes, you'll excuse my
              troubling you about such a trifle—”
            </TextNode>

            <TextNode>“I think it's well worth troubling about.”</TextNode>

            <TextNode>“Why, you look very serious over it.”</TextNode>

            <TextNode>“How do you explain it?”</TextNode>

            <TextNode>
              “I just don't attempt to explain it. It seems the very maddest,
              queerest thing that ever happened to me.”
            </TextNode>

            <TextNode>
              “The queerest perhaps—” said Holmes, thoughtfully.
            </TextNode>

            <TextNode>“What do you make of it yourself?”</TextNode>

            <TextNode>
              “Well, I don't profess to understand it yet. This case of yours is
              very complex, Sir Henry. When taken in conjunction with your
              uncle's death I am not sure that of all the five hundred cases of
              capital importance which I have handled there is one which cuts so
              deep. But we hold several threads in our hands, and the odds are
              that one or other of them guides us to the truth. We may waste
              time in following the wrong one, but sooner or later we must come
              upon the right.”
            </TextNode>

            <TextNode>
              We had a pleasant luncheon in which little was said of the
              business which had brought us together. It was in the private
              sitting-room to which we afterwards repaired that Holmes asked
              Baskerville what were his intentions.
            </TextNode>

            <TextNode>“To go to Baskerville Hall.”</TextNode>

            <TextNode>“And when?”</TextNode>

            <TextNode>“At the end of the week.”</TextNode>

            <TextNode>
              “On the whole,” said Holmes, “I think that your decision is a wise
              one. I have ample evidence that you are being dogged in London,
              and amid the millions of this great city it is difficult to
              discover who these people are or what their object can be. If
              their intentions are evil they might do you a mischief, and we
              should be powerless to prevent it. You did not know, Dr. Mortimer,
              that you were followed this morning from my house?”
            </TextNode>

            <TextNode>Dr. Mortimer started violently.</TextNode>

            <TextNode>“Followed! By whom?”</TextNode>

            <TextNode>
              “That, unfortunately, is what I cannot tell you. Have you among
              your neighbours or acquaintances on Dartmoor any man with a black,
              full beard?”
            </TextNode>

            <TextNode>
              “No—or, let me see—why, yes. Barrymore, Sir Charles's butler, is a
              man with a full, black beard.”
            </TextNode>

            <TextNode>“Ha! Where is Barrymore?”</TextNode>

            <TextNode>“He is in charge of the Hall.”</TextNode>

            <TextNode>
              “We had best ascertain if he is really there, or if by any
              possibility he might be in London.”
            </TextNode>

            <TextNode>“How can you do that?”</TextNode>

            <TextNode>
              “Give me a telegraph form. ‘Is all ready for Sir Henry?’ That will
              do. Address to Mr. Barrymore, Baskerville Hall. What is the
              nearest telegraph-office? Grimpen. Very good, we will send a
              second wire to the postmaster, Grimpen: ‘Telegram to Mr. Barrymore
              to be delivered into his own hand. If absent, please return wire
              to Sir Henry Baskerville, Northumberland Hotel.’ That should let
              us know before evening whether Barrymore is at his post in
              Devonshire or not.”
            </TextNode>

            <TextNode>
              “That's so,” said Baskerville. “By the way, Dr. Mortimer, who is
              this Barrymore, anyhow?”
            </TextNode>

            <TextNode>
              “He is the son of the old caretaker, who is dead. They have looked
              after the Hall for four generations now. So far as I know, he and
              his wife are as respectable a couple as any in the county.”
            </TextNode>

            <TextNode>
              “At the same time,” said Baskerville, “it's clear enough that so
              long as there are none of the family at the Hall these people have
              a mighty fine home and nothing to do.”
            </TextNode>

            <TextNode>“That is true.”</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Did Barrymore profit at all by Sir Charles's will?” asked Holmes.
            </TextNode>

            <TextNode>“He and his wife had five hundred pounds each.”</TextNode>

            <TextNode>
              “Ha! Did they know that they would receive this?”
            </TextNode>

            <TextNode>
              “Yes; Sir Charles was very fond of talking about the provisions of
              his will.”
            </TextNode>

            <TextNode>“That is very interesting.”</TextNode>
            <TextNode>
              “I hope,” said Dr. Mortimer, “that you do not look with suspicious
              eyes upon everyone who received a legacy from Sir Charles, for I
              also had a thousand pounds left to me.”
            </TextNode>

            <TextNode>“Indeed! And anyone else?”</TextNode>

            <TextNode>
              “There were many insignificant sums to individuals, and a large
              number of public charities. The residue all went to Sir Henry.”
            </TextNode>

            <TextNode>“And how much was the residue?”</TextNode>

            <TextNode>“Seven hundred and forty thousand pounds.”</TextNode>

            <TextNode>
              Holmes raised his eyebrows in surprise. “I had no idea that so
              gigantic a sum was involved,” said he.
            </TextNode>

            <TextNode>
              “Sir Charles had the reputation of being rich, but we did not know
              how very rich he was until we came to examine his securities. The
              total value of the estate was close on to a million.”
            </TextNode>
            <TextNode>
              “Dear me! It is a stake for which a man might well play a
              desperate game. And one more question, Dr. Mortimer. Supposing
              that anything happened to our young friend here—you will forgive
              the unpleasant hypothesis!—who would inherit the estate?”
            </TextNode>

            <TextNode>
              “Since Rodger Baskerville, Sir Charles's younger brother died
              unmarried, the estate would descend to the Desmonds, who are
              distant cousins. James Desmond is an elderly clergyman in
              Westmoreland.”
            </TextNode>

            <TextNode>
              “Thank you. These details are all of great interest. Have you met
              Mr. James Desmond?”
            </TextNode>

            <TextNode>
              “Yes; he once came down to visit Sir Charles. He is a man of
              venerable appearance and of saintly life. I remember that he
              refused to accept any settlement from Sir Charles, though he
              pressed it upon him.”
            </TextNode>

            <TextNode>
              “And this man of simple tastes would be the heir to Sir Charles's
              thousands.”
            </TextNode>

            <TextNode>
              “He would be the heir to the estate because that is entailed. He
              would also be the heir to the money unless it were willed
              otherwise by the present owner, who can, of course, do what he
              likes with it.”
            </TextNode>

            <TextNode>“And have you made your will, Sir Henry?”</TextNode>

            <TextNode>
              “No, Mr. Holmes, I have not. I've had no time, for it was only
              yesterday that I learned how matters stood. But in any case I feel
              that the money should go with the title and estate. That was my
              poor uncle's idea. How is the owner going to restore the glories
              of the Baskervilles if he has not money enough to keep up the
              property? House, land, and dollars must go together.”
            </TextNode>

            <TextNode>
              “Quite so. Well, Sir Henry, I am of one mind with you as to the
              advisability of your going down to Devonshire without delay. There
              is only one provision which I must make. You certainly must not go
              alone.”
            </TextNode>

            <TextNode>“Dr. Mortimer returns with me.”</TextNode>

            <TextNode>
              “But Dr. Mortimer has his practice to attend to, and his house is
              miles away from yours. With all the good will in the world he may
              be unable to help you. No, Sir Henry, you must take with you
              someone, a trusty man, who will be always by your side.”
            </TextNode>

            <TextNode>
              “Is it possible that you could come yourself, Mr. Holmes?”
            </TextNode>

            <TextNode>
              “If matters came to a crisis I should endeavour to be present in
              person; but you can understand that, with my extensive consulting
              practice and with the constant appeals which reach me from many
              quarters, it is impossible for me to be absent from London for an
              indefinite time. At the present instant one of the most revered
              names in England is being besmirched by a blackmailer, and only I
              can stop a disastrous scandal. You will see how impossible it is
              for me to go to Dartmoor.”
            </TextNode>

            <TextNode>“Whom would you recommend, then?”</TextNode>

            <TextNode>Holmes laid his hand upon my arm.</TextNode>

            <TextNode>
              “If my friend would undertake it there is no man who is better
              worth having at your side when you are in a tight place. No one
              can say so more confidently than I.”
            </TextNode>

            <TextNode>
              The proposition took me completely by surprise, but before I had
              time to answer, Baskerville seized me by the hand and wrung it
              heartily.
            </TextNode>

            <TextNode>
              “Well, now, that is real kind of you, Dr. Watson,” said he. “You
              see how it is with me, and you know just as much about the matter
              as I do. If you will come down to Baskerville Hall and see me
              through I'll never forget it.”
            </TextNode>

            <TextNode>
              The promise of adventure had always a fascination for me, and I
              was complimented by the words of Holmes and by the eagerness with
              which the baronet hailed me as a companion.
            </TextNode>

            <TextNode>
              “I will come, with pleasure,” said I. “I do not know how I could
              employ my time better.”
            </TextNode>

            <TextNode>
              “And you will report very carefully to me,” said Holmes. “When a
              crisis comes, as it will do, I will direct how you shall act. I
              suppose that by Saturday all might be ready?”
            </TextNode>

            <TextNode>“Would that suit Dr. Watson?”</TextNode>

            <TextNode>“Perfectly.”</TextNode>

            <TextNode>
              “Then on Saturday, unless you hear to the contrary, we shall meet
              at the 10.30 train from Paddington.”
            </TextNode>

            <TextNode>
              We had risen to depart when Baskerville gave a cry, of triumph,
              and diving into one of the corners of the room he drew a brown
              boot from under a cabinet.
            </TextNode>

            <TextNode>“My missing boot!” he cried.</TextNode>

            <TextNode>
              “May all our difficulties vanish as easily!” said Sherlock Holmes.
            </TextNode>

            <TextNode>
              “But it is a very singular thing,” Dr. Mortimer remarked. “I
              searched this room carefully before lunch.”
            </TextNode>

            <TextNode>
              “And so did I,” said Baskerville. “Every inch of it.”
            </TextNode>

            <TextNode>“There was certainly no boot in it then.”</TextNode>

            <TextNode>
              “In that case the waiter must have placed it there while we were
              lunching.”
            </TextNode>

            <TextNode>
              The German was sent for but professed to know nothing of the
              matter, nor could any inquiry clear it up. Another item had been
              added to that constant and apparently purposeless series of small
              mysteries which had succeeded each other so rapidly. Setting aside
              the whole grim story of Sir Charles's death, we had a line of
              inexplicable incidents all within the limits of two days, which
              included the receipt of the printed letter, the black-bearded spy
              in the hansom, the loss of the new brown boot, the loss of the old
              black boot, and now the return of the new brown boot. Holmes sat
              in silence in the cab as we drove back to Baker Street, and I knew
              from his drawn brows and keen face that his mind, like my own, was
              busy in endeavouring to frame some scheme into which all these
              strange and apparently disconnected episodes could be fitted. All
              afternoon and late into the evening he sat lost in tobacco and
              thought.
            </TextNode>

            <TextNode>
              Just before dinner two telegrams were handed in. The first ran:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                Have just heard that Barrymore is at the Hall.
              </TextNode>

              <TextNode className='italic' noIndent>
                — Baskerville.
              </TextNode>
            </Indent>

            <TextNode noIndent>The second:</TextNode>

            <Indent>
              <TextNode noIndent>
                Visited twenty-three hotels as directed, but sorry to report
                unable to trace cut sheet of Times.
              </TextNode>

              <TextNode className='italic' noIndent>
                — Cartwright.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “There go two of my threads, Watson. There is nothing more
              stimulating than a case where everything goes against you. We must
              cast round for another scent.”
            </TextNode>

            <TextNode>“We have still the cabman who drove the spy.”</TextNode>

            <TextNode>
              “Exactly. I have wired to get his name and address from the
              Official Registry. I should not be surprised if this were an
              answer to my question.”
            </TextNode>

            <TextNode>
              The ring at the bell proved to be something even more satisfactory
              than an answer, however, for the door opened and a rough-looking
              fellow entered who was evidently the man himself.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page221;

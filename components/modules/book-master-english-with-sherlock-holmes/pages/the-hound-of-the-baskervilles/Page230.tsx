import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page230({
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
          Chapter XI.
          <br />
          The Man on the Tor
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              The extract from my private diary which forms the last chapter has
              brought my narrative up to the 18th of October, a time when these
              strange events began to move swiftly towards their terrible
              conclusion. The incidents of the next few days are indelibly
              graven upon my recollection, and I can tell them without reference
              to the notes made at the time. I start then from the day which
              succeeded that upon which I had established two facts of great
              importance, the one that Mrs. Laura Lyons of Coombe Tracey had
              written to Sir Charles Baskerville and made an appointment with
              him at the very place and hour that he met his death, the other
              that the lurking man upon the moor was to be found among the stone
              huts upon the hill-side. With these two facts in my possession I
              felt that either my intelligence or my courage must be deficient
              if I could not throw some further light upon these dark places.
            </TextNode>

            <TextNode>
              I had no opportunity to tell the baronet what I had learned about
              Mrs. Lyons upon the evening before, for Dr. Mortimer remained with
              him at cards until it was very late. At breakfast, however, I
              informed him about my discovery, and asked him whether he would
              care to accompany me to Coombe Tracey. At first he was very eager
              to come, but on second thoughts it seemed to both of us that if I
              went alone the results might be better. The more formal we made
              the visit the less information we might obtain. I left Sir Henry
              behind, therefore, not without some prickings of conscience, and
              drove off upon my new quest.
            </TextNode>

            <TextNode>
              When I reached Coombe Tracey I told Perkins to put up the horses,
              and I made inquiries for the lady whom I had come to interrogate.
              I had no difficulty in finding her rooms, which were central and
              well appointed. A maid showed me in without ceremony, and as I
              entered the sitting-room a lady, who was sitting before a
              Remington typewriter, sprang up with a pleasant smile of welcome.
              Her face fell, however, when she saw that I was a stranger, and
              she sat down again and asked me the object of my visit.
            </TextNode>

            <TextNode>
              The first impression left by Mrs. Lyons was one of extreme beauty.
              Her eyes and hair were of the same rich hazel colour, and her
              cheeks, though considerably freckled, were flushed with the
              exquisite bloom of the brunette, the dainty pink which lurks at
              the heart of the sulphur rose. Admiration was, I repeat, the first
              impression. But the second was criticism. There was something
              subtly wrong with the face, some coarseness of expression, some
              hardness, perhaps, of eye, some looseness of lip which marred its
              perfect beauty. But these, of course, are after-thoughts. At the
              moment I was simply conscious that I was in the presence of a very
              handsome woman, and that she was asking me the reasons for my
              visit. I had not quite understood until that instant how delicate
              my mission was.
            </TextNode>

            <TextNode>
              “I have the pleasure,” said I, “of knowing your father.” It was a
              clumsy introduction, and the lady made me feel it.
            </TextNode>

            <TextNode>
              “There is nothing in common between my father and me,” she said.
              “I owe him nothing, and his friends are not mine. If it were not
              for the late Sir Charles Baskerville and some other kind hearts I
              might have starved for all that my father cared.”
            </TextNode>

            <TextNode>
              “It was about the late Sir Charles Baskerville that I have come
              here to see you.”
            </TextNode>

            <TextNode>The freckles started out on the lady's face.</TextNode>

            <TextNode>
              “What can I tell you about him?” she asked, and her fingers played
              nervously over the stops of her typewriter.
            </TextNode>

            <TextNode>“You knew him, did you not?”</TextNode>

            <TextNode>
              “I have already said that I owe a great deal to his kindness. If I
              am able to support myself it is largely due to the interest which
              he took in my unhappy situation.”
            </TextNode>

            <TextNode>“Did you correspond with him?”</TextNode>

            <TextNode>
              The lady looked quickly up with an angry gleam in her hazel eyes.
            </TextNode>

            <TextNode>
              “What is the object of these questions?” she asked sharply.
            </TextNode>

            <TextNode>
              “The object is to avoid a public scandal. It is better that I
              should ask them here than that the matter should pass outside our
              control.”
            </TextNode>

            <TextNode>
              She was silent and her face was still very pale. At last she
              looked up with something reckless and defiant in her manner.
            </TextNode>

            <TextNode>
              “Well, I'll answer,” she said. “What are your questions?”
            </TextNode>

            <TextNode>“Did you correspond with Sir Charles?”</TextNode>

            <TextNode>
              “I certainly wrote to him once or twice to acknowledge his
              delicacy and his generosity.”
            </TextNode>

            <TextNode>“Have you the dates of those letters?”</TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>“Have you ever met him?”</TextNode>

            <TextNode>
              “Yes, once or twice, when he came into Coombe Tracey. He was a
              very retiring man, and he preferred to do good by stealth.”
            </TextNode>

            <TextNode>
              “But if you saw him so seldom and wrote so seldom, how did he know
              enough about your affairs to be able to help you, as you say that
              he has done?”
            </TextNode>

            <TextNode>
              She met my difficulty with the utmost readiness.
            </TextNode>

            <TextNode>
              “There were several gentlemen who knew my sad history and united
              to help me. One was Mr. Stapleton, a neighbour and intimate friend
              of Sir Charles's. He was exceedingly kind, and it was through him
              that Sir Charles learned about my affairs.”
            </TextNode>

            <TextNode>
              I knew already that Sir Charles Baskerville had made Stapleton his
              almoner upon several occasions, so the lady's statement bore the
              impress of truth upon it.
            </TextNode>

            <TextNode>
              “Did you ever write to Sir Charles asking him to meet you?” I
              continued.
            </TextNode>

            <TextNode>Mrs. Lyons flushed with anger again.</TextNode>

            <TextNode>
              “Really, sir, this is a very extraordinary question.”
            </TextNode>

            <TextNode>“I am sorry, madam, but I must repeat it.”</TextNode>

            <TextNode>“Then I answer, certainly not.”</TextNode>

            <TextNode>“Not on the very day of Sir Charles's death?”</TextNode>

            <TextNode>
              The flush had faded in an instant, and a deathly face was before
              me. Her dry lips could not speak the “No” which I saw rather than
              heard.
            </TextNode>

            <TextNode>
              “Surely your memory deceives you,” said I. “I could even quote a
              passage of your letter. It ran ‘Please, please, as you are a
              gentleman, burn this letter, and be at the gate by ten o'clock.‘”
            </TextNode>

            <TextNode>
              I thought that she had fainted, but she recovered herself by a
              supreme effort.
            </TextNode>

            <TextNode>
              “Is there no such thing as a gentleman?” she gasped.
            </TextNode>

            <TextNode>
              “You do Sir Charles an injustice. He did burn the letter. But
              sometimes a letter may be legible even when burned. You
              acknowledge now that you wrote it?”
            </TextNode>

            <TextNode>
              “Yes, I did write it,” she cried, pouring out her soul in a
              torrent of words. “I did write it. Why should I deny it? I have no
              reason to be ashamed of it. I wished him to help me. I believed
              that if I had an interview I could gain his help, so I asked him
              to meet me.”
            </TextNode>
            <TextNode>“But why at such an hour?”</TextNode>

            <TextNode>
              “Because I had only just learned that he was going to London next
              day and might be away for months. There were reasons why I could
              not get there earlier.”
            </TextNode>

            <TextNode>
              “But why a rendezvous in the garden instead of a visit to the
              house?”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Do you think a woman could go alone at that hour to a bachelor's
              house?”
            </TextNode>

            <TextNode>“Well, what happened when you did get there?”</TextNode>

            <TextNode>“I never went.”</TextNode>

            <TextNode>“Mrs. Lyons!”</TextNode>

            <TextNode>
              “No, I swear it to you on all I hold sacred. I never went.
              Something intervened to prevent my going.”
            </TextNode>

            <TextNode>“What was that?”</TextNode>

            <TextNode>“That is a private matter. I cannot tell it.”</TextNode>

            <TextNode>
              “You acknowledge then that you made an appointment with Sir
              Charles at the very hour and place at which he met his death, but
              you deny that you kept the appointment.”
            </TextNode>

            <TextNode>“That is the truth.”</TextNode>

            <TextNode>
              Again and again I cross-questioned her, but I could never get past
              that point.
            </TextNode>

            <TextNode>
              “Mrs. Lyons,” said I, as I rose from this long and inconclusive
              interview, “you are taking a very great responsibility and putting
              yourself in a very false position by not making an absolutely
              clean breast of all that you know. If I have to call in the aid of
              the police you will find how seriously you are compromised. If
              your position is innocent, why did you in the first instance deny
              having written to Sir Charles upon that date?”
            </TextNode>

            <TextNode>
              “Because I feared that some false conclusion might be drawn from
              it and that I might find myself involved in a scandal.”
            </TextNode>

            <TextNode>
              “And why were you so pressing that Sir Charles should destroy your
              letter?”
            </TextNode>

            <TextNode>“If you have read the letter you will know.”</TextNode>

            <TextNode>“I did not say that I had read all the letter.”</TextNode>

            <TextNode>“You quoted some of it.”</TextNode>

            <TextNode>
              “I quoted the postscript. The letter had, as I said, been burned
              and it was not all legible. I ask you once again why it was that
              you were so pressing that Sir Charles should destroy this letter
              which he received on the day of his death.”
            </TextNode>

            <TextNode>“The matter is a very private one.”</TextNode>

            <TextNode>
              “The more reason why you should avoid a public investigation.”
            </TextNode>

            <TextNode>
              “I will tell you, then. If you have heard anything of my unhappy
              history you will know that I made a rash marriage and had reason
              to regret it.”
            </TextNode>

            <TextNode>“I have heard so much.”</TextNode>

            <TextNode>
              “My life has been one incessant persecution from a husband whom I
              abhor. The law is upon his side, and every day I am faced by the
              possibility that he may force me to live with him. At the time
              that I wrote this letter to Sir Charles I had learned that there
              was a prospect of my regaining my freedom if certain expenses
              could be met. It meant everything to me—peace of mind, happiness,
              self-respect—everything. I knew Sir Charles's generosity, and I
              thought that if he heard the story from my own lips he would help
              me.”
            </TextNode>

            <TextNode>“Then how is it that you did not go?”</TextNode>

            <TextNode>
              “Because I received help in the interval from another source.”
            </TextNode>

            <TextNode>
              “Why then, did you not write to Sir Charles and explain this?”
            </TextNode>

            <TextNode>
              “So I should have done had I not seen his death in the paper next
              morning.”
            </TextNode>

            <TextNode>
              The woman's story hung coherently together, and all my questions
              were unable to shake it. I could only check it by finding if she
              had, indeed, instituted divorce proceedings against her husband at
              or about the time of the tragedy.
            </TextNode>

            <TextNode>
              It was unlikely that she would dare to say that she had not been
              to Baskerville Hall if she really had been, for a trap would be
              necessary to take her there, and could not have returned to Coombe
              Tracey until the early hours of the morning. Such an excursion
              could not be kept secret. The probability was, therefore, that she
              was telling the truth, or, at least, a part of the truth. I came
              away baffled and disheartened. Once again I had reached that dead
              wall which seemed to be built across every path by which I tried
              to get at the object of my mission. And yet the more I thought of
              the lady's face and of her manner the more I felt that something
              was being held back from me. Why should she turn so pale? Why
              should she fight against every admission until it was forced from
              her? Why should she have been so reticent at the time of the
              tragedy? Surely the explanation of all this could not be as
              innocent as she would have me believe. For the moment I could
              proceed no farther in that direction, but must turn back to that
              other clue which was to be sought for among the stone huts upon
              the moor.
            </TextNode>

            <TextNode>
              And that was a most vague direction. I realized it as I drove back
              and noted how hill after hill showed traces of the ancient people.
              Barrymore's only indication had been that the stranger lived in
              one of these abandoned huts, and many hundreds of them are
              scattered throughout the length and breadth of the moor. But I had
              my own experience for a guide since it had shown me the man
              himself standing upon the summit of the Black Tor. That then
              should be the centre of my search. From there I should explore
              every hut upon the moor until I lighted upon the right one. If
              this man were inside it I should find out from his own lips, at
              the point of my revolver if necessary, who he was and why he had
              dogged us so long. He might slip away from us in the crowd of
              Regent Street, but it would puzzle him to do so upon the lonely
              moor. On the other hand, if I should find the hut and its tenant
              should not be within it I must remain there, however long the
              vigil, until he returned. Holmes had missed him in London. It
              would indeed be a triumph for me if I could run him to earth,
              where my master had failed.
            </TextNode>

            <TextNode>
              Luck had been against us again and again in this inquiry, but now
              at last it came to my aid. And the messenger of good fortune was
              none other than Mr. Frankland, who was standing, gray-whiskered
              and red-faced, outside the gate of his garden, which opened on to
              the high road along which I travelled.
            </TextNode>

            <TextNode>
              “Good-day, Dr. Watson,” cried he with unwonted good humour, “you
              must really give your horses a rest, and come in to have a glass
              of wine and to congratulate me.”
            </TextNode>

            <TextNode>
              My feelings towards him were very far from being friendly after
              what I had heard of his treatment of his daughter, but I was
              anxious to send Perkins and the wagonette home, and the
              opportunity was a good one. I alighted and sent a message to Sir
              Henry that I should walk over in time for dinner. Then I followed
              Frankland into his dining-room.
            </TextNode>

            <TextNode>
              “It is a great day for me, sir—one of the red-letter days of my
              life,” he cried with many chuckles. “I have brought off a double
              event. I mean to teach them in these parts that law is law, and
              that there is a man here who does not fear to invoke it. I have
              established a right of way through the centre of old Middleton's
              park, slap across it, sir, within a hundred yards of his own front
              door. What do you think of that? We'll teach these magnates that
              they cannot ride roughshod over the rights of the commoners,
              confound them! And I've closed the wood where the Fernworthy folk
              used to picnic. These infernal people seem to think that there are
              no rights of property, and that they can swarm where they like
              with their papers and their bottles. Both cases decided, Dr.
              Watson, and both in my favour. I haven't had such a day since I
              had Sir John Morland for trespass, because he shot in his own
              warren.”
            </TextNode>

            <TextNode>“How on earth did you do that?”</TextNode>

            <TextNode>
              “Look it up in the books, sir. It will repay reading—Frankland v.
              Morland, Court of Queen's Bench. It cost me 200 pounds, but I got
              my verdict.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page230;

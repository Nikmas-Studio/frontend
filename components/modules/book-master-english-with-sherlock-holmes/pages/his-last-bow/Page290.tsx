import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
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

function Page290({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;BRUCE-PARTINGTON PLANS'
      />
      <BookMainContainer biggestTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “The cunning dog has covered his tracks,” said he. “He has left
              nothing to incriminate him. His dangerous correspondence has been
              destroyed or removed. This is our last chance.”
            </TextNode>

            <TextNode>
              It was a small tin cash-box which stood upon the writing-desk.
              Holmes pried it open with his chisel. Several rolls of paper were
              within, covered with figures and calculations, without any note to
              show to what they referred. The recurring words, “water pressure”
              and “pressure to the square inch” suggested some possible relation
              to a submarine. Holmes tossed them all impatiently aside. There
              only remained an envelope with some small newspaper slips inside
              it. He shook them out on the table, and at once I saw by his eager
              face that his hopes had been raised.
            </TextNode>

            <TextNode>
              “What's this, Watson? Eh? What's this? Record of a series of
              messages in the advertisements of a paper. Daily Telegraph agony
              column by the print and paper. Right-hand top corner of a page. No
              dates—but messages arrange themselves. This must be the first:
            </TextNode>

            <TextNode>
              “Hoped to hear sooner. Terms agreed to. Write fully to address
              given on card.
            </TextNode>

            <TextNode>— Pierrot.</TextNode>

            <TextNode>“Next comes:</TextNode>

            <Indent>
              <TextNode noIndent>
                “Too complex for description. Must have full report, Stuff
                awaits you when goods delivered.
              </TextNode>

              <TextNode noIndent className='italic'>
                — Pierrot.
              </TextNode>
            </Indent>

            <TextNode noIndent>“Then comes:</TextNode>

            <Indent>
              <TextNode noIndent>
                “Matter presses. Must withdraw offer unless contract completed.
                Make appointment by letter. Will confirm by advertisement.
              </TextNode>

              <TextNode noIndent className='italic'>
                — Pierrot.
              </TextNode>
            </Indent>

            <TextNode noIndent>“Finally:</TextNode>

            <Indent>
              <TextNode noIndent>
                “Monday night after nine. Two taps. Only ourselves. Do not be so
                suspicious. Payment in hard cash when goods delivered.
              </TextNode>

              <TextNode noIndent className='italic'>
                — Pierrot.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “A fairly complete record, Watson! If we could only get at the man
              at the other end!” He sat lost in thought, tapping his fingers on
              the table. Finally he sprang to his feet.
            </TextNode>

            <TextNode>
              “Well, perhaps it won't be so difficult, after all. There is
              nothing more to be done here, Watson. I think we might drive round
              to the offices of the Daily Telegraph, and so bring a good day's
              work to a conclusion.”
            </TextNode>

            <TextNode>
              Mycroft Holmes and Lestrade had come round by appointment after
              breakfast next day and Sherlock Holmes had recounted to them our
              proceedings of the day before. The professional shook his head
              over our confessed burglary.
            </TextNode>

            <TextNode>
              “We can't do these things in the force, Mr. Holmes,” said he. “No
              wonder you get results that are beyond us. But some of these days
              you'll go too far, and you'll find yourself and your friend in
              trouble.”
            </TextNode>

            <TextNode>
              “For England, home and beauty—eh, Watson? Martyrs on the altar of
              our country. But what do you think of it, Mycroft?”
            </TextNode>

            <TextNode>
              “Excellent, Sherlock! Admirable! But what use will you make of
              it?”
            </TextNode>

            <TextNode>
              Holmes picked up the Daily Telegraph which lay upon the table.
            </TextNode>

            <TextNode>“Have you seen Pierrot's advertisement to-day?”</TextNode>

            <TextNode>“What? Another one?”</TextNode>

            <TextNode>“Yes, here it is:</TextNode>

            <Indent>
              <TextNode noIndent>
                “To-night. Same hour. Same place. Two taps. Most vitally
                important. Your own safety at stake.
              </TextNode>

              <TextNode noIndent className='italic'>
                — Pierrot.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “By George!” cried Lestrade. “If he answers that we've got him!”
            </TextNode>

            <TextNode>
              “That was my idea when I put it in. I think if you could both make
              it convenient to come with us about eight o'clock to Caulfield
              Gardens we might possibly get a little nearer to a solution.”
            </TextNode>

            <TextNode>
              One of the most remarkable characteristics of Sherlock Holmes was
              his power of throwing his brain out of action and switching all
              his thoughts on to lighter things whenever he had convinced
              himself that he could no longer work to advantage. I remember that
              during the whole of that memorable day he lost himself in a
              monograph which he had undertaken upon the Polyphonic Motets of
              Lassus. For my own part I had none of this power of detachment,
              and the day, in consequence, appeared to be interminable. The
              great national importance of the issue, the suspense in high
              quarters, the direct nature of the experiment which we were
              trying—all combined to work upon my nerve. It was a relief to me
              when at last, after a light dinner, we set out upon our
              expedition. Lestrade and Mycroft met us by appointment at the
              outside of Gloucester Road Station. The area door of Oberstein's
              house had been left open the night before, and it was necessary
              for me, as Mycroft Holmes absolutely and indignantly declined to
              climb the railings, to pass in and open the hall door. By nine
              o'clock we were all seated in the study, waiting patently for our
              man.
            </TextNode>

            <TextNode>
              An hour passed and yet another. When eleven struck, the measured
              beat of the great church clock seemed to sound the dirge of our
              hopes. Lestrade and Mycroft were fidgeting in their seats and
              looking twice a minute at their watches. Holmes sat silent and
              composed, his eyelids half shut, but every sense on the alert. He
              raised his head with a sudden jerk.
            </TextNode>

            <TextNode>“He is coming,” said he.</TextNode>

            <TextNode>
              There had been a furtive step past the door. Now it returned. We
              heard a shuffling sound outside, and then two sharp taps with the
              knocker. Holmes rose, motioning us to remain seated. The gas in
              the hall was a mere point of light. He opened the outer door, and
              then as a dark figure slipped past him he closed and fastened it.
              “This way!” we heard him say, and a moment later our man stood
              before us. Holmes had followed him closely, and as the man turned
              with a cry of surprise and alarm he caught him by the collar and
              threw him back into the room. Before our prisoner had recovered
              his balance the door was shut and Holmes standing with his back
              against it. The man glared round him, staggered, and fell
              senseless upon the floor. With the shock, his broad-brimmed hat
              flew from his head, his cravat slipped sown from his lips, and
              there were the long light beard and the soft, handsome delicate
              features of Colonel Valentine Walter.
            </TextNode>

            <TextNode>Holmes gave a whistle of surprise.</TextNode>

            <TextNode>
              “You can write me down an ass this time, Watson,” said he. “This
              was not the bird that I was looking for.”
            </TextNode>

            <TextNode>“Who is he?” asked Mycroft eagerly.</TextNode>

            <TextNode>
              “The younger brother of the late Sir James Walter, the head of the
              Submarine Department. Yes, yes; I see the fall of the cards. He is
              coming to. I think that you had best leave his examination to me.”
            </TextNode>

            <TextNode>
              We had carried the prostrate body to the sofa. Now our prisoner
              sat up, looked round him with a horror-stricken face, and passed
              his hand over his forehead, like one who cannot believe his own
              senses.
            </TextNode>

            <TextNode>
              “What is this?” he asked. “I came here to visit Mr. Oberstein.”
            </TextNode>

            <TextNode>
              “Everything is known, Colonel Walter,” said Holmes. “How an
              English gentleman could behave in such a manner is beyond my
              comprehension. But your whole correspondence and relations with
              Oberstein are within our knowledge. So also are the circumstances
              connected with the death of young Cadogan West. Let me advise you
              to gain at least the small credit for repentance and confession,
              since there are still some details which we can only learn from
              your lips.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              The man groaned and sank his face in his hands. We waited, but he
              was silent.
            </TextNode>
            <TextNode>
              “I can assure you,” said Holmes, “that every essential is already
              known. We know that you were pressed for money; that you took an
              impress of the keys which your brother held; and that you entered
              into a correspondence with Oberstein, who answered your letters
              through the advertisement columns of the Daily Telegraph. We are
              aware that you went down to the office in the fog on Monday night,
              but that you were seen and followed by young Cadogan West, who had
              probably some previous reason to suspect you. He saw your theft,
              but could not give the alarm, as it was just possible that you
              were taking the papers to your brother in London. Leaving all his
              private concerns, like the good citizen that he was, he followed
              you closely in the fog and kept at your heels until you reached
              this very house. There he intervened, and then it was, Colonel
              Walter, that to treason you added the more terrible crime of
              murder.”
            </TextNode>
            <TextNode>
              “I did not! I did not! Before God I swear that I did not!” cried
              our wretched prisoner.
            </TextNode>

            <TextNode>
              “Tell us, then, how Cadogan West met his end before you laid him
              upon the roof of a railway carriage.”
            </TextNode>

            <TextNode>
              “I will. I swear to you that I will. I did the rest. I confess it.
              It was just as you say. A Stock Exchange debt had to be paid. I
              needed the money badly. Oberstein offered me five thousand. It was
              to save myself from ruin. But as to murder, I am as innocent as
              you.”
            </TextNode>

            <TextNode>“What happened, then?”</TextNode>

            <TextNode>
              “He had his suspicions before, and he followed me as you describe.
              I never knew it until I was at the very door. It was thick fog,
              and one could not see three yards. I had given two taps and
              Oberstein had come to the door. The young man rushed up and
              demanded to know what we were about to do with the papers.
              Oberstein had a short life-preserver. He always carried it with
              him. As West forced his way after us into the house Oberstein
              struck him on the head. The blow was a fatal one. He was dead
              within five minutes. There he lay in the hall, and we were at our
              wit's end what to do. Then Oberstein had this idea about the
              trains which halted under his back window. But first he examined
              the papers which I had brought. He said that three of them were
              essential, and that he must keep them. 'You cannot keep them,'
              said I. 'There will be a dreadful row at Woolwich if they are not
              returned.' 'I must keep them,' said he, 'for they are so technical
              that it is impossible in the time to make copies.' 'Then they must
              all go back together to-night,' said I. He thought for a little,
              and then he cried out that he had it. 'Three I will keep,' said
              he. 'The others we will stuff into the pocket of this young man.
              When he is found the whole business will assuredly be put to his
              account.' I could see no other way out of it, so we did as he
              suggested. We waited half an hour at the window before a train
              stopped. It was so thick that nothing could be seen, and we had no
              difficulty in lowering West's body on to the train. That was the
              end of the matter so far as I was concerned.”
            </TextNode>

            <TextNode>“And your brother?”</TextNode>

            <TextNode>
              “He said nothing, but he had caught me once with his keys, and I
              think that he suspected. I read in his eyes that he suspected. As
              you know, he never held up his head again.”
            </TextNode>

            <TextNode>
              There was silence in the room. It was broken by Mycroft Holmes.
            </TextNode>

            <TextNode>
              “Can you not make reparation? It would ease your conscience, and
              possibly your punishment.”
            </TextNode>

            <TextNode>“What reparation can I make?”</TextNode>

            <TextNode>“Where is Oberstein with the papers?”</TextNode>

            <TextNode>“I do not know.”</TextNode>

            <TextNode>“Did he give you no address?”</TextNode>

            <TextNode>
              “He said that letters to the Hôtel du Louvre, Paris, would
              eventually reach him.”
            </TextNode>

            <TextNode>
              “Then reparation is still within your power,” said Sherlock
              Holmes.
            </TextNode>

            <TextNode>
              “I will do anything I can. I owe this fellow no particular
              good-will. He has been my ruin and my downfall.”
            </TextNode>

            <TextNode>
              “Here are paper and pen. Sit at this desk and write to my
              dictation. Direct the envelope to the address given. That is
              right. Now the letter:
            </TextNode>

            <Indent>
              <TextNode noIndent className='italic'>
                “Dear Sir:
              </TextNode>
              <TextNode noIndent>
                “With regard to our transaction, you will no doubt have observed
                by now that one essential detail is missing. I have a tracing
                which will make it complete. This has involved me in extra
                trouble, however, and I must ask you for a further advance of
                five hundred pounds. I will not trust it to the post, nor will I
                take anything but gold or notes. I would come to you abroad, but
                it would excite remark if I left the country at present.
                Therefore I shall expect to meet you in the smoking-room of the
                Charing Cross Hotel at noon on Saturday. Remember that only
                English notes, or gold, will be taken.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “That will do very well. I shall be very much surprised if it does
              not fetch our man.”
            </TextNode>

            <TextNode>
              And it did! It is a matter of history—that secret history of a
              nation which is often so much more intimate and interesting than
              its public chronicles—that Oberstein, eager to complete the coup
              of his lifetime, came to the lure and was safely engulfed for
              fifteen years in a British prison. In his trunk were found the
              invaluable Bruce-Partington plans, which he had put up for auction
              in all the naval centres of Europe.
            </TextNode>

            <TextNode>
              Colonel Walter died in prison towards the end of the second year
              of his sentence. As to Holmes, he returned refreshed to his
              monograph upon the Polyphonic Motets of Lassus, which has since
              been printed for private circulation, and is said by experts to be
              the last word upon the subject. Some weeks afterwards I learned
              incidentally that my friend spent a day at Windsor, whence be
              returned with a remarkably fine emerald tie-pin. When I asked him
              if he had bought it, he answered that it was a present from a
              certain gracious lady in whose interests he had once been
              fortunate enough to carry out a small commission. He said no more;
              but I fancy that I could guess at that lady's august name, and I
              have little doubt that the emerald pin will forever recall to my
              friend's memory the adventure of the Bruce-Partington plans.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page290;

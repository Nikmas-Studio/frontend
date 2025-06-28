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

function Page234({
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
          Chapter XIII.
          <br />
          Fixing the Nets
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “We're at close grips at last,” said Holmes as we walked together
              across the moor. “What a nerve the fellow has! How he pulled
              himself together in the face of what must have been a paralyzing
              shock when he found that the wrong man had fallen a victim to his
              plot. I told you in London, Watson, and I tell you now again, that
              we have never had a foeman more worthy of our steel.”
            </TextNode>

            <TextNode>“I am sorry that he has seen you.”</TextNode>

            <TextNode>
              “And so was I at first. But there was no getting out of it.”
            </TextNode>

            <TextNode>
              “What effect do you think it will have upon his plans now that he
              knows you are here?”
            </TextNode>

            <TextNode>
              “It may cause him to be more cautious, or it may drive him to
              desperate measures at once. Like most clever criminals, he may be
              too confident in his own cleverness and imagine that he has
              completely deceived us.”
            </TextNode>

            <TextNode>“Why should we not arrest him at once?”</TextNode>

            <TextNode>
              “My dear Watson, you were born to be a man of action. Your
              instinct is always to do something energetic. But supposing, for
              argument's sake, that we had him arrested to-night, what on earth
              the better off should we be for that? We could prove nothing
              against him. There's the devilish cunning of it! If he were acting
              through a human agent we could get some evidence, but if we were
              to drag this great dog to the light of day it would not help us in
              putting a rope round the neck of its master.”
            </TextNode>

            <TextNode>“Surely we have a case.”</TextNode>

            <TextNode>
              “Not a shadow of one—only surmise and conjecture. We should be
              laughed out of court if we came with such a story and such
              evidence.”
            </TextNode>

            <TextNode>“There is Sir Charles's death.”</TextNode>

            <TextNode>
              “Found dead without a mark upon him. You and I know that he died
              of sheer fright, and we know also what frightened him; but how are
              we to get twelve stolid jurymen to know it? What signs are there
              of a hound? Where are the marks of its fangs? Of course we know
              that a hound does not bite a dead body and that Sir Charles was
              dead before ever the brute overtook him. But we have to prove all
              this, and we are not in a position to do it.”
            </TextNode>

            <TextNode>“Well, then, to-night?”</TextNode>

            <TextNode>
              “We are not much better off to-night. Again, there was no direct
              connection between the hound and the man's death. We never saw the
              hound. We heard it; but we could not prove that it was running
              upon this man's trail. There is a complete absence of motive. No,
              my dear fellow; we must reconcile ourselves to the fact that we
              have no case at present, and that it is worth our while to run any
              risk in order to establish one.”
            </TextNode>

            <TextNode>“And how do you propose to do so?”</TextNode>

            <TextNode>
              “I have great hopes of what Mrs. Laura Lyons may do for us when
              the position of affairs is made clear to her. And I have my own
              plan as well. Sufficient for to-morrow is the evil thereof; but I
              hope before the day is past to have the upper hand at last.”
            </TextNode>

            <TextNode>
              I could draw nothing further from him, and he walked, lost in
              thought, as far as the Baskerville gates.
            </TextNode>

            <TextNode>“Are you coming up?”</TextNode>

            <TextNode>
              “Yes; I see no reason for further concealment. But one last word,
              Watson. Say nothing of the hound to Sir Henry. Let him think that
              Selden's death was as Stapleton would have us believe. He will
              have a better nerve for the ordeal which he will have to undergo
              to-morrow, when he is engaged, if I remember your report aright,
              to dine with these people.”
            </TextNode>

            <TextNode>“And so am I.”</TextNode>

            <TextNode>
              “Then you must excuse yourself and he must go alone. That will be
              easily arranged. And now, if we are too late for dinner, I think
              that we are both ready for our suppers.”
            </TextNode>

            <TextNode>
              Sir Henry was more pleased than surprised to see Sherlock Holmes,
              for he had for some days been expecting that recent events would
              bring him down from London. He did raise his eyebrows, however,
              when he found that my friend had neither any luggage nor any
              explanations for its absence. Between us we soon supplied his
              wants, and then over a belated supper we explained to the baronet
              as much of our experience as it seemed desirable that he should
              know. But first I had the unpleasant duty of breaking the news to
              Barrymore and his wife. To him it may have been an unmitigated
              relief, but she wept bitterly in her apron. To all the world he
              was the man of violence, half animal and half demon; but to her he
              always remained the little wilful boy of her own girlhood, the
              child who had clung to her hand. Evil indeed is the man who has
              not one woman to mourn him.
            </TextNode>

            <TextNode>
              “I've been moping in the house all day since Watson went off in
              the morning,” said the baronet. “I guess I should have some
              credit, for I have kept my promise. If I hadn't sworn not to go
              about alone I might have had a more lively evening, for I had a
              message from Stapleton asking me over there.”
            </TextNode>

            <TextNode>
              “I have no doubt that you would have had a more lively evening,”
              said Holmes drily. “By the way, I don't suppose you appreciate
              that we have been mourning over you as having broken your neck?”
            </TextNode>

            <TextNode>Sir Henry opened his eyes. “How was that?”</TextNode>

            <TextNode>
              “This poor wretch was dressed in your clothes. I fear your servant
              who gave them to him may get into trouble with the police.”
            </TextNode>

            <TextNode>
              “That is unlikely. There was no mark on any of them, as far as I
              know.”
            </TextNode>

            <TextNode>
              “That's lucky for him—in fact, it's lucky for all of you, since
              you are all on the wrong side of the law in this matter. I am not
              sure that as a conscientious detective my first duty is not to
              arrest the whole household. Watson's reports are most
              incriminating documents.”
            </TextNode>

            <TextNode>
              “But how about the case?” asked the baronet. “Have you made
              anything out of the tangle? I don't know that Watson and I are
              much the wiser since we came down.”
            </TextNode>

            <TextNode>
              “I think that I shall be in a position to make the situation
              rather more clear to you before long. It has been an exceedingly
              difficult and most complicated business. There are several points
              upon which we still want light—but it is coming all the same.”
            </TextNode>

            <TextNode>
              “We've had one experience, as Watson has no doubt told you. We
              heard the hound on the moor, so I can swear that it is not all
              empty superstition. I had something to do with dogs when I was out
              West, and I know one when I hear one. If you can muzzle that one
              and put him on a chain I'll be ready to swear you are the greatest
              detective of all time.”
            </TextNode>

            <TextNode>
              “I think I will muzzle him and chain him all right if you will
              give me your help.”
            </TextNode>

            <TextNode>“Whatever you tell me to do I will do.”</TextNode>

            <TextNode>
              “Very good; and I will ask you also to do it blindly, without
              always asking the reason.”
            </TextNode>

            <TextNode>“Just as you like.”</TextNode>

            <TextNode>
              “If you will do this I think the chances are that our little
              problem will soon be solved. I have no doubt—”
            </TextNode>

            <TextNode>
              He stopped suddenly and stared fixedly up over my head into the
              air. The lamp beat upon his face, and so intent was it and so
              still that it might have been that of a clear-cut classical
              statue, a personification of alertness and expectation.
            </TextNode>

            <TextNode>“What is it?” we both cried.</TextNode>

            <TextNode>
              I could see as he looked down that he was repressing some internal
              emotion. His features were still composed, but his eyes shone with
              amused exultation.
            </TextNode>

            <TextNode>
              “Excuse the admiration of a connoisseur,” said he as he waved his
              hand towards the line of portraits which covered the opposite
              wall. “Watson won't allow that I know anything of art, but that is
              mere jealousy, because our views upon the subject differ. Now,
              these are a really very fine series of portraits.”
            </TextNode>

            <TextNode>
              “Well, I'm glad to hear you say so,” said Sir Henry, glancing with
              some surprise at my friend. “I don't pretend to know much about
              these things, and I'd be a better judge of a horse or a steer than
              of a picture. I didn't know that you found time for such things.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “I know what is good when I see it, and I see it now. That's a
              Kneller, I'll swear, that lady in the blue silk over yonder, and
              the stout gentleman with the wig ought to be a Reynolds. They are
              all family portraits, I presume?”
            </TextNode>

            <TextNode>“Every one.”</TextNode>

            <TextNode>“Do you know the names?”</TextNode>

            <TextNode>
              “Barrymore has been coaching me in them, and I think I can say my
              lessons fairly well.”
            </TextNode>

            <TextNode>“Who is the gentleman with the telescope?”</TextNode>

            <TextNode>
              “That is Rear-Admiral Baskerville, who served under Rodney in the
              West Indies. The man with the blue coat and the roll of paper is
              Sir William Baskerville, who was Chairman of Committees of the
              House of Commons under Pitt.”
            </TextNode>

            <TextNode>
              “And this Cavalier opposite to me—the one with the black velvet
              and the lace?”
            </TextNode>

            <TextNode>
              “Ah, you have a right to know about him. That is the cause of all
              the mischief, the wicked Hugo, who started the Hound of the
              Baskervilles. We're not likely to forget him.”
            </TextNode>

            <TextNode>
              I gazed with interest and some surprise upon the portrait.
            </TextNode>

            <TextNode>
              “Dear me!” said Holmes, “he seems a quiet, meek-mannered man
              enough, but I dare say that there was a lurking devil in his eyes.
              I had pictured him as a more robust and ruffianly person.”
            </TextNode>

            <TextNode>
              “There's no doubt about the authenticity, for the name and the
              date, 1647, are on the back of the canvas.”
            </TextNode>

            <TextNode>
              Holmes said little more, but the picture of the old roysterer
              seemed to have a fascination for him, and his eyes were
              continually fixed upon it during supper. It was not until later,
              when Sir Henry had gone to his room, that I was able to follow the
              trend of his thoughts. He led me back into the banqueting-hall,
              his bedroom candle in his hand, and he held it up against the
              time-stained portrait on the wall.
            </TextNode>

            <TextNode>“Do you see anything there?”</TextNode>

            <TextNode>
              I looked at the broad plumed hat, the curling love-locks, the
              white lace collar, and the straight, severe face which was framed
              between them. It was not a brutal countenance, but it was prim,
              hard, and stern, with a firm-set, thin-lipped mouth, and a coldly
              intolerant eye.
            </TextNode>

            <TextNode>“Is it like anyone you know?”</TextNode>

            <TextNode>
              “There is something of Sir Henry about the jaw.”
            </TextNode>

            <TextNode>
              “Just a suggestion, perhaps. But wait an instant!” He stood upon a
              chair, and, holding up the light in his left hand, he curved his
              right arm over the broad hat and round the long ringlets.
            </TextNode>

            <TextNode>“Good heavens!” I cried, in amazement.</TextNode>

            <TextNode>
              The face of Stapleton had sprung out of the canvas.
            </TextNode>

            <TextNode>
              “Ha, you see it now. My eyes have been trained to examine faces
              and not their trimmings. It is the first quality of a criminal
              investigator that he should see through a disguise.”
            </TextNode>

            <TextNode>
              “But this is marvellous. It might be his portrait.”
            </TextNode>

            <TextNode>
              “Yes, it is an interesting instance of a throwback, which appears
              to be both physical and spiritual. A study of family portraits is
              enough to convert a man to the doctrine of reincarnation. The
              fellow is a Baskerville—that is evident.”
            </TextNode>

            <TextNode>“With designs upon the succession.”</TextNode>

            <TextNode>
              “Exactly. This chance of the picture has supplied us with one of
              our most obvious missing links. We have him, Watson, we have him,
              and I dare swear that before to-morrow night he will be fluttering
              in our net as helpless as one of his own butterflies. A pin, a
              cork, and a card, and we add him to the Baker Street collection!”
              He burst into one of his rare fits of laughter as he turned away
              from the picture. I have not heard him laugh often, and it has
              always boded ill to somebody.
            </TextNode>

            <TextNode>
              I was up betimes in the morning, but Holmes was afoot earlier
              still, for I saw him as I dressed, coming up the drive.
            </TextNode>

            <TextNode>
              “Yes, we should have a full day to-day,” he remarked, and he
              rubbed his hands with the joy of action. “The nets are all in
              place, and the drag is about to begin. We'll know before the day
              is out whether we have caught our big, lean-jawed pike, or whether
              he has got through the meshes.”
            </TextNode>

            <TextNode>“Have you been on the moor already?”</TextNode>

            <TextNode>
              “I have sent a report from Grimpen to Princetown as to the death
              of Selden. I think I can promise that none of you will be troubled
              in the matter. And I have also communicated with my faithful
              Cartwright, who would certainly have pined away at the door of my
              hut, as a dog does at his master's grave, if I had not set his
              mind at rest about my safety.”
            </TextNode>

            <TextNode>“What is the next move?”</TextNode>

            <TextNode>“To see Sir Henry. Ah, here he is!”</TextNode>

            <TextNode>
              “Good morning, Holmes,” said the baronet. “You look like a general
              who is planning a battle with his chief of the staff.”
            </TextNode>

            <TextNode>
              “That is the exact situation. Watson was asking for orders.”
            </TextNode>

            <TextNode>“And so do I.”</TextNode>

            <TextNode>
              “Very good. You are engaged, as I understand, to dine with our
              friends the Stapletons to-night.”
            </TextNode>

            <TextNode>
              “I hope that you will come also. They are very hospitable people,
              and I am sure that they would be very glad to see you.”
            </TextNode>

            <TextNode>“I fear that Watson and I must go to London.”</TextNode>

            <TextNode>“To London?”</TextNode>

            <TextNode>
              “Yes, I think that we should be more useful there at the present
              juncture.”
            </TextNode>

            <TextNode>The baronet's face perceptibly lengthened.</TextNode>

            <TextNode>
              “I hoped that you were going to see me through this business. The
              Hall and the moor are not very pleasant places when one is alone.”
            </TextNode>

            <TextNode>
              “My dear fellow, you must trust me implicitly and do exactly what
              I tell you. You can tell your friends that we should have been
              happy to have come with you, but that urgent business required us
              to be in town. We hope very soon to return to Devonshire. Will you
              remember to give them that message?”
            </TextNode>

            <TextNode>“If you insist upon it.”</TextNode>

            <TextNode>“There is no alternative, I assure you.”</TextNode>

            <TextNode>
              I saw by the baronet's clouded brow that he was deeply hurt by
              what he regarded as our desertion.
            </TextNode>

            <TextNode>“When do you desire to go?” he asked coldly.</TextNode>

            <TextNode>
              “Immediately after breakfast. We will drive in to Coombe Tracey,
              but Watson will leave his things as a pledge that he will come
              back to you. Watson, you will send a note to Stapleton to tell him
              that you regret that you cannot come.”
            </TextNode>

            <TextNode>
              “I have a good mind to go to London with you,” said the baronet.
              “Why should I stay here alone?”
            </TextNode>

            <TextNode>
              “Because it is your post of duty. Because you gave me your word
              that you would do as you were told, and I tell you to stay.”
            </TextNode>

            <TextNode>“All right, then, I'll stay.”</TextNode>

            <TextNode>
              “One more direction! I wish you to drive to Merripit House. Send
              back your trap, however, and let them know that you intend to walk
              home.”
            </TextNode>

            <TextNode>“To walk across the moor?”</TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>
              “But that is the very thing which you have so often cautioned me
              not to do.”
            </TextNode>

            <TextNode>
              “This time you may do it with safety. If I had not every
              confidence in your nerve and courage I would not suggest it, but
              it is essential that you should do it.”
            </TextNode>

            <TextNode>“Then I will do it.”</TextNode>

            <TextNode>
              “And as you value your life do not go across the moor in any
              direction save along the straight path which leads from Merripit
              House to the Grimpen Road, and is your natural way home.”
            </TextNode>

            <TextNode>“I will do just what you say.”</TextNode>

            <TextNode>
              “Very good. I should be glad to get away as soon after breakfast
              as possible, so as to reach London in the afternoon.”
            </TextNode>

            <TextNode>
              I was much astounded by this programme, though I remembered that
              Holmes had said to Stapleton on the night before that his visit
              would terminate next day. It had not crossed my mind, however,
              that he would wish me to go with him, nor could I understand how
              we could both be absent at a moment which he himself declared to
              be critical. There was nothing for it, however, but implicit
              obedience; so we bade good-bye to our rueful friend, and a couple
              of hours afterwards we were at the station of Coombe Tracey and
              had dispatched the trap upon its return journey. A small boy was
              waiting upon the platform.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page234;

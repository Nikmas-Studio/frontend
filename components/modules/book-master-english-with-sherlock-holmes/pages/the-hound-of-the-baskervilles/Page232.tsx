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

function Page232({
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
          Chapter XII.
          <br />
          Death on the Moor
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              For a moment or two I sat breathless, hardly able to believe my
              ears. Then my senses and my voice came back to me, while a
              crushing weight of responsibility seemed in an instant to be
              lifted from my soul. That cold, incisive, ironical voice could
              belong to but one man in all the world.
            </TextNode>

            <TextNode>“Holmes!” I cried—“Holmes!”</TextNode>

            <TextNode>
              “Come out,” said he, “and please be careful with the revolver.”
            </TextNode>

            <TextNode>
              I stooped under the rude lintel, and there he sat upon a stone
              outside, his gray eyes dancing with amusement as they fell upon my
              astonished features. He was thin and worn, but clear and alert,
              his keen face bronzed by the sun and roughened by the wind. In his
              tweed suit and cloth cap he looked like any other tourist upon the
              moor, and he had contrived, with that cat-like love of personal
              cleanliness which was one of his characteristics, that his chin
              should be as smooth and his linen as perfect as if he were in
              Baker Street.
            </TextNode>

            <TextNode>
              “I never was more glad to see anyone in my life,” said I, as I
              wrung him by the hand.
            </TextNode>

            <TextNode>“Or more astonished, eh?”</TextNode>

            <TextNode>“Well, I must confess to it.”</TextNode>

            <TextNode>
              “The surprise was not all on one side, I assure you. I had no idea
              that you had found my occasional retreat, still less that you were
              inside it, until I was within twenty paces of the door.”
            </TextNode>

            <TextNode>“My footprint, I presume?”</TextNode>

            <TextNode>
              “No, Watson; I fear that I could not undertake to recognize your
              footprint amid all the footprints of the world. If you seriously
              desire to deceive me you must change your tobacconist; for when I
              see the stub of a cigarette marked Bradley, Oxford Street, I know
              that my friend Watson is in the neighbourhood. You will see it
              there beside the path. You threw it down, no doubt, at that
              supreme moment when you charged into the empty hut.”
            </TextNode>

            <TextNode>“Exactly.”</TextNode>

            <TextNode>
              “I thought as much—and knowing your admirable tenacity I was
              convinced that you were sitting in ambush, a weapon within reach,
              waiting for the tenant to return. So you actually thought that I
              was the criminal?”
            </TextNode>

            <TextNode>
              “I did not know who you were, but I was determined to find out.”
            </TextNode>

            <TextNode>
              “Excellent, Watson! And how did you localize me? You saw me,
              perhaps, on the night of the convict hunt, when I was so imprudent
              as to allow the moon to rise behind me?”
            </TextNode>

            <TextNode>“Yes, I saw you then.”</TextNode>

            <TextNode>
              “And have no doubt searched all the huts until you came to this
              one?”
            </TextNode>

            <TextNode>
              “No, your boy had been observed, and that gave me a guide where to
              look.”
            </TextNode>

            <TextNode>
              “The old gentleman with the telescope, no doubt. I could not make
              it out when first I saw the light flashing upon the lens.” He rose
              and peeped into the hut. “Ha, I see that Cartwright has brought up
              some supplies. What's this paper? So you have been to Coombe
              Tracey, have you?”
            </TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>“To see Mrs. Laura Lyons?”</TextNode>

            <TextNode>“Exactly.”</TextNode>

            <TextNode>
              “Well done! Our researches have evidently been running on parallel
              lines, and when we unite our results I expect we shall have a
              fairly full knowledge of the case.”
            </TextNode>

            <TextNode>
              “Well, I am glad from my heart that you are here, for indeed the
              responsibility and the mystery were both becoming too much for my
              nerves. But how in the name of wonder did you come here, and what
              have you been doing? I thought that you were in Baker Street
              working out that case of blackmailing.”
            </TextNode>

            <TextNode>“That was what I wished you to think.”</TextNode>

            <TextNode>
              “Then you use me, and yet do not trust me!” I cried with some
              bitterness. “I think that I have deserved better at your hands,
              Holmes.”
            </TextNode>

            <TextNode>
              “My dear fellow, you have been invaluable to me in this as in many
              other cases, and I beg that you will forgive me if I have seemed
              to play a trick upon you. In truth, it was partly for your own
              sake that I did it, and it was my appreciation of the danger which
              you ran which led me to come down and examine the matter for
              myself. Had I been with Sir Henry and you it is confident that my
              point of view would have been the same as yours, and my presence
              would have warned our very formidable opponents to be on their
              guard. As it is, I have been able to get about as I could not
              possibly have done had I been living in the Hall, and I remain an
              unknown factor in the business, ready to throw in all my weight at
              a critical moment.”
            </TextNode>

            <TextNode>“But why keep me in the dark?”</TextNode>

            <TextNode>
              “For you to know could not have helped us, and might possibly have
              led to my discovery. You would have wished to tell me something,
              or in your kindness you would have brought me out some comfort or
              other, and so an unnecessary risk would be run. I brought
              Cartwright down with me—you remember the little chap at the
              express office—and he has seen after my simple wants: a loaf of
              bread and a clean collar. What does man want more? He has given me
              an extra pair of eyes upon a very active pair of feet, and both
              have been invaluable.”
            </TextNode>

            <TextNode>
              “Then my reports have all been wasted!”—My voice trembled as I
              recalled the pains and the pride with which I had composed them.
            </TextNode>

            <TextNode>Holmes took a bundle of papers from his pocket.</TextNode>

            <TextNode>
              “Here are your reports, my dear fellow, and very well thumbed, I
              assure you. I made excellent arrangements, and they are only
              delayed one day upon their way. I must compliment you exceedingly
              upon the zeal and the intelligence which you have shown over an
              extraordinarily difficult case.”
            </TextNode>

            <TextNode>
              I was still rather raw over the deception which had been practised
              upon me, but the warmth of Holmes's praise drove my anger from my
              mind. I felt also in my heart that he was right in what he said
              and that it was really best for our purpose that I should not have
              known that he was upon the moor.
            </TextNode>

            <TextNode>
              “That's better,” said he, seeing the shadow rise from my face.
              “And now tell me the result of your visit to Mrs. Laura Lyons—it
              was not difficult for me to guess that it was to see her that you
              had gone, for I am already aware that she is the one person in
              Coombe Tracey who might be of service to us in the matter. In
              fact, if you had not gone to-day it is exceedingly probable that I
              should have gone to-morrow.”
            </TextNode>

            <TextNode>
              The sun had set and dusk was settling over the moor. The air had
              turned chill and we withdrew into the hut for warmth. There,
              sitting together in the twilight, I told Holmes of my conversation
              with the lady. So interested was he that I had to repeat some of
              it twice before he was satisfied.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “This is most important,” said he when I had concluded. “It fills
              up a gap which I had been unable to bridge, in this most complex
              affair. You are aware, perhaps, that a close intimacy exists
              between this lady and the man Stapleton?”
            </TextNode>

            <TextNode>“I did not know of a close intimacy.”</TextNode>

            <TextNode>
              “There can be no doubt about the matter. They meet, they write,
              there is a complete understanding between them. Now, this puts a
              very powerful weapon into our hands. If I could only use it to
              detach his wife—”
            </TextNode>

            <TextNode>“His wife?”</TextNode>

            <TextNode>
              “I am giving you some information now, in return for all that you
              have given me. The lady who has passed here as Miss Stapleton is
              in reality his wife.”
            </TextNode>

            <TextNode>
              “Good heavens, Holmes! Are you sure of what you say? How could he
              have permitted Sir Henry to fall in love with her?”
            </TextNode>

            <TextNode>
              “Sir Henry's falling in love could do no harm to anyone except Sir
              Henry. He took particular care that Sir Henry did not make love to
              her, as you have yourself observed. I repeat that the lady is his
              wife and not his sister.”
            </TextNode>

            <TextNode>“But why this elaborate deception?”</TextNode>

            <TextNode>
              “Because he foresaw that she would be very much more useful to him
              in the character of a free woman.”
            </TextNode>

            <TextNode>
              All my unspoken instincts, my vague suspicions, suddenly took
              shape and centred upon the naturalist. In that impassive,
              colourless man, with his straw hat and his butterfly-net, I seemed
              to see something terrible—a creature of infinite patience and
              craft, with a smiling face and a murderous heart.
            </TextNode>

            <TextNode>
              “It is he, then, who is our enemy—it is he who dogged us in
              London?”
            </TextNode>

            <TextNode>“So I read the riddle.”</TextNode>

            <TextNode>“And the warning—it must have come from her!”</TextNode>

            <TextNode>“Exactly.”</TextNode>

            <TextNode>
              The shape of some monstrous villainy, half seen, half guessed,
              loomed through the darkness which had girt me so long.
            </TextNode>

            <TextNode>
              “But are you sure of this, Holmes? How do you know that the woman
              is his wife?”
            </TextNode>

            <TextNode>
              “Because he so far forgot himself as to tell you a true piece of
              autobiography upon the occasion when he first met you, and I dare
              say he has many a time regretted it since. He was once a
              schoolmaster in the north of England. Now, there is no one more
              easy to trace than a schoolmaster. There are scholastic agencies
              by which one may identify any man who has been in the profession.
              A little investigation showed me that a school had come to grief
              under atrocious circumstances, and that the man who had owned
              it—the name was different—had disappeared with his wife. The
              descriptions agreed. When I learned that the missing man was
              devoted to entomology the identification was complete.”
            </TextNode>

            <TextNode>
              The darkness was rising, but much was still hidden by the shadows.
            </TextNode>

            <TextNode>
              “If this woman is in truth his wife, where does Mrs. Laura Lyons
              come in?” I asked.
            </TextNode>

            <TextNode>
              “That is one of the points upon which your own researches have
              shed a light. Your interview with the lady has cleared the
              situation very much. I did not know about a projected divorce
              between herself and her husband. In that case, regarding Stapleton
              as an unmarried man, she counted no doubt upon becoming his wife.”
            </TextNode>

            <TextNode>“And when she is undeceived?”</TextNode>

            <TextNode>
              “Why, then we may find the lady of service. It must be our first
              duty to see her—both of us—to-morrow. Don't you think, Watson,
              that you are away from your charge rather long? Your place should
              be at Baskerville Hall.”
            </TextNode>

            <TextNode>
              The last red streaks had faded away in the west and night had
              settled upon the moor. A few faint stars were gleaming in a violet
              sky.
            </TextNode>

            <TextNode>
              “One last question, Holmes,” I said, as I rose. “Surely there is
              no need of secrecy between you and me. What is the meaning of it
              all? What is he after?”
            </TextNode>

            <TextNode>Holmes's voice sank as he answered:—</TextNode>

            <TextNode>
              “It is murder, Watson—refined, cold-blooded, deliberate murder. Do
              not ask me for particulars. My nets are closing upon him, even as
              his are upon Sir Henry, and with your help he is already almost at
              my mercy. There is but one danger which can threaten us. It is
              that he should strike before we are ready to do so. Another
              day—two at the most—and I have my case complete, but until then
              guard your charge as closely as ever a fond mother watched her
              ailing child. Your mission to-day has justified itself, and yet I
              could almost wish that you had not left his side. Hark!”
            </TextNode>

            <TextNode>
              A terrible scream—a prolonged yell of horror and anguish—burst out
              of the silence of the moor. That frightful cry turned the blood to
              ice in my veins.
            </TextNode>

            <TextNode>
              “Oh, my God!” I gasped. “What is it? What does it mean?”
            </TextNode>

            <TextNode>
              Holmes had sprung to his feet, and I saw his dark, athletic
              outline at the door of the hut, his shoulders stooping, his head
              thrust forward, his face peering into the darkness.
            </TextNode>

            <TextNode>“Hush!” he whispered. “Hush!”</TextNode>

            <TextNode>
              The cry had been loud on account of its vehemence, but it had
              pealed out from somewhere far off on the shadowy plain. Now it
              burst upon our ears, nearer, louder, more urgent than before.
            </TextNode>

            <TextNode>
              “Where is it?” Holmes whispered; and I knew from the thrill of his
              voice that he, the man of iron, was shaken to the soul. “Where is
              it, Watson?”
            </TextNode>

            <TextNode>“There, I think.” I pointed into the darkness.</TextNode>

            <TextNode>“No, there!”</TextNode>

            <TextNode>
              Again the agonized cry swept through the silent night, louder and
              much nearer than ever. And a new sound mingled with it, a deep,
              muttered rumble, musical and yet menacing, rising and falling like
              the low, constant murmur of the sea.
            </TextNode>

            <TextNode>
              “The hound!” cried Holmes. “Come, Watson, come! Great heavens, if
              we are too late!”
            </TextNode>

            <TextNode>
              He had started running swiftly over the moor, and I had followed
              at his heels. But now from somewhere among the broken ground
              immediately in front of us there came one last despairing yell,
              and then a dull, heavy thud. We halted and listened. Not another
              sound broke the heavy silence of the windless night.
            </TextNode>

            <TextNode>
              I saw Holmes put his hand to his forehead like a man distracted.
              He stamped his feet upon the ground.
            </TextNode>

            <TextNode>“He has beaten us, Watson. We are too late.”</TextNode>

            <TextNode>“No, no, surely not!”</TextNode>

            <TextNode>
              “Fool that I was to hold my hand. And you, Watson, see what comes
              of abandoning your charge! But, by Heaven, if the worst has
              happened, we'll avenge him!”
            </TextNode>

            <TextNode>
              Blindly we ran through the gloom, blundering against boulders,
              forcing our way through gorse bushes, panting up hills and rushing
              down slopes, heading always in the direction whence those dreadful
              sounds had come. At every rise Holmes looked eagerly round him,
              but the shadows were thick upon the moor, and nothing moved upon
              its dreary face.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page232;

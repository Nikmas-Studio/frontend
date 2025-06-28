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

function Page233({
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
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              There was no chance of either of us forgetting that peculiar ruddy
              tweed suit—the very one which he had worn on the first morning
              that we had seen him in Baker Street. We caught the one clear
              glimpse of it, and then the match flickered and went out, even as
              the hope had gone out of our souls. Holmes groaned, and his face
              glimmered white through the darkness.
            </TextNode>

            <TextNode>
              “The brute! the brute!” I cried with clenched hands. “Oh Holmes, I
              shall never forgive myself for having left him to his fate.”
            </TextNode>

            <TextNode>
              “I am more to blame than you, Watson. In order to have my case
              well rounded and complete, I have thrown away the life of my
              client. It is the greatest blow which has befallen me in my
              career. But how could I know—how could l know—that he would risk
              his life alone upon the moor in the face of all my warnings?”
            </TextNode>

            <TextNode>
              “That we should have heard his screams—my God, those screams!—and
              yet have been unable to save him! Where is this brute of a hound
              which drove him to his death? It may be lurking among these rocks
              at this instant. And Stapleton, where is he? He shall answer for
              this deed.”
            </TextNode>

            <TextNode>
              “He shall. I will see to that. Uncle and nephew have been
              murdered—the one frightened to death by the very sight of a beast
              which he thought to be supernatural, the other driven to his end
              in his wild flight to escape from it. But now we have to prove the
              connection between the man and the beast. Save from what we heard,
              we cannot even swear to the existence of the latter, since Sir
              Henry has evidently died from the fall. But, by heavens, cunning
              as he is, the fellow shall be in my power before another day is
              past!”
            </TextNode>

            <TextNode>
              We stood with bitter hearts on either side of the mangled body,
              overwhelmed by this sudden and irrevocable disaster which had
              brought all our long and weary labours to so piteous an end. Then,
              as the moon rose we climbed to the top of the rocks over which our
              poor friend had fallen, and from the summit we gazed out over the
              shadowy moor, half silver and half gloom. Far away, miles off, in
              the direction of Grimpen, a single steady yellow light was
              shining. It could only come from the lonely abode of the
              Stapletons. With a bitter curse I shook my fist at it as I gazed.
            </TextNode>

            <TextNode>“Why should we not seize him at once?”</TextNode>

            <TextNode>
              “Our case is not complete. The fellow is wary and cunning to the
              last degree. It is not what we know, but what we can prove. If we
              make one false move the villain may escape us yet.”
            </TextNode>

            <TextNode>“What can we do?”</TextNode>

            <TextNode>
              “There will be plenty for us to do to-morrow. To-night we can only
              perform the last offices to our poor friend.”
            </TextNode>

            <TextNode>
              Together we made our way down the precipitous slope and approached
              the body, black and clear against the silvered stones. The agony
              of those contorted limbs struck me with a spasm of pain and
              blurred my eyes with tears.
            </TextNode>

            <TextNode>
              “We must send for help, Holmes! We cannot carry him all the way to
              the Hall. Good heavens, are you mad?”
            </TextNode>

            <TextNode>
              He had uttered a cry and bent over the body. Now he was dancing
              and laughing and wringing my hand. Could this be my stern,
              self-contained friend? These were hidden fires, indeed!
            </TextNode>

            <TextNode>“A beard! A beard! The man has a beard!”</TextNode>

            <TextNode>“A beard?”</TextNode>

            <TextNode>
              “It is not the baronet—it is—why, it is my neighbour, the
              convict!”
            </TextNode>

            <TextNode>
              With feverish haste we had turned the body over, and that dripping
              beard was pointing up to the cold, clear moon. There could be no
              doubt about the beetling forehead, the sunken animal eyes. It was
              indeed the same face which had glared upon me in the light of the
              candle from over the rock—the face of Selden, the criminal.
            </TextNode>

            <TextNode>
              Then in an instant it was all clear to me. I remembered how the
              baronet had told me that he had handed his old wardrobe to
              Barrymore. Barrymore had passed it on in order to help Selden in
              his escape. Boots, shirt, cap—it was all Sir Henry's. The tragedy
              was still black enough, but this man had at least deserved death
              by the laws of his country. I told Holmes how the matter stood, my
              heart bubbling over with thankfulness and joy.
            </TextNode>

            <TextNode>
              “Then the clothes have been the poor devil's death,” said he. “It
              is clear enough that the hound has been laid on from some article
              of Sir Henry's—the boot which was abstracted in the hotel, in all
              probability—and so ran this man down. There is one very singular
              thing, however: How came Selden, in the darkness, to know that the
              hound was on his trail?”
            </TextNode>

            <TextNode>“He heard him.”</TextNode>

            <TextNode>
              “To hear a hound upon the moor would not work a hard man like this
              convict into such a paroxysm of terror that he would risk
              recapture by screaming wildly for help. By his cries he must have
              run a long way after he knew the animal was on his track. How did
              he know?”
            </TextNode>

            <TextNode>
              “A greater mystery to me is why this hound, presuming that all our
              conjectures are correct—”
            </TextNode>

            <TextNode>“I presume nothing.”</TextNode>

            <TextNode>
              “Well, then, why this hound should be loose to-night. I suppose
              that it does not always run loose upon the moor. Stapleton would
              not let it go unless he had reason to think that Sir Henry would
              be there.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “My difficulty is the more formidable of the two, for I think that
              we shall very shortly get an explanation of yours, while mine may
              remain forever a mystery. The question now is, what shall we do
              with this poor wretch's body? We cannot leave it here to the foxes
              and the ravens.”
            </TextNode>

            <TextNode>
              “I suggest that we put it in one of the huts until we can
              communicate with the police.”
            </TextNode>

            <TextNode>
              “Exactly. I have no doubt that you and I could carry it so far.
              Halloa, Watson, what's this? It's the man himself, by all that's
              wonderful and audacious! Not a word to show your suspicions—not a
              word, or my plans crumble to the ground.”
            </TextNode>

            <TextNode>
              A figure was approaching us over the moor, and I saw the dull red
              glow of a cigar. The moon shone upon him, and I could distinguish
              the dapper shape and jaunty walk of the naturalist. He stopped
              when he saw us, and then came on again.
            </TextNode>

            <TextNode>
              “Why, Dr. Watson, that's not you, is it? You are the last man that
              I should have expected to see out on the moor at this time of
              night. But, dear me, what's this? Somebody hurt? Not—don't tell me
              that it is our friend Sir Henry!” He hurried past me and stooped
              over the dead man. I heard a sharp intake of his breath and the
              cigar fell from his fingers.
            </TextNode>
            <TextNode>“Who—who's this?” he stammered.</TextNode>

            <TextNode>
              “It is Selden, the man who escaped from Princetown.”
            </TextNode>

            <TextNode>
              Stapleton turned a ghastly face upon us, but by a supreme effort
              he had overcome his amazement and his disappointment. He looked
              sharply from Holmes to me.
            </TextNode>

            <TextNode>
              “Dear me! What a very shocking affair! How did he die?”
            </TextNode>

            <TextNode>
              “He appears to have broken his neck by falling over these rocks.
              My friend and I were strolling on the moor when we heard a cry.”
            </TextNode>

            <TextNode>
              “I heard a cry also. That was what brought me out. I was uneasy
              about Sir Henry.”
            </TextNode>

            <TextNode>
              “Why about Sir Henry in particular?” I could not help asking.
            </TextNode>

            <TextNode>
              “Because I had suggested that he should come over. When he did not
              come I was surprised, and I naturally became alarmed for his
              safety when I heard cries upon the moor. By the way”—his eyes
              darted again from my face to Holmes's—“did you hear anything else
              besides a cry?”
            </TextNode>
            <TextNode>“No,” said Holmes; “did you?”</TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>“What do you mean, then?”</TextNode>

            <TextNode>
              “Oh, you know the stories that the peasants tell about a phantom
              hound, and so on. It is said to be heard at night upon the moor. I
              was wondering if there were any evidence of such a sound
              to-night.”
            </TextNode>

            <TextNode>“We heard nothing of the kind,” said I.</TextNode>

            <TextNode>
              “And what is your theory of this poor fellow's death?”
            </TextNode>

            <TextNode>
              “I have no doubt that anxiety and exposure have driven him off his
              head. He has rushed about the moor in a crazy state and eventually
              fallen over here and broken his neck.”
            </TextNode>

            <TextNode>
              “That seems the most reasonable theory,” said Stapleton, and he
              gave a sigh which I took to indicate his relief. “What do you
              think about it, Mr. Sherlock Holmes?”
            </TextNode>

            <TextNode>My friend bowed his compliments.</TextNode>

            <TextNode>“You are quick at identification,” said he.</TextNode>

            <TextNode>
              “We have been expecting you in these parts since Dr. Watson came
              down. You are in time to see a tragedy.”
            </TextNode>

            <TextNode>
              “Yes, indeed. I have no doubt that my friend's explanation will
              cover the facts. I will take an unpleasant remembrance back to
              London with me to-morrow.”
            </TextNode>

            <TextNode>“Oh, you return to-morrow?”</TextNode>

            <TextNode>“That is my intention.”</TextNode>

            <TextNode>
              “I hope your visit has cast some light upon those occurrences
              which have puzzled us?”
            </TextNode>

            <TextNode>Holmes shrugged his shoulders.</TextNode>

            <TextNode>
              “One cannot always have the success for which one hopes. An
              investigator needs facts, and not legends or rumours. It has not
              been a satisfactory case.”
            </TextNode>

            <TextNode>
              My friend spoke in his frankest and most unconcerned manner.
              Stapleton still looked hard at him. Then he turned to me.
            </TextNode>

            <TextNode>
              “I would suggest carrying this poor fellow to my house, but it
              would give my sister such a fright that I do not feel justified in
              doing it. I think that if we put something over his face he will
              be safe until morning.”
            </TextNode>

            <TextNode>
              And so it was arranged. Resisting Stapleton's offer of
              hospitality, Holmes and I set off to Baskerville Hall, leaving the
              naturalist to return alone. Looking back we saw the figure moving
              slowly away over the broad moor, and behind him that one black
              smudge on the silvered slope which showed where the man was lying
              who had come so horribly to his end.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page233;

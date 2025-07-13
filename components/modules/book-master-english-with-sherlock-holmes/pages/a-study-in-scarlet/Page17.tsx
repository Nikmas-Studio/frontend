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

function Page17({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='A STUDY IN SCARLET'
      />
      <BookMainContainer>
        <H4>
          Chapter VI.
          <br />
          Tobias Gregson Shows What He Can Do
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              The papers next day were full of the “Brixton Mystery,” as they
              termed it. Each had a long account of the affair, and some had
              leaders upon it in addition. There was some information in them
              which was new to me. I still retain in my scrap-book numerous
              clippings and extracts bearing upon the case. Here is a
              condensation of a few of them:—
            </TextNode>

            <TextNode>
              <span className='italic'>The Daily Telegraph</span> remarked that
              in the history of crime there had seldom been a tragedy which
              presented stranger features. The German name of the victim, the
              absence of all other motive, and the sinister inscription on the
              wall, all pointed to its perpetration by political refugees and
              revolutionists. The Socialists had many branches in America, and
              the deceased had, no doubt, infringed their unwritten laws, and
              been tracked down by them. After alluding airily to the
              Vehmgericht, aqua tofana, Carbonari, the Marchioness de
              Brinvilliers, the Darwinian theory, the principles of Malthus, and
              the Ratcliff Highway murders, the article concluded by admonishing
              the Government and advocating a closer watch over foreigners in
              England.
            </TextNode>

            <TextNode>
              <span className='italic'>The Standard</span> commented upon the
              fact that lawless outrages of the sort usually occurred under a
              Liberal Administration. They arose from the unsettling of the
              minds of the masses, and the consequent weakening of all
              authority. The deceased was an American gentleman who had been
              residing for some weeks in the Metropolis. He had stayed at the
              boarding-house of Madame Charpentier, in Torquay Terrace,
              Camberwell. He was accompanied in his travels by his private
              secretary, Mr. Joseph Stangerson. The two bade adieu to their
              landlady upon Tuesday, the 4th inst., and departed to Euston
              Station with the avowed intention of catching the Liverpool
              express. They were afterwards seen together upon the platform.
              Nothing more is known of them until Mr. Drebber's body was, as
              recorded, discovered in an empty house in the Brixton Road, many
              miles from Euston. How he came there, or how he met his fate, are
              questions which are still involved in mystery. Nothing is known of
              the whereabouts of Stangerson. We are glad to learn that Mr.
              Lestrade and Mr. Gregson, of Scotland Yard, are both engaged upon
              the case, and it is confidently anticipated that these well-known
              officers will speedily throw light upon the matter.
            </TextNode>

            <TextNode>
              <span className='italic'>The Daily News</span> observed that there
              was no doubt as to the crime being a political one. The despotism
              and hatred of Liberalism which animated the Continental
              Governments had had the effect of driving to our shores a number
              of men who might have made excellent citizens were they not soured
              by the recollection of all that they had undergone. Among these
              men there was a stringent code of honour, any infringement of
              which was punished by death. Every effort should be made to find
              the secretary, Stangerson, and to ascertain some particulars of
              the habits of the deceased. A great step had been gained by the
              discovery of the address of the house at which he had boarded—a
              result which was entirely due to the acuteness and energy of Mr.
              Gregson of Scotland Yard.
            </TextNode>

            <TextNode>
              Sherlock Holmes and I read these notices over together at
              breakfast, and they appeared to afford him considerable amusement.
            </TextNode>

            <TextNode>
              “I told you that, whatever happened, Lestrade and Gregson would be
              sure to score.”
            </TextNode>

            <TextNode>“That depends on how it turns out.”</TextNode>

            <TextNode>
              “Oh, bless you, it doesn't matter in the least. If the man is
              caught, it will be on account of their exertions; if he escapes,
              it will be in spite of their exertions. It's heads I win and tails
              you lose. Whatever they do, they will have followers.{' '}
              <span className='italic'>
                ‘Un sot trouve toujours un plus sot qui l'admire.’
              </span>
              ”
            </TextNode>
            <TextNode>
              “What on earth is this?” I cried, for at this moment there came
              the pattering of many steps in the hall and on the stairs,
              accompanied by audible expressions of disgust upon the part of our
              landlady.
            </TextNode>

            <TextNode>
              “It's the Baker Street division of the detective police force,”
              said my companion, gravely; and as he spoke there rushed into the
              room half a dozen of the dirtiest and most ragged street Arabs
              that ever I clapped eyes on.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “'Tention!” cried Holmes, in a sharp tone, and the six dirty
              little scoundrels stood in a line like so many disreputable
              statuettes. “In future you shall send up Wiggins alone to report,
              and the rest of you must wait in the street. Have you found it,
              Wiggins?”
            </TextNode>

            <TextNode>“No, sir, we hain't,” said one of the youths.</TextNode>

            <TextNode>
              “I hardly expected you would. You must keep on until you do. Here
              are your wages.” He handed each of them a shilling. “Now, off you
              go, and come back with a better report next time.”
            </TextNode>

            <TextNode>
              He waved his hand, and they scampered away downstairs like so many
              rats, and we heard their shrill voices next moment in the street.
            </TextNode>

            <TextNode>
              “There's more work to be got out of one of those little beggars
              than out of a dozen of the force,” Holmes remarked. “The mere
              sight of an official-looking person seals men's lips. These
              youngsters, however, go everywhere and hear everything. They are
              as sharp as needles, too; all they want is organisation.”
            </TextNode>

            <TextNode>
              “Is it on this Brixton case that you are employing them?” I asked.
            </TextNode>

            <TextNode>
              “Yes; there is a point which I wish to ascertain. It is merely a
              matter of time. Hullo! we are going to hear some news now with a
              vengeance! Here is Gregson coming down the road with beatitude
              written upon every feature of his face. Bound for us, I know. Yes,
              he is stopping. There he is!”
            </TextNode>

            <TextNode>
              There was a violent peal at the bell, and in a few seconds the
              fair-haired detective came up the stairs, three steps at a time,
              and burst into our sitting-room.
            </TextNode>

            <TextNode>
              “My dear fellow,” he cried, wringing Holmes' unresponsive hand,
              “congratulate me! I have made the whole thing as clear as day.”
            </TextNode>

            <TextNode>
              A shade of anxiety seemed to me to cross my companion's expressive
              face.
            </TextNode>

            <TextNode>
              “Do you mean that you are on the right track?” he asked.
            </TextNode>

            <TextNode>
              “The right track! Why, sir, we have the man under lock and key.”
            </TextNode>

            <TextNode>“And his name is?”</TextNode>

            <TextNode>
              “Arthur Charpentier, sub-lieutenant in Her Majesty's navy,” cried
              Gregson, pompously, rubbing his fat hands and inflating his chest.
            </TextNode>

            <TextNode>
              Sherlock Holmes gave a sigh of relief, and relaxed into a smile.
            </TextNode>

            <TextNode>
              “Take a seat, and try one of these cigars,” he said. “We are
              anxious to know how you managed it. Will you have some whiskey and
              water?”
            </TextNode>

            <TextNode>
              “I don't mind if I do,” the detective answered. “The tremendous
              exertions which I have gone through during the last day or two
              have worn me out. Not so much bodily exertion, you understand, as
              the strain upon the mind. You will appreciate that, Mr. Sherlock
              Holmes, for we are both brain-workers.”
            </TextNode>

            <TextNode>
              “You do me too much honour,” said Holmes, gravely. “Let us hear
              how you arrived at this most gratifying result.”
            </TextNode>

            <TextNode>
              The detective seated himself in the arm-chair, and puffed
              complacently at his cigar. Then suddenly he slapped his thigh in a
              paroxysm of amusement.
            </TextNode>

            <TextNode>
              “The fun of it is,” he cried, “that that fool Lestrade, who thinks
              himself so smart, has gone off upon the wrong track altogether. He
              is after the secretary Stangerson, who had no more to do with the
              crime than the babe unborn. I have no doubt that he has caught him
              by this time.”
            </TextNode>

            <TextNode>
              The idea tickled Gregson so much that he laughed until he choked.
            </TextNode>

            <TextNode>“And how did you get your clue?”</TextNode>

            <TextNode>
              “Ah, I'll tell you all about it. Of course, Doctor Watson, this is
              strictly between ourselves. The first difficulty which we had to
              contend with was the finding of this American's antecedents. Some
              people would have waited until their advertisements were answered,
              or until parties came forward and volunteered information. That is
              not Tobias Gregson's way of going to work. You remember the hat
              beside the dead man?”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page17;

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

function Page246({
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
      <BookMainContainer biggerTopPadding>
        <H4>
          Chapter IV.
          <br />
          Darkness
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              At three in the morning the chief Sussex detective, obeying the
              urgent call from Sergeant Wilson of Birlstone, arrived from
              headquarters in a light dog-cart behind a breathless trotter. By
              the five-forty train in the morning he had sent his message to
              Scotland Yard, and he was at the Birlstone station at twelve
              o'clock to welcome us. White Mason was a quiet,
              comfortable-looking person in a loose tweed suit, with a
              clean-shaved, ruddy face, a stoutish body, and powerful bandy legs
              adorned with gaiters, looking like a small farmer, a retired
              gamekeeper, or anything upon earth except a very favourable
              specimen of the provincial criminal officer.
            </TextNode>

            <TextNode>
              “A real downright snorter, Mr. MacDonald!” he kept repeating.
              “We'll have the pressmen down like flies when they understand it.
              I'm hoping we will get our work done before they get poking their
              noses into it and messing up all the trails. There has been
              nothing like this that I can remember. There are some bits that
              will come home to you, Mr. Holmes, or I am mistaken. And you also,
              Dr. Watson; for the medicos will have a word to say before we
              finish. Your room is at the Westville Arms. There's no other
              place; but I hear that it is clean and good. The man will carry
              your bags. This way, gentlemen, if you please.”
            </TextNode>

            <TextNode>
              He was a very bustling and genial person, this Sussex detective.
              In ten minutes we had all found our quarters. In ten more we were
              seated in the parlour of the inn and being treated to a rapid
              sketch of those events which have been outlined in the previous
              chapter. MacDonald made an occasional note, while Holmes sat
              absorbed, with the expression of surprised and reverent admiration
              with which the botanist surveys the rare and precious bloom.
            </TextNode>

            <TextNode>
              “Remarkable!” he said, when the story was unfolded, “most
              remarkable! I can hardly recall any case where the features have
              been more peculiar.”
            </TextNode>

            <TextNode>
              “I thought you would say so, Mr. Holmes,” said White Mason in
              great delight. “We're well up with the times in Sussex. I've told
              you now how matters were, up to the time when I took over from
              Sergeant Wilson between three and four this morning. My word! I
              made the old mare go! But I need not have been in such a hurry, as
              it turned out; for there was nothing immediate that I could do.
              Sergeant Wilson had all the facts. I checked them and considered
              them and maybe added a few of my own.”
            </TextNode>

            <TextNode>“What were they?” asked Holmes eagerly.</TextNode>

            <TextNode>
              “Well, I first had the hammer examined. There was Dr. Wood there
              to help me. We found no signs of violence upon it. I was hoping
              that if Mr. Douglas defended himself with the hammer, he might
              have left his mark upon the murderer before he dropped it on the
              mat. But there was no stain.”
            </TextNode>

            <TextNode>
              “That, of course, proves nothing at all,” remarked Inspector
              MacDonald. “There has been many a hammer murder and no trace on
              the hammer.”
            </TextNode>

            <TextNode>
              “Quite so. It doesn't prove it wasn't used. But there might have
              been stains, and that would have helped us. As a matter of fact
              there were none. Then I examined the gun. They were buckshot
              cartridges, and, as Sergeant Wilson pointed out, the triggers were
              wired together so that, if you pulled on the hinder one, both
              barrels were discharged. Whoever fixed that up had made up his
              mind that he was going to take no chances of missing his man. The
              sawed gun was not more than two foot long—one could carry it
              easily under one's coat. There was no complete maker's name; but
              the printed letters P-E-N were on the fluting between the barrels,
              and the rest of the name had been cut off by the saw.”
            </TextNode>

            <TextNode>
              “A big P with a flourish above it, E and N smaller?” asked Holmes.
            </TextNode>

            <TextNode>“Exactly.”</TextNode>

            <TextNode>
              “Pennsylvania Small Arms Company—well-known American firm,” said
              Holmes.
            </TextNode>

            <TextNode>
              White Mason gazed at my friend as the little village practitioner
              looks at the Harley Street specialist who by a word can solve the
              difficulties that perplex him.
            </TextNode>

            <TextNode>
              “That is very helpful, Mr. Holmes. No doubt you are right.
              Wonderful! Wonderful! Do you carry the names of all the gun makers
              in the world in your memory?”
            </TextNode>

            <TextNode>Holmes dismissed the subject with a wave.</TextNode>

            <TextNode>
              “No doubt it is an American shotgun,” White Mason continued. “I
              seem to have read that a sawed-off shotgun is a weapon used in
              some parts of America. Apart from the name upon the barrel, the
              idea had occurred to me. There is some evidence then, that this
              man who entered the house and killed its master was an American.”
            </TextNode>

            <TextNode>
              MacDonald shook his head. “Man, you are surely travelling
              overfast,” said he. “I have heard no evidence yet that any
              stranger was ever in the house at all.”
            </TextNode>

            <TextNode>
              “The open window, the blood on the sill, the queer card, the marks
              of boots in the corner, the gun!”
            </TextNode>

            <TextNode>
              “Nothing there that could not have been arranged. Mr. Douglas was
              an American, or had lived long in America. So had Mr. Barker. You
              don't need to import an American from outside in order to account
              for American doings.”
            </TextNode>

            <TextNode>“Ames, the butler—”</TextNode>

            <TextNode>“What about him? Is he reliable?”</TextNode>

            <TextNode>
              “Ten years with Sir Charles Chandos—as solid as a rock. He has
              been with Douglas ever since he took the Manor House five years
              ago. He has never seen a gun of this sort in the house.”
            </TextNode>

            <TextNode>
              “The gun was made to conceal. That's why the barrels were sawed.
              It would fit into any box. How could he swear there was no such
              gun in the house?”
            </TextNode>

            <TextNode>“Well, anyhow, he had never seen one.”</TextNode>

            <TextNode>
              MacDonald shook his obstinate Scotch head. “I'm not convinced yet
              that there was ever anyone in the house,” said he. “I'm asking you
              to conseedar” (his accent became more Aberdonian as he lost
              himself in his argument) “I'm asking you to conseedar what it
              involves if you suppose that this gun was ever brought into the
              house, and that all these strange things were done by a person
              from outside. Oh, man, it's just inconceivable! It's clean against
              common sense! I put it to you, Mr. Holmes, judging it by what we
              have heard.”
            </TextNode>

            <TextNode>
              “Well, state your case, Mr. Mac,” said Holmes in his most judicial
              style.
            </TextNode>

            <TextNode>
              “The man is not a burglar, supposing that he ever existed. The
              ring business and the card point to premeditated murder for some
              private reason. Very good. Here is a man who slips into a house
              with the deliberate intention of committing murder. He knows, if
              he knows anything, that he will have a deeficulty in making his
              escape, as the house is surrounded with water. What weapon would
              he choose? You would say the most silent in the world. Then he
              could hope when the deed was done to slip quickly from the window,
              to wade the moat, and to get away at his leisure. That's
              understandable. But is it understandable that he should go out of
              his way to bring with him the most noisy weapon he could select,
              knowing well that it will fetch every human being in the house to
              the spot as quick as they can run, and that it is all odds that he
              will be seen before he can get across the moat? Is that credible,
              Mr. Holmes?”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Well, you put the case strongly,” my friend replied thoughtfully.
              “It certainly needs a good deal of justification. May I ask, Mr.
              White Mason, whether you examined the farther side of the moat at
              once to see if there were any signs of the man having climbed out
              from the water?”
            </TextNode>

            <TextNode>
              “There were no signs, Mr. Holmes. But it is a stone ledge, and one
              could hardly expect them.”
            </TextNode>

            <TextNode>“No tracks or marks?”</TextNode>

            <TextNode>“None.”</TextNode>

            <TextNode>
              “Ha! Would there be any objection, Mr. White Mason, to our going
              down to the house at once? There may possibly be some small point
              which might be suggestive.”
            </TextNode>

            <TextNode>
              “I was going to propose it, Mr. Holmes; but I thought it well to
              put you in touch with all the facts before we go. I suppose if
              anything should strike you—” White Mason looked doubtfully at the
              amateur.
            </TextNode>

            <TextNode>
              “I have worked with Mr. Holmes before,” said Inspector MacDonald.
              “He plays the game.”
            </TextNode>

            <TextNode>
              “My own idea of the game, at any rate,” said Holmes, with a smile.
              “I go into a case to help the ends of justice and the work of the
              police. If I have ever separated myself from the official force,
              it is because they have first separated themselves from me. I have
              no wish ever to score at their expense. At the same time, Mr.
              White Mason, I claim the right to work in my own way and give my
              results at my own time—complete rather than in stages.”
            </TextNode>

            <TextNode>
              “I am sure we are honoured by your presence and to show you all we
              know,” said White Mason cordially. “Come along, Dr. Watson, and
              when the time comes we'll all hope for a place in your book.”
            </TextNode>

            <TextNode>
              We walked down the quaint village street with a row of pollarded
              elms on each side of it. Just beyond were two ancient stone
              pillars, weather-stained and lichen-blotched bearing upon their
              summits a shapeless something which had once been the rampant lion
              of Capus of Birlstone. A short walk along the winding drive with
              such sward and oaks around it as one only sees in rural England,
              then a sudden turn, and the long, low Jacobean house of dingy,
              liver-coloured brick lay before us, with an old-fashioned garden
              of cut yews on each side of it. As we approached it, there was the
              wooden drawbridge and the beautiful broad moat as still and
              luminous as quicksilver in the cold, winter sunshine.
            </TextNode>

            <TextNode>
              Three centuries had flowed past the old Manor House, centuries of
              births and of homecomings, of country dances and of the meetings
              of fox hunters. Strange that now in its old age this dark business
              should have cast its shadow upon the venerable walls! And yet
              those strange, peaked roofs and quaint, overhung gables were a
              fitting covering to grim and terrible intrigue. As I looked at the
              deep-set windows and the long sweep of the dull-coloured,
              water-lapped front, I felt that no more fitting scene could be set
              for such a tragedy.
            </TextNode>

            <TextNode>
              “That's the window,” said White Mason, “that one on the immediate
              right of the drawbridge. It's open just as it was found last
              night.”
            </TextNode>

            <TextNode>“It looks rather narrow for a man to pass.”</TextNode>

            <TextNode>
              “Well, it wasn't a fat man, anyhow. We don't need your deductions,
              Mr. Holmes, to tell us that. But you or I could squeeze through
              all right.”
            </TextNode>

            <TextNode>
              Holmes walked to the edge of the moat and looked across. Then he
              examined the stone ledge and the grass border beyond it.
            </TextNode>

            <TextNode>
              “I've had a good look, Mr. Holmes,” said White Mason. “There is
              nothing there, no sign that anyone has landed—but why should he
              leave any sign?”
            </TextNode>

            <TextNode>
              “Exactly. Why should he? Is the water always turbid?”
            </TextNode>

            <TextNode>
              “Generally about this colour. The stream brings down the clay.”
            </TextNode>

            <TextNode>“How deep is it?”</TextNode>

            <TextNode>
              “About two feet at each side and three in the middle.”
            </TextNode>

            <TextNode>
              “So we can put aside all idea of the man having been drowned in
              crossing.”
            </TextNode>

            <TextNode>“No, a child could not be drowned in it.”</TextNode>

            <TextNode>
              We walked across the drawbridge, and were admitted by a quaint,
              gnarled, dried-up person, who was the butler, Ames. The poor old
              fellow was white and quivering from the shock. The village
              sergeant, a tall, formal, melancholy man, still held his vigil in
              the room of Fate. The doctor had departed.
            </TextNode>

            <TextNode>
              “Anything fresh, Sergeant Wilson?” asked White Mason.
            </TextNode>

            <TextNode>“No, sir.”</TextNode>

            <TextNode>
              “Then you can go home. You've had enough. We can send for you if
              we want you. The butler had better wait outside. Tell him to warn
              Mr. Cecil Barker, Mrs. Douglas, and the housekeeper that we may
              want a word with them presently. Now, gentlemen, perhaps you will
              allow me to give you the views I have formed first, and then you
              will be able to arrive at your own.”
            </TextNode>

            <TextNode>
              He impressed me, this country specialist. He had a solid grip of
              fact and a cool, clear, common-sense brain, which should take him
              some way in his profession. Holmes listened to him intently, with
              no sign of that impatience which the official exponent too often
              produced.
            </TextNode>

            <TextNode>
              “Is it suicide, or is it murder—that's our first question,
              gentlemen, is it not? If it were suicide, then we have to believe
              that this man began by taking off his wedding ring and concealing
              it; that he then came down here in his dressing gown, trampled mud
              into a corner behind the curtain in order to give the idea someone
              had waited for him, opened the window, put blood on the—”
            </TextNode>

            <TextNode>“We can surely dismiss that,” said MacDonald.</TextNode>

            <TextNode>
              “So I think. Suicide is out of the question. Then a murder has
              been done. What we have to determine is, whether it was done by
              someone outside or inside the house.”
            </TextNode>

            <TextNode>“Well, let's hear the argument.”</TextNode>

            <TextNode>
              “There are considerable difficulties both ways, and yet one or the
              other it must be. We will suppose first that some person or
              persons inside the house did the crime. They got this man down
              here at a time when everything was still and yet no one was
              asleep. They then did the deed with the queerest and noisiest
              weapon in the world so as to tell everyone what had happened—a
              weapon that was never seen in the house before. That does not seem
              a very likely start, does it?”
            </TextNode>

            <TextNode>“No, it does not.”</TextNode>

            <TextNode>
              “Well, then, everyone is agreed that after the alarm was given
              only a minute at the most had passed before the whole
              household—not Mr. Cecil Barker alone, though he claims to have
              been the first, but Ames and all of them were on the spot. Do you
              tell me that in that time the guilty person managed to make
              footmarks in the corner, open the window, mark the sill with
              blood, take the wedding ring off the dead man's finger, and all
              the rest of it? It's impossible!”
            </TextNode>

            <TextNode>
              “You put it very clearly,” said Holmes. “I am inclined to agree
              with you.”
            </TextNode>

            <TextNode>
              “Well, then, we are driven back to the theory that it was done by
              someone from outside. We are still faced with some big
              difficulties; but anyhow they have ceased to be impossibilities.
              The man got into the house between four-thirty and six; that is to
              say, between dusk and the time when the bridge was raised. There
              had been some visitors, and the door was open; so there was
              nothing to prevent him. He may have been a common burglar, or he
              may have had some private grudge against Mr. Douglas. Since Mr.
              Douglas has spent most of his life in America, and this shotgun
              seems to be an American weapon, it would seem that the private
              grudge is the more likely theory. He slipped into this room
              because it was the first he came to, and he hid behind the
              curtain. There he remained until past eleven at night. At that
              time Mr. Douglas entered the room. It was a short interview, if
              there were any interview at all; for Mrs. Douglas declares that
              her husband had not left her more than a few minutes when she
              heard the shot.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page246;

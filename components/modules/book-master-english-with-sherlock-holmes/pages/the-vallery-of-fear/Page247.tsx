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

function Page247({
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
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“The candle shows that,” said Holmes.</TextNode>

            <TextNode>
              “Exactly. The candle, which was a new one, is not burned more than
              half an inch. He must have placed it on the table before he was
              attacked; otherwise, of course, it would have fallen when he fell.
              This shows that he was not attacked the instant that he entered
              the room. When Mr. Barker arrived the candle was lit and the lamp
              was out.”
            </TextNode>

            <TextNode>“That's all clear enough.”</TextNode>

            <TextNode>
              “Well, now, we can reconstruct things on those lines. Mr. Douglas
              enters the room. He puts down the candle. A man appears from
              behind the curtain. He is armed with this gun. He demands the
              wedding ring—Heaven only knows why, but so it must have been. Mr.
              Douglas gave it up. Then either in cold blood or in the course of
              a struggle—Douglas may have gripped the hammer that was found upon
              the mat—he shot Douglas in this horrible way. He dropped his gun
              and also it would seem this queer card—V. V. 341, whatever that
              may mean—and he made his escape through the window and across the
              moat at the very moment when Cecil Barker was discovering the
              crime. How's that, Mr. Holmes?”
            </TextNode>

            <TextNode>
              “Very interesting, but just a little unconvincing.”
            </TextNode>

            <TextNode>
              “Man, it would be absolute nonsense if it wasn't that anything
              else is even worse!” cried MacDonald. “Somebody killed the man,
              and whoever it was I could clearly prove to you that he should
              have done it some other way. What does he mean by allowing his
              retreat to be cut off like that? What does he mean by using a
              shotgun when silence was his one chance of escape? Come, Mr.
              Holmes, it's up to you to give us a lead, since you say Mr. White
              Mason's theory is unconvincing.”
            </TextNode>

            <TextNode>
              Holmes had sat intently observant during this long discussion,
              missing no word that was said, with his keen eyes darting to right
              and to left, and his forehead wrinkled with speculation.
            </TextNode>

            <TextNode>
              “I should like a few more facts before I get so far as a theory,
              Mr. Mac,” said he, kneeling down beside the body. “Dear me! these
              injuries are really appalling. Can we have the butler in for a
              moment? … Ames, I understand that you have often seen this very
              unusual mark—a branded triangle inside a circle—upon Mr. Douglas's
              forearm?”
            </TextNode>

            <TextNode>“Frequently, sir.”</TextNode>

            <TextNode>
              “You never heard any speculation as to what it meant?”
            </TextNode>

            <TextNode>“No, sir.”</TextNode>

            <TextNode>
              “It must have caused great pain when it was inflicted. It is
              undoubtedly a burn. Now, I observe, Ames, that there is a small
              piece of plaster at the angle of Mr. Douglas's jaw. Did you
              observe that in life?”
            </TextNode>

            <TextNode>
              “Yes, sir, he cut himself in shaving yesterday morning.”
            </TextNode>

            <TextNode>
              “Did you ever know him to cut himself in shaving before?”
            </TextNode>

            <TextNode>“Not for a very long time, sir.”</TextNode>

            <TextNode>
              “Suggestive!” said Holmes. “It may, of course, be a mere
              coincidence, or it may point to some nervousness which would
              indicate that he had reason to apprehend danger. Had you noticed
              anything unusual in his conduct, yesterday, Ames?”
            </TextNode>

            <TextNode>
              “It struck me that he was a little restless and excited, sir.”
            </TextNode>

            <TextNode>
              “Ha! The attack may not have been entirely unexpected. We do seem
              to make a little progress, do we not? Perhaps you would rather do
              the questioning, Mr. Mac?”
            </TextNode>

            <TextNode>
              “No, Mr. Holmes, it's in better hands than mine.”
            </TextNode>

            <TextNode>
              “Well, then, we will pass to this card—V. V. 341. It is rough
              cardboard. Have you any of the sort in the house?”
            </TextNode>

            <TextNode>“I don't think so.”</TextNode>

            <TextNode>
              Holmes walked across to the desk and dabbed a little ink from each
              bottle on to the blotting paper. “It was not printed in this
              room,” he said; “this is black ink and the other purplish. It was
              done by a thick pen, and these are fine. No, it was done
              elsewhere, I should say. Can you make anything of the inscription,
              Ames?”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“No, sir, nothing.”</TextNode>

            <TextNode>“What do you think, Mr. Mac?”</TextNode>

            <TextNode>
              “It gives me the impression of a secret society of some sort; the
              same with his badge upon the forearm.”
            </TextNode>

            <TextNode>“That's my idea, too,” said White Mason.</TextNode>

            <TextNode>
              “Well, we can adopt it as a working hypothesis and then see how
              far our difficulties disappear. An agent from such a society makes
              his way into the house, waits for Mr. Douglas, blows his head
              nearly off with this weapon, and escapes by wading the moat, after
              leaving a card beside the dead man, which will when mentioned in
              the papers, tell other members of the society that vengeance has
              been done. That all hangs together. But why this gun, of all
              weapons?”
            </TextNode>

            <TextNode>“Exactly.”</TextNode>

            <TextNode>“And why the missing ring?”</TextNode>

            <TextNode>“Quite so.”</TextNode>

            <TextNode>
              “And why no arrest? It's past two now. I take it for granted that
              since dawn every constable within forty miles has been looking out
              for a wet stranger?”
            </TextNode>

            <TextNode>“That is so, Mr. Holmes.”</TextNode>

            <TextNode>
              “Well, unless he has a burrow close by or a change of clothes
              ready, they can hardly miss him. And yet they have missed him up
              to now!” Holmes had gone to the window and was examining with his
              lens the blood mark on the sill. “It is clearly the tread of a
              shoe. It is remarkably broad; a splay-foot, one would say.
              Curious, because, so far as one can trace any footmark in this
              mud-stained corner, one would say it was a more shapely sole.
              However, they are certainly very indistinct. What's this under the
              side table?”
            </TextNode>

            <TextNode>“Mr. Douglas's dumb-bells,” said Ames.</TextNode>

            <TextNode>
              “Dumb-bell—there's only one. Where's the other?”
            </TextNode>

            <TextNode>
              “I don't know, Mr. Holmes. There may have been only one. I have
              not noticed them for months.”
            </TextNode>

            <TextNode>
              “One dumb-bell—” Holmes said seriously; but his remarks were
              interrupted by a sharp knock at the door.
            </TextNode>

            <TextNode>
              A tall, sunburned, capable-looking, clean-shaved man looked in at
              us. I had no difficulty in guessing that it was the Cecil Barker
              of whom I had heard. His masterful eyes travelled quickly with a
              questioning glance from face to face.
            </TextNode>

            <TextNode>
              “Sorry to interrupt your consultation,” said he, “but you should
              hear the latest news.”
            </TextNode>

            <TextNode>“An arrest?”</TextNode>

            <TextNode>
              “No such luck. But they've found his bicycle. The fellow left his
              bicycle behind him. Come and have a look. It is within a hundred
              yards of the hall door.”
            </TextNode>

            <TextNode>
              We found three or four grooms and idlers standing in the drive
              inspecting a bicycle which had been drawn out from a clump of
              evergreens in which it had been concealed. It was a well used
              Rudge-Whitworth, splashed as from a considerable journey. There
              was a saddlebag with spanner and oilcan, but no clue as to the
              owner.
            </TextNode>

            <TextNode>
              “It would be a grand help to the police,” said the inspector, “if
              these things were numbered and registered. But we must be thankful
              for what we've got. If we can't find where he went to, at least we
              are likely to get where he came from. But what in the name of all
              that is wonderful made the fellow leave it behind? And how in the
              world has he got away without it? We don't seem to get a gleam of
              light in the case, Mr. Holmes.”
            </TextNode>

            <TextNode>
              “Don't we?” my friend answered thoughtfully. “I wonder!”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page247;

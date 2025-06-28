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

function Page269({
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
          Chapter VIII.
          <br />
          Epilogue
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              The police trial had passed, in which the case of John Douglas was
              referred to a higher court. So had the Quarter Sessions, at which
              he was acquitted as having acted in self-defense.
            </TextNode>

            <TextNode>
              “Get him out of England at any cost,” wrote Holmes to the wife.
              “There are forces here which may be more dangerous than those he
              has escaped. There is no safety for your husband in England.”
            </TextNode>

            <TextNode>
              Two months had gone by, and the case had to some extent passed
              from our minds. Then one morning there came an enigmatic note
              slipped into our letter box. “Dear me, Mr. Holmes. Dear me!” said
              this singular epistle. There was neither superscription nor
              signature. I laughed at the quaint message; but Holmes showed
              unwonted seriousness.
            </TextNode>

            <TextNode>
              “Deviltry, Watson!” he remarked, and sat long with a clouded brow.
            </TextNode>

            <TextNode>
              Late last night Mrs. Hudson, our landlady, brought up a message
              that a gentleman wished to see Holmes, and that the matter was of
              the utmost importance. Close at the heels of his messenger came
              Cecil Barker, our friend of the moated Manor House. His face was
              drawn and haggard.
            </TextNode>

            <TextNode>
              “I've had bad news—terrible news, Mr. Holmes,” said he.
            </TextNode>

            <TextNode>“I feared as much,” said Holmes.</TextNode>

            <TextNode>“You have not had a cable, have you?”</TextNode>

            <TextNode>“I have had a note from someone who has.”</TextNode>

            <TextNode>
              “It's poor Douglas. They tell me his name is Edwards; but he will
              always be Jack Douglas of Benito Canyon to me. I told you that
              they started together for South Africa in the&nbsp;
              <span className='italic'>Palmyra</span> three weeks ago.”
            </TextNode>

            <TextNode>“Exactly.”</TextNode>

            <TextNode>
              “The ship reached Cape Town last night. I received this cable from
              Mrs. Douglas this morning:—
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “Jack has been lost overboard in gale off St. Helena. No one
                knows how accident occurred.
              </TextNode>

              <TextNode noIndent className='italic'>
                — “Ivy Douglas.”
              </TextNode>
            </Indent>

            <TextNode>
              “Ha! It came like that, did it?” said Holmes, thoughtfully. “Well,
              I've no doubt it was well stage-managed.”
            </TextNode>

            <TextNode>
              “You mean that you think there was no accident?”
            </TextNode>

            <TextNode>“None in the world.”</TextNode>

            <TextNode>“He was murdered?”</TextNode>

            <TextNode>“Surely!”</TextNode>

            <TextNode>
              “So I think also. These infernal Scowrers, this cursed vindictive
              nest of criminals—”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “No, no, my good sir,” said Holmes. “There is a master hand here.
              It is no case of sawed-off shot-guns and clumsy six-shooters. You
              can tell an old master by the sweep of his brush. I can tell a
              Moriarty when I see one. This crime is from London, not from
              America.”
            </TextNode>

            <TextNode>“But for what motive?”</TextNode>

            <TextNode>
              “Because it is done by a man who cannot afford to fail—one whose
              whole unique position depends upon the fact that all he does must
              succeed. A great brain and a huge organization have been turned to
              the extinction of one man. It is crushing the nut with the
              hammer—an absurd extravagance of energy—but the nut is very
              effectually crushed all the same.”
            </TextNode>

            <TextNode>
              “How came this man to have anything to do with it?”
            </TextNode>

            <TextNode>
              “I can only say that the first word that ever came to us of the
              business was from one of his lieutenants. These Americans were
              well advised. Having an English job to do, they took into
              partnership, as any foreign criminal could do, this great
              consultant in crime. From that moment their man was doomed. At
              first he would content himself by using his machinery in order to
              find their victim. Then he would indicate how the matter might be
              treated. Finally, when he read in the reports of the failure of
              this agent, he would step in himself with a master touch. You
              heard me warn this man at Birlstone Manor House that the coming
              danger was greater than the past. Was I right?”
            </TextNode>

            <TextNode>
              Barker beat his head with his clenched fist in his impotent anger.
            </TextNode>

            <TextNode>
              “Do you tell me that we have to sit down under this? Do you say
              that no one can ever get level with this king-devil?”
            </TextNode>

            <TextNode>
              “No, I don't say that,” said Holmes, and his eyes seemed to be
              looking far into the future. “I don't say that he can't be beat.
              But you must give me time—you must give me time!”
            </TextNode>

            <TextNode>
              We all sat in silence for some minutes, while those fateful eyes
              still strained to pierce the veil.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page269;

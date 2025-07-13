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

function Page220({
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
            <TextNode noIndent>“Who was the man?”</TextNode>

            <TextNode>“I have not an idea.”</TextNode>

            <TextNode>“A spy?”</TextNode>

            <TextNode>
              “Well, it was evident from what we have heard that Baskerville has
              been very closely shadowed by someone since he has been in town.
              How else could it be known so quickly that it was the
              Northumberland Hotel which he had chosen? If they had followed him
              the first day I argued that they would follow him also the second.
              You may have observed that I twice strolled over to the window
              while Dr. Mortimer was reading his legend.”
            </TextNode>

            <TextNode>“Yes, I remember.”</TextNode>

            <TextNode>
              “I was looking out for loiterers in the street, but I saw none. We
              are dealing with a clever man, Watson. This matter cuts very deep,
              and though I have not finally made up my mind whether it is a
              benevolent or a malevolent agency which is in touch with us, I am
              conscious always of power and design. When our friends left I at
              once followed them in the hopes of marking down their invisible
              attendant. So wily was he that he had not trusted himself upon
              foot, but he had availed himself of a cab so that he could loiter
              behind or dash past them and so escape their notice. His method
              had the additional advantage that if they were to take a cab he
              was all ready to follow them. It has, however, one obvious
              disadvantage.”
            </TextNode>

            <TextNode>“It puts him in the power of the cabman.”</TextNode>

            <TextNode>“Exactly.”</TextNode>

            <TextNode>“What a pity we did not get the number!”</TextNode>

            <TextNode>
              “My dear Watson, clumsy as I have been, you surely do not
              seriously imagine that I neglected to get the number? No. 2704 is
              our man. But that is no use to us for the moment.”
            </TextNode>

            <TextNode>“I fail to see how you could have done more.”</TextNode>

            <TextNode>
              “On observing the cab I should have instantly turned and walked in
              the other direction. I should then at my leisure have hired a
              second cab and followed the first at a respectful distance, or,
              better still, have driven to the Northumberland Hotel and waited
              there. When our unknown had followed Baskerville home we should
              have had the opportunity of playing his own game upon himself and
              seeing where he made for. As it is, by an indiscreet eagerness,
              which was taken advantage of with extraordinary quickness and
              energy by our opponent, we have betrayed ourselves and lost our
              man.”
            </TextNode>

            <TextNode>
              We had been sauntering slowly down Regent Street during this
              conversation, and Dr. Mortimer, with his companion, had long
              vanished in front of us.
            </TextNode>

            <TextNode>
              “There is no object in our following them,” said Holmes. “The
              shadow has departed and will not return. We must see what further
              cards we have in our hands and play them with decision. Could you
              swear to that man's face within the cab?”
            </TextNode>

            <TextNode>“I could swear only to the beard.”</TextNode>

            <TextNode>
              “And so could I—from which I gather that in all probability it was
              a false one. A clever man upon so delicate an errand has no use
              for a beard save to conceal his features. Come in here, Watson!”
            </TextNode>

            <TextNode>
              He turned into one of the district messenger offices, where he was
              warmly greeted by the manager.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Ah, Wilson, I see you have not forgotten the little case in which
              I had the good fortune to help you?”
            </TextNode>

            <TextNode>
              “No, sir, indeed I have not. You saved my good name, and perhaps
              my life.”
            </TextNode>

            <TextNode>
              “My dear fellow, you exaggerate. I have some recollection, Wilson,
              that you had among your boys a lad named Cartwright, who showed
              some ability during the investigation.”
            </TextNode>

            <TextNode>“Yes, sir, he is still with us.”</TextNode>
            <TextNode>
              “Could you ring him up?—thank you! And I should be glad to have
              change of this five-pound note.”
            </TextNode>

            <TextNode>
              A lad of fourteen, with a bright, keen face, had obeyed the
              summons of the manager. He stood now gazing with great reverence
              at the famous detective.
            </TextNode>

            <TextNode>
              “Let me have the Hotel Directory,” said Holmes. “Thank you! Now,
              Cartwright, there are the names of twenty-three hotels here, all
              in the immediate neighbourhood of Charing Cross. Do you see?”
            </TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>“You will visit each of these in turn.”</TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>
              “You will begin in each case by giving the outside porter one
              shilling. Here are twenty-three shillings.”
            </TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>
              “You will tell him that you want to see the waste-paper of
              yesterday. You will say that an important telegram has miscarried
              and that you are looking for it. You understand?”
            </TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>
              “But what you are really looking for is the centre page of&nbsp;
              <span className='italic'>The Times</span> with some holes cut in
              it with scissors. Here is a copy of&nbsp;
              <span className='italic'>The Times</span>. It is this page. You
              could easily recognize it, could you not?”
            </TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>
              “In each case the outside porter will send for the hall porter, to
              whom also you will give a shilling. Here are twenty-three
              shillings. You will then learn in possibly twenty cases out of the
              twenty-three that the waste of the day before has been burned or
              removed. In the three other cases you will be shown a heap of
              paper and you will look for this page of&nbsp;
              <span className='italic'>The Times</span> among it. The odds are
              enormously against your finding it. There are ten shillings over
              in case of emergencies. Let me have a report by wire at Baker
              Street before evening. And now, Watson, it only remains for us to
              find out by wire the identity of the cabman, No. 2704, and then we
              will drop into one of the Bond Street picture galleries and fill
              in the time until we are due at the hotel.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page220;

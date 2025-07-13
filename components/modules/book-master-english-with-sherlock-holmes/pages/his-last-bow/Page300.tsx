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

function Page300({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title="THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;DEVIL'S&nbsp;FOOT"
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>Sterndale sprang to his feet.</TextNode>

            <TextNode>
              “I believe that you are the devil himself!” he cried.
            </TextNode>

            <TextNode>
              Holmes smiled at the compliment. “It took two, or possibly three,
              handfuls before the lodger came to the window. You beckoned him to
              come down. He dressed hurriedly and descended to his sitting-room.
              You entered by the window. There was an interview—a short
              one—during which you walked up and down the room. Then you passed
              out and closed the window, standing on the lawn outside smoking a
              cigar and watching what occurred. Finally, after the death of
              Tregennis, you withdrew as you had come. Now, Dr. Sterndale, how
              do you justify such conduct, and what were the motives for your
              actions? If you prevaricate or trifle with me, I give you my
              assurance that the matter will pass out of my hands forever.”
            </TextNode>

            <TextNode>
              Our visitor's face had turned ashen gray as he listened to the
              words of his accuser. Now he sat for some time in thought with his
              face sunk in his hands. Then with a sudden impulsive gesture he
              plucked a photograph from his breast-pocket and threw it on the
              rustic table before us.
            </TextNode>

            <TextNode>“That is why I have done it,” said he.</TextNode>

            <TextNode>
              It showed the bust and face of a very beautiful woman. Holmes
              stooped over it.
            </TextNode>

            <TextNode>“Brenda Tregennis,” said he.</TextNode>

            <TextNode>
              “Yes, Brenda Tregennis,” repeated our visitor. “For years I have
              loved her. For years she has loved me. There is the secret of that
              Cornish seclusion which people have marvelled at. It has brought
              me close to the one thing on earth that was dear to me. I could
              not marry her, for I have a wife who has left me for years and yet
              whom, by the deplorable laws of England, I could not divorce. For
              years Brenda waited. For years I waited. And this is what we have
              waited for.” A terrible sob shook his great frame, and he clutched
              his throat under his brindled beard. Then with an effort he
              mastered himself and spoke on:
            </TextNode>

            <TextNode>
              “The vicar knew. He was in our confidence. He would tell you that
              she was an angel upon earth. That was why he telegraphed to me and
              I returned. What was my baggage or Africa to me when I learned
              that such a fate had come upon my darling? There you have the
              missing clue to my action, Mr. Holmes.”
            </TextNode>

            <TextNode>“Proceed,” said my friend.</TextNode>

            <TextNode>
              Dr. Sterndale drew from his pocket a paper packet and laid it upon
              the table. On the outside was written “Radix pedis diaboli” with a
              red poison label beneath it. He pushed it towards me. “I
              understand that you are a doctor, sir. Have you ever heard of this
              preparation?”
            </TextNode>

            <TextNode>
              “Devil's-foot root! No, I have never heard of it.”
            </TextNode>

            <TextNode>
              “It is no reflection upon your professional knowledge,” said he,
              “for I believe that, save for one sample in a laboratory at Buda,
              there is no other specimen in Europe. It has not yet found its way
              either into the pharmacopoeia or into the literature of
              toxicology. The root is shaped like a foot, half human, half
              goatlike; hence the fanciful name given by a botanical missionary.
              It is used as an ordeal poison by the medicine-men in certain
              districts of West Africa and is kept as a secret among them. This
              particular specimen I obtained under very extraordinary
              circumstances in the Ubangi country.” He opened the paper as he
              spoke and disclosed a heap of reddish-brown, snuff-like powder.
            </TextNode>

            <TextNode>“Well, sir?” asked Holmes sternly.</TextNode>

            <TextNode>
              “I am about to tell you, Mr. Holmes, all that actually occurred,
              for you already know so much that it is clearly to my interest
              that you should know all. I have already explained the
              relationship in which I stood to the Tregennis family. For the
              sake of the sister I was friendly with the brothers. There was a
              family quarrel about money which estranged this man Mortimer, but
              it was supposed to be made up, and I afterwards met him as I did
              the others. He was a sly, subtle, scheming man, and several things
              arose which gave me a suspicion of him, but I had no cause for any
              positive quarrel.
            </TextNode>

            <TextNode>
              “One day, only a couple of weeks ago, he came down to my cottage
              and I showed him some of my African curiosities. Among other
              things I exhibited this powder, and I told him of its strange
              properties, how it stimulates those brain centres which control
              the emotion of fear, and how either madness or death is the fate
              of the unhappy native who is subjected to the ordeal by the priest
              of his tribe. I told him also how powerless European science would
              be to detect it. How he took it I cannot say, for I never left the
              room, but there is no doubt that it was then, while I was opening
              cabinets and stooping to boxes, that he managed to abstract some
              of the devil's-foot root. I well remember how he plied me with
              questions as to the amount and the time that was needed for its
              effect, but I little dreamed that he could have a personal reason
              for asking.
            </TextNode>

            <TextNode>
              “I thought no more of the matter until the vicar's telegram
              reached me at Plymouth. This villain had thought that I would be
              at sea before the news could reach me, and that I should be lost
              for years in Africa. But I returned at once. Of course, I could
              not listen to the details without feeling assured that my poison
              had been used. I came round to see you on the chance that some
              other explanation had suggested itself to you. But there could be
              none. I was convinced that Mortimer Tregennis was the murderer;
              that for the sake of money, and with the idea, perhaps, that if
              the other members of his family were all insane he would be the
              sole guardian of their joint property, he had used the
              devil's-foot powder upon them, driven two of them out of their
              senses, and killed his sister Brenda, the one human being whom I
              have ever loved or who has ever loved me. There was his crime;
              what was to be his punishment?
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Should I appeal to the law? Where were my proofs? I knew that the
              facts were true, but could I help to make a jury of countrymen
              believe so fantastic a story? I might or I might not. But I could
              not afford to fail. My soul cried out for revenge. I have said to
              you once before, Mr. Holmes, that I have spent much of my life
              outside the law, and that I have come at last to be a law to
              myself. So it was even now. I determined that the fate which he
              had given to others should be shared by himself. Either that or I
              would do justice upon him with my own hand. In all England there
              can be no man who sets less value upon his own life than I do at
              the present moment.
            </TextNode>

            <TextNode>
              “Now I have told you all. You have yourself supplied the rest. I
              did, as you say, after a restless night, set off early from my
              cottage. I foresaw the difficulty of arousing him, so I gathered
              some gravel from the pile which you have mentioned, and I used it
              to throw up to his window. He came down and admitted me through
              the window of the sitting-room. I laid his offence before him. I
              told him that I had come both as judge and executioner. The wretch
              sank into a chair, paralyzed at the sight of my revolver. I lit
              the lamp, put the powder above it, and stood outside the window,
              ready to carry out my threat to shoot him should he try to leave
              the room. In five minutes he died. My God! how he died! But my
              heart was flint, for he endured nothing which my innocent darling
              had not felt before him. There is my story, Mr. Holmes. Perhaps,
              if you loved a woman, you would have done as much yourself. At any
              rate, I am in your hands. You can take what steps you like. As I
              have already said, there is no man living who can fear death less
              than I do.”
            </TextNode>

            <TextNode>Holmes sat for some little time in silence.</TextNode>

            <TextNode>“What were your plans?” he asked at last.</TextNode>

            <TextNode>
              “I had intended to bury myself in central Africa. My work there is
              but half finished.”
            </TextNode>

            <TextNode>
              “Go and do the other half,” said Holmes. “I, at least, am not
              prepared to prevent you.”
            </TextNode>

            <TextNode>
              Dr. Sterndale raised his giant figure, bowed gravely, and walked
              from the arbour. Holmes lit his pipe and handed me his pouch.
            </TextNode>

            <TextNode>
              “Some fumes which are not poisonous would be a welcome change,”
              said he. “I think you must agree, Watson, that it is not a case in
              which we are called upon to interfere. Our investigation has been
              independent, and our action shall be so also. You would not
              denounce the man?”
            </TextNode>

            <TextNode>“Certainly not,” I answered.</TextNode>

            <TextNode>
              “I have never loved, Watson, but if I did and if the woman I loved
              had met such an end, I might act even as our lawless lion-hunter
              has done. Who knows? Well, Watson, I will not offend your
              intelligence by explaining what is obvious. The gravel upon the
              window-sill was, of course, the starting-point of my research. It
              was unlike anything in the vicarage garden. Only when my attention
              had been drawn to Dr. Sterndale and his cottage did I find its
              counterpart. The lamp shining in broad daylight and the remains of
              powder upon the shield were successive links in a fairly obvious
              chain. And now, my dear Watson, I think we may dismiss the matter
              from our mind and go back with a clear conscience to the study of
              those Chaldean roots which are surely to be traced in the Cornish
              branch of the great Celtic speech.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page300;

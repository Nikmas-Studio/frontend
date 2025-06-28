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

function Page288({
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
              “It seems to me perfectly clear,” said Lestrade. “I have no doubt
              at all as to what occurred. He took the papers to sell them. He
              saw the agent. They could not agree as to price. He started home
              again, but the agent went with him. In the train the agent
              murdered him, took the more essential papers, and threw his body
              from the carriage. That would account for everything, would it
              not?”
            </TextNode>

            <TextNode>“Why had he no ticket?”</TextNode>

            <TextNode>
              “The ticket would have shown which station was nearest the agent's
              house. Therefore he took it from the murdered man's pocket.”
            </TextNode>

            <TextNode>
              “Good, Lestrade, very good,” said Holmes. “Your theory holds
              together. But if this is true, then the case is at an end. On the
              one hand, the traitor is dead. On the other, the plans of the
              Bruce-Partington submarine are presumably already on the
              Continent. What is there for us to do?”
            </TextNode>

            <TextNode>
              “To act, Sherlock—to act!” cried Mycroft, springing to his feet.
              “All my instincts are against this explanation. Use your powers!
              Go to the scene of the crime! See the people concerned! Leave no
              stone unturned! In all your career you have never had so great a
              chance of serving your country.”
            </TextNode>

            <TextNode>
              “Well, well!” said Holmes, shrugging his shoulders. “Come, Watson!
              And you, Lestrade, could you favour us with your company for an
              hour or two? We will begin our investigation by a visit to Aldgate
              Station. Good-bye, Mycroft. I shall let you have a report before
              evening, but I warn you in advance that you have little to
              expect.”
            </TextNode>

            <TextNode>
              An hour later Holmes, Lestrade and I stood upon the Underground
              railroad at the point where it emerges from the tunnel immediately
              before Aldgate Station. A courteous red-faced old gentleman
              represented the railway company.
            </TextNode>

            <TextNode>
              “This is where the young man's body lay,” said he, indicating a
              spot about three feet from the metals. “It could not have fallen
              from above, for these, as you see, are all blank walls. Therefore,
              it could only have come from a train, and that train, so far as we
              can trace it, must have passed about midnight on Monday.”
            </TextNode>

            <TextNode>
              “Have the carriages been examined for any sign of violence?”
            </TextNode>

            <TextNode>
              “There are no such signs, and no ticket has been found.”
            </TextNode>

            <TextNode>“No record of a door being found open?”</TextNode>

            <TextNode>“None.”</TextNode>

            <TextNode>
              “We have had some fresh evidence this morning,” said Lestrade. “A
              passenger who passed Aldgate in an ordinary Metropolitan train
              about 11.40 on Monday night declares that he heard a heavy thud,
              as of a body striking the line, just before the train reached the
              station. There was dense fog, however, and nothing could be seen.
              He made no report of it at the time. Why, whatever is the matter
              with Mr. Holmes?”
            </TextNode>

            <TextNode>
              My friend was standing with an expression of strained intensity
              upon his face, staring at the railway metals where they curved out
              of the tunnel. Aldgate is a junction, and there was a network of
              points. On these his eager, questioning eyes were fixed, and I saw
              on his keen, alert face that tightening of the lips, that quiver
              of the nostrils, and concentration of the heavy, tufted brows
              which I knew so well.
            </TextNode>

            <TextNode>“Points,” he muttered; “the points.”</TextNode>

            <TextNode>“What of it? What do you mean?”</TextNode>

            <TextNode>
              “I suppose there are no great number of points on a system such as
              this?”
            </TextNode>

            <TextNode>“No; they are very few.”</TextNode>

            <TextNode>
              “And a curve, too. Points, and a curve. By Jove! if it were only
              so.”
            </TextNode>

            <TextNode>“What is it, Mr. Holmes? Have you a clue?”</TextNode>

            <TextNode>
              “An idea—an indication, no more. But the case certainly grows in
              interest. Unique, perfectly unique, and yet why not? I do not see
              any indications of bleeding on the line.”
            </TextNode>

            <TextNode>“There were hardly any.”</TextNode>

            <TextNode>
              “But I understand that there was a considerable wound.”
            </TextNode>

            <TextNode>
              “The bone was crushed, but there was no great external injury.”
            </TextNode>

            <TextNode>
              “And yet one would have expected some bleeding. Would it be
              possible for me to inspect the train which contained the passenger
              who heard the thud of a fall in the fog?”
            </TextNode>

            <TextNode>
              “I fear not, Mr. Holmes. The train has been broken up before now,
              and the carriages redistributed.”
            </TextNode>

            <TextNode>
              “I can assure you, Mr. Holmes,” said Lestrade, “that every
              carriage has been carefully examined. I saw to it myself.”
            </TextNode>

            <TextNode>
              It was one of my friend's most obvious weaknesses that he was
              impatient with less alert intelligences than his own.
            </TextNode>

            <TextNode>
              “Very likely,” said he, turning away. “As it happens, it was not
              the carriages which I desired to examine. Watson, we have done all
              we can here. We need not trouble you any further, Mr. Lestrade. I
              think our investigations must now carry us to Woolwich.”
            </TextNode>

            <TextNode>
              At London Bridge, Holmes wrote a telegram to his brother, which he
              handed to me before dispatching it. It ran thus:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                See some light in the darkness, but it may possibly flicker out.
                Meanwhile, please send by messenger, to await return at Baker
                Street, a complete list of all foreign spies or international
                agents known to be in England, with full address.
              </TextNode>

              <TextNode noIndent className='italic'>
                — Sherlock.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “That should be helpful, Watson,” he remarked as we took our seats
              in the Woolwich train. “We certainly owe Brother Mycroft a debt
              for having introduced us to what promises to be a really very
              remarkable case.”
            </TextNode>

            <TextNode>
              His eager face still wore that expression of intense and
              high-strung energy, which showed me that some novel and suggestive
              circumstance had opened up a stimulating line of thought. See the
              foxhound with hanging ears and drooping tail as it lolls about the
              kennels, and compare it with the same hound as, with gleaming eyes
              and straining muscles, it runs upon a breast-high scent—such was
              the change in Holmes since the morning. He was a different man
              from the limp and lounging figure in the mouse-coloured
              dressing-gown who had prowled so restlessly only a few hours
              before round the fog-girt room.
            </TextNode>

            <TextNode>
              “There is material here. There is scope,” said he. “I am dull
              indeed not to have understood its possibilities.”
            </TextNode>

            <TextNode>“Even now they are dark to me.”</TextNode>

            <TextNode>
              “The end is dark to me also, but I have hold of one idea which may
              lead us far. The man met his death elsewhere, and his body was on
              the roof of a carriage.”
            </TextNode>

            <TextNode>“On the roof!”</TextNode>

            <TextNode>
              “Remarkable, is it not? But consider the facts. Is it a
              coincidence that it is found at the very point where the train
              pitches and sways as it comes round on the points? Is not that the
              place where an object upon the roof might be expected to fall off?
              The points would affect no object inside the train. Either the
              body fell from the roof, or a very curious coincidence has
              occurred. But now consider the question of the blood. Of course,
              there was no bleeding on the line if the body had bled elsewhere.
              Each fact is suggestive in itself. Together they have a cumulative
              force.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“And the ticket, too!” I cried.</TextNode>

            <TextNode>
              “Exactly. We could not explain the absence of a ticket. This would
              explain it. Everything fits together.”
            </TextNode>

            <TextNode>
              “But suppose it were so, we are still as far as ever from
              unravelling the mystery of his death. Indeed, it becomes not
              simpler but stranger.”
            </TextNode>

            <TextNode>
              “Perhaps,” said Holmes, thoughtfully, “perhaps.” He relapsed into
              a silent reverie, which lasted until the slow train drew up at
              last in Woolwich Station. There he called a cab and drew Mycroft's
              paper from his pocket.
            </TextNode>

            <TextNode>
              “We have quite a little round of afternoon calls to make,” said
              he. “I think that Sir James Walter claims our first attention.”
            </TextNode>

            <TextNode>
              The house of the famous official was a fine villa with green lawns
              stretching down to the Thames. As we reached it the fog was
              lifting, and a thin, watery sunshine was breaking through. A
              butler answered our ring.
            </TextNode>

            <TextNode>
              “Sir James, sir!” said he with solemn face. “Sir James died this
              morning.”
            </TextNode>

            <TextNode>
              “Good heavens!” cried Holmes in amazement. “How did he die?”
            </TextNode>

            <TextNode>
              “Perhaps you would care to step in, sir, and see his brother,
              Colonel Valentine?”
            </TextNode>

            <TextNode>“Yes, we had best do so.”</TextNode>

            <TextNode>
              We were ushered into a dim-lit drawing-room, where an instant
              later we were joined by a very tall, handsome, light-beared man of
              fifty, the younger brother of the dead scientist. His wild eyes,
              stained cheeks, and unkempt hair all spoke of the sudden blow
              which had fallen upon the household. He was hardly articulate as
              he spoke of it.
            </TextNode>

            <TextNode>
              “It was this horrible scandal,” said he. “My brother, Sir James,
              was a man of very sensitive honour, and he could not survive such
              an affair. It broke his heart. He was always so proud of the
              efficiency of his department, and this was a crushing blow.”
            </TextNode>

            <TextNode>
              “We had hoped that he might have given us some indications which
              would have helped us to clear the matter up.”
            </TextNode>

            <TextNode>
              “I assure you that it was all a mystery to him as it is to you and
              to all of us. He had already put all his knowledge at the disposal
              of the police. Naturally he had no doubt that Cadogan West was
              guilty. But all the rest was inconceivable.”
            </TextNode>

            <TextNode>
              “You cannot throw any new light upon the affair?”
            </TextNode>

            <TextNode>
              “I know nothing myself save what I have read or heard. I have no
              desire to be discourteous, but you can understand, Mr. Holmes,
              that we are much disturbed at present, and I must ask you to
              hasten this interview to an end.”
            </TextNode>

            <TextNode>
              “This is indeed an unexpected development,” said my friend when we
              had regained the cab. “I wonder if the death was natural, or
              whether the poor old fellow killed himself! If the latter, may it
              be taken as some sign of self-reproach for duty neglected? We must
              leave that question to the future. Now we shall turn to the
              Cadogan Wests.”
            </TextNode>

            <TextNode>
              A small but well-kept house in the outskirts of the town sheltered
              the bereaved mother. The old lady was too dazed with grief to be
              of any use to us, but at her side was a white-faced young lady,
              who introduced herself as Miss Violet Westbury, the fiancee of the
              dead man, and the last to see him upon that fatal night.
            </TextNode>

            <TextNode>
              “I cannot explain it, Mr. Holmes,” she said. “I have not shut an
              eye since the tragedy, thinking, thinking, thinking, night and
              day, what the true meaning of it can be. Arthur was the most
              single-minded, chivalrous, patriotic man upon earth. He would have
              cut his right hand off before he would sell a State secret
              confided to his keeping. It is absurd, impossible, preposterous to
              anyone who knew him.”
            </TextNode>

            <TextNode>“But the facts, Miss Westbury?”</TextNode>

            <TextNode>“Yes, yes; I admit I cannot explain them.”</TextNode>

            <TextNode>“Was he in any want of money?”</TextNode>

            <TextNode>
              “No; his needs were very simple and his salary ample. He had saved
              a few hundreds, and we were to marry at the New Year.”
            </TextNode>

            <TextNode>
              “No signs of any mental excitement? Come, Miss Westbury, be
              absolutely frank with us.”
            </TextNode>

            <TextNode>
              The quick eye of my companion had noted some change in her manner.
              She coloured and hesitated.
            </TextNode>

            <TextNode>
              “Yes,” she said at last, “I had a feeling that there was something
              on his mind.”
            </TextNode>

            <TextNode>“For long?”</TextNode>

            <TextNode>
              “Only for the last week or so. He was thoughtful and worried. Once
              I pressed him about it. He admitted that there was something, and
              that it was concerned with his official life. 'It is too serious
              for me to speak about, even to you,' said he. I could get nothing
              more.”
            </TextNode>

            <TextNode>Holmes looked grave.</TextNode>

            <TextNode>
              “Go on, Miss Westbury. Even if it seems to tell against him, go
              on. We cannot say what it may lead to.”
            </TextNode>

            <TextNode>
              “Indeed, I have nothing more to tell. Once or twice it seemed to
              me that he was on the point of telling me something. He spoke one
              evening of the importance of the secret, and I have some
              recollection that he said that no doubt foreign spies would pay a
              great deal to have it.”
            </TextNode>

            <TextNode>My friend's face grew graver still.</TextNode>

            <TextNode>“Anything else?”</TextNode>

            <TextNode>
              “He said that we were slack about such matters—that it would be
              easy for a traitor to get the plans.”
            </TextNode>

            <TextNode>
              “Was it only recently that he made such remarks?”
            </TextNode>

            <TextNode>“Yes, quite recently.”</TextNode>

            <TextNode>“Now tell us of that last evening.”</TextNode>

            <TextNode>
              “We were to go to the theatre. The fog was so thick that a cab was
              useless. We walked, and our way took us close to the office.
              Suddenly he darted away into the fog.”
            </TextNode>

            <TextNode>“Without a word?”</TextNode>

            <TextNode>
              “He gave an exclamation; that was all. I waited but he never
              returned. Then I walked home. Next morning, after the office
              opened, they came to inquire. About twelve o'clock we heard the
              terrible news. Oh, Mr. Holmes, if you could only, only save his
              honour! It was so much to him.”
            </TextNode>

            <TextNode>Holmes shook his head sadly.</TextNode>

            <TextNode>
              “Come, Watson,” said he, “our ways lie elsewhere. Our next station
              must be the office from which the papers were taken.
            </TextNode>

            <TextNode>
              “It was black enough before against this young man, but our
              inquiries make it blacker,” he remarked as the cab lumbered off.
              “His coming marriage gives a motive for the crime. He naturally
              wanted money. The idea was in his head, since he spoke about it.
              He nearly made the girl an accomplice in the treason by telling
              her his plans. It is all very bad.”
            </TextNode>

            <TextNode>
              “But surely, Holmes, character goes for something? Then, again,
              why should he leave the girl in the street and dart away to commit
              a felony?”
            </TextNode>

            <TextNode>
              “Exactly! There are certainly objections. But it is a formidable
              case which they have to meet.”
            </TextNode>

            <TextNode>
              Mr. Sidney Johnson, the senior clerk, met us at the office and
              received us with that respect which my companion's card always
              commanded. He was a thin, gruff, bespectacled man of middle age,
              his cheeks haggard, and his hands twitching from the nervous
              strain to which he had been subjected.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page288;

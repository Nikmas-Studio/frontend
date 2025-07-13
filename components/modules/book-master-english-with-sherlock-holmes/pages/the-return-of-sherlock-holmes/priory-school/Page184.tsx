import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page184({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;PRIORY&nbsp;SCHOOL'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              We have had some dramatic entrances and exits upon our small stage
              at Baker Street, but I cannot recollect anything more sudden and
              startling than the first appearance of Thorneycroft Huxtable,
              M.A., Ph.D., etc. His card, which seemed too small to carry the
              weight of his academic distinctions, preceded him by a few
              seconds, and then he entered himself—so large, so pompous, and so
              dignified that he was the very embodiment of self-possession and
              solidity. And yet his first action when the door had closed behind
              him was to stagger against the table, whence he slipped down upon
              the floor, and there was that majestic figure prostrate and
              insensible upon our bearskin hearthrug.
            </TextNode>

            <TextNode>
              We had sprung to our feet, and for a few moments we stared in
              silent amazement at this ponderous piece of wreckage, which told
              of some sudden and fatal storm far out on the ocean of life. Then
              Holmes hurried with a cushion for his head and I with brandy for
              his lips. The heavy white face was seamed with lines of trouble,
              the hanging pouches under the closed eyes were leaden in colour,
              the loose mouth drooped dolorously at the corners, the rolling
              chins were unshaven. Collar and shirt bore the grime of a long
              journey, and the hair bristled unkempt from the well-shaped head.
              It was a sorely-stricken man who lay before us.
            </TextNode>

            <TextNode>“What is it, Watson?” asked Holmes.</TextNode>

            <TextNode>
              “Absolute exhaustion—possibly mere hunger and fatigue,” said I,
              with my finger on the thready pulse, where the stream of life
              trickled thin and small.
            </TextNode>

            <TextNode>
              “Return ticket from Mackleton, in the North of England,” said
              Holmes, drawing it from the watch-pocket. “It is not twelve
              o'clock yet. He has certainly been an early starter.”
            </TextNode>

            <TextNode>
              The puckered eyelids had begun to quiver, and now a pair of
              vacant, grey eyes looked up at us. An instant later the man had
              scrambled on to his feet, his face crimson with shame.
            </TextNode>

            <TextNode>
              “Forgive this weakness, Mr. Holmes; I have been a little
              overwrought. Thank you, if I might have a glass of milk and a
              biscuit I have no doubt that I should be better. I came
              personally, Mr. Holmes, in order to ensure that you would return
              with me. I feared that no telegram would convince you of the
              absolute urgency of the case.”
            </TextNode>

            <TextNode>“When you are quite restored—</TextNode>

            <TextNode>
              “I am quite well again. I cannot imagine how I came to be so weak.
              I wish you, Mr. Holmes, to come to Mackleton with me by the next
              train.”
            </TextNode>

            <TextNode>My friend shook his head.</TextNode>

            <TextNode>
              “My colleague, Dr. Watson, could tell you that we are very busy at
              present. I am retained in this case of the Ferrers Documents, and
              the Abergavenny murder is coming up for trial. Only a very
              important issue could call me from London at present.”
            </TextNode>

            <TextNode>
              “Important!” Our visitor threw up his hands. “Have you heard
              nothing of the abduction of the only son of the Duke of
              Holdernesse?”
            </TextNode>

            <TextNode>“What! the late Cabinet Minister?”</TextNode>

            <TextNode>
              “Exactly. We had tried to keep it out of the papers, but there was
              some rumour in&nbsp;<span className='italic'>The Globe</span> last
              night. I thought it might have reached your ears.”
            </TextNode>

            <TextNode>
              Holmes shot out his long, thin arm and picked out Volume “H” in
              his encyclopaedia of reference.
            </TextNode>

            <TextNode>
              “ ‘Holdernesse, 6th Duke, K.G., P.C.’—half the alphabet! ‘Baron
              Beverley, Earl of Carston’—dear me, what a list! ‘Lord Lieutenant
              of Hallamshire since 1900. Married Edith, daughter of Sir Charles
              Appledore, 1888. Heir and only child, Lord Saltire. Owns about two
              hundred and fifty thousand acres. Minerals in Lancashire and
              Wales. Address: Carlton House Terrace; Holdernesse Hall,
              Hallamshire; Carston Castle, Bangor, Wales. Lord of the Admiralty,
              1872; Chief Secretary of State for—’ Well, well, this man is
              certainly one of the greatest subjects of the Crown!”
            </TextNode>

            <TextNode>
              “The greatest and perhaps the wealthiest. I am aware, Mr. Holmes,
              that you take a very high line in professional matters, and that
              you are prepared to work for the work's sake. I may tell you,
              however, that his Grace has already intimated that a cheque for
              five thousand pounds will be handed over to the person who can
              tell him where his son is, and another thousand to him who can
              name the man, or men, who have taken him.”
            </TextNode>

            <TextNode>
              “It is a princely offer,” said Holmes. “Watson, I think that we
              shall accompany Dr. Huxtable back to the North of England. And
              now, Dr. Huxtable, when you have consumed that milk you will
              kindly tell me what has happened, when it happened, how it
              happened, and, finally, what Dr. Thorneycroft Huxtable, of the
              Priory School, near Mackleton, has to do with the matter, and why
              he comes three days after an event—the state of your chin gives
              the date—to ask for my humble services.”
            </TextNode>

            <TextNode>
              Our visitor had consumed his milk and biscuits. The light had come
              back to his eyes and the colour to his cheeks as he set himself
              with great vigour and lucidity to explain the situation.
            </TextNode>

            <TextNode>
              “I must inform you, gentlemen, that the Priory is a preparatory
              school, of which I am the founder and principal.{' '}
              <span className='italic'>‘Huxtable's Sidelights on Horace’</span>{' '}
              may possibly recall my name to your memories. The Priory is,
              without exception, the best and most select preparatory school in
              England. Lord Leverstoke, the Earl of Blackwater, Sir Cathcart
              Soames—they all have entrusted their sons to me. But I felt that
              my school had reached its zenith when, three weeks ago, the Duke
              of Holdernesse sent Mr. James Wilder, his secretary, with the
              intimation that young Lord Saltire, ten years old, his only son
              and heir, was about to be committed to my charge. Little did I
              think that this would be the prelude to the most crushing
              misfortune of my life.
            </TextNode>

            <TextNode>
              “On May 1st the boy arrived, that being the beginning of the
              summer term. He was a charming youth, and he soon fell into our
              ways. I may tell you—I trust that I am not indiscreet, but
              half-confidences are absurd in such a case—that he was not
              entirely happy at home. It is an open secret that the Duke's
              married life had not been a peaceful one, and the matter had ended
              in a separation by mutual consent, the Duchess taking up her
              residence in the South of France. This had occurred very shortly
              before, and the boy's sympathies are known to have been strongly
              with his mother. He moped after her departure from Holdernesse
              Hall, and it was for this reason that the Duke desired to send him
              to my establishment. In a fortnight the boy was quite at home with
              us, and was apparently absolutely happy.
            </TextNode>

            <TextNode>
              “He was last seen on the night of May 13th—that is, the night of
              last Monday. His room was on the second floor, and was approached
              through another larger room in which two boys were sleeping. These
              boys saw and heard nothing, so that it is certain that young
              Saltire did not pass out that way. His window was open, and there
              is a stout ivy plant leading to the ground. We could trace no
              footmarks below, but it is sure that this is the only possible
              exit.
            </TextNode>

            <TextNode>
              “His absence was discovered at seven o'clock on Tuesday morning.
              His bed had been slept in. He had dressed himself fully before
              going off in his usual school suit of black Eton jacket and dark
              grey trousers. There were no signs that anyone had entered the
              room, and it is quite certain that anything in the nature of
              cries, or a struggle, would have been heard, since Caunter, the
              elder boy in the inner room, is a very light sleeper.
            </TextNode>

            <TextNode>
              “When Lord Saltire's disappearance was discovered I at once called
              a roll of the whole establishment, boys, masters, and servants. It
              was then that we ascertained that Lord Saltire had not been alone
              in his flight. Heidegger, the German master, was missing. His room
              was on the second floor, at the farther end of the building,
              facing the same way as Lord Saltire's. His bed had also been slept
              in; but he had apparently gone away partly dressed, since his
              shirt and socks were lying on the floor. He had undoubtedly let
              himself down by the ivy, for we could see the marks of his feet
              where he had landed on the lawn. His bicycle was kept in a small
              shed beside this lawn, and it also was gone.
            </TextNode>

            <TextNode>
              “He had been with me for two years, and came with the best
              references; but he was a silent, morose man, not very popular
              either with masters or boys. No trace could be found of the
              fugitives, and now on Thursday morning we are as ignorant as we
              were on Tuesday. Inquiry was, of course, made at once at
              Holdernesse Hall. It is only a few miles away, and we imagined
              that in some sudden attack of home-sickness he had gone back to
              his father; but nothing had been heard of him. The Duke is greatly
              agitated—and as to me, you have seen yourselves the state of
              nervous prostration to which the suspense and the responsibility
              have reduced me. Mr. Holmes, if ever you put forward your full
              powers, I implore you to do so now, for never in your life could
              you have a case which is more worthy of them.”
            </TextNode>

            <TextNode>
              Sherlock Holmes had listened with the utmost intentness to the
              statement of the unhappy schoolmaster. His drawn brows and the
              deep furrow between them showed that he needed no exhortation to
              concentrate all his attention upon a problem which, apart from the
              tremendous interests involved, must appeal so directly to his love
              of the complex and the unusual. He now drew out his note-book and
              jotted down one or two memoranda.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “You have been very remiss in not coming to me sooner,” said he,
              severely. “You start me on my investigation with a very serious
              handicap. It is inconceivable, for example, that this ivy and this
              lawn would have yielded nothing to an expert observer.”
            </TextNode>

            <TextNode>
              “I am not to blame, Mr. Holmes. His Grace was extremely desirous
              to avoid all public scandal. He was afraid of his family
              unhappiness being dragged before the world. He has a deep horror
              of anything of the kind.”
            </TextNode>

            <TextNode>
              “But there has been some official investigation?”
            </TextNode>

            <TextNode>
              “Yes, sir, and it has proved most disappointing. An apparent clue
              was at once obtained, since a boy and a young man were reported to
              have been seen leaving a neighbouring station by an early train.
              Only last night we had news that the couple had been hunted down
              in Liverpool, and they prove to have no connection whatever with
              the matter in hand. Then it was that in my despair and
              disappointment, after a sleepless night, I came straight to you by
              the early train.”
            </TextNode>

            <TextNode>
              “I suppose the local investigation was relaxed while this false
              clue was being followed up?”
            </TextNode>

            <TextNode>“It was entirely dropped.”</TextNode>

            <TextNode>
              “So that three days have been wasted. The affair has been most
              deplorably handled.”
            </TextNode>

            <TextNode>“I feel it, and admit it.”</TextNode>

            <TextNode>
              “And yet the problem should be capable of ultimate solution. I
              shall be very happy to look into it. Have you been able to trace
              any connection between the missing boy and this German master?”
            </TextNode>

            <TextNode>“None at all.”</TextNode>

            <TextNode>“Was he in the master's class?”</TextNode>

            <TextNode>
              “No; he never exchanged a word with him so far as I know.”
            </TextNode>

            <TextNode>
              “That is certainly very singular. Had the boy a bicycle?”
            </TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>“Was any other bicycle missing?”</TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>“Is that certain?”</TextNode>

            <TextNode>“Quite.”</TextNode>

            <TextNode>
              “Well, now, you do not mean to seriously suggest that this German
              rode off upon a bicycle in the dead of the night bearing the boy
              in his arms?”
            </TextNode>

            <TextNode>“Certainly not.”</TextNode>

            <TextNode>“Then what is the theory in your mind?”</TextNode>

            <TextNode>
              “The bicycle may have been a blind. It may have been hidden
              somewhere and the pair gone off on foot.”
            </TextNode>

            <TextNode>
              “Quite so; but it seems rather an absurd blind, does it not? Were
              there other bicycles in this shed?”
            </TextNode>

            <TextNode>“Several.”</TextNode>

            <TextNode>
              “Would he not have hidden a couple he desired to give the idea
              that they had gone off upon them?”
            </TextNode>

            <TextNode>“I suppose he would.”</TextNode>

            <TextNode>
              “Of course he would. The blind theory won't do. But the incident
              is an admirable starting-point for an investigation. After all, a
              bicycle is not an easy thing to conceal or to destroy. One other
              question. Did anyone call to see the boy on the day before he
              disappeared?”
            </TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>“Did he get any letters?”</TextNode>

            <TextNode>“Yes; one letter.”</TextNode>

            <TextNode>“From whom?”</TextNode>

            <TextNode>“From his father.”</TextNode>

            <TextNode>“Do you open the boys' letters?”</TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>“How do you know it was from the father?”</TextNode>

            <TextNode>
              “The coat of arms was on the envelope, and it was addressed in the
              Duke's peculiar stiff hand. Besides, the Duke remembers having
              written.”
            </TextNode>

            <TextNode>“When had he a letter before that?”</TextNode>

            <TextNode>“Not for several days.”</TextNode>

            <TextNode>“Had he ever one from France?”</TextNode>

            <TextNode>“No; never.”</TextNode>

            <TextNode>
              “You see the point of my questions, of course. Either the boy was
              carried off by force or he went of his own free will. In the
              latter case you would expect that some prompting from outside
              would be needed to make so young a lad do such a thing. If he has
              had no visitors, that prompting must have come in letters. Hence I
              try to find out who were his correspondents.”
            </TextNode>

            <TextNode>
              “I fear I cannot help you much. His only correspondent, so far as
              I know, was his own father.”
            </TextNode>

            <TextNode>
              “Who wrote to him on the very day of his disappearance. Were the
              relations between father and son very friendly?”
            </TextNode>

            <TextNode>
              “His Grace is never very friendly with anyone. He is completely
              immersed in large public questions, and is rather inaccessible to
              all ordinary emotions. But he was always kind to the boy in his
              own way.”
            </TextNode>

            <TextNode>
              “But the sympathies of the latter were with the mother?”
            </TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>“Did he say so?”</TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>“The Duke, then?”</TextNode>

            <TextNode>“Good heavens, no!”</TextNode>

            <TextNode>“Then how could you know?”</TextNode>

            <TextNode>
              “I have had some confidential talks with Mr. James Wilder, his
              Grace's secretary. It was he who gave me the information about
              Lord Saltire's feelings.”
            </TextNode>

            <TextNode>
              “I see. By the way, that last letter of the Duke's—was it found in
              the boy's room after he was gone?”
            </TextNode>

            <TextNode>
              “No; he had taken it with him. I think, Mr. Holmes, it is time
              that we were leaving for Euston.”
            </TextNode>

            <TextNode>
              “I will order a four-wheeler. In a quarter of an hour we shall be
              at your service. If you are telegraphing home, Mr. Huxtable, it
              would be well to allow the people in your neighbourhood to imagine
              that the inquiry is still going on in Liverpool, or wherever else
              that red herring led your pack. In the meantime I will do a little
              quiet work at your own doors, and perhaps the scent is not so cold
              but that two old hounds like Watson and myself may get a sniff of
              it.”
            </TextNode>

            <TextNode>
              That evening found us in the cold, bracing atmosphere of the Peak
              country, in which Dr. Huxtable's famous school is situated. It was
              already dark when we reached it. A card was lying on the hall
              table, and the butler whispered something to his master, who
              turned to us with agitation in every heavy feature.
            </TextNode>

            <TextNode>
              “The Duke is here,” said he. “The Duke and Mr. Wilder are in the
              study. Come, gentlemen, and I will introduce you.”
            </TextNode>

            <TextNode>
              I was, of course, familiar with the pictures of the famous
              statesman, but the man himself was very different from his
              representation. He was a tall and stately person, scrupulously
              dressed, with a drawn, thin face, and a nose which was grotesquely
              curved and long. His complexion was of a dead pallor, which was
              more startling by contrast with a long, dwindling beard of vivid
              red, which flowed down over his white waistcoat, with his
              watch-chain gleaming through its fringe. Such was the stately
              presence who looked stonily at us from the centre of Dr.
              Huxtable's hearthrug. Beside him stood a very young man, whom I
              understood to be Wilder, the private secretary. He was small,
              nervous, alert, with intelligent, light-blue eyes and mobile
              features. It was he who at once, in an incisive and positive tone,
              opened the conversation.
            </TextNode>

            <TextNode>
              “I called this morning, Dr. Huxtable, too late to prevent you from
              starting for London. I learned that your object was to invite Mr.
              Sherlock Holmes to undertake the conduct of this case. His Grace
              is surprised, Dr. Huxtable, that you should have taken such a step
              without consulting him.”
            </TextNode>

            <TextNode>“When I learned that the police had failed—”</TextNode>

            <TextNode>
              “His Grace is by no means convinced that the police have failed.”
            </TextNode>

            <TextNode>“But surely, Mr. Wilder—”</TextNode>

            <TextNode>
              “You are well aware, Dr. Huxtable, that his Grace is particularly
              anxious to avoid all public scandal. He prefers to take as few
              people as possible into his confidence.”
            </TextNode>

            <TextNode>
              “The matter can be easily remedied,” said the brow-beaten doctor;
              “Mr. Sherlock Holmes can return to London by the morning train.”
            </TextNode>

            <TextNode>
              “Hardly that, Doctor, hardly that,” said Holmes, in his blandest
              voice. “This northern air is invigorating and pleasant, so I
              propose to spend a few days upon your moors, and to occupy my mind
              as best I may. Whether I have the shelter of your roof or of the
              village inn is, of course, for you to decide.”
            </TextNode>

            <TextNode>
              I could see that the unfortunate doctor was in the last stage of
              indecision, from which he was rescued by the deep, sonorous voice
              of the red-bearded Duke, which boomed out like a dinner-gong.
            </TextNode>

            <TextNode>
              “I agree with Mr. Wilder, Dr. Huxtable, that you would have done
              wisely to consult me. But since Mr. Holmes has already been taken
              into your confidence, it would indeed be absurd that we should not
              avail ourselves of his services. Far from going to the inn, Mr.
              Holmes, I should be pleased if you would come and stay with me at
              Holdernesse Hall.”
            </TextNode>

            <TextNode>
              “I thank your Grace. For the purposes of my investigation I think
              that it would be wiser for me to remain at the scene of the
              mystery.”
            </TextNode>

            <TextNode>
              “Just as you like, Mr. Holmes. Any information which Mr. Wilder or
              I can give you is, of course, at your disposal.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page184;

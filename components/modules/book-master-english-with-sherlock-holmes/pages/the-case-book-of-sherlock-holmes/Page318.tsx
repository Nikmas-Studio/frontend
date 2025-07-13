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

function Page318({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;THREE&nbsp;GABLES'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Well, Mr. Holmes, no chance for you in this case, I'm afraid.
              Just a common, ordinary burglary, and well within the capacity of
              the poor old police. No experts need apply.”
            </TextNode>

            <TextNode>
              “I am sure the case is in very good hands,” said Holmes. “Merely a
              common burglary, you say?”
            </TextNode>

            <TextNode>
              “Quite so. We know pretty well who the men are and where to find
              them. It is that gang of Barney Stockdale, with the big nigger in
              it—they've been seen about here.”
            </TextNode>

            <TextNode>“Excellent! What did they get?”</TextNode>

            <TextNode>
              “Well, they don't seem to have got much. Mrs. Maberley was
              chloroformed and the house was— Ah! here is the lady herself.”
            </TextNode>

            <TextNode>
              Our friend of yesterday, looking very pale and ill, had entered
              the room, leaning upon a little maidservant.
            </TextNode>

            <TextNode>
              “You gave me good advice, Mr. Holmes,” said she, smiling ruefully.
              “Alas, I did not take it! I did not wish to trouble Mr. Sutro, and
              so I was unprotected.”
            </TextNode>

            <TextNode>
              “I only heard of it this morning,” the lawyer explained.
            </TextNode>

            <TextNode>
              “Mr. Holmes advised me to have some friend in the house. I
              neglected his advice, and I have paid for it.”
            </TextNode>

            <TextNode>
              “You look wretchedly ill,” said Holmes. “Perhaps you are hardly
              equal to telling me what occurred.”
            </TextNode>

            <TextNode>
              “It is all here,” said the inspector, tapping a bulky notebook.
            </TextNode>

            <TextNode>“Still, if the lady is not too exhausted—”</TextNode>

            <TextNode>
              “There is really so little to tell. I have no doubt that wicked
              Susan had planned an entrance for them. They must have known the
              house to an inch. I was conscious for a moment of the chloroform
              rag which was thrust over my mouth, but I have no notion how long
              I may have been senseless. When I woke, one man was at the bedside
              and another was rising with a bundle in his hand from among my
              son's baggage, which was partially opened and littered over the
              floor. Before he could get away I sprang up and seized him.”
            </TextNode>

            <TextNode>“You took a big risk,” said the inspector.</TextNode>

            <TextNode>
              “I clung to him, but he shook me off, and the other may have
              struck me, for I can remember no more. Mary the maid heard the
              noise and began screaming out of the window. That brought the
              police, but the rascals had got away.”
            </TextNode>

            <TextNode>“What did they take?”</TextNode>

            <TextNode>
              “Well, I don't think there is anything of value missing. I am sure
              there was nothing in my son's trunks.”
            </TextNode>

            <TextNode>“Did the men leave no clue?”</TextNode>

            <TextNode>
              “There was one sheet of paper which I may have torn from the man
              that I grasped. It was lying all crumpled on the floor. It is in
              my son's handwriting.”
            </TextNode>

            <TextNode>
              “Which means that it is not of much use,” said the inspector. “Now
              if it had been in the burglar's—”
            </TextNode>

            <TextNode>
              “Exactly,” said Holmes. “What rugged common sense! None the less,
              I should be curious to see it.”
            </TextNode>

            <TextNode>
              The inspector drew a folded sheet of foolscap from his pocketbook.
            </TextNode>

            <TextNode>
              “I never pass anything, however trifling,” said he with some
              pomposity. “That is my advice to you, Mr. Holmes. In twenty-five
              years' experience I have learned my lesson. There is always the
              chance of finger-marks or something.”
            </TextNode>

            <TextNode>Holmes inspected the sheet of paper.</TextNode>

            <TextNode>“What do you make of it, Inspector?”</TextNode>

            <TextNode>
              “Seems to be the end of some queer novel, so far as I can see.”
            </TextNode>

            <TextNode>
              “It may certainly prove to be the end of a queer tale,” said
              Holmes. “You have noticed the number on the top of the page. It is
              two hundred and forty-five. Where are the odd two hundred and
              forty-four pages?”
            </TextNode>

            <TextNode>
              “Well, I suppose the burglars got those. Much good may it do
              them!”
            </TextNode>

            <TextNode>
              “It seems a queer thing to break into a house in order to steal
              such papers as that. Does it suggest anything to you, Inspector?”
            </TextNode>

            <TextNode>
              “Yes, sir, it suggests that in their hurry the rascals just
              grabbed at what came first to hand. I wish them joy of what they
              got.”
            </TextNode>

            <TextNode>
              “Why should they go to my son's things?” asked Mrs. Maberley.
            </TextNode>

            <TextNode>
              “Well, they found nothing valuable downstairs, so they tried their
              luck upstairs. That is how I read it. What do you make of it, Mr.
              Holmes?”
            </TextNode>

            <TextNode>
              “I must think it over, Inspector. Come to the window, Watson.”
              Then, as we stood together, he read over the fragment of paper. It
              began in the middle of a sentence and ran like this:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “… face bled considerably from the cuts and blows, but it was
                nothing to the bleeding of his heart as he saw that lovely face,
                the face for which he had been prepared to sacrifice his very
                life, looking out at his agony and humiliation. She smiled—yes,
                by Heaven! she smiled, like the heartless fiend she was, as he
                looked up at her. It was at that moment that love died and hate
                was born. Man must live for something. If it is not for your
                embrace, my lady, then it shall surely be for your undoing and
                my complete revenge.”
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “Queer grammar!” said Holmes with a smile as he handed the paper
              back to the inspector. “Did you notice how the ‘he’ suddenly
              changed to ‘my’? The writer was so carried away by his own story
              that he imagined himself at the supreme moment to be the hero.”
            </TextNode>

            <TextNode>
              “It seemed mighty poor stuff,” said the inspector as he replaced
              it in his book. “What! are you off, Mr. Holmes?”
            </TextNode>

            <TextNode>
              “I don't think there is anything more for me to do now that the
              case is in such capable hands. By the way, Mrs. Maberley, did you
              say you wished to travel?”
            </TextNode>

            <TextNode>“It has always been my dream, Mr. Holmes.”</TextNode>

            <TextNode>
              “Where would you like to go—Cairo, Madeira, the Riviera?”
            </TextNode>

            <TextNode>
              “Oh, if I had the money I would go round the world.”
            </TextNode>

            <TextNode>
              “Quite so. Round the world. Well, good-morning. I may drop you a
              line in the evening.” As we passed the window I caught a glimpse
              of the inspector's smile and shake of the head. “These clever
              fellows have always a touch of madness.” That was what I read in
              the inspector's smile.
            </TextNode>

            <TextNode>
              “Now, Watson, we are at the last lap of our little journey,” said
              Holmes when we were back in the roar of central London once more.
              “I think we had best clear the matter up at once, and it would be
              well that you should come with me, for it is safer to have a
              witness when you are dealing with such a lady as Isadora Klein.”
            </TextNode>

            <TextNode>
              We had taken a cab and were speeding to some address in Grosvenor
              Square. Holmes had been sunk in thought, but he roused himself
              suddenly.
            </TextNode>

            <TextNode>
              “By the way, Watson, I suppose you see it all clearly?”
            </TextNode>

            <TextNode>
              “No, I can't say that I do. I only gather that we are going to see
              the lady who is behind all this mischief.”
            </TextNode>

            <TextNode>
              “Exactly! But does the name Isadora Klein convey nothing to you?
              She was, of course, the celebrated beauty. There was never a woman
              to touch her. She is pure Spanish, the real blood of the masterful
              Conquistadors, and her people have been leaders in Pernambuco for
              generations. She married the aged German sugar king, Klein, and
              presently found herself the richest as well as the most lovely
              widow upon earth. Then there was an interval of adventure when she
              pleased her own tastes. She had several lovers, and Douglas
              Maberley, one of the most striking men in London, was one of them.
              It was by all accounts more than an adventure with him. He was not
              a society butterfly but a strong, proud man who gave and expected
              all. But she is the&nbsp;
              <span className='italic'>‘belle dame sans merci’</span> of
              fiction. When her caprice is satisfied the matter is ended, and if
              the other party in the matter can't take her word for it she knows
              how to bring it home to him.”
            </TextNode>

            <TextNode>“Then that was his own story—”</TextNode>

            <TextNode>
              “Ah! you are piecing it together now. I hear that she is about to
              marry the young Duke of Lomond, who might almost be her son. His
              Grace's ma might overlook the age, but a big scandal would be a
              different matter, so it is imperative— Ah! here we are.”
            </TextNode>

            <TextNode>
              It was one of the finest corner-houses of the West End. A
              machine-like footman took up our cards and returned with word that
              the lady was not at home. “Then we shall wait until she is,” said
              Holmes cheerfully.
            </TextNode>

            <TextNode>The machine broke down.</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Not at home means not at home to you,” said the footman.
            </TextNode>

            <TextNode>
              “Good,” Holmes answered. “That means that we shall not have to
              wait. Kindly give this note to your mistress.”
            </TextNode>

            <TextNode>
              He scribbled three or four words upon a sheet of his notebook,
              folded it, and handed it to the man.
            </TextNode>

            <TextNode>“What did you say, Holmes?” I asked.</TextNode>

            <TextNode>
              “I simply wrote: ‘Shall it be the police, then?’ I think that
              should pass us in.”
            </TextNode>

            <TextNode>
              It did—with amazing celerity. A minute later we were in an Arabian
              Nights drawing-room, vast and wonderful, in a half gloom, picked
              out with an occasional pink electric light. The lady had come, I
              felt, to that time of life when even the proudest beauty finds the
              half light more welcome. She rose from a settee as we entered:
              tall, queenly, a perfect figure, a lovely mask-like face, with two
              wonderful Spanish eyes which looked murder at us both.
            </TextNode>

            <TextNode>
              “What is this intrusion—and this insulting message?” she asked,
              holding up the slip of paper.
            </TextNode>

            <TextNode>
              “I need not explain, madame. I have too much respect for your
              intelligence to do so—though I confess that intelligence has been
              surprisingly at fault of late.”
            </TextNode>

            <TextNode>“How so, sir?”</TextNode>

            <TextNode>
              “By supposing that your hired bullies could frighten me from my
              work. Surely no man would take up my profession if it were not
              that danger attracts him. It was you, then, who forced me to
              examine the case of young Maberley.”
            </TextNode>

            <TextNode>
              “I have no idea what you are talking about. What have I to do with
              hired bullies?”
            </TextNode>

            <TextNode>Holmes turned away wearily.</TextNode>

            <TextNode>
              “Yes, I have underrated your intelligence. Well, good-afternoon!”
            </TextNode>

            <TextNode>“Stop! Where are you going?”</TextNode>

            <TextNode>“To Scotland Yard.”</TextNode>

            <TextNode>
              We had not got halfway to the door before she had overtaken us and
              was holding his arm. She had turned in a moment from steel to
              velvet.
            </TextNode>

            <TextNode>
              “Come and sit down, gentlemen. Let us talk this matter over. I
              feel that I may be frank with you, Mr. Holmes. You have the
              feelings of a gentleman. How quick a woman's instinct is to find
              it out. I will treat you as a friend.”
            </TextNode>

            <TextNode>
              “I cannot promise to reciprocate, madame. I am not the law, but I
              represent justice so far as my feeble powers go. I am ready to
              listen, and then I will tell you how I will act.”
            </TextNode>

            <TextNode>
              “No doubt it was foolish of me to threaten a brave man like
              yourself.”
            </TextNode>

            <TextNode>
              “What was really foolish, madame, is that you have placed yourself
              in the power of a band of rascals who may blackmail or give you
              away.”
            </TextNode>

            <TextNode>
              “No, no! I am not so simple. Since I have promised to be frank, I
              may say that no one, save Barney Stockdale and Susan, his wife,
              have the least idea who their employer is. As to them, well, it is
              not the first—” She smiled and nodded with a charming coquettish
              intimacy.
            </TextNode>

            <TextNode>“I see. You've tested them before.”</TextNode>

            <TextNode>“They are good hounds who run silent.”</TextNode>

            <TextNode>
              “Such hounds have a way sooner or later of biting the hand that
              feeds them. They will be arrested for this burglary. The police
              are already after them.”
            </TextNode>

            <TextNode>
              “They will take what comes to them. That is what they are paid
              for. I shall not appear in the matter.”
            </TextNode>

            <TextNode>“Unless I bring you into it.”</TextNode>

            <TextNode>
              “No, no, you would not. You are a gentleman. It is a woman's
              secret.”
            </TextNode>

            <TextNode>
              “In the first place, you must give back this manuscript.”
            </TextNode>

            <TextNode>
              She broke into a ripple of laughter and walked to the fireplace.
              There was a calcined mass which she broke up with the poker.
              “Shall I give this back?” she asked. So roguish and exquisite did
              she look as she stood before us with a challenging smile that I
              felt of all Holmes's criminals this was the one whom he would find
              it hardest to face. However, he was immune from sentiment.
            </TextNode>

            <TextNode>
              “That seals your fate,” he said coldly. “You are very prompt in
              your actions, madame, but you have overdone it on this occasion.”
            </TextNode>

            <TextNode>She threw the poker down with a clatter.</TextNode>

            <TextNode>
              “How hard you are!” she cried. “May I tell you the whole story?”
            </TextNode>

            <TextNode>“I fancy I could tell it to you.”</TextNode>

            <TextNode>
              “But you must look at it with my eyes, Mr. Holmes. You must
              realize it from the point of view of a woman who sees all her
              life's ambition about to be ruined at the last moment. Is such a
              woman to be blamed if she protects herself?”
            </TextNode>

            <TextNode>“The original sin was yours.”</TextNode>

            <TextNode>
              “Yes, yes! I admit it. He was a dear boy, Douglas, but it so
              chanced that he could not fit into my plans. He wanted
              marriage—marriage, Mr. Holmes—with a penniless commoner. Nothing
              less would serve him. Then he became pertinacious. Because I had
              given he seemed to think that I still must give, and to him only.
              It was intolerable. At last I had to make him realize it.”
            </TextNode>

            <TextNode>
              “By hiring ruffians to beat him under your own window.”
            </TextNode>

            <TextNode>
              “You do indeed seem to know everything. Well, it is true. Barney
              and the boys drove him away, and were, I admit, a little rough in
              doing so. But what did he do then? Could I have believed that a
              gentleman would do such an act? He wrote a book in which he
              described his own story. I, of course, was the wolf; he the lamb.
              It was all there, under different names, of course; but who in all
              London would have failed to recognize it? What do you say to that,
              Mr. Holmes?”
            </TextNode>

            <TextNode>“Well, he was within his rights.”</TextNode>

            <TextNode>
              “It was as if the air of Italy had got into his blood and brought
              with it the old cruel Italian spirit. He wrote to me and sent me a
              copy of his book that I might have the torture of anticipation.
              There were two copies, he said—one for me, one for his publisher.”
            </TextNode>

            <TextNode>
              “How did you know the publisher's had not reached him?”
            </TextNode>

            <TextNode>
              “I knew who his publisher was. It is not his only novel, you know.
              I found out that he had not heard from Italy. Then came Douglas's
              sudden death. So long as that other manuscript was in the world
              there was no safety for me. Of course, it must be among his
              effects, and these would be returned to his mother. I set the gang
              at work. One of them got into the house as servant. I wanted to do
              the thing honestly. I really and truly did. I was ready to buy the
              house and everything in it. I offered any price she cared to ask.
              I only tried the other way when everything else had failed. Now,
              Mr. Holmes, granting that I was too hard on Douglas—and, God
              knows, I am sorry for it!—what else could I do with my whole
              future at stake?”
            </TextNode>

            <TextNode>Sherlock Holmes shrugged his shoulders.</TextNode>

            <TextNode>
              “Well, well,” said he, “I suppose I shall have to compound a
              felony as usual. How much does it cost to go round the world in
              first-class style?”
            </TextNode>

            <TextNode>The lady stared in amazement.</TextNode>

            <TextNode>“Could it be done on five thousand pounds?”</TextNode>

            <TextNode>“Well, I should think so, indeed!”</TextNode>

            <TextNode>
              “Very good. I think you will sign me a check for that, and I will
              see that it comes to Mrs. Maberley. You owe her a little change of
              air. Meantime, lady”—he wagged a cautionary forefinger—“have a
              care! Have a care! You can't play with edged tools forever without
              cutting those dainty hands.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page318;

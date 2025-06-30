import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Indent from '@/components/elements/book-master-english-with-sherlock-holmes/Indent';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page157({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE GREEK INTERPRETER'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “These are samples of the questions and answers which made up our
              strange half-spoken, half-written conversation. Again and again I
              had to ask him whether he would give in and sign the documents.
              Again and again I had the same indignant reply. But soon a happy
              thought came to me. I took to adding on little sentences of my own
              to each question, innocent ones at first, to test whether either
              of our companions knew anything of the matter, and then, as I
              found that they showed no signs I played a more dangerous game.
              Our conversation ran something like this:
            </TextNode>

            <TextNode>
              “ ‘You can do no good by this obstinacy. Who are you?’
            </TextNode>

            <TextNode>“ ‘I care not. I am a stranger in London.’</TextNode>

            <TextNode>
              “ ‘Your fate will be upon your own head. How long have you been
              here?’
            </TextNode>

            <TextNode>“ ‘Let it be so. Three weeks.’</TextNode>

            <TextNode>
              “ ‘The property can never be yours. What ails you?’
            </TextNode>

            <TextNode>
              “ ‘It shall not go to villains. They are starving me.’
            </TextNode>

            <TextNode>
              “ ‘You shall go free if you sign. What house is this?’
            </TextNode>

            <TextNode>“ ‘I will never sign. I do not know.’</TextNode>

            <TextNode>
              “ ‘You are not doing her any service. What is your name?’
            </TextNode>

            <TextNode>“ ‘Let me hear her say so. Kratides.’</TextNode>

            <TextNode>
              “ ‘You shall see her if you sign. Where are you from?’
            </TextNode>

            <TextNode>“ ‘Then I shall never see her. Athens.’</TextNode>

            <TextNode>
              “Another five minutes, Mr. Holmes, and I should have wormed out
              the whole story under their very noses. My very next question
              might have cleared the matter up, but at that instant the door
              opened and a woman stepped into the room. I could not see her
              clearly enough to know more than that she was tall and graceful,
              with black hair, and clad in some sort of loose white gown.
            </TextNode>

            <TextNode>
              “ ‘Harold,’ said she, speaking English with a broken accent. ‘I
              could not stay away longer. It is so lonely up there with only—Oh,
              my God, it is Paul!’
            </TextNode>

            <TextNode>
              “These last words were in Greek, and at the same instant the man
              with a convulsive effort tore the plaster from his lips, and
              screaming out ‘Sophy! Sophy!’ rushed into the woman's arms. Their
              embrace was but for an instant, however, for the younger man
              seized the woman and pushed her out of the room, while the elder
              easily overpowered his emaciated victim, and dragged him away
              through the other door. For a moment I was left alone in the room,
              and I sprang to my feet with some vague idea that I might in some
              way get a clue to what this house was in which I found myself.
              Fortunately, however, I took no steps, for looking up I saw that
              the older man was standing in the door-way with his eyes fixed
              upon me.
            </TextNode>

            <TextNode>
              “ ‘That will do, Mr. Melas,’ said he. ‘You perceive that we have
              taken you into our confidence over some very private business. We
              should not have troubled you, only that our friend who speaks
              Greek and who began these negotiations has been forced to return
              to the East. It was quite necessary for us to find some one to
              take his place, and we were fortunate in hearing of your powers.’
            </TextNode>

            <TextNode>“I bowed.</TextNode>

            <TextNode>
              “ ‘There are five sovereigns here,’ said he, walking up to me,
              ‘which will, I hope, be a sufficient fee. But remember,’ he added,
              tapping me lightly on the chest and giggling, ‘if you speak to a
              human soul about this—one human soul, mind—well, may God have
              mercy upon your soul!’
            </TextNode>

            <TextNode>
              “I cannot tell you the loathing and horror with which this
              insignificant-looking man inspired me. I could see him better now
              as the lamp-light shone upon him. His features were peaky and
              sallow, and his little pointed beard was thready and
              ill-nourished. He pushed his face forward as he spoke and his lips
              and eyelids were continually twitching like a man with St. Vitus's
              dance. I could not help thinking that his strange, catchy little
              laugh was also a symptom of some nervous malady. The terror of his
              face lay in his eyes, however, steel gray, and glistening coldly
              with a malignant, inexorable cruelty in their depths.
            </TextNode>

            <TextNode>
              “ ‘We shall know if you speak of this,’ said he. ‘We have our own
              means of information. Now you will find the carriage waiting, and
              my friend will see you on your way.’
            </TextNode>

            <TextNode>
              “I was hurried through the hall and into the vehicle, again
              obtaining that momentary glimpse of trees and a garden. Mr.
              Latimer followed closely at my heels, and took his place opposite
              to me without a word. In silence we again drove for an
              interminable distance with the windows raised, until at last, just
              after midnight, the carriage pulled up.
            </TextNode>

            <TextNode>
              “ ‘You will get down here, Mr. Melas,’ said my companion. ‘I am
              sorry to leave you so far from your house, but there is no
              alternative. Any attempt upon your part to follow the carriage can
              only end in injury to yourself.’
            </TextNode>

            <TextNode>
              “He opened the door as he spoke, and I had hardly time to spring
              out when the coachman lashed the horse and the carriage rattled
              away. I looked around me in astonishment. I was on some sort of a
              heathy common mottled over with dark clumps of furze-bushes. Far
              away stretched a line of houses, with a light here and there in
              the upper windows. On the other side I saw the red signal-lamps of
              a railway.
            </TextNode>

            <TextNode>
              “The carriage which had brought me was already out of sight. I
              stood gazing round and wondering where on earth I might be, when I
              saw some one coming towards me in the darkness. As he came up to
              me I made out that he was a railway porter.
            </TextNode>

            <TextNode>
              “ ‘Can you tell me what place this is?’ I asked.
            </TextNode>

            <TextNode>“ ‘Wandsworth Common,’ said he.</TextNode>

            <TextNode>“ ‘Can I get a train into town?’</TextNode>

            <TextNode>
              “ ‘If you walk on a mile or so to Clapham Junction,’ said he,
              ‘you'll just be in time for the last to Victoria.’
            </TextNode>

            <TextNode>
              “So that was the end of my adventure, Mr. Holmes. I do not know
              where I was, nor whom I spoke with, nor anything save what I have
              told you. But I know that there is foul play going on, and I want
              to help that unhappy man if I can. I told the whole story to Mr.
              Mycroft Holmes next morning, and subsequently to the police.”
            </TextNode>

            <TextNode>
              We all sat in silence for some little time after listening to this
              extraordinary narrative. Then Sherlock looked across at his
              brother.
            </TextNode>

            <TextNode>“Any steps?” he asked.</TextNode>

            <TextNode>
              Mycroft picked up the <span className='italic'>Daily News</span>,
              which was lying on the side-table.
            </TextNode>

            <TextNode>
              “Anybody supplying any information as to the whereabouts of a
              Greek gentleman named Paul Kratides, from Athens, who is unable to
              speak English, will be rewarded. A similar reward paid to any one
              giving information about a Greek lady whose first name is Sophy. X
              2473.
            </TextNode>

            <TextNode>“That was in all the dailies. No answer.”</TextNode>

            <TextNode>“How about the Greek Legation?”</TextNode>

            <TextNode>“I have inquired. They know nothing.”</TextNode>

            <TextNode>
              “A wire to the head of the Athens police, then?”
            </TextNode>

            <TextNode>
              “Sherlock has all the energy of the family,” said Mycroft, turning
              to me. “Well, you take the case up by all means, and let me know
              if you do any good.”
            </TextNode>

            <TextNode>
              “Certainly,” answered my friend, rising from his chair. “I'll let
              you know, and Mr. Melas also. In the meantime, Mr. Melas, I should
              certainly be on my guard, if I were you, for of course they must
              know through these advertisements that you have betrayed them.”
            </TextNode>

            <TextNode>
              As we walked home together, Holmes stopped at a telegraph office
              and sent off several wires.
            </TextNode>

            <TextNode>
              “You see, Watson,” he remarked, “our evening has been by no means
              wasted. Some of my most interesting cases have come to me in this
              way through Mycroft. The problem which we have just listened to,
              although it can admit of but one explanation, has still some
              distinguishing features.”
            </TextNode>

            <TextNode>“You have hopes of solving it?”</TextNode>

            <TextNode>
              “Well, knowing as much as we do, it will be singular indeed if we
              fail to discover the rest. You must yourself have formed some
              theory which will explain the facts to which we have listened.”
            </TextNode>

            <TextNode>“In a vague way, yes.”</TextNode>

            <TextNode>“What was your idea, then?”</TextNode>

            <TextNode>
              “It seemed to me to be obvious that this Greek girl had been
              carried off by the young Englishman named Harold Latimer.”
            </TextNode>

            <TextNode>“Carried off from where?”</TextNode>

            <TextNode>“Athens, perhaps.”</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              Sherlock Holmes shook his head. “This young man could not talk a
              word of Greek. The lady could talk English fairly well.
              Inference—that she had been in England some little time, but he
              had not been in Greece.”
            </TextNode>

            <TextNode>
              “Well, then, we will presume that she had come on a visit to
              England, and that this Harold had persuaded her to fly with him.”
            </TextNode>

            <TextNode>“That is more probable.”</TextNode>

            <TextNode>
              “Then the brother—for that, I fancy, must be the
              relationship—comes over from Greece to interfere. He imprudently
              puts himself into the power of the young man and his older
              associate. They seize him and use violence towards him in order to
              make him sign some papers to make over the girl's fortune—of which
              he may be trustee—to them. This he refuses to do. In order to
              negotiate with him they have to get an interpreter, and they pitch
              upon this Mr. Melas, having used some other one before. The girl
              is not told of the arrival of her brother, and finds it out by the
              merest accident.”
            </TextNode>

            <TextNode>
              “Excellent, Watson!” cried Holmes. “I really fancy that you are
              not far from the truth. You see that we hold all the cards, and we
              have only to fear some sudden act of violence on their part. If
              they give us time we must have them.”
            </TextNode>

            <TextNode>“But how can we find where this house lies?”</TextNode>

            <TextNode>
              “Well, if our conjecture is correct and the girl's name is or was
              Sophy Kratides, we should have no difficulty in tracing her. That
              must be our main hope, for the brother is, of course, a complete
              stranger. It is clear that some time has elapsed since this Harold
              established these relations with the girl—some weeks, at any
              rate—since the brother in Greece has had time to hear of it and
              come across. If they have been living in the same place during
              this time, it is probable that we shall have some answer to
              Mycroft's advertisement.”
            </TextNode>

            <TextNode>
              We had reached our house in Baker Street while we had been
              talking. Holmes ascended the stair first, and as he opened the
              door of our room he gave a start of surprise. Looking over his
              shoulder, I was equally astonished. His brother Mycroft was
              sitting smoking in the arm-chair.
            </TextNode>

            <TextNode>
              “Come in, Sherlock! Come in, sir,” said he blandly, smiling at our
              surprised faces. “You don't expect such energy from me, do you,
              Sherlock? But somehow this case attracts me.”
            </TextNode>

            <TextNode>“How did you get here?”</TextNode>

            <TextNode>“I passed you in a hansom.”</TextNode>

            <TextNode>“There has been some new development?”</TextNode>

            <TextNode>“I had an answer to my advertisement.”</TextNode>

            <TextNode>“Ah!”</TextNode>

            <TextNode>
              “Yes, it came within a few minutes of your leaving.”
            </TextNode>

            <TextNode>“And to what effect?”</TextNode>

            <TextNode>Mycroft Holmes took out a sheet of paper.</TextNode>

            <TextNode>
              “Here it is,” said he, “written with a J pen on royal cream paper
              by a middle-aged man with a weak constitution.
            </TextNode>

            <Indent>
              <TextNode className='italic' noIndent>
                “Sir [he says]:
              </TextNode>
              <TextNode noIndent>
                “In answer to your advertisement of to-day's date, I beg to
                inform you that I know the young lady in question very well. If
                you should care to call upon me I could give you some
                particulars as to her painful history. She is living at present
                at The Myrtles, Beckenham.
              </TextNode>
              <TextNode className='italic' noIndent>
                “Yours faithfully,
              </TextNode>
              <TextNode className='italic' noIndent>
                “J. Davenport.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “He writes from Lower Brixton,” said Mycroft Holmes. “Do you not
              think that we might drive to him now, Sherlock, and learn these
              particulars?”
            </TextNode>

            <TextNode>
              “My dear Mycroft, the brother's life is more valuable than the
              sister's story. I think we should call at Scotland Yard for
              Inspector Gregson, and go straight out to Beckenham. We know that
              a man is being done to death, and every hour may be vital.”
            </TextNode>

            <TextNode>
              “Better pick up Mr. Melas on our way,” I suggested. “We may need
              an interpreter.”
            </TextNode>

            <TextNode>
              “Excellent,” said Sherlock Holmes. “Send the boy for a
              four-wheeler, and we shall be off at once.” He opened the
              table-drawer as he spoke, and I noticed that he slipped his
              revolver into his pocket. “Yes,” said he, in answer to my glance;
              “I should say from what we have heard, that we are dealing with a
              particularly dangerous gang.”
            </TextNode>

            <TextNode>
              It was almost dark before we found ourselves in Pall Mall, at the
              rooms of Mr. Melas. A gentleman had just called for him, and he
              was gone.
            </TextNode>

            <TextNode>“Can you tell me where?” asked Mycroft Holmes.</TextNode>

            <TextNode>
              “I don't know, sir,” answered the woman who had opened the door;
              “I only know that he drove away with the gentleman in a carriage.”
            </TextNode>

            <TextNode>“Did the gentleman give a name?”</TextNode>

            <TextNode>“No, sir.”</TextNode>

            <TextNode>“He wasn't a tall, handsome, dark young man?”</TextNode>

            <TextNode>
              “Oh, no, sir. He was a little gentleman, with glasses, thin in the
              face, but very pleasant in his ways, for he was laughing all the
              time that he was talking.”
            </TextNode>

            <TextNode>
              “Come along!” cried Sherlock Holmes, abruptly. “This grows
              serious,” he observed, as we drove to Scotland Yard. “These men
              have got hold of Melas again. He is a man of no physical courage,
              as they are well aware from their experience the other night. This
              villain was able to terrorize him the instant that he got into his
              presence. No doubt they want his professional services, but,
              having used him, they may be inclined to punish him for what they
              will regard as his treachery.”
            </TextNode>

            <TextNode>
              Our hope was that, by taking train, we might get to Beckenham as
              soon or sooner than the carriage. On reaching Scotland Yard,
              however, it was more than an hour before we could get Inspector
              Gregson and comply with the legal formalities which would enable
              us to enter the house. It was a quarter to ten before we reached
              London Bridge, and half past before the four of us alighted on the
              Beckenham platform. A drive of half a mile brought us to The
              Myrtles—a large, dark house standing back from the road in its own
              grounds. Here we dismissed our cab, and made our way up the drive
              together.
            </TextNode>

            <TextNode>
              “The windows are all dark,” remarked the inspector. “The house
              seems deserted.”
            </TextNode>

            <TextNode>
              “Our birds are flown and the nest empty,” said Holmes.
            </TextNode>

            <TextNode>“Why do you say so?”</TextNode>

            <TextNode>
              “A carriage heavily loaded with luggage has passed out during the
              last hour.”
            </TextNode>

            <TextNode>
              The inspector laughed. “I saw the wheel-tracks in the light of the
              gate-lamp, but where does the luggage come in?”
            </TextNode>

            <TextNode>
              “You may have observed the same wheel-tracks going the other way.
              But the outward-bound ones were very much deeper—so much so that
              we can say for a certainty that there was a very considerable
              weight on the carriage.”
            </TextNode>

            <TextNode>
              “You get a trifle beyond me there,” said the inspector, shrugging
              his shoulder. “It will not be an easy door to force, but we will
              try if we cannot make some one hear us.”
            </TextNode>

            <TextNode>
              He hammered loudly at the knocker and pulled at the bell, but
              without any success. Holmes had slipped away, but he came back in
              a few minutes.
            </TextNode>

            <TextNode>“I have a window open,” said he.</TextNode>

            <TextNode>
              “It is a mercy that you are on the side of the force, and not
              against it, Mr. Holmes,” remarked the inspector, as he noted the
              clever way in which my friend had forced back the catch. “Well, I
              think that under the circumstances we may enter without an
              invitation.”
            </TextNode>

            <TextNode>
              One after the other we made our way into a large apartment, which
              was evidently that in which Mr. Melas had found himself. The
              inspector had lit his lantern, and by its light we could see the
              two doors, the curtain, the lamp, and the suit of Japanese mail as
              he had described them. On the table lay two glasses, and empty
              brandy-bottle, and the remains of a meal.
            </TextNode>

            <TextNode>“What is that?” asked Holmes, suddenly.</TextNode>

            <TextNode>
              We all stood still and listened. A low moaning sound was coming
              from somewhere over our heads. Holmes rushed to the door and out
              into the hall. The dismal noise came from upstairs. He dashed up,
              the inspector and I at his heels, while his brother Mycroft
              followed as quickly as his great bulk would permit.
            </TextNode>

            <TextNode>
              Three doors faced up upon the second floor, and it was from the
              central of these that the sinister sounds were issuing, sinking
              sometimes into a dull mumble and rising again into a shrill whine.
              It was locked, but the key had been left on the outside. Holmes
              flung open the door and rushed in, but he was out again in an
              instant, with his hand to his throat.
            </TextNode>

            <TextNode>
              “It's charcoal,” he cried. “Give it time. It will clear.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page157;

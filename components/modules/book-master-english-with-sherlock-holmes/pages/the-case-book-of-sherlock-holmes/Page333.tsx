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

function Page333({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title="THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;LION'S&nbsp;MANE"
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              It is a most singular thing that a problem which was certainly as
              abstruse and unusual as any which I have faced in my long
              professional career should have come to me after my retirement,
              and be brought, as it were, to my very door. It occurred after my
              withdrawal to my little Sussex home, when I had given myself up
              entirely to that soothing life of Nature for which I had so often
              yearned during the long years spent amid the gloom of London. At
              this period of my life the good Watson had passed almost beyond my
              ken. An occasional week-end visit was the most that I ever saw of
              him. Thus I must act as my own chronicler. Ah! had he but been
              with me, how much he might have made of so wonderful a happening
              and of my eventual triumph against every difficulty! As it is,
              however, I must needs tell my tale in my own plain way, showing by
              my words each step upon the difficult road which lay before me as
              I searched for the mystery of the Lion's Mane.
            </TextNode>

            <TextNode>
              My villa is situated upon the southern slope of the downs,
              commanding a great view of the Channel. At this point the
              coast-line is entirely of chalk cliffs, which can only be
              descended by a single, long, tortuous path, which is steep and
              slippery. At the bottom of the path lie a hundred yards of pebbles
              and shingle, even when the tide is at full. Here and there,
              however, there are curves and hollows which make splendid
              swimming-pools filled afresh with each flow. This admirable beach
              extends for some miles in each direction, save only at one point
              where the little cove and village of Fulworth break the line.
            </TextNode>

            <TextNode>
              My house is lonely. I, my old housekeeper, and my bees have the
              estate all to ourselves. Half a mile off, however, is Harold
              Stackhurst's well-known coaching establishment, The Gables, quite
              a large place, which contains some score of young fellows
              preparing for various professions, with a staff of several
              masters. Stackhurst himself was a well-known rowing Blue in his
              day, and an excellent all-round scholar. He and I were always
              friendly from the day I came to the coast, and he was the one man
              who was on such terms with me that we could drop in on each other
              in the evenings without an invitation.
            </TextNode>

            <TextNode>
              Towards the end of July, 1907, there was a severe gale, the wind
              blowing up-channel, heaping the seas to the base of the cliffs and
              leaving a lagoon at the turn of the tide. On the morning of which
              I speak the wind had abated, and all Nature was newly washed and
              fresh. It was impossible to work upon so delightful a day, and I
              strolled out before breakfast to enjoy the exquisite air. I walked
              along the cliff path which led to the steep descent to the beach.
              As I walked I heard a shout behind me, and there was Harold
              Stackhurst waving his hand in cheery greeting.
            </TextNode>

            <TextNode>
              “What a morning, Mr. Holmes! I thought I should see you out.”
            </TextNode>

            <TextNode>“Going for a swim, I see.”</TextNode>

            <TextNode>
              “At your old tricks again,” he laughed, patting his bulging
              pocket. “Yes. McPherson started early, and I expect I may find him
              there.”
            </TextNode>

            <TextNode>
              Fitzroy McPherson was the science master, a fine upstanding young
              fellow whose life had been crippled by heart trouble following
              rheumatic fever. He was a natural athlete, however, and excelled
              in every game which did not throw too great a strain upon him.
              Summer and winter he went for his swim, and, as I am a swimmer
              myself, I have often joined him.
            </TextNode>

            <TextNode>
              At this moment we saw the man himself. His head showed above the
              edge of the cliff where the path ends. Then his whole figure
              appeared at the top, staggering like a drunken man. The next
              instant he threw up his hands and, with a terrible cry, fell upon
              his face. Stackhurst and I rushed forward—it may have been fifty
              yards—and turned him on his back. He was obviously dying. Those
              glazed sunken eyes and dreadful livid cheeks could mean nothing
              else. One glimmer of life came into his face for an instant, and
              he uttered two or three words with an eager air of warning. They
              were slurred and indistinct, but to my ear the last of them, which
              burst in a shriek from his lips, were “the Lion's Mane.” It was
              utterly irrelevant and unintelligible, and yet I could twist the
              sound into no other sense. Then he half raised himself from the
              ground, threw his arms into the air, and fell forward on his side.
              He was dead.
            </TextNode>

            <TextNode>
              My companion was paralyzed by the sudden horror of it, but I, as
              may well be imagined, had every sense on the alert. And I had
              need, for it was speedily evident that we were in the presence of
              an extraordinary case. The man was dressed only in his Burberry
              overcoat, his trousers, and an unlaced pair of canvas shoes. As he
              fell over, his Burberry, which had been simply thrown round his
              shoulders, slipped off, exposing his trunk. We stared at it in
              amazement. His back was covered with dark red lines as though he
              had been terribly flogged by a thin wire scourge. The instrument
              with which this punishment had been inflicted was clearly
              flexible, for the long, angry weals curved round his shoulders and
              ribs. There was blood dripping down his chin, for he had bitten
              through his lower lip in the paroxysm of his agony. His drawn and
              distorted face told how terrible that agony had been.
            </TextNode>

            <TextNode>
              I was kneeling and Stackhurst standing by the body when a shadow
              fell across us, and we found that Ian Murdoch was by our side.
              Murdoch was the mathematical coach at the establishment, a tall,
              dark, thin man, so taciturn and aloof that none can be said to
              have been his friend. He seemed to live in some high, abstract
              region of surds and conic sections, with little to connect him
              with ordinary life. He was looked upon as an oddity by the
              students, and would have been their butt, but there was some
              strange outlandish blood in the man, which showed itself not only
              in his coal-black eyes and swarthy face but also in occasional
              outbreaks of temper, which could only be described as ferocious.
              On one occasion, being plagued by a little dog belonging to
              McPherson, he had caught the creature up and hurled it through the
              plate-glass window, an action for which Stackhurst would certainly
              have given him his dismissal had he not been a very valuable
              teacher. Such was the strange complex man who now appeared beside
              us. He seemed to be honestly shocked at the sight before him,
              though the incident of the dog may show that there was no great
              sympathy between the dead man and himself.
            </TextNode>

            <TextNode>
              “Poor fellow! Poor fellow! What can I do? How can I help?”
            </TextNode>

            <TextNode>
              “Were you with him? Can you tell us what has happened?”
            </TextNode>

            <TextNode>
              “No, no, I was late this morning. I was not on the beach at all. I
              have come straight from The Gables. What can I do?”
            </TextNode>

            <TextNode>
              “You can hurry to the police-station at Fulworth. Report the
              matter at once.”
            </TextNode>

            <TextNode>
              Without a word he made off at top speed, and I proceeded to take
              the matter in hand, while Stackhurst, dazed at this tragedy,
              remained by the body. My first task naturally was to note who was
              on the beach. From the top of the path I could see the whole sweep
              of it, and it was absolutely deserted save that two or three dark
              figures could be seen far away moving towards the village of
              Fulworth. Having satisfied myself upon this point, I walked slowly
              down the path. There was clay or soft marl mixed with the chalk,
              and every here and there I saw the same footstep, both ascending
              and descending. No one else had gone down to the beach by this
              track that morning. At one place I observed the print of an open
              hand with the fingers towards the incline. This could only mean
              that poor McPherson had fallen as he ascended. There were rounded
              depressions, too, which suggested that he had come down upon his
              knees more than once. At the bottom of the path was the
              considerable lagoon left by the retreating tide. At the side of it
              McPherson had undressed, for there lay his towel on a rock. It was
              folded and dry, so that it would seem that, after all, he had
              never entered the water. Once or twice as I hunted round amid the
              hard shingle I came on little patches of sand where the print of
              his canvas shoe, and also of his naked foot, could be seen. The
              latter fact proved that he had made all ready to bathe, though the
              towel indicated that he had not actually done so.
            </TextNode>

            <TextNode>
              And here was the problem clearly defined—as strange a one as had
              ever confronted me. The man had not been on the beach more than a
              quarter of an hour at the most. Stackhurst had followed him from
              The Gables, so there could be no doubt about that. He had gone to
              bathe and had stripped, as the naked footsteps showed. Then he had
              suddenly huddled on his clothes again—they were all dishevelled
              and unfastened—and he had returned without bathing, or at any rate
              without drying himself. And the reason for his change of purpose
              had been that he had been scourged in some savage, inhuman
              fashion, tortured until he bit his lip through in his agony, and
              was left with only strength enough to crawl away and to die. Who
              had done this barbarous deed? There were, it is true, small
              grottos and caves in the base of the cliffs, but the low sun shone
              directly into them, and there was no place for concealment. Then,
              again, there were those distant figures on the beach. They seemed
              too far away to have been connected with the crime, and the broad
              lagoon in which McPherson had intended to bathe lay between him
              and them, lapping up to the rocks. On the sea two or three
              fishing-boats were at no great distance. Their occupants might be
              examined at our leisure. There were several roads for inquiry, but
              none which led to any very obvious goal.
            </TextNode>

            <TextNode>
              When I at last returned to the body I found that a little group of
              wondering folk had gathered round it. Stackhurst was, of course,
              still there, and Ian Murdoch had just arrived with Anderson, the
              village constable, a big, ginger-moustached man of the slow, solid
              Sussex breed—a breed which covers much good sense under a heavy,
              silent exterior. He listened to everything, took note of all we
              said, and finally drew me aside.
            </TextNode>

            <TextNode>
              “I'd be glad of your advice, Mr. Holmes. This is a big thing for
              me to handle, and I'll hear of it from Lewes if I go wrong.”
            </TextNode>

            <TextNode>
              I advised him to send for his immediate superior, and for a
              doctor; also to allow nothing to be moved, and as few fresh
              footmarks as possible to be made, until they came. In the meantime
              I searched the dead man's pockets. There were his handkerchief, a
              large knife, and a small folding card-case. From this projected a
              slip of paper, which I unfolded and handed to the constable. There
              was written on it in a scrawling, feminine hand:
            </TextNode>

            <Indent>
              <TextNode noIndent>I will be there, you may be sure.</TextNode>
              <TextNode noIndent className='italic'>
                Maudie.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              It read like a love affair, an assignation, though when and where
              were a blank. The constable replaced it in the card-case and
              returned it with the other things to the pockets of the Burberry.
              Then, as nothing more suggested itself, I walked back to my house
              for breakfast, having first arranged that the base of the cliffs
              should be thoroughly searched.
            </TextNode>

            <TextNode>
              Stackhurst was round in an hour or two to tell me that the body
              had been removed to The Gables, where the inquest would be held.
              He brought with him some serious and definite news. As I expected,
              nothing had been found in the small caves below the cliff, but he
              had examined the papers in McPherson's desk, and there were
              several which showed an intimate correspondence with a certain
              Miss Maud Bellamy, of Fulworth. We had then established the
              identity of the writer of the note.
            </TextNode>

            <TextNode>
              “The police have the letters,” he explained. “I could not bring
              them. But there is no doubt that it was a serious love affair. I
              see no reason, however, to connect it with that horrible happening
              save, indeed, that the lady had made an appointment with him.”
            </TextNode>

            <TextNode>
              “But hardly at a bathing-pool which all of you were in the habit
              of using,” I remarked.
            </TextNode>

            <TextNode>
              “It is mere chance,” said he, “that several of the students were
              not with McPherson.”
            </TextNode>

            <TextNode>“Was it mere chance?”</TextNode>

            <TextNode>Stackhurst knit his brows in thought.</TextNode>

            <TextNode>
              “Ian Murdoch held them back,” said he. “He would insist upon some
              algebraic demonstration before breakfast. Poor chap, he is
              dreadfully cut up about it all.”
            </TextNode>

            <TextNode>“And yet I gather that they were not friends.”</TextNode>

            <TextNode>
              “At one time they were not. But for a year or more Murdoch has
              been as near to McPherson as he ever could be to anyone. He is not
              of a very sympathetic disposition by nature.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “So I understand. I seem to remember your telling me once about a
              quarrel over the ill-usage of a dog.”
            </TextNode>

            <TextNode>“That blew over all right.”</TextNode>

            <TextNode>“But left some vindictive feeling, perhaps.”</TextNode>

            <TextNode>“No, no, I am sure they were real friends.”</TextNode>

            <TextNode>
              “Well, then, we must explore the matter of the girl. Do you know
              her?”
            </TextNode>

            <TextNode>
              “Everyone knows her. She is the beauty of the neighbourhood—a real
              beauty, Holmes, who would draw attention everywhere. I knew that
              McPherson was attracted by her, but I had no notion that it had
              gone so far as these letters would seem to indicate.”
            </TextNode>

            <TextNode>“But who is she?”</TextNode>

            <TextNode>
              “She is the daughter of old Tom Bellamy, who owns all the boats
              and bathing-cots at Fulworth. He was a fisherman to start with,
              but is now a man of some substance. He and his son William run the
              business.”
            </TextNode>
            <TextNode>“Shall we walk into Fulworth and see them?”</TextNode>

            <TextNode>“On what pretext?”</TextNode>

            <TextNode>
              “Oh, we can easily find a pretext. After all, this poor man did
              not ill-use himself in this outrageous way. Some human hand was on
              the handle of that scourge, if indeed it was a scourge which
              inflicted the injuries. His circle of acquaintances in this lonely
              place was surely limited. Let us follow it up in every direction
              and we can hardly fail to come upon the motive, which in turn
              should lead us to the criminal.”
            </TextNode>

            <TextNode>
              It would have been a pleasant walk across the thyme-scented downs
              had our minds not been poisoned by the tragedy we had witnessed.
              The village of Fulworth lies in a hollow curving in a semicircle
              round the bay. Behind the old-fashioned hamlet several modern
              houses have been built upon the rising ground. It was to one of
              these that Stackhurst guided me.
            </TextNode>

            <TextNode>
              “That's The Haven, as Bellamy called it. The one with the corner
              tower and slate roof. Not bad for a man who started with nothing
              but— By Jove, look at that!”
            </TextNode>

            <TextNode>
              The garden gate of The Haven had opened and a man had emerged.
              There was no mistaking that tall, angular, straggling figure. It
              was Ian Murdoch, the mathematician. A moment later we confronted
              him upon the road.
            </TextNode>

            <TextNode>
              “Hullo!” said Stackhurst. The man nodded, gave us a sideways
              glance from his curious dark eyes, and would have passed us, but
              his principal pulled him up.
            </TextNode>

            <TextNode>“What were you doing there?” he asked.</TextNode>

            <TextNode>
              Murdoch's face flushed with anger. “I am your subordinate, sir,
              under your roof. I am not aware that I owe you any account of my
              private actions.”
            </TextNode>

            <TextNode>
              Stackhurst's nerves were near the surface after all he had
              endured. Otherwise, perhaps, he would have waited. Now he lost his
              temper completely.
            </TextNode>

            <TextNode>
              “In the circumstances your answer is pure impertinence, Mr.
              Murdoch.”
            </TextNode>

            <TextNode>
              “Your own question might perhaps come under the same heading.”
            </TextNode>

            <TextNode>
              “This is not the first time that I have had to overlook your
              insubordinate ways. It will certainly be the last. You will kindly
              make fresh arrangements for your future as speedily as you can.”
            </TextNode>

            <TextNode>
              “I had intended to do so. I have lost to-day the only person who
              made The Gables habitable.”
            </TextNode>

            <TextNode>
              He strode off upon his way, while Stackhurst, with angry eyes,
              stood glaring after him. “Is he not an impossible, intolerable
              man?” he cried.
            </TextNode>

            <TextNode>
              The one thing that impressed itself forcibly upon my mind was that
              Mr. Ian Murdoch was taking the first chance to open a path of
              escape from the scene of the crime. Suspicion, vague and nebulous,
              was now beginning to take outline in my mind. Perhaps the visit to
              the Bellamys might throw some further light upon the matter.
              Stackhurst pulled himself together, and we went forward to the
              house.
            </TextNode>

            <TextNode>
              Mr. Bellamy proved to be a middle-aged man with a flaming red
              beard. He seemed to be in a very angry mood, and his face was soon
              as florid as his hair.
            </TextNode>

            <TextNode>
              “No, sir, I do not desire any particulars. My son here”—indicating
              a powerful young man, with a heavy, sullen face, in the corner of
              the sitting-room—“is of one mind with me that Mr. McPherson's
              attentions to Maud were insulting. Yes, sir, the word ‘marriage’
              was never mentioned, and yet there were letters and meetings, and
              a great deal more of which neither of us could approve. She has no
              mother, and we are her only guardians. We are determined—”
            </TextNode>

            <TextNode>
              But the words were taken from his mouth by the appearance of the
              lady herself. There was no gainsaying that she would have graced
              any assembly in the world. Who could have imagined that so rare a
              flower would grow from such a root and in such an atmosphere?
              Women have seldom been an attraction to me, for my brain has
              always governed my heart, but I could not look upon her perfect
              clear-cut face, with all the soft freshness of the downlands in
              her delicate colouring, without realizing that no young man would
              cross her path unscathed. Such was the girl who had pushed open
              the door and stood now, wide-eyed and intense, in front of Harold
              Stackhurst.
            </TextNode>

            <TextNode>
              “I know already that Fitzroy is dead,” she said. “Do not be afraid
              to tell me the particulars.”
            </TextNode>

            <TextNode>
              “This other gentleman of yours let us know the news,” explained
              the father.
            </TextNode>

            <TextNode>
              “There is no reason why my sister should be brought into the
              matter,” growled the younger man.
            </TextNode>

            <TextNode>
              The sister turned a sharp, fierce look upon him. “This is my
              business, William. Kindly leave me to manage it in my own way. By
              all accounts there has been a crime committed. If I can help to
              show who did it, it is the least I can do for him who is gone.”
            </TextNode>

            <TextNode>
              She listened to a short account from my companion, with a composed
              concentration which showed me that she possessed strong character
              as well as great beauty. Maud Bellamy will always remain in my
              memory as a most complete and remarkable woman. It seems that she
              already knew me by sight, for she turned to me at the end.
            </TextNode>

            <TextNode>
              “Bring them to justice, Mr. Holmes. You have my sympathy and my
              help, whoever they may be.” It seemed to me that she glanced
              defiantly at her father and brother as she spoke.
            </TextNode>

            <TextNode>
              “Thank you,” said I. “I value a woman's instinct in such matters.
              You use the word ‘they.’ You think that more than one was
              concerned?”
            </TextNode>

            <TextNode>
              “I knew Mr. McPherson well enough to be aware that he was a brave
              and a strong man. No single person could ever have inflicted such
              an outrage upon him.”
            </TextNode>

            <TextNode>“Might I have one word with you alone?”</TextNode>

            <TextNode>
              “I tell you, Maud, not to mix yourself up in the matter,” cried
              her father angrily.
            </TextNode>

            <TextNode>She looked at me helplessly. “What can I do?”</TextNode>

            <TextNode>
              “The whole world will know the facts presently, so there can be no
              harm if I discuss them here,” said I. “I should have preferred
              privacy, but if your father will not allow it he must share the
              deliberations.” Then I spoke of the note which had been found in
              the dead man's pocket. “It is sure to be produced at the inquest.
              May I ask you to throw any light upon it that you can?”
            </TextNode>

            <TextNode>
              “I see no reason for mystery,” she answered. “We were engaged to
              be married, and we only kept it secret because Fitzroy's uncle,
              who is very old and said to be dying, might have disinherited him
              if he had married against his wish. There was no other reason.”
            </TextNode>

            <TextNode>“You could have told us,” growled Mr. Bellamy.</TextNode>

            <TextNode>
              “So I would, father, if you had ever shown sympathy.”
            </TextNode>

            <TextNode>
              “I object to my girl picking up with men outside her own station.”
            </TextNode>

            <TextNode>
              “It was your prejudice against him which prevented us from telling
              you. As to this appointment”—she fumbled in her dress and produced
              a crumpled note—“it was in answer to this.”
            </TextNode>

            <Indent>
              <TextNode noIndent className='italic'>
                Dearest [ran the message]:
              </TextNode>
              <TextNode noIndent>
                The old place on the beach just after sunset on Tuesday. It is
                the only time I can get away.
              </TextNode>
              <TextNode noIndent className='italic'>
                F. M.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “Tuesday was to-day, and I had meant to meet him to-night.”
            </TextNode>

            <TextNode>
              I turned over the paper. “This never came by post. How did you get
              it?”
            </TextNode>

            <TextNode>
              “I would rather not answer that question. It has really nothing to
              do with the matter which you are investigating. But anything which
              bears upon that I will most freely answer.”
            </TextNode>

            <TextNode>
              She was as good as her word, but there was nothing which was
              helpful in our investigation. She had no reason to think that her
              fiance had any hidden enemy, but she admitted that she had had
              several warm admirers.
            </TextNode>

            <TextNode>“May I ask if Mr. Ian Murdoch was one of them?”</TextNode>

            <TextNode>She blushed and seemed confused.</TextNode>

            <TextNode>
              “There was a time when I thought he was. But that was all changed
              when he understood the relations between Fitzroy and myself.”
            </TextNode>

            <TextNode>
              Again the shadow round this strange man seemed to me to be taking
              more definite shape. His record must be examined. His rooms must
              be privately searched. Stackhurst was a willing collaborator, for
              in his mind also suspicions were forming. We returned from our
              visit to The Haven with the hope that one free end of this tangled
              skein was already in our hands.
            </TextNode>

            <TextNode>
              A week passed. The inquest had thrown no light upon the matter and
              had been adjourned for further evidence. Stackhurst had made
              discreet inquiry about his subordinate, and there had been a
              superficial search of his room, but without result. Personally, I
              had gone over the whole ground again, both physically and
              mentally, but with no new conclusions. In all my chronicles the
              reader will find no case which brought me so completely to the
              limit of my powers. Even my imagination could conceive no solution
              to the mystery. And then there came the incident of the dog.
            </TextNode>

            <TextNode>
              It was my old housekeeper who heard of it first by that strange
              wireless by which such people collect the news of the countryside.
            </TextNode>

            <TextNode>
              “Sad story this, sir, about Mr. McPherson's dog,” said she one
              evening.
            </TextNode>

            <TextNode>
              I do not encourage such conversations, but the words arrested my
              attention.
            </TextNode>

            <TextNode>“What of Mr. McPherson's dog?”</TextNode>

            <TextNode>“Dead, sir. Died of grief for its master.”</TextNode>

            <TextNode>“Who told you this?”</TextNode>

            <TextNode>
              “Why, sir, everyone is talking of it. It took on terrible, and has
              eaten nothing for a week. Then to-day two of the young gentlemen
              from The Gables found it dead—down on the beach, sir, at the very
              place where its master met his end.”
            </TextNode>

            <TextNode>
              “At the very place.” The words stood out clear in my memory. Some
              dim perception that the matter was vital rose in my mind. That the
              dog should die was after the beautiful, faithful nature of dogs.
              But “in the very place”! Why should this lonely beach be fatal to
              it? Was it possible that it also had been sacrificed to some
              revengeful feud? Was it possible—? Yes, the perception was dim,
              but already something was building up in my mind. In a few minutes
              I was on my way to The Gables, where I found Stackhurst in his
              study. At my request he sent for Sudbury and Blount, the two
              students who had found the dog.
            </TextNode>

            <TextNode>
              “Yes, it lay on the very edge of the pool,” said one of them. “It
              must have followed the trail of its dead master.”
            </TextNode>

            <TextNode>
              I saw the faithful little creature, an Airedale terrier, laid out
              upon the mat in the hall. The body was stiff and rigid, the eyes
              projecting, and the limbs contorted. There was agony in every line
              of it.
            </TextNode>

            <TextNode>
              From The Gables I walked down to the bathing-pool. The sun had
              sunk and the shadow of the great cliff lay black across the water,
              which glimmered dully like a sheet of lead. The place was deserted
              and there was no sign of life save for two sea-birds circling and
              screaming overhead. In the fading light I could dimly make out the
              little dog's spoor upon the sand round the very rock on which his
              master's towel had been laid. For a long time I stood in deep
              meditation while the shadows grew darker around me. My mind was
              filled with racing thoughts. You have known what it was to be in a
              nightmare in which you feel that there is some all-important thing
              for which you search and which you know is there, though it
              remains forever just beyond your reach. That was how I felt that
              evening as I stood alone by that place of death. Then at last I
              turned and walked slowly homeward.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page333;

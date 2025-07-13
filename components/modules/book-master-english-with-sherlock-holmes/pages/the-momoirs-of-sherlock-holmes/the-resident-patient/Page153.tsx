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

function Page153({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE RESIDENT PATIENT'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              Glancing over the somewhat incoherent series of Memoirs with which
              I have endeavored to illustrate a few of the mental peculiarities
              of my friend Mr. Sherlock Holmes, I have been struck by the
              difficulty which I have experienced in picking out examples which
              shall in every way answer my purpose. For in those cases in which
              Holmes has performed some{' '}
              <span className='italic'>tour&nbsp;de&nbsp;force</span> of
              analytical reasoning, and has demonstrated the value of his
              peculiar methods of investigation, the facts themselves have often
              been so slight or so commonplace that I could not feel justified
              in laying them before the public. On the other hand, it has
              frequently happened that he has been concerned in some research
              where the facts have been of the most remarkable and dramatic
              character, but where the share which he has himself taken in
              determining their causes has been less pronounced than I, as his
              biographer, could wish. The small matter which I have chronicled
              under the heading of “A Study in Scarlet,” and that other later
              one connected with the loss of the{' '}
              <span className='italic'>Gloria&nbsp;Scott</span>, may serve as
              examples of this Scylla and Charybdis which are forever
              threatening the historian. It may be that in the business of which
              I am now about to write the part which my friend played is not
              sufficiently accentuated; and yet the whole train of circumstances
              is so remarkable that I cannot bring myself to omit it entirely
              from this series.
            </TextNode>

            <TextNode>
              It had been a close, rainy day in October. Our blinds were
              half-drawn, and Holmes lay curled upon the sofa, reading and
              re-reading a letter which he had received by the morning post. For
              myself, my term of service in India had trained me to stand heat
              better than cold, and a thermometer of 90 was no hardship. But the
              paper was uninteresting. Parliament had risen. Everybody was out
              of town, and I yearned for the glades of the New Forest or the
              shingle of Southsea. A depleted bank account had caused me to
              postpone my holiday, and as to my companion, neither the country
              nor the sea presented the slightest attraction to him. He loved to
              lie in the very centre of five millions of people, with his
              filaments stretching out and running through them, responsive to
              every little rumor or suspicion of unsolved crime. Appreciation of
              Nature found no place among his many gifts, and his only change
              was when he turned his mind from the evil-doer of the town to
              track down his brother of the country.
            </TextNode>

            <TextNode>
              I cannot be sure of the exact date, for some of my memoranda upon
              the matter have been mislaid, but it must have been towards the
              end of the first year during which Holmes and I shared chambers in
              Baker Street. It was boisterous October weather, and we had both
              remained indoors all day, I because I feared with my shaken health
              to face the keen autumn wind, while he was deep in some of those
              abstruse chemical investigations which absorbed him utterly as
              long as he was engaged upon them. Towards evening, however, the
              breaking of a test-tube brought his research to a premature
              ending, and he sprang up from his chair with an exclamation of
              impatience and a clouded brow.
            </TextNode>

            <TextNode>
              “A day's work ruined, Watson,” said he, striding across to the
              window. “Ha! The stars are out and he wind has fallen. What do you
              say to a ramble through London?”
            </TextNode>

            <TextNode>
              I was weary of our little sitting-room and gladly acquiesced. For
              three hours we strolled about together, watching the ever-changing
              kaleidoscope of life as it ebbs and flows through Fleet Street and
              the Strand. His characteristic talk, with its keen observance of
              detail and subtle power of inference held me amused and
              enthralled. It was ten o'clock before we reached Baker Street
              again. A brougham was waiting at our door.
            </TextNode>

            <TextNode>
              “Hum! A doctor's—general practitioner, I perceive,” said Holmes.
              “Not been long in practice, but has had a good deal to do. Come to
              consult us, I fancy! Lucky we came back!”
            </TextNode>

            <TextNode>
              I was sufficiently conversant with Holmes's methods to be able to
              follow his reasoning, and to see that the nature and state of the
              various medical instruments in the wicker basket which hung in the
              lamplight inside the brougham had given him the data for his swift
              deduction. The light in our window above showed that this late
              visit was indeed intended for us. With some curiosity as to what
              could have sent a brother medico to us at such an hour, I followed
              Holmes into our sanctum.
            </TextNode>

            <TextNode>
              A pale, taper-faced man with sandy whiskers rose up from a chair
              by the fire as we entered. His age may not have been more than
              three or four and thirty, but his haggard expression and unhealthy
              hue told of a life which has sapped his strength and robbed him of
              his youth. His manner was nervous and shy, like that of a
              sensitive gentleman, and the thin white hand which he laid on the
              mantelpiece as he rose was that of an artist rather than of a
              surgeon. His dress was quiet and sombre—a black frock-coat, dark
              trousers, and a touch of color about his necktie.
            </TextNode>

            <TextNode>
              “Good-evening, doctor,” said Holmes, cheerily. “I am glad to see
              that you have only been waiting a very few minutes.”
            </TextNode>

            <TextNode>“You spoke to my coachman, then?”</TextNode>

            <TextNode>
              “No, it was the candle on the side-table that told me. Pray resume
              your seat and let me know how I can serve you.”
            </TextNode>

            <TextNode>
              “My name is Doctor Percy Trevelyan,” said our visitor, “and I live
              at 403 Brook Street.”
            </TextNode>

            <TextNode>
              “Are you not the author of a monograph upon obscure nervous
              lesions?” I asked.
            </TextNode>

            <TextNode>
              His pale cheeks flushed with pleasure at hearing that his work was
              known to me.
            </TextNode>

            <TextNode>
              “I so seldom hear of the work that I thought it was quite dead,”
              said he. “My publishers gave me a most discouraging account of its
              sale. You are yourself, I presume, a medical man?”
            </TextNode>

            <TextNode>“A retired army surgeon.”</TextNode>

            <TextNode>
              “My own hobby has always been nervous disease. I should wish to
              make it an absolute specialty, but, of course, a man must take
              what he can get at first. This, however, is beside the question,
              Mr. Sherlock Holmes, and I quite appreciate how valuable your time
              is. The fact is that a very singular train of events has occurred
              recently at my house in Brook Street, and to-night they came to
              such a head that I felt it was quite impossible for me to wait
              another hour before asking for your advice and assistance.”
            </TextNode>

            <TextNode>
              Sherlock Holmes sat down and lit his pipe. “You are very welcome
              to both,” said he. “Pray let me have a detailed account of what
              the circumstances are which have disturbed you.”
            </TextNode>

            <TextNode>
              “One or two of them are so trivial,” said Dr. Trevelyan, “that
              really I am almost ashamed to mention them. But the matter is so
              inexplicable, and the recent turn which it has taken is so
              elaborate, that I shall lay it all before you, and you shall judge
              what is essential and what is not.
            </TextNode>

            <TextNode>
              “I am compelled, to begin with, to say something of my own college
              career. I am a London University man, you know, and I am sure that
              you will not think that I am unduly singing my own praises if I
              say that my student career was considered by my professors to be a
              very promising one. After I had graduated I continued to devote
              myself to research, occupying a minor position in King's College
              Hospital, and I was fortunate enough to excite considerable
              interest by my research into the pathology of catalepsy, and
              finally to win the Bruce Pinkerton prize and medal by the
              monograph on nervous lesions to which your friend has just
              alluded. I should not go too far if I were to say that there was a
              general impression at that time that a distinguished career lay
              before me.
            </TextNode>

            <TextNode>
              “But the one great stumbling-block lay in my want of capital. As
              you will readily understand, a specialist who aims high is
              compelled to start in one of a dozen streets in the Cavendish
              Square quarter, all of which entail enormous rents and furnishing
              expenses. Besides this preliminary outlay, he must be prepared to
              keep himself for some years, and to hire a presentable carriage
              and horse. To do this was quite beyond my power, and I could only
              hope that by economy I might in ten years' time save enough to
              enable me to put up my plate. Suddenly, however, an unexpected
              incident opened up quite a new prospect to me.
            </TextNode>

            <TextNode>
              “This was a visit from a gentleman of the name of Blessington, who
              was a complete stranger to me. He came up to my room one morning,
              and plunged into business in an instant.
            </TextNode>

            <TextNode>
              “ ‘You are the same Percy Trevelyan who has had so distinguished a
              career and won a great prize lately?’ said he.
            </TextNode>

            <TextNode>“I bowed.</TextNode>

            <TextNode>
              “ ‘Answer me frankly,’ he continued, ‘for you will find it to your
              interest to do so. You have all the cleverness which makes a
              successful man. Have you the tact?’
            </TextNode>

            <TextNode>
              “I could not help smiling at the abruptness of the question.
            </TextNode>

            <TextNode>“ ‘I trust that I have my share,’ I said.</TextNode>

            <TextNode>
              “ ‘Any bad habits? Not drawn towards drink, eh?’
            </TextNode>

            <TextNode>“ ‘Really, sir!’ I cried.</TextNode>

            <TextNode>
              “ ‘Quite right! That's all right! But I was bound to ask. With all
              these qualities, why are you not in practice?’
            </TextNode>

            <TextNode>“I shrugged my shoulders.</TextNode>

            <TextNode>
              “ ‘Come, come!’ said he, in his bustling way. ‘It's the old story.
              More in your brains than in your pocket, eh? What would you say if
              I were to start you in Brook Street?’
            </TextNode>

            <TextNode>“I stared at him in astonishment.</TextNode>

            <TextNode>
              “ ‘Oh, it's for my sake, not for yours,’ he cried. ‘I'll be
              perfectly frank with you, and if it suits you it will suit me very
              well. I have a few thousands to invest, d'ye see, and I think I'll
              sink them in you.’
            </TextNode>

            <TextNode>“ ‘But why?’ I gasped.</TextNode>

            <TextNode>
              “ ‘Well, it's just like any other speculation, and safer than
              most.’
            </TextNode>

            <TextNode>“ ‘What am I to do, then?’</TextNode>

            <TextNode>
              “ ‘I'll tell you. I'll take the house, furnish it, pay the maids,
              and run the whole place. All you have to do is just to wear out
              your chair in the consulting-room. I'll let you have pocket-money
              and everything. Then you hand over to me three quarters of what
              you earn, and you keep the other quarter for yourself.’
            </TextNode>

            <TextNode>
              “This was the strange proposal, Mr. Holmes, with which the man
              Blessington approached me. I won't weary you with the account of
              how we bargained and negotiated. It ended in my moving into the
              house next Lady Day, and starting in practice on very much the
              same conditions as he had suggested. He came himself to live with
              me in the character of a resident patient. His heart was weak, it
              appears, and he needed constant medical supervision. He turned the
              two best rooms of the first floor into a sitting-room and bedroom
              for himself. He was a man of singular habits, shunning company and
              very seldom going out. His life was irregular, but in one respect
              he was regularity itself. Every evening, at the same hour, he
              walked into the consulting-room, examined the books, put down five
              and three-pence for every guinea that I had earned, and carried
              the rest off to the strong-box in his own room.
            </TextNode>

            <TextNode>
              “I may say with confidence that he never had occasion to regret
              his speculation. From the first it was a success. A few good cases
              and the reputation which I had won in the hospital brought me
              rapidly to the front, and during the last few years I have made
              him a rich man.
            </TextNode>

            <TextNode>
              “So much, Mr. Holmes, for my past history and my relations with
              Mr. Blessington. It only remains for me now to tell you what has
              occurred to bring me here to-night.
            </TextNode>

            <TextNode>
              “Some weeks ago Mr. Blessington came down to me in, as it seemed
              to me, a state of considerable agitation. He spoke of some
              burglary which, he said, had been committed in the West End, and
              he appeared, I remember, to be quite unnecessarily excited about
              it, declaring that a day should not pass before we should add
              stronger bolts to our windows and doors. For a week he continued
              to be in a peculiar state of restlessness, peering continually out
              of the windows, and ceasing to take the short walk which had
              usually been the prelude to his dinner. From his manner it struck
              me that he was in mortal dread of something or somebody, but when
              I questioned him upon the point he became so offensive that I was
              compelled to drop the subject. Gradually, as time passed, his
              fears appeared to die away, and he had renewed his former habits,
              when a fresh event reduced him to the pitiable state of
              prostration in which he now lies.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “What happened was this. Two days ago I received the letter which
              I now read to you. Neither address nor date is attached to it.
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “ ‘A Russian nobleman who is now resident in England,’ it runs,
                ‘would be glad to avail himself of the professional assistance
                of Dr. Percy Trevelyan. He has been for some years a victim to
                cataleptic attacks, on which, as is well known, Dr. Trevelyan is
                an authority. He proposes to call at about quarter past six
                to-morrow evening, if Dr. Trevelyan will make it convenient to
                be at home.’
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “This letter interested me deeply, because the chief difficulty in
              the study of catalepsy is the rareness of the disease. You may
              believe, than, that I was in my consulting-room when, at the
              appointed hour, the page showed in the patient.
            </TextNode>

            <TextNode>
              He was an elderly man, thin, demure, and common-place—by no means
              the conception one forms of a Russian nobleman. I was much more
              struck by the appearance of his companion. This was a tall young
              man, surprisingly handsome, with a dark, fierce face, and the
              limbs and chest of a Hercules. He had his hand under the other's
              arm as they entered, and helped him to a chair with a tenderness
              which one would hardly have expected from his appearance.
            </TextNode>

            <TextNode>
              “ ‘You will excuse my coming in, doctor,’ said he to me, speaking
              English with a slight lisp. ‘This is my father, and his health is
              a matter of the most overwhelming importance to me.’
            </TextNode>

            <TextNode>
              “I was touched by this filial anxiety. ‘You would, perhaps, care
              to remain during the consultation?’ said I.
            </TextNode>

            <TextNode>
              “ ‘Not for the world,’ he cried with a gesture of horror. ‘It is
              more painful to me than I can express. If I were to see my father
              in one of these dreadful seizures I am convinced that I should
              never survive it. My own nervous system is an exceptionally
              sensitive one. With your permission, I will remain in the
              waiting-room while you go into my father's case.’
            </TextNode>

            <TextNode>
              “To this, of course, I assented, and the young man withdrew. The
              patient and I then plunged into a discussion of his case, of which
              I took exhaustive notes. He was not remarkable for intelligence,
              and his answers were frequently obscure, which I attributed to his
              limited acquaintance with our language. Suddenly, however, as I
              sat writing, he ceased to give any answer at all to my inquiries,
              and on my turning towards him I was shocked to see that he was
              sitting bolt upright in his chair, staring at me with a perfectly
              blank and rigid face. He was again in the grip of his mysterious
              malady.
            </TextNode>

            <TextNode>
              “My first feeling, as I have just said, was one of pity and
              horror. My second, I fear, was rather one of professional
              satisfaction. I made notes of my patient's pulse and temperature,
              tested the rigidity of his muscles, and examined his reflexes.
              There was nothing markedly abnormal in any of these conditions,
              which harmonized with my former experiences. I had obtained good
              results in such cases by the inhalation of nitrite of amyl, and
              the present seemed an admirable opportunity of testing its
              virtues. The bottle was downstairs in my laboratory, so leaving my
              patient seated in his chair, I ran down to get it. There was some
              little delay in finding it—five minutes, let us say—and then I
              returned. Imagine my amazement to find the room empty and the
              patient gone.
            </TextNode>

            <TextNode>
              “Of course, my first act was to run into the waiting-room. The son
              had gone also. The hall door had been closed, but not shut. My
              page who admits patients is a new boy and by no means quick. He
              waits downstairs, and runs up to show patients out when I ring the
              consulting-room bell. He had heard nothing, and the affair
              remained a complete mystery. Mr. Blessington came in from his walk
              shortly afterwards, but I did not say anything to him upon the
              subject, for, to tell the truth, I have got in the way of late of
              holding as little communication with him as possible.
            </TextNode>

            <TextNode>
              “Well, I never thought that I should see anything more of the
              Russian and his son, so you can imagine my amazement when, at the
              very same hour this evening, they both came marching into my
              consulting-room, just as they had done before.
            </TextNode>

            <TextNode>
              “ ‘I feel that I owe you a great many apologies for my abrupt
              departure yesterday, doctor,’ said my patient.
            </TextNode>

            <TextNode>
              “ ‘I confess that I was very much surprised at it,’ said I.
            </TextNode>

            <TextNode>
              “ ‘Well, the fact is,’ he remarked, ‘that when I recover from
              these attacks my mind is always very clouded as to all that has
              gone before. I woke up in a strange room, as it seemed to me, and
              made my way out into the street in a sort of dazed way when you
              were absent.’
            </TextNode>

            <TextNode>
              “ ‘And I,’ said the son, ‘seeing my father pass the door of the
              waiting-room, naturally thought that the consultation had come to
              an end. It was not until we had reached home that I began to
              realize the true state of affairs.’
            </TextNode>

            <TextNode>
              “ ‘Well,’ said I, laughing, ‘there is no harm done except that you
              puzzled me terribly; so if you, sir, would kindly step into the
              waiting-room I shall be happy to continue our consultation which
              was brought to so abrupt an ending.’
            </TextNode>

            <TextNode>
              “For half an hour or so I discussed that old gentleman's symptoms
              with him, and then, having prescribed for him, I saw him go off
              upon the arm of his son.
            </TextNode>

            <TextNode>
              “I have told you that Mr. Blessington generally chose this hour of
              the day for his exercise. He came in shortly afterwards and passed
              upstairs. An instant later I heard him running down, and he burst
              into my consulting-room like a man who is mad with panic.
            </TextNode>

            <TextNode>“ ‘Who has been in my room?’ he cried.</TextNode>

            <TextNode>“ ‘No one,’ said I.</TextNode>

            <TextNode>“ ‘It's a lie!’ He yelled. ‘Come up and look!’</TextNode>

            <TextNode>
              “I passed over the grossness of his language, as he seemed half
              out of his mind with fear. When I went upstairs with him he
              pointed to several footprints upon the light carpet.
            </TextNode>

            <TextNode>“ ‘D'you mean to say those are mine?’ he cried.</TextNode>

            <TextNode>
              “They were certainly very much larger than any which he could have
              made, and were evidently quite fresh. It rained hard this
              afternoon, as you know, and my patients were the only people who
              called. It must have been the case, then, that the man in the
              waiting-room had, for some unknown reason, while I was busy with
              the other, ascended to the room of my resident patient. Nothing
              has been touched or taken, but there were the footprints to prove
              that the intrusion was an undoubted fact.
            </TextNode>

            <TextNode>
              “Mr. Blessington seemed more excited over the matter than I should
              have thought possible, though of course it was enough to disturb
              anybody's peace of mind. He actually sat crying in an arm-chair,
              and I could hardly get him to speak coherently. It was his
              suggestion that I should come round to you, and of course I at
              once saw the propriety of it, for certainly the incident is a very
              singular one, though he appears to completely overrate its
              importance. If you would only come back with me in my brougham,
              you would at least be able to soothe him, though I can hardly hope
              that you will be able to explain this remarkable occurrence.”
            </TextNode>

            <TextNode>
              Sherlock Holmes had listened to this long narrative with an
              intentness which showed me that his interest was keenly aroused.
              His face was as impassive as ever, but his lids had drooped more
              heavily over his eyes, and his smoke had curled up more thickly
              from his pipe to emphasize each curious episode in the doctor's
              tale. As our visitor concluded, Holmes sprang up without a word,
              handed me my hat, picked his own from the table, and followed Dr.
              Trevelyan to the door. Within a quarter of an hour we had been
              dropped at the door of the physician's residence in Brook Street,
              one of those sombre, flat-faced houses which one associates with a
              West-End practice. A small page admitted us, and we began at once
              to ascend the broad, well-carpeted stair.
            </TextNode>

            <TextNode>
              But a singular interruption brought us to a standstill. The light
              at the top was suddenly whisked out, and from the darkness came a
              reedy, quivering voice.
            </TextNode>

            <TextNode>
              “I have a pistol,” it cried. “I give you my word that I'll fire if
              you come any nearer.”
            </TextNode>

            <TextNode>
              “This really grows outrageous, Mr. Blessington,” cried Dr.
              Trevelyan.
            </TextNode>

            <TextNode>
              “Oh, then it is you, doctor,” said the voice, with a great heave
              of relief. “But those other gentlemen, are they what they pretend
              to be?”
            </TextNode>

            <TextNode>
              We were conscious of a long scrutiny out of the darkness.
            </TextNode>

            <TextNode>
              “Yes, yes, it's all right,” said the voice at last. “You can come
              up, and I am sorry if my precautions have annoyed you.”
            </TextNode>

            <TextNode>
              He relit the stair gas as he spoke, and we saw before us a
              singular-looking man, whose appearance, as well as his voice,
              testified to his jangled nerves. He was very fat, but had
              apparently at some time been much fatter, so that the skin hung
              about his face in loose pouches, like the cheeks of a blood-hound.
              He was of a sickly color, and his thin, sandy hair seemed to
              bristle up with the intensity of his emotion. In his hand he held
              a pistol, but he thrust it into his pocket as we advanced.
            </TextNode>

            <TextNode>
              “Good-evening, Mr. Holmes,” said he. “I am sure I am very much
              obliged to you for coming round. No one ever needed your advice
              more than I do. I suppose that Dr. Trevelyan has told you of this
              most unwarrantable intrusion into my rooms.”
            </TextNode>

            <TextNode>
              “Quite so,” said Holmes. “Who are these two men Mr. Blessington,
              and why do they wish to molest you?”
            </TextNode>

            <TextNode>
              “Well, well,” said the resident patient, in a nervous fashion, “of
              course it is hard to say that. You can hardly expect me to answer
              that, Mr. Holmes.”
            </TextNode>

            <TextNode>“Do you mean that you don't know?”</TextNode>

            <TextNode>
              “Come in here, if you please. Just have the kindness to step in
              here.”
            </TextNode>

            <TextNode>
              He led the way into his bedroom, which was large and comfortably
              furnished.
            </TextNode>

            <TextNode>
              “You see that,” said he, pointing to a big black box at the end of
              his bed. “I have never been a very rich man, Mr. Holmes—never made
              but one investment in my life, as Dr. Trevelyan would tell you.
              But I don't believe in bankers. I would never trust a banker, Mr.
              Holmes. Between ourselves, what little I have is in that box, so
              you can understand what it means to me when unknown people force
              themselves into my rooms.”
            </TextNode>

            <TextNode>
              Holmes looked at Blessington in his questioning way and shook his
              head.
            </TextNode>

            <TextNode>
              “I cannot possibly advise you if you try to deceive me,” said he.
            </TextNode>

            <TextNode>“But I have told you everything.”</TextNode>

            <TextNode>
              Holmes turned on his heel with a gesture of disgust. “Good-night,
              Dr. Trevelyan,” said he.
            </TextNode>

            <TextNode>
              “And no advice for me?” cried Blessington, in a breaking voice.
            </TextNode>

            <TextNode>
              “My advice to your, sir, is to speak the truth.”
            </TextNode>

            <TextNode>
              A minute later we were in the street and walking for home. We had
              crossed Oxford Street and were half way down Harley Street before
              I could get a word from my companion.
            </TextNode>

            <TextNode>
              “Sorry to bring you out on such a fool's errand, Watson,” he said
              at last. “It is an interesting case, too, at the bottom of it.”
            </TextNode>

            <TextNode>“I can make little of it,” I confessed.</TextNode>

            <TextNode>
              “Well, it is quite evident that there are two men—more, perhaps,
              but at least two—who are determined for some reason to get at this
              fellow Blessington. I have no doubt in my mind that both on the
              first and on the second occasion that young man penetrated to
              Blessington's room, while his confederate, by an ingenious device,
              kept the doctor from interfering.”
            </TextNode>

            <TextNode>“And the catalepsy?”</TextNode>

            <TextNode>
              “A fraudulent imitation, Watson, though I should hardly dare to
              hint as much to our specialist. It is a very easy complaint to
              imitate. I have done it myself.”
            </TextNode>

            <TextNode>“And then?”</TextNode>

            <TextNode>
              “By the purest chance Blessington was out on each occasion. Their
              reason for choosing so unusual an hour for a consultation was
              obviously to insure that there should be no other patient in the
              waiting-room. It just happened, however, that this hour coincided
              with Blessington's constitutional, which seems to show that they
              were not very well acquainted with his daily routine. Of course,
              if they had been merely after plunder they would at least have
              made some attempt to search for it. Besides, I can read in a man's
              eye when it is his own skin that he is frightened for. It is
              inconceivable that this fellow could have made two such vindictive
              enemies as these appear to be without knowing of it. I hold it,
              therefore, to be certain that he does know who these men are, and
              that for reasons of his own he suppresses it. It is just possible
              that to-morrow may find him in a more communicative mood.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page153;

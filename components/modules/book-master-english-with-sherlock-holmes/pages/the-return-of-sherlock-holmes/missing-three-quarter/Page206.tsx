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

function Page206({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;MISSING&nbsp;THREE&#8209;QUARTER'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “It certainly did that. But what are your alternatives?”
            </TextNode>

            <TextNode>
              “I could mention several. You must admit that it is curious and
              suggestive that this incident should occur on the eve of this
              important match, and should involve the only man whose presence
              seems essential to the success of the side. It may, of course, be
              coincidence, but it is interesting. Amateur sport is free from
              betting, but a good deal of outside betting goes on among the
              public, and it is possible that it might be worth someone's while
              to get at a player as the ruffians of the turf get at a
              race-horse. There is one explanation. A second very obvious one is
              that this young man really is the heir of a great property,
              however modest his means may at present be, and it is not
              impossible that a plot to hold him for ransom might be concocted.”
            </TextNode>

            <TextNode>
              “These theories take no account of the telegram.”
            </TextNode>

            <TextNode>
              “Quite true, Watson. The telegram still remains the only solid
              thing with which we have to deal, and we must not permit our
              attention to wander away from it. It is to gain light upon the
              purpose of this telegram that we are now upon our way to
              Cambridge. The path of our investigation is at present obscure,
              but I shall be very much surprised if before evening we have not
              cleared it up or made a considerable advance along it.”
            </TextNode>

            <TextNode>
              It was already dark when we reached the old University city.
              Holmes took a cab at the station, and ordered the man to drive to
              the house of Dr. Leslie Armstrong. A few minutes later we had
              stopped at a large mansion in the busiest thoroughfare. We were
              shown in, and after a long wait were at last admitted into the
              consulting-room, where we found the doctor seated behind his
              table.
            </TextNode>

            <TextNode>
              It argues the degree in which I had lost touch with my profession
              that the name of Leslie Armstrong was unknown to me. Now I am
              aware that he is not only one of the heads of the medical school
              of the University, but a thinker of European reputation in more
              than one branch of science. Yet even without knowing his brilliant
              record one could not fail to be impressed by a mere glance at the
              man, the square, massive face, the brooding eyes under the
              thatched brows, and the granite moulding of the inflexible jaw. A
              man of deep character, a man with an alert mind, grim, ascetic,
              self-contained, formidable—so I read Dr. Leslie Armstrong. He held
              my friend's card in his hand, and he looked up with no very
              pleased expression upon his dour features.
            </TextNode>

            <TextNode>
              “I have heard your name, Mr. Sherlock Holmes, and I am aware of
              your profession, one of which I by no means approve.”
            </TextNode>

            <TextNode>
              “In that, doctor, you will find yourself in agreement with every
              criminal in the country,” said my friend, quietly.
            </TextNode>

            <TextNode>
              “So far as your efforts are directed towards the suppression of
              crime, sir, they must have the support of every reasonable member
              of the community, though I cannot doubt that the official
              machinery is amply sufficient for the purpose. Where your calling
              is more open to criticism is when you pry into the secrets of
              private individuals, when you rake up family matters which are
              better hidden, and when you incidentally waste the time of men who
              are more busy than yourself. At the present moment, for example, I
              should be writing a treatise instead of conversing with you.”
            </TextNode>

            <TextNode>
              “No doubt, doctor; and yet the conversation may prove more
              important than the treatise. Incidentally I may tell you that we
              are doing the reverse of what you very justly blame, and that we
              are endeavouring to prevent anything like public exposure of
              private matters which must necessarily follow when once the case
              is fairly in the hands of the official police. You may look upon
              me simply as an irregular pioneer who goes in front of the regular
              forces of the country. I have come to ask you about Mr. Godfrey
              Staunton.”
            </TextNode>

            <TextNode>“What about him?”</TextNode>

            <TextNode>“You know him, do you not?”</TextNode>

            <TextNode>“He is an intimate friend of mine.”</TextNode>

            <TextNode>“You are aware that he has disappeared?”</TextNode>

            <TextNode>
              “Ah, indeed!” There was no change of expression in the rugged
              features of the doctor.
            </TextNode>

            <TextNode>
              “He left his hotel last night. He has not been heard of.”
            </TextNode>

            <TextNode>“No doubt he will return.”</TextNode>

            <TextNode>“To-morrow is the 'Varsity football match.”</TextNode>

            <TextNode>
              “I have no sympathy with these childish games. The young man's
              fate interests me deeply, since I know him and like him. The
              football match does not come within my horizon at all.”
            </TextNode>

            <TextNode>
              “I claim your sympathy, then, in my investigation of Mr.
              Staunton's fate. Do you know where he is?”
            </TextNode>

            <TextNode>“Certainly not.”</TextNode>

            <TextNode>“You have not seen him since yesterday?”</TextNode>

            <TextNode>“No, I have not.”</TextNode>

            <TextNode>“Was Mr. Staunton a healthy man?”</TextNode>

            <TextNode>“Absolutely.”</TextNode>

            <TextNode>“Did you ever know him ill?”</TextNode>

            <TextNode>“Never.”</TextNode>

            <TextNode>
              Holmes popped a sheet of paper before the doctor's eyes. “Then
              perhaps you will explain this receipted bill for thirteen guineas,
              paid by Mr. Godfrey Staunton last month to Dr. Leslie Armstrong of
              Cambridge. I picked it out from among the papers upon his desk.”
            </TextNode>

            <TextNode>The doctor flushed with anger.</TextNode>

            <TextNode>
              “I do not feel that there is any reason why I should render an
              explanation to you, Mr. Holmes.”
            </TextNode>

            <TextNode>
              Holmes replaced the bill in his note-book. “If you prefer a public
              explanation it must come sooner or later,” said he. “I have
              already told you that I can hush up that which others will be
              bound to publish, and you would really be wiser to take me into
              your complete confidence.”
            </TextNode>

            <TextNode>“I know nothing about it.”</TextNode>

            <TextNode>“Did you hear from Mr. Staunton in London?”</TextNode>

            <TextNode>“Certainly not.”</TextNode>

            <TextNode>
              “Dear me, dear me; the post-office again!” Holmes sighed, wearily.
              “A most urgent telegram was dispatched to you from London by
              Godfrey Staunton at six-fifteen yesterday evening—a telegram which
              is undoubtedly associated with his disappearance—and yet you have
              not had it. It is most culpable. I shall certainly go down to the
              office here and register a complaint.”
            </TextNode>

            <TextNode>
              Dr. Leslie Armstrong sprang up from behind his desk, and his dark
              face was crimson with fury.
            </TextNode>

            <TextNode>
              “I'll trouble you to walk out of my house, sir,” said he. “You can
              tell your employer, Lord Mount-James, that I do not wish to have
              anything to do either with him or with his agents. No, sir, not
              another word!” He rang the bell furiously. “John, show these
              gentlemen out!” A pompous butler ushered us severely to the door,
              and we found ourselves in the street. Holmes burst out laughing.
            </TextNode>

            <TextNode>
              “Dr. Leslie Armstrong is certainly a man of energy and character,”
              said he. “I have not seen a man who, if he turned his talents that
              way, was more calculated to fill the gap left by the illustrious
              Moriarty. And now, my poor Watson, here we are, stranded and
              friendless in this inhospitable town, which we cannot leave
              without abandoning our case. This little inn just opposite
              Armstrong's house is singularly adapted to our needs. If you would
              engage a front room and purchase the necessaries for the night, I
              may have time to make a few inquiries.”
            </TextNode>

            <TextNode>
              These few inquiries proved, however, to be a more lengthy
              proceeding than Holmes had imagined, for he did not return to the
              inn until nearly nine o'clock. He was pale and dejected, stained
              with dust, and exhausted with hunger and fatigue. A cold supper
              was ready upon the table, and when his needs were satisfied and
              his pipe alight he was ready to take that half comic and wholly
              philosophic view which was natural to him when his affairs were
              going awry. The sound of carriage wheels caused him to rise and
              glance out of the window. A brougham and pair of greys under the
              glare of a gas-lamp stood before the doctor's door.
            </TextNode>

            <TextNode>
              “It's been out three hours,” said Holmes; “started at half-past
              six, and here it is back again. That gives a radius of ten or
              twelve miles, and he does it once, or sometimes twice, a day.”
            </TextNode>

            <TextNode>“No unusual thing for a doctor in practice.”</TextNode>

            <TextNode>
              “But Armstrong is not really a doctor in practice. He is a
              lecturer and a consultant, but he does not care for general
              practice, which distracts him from his literary work. Why, then,
              does he make these long journeys, which must be exceedingly
              irksome to him, and who is it that he visits?”
            </TextNode>

            <TextNode>“His coachman—”</TextNode>

            <TextNode>
              “My dear Watson, can you doubt that it was to him that I first
              applied? I do not know whether it came from his own innate
              depravity or from the promptings of his master, but he was rude
              enough to set a dog at me. Neither dog nor man liked the look of
              my stick, however, and the matter fell through. Relations were
              strained after that, and further inquiries out of the question.
              All that I have learned I got from a friendly native in the yard
              of our own inn. It was he who told me of the doctor's habits and
              of his daily journey. At that instant, to give point to his words,
              the carriage came round to the door.”
            </TextNode>

            <TextNode>“Could you not follow it?”</TextNode>

            <TextNode>
              “Excellent, Watson! You are scintillating this evening. The idea
              did cross my mind. There is, as you may have observed, a bicycle
              shop next to our inn. Into this I rushed, engaged a bicycle, and
              was able to get started before the carriage was quite out of
              sight. I rapidly overtook it, and then, keeping at a discreet
              distance of a hundred yards or so, I followed its lights until we
              were clear of the town. We had got well out on the country road
              when a somewhat mortifying incident occurred. The carriage
              stopped, the doctor alighted, walked swiftly back to where I had
              also halted, and told me in an excellent sardonic fashion that he
              feared the road was narrow, and that he hoped his carriage did not
              impede the passage of my bicycle. Nothing could have been more
              admirable than his way of putting it. I at once rode past the
              carriage, and, keeping to the main road, I went on for a few
              miles, and then halted in a convenient place to see if the
              carriage passed. There was no sign of it, however, and so it
              became evident that it had turned down one of several side roads
              which I had observed. I rode back, but again saw nothing of the
              carriage, and now, as you perceive, it has returned after me. Of
              course, I had at the outset no particular reason to connect these
              journeys with the disappearance of Godfrey Staunton, and was only
              inclined to investigate them on the general grounds that
              everything which concerns Dr. Armstrong is at present of interest
              to us; but, now that I find he keeps so keen a look-out upon
              anyone who may follow him on these excursions, the affair appears
              more important, and I shall not be satisfied until I have made the
              matter clear.”
            </TextNode>

            <TextNode>“We can follow him to-morrow.”</TextNode>

            <TextNode>
              “Can we? It is not so easy as you seem to think. You are not
              familiar with Cambridgeshire scenery, are you? It does not lend
              itself to concealment. All this country that I passed over
              to-night is as flat and clean as the palm of your hand, and the
              man we are following is no fool, as he very clearly showed
              to-night. I have wired to Overton to let us know any fresh London
              developments at this address, and in the meantime we can only
              concentrate our attention upon Dr. Armstrong, whose name the
              obliging young lady at the office allowed me to read upon the
              counterfoil of Staunton's urgent message. He knows where the young
              man is—to that I'll swear—and if he knows, then it must be our own
              fault if we cannot manage to know also. At present it must be
              admitted that the odd trick is in his possession, and, as you are
              aware, Watson, it is not my habit to leave the game in that
              condition.”
            </TextNode>

            <TextNode>
              And yet the next day brought us no nearer to the solution of the
              mystery. A note was handed in after breakfast, which Holmes passed
              across to me with a smile.
            </TextNode>

            <Indent>
              <TextNode noIndent className='italic'>
                Sir [it ran]:
              </TextNode>
              <TextNode noIndent>
                I can assure you that you are wasting your time in dogging my
                movements. I have, as you discovered last night, a window at the
                back of my brougham, and if you desire a twenty-mile ride which
                will lead you to the spot from which you started, you have only
                to follow me. Meanwhile, I can inform you that no spying upon me
                can in any way help Mr. Godfrey Staunton, and I am convinced
                that the best service you can do to that gentleman is to return
                at once to London and to report to your employer that you are
                unable to trace him. Your time in Cambridge will certainly be
                wasted.
              </TextNode>
              <TextNode noIndent className='italic'>
                Yours faithfully,
              </TextNode>
              <TextNode noIndent className='italic'>
                Leslie Armstrong.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “An outspoken, honest antagonist is the doctor,” said Holmes.
              “Well, well, he excites my curiosity, and I must really know more
              before I leave him.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “His carriage is at his door now,” said I. “There he is stepping
              into it. I saw him glance up at our window as he did so. Suppose I
              try my luck upon the bicycle?”
            </TextNode>

            <TextNode>
              “No, no, my dear Watson! With all respect for your natural acumen
              I do not think that you are quite a match for the worthy doctor. I
              think that possibly I can attain our end by some independent
              explorations of my own. I am afraid that I must leave you to your
              own devices, as the appearance of two inquiring strangers upon a
              sleepy countryside might excite more gossip than I care for. No
              doubt you will find some sights to amuse you in this venerable
              city, and I hope to bring back a more favourable report to you
              before evening.”
            </TextNode>

            <TextNode>
              Once more, however, my friend was destined to be disappointed. He
              came back at night weary and unsuccessful.
            </TextNode>

            <TextNode>
              “I have had a blank day, Watson. Having got the doctor's general
              direction, I spent the day in visiting all the villages upon that
              side of Cambridge, and comparing notes with publicans and other
              local news agencies. I have covered some ground: Chesterton,
              Histon, Waterbeach, and Oakington have each been explored and have
              each proved disappointing. The daily appearance of a brougham and
              pair could hardly have been overlooked in such Sleepy Hollows. The
              doctor has scored once more. Is there a telegram for me?”
            </TextNode>

            <TextNode>“Yes; I opened it. Here it is:</TextNode>

            <TextNode>
              “ ‘Ask for Pompey from Jeremy Dixon, Trinity College.’
            </TextNode>

            <TextNode>“I don't understand it.”</TextNode>

            <TextNode>
              “Oh, it is clear enough. It is from our friend Overton, and is in
              answer to a question from me. I'll just send round a note to Mr.
              Jeremy Dixon, and then I have no doubt that our luck will turn. By
              the way, is there any news of the match?”
            </TextNode>

            <TextNode>
              “Yes, the local evening paper has an excellent account in its last
              edition. Oxford won by a goal and two tries. The last sentences of
              the description say:
            </TextNode>

            <TextNode>
              “ ‘The defeat of the Light Blues may be entirely attributed to the
              unfortunate absence of the crack International, Godfrey Staunton,
              whose want was felt at every instant of the game. The lack of
              combination in the three-quarter line and their weakness both in
              attack and defence more than neutralized the efforts of a heavy
              and hard-working pack.’”
            </TextNode>
            <TextNode>
              “Then our friend Overton's forebodings have been justified,” said
              Holmes. “Personally I am in agreement with Dr. Armstrong, and
              football does not come within my horizon. Early to bed to-night,
              Watson, for I foresee that to-morrow may be an eventful day.”
            </TextNode>

            <TextNode>
              I was horrified by my first glimpse of Holmes next morning, for he
              sat by the fire holding his tiny hypodermic syringe. I associated
              that instrument with the single weakness of his nature, and I
              feared the worst when I saw it glittering in his hand. He laughed
              at my expression of dismay, and laid it upon the table.
            </TextNode>

            <TextNode>
              “No, no, my dear fellow, there is no cause for alarm. It is not
              upon this occasion the instrument of evil, but it will rather
              prove to be the key which will unlock our mystery. On this syringe
              I base all my hopes. I have just returned from a small scouting
              expedition and everything is favourable. Eat a good breakfast,
              Watson, for I propose to get upon Dr. Armstrong's trail to-day,
              and once on it I will not stop for rest or food until I run him to
              his burrow.”
            </TextNode>

            <TextNode>
              “In that case,” said I, “we had best carry our breakfast with us,
              for he is making an early start. His carriage is at the door.”
            </TextNode>

            <TextNode>
              “Never mind. Let him go. He will be clever if he can drive where I
              cannot follow him. When you have finished come downstairs with me,
              and I will introduce you to a detective who is a very eminent
              specialist in the work that lies before us.”
            </TextNode>

            <TextNode>
              When we descended I followed Holmes into the stable yard, where he
              opened the door of a loose-box and led out a squat, lop-eared,
              white-and-tan dog, something between a beagle and a foxhound.
            </TextNode>

            <TextNode>
              “Let me introduce you to Pompey,” said he. “Pompey is the pride of
              the local draghounds, no very great flier, as his build will show,
              but a staunch hound on a scent. Well, Pompey, you may not be fast,
              but I expect you will be too fast for a couple of middle-aged
              London gentlemen, so I will take the liberty of fastening this
              leather leash to your collar. Now, boy, come along, and show what
              you can do.” He led him across to the doctor's door. The dog
              sniffed round for an instant, and then with a shrill whine of
              excitement started off down the street, tugging at his leash in
              his efforts to go faster. In half an hour, we were clear of the
              town and hastening down a country road.
            </TextNode>

            <TextNode>“What have you done, Holmes?” I asked.</TextNode>

            <TextNode>
              “A threadbare and venerable device, but useful upon occasion. I
              walked into the doctor's yard this morning and shot my syringe
              full of aniseed over the hind wheel. A draghound will follow
              aniseed from here to John o' Groat's, and our friend Armstrong
              would have to drive through the Cam before he would shake Pompey
              off his trail. Oh, the cunning rascal! This is how he gave me the
              slip the other night.”
            </TextNode>

            <TextNode>
              The dog had suddenly turned out of the main road into a
              grass-grown lane. Half a mile farther this opened into another
              broad road, and the trail turned hard to the right in the
              direction of the town, which we had just quitted. The road took a
              sweep to the south of the town and continued in the opposite
              direction to that in which we started.
            </TextNode>

            <TextNode>
              “This <span className='italic'>détour</span> has been entirely for
              our benefit, then?” said Holmes. “No wonder that my inquiries
              among those villages led to nothing. The doctor has certainly
              played the game for all it is worth, and one would like to know
              the reason for such elaborate deception. This should be the
              village of Trumpington to the right of us. And, by Jove! here is
              the brougham coming round the corner. Quick, Watson, quick, or we
              are done!”
            </TextNode>

            <TextNode>
              He sprang through a gate into a field, dragging the reluctant
              Pompey after him. We had hardly got under the shelter of the hedge
              when the carriage rattled past. I caught a glimpse of Dr.
              Armstrong within, his shoulders bowed, his head sunk on his hands,
              the very image of distress. I could tell by my companion's graver
              face that he also had seen.
            </TextNode>

            <TextNode>
              “I fear there is some dark ending to our quest,” said he. “It
              cannot be long before we know it. Come, Pompey! Ah, it is the
              cottage in the field!”
            </TextNode>

            <TextNode>
              There could be no doubt that we had reached the end of our
              journey. Pompey ran about and whined eagerly outside the gate
              where the marks of the brougham's wheels were still to be seen. A
              footpath led across to the lonely cottage. Holmes tied the dog to
              the hedge, and we hastened onwards. My friend knocked at the
              little rustic door, and knocked again without response. And yet
              the cottage was not deserted, for a low sound came to our ears—a
              kind of drone of misery and despair, which was indescribably
              melancholy. Holmes paused irresolute, and then he glanced back at
              the road which we had just traversed. A brougham was coming down
              it, and there could be no mistaking those grey horses.
            </TextNode>

            <TextNode>
              “By Jove, the doctor is coming back!” cried Holmes. “That settles
              it. We are bound to see what it means before he comes.”
            </TextNode>

            <TextNode>
              He opened the door and we stepped into the hall. The droning sound
              swelled louder upon our ears until it became one long, deep wail
              of distress. It came from upstairs. Holmes darted up and I
              followed him. He pushed open a half-closed door and we both stood
              appalled at the sight before us.
            </TextNode>

            <TextNode>
              A woman, young and beautiful, was lying dead upon the bed. Her
              calm, pale face, with dim, wide-opened blue eyes, looked upward
              from amid a great tangle of golden hair. At the foot of the bed,
              half sitting, half kneeling, his face buried in the clothes, was a
              young man, whose frame was racked by his sobs. So absorbed was he
              by his bitter grief that he never looked up until Holmes's hand
              was on his shoulder.
            </TextNode>

            <TextNode>“Are you Mr. Godfrey Staunton?”</TextNode>

            <TextNode>
              “Yes, yes; I am—but you are too late. She is dead.”
            </TextNode>

            <TextNode>
              The man was so dazed that he could not be made to understand that
              we were anything but doctors who had been sent to his assistance.
              Holmes was endeavouring to utter a few words of consolation, and
              to explain the alarm which had been caused to his friends by his
              sudden disappearance, when there was a step upon the stairs, and
              there was the heavy, stern, questioning face of Dr. Armstrong at
              the door.
            </TextNode>

            <TextNode>
              “So, gentlemen,” said he, “you have attained your end, and have
              certainly chosen a particularly delicate moment for your
              intrusion. I would not brawl in the presence of death, but I can
              assure you that if I were a younger man your monstrous conduct
              would not pass with impunity.”
            </TextNode>

            <TextNode>
              “Excuse me, Dr. Armstrong, I think we are a little at
              cross-purposes,” said my friend, with dignity. “If you could step
              downstairs with us we may each be able to give some light to the
              other upon this miserable affair.”
            </TextNode>
            <TextNode>
              A minute later the grim doctor and ourselves were in the
              sitting-room below.
            </TextNode>

            <TextNode>“Well, sir?” said he.</TextNode>

            <TextNode>
              “I wish you to understand, in the first place, that I am not
              employed by Lord Mount-James, and that my sympathies in this
              matter are entirely against that nobleman. When a man is lost it
              is my duty to ascertain his fate, but having done so the matter
              ends so far as I am concerned; and so long as there is nothing
              criminal, I am much more anxious to hush up private scandals than
              to give them publicity. If, as I imagine, there is no breach of
              the law in this matter, you can absolutely depend upon my
              discretion and my co-operation in keeping the facts out of the
              papers.”
            </TextNode>

            <TextNode>
              Dr. Armstrong took a quick step forward and wrung Holmes by the
              hand.
            </TextNode>

            <TextNode>
              “You are a good fellow,” said he. “I had misjudged you. I thank
              Heaven that my compunction at leaving poor Staunton all alone in
              this plight caused me to turn my carriage back, and so to make
              your acquaintance. Knowing as much as you do, the situation is
              very easily explained. A year ago Godfrey Staunton lodged in
              London for a time, and became passionately attached to his
              landlady's daughter, whom he married. She was as good as she was
              beautiful, and as intelligent as she was good. No man need be
              ashamed of such a wife. But Godfrey was the heir to this crabbed
              old nobleman, and it was quite certain that the news of his
              marriage would have been the end of his inheritance. I knew the
              lad well, and I loved him for his many excellent qualities. I did
              all I could to help him to keep things straight. We did our very
              best to keep the thing from everyone, for when once such a whisper
              gets about it is not long before everyone has heard it. Thanks to
              this lonely cottage and his own discretion, Godfrey has up to now
              succeeded. Their secret was known to no one save to me and to one
              excellent servant who has at present gone for assistance to
              Trumpington. But at last there came a terrible blow in the shape
              of dangerous illness to his wife. It was consumption of the most
              virulent kind. The poor boy was half crazed with grief, and yet he
              had to go to London to play this match, for he could not get out
              of it without explanations which would expose his secret. I tried
              to cheer him up by a wire, and he sent me one in reply imploring
              me to do all I could. This was the telegram which you appear in
              some inexplicable way to have seen. I did not tell him how urgent
              the danger was, for I knew that he could do no good here, but I
              sent the truth to the girl's father, and he very injudiciously
              communicated it to Godfrey. The result was that he came straight
              away in a state bordering on frenzy, and has remained in the same
              state, kneeling at the end of her bed, until this morning death
              put an end to her sufferings. That is all, Mr. Holmes, and I am
              sure that I can rely upon your discretion and that of your
              friend.”
            </TextNode>

            <TextNode>Holmes grasped the doctor's hand.</TextNode>

            <TextNode>
              “Come, Watson,” said he, and we passed from that house of grief
              into the pale sunlight of the winter day.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page206;

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

function Page146({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE REIGATE SQUIRES'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“Naturally.”</TextNode>

            <TextNode>
              “Then we had a look at this poor fellow's mother. We could get no
              information from her, however, as she is very old and feeble.”
            </TextNode>

            <TextNode>
              “And what is the result of your investigations?”
            </TextNode>

            <TextNode>
              “The conviction that the crime is a very peculiar one. Perhaps our
              visit now may do something to make it less obscure. I think that
              we are both agreed, Inspector, that the fragment of paper in the
              dead man's hand, bearing, as it does, the very hour of his death
              written upon it, is of extreme importance.”
            </TextNode>

            <TextNode>“It should give a clue, Mr. Holmes.”</TextNode>

            <TextNode>
              “It does give a clue. Whoever wrote that note was the man who
              brought William Kirwan out of his bed at that hour. But where is
              the rest of that sheet of paper?”
            </TextNode>

            <TextNode>
              “I examined the ground carefully in the hope of finding it,” said
              the Inspector.
            </TextNode>

            <TextNode>
              “It was torn out of the dead man's hand. Why was some one so
              anxious to get possession of it? Because it incriminated him. And
              what would he do with it? Thrust it into his pocket, most likely,
              never noticing that a corner of it had been left in the grip of
              the corpse. If we could get the rest of that sheet it is obvious
              that we should have gone a long way towards solving the mystery.”
            </TextNode>

            <TextNode>
              “Yes, but how can we get at the criminal's pocket before we catch
              the criminal?”
            </TextNode>

            <TextNode>
              “Well, well, it was worth thinking over. Then there is another
              obvious point. The note was sent to William. The man who wrote it
              could not have taken it; otherwise, of course, he might have
              delivered his own message by word of mouth. Who brought the note,
              then? Or did it come through the post?”
            </TextNode>

            <TextNode>
              “I have made inquiries,” said the Inspector. “William received a
              letter by the afternoon post yesterday. The envelope was destroyed
              by him.”
            </TextNode>

            <TextNode>
              “Excellent!” cried Holmes, clapping the Inspector on the back.
              “You've seen the postman. It is a pleasure to work with you. Well,
              here is the lodge, and if you will come up, Colonel, I will show
              you the scene of the crime.”
            </TextNode>

            <TextNode>
              We passed the pretty cottage where the murdered man had lived, and
              walked up an oak-lined avenue to the fine old Queen Anne house,
              which bears the date of Malplaquet upon the lintel of the door.
              Holmes and the Inspector led us round it until we came to the side
              gate, which is separated by a stretch of garden from the hedge
              which lines the road. A constable was standing at the kitchen
              door.
            </TextNode>

            <TextNode>
              “Throw the door open, officer,” said Holmes. “Now, it was on those
              stairs that young Mr. Cunningham stood and saw the two men
              struggling just where we are. Old Mr. Cunningham was at that
              window—the second on the left—and he saw the fellow get away just
              to the left of that bush. So did the son. They are both sure of it
              on account of the bush. Then Mr. Alec ran out and knelt beside the
              wounded man. The ground is very hard, you see, and there are no
              marks to guide us.” As he spoke two men came down the garden path,
              from round the angle of the house. The one was an elderly man,
              with a strong, deep-lined, heavy-eyed face; the other a dashing
              young fellow, whose bright, smiling expression and showy dress
              were in strange contrast with the business which had brought us
              there.
            </TextNode>

            <TextNode>
              “Still at it, then?” said he to Holmes. “I thought you Londoners
              were never at fault. You don't seem to be so very quick, after
              all.”
            </TextNode>

            <TextNode>
              “Ah, you must give us a little time,” said Holmes good-humoredly.
            </TextNode>

            <TextNode>
              “You'll want it,” said young Alec Cunningham. “Why, I don't see
              that we have any clue at all.”
            </TextNode>

            <TextNode>
              “There's only one,” answered the Inspector. “We thought that if we
              could only find—Good heavens, Mr. Holmes! What is the matter?”
            </TextNode>

            <TextNode>
              My poor friend's face had suddenly assumed the most dreadful
              expression. His eyes rolled upwards, his features writhed in
              agony, and with a suppressed groan he dropped on his face upon the
              ground. Horrified at the suddenness and severity of the attack, we
              carried him into the kitchen, where he lay back in a large chair,
              and breathed heavily for some minutes. Finally, with a shamefaced
              apology for his weakness, he rose once more.
            </TextNode>

            <TextNode>
              “Watson would tell you that I have only just recovered from a
              severe illness,” he explained. “I am liable to these sudden
              nervous attacks.”
            </TextNode>

            <TextNode>
              “Shall I send you home in my trap?” asked old Cunningham.
            </TextNode>

            <TextNode>
              “Well, since I am here, there is one point on which I should like
              to feel sure. We can very easily verify it.”
            </TextNode>

            <TextNode>“What was it?”</TextNode>

            <TextNode>
              “Well, it seems to me that it is just possible that the arrival of
              this poor fellow William was not before, but after, the entrance
              of the burglary into the house. You appear to take it for granted
              that, although the door was forced, the robber never got in.”
            </TextNode>

            <TextNode>
              “I fancy that is quite obvious,” said Mr. Cunningham, gravely.
              “Why, my son Alec had not yet gone to bed, and he would certainly
              have heard any one moving about.”
            </TextNode>

            <TextNode>“Where was he sitting?”</TextNode>

            <TextNode>“I was smoking in my dressing-room.”</TextNode>

            <TextNode>“Which window is that?”</TextNode>

            <TextNode>“The last on the left next my father's.”</TextNode>

            <TextNode>“Both of your lamps were lit, of course?”</TextNode>

            <TextNode>“Undoubtedly.”</TextNode>

            <TextNode>
              “There are some very singular points here,” said Holmes, smiling.
              “Is it not extraordinary that a burglary—and a burglar who had had
              some previous experience—should deliberately break into a house at
              a time when he could see from the lights that two of the family
              were still afoot?”
            </TextNode>

            <TextNode>“He must have been a cool hand.”</TextNode>

            <TextNode>
              “Well, of course, if the case were not an odd one we should not
              have been driven to ask you for an explanation,” said young Mr.
              Alec. “But as to your ideas that the man had robbed the house
              before William tackled him, I think it a most absurd notion.
              Wouldn't we have found the place disarranged, and missed the
              things which he had taken?”
            </TextNode>

            <TextNode>
              “It depends on what the things were,” said Holmes. “You must
              remember that we are dealing with a burglar who is a very peculiar
              fellow, and who appears to work on lines of his own. Look, for
              example, at the queer lot of things which he took from
              Acton's—what was it?—a ball of string, a letter-weight, and I
              don't know what other odds and ends.”
            </TextNode>

            <TextNode>
              “Well, we are quite in your hands, Mr. Holmes,” said old
              Cunningham. “Anything which you or the Inspector may suggest will
              most certainly be done.”
            </TextNode>

            <TextNode>
              “In the first place,” said Holmes, “I should like you to offer a
              reward—coming from yourself, for the officials may take a little
              time before they would agree upon the sum, and these things cannot
              be done too promptly. I have jotted down the form here, if you
              would not mind signing it. Fifty pound was quite enough, I
              thought.”
            </TextNode>

            <TextNode>
              “I would willingly give five hundred,” said the J.P., taking the
              slip of paper and the pencil which Holmes handed to him. “This is
              not quite correct, however,” he added, glancing over the document.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“I wrote it rather hurriedly.”</TextNode>

            <TextNode>
              “You see you begin, ‘Whereas, at about a quarter to one on Tuesday
              morning an attempt was made,’ and so on. It was at a quarter to
              twelve, as a matter of fact.”
            </TextNode>

            <TextNode>
              I was pained at the mistake, for I knew how keenly Holmes would
              feel any slip of the kind. It was his specialty to be accurate as
              to fact, but his recent illness had shaken him, and this one
              little incident was enough to show me that he was still far from
              being himself. He was obviously embarrassed for an instant, while
              the Inspector raised his eyebrows, and Alec Cunningham burst into
              a laugh. The old gentleman corrected the mistake, however, and
              handed the paper back to Holmes.
            </TextNode>

            <TextNode>
              “Get it printed as soon as possible,” he said; “I think your idea
              is an excellent one.”
            </TextNode>

            <TextNode>
              Holmes put the slip of paper carefully away into his pocket-book.
            </TextNode>

            <TextNode>
              “And now,” said he, “it really would be a good thing that we
              should all go over the house together and make certain that this
              rather erratic burglar did not, after all, carry anything away
              with him.”
            </TextNode>

            <TextNode>
              Before entering, Holmes made an examination of the door which had
              been forced. It was evident that a chisel or strong knife had been
              thrust in, and the lock forced back with it. We could see the
              marks in the wood where it had been pushed in.
            </TextNode>

            <TextNode>“You don't use bars, then?” he asked.</TextNode>

            <TextNode>“We have never found it necessary.”</TextNode>

            <TextNode>“You don't keep a dog?”</TextNode>

            <TextNode>
              “Yes, but he is chained on the other side of the house.”
            </TextNode>

            <TextNode>“When do the servants go to bed?”</TextNode>

            <TextNode>“About ten.”</TextNode>

            <TextNode>
              “I understand that William was usually in bed also at that hour.”
            </TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>
              “It is singular that on this particular night he should have been
              up. Now, I should be very glad if you would have the kindness to
              show us over the house, Mr. Cunningham.”
            </TextNode>

            <TextNode>
              A stone-flagged passage, with the kitchens branching away from it,
              led by a wooden staircase directly to the first floor of the
              house. It came out upon the landing opposite to a second more
              ornamental stair which came up from the front hall. Out of this
              landing opened the drawing-room and several bedrooms, including
              those of Mr. Cunningham and his son. Holmes walked slowly, taking
              keen note of the architecture of the house. I could tell from his
              expression that he was on a hot scent, and yet I could not in the
              least imagine in what direction his inferences were leading him.
            </TextNode>

            <TextNode>
              “My good sir,” said Mr. Cunningham with some impatience, “this is
              surely very unnecessary. That is my room at the end of the stairs,
              and my son's is the one beyond it. I leave it to your judgment
              whether it was possible for the thief to have come up here without
              disturbing us.”
            </TextNode>

            <TextNode>
              “You must try round and get on a fresh scent, I fancy,” said the
              son with a rather malicious smile.
            </TextNode>

            <TextNode>
              “Still, I must ask you to humor me a little further. I should
              like, for example, to see how far the windows of the bedrooms
              command the front. This, I understand is your son's room”—he
              pushed open the door—“and that, I presume, is the dressing-room in
              which he sat smoking when the alarm was given. Where does the
              window of that look out to?” He stepped across the bedroom, pushed
              open the door, and glanced round the other chamber.
            </TextNode>

            <TextNode>
              “I hope that you are satisfied now?” said Mr. Cunningham, tartly.
            </TextNode>

            <TextNode>
              “Thank you, I think I have seen all that I wished.”
            </TextNode>

            <TextNode>
              “Then if it is really necessary we can go into my room.”
            </TextNode>

            <TextNode>“If it is not too much trouble.”</TextNode>

            <TextNode>
              The J.P. shrugged his shoulders, and led the way into his own
              chamber, which was a plainly furnished and commonplace room. As we
              moved across it in the direction of the window, Holmes fell back
              until he and I were the last of the group. Near the foot of the
              bed stood a dish of oranges and a carafe of water. As we passed it
              Holmes, to my unutterable astonishment, leaned over in front of me
              and deliberately knocked the whole thing over. The glass smashed
              into a thousand pieces and the fruit rolled about into every
              corner of the room.
            </TextNode>

            <TextNode>
              “You've done it now, Watson,” said he, coolly. “A pretty mess
              you've made of the carpet.”
            </TextNode>

            <TextNode>
              I stooped in some confusion and began to pick up the fruit,
              understanding for some reason my companion desired me to take the
              blame upon myself. The others did the same, and set the table on
              its legs again.
            </TextNode>

            <TextNode>
              “Hullo!” cried the Inspector, “where's he got to?”
            </TextNode>

            <TextNode>Holmes had disappeared.</TextNode>

            <TextNode>
              “Wait here an instant,” said young Alec Cunningham. “The fellow is
              off his head, in my opinion. Come with me, father, and see where
              he has got to!”
            </TextNode>

            <TextNode>
              They rushed out of the room, leaving the Inspector, the Colonel,
              and me staring at each other.
            </TextNode>

            <TextNode>
              “'Pon my word, I am inclined to agree with Master Alec,” said the
              official. “It may be the effect of this illness, but it seems to
              me that—”
            </TextNode>

            <TextNode>
              His words were cut short by a sudden scream of “Help! Help!
              Murder!” With a thrill I recognised the voice as that of my
              friend. I rushed madly from the room on to the landing. The cries,
              which had sunk down into a hoarse, inarticulate shouting, came
              from the room which we had first visited. I dashed in, and on into
              the dressing-room beyond. The two Cunninghams were bending over
              the prostrate figure of Sherlock Holmes, the younger clutching his
              throat with both hands, while the elder seemed to be twisting one
              of his wrists. In an instant the three of us had torn them away
              from him, and Holmes staggered to his feet, very pale and
              evidently greatly exhausted.
            </TextNode>

            <TextNode>“Arrest these men, Inspector,” he gasped.</TextNode>

            <TextNode>“On what charge?”</TextNode>

            <TextNode>
              “That of murdering their coachman, William Kirwan.”
            </TextNode>

            <TextNode>
              The Inspector stared about him in bewilderment. “Oh, come now, Mr.
              Holmes,” said he at last, “I'm sure you don't really mean to—”
            </TextNode>

            <TextNode>
              “Tut, man, look at their faces!” cried Holmes, curtly.
            </TextNode>

            <TextNode>
              Never, certainly, have I seen a plainer confession of guilt upon
              human countenances. The older man seemed numbed and dazed with a
              heavy, sullen expression upon his strongly-marked face. The son,
              on the other hand, had dropped all that jaunty, dashing style
              which had characterized him, and the ferocity of a dangerous wild
              beast gleamed in his dark eyes and distorted his handsome
              features. The Inspector said nothing, but, stepping to the door,
              he blew his whistle. Two of his constables came at the call.
            </TextNode>

            <TextNode>
              “I have no alternative, Mr. Cunningham,” said he. “I trust that
              this may all prove to be an absurd mistake, but you can see
              that—Ah, would you? Drop it!” He struck out with his hand, and a
              revolver which the younger man was in the act of cocking clattered
              down upon the floor.
            </TextNode>

            <TextNode>
              “Keep that,” said Holmes, quietly putting his foot upon it; “you
              will find it useful at the trial. But this is what we really
              wanted.” He held up a little crumpled piece of paper.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page146;

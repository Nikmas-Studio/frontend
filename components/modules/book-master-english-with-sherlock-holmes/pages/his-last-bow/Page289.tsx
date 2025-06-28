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

function Page289({
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
              “It is bad, Mr. Holmes, very bad! Have you heard of the death of
              the chief?”
            </TextNode>

            <TextNode>“We have just come from his house.”</TextNode>

            <TextNode>
              “The place is disorganized. The chief dead, Cadogan West dead, our
              papers stolen. And yet, when we closed our door on Monday evening,
              we were as efficient an office as any in the government service.
              Good God, it's dreadful to think of! That West, of all men, should
              have done such a thing!”
            </TextNode>

            <TextNode>“You are sure of his guilt, then?”</TextNode>

            <TextNode>
              “I can see no other way out of it. And yet I would have trusted
              him as I trust myself.”
            </TextNode>

            <TextNode>“At what hour was the office closed on Monday?”</TextNode>

            <TextNode>“At five.”</TextNode>

            <TextNode>“Did you close it?”</TextNode>

            <TextNode>“I am always the last man out.”</TextNode>

            <TextNode>“Where were the plans?”</TextNode>

            <TextNode>“In that safe. I put them there myself.”</TextNode>

            <TextNode>“Is there no watchman to the building?”</TextNode>

            <TextNode>
              “There is, but he has other departments to look after as well. He
              is an old soldier and a most trustworthy man. He saw nothing that
              evening. Of course the fog was very thick.”
            </TextNode>

            <TextNode>
              “Suppose that Cadogan West wished to make his way into the
              building after hours; he would need three keys, would he not,
              before the could reach the papers?”
            </TextNode>

            <TextNode>
              “Yes, he would. The key of the outer door, the key of the office,
              and the key of the safe.”
            </TextNode>

            <TextNode>“Only Sir James Walter and you had those keys?”</TextNode>

            <TextNode>“I had no keys of the doors—only of the safe.”</TextNode>

            <TextNode>
              “Was Sir James a man who was orderly in his habits?”
            </TextNode>

            <TextNode>
              “Yes, I think he was. I know that so far as those three keys are
              concerned he kept them on the same ring. I have often seen them
              there.”
            </TextNode>

            <TextNode>“And that ring went with him to London?”</TextNode>

            <TextNode>“He said so.”</TextNode>

            <TextNode>“And your key never left your possession?”</TextNode>

            <TextNode>“Never.”</TextNode>

            <TextNode>
              “Then West, if he is the culprit, must have had a duplicate. And
              yet none was found upon his body. One other point: if a clerk in
              this office desired to sell the plans, would it not be simply to
              copy the plans for himself than to take the originals, as was
              actually done?”
            </TextNode>

            <TextNode>
              “It would take considerable technical knowledge to copy the plans
              in an effective way.”
            </TextNode>

            <TextNode>
              “But I suppose either Sir James, or you, or West has that
              technical knowledge?”
            </TextNode>

            <TextNode>
              “No doubt we had, but I beg you won't try to drag me into the
              matter, Mr. Holmes. What is the use of our speculating in this way
              when the original plans were actually found on West?”
            </TextNode>

            <TextNode>
              “Well, it is certainly singular that he should run the risk of
              taking originals if he could safely have taken copies, which would
              have equally served his turn.”
            </TextNode>

            <TextNode>“Singular, no doubt—and yet he did so.”</TextNode>

            <TextNode>
              “Every inquiry in this case reveals something inexplicable. Now
              there are three papers still missing. They are, as I understand,
              the vital ones.”
            </TextNode>

            <TextNode>“Yes, that is so.”</TextNode>

            <TextNode>
              “Do you mean to say that anyone holding these three papers, and
              without the seven others, could construct a Bruce-Partington
              submarine?”
            </TextNode>

            <TextNode>
              “I reported to that effect to the Admiralty. But to-day I have
              been over the drawings again, and I am not so sure of it. The
              double valves with the automatic self-adjusting slots are drawn in
              one of the papers which have been returned. Until the foreigners
              had invented that for themselves they could not make the boat. Of
              course they might soon get over the difficulty.”
            </TextNode>

            <TextNode>
              “But the three missing drawings are the most important?”
            </TextNode>

            <TextNode>“Undoubtedly.”</TextNode>

            <TextNode>
              “I think, with your permission, I will now take a stroll round the
              premises. I do not recall any other question which I desired to
              ask.”
            </TextNode>

            <TextNode>
              He examined the lock of the safe, the door of the room, and
              finally the iron shutters of the window. It was only when we were
              on the lawn outside that his interest was strongly excited. There
              was a laurel bush outside the window, and several of the branches
              bore signs of having been twisted or snapped. He examined them
              carefully with his lens, and then some dim and vague marks upon
              the earth beneath. Finally he asked the chief clerk to close the
              iron shutters, and he pointed out to me that they hardly met in
              the centre, and that it would be possible for anyone outside to
              see what was going on within the room.
            </TextNode>

            <TextNode>
              “The indications are ruined by three days' delay. They may mean
              something or nothing. Well, Watson, I do not think that Woolwich
              can help us further. It is a small crop which we have gathered.
              Let us see if we can do better in London.”
            </TextNode>

            <TextNode>
              Yet we added one more sheaf to our harvest before we left Woolwich
              Station. The clerk in the ticket office was able to say with
              confidence that he saw Cadogan West—whom he knew well by
              sight—upon the Monday night, and that he went to London by the
              8.15 to London Bridge. He was alone and took a single third-class
              ticket. The clerk was struck at the time by his excited and
              nervous manner. So shaky was he that he could hardly pick up his
              change, and the clerk had helped him with it. A reference to the
              timetable showed that the 8.15 was the first train which it was
              possible for West to take after he had left the lady about 7.30.
            </TextNode>

            <TextNode>
              “Let us reconstruct, Watson,” said Holmes after half an hour of
              silence. “I am not aware that in all our joint researches we have
              ever had a case which was more difficult to get at. Every fresh
              advance which we make only reveals a fresh ridge beyond. And yet
              we have surely made some appreciable progress.
            </TextNode>

            <TextNode>
              “The effect of our inquiries at Woolwich has in the main been
              against young Cadogan West; but the indications at the window
              would lend themselves to a more favourable hypothesis. Let us
              suppose, for example, that he had been approached by some foreign
              agent. It might have been done under such pledges as would have
              prevented him from speaking of it, and yet would have affected his
              thoughts in the direction indicated by his remarks to his fiancee.
              Very good. We will now suppose that as he went to the theatre with
              the young lady he suddenly, in the fog, caught a glimpse of this
              same agent going in the direction of the office. He was an
              impetuous man, quick in his decisions. Everything gave way to his
              duty. He followed the man, reached the window, saw the abstraction
              of the documents, and pursued the thief. In this way we get over
              the objection that no one would take originals when he could make
              copies. This outsider had to take originals. So far it holds
              together.”
            </TextNode>

            <TextNode>“What is the next step?”</TextNode>

            <TextNode>
              “Then we come into difficulties. One would imagine that under such
              circumstances the first act of young Cadogan West would be to
              seize the villain and raise the alarm. Why did he not do so? Could
              it have been an official superior who took the papers? That would
              explain West's conduct. Or could the chief have given West the
              slip in the fog, and West started at once to London to head him
              off from his own rooms, presuming that he knew where the rooms
              were? The call must have been very pressing, since he left his
              girl standing in the fog and made no effort to communicate with
              her. Our scent runs cold here, and there is a vast gap between
              either hypothesis and the laying of West's body, with seven papers
              in his pocket, on the roof of a Metropolitan train. My instinct
              now is to work form the other end. If Mycroft has given us the
              list of addresses we may be able to pick our man and follow two
              tracks instead of one.”
            </TextNode>

            <TextNode>
              Surely enough, a note awaited us at Baker Street. A government
              messenger had brought it post-haste. Holmes glanced at it and
              threw it over to me.
            </TextNode>

            <Indent>
              <TextNode noIndent>
                There are numerous small fry, but few who would handle so big an
                affair. The only men worth considering are Adolph Mayer, of 13
                Great George Street, Westminster; Louis La Rothiere, of Campden
                Mansions, Notting Hill; and Hugo Oberstein, 13 Caulfield
                Gardens, Kensington. The latter was known to be in town on
                Monday and is now reported as having left. Glad to hear you have
                seen some light. The Cabinet awaits your final report with the
                utmost anxiety. Urgent representations have arrived from the
                very highest quarter. The whole force of the State is at your
                back if you should need it.
              </TextNode>

              <TextNode noIndent className='italic'>
                — Mycroft.
              </TextNode>
            </Indent>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “I'm afraid,” said Holmes, smiling, “that all the queen's horses
              and all the queen's men cannot avail in this matter.” He had
              spread out his big map of London and leaned eagerly over it.
              “Well, well,” said he presently with an exclamation of
              satisfaction, “things are turning a little in our direction at
              last. Why, Watson, I do honestly believe that we are going to pull
              it off, after all.” He slapped me on the shoulder with a sudden
              burst of hilarity. “I am going out now. It is only a
              reconnaissance. I will do nothing serious without my trusted
              comrade and biographer at my elbow. Do you stay here, and the odds
              are that you will see me again in an hour or two. If time hangs
              heavy get foolscap and a pen, and begin your narrative of how we
              saved the State.”
            </TextNode>

            <TextNode>
              I felt some reflection of his elation in my own mind, for I knew
              well that he would not depart so far from his usual austerity of
              demeanour unless there was good cause for exultation. All the long
              November evening I waited, filled with impatience for his return.
              At last, shortly after nine o'clock, there arrived a messenger
              with a note:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                Am dining at Goldini's Restaurant, Gloucester Road, Kensington.
                Please come at once and join me there. Bring with you a jemmy, a
                dark lantern, a chisel, and a revolver.
              </TextNode>

              <TextNode noIndent className='italic'>
                — S.H.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              It was a nice equipment for a respectable citizen to carry through
              the dim, fog-draped streets. I stowed them all discreetly away in
              my overcoat and drove straight to the address given. There sat my
              friend at a little round table near the door of the garish Italian
              restaurant.
            </TextNode>

            <TextNode>
              “Have you had something to eat? Then join me in a coffee and
              curacao. Try one of the proprietor's cigars. They are less
              poisonous than one would expect. Have you the tools?”
            </TextNode>

            <TextNode>“They are here, in my overcoat.”</TextNode>

            <TextNode>
              “Excellent. Let me give you a short sketch of what I have done,
              with some indication of what we are about to do. Now it must be
              evident to you, Watson, that this young man's body was placed on
              the roof of the train. That was clear from the instant that I
              determined the fact that it was from the roof, and not from a
              carriage, that he had fallen.”
            </TextNode>

            <TextNode>“Could it not have been dropped from a bridge?”</TextNode>

            <TextNode>
              “I should say it was impossible. If you examine the roofs you will
              find that they are slightly rounded, and there is no railing round
              them. Therefore, we can say for certain that young Cadogan West
              was placed on it.”
            </TextNode>

            <TextNode>“How could he be placed there?”</TextNode>

            <TextNode>
              “That was the question which we had to answer. There is only one
              possible way. You are aware that the Underground runs clear of
              tunnels at some points in the West End. I had a vague memory that
              as I have travelled by it I have occasionally seen windows just
              above my head. Now, suppose that a train halted under such a
              window, would there be any difficulty in laying a body upon the
              roof?”
            </TextNode>

            <TextNode>“It seems most improbable.”</TextNode>

            <TextNode>
              “We must fall back upon the old axiom that when all other
              contingencies fail, whatever remains, however improbable, must be
              the truth. Here all other contingencies have failed. When I found
              that the leading international agent, who had just left London,
              lived in a row of houses which abutted upon the Underground, I was
              so pleased that you were a little astonished at my sudden
              frivolity.”
            </TextNode>

            <TextNode>“Oh, that was it, was it?”</TextNode>

            <TextNode>
              “Yes, that was it. Mr. Hugo Oberstein, of 13 Caulfield Gardens,
              had become my objective. I began my operations at Gloucester Road
              Station, where a very helpful official walked with me along the
              track and allowed me to satisfy myself not only that the
              back-stair windows of Caulfield Gardens open on the line but the
              even more essential fact that, owing to the intersection of one of
              the larger railways, the Underground trains are frequently held
              motionless for some minutes at that very spot.”
            </TextNode>

            <TextNode>“Splendid, Holmes! You have got it!”</TextNode>

            <TextNode>
              “So far—so far, Watson. We advance, but the goal is afar. Well,
              having seen the back of Caulfield Gardens, I visited the front and
              satisfied myself that the bird was indeed flown. It is a
              considerable house, unfurnished, so far as I could judge, in the
              upper rooms. Oberstein lived there with a single valet, who was
              probably a confederate entirely in his confidence. We must bear in
              mind that Oberstein has gone to the Continent to dispose of his
              booty, but not with any idea of flight; for he had no reason to
              fear a warrant, and the idea of an amateur domiciliary visit would
              certainly never occur to him. Yet that is precisely what we are
              about to make.”
            </TextNode>

            <TextNode>“Could we not get a warrant and legalize it?”</TextNode>

            <TextNode>“Hardly on the evidence.”</TextNode>

            <TextNode>“What can we hope to do?”</TextNode>

            <TextNode>
              “We cannot tell what correspondence may be there.”
            </TextNode>

            <TextNode>“I don't like it, Holmes.”</TextNode>

            <TextNode>
              “My dear fellow, you shall keep watch in the street. I'll do the
              criminal part. It's not a time to stick at trifles. Think of
              Mycroft's note, of the Admiralty, the Cabinet, the exalted person
              who waits for news. We are bound to go.”
            </TextNode>

            <TextNode>My answer was to rise from the table.</TextNode>

            <TextNode>“You are right, Holmes. We are bound to go.”</TextNode>

            <TextNode>He sprang up and shook me by the hand.</TextNode>

            <TextNode>
              “I knew you would not shrink at the last,” said he, and for a
              moment I saw something in his eyes which was nearer to tenderness
              than I had ever seen. The next instant he was his masterful,
              practical self once more.
            </TextNode>

            <TextNode>
              “It is nearly half a mile, but there is no hurry. Let us walk,”
              said he. “Don't drop the instruments, I beg. Your arrest as a
              suspicious character would be a most unfortunate complication.”
            </TextNode>

            <TextNode>
              Caulfield Gardens was one of those lines of flat-faced pillared,
              and porticoed houses which are so prominent a product of the
              middle Victorian epoch in the West End of London. Next door there
              appeared to be a children's party, for the merry buzz of young
              voices and the clatter of a piano resounded through the night. The
              fog still hung about and screened us with its friendly shade.
              Holmes had lit his lantern and flashed it upon the massive door.
            </TextNode>

            <TextNode>
              “This is a serious proposition,” said he. “It is certainly bolted
              as well as locked. We would do better in the area. There is an
              excellent archway down yonder in case a too zealous policeman
              should intrude. Give me a hand, Watson, and I'll do the same for
              you.”
            </TextNode>

            <TextNode>
              A minute later we were both in the area. Hardly had we reached the
              dark shadows before the step of the policeman was heard in the fog
              above. As its soft rhythm died away, Holmes set to work upon the
              lower door. I saw him stoop and strain until with a sharp crash it
              flew open. We sprang through into the dark passage, closing the
              area door behind us. Holmes let the way up the curving, uncarpeted
              stair. His little fan of yellow light shone upon a low window.
            </TextNode>

            <TextNode>
              “Here we are, Watson—this must be the one.” He threw it open, and
              as he did so there was a low, harsh murmur, growing steadily into
              a loud roar as a train dashed past us in the darkness. Holmes
              swept his light along the window-sill. It was thickly coated with
              soot from the passing engines, but the black surface was blurred
              and rubbed in places.
            </TextNode>

            <TextNode>
              “You can see where they rested the body. Halloa, Watson! what is
              this? There can be no doubt that it is a blood mark.” He was
              pointing to faint discolourations along the woodwork of the
              window. “Here it is on the stone of the stair also. The
              demonstration is complete. Let us stay here until a train stops.”
            </TextNode>

            <TextNode>
              We had not long to wait. The very next train roared from the
              tunnel as before, but slowed in the open, and then, with a
              creaking of brakes, pulled up immediately beneath us. It was not
              four feet from the window-ledge to the roof of the carriages.
              Holmes softly closed the window.
            </TextNode>

            <TextNode>
              “So far we are justified,” said he. “What do you think of it,
              Watson?”
            </TextNode>

            <TextNode>
              “A masterpiece. You have never risen to a greater height.”
            </TextNode>

            <TextNode>
              “I cannot agree with you there. From the moment that I conceived
              the idea of the body being upon the roof, which surely was not a
              very abstruse one, all the rest was inevitable. If it were not for
              the grave interests involved the affair up to this point would be
              insignificant. Our difficulties are still before us. But perhaps
              we may find something here which may help us.”
            </TextNode>

            <TextNode>
              We had ascended the kitchen stair and entered the suite of rooms
              upon the first floor. One was a dining-room, severely furnished
              and containing nothing of interest. A second was a bedroom, which
              also drew blank. The remaining room appeared more promising, and
              my companion settled down to a systematic examination. It was
              littered with books and papers, and was evidently used as a study.
              Swiftly and methodically Holmes turned over the contents of drawer
              after drawer and cupboard after cupboard, but no gleam of success
              came to brighten his austere face. At the end of an hour he was no
              further than when he started.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page289;

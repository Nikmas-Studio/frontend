import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page282({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;RED&nbsp;CIRCLE'
      />
      <BookMainContainer biggerTopPadding>
        <H4>Chapter I</H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Well, Mrs. Warren, I cannot see that you have any particular
              cause for uneasiness, nor do I understand why I, whose time is of
              some value, should interfere in the matter. I really have other
              things to engage me.” So spoke Sherlock Holmes and turned back to
              the great scrapbook in which he was arranging and indexing some of
              his recent material.
            </TextNode>

            <TextNode>
              But the landlady had the pertinacity and also the cunning of her
              sex. She held her ground firmly.
            </TextNode>

            <TextNode>
              “You arranged an affair for a lodger of mine last year,” she
              said—“Mr. Fairdale Hobbs.”
            </TextNode>

            <TextNode>“Ah, yes—a simple matter.”</TextNode>

            <TextNode>
              “But he would never cease talking of it—your kindness, sir, and
              the way in which you brought light into the darkness. I remembered
              his words when I was in doubt and darkness myself. I know you
              could if you only would.”
            </TextNode>

            <TextNode>
              Holmes was accessible upon the side of flattery, and also, to do
              him justice, upon the side of kindliness. The two forces made him
              lay down his gum-brush with a sigh of resignation and push back
              his chair.
            </TextNode>

            <TextNode>
              “Well, well, Mrs. Warren, let us hear about it, then. You don't
              object to tobacco, I take it? Thank you, Watson—the matches! You
              are uneasy, as I understand, because your new lodger remains in
              his rooms and you cannot see him. Why, bless you, Mrs. Warren, if
              I were your lodger you often would not see me for weeks on end.”
            </TextNode>

            <TextNode>
              “No doubt, sir; but this is different. It frightens me, Mr.
              Holmes. I can't sleep for fright. To hear his quick step moving
              here and moving there from early morning to late at night, and yet
              never to catch so much as a glimpse of him—it's more than I can
              stand. My husband is as nervous over it as I am, but he is out at
              his work all day, while I get no rest from it. What is he hiding
              for? What has he done? Except for the girl, I am all alone in the
              house with him, and it's more than my nerves can stand.”
            </TextNode>

            <TextNode>
              Holmes leaned forward and laid his long, thin fingers upon the
              woman's shoulder. He had an almost hypnotic power of soothing when
              he wished. The scared look faded from her eyes, and her agitated
              features smoothed into their usual commonplace. She sat down in
              the chair which he had indicated.
            </TextNode>

            <TextNode>
              “If I take it up I must understand every detail,” said he. “Take
              time to consider. The smallest point may be the most essential.
              You say that the man came ten days ago and paid you for a
              fortnight's board and lodging?”
            </TextNode>

            <TextNode>
              “He asked my terms, sir. I said fifty shillings a week. There is a
              small sitting-room and bedroom, and all complete, at the top of
              the house.”
            </TextNode>

            <TextNode>“Well?”</TextNode>

            <TextNode>
              “He said, ‘I'll pay you five pounds a week if I can have it on my
              own terms.’ I'm a poor woman, sir, and Mr. Warren earns little,
              and the money meant much to me. He took out a ten-pound note, and
              he held it out to me then and there. ‘You can have the same every
              fortnight for a long time to come if you keep the terms,’ he said.
              ‘If not, I'll have no more to do with you.’
            </TextNode>

            <TextNode>“What were the terms?”</TextNode>

            <TextNode>
              “Well, sir, they were that he was to have a key of the house. That
              was all right. Lodgers often have them. Also, that he was to be
              left entirely to himself and never, upon any excuse, to be
              disturbed.”
            </TextNode>

            <TextNode>“Nothing wonderful in that, surely?”</TextNode>

            <TextNode>
              “Not in reason, sir. But this is out of all reason. He has been
              there for ten days, and neither Mr. Warren, nor I, nor the girl
              has once set eyes upon him. We can hear that quick step of his
              pacing up and down, up and down, night, morning, and noon; but
              except on that first night he had never once gone out of the
              house.”
            </TextNode>

            <TextNode>“Oh, he went out the first night, did he?”</TextNode>

            <TextNode>
              “Yes, sir, and returned very late—after we were all in bed. He
              told me after he had taken the rooms that he would do so and asked
              me not to bar the door. I heard him come up the stair after
              midnight.”
            </TextNode>

            <TextNode>“But his meals?”</TextNode>

            <TextNode>
              “It was his particular direction that we should always, when he
              rang, leave his meal upon a chair, outside his door. Then he rings
              again when he has finished, and we take it down from the same
              chair. If he wants anything else he prints it on a slip of paper
              and leaves it.”
            </TextNode>

            <TextNode>“Prints it?”</TextNode>

            <TextNode>
              “Yes, sir; prints it in pencil. Just the word, nothing more.
              Here's the one I brought to show you—soap. Here's another—match.
              This is one he left the first morning—daily gazette. I leave that
              paper with his breakfast every morning.”
            </TextNode>

            <TextNode>
              “Dear me, Watson,” said Homes, staring with great curiosity at the
              slips of foolscap which the landlady had handed to him, “this is
              certainly a little unusual. Seclusion I can understand; but why
              print? Printing is a clumsy process. Why not write? What would it
              suggest, Watson?”
            </TextNode>

            <TextNode>“That he desired to conceal his handwriting.”</TextNode>

            <TextNode>
              “But why? What can it matter to him that his landlady should have
              a word of his writing? Still, it may be as you say. Then, again,
              why such laconic messages?”
            </TextNode>

            <TextNode>“I cannot imagine.”</TextNode>

            <TextNode>
              “It opens a pleasing field for intelligent speculation. The words
              are written with a broad-pointed, violet-tinted pencil of a not
              unusual pattern. You will observe that the paper is torn away at
              the side here after the printing was done, so that the ‘s’ of
              ‘soap’ is partly gone. Suggestive, Watson, is it not?”
            </TextNode>

            <TextNode>“Of caution?”</TextNode>

            <TextNode>
              “Exactly. There was evidently some mark, some thumbprint,
              something which might give a clue to the person's identity. Now.
              Mrs. Warren, you say that the man was of middle size, dark, and
              bearded. What age would he be?”
            </TextNode>

            <TextNode>“Youngish, sir—not over thirty.”</TextNode>

            <TextNode>“Well, can you give me no further indications?”</TextNode>

            <TextNode>
              “He spoke good English, sir, and yet I thought he was a foreigner
              by his accent.”
            </TextNode>

            <TextNode>“And he was well dressed?”</TextNode>

            <TextNode>
              “Very smartly dressed, sir—quite the gentleman. Dark
              clothes—nothing you would note.”
            </TextNode>

            <TextNode>“He gave no name?”</TextNode>

            <TextNode>“No, sir.”</TextNode>

            <TextNode>“And has had no letters or callers?”</TextNode>

            <TextNode>“None.”</TextNode>

            <TextNode>
              “But surely you or the girl enter his room of a morning?”
            </TextNode>

            <TextNode>“No, sir; he looks after himself entirely.”</TextNode>

            <TextNode>
              “Dear me! that is certainly remarkable. What about his luggage?”
            </TextNode>

            <TextNode>
              “He had one big brown bag with him—nothing else.”
            </TextNode>

            <TextNode>
              “Well, we don't seem to have much material to help us. Do you say
              nothing has come out of that room—absolutely nothing?”
            </TextNode>

            <TextNode>
              The landlady drew an envelope from her bag; from it she shook out
              two burnt matches and a cigarette-end upon the table.
            </TextNode>

            <TextNode>
              “They were on his tray this morning. I brought them because I had
              heard that you can read great things out of small ones.”
            </TextNode>

            <TextNode>Holmes shrugged his shoulders.</TextNode>

            <TextNode>
              “There is nothing here,” said he. “The matches have, of course,
              been used to light cigarettes. That is obvious from the shortness
              of the burnt end. Half the match is consumed in lighting a pipe or
              cigar. But, dear me! this cigarette stub is certainly remarkable.
              The gentleman was bearded and moustached, you say?”
            </TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>
              “I don't understand that. I should say that only a clean-shaven
              man could have smoked this. Why, Watson, even your modest
              moustache would have been singed.”
            </TextNode>

            <TextNode>“A holder?” I suggested.</TextNode>

            <TextNode>
              “No, no; the end is matted. I suppose there could not be two
              people in your rooms, Mrs. Warren?”
            </TextNode>

            <TextNode>
              “No, sir. He eats so little that I often wonder it can keep life
              in one.”
            </TextNode>

            <TextNode>
              “Well, I think we must wait for a little more material. After all,
              you have nothing to complain of. You have received your rent, and
              he is not a troublesome lodger, though he is certainly an unusual
              one. He pays you well, and if he chooses to lie concealed it is no
              direct business of yours. We have no excuse for an intrusion upon
              his privacy until we have some reason to think that there is a
              guilty reason for it. I've taken up the matter, and I won't lose
              sight of it. Report to me if anything fresh occurs, and rely upon
              my assistance if it should be needed.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “There are certainly some points of interest in this case,
              Watson,” he remarked when the landlady had left us. “It may, of
              course, be trivial—individual eccentricity; or it may be very much
              deeper than appears on the surface. The first thing that strike
              one is the obvious possibility that the person now in the rooms
              may be entirely different from the one who engaged them.”
            </TextNode>

            <TextNode>“Why should you think so?”</TextNode>

            <TextNode>
              “Well, apart form this cigarette-end, was it not suggestive that
              the only time the lodger went out was immediately after his taking
              the rooms? He came back—or someone came back—when all witnesses
              were out of the way. We have no proof that the person who came
              back was the person who went out. Then, again, the man who took
              the rooms spoke English well. This other, however, prints ‘match’
              when it should have been ‘matches.’ I can imagine that the word
              was taken out of a dictionary, which would give the noun but not
              the plural. The laconic style may be to conceal the absence of
              knowledge of English. Yes, Watson, there are good reasons to
              suspect that there has been a substitution of lodgers.”
            </TextNode>

            <TextNode>“But for what possible end?”</TextNode>

            <TextNode>
              “Ah! there lies our problem. There is one rather obvious line of
              investigation.” He took down the great book in which, day by day,
              he filed the agony columns of the various London journals. “Dear
              me!” said he, turning over the pages, “what a chorus of groans,
              cries, and bleatings! What a rag-bag of singular happenings! But
              surely the most valuable hunting-ground that ever was given to a
              student of the unusual! This person is alone and cannot be
              approached by letter without a breach of that absolute secrecy
              which is desired. How is any news or any message to reach him from
              without? Obviously by advertisement through a newspaper. There
              seems no other way, and fortunately we need concern ourselves with
              the one paper only. Here are{' '}
              <span className='italic'>The Daily Gazette</span> extracts of the
              last fortnight. ‘Lady with a black boa at Prince's Skating
              Club’—that we may pass. ‘Surely Jimmy will not break his mother's
              heart’—that appears to be irrelevant. ‘If the lady who fainted on
              Brixton bus’—she does not interest me. ‘Every day my heart longs—’
              Bleat, Watson—unmitigated bleat! Ah, this is a little more
              possible. Listen to this: ‘Be patient. Will find some sure means
              of communications. Meanwhile, this column. G.’ That is two days
              after Mrs. Warren's lodger arrived. It sounds plausible, does it
              not? The mysterious one could understand English, even if he could
              not print it. Let us see if we can pick up the trace again. Yes,
              here we are—three days later. ‘Am making successful arrangements.
              Patience and prudence. The clouds will pass. G.’ Nothing for a
              week after that. Then comes something much more definite: ‘The
              path is clearing. If I find chance signal message remember code
              agreed—One A, two B, and so on. You will hear soon. G.’ That was
              in yesterday's paper, and there is nothing in to-day's. It's all
              very appropriate to Mrs. Warren's lodger. If we wait a little,
              Watson, I don't doubt that the affair will grow more
              intelligible.”
            </TextNode>

            <TextNode>
              So it proved; for in the morning I found my friend standing on the
              hearthrug with his back to the fire and a smile of complete
              satisfaction upon his face.
            </TextNode>

            <TextNode>
              “How's this, Watson?” he cried, picking up the paper from the
              table. “’High red house with white stone facings. Third floor.
              Second window left. After dusk. G.’ That is definite enough. I
              think after breakfast we must make a little reconnaissance of Mrs.
              Warren's neighbourhood. Ah, Mrs. Warren! what news do you bring us
              this morning?”
            </TextNode>

            <TextNode>
              Our client had suddenly burst into the room with an explosive
              energy which told of some new and momentous development.
            </TextNode>

            <TextNode>
              “It's a police matter, Mr. Holmes!” she cried. “I'll have no more
              of it! He shall pack out of there with his baggage. I would have
              gone straight up and told him so, only I thought it was but fair
              to you to take your opinion first. But I'm at the end of my
              patience, and when it comes to knocking my old man about—”
            </TextNode>

            <TextNode>“Knocking Mr. Warren about?”</TextNode>

            <TextNode>“Using him roughly, anyway.”</TextNode>

            <TextNode>“But who used him roughly?”</TextNode>

            <TextNode>
              “Ah! that's what we want to know! It was this morning, sir. Mr.
              Warren is a timekeeper at Morton and Waylight's, in Tottenham
              Court Road. He has to be out of the house before seven. Well, this
              morning he had not gone ten paces down the road when two men came
              up behind him, threw a coat over his head, and bundled him into a
              cab that was beside the curb. They drove him an hour, and then
              opened the door and shot him out. He lay in the roadway so shaken
              in his wits that he never saw what became of the cab. When he
              picked himself up he found he was on Hampstead Heath; so he took a
              bus home, and there he lies now on his sofa, while I came straight
              round to tell you what had happened.”
            </TextNode>

            <TextNode>
              “Most interesting,” said Holmes. “Did he observe the appearance of
              these men—did he hear them talk?”
            </TextNode>

            <TextNode>
              “No; he is clean dazed. He just knows that he was lifted up as if
              by magic and dropped as if by magic. Two a least were in it, and
              maybe three.”
            </TextNode>

            <TextNode>“And you connect this attack with your lodger?”</TextNode>

            <TextNode>
              “Well, we've lived there fifteen years and no such happenings ever
              came before. I've had enough of him. Money's not everything. I'll
              have him out of my house before the day is done.”
            </TextNode>

            <TextNode>
              “Wait a bit, Mrs. Warren. Do nothing rash. I begin to think that
              this affair may be very much more important than appeared at first
              sight. It is clear now that some danger is threatening your
              lodger. It is equally clear that his enemies, lying in wait for
              him near your door, mistook your husband for him in the foggy
              morning light. On discovering their mistake they released him.
              What they would have done had it not been a mistake, we can only
              conjecture.”
            </TextNode>

            <TextNode>“Well, what am I to do, Mr. Holmes?”</TextNode>

            <TextNode>
              “I have a great fancy to see this lodger of yours, Mrs. Warren.”
            </TextNode>

            <TextNode>
              “I don't see how that is to be managed, unless you break in the
              door. I always hear him unlock it as I go down the stair after I
              leave the tray.”
            </TextNode>

            <TextNode>
              “He has to take the tray in. Surely we could conceal ourselves and
              see him do it.”
            </TextNode>

            <TextNode>The landlady thought for a moment.</TextNode>

            <TextNode>
              “Well, sir, there's the box-room opposite. I could arrange a
              looking-glass, maybe, and if you were behind the door—”
            </TextNode>

            <TextNode>“Excellent!” said Holmes. “When does he lunch?”</TextNode>

            <TextNode>“About one, sir.”</TextNode>

            <TextNode>
              “Then Dr. Watson and I will come round in time. For the present,
              Mrs. Warren, good-bye.”
            </TextNode>

            <TextNode>
              At half-past twelve we found ourselves upon the steps of Mrs.
              Warren's house—a high, thin, yellow-brick edifice in Great Orme
              Street, a narrow thoroughfare at the northeast side of the British
              Museum. Standing as it does near the corner of the street, it
              commands a view down Howe Street, with its ore pretentious houses.
              Holmes pointed with a chuckle to one of these, a row of
              residential flats, which projected so that they could not fail to
              catch the eye.
            </TextNode>

            <TextNode>
              “See, Watson!” said he. “‘High red house with stone facings.’
              There is the signal station all right. We know the place, and we
              know the code; so surely our task should be simple. There's a ‘to
              let’ card in that window. It is evidently an empty flat to which
              the confederate has access. Well, Mrs. Warren, what now?”
            </TextNode>

            <TextNode>
              “I have it all ready for you. If you will both come up and leave
              your boots below on the landing, I'll put you there now.”
            </TextNode>

            <TextNode>
              It was an excellent hiding-place which she had arranged. The
              mirror was so placed that, seated in the dark, we could very
              plainly see the door opposite. We had hardly settled down in it,
              and Mrs. Warren left us, when a distant tinkle announced that our
              mysterious neighbour had rung. Presently the landlady appeared
              with the tray, laid it down upon a chair beside the closed door,
              and then, treading heavily, departed. Crouching together in the
              angle of the door, we kept our eyes fixed upon the mirror.
              Suddenly, as the landlady's footsteps died away, there was the
              creak of a turning key, the handle revolved, and two thin hands
              darted out and lifted the tray form the chair. An instant later it
              was hurriedly replaced, and I caught a glimpse of a dark,
              beautiful, horrified face glaring at the narrow opening of the
              box-room. Then the door crashed to, the key turned once more, and
              all was silence. Holmes twitched my sleeve, and together we stole
              down the stair.
            </TextNode>

            <TextNode>
              “I will call again in the evening,” said he to the expectant
              landlady. “I think, Watson, we can discuss this business better in
              our own quarters.”
            </TextNode>

            <TextNode>
              “My surmise, as you saw, proved to be correct,” said he, speaking
              from the depths of his easy-chair. “There has been a substitution
              of lodgers. What I did not foresee is that we should find a woman,
              and no ordinary woman, Watson.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page282;

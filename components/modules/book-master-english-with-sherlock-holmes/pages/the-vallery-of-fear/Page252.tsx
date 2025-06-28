import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
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

function Page252({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;VALLEY&nbsp;OF&nbsp;FEAR'
      />
      <BookMainContainer biggerTopPadding>
        <H4>
          Chapter VII.
          <br />
          The Solution
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              Next morning, after breakfast, we found Inspector MacDonald and
              White Mason seated in close consultation in the small parlour of
              the local police sergeant. On the table in front of them were
              piled a number of letters and telegrams, which they were carefully
              sorting and docketing. Three had been placed on one side.
            </TextNode>

            <TextNode>
              “Still on the track of the elusive bicyclist?” Holmes asked
              cheerfully. “What is the latest news of the ruffian?”
            </TextNode>

            <TextNode>
              MacDonald pointed ruefully to his heap of correspondence.
            </TextNode>

            <TextNode>
              “He is at present reported from Leicester, Nottingham,
              Southampton, Derby, East Ham, Richmond, and fourteen other places.
              In three of them—East Ham, Leicester, and Liverpool—there is a
              clear case against him, and he has actually been arrested. The
              country seems to be full of the fugitives with yellow coats.”
            </TextNode>

            <TextNode>
              “Dear me!” said Holmes sympathetically. “Now, Mr. Mac and you, Mr.
              White Mason, I wish to give you a very earnest piece of advice.
              When I went into this case with you I bargained, as you will no
              doubt remember, that I should not present you with half-proved
              theories, but that I should retain and work out my own ideas until
              I had satisfied myself that they were correct. For this reason I
              am not at the present moment telling you all that is in my mind.
              On the other hand, I said that I would play the game fairly by
              you, and I do not think it is a fair game to allow you for one
              unnecessary moment to waste your energies upon a profitless task.
              Therefore I am here to advise you this morning, and my advice to
              you is summed up in three words—abandon the case.”
            </TextNode>

            <TextNode>
              MacDonald and White Mason stared in amazement at their celebrated
              colleague.
            </TextNode>

            <TextNode>
              “You consider it hopeless!” cried the inspector.
            </TextNode>

            <TextNode>
              “I consider your case to be hopeless. I do not consider that it is
              hopeless to arrive at the truth.”
            </TextNode>

            <TextNode>
              “But this cyclist. He is not an invention. We have his
              description, his valise, his bicycle. The fellow must be
              somewhere. Why should we not get him?”
            </TextNode>

            <TextNode>
              “Yes, yes, no doubt he is somewhere, and no doubt we shall get
              him; but I would not have you waste your energies in East Ham or
              Liverpool. I am sure that we can find some shorter cut to a
              result.”
            </TextNode>

            <TextNode>
              “You are holding something back. It's hardly fair of you, Mr.
              Holmes.” The inspector was annoyed.
            </TextNode>

            <TextNode>
              “You know my methods of work, Mr. Mac. But I will hold it back for
              the shortest time possible. I only wish to verify my details in
              one way, which can very readily be done, and then I make my bow
              and return to London, leaving my results entirely at your service.
              I owe you too much to act otherwise; for in all my experience I
              cannot recall any more singular and interesting study.”
            </TextNode>

            <TextNode>
              “This is clean beyond me, Mr. Holmes. We saw you when we returned
              from Tunbridge Wells last night, and you were in general agreement
              with our results. What has happened since then to give you a
              completely new idea of the case?”
            </TextNode>

            <TextNode>
              “Well, since you ask me, I spent, as I told you that I would, some
              hours last night at the Manor House.”
            </TextNode>

            <TextNode>“Well, what happened?”</TextNode>

            <TextNode>
              “Ah, I can only give you a very general answer to that for the
              moment. By the way, I have been reading a short but clear and
              interesting account of the old building, purchasable at the modest
              sum of one penny from the local tobacconist.”
            </TextNode>

            <TextNode>
              Here Holmes drew a small tract, embellished with a rude engraving
              of the ancient Manor House, from his waistcoat pocket.
            </TextNode>

            <TextNode>
              “It immensely adds to the zest of an investigation, my dear Mr.
              Mac, when one is in conscious sympathy with the historical
              atmosphere of one's surroundings. Don't look so impatient; for I
              assure you that even so bald an account as this raises some sort
              of picture of the past in one's mind. Permit me to give you a
              sample. ‘Erected in the fifth year of the reign of James I, and
              standing upon the site of a much older building, the Manor House
              of Birlstone presents one of the finest surviving examples of the
              moated Jacobean residence—’ ”
            </TextNode>

            <TextNode>“You are making fools of us, Mr. Holmes!”</TextNode>

            <TextNode>
              “Tut, tut, Mr. Mac!—the first sign of temper I have detected in
              you. Well, I won't read it verbatim, since you feel so strongly
              upon the subject. But when I tell you that there is some account
              of the taking of the place by a parliamentary colonel in 1644, of
              the concealment of Charles for several days in the course of the
              Civil War, and finally of a visit there by the second George, you
              will admit that there are various associations of interest
              connected with this ancient house.”
            </TextNode>

            <TextNode>
              “I don't doubt it, Mr. Holmes; but that is no business of ours.”
            </TextNode>

            <TextNode>
              “Is it not? Is it not? Breadth of view, my dear Mr. Mac, is one of
              the essentials of our profession. The interplay of ideas and the
              oblique uses of knowledge are often of extraordinary interest. You
              will excuse these remarks from one who, though a mere connoisseur
              of crime, is still rather older and perhaps more experienced than
              yourself.”
            </TextNode>

            <TextNode>
              “I'm the first to admit that,” said the detective heartily. “You
              get to your point, I admit; but you have such a deuced
              round-the-corner way of doing it.”
            </TextNode>

            <TextNode>
              “Well, well, I'll drop past history and get down to present-day
              facts. I called last night, as I have already said, at the Manor
              House. I did not see either Barker or Mrs. Douglas. I saw no
              necessity to disturb them; but I was pleased to hear that the lady
              was not visibly pining and that she had partaken of an excellent
              dinner. My visit was specially made to the good Mr. Ames, with
              whom I exchanged some amiabilities, which culminated in his
              allowing me, without reference to anyone else, to sit alone for a
              time in the study.”
            </TextNode>

            <TextNode>“What! With that?” I ejaculated.</TextNode>

            <TextNode>
              “No, no, everything is now in order. You gave permission for that,
              Mr. Mac, as I am informed. The room was in its normal state, and
              in it I passed an instructive quarter of an hour.”
            </TextNode>

            <TextNode>“What were you doing?”</TextNode>

            <TextNode>
              “Well, not to make a mystery of so simple a matter, I was looking
              for the missing dumb-bell. It has always bulked rather large in my
              estimate of the case. I ended by finding it.”
            </TextNode>

            <TextNode>“Where?”</TextNode>

            <TextNode>
              “Ah, there we come to the edge of the unexplored. Let me go a
              little further, a very little further, and I will promise that you
              shall share everything that I know.”
            </TextNode>

            <TextNode>
              “Well, we're bound to take you on your own terms,” said the
              inspector; “but when it comes to telling us to abandon the
              case—why in the name of goodness should we abandon the case?”
            </TextNode>

            <TextNode>
              “For the simple reason, my dear Mr. Mac, that you have not got the
              first idea what it is that you are investigating.”
            </TextNode>

            <TextNode>
              “We are investigating the murder of Mr. John Douglas of Birlstone
              Manor.”
            </TextNode>

            <TextNode>
              “Yes, yes, so you are. But don't trouble to trace the mysterious
              gentleman upon the bicycle. I assure you that it won't help you.”
            </TextNode>

            <TextNode>“Then what do you suggest that we do?”</TextNode>

            <TextNode>
              “I will tell you exactly what to do, if you will do it.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Well, I'm bound to say I've always found you had reason behind
              all your queer ways. I'll do what you advise.”
            </TextNode>

            <TextNode>“And you, Mr. White Mason?”</TextNode>

            <TextNode>
              The country detective looked helplessly from one to the other.
              Holmes and his methods were new to him. “Well, if it is good
              enough for the inspector, it is good enough for me,” he said at
              last.
            </TextNode>

            <TextNode>
              “Capital!” said Holmes. “Well, then, I should recommend a nice,
              cheery country walk for both of you. They tell me that the views
              from Birlstone Ridge over the Weald are very remarkable. No doubt
              lunch could be got at some suitable hostelry; though my ignorance
              of the country prevents me from recommending one. In the evening,
              tired but happy—”
            </TextNode>

            <TextNode>
              “Man, this is getting past a joke!” cried MacDonald, rising
              angrily from his chair.
            </TextNode>

            <TextNode>
              “Well, well, spend the day as you like,” said Holmes, patting him
              cheerfully upon the shoulder. “Do what you like and go where you
              will, but meet me here before dusk without fail—without fail, Mr.
              Mac.”
            </TextNode>

            <TextNode>“That sounds more like sanity.”</TextNode>

            <TextNode>
              “All of it was excellent advice; but I don't insist, so long as
              you are here when I need you. But now, before we part, I want you
              to write a note to Mr. Barker.”
            </TextNode>

            <TextNode>“Well?”</TextNode>

            <TextNode>“I'll dictate it, if you like. Ready?</TextNode>

            <Indent>
              <TextNode className='italic' noIndent>
                “Dear Sir:
              </TextNode>
              <TextNode noIndent>
                “It has struck me that it is our duty to drain the moat, in the
                hope that we may find some—“
              </TextNode>
            </Indent>
            <TextNode noIndent>
              “It's impossible,” said the inspector. “I've made inquiry.”
            </TextNode>

            <TextNode>
              “Tut, tut! My dear sir, please do what I ask you.”
            </TextNode>

            <TextNode>“Well, go on.”</TextNode>

            <Indent>
              <TextNode noIndent>
                “—in the hope that we may find something which may bear upon our
                investigation. I have made arrangements, and the workmen will be
                at work early to-morrow morning diverting the stream—“
              </TextNode>
            </Indent>

            <TextNode noIndent>“Impossible!”</TextNode>

            <Indent>
              <TextNode noIndent>
                “—diverting the stream; so I thought it best to explain matters
                beforehand.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “Now sign that, and send it by hand about four o'clock. At that
              hour we shall meet again in this room. Until then we may each do
              what we like; for I can assure you that this inquiry has come to a
              definite pause.”
            </TextNode>

            <TextNode>
              Evening was drawing in when we reassembled. Holmes was very
              serious in his manner, myself curious, and the detectives
              obviously critical and annoyed.
            </TextNode>

            <TextNode>
              “Well, gentlemen,” said my friend gravely, “I am asking you now to
              put everything to the test with me, and you will judge for
              yourselves whether the observations I have made justify the
              conclusions to which I have come. It is a chill evening, and I do
              not know how long our expedition may last; so I beg that you will
              wear your warmest coats. It is of the first importance that we
              should be in our places before it grows dark; so with your
              permission we shall get started at once.”
            </TextNode>

            <TextNode>
              We passed along the outer bounds of the Manor House park until we
              came to a place where there was a gap in the rails which fenced
              it. Through this we slipped, and then in the gathering gloom we
              followed Holmes until we had reached a shrubbery which lies nearly
              opposite to the main door and the drawbridge. The latter had not
              been raised. Holmes crouched down behind the screen of laurels,
              and we all three followed his example.
            </TextNode>

            <TextNode>
              “Well, what are we to do now?” asked MacDonald with some
              gruffness.
            </TextNode>

            <TextNode>
              “Possess our souls in patience and make as little noise as
              possible,” Holmes answered.
            </TextNode>

            <TextNode>
              “What are we here for at all? I really think that you might treat
              us with more frankness.”
            </TextNode>

            <TextNode>
              Holmes laughed. “Watson insists that I am the dramatist in real
              life,” said he. “Some touch of the artist wells up within me, and
              calls insistently for a well-staged performance. Surely our
              profession, Mr. Mac, would be a drab and sordid one if we did not
              sometimes set the scene so as to glorify our results. The blunt
              accusation, the brutal tap upon the shoulder—what can one make of
              such a dénouement? But the quick inference, the subtle trap, the
              clever forecast of coming events, the triumphant vindication of
              bold theories—are these not the pride and the justification of our
              life's work? At the present moment you thrill with the glamour of
              the situation and the anticipation of the hunt. Where would be
              that thrill if I had been as definite as a timetable? I only ask a
              little patience, Mr. Mac, and all will be clear to you.”
            </TextNode>

            <TextNode>
              “Well, I hope the pride and justification and the rest of it will
              come before we all get our death of cold,” said the London
              detective with comic resignation.
            </TextNode>

            <TextNode>
              We all had good reason to join in the aspiration; for our vigil
              was a long and bitter one. Slowly the shadows darkened over the
              long, sombre face of the old house. A cold, damp reek from the
              moat chilled us to the bones and set our teeth chattering. There
              was a single lamp over the gateway and a steady globe of light in
              the fatal study. Everything else was dark and still.
            </TextNode>

            <TextNode>
              “How long is this to last?” asked the inspector finally. “And what
              is it we are watching for?”
            </TextNode>

            <TextNode>
              “I have no more notion than you how long it is to last,” Holmes
              answered with some asperity. “If criminals would always schedule
              their movements like railway trains, it would certainly be more
              convenient for all of us. As to what it is we—Well, that's what we
              are watching for!”
            </TextNode>

            <TextNode>
              As he spoke the bright, yellow light in the study was obscured by
              somebody passing to and fro before it. The laurels among which we
              lay were immediately opposite the window and not more than a
              hundred feet from it. Presently it was thrown open with a whining
              of hinges, and we could dimly see the dark outline of a man's head
              and shoulders looking out into the gloom. For some minutes he
              peered forth in furtive, stealthy fashion, as one who wishes to be
              assured that he is unobserved. Then he leaned forward, and in the
              intense silence we were aware of the soft lapping of agitated
              water. He seemed to be stirring up the moat with something which
              he held in his hand. Then suddenly he hauled something in as a
              fisherman lands a fish—some large, round object which obscured the
              light as it was dragged through the open casement.
            </TextNode>

            <TextNode>“Now!” cried Holmes. “Now!”</TextNode>

            <TextNode>
              We were all upon our feet, staggering after him with our stiffened
              limbs, while he ran swiftly across the bridge and rang violently
              at the bell. There was the rasping of bolts from the other side,
              and the amazed Ames stood in the entrance. Holmes brushed him
              aside without a word and, followed by all of us, rushed into the
              room which had been occupied by the man whom we had been watching.
            </TextNode>

            <TextNode>
              The oil lamp on the table represented the glow which we had seen
              from outside. It was now in the hand of Cecil Barker, who held it
              towards us as we entered. Its light shone upon his strong,
              resolute, clean-shaved face and his menacing eyes.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page252;

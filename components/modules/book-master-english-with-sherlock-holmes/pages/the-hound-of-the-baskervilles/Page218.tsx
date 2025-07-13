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

function Page218({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;HOUND OF&nbsp;THE&nbsp;BASKERVILLES'
      />
      <BookMainContainer biggerTopPadding>
        <H4>
          Chapter III.
          <br />
          The Problem
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              I confess at these words a shudder passed through me. There was a
              thrill in the doctor's voice which showed that he was himself
              deeply moved by that which he told us. Holmes leaned forward in
              his excitement and his eyes had the hard, dry glitter which shot
              from them when he was keenly interested.
            </TextNode>

            <TextNode>“You saw this?”</TextNode>

            <TextNode>“As clearly as I see you.”</TextNode>

            <TextNode>“And you said nothing?”</TextNode>

            <TextNode>“What was the use?”</TextNode>

            <TextNode>“How was it that no one else saw it?”</TextNode>

            <TextNode>
              “The marks were some twenty yards from the body and no one gave
              them a thought. I don't suppose I should have done so had I not
              known this legend.”
            </TextNode>

            <TextNode>“There are many sheep-dogs on the moor?”</TextNode>

            <TextNode>“No doubt, but this was no sheep-dog.”</TextNode>

            <TextNode>“You say it was large?”</TextNode>

            <TextNode>“Enormous.”</TextNode>

            <TextNode>“But it had not approached the body?”</TextNode>

            <TextNode>“No.“</TextNode>

            <TextNode>“What sort of night was it?”</TextNode>

            <TextNode>“Damp and raw.”</TextNode>

            <TextNode>“But not actually raining?”</TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>“What is the Alley like?”</TextNode>

            <TextNode>
              “There are two lines of old yew hedge, twelve feet high and
              impenetrable. The walk in the centre is about eight feet across.”
            </TextNode>

            <TextNode>
              “Is there anything between the hedges and the walk?”
            </TextNode>

            <TextNode>
              “Yes, there is a strip of grass about six feet broad on either
              side.”
            </TextNode>

            <TextNode>
              “I understand that the yew hedge is penetrated at one point by a
              gate?”
            </TextNode>

            <TextNode>
              “Yes, the wicket-gate which leads on to the moor.”
            </TextNode>

            <TextNode>“Is there any other opening?”</TextNode>

            <TextNode>“None.”</TextNode>

            <TextNode>
              “So that to reach the Yew Alley one either has to come down it
              from the house or else to enter it by the moor-gate?”
            </TextNode>

            <TextNode>
              “There is an exit through a summer-house at the far end.”
            </TextNode>

            <TextNode>“Had Sir Charles reached this?”</TextNode>

            <TextNode>“No; he lay about fifty yards from it.”</TextNode>

            <TextNode>
              “Now, tell me, Dr. Mortimer—and this is important—the marks which
              you saw were on the path and not on the grass?”
            </TextNode>

            <TextNode>“No marks could show on the grass.”</TextNode>

            <TextNode>
              “Were they on the same side of the path as the moor-gate?”
            </TextNode>

            <TextNode>
              “Yes; they were on the edge of the path on the same side as the
              moor-gate.”
            </TextNode>

            <TextNode>
              “You interest me exceedingly. Another point. Was the wicket-gate
              closed?”
            </TextNode>

            <TextNode>“Closed and padlocked.”</TextNode>

            <TextNode>“How high was it?”</TextNode>

            <TextNode>“About four feet high.”</TextNode>

            <TextNode>“Then anyone could have got over it?”</TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>
              “And what marks did you see by the wicket-gate?”
            </TextNode>

            <TextNode>“None in particular.”</TextNode>

            <TextNode>“Good heaven! Did no one examine?”</TextNode>

            <TextNode>“Yes, I examined myself.”</TextNode>

            <TextNode>“And found nothing?”</TextNode>

            <TextNode>
              “It was all very confused. Sir Charles had evidently stood there
              for five or ten minutes.”
            </TextNode>

            <TextNode>“How do you know that?”</TextNode>

            <TextNode>
              “Because the ash had twice dropped from his cigar.”
            </TextNode>

            <TextNode>
              “Excellent! This is a colleague, Watson, after our own heart. But
              the marks?”
            </TextNode>

            <TextNode>
              “He had left his own marks all over that small patch of gravel. I
              could discern no others.”
            </TextNode>

            <TextNode>
              Sherlock Holmes struck his hand against his knee with an impatient
              gesture.
            </TextNode>

            <TextNode>
              “If I had only been there!” he cried. “It is evidently a case of
              extraordinary interest, and one which presented immense
              opportunities to the scientific expert. That gravel page upon
              which I might have read so much has been long ere this smudged by
              the rain and defaced by the clogs of curious peasants. Oh, Dr.
              Mortimer, Dr. Mortimer, to think that you should not have called
              me in! You have indeed much to answer for.”
            </TextNode>

            <TextNode>
              “I could not call you in, Mr. Holmes, without disclosing these
              facts to the world, and I have already given my reasons for not
              wishing to do so. Besides, besides—”
            </TextNode>

            <TextNode>“Why do you hesitate?”</TextNode>

            <TextNode>
              “There is a realm in which the most acute and most experienced of
              detectives is helpless.”
            </TextNode>

            <TextNode>“You mean that the thing is supernatural?”</TextNode>

            <TextNode>“I did not positively say so.”</TextNode>

            <TextNode>“No, but you evidently think it.”</TextNode>

            <TextNode>
              “Since the tragedy, Mr. Holmes, there have come to my ears several
              incidents which are hard to reconcile with the settled order of
              Nature.”
            </TextNode>

            <TextNode>“For example?”</TextNode>

            <TextNode>
              “I find that before the terrible event occurred several people had
              seen a creature upon the moor which corresponds with this
              Baskerville demon, and which could not possibly be any animal
              known to science. They all agreed that it was a huge creature,
              luminous, ghastly, and spectral. I have cross-examined these men,
              one of them a hard-headed countryman, one a farrier, and one a
              moorland farmer, who all tell the same story of this dreadful
              apparition, exactly corresponding to the hell-hound of the legend.
              I assure you that there is a reign of terror in the district, and
              that it is a hardy man who will cross the moor at night.”
            </TextNode>

            <TextNode>
              “And you, a trained man of science, believe it to be
              supernatural?”
            </TextNode>

            <TextNode>“I do not know what to believe.”</TextNode>

            <TextNode>Holmes shrugged his shoulders.</TextNode>

            <TextNode>
              “I have hitherto confined my investigations to this world,” said
              he. “In a modest way I have combated evil, but to take on the
              Father of Evil himself would, perhaps, be too ambitious a task.
              Yet you must admit that the footmark is material.”
            </TextNode>

            <TextNode>
              “The original hound was material enough to tug a man's throat out,
              and yet he was diabolical as well.”
            </TextNode>

            <TextNode>
              “I see that you have quite gone over to the supernaturalists. But
              now, Dr. Mortimer, tell me this. If you hold these views, why have
              you come to consult me at all? You tell me in the same breath that
              it is useless to investigate Sir Charles's death, and that you
              desire me to do it.”
            </TextNode>

            <TextNode>“I did not say that I desired you to do it.”</TextNode>

            <TextNode>“Then, how can I assist you?”</TextNode>

            <TextNode>
              “By advising me as to what I should do with Sir Henry Baskerville,
              who arrives at Waterloo Station”—Dr. Mortimer looked at his
              watch—“in exactly one hour and a quarter.”
            </TextNode>

            <TextNode>“He being the heir?”</TextNode>

            <TextNode>
              “Yes. On the death of Sir Charles we inquired for this young
              gentleman and found that he had been farming in Canada. From the
              accounts which have reached us he is an excellent fellow in every
              way. I speak not as a medical man but as a trustee and executor of
              Sir Charles's will.”
            </TextNode>

            <TextNode>“There is no other claimant, I presume?”</TextNode>

            <TextNode>
              “None. The only other kinsman whom we have been able to trace was
              Rodger Baskerville, the youngest of three brothers of whom poor
              Sir Charles was the elder. The second brother, who died young, is
              the father of this lad Henry. The third, Rodger, was the black
              sheep of the family. He came of the old masterful Baskerville
              strain, and was the very image, they tell me, of the family
              picture of old Hugo. He made England too hot to hold him, fled to
              Central America, and died there in 1876 of yellow fever. Henry is
              the last of the Baskervilles. In one hour and five minutes I meet
              him at Waterloo Station. I have had a wire that he arrived at
              Southampton this morning. Now, Mr. Holmes, what would you advise
              me to do with him?”
            </TextNode>

            <TextNode>
              “Why should he not go to the home of his fathers?”
            </TextNode>

            <TextNode>
              “It seems natural, does it not? And yet, consider that every
              Baskerville who goes there meets with an evil fate. I feel sure
              that if Sir Charles could have spoken with me before his death he
              would have warned me against bringing this, the last of the old
              race, and the heir to great wealth, to that deadly place. And yet
              it cannot be denied that the prosperity of the whole poor, bleak
              country-side depends upon his presence. All the good work which
              has been done by Sir Charles will crash to the ground if there is
              no tenant of the Hall. I fear lest I should be swayed too much by
              my own obvious interest in the matter, and that is why I bring the
              case before you and ask for your advice.”
            </TextNode>
            <TextNode>Holmes considered for a little time.</TextNode>

            <TextNode>
              “Put into plain words, the matter is this,” said he. “In your
              opinion there is a diabolical agency which makes Dartmoor an
              unsafe abode for a Baskerville—that is your opinion?”
            </TextNode>

            <TextNode>
              “At least I might go the length of saying that there is some
              evidence that this may be so.”
            </TextNode>

            <TextNode>
              “Exactly. But surely, if your supernatural theory be correct, it
              could work the young man evil in London as easily as in
              Devonshire. A devil with merely local powers like a parish vestry
              would be too inconceivable a thing.”
            </TextNode>

            <TextNode>
              “You put the matter more flippantly, Mr. Holmes, than you would
              probably do if you were brought into personal contact with these
              things. Your advice, then, as I understand it, is that the young
              man will be as safe in Devonshire as in London. He comes in fifty
              minutes. What would you recommend?”
            </TextNode>

            <TextNode>
              “I recommend, sir, that you take a cab, call off your spaniel who
              is scratching at my front door, and proceed to Waterloo to meet
              Sir Henry Baskerville.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“And then?”</TextNode>

            <TextNode>
              “And then you will say nothing to him at all until I have made up
              my mind about the matter.”
            </TextNode>

            <TextNode>
              “How long will it take you to make up your mind?”
            </TextNode>

            <TextNode>
              “Twenty-four hours. At ten o'clock to-morrow, Dr. Mortimer, I will
              be much obliged to you if you will call upon me here, and it will
              be of help to me in my plans for the future if you will bring Sir
              Henry Baskerville with you.”
            </TextNode>

            <TextNode>
              “I will do so, Mr. Holmes.” He scribbled the appointment on his
              shirtcuff and hurried off in his strange, peering, absent-minded
              fashion. Holmes stopped him at the head of the stair.
            </TextNode>

            <TextNode>
              “Only one more question, Dr. Mortimer. You say that before Sir
              Charles Baskerville's death several people saw this apparition
              upon the moor?”
            </TextNode>

            <TextNode>“Three people did.”</TextNode>

            <TextNode>“Did any see it after?”</TextNode>

            <TextNode>“I have not heard of any.”</TextNode>

            <TextNode>“Thank you. Good morning.”</TextNode>

            <TextNode>
              Holmes returned to his seat with that quiet look of inward
              satisfaction which meant that he had a congenial task before him.
            </TextNode>

            <TextNode>“Going out, Watson?”</TextNode>

            <TextNode>“Unless I can help you.”</TextNode>

            <TextNode>
              “No, my dear fellow, it is at the hour of action that I turn to
              you for aid. But this is splendid, really unique from some points
              of view. When you pass Bradley's, would you ask him to send up a
              pound of the strongest shag tobacco? Thank you. It would be as
              well if you could make it convenient not to return before evening.
              Then I should be very glad to compare impressions as to this most
              interesting problem which has been submitted to us this morning.”
            </TextNode>

            <TextNode>
              I knew that seclusion and solitude were very necessary for my
              friend in those hours of intense mental concentration during which
              he weighed every particle of evidence, constructed alternative
              theories, balanced one against the other, and made up his mind as
              to which points were essential and which immaterial. I therefore
              spent the day at my club and did not return to Baker Street until
              evening. It was nearly nine o'clock when I found myself in the
              sitting-room once more.
            </TextNode>

            <TextNode>
              My first impression as I opened the door was that a fire had
              broken out, for the room was so filled with smoke that the light
              of the lamp upon the table was blurred by it. As I entered,
              however, my fears were set at rest, for it was the acrid fumes of
              strong coarse tobacco which took me by the throat and set me
              coughing. Through the haze I had a vague vision of Holmes in his
              dressing-gown coiled up in an armchair with his black clay pipe
              between his lips. Several rolls of paper lay around him.
            </TextNode>

            <TextNode>“Caught cold, Watson?” said he.</TextNode>

            <TextNode>“No, it's this poisonous atmosphere.”</TextNode>

            <TextNode>
              “I suppose it is pretty thick, now that you mention it.”
            </TextNode>

            <TextNode>“Thick! It is intolerable.”</TextNode>

            <TextNode>
              “Open the window, then! You have been at your club all day, I
              perceive.”
            </TextNode>

            <TextNode>“My dear Holmes!”</TextNode>

            <TextNode>“Am I right?”</TextNode>

            <TextNode>“Certainly, but how?”</TextNode>

            <TextNode>He laughed at my bewildered expression.</TextNode>

            <TextNode>
              “There is a delightful freshness about you, Watson, which makes it
              a pleasure to exercise any small powers which I possess at your
              expense. A gentleman goes forth on a showery and miry day. He
              returns immaculate in the evening with the gloss still on his hat
              and his boots. He has been a fixture therefore all day. He is not
              a man with intimate friends. Where, then, could he have been? Is
              it not obvious?”
            </TextNode>

            <TextNode>“Well, it is rather obvious.”</TextNode>

            <TextNode>
              “The world is full of obvious things which nobody by any chance
              ever observes. Where do you think that I have been?”
            </TextNode>

            <TextNode>“A fixture also.”</TextNode>

            <TextNode>“On the contrary, I have been to Devonshire.”</TextNode>

            <TextNode>“In spirit?”</TextNode>

            <TextNode>
              “Exactly. My body has remained in this arm-chair and has, I regret
              to observe, consumed in my absence two large pots of coffee and an
              incredible amount of tobacco. After you left I sent down to
              Stamford's for the Ordnance map of this portion of the moor, and
              my spirit has hovered over it all day. I flatter myself that I
              could find my way about.”
            </TextNode>

            <TextNode>“A large scale map, I presume?”</TextNode>

            <TextNode>
              “Very large.” He unrolled one section and held it over his knee.
              “Here you have the particular district which concerns us. That is
              Baskerville Hall in the middle.”
            </TextNode>

            <TextNode>“With a wood round it?”</TextNode>

            <TextNode>
              “Exactly. I fancy the Yew Alley, though not marked under that
              name, must stretch along this line, with the moor, as you
              perceive, upon the right of it. This small clump of buildings here
              is the hamlet of Grimpen, where our friend Dr. Mortimer has his
              headquarters. Within a radius of five miles there are, as you see,
              only a very few scattered dwellings. Here is Lafter Hall, which
              was mentioned in the narrative. There is a house indicated here
              which may be the residence of the naturalist—Stapleton, if I
              remember right, was his name. Here are two moorland farm-houses,
              High Tor and Foulmire. Then fourteen miles away the great convict
              prison of Princetown. Between and around these scattered points
              extends the desolate, lifeless moor. This, then, is the stage upon
              which tragedy has been played, and upon which we may help to play
              it again.”
            </TextNode>

            <TextNode>“It must be a wild place.”</TextNode>

            <TextNode>
              “Yes, the setting is a worthy one. If the devil did desire to have
              a hand in the affairs of men—”
            </TextNode>

            <TextNode>
              “Then you are yourself inclining to the supernatural explanation.”
            </TextNode>

            <TextNode>
              “The devil's agents may be of flesh and blood, may they not? There
              are two questions waiting for us at the outset. The one is whether
              any crime has been committed at all; the second is, what is the
              crime and how was it committed? Of course, if Dr. Mortimer's
              surmise should be correct, and we are dealing with forces outside
              the ordinary laws of Nature, there is an end of our investigation.
              But we are bound to exhaust all other hypotheses before falling
              back upon this one. I think we'll shut that window again, if you
              don't mind. It is a singular thing, but I find that a concentrated
              atmosphere helps a concentration of thought. I have not pushed it
              to the length of getting into a box to think, but that is the
              logical outcome of my convictions. Have you turned the case over
              in your mind?”
            </TextNode>

            <TextNode>
              “Yes, I have thought a good deal of it in the course of the day.”
            </TextNode>

            <TextNode>“What do you make of it?”</TextNode>

            <TextNode>“It is very bewildering.”</TextNode>

            <TextNode>
              “It has certainly a character of its own. There are points of
              distinction about it. That change in the footprints, for example.
              What do you make of that?”
            </TextNode>

            <TextNode>
              “Mortimer said that the man had walked on tiptoe down that portion
              of the alley.”
            </TextNode>

            <TextNode>
              “He only repeated what some fool had said at the inquest. Why
              should a man walk on tiptoe down the alley?”
            </TextNode>

            <TextNode>“What then?”</TextNode>

            <TextNode>
              “He was running, Watson—running desperately, running for his life,
              running until he burst his heart and fell dead upon his face.”
            </TextNode>

            <TextNode>“Running from what?”</TextNode>

            <TextNode>
              “There lies our problem. There are indications that the man was
              crazed with fear before ever he began to run.”
            </TextNode>

            <TextNode>“How can you say that?”</TextNode>

            <TextNode>
              “I am presuming that the cause of his fears came to him across the
              moor. If that were so, and it seems most probable, only a man who
              had lost his wits would have run from the house instead of towards
              it. If the gipsy's evidence may be taken as true, he ran with
              cries for help in the direction where help was least likely to be.
              Then, again, whom was he waiting for that night, and why was he
              waiting for him in the Yew Alley rather than in his own house?”
            </TextNode>

            <TextNode>“You think that he was waiting for someone?”</TextNode>

            <TextNode>
              “The man was elderly and infirm. We can understand his taking an
              evening stroll, but the ground was damp and the night inclement.
              Is it natural that he should stand for five or ten minutes, as Dr.
              Mortimer, with more practical sense than I should have given him
              credit for, deduced from the cigar ash?”
            </TextNode>

            <TextNode>“But he went out every evening.”</TextNode>

            <TextNode>
              “I think it unlikely that he waited at the moor-gate every
              evening. On the contrary, the evidence is that he avoided the
              moor. That night he waited there. It was the night before he made
              his departure for London. The thing takes shape, Watson. It
              becomes coherent. Might I ask you to hand me my violin, and we
              will postpone all further thought upon this business until we have
              had the advantage of meeting Dr. Mortimer and Sir Henry
              Baskerville in the morning.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page218;

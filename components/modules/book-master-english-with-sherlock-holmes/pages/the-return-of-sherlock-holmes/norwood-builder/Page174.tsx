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

function Page174({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;NORWOOD&nbsp;BUILDER'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “It strikes me, my good Lestrade, as being just a trifle too
              obvious,” said Holmes. “You do not add imagination to your other
              great qualities; but if you could for one moment put yourself in
              the place of this young man, would you choose the very night after
              the will had been made to commit your crime? Would it not seem
              dangerous to you to make so very close a relation between the two
              incidents? Again, would you choose an occasion when you are known
              to be in the house, when a servant has let you in? And, finally,
              would you take the great pains to conceal the body and yet leave
              your own stick as a sign that you were the criminal? Confess,
              Lestrade, that all this is very unlikely.”
            </TextNode>

            <TextNode>
              “As to the stick, Mr. Holmes, you know as well as I do that a
              criminal is often flurried and does things which a cool man would
              avoid. He was very likely afraid to go back to the room. Give me
              another theory that would fit the facts.”
            </TextNode>

            <TextNode>
              “I could very easily give you half-a-dozen,” said Holmes. “Here,
              for example, is a very possible and even probable one. I make you
              a free present of it. The older man is showing documents which are
              of evident value. A passing tramp sees them through the window,
              the blind of which is only half down. Exit the solicitor. Enter
              the tramp! He seizes a stick, which he observes there, kills
              Oldacre, and departs after burning the body.”
            </TextNode>

            <TextNode>“Why should the tramp burn the body?”</TextNode>

            <TextNode>“For the matter of that why should McFarlane?”</TextNode>

            <TextNode>“To hide some evidence.”</TextNode>

            <TextNode>
              “Possibly the tramp wanted to hide that any murder at all had been
              committed.”
            </TextNode>

            <TextNode>“And why did the tramp take nothing?”</TextNode>

            <TextNode>
              “Because they were papers that he could not negotiate.”
            </TextNode>

            <TextNode>
              Lestrade shook his head, though it seemed to me that his manner
              was less absolutely assured than before.
            </TextNode>

            <TextNode>
              “Well, Mr. Sherlock Holmes, you may look for your tramp, and while
              you are finding him we will hold on to our man. The future will
              show which is right. Just notice this point, Mr. Holmes: that so
              far as we know none of the papers were removed, and that the
              prisoner is the one man in the world who had no reason for
              removing them, since he was heir-at-law and would come into them
              in any case.”
            </TextNode>

            <TextNode>My friend seemed struck by this remark.</TextNode>

            <TextNode>
              “I don't mean to deny that the evidence is in some ways very
              strongly in favour of your theory,” said he. “I only wish to point
              out that there are other theories possible. As you say, the future
              will decide. Good morning! I dare say that in the course of the
              day I shall drop in at Norwood and see how you are getting on.”
            </TextNode>

            <TextNode>
              When the detective departed my friend rose and made his
              preparations for the day's work with the alert air of a man who
              has a congenial task before him.
            </TextNode>

            <TextNode>
              “My first movement, Watson,” said he, as he bustled into his
              frock-coat, “must, as I said, be in the direction of Blackheath.”
            </TextNode>

            <TextNode>“And why not Norwood?”</TextNode>

            <TextNode>
              “Because we have in this case one singular incident coming close
              to the heels of another singular incident. The police are making
              the mistake of concentrating their attention upon the second,
              because it happens to be the one which is actually criminal. But
              it is evident to me that the logical way to approach the case is
              to begin by trying to throw some light upon the first incident—the
              curious will, so suddenly made, and to so unexpected an heir. It
              may do something to simplify what followed. No, my dear fellow, I
              don't think you can help me. There is no prospect of danger, or I
              should not dream of stirring out without you. I trust that when I
              see you in the evening I will be able to report that I have been
              able to do something for this unfortunate youngster who has thrown
              himself upon my protection.”
            </TextNode>

            <TextNode>
              It was late when my friend returned, and I could see by a glance
              at his haggard and anxious face that the high hopes with which he
              had started had not been fulfilled. For an hour he droned away
              upon his violin, endeavouring to soothe his own ruffled spirits.
              At last he flung down the instrument and plunged into a detailed
              account of his misadventures.
            </TextNode>

            <TextNode>
              “It's all going wrong, Watson—all as wrong as it can go. I kept a
              bold face before Lestrade, but, upon my soul, I believe that for
              once the fellow is on the right track and we are on the wrong. All
              my instincts are one way and all the facts are the other, and I
              much fear that British juries have not yet attained that pitch of
              intelligence when they will give the preference to my theories
              over Lestrade's facts.”
            </TextNode>

            <TextNode>“Did you go to Blackheath?”</TextNode>

            <TextNode>
              “Yes, Watson, I went there, and I found very quickly that the late
              lamented Oldacre was a pretty considerable black-guard. The father
              was away in search of his son. The mother was at home—a little,
              fluffy, blue-eyed person, in a tremor of fear and indignation. Of
              course, she would not admit even the possibility of his guilt. But
              she would not express either surprise or regret over the fate of
              Oldacre. On the contrary, she spoke of him with such bitterness
              that she was unconsciously considerably strengthening the case of
              the police, for, of course, if her son had heard her speak of the
              man in this fashion it would predispose him towards hatred and
              violence. ‘He was more like a malignant and cunning ape than a
              human being,’ said she, ‘and he always was, ever since he was a
              young man.’
            </TextNode>

            <TextNode>“‘You knew him at that time?’ said I.</TextNode>

            <TextNode>
              “‘Yes, I knew him well; in fact, he was an old suitor of mine.
              Thank Heaven that I had the sense to turn away from him and to
              marry a better, if a poorer, man. I was engaged to him, Mr.
              Holmes, when I heard a shocking story of how he had turned a cat
              loose in an aviary, and I was so horrified at his brutal cruelty
              that I would have nothing more to do with him.’ She rummaged in a
              bureau, and presently she produced a photograph of a woman,
              shamefully defaced and mutilated with a knife. ‘That is my own
              photograph,’ she said. ‘He sent it to me in that state, with his
              curse, upon my wedding morning.’
            </TextNode>

            <TextNode>
              “‘Well,’ said I, ‘at least he has forgiven you now, since he has
              left all his property to your son.’
            </TextNode>

            <TextNode>
              “‘Neither my son nor I want anything from Jonas Oldacre, dead or
              alive,’ she cried, with a proper spirit. ‘There is a God in
              Heaven, Mr. Holmes, and that same God who has punished that wicked
              man will show in His own good time that my son's hands are
              guiltless of his blood.’
            </TextNode>

            <TextNode>
              “Well, I tried one or two leads, but could get at nothing which
              would help our hypothesis, and several points which would make
              against it. I gave it up at last and off I went to Norwood.
            </TextNode>

            <TextNode>
              “This place, Deep Dene House, is a big modern villa of staring
              brick, standing back in its own grounds, with a laurel-clumped
              lawn in front of it. To the right and some distance back from the
              road was the timber-yard which had been the scene of the fire.
              Here's a rough plan on a leaf of my note-book. This window on the
              left is the one which opens into Oldacre's room. You can look into
              it from the road, you see. That is about the only bit of
              consolation I have had to-day. Lestrade was not there, but his
              head constable did the honours. They had just made a great
              treasure-trove. They had spent the morning raking among the ashes
              of the burned wood-pile, and besides the charred organic remains
              they had secured several discoloured metal discs. I examined them
              with care, and there was no doubt that they were trouser buttons.
              I even distinguished that one of them was marked with the name of
              ‘Hyams,’ who was Oldacre's tailor. I then worked the lawn very
              carefully for signs and traces, but this drought has made
              everything as hard as iron. Nothing was to be seen save that some
              body or bundle had been dragged through a low privet hedge which
              is in a line with the wood-pile. All that, of course, fits in with
              the official theory. I crawled about the lawn with an August sun
              on my back, but I got up at the end of an hour no wiser than
              before.
            </TextNode>

            <TextNode>
              “Well, after this fiasco I went into the bedroom and examined that
              also. The blood-stains were very slight, mere smears and
              discolorations, but undoubtedly fresh. The stick had been removed,
              but there also the marks were slight. There is no doubt about the
              stick belonging to our client. He admits it. Footmarks of both men
              could be made out on the carpet, but none of any third person,
              which again is a trick for the other side. They were piling up
              their score all the time and we were at a standstill.
            </TextNode>

            <TextNode>
              “Only one little gleam of hope did I get—and yet it amounted to
              nothing. I examined the contents of the safe, most of which had
              been taken out and left on the table. The papers had been made up
              into sealed envelopes, one or two of which had been opened by the
              police. They were not, so far as I could judge, of any great
              value, nor did the bank-book show that Mr. Oldacre was in such
              very affluent circumstances. But it seemed to me that all the
              papers were not there. There were allusions to some deeds—possibly
              the more valuable—which I could not find. This, of course, if we
              could definitely prove it, would turn Lestrade's argument against
              himself, for who would steal a thing if he knew that he would
              shortly inherit it?
            </TextNode>

            <TextNode>
              “Finally, having drawn every other cover and picked up no scent, I
              tried my luck with the housekeeper. Mrs. Lexington is her name, a
              little, dark, silent person, with suspicious and sidelong eyes.
              She could tell us something if she would—I am convinced of it. But
              she was as close as wax. Yes, she had let Mr. McFarlane in at
              half-past nine. She wished her hand had withered before she had
              done so. She had gone to bed at half-past ten. Her room was at the
              other end of the house, and she could hear nothing of what passed.
              Mr. McFarlane had left his hat, and to the best of her belief his
              stick, in the hall. She had been awakened by the alarm of fire.
              Her poor, dear master had certainly been murdered. Had he any
              enemies? Well, every man had enemies, but Mr. Oldacre kept himself
              very much to himself, and only met people in the way of business.
              She had seen the buttons, and was sure that they belonged to the
              clothes which he had worn last night. The wood-pile was very dry,
              for it had not rained for a month. It burned like tinder, and by
              the time she reached the spot nothing could be seen but flames.
              She and all the firemen smelled the burned flesh from inside it.
              She knew nothing of the papers, nor of Mr. Oldacre's private
              affairs.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “So, my dear Watson, there's my report of a failure. And yet—and
              yet—”—he clenched his thin hands in a paroxysm of conviction—“I
              know it's all wrong. I feel it in my bones. There is something
              that has not come out, and that housekeeper knows it. There was a
              sort of sulky defiance in her eyes, which only goes with guilty
              knowledge. However, there's no good talking any more about it,
              Watson; but unless some lucky chance comes our way I fear that the
              Norwood Disappearance Case will not figure in that chronicle of
              our successes which I foresee that a patient public will sooner or
              later have to endure.”
            </TextNode>

            <TextNode>
              “Surely,” said I, “the man's appearance would go far with any
              jury?”
            </TextNode>

            <TextNode>
              “That is a dangerous argument, my dear Watson. You remember that
              terrible murderer, Bert Stevens, who wanted us to get him off in
              '87? Was there ever a more mild-mannered, Sunday-school young
              man?”
            </TextNode>

            <TextNode>“It is true.”</TextNode>

            <TextNode>
              “Unless we succeed in establishing an alternative theory this man
              is lost. You can hardly find a flaw in the case which can now be
              presented against him, and all further investigation has served to
              strengthen it. By the way, there is one curious little point about
              those papers which may serve us as the starting-point for an
              inquiry. On looking over the bank-book I found that the low state
              of the balance was principally due to large cheques which have
              been made out during the last year to Mr. Cornelius. I confess
              that I should be interested to know who this Mr. Cornelius may be
              with whom a retired builder has such very large transactions. Is
              it possible that he has had a hand in the affair? Cornelius might
              be a broker, but we have found no scrip to correspond with these
              large payments. Failing any other indication my researches must
              now take the direction of an inquiry at the bank for the gentleman
              who has cashed these cheques. But I fear, my dear fellow, that our
              case will end ingloriously by Lestrade hanging our client, which
              will certainly be a triumph for Scotland Yard.”
            </TextNode>

            <TextNode>
              I do not know how far Sherlock Holmes took any sleep that night,
              but when I came down to breakfast I found him pale and harassed,
              his bright eyes the brighter for the dark shadows round them. The
              carpet round his chair was littered with cigarette-ends and with
              the early editions of the morning papers. An open telegram lay
              upon the table.
            </TextNode>

            <TextNode>
              “What do you think of this, Watson?” he asked, tossing it across.
            </TextNode>

            <TextNode>It was from Norwood, and ran as follows:</TextNode>

            <TextNode>
              “Important fresh evidence to hand. McFarlane's guilt definitely
              established. Advise you to abandon case.
            </TextNode>

            <TextNode>— Lestrade.</TextNode>

            <TextNode>“This sounds serious,” said I.</TextNode>

            <TextNode>
              “It is Lestrade's little cock-a-doodle of victory,” Holmes
              answered, with a bitter smile. “And yet it may be premature to
              abandon the case. After all, important fresh evidence is a
              two-edged thing, and may possibly cut in a very different
              direction to that which Lestrade imagines. Take your breakfast,
              Watson, and we will go out together and see what we can do. I feel
              as if I shall need your company and your moral support to-day.”
            </TextNode>

            <TextNode>
              My friend had no breakfast himself, for it was one of his
              peculiarities that in his more intense moments he would permit
              himself no food, and I have known him presume upon his iron
              strength until he has fainted from pure inanition. “At present I
              cannot spare energy and nerve force for digestion,” he would say
              in answer to my medical remonstrances. I was not surprised,
              therefore, when this morning he left his untouched meal behind him
              and started with me for Norwood. A crowd of morbid sightseers were
              still gathered round Deep Dene House, which was just such a
              suburban villa as I had pictured. Within the gates Lestrade met
              us, his face flushed with victory, his manner grossly triumphant.
            </TextNode>

            <TextNode>
              “Well, Mr. Holmes, have you proved us to be wrong yet? Have you
              found your tramp?” he cried.
            </TextNode>

            <TextNode>
              “I have formed no conclusion whatever,” my companion answered.
            </TextNode>

            <TextNode>
              “But we formed ours yesterday, and now it proves to be correct; so
              you must acknowledge that we have been a little in front of you
              this time, Mr. Holmes.”
            </TextNode>

            <TextNode>
              “You certainly have the air of something unusual having occurred,”
              said Holmes.
            </TextNode>

            <TextNode>Lestrade laughed loudly.</TextNode>

            <TextNode>
              “You don't like being beaten any more than the rest of us do,”
              said he. “A man can't expect always to have it his own way, can
              he, Dr. Watson? Step this way, if you please, gentlemen, and I
              think I can convince you once for all that it was John McFarlane
              who did this crime.”
            </TextNode>

            <TextNode>
              He led us through the passage and out into a dark hall beyond.
            </TextNode>

            <TextNode>
              “This is where young McFarlane must have come out to get his hat
              after the crime was done,” said he. “Now, look at this.” With
              dramatic suddenness he struck a match and by its light exposed a
              stain of blood upon the whitewashed wall. As he held the match
              nearer I saw that it was more than a stain. It was the well-marked
              print of a thumb.
            </TextNode>

            <TextNode>
              “Look at that with your magnifying glass, Mr. Holmes.”
            </TextNode>

            <TextNode>“Yes, I am doing so.”</TextNode>

            <TextNode>
              “You are aware that no two thumb marks are alike?”
            </TextNode>

            <TextNode>“I have heard something of the kind.”</TextNode>

            <TextNode>
              “Well, then, will you please compare that print with this wax
              impression of young McFarlane's right thumb, taken by my orders
              this morning?”
            </TextNode>

            <TextNode>
              As he held the waxen print close to the blood-stain it did not
              take a magnifying glass to see that the two were undoubtedly from
              the same thumb. It was evident to me that our unfortunate client
              was lost.
            </TextNode>

            <TextNode>“That is final,” said Lestrade.</TextNode>

            <TextNode>“Yes, that is final,” I involuntarily echoed.</TextNode>

            <TextNode>“It is final,” said Holmes.</TextNode>

            <TextNode>
              Something in his tone caught my ear, and I turned to look at him.
              An extraordinary change had come over his face. It was writhing
              with inward merriment. His two eyes were shining like stars. It
              seemed to me that he was making desperate efforts to restrain a
              convulsive attack of laughter.
            </TextNode>

            <TextNode>
              “Dear me! Dear me!” he said at last. “Well, now, who would have
              thought it? And how deceptive appearances may be, to be sure! Such
              a nice young man to look at! It is a lesson to us not to trust our
              own judgment, is it not, Lestrade?”
            </TextNode>

            <TextNode>
              “Yes, some of us are a little too much inclined to be cocksure,
              Mr. Holmes,” said Lestrade. The man's insolence was maddening, but
              we could not resent it.
            </TextNode>

            <TextNode>
              “What a providential thing that this young man should press his
              right thumb against the wall in taking his hat from the peg! Such
              a very natural action, too, if you come to think of it.” Holmes
              was outwardly calm, but his whole body gave a wriggle of
              suppressed excitement as he spoke. “By the way, Lestrade, who made
              this remarkable discovery?”
            </TextNode>

            <TextNode>
              “It was the housekeeper, Mrs. Lexington, who drew the night
              constable's attention to it.”
            </TextNode>

            <TextNode>“Where was the night constable?”</TextNode>

            <TextNode>
              “He remained on guard in the bedroom where the crime was
              committed, so as to see that nothing was touched.”
            </TextNode>

            <TextNode>
              “But why didn't the police see this mark yesterday?”
            </TextNode>

            <TextNode>
              “Well, we had no particular reason to make a careful examination
              of the hall. Besides, it's not in a very prominent place, as you
              see.”
            </TextNode>

            <TextNode>
              “No, no, of course not. I suppose there is no doubt that the mark
              was there yesterday?”
            </TextNode>

            <TextNode>
              Lestrade looked at Holmes as if he thought he was going out of his
              mind. I confess that I was myself surprised both at his hilarious
              manner and at his rather wild observation.
            </TextNode>

            <TextNode>
              “I don't know whether you think that McFarlane came out of jail in
              the dead of the night in order to strengthen the evidence against
              himself,” said Lestrade. “I leave it to any expert in the world
              whether that is not the mark of his thumb.”
            </TextNode>

            <TextNode>“It is unquestionably the mark of his thumb.”</TextNode>

            <TextNode>
              “There, that's enough,” said Lestrade. “I am a practical man, Mr.
              Holmes, and when I have got my evidence I come to my conclusions.
              If you have anything to say you will find me writing my report in
              the sitting-room.”
            </TextNode>

            <TextNode>
              Holmes had recovered his equanimity, though I still seemed to
              detect gleams of amusement in his expression.
            </TextNode>

            <TextNode>
              “Dear me, this is a very sad development, Watson, is it not?” said
              he. “And yet there are singular points about it which hold out
              some hopes for our client.”
            </TextNode>

            <TextNode>
              “I am delighted to hear it,” said I, heartily. “I was afraid it
              was all up with him.”
            </TextNode>

            <TextNode>
              “I would hardly go so far as to say that, my dear Watson. The fact
              is that there is one really serious flaw in this evidence to which
              our friend attaches so much importance.”
            </TextNode>

            <TextNode>“Indeed, Holmes! What is it?”</TextNode>

            <TextNode>
              “Only this: that I know that that mark was not there when I
              examined the hall yesterday. And now, Watson, let us have a little
              stroll round in the sunshine.”
            </TextNode>

            <TextNode>
              With a confused brain, but with a heart into which some warmth of
              hope was returning, I accompanied my friend in a walk round the
              garden. Holmes took each face of the house in turn and examined it
              with great interest. He then led the way inside and went over the
              whole building from basement to attics. Most of the rooms were
              unfurnished, but none the less Holmes inspected them all minutely.
              Finally, on the top corridor, which ran outside three untenanted
              bedrooms, he again was seized with a spasm of merriment.
            </TextNode>

            <TextNode>
              “There are really some very unique features about this case,
              Watson,” said he. “I think it is time now that we took our friend
              Lestrade into our confidence. He has had his little smile at our
              expense, and perhaps we may do as much by him if my reading of
              this problem proves to be correct. Yes, yes; I think I see how we
              should approach it.”
            </TextNode>

            <TextNode>
              The Scotland Yard inspector was still writing in the parlour when
              Holmes interrupted him.
            </TextNode>

            <TextNode>
              “I understood that you were writing a report of this case,” said
              he.
            </TextNode>

            <TextNode>“So I am.”</TextNode>

            <TextNode>
              “Don't you think it may be a little premature? I can't help
              thinking that your evidence is not complete.”
            </TextNode>

            <TextNode>
              Lestrade knew my friend too well to disregard his words. He laid
              down his pen and looked curiously at him.
            </TextNode>

            <TextNode>“What do you mean, Mr. Holmes?”</TextNode>

            <TextNode>
              “Only that there is an important witness whom you have not seen.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page174;

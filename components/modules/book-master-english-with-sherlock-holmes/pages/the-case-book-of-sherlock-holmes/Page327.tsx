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

function Page327({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;PROBLEM OF&nbsp;THOR&nbsp;BRIDGE'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Well, maybe so,” said the millionaire, though for a moment the
              reproof had brought the old angry gleam into his eyes. “I'm not
              pretending to be any better than I am. I guess all my life I've
              been a man that reached out his hand for what he wanted, and I
              never wanted anything more than the love and possession of that
              woman. I told her so.”
            </TextNode>

            <TextNode>“Oh, you did, did you?”</TextNode>

            <TextNode>
              Holmes could look very formidable when he was moved.
            </TextNode>

            <TextNode>
              “I said to her that if I could marry her I would, but that it was
              out of my power. I said that money was no object and that all I
              could do to make her happy and comfortable would be done.”
            </TextNode>

            <TextNode>
              “Very generous, I am sure,” said Holmes with a sneer.
            </TextNode>

            <TextNode>
              “See here, Mr. Holmes. I came to you on a question of evidence,
              not on a question of morals. I'm not asking for your criticism.”
            </TextNode>

            <TextNode>
              “It is only for the young lady's sake that I touch your case at
              all,” said Holmes sternly. “I don't know that anything she is
              accused of is really worse than what you have yourself admitted,
              that you have tried to ruin a defenceless girl who was under your
              roof. Some of you rich men have to be taught that all the world
              cannot be bribed into condoning your offences.”
            </TextNode>

            <TextNode>
              To my surprise the Gold King took the reproof with equanimity.
            </TextNode>

            <TextNode>
              “That's how I feel myself about it now. I thank God that my plans
              did not work out as I intended. She would have none of it, and she
              wanted to leave the house instantly.”
            </TextNode>

            <TextNode>“Why did she not?”</TextNode>

            <TextNode>
              “Well, in the first place, others were dependent upon her, and it
              was no light matter for her to let them all down by sacrificing
              her living. When I had sworn—as I did—that she should never be
              molested again, she consented to remain. But there was another
              reason. She knew the influence she had over me, and that it was
              stronger than any other influence in the world. She wanted to use
              it for good.”
            </TextNode>

            <TextNode>“How?”</TextNode>

            <TextNode>
              “Well, she knew something of my affairs. They are large, Mr.
              Holmes—large beyond the belief of an ordinary man. I can make or
              break—and it is usually break. It wasn't individuals only. It was
              communities, cities, even nations. Business is a hard game, and
              the weak go to the wall. I played the game for all it was worth. I
              never squealed myself, and I never cared if the other fellow
              squealed. But she saw it different. I guess she was right. She
              believed and said that a fortune for one man that was more than he
              needed should not be built on ten thousand ruined men who were
              left without the means of life. That was how she saw it, and I
              guess she could see past the dollars to something that was more
              lasting. She found that I listened to what she said, and she
              believed she was serving the world by influencing my actions. So
              she stayed—and then this came along.”
            </TextNode>

            <TextNode>“Can you throw any light upon that?”</TextNode>

            <TextNode>
              The Gold King paused for a minute or more, his head sunk in his
              hands, lost in deep thought.
            </TextNode>

            <TextNode>
              “It's very black against her. I can't deny that. And women lead an
              inward life and may do things beyond the judgment of a man. At
              first I was so rattled and taken aback that I was ready to think
              she had been led away in some extraordinary fashion that was clean
              against her usual nature. One explanation came into my head. I
              give it to you, Mr. Holmes, for what it is worth. There is no
              doubt that my wife was bitterly jealous. There is a soul-jealousy
              that can be as frantic as any body-jealousy, and though my wife
              had no cause—and I think she understood this—for the latter, she
              was aware that this English girl exerted an influence upon my mind
              and my acts that she herself never had. It was an influence for
              good, but that did not mend the matter. She was crazy with hatred,
              and the heat of the Amazon was always in her blood. She might have
              planned to murder Miss Dunbar—or we will say to threaten her with
              a gun and so frighten her into leaving us. Then there might have
              been a scuffle and the gun gone off and shot the woman who held
              it.”
            </TextNode>

            <TextNode>
              “That possibility had already occurred to me,” said Holmes.
              “Indeed, it is the only obvious alternative to deliberate murder.”
            </TextNode>

            <TextNode>“But she utterly denies it.”</TextNode>

            <TextNode>
              “Well, that is not final—is it? One can understand that a woman
              placed in so awful a position might hurry home still in her
              bewilderment holding the revolver. She might even throw it down
              among her clothes, hardly knowing what she was doing, and when it
              was found she might try to lie her way out by a total denial,
              since all explanation was impossible. What is against such a
              supposition?”
            </TextNode>

            <TextNode>“Miss Dunbar herself.”</TextNode>

            <TextNode>“Well, perhaps.”</TextNode>

            <TextNode>
              Holmes looked at his watch. “I have no doubt we can get the
              necessary permits this morning and reach Winchester by the evening
              train. When I have seen this young lady it is very possible that I
              may be of more use to you in the matter, though I cannot promise
              that my conclusions will necessarily be such as you desire.”
            </TextNode>

            <TextNode>
              There was some delay in the official pass, and instead of reaching
              Winchester that day we went down to Thor Place, the Hampshire
              estate of Mr. Neil Gibson. He did not accompany us himself, but we
              had the address of Sergeant Coventry, of the local police, who had
              first examined into the affair. He was a tall, thin, cadaverous
              man, with a secretive and mysterious manner which conveyed the
              idea that he knew or suspected a very great deal more than he
              dared say. He had a trick, too, of suddenly sinking his voice to a
              whisper as if he had come upon something of vital importance,
              though the information was usually commonplace enough. Behind
              these tricks of manner he soon showed himself to be a decent,
              honest fellow who was not too proud to admit that he was out of
              his depth and would welcome any help.
            </TextNode>

            <TextNode>
              “Anyhow, I'd rather have you than Scotland Yard, Mr. Holmes,” said
              he. “If the Yard gets called into a case, then the local loses all
              credit for success and may be blamed for failure. Now, you play
              straight, so I've heard.”
            </TextNode>

            <TextNode>
              “I need not appear in the matter at all,” said Holmes to the
              evident relief of our melancholy acquaintance. “If I can clear it
              up I don't ask to have my name mentioned.”
            </TextNode>

            <TextNode>
              “Well, it's very handsome of you, I am sure. And your friend, Dr.
              Watson, can be trusted, I know. Now, Mr. Holmes, as we walk down
              to the place there is one question I should like to ask you. I'd
              breathe it to no soul but you.” He looked round as though he
              hardly dare utter the words. “Don't you think there might be a
              case against Mr. Neil Gibson himself?”
            </TextNode>

            <TextNode>“I have been considering that.”</TextNode>

            <TextNode>
              “You've not seen Miss Dunbar. She is a wonderful fine woman in
              every way. He may well have wished his wife out of the road. And
              these Americans are readier with pistols than our folk are. It was
              his pistol, you know.”
            </TextNode>

            <TextNode>“Was that clearly made out?”</TextNode>

            <TextNode>“Yes, sir. It was one of a pair that he had.”</TextNode>

            <TextNode>“One of a pair? Where is the other?”</TextNode>

            <TextNode>
              “Well, the gentleman has a lot of firearms of one sort and
              another. We never quite matched that particular pistol—but the box
              was made for two.”
            </TextNode>

            <TextNode>
              “If it was one of a pair you should surely be able to match it.”
            </TextNode>

            <TextNode>
              “Well, we have them all laid out at the house if you would care to
              look them over.”
            </TextNode>

            <TextNode>
              “Later, perhaps. I think we will walk down together and have a
              look at the scene of the tragedy.”
            </TextNode>

            <TextNode>
              This conversation had taken place in the little front room of
              Sergeant Coventry's humble cottage which served as the local
              police-station. A walk of half a mile or so across a wind-swept
              heath, all gold and bronze with the fading ferns, brought us to a
              side-gate opening into the grounds of the Thor Place estate. A
              path led us through the pheasant preserves, and then from a
              clearing we saw the widespread, half-timbered house, half Tudor
              and half Georgian, upon the crest of the hill. Beside us there was
              a long, reedy pool, constricted in the centre where the main
              carriage drive passed over a stone bridge, but swelling into small
              lakes on either side. Our guide paused at the mouth of this
              bridge, and he pointed to the ground.
            </TextNode>

            <TextNode>
              “That was where Mrs. Gibson's body lay. I marked it by that
              stone.”
            </TextNode>

            <TextNode>
              “I understand that you were there before it was moved?”
            </TextNode>

            <TextNode>“Yes, they sent for me at once.”</TextNode>

            <TextNode>“Who did?”</TextNode>

            <TextNode>
              “Mr. Gibson himself. The moment the alarm was given and he had
              rushed down with others from the house, he insisted that nothing
              should be moved until the police should arrive.”
            </TextNode>

            <TextNode>
              “That was sensible. I gathered from the newspaper report that the
              shot was fired from close quarters.”
            </TextNode>

            <TextNode>“Yes, sir, very close.”</TextNode>

            <TextNode>“Near the right temple?”</TextNode>

            <TextNode>“Just behind it, sir.”</TextNode>

            <TextNode>“How did the body lie?”</TextNode>

            <TextNode>
              “On the back, sir. No trace of a struggle. No marks. No weapon.
              The short note from Miss Dunbar was clutched in her left hand.”
            </TextNode>

            <TextNode>“Clutched, you say?”</TextNode>

            <TextNode>“Yes, sir, we could hardly open the fingers.”</TextNode>

            <TextNode>
              “That is of great importance. It excludes the idea that anyone
              could have placed the note there after death in order to furnish a
              false clue. Dear me! The note, as I remember, was quite short:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “I will be at Thor Bridge at nine o'clock.
              </TextNode>

              <TextNode noIndent className='italic'>
                — “G. Dunbar.
              </TextNode>
            </Indent>

            <TextNode noIndent>“Was that not so?”</TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>“Did Miss Dunbar admit writing it?”</TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>“What was her explanation?”</TextNode>

            <TextNode>
              “Her defence was reserved for the Assizes. She would say nothing.”
            </TextNode>

            <TextNode>
              “The problem is certainly a very interesting one. The point of the
              letter is very obscure, is it not?”
            </TextNode>

            <TextNode>
              “Well, sir,” said the guide, “it seemed, if I may be so bold as to
              say so, the only really clear point in the whole case.”
            </TextNode>

            <TextNode>Holmes shook his head.</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Granting that the letter is genuine and was really written, it
              was certainly received some time before—say one hour or two. Why,
              then, was this lady still clasping it in her left hand? Why should
              she carry it so carefully? She did not need to refer to it in the
              interview. Does it not seem remarkable?”
            </TextNode>

            <TextNode>“Well, sir, as you put it, perhaps it does.”</TextNode>

            <TextNode>
              “I think I should like to sit quietly for a few minutes and think
              it out.” He seated himself upon the stone ledge of the bridge, and
              I could see his quick gray eyes darting their questioning glances
              in every direction. Suddenly he sprang up again and ran across to
              the opposite parapet, whipped his lens from his pocket, and began
              to examine the stonework.
            </TextNode>

            <TextNode>“This is curious,” said he.</TextNode>

            <TextNode>
              “Yes, sir, we saw the chip on the ledge. I expect it's been done
              by some passer-by.”
            </TextNode>

            <TextNode>
              The stonework was gray, but at this one point it showed white for
              a space not larger than a sixpence. When examined closely one
              could see that the surface was chipped as by a sharp blow.
            </TextNode>

            <TextNode>
              “It took some violence to do that,” said Holmes thoughtfully. With
              his cane he struck the ledge several times without leaving a mark.
              “Yes, it was a hard knock. In a curious place, too. It was not
              from above but from below, for you see that it is on the lower
              edge of the parapet.”
            </TextNode>

            <TextNode>
              “But it is at least fifteen feet from the body.”
            </TextNode>

            <TextNode>
              “Yes, it is fifteen feet from the body. It may have nothing to do
              with the matter, but it is a point worth noting. I do not think
              that we have anything more to learn here. There were no footsteps,
              you say?”
            </TextNode>

            <TextNode>
              “The ground was iron hard, sir. There were no traces at all.”
            </TextNode>

            <TextNode>
              “Then we can go. We will go up to the house first and look over
              these weapons of which you speak. Then we shall get on to
              Winchester, for I should desire to see Miss Dunbar before we go
              farther.”
            </TextNode>

            <TextNode>
              Mr. Neil Gibson had not returned from town, but we saw in the
              house the neurotic Mr. Bates who had called upon us in the
              morning. He showed us with a sinister relish the formidable array
              of firearms of various shapes and sizes which his employer had
              accumulated in the course of an adventurous life.
            </TextNode>

            <TextNode>
              “Mr. Gibson has his enemies, as anyone would expect who knew him
              and his methods,” said he. “He sleeps with a loaded revolver in
              the drawer beside his bed. He is a man of violence, sir, and there
              are times when all of us are afraid of him. I am sure that the
              poor lady who has passed was often terrified.”
            </TextNode>

            <TextNode>
              “Did you ever witness physical violence towards her?”
            </TextNode>

            <TextNode>
              “No, I cannot say that. But I have heard words which were nearly
              as bad—words of cold, cutting contempt, even before the servants.”
            </TextNode>

            <TextNode>
              “Our millionaire does not seem to shine in private life,” remarked
              Holmes as we made our way to the station. “Well, Watson, we have
              come on a good many facts, some of them new ones, and yet I seem
              some way from my conclusion. In spite of the very evident dislike
              which Mr. Bates has to his employer, I gather from him that when
              the alarm came he was undoubtedly in his library. Dinner was over
              at 8.30 and all was normal up to then. It is true that the alarm
              was somewhat late in the evening, but the tragedy certainly
              occurred about the hour named in the note. There is no evidence at
              all that Mr. Gibson had been out of doors since his return from
              town at five o'clock. On the other hand, Miss Dunbar, as I
              understand it, admits that she had made an appointment to meet
              Mrs. Gibson at the bridge. Beyond this she would say nothing, as
              her lawyer had advised her to reserve her defence. We have several
              very vital questions to ask that young lady, and my mind will not
              be easy until we have seen her. I must confess that the case would
              seem to me to be very black against her if it were not for one
              thing.”
            </TextNode>

            <TextNode>“And what is that, Holmes?”</TextNode>

            <TextNode>“The finding of the pistol in her wardrobe.”</TextNode>

            <TextNode>
              “Dear me, Holmes!” I cried, “that seemed to me to be the most
              damning incident of all.”
            </TextNode>

            <TextNode>
              “Not so, Watson. It had struck me even at my first perfunctory
              reading as very strange, and now that I am in closer touch with
              the case it is my only firm ground for hope. We must look for
              consistency. Where there is a want of it we must suspect
              deception.”
            </TextNode>

            <TextNode>“I hardly follow you.”</TextNode>

            <TextNode>
              “Well now, Watson, suppose for a moment that we visualize you in
              the character of a woman who, in a cold, premeditated fashion, is
              about to get rid of a rival. You have planned it. A note has been
              written. The victim has come. You have your weapon. The crime is
              done. It has been workmanlike and complete. Do you tell me that
              after carrying out so crafty a crime you would now ruin your
              reputation as a criminal by forgetting to fling your weapon into
              those adjacent reed-beds which would forever cover it, but you
              must needs carry it carefully home and put it in your own
              wardrobe, the very first place that would be searched? Your best
              friends would hardly call you a schemer, Watson, and yet I could
              not picture you doing anything so crude as that.”
            </TextNode>

            <TextNode>“In the excitement of the moment—”</TextNode>

            <TextNode>
              “No, no, Watson, I will not admit that it is possible. Where a
              crime is coolly premeditated, then the means of covering it are
              coolly premeditated also. I hope, therefore, that we are in the
              presence of a serious misconception.”
            </TextNode>

            <TextNode>“But there is so much to explain.”</TextNode>

            <TextNode>
              “Well, we shall set about explaining it. When once your point of
              view is changed, the very thing which was so damning becomes a
              clue to the truth. For example, there is this revolver. Miss
              Dunbar disclaims all knowledge of it. On our new theory she is
              speaking truth when she says so. Therefore, it was placed in her
              wardrobe. Who placed it there? Someone who wished to incriminate
              her. Was not that person the actual criminal? You see how we come
              at once upon a most fruitful line of inquiry.”
            </TextNode>

            <TextNode>
              We were compelled to spend the night at Winchester, as the
              formalities had not yet been completed, but next morning, in the
              company of Mr. Joyce Cummings, the rising barrister who was
              entrusted with the defence, we were allowed to see the young lady
              in her cell. I had expected from all that we had heard to see a
              beautiful woman, but I can never forget the effect which Miss
              Dunbar produced upon me. It was no wonder that even the masterful
              millionaire had found in her something more powerful than
              himself—something which could control and guide him. One felt,
              too, as one looked at the strong, clear-cut, and yet sensitive
              face, that even should she be capable of some impetuous deed, none
              the less there was an innate nobility of character which would
              make her influence always for the good. She was a brunette, tall,
              with a noble figure and commanding presence, but her dark eyes had
              in them the appealing, helpless expression of the hunted creature
              who feels the nets around it, but can see no way out from the
              toils. Now, as she realized the presence and the help of my famous
              friend, there came a touch of colour in her wan cheeks and a light
              of hope began to glimmer in the glance which she turned upon us.
            </TextNode>

            <TextNode>
              “Perhaps Mr. Neil Gibson has told you something of what occurred
              between us?” she asked in a low, agitated voice.
            </TextNode>

            <TextNode>
              “Yes,” Holmes answered, “you need not pain yourself by entering
              into that part of the story. After seeing you, I am prepared to
              accept Mr. Gibson's statement both as to the influence which you
              had over him and as to the innocence of your relations with him.
              But why was the whole situation not brought out in court?”
            </TextNode>

            <TextNode>
              “It seemed to me incredible that such a charge could be sustained.
              I thought that if we waited the whole thing must clear itself up
              without our being compelled to enter into painful details of the
              inner life of the family. But I understand that far from clearing
              it has become even more serious.”
            </TextNode>

            <TextNode>
              “My dear young lady,” cried Holmes earnestly, “I beg you to have
              no illusions upon the point. Mr. Cummings here would assure you
              that all the cards are at present against us, and that we must do
              everything that is possible if we are to win clear. It would be a
              cruel deception to pretend that you are not in very great danger.
              Give me all the help you can, then, to get at the truth.”
            </TextNode>

            <TextNode>“I will conceal nothing.”</TextNode>

            <TextNode>
              “Tell us, then, of your true relations with Mr. Gibson's wife.”
            </TextNode>

            <TextNode>
              “She hated me, Mr. Holmes. She hated me with all the fervour of
              her tropical nature. She was a woman who would do nothing by
              halves, and the measure of her love for her husband was the
              measure also of her hatred for me. It is probable that she
              misunderstood our relations. I would not wish to wrong her, but
              she loved so vividly in a physical sense that she could hardly
              understand the mental, and even spiritual, tie which held her
              husband to me, or imagine that it was only my desire to influence
              his power to good ends which kept me under his roof. I can see now
              that I was wrong. Nothing could justify me in remaining where I
              was a cause of unhappiness, and yet it is certain that the
              unhappiness would have remained even if I had left the house.”
            </TextNode>

            <TextNode>
              “Now, Miss Dunbar,” said Holmes, “I beg you to tell us exactly
              what occurred that evening.”
            </TextNode>

            <TextNode>
              “I can tell you the truth so far as I know it, Mr. Holmes, but I
              am in a position to prove nothing, and there are points—the most
              vital points—which I can neither explain nor can I imagine any
              explanation.”
            </TextNode>

            <TextNode>
              “If you will find the facts, perhaps others may find the
              explanation.”
            </TextNode>

            <TextNode>
              “With regard, then, to my presence at Thor Bridge that night, I
              received a note from Mrs. Gibson in the morning. It lay on the
              table of the schoolroom, and it may have been left there by her
              own hand. It implored me to see her there after dinner, said she
              had something important to say to me, and asked me to leave an
              answer on the sundial in the garden, as she desired no one to be
              in our confidence. I saw no reason for such secrecy, but I did as
              she asked, accepting the appointment. She asked me to destroy her
              note and I burned it in the schoolroom grate. She was very much
              afraid of her husband, who treated her with a harshness for which
              I frequently reproached him, and I could only imagine that she
              acted in this way because she did not wish him to know of our
              interview.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page327;

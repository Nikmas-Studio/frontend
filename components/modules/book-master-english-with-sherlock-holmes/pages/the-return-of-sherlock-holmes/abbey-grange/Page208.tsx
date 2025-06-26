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

function Page208({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;ABBEY&nbsp;GRANGE'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              It was on a bitterly cold and frosty morning during the winter of
              '97 that I was awakened by a tugging at my shoulder. It was
              Holmes. The candle in his hand shone upon his eager, stooping face
              and told me at a glance that something was amiss.
            </TextNode>

            <TextNode>
              “Come, Watson, come!” he cried. “The game is afoot. Not a word!
              Into your clothes and come!”
            </TextNode>

            <TextNode>
              Ten minutes later we were both in a cab and rattling through the
              silent streets on our way to Charing Cross Station. The first
              faint winter's dawn was beginning to appear, and we could dimly
              see the occasional figure of an early workman as he passed us,
              blurred and indistinct in the opalescent London reek. Holmes
              nestled in silence into his heavy coat, and I was glad to do the
              same, for the air was most bitter and neither of us had broken our
              fast. It was not until we had consumed some hot tea at the
              station, and taken our places in the Kentish train, that we were
              sufficiently thawed, he to speak and I to listen. Holmes drew a
              note from his pocket and read it aloud:
            </TextNode>

            <Indent>
              <TextNode noIndent className='text-right  italic'>
                “Abbey Grange, Marsham, Kent,
              </TextNode>
              <TextNode noIndent className='text-right  italic'>
                “3.30 a.m.
              </TextNode>
              <TextNode noIndent className='italic'>
                “My dear Mr. Holmes:
              </TextNode>
              <TextNode noIndent>
                “I should be very glad of your immediate assistance in what
                promises to be a most remarkable case. It is something quite in
                your line. Except for releasing the lady I will see that
                everything is kept exactly as I have found it, but I beg you not
                to lose an instant, as it is difficult to leave Sir Eustace
                there.
              </TextNode>
              <TextNode noIndent className='italic'>
                “Yours faithfully,
              </TextNode>
              <TextNode noIndent className='italic'>
                “Stanley Hopkins.”
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “Hopkins has called me in seven times, and on each occasion his
              summons has been entirely justified,” said Holmes. “I fancy that
              every one of his cases has found its way into your collection, and
              I must admit, Watson, that you have some power of selection which
              atones for much which I deplore in your narratives. Your fatal
              habit of looking at everything from the point of view of a story
              instead of as a scientific exercise has ruined what might have
              been an instructive and even classical series of demonstrations.
              You slur over work of the utmost finesse and delicacy in order to
              dwell upon sensational details which may excite, but cannot
              possibly instruct, the reader.”
            </TextNode>

            <TextNode>
              “Why do you not write them yourself?” I said, with some
              bitterness.
            </TextNode>

            <TextNode>
              “I will, my dear Watson, I will. At present I am, as you know,
              fairly busy, but I propose to devote my declining years to the
              composition of a text-book which shall focus the whole art of
              detection into one volume. Our present research appears to be a
              case of murder.”
            </TextNode>

            <TextNode>“You think this Sir Eustace is dead, then?”</TextNode>

            <TextNode>
              “I should say so. Hopkins's writing shows considerable agitation,
              and he is not an emotional man. Yes, I gather there has been
              violence, and that the body is left for our inspection. A mere
              suicide would not have caused him to send for me. As to the
              release of the lady, it would appear that she has been locked in
              her room during the tragedy. We are moving in high life, Watson;
              crackling paper, ‘E.B.’ monogram, coat-of-arms, picturesque
              address. I think that friend Hopkins will live up to his
              reputation and that we shall have an interesting morning. The
              crime was committed before twelve last night.”
            </TextNode>

            <TextNode>“How can you possibly tell?”</TextNode>

            <TextNode>
              “By an inspection of the trains and by reckoning the time. The
              local police had to be called in, they had to communicate with
              Scotland Yard, Hopkins had to go out, and he in turn had to send
              for me. All that makes a fair night's work. Well, here we are at
              Chislehurst Station, and we shall soon set our doubts at rest.”
            </TextNode>

            <TextNode>
              A drive of a couple of miles through narrow country lanes brought
              us to a park gate, which was opened for us by an old lodge-keeper,
              whose haggard face bore the reflection of some great disaster. The
              avenue ran through a noble park, between lines of ancient elms,
              and ended in a low, widespread house, pillared in front after the
              fashion of Palladio. The central part was evidently of a great age
              and shrouded in ivy, but the large windows showed that modern
              changes had been carried out, and one wing of the house appeared
              to be entirely new. The youthful figure and alert, eager face of
              Inspector Stanley Hopkins confronted us in the open doorway.
            </TextNode>

            <TextNode>
              “I'm very glad you have come, Mr. Holmes. And you too, Dr. Watson!
              But, indeed, if I had my time over again I should not have
              troubled you, for since the lady has come to herself she has given
              so clear an account of the affair that there is not much left for
              us to do. You remember that Lewisham gang of burglars?”
            </TextNode>

            <TextNode>“What, the three Randalls?”</TextNode>

            <TextNode>
              “Exactly; the father and two sons. It's their work. I have not a
              doubt of it. They did a job at Sydenham a fortnight ago, and were
              seen and described. Rather cool to do another so soon and so near,
              but it is they, beyond all doubt. It's a hanging matter this
              time.”
            </TextNode>

            <TextNode>“Sir Eustace is dead, then?”</TextNode>

            <TextNode>
              “Yes; his head was knocked in with his own poker.”
            </TextNode>

            <TextNode>
              “Sir Eustace Brackenstall, the driver tells me.”
            </TextNode>

            <TextNode>
              “Exactly—one of the richest men in Kent. Lady Brackenstall is in
              the morning-room. Poor lady, she has had a most dreadful
              experience. She seemed half dead when I saw her first. I think you
              had best see her and hear her account of the facts. Then we will
              examine the dining-room together.”
            </TextNode>

            <TextNode>
              Lady Brackenstall was no ordinary person. Seldom have I seen so
              graceful a figure, so womanly a presence, and so beautiful a face.
              She was a blonde, golden-haired, blue-eyed, and would, no doubt,
              have had the perfect complexion which goes with such colouring had
              not her recent experience left her drawn and haggard. Her
              sufferings were physical as well as mental, for over one eye rose
              a hideous, plum-coloured swelling, which her maid, a tall, austere
              woman, was bathing assiduously with vinegar and water. The lady
              lay back exhausted upon a couch, but her quick, observant gaze as
              we entered the room, and the alert expression of her beautiful
              features, showed that neither her wits nor her courage had been
              shaken by her terrible experience. She was enveloped in a loose
              dressing-gown of blue and silver, but a black sequin-covered
              dinner-dress was hung upon the couch beside her.
            </TextNode>

            <TextNode>
              “I have told you all that happened, Mr. Hopkins,” she said,
              wearily; “could you not repeat it for me? Well, if you think it
              necessary, I will tell these gentlemen what occurred. Have they
              been in the dining-room yet?”
            </TextNode>

            <TextNode>
              “I thought they had better hear your ladyship's story first.”
            </TextNode>

            <TextNode>
              “I shall be glad when you can arrange matters. It is horrible to
              me to think of him still lying there.” She shuddered and buried
              her face in her hands. As she did so the loose gown fell back from
              her forearms. Holmes uttered an exclamation.
            </TextNode>

            <TextNode>
              “You have other injuries, madam! What is this?” Two vivid red
              spots stood out on one of the white, round limbs. She hastily
              covered it.
            </TextNode>

            <TextNode>
              “It is nothing. It has no connection with the hideous business of
              last night. If you and your friend will sit down I will tell you
              all I can.
            </TextNode>

            <TextNode>
              “I am the wife of Sir Eustace Brackenstall. I have been married
              about a year. I suppose that it is no use my attempting to conceal
              that our marriage has not been a happy one. I fear that all our
              neighbours would tell you that, even if I were to attempt to deny
              it. Perhaps the fault may be partly mine. I was brought up in the
              freer, less conventional atmosphere of South Australia, and this
              English life, with its proprieties and its primness, is not
              congenial to me. But the main reason lies in the one fact which is
              notorious to everyone, and that is that Sir Eustace was a
              confirmed drunkard. To be with such a man for an hour is
              unpleasant. Can you imagine what it means for a sensitive and
              high-spirited woman to be tied to him for day and night? It is a
              sacrilege, a crime, a villainy to hold that such a marriage is
              binding. I say that these monstrous laws of yours will bring a
              curse upon the land—Heaven will not let such wickedness endure.”
              For an instant she sat up, her cheeks flushed, and her eyes
              blazing from under the terrible mark upon her brow. Then the
              strong, soothing hand of the austere maid drew her head down on to
              the cushion, and the wild anger died away into passionate sobbing.
              At last she continued:—
            </TextNode>

            <TextNode>
              “I will tell you about last night. You are aware, perhaps, that in
              this house all servants sleep in the modern wing. This central
              block is made up of the dwelling-rooms, with the kitchen behind
              and our bedroom above. My maid Theresa sleeps above my room. There
              is no one else, and no sound could alarm those who are in the
              farther wing. This must have been well known to the robbers, or
              they would not have acted as they did.
            </TextNode>

            <TextNode>
              “Sir Eustace retired about half-past ten. The servants had already
              gone to their quarters. Only my maid was up, and she had remained
              in her room at the top of the house until I needed her services. I
              sat until after eleven in this room, absorbed in a book. Then I
              walked round to see that all was right before I went upstairs. It
              was my custom to do this myself, for, as I have explained, Sir
              Eustace was not always to be trusted. I went into the kitchen, the
              butler's pantry, the gun-room, the billiard-room, the
              drawing-room, and finally the dining-room. As I approached the
              window, which is covered with thick curtains, I suddenly felt the
              wind blow upon my face and realized that it was open. I flung the
              curtain aside and found myself face to face with a
              broad-shouldered, elderly man who had just stepped into the room.
              The window is a long French one, which really forms a door leading
              to the lawn. I held my bedroom candle lit in my hand, and, by its
              light, behind the first man I saw two others, who were in the act
              of entering. I stepped back, but the fellow was on me in an
              instant. He caught me first by the wrist and then by the throat. I
              opened my mouth to scream, but he struck me a savage blow with his
              fist over the eye, and felled me to the ground. I must have been
              unconscious for a few minutes, for when I came to myself I found
              that they had torn down the bell-rope and had secured me tightly
              to the oaken chair which stands at the head of the dining-room
              table. I was so firmly bound that I could not move, and a
              handkerchief round my mouth prevented me from uttering any sound.
              It was at this instant that my unfortunate husband entered the
              room. He had evidently heard some suspicious sounds, and he came
              prepared for such a scene as he found. He was dressed in his shirt
              and trousers, with his favourite blackthorn cudgel in his hand. He
              rushed at one of the burglars, but another—it was the elderly
              man—stooped, picked the poker out of the grate, and struck him a
              horrible blow as he passed. He fell without a groan, and never
              moved again. I fainted once more, but again it could only have
              been a very few minutes during which I was insensible. When I
              opened my eyes I found that they had collected the silver from the
              sideboard, and they had drawn a bottle of wine which stood there.
              Each of them had a glass in his hand. I have already told you,
              have I not, that one was elderly, with a beard, and the others
              young, hairless lads. They might have been a father with his two
              sons. They talked together in whispers. Then they came over and
              made sure that I was still securely bound. Finally they withdrew,
              closing the window after them. It was quite a quarter of an hour
              before I got my mouth free. When I did so my screams brought the
              maid to my assistance. The other servants were soon alarmed, and
              we sent for the local police, who instantly communicated with
              London. That is really all that I can tell you, gentlemen, and I
              trust that it will not be necessary for me to go over so painful a
              story again.”
            </TextNode>

            <TextNode>“Any questions, Mr. Holmes?” asked Hopkins.</TextNode>

            <TextNode>
              “I will not impose any further tax upon Lady Brackenstall's
              patience and time,” said Holmes. “Before I go into the dining-room
              I should like to hear your experience.” He looked at the maid.
            </TextNode>

            <TextNode>
              “I saw the men before ever they came into the house,” said she.
              “As I sat by my bedroom window I saw three men in the moonlight
              down by the lodge gate yonder, but I thought nothing of it at the
              time. It was more than an hour after that I heard my mistress
              scream, and down I ran, to find her, poor lamb, just as she says,
              and him on the floor with his blood and brains over the room. It
              was enough to drive a woman out of her wits, tied there, and her
              very dress spotted with him; but she never wanted courage, did
              Miss Mary Fraser of Adelaide, and Lady Brackenstall of Abbey
              Grange hasn't learned new ways. You've questioned her long enough,
              you gentlemen, and now she is coming to her own room, just with
              her old Theresa, to get the rest that she badly needs.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              With a motherly tenderness the gaunt woman put her arm round her
              mistress and led her from the room.
            </TextNode>

            <TextNode>
              “She has been with her all her life,” said Hopkins. “Nursed her as
              a baby, and came with her to England when they first left
              Australia eighteen months ago. Theresa Wright is her name, and the
              kind of maid you don't pick up nowadays. This way, Mr. Holmes, if
              you please!”
            </TextNode>

            <TextNode>
              The keen interest had passed out of Holmes's expressive face, and
              I knew that with the mystery all the charm of the case had
              departed. There still remained an arrest to be effected, but what
              were these commonplace rogues that he should soil his hands with
              them? An abstruse and learned specialist who finds that he has
              been called in for a case of measles would experience something of
              the annoyance which I read in my friend's eyes. Yet the scene in
              the dining-room of the Abbey Grange was sufficiently strange to
              arrest his attention and to recall his waning interest.
            </TextNode>
            <TextNode>
              It was a very large and high chamber, with carved oak ceiling,
              oaken panelling, and a fine array of deer's heads and ancient
              weapons around the walls. At the farther end from the door was the
              high French window of which we had heard. Three smaller windows on
              the right-hand side filled the apartment with cold winter
              sunshine. On the left was a large, deep fireplace, with a massive,
              over-hanging oak mantelpiece. Beside the fireplace was a heavy
              oaken chair with arms and cross-bars at the bottom. In and out
              through the open woodwork was woven a crimson cord, which was
              secured at each side to the crosspiece below. In releasing the
              lady the cord had been slipped off her, but the knots with which
              it had been secured still remained. These details only struck our
              attention afterwards, for our thoughts were entirely absorbed by
              the terrible object which lay upon the tiger-skin hearthrug in
              front of the fire.
            </TextNode>

            <TextNode>
              It was the body of a tall, well-made man, about forty years of
              age. He lay upon his back, his face upturned, with his white teeth
              grinning through his short black beard. His two clenched hands
              were raised above his head, and a heavy blackthorn stick lay
              across them. His dark, handsome, aquiline features were convulsed
              into a spasm of vindictive hatred, which had set his dead face in
              a terribly fiendish expression. He had evidently been in his bed
              when the alarm had broken out, for he wore a foppish embroidered
              night-shirt, and his bare feet projected from his trousers. His
              head was horribly injured, and the whole room bore witness to the
              savage ferocity of the blow which had struck him down. Beside him
              lay the heavy poker, bent into a curve by the concussion. Holmes
              examined both it and the indescribable wreck which it had wrought.
            </TextNode>

            <TextNode>
              “He must be a powerful man, this elder Randall,” he remarked.
            </TextNode>

            <TextNode>
              “Yes,” said Hopkins. “I have some record of the fellow, and he is
              a rough customer.”
            </TextNode>

            <TextNode>“You should have no difficulty in getting him.”</TextNode>

            <TextNode>
              “Not the slightest. We have been on the look-out for him, and
              there was some idea that he had got away to America. Now that we
              know the gang are here I don't see how they can escape. We have
              the news at every seaport already, and a reward will be offered
              before evening. What beats me is how they could have done so mad a
              thing, knowing that the lady could describe them, and that we
              could not fail to recognise the description.”
            </TextNode>

            <TextNode>
              “Exactly. One would have expected that they would have silenced
              Lady Brackenstall as well.”
            </TextNode>

            <TextNode>
              “They may not have realized,” I suggested, “that she had recovered
              from her faint.”
            </TextNode>

            <TextNode>
              “That is likely enough. If she seemed to be senseless they would
              not take her life. What about this poor fellow, Hopkins? I seem to
              have heard some queer stories about him.”
            </TextNode>

            <TextNode>
              “He was a good-hearted man when he was sober, but a perfect fiend
              when he was drunk, or rather when he was half drunk, for he seldom
              really went the whole way. The devil seemed to be in him at such
              times, and he was capable of anything. From what I hear, in spite
              of all his wealth and his title, he very nearly came our way once
              or twice. There was a scandal about his drenching a dog with
              petroleum and setting it on fire—her ladyship's dog, to make the
              matter worse—and that was only hushed up with difficulty. Then he
              threw a decanter at that maid, Theresa Wright; there was trouble
              about that. On the whole, and between ourselves, it will be a
              brighter house without him. What are you looking at now?”
            </TextNode>

            <TextNode>
              Holmes was down on his knees examining with great attention the
              knots upon the red cord with which the lady had been secured. Then
              he carefully scrutinized the broken and frayed end where it had
              snapped off when the burglar had dragged it down.
            </TextNode>

            <TextNode>
              “When this was pulled down the bell in the kitchen must have rung
              loudly,” he remarked.
            </TextNode>

            <TextNode>
              “No one could hear it. The kitchen stands right at the back of the
              house.”
            </TextNode>

            <TextNode>
              “How did the burglar know no one would hear it? How dared he pull
              at a bell-rope in that reckless fashion?”
            </TextNode>

            <TextNode>
              “Exactly, Mr. Holmes, exactly. You put the very question which I
              have asked myself again and again. There can be no doubt that this
              fellow must have known the house and its habits. He must have
              perfectly understood that the servants would all be in bed at that
              comparatively early hour, and that no one could possibly hear a
              bell ring in the kitchen. Therefore he must have been in close
              league with one of the servants. Surely that is evident. But there
              are eight servants, and all of good character.”
            </TextNode>

            <TextNode>
              “Other things being equal,” said Holmes, “one would suspect the
              one at whose head the master threw a decanter. And yet that would
              involve treachery towards the mistress to whom this woman seems
              devoted. Well, well, the point is a minor one, and when you have
              Randall you will probably find no difficulty in securing his
              accomplice. The lady's story certainly seems to be corroborated,
              if it needed corroboration, by every detail which we see before
              us.” He walked to the French window and threw it open. “There are
              no signs here, but the ground is iron hard, and one would not
              expect them. I see that these candles on the mantelpiece have been
              lighted.”
            </TextNode>

            <TextNode>
              “Yes; it was by their light and that of the lady's bedroom candle
              that the burglars saw their way about.”
            </TextNode>

            <TextNode>“And what did they take?”</TextNode>

            <TextNode>
              “Well, they did not take much—only half-a-dozen articles of plate
              off the sideboard. Lady Brackenstall thinks that they were
              themselves so disturbed by the death of Sir Eustace that they did
              not ransack the house as they would otherwise have done.”
            </TextNode>

            <TextNode>
              “No doubt that is true. And yet they drank some wine, I
              understand.”
            </TextNode>

            <TextNode>“To steady their own nerves.”</TextNode>

            <TextNode>
              “Exactly. These three glasses upon the sideboard have been
              untouched, I suppose?”
            </TextNode>

            <TextNode>“Yes; and the bottle stands as they left it.”</TextNode>

            <TextNode>
              “Let us look at it. Halloa! halloa! what is this?”
            </TextNode>

            <TextNode>
              The three glasses were grouped together, all of them tinged with
              wine, and one of them containing some dregs of bees-wing. The
              bottle stood near them, two-thirds full, and beside it lay a long,
              deeply-stained cork. Its appearance and the dust upon the bottle
              showed that it was no common vintage which the murderers had
              enjoyed.
            </TextNode>

            <TextNode>
              A change had come over Holmes's manner. He had lost his listless
              expression, and again I saw an alert light of interest in his
              keen, deep-set eyes. He raised the cork and examined it minutely.
            </TextNode>

            <TextNode>“How did they draw it?” he asked.</TextNode>

            <TextNode>
              Hopkins pointed to a half-opened drawer. In it lay some table
              linen and a large cork-screw.
            </TextNode>

            <TextNode>
              “Did Lady Brackenstall say that screw was used?”
            </TextNode>

            <TextNode>
              “No; you remember that she was senseless at the moment when the
              bottle was opened.”
            </TextNode>

            <TextNode>
              “Quite so. As a matter of fact that screw was not used. This
              bottle was opened by a pocket-screw, probably contained in a
              knife, and not more than an inch and a half long. If you examine
              the top of the cork you will observe that the screw was driven in
              three times before the cork was extracted. It has never been
              transfixed. This long screw would have transfixed it and drawn it
              with a single pull. When you catch this fellow you will find that
              he has one of these multiplex knives in his possession.”
            </TextNode>

            <TextNode>“Excellent!” said Hopkins.</TextNode>

            <TextNode>
              “But these glasses do puzzle me, I confess. Lady Brackenstall
              actually saw the three men drinking, did she not?”
            </TextNode>

            <TextNode>“Yes; she was clear about that.”</TextNode>

            <TextNode>
              “Then there is an end of it. What more is to be said? And yet you
              must admit that the three glasses are very remarkable, Hopkins.
              What, you see nothing remarkable! Well, well, let it pass. Perhaps
              when a man has special knowledge and special powers like my own it
              rather encourages him to seek a complex explanation when a simpler
              one is at hand. Of course, it must be a mere chance about the
              glasses. Well, good morning, Hopkins. I don't see that I can be of
              any use to you, and you appear to have your case very clear. You
              will let me know when Randall is arrested, and any further
              developments which may occur. I trust that I shall soon have to
              congratulate you upon a successful conclusion. Come, Watson, I
              fancy that we may employ ourselves more profitably at home.”
            </TextNode>

            <TextNode>
              During our return journey I could see by Holmes's face that he was
              much puzzled by something which he had observed. Every now and
              then, by an effort, he would throw off the impression and talk as
              if the matter were clear, but then his doubts would settle down
              upon him again, and his knitted brows and abstracted eyes would
              show that his thoughts had gone back once more to the great
              dining-room of the Abbey Grange in which this midnight tragedy had
              been enacted. At last, by a sudden impulse, just as our train was
              crawling out of a suburban station, he sprang on to the platform
              and pulled me out after him.
            </TextNode>

            <TextNode>
              “Excuse me, my dear fellow,” said he, as we watched the rear
              carriages of our train disappearing round a curve; “I am sorry to
              make you the victim of what may seem a mere whim, but on my life,
              Watson, I simply can't leave that case in this condition. Every
              instinct that I possess cries out against it. It's wrong—it's all
              wrong—I'll swear that it's wrong. And yet the lady's story was
              complete, the maid's corroboration was sufficient, the detail was
              fairly exact. What have I to put against that? Three wine-glasses,
              that is all. But if I had not taken things for granted, if I had
              examined everything with care which I would have shown had we
              approached the case de novo and had no cut-and-dried story to warp
              my mind, would I not then have found something more definite to go
              upon? Of course I should. Sit down on this bench, Watson, until a
              train for Chislehurst arrives, and allow me to lay the evidence
              before you, imploring you in the first instance to dismiss from
              your mind the idea that anything which the maid or her mistress
              may have said must necessarily be true. The lady's charming
              personality must not be permitted to warp our judgment.
            </TextNode>

            <TextNode>
              “Surely there are details in her story which, if we looked at it
              in cold blood, would excite our suspicion. These burglars made a
              considerable haul at Sydenham a fortnight ago. Some account of
              them and of their appearance was in the papers, and would
              naturally occur to anyone who wished to invent a story in which
              imaginary robbers should play a part. As a matter of fact,
              burglars who have done a good stroke of business are, as a rule,
              only too glad to enjoy the proceeds in peace and quiet without
              embarking on another perilous undertaking. Again, it is unusual
              for burglars to operate at so early an hour; it is unusual for
              burglars to strike a lady to prevent her screaming, since one
              would imagine that was the sure way to make her scream; it is
              unusual for them to commit murder when their numbers are
              sufficient to overpower one man; it is unusual for them to be
              content with a limited plunder when there is much more within
              their reach; and finally I should say that it was very unusual for
              such men to leave a bottle half empty. How do all these unusuals
              strike you, Watson?”
            </TextNode>

            <TextNode>
              “Their cumulative effect is certainly considerable, and yet each
              of them is quite possible in itself. The most unusual thing of
              all, as it seems to me, is that the lady should be tied to the
              chair.”
            </TextNode>

            <TextNode>
              “Well, I am not so clear about that, Watson; for it is evident
              that they must either kill her or else secure her in such a way
              that she could not give immediate notice of their escape. But at
              any rate I have shown, have I not, that there is a certain element
              of improbability about the lady's story? And now on the top of
              this comes the incident of the wine-glasses.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page208;

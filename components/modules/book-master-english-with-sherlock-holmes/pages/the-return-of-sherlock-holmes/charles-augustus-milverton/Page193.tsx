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

function Page193({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;CHARLES AUGUSTUS&nbsp;MILVERTON'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              It was a good fire, and the room was illuminated by it. Near the
              door I saw the gleam of an electric switch, but it was
              unnecessary, even if it had been safe, to turn it on. At one side
              of the fireplace was a heavy curtain, which covered the bay window
              we had seen from outside. On the other side was the door which
              communicated with the veranda. A desk stood in the centre, with a
              turning chair of shining red leather. Opposite was a large
              bookcase, with a marble bust of Athene on the top. In the corner
              between the bookcase and the wall there stood a tall green safe,
              the firelight flashing back from the polished brass knobs upon its
              face. Holmes stole across and looked at it. Then he crept to the
              door of the bedroom, and stood with slanting head listening
              intently. No sound came from within. Meanwhile it had struck me
              that it would be wise to secure our retreat through the outer
              door, so I examined it. To my amazement it was neither locked nor
              bolted! I touched Holmes on the arm, and he turned his masked face
              in that direction. I saw him start, and he was evidently as
              surprised as I.
            </TextNode>

            <TextNode>
              “I don't like it,” he whispered, putting his lips to my very ear.
              “I can't quite make it out. Anyhow, we have no time to lose.”
            </TextNode>

            <TextNode>“Can I do anything?”</TextNode>

            <TextNode>
              “Yes; stand by the door. If you hear anyone come, bolt it on the
              inside, and we can get away as we came. If they come the other
              way, we can get through the door if our job is done, or hide
              behind these window curtains if it is not. Do you understand?”
            </TextNode>

            <TextNode>
              I nodded and stood by the door. My first feeling of fear had
              passed away, and I thrilled now with a keener zest than I had ever
              enjoyed when we were the defenders of the law instead of its
              defiers. The high object of our mission, the consciousness that it
              was unselfish and chivalrous, the villainous character of our
              opponent, all added to the sporting interest of the adventure. Far
              from feeling guilty, I rejoiced and exulted in our dangers. With a
              glow of admiration I watched Holmes unrolling his case of
              instruments and choosing his tool with the calm, scientific
              accuracy of a surgeon who performs a delicate operation. I knew
              that the opening of safes was a particular hobby with him, and I
              understood the joy which it gave him to be confronted with this
              green and gold monster, the dragon which held in its maw the
              reputations of many fair ladies. Turning up the cuffs of his
              dress-coat—he had placed his overcoat on a chair—Holmes laid out
              two drills, a jemmy, and several skeleton keys. I stood at the
              centre door with my eyes glancing at each of the others, ready for
              any emergency; though, indeed, my plans were somewhat vague as to
              what I should do if we were interrupted. For half an hour Holmes
              worked with concentrated energy, laying down one tool, picking up
              another, handling each with the strength and delicacy of the
              trained mechanic. Finally I heard a click, the broad green door
              swung open, and inside I had a glimpse of a number of paper
              packets, each tied, sealed, and inscribed. Holmes picked one out,
              but it was hard to read by the flickering fire, and he drew out
              his little dark lantern, for it was too dangerous, with Milverton
              in the next room, to switch on the electric light. Suddenly I saw
              him halt, listen intently, and then in an instant he had swung the
              door of the safe to, picked up his coat, stuffed his tools into
              the pockets, and darted behind the window curtain, motioning me to
              do the same.
            </TextNode>

            <TextNode>
              It was only when I had joined him there that I heard what had
              alarmed his quicker senses. There was a noise somewhere within the
              house. A door slammed in the distance. Then a confused, dull
              murmur broke itself into the measured thud of heavy footsteps
              rapidly approaching. They were in the passage outside the room.
              They paused at the door. The door opened. There was a sharp snick
              as the electric light was turned on. The door closed once more,
              and the pungent reek of a strong cigar was borne to our nostrils.
              Then the footsteps continued backwards and forwards, backwards and
              forwards, within a few yards of us. Finally, there was a creak
              from a chair, and the footsteps ceased. Then a key clicked in a
              lock and I heard the rustle of papers.
            </TextNode>

            <TextNode>
              So far I had not dared to look out, but now I gently parted the
              division of the curtains in front of me and peeped through. From
              the pressure of Holmes's shoulder against mine I knew that he was
              sharing my observations. Right in front of us, and almost within
              our reach, was the broad, rounded back of Milverton. It was
              evident that we had entirely miscalculated his movements, that he
              had never been to his bedroom, but that he had been sitting up in
              some smoking or billiard room in the farther wing of the house,
              the windows of which we had not seen. His broad, grizzled head,
              with its shining patch of baldness, was in the immediate
              foreground of our vision. He was leaning far back in the red
              leather chair, his legs outstretched, a long black cigar
              projecting at an angle from his mouth. He wore a semi-military
              smoking jacket, claret-coloured, with a black velvet collar. In
              his hand he held a long legal document, which he was reading in an
              indolent fashion, blowing rings of tobacco smoke from his lips as
              he did so. There was no promise of a speedy departure in his
              composed bearing and his comfortable attitude.
            </TextNode>

            <TextNode>
              I felt Holmes's hand steal into mine and give me a reassuring
              shake, as if to say that the situation was within his powers and
              that he was easy in his mind. I was not sure whether he had seen
              what was only too obvious from my position, that the door of the
              safe was imperfectly closed, and that Milverton might at any
              moment observe it. In my own mind I had determined that if I were
              sure, from the rigidity of his gaze, that it had caught his eye, I
              would at once spring out, throw my great-coat over his head,
              pinion him, and leave the rest to Holmes. But Milverton never
              looked up. He was languidly interested by the papers in his hand,
              and page after page was turned as he followed the argument of the
              lawyer. At least, I thought, when he has finished the document and
              the cigar he will go to his room; but before he had reached the
              end of either there came a remarkable development which turned our
              thoughts into quite another channel.
            </TextNode>

            <TextNode>
              Several times I had observed that Milverton looked at his watch,
              and once he had risen and sat down again, with a gesture of
              impatience. The idea, however, that he might have an appointment
              at so strange an hour never occurred to me until a faint sound
              reached my ears from the veranda outside. Milverton dropped his
              papers and sat rigid in his chair. The sound was repeated, and
              then there came a gentle tap at the door. Milverton rose and
              opened it.
            </TextNode>

            <TextNode>
              “Well,” said he, curtly, “you are nearly half an hour late.”
            </TextNode>

            <TextNode>
              So this was the explanation of the unlocked door and of the
              nocturnal vigil of Milverton. There was the gentle rustle of a
              woman's dress. I had closed the slit between the curtains as
              Milverton's face had turned in our direction, but now I ventured
              very carefully to open it once more. He had resumed his seat, the
              cigar still projecting at an insolent angle from the corner of his
              mouth. In front of him, in the full glare of the electric light,
              there stood a tall, slim, dark woman, a veil over her face, a
              mantle drawn round her chin. Her breath came quick and fast, and
              every inch of the lithe figure was quivering with strong emotion.
            </TextNode>

            <TextNode>
              “Well,” said Milverton, “you've made me lose a good night's rest,
              my dear. I hope you'll prove worth it. You couldn't come any other
              time—eh?”
            </TextNode>

            <TextNode>The woman shook her head.</TextNode>

            <TextNode>
              “Well, if you couldn't you couldn't. If the Countess is a hard
              mistress you have your chance to get level with her now. Bless the
              girl, what are you shivering about? That's right! Pull yourself
              together! Now, let us get down to business.” He took a note from
              the drawer of his desk. “You say that you have five letters which
              compromise the Countess d'Albert. You want to sell them. I want to
              buy them. So far so good. It only remains to fix a price. I should
              want to inspect the letters, of course. If they are really good
              specimens—Great heavens, is it you?”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              The woman without a word had raised her veil and dropped the
              mantle from her chin. It was a dark, handsome, clear-cut face
              which confronted Milverton, a face with a curved nose, strong,
              dark eyebrows shading hard, glittering eyes, and a straight,
              thin-lipped mouth set in a dangerous smile.
            </TextNode>

            <TextNode>
              “It is I,” she said; “the woman whose life you have ruined.”
            </TextNode>

            <TextNode>
              Milverton laughed, but fear vibrated in his voice. “You were so
              very obstinate,” said he. “Why did you drive me to such
              extremities? I assure you I wouldn't hurt a fly of my own accord,
              but every man has his business, and what was I to do? I put the
              price well within your means. You would not pay.”
            </TextNode>

            <TextNode>
              “So you sent the letters to my husband, and he—the noblest
              gentleman that ever lived, a man whose boots I was never worthy to
              lace—he broke his gallant heart and died. You remember that last
              night when I came through that door I begged and prayed you for
              mercy, and you laughed in my face as you are trying to laugh now,
              only your coward heart cannot keep your lips from twitching? Yes,
              you never thought to see me here again, but it was that night
              which taught me how I could meet you face to face, and alone.
              Well, Charles Milverton, what have you to say?”
            </TextNode>
            <TextNode>
              “Don't imagine that you can bully me,” said he, rising to his
              feet. “I have only to raise my voice, and I could call my servants
              and have you arrested. But I will make allowance for your natural
              anger. Leave the room at once as you came, and I will say no
              more.”
            </TextNode>

            <TextNode>
              The woman stood with her hand buried in her bosom, and the same
              deadly smile on her thin lips.
            </TextNode>

            <TextNode>
              “You will ruin no more lives as you ruined mine. You will wring no
              more hearts as you wrung mine. I will free the world of a
              poisonous thing. Take that, you hound, and that!—and that!—and
              that!”
            </TextNode>

            <TextNode>
              She had drawn a little, gleaming revolver, and emptied barrel
              after barrel into Milverton's body, the muzzle within two feet of
              his shirt front. He shrank away and then fell forward upon the
              table, coughing furiously and clawing among the papers. Then he
              staggered to his feet, received another shot, and rolled upon the
              floor. “You've done me,” he cried, and lay still. The woman looked
              at him intently and ground her heel into his upturned face. She
              looked again, but there was no sound or movement. I heard a sharp
              rustle, the night air blew into the heated room, and the avenger
              was gone.
            </TextNode>

            <TextNode>
              No interference upon our part could have saved the man from his
              fate; but as the woman poured bullet after bullet into Milverton's
              shrinking body I was about to spring out, when I felt Holmes's
              cold, strong grasp upon my wrist. I understood the whole argument
              of that firm, restraining grip—that it was no affair of ours; that
              justice had overtaken a villain; that we had our own duties and
              our own objects which were not to be lost sight of. But hardly had
              the woman rushed from the room when Holmes, with swift, silent
              steps, was over at the other door. He turned the key in the lock.
              At the same instant we heard voices in the house and the sound of
              hurrying feet. The revolver shots had roused the household. With
              perfect coolness Holmes slipped across to the safe, filled his two
              arms with bundles of letters, and poured them all into the fire.
              Again and again he did it, until the safe was empty. Someone
              turned the handle and beat upon the outside of the door. Holmes
              looked swiftly round. The letter which had been the messenger of
              death for Milverton lay, all mottled with his blood, upon the
              table. Holmes tossed it in among the blazing papers. Then he drew
              the key from the outer door, passed through after me, and locked
              it on the outside. “This way, Watson,” said he; “we can scale the
              garden wall in this direction.”
            </TextNode>

            <TextNode>
              I could not have believed that an alarm could have spread so
              swiftly. Looking back, the huge house was one blaze of light. The
              front door was open, and figures were rushing down the drive. The
              whole garden was alive with people, and one fellow raised a
              view-halloa as we emerged from the veranda and followed hard at
              our heels. Holmes seemed to know the ground perfectly, and he
              threaded his way swiftly among a plantation of small trees, I
              close at his heels, and our foremost pursuer panting behind us. It
              was a six-foot wall which barred our path, but he sprang to the
              top and over. As I did the same I felt the hand of the man behind
              me grab at my ankle; but I kicked myself free and scrambled over a
              glass-strewn coping. I fell upon my face among some bushes; but
              Holmes had me on my feet in an instant, and together we dashed
              away across the huge expanse of Hampstead Heath. We had run two
              miles, I suppose, before Holmes at last halted and listened
              intently. All was absolute silence behind us. We had shaken off
              our pursuers and were safe.
            </TextNode>
            <TextNode>
              We had breakfasted and were smoking our morning pipe on the day
              after the remarkable experience which I have recorded when Mr.
              Lestrade, of Scotland Yard, very solemn and impressive, was
              ushered into our modest sitting-room.
            </TextNode>

            <TextNode>
              “Good morning, Mr. Holmes,” said he; “good morning. May I ask if
              you are very busy just now?”
            </TextNode>

            <TextNode>“Not too busy to listen to you.”</TextNode>

            <TextNode>
              “I thought that, perhaps, if you had nothing particular on hand,
              you might care to assist us in a most remarkable case which
              occurred only last night at Hampstead.”
            </TextNode>

            <TextNode>“Dear me!” said Holmes. “What was that?”</TextNode>

            <TextNode>
              “A murder—a most dramatic and remarkable murder. I know how keen
              you are upon these things, and I would take it as a great favour
              if you would step down to Appledore Towers and give us the benefit
              of your advice. It is no ordinary crime. We have had our eyes upon
              this Mr. Milverton for some time, and, between ourselves, he was a
              bit of a villain. He is known to have held papers which he used
              for blackmailing purposes. These papers have all been burned by
              the murderers. No article of value was taken, as it is probable
              that the criminals were men of good position, whose sole object
              was to prevent social exposure.”
            </TextNode>

            <TextNode>“Criminals!” said Holmes. “Plural!”</TextNode>

            <TextNode>
              “Yes, there were two of them. They were, as nearly as possible,
              captured red-handed. We have their foot-marks, we have their
              description; it's ten to one that we trace them. The first fellow
              was a bit too active, but the second was caught by the
              under-gardener and only got away after a struggle. He was a
              middle-sized, strongly-built man—square jaw, thick neck,
              moustache, a mask over his eyes.”
            </TextNode>

            <TextNode>
              “That's rather vague,” said Sherlock Holmes. “Why, it might be a
              description of Watson!”
            </TextNode>

            <TextNode>
              “It's true,” said the inspector, with much amusement. “It might be
              a description of Watson.”
            </TextNode>

            <TextNode>
              “Well, I am afraid I can't help you, Lestrade,” said Holmes. “The
              fact is that I knew this fellow Milverton, that I considered him
              one of the most dangerous men in London, and that I think there
              are certain crimes which the law cannot touch, and which
              therefore, to some extent, justify private revenge. No, it's no
              use arguing. I have made up my mind. My sympathies are with the
              criminals rather than with the victim, and I will not handle this
              case.”
            </TextNode>

            <TextNode>
              Holmes had not said one word to me about the tragedy which we had
              witnessed, but I observed all the morning that he was in his most
              thoughtful mood, and he gave me the impression, from his vacant
              eyes and his abstracted manner, of a man who is striving to recall
              something to his memory. We were in the middle of our lunch when
              he suddenly sprang to his feet. “By Jove, Watson; I've got it!” he
              cried. “Take your hat! Come with me!” He hurried at his top speed
              down Baker Street and along Oxford Street, until we had almost
              reached Regent Circus. Here on the left hand there stands a shop
              window filled with photographs of the celebrities and beauties of
              the day. Holmes's eyes fixed themselves upon one of them, and
              following his gaze I saw the picture of a regal and stately lady
              in Court dress, with a high diamond tiara upon her noble head. I
              looked at that delicately-curved nose, at the marked eyebrows, at
              the straight mouth, and the strong little chin beneath it. Then I
              caught my breath as I read the time-honoured title of the great
              nobleman and statesman whose wife she had been. My eyes met those
              of Holmes, and he put his finger to his lips as we turned away
              from the window.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page193;

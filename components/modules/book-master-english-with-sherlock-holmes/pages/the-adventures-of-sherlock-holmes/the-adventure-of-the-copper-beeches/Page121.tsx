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

function Page121({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;COPPER&nbsp;BEECHES'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “The dress which I found waiting for me was of a peculiar shade of
              blue. It was of excellent material, a sort of beige, but it bore
              unmistakable signs of having been worn before. It could not have
              been a better fit if I had been measured for it. Both Mr. and Mrs.
              Rucastle expressed a delight at the look of it, which seemed quite
              exaggerated in its vehemence. They were waiting for me in the
              drawing-room, which is a very large room, stretching along the
              entire front of the house, with three long windows reaching down
              to the floor. A chair had been placed close to the central window,
              with its back turned towards it. In this I was asked to sit, and
              then Mr. Rucastle, walking up and down on the other side of the
              room, began to tell me a series of the funniest stories that I
              have ever listened to. You cannot imagine how comical he was, and
              I laughed until I was quite weary. Mrs. Rucastle, however, who has
              evidently no sense of humour, never so much as smiled, but sat
              with her hands in her lap, and a sad, anxious look upon her face.
              After an hour or so, Mr. Rucastle suddenly remarked that it was
              time to commence the duties of the day, and that I might change my
              dress and go to little Edward in the nursery.
            </TextNode>

            <TextNode>
              “Two days later this same performance was gone through under
              exactly similar circumstances. Again I changed my dress, again I
              sat in the window, and again I laughed very heartily at the funny
              stories of which my employer had an immense répertoire, and which
              he told inimitably. Then he handed me a yellow-backed novel, and
              moving my chair a little sideways, that my own shadow might not
              fall upon the page, he begged me to read aloud to him. I read for
              about ten minutes, beginning in the heart of a chapter, and then
              suddenly, in the middle of a sentence, he ordered me to cease and
              to change my dress.
            </TextNode>

            <TextNode>
              “You can easily imagine, Mr. Holmes, how curious I became as to
              what the meaning of this extraordinary performance could possibly
              be. They were always very careful, I observed, to turn my face
              away from the window, so that I became consumed with the desire to
              see what was going on behind my back. At first it seemed to be
              impossible, but I soon devised a means. My hand-mirror had been
              broken, so a happy thought seized me, and I concealed a piece of
              the glass in my handkerchief. On the next occasion, in the midst
              of my laughter, I put my handkerchief up to my eyes, and was able
              with a little management to see all that there was behind me. I
              confess that I was disappointed. There was nothing. At least that
              was my first impression. At the second glance, however, I
              perceived that there was a man standing in the Southampton Road, a
              small bearded man in a grey suit, who seemed to be looking in my
              direction. The road is an important highway, and there are usually
              people there. This man, however, was leaning against the railings
              which bordered our field and was looking earnestly up. I lowered
              my handkerchief and glanced at Mrs. Rucastle to find her eyes
              fixed upon me with a most searching gaze. She said nothing, but I
              am convinced that she had divined that I had a mirror in my hand
              and had seen what was behind me. She rose at once.
            </TextNode>

            <TextNode>
              “ ‘Jephro,’ said she, ‘there is an impertinent fellow upon the
              road there who stares up at Miss Hunter.’
            </TextNode>

            <TextNode>“ ‘No friend of yours, Miss Hunter?’ he asked.</TextNode>

            <TextNode>“ ‘No, I know no one in these parts.’</TextNode>

            <TextNode>
              “ ‘Dear me! How very impertinent! Kindly turn round and motion to
              him to go away.’
            </TextNode>

            <TextNode>
              “ ‘Surely it would be better to take no notice.’
            </TextNode>

            <TextNode>
              “ ‘No, no, we should have him loitering here always. Kindly turn
              round and wave him away like that.’
            </TextNode>

            <TextNode>
              “I did as I was told, and at the same instant Mrs. Rucastle drew
              down the blind. That was a week ago, and from that time I have not
              sat again in the window, nor have I worn the blue dress, nor seen
              the man in the road.”
            </TextNode>

            <TextNode>
              “Pray continue,” said Holmes. “Your narrative promises to be a
              most interesting one.”
            </TextNode>

            <TextNode>
              “You will find it rather disconnected, I fear, and there may prove
              to be little relation between the different incidents of which I
              speak. On the very first day that I was at the Copper Beeches, Mr.
              Rucastle took me to a small outhouse which stands near the kitchen
              door. As we approached it I heard the sharp rattling of a chain,
              and the sound as of a large animal moving about.
            </TextNode>

            <TextNode>
              “ ‘Look in here!’ said Mr. Rucastle, showing me a slit between two
              planks. ‘Is he not a beauty?’
            </TextNode>

            <TextNode>
              “I looked through and was conscious of two glowing eyes, and of a
              vague figure huddled up in the darkness.
            </TextNode>

            <TextNode>
              “ ‘Don't be frightened,’ said my employer, laughing at the start
              which I had given. ‘It's only Carlo, my mastiff. I call him mine,
              but really old Toller, my groom, is the only man who can do
              anything with him. We feed him once a day, and not too much then,
              so that he is always as keen as mustard. Toller lets him loose
              every night, and God help the trespasser whom he lays his fangs
              upon. For goodness' sake don't you ever on any pretext set your
              foot over the threshold at night, for it's as much as your life is
              worth.’
            </TextNode>

            <TextNode>
              “The warning was no idle one, for two nights later I happened to
              look out of my bedroom window about two o'clock in the morning. It
              was a beautiful moonlight night, and the lawn in front of the
              house was silvered over and almost as bright as day. I was
              standing, rapt in the peaceful beauty of the scene, when I was
              aware that something was moving under the shadow of the copper
              beeches. As it emerged into the moonshine I saw what it was. It
              was a giant dog, as large as a calf, tawny tinted, with hanging
              jowl, black muzzle, and huge projecting bones. It walked slowly
              across the lawn and vanished into the shadow upon the other side.
              That dreadful sentinel sent a chill to my heart which I do not
              think that any burglar could have done.
            </TextNode>

            <TextNode>
              “And now I have a very strange experience to tell you. I had, as
              you know, cut off my hair in London, and I had placed it in a
              great coil at the bottom of my trunk. One evening, after the child
              was in bed, I began to amuse myself by examining the furniture of
              my room and by rearranging my own little things. There was an old
              chest of drawers in the room, the two upper ones empty and open,
              the lower one locked. I had filled the first two with my linen,
              and as I had still much to pack away I was naturally annoyed at
              not having the use of the third drawer. It struck me that it might
              have been fastened by a mere oversight, so I took out my bunch of
              keys and tried to open it. The very first key fitted to
              perfection, and I drew the drawer open. There was only one thing
              in it, but I am sure that you would never guess what it was. It
              was my coil of hair.
            </TextNode>

            <TextNode>
              “I took it up and examined it. It was of the same peculiar tint,
              and the same thickness. But then the impossibility of the thing
              obtruded itself upon me. How could my hair have been locked in the
              drawer? With trembling hands I undid my trunk, turned out the
              contents, and drew from the bottom my own hair. I laid the two
              tresses together, and I assure you that they were identical. Was
              it not extraordinary? Puzzle as I would, I could make nothing at
              all of what it meant. I returned the strange hair to the drawer,
              and I said nothing of the matter to the Rucastles as I felt that I
              had put myself in the wrong by opening a drawer which they had
              locked.
            </TextNode>

            <TextNode>
              “I am naturally observant, as you may have remarked, Mr. Holmes,
              and I soon had a pretty good plan of the whole house in my head.
              There was one wing, however, which appeared not to be inhabited at
              all. A door which faced that which led into the quarters of the
              Tollers opened into this suite, but it was invariably locked. One
              day, however, as I ascended the stair, I met Mr. Rucastle coming
              out through this door, his keys in his hand, and a look on his
              face which made him a very different person to the round, jovial
              man to whom I was accustomed. His cheeks were red, his brow was
              all crinkled with anger, and the veins stood out at his temples
              with passion. He locked the door and hurried past me without a
              word or a look.
            </TextNode>

            <TextNode>
              “This aroused my curiosity, so when I went out for a walk in the
              grounds with my charge, I strolled round to the side from which I
              could see the windows of this part of the house. There were four
              of them in a row, three of which were simply dirty, while the
              fourth was shuttered up. They were evidently all deserted. As I
              strolled up and down, glancing at them occasionally, Mr. Rucastle
              came out to me, looking as merry and jovial as ever.
            </TextNode>

            <TextNode>
              “ ‘Ah!’ said he, ‘you must not think me rude if I passed you
              without a word, my dear young lady. I was preoccupied with
              business matters.’
            </TextNode>

            <TextNode>
              “I assured him that I was not offended. ‘By the way,’ said I, ‘you
              seem to have quite a suite of spare rooms up there, and one of
              them has the shutters up.’
            </TextNode>

            <TextNode>
              “He looked surprised and, as it seemed to me, a little startled at
              my remark.
            </TextNode>

            <TextNode>
              “ ‘Photography is one of my hobbies,’ said he. ‘I have made my
              dark room up there. But, dear me! what an observant young lady we
              have come upon. Who would have believed it? Who would have ever
              believed it?’ He spoke in a jesting tone, but there was no jest in
              his eyes as he looked at me. I read suspicion there and annoyance,
              but no jest.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Well, Mr. Holmes, from the moment that I understood that there
              was something about that suite of rooms which I was not to know, I
              was all on fire to go over them. It was not mere curiosity, though
              I have my share of that. It was more a feeling of duty—a feeling
              that some good might come from my penetrating to this place. They
              talk of woman's instinct; perhaps it was woman's instinct which
              gave me that feeling. At any rate, it was there, and I was keenly
              on the lookout for any chance to pass the forbidden door.
            </TextNode>

            <TextNode>
              “It was only yesterday that the chance came. I may tell you that,
              besides Mr. Rucastle, both Toller and his wife find something to
              do in these deserted rooms, and I once saw him carrying a large
              black linen bag with him through the door. Recently he has been
              drinking hard, and yesterday evening he was very drunk; and when I
              came upstairs there was the key in the door. I have no doubt at
              all that he had left it there. Mr. and Mrs. Rucastle were both
              downstairs, and the child was with them, so that I had an
              admirable opportunity. I turned the key gently in the lock, opened
              the door, and slipped through.
            </TextNode>

            <TextNode>
              “There was a little passage in front of me, unpapered and
              uncarpeted, which turned at a right angle at the farther end.
              Round this corner were three doors in a line, the first and third
              of which were open. They each led into an empty room, dusty and
              cheerless, with two windows in the one and one in the other, so
              thick with dirt that the evening light glimmered dimly through
              them. The centre door was closed, and across the outside of it had
              been fastened one of the broad bars of an iron bed, padlocked at
              one end to a ring in the wall, and fastened at the other with
              stout cord. The door itself was locked as well, and the key was
              not there. This barricaded door corresponded clearly with the
              shuttered window outside, and yet I could see by the glimmer from
              beneath it that the room was not in darkness. Evidently there was
              a skylight which let in light from above. As I stood in the
              passage gazing at the sinister door and wondering what secret it
              might veil, I suddenly heard the sound of steps within the room
              and saw a shadow pass backward and forward against the little slit
              of dim light which shone out from under the door. A mad,
              unreasoning terror rose up in me at the sight, Mr. Holmes. My
              overstrung nerves failed me suddenly, and I turned and ran—ran as
              though some dreadful hand were behind me clutching at the skirt of
              my dress. I rushed down the passage, through the door, and
              straight into the arms of Mr. Rucastle, who was waiting outside.
            </TextNode>

            <TextNode>
              “ ‘So,’ said he, smiling, ‘it was you, then. I thought that it
              must be when I saw the door open.’
            </TextNode>

            <TextNode>“ ‘Oh, I am so frightened!’ I panted.</TextNode>

            <TextNode>
              “ ‘My dear young lady! my dear young lady!’—you cannot think how
              caressing and soothing his manner was—‘and what has frightened
              you, my dear young lady?’
            </TextNode>

            <TextNode>
              “But his voice was just a little too coaxing. He overdid it. I was
              keenly on my guard against him.
            </TextNode>

            <TextNode>
              “ ‘I was foolish enough to go into the empty wing,’ I answered.
              ‘But it is so lonely and eerie in this dim light that I was
              frightened and ran out again. Oh, it is so dreadfully still in
              there!’
            </TextNode>

            <TextNode>“ ‘Only that?’ said he, looking at me keenly.</TextNode>

            <TextNode>“ ‘Why, what did you think?’ I asked.</TextNode>

            <TextNode>“ ‘Why do you think that I lock this door?’</TextNode>

            <TextNode>“ ‘I am sure that I do not know.’</TextNode>

            <TextNode>
              “ ‘It is to keep people out who have no business there. Do you
              see?’ He was still smiling in the most amiable manner.
            </TextNode>

            <TextNode>“ ‘I am sure if I had known—’</TextNode>

            <TextNode>
              “ ‘Well, then, you know now. And if you ever put your foot over
              that threshold again’—here in an instant the smile hardened into a
              grin of rage, and he glared down at me with the face of a
              demon—‘I'll throw you to the mastiff.’
            </TextNode>

            <TextNode>
              “I was so terrified that I do not know what I did. I suppose that
              I must have rushed past him into my room. I remember nothing until
              I found myself lying on my bed trembling all over. Then I thought
              of you, Mr. Holmes. I could not live there longer without some
              advice. I was frightened of the house, of the man, of the woman,
              of the servants, even of the child. They were all horrible to me.
              If I could only bring you down all would be well. Of course I
              might have fled from the house, but my curiosity was almost as
              strong as my fears. My mind was soon made up. I would send you a
              wire. I put on my hat and cloak, went down to the office, which is
              about half a mile from the house, and then returned, feeling very
              much easier. A horrible doubt came into my mind as I approached
              the door lest the dog might be loose, but I remembered that Toller
              had drunk himself into a state of insensibility that evening, and
              I knew that he was the only one in the household who had any
              influence with the savage creature, or who would venture to set
              him free. I slipped in in safety and lay awake half the night in
              my joy at the thought of seeing you. I had no difficulty in
              getting leave to come into Winchester this morning, but I must be
              back before three o'clock, for Mr. and Mrs. Rucastle are going on
              a visit, and will be away all the evening, so that I must look
              after the child. Now I have told you all my adventures, Mr.
              Holmes, and I should be very glad if you could tell me what it all
              means, and, above all, what I should do.”
            </TextNode>

            <TextNode>
              Holmes and I had listened spellbound to this extraordinary story.
              My friend rose now and paced up and down the room, his hands in
              his pockets, and an expression of the most profound gravity upon
              his face.
            </TextNode>

            <TextNode>“Is Toller still drunk?” he asked.</TextNode>

            <TextNode>
              “Yes. I heard his wife tell Mrs. Rucastle that she could do
              nothing with him.”
            </TextNode>

            <TextNode>
              “That is well. And the Rucastles go out to-night?”
            </TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>“Is there a cellar with a good strong lock?”</TextNode>

            <TextNode>“Yes, the wine-cellar.”</TextNode>

            <TextNode>
              “You seem to me to have acted all through this matter like a very
              brave and sensible girl, Miss Hunter. Do you think that you could
              perform one more feat? I should not ask it of you if I did not
              think you a quite exceptional woman.”
            </TextNode>

            <TextNode>“I will try. What is it?”</TextNode>

            <TextNode>
              “We shall be at the Copper Beeches by seven o'clock, my friend and
              I. The Rucastles will be gone by that time, and Toller will, we
              hope, be incapable. There only remains Mrs. Toller, who might give
              the alarm. If you could send her into the cellar on some errand,
              and then turn the key upon her, you would facilitate matters
              immensely.”
            </TextNode>

            <TextNode>“I will do it.”</TextNode>

            <TextNode>
              “Excellent! We shall then look thoroughly into the affair. Of
              course there is only one feasible explanation. You have been
              brought there to personate someone, and the real person is
              imprisoned in this chamber. That is obvious. As to who this
              prisoner is, I have no doubt that it is the daughter, Miss Alice
              Rucastle, if I remember right, who was said to have gone to
              America. You were chosen, doubtless, as resembling her in height,
              figure, and the colour of your hair. Hers had been cut off, very
              possibly in some illness through which she has passed, and so, of
              course, yours had to be sacrificed also. By a curious chance you
              came upon her tresses. The man in the road was undoubtedly some
              friend of hers—possibly her fiancé—and no doubt, as you wore the
              girl's dress and were so like her, he was convinced from your
              laughter, whenever he saw you, and afterwards from your gesture,
              that Miss Rucastle was perfectly happy, and that she no longer
              desired his attentions. The dog is let loose at night to prevent
              him from endeavouring to communicate with her. So much is fairly
              clear. The most serious point in the case is the disposition of
              the child.”
            </TextNode>

            <TextNode>
              “What on earth has that to do with it?” I ejaculated.
            </TextNode>

            <TextNode>
              “My dear Watson, you as a medical man are continually gaining
              light as to the tendencies of a child by the study of the parents.
              Don't you see that the converse is equally valid. I have
              frequently gained my first real insight into the character of
              parents by studying their children. This child's disposition is
              abnormally cruel, merely for cruelty's sake, and whether he
              derives this from his smiling father, as I should suspect, or from
              his mother, it bodes evil for the poor girl who is in their
              power.”
            </TextNode>

            <TextNode>
              “I am sure that you are right, Mr. Holmes,” cried our client. “A
              thousand things come back to me which make me certain that you
              have hit it. Oh, let us lose not an instant in bringing help to
              this poor creature.”
            </TextNode>

            <TextNode>
              “We must be circumspect, for we are dealing with a very cunning
              man. We can do nothing until seven o'clock. At that hour we shall
              be with you, and it will not be long before we solve the mystery.”
            </TextNode>

            <TextNode>
              We were as good as our word, for it was just seven when we reached
              the Copper Beeches, having put up our trap at a wayside
              public-house. The group of trees, with their dark leaves shining
              like burnished metal in the light of the setting sun, were
              sufficient to mark the house even had Miss Hunter not been
              standing smiling on the door-step.
            </TextNode>

            <TextNode>“Have you managed it?” asked Holmes.</TextNode>

            <TextNode>
              A loud thudding noise came from somewhere downstairs. “That is
              Mrs. Toller in the cellar,” said she. “Her husband lies snoring on
              the kitchen rug. Here are his keys, which are the duplicates of
              Mr. Rucastle's.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page121;

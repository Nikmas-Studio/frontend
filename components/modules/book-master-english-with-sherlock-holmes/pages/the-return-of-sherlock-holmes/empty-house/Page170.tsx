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

function Page170({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;EMPTY&nbsp;HOUSE'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              I had imagined that we were bound for Baker Street, but Holmes
              stopped the cab at the corner of Cavendish Square. I observed that
              as he stepped out he gave a most searching glance to right and
              left, and at every subsequent street corner he took the utmost
              pains to assure that he was not followed. Our route was certainly
              a singular one. Holmes's knowledge of the byways of London was
              extraordinary, and on this occasion he passed rapidly, and with an
              assured step, through a network of mews and stables the very
              existence of which I had never known. We emerged at last into a
              small road, lined with old, gloomy houses, which led us into
              Manchester Street, and so to Blandford Street. Here he turned
              swiftly down a narrow passage, passed through a wooden gate into a
              deserted yard, and then opened with a key the back door of a
              house. We entered together and he closed it behind us.
            </TextNode>

            <TextNode>
              The place was pitch-dark, but it was evident to me that it was an
              empty house. Our feet creaked and crackled over the bare planking,
              and my outstretched hand touched a wall from which the paper was
              hanging in ribbons. Holmes's cold, thin fingers closed round my
              wrist and led me forwards down a long hall, until I dimly saw the
              murky fanlight over the door. Here Holmes turned suddenly to the
              right, and we found ourselves in a large, square, empty room,
              heavily shadowed in the corners, but faintly lit in the centre
              from the lights of the street beyond. There was no lamp near and
              the window was thick with dust, so that we could only just discern
              each other's figures within. My companion put his hand upon my
              shoulder and his lips close to my ear.
            </TextNode>

            <TextNode>“Do you know where we are?” he whispered.</TextNode>

            <TextNode>
              “Surely that is Baker Street,” I answered, staring through the dim
              window.
            </TextNode>

            <TextNode>
              “Exactly. We are in Camden House, which stands opposite to our own
              old quarters.”
            </TextNode>

            <TextNode>“But why are we here?”</TextNode>

            <TextNode>
              “Because it commands so excellent a view of that picturesque pile.
              Might I trouble you, my dear Watson, to draw a little nearer to
              the window, taking every precaution not to show yourself, and then
              to look up at our old rooms—the starting-point of so many of our
              little adventures? We will see if my three years of absence have
              entirely taken away my power to surprise you.”
            </TextNode>

            <TextNode>
              I crept forward and looked across at the familiar window. As my
              eyes fell upon it I gave a gasp and a cry of amazement. The blind
              was down and a strong light was burning in the room. The shadow of
              a man who was seated in a chair within was thrown in hard, black
              outline upon the luminous screen of the window. There was no
              mistaking the poise of the head, the squareness of the shoulders,
              the sharpness of the features. The face was turned half-round, and
              the effect was that of one of those black silhouettes which our
              grandparents loved to frame. It was a perfect reproduction of
              Holmes. So amazed was I that I threw out my hand to make sure that
              the man himself was standing beside me. He was quivering with
              silent laughter.
            </TextNode>

            <TextNode>“Well?” said he.</TextNode>

            <TextNode>“Good heavens!” I cried. “It is marvellous.”</TextNode>

            <TextNode>
              “I trust that age doth not wither nor custom stale my infinite
              variety,'” said he, and I recognised in his voice the joy and
              pride which the artist takes in his own creation. “It really is
              rather like me, is it not?”
            </TextNode>

            <TextNode>
              “I should be prepared to swear that it was you.”
            </TextNode>

            <TextNode>
              “The credit of the execution is due to Monsieur Oscar Meunier, of
              Grenoble, who spent some days in doing the moulding. It is a bust
              in wax. The rest I arranged myself during my visit to Baker Street
              this afternoon.”
            </TextNode>

            <TextNode>“But why?”</TextNode>

            <TextNode>
              “Because, my dear Watson, I had the strongest possible reason for
              wishing certain people to think that I was there when I was really
              elsewhere.”
            </TextNode>

            <TextNode>“And you thought the rooms were watched?”</TextNode>

            <TextNode>“I knew that they were watched.”</TextNode>

            <TextNode>“By whom?”</TextNode>

            <TextNode>
              “By my old enemies, Watson. By the charming society whose leader
              lies in the Reichenbach Fall. You must remember that they knew,
              and only they knew, that I was still alive. Sooner or later they
              believed that I should come back to my rooms. They watched them
              continuously, and this morning they saw me arrive.”
            </TextNode>

            <TextNode>“How do you know?”</TextNode>

            <TextNode>
              “Because I recognised their sentinel when I glanced out of my
              window. He is a harmless enough fellow, Parker by name, a garroter
              by trade, and a remarkable performer upon the Jew's harp. I cared
              nothing for him. But I cared a great deal for the much more
              formidable person who was behind him, the bosom friend of
              Moriarty, the man who dropped the rocks over the cliff, the most
              cunning and dangerous criminal in London. That is the man who is
              after me to-night, Watson, and that is the man who is quite
              unaware that we are after him.”
            </TextNode>

            <TextNode>
              My friend's plans were gradually revealing themselves. From this
              convenient retreat the watchers were being watched and the
              trackers tracked. That angular shadow up yonder was the bait and
              we were the hunters. In silence we stood together in the darkness
              and watched the hurrying figures who passed and repassed in front
              of us. Holmes was silent and motionless; but I could tell that he
              was keenly alert, and that his eyes were fixed intently upon the
              stream of passers-by. It was a bleak and boisterous night, and the
              wind whistled shrilly down the long street. Many people were
              moving to and fro, most of them muffled in their coats and
              cravats. Once or twice it seemed to me that I had seen the same
              figure before, and I especially noticed two men who appeared to be
              sheltering themselves from the wind in the doorway of a house some
              distance up the street. I tried to draw my companion's attention
              to them, but he gave a little ejaculation of impatience and
              continued to stare into the street. More than once he fidgeted
              with his feet and tapped rapidly with his fingers upon the wall.
              It was evident to me that he was becoming uneasy and that his
              plans were not working out altogether as he had hoped. At last, as
              midnight approached and the street gradually cleared, he paced up
              and down the room in uncontrollable agitation. I was about to make
              some remark to him when I raised my eyes to the lighted window and
              again experienced almost as great a surprise as before. I clutched
              Holmes's arm and pointed upwards.
            </TextNode>

            <TextNode>“The shadow has moved!” I cried.</TextNode>

            <TextNode>
              It was, indeed, no longer the profile, but the back, which was
              turned towards us.
            </TextNode>

            <TextNode>
              Three years had certainly not smoothed the asperities of his
              temper or his impatience with a less active intelligence than his
              own.
            </TextNode>

            <TextNode>
              “Of course it has moved,” said he. “Am I such a farcical bungler,
              Watson, that I should erect an obvious dummy and expect that some
              of the sharpest men in Europe would be deceived by it? We have
              been in this room two hours, and Mrs. Hudson has made some change
              in that figure eight times, or once in every quarter of an hour.
              She works it from the front so that her shadow may never be seen.
              Ah!” He drew in his breath with a shrill, excited intake. In the
              dim light I saw his head thrown forward, his whole attitude rigid
              with attention. Outside, the street was absolutely deserted. Those
              two men might still be crouching in the doorway, but I could no
              longer see them. All was still and dark, save only that brilliant
              yellow screen in front of us with the black figure outlined upon
              its centre. Again in the utter silence I heard that thin, sibilant
              note which spoke of intense suppressed excitement. An instant
              later he pulled me back into the blackest corner of the room, and
              I felt his warning hand upon my lips. The fingers which clutched
              me were quivering. Never had I known my friend more moved, and yet
              the dark street still stretched lonely and motionless before us.
            </TextNode>

            <TextNode>
              But suddenly I was aware of that which his keener senses had
              already distinguished. A low, stealthy sound came to my ears, not
              from the direction of Baker Street, but from the back of the very
              house in which we lay concealed. A door opened and shut. An
              instant later steps crept down the passage—steps which were meant
              to be silent, but which reverberated harshly through the empty
              house. Holmes crouched back against the wall and I did the same,
              my hand closing upon the handle of my revolver. Peering through
              the gloom, I saw the vague outline of a man, a shade blacker than
              the blackness of the open door. He stood for an instant, and then
              he crept forward, crouching, menacing, into the room. He was
              within three yards of us, this sinister figure, and I had braced
              myself to meet his spring, before I realized that he had no idea
              of our presence. He passed close beside us, stole over to the
              window, and very softly and noiselessly raised it for half a foot.
              As he sank to the level of this opening the light of the street,
              no longer dimmed by the dusty glass, fell full upon his face. The
              man seemed to be beside himself with excitement. His two eyes
              shone like stars and his features were working convulsively. He
              was an elderly man, with a thin, projecting nose, a high, bald
              forehead, and a huge grizzled moustache. An opera-hat was pushed
              to the back of his head, and an evening dress shirt-front gleamed
              out through his open overcoat. His face was gaunt and swarthy,
              scored with deep, savage lines. In his hand he carried what
              appeared to be a stick, but as he laid it down upon the floor it
              gave a metallic clang. Then from the pocket of his overcoat he
              drew a bulky object, and he busied himself in some task which
              ended with a loud, sharp click, as if a spring or bolt had fallen
              into its place. Still kneeling upon the floor he bent forward and
              threw all his weight and strength upon some lever, with the result
              that there came a long, whirling, grinding noise, ending once more
              in a powerful click. He straightened himself then, and I saw that
              what he held in his hand was a sort of gun, with a curiously
              misshapen butt. He opened it at the breech, put something in, and
              snapped the breech-block. Then, crouching down, he rested the end
              of the barrel upon the ledge of the open window, and I saw his
              long moustache droop over the stock and his eye gleam as it peered
              along the sights. I heard a little sigh of satisfaction as he
              cuddled the butt into his shoulder, and saw that amazing target,
              the black man on the yellow ground, standing clear at the end of
              his fore sight. For an instant he was rigid and motionless. Then
              his finger tightened on the trigger. There was a strange, loud
              whiz and a long, silvery tinkle of broken glass. At that instant
              Holmes sprang like a tiger on to the marksman's back and hurled
              him flat upon his face. He was up again in a moment, and with
              convulsive strength he seized Holmes by the throat; but I struck
              him on the head with the butt of my revolver and he dropped again
              upon the floor. I fell upon him, and as I held him my comrade blew
              a shrill call upon a whistle. There was the clatter of running
              feet upon the pavement, and two policemen in uniform, with one
              plain-clothes detective, rushed through the front entrance and
              into the room.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“That you, Lestrade?” said Holmes.</TextNode>

            <TextNode>
              “Yes, Mr. Holmes. I took the job myself. It's good to see you back
              in London, sir.”
            </TextNode>

            <TextNode>
              “I think you want a little unofficial help. Three undetected
              murders in one year won't do, Lestrade. But you handled the
              Molesey Mystery with less than your usual—that's to say, you
              handled it fairly well.”
            </TextNode>

            <TextNode>
              We had all risen to our feet, our prisoner breathing hard, with a
              stalwart constable on each side of him. Already a few loiterers
              had begun to collect in the street. Holmes stepped up to the
              window, closed it, and dropped the blinds. Lestrade had produced
              two candles and the policemen had uncovered their lanterns. I was
              able at last to have a good look at our prisoner.
            </TextNode>

            <TextNode>
              It was a tremendously virile and yet sinister face which was
              turned towards us. With the brow of a philosopher above and the
              jaw of a sensualist below, the man must have started with great
              capacities for good or for evil. But one could not look upon his
              cruel blue eyes, with their drooping, cynical lids, or upon the
              fierce, aggressive nose and the threatening, deep-lined brow,
              without reading Nature's plainest danger-signals. He took no heed
              of any of us, but his eyes were fixed upon Holmes's face with an
              expression in which hatred and amazement were equally blended.
              “You fiend!” he kept on muttering. “You clever, clever fiend!”
            </TextNode>

            <TextNode>
              “Ah, Colonel!” said Holmes, arranging his rumpled collar; “
              ‘journeys end in lovers' meetings,’ as the old play says. I don't
              think I have had the pleasure of seeing you since you favoured me
              with those attentions as I lay on the ledge above the Reichenbach
              Fall.”
            </TextNode>

            <TextNode>
              The Colonel still stared at my friend like a man in a trance. “You
              cunning, cunning fiend!” was all that he could say.
            </TextNode>

            <TextNode>
              “I have not introduced you yet,” said Holmes. “This, gentlemen, is
              Colonel Sebastian Moran, once of Her Majesty's Indian Army, and
              the best heavy game shot that our Eastern Empire has ever
              produced. I believe I am correct, Colonel, in saying that your bag
              of tigers still remains unrivalled?”
            </TextNode>

            <TextNode>
              The fierce old man said nothing, but still glared at my companion;
              with his savage eyes and bristling moustache he was wonderfully
              like a tiger himself.
            </TextNode>

            <TextNode>
              “I wonder that my very simple stratagem could deceive so old a
              <span className='italic'>shikari</span>,” said Holmes. “It must be
              very familiar to you. Have you not tethered a young kid under a
              tree, lain above it with your rifle, and waited for the bait to
              bring up your tiger? This empty house is my tree and you are my
              tiger. You have possibly had other guns in reserve in case there
              should be several tigers, or in the unlikely supposition of your
              own aim failing you. These,” he pointed around, “are my other
              guns. The parallel is exact.”
            </TextNode>

            <TextNode>
              Colonel Moran sprang forward, with a snarl of rage, but the
              constables dragged him back. The fury upon his face was terrible
              to look at.
            </TextNode>

            <TextNode>
              “I confess that you had one small surprise for me,” said Holmes.
              “I did not anticipate that you would yourself make use of this
              empty house and this convenient front window. I had imagined you
              as operating from the street, where my friend Lestrade and his
              merry men were awaiting you. With that exception all has gone as I
              expected.”
            </TextNode>

            <TextNode>Colonel Moran turned to the official detective.</TextNode>

            <TextNode>
              “You may or may not have just cause for arresting me,” said he,
              “but at least there can be no reason why I should submit to the
              gibes of this person. If I am in the hands of the law let things
              be done in a legal way.”
            </TextNode>

            <TextNode>
              “Well, that's reasonable enough,” said Lestrade. “Nothing further
              you have to say, Mr. Holmes, before we go?”
            </TextNode>

            <TextNode>
              Holmes had picked up the powerful air-gun from the floor and was
              examining its mechanism.
            </TextNode>

            <TextNode>
              “An admirable and unique weapon,” said he, “noiseless and of
              tremendous power. I knew Von Herder, the blind German mechanic,
              who constructed it to the order of the late Professor Moriarty.
              For years I have been aware of its existence, though I have never
              before had the opportunity of handling it. I commend it very
              specially to your attention, Lestrade, and also the bullets which
              fit it.”
            </TextNode>

            <TextNode>
              “You can trust us to look after that, Mr. Holmes,” said Lestrade,
              as the whole party moved towards the door. “Anything further to
              say?”
            </TextNode>

            <TextNode>“Only to ask what charge you intend to prefer?”</TextNode>

            <TextNode>
              “What charge, sir? Why, of course, the attempted murder of Mr.
              Sherlock Holmes.”
            </TextNode>

            <TextNode>
              “Not so, Lestrade. I do not propose to appear in the matter at
              all. To you, and to you only, belongs the credit of the remarkable
              arrest which you have effected. Yes, Lestrade, I congratulate you!
              With your usual happy mixture of cunning and audacity you have got
              him.”
            </TextNode>

            <TextNode>“Got him! Got whom, Mr. Holmes?”</TextNode>

            <TextNode>
              “The man that the whole force has been seeking in vain—Colonel
              Sebastian Moran, who shot the Honourable Ronald Adair with an
              expanding bullet from an air-gun through the open window of the
              second-floor front of No. 427, Park Lane, upon the 30th of last
              month. That's the charge, Lestrade. And now, Watson, if you can
              endure the draught from a broken window, I think that half an hour
              in my study over a cigar may afford you some profitable
              amusement.”
            </TextNode>

            <TextNode>
              Our old chambers had been left unchanged through the supervision
              of Mycroft Holmes and the immediate care of Mrs. Hudson. As I
              entered I saw, it is true, an unwonted tidiness, but the old
              landmarks were all in their place. There were the chemical corner
              and the acid-stained, deal-topped table. There upon a shelf was
              the row of formidable scrap-books and books of reference which
              many of our fellow-citizens would have been so glad to burn. The
              diagrams, the violin-case, and the pipe-rack—even the Persian
              slipper which contained the tobacco—all met my eyes as I glanced
              round me. There were two occupants of the room—one Mrs. Hudson,
              who beamed upon us both as we entered; the other the strange dummy
              which had played so important a part in the evening's adventures.
              It was a wax-coloured model of my friend, so admirably done that
              it was a perfect facsimile. It stood on a small pedestal table
              with an old dressing-gown of Holmes's so draped round it that the
              illusion from the street was absolutely perfect.
            </TextNode>

            <TextNode>
              “I hope you preserved all precautions, Mrs. Hudson?” said Holmes.
            </TextNode>

            <TextNode>
              “I went to it on my knees, sir, just as you told me.”
            </TextNode>

            <TextNode>
              “Excellent. You carried the thing out very well. Did you observe
              where the bullet went?”
            </TextNode>

            <TextNode>
              “Yes, sir. I'm afraid it has spoilt your beautiful bust, for it
              passed right through the head and flattened itself on the wall. I
              picked it up from the carpet. Here it is!”
            </TextNode>

            <TextNode>
              Holmes held it out to me. “A soft revolver bullet, as you
              perceive, Watson. There's genius in that, for who would expect to
              find such a thing fired from an air-gun. All right, Mrs. Hudson, I
              am much obliged for your assistance. And now, Watson, let me see
              you in your old seat once more, for there are several points which
              I should like to discuss with you.”
            </TextNode>

            <TextNode>
              He had thrown off the seedy frock-coat, and now he was the Holmes
              of old in the mouse-coloured dressing-gown which he took from his
              effigy.
            </TextNode>

            <TextNode>
              “The old <span className='italic'>shikari's</span> nerves have not
              lost their steadiness nor his eyes their keenness,” said he, with
              a laugh, as he inspected the shattered forehead of his bust.
            </TextNode>

            <TextNode>
              “Plumb in the middle of the back of the head and smack through the
              brain. He was the best shot in India, and I expect that there are
              few better in London. Have you heard the name?”
            </TextNode>

            <TextNode>“No, I have not.”</TextNode>

            <TextNode>
              “Well, well, such is fame! But, then, if I remember aright, you
              had not heard the name of Professor James Moriarty, who had one of
              the great brains of the century. Just give me down my index of
              biographies from the shelf.”
            </TextNode>

            <TextNode>
              He turned over the pages lazily, leaning back in his chair and
              blowing great clouds from his cigar.
            </TextNode>

            <TextNode>
              “My collection of M's is a fine one,” said he. “Moriarty himself
              is enough to make any letter illustrious, and here is Morgan the
              poisoner, and Merridew of abominable memory, and Mathews, who
              knocked out my left canine in the waiting-room at Charing Cross,
              and, finally, here is our friend of to-night.”
            </TextNode>

            <TextNode>He handed over the book, and I read:</TextNode>

            <Indent>
              <TextNode noIndent>
                <span className='italic'>Moran</span>,{' '}
                <span className='italic'>Sebastian</span>,{' '}
                <span className='italic'>Colonel</span>. Unemployed. Formerly
                1st Bengalore Pioneers. Born London, 1840. Son of Sir Augustus
                Moran, C.B., once British Minister to Persia. Educated Eton and
                Oxford. Served in Jowaki Campaign, Afghan Campaign, Charasiab
                (despatches), Sherpur, and Cabul. Author of{' '}
                <span className='italic'>
                  Heavy Game of the Western Himalayas
                </span>
                , 1881;{' '}
                <span className='italic'>Three Months in the Jungle</span>,
                1884. Address: Conduit Street. Clubs: The Anglo-Indian, the
                Tankerville, the Bagatelle Card Club.
              </TextNode>
            </Indent>
            <TextNode noIndent>
              On the margin was written, in Holmes's precise hand:
            </TextNode>

            <Indent>
              <TextNode className='italic' noIndent>
                The second most dangerous man in London.
              </TextNode>
            </Indent>
            <TextNode noIndent>
              “This is astonishing,” said I, as I handed back the volume. “The
              man's career is that of an honourable soldier.”
            </TextNode>

            <TextNode>
              “It is true,” Holmes answered. “Up to a certain point he did well.
              He was always a man of iron nerve, and the story is still told in
              India how he crawled down a drain after a wounded man-eating
              tiger. There are some trees, Watson, which grow to a certain
              height and then suddenly develop some unsightly eccentricity. You
              will see it often in humans. I have a theory that the individual
              represents in his development the whole procession of his
              ancestors, and that such a sudden turn to good or evil stands for
              some strong influence which came into the line of his pedigree.
              The person becomes, as it were, the epitome of the history of his
              own family.”
            </TextNode>

            <TextNode>“It is surely rather fanciful.”</TextNode>

            <TextNode>
              “Well, I don't insist upon it. Whatever the cause, Colonel Moran
              began to go wrong. Without any open scandal he still made India
              too hot to hold him. He retired, came to London, and again
              acquired an evil name. It was at this time that he was sought out
              by Professor Moriarty, to whom for a time he was chief of the
              staff. Moriarty supplied him liberally with money and used him
              only in one or two very high-class jobs which no ordinary criminal
              could have undertaken. You may have some recollection of the death
              of Mrs. Stewart, of Lauder, in 1887. Not? Well, I am sure Moran
              was at the bottom of it; but nothing could be proved. So cleverly
              was the Colonel concealed that even when the Moriarty gang was
              broken up we could not incriminate him. You remember at that date,
              when I called upon you in your rooms, how I put up the shutters
              for fear of air-guns? No doubt you thought me fanciful. I knew
              exactly what I was doing, for I knew of the existence of this
              remarkable gun, and I knew also that one of the best shots in the
              world would be behind it. When we were in Switzerland he followed
              us with Moriarty, and it was undoubtedly he who gave me that evil
              five minutes on the Reichenbach ledge.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page170;

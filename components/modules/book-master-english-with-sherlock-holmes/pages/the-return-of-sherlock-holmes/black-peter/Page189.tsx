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

function Page189({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;BLACK&nbsp;PETER'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              I have never known my friend to be in better form, both mental and
              physical, than in the year '95. His increasing fame had brought
              with it an immense practice, and I should be guilty of an
              indiscretion if I were even to hint at the identity of some of the
              illustrious clients who crossed our humble threshold in Baker
              Street. Holmes, however, like all great artists, lived for his
              art's sake, and, save in the case of the Duke of Holdernesse, I
              have seldom known him claim any large reward for his inestimable
              services. So unworldly was he—or so capricious—that he frequently
              refused his help to the powerful and wealthy where the problem
              made no appeal to his sympathies, while he would devote weeks of
              most intense application to the affairs of some humble client
              whose case presented those strange and dramatic qualities which
              appealed to his imagination and challenged his ingenuity.
            </TextNode>

            <TextNode>
              In this memorable year '95 a curious and incongruous succession of
              cases had engaged his attention, ranging from his famous
              investigation of the sudden death of Cardinal Tosca—an inquiry
              which was carried out by him at the express desire of His Holiness
              the Pope—down to his arrest of Wilson, the notorious
              canary-trainer, which removed a plague-spot from the East-End of
              London. Close on the heels of these two famous cases came the
              tragedy of Woodman's Lee, and the very obscure circumstances which
              surrounded the death of Captain Peter Carey. No record of the
              doings of Mr. Sherlock Holmes would be complete which did not
              include some account of this very unusual affair.
            </TextNode>

            <TextNode>
              During the first week of July my friend had been absent so often
              and so long from our lodgings that I knew he had something on
              hand. The fact that several rough-looking men called during that
              time and inquired for Captain Basil made me understand that Holmes
              was working somewhere under one of the numerous disguises and
              names with which he concealed his own formidable identity. He had
              at least five small refuges in different parts of London in which
              he was able to change his personality. He said nothing of his
              business to me, and it was not my habit to force a confidence. The
              first positive sign which he gave me of the direction which his
              investigation was taking was an extraordinary one. He had gone out
              before breakfast, and I had sat down to mine, when he strode into
              the room, his hat upon his head and a huge barbed-headed spear
              tucked like an umbrella under his arm.
            </TextNode>

            <TextNode>
              “Good gracious, Holmes!” I cried. “You don't mean to say that you
              have been walking about London with that thing?”
            </TextNode>

            <TextNode>“I drove to the butcher's and back.”</TextNode>

            <TextNode>“The butcher's?”</TextNode>

            <TextNode>
              “And I return with an excellent appetite. There can be no
              question, my dear Watson, of the value of exercise before
              breakfast. But I am prepared to bet that you will not guess the
              form that my exercise has taken.”
            </TextNode>

            <TextNode>“I will not attempt it.”</TextNode>

            <TextNode>He chuckled as he poured out the coffee.</TextNode>

            <TextNode>
              “If you could have looked into Allardyce's back shop you would
              have seen a dead pig swung from a hook in the ceiling, and a
              gentleman in his shirt-sleeves furiously stabbing at it with this
              weapon. I was that energetic person, and I have satisfied myself
              that by no exertion of my strength can I transfix the pig with a
              single blow. Perhaps you would care to try?”
            </TextNode>

            <TextNode>“Not for worlds. But why were you doing this?”</TextNode>

            <TextNode>
              “Because it seemed to me to have an indirect bearing upon the
              mystery of Woodman's Lee. Ah, Hopkins, I got your wire last night,
              and I have been expecting you. Come and join us.”
            </TextNode>

            <TextNode>
              Our visitor was an exceedingly alert man, thirty years of age,
              dressed in a quiet tweed suit, but retaining the erect bearing of
              one who was accustomed to official uniform. I recognised him at
              once as Stanley Hopkins, a young police inspector for whose future
              Holmes had high hopes, while he in turn professed the admiration
              and respect of a pupil for the scientific methods of the famous
              amateur. Hopkins's brow was clouded, and he sat down with an air
              of deep dejection.
            </TextNode>

            <TextNode>
              “No, thank you, sir. I breakfasted before I came round. I spent
              the night in town, for I came up yesterday to report.”
            </TextNode>

            <TextNode>“And what had you to report?”</TextNode>

            <TextNode>“Failure, sir; absolute failure.”</TextNode>

            <TextNode>“You have made no progress?”</TextNode>

            <TextNode>“None.”</TextNode>

            <TextNode>“Dear me! I must have a look at the matter.”</TextNode>

            <TextNode>
              “I wish to heavens that you would, Mr. Holmes. It's my first big
              chance, and I am at my wit's end. For goodness' sake come down and
              lend me a hand.”
            </TextNode>

            <TextNode>
              “Well, well, it just happens that I have already read all the
              available evidence, including the report of the inquest, with some
              care. By the way, what do you make of that tobacco-pouch found on
              the scene of the crime? Is there no clue there?”
            </TextNode>

            <TextNode>Hopkins looked surprised.</TextNode>

            <TextNode>
              “It was the man's own pouch, sir. His initials were inside it. And
              it was of seal-skin—and he an old sealer.”
            </TextNode>

            <TextNode>“But he had no pipe.”</TextNode>

            <TextNode>
              “No, sir, we could find no pipe; indeed, he smoked very little.
              And yet he might have kept some tobacco for his friends.”
            </TextNode>

            <TextNode>
              “No doubt. I only mention it because if I had been handling the
              case I should have been inclined to make that the starting-point
              of my investigation. However, my friend Dr. Watson knows nothing
              of this matter, and I should be none the worse for hearing the
              sequence of events once more. Just give us some short sketch of
              the essentials.”
            </TextNode>

            <TextNode>
              Stanley Hopkins drew a slip of paper from his pocket.
            </TextNode>

            <TextNode>
              “I have a few dates here which will give you the career of the
              dead man, Captain Peter Carey. He was born in '45—fifty years of
              age. He was a most daring and successful seal and whale fisher. In
              1883 he commanded the steam sealer{' '}
              <span className='italic'>Sea Unicorn</span>, of Dundee. He had
              then had several successful voyages in succession, and in the
              following year, 1884, he retired. After that he travelled for some
              years, and finally he bought a small place called Woodman's Lee,
              near Forest Row, in Sussex. There he has lived for six years, and
              there he died just a week ago to-day.
            </TextNode>

            <TextNode>
              “There were some most singular points about the man. In ordinary
              life he was a strict Puritan—a silent, gloomy fellow. His
              household consisted of his wife, his daughter, aged twenty, and
              two female servants. These last were continually changing, for it
              was never a very cheery situation, and sometimes it became past
              all bearing. The man was an intermittent drunkard, and when he had
              the fit on him he was a perfect fiend. He has been known to drive
              his wife and his daughter out of doors in the middle of the night,
              and flog them through the park until the whole village outside the
              gates was aroused by their screams.
            </TextNode>

            <TextNode>
              “He was summoned once for a savage assault upon the old vicar, who
              had called upon him to remonstrate with him upon his conduct. In
              short, Mr. Holmes, you would go far before you found a more
              dangerous man than Peter Carey, and I have heard that he bore the
              same character when he commanded his ship. He was known in the
              trade as Black Peter, and the name was given him, not only on
              account of his swarthy features and the colour of his huge beard,
              but for the humours which were the terror of all around him. I
              need not say that he was loathed and avoided by every one of his
              neighbours, and that I have not heard one single word of sorrow
              about his terrible end.
            </TextNode>

            <TextNode>
              “You must have read in the account of the inquest about the man's
              cabin, Mr. Holmes; but perhaps your friend here has not heard of
              it. He had built himself a wooden outhouse—he always called it
              ‘the cabin’—a few hundred yards from his house, and it was here
              that he slept every night. It was a little, single-roomed hut,
              sixteen feet by ten. He kept the key in his pocket, made his own
              bed, cleaned it himself, and allowed no other foot to cross the
              threshold. There are small windows on each side, which were
              covered by curtains and never opened. One of these windows was
              turned towards the high road, and when the light burned in it at
              night the folk used to point it out to each other and wonder what
              Black Peter was doing in there. That's the window, Mr. Holmes,
              which gave us one of the few bits of positive evidence that came
              out at the inquest.
            </TextNode>

            <TextNode>
              “You remember that a stonemason, named Slater, walking from Forest
              Row about one o'clock in the morning—two days before the
              murder—stopped as he passed the grounds and looked at the square
              of light still shining among the trees. He swears that the shadow
              of a man's head turned sideways was clearly visible on the blind,
              and that this shadow was certainly not that of Peter Carey, whom
              he knew well. It was that of a bearded man, but the beard was
              short and bristled forwards in a way very different from that of
              the captain. So he says, but he had been two hours in the
              public-house, and it is some distance from the road to the window.
              Besides, this refers to the Monday, and the crime was done upon
              the Wednesday.
            </TextNode>

            <TextNode>
              “On the Tuesday Peter Carey was in one of his blackest moods,
              flushed with drink and as savage as a dangerous wild beast. He
              roamed about the house, and the women ran for it when they heard
              him coming. Late in the evening he went down to his own hut. About
              two o'clock the following morning his daughter, who slept with her
              window open, heard a most fearful yell from that direction, but it
              was no unusual thing for him to bawl and shout when he was in
              drink, so no notice was taken. On rising at seven one of the maids
              noticed that the door of the hut was open, but so great was the
              terror which the man caused that it was midday before anyone would
              venture down to see what had become of him. Peeping into the open
              door they saw a sight which sent them flying with white faces into
              the village. Within an hour I was on the spot and had taken over
              the case.
            </TextNode>

            <TextNode>
              “Well, I have fairly steady nerves, as you know, Mr. Holmes, but I
              give you my word that I got a shake when I put my head into that
              little house. It was droning like a harmonium with the flies and
              bluebottles, and the floor and walls were like a slaughter-house.
              He had called it a cabin, and a cabin it was sure enough, for you
              would have thought that you were in a ship. There was a bunk at
              one end, a sea-chest, maps and charts, a picture of the&nbsp;
              <span className='italic'>Sea Unicorn</span>, a line of log-books
              on a shelf, all exactly as one would expect to find it in a
              captain's room. And there in the middle of it was the man himself,
              his face twisted like a lost soul in torment, and his great
              brindled beard stuck upwards in his agony. Right through his broad
              breast a steel harpoon had been driven, and it had sunk deep into
              the wood of the wall behind him. He was pinned like a beetle on a
              card. Of course, he was quite dead, and had been so from the
              instant that he had uttered that last yell of agony.
            </TextNode>

            <TextNode>
              “I know your methods, sir, and I applied them. Before I permitted
              anything to be moved I examined most carefully the ground outside,
              and also the floor of the room. There were no footmarks.”
            </TextNode>

            <TextNode>“Meaning that you saw none?”</TextNode>

            <TextNode>“I assure you, sir, that there were none.”</TextNode>

            <TextNode>
              “My good Hopkins, I have investigated many crimes, but I have
              never yet seen one which was committed by a flying creature. As
              long as the criminal remains upon two legs so long must there be
              some indentation, some abrasion, some trifling displacement which
              can be detected by the scientific searcher. It is incredible that
              this blood-bespattered room contained no trace which could have
              aided us. I understand, however, from the inquest that there were
              some objects which you failed to overlook?”
            </TextNode>

            <TextNode>
              The young inspector winced at my companion's ironical comments.
            </TextNode>

            <TextNode>
              “I was a fool not to call you in at the time, Mr. Holmes. However,
              that's past praying for now. Yes, there were several objects in
              the room which called for special attention. One was the harpoon
              with which the deed was committed. It had been snatched down from
              a rack on the wall. Two others remained there, and there was a
              vacant place for the third. On the stock was engraved ‘S.S.. Sea
              Unicorn, Dundee.’ This seemed to establish that the crime had been
              done in a moment of fury, and that the murderer had seized the
              first weapon which came in his way. The fact that the crime was
              committed at two in the morning, and yet Peter Carey was fully
              dressed, suggested that he had an appointment with the murderer,
              which is borne out by the fact that a bottle of rum and two dirty
              glasses stood upon the table.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Yes,” said Holmes; “I think that both inferences are permissible.
              Was there any other spirit but rum in the room?”
            </TextNode>

            <TextNode>
              “Yes; there was a tantalus containing brandy and whisky on the
              sea-chest. It is of no importance to us, however, since the
              decanters were full, and it had therefore not been used.”
            </TextNode>

            <TextNode>
              “For all that its presence has some significance,” said Holmes.
              “However, let us hear some more about the objects which do seem to
              you to bear upon the case.”
            </TextNode>

            <TextNode>“There was this tobacco-pouch upon the table.”</TextNode>

            <TextNode>“What part of the table?”</TextNode>

            <TextNode>
              “It lay in the middle. It was of coarse seal-skin—the
              straight-haired skin, with a leather thong to bind it. Inside was
              ‘P.C.’ on the flap. There was half an ounce of strong ship's
              tobacco in it.”
            </TextNode>

            <TextNode>“Excellent! What more?”</TextNode>

            <TextNode>
              Stanley Hopkins drew from his pocket a drab-covered note-book. The
              outside was rough and worn, the leaves discoloured. On the first
              page were written the initials “J.H.N.” and the date “1883.”
              Holmes laid it on the table and examined it in his minute way,
              while Hopkins and I gazed over each shoulder. On the second page
              were the printed letters “C.P.R.,” and then came several sheets of
              numbers. Another heading was Argentine, another Costa Rica, and
              another San Paulo, each with pages of signs and figures after it.
            </TextNode>

            <TextNode>“What do you make of these?” asked Holmes.</TextNode>

            <TextNode>
              “They appear to be lists of Stock Exchange securities. I thought
              that ‘J.H.N.’ were the initials of a broker, and that ‘C.P.R.’ may
              have been his client.”
            </TextNode>

            <TextNode>“Try Canadian Pacific Railway,” said Holmes.</TextNode>

            <TextNode>
              Stanley Hopkins swore between his teeth and struck his thigh with
              his clenched hand.
            </TextNode>

            <TextNode>
              “What a fool I have been!” he cried. “Of course, it is as you say.
              Then ‘J.H.N.’ are the only initials we have to solve. I have
              already examined the old Stock Exchange lists, and I can find no
              one in 1883 either in the House or among the outside brokers whose
              initials correspond with these. Yet I feel that the clue is the
              most important one that I hold. You will admit, Mr. Holmes, that
              there is a possibility that these initials are those of the second
              person who was present—in other words, of the murderer. I would
              also urge that the introduction into the case of a document
              relating to large masses of valuable securities gives us for the
              first time some indication of a motive for the crime.”
            </TextNode>

            <TextNode>
              Sherlock Holmes's face showed that he was thoroughly taken aback
              by this new development.
            </TextNode>

            <TextNode>
              “I must admit both your points,” said he. “I confess that this
              note-book, which did not appear at the inquest, modifies any views
              which I may have formed. I had come to a theory of the crime in
              which I can find no place for this. Have you endeavoured to trace
              any of the securities here mentioned?”
            </TextNode>

            <TextNode>
              “Inquiries are now being made at the offices, but I fear that the
              complete register of the stockholders of these South American
              concerns is in South America, and that some weeks must elapse
              before we can trace the shares.”
            </TextNode>

            <TextNode>
              Holmes had been examining the cover of the note-book with his
              magnifying lens.
            </TextNode>

            <TextNode>
              “Surely there is some discolouration here,” said he.
            </TextNode>

            <TextNode>
              “Yes, sir, it is a blood-stain. I told you that I picked the book
              off the floor.”
            </TextNode>

            <TextNode>“Was the blood-stain above or below?”</TextNode>

            <TextNode>“On the side next the boards.”</TextNode>

            <TextNode>
              “Which proves, of course, that the book was dropped after the
              crime was committed.”
            </TextNode>

            <TextNode>
              “Exactly, Mr. Holmes. I appreciated that point, and I conjectured
              that it was dropped by the murderer in his hurried flight. It lay
              near the door.”
            </TextNode>

            <TextNode>
              “I suppose that none of these securities have been found among the
              property of the dead man?”
            </TextNode>

            <TextNode>“No, sir.”</TextNode>

            <TextNode>“Have you any reason to suspect robbery?”</TextNode>

            <TextNode>“No, sir. Nothing seemed to have been touched.”</TextNode>

            <TextNode>
              “Dear me, it is certainly a very interesting case. Then there was
              a knife, was there not?”
            </TextNode>

            <TextNode>
              “A sheath-knife, still in its sheath. It lay at the feet of the
              dead man. Mrs. Carey has identified it as being her husband's
              property.”
            </TextNode>

            <TextNode>Holmes was lost in thought for some time.</TextNode>

            <TextNode>
              “Well,” said he, at last, “I suppose I shall have to come out and
              have a look at it.”
            </TextNode>

            <TextNode>Stanley Hopkins gave a cry of joy.</TextNode>

            <TextNode>
              “Thank you, sir. That will indeed be a weight off my mind.”
            </TextNode>

            <TextNode>Holmes shook his finger at the inspector.</TextNode>

            <TextNode>
              “It would have been an easier task a week ago,” said he. “But even
              now my visit may not be entirely fruitless. Watson, if you can
              spare the time I should be very glad of your company. If you will
              call a four-wheeler, Hopkins, we shall be ready to start for
              Forest Row in a quarter of an hour.”
            </TextNode>

            <TextNode>
              Alighting at the small wayside station, we drove for some miles
              through the remains of widespread woods, which were once part of
              that great forest which for so long held the Saxon invaders at
              bay—the impenetrable “weald,” for sixty years the bulwark of
              Britain. Vast sections of it have been cleared, for this is the
              seat of the first iron-works of the country, and the trees have
              been felled to smelt the ore. Now the richer fields of the North
              have absorbed the trade, and nothing save these ravaged groves and
              great scars in the earth show the work of the past. Here in a
              clearing upon the green slope of a hill stood a long, low stone
              house, approached by a curving drive running through the fields.
              Nearer the road, and surrounded on three sides by bushes, was a
              small outhouse, one window and the door facing in our direction.
              It was the scene of the murder.
            </TextNode>

            <TextNode>
              Stanley Hopkins led us first to the house, where he introduced us
              to a haggard, grey-haired woman, the widow of the murdered man,
              whose gaunt and deep-lined face, with the furtive look of terror
              in the depths of her red-rimmed eyes, told of the years of
              hardship and ill-usage which she had endured. With her was her
              daughter, a pale, fair-haired girl, whose eyes blazed defiantly at
              us as she told us that she was glad that her father was dead, and
              that she blessed the hand which had struck him down. It was a
              terrible household that Black Peter Carey had made for himself,
              and it was with a sense of relief that we found ourselves in the
              sunlight again and making our way along a path which had been worn
              across the fields by the feet of the dead man.
            </TextNode>

            <TextNode>
              The outhouse was the simplest of dwellings, wooden-walled,
              shingle-roofed, one window beside the door and one on the farther
              side. Stanley Hopkins drew the key from his pocket, and had
              stooped to the lock, when he paused with a look of attention and
              surprise upon his face.
            </TextNode>

            <TextNode>“Someone has been tampering with it,” he said.</TextNode>

            <TextNode>
              There could be no doubt of the fact. The woodwork was cut and the
              scratches showed white through the paint, as if they had been that
              instant done. Holmes had been examining the window.
            </TextNode>

            <TextNode>
              “Someone has tried to force this also. Whoever it was has failed
              to make his way in. He must have been a very poor burglar.”
            </TextNode>

            <TextNode>
              “This is a most extraordinary thing,” said the inspector; “I could
              swear that these marks were not here yesterday evening.”
            </TextNode>

            <TextNode>
              “Some curious person from the village, perhaps,” I suggested.
            </TextNode>

            <TextNode>
              “Very unlikely. Few of them would dare to set foot in the grounds,
              far less try to force their way into the cabin. What do you think
              of it, Mr. Holmes?”
            </TextNode>

            <TextNode>“I think that fortune is very kind to us.”</TextNode>

            <TextNode>“You mean that the person will come again?”</TextNode>

            <TextNode>
              “It is very probable. He came expecting to find the door open. He
              tried to get in with the blade of a very small penknife. He could
              not manage it. What would he do?”
            </TextNode>

            <TextNode>
              “Come again next night with a more useful tool.”
            </TextNode>

            <TextNode>
              “So I should say. It will be our fault if we are not there to
              receive him. Meanwhile, let me see the inside of the cabin.”
            </TextNode>

            <TextNode>
              The traces of the tragedy had been removed, but the furniture
              within the little room still stood as it had been on the night of
              the crime. For two hours, with most intense concentration, Holmes
              examined every object in turn, but his face showed that his quest
              was not a successful one. Once only he paused in his patient
              investigation.
            </TextNode>

            <TextNode>
              “Have you taken anything off this shelf, Hopkins?”
            </TextNode>

            <TextNode>“No; I have moved nothing.”</TextNode>

            <TextNode>
              “Something has been taken. There is less dust in this corner of
              the shelf than elsewhere. It may have been a book lying on its
              side. It may have been a box. Well, well, I can do nothing more.
              Let us walk in these beautiful woods, Watson, and give a few hours
              to the birds and the flowers. We shall meet you here later,
              Hopkins, and see if we can come to closer quarters with the
              gentleman who has paid this visit in the night.”
            </TextNode>

            <TextNode>
              It was past eleven o'clock when we formed our little ambuscade.
              Hopkins was for leaving the door of the hut open, but Holmes was
              of the opinion that this would rouse the suspicions of the
              stranger. The lock was a perfectly simple one, and only a strong
              blade was needed to push it back. Holmes also suggested that we
              should wait, not inside the hut, but outside it among the bushes
              which grew round the farther window. In this way we should be able
              to watch our man if he struck a light, and see what his object was
              in this stealthy nocturnal visit.
            </TextNode>

            <TextNode>
              It was a long and melancholy vigil, and yet brought with it
              something of the thrill which the hunter feels when he lies beside
              the water pool and waits for the coming of the thirsty beast of
              prey. What savage creature was it which might steal upon us out of
              the darkness? Was it a fierce tiger of crime, which could only be
              taken fighting hard with flashing fang and claw, or would it prove
              to be some skulking jackal, dangerous only to the weak and
              unguarded?
            </TextNode>

            <TextNode>
              In absolute silence we crouched amongst the bushes, waiting for
              whatever might come. At first the steps of a few belated
              villagers, or the sound of voices from the village, lightened our
              vigil; but one by one these interruptions died away and an
              absolute stillness fell upon us, save for the chimes of the
              distant church, which told us of the progress of the night, and
              for the rustle and whisper of a fine rain falling amid the foliage
              which roofed us in.
            </TextNode>

            <TextNode>
              Half-past two had chimed, and it was the darkest hour which
              precedes the dawn, when we all started as a low but sharp click
              came from the direction of the gate. Someone had entered the
              drive. Again there was a long silence, and I had begun to fear
              that it was a false alarm, when a stealthy step was heard upon the
              other side of the hut, and a moment later a metallic scraping and
              clinking. The man was trying to force the lock! This time his
              skill was greater or his tool was better, for there was a sudden
              snap and the creak of the hinges. Then a match was struck, and
              next instant the steady light from a candle filled the interior of
              the hut. Through the gauze curtain our eyes were all riveted upon
              the scene within.
            </TextNode>

            <TextNode>
              The nocturnal visitor was a young man, frail and thin, with a
              black moustache which intensified the deadly pallor of his face.
              He could not have been much above twenty years of age. I have
              never seen any human being who appeared to be in such a pitiable
              fright, for his teeth were visibly chattering and he was shaking
              in every limb. He was dressed like a gentleman, in Norfolk jacket
              and knickerbockers, with a cloth cap upon his head. We watched him
              staring round with frightened eyes. Then he laid the candle-end
              upon the table and disappeared from our view into one of the
              corners. He returned with a large book, one of the log-books which
              formed a line upon the shelves. Leaning on the table he rapidly
              turned over the leaves of this volume until he came to the entry
              which he sought. Then, with an angry gesture of his clenched hand,
              he closed the book, replaced it in the corner, and put out the
              light. He had hardly turned to leave the hut when Hopkins's hand
              was on the fellow's collar, and I heard his loud gasp of terror as
              he understood that he was taken. The candle was re-lit, and there
              was our wretched captive shivering and cowering in the grasp of
              the detective. He sank down upon the sea-chest, and looked
              helplessly from one of us to the other.
            </TextNode>

            <TextNode>
              “Now, my fine fellow,” said Stanley Hopkins, “who are you, and
              what do you want here?”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page189;

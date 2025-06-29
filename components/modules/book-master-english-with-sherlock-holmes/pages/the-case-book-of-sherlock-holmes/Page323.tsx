import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page321({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;THREE&nbsp;GARRIDEBS'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              It may have been a comedy, or it may have been a tragedy. It cost
              one man his reason, it cost me a blood-letting, and it cost yet
              another man the penalties of the law. Yet there was certainly an
              element of comedy. Well, you shall judge for yourselves.
            </TextNode>

            <TextNode>
              I remember the date very well, for it was in the same month that
              Holmes refused a knighthood for services which may perhaps some
              day be described. I only refer to the matter in passing, for in my
              position of partner and confidant I am obliged to be particularly
              careful to avoid any indiscretion. I repeat, however, that this
              enables me to fix the date, which was the latter end of June,
              1902, shortly after the conclusion of the South African War.
              Holmes had spent several days in bed, as was his habit from time
              to time, but he emerged that morning with a long foolscap document
              in his hand and a twinkle of amusement in his austere gray eyes.
            </TextNode>

            <TextNode>
              “There is a chance for you to make some money, friend Watson,”
              said he. “Have you ever heard the name of Garrideb?”
            </TextNode>

            <TextNode>I admitted that I had not.</TextNode>

            <TextNode>
              “Well, if you can lay your hand upon a Garrideb, there's money in
              it.”
            </TextNode>

            <TextNode>“Why?”</TextNode>

            <TextNode>
              “Ah, that's a long story—rather a whimsical one, too. I don't
              think in all our explorations of human complexities we have ever
              come upon anything more singular. The fellow will be here
              presently for cross-examination, so I won't open the matter up
              till he comes. But, meanwhile, that's the name we want.”
            </TextNode>

            <TextNode>
              The telephone directory lay on the table beside me, and I turned
              over the pages in a rather hopeless quest. But to my amazement
              there was this strange name in its due place. I gave a cry of
              triumph.
            </TextNode>

            <TextNode>“Here you are, Holmes! Here it is!”</TextNode>

            <TextNode>Holmes took the book from my hand.</TextNode>

            <TextNode>
              “‘Garrideb, N.,’ ” he read, “‘136 Little Ryder Street, W.’ Sorry
              to disappoint you, my dear Watson, but this is the man himself.
              That is the address upon his letter. We want another to match
              him.”
            </TextNode>

            <TextNode>
              Mrs. Hudson had come in with a card upon a tray. I took it up and
              glanced at it.
            </TextNode>

            <TextNode>
              “Why, here it is!” I cried in amazement. “This is a different
              initial. John Garrideb, Counsellor at Law, Moorville, Kansas, U.
              S. A.”
            </TextNode>

            <TextNode>
              Holmes smiled as he looked at the card. “I am afraid you must make
              yet another effort, Watson,” said he. “This gentleman is also in
              the plot already, though I certainly did not expect to see him
              this morning. However, he is in a position to tell us a good deal
              which I want to know.”
            </TextNode>

            <TextNode>
              A moment later he was in the room. Mr. John Garrideb, Counsellor
              at Law, was a short, powerful man with the round, fresh,
              clean-shaven face characteristic of so many American men of
              affairs. The general effect was chubby and rather childlike, so
              that one received the impression of quite a young man with a broad
              set smile upon his face. His eyes, however, were arresting. Seldom
              in any human head have I seen a pair which bespoke a more intense
              inward life, so bright were they, so alert, so responsive to every
              change of thought. His accent was American, but was not
              accompanied by any eccentricity of speech.
            </TextNode>

            <TextNode>
              “Mr. Holmes?” he asked, glancing from one to the other. “Ah, yes!
              Your pictures are not unlike you, sir, if I may say so. I believe
              you have had a letter from my namesake, Mr. Nathan Garrideb, have
              you not?”
            </TextNode>

            <TextNode>
              “Pray sit down,” said Sherlock Holmes. “We shall, I fancy, have a
              good deal to discuss.” He took up his sheets of foolscap. “You
              are, of course, the Mr. John Garrideb mentioned in this document.
              But surely you have been in England some time?”
            </TextNode>

            <TextNode>
              “Why do you say that, Mr. Holmes?” I seemed to read sudden
              suspicion in those expressive eyes.
            </TextNode>

            <TextNode>“Your whole outfit is English.”</TextNode>

            <TextNode>
              Mr. Garrideb forced a laugh. “I've read of your tricks, Mr.
              Holmes, but I never thought I would be the subject of them. Where
              do you read that?”
            </TextNode>

            <TextNode>
              “The shoulder cut of your coat, the toes of your boots—could
              anyone doubt it?”
            </TextNode>

            <TextNode>
              “Well, well, I had no idea I was so obvious a Britisher. But
              business brought me over here some time ago, and so, as you say,
              my outfit is nearly all London. However, I guess your time is of
              value, and we did not meet to talk about the cut of my socks. What
              about getting down to that paper you hold in your hand?”
            </TextNode>

            <TextNode>
              Holmes had in some way ruffled our visitor, whose chubby face had
              assumed a far less amiable expression.
            </TextNode>

            <TextNode>
              “Patience! Patience, Mr. Garrideb!” said my friend in a soothing
              voice. “Dr. Watson would tell you that these little digressions of
              mine sometimes prove in the end to have some bearing on the
              matter. But why did Mr. Nathan Garrideb not come with you?”
            </TextNode>

            <TextNode>
              “Why did he ever drag you into it at all?” asked our visitor with
              a sudden outflame of anger. “What in thunder had you to do with
              it? Here was a bit of professional business between two gentlemen,
              and one of them must needs call in a detective! I saw him this
              morning, and he told me this fool-trick he had played me, and
              that's why I am here. But I feel bad about it, all the same.”
            </TextNode>

            <TextNode>
              “There was no reflection upon you, Mr. Garrideb. It was simply
              zeal upon his part to gain your end—an end which is, I understand,
              equally vital for both of you. He knew that I had means of getting
              information, and, therefore, it was very natural that he should
              apply to me.”
            </TextNode>

            <TextNode>Our visitor's angry face gradually cleared.</TextNode>

            <TextNode>
              “Well, that puts it different,” said he. “When I went to see him
              this morning and he told me he had sent to a detective, I just
              asked for your address and came right away. I don't want police
              butting into a private matter. But if you are content just to help
              us find the man, there can be no harm in that.”
            </TextNode>

            <TextNode>
              “Well, that is just how it stands,” said Holmes. “And now, sir,
              since you are here, we had best have a clear account from your own
              lips. My friend here knows nothing of the details.”
            </TextNode>

            <TextNode>
              Mr. Garrideb surveyed me with not too friendly a gaze.
            </TextNode>

            <TextNode>“Need he know?” he asked.</TextNode>

            <TextNode>“We usually work together.”</TextNode>

            <TextNode>
              “Well, there's no reason it should be kept a secret. I'll give you
              the facts as short as I can make them. If you came from Kansas I
              would not need to explain to you who Alexander Hamilton Garrideb
              was. He made his money in real estate, and afterwards in the wheat
              pit at Chicago, but he spent it in buying up as much land as would
              make one of your counties, lying along the Arkansas River, west of
              Fort Dodge. It's grazing-land and lumber-land and arable-land and
              mineralized-land, and just every sort of land that brings dollars
              to the man that owns it.
            </TextNode>

            <TextNode>
              “He had no kith nor kin—or, if he had, I never heard of it. But he
              took a kind of pride in the queerness of his name. That was what
              brought us together. I was in the law at Topeka, and one day I had
              a visit from the old man, and he was tickled to death to meet
              another man with his own name. It was his pet fad, and he was dead
              set to find out if there were any more Garridebs in the world.
              ‘Find me another!’ said he. I told him I was a busy man and could
              not spend my life hiking round the world in search of Garridebs.
              ‘None the less,’ said he, ‘that is just what you will do if things
              pan out as I planned them.’ I thought he was joking, but there was
              a powerful lot of meaning in the words, as I was soon to discover.
            </TextNode>

            <TextNode>
              “For he died within a year of saying them, and he left a will
              behind him. It was the queerest will that has ever been filed in
              the State of Kansas. His property was divided into three parts,
              and I was to have one on condition that I found two Garridebs who
              would share the remainder. It's five million dollars for each if
              it is a cent, but we can't lay a finger on it until we all three
              stand in a row.
            </TextNode>

            <TextNode>
              “It was so big a chance that I just let my legal practice slide
              and I set forth looking for Garridebs. There is not one in the
              United States. I went through it, sir, with a fine-toothed comb
              and never a Garrideb could I catch. Then I tried the old country.
              Sure enough there was the name in the London telephone directory.
              I went after him two days ago and explained the whole matter to
              him. But he is a lone man, like myself, with some women relations,
              but no men. It says three adult men in the will. So you see we
              still have a vacancy, and if you can help to fill it we will be
              very ready to pay your charges.”
            </TextNode>

            <TextNode>
              “Well, Watson,” said Holmes with a smile, “I said it was rather
              whimsical, did I not? I should have thought, sir, that your
              obvious way was to advertise in the agony columns of the papers.”
            </TextNode>

            <TextNode>“I have done that, Mr. Holmes. No replies.”</TextNode>

            <TextNode>
              “Dear me! Well, it is certainly a most curious little problem. I
              may take a glance at it in my leisure. By the way, it is curious
              that you should have come from Topeka. I used to have a
              correspondent—he is dead now—old Dr. Lysander Starr, who was mayor
              in 1890.”
            </TextNode>

            <TextNode>
              “Good old Dr. Starr!” said our visitor. “His name is still
              honoured. Well, Mr. Holmes, I suppose all we can do is to report
              to you and let you know how we progress. I reckon you will hear
              within a day or two.” With this assurance our American bowed and
              departed.
            </TextNode>

            <TextNode>
              Holmes had lit his pipe, and he sat for some time with a curious
              smile upon his face.
            </TextNode>

            <TextNode>“Well?” I asked at last.</TextNode>

            <TextNode>“I am wondering, Watson—just wondering!”</TextNode>

            <TextNode>“At what?”</TextNode>

            <TextNode>Holmes took his pipe from his lips.</TextNode>

            <TextNode>
              “I was wondering, Watson, what on earth could be the object of
              this man in telling us such a rigmarole of lies. I nearly asked
              him so—for there are times when a brutal frontal attack is the
              best policy—but I judged it better to let him think he had fooled
              us. Here is a man with an English coat frayed at the elbow and
              trousers bagged at the knee with a year's wear, and yet by this
              document and by his own account he is a provincial American lately
              landed in London. There have been no advertisements in the agony
              columns. You know that I miss nothing there. They are my favourite
              covert for putting up a bird, and I would never have overlooked
              such a cock pheasant as that. I never knew a Dr. Lysander Starr,
              of Topeka. Touch him where you would he was false. I think the
              fellow is really an American, but he has worn his accent smooth
              with years of London. What is his game, then, and what motive lies
              behind this preposterous search for Garridebs? It's worth our
              attention, for, granting that the man is a rascal, he is certainly
              a complex and ingenious one. We must now find out if our other
              correspondent is a fraud also. Just ring him up, Watson.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              I did so, and heard a thin, quavering voice at the other end of
              the line.
            </TextNode>

            <TextNode>
              “Yes, yes, I am Mr. Nathan Garrideb. Is Mr. Holmes there? I should
              very much like to have a word with Mr. Holmes.”
            </TextNode>
            <TextNode>
              My friend took the instrument and I heard the usual syncopated
              dialogue.
            </TextNode>

            <TextNode>
              “Yes, he has been here. I understand that you don't know him. …
              How long? … Only two days! … Yes, yes, of course, it is a most
              captivating prospect. Will you be at home this evening? I suppose
              your namesake will not be there? … Very good, we will come then,
              for I would rather have a chat without him. … Dr. Watson will come
              with me. … I understand from your note that you did not go out
              often. … Well, we shall be round about six. You need not mention
              it to the American lawyer. … Very good. Good-bye!”
            </TextNode>

            <TextNode>
              It was twilight of a lovely spring evening, and even Little Ryder
              Street, one of the smaller offshoots from the Edgware Road, within
              a stone-cast of old Tyburn Tree of evil memory, looked golden and
              wonderful in the slanting rays of the setting sun. The particular
              house to which we were directed was a large, old-fashioned, Early
              Georgian edifice, with a flat brick face broken only by two deep
              bay windows on the ground floor. It was on this ground floor that
              our client lived, and, indeed, the low windows proved to be the
              front of the huge room in which he spent his waking hours. Holmes
              pointed as we passed to the small brass plate which bore the
              curious name.
            </TextNode>

            <TextNode>
              “Up some years, Watson,” he remarked, indicating its discoloured
              surface. “It's his real name, anyhow, and that is something to
              note.”
            </TextNode>

            <TextNode>
              The house had a common stair, and there were a number of names
              painted in the hall, some indicating offices and some private
              chambers. It was not a collection of residential flats, but rather
              the abode of Bohemian bachelors. Our client opened the door for us
              himself and apologized by saying that the woman in charge left at
              four o'clock. Mr. Nathan Garrideb proved to be a very tall,
              loose-jointed, round-backed person, gaunt and bald, some sixty-odd
              years of age. He had a cadaverous face, with the dull dead skin of
              a man to whom exercise was unknown. Large round spectacles and a
              small projecting goat's beard combined with his stooping attitude
              to give him an expression of peering curiosity. The general
              effect, however, was amiable, though eccentric.
            </TextNode>
            <TextNode>
              The room was as curious as its occupant. It looked like a small
              museum. It was both broad and deep, with cupboards and cabinets
              all round, crowded with specimens, geological and anatomical.
              Cases of butterflies and moths flanked each side of the entrance.
              A large table in the centre was littered with all sorts of debris,
              while the tall brass tube of a powerful microscope bristled up
              among them. As I glanced round I was surprised at the universality
              of the man's interests. Here was a case of ancient coins. There
              was a cabinet of flint instruments. Behind his central table was a
              large cupboard of fossil bones. Above was a line of plaster skulls
              with such names as “Neanderthal,” “Heidelberg,” “Cro-Magnon”
              printed beneath them. It was clear that he was a student of many
              subjects. As he stood in front of us now, he held a piece of
              chamois leather in his right hand with which he was polishing a
              coin.
            </TextNode>

            <TextNode>
              “Syracusan—of the best period,” he explained, holding it up. “They
              degenerated greatly towards the end. At their best I hold them
              supreme, though some prefer the Alexandrian school. You will find
              a chair here, Mr. Holmes. Pray allow me to clear these bones. And
              you, sir—ah, yes, Dr. Watson—if you would have the goodness to put
              the Japanese vase to one side. You see round me my little
              interests in life. My doctor lectures me about never going out,
              but why should I go out when I have so much to hold me here? I can
              assure you that the adequate cataloguing of one of those cabinets
              would take me three good months.”
            </TextNode>

            <TextNode>Holmes looked round him with curiosity.</TextNode>

            <TextNode>
              “But do you tell me that you never go out?” he said.
            </TextNode>

            <TextNode>
              “Now and again I drive down to Sotheby's or Christie's. Otherwise
              I very seldom leave my room. I am not too strong, and my
              researches are very absorbing. But you can imagine, Mr. Holmes,
              what a terrific shock—pleasant but terrific—it was for me when I
              heard of this unparalleled good fortune. It only needs one more
              Garrideb to complete the matter, and surely we can find one. I had
              a brother, but he is dead, and female relatives are disqualified.
              But there must surely be others in the world. I had heard that you
              handled strange cases, and that was why I sent to you. Of course,
              this American gentleman is quite right, and I should have taken
              his advice first, but I acted for the best.”
            </TextNode>

            <TextNode>
              “I think you acted very wisely indeed,” said Holmes. “But are you
              really anxious to acquire an estate in America?”
            </TextNode>

            <TextNode>
              “Certainly not, sir. Nothing would induce me to leave my
              collection. But this gentleman has assured me that he will buy me
              out as soon as we have established our claim. Five million dollars
              was the sum named. There are a dozen specimens in the market at
              the present moment which fill gaps in my collection, and which I
              am unable to purchase for want of a few hundred pounds. Just think
              what I could do with five million dollars. Why, I have the nucleus
              of a national collection. I shall be the Hans Sloane of my age.”
            </TextNode>

            <TextNode>
              His eyes gleamed behind his great spectacles. It was very clear
              that no pains would be spared by Mr. Nathan Garrideb in finding a
              namesake.
            </TextNode>

            <TextNode>
              “I merely called to make your acquaintance, and there is no reason
              why I should interrupt your studies,” said Holmes. “I prefer to
              establish personal touch with those with whom I do business. There
              are few questions I need ask, for I have your very clear narrative
              in my pocket, and I filled up the blanks when this American
              gentleman called. I understand that up to this week you were
              unaware of his existence.”
            </TextNode>

            <TextNode>“That is so. He called last Tuesday.”</TextNode>

            <TextNode>“Did he tell you of our interview to-day?”</TextNode>

            <TextNode>
              “Yes, he came straight back to me. He had been very angry.”
            </TextNode>

            <TextNode>“Why should he be angry?”</TextNode>

            <TextNode>
              “He seemed to think it was some reflection on his honour. But he
              was quite cheerful again when he returned.”
            </TextNode>

            <TextNode>“Did he suggest any course of action?”</TextNode>

            <TextNode>“No, sir, he did not.”</TextNode>

            <TextNode>“Has he had, or asked for, any money from you?”</TextNode>

            <TextNode>“No, sir, never!”</TextNode>

            <TextNode>“You see no possible object he has in view?”</TextNode>

            <TextNode>“None, except what he states.”</TextNode>

            <TextNode>
              “Did you tell him of our telephone appointment?”
            </TextNode>

            <TextNode>“Yes, sir, I did.”</TextNode>

            <TextNode>
              Holmes was lost in thought. I could see that he was puzzled.
            </TextNode>

            <TextNode>
              “Have you any articles of great value in your collection?”
            </TextNode>

            <TextNode>
              “No, sir. I am not a rich man. It is a good collection, but not a
              very valuable one.”
            </TextNode>

            <TextNode>“You have no fear of burglars?”</TextNode>

            <TextNode>“Not the least.”</TextNode>

            <TextNode>“How long have you been in these rooms?”</TextNode>

            <TextNode>“Nearly five years.”</TextNode>

            <TextNode>
              Holmes's cross-examination was interrupted by an imperative
              knocking at the door. No sooner had our client unlatched it than
              the American lawyer burst excitedly into the room.
            </TextNode>

            <TextNode>
              “Here you are!” he cried, waving a paper over his head. “I thought
              I should be in time to get you. Mr. Nathan Garrideb, my
              congratulations! You are a rich man, sir. Our business is happily
              finished and all is well. As to you, Mr. Holmes, we can only say
              we are sorry if we have given you any useless trouble.”
            </TextNode>

            <TextNode>
              He handed over the paper to our client, who stood staring at a
              marked advertisement. Holmes and I leaned forward and read it over
              his shoulder. This is how it ran:
            </TextNode>

            <TextNode noIndent className='text-center  italic'>
              Howard Garrideb
            </TextNode>
            <TextNode noIndent className='text-center  italic'>
              Constructor of Agricultural Machinery
            </TextNode>
            <TextNode noIndent className='text-center'>
              Binders, reapers, steam and hand plows, drills, harrows, farmers'
              carts, buckboards, and all other appliances.
            </TextNode>
            <TextNode noIndent className='text-center'>
              Estimates for Artesian Wells
            </TextNode>
            <TextNode noIndent className='text-center'>
              Apply Grosvenor Buildings, Aston
            </TextNode>

            <TextNode noIndent>
              “Glorious!” gasped our host. “That makes our third man.”
            </TextNode>

            <TextNode>
              “I had opened up inquiries in Birmingham,” said the American, “and
              my agent there has sent me this advertisement from a local paper.
              We must hustle and put the thing through. I have written to this
              man and told him that you will see him in his office to-morrow
              afternoon at four o'clock.”
            </TextNode>

            <TextNode>“You want me to see him?”</TextNode>

            <TextNode>
              “What do you say, Mr. Holmes? Don't you think it would be wiser?
              Here am I, a wandering American with a wonderful tale. Why should
              he believe what I tell him? But you are a Britisher with solid
              references, and he is bound to take notice of what you say. I
              would go with you if you wished, but I have a very busy day
              to-morrow, and I could always follow you if you are in any
              trouble.”
            </TextNode>

            <TextNode>
              “Well, I have not made such a journey for years.”
            </TextNode>

            <TextNode>
              “It is nothing, Mr. Garrideb. I have figured out our connections.
              You leave at twelve and should be there soon after two. Then you
              can be back the same night. All you have to do is to see this man,
              explain the matter, and get an affidavit of his existence. By the
              Lord!” he added hotly, “considering I've come all the way from the
              centre of America, it is surely little enough if you go a hundred
              miles in order to put this matter through.”
            </TextNode>

            <TextNode>
              “Quite so,” said Holmes. “I think what this gentleman says is very
              true.”
            </TextNode>

            <TextNode>
              Mr. Nathan Garrideb shrugged his shoulders with a disconsolate
              air. “Well, if you insist I shall go,” said he. “It is certainly
              hard for me to refuse you anything, considering the glory of hope
              that you have brought into my life.”
            </TextNode>

            <TextNode>
              “Then that is agreed,” said Holmes, “and no doubt you will let me
              have a report as soon as you can.”
            </TextNode>

            <TextNode>
              “I'll see to that,” said the American. “Well,” he added, looking
              at his watch, “I'll have to get on. I'll call to-morrow, Mr.
              Nathan, and see you off to Birmingham. Coming my way, Mr. Holmes?
              Well, then, good-bye, and we may have good news for you to-morrow
              night.”
            </TextNode>

            <TextNode>
              I noticed that my friend's face cleared when the American left the
              room, and the look of thoughtful perplexity had vanished.
            </TextNode>

            <TextNode>
              “I wish I could look over your collection, Mr. Garrideb,” said he.
              “In my profession all sorts of odd knowledge comes useful, and
              this room of yours is a storehouse of it.”
            </TextNode>

            <TextNode>
              Our client shone with pleasure and his eyes gleamed from behind
              his big glasses.
            </TextNode>

            <TextNode>
              “I had always heard, sir, that you were a very intelligent man,”
              said he. “I could take you round now if you have the time.”
            </TextNode>

            <TextNode>
              “Unfortunately, I have not. But these specimens are so well
              labelled and classified that they hardly need your personal
              explanation. If I should be able to look in to-morrow, I presume
              that there would be no objection to my glancing over them?”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page321;

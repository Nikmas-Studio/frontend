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

function Page298({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title="THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;DEVIL'S&nbsp;FOOT"
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              In recording from time to time some of the curious experiences and
              interesting recollections which I associate with my long and
              intimate friendship with Mr. Sherlock Holmes, I have continually
              been faced by difficulties caused by his own aversion to
              publicity. To his sombre and cynical spirit all popular applause
              was always abhorrent, and nothing amused him more at the end of a
              successful case than to hand over the actual exposure to some
              orthodox official, and to listen with a mocking smile to the
              general chorus of misplaced congratulation. It was indeed this
              attitude upon the part of my friend and certainly not any lack of
              interesting material which has caused me of late years to lay very
              few of my records before the public. My participation in some if
              his adventures was always a privilege which entailed discretion
              and reticence upon me.
            </TextNode>

            <TextNode>
              It was, then, with considerable surprise that I received a
              telegram from Homes last Tuesday—he has never been known to write
              where a telegram would serve—in the following terms:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                Why not tell them of the Cornish horror—strangest case I have
                handled.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              I have no idea what backward sweep of memory had brought the
              matter fresh to his mind, or what freak had caused him to desire
              that I should recount it; but I hasten, before another cancelling
              telegram may arrive, to hunt out the notes which give me the exact
              details of the case and to lay the narrative before my readers.
            </TextNode>

            <TextNode>
              It was, then, in the spring of the year 1897 that Holmes's iron
              constitution showed some symptoms of giving way in the face of
              constant hard work of a most exacting kind, aggravated, perhaps,
              by occasional indiscretions of his own. In March of that year Dr.
              Moore Agar, of Harley Street, whose dramatic introduction to
              Holmes I may some day recount, gave positive injunctions that the
              famous private agent lay aside all his cases and surrender himself
              to complete rest if he wished to avert an absolute breakdown. The
              state of his health was not a matter in which he himself took the
              faintest interest, for his mental detachment was absolute, but he
              was induced at last, on the threat of being permanently
              disqualified from work, to give himself a complete change of scene
              and air. Thus it was that in the early spring of that year we
              found ourselves together in a small cottage near Poldhu Bay, at
              the further extremity of the Cornish peninsula.
            </TextNode>

            <TextNode>
              It was a singular spot, and one peculiarly well suited to the grim
              humour of my patient. From the windows of our little whitewashed
              house, which stood high upon a grassy headland, we looked down
              upon the whole sinister semicircle of Mounts Bay, that old death
              trap of sailing vessels, with its fringe of black cliffs and
              surge-swept reefs on which innumerable seamen have met their end.
              With a northerly breeze it lies placid and sheltered, inviting the
              storm-tossed craft to tack into it for rest and protection.
            </TextNode>

            <TextNode>
              Then come the sudden swirl round of the wind, the blistering gale
              from the south-west, the dragging anchor, the lee shore, and the
              last battle in the creaming breakers. The wise mariner stands far
              out from that evil place.
            </TextNode>

            <TextNode>
              On the land side our surroundings were as sombre as on the sea. It
              was a country of rolling moors, lonely and dun-colored, with an
              occasional church tower to mark the site of some old-world
              village. In every direction upon these moors there were traces of
              some vanished race which had passed utterly away, and left as it
              sole record strange monuments of stone, irregular mounds which
              contained the burned ashes of the dead, and curious earthworks
              which hinted at prehistoric strife. The glamour and mystery of the
              place, with its sinister atmosphere of forgotten nations, appealed
              to the imagination of my friend, and he spent much of his time in
              long walks and solitary meditations upon the moor. The ancient
              Cornish language had also arrested his attention, and he had, I
              remember, conceived the idea that it was akin to the Chaldean, and
              had been largely derived from the Phoenician traders in tin. He
              had received a consignment of books upon philology and was
              settling down to develop this thesis when suddenly, to my sorrow
              and to his unfeigned delight, we found ourselves, even in that
              land of dreams, plunged into a problem at our very doors which was
              more intense, more engrossing, and infinitely more mysterious than
              any of those which had driven us from London. Our simple life and
              peaceful, healthy routine were violently interrupted, and we were
              precipitated into the midst of a series of events which caused the
              utmost excitement not only in Cornwall but throughout the whole
              west of England. Many of my readers may retain some recollection
              of what was called at the time “The Cornish Horror,” though a most
              imperfect account of the matter reached the London press. Now,
              after thirteen years, I will give the true details of this
              inconceivable affair to the public.
            </TextNode>

            <TextNode>
              I have said that scattered towers marked the villages which dotted
              this part of Cornwall. The nearest of these was the hamlet of
              Tredannick Wollas, where the cottages of a couple of hundred
              inhabitants clustered round an ancient, moss-grown church. The
              vicar of the parish, Mr. Roundhay, was something of an
              archaeologist, and as such Holmes had made his acquaintance. He
              was a middle-aged man, portly and affable, with a considerable
              fund of local lore. At his invitation we had taken tea at the
              vicarage and had come to know, also, Mr. Mortimer Tregennis, an
              independent gentleman, who increased the clergyman's scanty
              resources by taking rooms in his large, straggling house. The
              vicar, being a bachelor, was glad to come to such an arrangement,
              though he had little in common with his lodger, who was a thin,
              dark, spectacled man, with a stoop which gave the impression of
              actual, physical deformity. I remember that during our short visit
              we found the vicar garrulous, but his lodger strangely reticent, a
              sad-faced, introspective man, sitting with averted eyes, brooding
              apparently upon his own affairs.
            </TextNode>

            <TextNode>
              These were the two men who entered abruptly into our little
              sitting-room on Tuesday, March the 16th, shortly after our
              breakfast hour, as we were smoking together, preparatory to our
              daily excursion upon the moors.
            </TextNode>

            <TextNode>
              “Mr. Holmes,” said the vicar in an agitated voice, “the most
              extraordinary and tragic affair has occurred during the night. It
              is the most unheard-of business. We can only regard it as a
              special Providence that you should chance to be here at the time,
              for in all England you are the one man we need.”
            </TextNode>

            <TextNode>
              I glared at the intrusive vicar with no very friendly eyes; but
              Holmes took his pipe from his lips and sat up in his chair like an
              old hound who hears the view-halloa. He waved his hand to the
              sofa, and our palpitating visitor with his agitated companion sat
              side by side upon it. Mr. Mortimer Tregennis was more
              self-contained than the clergyman, but the twitching of his thin
              hands and the brightness of his dark eyes showed that they shared
              a common emotion.
            </TextNode>

            <TextNode>“Shall I speak or you?” he asked of the vicar.</TextNode>

            <TextNode>
              “Well, as you seem to have made the discovery, whatever it may be,
              and the vicar to have had it second-hand, perhaps you had better
              do the speaking,” said Holmes.
            </TextNode>

            <TextNode>
              I glanced at the hastily clad clergyman, with the formally dressed
              lodger seated beside him, and was amused at the surprise which
              Holmes's simple deduction had brought to their faces.
            </TextNode>

            <TextNode>
              “Perhaps I had best say a few words first,” said the vicar, “and
              then you can judge if you will listen to the details from Mr.
              Tregennis, or whether we should not hasten at once to the scene of
              this mysterious affair. I may explain, then, that our friend here
              spent last evening in the company of his two brothers, Owen and
              George, and of his sister Brenda, at their house of Tredannick
              Wartha, which is near the old stone cross upon the moor. He left
              them shortly after ten o'clock, playing cards round the
              dining-room table, in excellent health and spirits. This morning,
              being an early riser, he walked in that direction before breakfast
              and was overtaken by the carriage of Dr. Richards, who explained
              that he had just been sent for on a most urgent call to Tredannick
              Wartha. Mr. Mortimer Tregennis naturally went with him. When he
              arrived at Tredannick Wartha he found an extraordinary state of
              things. His two brothers and his sister were seated round the
              table exactly as he had left them, the cards still spread in front
              of them and the candles burned down to their sockets. The sister
              lay back stone-dead in her chair, while the two brothers sat on
              each side of her laughing, shouting, and singing, the senses
              stricken clean out of them. All three of them, the dead woman and
              the two demented men, retained upon their faces an expression of
              the utmost horror—a convulsion of terror which was dreadful to
              look upon. There was no sign of the presence of anyone in the
              house, except Mrs. Porter, the old cook and housekeeper, who
              declared that she had slept deeply and heard no sound during the
              night. Nothing had been stolen or disarranged, and there is
              absolutely no explanation of what the horror can be which has
              frightened a woman to death and two strong men out of their
              senses. There is the situation, Mr. Holmes, in a nutshell, and if
              you can help us to clear it up you will have done a great work.”
            </TextNode>

            <TextNode>
              I had hoped that in some way I could coax my companion back into
              the quiet which had been the object of our journey; but one glance
              at his intense face and contracted eyebrows told me how vain was
              now the expectation. He sat for some little time in silence,
              absorbed in the strange drama which had broken in upon our peace.
            </TextNode>

            <TextNode>
              “I will look into this matter,” he said at last. “On the face of
              it, it would appear to be a case of a very exceptional nature.
              Have you been there yourself, Mr. Roundhay?”
            </TextNode>

            <TextNode>
              “No, Mr. Holmes. Mr. Tregennis brought back the account to the
              vicarage, and I at once hurried over with him to consult you.”
            </TextNode>

            <TextNode>
              “How far is it to the house where this singular tragedy occurred?”
            </TextNode>

            <TextNode>“About a mile inland.”</TextNode>

            <TextNode>
              “Then we shall walk over together. But before we start I must ask
              you a few questions, Mr. Mortimer Tregennis.”
            </TextNode>

            <TextNode>
              The other had been silent all this time, but I had observed that
              his more controlled excitement was even greater than the obtrusive
              emotion of the clergyman. He sat with a pale, drawn face, his
              anxious gaze fixed upon Holmes, and his thin hands clasped
              convulsively together. His pale lips quivered as he listened to
              the dreadful experience which had befallen his family, and his
              dark eyes seemed to reflect something of the horror of the scene.
            </TextNode>

            <TextNode>
              “Ask what you like, Mr. Holmes,” said he eagerly. “It is a bad
              thing to speak of, but I will answer you the truth.”
            </TextNode>

            <TextNode>“Tell me about last night.”</TextNode>

            <TextNode>
              “Well, Mr. Holmes, I supped there, as the vicar has said, and my
              elder brother George proposed a game of whist afterwards. We sat
              down about nine o'clock. It was a quarter-past ten when I moved to
              go. I left them all round the table, as merry as could be.”
            </TextNode>

            <TextNode>“Who let you out?”</TextNode>

            <TextNode>
              “Mrs. Porter had gone to bed, so I let myself out. I shut the hall
              door behind me. The window of the room in which they sat was
              closed, but the blind was not drawn down. There was no change in
              door or window this morning, or any reason to think that any
              stranger had been to the house. Yet there they sat, driven clean
              mad with terror, and Brenda lying dead of fright, with her head
              hanging over the arm of the chair. I'll never get the sight of
              that room out of my mind so long as I live.”
            </TextNode>

            <TextNode>
              “The facts, as you state them, are certainly most remarkable,”
              said Holmes. “I take it that you have no theory yourself which can
              in any way account for them?”
            </TextNode>

            <TextNode>
              “It's devilish, Mr. Holmes, devilish!” cried Mortimer Tregennis.
              “It is not of this world. Something has come into that room which
              has dashed the light of reason from their minds. What human
              contrivance could do that?”
            </TextNode>

            <TextNode>
              “I fear,” said Holmes, “that if the matter is beyond humanity it
              is certainly beyond me. Yet we must exhaust all natural
              explanations before we fall back upon such a theory as this. As to
              yourself, Mr. Tregennis, I take it you were divided in some way
              from your family, since they lived together and you had rooms
              apart?”
            </TextNode>

            <TextNode>
              “That is so, Mr. Holmes, though the matter is past and done with.
              We were a family of tin-miners at Redruth, but we sold our venture
              to a company, and so retired with enough to keep us. I won't deny
              that there was some feeling about the division of the money and it
              stood between us for a time, but it was all forgiven and
              forgotten, and we were the best of friends together.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Looking back at the evening which you spent together, does
              anything stand out in your memory as throwing any possible light
              upon the tragedy? Think carefully, Mr. Tregennis, for any clue
              which can help me.”
            </TextNode>

            <TextNode>“There is nothing at all, sir.”</TextNode>

            <TextNode>“Your people were in their usual spirits?”</TextNode>

            <TextNode>“Never better.”</TextNode>
            <TextNode>
              “Were they nervous people? Did they ever show any apprehension of
              coming danger?”
            </TextNode>

            <TextNode>“Nothing of the kind.”</TextNode>

            <TextNode>
              “You have nothing to add then, which could assist me?”
            </TextNode>

            <TextNode>
              Mortimer Tregennis considered earnestly for a moment.
            </TextNode>

            <TextNode>
              “There is one thing occurs to me,” said he at last. “As we sat at
              the table my back was to the window, and my brother George, he
              being my partner at cards, was facing it. I saw him once look hard
              over my shoulder, so I turned round and looked also. The blind was
              up and the window shut, but I could just make out the bushes on
              the lawn, and it seemed to me for a moment that I saw something
              moving among them. I couldn't even say if it was man or animal,
              but I just thought there was something there. When I asked him
              what he was looking at, he told me that he had the same feeling.
              That is all that I can say.”
            </TextNode>
            <TextNode>“Did you not investigate?”</TextNode>

            <TextNode>“No; the matter passed as unimportant.”</TextNode>

            <TextNode>
              “You left them, then, without any premonition of evil?”
            </TextNode>

            <TextNode>“None at all.”</TextNode>

            <TextNode>
              “I am not clear how you came to hear the news so early this
              morning.”
            </TextNode>

            <TextNode>
              “I am an early riser and generally take a walk before breakfast.
              This morning I had hardly started when the doctor in his carriage
              overtook me. He told me that old Mrs. Porter had sent a boy down
              with an urgent message. I sprang in beside him and we drove on.
              When we got there we looked into that dreadful room. The candles
              and the fire must have burned out hours before, and they had been
              sitting there in the dark until dawn had broken. The doctor said
              Brenda must have been dead at least six hours. There were no signs
              of violence. She just lay across the arm of the chair with that
              look on her face. George and Owen were singing snatches of songs
              and gibbering like two great apes. Oh, it was awful to see! I
              couldn't stand it, and the doctor was as white as a sheet. Indeed,
              he fell into a chair in a sort of faint, and we nearly had him on
              our hands as well.”
            </TextNode>

            <TextNode>
              “Remarkable—most remarkable!” said Holmes, rising and taking his
              hat. “I think, perhaps, we had better go down to Tredannick Wartha
              without further delay. I confess that I have seldom known a case
              which at first sight presented a more singular problem.”
            </TextNode>

            <TextNode>
              Our proceedings of that first morning did little to advance the
              investigation. It was marked, however, at the outset by an
              incident which left the most sinister impression upon my mind. The
              approach to the spot at which the tragedy occurred is down a
              narrow, winding, country lane. While we made our way along it we
              heard the rattle of a carriage coming towards us and stood aside
              to let it pass. As it drove by us I caught a glimpse through the
              closed window of a horribly contorted, grinning face glaring out
              at us. Those staring eyes and gnashing teeth flashed past us like
              a dreadful vision.
            </TextNode>

            <TextNode>
              “My brothers!” cried Mortimer Tregennis, white to his lips. “They
              are taking them to Helston.”
            </TextNode>

            <TextNode>
              We looked with horror after the black carriage, lumbering upon its
              way. Then we turned our steps towards this ill-omened house in
              which they had met their strange fate.
            </TextNode>

            <TextNode>
              It was a large and bright dwelling, rather a villa than a cottage,
              with a considerable garden which was already, in that Cornish air,
              well filled with spring flowers. Towards this garden the window of
              the sitting-room fronted, and from it, according to Mortimer
              Tregennis, must have come that thing of evil which had by sheer
              horror in a single instant blasted their minds. Holmes walked
              slowly and thoughtfully among the flower-plots and along the path
              before we entered the porch. So absorbed was he in his thoughts, I
              remember, that he stumbled over the watering-pot, upset its
              contents, and deluged both our feet and the garden path. Inside
              the house we were met by the elderly Cornish housekeeper, Mrs.
              Porter, who, with the aid of a young girl, looked after the wants
              of the family. She readily answered all Holmes's questions. She
              had heard nothing in the night. Her employers had all been in
              excellent spirits lately, and she had never known them more
              cheerful and prosperous. She had fainted with horror upon entering
              the room in the morning and seeing that dreadful company round the
              table. She had, when she recovered, thrown open the window to let
              the morning air in, and had run down to the lane, whence she sent
              a farm-lad for the doctor. The lady was on her bed upstairs if we
              cared to see her. It took four strong men to get the brothers into
              the asylum carriage. She would not herself stay in the house
              another day and was starting that very afternoon to rejoin her
              family at St. Ives.
            </TextNode>

            <TextNode>
              We ascended the stairs and viewed the body. Miss Brenda Tregennis
              had been a very beautiful girl, though now verging upon middle
              age. Her dark, clear-cut face was handsome, even in death, but
              there still lingered upon it something of that convulsion of
              horror which had been her last human emotion. From her bedroom we
              descended to the sitting-room, where this strange tragedy had
              actually occurred. The charred ashes of the overnight fire lay in
              the grate. On the table were the four guttered and burned-out
              candles, with the cards scattered over its surface. The chairs had
              been moved back against the walls, but all else was as it had been
              the night before. Holmes paced with light, swift steps about the
              room; he sat in the various chairs, drawing them up and
              reconstructing their positions. He tested how much of the garden
              was visible; he examined the floor, the ceiling, and the
              fireplace; but never once did I see that sudden brightening of his
              eyes and tightening of his lips which would have told me that he
              saw some gleam of light in this utter darkness.
            </TextNode>

            <TextNode>
              “Why a fire?” he asked once. “Had they always a fire in this small
              room on a spring evening?”
            </TextNode>

            <TextNode>
              Mortimer Tregennis explained that the night was cold and damp. For
              that reason, after his arrival, the fire was lit. “What are you
              going to do now, Mr. Holmes?” he asked.
            </TextNode>

            <TextNode>
              My friend smiled and laid his hand upon my arm. “I think, Watson,
              that I shall resume that course of tobacco-poisoning which you
              have so often and so justly condemned,” said he. “With your
              permission, gentlemen, we will now return to our cottage, for I am
              not aware that any new factor is likely to come to our notice
              here. I will turn the facts over in my mid, Mr, Tregennis, and
              should anything occur to me I will certainly ommunicate with you
              and the vicar. In the meantime I wish you both good-morning.”
            </TextNode>

            <TextNode>
              It was not until long after we were back in Poldhu Cottage that
              Holmes broke his complete and absorbed silence. He sat coiled in
              his armchair, his haggard and ascetic face hardly visible amid the
              blue swirl of his tobacco smoke, his black brows drawn down, his
              forehead contracted, his eyes vacant and far away. Finally he laid
              down his pipe and sprang to his feet.
            </TextNode>

            <TextNode>
              “It won't do, Watson!” said he with a laugh. “Let us walk along
              the cliffs together and search for flint arrows. We are more
              likely to find them than clues to this problem. To let the brain
              work without sufficient material is like racing an engine. It
              racks itself to pieces. The sea air, sunshine, and patience,
              Watson—all else will come.
            </TextNode>

            <TextNode>
              “Now, let us calmly define our position, Watson,” he continued as
              we skirted the cliffs together. “Let us get a firm grip of the
              very little which we do know, so that when fresh facts arise we
              may be ready to fit them into their places. I take it, in the
              first place, that neither of us is prepared to admit diabolical
              intrusions into the affairs of men. Let us begin by ruling that
              entirely out of our minds. Very good. There remain three persons
              who have been grievously stricken by some conscious or unconscious
              human agency. That is firm ground. Now, when did this occur?
              Evidently, assuming his narrative to be true, it was immediately
              after Mr. Mortimer Tregennis had left the room. That is a very
              important point. The presumption is that it was within a few
              minutes afterwards. The cards still lay upon the table. It was
              already past their usual hour for bed. Yet they had not changed
              their position or pushed back their chairs. I repeat, then, that
              the occurrence was immediately after his departure, and not later
              than eleven o'clock last night.
            </TextNode>

            <TextNode>
              “Our next obvious step is to check, so far as we can, the
              movements of Mortimer Tregennis after he left the room. In this
              there is no difficulty, and they seem to be above suspicion.
              Knowing my methods as you do, you were, of course, conscious of
              the somewhat clumsy water-pot expedient by which I obtained a
              clearer impress of his foot than might otherwise have been
              possible. The wet, sandy path took it admirably. Last night was
              also wet, you will remember, and it was not difficult—having
              obtained a sample print—to pick out his track among others and to
              follow his movements. He appears to have walked away swiftly in
              the direction of the vicarage.
            </TextNode>

            <TextNode>
              “If, then, Mortimer Tregennis disappeared from the scene, and yet
              some outside person affected the card-players, how can we
              reconstruct that person, and how was such an impression of horror
              conveyed? Mrs. Porter may be eliminated. She is evidently
              harmless. Is there any evidence that someone crept up to the
              garden window and in some manner produced so terrific an effect
              that he drove those who saw it out of their senses? The only
              suggestion in this direction comes from Mortimer Tregennis
              himself, who says that his brother spoke about some movement in
              the garden. That is certainly remarkable, as the night was rainy,
              cloudy, and dark. Anyone who had the design to alarm these people
              would be compelled to place his very face against the glass before
              he could be seen. There is a three-foot flower-border outside this
              window, but no indication of a footmark. It is difficult to
              imagine, then, how an outsider could have made so terrible an
              impression upon the company, nor have we found any possible motive
              for so strange and elaborate an attempt. You perceive our
              difficulties, Watson?”
            </TextNode>

            <TextNode>
              “They are only too clear,” I answered with conviction.
            </TextNode>

            <TextNode>
              “And yet, with a little more material, we may prove that they are
              not insurmountable,” said Holmes. “I fancy that among your
              extensive archives, Watson, you may find some which were nearly as
              obscure. Meanwhile, we shall put the case aside until more
              accurate data are available, and devote the rest of our morning to
              the pursuit of neolithic man.”
            </TextNode>

            <TextNode>
              I may have commented upon my friend's power of mental detachment,
              but never have I wondered at it more than upon that spring morning
              in Cornwall when for two hours he discoursed upon celts,
              arrowheads, and shards, as lightly as if no sinister mystery were
              waiting for his solution. It was not until we had returned in the
              afternoon to our cottage that we found a visitor awaiting us, who
              soon brought our minds back to the matter in hand. Neither of us
              needed to be told who that visitor was. The huge body, the craggy
              and deeply seamed face with the fierce eyes and hawk-like nose,
              the grizzled hair which nearly brushed our cottage ceiling, the
              beard—golden at the fringes and white near the lips, save for the
              nicotine stain from his perpetual cigar—all these were as well
              known in London as in Africa, and could only be associated with
              the tremendous personality of Dr. Leon Sterndale, the great
              lion-hunter and explorer.
            </TextNode>

            <TextNode>
              We had heard of his presence in the district and had once or twice
              caught sight of his tall figure upon the moorland paths. He made
              no advances to us, however, nor would we have dreamed of doing so
              to him, as it was well known that it was his love of seclusion
              which caused him to spend the greater part of the intervals
              between his journeys in a small bungalow buried in the lonely wood
              of Beauchamp Arriance. Here, amid his books and his maps, he lived
              an absolutely lonely life, attending to his own simple wants and
              paying little apparent heed to the affairs of his neighbours. It
              was a surprise to me, therefore, to hear him asking Holmes in an
              eager voice whether he had made any advance in his reconstruction
              of this mysterious episode. “The county police are utterly at
              fault,” said he, “but perhaps your wider experience has suggested
              some conceivable explanation. My only claim to being taken into
              your confidence is that during my many residences here I have come
              to know this family of Tregennis very well—indeed, upon my Cornish
              mother's side I could call them cousins—and their strange fate has
              naturally been a great shock to me. I may tell you that I had got
              as far as Plymouth upon my way to Africa, but the news reached me
              this morning, and I came straight back again to help in the
              inquiry.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page298;

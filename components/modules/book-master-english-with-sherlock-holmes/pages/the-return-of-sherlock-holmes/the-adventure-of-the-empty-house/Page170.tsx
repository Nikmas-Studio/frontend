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
            <TextNode>
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
          <BookRightPartContainer></BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page170;

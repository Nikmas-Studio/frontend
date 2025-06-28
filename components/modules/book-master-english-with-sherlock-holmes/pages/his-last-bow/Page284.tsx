import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page284({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;RED&nbsp;CIRCLE'
      />
      <BookMainContainer biggerTopPadding>
        <H4>Chapter II</H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              As we walked rapidly down Howe Street I glanced back at the
              building which we had left. There, dimly outlined at the top
              window, I could see the shadow of a head, a woman's head, gazing
              tensely, rigidly, out into the night, waiting with breathless
              suspense for the renewal of that interrupted message. At the
              doorway of the Howe Street flats a man, muffled in a cravat and
              greatcoat, was leaning against the railing. He started as the
              hall-light fell upon our faces.
            </TextNode>

            <TextNode>“Holmes!” he cried.</TextNode>

            <TextNode>
              “Why, Gregson!” said my companion as he shook hands with the
              Scotland Yard detective. “Journeys end with lovers' meetings. What
              brings you here?”
            </TextNode>

            <TextNode>
              “The same reasons that bring you, I expect,” said Gregson. “How
              you got on to it I can't imagine.”
            </TextNode>

            <TextNode>
              “Different threads, but leading up to the same tangle. I've been
              taking the signals.”
            </TextNode>

            <TextNode>“Signals?”</TextNode>

            <TextNode>
              “Yes, from that window. They broke off in the middle. We came over
              to see the reason. But since it is safe in your hands I see no
              object in continuing this business.”
            </TextNode>

            <TextNode>
              “Wait a bit!” cried Gregson eagerly. “I'll do you this justice,
              Mr. Holmes, that I was never in a case yet that I didn't feel
              stronger for having you on my side. There's only the one exit to
              these flats, so we have him safe.”
            </TextNode>

            <TextNode>“Who is he?”</TextNode>

            <TextNode>
              “Well, well, we score over you for once, Mr. Holmes. You must give
              us best this time.” He struck his stick sharply upon the ground,
              on which a cabman, his whip in his hand, sauntered over from a
              four-wheeler which stood on the far side of the street. “May I
              introduce you to Mr. Sherlock Holmes?” he said to the cabman.
              “This is Mr. Leverton, of Pinkerton's American Agency.”
            </TextNode>

            <TextNode>
              “The hero of the Long Island cave mystery?” said Holmes. “Sir, I
              am pleased to meet you.”
            </TextNode>

            <TextNode>
              The American, a quiet, businesslike young man, with a
              clean-shaven, hatchet face, flushed up at the words of
              commendation. “I am on the trail of my life now, Mr. Holmes,” said
              he. “If I can get Gorgiano—”
            </TextNode>

            <TextNode>“What! Gorgiano of the Red Circle?”</TextNode>

            <TextNode>
              “Oh, he has a European fame, has he? Well, we've learned all about
              him in America. We know he is at the bottom of fifty murders, and
              yet we have nothing positive we can take him on. I tracked him
              over from New York, and I've been close to him for a week in
              London, waiting some excuse to get my hand on his collar. Mr.
              Gregson and I ran him to ground in that big tenement house, and
              there's only one door, so he can't slip us. There's three folk
              come out since he went in, but I'll swear he wasn't one of them.”
            </TextNode>

            <TextNode>
              “Mr. Holmes talks of signals,” said Gregson. “I expect, as usual,
              he knows a good deal that we don't.”
            </TextNode>

            <TextNode>
              In a few clear words Holmes explained the situation as it had
              appeared to us. The American struck his hands together with
              vexation.
            </TextNode>

            <TextNode>“He's on to us!” he cried.</TextNode>

            <TextNode>“Why do you think so?”</TextNode>

            <TextNode>
              “Well, it figures out that way, does it not? Here he is, sending
              out messages to an accomplice—there are several of his gang in
              London. Then suddenly, just as by your own account he was telling
              them that there was danger, he broke short off. What could it mean
              except that from the window he had suddenly either caught sight of
              us in the street, or in some way come to understand how close the
              danger was, and that he must act right away if he was to avoid it?
              What do you suggest, Mr. Holmes?”
            </TextNode>

            <TextNode>“That we go up at once and see for ourselves.”</TextNode>

            <TextNode>“But we have no warrant for his arrest.”</TextNode>

            <TextNode>
              “He is in unoccupied premises under suspicious circumstances,”
              said Gregson. “That is good enough for the moment. When we have
              him by the heels we can see if New York can't help us to keep him.
              I'll take the responsibility of arresting him now.”
            </TextNode>

            <TextNode>
              Our official detectives may blunder in the matter of intelligence,
              but never in that of courage. Gregson climbed the stair to arrest
              this desperate murderer with the same absolutely quiet and
              businesslike bearing with which he would have ascended the
              official staircase of Scotland Yard. The Pinkerton man had tried
              to push past him, but Gregson had firmly elbowed him back. London
              dangers were the privilege of the London force.
            </TextNode>

            <TextNode>
              The door of the left-hand flat upon the third landing was standing
              ajar. Gregson pushed it open. Within all was absolute silence and
              darkness. I struck a match and lit the detective's lantern. As I
              did so, and as the flicker steadied into a flame, we all gave a
              gasp of surprise. On the deal boards of the carpetless floor there
              was outlined a fresh track of blood. The red steps pointed towards
              us and led away from an inner room, the door of which was closed.
              Gregson flung it open and held his light full blaze in front of
              him, while we all peered eagerly over his shoulders.
            </TextNode>

            <TextNode>
              In the middle of the floor of the empty room was huddled the
              figure of an enormous man, his clean-shaven, swarthy face
              grotesquely horrible in its contortion and his head encircled by a
              ghastly crimson halo of blood, lying in a broad wet circle upon
              the white woodwork. His knees were drawn up, his hands thrown out
              in agony, and from the centre of his broad, brown, upturned throat
              there projected the white haft of a knife driven blade-deep into
              his body. Giant as he was, the man must have gone down like a
              pole-axed ox before that terrific blow. Beside his right hand a
              most formidable horn-handled, two-edged dagger lay upon the floor,
              and near it a black kid glove.
            </TextNode>

            <TextNode>
              “By George! it's Black Gorgiano himself!” cried the American
              detective. “Someone has got ahead of us this time.”
            </TextNode>

            <TextNode>
              “Here is the candle in the window, Mr. Holmes,” said Gregson.
              “Why, whatever are you doing?”
            </TextNode>

            <TextNode>
              Holmes had stepped across, had lit the candle, and was passing it
              backward and forward across the window-panes. Then he peered into
              the darkness, blew the candle out, and threw it on the floor.
            </TextNode>

            <TextNode>
              “I rather think that will be helpful,” said he. He came over and
              stood in deep thought while the two professionals were examining
              the body. “You say that three people came out form the flat while
              you were waiting downstairs,” said he at last. “Did you observe
              them closely?”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“Yes, I did.”</TextNode>

            <TextNode>
              “Was there a fellow about thirty, black-bearded, dark, of middle
              size?”
            </TextNode>

            <TextNode>“Yes; he was the last to pass me.”</TextNode>

            <TextNode>
              “That is your man, I fancy. I can give you his description, and we
              have a very excellent outline of his footmark. That should be
              enough for you.”
            </TextNode>

            <TextNode>
              “Not much, Mr. Holmes, among the millions of London.”
            </TextNode>

            <TextNode>
              “Perhaps not. That is why I thought it best to summon this lady to
              your aid.”
            </TextNode>

            <TextNode>
              We all turned round at the words. There, framed in the doorway,
              was a tall and beautiful woman—the mysterious lodger of
              Bloomsbury. Slowly she advanced, her face pale and drawn with a
              frightful apprehension, her eyes fixed and staring, her terrified
              gaze riveted upon the dark figure on the floor.
            </TextNode>

            <TextNode>
              “You have killed him!” she muttered. “Oh, Dio mio, you have killed
              him!” Then I heard a sudden sharp intake of her breath, and she
              sprang into the air with a cry of joy. Round and round the room
              she danced, her hands clapping, her dark eyes gleaming with
              delighted wonder, and a thousand pretty Italian exclamations
              pouring from her lips. It was terrible and amazing to see such a
              woman so convulsed with joy at such a sight. Suddenly she stopped
              and gazed at us all with a questioning stare.
            </TextNode>

            <TextNode>
              “But you! You are police, are you not? You have killed Giuseppe
              Gorgiano. Is it not so?”
            </TextNode>

            <TextNode>“We are police, madam.”</TextNode>

            <TextNode>She looked round into the shadows of the room.</TextNode>

            <TextNode>
              “But where, then, is Gennaro?” she asked. “He is my husband,
              Gennaro Lucca. I am Emilia Lucca, and we are both from New York.
              Where is Gennaro? He called me this moment from this window, and I
              ran with all my speed.”
            </TextNode>

            <TextNode>“It was I who called,” said Holmes.</TextNode>

            <TextNode>“You! How could you call?”</TextNode>

            <TextNode>
              “Your cipher was not difficult, madam. Your presence here was
              desirable. I knew that I had only to flash ‘Vieni’ and you would
              surely come.”
            </TextNode>

            <TextNode>
              The beautiful Italian looked with awe at my companion.
            </TextNode>

            <TextNode>
              “I do not understand how you know these things,” she said.
              “Giuseppe Gorgiano—how did he—” She paused, and then suddenly her
              face lit up with pride and delight. “Now I see it! My Gennaro! My
              splendid, beautiful Gennaro, who has guarded me safe from all
              harm, he did it, with his own strong hand he killed the monster!
              Oh, Gennaro, how wonderful you are! What woman could every be
              worthy of such a man?”
            </TextNode>

            <TextNode>
              “Well, Mrs. Lucca,” said the prosaic Gregson, laying his hand upon
              the lady's sleeve with as little sentiment as if she were a
              Notting Hill hooligan, “I am not very clear yet who you are or
              what you are; but you've said enough to make it very clear that we
              shall want you at the Yard.”
            </TextNode>

            <TextNode>
              “One moment, Gregson,” said Holmes. “I rather fancy that this lady
              may be as anxious to give us information as we can be to get it.
              You understand, madam, that your husband will be arrested and
              tried for the death of the man who lies before us? What you say
              may be used in evidence. But if you think that he has acted from
              motives which are not criminal, and which he would wish to have
              known, then you cannot serve him better than by telling us the
              whole story.”
            </TextNode>

            <TextNode>
              “Now that Gorgiano is dead we fear nothing,” said the lady. “He
              was a devil and a monster, and there can be no judge in the world
              who would punish my husband for having killed him.”
            </TextNode>

            <TextNode>
              “In that case,” said Holmes, “my suggestion is that we lock this
              door, leave things as we found them, go with this lady to her
              room, and form our opinion after we have heard what it is that she
              has to say to us.”
            </TextNode>

            <TextNode>
              Half an hour later we were seated, all four, in the small
              sitting-room of Signora Lucca, listening to her remarkable
              narrative of those sinister events, the ending of which we had
              chanced to witness. She spoke in rapid and fluent but very
              unconventional English, which, for the sake of clearness, I will
              make grammatical.
            </TextNode>

            <TextNode>
              “I was born in Posilippo, near Naples,” said she, “and was the
              daughter of Augusto Barelli, who was the chief lawyer and once the
              deputy of that part. Gennaro was in my father's employment, and I
              came to love him, as any woman must. He had neither money nor
              position—nothing but his beauty and strength and energy—so my
              father forbade the match. We fled together, were married at Bari,
              and sold my jewels to gain the money which would take us to
              America. This was four years ago, and we have been in New York
              ever since.
            </TextNode>

            <TextNode>
              “Fortune was very good to us at first. Gennaro was able to do a
              service to an Italian gentleman—he saved him from some ruffians in
              the place called the Bowery, and so made a powerful friend. His
              name was Tito Castalotte, and he was the senior partner of the
              great firm of Castalotte and Zamba, who are the chief fruit
              importers of New York. Signor Zamba is an invalid, and our new
              friend Castalotte has all power within the firm, which employs
              more than three hundred men. He took my husband into his
              employment, made him head of a department, and showed his
              good-will towards him in every way. Signor Castalotte was a
              bachelor, and I believe that he felt as if Gennaro was his son,
              and both my husband and I loved him as if he were our father. We
              had taken and furnished a little house in Brooklyn, and our whole
              future seemed assured when that black cloud appeared which was
              soon to overspread our sky.
            </TextNode>

            <TextNode>
              “One night, when Gennaro returned from his work, he brought a
              fellow-countryman back with him. His name was Gorgiano, and he had
              come also from Posilippo. He was a huge man, as you can testify,
              for you have looked upon his corpse. Not only was his body that of
              a giant but everything about him was grotesque, gigantic, and
              terrifying. His voice was like thunder in our little house. There
              was scarce room for the whirl of his great arms as he talked. His
              thoughts, his emotions, his passions, all were exaggerated and
              monstrous. He talked, or rather roared, with such energy that
              others could but sit and listen, cowed with the mighty stream of
              words. His eyes blazed at you and held you at his mercy. He was a
              terrible and wonderful man. I thank God that he is dead!
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page284;

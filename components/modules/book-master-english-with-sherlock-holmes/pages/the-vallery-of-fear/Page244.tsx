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

function Page244({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;VALLEY&nbsp;OF&nbsp;FEAR'
      />
      <BookMainContainer biggerTopPadding>
        <H4>
          Chapter III.
          <br />
          The Tragedy of Birlstone
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              Now for a moment I will ask leave to remove my own insignificant
              personality and to describe events which occurred before we
              arrived upon the scene by the light of knowledge which came to us
              afterwards. Only in this way can I make the reader appreciate the
              people concerned and the strange setting in which their fate was
              cast.
            </TextNode>

            <TextNode>
              The village of Birlstone is a small and very ancient cluster of
              half-timbered cottages on the northern border of the county of
              Sussex. For centuries it had remained unchanged; but within the
              last few years its picturesque appearance and situation have
              attracted a number of well-to-do residents, whose villas peep out
              from the woods around. These woods are locally supposed to be the
              extreme fringe of the great Weald forest, which thins away until
              it reaches the northern chalk downs. A number of small shops have
              come into being to meet the wants of the increased population; so
              there seems some prospect that Birlstone may soon grow from an
              ancient village into a modern town. It is the centre for a
              considerable area of country, since Tunbridge Wells, the nearest
              place of importance, is ten or twelve miles to the eastward, over
              the borders of Kent.
            </TextNode>

            <TextNode>
              About half a mile from the town, standing in an old park famous
              for its huge beech trees, is the ancient Manor House of Birlstone.
              Part of this venerable building dates back to the time of the
              first crusade, when Hugo de Capus built a fortalice in the centre
              of the estate, which had been granted to him by the Red King. This
              was destroyed by fire in 1543, and some of its smoke-blackened
              corner stones were used when, in Jacobean times, a brick country
              house rose upon the ruins of the feudal castle.
            </TextNode>

            <TextNode>
              The Manor House, with its many gables and its small diamond-paned
              windows, was still much as the builder had left it in the early
              seventeenth century. Of the double moats which had guarded its
              more warlike predecessor, the outer had been allowed to dry up,
              and served the humble function of a kitchen garden. The inner one
              was still there, and lay forty feet in breadth, though now only a
              few feet in depth, round the whole house. A small stream fed it
              and continued beyond it, so that the sheet of water, though
              turbid, was never ditch-like or unhealthy. The ground floor
              windows were within a foot of the surface of the water.
            </TextNode>

            <TextNode>
              The only approach to the house was over a drawbridge, the chains
              and windlass of which had long been rusted and broken. The latest
              tenants of the Manor House had, however, with characteristic
              energy, set this right, and the drawbridge was not only capable of
              being raised, but actually was raised every evening and lowered
              every morning. By thus renewing the custom of the old feudal days
              the Manor House was converted into an island during the night—a
              fact which had a very direct bearing upon the mystery which was
              soon to engage the attention of all England.
            </TextNode>

            <TextNode>
              The house had been untenanted for some years and was threatening
              to moulder into a picturesque decay when the Douglases took
              possession of it. This family consisted of only two
              individuals—John Douglas and his wife. Douglas was a remarkable
              man, both in character and in person. In age he may have been
              about fifty, with a strong-jawed, rugged face, a grizzling
              moustache, peculiarly keen gray eyes, and a wiry, vigorous figure
              which had lost nothing of the strength and activity of youth. He
              was cheery and genial to all, but somewhat offhand in his manners,
              giving the impression that he had seen life in social strata on
              some far lower horizon than the county society of Sussex.
            </TextNode>

            <TextNode>
              Yet, though looked at with some curiosity and reserve by his more
              cultivated neighbours, he soon acquired a great popularity among
              the villagers, subscribing handsomely to all local objects, and
              attending their smoking concerts and other functions, where,
              having a remarkably rich tenor voice, he was always ready to
              oblige with an excellent song. He appeared to have plenty of
              money, which was said to have been gained in the California gold
              fields, and it was clear from his own talk and that of his wife
              that he had spent a part of his life in America.
            </TextNode>

            <TextNode>
              The good impression which had been produced by his generosity and
              by his democratic manners was increased by a reputation gained for
              utter indifference to danger. Though a wretched rider, he turned
              out at every meet, and took the most amazing falls in his
              determination to hold his own with the best. When the vicarage
              caught fire he distinguished himself also by the fearlessness with
              which he reentered the building to save property, after the local
              fire brigade had given it up as impossible. Thus it came about
              that John Douglas of the Manor House had within five years won
              himself quite a reputation in Birlstone.
            </TextNode>

            <TextNode>
              His wife, too, was popular with those who had made her
              acquaintance; though, after the English fashion, the callers upon
              a stranger who settled in the county without introductions were
              few and far between. This mattered the less to her, as she was
              retiring by disposition, and very much absorbed, to all
              appearance, in her husband and her domestic duties. It was known
              that she was an English lady who had met Mr. Douglas in London, he
              being at that time a widower. She was a beautiful woman, tall,
              dark, and slender, some twenty years younger than her husband, a
              disparity which seemed in no wise to mar the contentment of their
              family life.
            </TextNode>

            <TextNode>
              It was remarked sometimes, however, by those who knew them best,
              that the confidence between the two did not appear to be complete,
              since the wife was either very reticent about her husband's past
              life, or else, as seemed more likely, was imperfectly informed
              about it. It had also been noted and commented upon by a few
              observant people that there were signs sometimes of some
              nerve-strain upon the part of Mrs. Douglas, and that she would
              display acute uneasiness if her absent husband should ever be
              particularly late in his return. On a quiet countryside, where all
              gossip is welcome, this weakness of the lady of the Manor House
              did not pass without remark, and it bulked larger upon people's
              memory when the events arose which gave it a very special
              significance.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              There was yet another individual whose residence under that roof
              was, it is true, only an intermittent one, but whose presence at
              the time of the strange happenings which will now be narrated
              brought his name prominently before the public. This was Cecil
              James Barker, of Hales Lodge, Hampstead.
            </TextNode>

            <TextNode>
              Cecil Barker's tall, loose-jointed figure was a familiar one in
              the main street of Birlstone village; for he was a frequent and
              welcome visitor at the Manor House. He was the more noticed as
              being the only friend of the past unknown life of Mr. Douglas who
              was ever seen in his new English surroundings. Barker was himself
              an undoubted Englishman; but by his remarks it was clear that he
              had first known Douglas in America and had there lived on intimate
              terms with him. He appeared to be a man of considerable wealth,
              and was reputed to be a bachelor.
            </TextNode>

            <TextNode>
              In age he was rather younger than Douglas—forty-five at the most—a
              tall, straight, broad-chested fellow with a clean-shaved,
              prize-fighter face, thick, strong, black eyebrows, and a pair of
              masterful black eyes which might, even without the aid of his very
              capable hands, clear a way for him through a hostile crowd. He
              neither rode nor shot, but spent his days in wandering round the
              old village with his pipe in his mouth, or in driving with his
              host, or in his absence with his hostess, over the beautiful
              countryside. “An easy-going, free-handed gentleman,” said Ames,
              the butler. “But, my word! I had rather not be the man that
              crossed him!” He was cordial and intimate with Douglas, and he was
              no less friendly with his wife—a friendship which more than once
              seemed to cause some irritation to the husband, so that even the
              servants were able to perceive his annoyance. Such was the third
              person who was one of the family when the catastrophe occurred.
            </TextNode>

            <TextNode>
              As to the other denizens of the old building, it will suffice out
              of a large household to mention the prim, respectable, and capable
              Ames, and Mrs. Allen, a buxom and cheerful person, who relieved
              the lady of some of her household cares. The other six servants in
              the house bear no relation to the events of the night of January
              6th.
            </TextNode>

            <TextNode>
              It was at eleven forty-five that the first alarm reached the small
              local police station, in charge of Sergeant Wilson of the Sussex
              Constabulary. Cecil Barker, much excited, had rushed up to the
              door and pealed furiously upon the bell. A terrible tragedy had
              occurred at the Manor House, and John Douglas had been murdered.
              That was the breathless burden of his message. He had hurried back
              to the house, followed within a few minutes by the police
              sergeant, who arrived at the scene of the crime a little after
              twelve o'clock, after taking prompt steps to warn the county
              authorities that something serious was afoot.
            </TextNode>

            <TextNode>
              On reaching the Manor House, the sergeant had found the drawbridge
              down, the windows lighted up, and the whole household in a state
              of wild confusion and alarm. The white-faced servants were
              huddling together in the hall, with the frightened butler wringing
              his hands in the doorway. Only Cecil Barker seemed to be master of
              himself and his emotions; he had opened the door which was nearest
              to the entrance and he had beckoned to the sergeant to follow him.
              At that moment there arrived Dr. Wood, a brisk and capable general
              practitioner from the village. The three men entered the fatal
              room together, while the horror-stricken butler followed at their
              heels, closing the door behind him to shut out the terrible scene
              from the maid servants.
            </TextNode>

            <TextNode>
              The dead man lay on his back, sprawling with outstretched limbs in
              the centre of the room. He was clad only in a pink dressing gown,
              which covered his night clothes. There were carpet slippers on his
              bare feet. The doctor knelt beside him and held down the hand lamp
              which had stood on the table. One glance at the victim was enough
              to show the healer that his presence could be dispensed with. The
              man had been horribly injured. Lying across his chest was a
              curious weapon, a shotgun with the barrel sawed off a foot in
              front of the triggers. It was clear that this had been fired at
              close range and that he had received the whole charge in the face,
              blowing his head almost to pieces. The triggers had been wired
              together, so as to make the simultaneous discharge more
              destructive.
            </TextNode>

            <TextNode>
              The country policeman was unnerved and troubled by the tremendous
              responsibility which had come so suddenly upon him. “We will touch
              nothing until my superiors arrive,” he said in a hushed voice,
              staring in horror at the dreadful head.
            </TextNode>

            <TextNode>
              “Nothing has been touched up to now,” said Cecil Barker. “I'll
              answer for that. You see it all exactly as I found it.”
            </TextNode>

            <TextNode>
              “When was that?” The sergeant had drawn out his notebook.
            </TextNode>

            <TextNode>
              “It was just half-past eleven. I had not begun to undress, and I
              was sitting by the fire in my bedroom when I heard the report. It
              was not very loud—it seemed to be muffled. I rushed down—I don't
              suppose it was thirty seconds before I was in the room.”
            </TextNode>

            <TextNode>“Was the door open?”</TextNode>

            <TextNode>
              “Yes, it was open. Poor Douglas was lying as you see him. His
              bedroom candle was burning on the table. It was I who lit the lamp
              some minutes afterward.”
            </TextNode>

            <TextNode>“Did you see no one?”</TextNode>

            <TextNode>
              “No. I heard Mrs. Douglas coming down the stair behind me, and I
              rushed out to prevent her from seeing this dreadful sight. Mrs.
              Allen, the housekeeper, came and took her away. Ames had arrived,
              and we ran back into the room once more.”
            </TextNode>

            <TextNode>
              “But surely I have heard that the drawbridge is kept up all
              night.”
            </TextNode>

            <TextNode>“Yes, it was up until I lowered it.”</TextNode>

            <TextNode>
              “Then how could any murderer have got away? It is out of the
              question! Mr. Douglas must have shot himself.”
            </TextNode>

            <TextNode>
              “That was our first idea. But see!” Barker drew aside the curtain,
              and showed that the long, diamond-paned window was open to its
              full extent. “And look at this!” He held the lamp down and
              illuminated a smudge of blood like the mark of a boot-sole upon
              the wooden sill. “Someone has stood there in getting&nbsp;out.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page244;

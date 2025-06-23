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

function Page33({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='A STUDY IN SCARLET'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “The moment for which I had waited so long had at last come. I had
              my enemies within my power. Together they could protect each
              other, but singly they were at my mercy. I did not act, however,
              with undue precipitation. My plans were already formed. There is
              no satisfaction in vengeance unless the offender has time to
              realize who it is that strikes him, and why retribution has come
              upon him. I had my plans arranged by which I should have the
              opportunity of making the man who had wronged me understand that
              his old sin had found him out. It chanced that some days before a
              gentleman who had been engaged in looking over some houses in the
              Brixton Road had dropped the key of one of them in my carriage. It
              was claimed that same evening, and returned; but in the interval I
              had taken a moulding of it, and had a duplicate constructed. By
              means of this I had access to at least one spot in this great city
              where I could rely upon being free from interruption. How to get
              Drebber to that house was the difficult problem which I had now to
              solve.
            </TextNode>

            <TextNode>
              “He walked down the road and went into one or two liquor shops,
              staying for nearly half-an-hour in the last of them. When he came
              out he staggered in his walk, and was evidently pretty well on.
              There was a hansom just in front of me, and he hailed it. I
              followed it so close that the nose of my horse was within a yard
              of his driver the whole way. We rattled across Waterloo Bridge and
              through miles of streets, until, to my astonishment, we found
              ourselves back in the Terrace in which he had boarded. I could not
              imagine what his intention was in returning there; but I went on
              and pulled up my cab a hundred yards or so from the house. He
              entered it, and his hansom drove away. Give me a glass of water,
              if you please. My mouth gets dry with the talking.”
            </TextNode>

            <TextNode>I handed him the glass, and he drank it down.</TextNode>

            <TextNode>
              “That's better,” he said. “Well, I waited for a quarter of an
              hour, or more, when suddenly there came a noise like people
              struggling inside the house. Next moment the door was flung open
              and two men appeared, one of whom was Drebber, and the other was a
              young chap whom I had never seen before. This fellow had Drebber
              by the collar, and when they came to the head of the steps he gave
              him a shove and a kick which sent him half across the road. ‘You
              hound,’ he cried, shaking his stick at him; ‘I'll teach you to
              insult an honest girl!’ He was so hot that I think he would have
              thrashed Drebber with his cudgel, only that the cur staggered away
              down the road as fast as his legs would carry him. He ran as far
              as the corner, and then, seeing my cab, he hailed me and jumped
              in. ‘Drive me to Halliday's Private Hotel,’ said he.
            </TextNode>

            <TextNode>
              “When I had him fairly inside my cab, my heart jumped so with joy
              that I feared lest at this last moment my aneurism might go wrong.
              I drove along slowly, weighing in my own mind what it was best to
              do. I might take him right out into the country, and there in some
              deserted lane have my last interview with him. I had almost
              decided upon this, when he solved the problem for me. The craze
              for drink had seized him again, and he ordered me to pull up
              outside a gin palace. He went in, leaving word that I should wait
              for him. There he remained until closing time, and when he came
              out he was so far gone that I knew the game was in my own hands.
            </TextNode>

            <TextNode>
              “Don't imagine that I intended to kill him in cold blood. It would
              only have been rigid justice if I had done so, but I could not
              bring myself to do it. I had long determined that he should have a
              show for his life if he chose to take advantage of it. Among the
              many billets which I have filled in America during my wandering
              life, I was once janitor and sweeper out of the laboratory at York
              College. One day the professor was lecturing on poisons, and he
              showed his students some alkaloid, as he called it, which he had
              extracted from some South American arrow poison, and which was so
              powerful that the least grain meant instant death. I spotted the
              bottle in which this preparation was kept, and when they were all
              gone, I helped myself to a little of it. I was a fairly good
              dispenser, so I worked this alkaloid into small, soluble pills,
              and each pill I put in a box with a similar pill made without the
              poison. I determined at the time that when I had my chance, my
              gentlemen should each have a draw out of one of these boxes, while
              I ate the pill that remained. It would be quite as deadly, and a
              good deal less noisy than firing across a handkerchief. From that
              day I had always my pill boxes about with me, and the time had now
              come when I was to use them.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “It was nearer one than twelve, and a wild, bleak night, blowing
              hard and raining in torrents. Dismal as it was outside, I was glad
              within—so glad that I could have shouted out from pure exultation.
              If any of you gentlemen have ever pined for a thing, and longed
              for it during twenty long years, and then suddenly found it within
              your reach, you would understand my feelings. I lit a cigar, and
              puffed at it to steady my nerves, but my hands were trembling, and
              my temples throbbing with excitement. As I drove, I could see old
              John Ferrier and sweet Lucy looking at me out of the darkness and
              smiling at me, just as plain as I see you all in this room. All
              the way they were ahead of me, one on each side of the horse until
              I pulled up at the house in the Brixton Road.
            </TextNode>

            <TextNode>
              “There was not a soul to be seen, nor a sound to be heard, except
              the dripping of the rain. When I looked in at the window, I found
              Drebber all huddled together in a drunken sleep. I shook him by
              the arm, ‘It's time to get out,’ I said.
            </TextNode>

            <TextNode>“ ‘All right, cabby,’ said he.</TextNode>

            <TextNode>
              “I suppose he thought we had come to the hotel that he had
              mentioned, for he got out without another word, and followed me
              down the garden. I had to walk beside him to keep him steady, for
              he was still a little top-heavy. When we came to the door, I
              opened it, and led him into the front room. I give you my word
              that all the way, the father and the daughter were walking in
              front of us.
            </TextNode>

            <TextNode>
              “ ‘It's infernally dark,’ said he, stamping about.
            </TextNode>

            <TextNode>
              “ ‘We'll soon have a light,’ I said, striking a match and putting
              it to a wax candle which I had brought with me. ‘Now, Enoch
              Drebber,’ I continued, turning to him, and holding the light to my
              own face, ‘who am I?’
            </TextNode>

            <TextNode>
              “He gazed at me with bleared, drunken eyes for a moment, and then
              I saw a horror spring up in them, and convulse his whole features,
              which showed me that he knew me. He staggered back with a livid
              face, and I saw the perspiration break out upon his brow, while
              his teeth chattered in his head. At the sight, I leaned my back
              against the door and laughed loud and long. I had always known
              that vengeance would be sweet, but I had never hoped for the
              contentment of soul which now possessed me.
            </TextNode>

            <TextNode>
              “ ‘You dog!’ I said; ‘I have hunted you from Salt Lake City to St.
              Petersburg, and you have always escaped me. Now, at last your
              wanderings have come to an end, for either you or I shall never
              see to-morrow's sun rise.’ He shrunk still further away as I
              spoke, and I could see on his face that he thought I was mad. So I
              was for the time. The pulses in my temples beat like
              sledge-hammers, and I believe I would have had a fit of some sort
              if the blood had not gushed from my nose and relieved me.
            </TextNode>

            <TextNode>
              “ ‘What do you think of Lucy Ferrier now?’ I cried, locking the
              door, and shaking the key in his face. ‘Punishment has been slow
              in coming, but it has overtaken you at last.’ I saw his coward
              lips tremble as I spoke. He would have begged for his life, but he
              knew well that it was useless.
            </TextNode>

            <TextNode>“ ‘Would you murder me?’ he stammered.</TextNode>

            <TextNode>
              “ ‘There is no murder,’ I answered. ‘Who talks of murdering a mad
              dog? What mercy had you upon my poor darling, when you dragged her
              from her slaughtered father, and bore her away to your accursed
              and shameless harem.’
            </TextNode>

            <TextNode>
              “ ‘It was not I who killed her father,’ he cried.
            </TextNode>

            <TextNode>
              “ ‘But it was you who broke her innocent heart,’ I shrieked,
              thrusting the box before him. ‘Let the high God judge between us.
              Choose and eat. There is death in one and life in the other. I
              shall take what you leave. Let us see if there is justice upon the
              earth, or if we are ruled by chance.’
            </TextNode>

            <TextNode>
              “He cowered away with wild cries and prayers for mercy, but I drew
              my knife and held it to his throat until he had obeyed me. Then I
              swallowed the other, and we stood facing one another in silence
              for a minute or more, waiting to see which was to live and which
              was to die. Shall I ever forget the look which came over his face
              when the first warning pangs told him that the poison was in his
              system? I laughed as I saw it, and held Lucy's marriage ring in
              front of his eyes. It was but for a moment, for the action of the
              alkaloid is rapid. A spasm of pain contorted his features; he
              threw his hands out in front of him, staggered, and then, with a
              hoarse cry, fell heavily upon the floor. I turned him over with my
              foot, and placed my hand upon his heart. There was no movement. He
              was dead!
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page33;

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

function Page32({
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
        <H4>
          Chapter VI.
          <br />A Continuation of the Reminiscences of
          John&nbsp;Watson,&nbsp;M.D.
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              Our prisoner's furious resistance did not apparently indicate any
              ferocity in his disposition towards ourselves, for on finding
              himself powerless, he smiled in an affable manner, and expressed
              his hopes that he had not hurt any of us in the scuffle. “I guess
              you're going to take me to the police-station,” he remarked to
              Sherlock Holmes. “My cab's at the door. If you'll loose my legs
              I'll walk down to it. I'm not so light to lift as I used to be.”
            </TextNode>

            <TextNode>
              Gregson and Lestrade exchanged glances as if they thought this
              proposition rather a bold one; but Holmes at once took the
              prisoner at his word, and loosened the towel which we had bound
              round his ankles. He rose and stretched his legs, as though to
              assure himself that they were free once more. I remember that I
              thought to myself, as I eyed him, that I had seldom seen a more
              powerfully built man; and his dark sunburned face bore an
              expression of determination and energy which was as formidable as
              his personal strength.
            </TextNode>

            <TextNode>
              “If there's a vacant place for a chief of the police, I reckon you
              are the man for it,” he said, gazing with undisguised admiration
              at my fellow-lodger. “The way you kept on my trail was a caution.”
            </TextNode>

            <TextNode>
              “You had better come with me,” said Holmes to the two detectives.
            </TextNode>

            <TextNode>“I can drive you,” said Lestrade.</TextNode>

            <TextNode>
              “Good! and Gregson can come inside with me. You too, Doctor, you
              have taken an interest in the case and may as well stick to us.”
            </TextNode>

            <TextNode>
              I assented gladly, and we all descended together. Our prisoner
              made no attempt at escape, but stepped calmly into the cab which
              had been his, and we followed him. Lestrade mounted the box,
              whipped up the horse, and brought us in a very short time to our
              destination. We were ushered into a small chamber where a police
              Inspector noted down our prisoner's name and the names of the men
              with whose murder he had been charged. The official was a
              white-faced unemotional man, who went through his duties in a dull
              mechanical way. “The prisoner will be put before the magistrates
              in the course of the week,” he said; “in the mean time, Mr.
              Jefferson Hope, have you anything that you wish to say? I must
              warn you that your words will be taken down, and may be used
              against you.”
            </TextNode>

            <TextNode>
              “I've got a good deal to say,” our prisoner said slowly. “I want
              to tell you gentlemen all about it.”
            </TextNode>

            <TextNode>
              “Hadn't you better reserve that for your trial?” asked the
              Inspector.
            </TextNode>

            <TextNode>
              “I may never be tried,” he answered. “You needn't look startled.
              It isn't suicide I am thinking of. Are you a Doctor?” He turned
              his fierce dark eyes upon me as he asked this last question.
            </TextNode>

            <TextNode>“Yes; I am,” I answered.</TextNode>

            <TextNode>
              “Then put your hand here,” he said, with a smile, motioning with
              his manacled wrists towards his chest.
            </TextNode>

            <TextNode>
              I did so; and became at once conscious of an extraordinary
              throbbing and commotion which was going on inside. The walls of
              his chest seemed to thrill and quiver as a frail building would do
              inside when some powerful engine was at work. In the silence of
              the room I could hear a dull humming and buzzing noise which
              proceeded from the same source.
            </TextNode>

            <TextNode>“Why,” I cried, “you have an aortic aneurism!”</TextNode>

            <TextNode>
              “That's what they call it,” he said, placidly. “I went to a Doctor
              last week about it, and he told me that it is bound to burst
              before many days passed. It has been getting worse for years. I
              got it from over-exposure and under-feeding among the Salt Lake
              Mountains. I've done my work now, and I don't care how soon I go,
              but I should like to leave some account of the business behind me.
              I don't want to be remembered as a common cut-throat.”
            </TextNode>

            <TextNode>
              The Inspector and the two detectives had a hurried discussion as
              to the advisability of allowing him to tell his story.
            </TextNode>

            <TextNode>
              “Do you consider, Doctor, that there is immediate danger?” the
              former asked.
            </TextNode>

            <TextNode>“Most certainly there is,” I answered.</TextNode>

            <TextNode>
              “In that case it is clearly our duty, in the interests of justice,
              to take his statement,” said the Inspector. “You are at liberty,
              sir, to give your account, which I again warn you will be taken
              down.”
            </TextNode>

            <TextNode>
              “I'll sit down, with your leave,” the prisoner said, suiting the
              action to the word. “This aneurism of mine makes me easily tired,
              and the tussle we had half an hour ago has not mended matters. I'm
              on the brink of the grave, and I am not likely to lie to you.
              Every word I say is the absolute truth, and how you use it is a
              matter of no consequence to me.”
            </TextNode>

            <TextNode>
              With these words, Jefferson Hope leaned back in his chair and
              began the following remarkable statement. He spoke in a calm and
              methodical manner, as though the events which he narrated were
              commonplace enough. I can vouch for the accuracy of the subjoined
              account, for I have had access to Lestrade's note-book, in which
              the prisoner's words were taken down exactly as they were uttered.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “It don't much matter to you why I hated these men,” he said;
              “it's enough that they were guilty of the death of two human
              beings—a father and a daughter—and that they had, therefore,
              forfeited their own lives. After the lapse of time that has passed
              since their crime, it was impossible for me to secure a conviction
              against them in any court. I knew of their guilt though, and I
              determined that I should be judge, jury, and executioner all
              rolled into one. You'd have done the same, if you have any manhood
              in you, if you had been in my place.
            </TextNode>

            <TextNode>
              “That girl that I spoke of was to have married me twenty years
              ago. She was forced into marrying that same Drebber, and broke her
              heart over it. I took the marriage ring from her dead finger, and
              I vowed that his dying eyes should rest upon that very ring, and
              that his last thoughts should be of the crime for which he was
              punished. I have carried it about with me, and have followed him
              and his accomplice over two continents until I caught them. They
              thought to tire me out, but they could not do it. If I die
              to-morrow, as is likely enough, I die knowing that my work in this
              world is done, and well done. They have perished, and by my hand.
              There is nothing left for me to hope for, or to desire.
            </TextNode>

            <TextNode>
              “They were rich and I was poor, so that it was no easy matter for
              me to follow them. When I got to London my pocket was about empty,
              and I found that I must turn my hand to something for my living.
              Driving and riding are as natural to me as walking, so I applied
              at a cabowner's office, and soon got employment. I was to bring a
              certain sum a week to the owner, and whatever was over that I
              might keep for myself. There was seldom much over, but I managed
              to scrape along somehow. The hardest job was to learn my way
              about, for I reckon that of all the mazes that ever were
              contrived, this city is the most confusing. I had a map beside me
              though, and when once I had spotted the principal hotels and
              stations, I got on pretty well.
            </TextNode>

            <TextNode>
              “It was some time before I found out where my two gentlemen were
              living; but I inquired and inquired until at last I dropped across
              them. They were at a boarding-house at Camberwell, over on the
              other side of the river. When once I found them out I knew that I
              had them at my mercy. I had grown my beard, and there was no
              chance of their recognizing me. I would dog them and follow them
              until I saw my opportunity. I was determined that they should not
              escape me again.
            </TextNode>

            <TextNode>
              “They were very near doing it for all that. Go where they would
              about London, I was always at their heels. Sometimes I followed
              them on my cab, and sometimes on foot, but the former was the
              best, for then they could not get away from me. It was only early
              in the morning or late at night that I could earn anything, so
              that I began to get behind hand with my employer. I did not mind
              that, however, as long as I could lay my hand upon the men I
              wanted.
            </TextNode>

            <TextNode>
              “They were very cunning, though. They must have thought that there
              was some chance of their being followed, for they would never go
              out alone, and never after nightfall. During two weeks I drove
              behind them every day, and never once saw them separate. Drebber
              himself was drunk half the time, but Stangerson was not to be
              caught napping. I watched them late and early, but never saw the
              ghost of a chance; but I was not discouraged, for something told
              me that the hour had almost come. My only fear was that this thing
              in my chest might burst a little too soon and leave my work
              undone.
            </TextNode>

            <TextNode>
              “At last, one evening I was driving up and down Torquay Terrace,
              as the street was called in which they boarded, when I saw a cab
              drive up to their door. Presently some luggage was brought out,
              and after a time Drebber and Stangerson followed it, and drove
              off. I whipped up my horse and kept within sight of them, feeling
              very ill at ease, for I feared that they were going to shift their
              quarters. At Euston Station they got out, and I left a boy to hold
              my horse, and followed them on to the platform. I heard them ask
              for the Liverpool train, and the guard answer that one had just
              gone and there would not be another for some hours. Stangerson
              seemed to be put out at that, but Drebber was rather pleased than
              otherwise. I got so close to them in the bustle that I could hear
              every word that passed between them. Drebber said that he had a
              little business of his own to do, and that if the other would wait
              for him he would soon rejoin him. His companion remonstrated with
              him, and reminded him that they had resolved to stick together.
              Drebber answered that the matter was a delicate one, and that he
              must go alone. I could not catch what Stangerson said to that, but
              the other burst out swearing, and reminded him that he was nothing
              more than his paid servant, and that he must not presume to
              dictate to him. On that the Secretary gave it up as a bad job, and
              simply bargained with him that if he missed the last train he
              should rejoin him at Halliday's Private Hotel; to which Drebber
              answered that he would be back on the platform before eleven, and
              made his way out of the station.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page32;

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

function Page181({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;SOLITARY&nbsp;CYCLIST'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              From the years 1894 to 1901 inclusive Mr. Sherlock Holmes was a
              very busy man. It is safe to say that there was no public case of
              any difficulty in which he was not consulted during those eight
              years, and there were hundreds of private cases, some of them of
              the most intricate and extraordinary character, in which he played
              a prominent part. Many startling successes and a few unavoidable
              failures were the outcome of this long period of continuous work.
              As I have preserved very full notes of all these cases, and was
              myself personally engaged in many of them, it may be imagined that
              it is no easy task to know which I should select to lay before the
              public. I shall, however, preserve my former rule, and give the
              preference to those cases which derive their interest not so much
              from the brutality of the crime as from the ingenuity and dramatic
              quality of the solution. For this reason I will now lay before the
              reader the facts connected with Miss Violet Smith, the solitary
              cyclist of Charlington, and the curious sequel of our
              investigation, which culminated in unexpected tragedy. It is true
              that the circumstances did not admit of any striking illustration
              of those powers for which my friend was famous, but there were
              some points about the case which made it stand out in those long
              records of crime from which I gather the material for these little
              narratives.
            </TextNode>

            <TextNode>
              On referring to my note-book for the year 1895 I find that it was
              upon Saturday, the 23rd of April, that we first heard of Miss
              Violet Smith. Her visit was, I remember, extremely unwelcome to
              Holmes, for he was immersed at the moment in a very abstruse and
              complicated problem concerning the peculiar persecution to which
              John Vincent Harden, the well-known tobacco millionaire, had been
              subjected. My friend, who loved above all things precision and
              concentration of thought, resented anything which distracted his
              attention from the matter in hand. And yet without a harshness
              which was foreign to his nature it was impossible to refuse to
              listen to the story of the young and beautiful woman, tall,
              graceful, and queenly, who presented herself at Baker Street late
              in the evening and implored his assistance and advice. It was vain
              to urge that his time was already fully occupied, for the young
              lady had come with the determination to tell her story, and it was
              evident that nothing short of force could get her out of the room
              until she had done so. With a resigned air and a somewhat weary
              smile, Holmes begged the beautiful intruder to take a seat and to
              inform us what it was that was troubling her.
            </TextNode>

            <TextNode>
              “At least it cannot be your health,” said he, as his keen eyes
              darted over her; “so ardent a bicyclist must be full of energy.”
            </TextNode>

            <TextNode>
              She glanced down in surprise at her own feet, and I observed the
              slight roughening of the side of the sole caused by the friction
              of the edge of the pedal.
            </TextNode>

            <TextNode>
              “Yes, I bicycle a good deal, Mr. Holmes, and that has something to
              do with my visit to you to-day.”
            </TextNode>

            <TextNode>
              My friend took the lady's ungloved hand and examined it with as
              close an attention and as little sentiment as a scientist would
              show to a specimen.
            </TextNode>

            <TextNode>
              “You will excuse me, I am sure. It is my business,” said he, as he
              dropped it. “I nearly fell into the error of supposing that you
              were typewriting. Of course, it is obvious that it is music. You
              observe the spatulate finger-end, Watson, which is common to both
              professions? There is a spirituality about the face, however”—he
              gently turned it towards the light—“which the typewriter does not
              generate. This lady is a musician.”
            </TextNode>

            <TextNode>“Yes, Mr. Holmes, I teach music.”</TextNode>

            <TextNode>
              “In the country, I presume, from your complexion.”
            </TextNode>

            <TextNode>
              “Yes, sir; near Farnham, on the borders of Surrey.”
            </TextNode>

            <TextNode>
              “A beautiful neighbourhood and full of the most interesting
              associations. You remember, Watson, that it was near there that we
              took Archie Stamford, the forger. Now, Miss Violet, what has
              happened to you near Farnham, on the borders of Surrey?”
            </TextNode>

            <TextNode>
              The young lady, with great clearness and composure, made the
              following curious statement:—
            </TextNode>

            <TextNode>
              “My father is dead, Mr. Holmes. He was James Smith, who conducted
              the orchestra at the old Imperial Theatre. My mother and I were
              left without a relation in the world except one uncle, Ralph
              Smith, who went to Africa twenty-five years ago, and we have never
              had a word from him since. When father died we were left very
              poor, but one day we were told that there was an advertisement
              in&nbsp;
              <span className='italic'>The Times</span> inquiring for our
              whereabouts. You can imagine how excited we were, for we thought
              that someone had left us a fortune. We went at once to the lawyer
              whose name was given in the paper. There we met two gentlemen, Mr.
              Carruthers and Mr. Woodley, who were home on a visit from South
              Africa. They said that my uncle was a friend of theirs, that he
              died some months before in great poverty in Johannesburg, and that
              he had asked them with his last breath to hunt up his relations
              and see that they were in no want. It seemed strange to us that
              Uncle Ralph, who took no notice of us when he was alive, should be
              so careful to look after us when he was dead; but Mr. Carruthers
              explained that the reason was that my uncle had just heard of the
              death of his brother, and so felt responsible for our fate.”
            </TextNode>

            <TextNode>
              “Excuse me,” said Holmes; “when was this interview?”
            </TextNode>

            <TextNode>“Last December—four months ago.”</TextNode>

            <TextNode>“Pray proceed.”</TextNode>

            <TextNode>
              “Mr. Woodley seemed to me to be a most odious person. He was for
              ever making eyes at me—a coarse, puffy-faced, red-moustached young
              man, with his hair plastered down on each side of his forehead. I
              thought that he was perfectly hateful—and I was sure that Cyril
              would not wish me to know such a person.”
            </TextNode>

            <TextNode>“Oh, Cyril is his name!” said Holmes, smiling.</TextNode>

            <TextNode>The young lady blushed and laughed.</TextNode>

            <TextNode>
              “Yes, Mr. Holmes; Cyril Morton, an electrical engineer, and we
              hope to be married at the end of the summer. Dear me, how did I
              get talking about him? What I wished to say was that Mr. Woodley
              was perfectly odious, but that Mr. Carruthers, who was a much
              older man, was more agreeable. He was a dark, sallow,
              clean-shaven, silent person; but he had polite manners and a
              pleasant smile. He inquired how we were left, and on finding that
              we were very poor he suggested that I should come and teach music
              to his only daughter, aged ten. I said that I did not like to
              leave my mother, on which he suggested that I should go home to
              her every week-end, and he offered me a hundred a year, which was
              certainly splendid pay. So it ended by my accepting, and I went
              down to Chiltern Grange, about six miles from Farnham. Mr.
              Carruthers was a widower, but he had engaged a lady-housekeeper, a
              very respectable, elderly person, called Mrs. Dixon, to look after
              his establishment. The child was a dear, and everything promised
              well. Mr. Carruthers was very kind and very musical, and we had
              most pleasant evenings together. Every week-end I went home to my
              mother in town.
            </TextNode>

            <TextNode>
              “The first flaw in my happiness was the arrival of the
              red-moustached Mr. Woodley. He came for a visit of a week, and oh,
              it seemed three months to me! He was a dreadful person, a bully to
              everyone else, but to me something infinitely worse. He made
              odious love to me, boasted of his wealth, said that if I married
              him I would have the finest diamonds in London, and finally, when
              I would have nothing to do with him, he seized me in his arms one
              day after dinner—he was hideously strong—and he swore that he
              would not let me go until I had kissed him. Mr. Carruthers came in
              and tore him off from me, on which he turned upon his own host,
              knocking him down and cutting his face open. That was the end of
              his visit, as you can imagine. Mr. Carruthers apologized to me
              next day, and assured me that I should never be exposed to such an
              insult again. I have not seen Mr. Woodley since.
            </TextNode>

            <TextNode>
              “And now, Mr. Holmes, I come at last to the special thing which
              has caused me to ask your advice to-day. You must know that every
              Saturday forenoon I ride on my bicycle to Farnham Station in order
              to get the 12.22 to town. The road from Chiltern Grange is a
              lonely one, and at one spot it is particularly so, for it lies for
              over a mile between Charlington Heath upon one side and the woods
              which lie round Charlington Hall upon the other. You could not
              find a more lonely tract of road anywhere, and it is quite rare to
              meet so much as a cart, or a peasant, until you reach the high
              road near Crooksbury Hill. Two weeks ago I was passing this place
              when I chanced to look back over my shoulder, and about two
              hundred yards behind me I saw a man, also on a bicycle. He seemed
              to be a middle-aged man, with a short, dark beard. I looked back
              before I reached Farnham, but the man was gone, so I thought no
              more about it. But you can imagine how surprised I was, Mr.
              Holmes, when on my return on the Monday I saw the same man on the
              same stretch of road. My astonishment was increased when the
              incident occurred again, exactly as before, on the following
              Saturday and Monday. He always kept his distance and did not
              molest me in any way, but still it certainly was very odd. I
              mentioned it to Mr. Carruthers, who seemed interested in what I
              said, and told me that he had ordered a horse and trap, so that in
              future I should not pass over these lonely roads without some
              companion.
            </TextNode>

            <TextNode>
              “The horse and trap were to have come this week, but for some
              reason they were not delivered, and again I had to cycle to the
              station. That was this morning. You can think that I looked out
              when I came to Charlington Heath, and there, sure enough, was the
              man, exactly as he had been the two weeks before. He always kept
              so far from me that I could not clearly see his face, but it was
              certainly someone whom I did not know. He was dressed in a dark
              suit with a cloth cap. The only thing about his face that I could
              clearly see was his dark beard. To-day I was not alarmed, but I
              was filled with curiosity, and I determined to find out who he was
              and what he wanted. I slowed down my machine, but he slowed down
              his. Then I stopped altogether, but he stopped also. Then I laid a
              trap for him. There is a sharp turning of the road, and I pedalled
              very quickly round this, and then I stopped and waited. I expected
              him to shoot round and pass me before he could stop. But he never
              appeared. Then I went back and looked round the corner. I could
              see a mile of road, but he was not on it. To make it the more
              extraordinary, there was no side road at this point down which he
              could have gone.”
            </TextNode>

            <TextNode>
              Holmes chuckled and rubbed his hands. “This case certainly
              presents some features of its own,” said he. “How much time
              elapsed between your turning the corner and your discovery that
              the road was clear?”
            </TextNode>

            <TextNode>“Two or three minutes.”</TextNode>

            <TextNode>
              “Then he could not have retreated down the road, and you say that
              there are no side roads?”
            </TextNode>

            <TextNode>“None.”</TextNode>

            <TextNode>
              “Then he certainly took a footpath on one side or the other.”
            </TextNode>

            <TextNode>
              “It could not have been on the side of the heath or I should have
              seen him.”
            </TextNode>

            <TextNode>
              “So by the process of exclusion we arrive at the fact that he made
              his way towards Charlington Hall, which, as I understand, is
              situated in its own grounds on one side of the road. Anything
              else?”
            </TextNode>

            <TextNode>
              “Nothing, Mr. Holmes, save that I was so perplexed that I felt I
              should not be happy until I had seen you and had your advice.”
            </TextNode>

            <TextNode>Holmes sat in silence for some little time.</TextNode>

            <TextNode>
              “Where is the gentleman to whom you are engaged?” he asked, at
              last.
            </TextNode>

            <TextNode>
              “He is in the Midland Electrical Company, at Coventry.”
            </TextNode>

            <TextNode>“He would not pay you a surprise visit?”</TextNode>

            <TextNode>“Oh, Mr. Holmes! As if I should not know him!”</TextNode>

            <TextNode>“Have you had any other admirers?”</TextNode>

            <TextNode>“Several before I knew Cyril.”</TextNode>

            <TextNode>“And since?”</TextNode>

            <TextNode>
              “There was this dreadful man, Woodley, if you can call him an
              admirer.”
            </TextNode>

            <TextNode>“No one else?”</TextNode>

            <TextNode>Our fair client seemed a little confused.</TextNode>

            <TextNode>“Who was he?” asked Holmes.</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Oh, it may be a mere fancy of mine; but it has seemed to me
              sometimes that my employer, Mr. Carruthers, takes a great deal of
              interest in me. We are thrown rather together. I play his
              accompaniments in the evening. He has never said anything. He is a
              perfect gentleman. But a girl always knows.”
            </TextNode>

            <TextNode>
              “Ha!” Holmes looked grave. “What does he do for a living?”
            </TextNode>

            <TextNode>“He is a rich man.”</TextNode>

            <TextNode>“No carriages or horses?”</TextNode>

            <TextNode>
              “Well, at least he is fairly well-to-do. But he goes into the City
              two or three times a week. He is deeply interested in South
              African gold shares.”
            </TextNode>

            <TextNode>
              “You will let me know any fresh development, Miss Smith. I am very
              busy just now, but I will find time to make some inquiries into
              your case. In the meantime take no step without letting me know.
              Good-bye, and I trust that we shall have nothing but good news
              from you.”
            </TextNode>

            <TextNode>
              “It is part of the settled order of Nature that such a girl should
              have followers,” said Holmes, as he pulled at his meditative pipe,
              “but for choice not on bicycles in lonely country roads. Some
              secretive lover, beyond all doubt. But there are curious and
              suggestive details about the case, Watson.”
            </TextNode>

            <TextNode>“That he should appear only at that point?”</TextNode>

            <TextNode>
              “Exactly. Our first effort must be to find who are the tenants of
              Charlington Hall. Then, again, how about the connection between
              Carruthers and Woodley, since they appear to be men of such a
              different type? How came they both to be so keen upon looking up
              Ralph Smith's relations? One more point. What sort of a menage is
              it which pays double the market price for a governess, but does
              not keep a horse although six miles from the station? Odd,
              Watson—very odd!”
            </TextNode>

            <TextNode>“You will go down?”</TextNode>

            <TextNode>
              “No, my dear fellow, you will go down. This may be some trifling
              intrigue, and I cannot break my other important research for the
              sake of it. On Monday you will arrive early at Farnham; you will
              conceal yourself near Charlington Heath; you will observe these
              facts for yourself, and act as your own judgment advises. Then,
              having inquired as to the occupants of the Hall, you will come
              back to me and report. And now, Watson, not another word of the
              matter until we have a few solid stepping-stones on which we may
              hope to get across to our solution.”
            </TextNode>

            <TextNode>
              We had ascertained from the lady that she went down upon the
              Monday by the train which leaves Waterloo at 9.50, so I started
              early and caught the 9.13. At Farnham Station I had no difficulty
              in being directed to Charlington Heath. It was impossible to
              mistake the scene of the young lady's adventure, for the road runs
              between the open heath on one side and an old yew hedge upon the
              other, surrounding a park which is studded with magnificent trees.
              There was a main gateway of lichen-studded stone, each side pillar
              surmounted by mouldering heraldic emblems; but besides this
              central carriage drive I observed several points where there were
              gaps in the hedge and paths leading through them. The house was
              invisible from the road, but the surroundings all spoke of gloom
              and decay.
            </TextNode>

            <TextNode>
              The heath was covered with golden patches of flowering gorse,
              gleaming magnificently in the light of the bright spring sunshine.
              Behind one of these clumps I took up my position, so as to command
              both the gateway of the Hall and a long stretch of the road upon
              either side. It had been deserted when I left it, but now I saw a
              cyclist riding down it from the opposite direction to that in
              which I had come. He was clad in a dark suit, and I saw that he
              had a black beard. On reaching the end of the Charlington grounds
              he sprang from his machine and led it through a gap in the hedge,
              disappearing from my view.
            </TextNode>

            <TextNode>
              A quarter of an hour passed and then a second cyclist appeared.
              This time it was the young lady coming from the station. I saw her
              look about her as she came to the Charlington hedge. An instant
              later the man emerged from his hiding-place, sprang upon his
              cycle, and followed her. In all the broad landscape those were the
              only moving figures, the graceful girl sitting very straight upon
              her machine, and the man behind her bending low over his
              handle-bar, with a curiously furtive suggestion in every movement.
              She looked back at him and slowed her pace. He slowed also. She
              stopped. He at once stopped too, keeping two hundred yards behind
              her. Her next movement was as unexpected as it was spirited. She
              suddenly whisked her wheels round and dashed straight at him! He
              was as quick as she, however, and darted off in desperate flight.
              Presently she came back up the road again, her head haughtily in
              the air, not deigning to take any further notice of her silent
              attendant. He had turned also, and still kept his distance until
              the curve of the road hid them from my sight.
            </TextNode>

            <TextNode>
              I remained in my hiding-place, and it was well that I did so, for
              presently the man reappeared cycling slowly back. He turned in at
              the Hall gates and dismounted from his machine. For some few
              minutes I could see him standing among the trees. His hands were
              raised and he seemed to be settling his necktie. Then he mounted
              his cycle and rode away from me down the drive towards the Hall. I
              ran across the heath and peered through the trees. Far away I
              could catch glimpses of the old grey building with its bristling
              Tudor chimneys, but the drive ran through a dense shrubbery, and I
              saw no more of my man.
            </TextNode>

            <TextNode>
              However, it seemed to me that I had done a fairly good morning's
              work, and I walked back in high spirits to Farnham. The local
              house-agent could tell me nothing about Charlington Hall, and
              referred me to a well-known firm in Pall Mall. There I halted on
              my way home, and met with courtesy from the representative. No, I
              could not have Charlington Hall for the summer. I was just too
              late. It had been let about a month ago. Mr. Williamson was the
              name of the tenant. He was a respectable elderly gentleman. The
              polite agent was afraid he could say no more, as the affairs of
              his clients were not matters which he could discuss.
            </TextNode>

            <TextNode>
              Mr. Sherlock Holmes listened with attention to the long report
              which I was able to present to him that evening, but it did not
              elicit that word of curt praise which I had hoped for and should
              have valued. On the contrary, his austere face was even more
              severe than usual as he commented upon the things that I had done
              and the things that I had not.
            </TextNode>

            <TextNode>
              “Your hiding-place, my dear Watson, was very faulty. You should
              have been behind the hedge; then you would have had a close view
              of this interesting person. As it is you were some hundreds of
              yards away, and can tell me even less than Miss Smith. She thinks
              she does not know the man; I am convinced she does. Why,
              otherwise, should he be so desperately anxious that she should not
              get so near him as to see his features? You describe him as
              bending over the handle-bar. Concealment again, you see. You
              really have done remarkably badly. He returns to the house and you
              want to find out who he is. You come to a London house-agent!”
            </TextNode>

            <TextNode>
              “What should I have done?” I cried, with some heat.
            </TextNode>

            <TextNode>
              “Gone to the nearest public-house. That is the centre of country
              gossip. They would have told you every name, from the master to
              the scullery-maid. Williamson! It conveys nothing to my mind. If
              he is an elderly man he is not this active cyclist who sprints
              away from that athletic young lady's pursuit. What have we gained
              by your expedition? The knowledge that the girl's story is true. I
              never doubted it. That there is a connection between the cyclist
              and the Hall. I never doubted that either. That the Hall is
              tenanted by Williamson. Who's the better for that? Well, well, my
              dear sir, don't look so depressed. We can do little more until
              next Saturday, and in the meantime I may make one or two inquiries
              myself.”
            </TextNode>

            <TextNode>
              Next morning we had a note from Miss Smith, recounting shortly and
              accurately the very incidents which I had seen, but the pith of
              the letter lay in the postscript:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “I am sure that you will respect my confidence, Mr. Holmes, when
                I tell you that my place here has become difficult owing to the
                fact that my employer has proposed marriage to me. I am
                convinced that his feelings are most deep and most honourable.
                At the same time my promise is, of course, given. He took my
                refusal very seriously, but also very gently. You can
                understand, however, that the situation is a little strained.”
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “Our young friend seems to be getting into deep waters,” said
              Holmes, thoughtfully, as he finished the letter. “The case
              certainly presents more features of interest and more possibility
              of development than I had originally thought. I should be none the
              worse for a quiet, peaceful day in the country, and I am inclined
              to run down this afternoon and test one or two theories which I
              have formed.”
            </TextNode>

            <TextNode>
              Holmes's quiet day in the country had a singular termination, for
              he arrived at Baker Street late in the evening with a cut lip and
              a discoloured lump upon his forehead, besides a general air of
              dissipation which would have made his own person the fitting
              object of a Scotland Yard investigation. He was immensely tickled
              by his own adventures, and laughed heartily as he recounted them.
            </TextNode>

            <TextNode>
              “I get so little active exercise that it is always a treat,” said
              he. “You are aware that I have some proficiency in the good old
              British sport of boxing. Occasionally it is of service. To-day,
              for example, I should have come to very ignominious grief without
              it.”
            </TextNode>

            <TextNode>I begged him to tell me what had occurred.</TextNode>

            <TextNode>
              “I found that country pub which I had already recommended to your
              notice, and there I made my discreet inquiries. I was in the bar,
              and a garrulous landlord was giving me all that I wanted.
              Williamson is a white-bearded man, and he lives alone with a small
              staff of servants at the Hall. There is some rumour that he is or
              has been a clergyman; but one or two incidents of his short
              residence at the Hall struck me as peculiarly unecclesiastical. I
              have already made some inquiries at a clerical agency, and they
              tell me that there was a man of that name in orders whose career
              has been a singularly dark one. The landlord further informed me
              that there are usually week-end visitors—‘a warm lot, sir’—at the
              Hall, and especially one gentleman with a red moustache, Mr.
              Woodley by name, who was always there. We had got as far as this
              when who should walk in but the gentleman himself, who had been
              drinking his beer in the tap-room and had heard the whole
              conversation. Who was I? What did I want? What did I mean by
              asking questions? He had a fine flow of language, and his
              adjectives were very vigorous. He ended a string of abuse by a
              vicious back-hander which I failed to entirely avoid. The next few
              minutes were delicious. It was a straight left against a slogging
              ruffian. I emerged as you see me. Mr. Woodley went home in a cart.
              So ended my country trip, and it must be confessed that, however
              enjoyable, my day on the Surrey border has not been much more
              profitable than your own.”
            </TextNode>

            <TextNode>
              The Thursday brought us another letter from our client.
            </TextNode>

            <Indent>
              <TextNode noIndent>
                You will not be surprised, Mr. Holmes [said she] to hear that I
                am leaving Mr. Carruthers's employment. Even the high pay cannot
                reconcile me to the discomforts of my situation. On Saturday I
                come up to town and I do not intend to return. Mr. Carruthers
                has got a trap, and so the dangers of the lonely road, if there
                ever were any dangers, are now over.
              </TextNode>
              <TextNode>
                As to the special cause of my leaving, it is not merely the
                strained situation with Mr. Carruthers, but it is the
                reappearance of that odious man, Mr. Woodley. He was always
                hideous, but he looks more awful than ever now, for he appears
                to have had an accident and he is much disfigured. I saw him out
                of the window, but I am glad to say I did not meet him. He had a
                long talk with Mr. Carruthers, who seemed much excited
                afterwards. Woodley must be staying in the neighbourhood, for he
                did not sleep here, and yet I caught a glimpse of him again this
                morning slinking about in the shrubbery. I would sooner have a
                savage wild animal loose about the place. I loathe and fear him
                more than I can say. How can Mr. Carruthers endure such a
                creature for a moment? However, all my troubles will be over on
                Saturday.
              </TextNode>
            </Indent>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page181;

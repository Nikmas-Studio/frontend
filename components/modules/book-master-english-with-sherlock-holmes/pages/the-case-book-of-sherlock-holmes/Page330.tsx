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

function Page330({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;CREEPING&nbsp;MAN'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              Mr. Sherlock Holmes was always of opinion that I should publish
              the singular facts connected with Professor Presbury, if only to
              dispel once for all the ugly rumours which some twenty years ago
              agitated the university and were echoed in the learned societies
              of London. There were, however, certain obstacles in the way, and
              the true history of this curious case remained entombed in the tin
              box which contains so many records of my friend's adventures. Now
              we have at last obtained permission to ventilate the facts which
              formed one of the very last cases handled by Holmes before his
              retirement from practice. Even now a certain reticence and
              discretion have to be observed in laying the matter before the
              public.
            </TextNode>

            <TextNode>
              It was one Sunday evening early in September of the year 1903 that
              I received one of Holmes's laconic messages:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                Come at once if convenient—if inconvenient come all the same.
              </TextNode>

              <TextNode noIndent className='italic'>
                — S. H.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              The relations between us in those latter days were peculiar. He
              was a man of habits, narrow and concentrated habits, and I had
              become one of them. As an institution I was like the violin, the
              shag tobacco, the old black pipe, the index books, and others
              perhaps less excusable. When it was a case of active work and a
              comrade was needed upon whose nerve he could place some reliance,
              my role was obvious. But apart from this I had uses. I was a
              whetstone for his mind. I stimulated him. He liked to think aloud
              in my presence. His remarks could hardly be said to be made to
              me—many of them would have been as appropriately addressed to his
              bedstead—but none the less, having formed the habit, it had become
              in some way helpful that I should register and interject. If I
              irritated him by a certain methodical slowness in my mentality,
              that irritation served only to make his own flame-like intuitions
              and impressions flash up the more vividly and swiftly. Such was my
              humble role in our alliance.
            </TextNode>

            <TextNode>
              When I arrived at Baker Street I found him huddled up in his
              armchair with updrawn knees, his pipe in his mouth and his brow
              furrowed with thought. It was clear that he was in the throes of
              some vexatious problem. With a wave of his hand he indicated my
              old armchair, but otherwise for half an hour he gave no sign that
              he was aware of my presence. Then with a start he seemed to come
              from his reverie, and with his usual whimsical smile he greeted me
              back to what had once been my home.
            </TextNode>

            <TextNode>
              “You will excuse a certain abstraction of mind, my dear Watson,”
              said he. “Some curious facts have been submitted to me within the
              last twenty-four hours, and they in turn have given rise to some
              speculations of a more general character. I have serious thoughts
              of writing a small monograph upon the uses of dogs in the work of
              the detective.”
            </TextNode>

            <TextNode>
              “But surely, Holmes, this has been explored,” said I.
              “Bloodhounds—sleuth-hounds—”
            </TextNode>

            <TextNode>
              “No, no, Watson, that side of the matter is, of course, obvious.
              But there is another which is far more subtle. You may recollect
              that in the case which you, in your sensational way, coupled with
              the Copper Beeches, I was able, by watching the mind of the child,
              to form a deduction as to the criminal habits of the very smug and
              respectable father.”
            </TextNode>

            <TextNode>“Yes, I remember it well.”</TextNode>

            <TextNode>
              “My line of thoughts about dogs is analogous. A dog reflects the
              family life. Whoever saw a frisky dog in a gloomy family, or a sad
              dog in a happy one? Snarling people have snarling dogs, dangerous
              people have dangerous ones. And their passing moods may reflect
              the passing moods of others.”
            </TextNode>

            <TextNode>
              I shook my head. “Surely, Holmes, this is a little far-fetched,”
              said I.
            </TextNode>

            <TextNode>
              He had refilled his pipe and resumed his seat, taking no notice of
              my comment.
            </TextNode>

            <TextNode>
              “The practical application of what I have said is very close to
              the problem which I am investigating. It is a tangled skein, you
              understand, and I am looking for a loose end. One possible loose
              end lies in the question: Why does Professor Presbury's wolfhound,
              Roy, endeavour to bite him?”
            </TextNode>

            <TextNode>
              I sank back in my chair in some disappointment. Was it for so
              trivial a question as this that I had been summoned from my work?
              Holmes glanced across at me.
            </TextNode>

            <TextNode>
              “The same old Watson!” said he. “You never learn that the gravest
              issues may depend upon the smallest things. But is it not on the
              face of it strange that a staid, elderly philosopher—you've heard
              of Presbury, of course, the famous Camford physiologist?—that such
              a man, whose friend has been his devoted wolfhound, should now
              have been twice attacked by his own dog? What do you make of it?”
            </TextNode>

            <TextNode>“The dog is ill.”</TextNode>

            <TextNode>
              “Well, that has to be considered. But he attacks no one else, nor
              does he apparently molest his master, save on very special
              occasions. Curious, Watson—very curious. But young Mr. Bennett is
              before his time if that is his ring. I had hoped to have a longer
              chat with you before he came.”
            </TextNode>

            <TextNode>
              There was a quick step on the stairs, a sharp tap at the door, and
              a moment later the new client presented himself. He was a tall,
              handsome youth about thirty, well dressed and elegant, but with
              something in his bearing which suggested the shyness of the
              student rather than the self-possession of the man of the world.
              He shook hands with Holmes, and then looked with some surprise at
              me.
            </TextNode>

            <TextNode>
              “This matter is very delicate, Mr. Holmes,” he said. “Consider the
              relation in which I stand to Professor Presbury both privately and
              publicly. I really can hardly justify myself if I speak before any
              third person.”
            </TextNode>

            <TextNode>
              “Have no fear, Mr. Bennett. Dr. Watson is the very soul of
              discretion, and I can assure you that this is a matter in which I
              am very likely to need an assistant.”
            </TextNode>

            <TextNode>
              “As you like, Mr. Holmes. You will, I am sure, understand my
              having some reserves in the matter.”
            </TextNode>

            <TextNode>
              “You will appreciate it, Watson, when I tell you that this
              gentleman, Mr. Trevor Bennett, is professional assistant to the
              great scientist, lives under his roof, and is engaged to his only
              daughter. Certainly we must agree that the professor has every
              claim upon his loyalty and devotion. But it may best be shown by
              taking the necessary steps to clear up this strange mystery.”
            </TextNode>

            <TextNode>
              “I hope so, Mr. Holmes. That is my one object. Does Dr. Watson
              know the situation?”
            </TextNode>

            <TextNode>“I have not had time to explain it.”</TextNode>

            <TextNode>
              “Then perhaps I had better go over the ground again before
              explaining some fresh developments.”
            </TextNode>

            <TextNode>
              “I will do so myself,” said Holmes, “in order to show that I have
              the events in their due order. The professor, Watson, is a man of
              European reputation. His life has been academic. There has never
              been a breath of scandal. He is a widower with one daughter,
              Edith. He is, I gather, a man of very virile and positive, one
              might almost say combative, character. So the matter stood until a
              very few months ago.
            </TextNode>

            <TextNode>
              “Then the current of his life was broken. He is sixty-one years of
              age, but he became engaged to the daughter of Professor Morphy,
              his colleague in the chair of comparative anatomy. It was not, as
              I understand, the reasoned courting of an elderly man but rather
              the passionate frenzy of youth, for no one could have shown
              himself a more devoted lover. The lady, Alice Morphy, was a very
              perfect girl both in mind and body, so that there was every excuse
              for the professor's infatuation. None the less, it did not meet
              with full approval in his own family.”
            </TextNode>

            <TextNode>
              “We thought it rather excessive,” said our visitor.
            </TextNode>

            <TextNode>
              “Exactly. Excessive and a little violent and unnatural. Professor
              Presbury was rich, however, and there was no objection upon the
              part of the father. The daughter, however, had other views, and
              there were already several candidates for her hand, who, if they
              were less eligible from a worldly point of view, were at least
              more of an age. The girl seemed to like the professor in spite of
              his eccentricities. It was only age which stood in the way.
            </TextNode>

            <TextNode>
              “About this time a little mystery suddenly clouded the normal
              routine of the professor's life. He did what he had never done
              before. He left home and gave no indication where he was going. He
              was away a fortnight and returned looking rather travel-worn. He
              made no allusion to where he had been, although he was usually the
              frankest of men. It chanced, however, that our client here, Mr.
              Bennett, received a letter from a fellow-student in Prague, who
              said that he was glad to have seen Professor Presbury there,
              although he had not been able to talk to him. Only in this way did
              his own household learn where he had been.
            </TextNode>

            <TextNode>
              “Now comes the point. From that time onward a curious change came
              over the professor. He became furtive and sly. Those around him
              had always the feeling that he was not the man that they had
              known, but that he was under some shadow which had darkened his
              higher qualities. His intellect was not affected. His lectures
              were as brilliant as ever. But always there was something new,
              something sinister and unexpected. His daughter, who was devoted
              to him, tried again and again to resume the old relations and to
              penetrate this mask which her father seemed to have put on. You,
              sir, as I understand, did the same—but all was in vain. And now,
              Mr. Bennett, tell in your own words the incident of the letters.”
            </TextNode>

            <TextNode>
              “You must understand, Dr. Watson, that the professor had no
              secrets from me. If I were his son or his younger brother I could
              not have more completely enjoyed his confidence. As his secretary
              I handled every paper which came to him, and I opened and
              subdivided his letters. Shortly after his return all this was
              changed. He told me that certain letters might come to him from
              London which would be marked by a cross under the stamp. These
              were to be set aside for his own eyes only. I may say that several
              of these did pass through my hands, that they had the E. C. mark,
              and were in an illiterate handwriting. If he answered them at all
              the answers did not pass through my hands nor into the
              letter-basket in which our correspondence was collected.”
            </TextNode>

            <TextNode>“And the box,” said Holmes.</TextNode>

            <TextNode>
              “Ah, yes, the box. The professor brought back a little wooden box
              from his travels. It was the one thing which suggested a
              Continental tour, for it was one of those quaint carved things
              which one associates with Germany. This he placed in his
              instrument cupboard. One day, in looking for a canula, I took up
              the box. To my surprise he was very angry, and reproved me in
              words which were quite savage for my curiosity. It was the first
              time such a thing had happened, and I was deeply hurt. I
              endeavoured to explain that it was a mere accident that I had
              touched the box, but all the evening I was conscious that he
              looked at me harshly and that the incident was rankling in his
              mind.” Mr. Bennett drew a little diary book from his pocket. “That
              was on July 2d,” said he.
            </TextNode>

            <TextNode>
              “You are certainly an admirable witness,” said Holmes. “I may need
              some of these dates which you have noted.”
            </TextNode>

            <TextNode>
              “I learned method among other things from my great teacher. From
              the time that I observed abnormality in his behaviour I felt that
              it was my duty to study his case. Thus I have it here that it was
              on that very day, July 2d, that Roy attacked the professor as he
              came from his study into the hall. Again, on July 11th, there was
              a scene of the same sort, and then I have a note of yet another
              upon July 20th. After that we had to banish Roy to the stables. He
              was a dear, affectionate animal—but I fear I weary you.”
            </TextNode>

            <TextNode>
              Mr. Bennett spoke in a tone of reproach, for it was very clear
              that Holmes was not listening. His face was rigid and his eyes
              gazed abstractedly at the ceiling. With an effort he recovered
              himself.
            </TextNode>

            <TextNode>
              “Singular! Most singular!” he murmured. “These details were new to
              me, Mr. Bennett. I think we have now fairly gone over the old
              ground, have we not? But you spoke of some fresh developments.”
            </TextNode>

            <TextNode>
              The pleasant, open face of our visitor clouded over, shadowed by
              some grim remembrance. “What I speak of occurred the night before
              last,” said he. “I was lying awake about two in the morning, when
              I was aware of a dull muffled sound coming from the passage. I
              opened my door and peeped out. I should explain that the professor
              sleeps at the end of the passage—”
            </TextNode>

            <TextNode>“The date being—?” asked Holmes.</TextNode>

            <TextNode>
              Our visitor was clearly annoyed at so irrelevant an interruption.
            </TextNode>

            <TextNode>
              “I have said, sir, that it was the night before last—that is,
              September 4th.”
            </TextNode>

            <TextNode>Holmes nodded and smiled.</TextNode>

            <TextNode>“Pray continue,” said he.</TextNode>

            <TextNode>
              “He sleeps at the end of the passage and would have to pass my
              door in order to reach the staircase. It was a really terrifying
              experience, Mr. Holmes. I think that I am as strong-nerved as my
              neighbours, but I was shaken by what I saw. The passage was dark
              save that one window halfway along it threw a patch of light. I
              could see that something was coming along the passage, something
              dark and crouching. Then suddenly it emerged into the light, and I
              saw that it was he. He was crawling, Mr. Holmes—crawling! He was
              not quite on his hands and knees. I should rather say on his hands
              and feet, with his face sunk between his hands. Yet he seemed to
              move with ease. I was so paralyzed by the sight that it was not
              until he had reached my door that I was able to step forward and
              ask if I could assist him. His answer was extraordinary. He sprang
              up, spat out some atrocious word at me, and hurried on past me,
              and down the staircase. I waited about for an hour, but he did not
              come back. It must have been daylight before he regained his
              room.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Well, Watson, what make you of that?” asked Holmes with the air
              of the pathologist who presents a rare specimen.
            </TextNode>

            <TextNode>
              “Lumbago, possibly. I have known a severe attack make a man walk
              in just such a way, and nothing would be more trying to the
              temper.”
            </TextNode>

            <TextNode>
              “Good, Watson! You always keep us flat-footed on the ground. But
              we can hardly accept lumbago, since he was able to stand erect in
              a moment.”
            </TextNode>

            <TextNode>
              “He was never better in health,” said Bennett. “In fact, he is
              stronger than I have known him for years. But there are the facts,
              Mr. Holmes. It is not a case in which we can consult the police,
              and yet we are utterly at our wit's end as to what to do, and we
              feel in some strange way that we are drifting towards disaster.
              Edith—Miss Presbury—feels as I do, that we cannot wait passively
              any longer.”
            </TextNode>

            <TextNode>
              “It is certainly a very curious and suggestive case. What do you
              think, Watson?”
            </TextNode>

            <TextNode>
              “Speaking as a medical man,” said I, “it appears to be a case for
              an alienist. The old gentleman's cerebral processes were disturbed
              by the love affair. He made a journey abroad in the hope of
              breaking himself of the passion. His letters and the box may be
              connected with some other private transaction—a loan, perhaps, or
              share certificates, which are in the box.”
            </TextNode>

            <TextNode>
              “And the wolfhound no doubt disapproved of the financial bargain.
              No, no, Watson, there is more in it than this. Now, I can only
              suggest—”
            </TextNode>

            <TextNode>
              What Sherlock Holmes was about to suggest will never be known, for
              at this moment the door opened and a young lady was shown into the
              room. As she appeared Mr. Bennett sprang up with a cry and ran
              forward with his hands out to meet those which she had herself
              outstretched.
            </TextNode>

            <TextNode>“Edith, dear! Nothing the matter, I hope?”</TextNode>

            <TextNode>
              “I felt I must follow you. Oh, Jack, I have been so dreadfully
              frightened! It is awful to be there alone.”
            </TextNode>

            <TextNode>
              “Mr. Holmes, this is the young lady I spoke of. This is my
              fiancee.”
            </TextNode>

            <TextNode>
              “We were gradually coming to that conclusion, were we not,
              Watson?” Holmes answered with a smile. “I take it, Miss Presbury,
              that there is some fresh development in the case, and that you
              thought we should know?”
            </TextNode>

            <TextNode>
              Our new visitor, a bright, handsome girl of a conventional English
              type, smiled back at Holmes as she seated herself beside Mr.
              Bennett.
            </TextNode>

            <TextNode>
              “When I found Mr. Bennett had left his hotel I thought I should
              probably find him here. Of course, he had told me that he would
              consult you. But, oh, Mr. Holmes, can you do nothing for my poor
              father?”
            </TextNode>

            <TextNode>
              “I have hopes, Miss Presbury, but the case is still obscure.
              Perhaps what you have to say may throw some fresh light upon it.”
            </TextNode>

            <TextNode>
              “It was last night, Mr. Holmes. He had been very strange all day.
              I am sure that there are times when he has no recollection of what
              he does. He lives as in a strange dream. Yesterday was such a day.
              It was not my father with whom I lived. His outward shell was
              there, but it was not really he.”
            </TextNode>

            <TextNode>“Tell me what happened.”</TextNode>

            <TextNode>
              “I was awakened in the night by the dog barking most furiously.
              Poor Roy, he is chained now near the stable. I may say that I
              always sleep with my door locked; for, as Jack—as Mr. Bennett—will
              tell you, we all have a feeling of impending danger. My room is on
              the second floor. It happened that the blind was up in my window,
              and there was bright moonlight outside. As I lay with my eyes
              fixed upon the square of light, listening to the frenzied barkings
              of the dog, I was amazed to see my father's face looking in at me.
              Mr. Holmes, I nearly died of surprise and horror. There it was
              pressed against the window-pane, and one hand seemed to be raised
              as if to push up the window. If that window had opened, I think I
              should have gone mad. It was no delusion, Mr. Holmes. Don't
              deceive yourself by thinking so. I dare say it was twenty seconds
              or so that I lay paralyzed and watched the face. Then it vanished,
              but I could not—I could not spring out of bed and look out after
              it. I lay cold and shivering till morning. At breakfast he was
              sharp and fierce in manner, and made no allusion to the adventure
              of the night. Neither did I, but I gave an excuse for coming to
              town—and here I am.”
            </TextNode>

            <TextNode>
              Holmes looked thoroughly surprised at Miss Presbury's narrative.
            </TextNode>

            <TextNode>
              “My dear young lady, you say that your room is on the second
              floor. Is there a long ladder in the garden?”
            </TextNode>

            <TextNode>
              “No, Mr. Holmes, that is the amazing part of it. There is no
              possible way of reaching the window—and yet he was there.”
            </TextNode>

            <TextNode>
              “The date being September 5th,” said Holmes. “That certainly
              complicates matters.”
            </TextNode>

            <TextNode>
              It was the young lady's turn to look surprised. “This is the
              second time that you have alluded to the date, Mr. Holmes,” said
              Bennett. “Is it possible that it has any bearing upon the case?”
            </TextNode>

            <TextNode>
              “It is possible—very possible—and yet I have not my full material
              at present.”
            </TextNode>

            <TextNode>
              “Possibly you are thinking of the connection between insanity and
              phases of the moon?”
            </TextNode>

            <TextNode>
              “No, I assure you. It was quite a different line of thought.
              Possibly you can leave your notebook with me, and I will check the
              dates. Now I think, Watson, that our line of action is perfectly
              clear. This young lady has informed us—and I have the greatest
              confidence in her intuition—that her father remembers little or
              nothing which occurs upon certain dates. We will therefore call
              upon him as if he had given us an appointment upon such a date. He
              will put it down to his own lack of memory. Thus we will open our
              campaign by having a good close view of him.”
            </TextNode>

            <TextNode>
              “That is excellent,” said Mr. Bennett. “I warn you, however, that
              the professor is irascible and violent at times.”
            </TextNode>

            <TextNode>
              Holmes smiled. “There are reasons why we should come at once—very
              cogent reasons if my theories hold good. To-morrow, Mr. Bennett,
              will certainly see us in Camford. There is, if I remember right,
              an inn called the Chequers where the port used to be above
              mediocrity and the linen was above reproach. I think, Watson, that
              our lot for the next few days might lie in less pleasant places.”
            </TextNode>

            <TextNode>
              Monday morning found us on our way to the famous university
              town—an easy effort on the part of Holmes, who had no roots to
              pull up, but one which involved frantic planning and hurrying on
              my part, as my practice was by this time not inconsiderable.
              Holmes made no allusion to the case until after we had deposited
              our suitcases at the ancient hostel of which he had spoken.
            </TextNode>

            <TextNode>
              “I think, Watson, that we can catch the professor just before
              lunch. He lectures at eleven and should have an interval at home.”
            </TextNode>

            <TextNode>“What possible excuse have we for calling?”</TextNode>

            <TextNode>Holmes glanced at his notebook.</TextNode>

            <TextNode>
              “There was a period of excitement upon August 26th. We will assume
              that he is a little hazy as to what he does at such times. If we
              insist that we are there by appointment I think he will hardly
              venture to contradict us. Have you the effrontery necessary to put
              it through?”
            </TextNode>

            <TextNode>“We can but try.”</TextNode>

            <TextNode>
              “Excellent, Watson! Compound of the Busy Bee and Excelsior. We can
              but try—the motto of the firm. A friendly native will surely guide
              us.”
            </TextNode>

            <TextNode>
              Such a one on the back of a smart hansom swept us past a row of
              ancient colleges and, finally turning into a tree-lined drive,
              pulled up at the door of a charming house, girt round with lawns
              and covered with purple wisteria. Professor Presbury was certainly
              surrounded with every sign not only of comfort but of luxury. Even
              as we pulled up, a grizzled head appeared at the front window, and
              we were aware of a pair of keen eyes from under shaggy brows which
              surveyed us through large horn glasses. A moment later we were
              actually in his sanctum, and the mysterious scientist, whose
              vagaries had brought us from London, was standing before us. There
              was certainly no sign of eccentricity either in his manner or
              appearance, for he was a portly, large-featured man, grave, tall,
              and frock-coated, with the dignity of bearing which a lecturer
              needs. His eyes were his most remarkable feature, keen, observant,
              and clever to the verge of cunning.
            </TextNode>

            <TextNode>
              He looked at our cards. “Pray sit down, gentlemen. What can I do
              for you?”
            </TextNode>

            <TextNode>Mr. Holmes smiled amiably.</TextNode>

            <TextNode>
              “It was the question which I was about to put to you, Professor.”
            </TextNode>

            <TextNode>“To me, sir!”</TextNode>

            <TextNode>
              “Possibly there is some mistake. I heard through a second person
              that Professor Presbury of Camford had need of my services.”
            </TextNode>

            <TextNode>
              “Oh, indeed!” It seemed to me that there was a malicious sparkle
              in the intense gray eyes. “You heard that, did you? May I ask the
              name of your informant?”
            </TextNode>

            <TextNode>
              “I am sorry, Professor, but the matter was rather confidential. If
              I have made a mistake there is no harm done. I can only express my
              regret.”
            </TextNode>

            <TextNode>
              “Not at all. I should wish to go further into this matter. It
              interests me. Have you any scrap of writing, any letter or
              telegram, to bear out your assertion?”
            </TextNode>

            <TextNode>“No, I have not.”</TextNode>

            <TextNode>
              “I presume that you do not go so far as to assert that I summoned
              you?”
            </TextNode>

            <TextNode>
              “I would rather answer no questions,” said Holmes.
            </TextNode>

            <TextNode>
              “No, I dare say not,” said the professor with asperity. “However,
              that particular one can be answered very easily without your aid.”
            </TextNode>

            <TextNode>
              He walked across the room to the bell. Our London friend, Mr.
              Bennett, answered the call.
            </TextNode>

            <TextNode>
              “Come in, Mr. Bennett. These two gentlemen have come from London
              under the impression that they have been summoned. You handle all
              my correspondence. Have you a note of anything going to a person
              named Holmes?”
            </TextNode>

            <TextNode>“No, sir,” Bennett answered with a flush.</TextNode>

            <TextNode>
              “That is conclusive,” said the professor, glaring angrily at my
              companion. “Now, sir”—he leaned forward with his two hands upon
              the table—“it seems to me that your position is a very
              questionable one.”
            </TextNode>

            <TextNode>Holmes shrugged his shoulders.</TextNode>

            <TextNode>
              “I can only repeat that I am sorry that we have made a needless
              intrusion.”
            </TextNode>

            <TextNode>
              “Hardly enough, Mr. Holmes!” the old man cried in a high screaming
              voice, with extraordinary malignancy upon his face. He got between
              us and the door as he spoke, and he shook his two hands at us with
              furious passion. “You can hardly get out of it so easily as that.”
              His face was convulsed, and he grinned and gibbered at us in his
              senseless rage. I am convinced that we should have had to fight
              our way out of the room if Mr. Bennett had not intervened.
            </TextNode>

            <TextNode>
              “My dear Professor,” he cried, “consider your position! Consider
              the scandal at the university! Mr. Holmes is a well-known man. You
              cannot possibly treat him with such discourtesy.”
            </TextNode>

            <TextNode>
              Sulkily our host—if I may call him so—cleared the path to the
              door. We were glad to find ourselves outside the house and in the
              quiet of the tree-lined drive. Holmes seemed greatly amused by the
              episode.
            </TextNode>

            <TextNode>
              “Our learned friend's nerves are somewhat out of order,” said he.
              “Perhaps our intrusion was a little crude, and yet we have gained
              that personal contact which I desired. But, dear me, Watson, he is
              surely at our heels. The villain still pursues us.”
            </TextNode>

            <TextNode>
              There were the sounds of running feet behind, but it was, to my
              relief, not the formidable professor but his assistant who
              appeared round the curve of the drive. He came panting up to us.
            </TextNode>

            <TextNode>
              “I am so sorry, Mr. Holmes. I wished to apologize.”
            </TextNode>

            <TextNode>
              “My dear sir, there is no need. It is all in the way of
              professional experience.”
            </TextNode>

            <TextNode>
              “I have never seen him in a more dangerous mood. But he grows more
              sinister. You can understand now why his daughter and I are
              alarmed. And yet his mind is perfectly clear.”
            </TextNode>

            <TextNode>
              “Too clear!” said Holmes. “That was my miscalculation. It is
              evident that his memory is much more reliable than I had thought.
              By the way, can we, before we go, see the window of Miss
              Presbury's room?”
            </TextNode>

            <TextNode>
              Mr. Bennett pushed his way through some shrubs, and we had a view
              of the side of the house.
            </TextNode>

            <TextNode>“It is there. The second on the left.”</TextNode>

            <TextNode>
              “Dear me, it seems hardly accessible. And yet you will observe
              that there is a creeper below and a water-pipe above which give
              some foothold.”
            </TextNode>

            <TextNode>
              “I could not climb it myself,” said Mr. Bennett.
            </TextNode>

            <TextNode>
              “Very likely. It would certainly be a dangerous exploit for any
              normal man.”
            </TextNode>

            <TextNode>
              “There was one other thing I wish to tell you, Mr. Holmes. I have
              the address of the man in London to whom the professor writes. He
              seems to have written this morning, and I got it from his
              blotting-paper. It is an ignoble position for a trusted secretary,
              but what else can I do?”
            </TextNode>

            <TextNode>
              Holmes glanced at the paper and put it into his pocket.
            </TextNode>

            <TextNode>
              “Dorak—a curious name. Slavonic, I imagine. Well, it is an
              important link in the chain. We return to London this afternoon,
              Mr. Bennett. I see no good purpose to be served by our remaining.
              We cannot arrest the professor because he has done no crime, nor
              can we place him under constraint, for he cannot be proved to be
              mad. No action is as yet possible.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page330;

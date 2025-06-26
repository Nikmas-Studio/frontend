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

function Page198({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;THREE&nbsp;STUDENTS'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              It was in the year '95 that a combination of events, into which I
              need not enter, caused Mr. Sherlock Holmes and myself to spend
              some weeks in one of our great University towns, and it was during
              this time that the small but instructive adventure which I am
              about to relate befell us. It will be obvious that any details
              which would help the reader to exactly identify the college or the
              criminal would be injudicious and offensive. So painful a scandal
              may well be allowed to die out. With due discretion the incident
              itself may, however, be described, since it serves to illustrate
              some of those qualities for which my friend was remarkable. I will
              endeavour in my statement to avoid such terms as would serve to
              limit the events to any particular place, or give a clue as to the
              people concerned.
            </TextNode>

            <TextNode>
              We were residing at the time in furnished lodgings close to a
              library where Sherlock Holmes was pursuing some laborious
              researches in early English charters—researches which led to
              results so striking that they may be the subject of one of my
              future narratives. Here it was that one evening we received a
              visit from an acquaintance, Mr. Hilton Soames, tutor and lecturer
              at the College of St. Luke's. Mr. Soames was a tall, spare man, of
              a nervous and excitable temperament. I had always known him to be
              restless in his manner, but on this particular occasion he was in
              such a state of uncontrollable agitation that it was clear
              something very unusual had occurred.
            </TextNode>

            <TextNode>
              “I trust, Mr. Holmes, that you can spare me a few hours of your
              valuable time. We have had a very painful incident at St. Luke's,
              and really, but for the happy chance of your being in the town, I
              should have been at a loss what to do.”
            </TextNode>

            <TextNode>
              “I am very busy just now, and I desire no distractions,” my friend
              answered. “I should much prefer that you called in the aid of the
              police.”
            </TextNode>

            <TextNode>
              “No, no, my dear sir; such a course is utterly impossible. When
              once the law is evoked it cannot be stayed again, and this is just
              one of those cases where, for the credit of the college, it is
              most essential to avoid scandal. Your discretion is as well known
              as your powers, and you are the one man in the world who can help
              me. I beg you, Mr. Holmes, to do what you can.”
            </TextNode>

            <TextNode>
              My friend's temper had not improved since he had been deprived of
              the congenial surroundings of Baker Street. Without his
              scrap-books, his chemicals, and his homely untidiness, he was an
              uncomfortable man. He shrugged his shoulders in ungracious
              acquiescence, while our visitor in hurried words and with much
              excitable gesticulation poured forth his story.
            </TextNode>

            <TextNode>
              “I must explain to you, Mr. Holmes, that to-morrow is the first
              day of the examination for the Fortescue Scholarship. I am one of
              the examiners. My subject is Greek, and the first of the papers
              consists of a large passage of Greek translation which the
              candidate has not seen. This passage is printed on the examination
              paper, and it would naturally be an immense advantage if the
              candidate could prepare it in advance. For this reason great care
              is taken to keep the paper secret.
            </TextNode>

            <TextNode>
              “To-day about three o'clock the proofs of this paper arrived from
              the printers. The exercise consists of half a chapter of
              Thucydides. I had to read it over carefully, as the text must be
              absolutely correct. At four-thirty my task was not yet completed.
              I had, however, promised to take tea in a friend's rooms, so I
              left the proof upon my desk. I was absent rather more than an
              hour.
            </TextNode>

            <TextNode>
              “You are aware, Mr. Holmes, that our college doors are double—a
              green baize one within and a heavy oak one without. As I
              approached my outer door I was amazed to see a key in it. For an
              instant I imagined that I had left my own there, but on feeling in
              my pocket I found that it was all right. The only duplicate which
              existed, so far as I knew, was that which belonged to my servant,
              Bannister, a man who has looked after my room for ten years, and
              whose honesty is absolutely above suspicion. I found that the key
              was indeed his, that he had entered my room to know if I wanted
              tea, and that he had very carelessly left the key in the door when
              he came out. His visit to my room must have been within a very few
              minutes of my leaving it. His forgetfulness about the key would
              have mattered little upon any other occasion, but on this one day
              it has produced the most deplorable consequences.
            </TextNode>

            <TextNode>
              “The moment I looked at my table I was aware that someone had
              rummaged among my papers. The proof was in three long slips. I had
              left them all together. Now, I found that one of them was lying on
              the floor, one was on the side table near the window, and the
              third was where I had left it.”
            </TextNode>

            <TextNode>Holmes stirred for the first time.</TextNode>

            <TextNode>
              “The first page on the floor, the second in the window, the third
              where you left it,” said he.
            </TextNode>

            <TextNode>
              “Exactly, Mr. Holmes. You amaze me. How could you possibly know
              that?”
            </TextNode>

            <TextNode>
              “Pray continue your very interesting statement.”
            </TextNode>

            <TextNode>
              “For an instant I imagined that Bannister had taken the
              unpardonable liberty of examining my papers. He denied it,
              however, with the utmost earnestness, and I am convinced that he
              was speaking the truth. The alternative was that someone passing
              had observed the key in the door, had known that I was out, and
              had entered to look at the papers. A large sum of money is at
              stake, for the scholarship is a very valuable one, and an
              unscrupulous man might very well run a risk in order to gain an
              advantage over his fellows.
            </TextNode>

            <TextNode>
              “Bannister was very much upset by the incident. He had nearly
              fainted when we found that the papers had undoubtedly been
              tampered with. I gave him a little brandy and left him collapsed
              in a chair while I made a most careful examination of the room. I
              soon saw that the intruder had left other traces of his presence
              besides the rumpled papers. On the table in the window were
              several shreds from a pencil which had been sharpened. A broken
              tip of lead was lying there also. Evidently the rascal had copied
              the paper in a great hurry, had broken his pencil, and had been
              compelled to put a fresh point to it.”
            </TextNode>

            <TextNode>
              “Excellent!” said Holmes, who was recovering his good-humour as
              his attention became more engrossed by the case. “Fortune has been
              your friend.”
            </TextNode>

            <TextNode>
              “This was not all. I have a new writing-table with a fine surface
              of red leather. I am prepared to swear, and so is Bannister, that
              it was smooth and unstained. Now I found a clean cut in it about
              three inches long—not a mere scratch, but a positive cut. Not only
              this, but on the table I found a small ball of black dough, or
              clay, with specks of something which looks like sawdust in it. I
              am convinced that these marks were left by the man who rifled the
              papers. There were no footmarks and no other evidence as to his
              identity. I was at my wits' ends, when suddenly the happy thought
              occurred to me that you were in the town, and I came straight
              round to put the matter into your hands. Do help me, Mr. Holmes!
              You see my dilemma. Either I must find the man or else the
              examination must be postponed until fresh papers are prepared, and
              since this cannot be done without explanation there will ensue a
              hideous scandal, which will throw a cloud not only on the college,
              but on the University. Above all things I desire to settle the
              matter quietly and discreetly.”
            </TextNode>

            <TextNode>
              “I shall be happy to look into it and to give you such advice as I
              can,” said Holmes, rising and putting on his overcoat. “The case
              is not entirely devoid of interest. Had anyone visited you in your
              room after the papers came to you?”
            </TextNode>

            <TextNode>
              “Yes; young Daulat Ras, an Indian student who lives on the same
              stair, came in to ask me some particulars about the examination.”
            </TextNode>

            <TextNode>“For which he was entered?”</TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>“And the papers were on your table?”</TextNode>

            <TextNode>“To the best of my belief they were rolled up.”</TextNode>

            <TextNode>“But might be recognised as proofs?”</TextNode>

            <TextNode>“Possibly.”</TextNode>

            <TextNode>“No one else in your room?”</TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>
              “Did anyone know that these proofs would be there?”
            </TextNode>

            <TextNode>“No one save the printer.”</TextNode>

            <TextNode>“Did this man Bannister know?”</TextNode>

            <TextNode>“No, certainly not. No one knew.”</TextNode>

            <TextNode>“Where is Bannister now?”</TextNode>

            <TextNode>
              “He was very ill, poor fellow. I left him collapsed in the chair.
              I was in such a hurry to come to you.”
            </TextNode>

            <TextNode>“You left your door open?”</TextNode>

            <TextNode>“I locked up the papers first.”</TextNode>

            <TextNode>
              “Then it amounts to this, Mr. Soames, that unless the Indian
              student recognised the roll as being proofs, the man who tampered
              with them came upon them accidentally without knowing that they
              were there.”
            </TextNode>

            <TextNode>“So it seems to me.”</TextNode>

            <TextNode>Holmes gave an enigmatic smile.</TextNode>

            <TextNode>
              “Well,” said he, “let us go round. Not one of your cases,
              Watson—mental, not physical. All right; come if you want to. Now,
              Mr. Soames—at your disposal!”
            </TextNode>

            <TextNode>
              The sitting-room of our client opened by a long, low, latticed
              window on to the ancient lichen-tinted court of the old college. A
              Gothic arched door led to a worn stone staircase. On the ground
              floor was the tutor's room. Above were three students, one on each
              story. It was already twilight when we reached the scene of our
              problem. Holmes halted and looked earnestly at the window. Then he
              approached it, and, standing on tiptoe with his neck craned, he
              looked into the room.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “He must have entered through the door. There is no opening except
              the one pane,” said our learned guide.
            </TextNode>

            <TextNode>
              “Dear me!” said Holmes, and he smiled in a singular way as he
              glanced at our companion. “Well, if there is nothing to be learned
              here we had best go inside.”
            </TextNode>

            <TextNode>
              The lecturer unlocked the outer door and ushered us into his room.
              We stood at the entrance while Holmes made an examination of the
              carpet.
            </TextNode>

            <TextNode>
              “I am afraid there are no signs here,” said he. “One could hardly
              hope for any upon so dry a day. Your servant seems to have quite
              recovered. You left him in a chair, you say; which chair?”
            </TextNode>

            <TextNode>“By the window there.”</TextNode>

            <TextNode>
              “I see. Near this little table. You can come in now. I have
              finished with the carpet. Let us take the little table first. Of
              course, what has happened is very clear. The man entered and took
              the papers, sheet by sheet, from the central table. He carried
              them over to the window table, because from there he could see if
              you came across the courtyard, and so could effect an escape.”
            </TextNode>

            <TextNode>
              “As a matter of fact he could not,” said Soames, “for I entered by
              the side door.”
            </TextNode>

            <TextNode>
              “Ah, that's good! Well, anyhow, that was in his mind. Let me see
              the three strips. No finger impressions—no! Well, he carried over
              this one first and he copied it. How long would it take him to do
              that, using every possible contraction? A quarter of an hour, not
              less. Then he tossed it down and seized the next. He was in the
              midst of that when your return caused him to make a very hurried
              retreat—very hurried, since he had not time to replace the papers
              which would tell you that he had been there. You were not aware of
              any hurrying feet on the stair as you entered the outer door?”
            </TextNode>

            <TextNode>“No, I can't say I was.”</TextNode>

            <TextNode>
              “Well, he wrote so furiously that he broke his pencil, and had, as
              you observe, to sharpen it again. This is of interest, Watson. The
              pencil was not an ordinary one. It was above the usual size, with
              a soft lead; the outer colour was dark blue, the maker's name was
              printed in silver lettering, and the piece remaining is only about
              an inch and a half long. Look for such a pencil, Mr. Soames, and
              you have got your man. When I add that he possesses a large and
              very blunt knife, you have an additional aid.”
            </TextNode>

            <TextNode>
              Mr. Soames was somewhat overwhelmed by this flood of information.
              “I can follow the other points,” said he, “but really, in this
              matter of the length—”
            </TextNode>

            <TextNode>
              Holmes held out a small chip with the letters NN and a space of
              clear wood after them.
            </TextNode>

            <TextNode>“You see?”</TextNode>

            <TextNode>“No, I fear that even now—”</TextNode>

            <TextNode>
              “Watson, I have always done you an injustice. There are others.
              What could this NN be? It is at the end of a word. You are aware
              that Johann Faber is the most common maker's name. Is it not clear
              that there is just as much of the pencil left as usually follows
              the Johann?” He held the small table sideways to the electric
              light. “I was hoping that if the paper on which he wrote was thin
              some trace of it might come through upon this polished surface.
              No, I see nothing. I don't think there is anything more to be
              learned here. Now for the central table. This small pellet is, I
              presume, the black, doughy mass you spoke of. Roughly pyramidal in
              shape and hollowed out, I perceive. As you say, there appear to be
              grains of sawdust in it. Dear me, this is very interesting. And
              the cut—a positive tear, I see. It began with a thin scratch and
              ended in a jagged hole. I am much indebted to you for directing my
              attention to this case, Mr. Soames. Where does that door lead to?”
            </TextNode>

            <TextNode>“To my bedroom.”</TextNode>

            <TextNode>“Have you been in it since your adventure?”</TextNode>

            <TextNode>“No; I came straight away for you.”</TextNode>

            <TextNode>
              “I should like to have a glance round. What a charming,
              old-fashioned room! Perhaps you will kindly wait a minute until I
              have examined the floor. No, I see nothing. What about this
              curtain? You hang your clothes behind it. If anyone were forced to
              conceal himself in this room he must do it there, since the bed is
              too low and the wardrobe too shallow. No one there, I suppose?”
            </TextNode>

            <TextNode>
              As Holmes drew the curtain I was aware, from some little rigidity
              and alertness of his attitude, that he was prepared for an
              emergency. As a matter of fact the drawn curtain disclosed nothing
              but three or four suits of clothes hanging from a line of pegs.
              Holmes turned away and stooped suddenly to the floor.
            </TextNode>

            <TextNode>“Halloa! What's this?” said he.</TextNode>

            <TextNode>
              It was a small pyramid of black, putty-like stuff, exactly like
              the one upon the table of the study. Holmes held it out on his
              open palm in the glare of the electric light.
            </TextNode>

            <TextNode>
              “Your visitor seems to have left traces in your bedroom as well as
              in your sitting-room, Mr. Soames.”
            </TextNode>

            <TextNode>“What could he have wanted there?”</TextNode>

            <TextNode>
              “I think it is clear enough. You came back by an unexpected way,
              and so he had no warning until you were at the very door. What
              could he do? He caught up everything which would betray him and he
              rushed into your bedroom to conceal himself.”
            </TextNode>

            <TextNode>
              “Good gracious, Mr. Holmes, do you mean to tell me that all the
              time I was talking to Bannister in this room we had the man
              prisoner if we had only known it?”
            </TextNode>

            <TextNode>“So I read it.”</TextNode>

            <TextNode>
              “Surely there is another alternative, Mr. Holmes. I don't know
              whether you observed my bedroom window?”
            </TextNode>

            <TextNode>
              “Lattice-paned, lead framework, three separate windows, one
              swinging on hinge and large enough to admit a man.”
            </TextNode>

            <TextNode>
              “Exactly. And it looks out on an angle of the courtyard so as to
              be partly invisible. The man might have effected his entrance
              there, left traces as he passed through the bedroom, and, finally,
              finding the door open have escaped that way.”
            </TextNode>

            <TextNode>Holmes shook his head impatiently.</TextNode>

            <TextNode>
              “Let us be practical,” said he. “I understand you to say that
              there are three students who use this stair and are in the habit
              of passing your door?”
            </TextNode>

            <TextNode>“Yes, there are.”</TextNode>

            <TextNode>“And they are all in for this examination?”</TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>
              “Have you any reason to suspect any one of them more than the
              others?”
            </TextNode>

            <TextNode>Soames hesitated.</TextNode>

            <TextNode>
              “It is a very delicate question,” said he. “One hardly likes to
              throw suspicion where there are no proofs.”
            </TextNode>

            <TextNode>
              “Let us hear the suspicions. I will look after the proofs.“
            </TextNode>

            <TextNode>
              “I will tell you, then, in a few words the character of the three
              men who inhabit these rooms. The lower of the three is Gilchrist,
              a fine scholar and athlete; plays in the Rugby team and the
              cricket team for the college, and got his Blue for the hurdles and
              the long jump. He is a fine, manly fellow. His father was the
              notorious Sir Jabez Gilchrist, who ruined himself on the turf. My
              scholar has been left very poor, but he is hard-working and
              industrious. He will do well.
            </TextNode>

            <TextNode>
              “The second floor is inhabited by Daulat Ras, the Indian. He is a
              quiet, inscrutable fellow, as most of those Indians are. He is
              well up in his work, though his Greek is his weak subject. He is
              steady and methodical.
            </TextNode>

            <TextNode>
              “The top floor belongs to Miles McLaren. He is a brilliant fellow
              when he chooses to work—one of the brightest intellects of the
              University, but he is wayward, dissipated, and unprincipled. He
              was nearly expelled over a card scandal in his first year. He has
              been idling all this term, and he must look forward with dread to
              the examination.”
            </TextNode>

            <TextNode>“Then it is he whom you suspect?”</TextNode>

            <TextNode>
              “I dare not go so far as that. But of the three he is perhaps the
              least unlikely.”
            </TextNode>

            <TextNode>
              “Exactly. Now, Mr. Soames, let us have a look at your servant,
              Bannister.”
            </TextNode>

            <TextNode>
              He was a little, white-faced, clean-shaven, grizzly-haired fellow
              of fifty. He was still suffering from this sudden disturbance of
              the quiet routine of his life. His plump face was twitching with
              his nervousness, and his fingers could not keep still.
            </TextNode>

            <TextNode>
              “We are investigating this unhappy business, Bannister,” said his
              master.
            </TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>
              “I understand,” said Holmes, “that you left your key in the door?”
            </TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>
              “Was it not very extraordinary that you should do this on the very
              day when there were these papers inside?”
            </TextNode>

            <TextNode>
              “It was most unfortunate, sir. But I have occasionally done the
              same thing at other times.”
            </TextNode>

            <TextNode>“When did you enter the room?”</TextNode>

            <TextNode>
              “It was about half-past four. That is Mr. Soames's tea time.”
            </TextNode>

            <TextNode>“How long did you stay?”</TextNode>

            <TextNode>
              “When I saw that he was absent I withdrew at once.”
            </TextNode>

            <TextNode>“Did you look at these papers on the table?”</TextNode>

            <TextNode>“No, sir; certainly not.”</TextNode>

            <TextNode>“How came you to leave the key in the door?”</TextNode>

            <TextNode>
              “I had the tea-tray in my hand. I thought I would come back for
              the key. Then I forgot.”
            </TextNode>

            <TextNode>“Has the outer door a spring lock?”</TextNode>

            <TextNode>“No, sir.”</TextNode>

            <TextNode>“Then it was open all the time?”</TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>“Anyone in the room could get out?”</TextNode>

            <TextNode>“Yes, sir.”</TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page198;

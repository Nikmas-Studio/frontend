import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Indent from '@/components/elements/book-master-english-with-sherlock-holmes/Indent';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import note1Dark from '@/public/images/sherlock-missing-three-quarter-1-dark.jpg';
import note1Light from '@/public/images/sherlock-missing-three-quarter-1-light.jpg';
import note2Dark from '@/public/images/sherlock-missing-three-quarter-2-dark.jpg';
import note2Light from '@/public/images/sherlock-missing-three-quarter-2-light.jpg';
import Image from 'next/image';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page205({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;MISSING&nbsp;THREE&#8209;QUARTER'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              We were fairly accustomed to receive weird telegrams at Baker
              Street, but I have a particular recollection of one which reached
              us on a gloomy February morning some seven or eight years ago and
              gave Mr. Sherlock Holmes a puzzled quarter of an hour. It was
              addressed to him, and ran thus:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “Please await me. Terrible misfortune. Right wing three-quarter
                missing; indispensable to-morrow.
              </TextNode>

              <TextNode className='italic' noIndent>
                — Overton.”
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “Strand post-mark and dispatched ten-thirty-six,” said Holmes,
              reading it over and over. “Mr. Overton was evidently considerably
              excited when he sent it, and somewhat incoherent in consequence.
              Well, well, he will be here, I dare say, by the time I have looked
              through&nbsp;<span className='italic'>The Times</span>, and then
              we shall know all about it. Even the most insignificant problem
              would be welcome in these stagnant days.”
            </TextNode>

            <TextNode>
              Things had indeed been very slow with us, and I had learned to
              dread such periods of inaction, for I knew by experience that my
              companion's brain was so abnormally active that it was dangerous
              to leave it without material upon which to work. For years I had
              gradually weaned him from that drug mania which had threatened
              once to check his remarkable career. Now I knew that under
              ordinary conditions he no longer craved for this artificial
              stimulus, but I was well aware that the fiend was not dead, but
              sleeping; and I have known that the sleep was a light one and the
              waking near when in periods of idleness I have seen the drawn look
              upon Holmes's ascetic face, and the brooding of his deep-set and
              inscrutable eyes. Therefore I blessed this Mr. Overton, whoever he
              might be, since he had come with his enigmatic message to break
              that dangerous calm which brought more peril to my friend than all
              the storms of his tempestuous life.
            </TextNode>

            <TextNode>
              As we had expected, the telegram was soon followed by its sender,
              and the card of Mr. Cyril Overton, of Trinity College, Cambridge,
              announced the arrival of an enormous young man, sixteen stone of
              solid bone and muscle, who spanned the doorway with his broad
              shoulders and looked from one of us to the other with a comely
              face which was haggard with anxiety.
            </TextNode>

            <TextNode>“Mr. Sherlock Holmes?”</TextNode>

            <TextNode>My companion bowed.</TextNode>

            <TextNode>
              “I've been down to Scotland Yard, Mr. Holmes. I saw Inspector
              Stanley Hopkins. He advised me to come to you. He said the case,
              so far as he could see, was more in your line than in that of the
              regular police.”
            </TextNode>

            <TextNode>“Pray sit down and tell me what is the matter.”</TextNode>

            <TextNode>
              “It's awful, Mr. Holmes, simply awful! I wonder my hair isn't
              grey. Godfrey Staunton—you've heard of him, of course? He's simply
              the hinge that the whole team turns on. I'd rather spare two from
              the pack and have Godfrey for my three-quarter line. Whether it's
              passing, or tackling, or dribbling, there's no one to touch him;
              and then, he's got the head and can hold us all together. What am
              I to do? That's what I ask you, Mr. Holmes. There's Moorhouse,
              first reserve, but he is trained as a half, and he always edges
              right in on to the scrum instead of keeping out on the touch-line.
              He's a fine place-kick, it's true, but, then, he has no judgment,
              and he can't sprint for nuts. Why, Morton or Johnson, the Oxford
              fliers, could romp round him. Stevenson is fast enough, but he
              couldn't drop from the twenty-five line, and a three-quarter who
              can't either punt or drop isn't worth a place for pace alone. No,
              Mr. Holmes, we are done unless you can help me to find Godfrey
              Staunton.”
            </TextNode>

            <TextNode>
              My friend had listened with amused surprise to this long speech,
              which was poured forth with extraordinary vigour and earnestness,
              every point being driven home by the slapping of a brawny hand
              upon the speaker's knee. When our visitor was silent Holmes
              stretched out his hand and took down letter “S” of his commonplace
              book. For once he dug in vain into that mine of varied
              information.
            </TextNode>

            <TextNode>
              “There is Arthur H. Staunton, the rising young forger,” said he,
              “and there was Henry Staunton, whom I helped to hang, but Godfrey
              Staunton is a new name to me.”
            </TextNode>

            <TextNode>It was our visitor's turn to look surprised.</TextNode>

            <TextNode>
              “Why, Mr. Holmes, I thought you knew things,” said he. “I suppose,
              then, if you have never heard of Godfrey Staunton you don't know
              Cyril Overton either?”
            </TextNode>

            <TextNode>Holmes shook his head good-humouredly.</TextNode>

            <TextNode>
              “Great Scot!” cried the athlete. “Why, I was first reserve for
              England against Wales, and I've skippered the 'Varsity all this
              year. But that's nothing! I didn't think there was a soul in
              England who didn't know Godfrey Staunton, the crack three-quarter,
              Cambridge, Blackheath, and five Internationals. Good Lord! Mr.
              Holmes, where have you lived?”
            </TextNode>

            <TextNode>
              Holmes laughed at the young giant's naive astonishment.
            </TextNode>

            <TextNode>
              “You live in a different world to me, Mr. Overton, a sweeter and
              healthier one. My ramifications stretch out into many sections of
              society, but never, I am happy to say, into amateur sport, which
              is the best and soundest thing in England. However, your
              unexpected visit this morning shows me that even in that world of
              fresh air and fair play there may be work for me to do; so now, my
              good sir, I beg you to sit down and to tell me slowly and quietly
              exactly what it is that has occurred, and how you desire that I
              should help you.”
            </TextNode>

            <TextNode>
              Young Overton's face assumed the bothered look of the man who is
              more accustomed to using his muscles than his wits; but by
              degrees, with many repetitions and obscurities which I may omit
              from his narrative, he laid his strange story before us.
            </TextNode>

            <TextNode>
              “It's this way, Mr. Holmes. As I have said, I am the skipper of
              the Rugger team of Cambridge 'Varsity, and Godfrey Staunton is my
              best man. To-morrow we play Oxford. Yesterday we all came up and
              we settled at Bentley's private hotel. At ten o'clock I went round
              and saw that all the fellows had gone to roost, for I believe in
              strict training and plenty of sleep to keep a team fit. I had a
              word or two with Godfrey before he turned in. He seemed to me to
              be pale and bothered. I asked him what was the matter. He said he
              was all right—just a touch of headache. I bade him good-night and
              left him. Half an hour later the porter tells me that a
              rough-looking man with a beard called with a note for Godfrey. He
              had not gone to bed and the note was taken to his room. Godfrey
              read it and fell back in a chair as if he had been pole-axed. The
              porter was so scared that he was going to fetch me, but Godfrey
              stopped him, had a drink of water, and pulled himself together.
              Then he went downstairs, said a few words to the man who was
              waiting in the hall, and the two of them went off together. The
              last that the porter saw of them, they were almost running down
              the street in the direction of the Strand. This morning Godfrey's
              room was empty, his bed had never been slept in, and his things
              were all just as I had seen them the night before. He had gone off
              at a moment's notice with this stranger, and no word has come from
              him since. I don't believe he will ever come back. He was a
              sportsman, was Godfrey, down to his marrow, and he wouldn't have
              stopped his training and let in his skipper if it were not for
              some cause that was too strong for him. No; I feel as if he were
              gone for good and we should never see him again.”
            </TextNode>

            <TextNode>
              Sherlock Holmes listened with the deepest attention to this
              singular narrative.
            </TextNode>

            <TextNode>“What did you do?” he asked.</TextNode>

            <TextNode>
              “I wired to Cambridge to learn if anything had been heard of him
              there. I have had an answer. No one has seen him.”
            </TextNode>

            <TextNode>“Could he have got back to Cambridge?”</TextNode>

            <TextNode>
              “Yes, there is a late train—quarter-past eleven.”
            </TextNode>

            <TextNode>
              “But so far as you can ascertain he did not take it?”
            </TextNode>

            <TextNode>“No, he has not been seen.”</TextNode>

            <TextNode>“What did you do next?”</TextNode>

            <TextNode>“I wired to Lord Mount-James.”</TextNode>

            <TextNode>“Why to Lord Mount-James?”</TextNode>

            <TextNode>
              “Godfrey is an orphan, and Lord Mount-James is his nearest
              relative—his uncle, I believe.”
            </TextNode>

            <TextNode>
              “Indeed. This throws new light upon the matter. Lord Mount-James
              is one of the richest men in England.”
            </TextNode>

            <TextNode>“So I've heard Godfrey say.”</TextNode>

            <TextNode>“And your friend was closely related?”</TextNode>

            <TextNode>
              “Yes, he was his heir, and the old boy is nearly eighty—cram full
              of gout, too. They say he could chalk his billiard-cue with his
              knuckles. He never allowed Godfrey a shilling in his life, for he
              is an absolute miser, but it will all come to him right enough.”
            </TextNode>

            <TextNode>“Have you heard from Lord Mount-James?”</TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>
              “What motive could your friend have in going to Lord Mount-James?”
            </TextNode>

            <TextNode>
              “Well, something was worrying him the night before, and if it was
              to do with money it is possible that he would make for his nearest
              relative who had so much of it, though from all I have heard he
              would not have much chance of getting it. Godfrey was not fond of
              the old man. He would not go if he could help it.”
            </TextNode>

            <TextNode>
              “Well, we can soon determine that. If your friend was going to his
              relative, Lord Mount-James, you have then to explain the visit of
              this rough-looking fellow at so late an hour, and the agitation
              that was caused by his coming.”
            </TextNode>

            <TextNode>
              Cyril Overton pressed his hands to his head. “I can make nothing
              of it,” said he.
            </TextNode>

            <TextNode>
              “Well, well, I have a clear day, and I shall be happy to look into
              the matter,” said Holmes. “I should strongly recommend you to make
              your preparations for your match without reference to this young
              gentleman. It must, as you say, have been an overpowering
              necessity which tore him away in such a fashion, and the same
              necessity is likely to hold him away. Let us step round together
              to this hotel, and see if the porter can throw any fresh light
              upon the matter.”
            </TextNode>

            <TextNode>
              Sherlock Holmes was a past-master in the art of putting a humble
              witness at his ease, and very soon, in the privacy of Godfrey
              Staunton's abandoned room, he had extracted all that the porter
              had to tell. The visitor of the night before was not a gentleman,
              neither was he a working man. He was simply what the porter
              described as a “medium-looking chap”; a man of fifty, beard
              grizzled, pale face, quietly dressed. He seemed himself to be
              agitated. The porter had observed his hand trembling when he had
              held out the note. Godfrey Staunton had crammed the note into his
              pocket. Staunton had not shaken hands with the man in the hall.
              They had exchanged a few sentences, of which the porter had only
              distinguished the one word “time.” Then they had hurried off in
              the manner described. It was just half-past ten by the hall clock.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Let me see,” said Holmes, seating himself on Staunton's bed. “You
              are the day porter, are you not?”
            </TextNode>

            <TextNode>“Yes, sir; I go off duty at eleven.”</TextNode>

            <TextNode>“The night porter saw nothing, I suppose?”</TextNode>

            <TextNode>
              “No, sir; one theatre party came in late. No one else.”
            </TextNode>

            <TextNode>“Were you on duty all day yesterday?”</TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>“Did you take any messages to Mr. Staunton?”</TextNode>

            <TextNode>“Yes, sir; one telegram.”</TextNode>

            <TextNode>
              “Ah! that's interesting. What o'clock was this?”
            </TextNode>

            <TextNode>“About six.”</TextNode>

            <TextNode>“Where was Mr. Staunton when he received it?”</TextNode>

            <TextNode>“Here in his room.”</TextNode>

            <TextNode>“Were you present when he opened it?”</TextNode>

            <TextNode>
              “Yes, sir; I waited to see if there was an answer.”
            </TextNode>

            <TextNode>“Well, was there?”</TextNode>

            <TextNode>“Yes, sir. He wrote an answer.”</TextNode>

            <TextNode>“Did you take it?”</TextNode>

            <TextNode>“No; he took it himself.”</TextNode>

            <TextNode>“But he wrote it in your presence?”</TextNode>

            <TextNode>
              “Yes, sir. I was standing by the door, and he with his back turned
              at that table. When he had written it he said, ‘All right, porter,
              I will take this myself.’”
            </TextNode>

            <TextNode>“What did he write it with?”</TextNode>

            <TextNode>“A pen, sir.”</TextNode>

            <TextNode>
              “Was the telegraphic form one of these on the table?”
            </TextNode>

            <TextNode>“Yes, sir; it was the top one.”</TextNode>

            <TextNode>
              Holmes rose. Taking the forms he carried them over to the window
              and carefully examined that which was uppermost.
            </TextNode>

            <TextNode>
              “It is a pity he did not write in pencil,” said he, throwing them
              down again with a shrug of disappointment. “As you have no doubt
              frequently observed, Watson, the impression usually goes through—a
              fact which has dissolved many a happy marriage. However, I can
              find no trace here. I rejoice, however, to perceive that he wrote
              with a broad-pointed quill pen, and I can hardly doubt that we
              will find some impression upon this blotting-pad. Ah, yes, surely
              this is the very thing!”
            </TextNode>

            <TextNode>
              He tore off a strip of the blotting-paper and turned towards us
              the following hieroglyphic:
            </TextNode>

            <Image
              className='mx-auto  h-[4.75rem]  w-auto  max-2md:h-auto  
                         dark:hidden'
              alt='note'
              src={note1Light}
              quality={100}
            />
            <Image
              className='mx-auto  hidden  h-[4.75rem]  w-auto  max-2md:h-auto  
                         dark:block'
              alt='note'
              src={note1Dark}
              quality={100}
            />

            <TextNode className='mt-2' noIndent>
              Cyril Overton was much excited. “Hold it to the glass!” he cried.
            </TextNode>

            <TextNode>
              “That is unnecessary,” said Holmes. “The paper is thin, and the
              reverse will give the message. Here it is.” He turned it over and
              we read:
            </TextNode>

            <Image
              className='mx-auto  h-[4.75rem]  w-auto  max-2md:h-auto  
                         dark:hidden'
              alt='note'
              src={note2Light}
              quality={100}
            />
            <Image
              className='mx-auto  hidden  h-[4.75rem]  w-auto  max-2md:h-auto  
                         dark:block'
              alt='note'
              src={note2Dark}
              quality={100}
            />
            <TextNode className='mt-2' noIndent>
              “So that is the tail end of the telegram which Godfrey Staunton
              dispatched within a few hours of his disappearance. There are at
              least six words of the message which have escaped us; but what
              remains—‘Stand by us for God's sake!’—proves that this young man
              saw a formidable danger which approached him, and from which
              someone else could protect him. ‘Us,’ mark you! Another person was
              involved. Who should it be but the pale-faced, bearded man, who
              seemed himself in so nervous a state? What, then, is the
              connection between Godfrey Staunton and the bearded man? And what
              is the third source from which each of them sought for help
              against pressing danger? Our inquiry has already narrowed down to
              that.”
            </TextNode>

            <TextNode>
              “We have only to find to whom that telegram is addressed,” I
              suggested.
            </TextNode>

            <TextNode>
              “Exactly, my dear Watson. Your reflection, though profound, had
              already crossed my mind. But I dare say it may have come to your
              notice that if you walk into a post-office and demand to see the
              counterfoil of another man's message there may be some
              disinclination on the part of the officials to oblige you. There
              is so much red tape in these matters! However, I have no doubt
              that with a little delicacy and finesse the end may be attained.
              Meanwhile, I should like in your presence, Mr. Overton, to go
              through these papers which have been left upon the table.”
            </TextNode>

            <TextNode>
              There were a number of letters, bills, and note-books, which
              Holmes turned over and examined with quick, nervous fingers and
              darting, penetrating eyes. “Nothing here,” he said, at last. “By
              the way, I suppose your friend was a healthy young fellow—nothing
              amiss with him?”
            </TextNode>

            <TextNode>“Sound as a bell.”</TextNode>

            <TextNode>“Have you ever known him ill?”</TextNode>

            <TextNode>
              “Not a day. He has been laid up with a hack, and once he slipped
              his knee-cap, but that was nothing.”
            </TextNode>

            <TextNode>
              “Perhaps he was not so strong as you suppose. I should think he
              may have had some secret trouble. With your assent I will put one
              or two of these papers in my pocket, in case they should bear upon
              our future inquiry.”
            </TextNode>

            <TextNode>
              “One moment! one moment!” cried a querulous voice, and we looked
              up to find a queer little old man, jerking and twitching in the
              doorway. He was dressed in rusty black, with a very broad brimmed
              top-hat and a loose white necktie—the whole effect being that of a
              very rustic parson or of an undertaker's mute. Yet, in spite of
              his shabby and even absurd appearance, his voice had a sharp
              crackle, and his manner a quick intensity which commanded
              attention.
            </TextNode>

            <TextNode>
              “Who are you, sir, and by what right do you touch this gentleman's
              papers?” he asked.
            </TextNode>

            <TextNode>
              “I am a private detective, and I am endeavouring to explain his
              disappearance.”
            </TextNode>

            <TextNode>
              “Oh, you are, are you? And who instructed you, eh?”
            </TextNode>

            <TextNode>
              “This gentleman, Mr. Staunton's friend, was referred to me by
              Scotland Yard.”
            </TextNode>

            <TextNode>“Who are you, sir?”</TextNode>

            <TextNode>“I am Cyril Overton.”</TextNode>

            <TextNode>
              “Then it is you who sent me a telegram. My name is Lord
              Mount-James. I came round as quickly as the Bayswater 'bus would
              bring me. So you have instructed a detective?”
            </TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>“And are you prepared to meet the cost?”</TextNode>

            <TextNode>
              “I have no doubt, sir, that my friend Godfrey, when we find him,
              will be prepared to do that.”
            </TextNode>

            <TextNode>“But if he is never found, eh? Answer me that!”</TextNode>

            <TextNode>“In that case no doubt his family—”</TextNode>

            <TextNode>
              “Nothing of the sort, sir!” screamed the little man. “Don't look
              to me for a penny—not a penny! You understand that, Mr. Detective!
              I am all the family that this young man has got, and I tell you
              that I am not responsible. If he has any expectations it is due to
              the fact that I have never wasted money, and I do not propose to
              begin to do so now. As to those papers with which you are making
              so free, I may tell you that in case there should be anything of
              any value among them you will be held strictly to account for what
              you do with them.”
            </TextNode>

            <TextNode>
              “Very good, sir,” said Sherlock Holmes. “May I ask in the
              meanwhile whether you have yourself any theory to account for this
              young man's disappearance?”
            </TextNode>

            <TextNode>
              “No, sir, I have not. He is big enough and old enough to look
              after himself, and if he is so foolish as to lose himself I
              entirely refuse to accept the responsibility of hunting for him.”
            </TextNode>

            <TextNode>
              “I quite understand your position,” said Holmes, with a
              mischievous twinkle in his eyes. “Perhaps you don't quite
              understand mine. Godfrey Staunton appears to have been a poor man.
              If he has been kidnapped it could not have been for anything which
              he himself possesses. The fame of your wealth has gone abroad,
              Lord Mount-James, and it is entirely possible that a gang of
              thieves have secured your nephew in order to gain from him some
              information as to your house, your habits, and your treasure.”
            </TextNode>

            <TextNode>
              The face of our unpleasant little visitor turned as white as his
              neckcloth.
            </TextNode>

            <TextNode>
              “Heavens, sir, what an idea! I never thought of such villainy!
              What inhuman rogues there are in the world! But Godfrey is a fine
              lad—a staunch lad. Nothing would induce him to give his old uncle
              away. I'll have the plate moved over to the bank this evening. In
              the meantime spare no pains, Mr. Detective! I beg you to leave no
              stone unturned to bring him safely back. As to money, well, so far
              as a fiver, or even a tenner, goes, you can always look to me.”
            </TextNode>

            <TextNode>
              Even in his chastened frame of mind the noble miser could give us
              no information which could help us, for he knew little of the
              private life of his nephew. Our only clue lay in the truncated
              telegram, and with a copy of this in his hand Holmes set forth to
              find a second link for his chain. We had shaken off Lord
              Mount-James, and Overton had gone to consult with the other
              members of his team over the misfortune which had befallen them.
            </TextNode>

            <TextNode>
              There was a telegraph-office at a short distance from the hotel.
              We halted outside it.
            </TextNode>

            <TextNode>
              “It's worth trying, Watson,” said Holmes. “Of course, with a
              warrant we could demand to see the counterfoils, but we have not
              reached that stage yet. I don't suppose they remember faces in so
              busy a place. Let us venture it.”
            </TextNode>

            <TextNode>
              “I am sorry to trouble you,” said he, in his blandest manner, to
              the young woman behind the grating; “there is some small mistake
              about a telegram I sent yesterday. I have had no answer, and I
              very much fear that I must have omitted to put my name at the end.
              Could you tell me if this was so?”
            </TextNode>

            <TextNode>
              The young woman turned over a sheaf of counterfoils.
            </TextNode>

            <TextNode>“What o'clock was it?” she asked.</TextNode>

            <TextNode>“A little after six.”</TextNode>

            <TextNode>“Whom was it to?”</TextNode>

            <TextNode>
              Holmes put his finger to his lips and glanced at me. “The last
              words in it were ‘for God's sake,’” he whispered, confidentially;
              “I am very anxious at getting no answer.”
            </TextNode>

            <TextNode>The young woman separated one of the forms.</TextNode>

            <TextNode>
              “This is it. There is no name,” said she, smoothing it out upon
              the counter.
            </TextNode>

            <TextNode>
              “Then that, of course, accounts for my getting no answer,” said
              Holmes. “Dear me, how very stupid of me, to be sure! Good morning,
              miss, and many thanks for having relieved my mind.” He chuckled
              and rubbed his hands when we found ourselves in the street once
              more.
            </TextNode>

            <TextNode>“Well?” I asked.</TextNode>

            <TextNode>
              “We progress, my dear Watson, we progress. I had seven different
              schemes for getting a glimpse of that telegram, but I could hardly
              hope to succeed the very first time.”
            </TextNode>

            <TextNode>“And what have you gained?”</TextNode>

            <TextNode>
              “A starting-point for our investigation.” He hailed a cab. “King's
              Cross Station,” said he.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page205;

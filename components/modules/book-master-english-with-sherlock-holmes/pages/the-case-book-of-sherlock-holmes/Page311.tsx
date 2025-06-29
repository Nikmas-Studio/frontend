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

function Page311({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE BLANCHED SOLDIER'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              The ideas of my friend Watson, though limited, are exceedingly
              pertinacious. For a long time he has worried me to write an
              experience of my own. Perhaps I have rather invited this
              persecution, since I have often had occasion to point out to him
              how superficial are his own accounts and to accuse him of
              pandering to popular taste instead of confining himself rigidly to
              facts and figures. “Try it yourself, Holmes!” he has retorted, and
              I am compelled to admit that, having taken my pen in my hand, I do
              begin to realize that the matter must be presented in such a way
              as may interest the reader. The following case can hardly fail to
              do so, as it is among the strangest happenings in my collection,
              though it chanced that Watson had no note of it in his collection.
              Speaking of my old friend and biographer, I would take this
              opportunity to remark that if I burden myself with a companion in
              my various little inquiries it is not done out of sentiment or
              caprice, but it is that Watson has some remarkable characteristics
              of his own to which in his modesty he has given small attention
              amid his exaggerated estimates of my own performances. A
              confederate who foresees your conclusions and course of action is
              always dangerous, but one to whom each development comes as a
              perpetual surprise, and to whom the future is always a closed
              book, is indeed an ideal helpmate.
            </TextNode>

            <TextNode>
              I find from my notebook that it was in January, 1903, just after
              the conclusion of the Boer War, that I had my visit from Mr. James
              M. Dodd, a big, fresh, sunburned, upstanding Briton. The good
              Watson had at that time deserted me for a wife, the only selfish
              action which I can recall in our association. I was alone.
            </TextNode>

            <TextNode>
              It is my habit to sit with my back to the window and to place my
              visitors in the opposite chair, where the light falls full upon
              them. Mr. James M. Dodd seemed somewhat at a loss how to begin the
              interview. I did not attempt to help him, for his silence gave me
              more time for observation. I have found it wise to impress clients
              with a sense of power, and so I gave him some of my conclusions.
            </TextNode>

            <TextNode>“From South Africa, sir, I perceive.”</TextNode>

            <TextNode>“Yes, sir,” he answered, with some surprise.</TextNode>

            <TextNode>“Imperial Yeomanry, I fancy.”</TextNode>

            <TextNode>“Exactly.”</TextNode>

            <TextNode>“Middlesex Corps, no doubt.”</TextNode>

            <TextNode>“That is so. Mr. Holmes, you are a wizard.”</TextNode>

            <TextNode>I smiled at his bewildered expression.</TextNode>

            <TextNode>
              “When a gentleman of virile appearance enters my room with such
              tan upon his face as an English sun could never give, and with his
              handkerchief in his sleeve instead of in his pocket, it is not
              difficult to place him. You wear a short beard, which shows that
              you were not a regular. You have the cut of a riding-man. As to
              Middlesex, your card has already shown me that you are a
              stockbroker from Throgmorton Street. What other regiment would you
              join?”
            </TextNode>

            <TextNode>“You see everything.”</TextNode>

            <TextNode>
              “I see no more than you, but I have trained myself to notice what
              I see. However, Mr. Dodd, it was not to discuss the science of
              observation that you called upon me this morning. What has been
              happening at Tuxbury Old Park?”
            </TextNode>

            <TextNode>“Mr. Holmes—!”</TextNode>

            <TextNode>
              “My dear sir, there is no mystery. Your letter came with that
              heading, and as you fixed this appointment in very pressing terms
              it was clear that something sudden and important had occurred.”
            </TextNode>

            <TextNode>
              “Yes, indeed. But the letter was written in the afternoon, and a
              good deal has happened since then. If Colonel Emsworth had not
              kicked me out—”
            </TextNode>

            <TextNode>“Kicked you out!”</TextNode>

            <TextNode>
              “Well, that was what it amounted to. He is a hard nail, is Colonel
              Emsworth. The greatest martinet in the Army in his day, and it was
              a day of rough language, too. I couldn't have stuck the colonel if
              it had not been for Godfrey's sake.”
            </TextNode>

            <TextNode>I lit my pipe and leaned back in my chair.</TextNode>

            <TextNode>
              “Perhaps you will explain what you are talking about.”
            </TextNode>

            <TextNode>My client grinned mischievously.</TextNode>

            <TextNode>
              “I had got into the way of supposing that you knew everything
              without being told,” said he. “But I will give you the facts, and
              I hope to God that you will be able to tell me what they mean.
              I've been awake all night puzzling my brain, and the more I think
              the more incredible does it become.
            </TextNode>

            <TextNode>
              “When I joined up in January, 1901—just two years ago—young
              Godfrey Emsworth had joined the same squadron. He was Colonel
              Emsworth's only son—Emsworth, the Crimean V. C.—and he had the
              fighting blood in him, so it is no wonder he volunteered. There
              was not a finer lad in the regiment. We formed a friendship—the
              sort of friendship which can only be made when one lives the same
              life and shares the same joys and sorrows. He was my mate—and that
              means a good deal in the Army. We took the rough and the smooth
              together for a year of hard fighting. Then he was hit with a
              bullet from an elephant gun in the action near Diamond Hill
              outside Pretoria. I got one letter from the hospital at Cape Town
              and one from Southampton. Since then not a word—not one word, Mr.
              Holmes, for six months and more, and he my closest pal.
            </TextNode>

            <TextNode>
              “Well, when the war was over, and we all got back, I wrote to his
              father and asked where Godfrey was. No answer. I waited a bit and
              then I wrote again. This time I had a reply, short and gruff.
              Godfrey had gone on a voyage round the world, and it was not
              likely that he would be back for a year. That was all.
            </TextNode>

            <TextNode>
              “I wasn't satisfied, Mr. Holmes. The whole thing seemed to me so
              damned unnatural. He was a good lad, and he would not drop a pal
              like that. It was not like him. Then, again, I happened to know
              that he was heir to a lot of money, and also that his father and
              he did not always hit it off too well. The old man was sometimes a
              bully, and young Godfrey had too much spirit to stand it. No, I
              wasn't satisfied, and I determined that I would get to the root of
              the matter. It happened, however, that my own affairs needed a lot
              of straightening out, after two years' absence, and so it is only
              this week that I have been able to take up Godfrey's case again.
              But since I have taken it up I mean to drop everything in order to
              see it through.”
            </TextNode>

            <TextNode>
              Mr. James M. Dodd appeared to be the sort of person whom it would
              be better to have as a friend than as an enemy. His blue eyes were
              stern and his square jaw had set hard as he spoke.
            </TextNode>

            <TextNode>“Well, what have you done?” I asked.</TextNode>

            <TextNode>
              “My first move was to get down to his home, Tuxbury Old Park, near
              Bedford, and to see for myself how the ground lay. I wrote to the
              mother, therefore—I had had quite enough of the curmudgeon of a
              father—and I made a clean frontal attack: Godfrey was my chum, I
              had a great deal of interest which I might tell her of our common
              experiences, I should be in the neighbourhood, would there be any
              objection, et cetera? In reply I had quite an amiable answer from
              her and an offer to put me up for the night. That was what took me
              down on Monday.
            </TextNode>

            <TextNode>
              “Tuxbury Old Hall is inaccessible—five miles from anywhere. There
              was no trap at the station, so I had to walk, carrying my
              suitcase, and it was nearly dark before I arrived. It is a great
              wandering house, standing in a considerable park. I should judge
              it was of all sorts of ages and styles, starting on a
              half-timbered Elizabethan foundation and ending in a Victorian
              portico. Inside it was all panelling and tapestry and half-effaced
              old pictures, a house of shadows and mystery. There was a butler,
              old Ralph, who seemed about the same age as the house, and there
              was his wife, who might have been older. She had been Godfrey's
              nurse, and I had heard him speak of her as second only to his
              mother in his affections, so I was drawn to her in spite of her
              queer appearance. The mother I liked also—a gentle little white
              mouse of a woman. It was only the colonel himself whom I barred.
            </TextNode>

            <TextNode>
              “We had a bit of barney right away, and I should have walked back
              to the station if I had not felt that it might be playing his game
              for me to do so. I was shown straight into his study, and there I
              found him, a huge, bow-backed man with a smoky skin and a
              straggling gray beard, seated behind his littered desk. A
              red-veined nose jutted out like a vulture's beak, and two fierce
              gray eyes glared at me from under tufted brows. I could understand
              now why Godfrey seldom spoke of his father.
            </TextNode>

            <TextNode>
              “‘Well, sir,’ said he in a rasping voice, ‘I should be interested
              to know the real reasons for this visit.’
            </TextNode>

            <TextNode>
              “I answered that I had explained them in my letter to his wife.
            </TextNode>

            <TextNode>
              “‘Yes, yes, you said that you had known Godfrey in Africa. We
              have, of course, only your word for that.’
            </TextNode>

            <TextNode>“‘I have his letters to me in my pocket.’</TextNode>

            <TextNode>“‘Kindly let me see them.’</TextNode>

            <TextNode>
              “He glanced at the two which I handed him, and then he tossed them
              back.
            </TextNode>

            <TextNode>“‘Well, what then?’ he asked.</TextNode>

            <TextNode>
              “‘I was fond of your son Godfrey, sir. Many ties and memories
              united us. Is it not natural that I should wonder at his sudden
              silence and should wish to know what has become of him?’
            </TextNode>

            <TextNode>
              “‘I have some recollections, sir, that I had already corresponded
              with you and had told you what had become of him. He has gone upon
              a voyage round the world. His health was in a poor way after his
              African experiences, and both his mother and I were of opinion
              that complete rest and change were needed. Kindly pass that
              explanation on to any other friends who may be interested in the
              matter.’
            </TextNode>

            <TextNode>
              “‘Certainly,’ I answered. ‘But perhaps you would have the goodness
              to let me have the name of the steamer and of the line by which he
              sailed, together with the date. I have no doubt that I should be
              able to get a letter through to him.’
            </TextNode>

            <TextNode>
              “My request seemed both to puzzle and to irritate my host. His
              great eyebrows came down over his eyes, and he tapped his fingers
              impatiently on the table. He looked up at last with the expression
              of one who has seen his adversary make a dangerous move at chess,
              and has decided how to meet it.
            </TextNode>

            <TextNode>
              “‘Many people, Mr. Dodd,’ said he, ‘would take offence at your
              infernal pertinacity and would think that this insistence had
              reached the point of damned impertinence.’
            </TextNode>

            <TextNode>
              “‘You must put it down, sir, to my real love for your son.’
            </TextNode>

            <TextNode>
              “‘Exactly. I have already made every allowance upon that score. I
              must ask you, however, to drop these inquiries. Every family has
              its own inner knowledge and its own motives, which cannot always
              be made clear to outsiders, however well-intentioned. My wife is
              anxious to hear something of Godfrey's past which you are in a
              position to tell her, but I would ask you to let the present and
              the future alone. Such inquiries serve no useful purpose, sir, and
              place us in a delicate and difficult position.’
            </TextNode>

            <TextNode>
              “So I came to a dead end, Mr. Holmes. There was no getting past
              it. I could only pretend to accept the situation and register a
              vow inwardly that I would never rest until my friend's fate had
              been cleared up. It was a dull evening. We dined quietly, the
              three of us, in a gloomy, faded old room. The lady questioned me
              eagerly about her son, but the old man seemed morose and
              depressed. I was so bored by the whole proceeding that I made an
              excuse as soon as I decently could and retired to my bedroom. It
              was a large, bare room on the ground floor, as gloomy as the rest
              of the house, but after a year of sleeping upon the veldt, Mr.
              Holmes, one is not too particular about one's quarters. I opened
              the curtains and looked out into the garden, remarking that it was
              a fine night with a bright half-moon. Then I sat down by the
              roaring fire with the lamp on a table beside me, and endeavoured
              to distract my mind with a novel. I was interrupted, however, by
              Ralph, the old butler, who came in with a fresh supply of coals.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “‘I thought you might run short in the night-time, sir. It is
              bitter weather and these rooms are cold.’
            </TextNode>

            <TextNode>
              “He hesitated before leaving the room, and when I looked round he
              was standing facing me with a wistful look upon his wrinkled face.
            </TextNode>

            <TextNode>
              “‘Beg your pardon, sir, but I could not help hearing what you said
              of young Master Godfrey at dinner. You know, sir, that my wife
              nursed him, and so I may say I am his foster-father. It's natural
              we should take an interest. And you say he carried himself well,
              sir?’
            </TextNode>

            <TextNode>
              “‘There was no braver man in the regiment. He pulled me out once
              from under the rifles of the Boers, or maybe I should not be
              here.’
            </TextNode>

            <TextNode>“The old butler rubbed his skinny hands.</TextNode>

            <TextNode>
              “‘Yes, sir, yes, that is Master Godfrey all over. He was always
              courageous. There's not a tree in the park, sir, that he has not
              climbed. Nothing would stop him. He was a fine boy—and oh, sir, he
              was a fine man.’
            </TextNode>

            <TextNode>“I sprang to my feet.</TextNode>

            <TextNode>
              “‘Look here!’ I cried. ‘You say he was. You speak as if he were
              dead. What is all this mystery? What has become of Godfrey
              Emsworth?’
            </TextNode>

            <TextNode>
              “I gripped the old man by the shoulder, but he shrank away.
            </TextNode>

            <TextNode>
              “‘I don't know what you mean, sir. Ask the master about Master
              Godfrey. He knows. It is not for me to interfere.’
            </TextNode>

            <TextNode>“He was leaving the room, but I held his arm.</TextNode>

            <TextNode>
              “‘Listen,’ I said. ‘You are going to answer one question before
              you leave if I have to hold you all night. Is Godfrey dead?’
            </TextNode>

            <TextNode>
              “He could not face my eyes. He was like a man hypnotized. The
              answer was dragged from his lips. It was a terrible and unexpected
              one.
            </TextNode>

            <TextNode>
              “‘I wish to God he was!’ he cried, and, tearing himself free, he
              dashed from the room.
            </TextNode>

            <TextNode>
              “You will think, Mr. Holmes, that I returned to my chair in no
              very happy state of mind. The old man's words seemed to me to bear
              only one interpretation. Clearly my poor friend had become
              involved in some criminal or, at the least, disreputable
              transaction which touched the family honour. That stern old man
              had sent his son away and hidden him from the world lest some
              scandal should come to light. Godfrey was a reckless fellow. He
              was easily influenced by those around him. No doubt he had fallen
              into bad hands and been misled to his ruin. It was a piteous
              business, if it was indeed so, but even now it was my duty to hunt
              him out and see if I could aid him. I was anxiously pondering the
              matter when I looked up, and there was Godfrey Emsworth standing
              before me.”
            </TextNode>

            <TextNode>My client had paused as one in deep emotion.</TextNode>

            <TextNode>
              “Pray continue,” I said. “Your problem presents some very unusual
              features.”
            </TextNode>

            <TextNode>
              “He was outside the window, Mr. Holmes, with his face pressed
              against the glass. I have told you that I looked out at the night.
              When I did so I left the curtains partly open. His figure was
              framed in this gap. The window came down to the ground and I could
              see the whole length of it, but it was his face which held my
              gaze. He was deadly pale—never have I seen a man so white. I
              reckon ghosts may look like that; but his eyes met mine, and they
              were the eyes of a living man. He sprang back when he saw that I
              was looking at him, and he vanished into the darkness.
            </TextNode>

            <TextNode>
              “There was something shocking about the man, Mr. Holmes. It wasn't
              merely that ghastly face glimmering as white as cheese in the
              darkness. It was more subtle than that—something slinking,
              something furtive, something guilty— something very unlike the
              frank, manly lad that I had known. It left a feeling of horror in
              my mind.
            </TextNode>

            <TextNode>
              “But when a man has been soldiering for a year or two with brother
              Boer as a playmate, he keeps his nerve and acts quickly. Godfrey
              had hardly vanished before I was at the window. There was an
              awkward catch, and I was some little time before I could throw it
              up. Then I nipped through and ran down the garden path in the
              direction that I thought he might have taken.
            </TextNode>

            <TextNode>
              “It was a long path and the light was not very good, but it seemed
              to me something was moving ahead of me. I ran on and called his
              name, but it was no use. When I got to the end of the path there
              were several others branching in different directions to various
              outhouses. I stood hesitating, and as I did so I heard distinctly
              the sound of a closing door. It was not behind me in the house,
              but ahead of me, somewhere in the darkness. That was enough, Mr.
              Holmes, to assure me that what I had seen was not a vision.
              Godfrey had run away from me, and he had shut a door behind him.
              Of that I was certain.
            </TextNode>

            <TextNode>
              “There was nothing more I could do, and I spent an uneasy night
              turning the matter over in my mind and trying to find some theory
              which would cover the facts. Next day I found the colonel rather
              more conciliatory, and as his wife remarked that there were some
              places of interest in the neighbourhood, it gave me an opening to
              ask whether my presence for one more night would incommode them. A
              somewhat grudging acquiescence from the old man gave me a clear
              day in which to make my observations. I was already perfectly
              convinced that Godfrey was in hiding somewhere near, but where and
              why remained to be solved.
            </TextNode>

            <TextNode>
              “The house was so large and so rambling that a regiment might be
              hid away in it and no one the wiser. If the secret lay there it
              was difficult for me to penetrate it. But the door which I had
              heard close was certainly not in the house. I must explore the
              garden and see what I could find. There was no difficulty in the
              way, for the old people were busy in their own fashion and left me
              to my own devices.
            </TextNode>

            <TextNode>
              “There were several small outhouses, but at the end of the garden
              there was a detached building of some size—large enough for a
              gardener's or a gamekeeper's residence. Could this be the place
              whence the sound of that shutting door had come? I approached it
              in a careless fashion as though I were strolling aimlessly round
              the grounds. As I did so, a small, brisk, bearded man in a black
              coat and bowler hat—not at all the gardener type—came out of the
              door. To my surprise, he locked it after him and put the key in
              his pocket. Then he looked at me with some surprise on his face.
            </TextNode>

            <TextNode>“‘Are you a visitor here?’ he asked.</TextNode>

            <TextNode>
              “I explained that I was and that I was a friend of Godfrey’s.
            </TextNode>

            <TextNode>
              “‘What a pity that he should be away on his travels, for he would
              have so liked to see me,’ I continued.
            </TextNode>

            <TextNode>
              “‘Quite so. Exactly,’ said he with a rather guilty air. ‘No doubt
              you will renew your visit at some more propitious time.’ He passed
              on, but when I turned I observed that he was standing watching me,
              half-concealed by the laurels at the far end of the garden.
            </TextNode>

            <TextNode>
              “I had a good look at the little house as I passed it, but the
              windows were heavily curtained, and, so far as one could see, it
              was empty. I might spoil my own game and even be ordered off the
              premises if I were too audacious, for I was still conscious that I
              was being watched. Therefore, I strolled back to the house and
              waited for night before I went on with my inquiry. When all was
              dark and quiet I slipped out of my window and made my way as
              silently as possible to the mysterious lodge.
            </TextNode>

            <TextNode>
              “I have said that it was heavily curtained, but now I found that
              the windows were shuttered as well. Some light, however, was
              breaking through one of them, so I concentrated my attention upon
              this. I was in luck, for the curtain had not been quite closed,
              and there was a crack in the shutter, so that I could see the
              inside of the room. It was a cheery place enough, a bright lamp
              and a blazing fire. Opposite to me was seated the little man whom
              I had seen in the morning. He was smoking a pipe and reading a
              paper.”
            </TextNode>

            <TextNode>“What paper?” I asked.</TextNode>

            <TextNode>
              My client seemed annoyed at the interruption of his narrative.
            </TextNode>

            <TextNode>“Can it matter?” he asked.</TextNode>

            <TextNode>“It is most essential.”</TextNode>

            <TextNode>“I really took no notice.”</TextNode>

            <TextNode>
              “Possibly you observed whether it was a broad-leafed paper or of
              that smaller type which one associates with weeklies.”
            </TextNode>

            <TextNode>
              “Now that you mention it, it was not large. It might have been{' '}
              <span className='italic'>The Spectator</span>. However, I had
              little thought to spare upon such details, for a second man was
              seated with his back to the window, and I could swear that this
              second man was Godfrey. I could not see his face, but I knew the
              familiar slope of his shoulders. He was leaning upon his elbow in
              an attitude of great melancholy, his body turned towards the fire.
              I was hesitating as to what I should do when there was a sharp tap
              on my shoulder, and there was Colonel Emsworth beside me.
            </TextNode>

            <TextNode>
              “‘This way, sir!’ said he in a low voice. He walked in silence to
              the house, and I followed him into my own bedroom. He had picked
              up a time-table in the hall.
            </TextNode>

            <TextNode>
              “‘There is a train to London at 8.30,’ said he. ‘The trap will be
              at the door at eight.’
            </TextNode>

            <TextNode>
              “He was white with rage, and, indeed, I felt myself in so
              difficult a position that I could only stammer out a few
              incoherent apologies in which I tried to excuse myself by urging
              my anxiety for my friend.
            </TextNode>

            <TextNode>
              “‘The matter will not bear discussion,’ said he abruptly. ‘You
              have made a most damnable intrusion into the privacy of our
              family. You were here as a guest and you have become a spy. I have
              nothing more to say, sir, save that I have no wish ever to see you
              again.’
            </TextNode>

            <TextNode>
              “At this I lost my temper, Mr. Holmes, and I spoke with some
              warmth.
            </TextNode>

            <TextNode>
              “‘I have seen your son, and I am convinced that for some reason of
              your own you are concealing him from the world. I have no idea
              what your motives are in cutting him off in this fashion, but I am
              sure that he is no longer a free agent. I warn you, Colonel
              Emsworth, that until I am assured as to the safety and well-being
              of my friend I shall never desist in my efforts to get to the
              bottom of the mystery, and I shall certainly not allow myself to
              be intimidated by anything which you may say or do.’
            </TextNode>

            <TextNode>
              “The old fellow looked diabolical, and I really thought he was
              about to attack me. I have said that he was a gaunt, fierce old
              giant, and though I am no weakling I might have been hard put to
              it to hold my own against him. However, after a long glare of rage
              he turned upon his heel and walked out of the room. For my part, I
              took the appointed train in the morning, with the full intention
              of coming straight to you and asking for your advice and
              assistance at the appointment for which I had already written.”
            </TextNode>

            <TextNode>
              Such was the problem which my visitor laid before me. It
              presented, as the astute reader will have already perceived, few
              difficulties in its solution, for a very limited choice of
              alternatives must get to the root of the matter. Still, elementary
              as it was, there were points of interest and novelty about it
              which may excuse my placing it upon record. I now proceeded, using
              my familiar method of logical analysis, to narrow down the
              possible solutions.
            </TextNode>

            <TextNode>
              “The servants,” I asked; “how many were in the house?”
            </TextNode>

            <TextNode>
              “To the best of my belief there were only the old butler and his
              wife. They seemed to live in the simplest fashion.”
            </TextNode>

            <TextNode>
              “There was no servant, then, in the detached house?”
            </TextNode>

            <TextNode>
              “None, unless the little man with the beard acted as such. He
              seemed, however, to be quite a superior person.”
            </TextNode>

            <TextNode>
              “That seems very suggestive. Had you any indication that food was
              conveyed from the one house to the other?”
            </TextNode>

            <TextNode>
              “Now that you mention it, I did see old Ralph carrying a basket
              down the garden walk and going in the direction of this house. The
              idea of food did not occur to me at the moment.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page311;

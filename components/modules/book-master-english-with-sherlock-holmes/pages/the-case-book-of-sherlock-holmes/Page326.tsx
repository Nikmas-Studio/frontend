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

function Page326({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;PROBLEM OF&nbsp;THOR&nbsp;BRIDGE'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              Somewhere in the vaults of the bank of Cox and Co., at Charing
              Cross, there is a travel-worn and battered tin dispatch-box with
              my name, John H. Watson, M.D., Late Indian Army, painted upon the
              lid. It is crammed with papers, nearly all of which are records of
              cases to illustrate the curious problems which Mr. Sherlock Holmes
              had at various times to examine. Some, and not the least
              interesting, were complete failures, and as such will hardly bear
              narrating, since no final explanation is forthcoming. A problem
              without a solution may interest the student, but can hardly fail
              to annoy the casual reader. Among these unfinished tales is that
              of Mr. James Phillimore, who, stepping back into his own house to
              get his umbrella, was never more seen in this world. No less
              remarkable is that of the cutter{' '}
              <span className='italic'>Alicia</span>, which sailed one spring
              morning into a small patch of mist from where she never again
              emerged, nor was anything further ever heard of herself and her
              crew. A third case worthy of note is that of Isadora Persano, the
              well-known journalist and duellist, who was found stark staring
              mad with a match box in front of him which contained a remarkable
              worm said to be unknown to science. Apart from these unfathomed
              cases, there are some which involve the secrets of private
              families to an extent which would mean consternation in many
              exalted quarters if it were thought possible that they might find
              their way into print. I need not say that such a breach of
              confidence is unthinkable, and that these records will be
              separated and destroyed now that my friend has time to turn his
              energies to the matter. There remain a considerable residue of
              cases of greater or less interest which I might have edited before
              had I not feared to give the public a surfeit which might react
              upon the reputation of the man whom above all others I revere. In
              some I was myself concerned and can speak as an eye-witness, while
              in others I was either not present or played so small a part that
              they could only be told as by a third person. The following
              narrative is drawn from my own experience.
            </TextNode>

            <TextNode>
              It was a wild morning in October, and I observed as I was dressing
              how the last remaining leaves were being whirled from the solitary
              plane tree which graces the yard behind our house. I descended to
              breakfast prepared to find my companion in depressed spirits, for,
              like all great artists, he was easily impressed by his
              surroundings. On the contrary, I found that he had nearly finished
              his meal, and that his mood was particularly bright and joyous,
              with that somewhat sinister cheerfulness which was characteristic
              of his lighter moments.
            </TextNode>

            <TextNode>“You have a case, Holmes?” I remarked.</TextNode>

            <TextNode>
              “The faculty of deduction is certainly contagious, Watson,” he
              answered. “It has enabled you to probe my secret. Yes, I have a
              case. After a month of trivialities and stagnation the wheels move
              once more.”
            </TextNode>

            <TextNode>“Might I share it?”</TextNode>

            <TextNode>
              “There is little to share, but we may discuss it when you have
              consumed the two hard-boiled eggs with which our new cook has
              favoured us. Their condition may not be unconnected with the copy
              of <span className='italic'>The Family Herald</span> which I
              observed yesterday upon the hall-table. Even so trivial a matter
              as cooking an egg demands an attention which is conscious of the
              passage of time and incompatible with the love romance in that
              excellent periodical.”
            </TextNode>

            <TextNode>
              A quarter of an hour later the table had been cleared and we were
              face to face. He had drawn a letter from his pocket.
            </TextNode>

            <TextNode>
              “You have heard of Neil Gibson, the Gold King?” he said.
            </TextNode>

            <TextNode>“You mean the American Senator?”</TextNode>

            <TextNode>
              “Well, he was once Senator for some Western state, but is better
              known as the greatest gold-mining magnate in the world.”
            </TextNode>

            <TextNode>
              “Yes, I know of him. He has surely lived in England for some time.
              His name is very familiar.”
            </TextNode>

            <TextNode>
              “Yes, he bought a considerable estate in Hampshire some five years
              ago. Possibly you have already heard of the tragic end of his
              wife?”
            </TextNode>

            <TextNode>
              “Of course. I remember it now. That is why the name is familiar.
              But I really know nothing of the details.”
            </TextNode>

            <TextNode>
              Holmes waved his hand towards some papers on a chair. “I had no
              idea that the case was coming my way or I should have had my
              extracts ready,” said he. “The fact is that the problem, though
              exceedingly sensational, appeared to present no difficulty. The
              interesting personality of the accused does not obscure the
              clearness of the evidence. That was the view taken by the
              coroner's jury and also in the police-court proceedings. It is now
              referred to the Assizes at Winchester. I fear it is a thankless
              business. I can discover facts, Watson, but I cannot change them.
              Unless some entirely new and unexpected ones come to light I do
              not see what my client can hope for.”
            </TextNode>

            <TextNode>“Your client?”</TextNode>

            <TextNode>
              “Ah, I forgot I had not told you. I am getting into your involved
              habit, Watson, of telling a story backward. You had best read this
              first.”
            </TextNode>

            <TextNode>
              The letter which he handed to me, written in a bold, masterful
              hand, ran as follows:
            </TextNode>

            <Indent>
              <TextNode noIndent className='text-right  italic'>
                Claridge's Hotel
              </TextNode>
              <TextNode noIndent className='text-right  italic'>
                October 3rd.
              </TextNode>
              <TextNode noIndent className='italic'>
                Dear Mr. Sherlock Holmes:
              </TextNode>
              <TextNode noIndent>
                I can't see the best woman God ever made go to her death without
                doing all that is possible to save her. I can't explain things—I
                can't even try to explain them, but I know beyond all doubt that
                Miss Dunbar is innocent. You know the facts—who doesn't? It has
                been the gossip of the country. And never a voice raised for
                her! It's the damned injustice of it all that makes me crazy.
                That woman has a heart that wouldn't let her kill a fly. Well,
                I'll come at eleven to-morrow and see if you can get some ray of
                light in the dark. Maybe I have a clue and don't know it.
                Anyhow, all I know and all I have and all I am are for your use
                if only you can save her. If ever in your life you showed your
                powers, put them now into this case.
              </TextNode>
              <TextNode noIndent className='italic'>
                Yours faithfully,
              </TextNode>
              <TextNode noIndent className='italic'>
                J. Neil Gibson.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “There you have it,” said Sherlock Holmes, knocking out the ashes
              of his after-breakfast pipe and slowly refilling it. “That is the
              gentleman I await. As to the story, you have hardly time to master
              all these papers, so I must give it to you in a nutshell if you
              are to take an intelligent interest in the proceedings. This man
              is the greatest financial power in the world, and a man, as I
              understand, of most violent and formidable character. He married a
              wife, the victim of this tragedy, of whom I know nothing save that
              she was past her prime, which was the more unfortunate as a very
              attractive governess superintended the education of two young
              children. These are the three people concerned, and the scene is a
              grand old manor house, the centre of a historical English state.
              Then as to the tragedy. The wife was found in the grounds nearly
              half a mile from the house, late at night, clad in her dinner
              dress, with a shawl over her shoulders and a revolver bullet
              through her brain. No weapon was found near her and there was no
              local clue as to the murder. No weapon near her, Watson—mark that!
              The crime seems to have been committed late in the evening, and
              the body was found by a game-keeper about eleven o'clock, when it
              was examined by the police and by a doctor before being carried up
              to the house. Is this too condensed, or can you follow it
              clearly?”
            </TextNode>

            <TextNode>
              “It is all very clear. But why suspect the governess?”
            </TextNode>

            <TextNode>
              “Well, in the first place there is some very direct evidence. A
              revolver with one discharged chamber and a calibre which
              corresponded with the bullet was found on the floor of her
              wardrobe.” His eyes fixed and he repeated in broken words,
              “On—the—floor—of—her—wardrobe.” Then he sank into silence, and I
              saw that some train of thought had been set moving which I should
              be foolish to interrupt. Suddenly with a start he emerged into
              brisk life once more. “Yes, Watson, it was found. Pretty damning,
              eh? So the two juries thought. Then the dead woman had a note upon
              her making an appointment at that very place and signed by the
              governess. How's that? Finally there is the motive. Senator Gibson
              is an attractive person. If his wife dies, who more likely to
              succeed her than the young lady who had already by all accounts
              received pressing attentions from her employer? Love, fortune,
              power, all depending upon one middle-aged life. Ugly, Watson—very
              ugly!”
            </TextNode>

            <TextNode>“Yes, indeed, Holmes.”</TextNode>

            <TextNode>
              “Nor could she prove an alibi. On the contrary, she had to admit
              that she was down near Thor Bridge—that was the scene of the
              tragedy—about that hour. She couldn't deny it, for some passing
              villager had seen her there.”
            </TextNode>

            <TextNode>“That really seems final.”</TextNode>

            <TextNode>
              “And yet, Watson—and yet! This bridge—a single broad span of stone
              with balustraded sides—carries the drive over the narrowest part
              of a long, deep, reed-girt sheet of water. Thor Mere it is called.
              In the mouth of the bridge lay the dead woman. Such are the main
              facts. But here, if I mistake not, is our client, considerably
              before his time.”
            </TextNode>

            <TextNode>
              Billy had opened the door, but the name which he announced was an
              unexpected one. Mr. Marlow Bates was a stranger to both of us. He
              was a thin, nervous wisp of a man with frightened eyes and a
              twitching, hesitating manner—a man whom my own professional eye
              would judge to be on the brink of an absolute nervous breakdown.
            </TextNode>

            <TextNode>
              “You seem agitated, Mr. Bates,” said Holmes. “Pray sit down. I
              fear I can only give you a short time, for I have an appointment
              at eleven.”
            </TextNode>

            <TextNode>
              “I know you have,” our visitor gasped, shooting out short
              sentences like a man who is out of breath. “Mr. Gibson is coming.
              Mr. Gibson is my employer. I am manager of his estate. Mr. Holmes,
              he is a villain—an infernal villain.”
            </TextNode>

            <TextNode>“Strong language, Mr. Bates.”</TextNode>

            <TextNode>
              “I have to be emphatic, Mr. Holmes, for the time is so limited. I
              would not have him find me here for the world. He is almost due
              now. But I was so situated that I could not come earlier. His
              secretary, Mr. Ferguson, only told me this morning of his
              appointment with you.”
            </TextNode>

            <TextNode>“And you are his manager?”</TextNode>

            <TextNode>
              “I have given him notice. In a couple of weeks I shall have shaken
              off his accursed slavery. A hard man, Mr. Holmes, hard to all
              about him. Those public charities are a screen to cover his
              private iniquities. But his wife was his chief victim. He was
              brutal to her—yes, sir, brutal! How she came by her death I do not
              know, but I am sure that he had made her life a misery to her. She
              was a creature of the tropics, a Brazilian by birth, as no doubt
              you know.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“No, it had escaped me.”</TextNode>
            <TextNode>
              “Tropical by birth and tropical by nature. A child of the sun and
              of passion. She had loved him as such women can love, but when her
              own physical charms had faded—I am told that they once were
              great—there was nothing to hold him. We all liked her and felt for
              her and hated him for the way that he treated her. But he is
              plausible and cunning. That is all I have to say to you. Don't
              take him at his face value. There is more behind. Now I'll go. No,
              no, don't detain me! He is almost due.”
            </TextNode>

            <TextNode>
              With a frightened look at the clock our strange visitor literally
              ran to the door and disappeared.
            </TextNode>

            <TextNode>
              “Well! Well!” said Holmes after an interval of silence. “Mr.
              Gibson seems to have a nice loyal household. But the warning is a
              useful one, and now we can only wait till the man himself
              appears.”
            </TextNode>
            <TextNode>
              Sharp at the hour we heard a heavy step upon the stairs, and the
              famous millionaire was shown into the room. As I looked upon him I
              understood not only the fears and dislike of his manager but also
              the execrations which so many business rivals have heaped upon his
              head. If I were a sculptor and desired to idealize the successful
              man of affairs, iron of nerve and leathery of conscience, I should
              choose Mr. Neil Gibson as my model. His tall, gaunt, craggy figure
              had a suggestion of hunger and rapacity. An Abraham Lincoln keyed
              to base uses instead of high ones would give some idea of the man.
              His face might have been chiselled in granite, hard-set, craggy,
              remorseless, with deep lines upon it, the scars of many a crisis.
              Cold gray eyes, looking shrewdly out from under bristling brows,
              surveyed us each in turn. He bowed in perfunctory fashion as
              Holmes mentioned my name, and then with a masterful air of
              possession he drew a chair up to my companion and seated himself
              with his bony knees almost touching him.
            </TextNode>

            <TextNode>
              “Let me say right here, Mr. Holmes,” he began, “that money is
              nothing to me in this case. You can burn it if it's any use in
              lighting you to the truth. This woman is innocent and this woman
              has to be cleared, and it's up to you to do it. Name your figure!”
            </TextNode>

            <TextNode>
              “My professional charges are upon a fixed scale,” said Holmes
              coldly. “I do not vary them, save when I remit them altogether.”
            </TextNode>

            <TextNode>
              “Well, if dollars make no difference to you, think of the
              reputation. If you pull this off every paper in England and
              America will be booming you. You'll be the talk of two
              continents.”
            </TextNode>

            <TextNode>
              “Thank you, Mr. Gibson, I do not think that I am in need of
              booming. It may surprise you to know that I prefer to work
              anonymously, and that it is the problem itself which attracts me.
              But we are wasting time. Let us get down to the facts.”
            </TextNode>

            <TextNode>
              “I think that you will find all the main ones in the press
              reports. I don't know that I can add anything which will help you.
              But if there is anything you would wish more light upon—well, I am
              here to give it.”
            </TextNode>

            <TextNode>“Well, there is just one point.”</TextNode>

            <TextNode>“What is it?”</TextNode>

            <TextNode>
              “What were the exact relations between you and Miss Dunbar?”
            </TextNode>

            <TextNode>
              The Gold King gave a violent start and half rose from his chair.
              Then his massive calm came back to him.
            </TextNode>

            <TextNode>
              “I suppose you are within your rights—and maybe doing your duty—in
              asking such a question, Mr. Holmes.”
            </TextNode>

            <TextNode>“We will agree to suppose so,” said Holmes.</TextNode>

            <TextNode>
              “Then I can assure you that our relations were entirely and always
              those of an employer towards a young lady whom he never conversed
              with, or ever saw, save when she was in the company of his
              children.”
            </TextNode>

            <TextNode>Holmes rose from his chair.</TextNode>

            <TextNode>
              “I am a rather busy man, Mr. Gibson,” said he, “and I have no time
              or taste for aimless conversations. I wish you good-morning.”
            </TextNode>

            <TextNode>
              Our visitor had risen also, and his great loose figure towered
              above Holmes. There was an angry gleam from under those bristling
              brows and a tinge of colour in the sallow cheeks.
            </TextNode>

            <TextNode>
              “What the devil do you mean by this, Mr. Holmes? Do you dismiss my
              case?”
            </TextNode>

            <TextNode>
              “Well, Mr. Gibson, at least I dismiss you. I should have thought
              my words were plain.”
            </TextNode>

            <TextNode>
              “Plain enough, but what's at the back of it? Raising the price on
              me, or afraid to tackle it, or what? I've a right to a plain
              answer.”
            </TextNode>

            <TextNode>
              “Well, perhaps you have,” said Holmes. “I'll give you one. This
              case is quite sufficiently complicated to start with without the
              further difficulty of false information.”
            </TextNode>

            <TextNode>“Meaning that I lie.”</TextNode>

            <TextNode>
              “Well, I was trying to express it as delicately as I could, but if
              you insist upon the word I will not contradict you.”
            </TextNode>

            <TextNode>
              I sprang to my feet, for the expression upon the millionaire's
              face was fiendish in its intensity, and he had raised his great
              knotted fist. Holmes smiled languidly and reached his hand out for
              his pipe.
            </TextNode>

            <TextNode>
              “Don't be noisy, Mr. Gibson. I find that after breakfast even the
              smallest argument is unsettling. I suggest that a stroll in the
              morning air and a little quiet thought will be greatly to your
              advantage.”
            </TextNode>

            <TextNode>
              With an effort the Gold King mastered his fury. I could not but
              admire him, for by a supreme self-command he had turned in a
              minute from a hot flame of anger to a frigid and contemptuous
              indifference.
            </TextNode>

            <TextNode>
              “Well, it's your choice. I guess you know how to run your own
              business. I can't make you touch the case against your will.
              You've done yourself no good this morning, Mr. Holmes, for I have
              broken stronger men than you. No man ever crossed me and was the
              better for it.”
            </TextNode>

            <TextNode>
              “So many have said so, and yet here I am,” said Holmes, smiling.
              “Well, good-morning, Mr. Gibson. You have a good deal yet to
              learn.”
            </TextNode>

            <TextNode>
              Our visitor made a noisy exit, but Holmes smoked in imperturbable
              silence with dreamy eyes fixed upon the ceiling.
            </TextNode>

            <TextNode>“Any views, Watson?” he asked at last.</TextNode>

            <TextNode>
              “Well, Holmes, I must confess that when I consider that this is a
              man who would certainly brush any obstacle from his path, and when
              I remember that his wife may have been an obstacle and an object
              of dislike, as that man Bates plainly told us, it seems to me—”
            </TextNode>

            <TextNode>“Exactly. And to me also.”</TextNode>

            <TextNode>
              “But what were his relations with the governess, and how did you
              discover them?”
            </TextNode>

            <TextNode>
              “Bluff, Watson, bluff! When I considered the passionate,
              unconventional, unbusinesslike tone of his letter and contrasted
              it with his self-contained manner and appearance, it was pretty
              clear that there was some deep emotion which centred upon the
              accused woman rather than upon the victim. We've got to understand
              the exact relations of those three people if we are to reach the
              truth. You saw the frontal attack which I made upon him, and how
              imperturbably he received it. Then I bluffed him by giving him the
              impression that I was absolutely certain, when in reality I was
              only extremely suspicious.”
            </TextNode>

            <TextNode>“Perhaps he will come back?”</TextNode>

            <TextNode>
              “He is sure to come back. He must come back. He can't leave it
              where it is. Ha! isn't that a ring? Yes, there is his footstep.
              Well, Mr. Gibson, I was just saying to Dr. Watson that you were
              somewhat overdue.”
            </TextNode>

            <TextNode>
              The Gold King had reentered the room in a more chastened mood than
              he had left it. His wounded pride still showed in his resentful
              eyes, but his common sense had shown him that he must yield if he
              would attain his end.
            </TextNode>

            <TextNode>
              “I've been thinking it over, Mr. Holmes, and I feel that I have
              been hasty in taking your remarks amiss. You are justified in
              getting down to the facts, whatever they may be, and I think the
              more of you for it. I can assure you, however, that the relations
              between Miss Dunbar and me don't really touch this case.”
            </TextNode>

            <TextNode>“That is for me to decide, is it not?”</TextNode>

            <TextNode>
              “Yes, I guess that is so. You're like a surgeon who wants every
              symptom before he can give his diagnosis.”
            </TextNode>

            <TextNode>
              “Exactly. That expresses it. And it is only a patient who has an
              object in deceiving his surgeon who would conceal the facts of his
              case.”
            </TextNode>

            <TextNode>
              “That may be so, but you will admit, Mr. Holmes, that most men
              would shy off a bit when they are asked point-blank what their
              relations with a woman may be—if there is really some serious
              feeling in the case. I guess most men have a little private
              reserve of their own in some corner of their souls where they
              don't welcome intruders. And you burst suddenly into it. But the
              object excuses you, since it was to try and save her. Well, the
              stakes are down and the reserve open, and you can explore where
              you will. What is it you want?”
            </TextNode>

            <TextNode>“The truth.”</TextNode>

            <TextNode>
              The Gold King paused for a moment as one who marshals his
              thoughts. His grim, deep-lined face had become even sadder and
              more grave.
            </TextNode>

            <TextNode>
              “I can give it to you in a very few words, Mr. Holmes,” said he at
              last. “There are some things that are painful as well as difficult
              to say, so I won't go deeper than is needful. I met my wife when I
              was gold-hunting in Brazil. Maria Pinto was the daughter of a
              government official at Manaos, and she was very beautiful. I was
              young and ardent in those days, but even now, as I look back with
              colder blood and a more critical eye, I can see that she was rare
              and wonderful in her beauty. It was a deep rich nature, too,
              passionate, whole-hearted, tropical, ill-balanced, very different
              from the American women whom I had known. Well, to make a long
              story short, I loved her and I married her. It was only when the
              romance had passed—and it lingered for years—that I realized that
              we had nothing—absolutely nothing—in common. My love faded. If
              hers had faded also it might have been easier. But you know the
              wonderful way of women! Do what I might, nothing could turn her
              from me. If I have been harsh to her, even brutal as some have
              said, it has been because I knew that if I could kill her love, or
              if it turned to hate, it would be easier for both of us. But
              nothing changed her. She adored me in those English woods as she
              had adored me twenty years ago on the banks of the Amazon. Do what
              I might, she was as devoted as ever.
            </TextNode>

            <TextNode>
              “Then came Miss Grace Dunbar. She answered our advertisement and
              became governess to our two children. Perhaps you have seen her
              portrait in the papers. The whole world has proclaimed that she
              also is a very beautiful woman. Now, I make no pretence to be more
              moral than my neighbours, and I will admit to you that I could not
              live under the same roof with such a woman and in daily contact
              with her without feeling a passionate regard for her. Do you blame
              me, Mr. Holmes?”
            </TextNode>

            <TextNode>
              “I do not blame you for feeling it. I should blame you if you
              expressed it, since this young lady was in a sense under your
              protection.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page326;

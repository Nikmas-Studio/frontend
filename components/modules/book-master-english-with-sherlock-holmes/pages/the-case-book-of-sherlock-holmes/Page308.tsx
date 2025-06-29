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

function Page308({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE ILLUSTRIOUS CLIENT'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “She is not in her senses. She is madly in love. She has been told
              all about him. She cares nothing.”
            </TextNode>

            <TextNode>“Told about the murder?”</TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>“My Lord, she must have a nerve!”</TextNode>

            <TextNode>“She puts them all down as slanders.”</TextNode>

            <TextNode>
              “Couldn't you lay proofs before her silly eyes?”
            </TextNode>

            <TextNode>“Well, can you help us do so?”</TextNode>

            <TextNode>
              “Ain't I a proof myself? If I stood before her and told her how he
              used me—”
            </TextNode>

            <TextNode>“Would you do this?”</TextNode>

            <TextNode>“Would I? Would I not!”</TextNode>

            <TextNode>
              “Well, it might be worth trying. But he has told her most of his
              sins and had pardon from her, and I understand she will not reopen
              the question.”
            </TextNode>

            <TextNode>
              “I'll lay he didn't tell her all,” said Miss Winter. “I caught a
              glimpse of one or two murders besides the one that made such a
              fuss. He would speak of someone in his velvet way and then look at
              me with a steady eye and say: ‘He died within a month.’ It wasn't
              hot air, either. But I took little notice—you see, I loved him
              myself at that time. Whatever he did went with me, same as with
              this poor fool! There was just one thing that shook me. Yes, by
              cripes! if it had not been for his poisonous, lying tongue that
              explains and soothes, I'd have left him that very night. It's a
              book he has—a brown leather book with a lock, and his arms in gold
              on the outside. I think he was a bit drunk that night, or he would
              not have shown it to me.”
            </TextNode>

            <TextNode>“What was it, then?”</TextNode>

            <TextNode>
              “I tell you, Mr. Holmes, this man collects women, and takes a
              pride in his collection, as some men collect moths or butterflies.
              He had it all in that book. Snapshot photographs, names, details,
              everything about them. It was a beastly book—a book no man, even
              if he had come from the gutter, could have put together. But it
              was Adelbert Gruner's book all the same. ‘Souls I have ruined.’ He
              could have put that on the outside if he had been so minded.
              However, that's neither here nor there, for the book would not
              serve you, and, if it would, you can't get it.”
            </TextNode>

            <TextNode>“Where is it?”</TextNode>

            <TextNode>
              “How can I tell you where it is now? It's more than a year since I
              left him. I know where he kept it then. He's a precise, tidy cat
              of a man in many of his ways, so maybe it is still in the
              pigeon-hole of the old bureau in the inner study. Do you know his
              house?”
            </TextNode>

            <TextNode>“I've been in the study,” said Holmes.</TextNode>

            <TextNode>
              “Have you, though? You haven't been slow on the job if you only
              started this morning. Maybe dear Adelbert has met his match this
              time. The outer study is the one with the Chinese crockery in
              it—big glass cupboard between the windows. Then behind his desk is
              the door that leads to the inner study—a small room where he keeps
              papers and things.”
            </TextNode>

            <TextNode>“Is he not afraid of burglars?”</TextNode>

            <TextNode>
              “Adelbert is no coward. His worst enemy couldn't say that of him.
              He can look after himself. There's a burglar alarm at night.
              Besides, what is there for a burglar—unless they got away with all
              this fancy crockery?”
            </TextNode>

            <TextNode>
              “No good,” said Shinwell Johnson with the decided voice of the
              expert. “No fence wants stuff of that sort that you can neither
              melt nor sell.”
            </TextNode>

            <TextNode>
              “Quite so,” said Holmes. “Well, now, Miss Winter, if you would
              call here to-morrow evening at five, I would consider in the
              meanwhile whether your suggestion of seeing this lady personally
              may not be arranged. I am exceedingly obliged to you for your
              cooperation. I need not say that my clients will consider
              liberally—”
            </TextNode>

            <TextNode>
              “None of that, Mr. Holmes,” cried the young woman. “I am not out
              for money. Let me see this man in the mud, and I've got all I've
              worked for—in the mud with my foot on his cursed face. That's my
              price. I'm with you to-morrow or any other day so long as you are
              on his track. Porky here can tell you always where to find me.”
            </TextNode>

            <TextNode>
              I did not see Holmes again until the following evening when we
              dined once more at our Strand restaurant. He shrugged his
              shoulders when I asked him what luck he had had in his interview.
              Then he told the story, which I would repeat in this way. His
              hard, dry statement needs some little editing to soften it into
              the terms of real life.
            </TextNode>

            <TextNode>
              “There was no difficulty at all about the appointment,” said
              Holmes, “for the girl glories in showing abject filial obedience
              in all secondary things in an attempt to atone for her flagrant
              breach of it in her engagement. The General 'phoned that all was
              ready, and the fiery Miss W. turned up according to schedule, so
              that at half-past five a cab deposited us outside 104 Berkeley
              Square, where the old soldier resides—one of those awful gray
              London castles which would make a church seem frivolous. A footman
              showed us into a great yellow-curtained drawing-room, and there
              was the lady awaiting us, demure, pale, self-contained, as
              inflexible and remote as a snow image on a mountain.
            </TextNode>

            <TextNode>
              “I don't quite know how to make her clear to you, Watson. Perhaps
              you may meet her before we are through, and you can use your own
              gift of words. She is beautiful, but with the ethereal other-world
              beauty of some fanatic whose thoughts are set on high. I have seen
              such faces in the pictures of the old masters of the Middle Ages.
              How a beastman could have laid his vile paws upon such a being of
              the beyond I cannot imagine. You may have noticed how extremes
              call to each other, the spiritual to the animal, the cave-man to
              the angel. You never saw a worse case than this.
            </TextNode>

            <TextNode>
              “She knew what we had come for, of course—that villain had lost no
              time in poisoning her mind against us. Miss Winter's advent rather
              amazed her, I think, but she waved us into our respective chairs
              like a reverend abbess receiving two rather leprous mendicants. If
              your head is inclined to swell, my dear Watson, take a course of
              Miss Violet de Merville.
            </TextNode>

            <TextNode>
              “‘Well, sir,’ said she in a voice like the wind from an iceberg,
              ‘your name is familiar to me. You have called, as I understand, to
              malign my fiancé, Baron Gruner. It is only by my father's request
              that I see you at all, and I warn you in advance that anything you
              can say could not possibly have the slightest effect upon my
              mind.’
            </TextNode>

            <TextNode>
              “I was sorry for her, Watson. I thought of her for the moment as I
              would have thought of a daughter of my own. I am not often
              eloquent. I use my head, not my heart. But I really did plead with
              her with all the warmth of words that I could find in my nature. I
              pictured to her the awful position of the woman who only wakes to
              a man's character after she is his wife—a woman who has to submit
              to be caressed by bloody hands and lecherous lips. I spared her
              nothing—the shame, the fear, the agony, the hopelessness of it
              all. All my hot words could not bring one tinge of colour to those
              ivory cheeks or one gleam of emotion to those abstracted eyes. I
              thought of what the rascal had said about a post-hypnotic
              influence. One could really believe that she was living above the
              earth in some ecstatic dream. Yet there was nothing indefinite in
              her replies.
            </TextNode>

            <TextNode>
              “‘I have listened to you with patience, Mr. Holmes,’ said she.
              ‘The effect upon my mind is exactly as predicted. I am aware that
              Adelbert, that my fiancé, has had a stormy life in which he has
              incurred bitter hatreds and most unjust aspersions. You are only
              the last of a series who have brought their slanders before me.
              Possibly you mean well, though I learn that you are a paid agent
              who would have been equally willing to act for the Baron as
              against him. But in any case I wish you to understand once for all
              that I love him and that he loves me, and that the opinion of all
              the world is no more to me than the twitter of those birds outside
              the window. If his noble nature has ever for an instant fallen, it
              may be that I have been specially sent to raise it to its true and
              lofty level. I am not clear’—here she turned eyes upon my
              companion—‘who this young lady may be.’
            </TextNode>

            <TextNode>
              “I was about to answer when the girl broke in like a whirlwind. If
              ever you saw flame and ice face to face, it was those two women.
            </TextNode>

            <TextNode>
              “‘I'll tell you who I am,’ she cried, springing out of her chair,
              her mouth all twisted with passion—‘I am his last mistress. I am
              one of a hundred that he has tempted and used and ruined and
              thrown into the refuse heap, as he will you also. Your refuse heap
              is more likely to be a grave, and maybe that's the best. I tell
              you, you foolish woman, if you marry this man he'll be the death
              of you. It may be a broken heart or it may be a broken neck, but
              he'll have you one way or the other. It's not out of love for you
              I'm speaking. I don't care a tinker's curse whether you live or
              die. It's out of hate for him and to spite him and to get back on
              him for what he did to me. But it's all the same, and you needn't
              look at me like that, my fine lady, for you may be lower than I am
              before you are through with it.’
            </TextNode>

            <TextNode>
              “‘I should prefer not to discuss such matters,’ said Miss de
              Merville coldly. ‘Let me say once for all that I am aware of three
              passages in my fiancé's life in which he became entangled with
              designing women, and that I am assured of his hearty repentance
              for any evil that he may have done.’
            </TextNode>

            <TextNode>
              “‘Three passages!’ screamed my companion. ‘You fool! You
              unutterable fool!’
            </TextNode>

            <TextNode>
              “‘Mr. Holmes, I beg that you will bring this interview to an end,’
              said the icy voice. ‘I have obeyed my father's wish in seeing you,
              but I am not compelled to listen to the ravings of this person.’
            </TextNode>

            <TextNode>
              “With an oath Miss Winter darted forward, and if I had not caught
              her wrist she would have clutched this maddening woman by the
              hair. I dragged her towards the door and was lucky to get her back
              into the cab without a public scene, for she was beside herself
              with rage. In a cold way I felt pretty furious myself, Watson, for
              there was something indescribably annoying in the calm aloofness
              and supreme self-complaisance of the woman whom we were trying to
              save. So now once again you know exactly how we stand, and it is
              clear that I must plan some fresh opening move, for this gambit
              won't work. I'll keep in touch with you, Watson, for it is more
              than likely that you will have your part to play, though it is
              just possible that the next move may lie with them rather than
              with us.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              And it did. Their blow fell—or his blow rather, for never could I
              believe that the lady was privy to it. I think I could show you
              the very paving-stone upon which I stood when my eyes fell upon
              the placard, and a pang of horror passed through my very soul. It
              was between the Grand Hotel and Charing Cross Station, where a
              one-legged news-vender displayed his evening papers. The date was
              just two days after the last conversation. There, black upon
              yellow, was the terrible news-sheet:
            </TextNode>
            <TextNode className='text-center italic'>
              Murderous Attack Upon Sherlock Holmes
            </TextNode>
            <TextNode noIndent>
              I think I stood stunned for some moments. Then I have a confused
              recollection of snatching at a paper, of the remonstrance of the
              man, whom I had not paid, and, finally, of standing in the doorway
              of a chemist's shop while I turned up the fateful paragraph. This
              was how it ran:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                We learn with regret that Mr. Sherlock Holmes, the well-known
                private detective, was the victim this morning of a murderous
                assault which has left him in a precarious position. There are
                no exact details to hand, but the event seems to have occurred
                about twelve o'clock in Regent Street, outside the Cafe Royal.
                The attack was made by two men armed with sticks, and Mr. Holmes
                was beaten about the head and body, receiving injuries which the
                doctors describe as most serious. He was carried to Charing
                Cross Hospital and afterwards insisted upon being taken to his
                rooms in Baker Street. The miscreants who attacked him appear to
                have been respectably dressed men, who escaped from the
                bystanders by passing through the Cafe Royal and out into
                Glasshouse Street behind it. No doubt they belonged to that
                criminal fraternity which has so often had occasion to bewail
                the activity and ingenuity of the injured man.
              </TextNode>
            </Indent>
            <TextNode noIndent>
              I need not say that my eyes had hardly glanced over the paragraph
              before I had sprung into a hansom and was on my way to Baker
              Street. I found Sir Leslie Oakshott, the famous surgeon, in the
              hall and his brougham waiting at the curb.
            </TextNode>

            <TextNode>
              “No immediate danger,” was his report. “Two lacerated scalp wounds
              and some considerable bruises. Several stitches have been
              necessary. Morphine has been injected and quiet is essential, but
              an interview of a few minutes would not be absolutely forbidden.”
            </TextNode>

            <TextNode>
              With this permission I stole into the darkened room. The sufferer
              was wide awake, and I heard my name in a hoarse whisper. The blind
              was three-quarters down, but one ray of sunlight slanted through
              and struck the bandaged head of the injured man. A crimson patch
              had soaked through the white linen compress. I sat beside him and
              bent my head.
            </TextNode>

            <TextNode>
              “All right, Watson. Don't look so scared,” he muttered in a very
              weak voice. “It's not as bad as it seems.”
            </TextNode>

            <TextNode>“Thank God for that!”</TextNode>

            <TextNode>
              “I'm a bit of a single-stick expert, as you know. I took most of
              them on my guard. It was the second man that was too much for me.”
            </TextNode>

            <TextNode>
              “What can I do, Holmes? Of course, it was that damned fellow who
              set them on. I'll go and thrash the hide off him if you give the
              word.”
            </TextNode>

            <TextNode>
              “Good old Watson! No, we can do nothing there unless the police
              lay their hands on the men. But their get-away had been well
              prepared. We may be sure of that. Wait a little. I have my plans.
              The first thing is to exaggerate my injuries. They'll come to you
              for news. Put it on thick, Watson. Lucky if I live the week
              out—concussion—delirium—what you like! You can't overdo it.”
            </TextNode>

            <TextNode>“But Sir Leslie Oakshott?”</TextNode>

            <TextNode>
              “Oh, he's all right. He shall see the worst side of me. I'll look
              after that.”
            </TextNode>

            <TextNode>“Anything else?”</TextNode>

            <TextNode>
              “Yes. Tell Shinwell Johnson to get that girl out of the way. Those
              beauties will be after her now. They know, of course, that she was
              with me in the case. If they dared to do me in it is not likely
              they will neglect her. That is urgent. Do it to-night.”
            </TextNode>

            <TextNode>“I'll go now. Anything more?”</TextNode>

            <TextNode>
              “Put my pipe on the table—and the tobacco-slipper. Right! Come in
              each morning and we will plan our campaign.”
            </TextNode>

            <TextNode>
              I arranged with Johnson that evening to take Miss Winter to a
              quiet suburb and see that she lay low until the danger was past.
            </TextNode>

            <TextNode>
              For six days the public were under the impression that Holmes was
              at the door of death. The bulletins were very grave and there were
              sinister paragraphs in the papers. My continual visits assured me
              that it was not so bad as that. His wiry constitution and his
              determined will were working wonders. He was recovering fast, and
              I had suspicions at times that he was really finding himself
              faster than he pretended even to me. There was a curious secretive
              streak in the man which led to many dramatic effects, but left
              even his closest friend guessing as to what his exact plans might
              be. He pushed to an extreme the axiom that the only safe plotter
              was he who plotted alone. I was nearer him than anyone else, and
              yet I was always conscious of the gap between.
            </TextNode>

            <TextNode>
              On the seventh day the stitches were taken out, in spite of which
              there was a report of erysipelas in the evening papers. The same
              evening papers had an announcement which I was bound, sick or
              well, to carry to my friend. It was simply that among the
              passengers on the Cunard boat{' '}
              <span className='italic'>Ruritania</span>, starting from Liverpool
              on Friday, was the Baron Adelbert Gruner, who had some important
              financial business to settle in the States before his impending
              wedding to Miss Violet de Merville, only daughter of, etc., etc.
              Holmes listened to the news with a cold, concentrated look upon
              his pale face, which told me that it hit him hard.
            </TextNode>

            <TextNode>
              “Friday!” he cried. “Only three clear days. I believe the rascal
              wants to put himself out of danger's way. But he won't, Watson! By
              the Lord Harry, he won't! Now, Watson, I want you to do something
              for me.”
            </TextNode>

            <TextNode>“I am here to be used, Holmes.”</TextNode>

            <TextNode>
              “Well, then, spend the next twenty-four hours in an intensive
              study of Chinese pottery.”
            </TextNode>

            <TextNode>
              He gave no explanations and I asked for none. By long experience I
              had learned the wisdom of obedience. But when I had left his room
              I walked down Baker Street, revolving in my head how on earth I
              was to carry out so strange an order. Finally I drove to the
              London Library in St. James's Square, put the matter to my friend
              Lomax, the sublibrarian, and departed to my rooms with a goodly
              volume under my arm.
            </TextNode>

            <TextNode>
              It is said that the barrister who crams up a case with such care
              that he can examine an expert witness upon the Monday has
              forgotten all his forced knowledge before the Saturday. Certainly
              I should not like now to pose as an authority upon ceramics. And
              yet all that evening, and all that night with a short interval for
              rest, and all next morning, I was sucking in knowledge and
              committing names to memory. There I learned of the hall-marks of
              the great artist-decorators, of the mystery of cyclical dates, the
              marks of the Hung-wu and the beauties of the Yung-lo, the writings
              of Tang-ying, and the glories of the primitive period of the Sung
              and the Yuan. I was charged with all this information when I
              called upon Holmes next evening. He was out of bed now, though you
              would not have guessed it from the published reports, and he sat
              with his much-bandaged head resting upon his hand in the depth of
              his favourite armchair.
            </TextNode>

            <TextNode>
              “Why, Holmes,” I said, “if one believed the papers, you are
              dying.”
            </TextNode>

            <TextNode>
              “That,” said he, “is the very impression which I intended to
              convey. And now, Watson, have you learned your lessons?”
            </TextNode>

            <TextNode>“At least I have tried to.”</TextNode>

            <TextNode>
              “Good. You could keep up an intelligent conversation on the
              subject?”
            </TextNode>

            <TextNode>“I believe I could.”</TextNode>

            <TextNode>
              “Then hand me that little box from the mantelpiece.”
            </TextNode>

            <TextNode>
              He opened the lid and took out a small object most carefully
              wrapped in some fine Eastern silk. This he unfolded, and disclosed
              a delicate little saucer of the most beautiful deep-blue colour.
            </TextNode>

            <TextNode>
              “It needs careful handling, Watson. This is the real egg-shell
              pottery of the Ming dynasty. No finer piece ever passed through
              Christie's. A complete set of this would be worth a king's
              ransom—in fact, it is doubtful if there is a complete set outside
              the imperial palace of Peking. The sight of this would drive a
              real connoisseur wild.”
            </TextNode>

            <TextNode>“What am I to do with it?”</TextNode>

            <TextNode>
              Holmes handed me a card upon which was printed: “Dr. Hill Barton,
              369 Half Moon Street.”
            </TextNode>

            <TextNode>
              “That is your name for the evening, Watson. You will call upon
              Baron Gruner. I know something of his habits, and at half-past
              eight he would probably be disengaged. A note will tell him in
              advance that you are about to call, and you will say that you are
              bringing him a specimen of an absolutely unique set of Ming china.
              You may as well be a medical man, since that is a part which you
              can play without duplicity. You are a collector, this set has come
              your way, you have heard of the Baron's interest in the subject,
              and you are not averse to selling at a price.”
            </TextNode>

            <TextNode>“What price?”</TextNode>

            <TextNode>
              “Well asked, Watson. You would certainly fall down badly if you
              did not know the value of your own wares. This saucer was got for
              me by Sir James, and comes, I understand, from the collection of
              his client. You will not exaggerate if you say that it could
              hardly be matched in the world.”
            </TextNode>

            <TextNode>
              “I could perhaps suggest that the set should be valued by an
              expert.”
            </TextNode>

            <TextNode>
              “Excellent, Watson! You scintillate to-day. Suggest Christie or
              Sotheby. Your delicacy prevents your putting a price for
              yourself.”
            </TextNode>

            <TextNode>“But if he won't see me?”</TextNode>

            <TextNode>
              “Oh, yes, he will see you. He has the collection mania in its most
              acute form—and especially on this subject, on which he is an
              acknowledged authority. Sit down, Watson, and I will dictate the
              letter. No answer needed. You will merely say that you are coming,
              and why.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page308;

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import dancingMenDark6 from '@/public/images/sherlock-danc-6-dark.jpg';
import dancingMenLight6 from '@/public/images/sherlock-danc-6-light.jpg';
import dancingMenDark7 from '@/public/images/sherlock-danc-7-dark.jpg';
import dancingMenLight7 from '@/public/images/sherlock-danc-7-light.jpg';
import dancingMenDark8 from '@/public/images/sherlock-danc-8-dark.jpg';
import dancingMenLight8 from '@/public/images/sherlock-danc-8-light.jpg';
import dancingMenDark9 from '@/public/images/sherlock-danc-9-dark.jpg';
import dancingMenLight9 from '@/public/images/sherlock-danc-9-light.jpg';
import Image from 'next/image';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page179({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;DANCING&nbsp;MEN'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Having once recognised, however, that the symbols stood for
              letters, and having applied the rules which guide us in all forms
              of secret writings, the solution was easy enough. The first
              message submitted to me was so short that it was impossible for me
              to do more than to say with some confidence that the symbol
            </TextNode>

            <Image
              className='mx-auto  h-[4.75rem]  w-auto  max-2md:h-auto  
                         dark:hidden'
              alt='dancing men'
              src={dancingMenLight6}
              quality={100}
            />
            <Image
              className='mx-auto  hidden  h-[4.75rem]  w-auto  max-2md:h-auto  
                         dark:block'
              alt='dancing men'
              src={dancingMenDark6}
              quality={100}
            />

            <TextNode className='mt-2' noIndent>
              stood for E. As you are aware, E is the most common letter in the
              English alphabet, and it predominates to so marked an extent that
              even in a short sentence one would expect to find it most often.
              Out of fifteen symbols in the first message four were the same, so
              it was reasonable to set this down as E. It is true that in some
              cases the figure was bearing a flag and in some cases not, but it
              was probable from the way in which the flags were distributed that
              they were used to break the sentence up into words. I accepted
              this as a hypothesis, and noted that E was represented by
            </TextNode>

            <Image
              className='mx-auto  h-[4.75rem]  w-auto  max-2md:h-auto  
                         dark:hidden'
              alt='dancing men'
              src={dancingMenLight7}
              quality={100}
            />
            <Image
              className='mx-auto  hidden  h-[4.75rem]  w-auto  max-2md:h-auto  
                         dark:block'
              alt='dancing men'
              src={dancingMenDark7}
              quality={100}
            />

            <TextNode className='mt-2' noIndent>
              “But now came the real difficulty of the inquiry. The order of the
              English letters after E is by no means well marked, and any
              preponderance which may be shown in an average of a printed sheet
              may be reversed in a single short sentence. Speaking roughly, T,
              A, O, I, N, S, H, R, D, and L are the numerical order in which
              letters occur; but T, A, O, and I are very nearly abreast of each
              other, and it would be an endless task to try each combination
              until a meaning was arrived at. I, therefore, waited for fresh
              material. In my second interview with Mr. Hilton Cubitt he was
              able to give me two other short sentences and one message, which
              appeared—since there was no flag—to be a single word. Here are the
              symbols. Now, in the single word I have already got the two E's
              coming second and fourth in a word of five letters. It might be
              ‘sever,’ or ‘lever,’ or ‘never.’ There can be no question that the
              latter as a reply to an appeal is far the most probable, and the
              circumstances pointed to its being a reply written by the lady.
              Accepting it as correct, we are now able to say that the symbols
            </TextNode>

            <Image
              className='mx-auto  h-[4.75rem]  w-auto  max-2md:h-auto  
                         dark:hidden'
              alt='dancing men'
              src={dancingMenLight8}
              quality={100}
            />
            <Image
              className='mx-auto  hidden  h-[4.75rem]  w-auto  max-2md:h-auto  
                         dark:block'
              alt='dancing men'
              src={dancingMenDark8}
              quality={100}
            />

            <TextNode className='mt-2' noIndent>
              stand respectively for N, V, and R.
            </TextNode>

            <TextNode>
              “Even now I was in considerable difficulty, but a happy thought
              put me in possession of several other letters. It occurred to me
              that if these appeals came, as I expected, from someone who had
              been intimate with the lady in her early life, a combination which
              contained two E's with three letters between might very well stand
              for the name ‘ELSIE.’ On examination I found that such a
              combination formed the termination of the message which was three
              times repeated. It was certainly some appeal to ‘Elsie.’ In this
              way I had got my L, S, and I. But what appeal could it be? There
              were only four letters in the word which preceded ‘Elsie,’ and it
              ended in E. Surely the word must be ‘COME.’ I tried all other four
              letters ending in E, but could find none to fit the case. So now I
              was in possession of C, O, and M, and I was in a position to
              attack the first message once more, dividing it into words and
              putting dots for each symbol which was still unknown. So treated
              it worked out in this fashion:
            </TextNode>

            <TextNode className='text-center' noIndent>
              .M .ERE ..E SL.NE.
            </TextNode>

            <TextNode noIndent>
              “Now the first letter can only be A, which is a most useful
              discovery, since it occurs no fewer than three times in this short
              sentence, and the H is also apparent in the second word. Now it
              becomes:—
            </TextNode>

            <TextNode noIndent className='text-center'>
              AM HERE A.E SLANE.
            </TextNode>

            <TextNode noIndent>
              Or, filling in the obvious vacancies in the name:—
            </TextNode>

            <TextNode noIndent className='text-center'>
              AM HERE ABE SLANEY.
            </TextNode>

            <TextNode noIndent>
              I had so many letters now that I could proceed with considerable
              confidence to the second message, which worked out in this
              fashion:—
            </TextNode>

            <TextNode noIndent className='text-center'>
              A. ELRI.ES.
            </TextNode>

            <TextNode noIndent>
              Here I could only make sense by putting T and G for the missing
              letters, and supposing that the name was that of some house or inn
              at which the writer was staying.”
            </TextNode>

            <TextNode>
              Inspector Martin and I had listened with the utmost interest to
              the full and clear account of how my friend had produced results
              which had led to so complete a command over our difficulties.
            </TextNode>

            <TextNode>
              “What did you do then, sir?” asked the inspector.
            </TextNode>

            <TextNode>
              “I had every reason to suppose that this Abe Slaney was an
              American, since Abe is an American contraction, and since a letter
              from America had been the starting-point of all the trouble. I had
              also every cause to think that there was some criminal secret in
              the matter. The lady's allusions to her past and her refusal to
              take her husband into her confidence both pointed in that
              direction. I therefore cabled to my friend, Wilson Hargreave, of
              the New York Police Bureau, who has more than once made use of my
              knowledge of London crime. I asked him whether the name of Abe
              Slaney was known to him. Here is his reply: ‘The most dangerous
              crook in Chicago.’ On the very evening upon which I had his answer
              Hilton Cubitt sent me the last message from Slaney. Working with
              known letters it took this form:—
            </TextNode>

            <TextNode noIndent className='text-center'>
              ELSIE .RE.ARE TO MEET THY GO.
            </TextNode>

            <TextNode noIndent>
              The addition of a P and a D completed a message which showed me
              that the rascal was proceeding from persuasion to threats, and my
              knowledge of the crooks of Chicago prepared me to find that he
              might very rapidly put his words into action. I at once came to
              Norfolk with my friend and colleague, Dr. Watson, but, unhappily,
              only in time to find that the worst had already occurred.”
            </TextNode>

            <TextNode>
              “It is a privilege to be associated with you in the handling of a
              case,” said the inspector, warmly. “You will excuse me, however,
              if I speak frankly to you. You are only answerable to yourself,
              but I have to answer to my superiors. If this Abe Slaney, living
              at Elrige's, is indeed the murderer, and if he has made his escape
              while I am seated here, I should certainly get into serious
              trouble.”
            </TextNode>

            <TextNode>
              “You need not be uneasy. He will not try to escape.”
            </TextNode>

            <TextNode>“How do you know?”</TextNode>

            <TextNode>“To fly would be a confession of guilt.”</TextNode>

            <TextNode>“Then let us go to arrest him.”</TextNode>

            <TextNode>“I expect him here every instant.”</TextNode>

            <TextNode>“But why should he come?”</TextNode>

            <TextNode>“Because I have written and asked him.”</TextNode>

            <TextNode>
              “But this is incredible, Mr. Holmes! Why should he come because
              you have asked him? Would not such a request rather rouse his
              suspicions and cause him to fly?”
            </TextNode>

            <TextNode>
              “I think I have known how to frame the letter,” said Sherlock
              Holmes. “In fact, if I am not very much mistaken, here is the
              gentleman himself coming up the drive.”
            </TextNode>

            <TextNode>
              A man was striding up the path which led to the door. He was a
              tall, handsome, swarthy fellow, clad in a suit of grey flannel,
              with a Panama hat, a bristling black beard, and a great,
              aggressive hooked nose, and flourishing a cane as he walked. He
              swaggered up the path as if the place belonged to him, and we
              heard his loud, confident peal at the bell.
            </TextNode>

            <TextNode>
              “I think, gentlemen,” said Holmes, quietly, “that we had best take
              up our position behind the door. Every precaution is necessary
              when dealing with such a fellow. You will need your handcuffs,
              inspector. You can leave the talking to me.”
            </TextNode>

            <TextNode>
              We waited in silence for a minute—one of those minutes which one
              can never forget. Then the door opened and the man stepped in. In
              an instant Holmes clapped a pistol to his head and Martin slipped
              the handcuffs over his wrists. It was all done so swiftly and
              deftly that the fellow was helpless before he knew that he was
              attacked. He glared from one to the other of us with a pair of
              blazing black eyes. Then he burst into a bitter laugh.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Well, gentlemen, you have the drop on me this time. I seem to
              have knocked up against something hard. But I came here in answer
              to a letter from Mrs. Hilton Cubitt. Don't tell me that she is in
              this? Don't tell me that she helped to set a trap for me?”
            </TextNode>

            <TextNode>
              “Mrs. Hilton Cubitt was seriously injured and is at death's door.”
            </TextNode>

            <TextNode>
              The man gave a hoarse cry of grief which rang through the house.
            </TextNode>

            <TextNode>
              “You're crazy!” he cried, fiercely. “It was he that was hurt, not
              she. Who would have hurt little Elsie? I may have threatened her,
              God forgive me, but I would not have touched a hair of her pretty
              head. Take it back—you! Say that she is not hurt!”
            </TextNode>

            <TextNode>
              “She was found badly wounded by the side of her dead husband.”
            </TextNode>

            <TextNode>
              He sank with a deep groan on to the settee and buried his face in
              his manacled hands. For five minutes he was silent. Then he raised
              his face once more, and spoke with the cold composure of despair.
            </TextNode>

            <TextNode>
              “I have nothing to hide from you, gentlemen,” said he. “If I shot
              the man he had his shot at me, and there's no murder in that. But
              if you think I could have hurt that woman, then you don't know
              either me or her. I tell you there was never a man in this world
              loved a woman more than I loved her. I had a right to her. She was
              pledged to me years ago. Who was this Englishman that he should
              come between us? I tell you that I had the first right to her, and
              that I was only claiming my own.”
            </TextNode>

            <TextNode>
              “She broke away from your influence when she found the man that
              you are,” said Holmes, sternly. “She fled from America to avoid
              you, and she married an honourable gentleman in England. You
              dogged her and followed her and made her life a misery to her in
              order to induce her to abandon the husband whom she loved and
              respected in order to fly with you, whom she feared and hated. You
              have ended by bringing about the death of a noble man and driving
              his wife to suicide. That is your record in this business, Mr. Abe
              Slaney, and you will answer for it to the law.”
            </TextNode>

            <TextNode>
              “If Elsie dies I care nothing what becomes of me,” said the
              American. He opened one of his hands and looked at a note crumpled
              up in his palm. “See here, mister,” he cried, with a gleam of
              suspicion in his eyes, “you're not trying to scare me over this,
              are you? If the lady is hurt as bad as you say, who was it that
              wrote this note?” He tossed it forwards on to the table.
            </TextNode>

            <TextNode>“I wrote it to bring you here.”</TextNode>

            <TextNode>
              “You wrote it? There was no one on earth outside the Joint who
              knew the secret of the dancing men. How came you to write it?”
            </TextNode>

            <TextNode>
              “What one man can invent another can discover,” said Holmes.
              “There is a cab coming to convey you to Norwich, Mr. Slaney. But,
              meanwhile, you have time to make some small reparation for the
              injury you have wrought. Are you aware that Mrs. Hilton Cubitt has
              herself lain under grave suspicion of the murder of her husband,
              and that it was only my presence here and the knowledge which I
              happened to possess which has saved her from the accusation? The
              least that you owe her is to make it clear to the whole world that
              she was in no way, directly or indirectly, responsible for his
              tragic end.”
            </TextNode>

            <TextNode>
              “I ask nothing better,” said the American. “I guess the very best
              case I can make for myself is the absolute naked truth.”
            </TextNode>

            <TextNode>
              “It is my duty to warn you that it will be used against you,”
              cried the inspector, with the magnificent fair-play of the British
              criminal law.
            </TextNode>

            <TextNode>Slaney shrugged his shoulders.</TextNode>

            <TextNode>
              “I'll chance that,” said he. “First of all, I want you gentlemen
              to understand that I have known this lady since she was a child.
              There were seven of us in a gang in Chicago, and Elsie's father
              was the boss of the Joint. He was a clever man, was old Patrick.
              It was he who invented that writing, which would pass as a child's
              scrawl unless you just happened to have the key to it. Well, Elsie
              learned some of our ways; but she couldn't stand the business, and
              she had a bit of honest money of her own, so she gave us all the
              slip and got away to London. She had been engaged to me, and she
              would have married me, I believe, if I had taken over another
              profession; but she would have nothing to do with anything on the
              cross. It was only after her marriage to this Englishman that I
              was able to find out where she was. I wrote to her, but got no
              answer. After that I came over, and, as letters were no use, I put
              my messages where she could read them.
            </TextNode>

            <TextNode>
              “Well, I have been here a month now. I lived in that farm, where I
              had a room down below, and could get in and out every night, and
              no one the wiser. I tried all I could to coax Elsie away. I knew
              that she read the messages, for once she wrote an answer under one
              of them. Then my temper got the better of me, and I began to
              threaten her. She sent me a letter then, imploring me to go away
              and saying that it would break her heart if any scandal should
              come upon her husband. She said that she would come down when her
              husband was asleep at three in the morning, and speak with me
              through the end window, if I would go away afterwards and leave
              her in peace. She came down and brought money with her, trying to
              bribe me to go. This made me mad, and I caught her arm and tried
              to pull her through the window. At that moment in rushed the
              husband with his revolver in his hand. Elsie had sunk down upon
              the floor, and we were face to face. I was heeled also, and I held
              up my gun to scare him off and let me get away. He fired and
              missed me. I pulled off almost at the same instant, and down he
              dropped. I made away across the garden, and as I went I heard the
              window shut behind me. That's God's truth, gentlemen, every word
              of it, and I heard no more about it until that lad came riding up
              with a note which made me walk in here, like a jay, and give
              myself into your hands.”
            </TextNode>

            <TextNode>
              A cab had driven up whilst the American had been talking. Two
              uniformed policemen sat inside. Inspector Martin rose and touched
              his prisoner on the shoulder.
            </TextNode>

            <TextNode>“It is time for us to go.”</TextNode>

            <TextNode>“Can I see her first?”</TextNode>

            <TextNode>
              “No, she is not conscious. Mr. Sherlock Holmes, I only hope that
              if ever again I have an important case I shall have the good
              fortune to have you by my side.”
            </TextNode>

            <TextNode>
              We stood at the window and watched the cab drive away. As I turned
              back my eye caught the pellet of paper which the prisoner had
              tossed upon the table. It was the note with which Holmes had
              decoyed him.
            </TextNode>

            <TextNode>
              “See if you can read it, Watson,” said he, with a smile.
            </TextNode>

            <TextNode>
              It contained no word, but this little line of dancing men:—
            </TextNode>

            <Image
              className='mx-auto  h-[4.75rem]  w-auto  max-2md:h-auto  
                         dark:hidden'
              alt='dancing men'
              src={dancingMenLight9}
              quality={100}
            />
            <Image
              className='mx-auto  hidden  h-[4.75rem]  w-auto  max-2md:h-auto  
                         dark:block'
              alt='dancing men'
              src={dancingMenDark9}
              quality={100}
            />

            <TextNode className='mt-2' noIndent>
              “If you use the code which I have explained,” said Holmes, “you
              will find that it simply means ‘Come here at once.’ I was
              convinced that it was an invitation which he would not refuse,
              since he could never imagine that it could come from anyone but
              the lady. And so, my dear Watson, we have ended by turning the
              dancing men to good when they have so often been the agents of
              evil, and I think that I have fulfilled my promise of giving you
              something unusual for your note-book. Three-forty is our train,
              and I fancy we should be back in Baker Street for dinner.”
            </TextNode>

            <TextNode>
              Only one word of epilogue. The American, Abe Slaney, was condemned
              to death at the winter assizes at Norwich; but his penalty was
              changed to penal servitude in consideration of mitigating
              circumstances, and the certainty that Hilton Cubitt had fired the
              first shot. Of Mrs. Hilton Cubitt I only know that I have heard
              she recovered entirely, and that she still remains a widow,
              devoting her whole life to the care of the poor and to the
              administration of her husband's estate.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page179;

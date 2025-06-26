import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Indent from '@/components/elements/book-master-english-with-sherlock-holmes/Indent';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import chartDark from '@/public/images/sherlock-nava-1-dark.png';
import chartLight from '@/public/images/sherlock-nava-1-light.png';
import Image from 'next/image';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page160({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE NAVAL TREATY'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              The July which immediately succeeded my marriage was made
              memorable by three cases of interest, in which I had the privilege
              of being associated with Sherlock Holmes and of studying his
              methods. I find them recorded in my notes under the headings of
              “The Adventure of the Second Stain,” “The Adventure of the Naval
              Treaty,” and “The Adventure of the Tired Captain.” The first of
              these, however, deals with interest of such importance and
              implicates so many of the first families in the kingdom that for
              many years it will be impossible to make it public. No case,
              however, in which Holmes was engaged has ever illustrated the
              value of his analytical methods so clearly or has impressed those
              who were associated with him so deeply. I still retain an almost
              verbatim report of the interview in which he demonstrated the true
              facts of the case to Monsieur Dubugue of the Paris police, and
              Fritz von Waldbaum, the well-known specialist of Dantzig, both of
              whom had wasted their energies upon what proved to be side-issues.
              The new century will have come, however, before the story can be
              safely told. Meanwhile I pass on to the second on my list, which
              promised also at one time to be of national importance, and was
              marked by several incidents which give it a quite unique
              character.
            </TextNode>

            <TextNode>
              During my school-days I had been intimately associated with a lad
              named Percy Phelps, who was of much the same age as myself, though
              he was two classes ahead of me. He was a very brilliant boy, and
              carried away every prize which the school had to offer, finishing
              his exploits by winning a scholarship which sent him on to
              continue his triumphant career at Cambridge. He was, I remember,
              extremely well connected, and even when we were all little boys
              together we knew that his mother's brother was Lord Holdhurst, the
              great conservative politician. This gaudy relationship did him
              little good at school. On the contrary, it seemed rather a piquant
              thing to us to chevy him about the playground and hit him over the
              shins with a wicket. But it was another thing when he came out
              into the world. I heard vaguely that his abilities and the
              influences which he commanded had won him a good position at the
              Foreign Office, and then he passed completely out of my mind until
              the following letter recalled his existence:
            </TextNode>

            <Indent>
              <TextNode className='text-right  italic' noIndent>
                Briarbrae, Woking.
              </TextNode>
              <TextNode className='italic' noIndent>
                My dear Watson:
              </TextNode>
              <TextNode noIndent>
                I have no doubt that you can remember “Tadpole” Phelps, who was
                in the fifth form when you were in the third. It is possible
                even that you may have heard that through my uncle's influence I
                obtained a good appointment at the Foreign Office, and that I
                was in a situation of trust and honor until a horrible
                misfortune came suddenly to blast my career.
              </TextNode>
              <TextNode>
                There is no use writing of the details of that dreadful event.
                In the event of your acceding to my request it is probable that
                I shall have to narrate them to you. I have only just recovered
                from nine weeks of brain-fever, and am still exceedingly weak.
                Do you think that you could bring your friend Mr. Holmes down to
                see me? I should like to have his opinion of the case, though
                the authorities assure me that nothing more can be done. Do try
                to bring him down, and as soon as possible. Every minute seems
                an hour while I live in this state of horrible suspense. Assure
                him that if I have not asked his advice sooner it was not
                because I did not appreciate his talents, but because I have
                been off my head ever since the blow fell. Now I am clear again,
                though I dare not think of it too much for fear of a relapse. I
                am still so weak that I have to write, as you see, by dictating.
                Do try to bring him.
              </TextNode>
              <TextNode className='italic' noIndent>
                Your old school-fellow,
              </TextNode>
              <TextNode className='italic' noIndent>
                Percy Phelps.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              There was something that touched me as I read this letter,
              something pitiable in the reiterated appeals to bring Holmes. So
              moved was I that even had it been a difficult matter I should have
              tried it, but of course I knew well that Holmes loved his art, so
              that he was ever as ready to bring his aid as his client could be
              to receive it. My wife agreed with me that not a moment should be
              lost in laying the matter before him, and so within an hour of
              breakfast-time I found myself back once more in the old rooms in
              Baker Street.
            </TextNode>

            <TextNode>
              Holmes was seated at his side-table clad in his dressing-gown, and
              working hard over a chemical investigation. A large curved retort
              was boiling furiously in the bluish flame of a Bunsen burner, and
              the distilled drops were condensing into a two-litre measure. My
              friend hardly glanced up as I entered, and I, seeing that his
              investigation must be of importance, seated myself in an arm-chair
              and waited. He dipped into this bottle or that, drawing out a few
              drops of each with his glass pipette, and finally brought a
              test-tube containing a solution over to the table. In his right
              hand he held a slip of litmus-paper.
            </TextNode>

            <TextNode>
              “You come at a crisis, Watson,” said he. “If this paper remains
              blue, all is well. If it turns red, it means a man's life.” He
              dipped it into the test-tube and it flushed at once into a dull,
              dirty crimson. “Hum! I thought as much!” he cried. “I will be at
              your service in an instant, Watson. You will find tobacco in the
              Persian slipper.” He turned to his desk and scribbled off several
              telegrams, which were handed over to the page-boy. Then he threw
              himself down into the chair opposite, and drew up his knees until
              his fingers clasped round his long, thin shins.
            </TextNode>

            <TextNode>
              “A very commonplace little murder,” said he. “You've got something
              better, I fancy. You are the stormy petrel of crime, Watson. What
              is it?”
            </TextNode>

            <TextNode>
              I handed him the letter, which he read with the most concentrated
              attention.
            </TextNode>

            <TextNode>
              “It does not tell us very much, does it?” he remarked, as he
              handed it back to me.
            </TextNode>

            <TextNode>“Hardly anything.”</TextNode>

            <TextNode>“And yet the writing is of interest.”</TextNode>

            <TextNode>“But the writing is not his own.”</TextNode>

            <TextNode>“Precisely. It is a woman's.”</TextNode>

            <TextNode>“A man's surely,” I cried.</TextNode>

            <TextNode>
              “No, a woman's, and a woman of rare character. You see, at the
              commencement of an investigation it is something to know that your
              client is in close contact with some one who, for good or evil,
              has an exceptional nature. My interest is already awakened in the
              case. If you are ready we will start at once for Woking, and see
              this diplomatist who is in such evil case, and the lady to whom he
              dictates his letters.”
            </TextNode>

            <TextNode>
              We were fortunate enough to catch an early train at Waterloo, and
              in a little under an hour we found ourselves among the fir-woods
              and the heather of Woking. Briarbrae proved to be a large detached
              house standing in extensive grounds within a few minutes' walk of
              the station. On sending in our cards we were shown into an
              elegantly appointed drawing-room, where we were joined in a few
              minutes by a rather stout man who received us with much
              hospitality. His age may have been nearer forty than thirty, but
              his cheeks were so ruddy and his eyes so merry that he still
              conveyed the impression of a plump and mischievous boy.
            </TextNode>

            <TextNode>
              “I am so glad that you have come,” said he, shaking our hands with
              effusion. “Percy has been inquiring for you all morning. Ah, poor
              old chap, he clings to any straw! His father and his mother asked
              me to see you, for the mere mention of the subject is very painful
              to them.”
            </TextNode>

            <TextNode>
              “We have had no details yet,” observed Holmes. “I perceive that
              you are not yourself a member of the family.”
            </TextNode>

            <TextNode>
              Our acquaintance looked surprised, and then, glancing down, he
              began to laugh.
            </TextNode>

            <TextNode>
              “Of course you saw the J H monogram on my locket,” said he. “For a
              moment I thought you had done something clever. Joseph Harrison is
              my name, and as Percy is to marry my sister Annie I shall at least
              be a relation by marriage. You will find my sister in his room,
              for she has nursed him hand-and-foot this two months back. Perhaps
              we'd better go in at once, for I know how impatient he is.”
            </TextNode>

            <TextNode>
              The chamber in which we were shown was on the same floor as the
              drawing-room. It was furnished partly as a sitting and partly as a
              bedroom, with flowers arranged daintily in every nook and corner.
              A young man, very pale and worn, was lying upon a sofa near the
              open window, through which came the rich scent of the garden and
              the balmy summer air. A woman was sitting beside him, who rose as
              we entered.
            </TextNode>

            <TextNode>“Shall I leave, Percy?” she asked.</TextNode>

            <TextNode>
              He clutched her hand to detain her. “How are you, Watson?” said
              he, cordially. “I should never have known you under that
              moustache, and I dare say you would not be prepared to swear to
              me. This I presume is your celebrated friend, Mr. Sherlock
              Holmes?”
            </TextNode>

            <TextNode>
              I introduced him in a few words, and we both sat down. The stout
              young man had left us, but his sister still remained with her hand
              in that of the invalid. She was a striking-looking woman, a little
              short and thick for symmetry, but with a beautiful olive
              complexion, large, dark, Italian eyes, and a wealth of deep black
              hair. Her rich tints made the white face of her companion the more
              worn and haggard by the contrast.
            </TextNode>

            <TextNode>
              “I won't waste your time,” said he, raising himself upon the sofa.
              “I'll plunge into the matter without further preamble. I was a
              happy and successful man, Mr. Holmes, and on the eve of being
              married, when a sudden and dreadful misfortune wrecked all my
              prospects in life.
            </TextNode>

            <TextNode>
              “I was, as Watson may have told you, in the Foreign Office, and
              through the influences of my uncle, Lord Holdhurst, I rose rapidly
              to a responsible position. When my uncle became foreign minister
              in this administration he gave me several missions of trust, and
              as I always brought them to a successful conclusion, he came at
              last to have the utmost confidence in my ability and tact.
            </TextNode>

            <TextNode>
              “Nearly ten weeks ago—to be more accurate, on the twenty-third of
              May—he called me into his private room, and, after complimenting
              me on the good work which I had done, he informed me that he had a
              new commission of trust for me to execute.
            </TextNode>

            <TextNode>
              “‘This,’ said he, taking a gray roll of paper from his bureau, ‘is
              the original of that secret treaty between England and Italy of
              which, I regret to say, some rumors have already got into the
              public press. It is of enormous importance that nothing further
              should leak out. The French or the Russian embassy would pay an
              immense sum to learn the contents of these papers. They should not
              leave my bureau were it not that it is absolutely necessary to
              have them copied. You have a desk in your office?’
            </TextNode>

            <TextNode>“‘Yes, sir.’</TextNode>

            <TextNode>
              “‘Then take the treaty and lock it up there. I shall give
              directions that you may remain behind when the others go, so that
              you may copy it at your leisure without fear of being overlooked.
              When you have finished, relock both the original and the draft in
              the desk, and hand them over to me personally to-morrow morning.’
            </TextNode>

            <TextNode>“I took the papers and—”</TextNode>

            <TextNode>
              “Excuse me an instant,” said Holmes. “Were you alone during this
              conversation?”
            </TextNode>

            <TextNode>“Absolutely.”</TextNode>

            <TextNode>“In a large room?”</TextNode>

            <TextNode>“Thirty feet each way.”</TextNode>

            <TextNode>“In the centre?”</TextNode>

            <TextNode>“Yes, about it.”</TextNode>

            <TextNode>“And speaking low?”</TextNode>

            <TextNode>
              “My uncle's voice is always remarkably low. I hardly spoke at
              all.”
            </TextNode>

            <TextNode>
              “Thank you,” said Holmes, shutting his eyes; “pray go on.”
            </TextNode>

            <TextNode>
              “I did exactly what he indicated, and waited until the other
              clerks had departed. One of them in my room, Charles Gorot, had
              some arrears of work to make up, so I left him there and went out
              to dine. When I returned he was gone. I was anxious to hurry my
              work, for I knew that Joseph—the Mr. Harrison whom you saw just
              now—was in town, and that he would travel down to Woking by the
              eleven-o'clock train, and I wanted if possible to catch it.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “When I came to examine the treaty I saw at once that it was of
              such importance that my uncle had been guilty of no exaggeration
              in what he had said. Without going into details, I may say that it
              defined the position of Great Britain towards the Triple Alliance,
              and fore-shadowed the policy which this country would pursue in
              the event of the French fleet gaining a complete ascendancy over
              that of Italy in the Mediterranean. The questions treated in it
              were purely naval. At the end were the signatures of the high
              dignitaries who had signed it. I glanced my eyes over it, and then
              settled down to my task of copying.
            </TextNode>

            <TextNode>
              “It was a long document, written in the French language, and
              containing twenty-six separate articles. I copied as quickly as I
              could, but at nine o'clock I had only done nine articles, and it
              seemed hopeless for me to attempt to catch my train. I was feeling
              drowsy and stupid, partly from my dinner and also from the effects
              of a long day's work. A cup of coffee would clear my brain. A
              commissionaire remains all night in a little lodge at the foot of
              the stairs, and is in the habit of making coffee at his
              spirit-lamp for any of the officials who may be working over time.
              I rang the bell, therefore, to summon him.
            </TextNode>

            <TextNode>
              “To my surprise, it was a woman who answered the summons, a large,
              coarse-faced, elderly woman, in an apron. She explained that she
              was the commissionaire's wife, who did the charing, and I gave her
              the order for the coffee.
            </TextNode>

            <TextNode>
              “I wrote two more articles and then, feeling more drowsy than
              ever, I rose and walked up and down the room to stretch my legs.
              My coffee had not yet come, and I wondered what was the cause of
              the delay could be. Opening the door, I started down the corridor
              to find out. There was a straight passage, dimly lighted, which
              led from the room in which I had been working, and was the only
              exit from it. It ended in a curving staircase, with the
              commissionaire's lodge in the passage at the bottom. Half way down
              this staircase is a small landing, with another passage running
              into it at right angles. This second one leads by means of a
              second small stair to a side door, used by servants, and also as a
              short cut by clerks when coming from Charles Street. Here is a
              rough chart of the place.”
            </TextNode>

            <Image
              className='h-[20.25rem]  w-auto  translate-x-[-4px]  max-2md:h-auto
                         dark:hidden'
              src={chartLight}
              alt='chart'
            />
            <Image
              className='hidden  h-[20.25rem]  w-auto  translate-x-[-4px]
                         max-2md:h-auto  dark:block'
              src={chartDark}
              alt='chart'
            />

            <TextNode className='mt-3'>
              “Thank you. I think that I quite follow you,” said Sherlock
              Holmes.
            </TextNode>

            <TextNode>
              “It is of the utmost importance that you should notice this point.
              I went down the stairs and into the hall, where I found the
              commissionaire fast asleep in his box, with the kettle boiling
              furiously upon the spirit-lamp. I took off the kettle and blew out
              the lamp, for the water was spurting over the floor. Then I put
              out my hand and was about to shake the man, who was still sleeping
              soundly, when a bell over his head rang loudly, and he woke with a
              start.
            </TextNode>

            <TextNode>
              “‘Mr. Phelps, sir!’ said he, looking at me in bewilderment.
            </TextNode>

            <TextNode>“‘I came down to see if my coffee was ready.’</TextNode>

            <TextNode>
              “‘I was boiling the kettle when I fell asleep, sir.’ He looked at
              me and then up at the still quivering bell with an ever-growing
              astonishment upon his face.
            </TextNode>

            <TextNode>
              “‘If you was here, sir, then who rang the bell?’ he asked.
            </TextNode>

            <TextNode>“‘The bell!’ I cried. ‘What bell is it?’</TextNode>

            <TextNode>
              “‘It's the bell of the room you were working in.’
            </TextNode>

            <TextNode>
              “A cold hand seemed to close round my heart. Some one, then, was
              in that room where my precious treaty lay upon the table. I ran
              frantically up the stair and along the passage. There was no one
              in the corridors, Mr. Holmes. There was no one in the room. All
              was exactly as I left it, save only that the papers which had been
              committed to my care had been taken from the desk on which they
              lay. The copy was there, and the original was gone.”
            </TextNode>

            <TextNode>
              Holmes sat up in his chair and rubbed his hands. I could see that
              the problem was entirely to his heart. “Pray, what did you do
              then?” he murmured.
            </TextNode>

            <TextNode>
              “I recognized in an instant that the thief must have come up the
              stairs from the side door. Of course I must have met him if he had
              come the other way.”
            </TextNode>

            <TextNode>
              “You were satisfied that he could not have been concealed in the
              room all the time, or in the corridor which you have just
              described as dimly lighted?”
            </TextNode>

            <TextNode>
              “It is absolutely impossible. A rat could not conceal himself
              either in the room or the corridor. There is no cover at all.”
            </TextNode>

            <TextNode>“Thank you. Pray proceed.”</TextNode>

            <TextNode>
              “The commissionaire, seeing by my pale face that something was to
              be feared, had followed me upstairs. Now we both rushed along the
              corridor and down the steep steps which led to Charles Street. The
              door at the bottom was closed, but unlocked. We flung it open and
              rushed out. I can distinctly remember that as we did so there came
              three chimes from a neighboring clock. It was quarter to ten.”
            </TextNode>

            <TextNode>
              “That is of enormous importance,” said Holmes, making a note upon
              his shirt-cuff.
            </TextNode>

            <TextNode>
              “The night was very dark, and a thin, warm rain was falling. There
              was no one in Charles Street, but a great traffic was going on, as
              usual, in Whitehall, at the extremity. We rushed along the
              pavement, bare-headed as we were, and at the far corner we found a
              policeman standing.
            </TextNode>

            <TextNode>
              “‘A robbery has been committed,’ I gasped. ‘A document of immense
              value has been stolen from the Foreign Office. Has any one passed
              this way?’
            </TextNode>

            <TextNode>
              “‘I have been standing here for a quarter of an hour, sir,’ said
              he; ‘only one person has passed during that time—a woman, tall and
              elderly, with a Paisley shawl.’
            </TextNode>

            <TextNode>
              “‘Ah, that is only my wife,’ cried the commissionaire; ‘has no one
              else passed?’
            </TextNode>

            <TextNode>“‘No one.’</TextNode>

            <TextNode>
              “‘Then it must be the other way that the thief took,’ cried the
              fellow, tugging at my sleeve.
            </TextNode>

            <TextNode>
              “But I was not satisfied, and the attempts which he made to draw
              me away increased my suspicions.
            </TextNode>

            <TextNode>“‘Which way did the woman go?’ I cried.</TextNode>

            <TextNode>
              “‘I don't know, sir. I noticed her pass, but I had no special
              reason for watching her. She seemed to be in a hurry.’
            </TextNode>

            <TextNode>“‘How long ago was it?’</TextNode>

            <TextNode>“‘Oh, not very many minutes.’</TextNode>

            <TextNode>“‘Within the last five?’</TextNode>

            <TextNode>“‘Well, it could not be more than five.’</TextNode>

            <TextNode>
              “‘You're only wasting your time, sir, and every minute now is of
              importance,’ cried the commissionaire; ‘take my word for it that
              my old woman has nothing to do with it, and come down to the other
              end of the street. Well, if you won't, I will.’ And with that he
              rushed off in the other direction.
            </TextNode>

            <TextNode>
              “But I was after him in an instant and caught him by the sleeve.
            </TextNode>

            <TextNode>“‘Where do you live?’ said I.</TextNode>

            <TextNode>
              “‘16 Ivy Lane, Brixton,’ he answered. ‘But don't let yourself be
              drawn away upon a false scent, Mr. Phelps. Come to the other end
              of the street and let us see if we can hear of anything.’
            </TextNode>

            <TextNode>
              “Nothing was to be lost by following his advice. With the
              policeman we both hurried down, but only to find the street full
              of traffic, many people coming and going, but all only too eager
              to get to a place of safety upon so wet a night. There was no
              lounger who could tell us who had passed.
            </TextNode>

            <TextNode>
              “Then we returned to the office, and searched the stairs and the
              passage without result. The corridor which led to the room was
              laid down with a kind of creamy linoleum which shows an impression
              very easily. We examined it very carefully, but found no outline
              of any footmark.”
            </TextNode>

            <TextNode>“Had it been raining all evening?”</TextNode>

            <TextNode>“Since about seven.”</TextNode>

            <TextNode>
              “How is it, then, that the woman who came into the room about nine
              left no traces with her muddy boots?”
            </TextNode>

            <TextNode>
              “I am glad you raised the point. It occurred to me at the time.
              The charwomen are in the habit of taking off their boots at the
              commissionaire's office, and putting on list slippers.”
            </TextNode>

            <TextNode>
              “That is very clear. There were no marks, then, though the night
              was a wet one? The chain of events is certainly one of
              extraordinary interest. What did you do next?”
            </TextNode>

            <TextNode>
              “We examined the room also. There is no possibility of a secret
              door, and the windows are quite thirty feet from the ground. Both
              of them were fastened on the inside. The carpet prevents any
              possibility of a trap-door, and the ceiling is of the ordinary
              whitewashed kind. I will pledge my life that whoever stole my
              papers could only have come through the door.”
            </TextNode>

            <TextNode>“How about the fireplace?”</TextNode>

            <TextNode>
              “They use none. There is a stove. The bell-rope hangs from the
              wire just to the right of my desk. Whoever rang it must have come
              right up to the desk to do it. But why should any criminal wish to
              ring the bell? It is a most insoluble mystery.”
            </TextNode>

            <TextNode>
              “Certainly the incident was unusual. What were your next steps?
              You examined the room, I presume, to see if the intruder had left
              any traces—any cigar-end or dropped glove or hairpin or other
              trifle?”
            </TextNode>

            <TextNode>“There was nothing of the sort.”</TextNode>

            <TextNode>“No smell?”</TextNode>

            <TextNode>“Well, we never thought of that.”</TextNode>

            <TextNode>
              “Ah, a scent of tobacco would have been worth a great deal to us
              in such an investigation.”
            </TextNode>

            <TextNode>
              “I never smoke myself, so I think I should have observed it if
              there had been any smell of tobacco. There was absolutely no clue
              of any kind. The only tangible fact was that the commissionaire's
              wife—Mrs. Tangey was the name—had hurried out of the place. He
              could give no explanation save that it was about the time when the
              woman always went home. The policeman and I agreed that our best
              plan would be to seize the woman before she could get rid of the
              papers, presuming that she had them.
            </TextNode>

            <TextNode>
              “The alarm had reached Scotland Yard by this time, and Mr. Forbes,
              the detective, came round at once and took up the case with a
              great deal of energy. We hired a hansom, and in half an hour we
              were at the address which had been given to us. A young woman
              opened the door, who proved to be Mrs. Tangey's eldest daughter.
              Her mother had not come back yet, and we were shown into the front
              room to wait.
            </TextNode>

            <TextNode>
              “About ten minutes later a knock came at the door, and here we
              made the one serious mistake for which I blame myself. Instead of
              opening the door ourselves, we allowed the girl to do so. We heard
              her say, ‘Mother, there are two men in the house waiting to see
              you,’ and an instant afterwards we heard the patter of feet
              rushing down the passage. Forbes flung open the door, and we both
              ran into the back room or kitchen, but the woman had got there
              before us. She stared at us with defiant eyes, and then, suddenly
              recognizing me, an expression of absolute astonishment came over
              her face.
            </TextNode>

            <TextNode>
              “‘Why, if it isn't Mr. Phelps, of the office!’ she cried.
            </TextNode>

            <TextNode>
              “‘Come, come, who did you think we were when you ran away from
              us?’ asked my companion.
            </TextNode>

            <TextNode>
              “‘I thought you were the brokers,’ said she, ‘we have had some
              trouble with a tradesman.’
            </TextNode>

            <TextNode>
              “‘That's not quite good enough,’ answered Forbes. ‘We have reason
              to believe that you have taken a paper of importance from the
              Foreign Office, and that you ran in here to dispose of it. You
              must come back with us to Scotland Yard to be searched.’
            </TextNode>

            <TextNode>
              “It was in vain that she protested and resisted. A four-wheeler
              was brought, and we all three drove back in it. We had first made
              an examination of the kitchen, and especially of the kitchen fire,
              to see whether she might have made away with the papers during the
              instant that she was alone. There were no signs, however, of any
              ashes or scraps. When we reached Scotland Yard she was handed over
              at once to the female searcher. I waited in an agony of suspense
              until she came back with her report. There were no signs of the
              papers.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page160;

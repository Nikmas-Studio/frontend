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

function Page260({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;VALLEY&nbsp;OF&nbsp;FEAR'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“Who are they?” asked someone.</TextNode>

            <TextNode>
              “Faith, it is wiser not to ask. If you know nothing, you can
              testify nothing, and no trouble can come of it. But they are men
              who will make a clean job when they are about it.”
            </TextNode>

            <TextNode>
              “And time, too!” cried Ted Baldwin. “Folk are gettin' out of hand
              in these parts. It was only last week that three of our men were
              turned off by Foreman Blaker. It's been owing him a long time, and
              he'll get it full and proper.”
            </TextNode>

            <TextNode>“Get what?” McMurdo whispered to his neighbour.</TextNode>

            <TextNode>
              “The business end of a buckshot cartridge!” cried the man with a
              loud laugh. “What think you of our ways, Brother?”
            </TextNode>

            <TextNode>
              McMurdo's criminal soul seemed to have already absorbed the spirit
              of the vile association of which he was now a member. “I like it
              well,” said he. “'Tis a proper place for a lad of mettle.”
            </TextNode>

            <TextNode>
              Several of those who sat around heard his words and applauded
              them.
            </TextNode>

            <TextNode>
              “What's that?” cried the black-maned Bodymaster from the end of
              the table.
            </TextNode>

            <TextNode>
              “'Tis our new brother, sir, who finds our ways to his taste.”
            </TextNode>

            <TextNode>
              McMurdo rose to his feet for an instant. “I would say, Eminent
              Bodymaster, that if a man should be wanted I should take it as an
              honour to be chosen to help the lodge.”
            </TextNode>

            <TextNode>
              There was great applause at this. It was felt that a new sun was
              pushing its rim above the horizon. To some of the elders it seemed
              that the progress was a little too rapid.
            </TextNode>

            <TextNode>
              “I would move,” said the secretary, Harraway, a vulture-faced old
              graybeard who sat near the chairman, “that Brother McMurdo should
              wait until it is the good pleasure of the lodge to employ him.”
            </TextNode>

            <TextNode>
              “Sure, that was what I meant; I'm in your hands,” said McMurdo.
            </TextNode>

            <TextNode>
              “Your time will come, Brother,” said the chairman. “We have marked
              you down as a willing man, and we believe that you will do good
              work in these parts. There is a small matter to-night in which you
              may take a hand if it so please you.”
            </TextNode>

            <TextNode>
              “I will wait for something that is worth while.”
            </TextNode>

            <TextNode>
              “You can come to-night, anyhow, and it will help you to know what
              we stand for in this community. I will make the announcement
              later. Meanwhile,” he glanced at his agenda paper, “I have one or
              two more points to bring before the meeting. First of all, I will
              ask the treasurer as to our bank balance. There is the pension to
              Jim Carnaway's widow. He was struck down doing the work of the
              lodge, and it is for us to see that she is not the loser.”
            </TextNode>

            <TextNode>
              “Jim was shot last month when they tried to kill Chester Wilcox of
              Marley Creek,” McMurdo's neighbour informed him.
            </TextNode>

            <TextNode>
              “The funds are good at the moment,” said the treasurer, with the
              bankbook in front of him. “The firms have been generous of late.
              Max Linder & Co. paid five hundred to be left alone. Walker
              Brothers sent in a hundred; but I took it on myself to return it
              and ask for five. If I do not hear by Wednesday, their winding
              gear may get out of order. We had to burn their breaker last year
              before they became reasonable. Then the West Section Coaling
              Company has paid its annual contribution. We have enough on hand
              to meet any obligations.”
            </TextNode>

            <TextNode>“What about Archie Swindon?” asked a brother.</TextNode>

            <TextNode>
              “He has sold out and left the district. The old devil left a note
              for us to say that he had rather be a free crossing sweeper in New
              York than a large mine owner under the power of a ring of
              blackmailers. By Gar! it was as well that he made a break for it
              before the note reached us! I guess he won't show his face in this
              valley again.”
            </TextNode>

            <TextNode>
              An elderly, clean-shaved man with a kindly face and a good brow
              rose from the end of the table which faced the chairman. “Mr.
              Treasurer,” he asked, “may I ask who has bought the property of
              this man that we have driven out of the district?”
            </TextNode>

            <TextNode>
              “Yes, Brother Morris. It has been bought by the State & Merton
              County Railroad Company.”
            </TextNode>

            <TextNode>
              “And who bought the mines of Todman and of Lee that came into the
              market in the same way last year?”
            </TextNode>

            <TextNode>“The same company, Brother Morris.”</TextNode>

            <TextNode>
              “And who bought the ironworks of Manson and of Shuman and of Van
              Deher and of Atwood, which have all been given up of late?”
            </TextNode>

            <TextNode>
              “They were all bought by the West Gilmerton General Mining
              Company.”
            </TextNode>

            <TextNode>
              “I don't see, Brother Morris,” said the chairman, “that it matters
              to us who buys them, since they can't carry them out of the
              district.”
            </TextNode>

            <TextNode>
              “With all respect to you, Eminent Bodymaster, I think it may
              matter very much to us. This process has been going on now for ten
              long years. We are gradually driving all the small men out of
              trade. What is the result? We find in their places great companies
              like the Railroad or the General Iron, who have their directors in
              New York or Philadelphia, and care nothing for our threats. We can
              take it out of their local bosses, but it only means that others
              will be sent in their stead. And we are making it dangerous for
              ourselves. The small men could not harm us. They had not the money
              nor the power. So long as we did not squeeze them too dry, they
              would stay on under our power. But if these big companies find
              that we stand between them and their profits, they will spare no
              pains and no expense to hunt us down and bring us to court.”
            </TextNode>

            <TextNode>
              There was a hush at these ominous words, and every face darkened
              as gloomy looks were exchanged. So omnipotent and unchallenged had
              they been that the very thought that there was possible
              retribution in the background had been banished from their minds.
              And yet the idea struck a chill to the most reckless of them.
            </TextNode>

            <TextNode>
              “It is my advice,” the speaker continued, “that we go easier upon
              the small men. On the day that they have all been driven out the
              power of this society will have been broken.”
            </TextNode>

            <TextNode>
              Unwelcome truths are not popular. There were angry cries as the
              speaker resumed his seat. McGinty rose with gloom upon his brow.
            </TextNode>

            <TextNode>
              “Brother Morris,” said he, “you were always a croaker. So long as
              the members of this lodge stand together there is no power in the
              United States that can touch them. Sure, have we not tried it
              often enough in the law courts? I expect the big companies will
              find it easier to pay than to fight, same as the little companies
              do. And now, Brethren,” McGinty took off his black velvet cap and
              his stole as he spoke, “this lodge has finished its business for
              the evening, save for one small matter which may be mentioned when
              we are parting. The time has now come for fraternal refreshment
              and for harmony.”
            </TextNode>

            <TextNode>
              Strange indeed is human nature. Here were these men, to whom
              murder was familiar, who again and again had struck down the
              father of the family, some man against whom they had no personal
              feeling, without one thought of compunction or of compassion for
              his weeping wife or helpless children, and yet the tender or
              pathetic in music could move them to tears. McMurdo had a fine
              tenor voice, and if he had failed to gain the good will of the
              lodge before, it could no longer have been withheld after he had
              thrilled them with “I'm Sitting on the Stile, Mary,” and “On the
              Banks of Allan Water.”
            </TextNode>

            <TextNode>
              In his very first night the new recruit had made himself one of
              the most popular of the brethren, marked already for advancement
              and high office. There were other qualities needed, however,
              besides those of good fellowship, to make a worthy Freeman, and of
              these he was given an example before the evening was over. The
              whisky bottle had passed round many times, and the men were
              flushed and ripe for mischief when their Bodymaster rose once more
              to address them.
            </TextNode>

            <TextNode>
              “Boys,” said he, “there's one man in this town that wants trimming
              up, and it's for you to see that he gets it. I'm speaking of James
              Stanger of <span className='italic'>The Herald</span>. You've seen
              how he's been opening his mouth against us again?”
            </TextNode>

            <TextNode>
              There was a murmur of assent, with many a muttered oath. McGinty
              took a slip of paper from his waistcoat pocket.
            </TextNode>

            <TextNode className='text-center  italic'>Law and Order!</TextNode>
            <TextNode noIndent>That's how he heads it.</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <Indent>
              <TextNode noIndent className='italic'>
                “Reign of terror in the coal and iron district
              </TextNode>
              <TextNode noIndent>
                “Twelve years have now elapsed since the first assassinations
                which proved the existence of a criminal organization in our
                midst. From that day these outrages have never ceased, until now
                they have reached a pitch which makes us the opprobrium of the
                civilized world. Is it for such results as this that our great
                country welcomes to its bosom the alien who flies from the
                despotisms of Europe? Is it that they shall themselves become
                tyrants over the very men who have given them shelter, and that
                a state of terrorism and lawlessness should be established under
                the very shadow of the sacred folds of the starry Flag of
                Freedom which would raise horror in our minds if we read of it
                as existing under the most effete monarchy of the East? The men
                are known. The organization is patent and public. How long are
                we to endure it? Can we forever live—
              </TextNode>
            </Indent>

            <TextNode noIndent>
              Sure, I've read enough of the slush!“ cried the chairman, tossing
              the paper down upon the table. ”That's what he says of us. The
              question I'm asking you is what shall we say to him?“
            </TextNode>

            <TextNode>“Kill him!” cried a dozen fierce voices.</TextNode>

            <TextNode>
              “I protest against that,” said Brother Morris, the man of the good
              brow and shaved face. “I tell you, Brethren, that our hand is too
              heavy in this valley, and that there will come a point where in
              self-defense every man will unite to crush us out. James Stanger
              is an old man. He is respected in the township and the district.
              His paper stands for all that is solid in the valley. If that man
              is struck down, there will be a stir through this state that will
              only end with our destruction.”
            </TextNode>
            <TextNode>
              “And how would they bring about our destruction, Mr. Standback?”
              cried McGinty. “Is it by the police? Sure, half of them are in our
              pay and half of them afraid of us. Or is it by the law courts and
              the judge? Haven't we tried that before now, and what ever came of
              it?”
            </TextNode>

            <TextNode>
              “There is a Judge Lynch that might try the case,” said Brother
              Morris.
            </TextNode>

            <TextNode>
              A general shout of anger greeted the suggestion.
            </TextNode>

            <TextNode>
              “I have but to raise my finger,” cried McGinty, “and I could put
              two hundred men into this town that would clear it out from end to
              end.” Then suddenly raising his voice and bending his huge black
              brows into a terrible frown, “See here, Brother Morris, I have my
              eye on you, and have had for some time! You've no heart yourself,
              and you try to take the heart out of others. It will be an ill day
              for you, Brother Morris, when your own name comes on our agenda
              paper, and I'm thinking that it's just there that I ought to place
              it.”
            </TextNode>

            <TextNode>
              Morris had turned deadly pale, and his knees seemed to give way
              under him as he fell back into his chair. He raised his glass in
              his trembling hand and drank before he could answer. “I apologize,
              Eminent Bodymaster, to you and to every brother in this lodge if I
              have said more than I should. I am a faithful member—you all know
              that—and it is my fear lest evil come to the lodge which makes me
              speak in anxious words. But I have greater trust in your judgment
              than in my own, Eminent Bodymaster, and I promise you that I will
              not offend again.”
            </TextNode>

            <TextNode>
              The Bodymaster's scowl relaxed as he listened to the humble words.
              “Very good, Brother Morris. It's myself that would be sorry if it
              were needful to give you a lesson. But so long as I am in this
              chair we shall be a united lodge in word and in deed. And now,
              boys,” he continued, looking round at the company, “I'll say this
              much, that if Stanger got his full deserts there would be more
              trouble than we need ask for. These editors hang together, and
              every journal in the state would be crying out for police and
              troops. But I guess you can give him a pretty severe warning. Will
              you fix it, Brother Baldwin?”
            </TextNode>

            <TextNode>“Sure!” said the young man eagerly.</TextNode>

            <TextNode>“How many will you take?”</TextNode>

            <TextNode>
              “Half a dozen, and two to guard the door. You'll come, Gower, and
              you, Mansel, and you, Scanlan, and the two Willabys.”
            </TextNode>

            <TextNode>
              “I promised the new brother he should go,” said the chairman.
            </TextNode>

            <TextNode>
              Ted Baldwin looked at McMurdo with eyes which showed that he had
              not forgotten nor forgiven. “Well, he can come if he wants,” he
              said in a surly voice. “That's enough. The sooner we get to work
              the better.”
            </TextNode>

            <TextNode>
              The company broke up with shouts and yells and snatches of drunken
              song. The bar was still crowded with revellers, and many of the
              brethren remained there. The little band who had been told off for
              duty passed out into the street, proceeding in twos and threes
              along the sidewalk so as not to provoke attention. It was a
              bitterly cold night, with a half-moon shining brilliantly in a
              frosty, star-spangled sky. The men stopped and gathered in a yard
              which faced a high building. The words “Vermissa Herald” were
              printed in gold lettering between the brightly lit windows. From
              within came the clanking of the printing press.
            </TextNode>

            <TextNode>
              “Here, you,” said Baldwin to McMurdo, “you can stand below at the
              door and see that the road is kept open for us. Arthur Willaby can
              stay with you. You others come with me. Have no fears, boys; for
              we have a dozen witnesses that we are in the Union Bar at this
              very moment.”
            </TextNode>

            <TextNode>
              It was nearly midnight, and the street was deserted save for one
              or two revellers upon their way home. The party crossed the road,
              and, pushing open the door of the newspaper office, Baldwin and
              his men rushed in and up the stair which faced them. McMurdo and
              another remained below. From the room above came a shout, a cry
              for help, and then the sound of trampling feet and of falling
              chairs. An instant later a gray-haired man rushed out on the
              landing.
            </TextNode>

            <TextNode>
              He was seized before he could get farther, and his spectacles came
              tinkling down to McMurdo's feet. There was a thud and a groan. He
              was on his face, and half a dozen sticks were clattering together
              as they fell upon him. He writhed, and his long, thin limbs
              quivered under the blows. The others ceased at last; but Baldwin,
              his cruel face set in an infernal smile, was hacking at the man's
              head, which he vainly endeavoured to defend with his arms. His
              white hair was dabbled with patches of blood. Baldwin was still
              stooping over his victim, putting in a short, vicious blow
              whenever he could see a part exposed, when McMurdo dashed up the
              stair and pushed him back.
            </TextNode>

            <TextNode>“You'll kill the man,” said he. “Drop it!”</TextNode>

            <TextNode>
              Baldwin looked at him in amazement. “Curse you!” he cried. “Who
              are you to interfere—you that are new to the lodge? Stand back!”
              He raised his stick; but McMurdo had whipped his pistol out of his
              hip pocket.
            </TextNode>

            <TextNode>
              “Stand back yourself!” he cried. “I'll blow your face in if you
              lay a hand on me. As to the lodge, wasn't it the order of the
              Bodymaster that the man was not to be killed—and what are you
              doing but killing him?”
            </TextNode>

            <TextNode>“It's truth he says,” remarked one of the men.</TextNode>

            <TextNode>
              “By Gar! you'd best hurry yourselves!” cried the man below. “The
              windows are all lighting up, and you'll have the whole town here
              inside of five minutes.”
            </TextNode>

            <TextNode>
              There was indeed the sound of shouting in the street, and a little
              group of compositors and pressmen was forming in the hall below
              and nerving itself to action. Leaving the limp and motionless body
              of the editor at the head of the stair, the criminals rushed down
              and made their way swiftly along the street. Having reached the
              Union House, some of them mixed with the crowd in McGinty's
              saloon, whispering across the bar to the Boss that the job had
              been well carried through. Others, and among them McMurdo, broke
              away into side streets, and so by devious paths to their own
              homes.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page260;

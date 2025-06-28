import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
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

function Page261({
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
      <BookMainContainer>
        <H4>
          Chapter IV.
          <br />
          The Valley of Fear
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              When McMurdo awoke next morning he had good reason to remember his
              initiation into the lodge. His head ached with the effect of the
              drink, and his arm, where he had been branded, was hot and
              swollen. Having his own peculiar source of income, he was
              irregular in his attendance at his work; so he had a late
              breakfast, and remained at home for the morning writing a long
              letter to a friend. Afterwards he read{' '}
              <span className='italic'>The Daily Herald</span>. In a special
              column put in at the last moment he read:
            </TextNode>

            <TextNode noIndent className='text-center  italic'>
              Outrage at the herald office — Editor seriously injured
            </TextNode>

            <TextNode noIndent>
              It was a short account of the facts with which he was himself more
              familiar than the writer could have been. It ended with the
              statement:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                The matter is now in the hands of the police; but it can hardly
                be hoped that their exertions will be attended by any better
                results than in the past. Some of the men were recognized, and
                there is hope that a conviction may be obtained. The source of
                the outrage was, it need hardly be said, that infamous society
                which has held this community in bondage for so long a period,
                and against which
                <span className='italic'>The Herald</span> has taken so
                uncompromising a stand. Mr. Stanger's many friends will rejoice
                to hear that, though he has been cruelly and brutally beaten,
                and though he has sustained severe injuries about the head,
                there is no immediate danger to his life.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              Below it stated that a guard of police, armed with Winchester
              rifles, had been requisitioned for the defense of the office.
            </TextNode>

            <TextNode>
              McMurdo had laid down the paper, and was lighting his pipe with a
              hand which was shaky from the excesses of the previous evening,
              when there was a knock outside, and his landlady brought to him a
              note which had just been handed in by a lad. It was unsigned, and
              ran thus:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                I should wish to speak to you, but would rather not do so in
                your house. You will find me beside the flagstaff upon Miller
                Hill. If you will come there now, I have something which it is
                important for you to hear and for me to say.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              McMurdo read the note twice with the utmost surprise; for he could
              not imagine what it meant or who was the author of it. Had it been
              in a feminine hand, he might have imagined that it was the
              beginning of one of those adventures which had been familiar
              enough in his past life. But it was the writing of a man, and of a
              well educated one, too. Finally, after some hesitation, he
              determined to see the matter through.
            </TextNode>

            <TextNode>
              Miller Hill is an ill-kept public park in the very centre of the
              town. In summer it is a favourite resort of the people; but in
              winter it is desolate enough. From the top of it one has a view
              not only of the whole straggling, grimy town, but of the winding
              valley beneath, with its scattered mines and factories blackening
              the snow on each side of it, and of the wooded and white-capped
              ranges flanking it.
            </TextNode>

            <TextNode>
              McMurdo strolled up the winding path hedged in with evergreens
              until he reached the deserted restaurant which forms the centre of
              summer gaiety. Beside it was a bare flagstaff, and underneath it a
              man, his hat drawn down and the collar of his overcoat turned up.
              When he turned his face McMurdo saw that it was Brother Morris, he
              who had incurred the anger of the Bodymaster the night before. The
              lodge sign was given and exchanged as they met.
            </TextNode>

            <TextNode>
              “I wanted to have a word with you, Mr. McMurdo,” said the older
              man, speaking with a hesitation which showed that he was on
              delicate ground. “It was kind of you to come.”
            </TextNode>

            <TextNode>“Why did you not put your name to the note?”</TextNode>

            <TextNode>
              “One has to be cautious, mister. One never knows in times like
              these how a thing may come back to one. One never knows either who
              to trust or who not to trust.”
            </TextNode>

            <TextNode>“Surely one may trust brothers of the lodge.”</TextNode>

            <TextNode>
              “No, no, not always,” cried Morris with vehemence. “Whatever we
              say, even what we think, seems to go back to that man McGinty.”
            </TextNode>

            <TextNode>
              “Look here!” said McMurdo sternly. “It was only last night, as you
              know well, that I swore good faith to our Bodymaster. Would you be
              asking me to break my oath?”
            </TextNode>

            <TextNode>
              “If that is the view you take,” said Morris sadly, “I can only say
              that I am sorry I gave you the trouble to come and meet me. Things
              have come to a bad pass when two free citizens cannot speak their
              thoughts to each other.”
            </TextNode>

            <TextNode>
              McMurdo, who had been watching his companion very narrowly,
              relaxed somewhat in his bearing. “Sure I spoke for myself only,”
              said he. “I am a newcomer, as you know, and I am strange to it
              all. It is not for me to open my mouth, Mr. Morris, and if you
              think well to say anything to me I am here to hear it.”
            </TextNode>

            <TextNode>
              “And to take it back to Boss McGinty!” said Morris bitterly.
            </TextNode>

            <TextNode>
              “Indeed, then, you do me injustice there,” cried McMurdo. “For
              myself I am loyal to the lodge, and so I tell you straight; but I
              would be a poor creature if I were to repeat to any other what you
              might say to me in confidence. It will go no further than me;
              though I warn you that you may get neither help nor sympathy.”
            </TextNode>

            <TextNode>
              “I have given up looking for either the one or the other,” said
              Morris. “I may be putting my very life in your hands by what I
              say; but, bad as you are—and it seemed to me last night that you
              were shaping to be as bad as the worst—still you are new to it,
              and your conscience cannot yet be as hardened as theirs. That was
              why I thought to speak with you.”
            </TextNode>

            <TextNode>“Well, what have you to say?”</TextNode>

            <TextNode>“If you give me away, may a curse be on you!”</TextNode>

            <TextNode>“Sure, I said I would not.”</TextNode>

            <TextNode>
              “I would ask you, then, when you joined the Freeman's society in
              Chicago and swore vows of charity and fidelity, did ever it cross
              your mind that you might find it would lead you to crime?”
            </TextNode>

            <TextNode>“If you call it crime,” McMurdo answered.</TextNode>

            <TextNode>
              “Call it crime!” cried Morris, his voice vibrating with passion.
              “You have seen little of it if you can call it anything else. Was
              it crime last night when a man old enough to be your father was
              beaten till the blood dripped from his white hairs? Was that
              crime—or what else would you call it?”
            </TextNode>

            <TextNode>
              “There are some would say it was war,” said McMurdo, “a war of two
              classes with all in, so that each struck as best it could.”
            </TextNode>

            <TextNode>
              “Well, did you think of such a thing when you joined the Freeman's
              society at Chicago?”
            </TextNode>

            <TextNode>“No, I'm bound to say I did not.”</TextNode>

            <TextNode>
              “Nor did I when I joined it at Philadelphia. It was just a benefit
              club and a meeting place for one's fellows. Then I heard of this
              place—curse the hour that the name first fell upon my ears!—and I
              came to better myself! My God! to better myself! My wife and three
              children came with me. I started a dry goods store on Market
              Square, and I prospered well. The word had gone round that I was a
              Freeman, and I was forced to join the local lodge, same as you did
              last night. I've the badge of shame on my forearm and something
              worse branded on my heart. I found that I was under the orders of
              a black villain and caught in a meshwork of crime. What could I
              do? Every word I said to make things better was taken as treason,
              same as it was last night. I can't get away; for all I have in the
              world is in my store. If I leave the society, I know well that it
              means murder to me, and God knows what to my wife and children.
              Oh, man, it is awful—awful!” He put his hands to his face, and his
              body shook with convulsive sobs.
            </TextNode>

            <TextNode>
              McMurdo shrugged his shoulders. “You were too soft for the job,”
              said he. “You are the wrong sort for such work.”
            </TextNode>

            <TextNode>
              “I had a conscience and a religion; but they made me a criminal
              among them. I was chosen for a job. If I backed down I knew well
              what would come to me. Maybe I'm a coward. Maybe it's the thought
              of my poor little woman and the children that makes me one. Anyhow
              I went. I guess it will haunt me forever.
            </TextNode>

            <TextNode>
              “It was a lonely house, twenty miles from here, over the range
              yonder. I was told off for the door, same as you were last night.
              They could not trust me with the job. The others went in. When
              they came out their hands were crimson to the wrists. As we turned
              away a child was screaming out of the house behind us. It was a
              boy of five who had seen his father murdered. I nearly fainted
              with the horror of it, and yet I had to keep a bold and smiling
              face; for well I knew that if I did not it would be out of my
              house that they would come next with their bloody hands and it
              would be my little Fred that would be screaming for his father.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “But I was a criminal then, part sharer in a murder, lost forever
              in this world, and lost also in the next. I am a good Catholic;
              but the priest would have no word with me when he heard I was a
              Scowrer, and I am excommunicated from my faith. That's how it
              stands with me. And I see you going down the same road, and I ask
              you what the end is to be. Are you ready to be a cold-blooded
              murderer also, or can we do anything to stop it?”
            </TextNode>

            <TextNode>
              “What would you do?” asked McMurdo abruptly. “You would not
              inform?”
            </TextNode>

            <TextNode>
              “God forbid!” cried Morris. “Sure, the very thought would cost me
              my life.”
            </TextNode>

            <TextNode>
              “That's well,” said McMurdo. “I'm thinking that you are a weak man
              and that you make too much of the matter.”
            </TextNode>

            <TextNode>
              “Too much! Wait till you have lived here longer. Look down the
              valley! See the cloud of a hundred chimneys that overshadows it! I
              tell you that the cloud of murder hangs thicker and lower than
              that over the heads of the people. It is the Valley of Fear, the
              Valley of Death. The terror is in the hearts of the people from
              the dusk to the dawn. Wait, young man, and you will learn for
              yourself.”
            </TextNode>

            <TextNode>
              “Well, I'll let you know what I think when I have seen more,” said
              McMurdo carelessly. “What is very clear is that you are not the
              man for the place, and that the sooner you sell out—if you only
              get a dime a dollar for what the business is worth—the better it
              will be for you. What you have said is safe with me; but, by Gar!
              if I thought you were an informer—”
            </TextNode>

            <TextNode>“No, no!” cried Morris piteously.</TextNode>

            <TextNode>
              “Well, let it rest at that. I'll bear what you have said in mind,
              and maybe some day I'll come back to it. I expect you meant kindly
              by speaking to me like this. Now I'll be getting home.”
            </TextNode>

            <TextNode>
              “One word before you go,” said Morris. “We may have been seen
              together. They may want to know what we have spoken about.”
            </TextNode>

            <TextNode>“Ah! that's well thought of.”</TextNode>

            <TextNode>“I offer you a clerkship in my store.”</TextNode>

            <TextNode>
              “And I refuse it. That's our business. Well, so long, Brother
              Morris, and may you find things go better with you in the future.”
            </TextNode>

            <TextNode>
              That same afternoon, as McMurdo sat smoking, lost in thought
              beside the stove of his sitting-room, the door swung open and its
              framework was filled with the huge figure of Boss McGinty. He
              passed the sign, and then seating himself opposite to the young
              man he looked at him steadily for some time, a look which was as
              steadily returned.
            </TextNode>

            <TextNode>
              “I'm not much of a visitor, Brother McMurdo,” he said at last. “I
              guess I am too busy over the folk that visit me. But I thought I'd
              stretch a point and drop down to see you in your own house.”
            </TextNode>

            <TextNode>
              “I'm proud to see you here, Councillor,” McMurdo answered
              heartily, bringing his whisky bottle out of the cupboard. “It's an
              honour that I had not expected.”
            </TextNode>

            <TextNode>“How's the arm?” asked the Boss.</TextNode>

            <TextNode>
              McMurdo made a wry face. “Well, I'm not forgetting it,” he said;
              “but it's worth it.”
            </TextNode>

            <TextNode>
              “Yes, it's worth it,” the other answered, “to those that are loyal
              and go through with it and are a help to the lodge. What were you
              speaking to Brother Morris about on Miller Hill this morning?”
            </TextNode>

            <TextNode>
              The question came so suddenly that it was well that he had his
              answer prepared. He burst into a hearty laugh. “Morris didn't know
              I could earn a living here at home. He shan't know either; for he
              has got too much conscience for the likes of me. But he's a
              good-hearted old chap. It was his idea that I was at a loose end,
              and that he would do me a good turn by offering me a clerkship in
              a dry goods store.”
            </TextNode>

            <TextNode>“Oh, that was it?”</TextNode>

            <TextNode>“Yes, that was it.”</TextNode>

            <TextNode>“And you refused it?”</TextNode>

            <TextNode>
              “Sure. Couldn't I earn ten times as much in my own bedroom with
              four hours' work?”
            </TextNode>

            <TextNode>
              “That's so. But I wouldn't get about too much with Morris.”
            </TextNode>

            <TextNode>“Why not?”</TextNode>

            <TextNode>
              “Well, I guess because I tell you not. That's enough for most folk
              in these parts.”
            </TextNode>

            <TextNode>
              “It may be enough for most folk; but it ain't enough for me,
              Councillor,” said McMurdo boldly. “If you are a judge of men,
              you'll know that.”
            </TextNode>

            <TextNode>
              The swarthy giant glared at him, and his hairy paw closed for an
              instant round the glass as though he would hurl it at the head of
              his companion. Then he laughed in his loud, boisterous, insincere
              fashion.
            </TextNode>

            <TextNode>
              “You're a queer card, for sure,” said he. “Well, if you want
              reasons, I'll give them. Did Morris say nothing to you against the
              lodge?”
            </TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>“Nor against me?”</TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>
              “Well, that's because he daren't trust you. But in his heart he is
              not a loyal brother. We know that well. So we watch him and we
              wait for the time to admonish him. I'm thinking that the time is
              drawing near. There's no room for scabby sheep in our pen. But if
              you keep company with a disloyal man, we might think that you were
              disloyal, too. See?”
            </TextNode>

            <TextNode>
              “There's no chance of my keeping company with him; for I dislike
              the man,” McMurdo answered. “As to being disloyal, if it was any
              man but you he would not use the word to me twice.”
            </TextNode>

            <TextNode>
              “Well, that's enough,” said McGinty, draining off his glass. “I
              came down to give you a word in season, and you've had it.”
            </TextNode>

            <TextNode>
              “I'd like to know,” said McMurdo, “how you ever came to learn that
              I had spoken with Morris at all?”
            </TextNode>

            <TextNode>
              McGinty laughed. “It's my business to know what goes on in this
              township,” said he. “I guess you'd best reckon on my hearing all
              that passes. Well, time's up, and I'll just say—”
            </TextNode>

            <TextNode>
              But his leavetaking was cut short in a very unexpected fashion.
              With a sudden crash the door flew open, and three frowning, intent
              faces glared in at them from under the peaks of police caps.
              McMurdo sprang to his feet and half drew his revolver; but his arm
              stopped midway as he became conscious that two Winchester rifles
              were levelled at his head. A man in uniform advanced into the
              room, a six-shooter in his hand. It was Captain Marvin, once of
              Chicago, and now of the Mine Constabulary. He shook his head with
              a half-smile at McMurdo.
            </TextNode>

            <TextNode>
              “I thought you'd be getting into trouble, Mr. Crooked McMurdo of
              Chicago,” said he. “Can't keep out of it, can you? Take your hat
              and come along with us.”
            </TextNode>

            <TextNode>
              “I guess you'll pay for this, Captain Marvin,” said McGinty. “Who
              are you, I'd like to know, to break into a house in this fashion
              and molest honest, law-abiding men?”
            </TextNode>

            <TextNode>
              “You're standing out in this deal, Councillor McGinty,” said the
              police captain. “We are not out after you, but after this man
              McMurdo. It is for you to help, not to hinder us in our duty,”
            </TextNode>

            <TextNode>
              “He is a friend of mine, and I'll answer for his conduct,” said
              the Boss.
            </TextNode>

            <TextNode>
              “By all accounts, Mr. McGinty, you may have to answer for your own
              conduct some of these days,” the captain answered. “This man
              McMurdo was a crook before ever he came here, and he's a crook
              still. Cover him, Patrolman, while I disarm him.”
            </TextNode>

            <TextNode>
              “There's my pistol,” said McMurdo coolly. “Maybe, Captain Marvin,
              if you and I were alone and face to face you would not take me so
              easily.”
            </TextNode>

            <TextNode>
              “Where's your warrant?” asked McGinty. “By Gar! a man might as
              well live in Russia as in Vermissa while folk like you are running
              the police. It's a capitalist outrage, and you'll hear more of it,
              I reckon.”
            </TextNode>

            <TextNode>
              “You do what you think is your duty the best way you can,
              Councillor. We'll look after ours.”
            </TextNode>

            <TextNode>“What am I accused of?” asked McMurdo.</TextNode>

            <TextNode>
              “Of being concerned in the beating of old Editor Stanger at the
              Herald office. It wasn't your fault that it isn't a murder
              charge.”
            </TextNode>

            <TextNode>
              “Well, if that's all you have against him,” cried McGinty with a
              laugh, “you can save yourself a deal of trouble by dropping it
              right now. This man was with me in my saloon playing poker up to
              midnight, and I can bring a dozen to prove it.”
            </TextNode>

            <TextNode>
              “That's your affair, and I guess you can settle it in court
              to-morrow. Meanwhile, come on, McMurdo, and come quietly if you
              don't want a gun across your head. You stand wide, Mr. McGinty;
              for I warn you I will stand no resistance when I am on duty!”
            </TextNode>

            <TextNode>
              So determined was the appearance of the captain that both McMurdo
              and his boss were forced to accept the situation. The latter
              managed to have a few whispered words with the prisoner before
              they parted.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page261;

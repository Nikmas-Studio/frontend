import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page267({
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
          Chapter VII.
          <br />
          The Trapping of Birdy Edwards
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              As McMurdo had said, the house in which he lived was a lonely one
              and very well suited for such a crime as they had planned. It was
              on the extreme fringe of the town and stood well back from the
              road. In any other case the conspirators would have simply called
              out their man, as they had many a time before, and emptied their
              pistols into his body; but in this instance it was very necessary
              to find out how much he knew, how he knew it, and what had been
              passed on to his employers.
            </TextNode>

            <TextNode>
              It was possible that they were already too late and that the work
              had been done. If that was indeed so, they could at least have
              their revenge upon the man who had done it. But they were hopeful
              that nothing of great importance had yet come to the detective's
              knowledge, as otherwise, they argued, he would not have troubled
              to write down and forward such trivial information as McMurdo
              claimed to have given him. However, all this they would learn from
              his own lips. Once in their power, they would find a way to make
              him speak. It was not the first time that they had handled an
              unwilling witness.
            </TextNode>

            <TextNode>
              McMurdo went to Hobson's Patch as agreed. The police seemed to
              take particular interest in him that morning, and Captain
              Marvin—he who had claimed the old acquaintance with him at
              Chicago—actually addressed him as he waited at the station.
              McMurdo turned away and refused to speak with him. He was back
              from his mission in the afternoon, and saw McGinty at the Union
              House.
            </TextNode>

            <TextNode>“He is coming,” he said.</TextNode>

            <TextNode>
              “Good!” said McGinty. The giant was in his shirt sleeves, with
              chains and seals gleaming athwart his ample waistcoat and a
              diamond twinkling through the fringe of his bristling beard. Drink
              and politics had made the Boss a very rich as well as powerful
              man. The more terrible, therefore, seemed that glimpse of the
              prison or the gallows which had risen before him the night before.
            </TextNode>

            <TextNode>
              “Do you reckon he knows much?” he asked anxiously.
            </TextNode>

            <TextNode>
              McMurdo shook his head gloomily. “He's been here some time—six
              weeks at the least. I guess he didn't come into these parts to
              look at the prospect. If he has been working among us all that
              time with the railroad money at his back, I should expect that he
              has got results, and that he has passed them on.”
            </TextNode>

            <TextNode>
              “There's not a weak man in the lodge,” cried McGinty. “True as
              steel, every man of them. And yet, by the Lord! there is that
              skunk Morris. What about him? If any man gives us away, it would
              be he. I've a mind to send a couple of the boys round before
              evening to give him a beating up and see what they can get from
              him.”
            </TextNode>

            <TextNode>
              “Well, there would be no harm in that,” McMurdo answered. “I won't
              deny that I have a liking for Morris and would be sorry to see him
              come to harm. He has spoken to me once or twice over lodge
              matters, and though he may not see them the same as you or I, he
              never seemed the sort that squeals. But still it is not for me to
              stand between him and you.”
            </TextNode>

            <TextNode>
              “I'll fix the old devil!” said McGinty with an oath. “I've had my
              eye on him this year past.”
            </TextNode>

            <TextNode>
              “Well, you know best about that,” McMurdo answered. “But whatever
              you do must be to-morrow; for we must lie low until the Pinkerton
              affair is settled up. We can't afford to set the police buzzing,
              to-day of all days.”
            </TextNode>

            <TextNode>
              “True for you,” said McGinty. “And we'll learn from Birdy Edwards
              himself where he got his news if we have to cut his heart out
              first. Did he seem to scent a trap?”
            </TextNode>

            <TextNode>
              McMurdo laughed. “I guess I took him on his weak point,” he said.
              “If he could get on a good trail of the Scowrers, he's ready to
              follow it into hell. I took his money,” McMurdo grinned as he
              produced a wad of dollar notes, “and as much more when he has seen
              all my papers.”
            </TextNode>

            <TextNode>“What papers?”</TextNode>

            <TextNode>
              “Well, there are no papers. But I filled him up about
              constitutions and books of rules and forms of membership. He
              expects to get right down to the end of everything before he
              leaves.”
            </TextNode>

            <TextNode>
              “Faith, he's right there,” said McGinty grimly. “Didn't he ask you
              why you didn't bring him the papers?”
            </TextNode>

            <TextNode>
              “As if I would carry such things, and me a suspected man, and
              Captain Marvin after speaking to me this very day at the depot!”
            </TextNode>

            <TextNode>
              “Ay, I heard of that,” said McGinty. “I guess the heavy end of
              this business is coming on to you. We could put him down an old
              shaft when we've done with him; but however we work it we can't
              get past the man living at Hobson's Patch and you being there
              to-day.”
            </TextNode>

            <TextNode>
              McMurdo shrugged his shoulders. “If we handle it right, they can
              never prove the killing,” said he. “No one can see him come to the
              house after dark, and I'll lay to it that no one will see him go.
              Now see here, Councillor, I'll show you my plan and I'll ask you
              to fit the others into it. You will all come in good time. Very
              well. He comes at ten. He is to tap three times, and me to open
              the door for him. Then I'll get behind him and shut it. He's our
              man then.”
            </TextNode>

            <TextNode>“That's all easy and plain.”</TextNode>

            <TextNode>
              “Yes; but the next step wants considering. He's a hard
              proposition. He's heavily armed. I've fooled him proper, and yet
              he is likely to be on his guard. Suppose I show him right into a
              room with seven men in it where he expected to find me alone.
              There is going to be shooting, and somebody is going to be hurt.”
            </TextNode>

            <TextNode>“That's so.”</TextNode>

            <TextNode>
              “And the noise is going to bring every damned copper in the
              township on top of it.”
            </TextNode>

            <TextNode>“I guess you are right.”</TextNode>

            <TextNode>
              “This is how I should work it. You will all be in the big
              room—same as you saw when you had a chat with me. I'll open the
              door for him, show him into the parlour beside the door, and leave
              him there while I get the papers. That will give me the chance of
              telling you how things are shaping. Then I will go back to him
              with some faked papers. As he is reading them I will jump for him
              and get my grip on his pistol arm. You'll hear me call and in you
              will rush. The quicker the better; for he is as strong a man as I,
              and I may have more than I can manage. But I allow that I can hold
              him till you come.”
            </TextNode>

            <TextNode>
              “It's a good plan,” said McGinty. “The lodge will owe you a debt
              for this. I guess when I move out of the chair I can put a name to
              the man that's coming after me.”
            </TextNode>

            <TextNode>
              “Sure, Councillor, I am little more than a recruit,” said McMurdo;
              but his face showed what he thought of the great man's compliment.
            </TextNode>

            <TextNode>
              When he had returned home he made his own preparations for the
              grim evening in front of him. First he cleaned, oiled, and loaded
              his Smith & Wesson revolver. Then he surveyed the room in which
              the detective was to be trapped. It was a large apartment, with a
              long deal table in the centre, and the big stove at one side. At
              each of the other sides were windows. There were no shutters on
              these: only light curtains which drew across. McMurdo examined
              these attentively. No doubt it must have struck him that the
              apartment was very exposed for so secret a meeting. Yet its
              distance from the road made it of less consequence. Finally he
              discussed the matter with his fellow lodger. Scanlan, though a
              Scowrer, was an inoffensive little man who was too weak to stand
              against the opinion of his comrades, but was secretly horrified by
              the deeds of blood at which he had sometimes been forced to
              assist. McMurdo told him shortly what was intended.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “And if I were you, Mike Scanlan, I would take a night off and
              keep clear of it. There will be bloody work here before morning.”
            </TextNode>

            <TextNode>
              “Well, indeed then, Mac,” Scanlan answered. “It's not the will but
              the nerve that is wanting in me. When I saw Manager Dunn go down
              at the colliery yonder it was just more than I could stand. I'm
              not made for it, same as you or McGinty. If the lodge will think
              none the worse of me, I'll just do as you advise and leave you to
              yourselves for the evening.”
            </TextNode>

            <TextNode>
              The men came in good time as arranged. They were outwardly
              respectable citizens, well clad and cleanly; but a judge of faces
              would have read little hope for Birdy Edwards in those hard mouths
              and remorseless eyes. There was not a man in the room whose hands
              had not been reddened a dozen times before. They were as hardened
              to human murder as a butcher to sheep.
            </TextNode>

            <TextNode>
              Foremost, of course, both in appearance and in guilt, was the
              formidable Boss. Harraway, the secretary, was a lean, bitter man
              with a long, scraggy neck and nervous, jerky limbs, a man of
              incorruptible fidelity where the finances of the order were
              concerned, and with no notion of justice or honesty to anyone
              beyond. The treasurer, Carter, was a middle-aged man, with an
              impassive, rather sulky expression, and a yellow parchment skin.
              He was a capable organizer, and the actual details of nearly every
              outrage had sprung from his plotting brain. The two Willabys were
              men of action, tall, lithe young fellows with determined faces,
              while their companion, Tiger Cormac, a heavy, dark youth, was
              feared even by his own comrades for the ferocity of his
              disposition. These were the men who assembled that night under the
              roof of McMurdo for the killing of the Pinkerton detective.
            </TextNode>

            <TextNode>
              Their host had placed whisky upon the table, and they had hastened
              to prime themselves for the work before them. Baldwin and Cormac
              were already half-drunk, and the liquor had brought out all their
              ferocity. Cormac placed his hands on the stove for an instant—it
              had been lighted, for the nights were still cold.
            </TextNode>

            <TextNode>“That will do,” said he, with an oath.</TextNode>

            <TextNode>
              “Ay,” said Baldwin, catching his meaning. “If he is strapped to
              that, we will have the truth out of him.”
            </TextNode>

            <TextNode>
              “We'll have the truth out of him, never fear,” said McMurdo. He
              had nerves of steel, this man; for though the whole weight of the
              affair was on him his manner was as cool and unconcerned as ever.
              The others marked it and applauded.
            </TextNode>

            <TextNode>
              “You are the one to handle him,” said the Boss approvingly. “Not a
              warning will he get till your hand is on his throat. It's a pity
              there are no shutters to your windows.”
            </TextNode>

            <TextNode>
              McMurdo went from one to the other and drew the curtains tighter.
              “Sure no one can spy upon us now. It's close upon the hour.”
            </TextNode>

            <TextNode>
              “Maybe he won't come. Maybe he'll get a sniff of danger,” said the
              secretary.
            </TextNode>

            <TextNode>
              “He'll come, never fear,” McMurdo answered. “He is as eager to
              come as you can be to see him. Hark to that!”
            </TextNode>

            <TextNode>
              They all sat like wax figures, some with their glasses arrested
              halfway to their lips. Three loud knocks had sounded at the door.
            </TextNode>

            <TextNode>
              “Hush!” McMurdo raised his hand in caution. An exulting glance
              went round the circle, and hands were laid upon hidden weapons.
            </TextNode>

            <TextNode>
              “Not a sound, for your lives!” McMurdo whispered, as he went from
              the room, closing the door carefully behind him.
            </TextNode>

            <TextNode>
              With strained ears the murderers waited. They counted the steps of
              their comrade down the passage. Then they heard him open the outer
              door. There were a few words as of greeting. Then they were aware
              of a strange step inside and of an unfamiliar voice. An instant
              later came the slam of the door and the turning of the key in the
              lock. Their prey was safe within the trap. Tiger Cormac laughed
              horribly, and Boss McGinty clapped his great hand across his
              mouth.
            </TextNode>

            <TextNode>
              “Be quiet, you fool!” he whispered. “You'll be the undoing of us
              yet!”
            </TextNode>

            <TextNode>
              There was a mutter of conversation from the next room. It seemed
              interminable. Then the door opened, and McMurdo appeared, his
              finger upon his lip.
            </TextNode>

            <TextNode>
              He came to the end of the table and looked round at them. A subtle
              change had come over him. His manner was as of one who has great
              work to do. His face had set into granite firmness. His eyes shone
              with a fierce excitement behind his spectacles. He had become a
              visible leader of men. They stared at him with eager interest; but
              he said nothing. Still with the same singular gaze he looked from
              man to man.
            </TextNode>

            <TextNode>
              “Well!” cried Boss McGinty at last. “Is he here? Is Birdy Edwards
              here?”
            </TextNode>

            <TextNode>
              “Yes,” McMurdo answered slowly. “Birdy Edwards is here. I am Birdy
              Edwards!”
            </TextNode>

            <TextNode>
              There were ten seconds after that brief speech during which the
              room might have been empty, so profound was the silence. The
              hissing of a kettle upon the stove rose sharp and strident to the
              ear. Seven white faces, all turned upward to this man who
              dominated them, were set motionless with utter terror. Then, with
              a sudden shivering of glass, a bristle of glistening rifle barrels
              broke through each window, while the curtains were torn from their
              hangings.
            </TextNode>

            <TextNode>
              At the sight Boss McGinty gave the roar of a wounded bear and
              plunged for the half-opened door. A levelled revolver met him
              there with the stern blue eyes of Captain Marvin of the Mine
              Police gleaming behind the sights. The Boss recoiled and fell back
              into his chair.
            </TextNode>

            <TextNode>
              “You're safer there, Councillor,” said the man whom they had known
              as McMurdo. “And you, Baldwin, if you don't take your hand off
              your pistol, you'll cheat the hangman yet. Pull it out, or by the
              Lord that made me—There, that will do. There are forty armed men
              round this house, and you can figure it out for yourself what
              chance you have. Take their pistols, Marvin!”
            </TextNode>

            <TextNode>
              There was no possible resistance under the menace of those rifles.
              The men were disarmed. Sulky, sheepish, and amazed, they still sat
              round the table.
            </TextNode>

            <TextNode>
              “I'd like to say a word to you before we separate,” said the man
              who had trapped them. “I guess we may not meet again until you see
              me on the stand in the courthouse. I'll give you something to
              think over between now and then. You know me now for what I am. At
              last I can put my cards on the table. I am Birdy Edwards of
              Pinkerton's. I was chosen to break up your gang. I had a hard and
              dangerous game to play. Not a soul, not one soul, not my nearest
              and dearest, knew that I was playing it. Only Captain Marvin here
              and my employers knew that. But it's over to-night, thank God, and
              I am the winner!”
            </TextNode>
            <TextNode>
              The seven pale, rigid faces looked up at him. There was
              unappeasable hatred in their eyes. He read the relentless threat.
            </TextNode>

            <TextNode>
              “Maybe you think that the game is not over yet. Well, I take my
              chance of that. Anyhow, some of you will take no further hand, and
              there are sixty more besides yourselves that will see a jail this
              night. I'll tell you this, that when I was put upon this job I
              never believed there was such a society as yours. I thought it was
              paper talk, and that I would prove it so. They told me it was to
              do with the Freemen; so I went to Chicago and was made one. Then I
              was surer than ever that it was just paper talk; for I found no
              harm in the society, but a deal of good.
            </TextNode>

            <TextNode>
              “Still, I had to carry out my job, and I came to the coal valleys.
              When I reached this place I learned that I was wrong and that it
              wasn't a dime novel after all. So I stayed to look after it. I
              never killed a man in Chicago. I never minted a dollar in my life.
              Those I gave you were as good as any others; but I never spent
              money better. But I knew the way into your good wishes and so I
              pretended to you that the law was after me. It all worked just as
              I thought.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page267;

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

function Page228({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;HOUND OF&nbsp;THE&nbsp;BASKERVILLES'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>The man's face became openly defiant.</TextNode>

            <TextNode>
              “It is my business, and not yours. I will not tell.”
            </TextNode>

            <TextNode>“Then you leave my employment right away.”</TextNode>

            <TextNode>“Very good, sir. If I must I must.”</TextNode>

            <TextNode>
              “And you go in disgrace. By thunder, you may well be ashamed of
              yourself. Your family has lived with mine for over a hundred years
              under this roof, and here I find you deep in some dark plot
              against me.”
            </TextNode>

            <TextNode>
              “No, no, sir; no, not against you!” It was a woman's voice, and
              Mrs. Barrymore, paler and more horror-struck than her husband, was
              standing at the door. Her bulky figure in a shawl and skirt might
              have been comic were it not for the intensity of feeling upon her
              face.
            </TextNode>

            <TextNode>
              “We have to go, Eliza. This is the end of it. You can pack our
              things,” said the butler.
            </TextNode>

            <TextNode>
              “Oh, John, John, have I brought you to this? It is my doing, Sir
              Henry—all mine. He has done nothing except for my sake and because
              I asked him.”
            </TextNode>

            <TextNode>“Speak out, then! What does it mean?”</TextNode>

            <TextNode>
              “My unhappy brother is starving on the moor. We cannot let him
              perish at our very gates. The light is a signal to him that food
              is ready for him, and his light out yonder is to show the spot to
              which to bring it.”
            </TextNode>

            <TextNode>“Then your brother is—”</TextNode>

            <TextNode>
              “The escaped convict, sir—Selden, the criminal.”
            </TextNode>

            <TextNode>
              “That's the truth, sir,” said Barrymore. “I said that it was not
              my secret and that I could not tell it to you. But now you have
              heard it, and you will see that if there was a plot it was not
              against you.”
            </TextNode>

            <TextNode>
              This, then, was the explanation of the stealthy expeditions at
              night and the light at the window. Sir Henry and I both stared at
              the woman in amazement. Was it possible that this stolidly
              respectable person was of the same blood as one of the most
              notorious criminals in the country?
            </TextNode>

            <TextNode>
              “Yes, sir, my name was Selden, and he is my younger brother. We
              humoured him too much when he was a lad, and gave him his own way
              in everything until he came to think that the world was made for
              his pleasure, and that he could do what he liked in it. Then as he
              grew older he met wicked companions, and the devil entered into
              him until he broke my mother's heart and dragged our name in the
              dirt. From crime to crime he sank lower and lower, until it is
              only the mercy of God which has snatched him from the scaffold;
              but to me, sir, he was always the little curly-headed boy that I
              had nursed and played with, as an elder sister would. That was why
              he broke prison, sir. He knew that I was here and that we could
              not refuse to help him. When he dragged himself here one night,
              weary and starving, with the warders hard at his heels, what could
              we do? We took him in and fed him and cared for him. Then you
              returned, sir, and my brother thought he would be safer on the
              moor than anywhere else until the hue and cry was over, so he lay
              in hiding there. But every second night we made sure if he was
              still there by putting a light in the window, and if there was an
              answer my husband took out some bread and meat to him. Every day
              we hoped that he was gone, but as long as he was there we could
              not desert him. That is the whole truth, as I am an honest
              Christian woman, and you will see that if there is blame in the
              matter it does not lie with my husband, but with me, for whose
              sake he has done all that he has.”
            </TextNode>

            <TextNode>
              The woman's words came with an intense earnestness which carried
              conviction with them.
            </TextNode>

            <TextNode>“Is this true, Barrymore?”</TextNode>

            <TextNode>“Yes, Sir Henry. Every word of it.”</TextNode>

            <TextNode>
              “Well, I cannot blame you for standing by your own wife. Forget
              what I have said. Go to your room, you two, and we shall talk
              further about this matter in the morning.”
            </TextNode>

            <TextNode>
              When they were gone we looked out of the window again. Sir Henry
              had flung it open, and the cold night wind beat in upon our faces.
              Far away in the black distance there still glowed that one tiny
              point of yellow light.
            </TextNode>

            <TextNode>“I wonder he dares,” said Sir Henry.</TextNode>

            <TextNode>
              “It may be so placed as to be only visible from here.”
            </TextNode>

            <TextNode>“Very likely. How far do you think it is?”</TextNode>

            <TextNode>“Out by the Cleft Tor, I think.”</TextNode>

            <TextNode>“Not more than a mile or two off.”</TextNode>

            <TextNode>“Hardly that.”</TextNode>

            <TextNode>
              “Well, it cannot be far if Barrymore had to carry out the food to
              it. And he is waiting, this villain, beside that candle. By
              thunder, Watson, I am going out to take that man!”
            </TextNode>

            <TextNode>
              The same thought had crossed my own mind. It was not as if the
              Barrymores had taken us into their confidence. Their secret had
              been forced from them. The man was a danger to the community, an
              unmitigated scoundrel for whom there was neither pity nor excuse.
              We were only doing our duty in taking this chance of putting him
              back where he could do no harm. With his brutal and violent
              nature, others would have to pay the price if we held our hands.
              Any night, for example, our neighbours the Stapletons might be
              attacked by him, and it may have been the thought of this which
              made Sir Henry so keen upon the adventure.
            </TextNode>

            <TextNode>“I will come,” said I.</TextNode>

            <TextNode>
              “Then get your revolver and put on your boots. The sooner we start
              the better, as the fellow may put out his light and be off.”
            </TextNode>

            <TextNode>
              In five minutes we were outside the door, starting upon our
              expedition. We hurried through the dark shrubbery, amid the dull
              moaning of the autumn wind and the rustle of the falling leaves.
              The night air was heavy with the smell of damp and decay. Now and
              again the moon peeped out for an instant, but clouds were driving
              over the face of the sky, and just as we came out on the moor a
              thin rain began to fall. The light still burned steadily in front.
            </TextNode>

            <TextNode>“Are you armed?” I asked.</TextNode>

            <TextNode>“I have a hunting-crop.”</TextNode>

            <TextNode>
              “We must close in on him rapidly, for he is said to be a desperate
              fellow. We shall take him by surprise and have him at our mercy
              before he can resist.”
            </TextNode>

            <TextNode>
              “I say, Watson,” said the baronet, “what would Holmes say to this?
              How about that hour of darkness in which the power of evil is
              exalted?”
            </TextNode>

            <TextNode>
              As if in answer to his words there rose suddenly out of the vast
              gloom of the moor that strange cry which I had already heard upon
              the borders of the great Grimpen Mire. It came with the wind
              through the silence of the night, a long, deep mutter, then a
              rising howl, and then the sad moan in which it died away. Again
              and again it sounded, the whole air throbbing with it, strident,
              wild, and menacing. The baronet caught my sleeve and his face
              glimmered white through the darkness.
            </TextNode>

            <TextNode>“My God, what's that, Watson?”</TextNode>

            <TextNode>
              “I don't know. It's a sound they have on the moor. I heard it once
              before.”
            </TextNode>

            <TextNode>
              It died away, and an absolute silence closed in upon us. We stood
              straining our ears, but nothing came.
            </TextNode>

            <TextNode>
              “Watson,” said the baronet, “it was the cry of a hound.”
            </TextNode>

            <TextNode>
              My blood ran cold in my veins, for there was a break in his voice
              which told of the sudden horror which had seized him.
            </TextNode>

            <TextNode>“What do they call this sound?” he asked.</TextNode>

            <TextNode>“Who?”</TextNode>

            <TextNode>“The folk on the country-side.”</TextNode>

            <TextNode>
              “Oh, they are ignorant people. Why should you mind what they call
              it?”
            </TextNode>

            <TextNode>“Tell me, Watson. What do they say of it?”</TextNode>

            <TextNode>I hesitated but could not escape the question.</TextNode>

            <TextNode>
              “They say it is the cry of the Hound of the Baskervilles.”
            </TextNode>

            <TextNode>He groaned and was silent for a few moments.</TextNode>

            <TextNode>
              “A hound it was,” he said, at last, “but it seemed to come from
              miles away, over yonder, I think.”
            </TextNode>

            <TextNode>“It was hard to say whence it came.”</TextNode>

            <TextNode>
              “It rose and fell with the wind. Isn't that the direction of the
              great Grimpen Mire?”
            </TextNode>

            <TextNode>“Yes, it is.”</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Well, it was up there. Come now, Watson, didn't you think
              yourself that it was the cry of a hound? I am not a child. You
              need not fear to speak the truth.”
            </TextNode>

            <TextNode>
              “Stapleton was with me when I heard it last. He said that it might
              be the calling of a strange bird.”
            </TextNode>

            <TextNode>
              “No, no, it was a hound. My God, can there be some truth in all
              these stories? Is it possible that I am really in danger from so
              dark a cause? You don't believe it, do you, Watson?”
            </TextNode>

            <TextNode>“No, no.”</TextNode>

            <TextNode>
              “And yet it was one thing to laugh about it in London, and it is
              another to stand out here in the darkness of the moor and to hear
              such a cry as that. And my uncle! There was the footprint of the
              hound beside him as he lay. It all fits together. I don't think
              that I am a coward, Watson, but that sound seemed to freeze my
              very blood. Feel my hand!”
            </TextNode>

            <TextNode>It was as cold as a block of marble.</TextNode>

            <TextNode>“You'll be all right to-morrow.”</TextNode>

            <TextNode>
              “I don't think I'll get that cry out of my head. What do you
              advise that we do now?”
            </TextNode>

            <TextNode>“Shall we turn back?”</TextNode>

            <TextNode>
              “No, by thunder; we have come out to get our man, and we will do
              it. We after the convict, and a hell-hound, as likely as not,
              after us. Come on! We'll see it through if all the fiends of the
              pit were loose upon the moor.”
            </TextNode>

            <TextNode>
              We stumbled slowly along in the darkness, with the black loom of
              the craggy hills around us, and the yellow speck of light burning
              steadily in front. There is nothing so deceptive as the distance
              of a light upon a pitch-dark night, and sometimes the glimmer
              seemed to be far away upon the horizon and sometimes it might have
              been within a few yards of us. But at last we could see whence it
              came, and then we knew that we were indeed very close. A guttering
              candle was stuck in a crevice of the rocks which flanked it on
              each side so as to keep the wind from it and also to prevent it
              from being visible, save in the direction of Baskerville Hall. A
              boulder of granite concealed our approach, and crouching behind it
              we gazed over it at the signal light. It was strange to see this
              single candle burning there in the middle of the moor, with no
              sign of life near it—just the one straight yellow flame and the
              gleam of the rock on each side of it.
            </TextNode>

            <TextNode>“What shall we do now?” whispered Sir Henry.</TextNode>

            <TextNode>
              “Wait here. He must be near his light. Let us see if we can get a
              glimpse of him.”
            </TextNode>

            <TextNode>
              The words were hardly out of my mouth when we both saw him. Over
              the rocks, in the crevice of which the candle burned, there was
              thrust out an evil yellow face, a terrible animal face, all seamed
              and scored with vile passions. Foul with mire, with a bristling
              beard, and hung with matted hair, it might well have belonged to
              one of those old savages who dwelt in the burrows on the
              hillsides. The light beneath him was reflected in his small,
              cunning eyes which peered fiercely to right and left through the
              darkness, like a crafty and savage animal who has heard the steps
              of the hunters.
            </TextNode>

            <TextNode>
              Something had evidently aroused his suspicions. It may have been
              that Barrymore had some private signal which we had neglected to
              give, or the fellow may have had some other reason for thinking
              that all was not well, but I could read his fears upon his wicked
              face. Any instant he might dash out the light and vanish in the
              darkness. I sprang forward therefore, and Sir Henry did the same.
              At the same moment the convict screamed out a curse at us and
              hurled a rock which splintered up against the boulder which had
              sheltered us. I caught one glimpse of his short, squat,
              strongly-built figure as he sprang to his feet and turned to run.
              At the same moment by a lucky chance the moon broke through the
              clouds. We rushed over the brow of the hill, and there was our man
              running with great speed down the other side, springing over the
              stones in his way with the activity of a mountain goat. A lucky
              long shot of my revolver might have crippled him, but I had
              brought it only to defend myself if attacked, and not to shoot an
              unarmed man who was running away.
            </TextNode>

            <TextNode>
              We were both swift runners and in fairly good training, but we
              soon found that we had no chance of overtaking him. We saw him for
              a long time in the moonlight until he was only a small speck
              moving swiftly among the boulders upon the side of a distant hill.
              We ran and ran until we were completely blown, but the space
              between us grew ever wider. Finally we stopped and sat panting on
              two rocks, while we watched him disappearing in the distance.
            </TextNode>

            <TextNode>
              And it was at this moment that there occurred a most strange and
              unexpected thing. We had risen from our rocks and were turning to
              go home, having abandoned the hopeless chase. The moon was low
              upon the right, and the jagged pinnacle of a granite tor stood up
              against the lower curve of its silver disc. There, outlined as
              black as an ebony statue on that shining back-ground, I saw the
              figure of a man upon the tor. Do not think that it was a delusion,
              Holmes. I assure you that I have never in my life seen anything
              more clearly. As far as I could judge, the figure was that of a
              tall, thin man. He stood with his legs a little separated, his
              arms folded, his head bowed, as if he were brooding over that
              enormous wilderness of peat and granite which lay before him. He
              might have been the very spirit of that terrible place. It was not
              the convict. This man was far from the place where the latter had
              disappeared. Besides, he was a much taller man. With a cry of
              surprise I pointed him out to the baronet, but in the instant
              during which I had turned to grasp his arm the man was gone. There
              was the sharp pinnacle of granite still cutting the lower edge of
              the moon, but its peak bore no trace of that silent and motionless
              figure.
            </TextNode>

            <TextNode>
              I wished to go in that direction and to search the tor, but it was
              some distance away. The baronet's nerves were still quivering from
              that cry, which recalled the dark story of his family, and he was
              not in the mood for fresh adventures. He had not seen this lonely
              man upon the tor and could not feel the thrill which his strange
              presence and his commanding attitude had given to me. “A warder,
              no doubt,” said he. “The moor has been thick with them since this
              fellow escaped.” Well, perhaps his explanation may be the right
              one, but I should like to have some further proof of it. To-day we
              mean to communicate to the Princetown people where they should
              look for their missing man, but it is hard lines that we have not
              actually had the triumph of bringing him back as our own prisoner.
              Such are the adventures of last night, and you must acknowledge,
              my dear Holmes, that I have done you very well in the matter of a
              report. Much of what I tell you is no doubt quite irrelevant, but
              still I feel that it is best that I should let you have all the
              facts and leave you to select for yourself those which will be of
              most service to you in helping you to your conclusions. We are
              certainly making some progress. So far as the Barrymores go we
              have found the motive of their actions, and that has cleared up
              the situation very much. But the moor with its mysteries and its
              strange inhabitants remains as inscrutable as ever. Perhaps in my
              next I may be able to throw some light upon this also. Best of all
              would it be if you could come down to us. In any case you will
              hear from me again in the course of the next few days.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page228;

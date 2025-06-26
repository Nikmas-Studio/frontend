import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page182({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;SOLITARY&nbsp;CYCLIST'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “So I trust, Watson; so I trust,” said Holmes, gravely. “There is
              some deep intrigue going on round that little woman, and it is our
              duty to see that no one molests her upon that last journey. I
              think, Watson, that we must spare time to run down together on
              Saturday morning, and make sure that this curious and inconclusive
              investigation has no untoward ending.”
            </TextNode>

            <TextNode>
              I confess that I had not up to now taken a very serious view of
              the case, which had seemed to me rather grotesque and bizarre than
              dangerous. That a man should lie in wait for and follow a very
              handsome woman is no unheard-of thing, and if he had so little
              audacity that he not only dared not address her, but even fled
              from her approach, he was not a very formidable assailant. The
              ruffian Woodley was a very different person, but, except on one
              occasion, he had not molested our client, and now he visited the
              house of Carruthers without intruding upon her presence. The man
              on the bicycle was doubtless a member of those week-end parties at
              the Hall of which the publican had spoken; but who he was or what
              he wanted was as obscure as ever. It was the severity of Holmes's
              manner and the fact that he slipped a revolver into his pocket
              before leaving our rooms which impressed me with the feeling that
              tragedy might prove to lurk behind this curious train of events.
            </TextNode>

            <TextNode>
              A rainy night had been followed by a glorious morning, and the
              heath-covered country-side with the glowing clumps of flowering
              gorse seemed all the more beautiful to eyes which were weary of
              the duns and drabs and slate-greys of London. Holmes and I walked
              along the broad, sandy road inhaling the fresh morning air, and
              rejoicing in the music of the birds and the fresh breath of the
              spring. From a rise of the road on the shoulder of Crooksbury Hill
              we could see the grim Hall bristling out from amidst the ancient
              oaks, which, old as they were, were still younger than the
              building which they surrounded. Holmes pointed down the long tract
              of road which wound, a reddish yellow band, between the brown of
              the heath and the budding green of the woods. Far away, a black
              dot, we could see a vehicle moving in our direction. Holmes gave
              an exclamation of impatience.
            </TextNode>

            <TextNode>
              “I had given a margin of half an hour,” said he. “If that is her
              trap she must be making for the earlier train. I fear, Watson,
              that she will be past Charlington before we can possibly meet
              her.”
            </TextNode>

            <TextNode>
              From the instant that we passed the rise we could no longer see
              the vehicle, but we hastened onwards at such a pace that my
              sedentary life began to tell upon me, and I was compelled to fall
              behind. Holmes, however, was always in training, for he had
              inexhaustible stores of nervous energy upon which to draw. His
              springy step never slowed until suddenly, when he was a hundred
              yards in front of me, he halted, and I saw him throw up his hand
              with a gesture of grief and despair. At the same instant an empty
              dog-cart, the horse cantering, the reins trailing, appeared round
              the curve of the road and rattled swiftly towards us.
            </TextNode>

            <TextNode>
              “Too late, Watson; too late!” cried Holmes, as I ran panting to
              his side. “Fool that I was not to allow for that earlier train!
              It's abduction, Watson—abduction! Murder! Heaven knows what! Block
              the road! Stop the horse! That's right. Now, jump in, and let us
              see if I can repair the consequences of my own blunder.”
            </TextNode>

            <TextNode>
              We had sprung into the dog-cart, and Holmes, after turning the
              horse, gave it a sharp cut with the whip, and we flew back along
              the road. As we turned the curve the whole stretch of road between
              the Hall and the heath was opened up. I grasped Holmes's arm.
            </TextNode>

            <TextNode>“That's the man!” I gasped.</TextNode>

            <TextNode>
              A solitary cyclist was coming towards us. His head was down and
              his shoulders rounded as he put every ounce of energy that he
              possessed on to the pedals. He was flying like a racer. Suddenly
              he raised his bearded face, saw us close to him, and pulled up,
              springing from his machine. That coal-black beard was in singular
              contrast to the pallor of his face, and his eyes were as bright as
              if he had a fever. He stared at us and at the dog-cart. Then a
              look of amazement came over his face.
            </TextNode>

            <TextNode>
              “Halloa! Stop there!” he shouted, holding his bicycle to block our
              road. “Where did you get that dog-cart? Pull up, man!” he yelled,
              drawing a pistol from his side pocket. “Pull up, I say, or, by
              George, I'll put a bullet into your horse.”
            </TextNode>

            <TextNode>
              Holmes threw the reins into my lap and sprang down from the cart.
            </TextNode>

            <TextNode>
              “You're the man we want to see. Where is Miss Violet Smith?” he
              said, in his quick, clear way.
            </TextNode>

            <TextNode>
              “That's what I am asking you. You're in her dog-cart. You ought to
              know where she is.”
            </TextNode>

            <TextNode>
              “We met the dog-cart on the road. There was no one in it. We drove
              back to help the young lady.”
            </TextNode>

            <TextNode>
              “Good Lord! Good Lord! what shall I do?” cried the stranger, in an
              ecstasy of despair. “They've got her, that hellhound Woodley and
              the blackguard parson. Come, man, come, if you really are her
              friend. Stand by me and we'll save her, if I have to leave my
              carcass in Charlington Wood.”
            </TextNode>

            <TextNode>
              He ran distractedly, his pistol in his hand, towards a gap in the
              hedge. Holmes followed him, and I, leaving the horse grazing
              beside the road, followed Holmes.
            </TextNode>

            <TextNode>
              “This is where they came through,” said he, pointing to the marks
              of several feet upon the muddy path. “Halloa! Stop a minute! Who's
              this in the bush?”
            </TextNode>

            <TextNode>
              It was a young fellow about seventeen, dressed like an ostler,
              with leather cords and gaiters. He lay upon his back, his knees
              drawn up, a terrible cut upon his head. He was insensible, but
              alive. A glance at his wound told me that it had not penetrated
              the bone.
            </TextNode>

            <TextNode>
              “That's Peter, the groom,” cried the stranger. “He drove her. The
              beasts have pulled him off and clubbed him. Let him lie; we can't
              do him any good, but we may save her from the worst fate that can
              befall a woman.”
            </TextNode>

            <TextNode>
              We ran frantically down the path, which wound among the trees. We
              had reached the shrubbery which surrounded the house when Holmes
              pulled up.
            </TextNode>

            <TextNode>
              “They didn't go to the house. Here are their marks on the
              left—here, beside the laurel bushes! Ah, I said so!”
            </TextNode>

            <TextNode>
              As he spoke a woman's shrill scream—a scream which vibrated with a
              frenzy of horror—burst from the thick green clump of bushes in
              front of us. It ended suddenly on its highest note with a choke
              and a gurgle.
            </TextNode>

            <TextNode>
              “This way! This way! They are in the bowling alley,” cried the
              stranger, darting through the bushes. “Ah, the cowardly dogs!
              Follow me, gentlemen! Too late! too late! by the living Jingo!”
            </TextNode>

            <TextNode>
              We had broken suddenly into a lovely glade of greensward
              surrounded by ancient trees. On the farther side of it, under the
              shadow of a mighty oak, there stood a singular group of three
              people. One was a woman, our client, drooping and faint, a
              handkerchief round her mouth. Opposite her stood a brutal,
              heavy-faced, red-moustached young man, his gaitered legs parted
              wide, one arm akimbo, the other waving a riding-crop, his whole
              attitude suggestive of triumphant bravado. Between them an
              elderly, grey-bearded man, wearing a short surplice over a light
              tweed suit, had evidently just completed the wedding service, for
              he pocketed his prayer-book as we appeared and slapped the
              sinister bridegroom upon the back in jovial congratulation.
            </TextNode>

            <TextNode>“They're married!” I gasped.</TextNode>

            <TextNode>
              “Come on!” cried our guide; “come on!” He rushed across the glade,
              Holmes and I at his heels. As we approached, the lady staggered
              against the trunk of the tree for support. Williamson, the
              ex-clergyman, bowed to us with mock politeness, and the bully
              Woodley advanced with a shout of brutal and exultant laughter.
            </TextNode>

            <TextNode>
              “You can take your beard off, Bob,” said he. “I know you right
              enough. Well, you and your pals have just come in time for me to
              be able to introduce you to Mrs. Woodley.”
            </TextNode>

            <TextNode>
              Our guide's answer was a singular one. He snatched off the dark
              beard which had disguised him and threw it on the ground,
              disclosing a long, sallow, clean-shaven face below it. Then he
              raised his revolver and covered the young ruffian, who was
              advancing upon him with his dangerous riding-crop swinging in his
              hand.
            </TextNode>

            <TextNode>
              “Yes,” said our ally, “I am Bob Carruthers, and I'll see this
              woman righted if I have to swing for it. I told you what I'd do if
              you molested her, and, by the Lord, I'll be as good as my word!”
            </TextNode>

            <TextNode>“You're too late. She's my wife!”</TextNode>

            <TextNode>“No, she's your widow.”</TextNode>

            <TextNode>
              His revolver cracked, and I saw the blood spurt from the front of
              Woodley's waistcoat. He spun round with a scream and fell upon his
              back, his hideous red face turning suddenly to a dreadful mottled
              pallor. The old man, still clad in his surplice, burst into such a
              string of foul oaths as I have never heard, and pulled out a
              revolver of his own, but before he could raise it he was looking
              down the barrel of Holmes's weapon.
            </TextNode>

            <TextNode>
              “Enough of this,” said my friend, coldly. “Drop that pistol!
              Watson, pick it up! Hold it to his head! Thank you. You,
              Carruthers, give me that revolver. We'll have no more violence.
              Come, hand it over!”
            </TextNode>

            <TextNode>“Who are you, then?”</TextNode>

            <TextNode>“My name is Sherlock Holmes.”</TextNode>

            <TextNode>“Good Lord!”</TextNode>

            <TextNode>
              “You have heard of me, I see. I will represent the official police
              until their arrival. Here, you!” he shouted to a frightened groom
              who had appeared at the edge of the glade. “Come here. Take this
              note as hard as you can ride to Farnham.” He scribbled a few words
              upon a leaf from his note-book. “Give it to the superintendent at
              the police-station. Until he comes I must detain you all under my
              personal custody.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              The strong, masterful personality of Holmes dominated the tragic
              scene, and all were equally puppets in his hands. Williamson and
              Carruthers found themselves carrying the wounded Woodley into the
              house, and I gave my arm to the frightened girl. The injured man
              was laid on his bed, and at Holmes's request I examined him. I
              carried my report to where he sat in the old tapestry-hung
              dining-room with his two prisoners before him.
            </TextNode>

            <TextNode>“He will live,” said I.</TextNode>

            <TextNode>
              “What!” cried Carruthers, springing out of his chair. “I'll go
              upstairs and finish him first. Do you tell me that that girl, that
              angel, is to be tied to Roaring Jack Woodley for life?”
            </TextNode>

            <TextNode>
              “You need not concern yourself about that,” said Holmes. “There
              are two very good reasons why she should under no circumstances be
              his wife. In the first place, we are very safe in questioning Mr.
              Williamson's right to solemnize a marriage.”
            </TextNode>

            <TextNode>“I have been ordained,” cried the old rascal.</TextNode>

            <TextNode>“And also unfrocked.”</TextNode>

            <TextNode>“Once a clergyman, always a clergyman.”</TextNode>

            <TextNode>“I think not. How about the license?”</TextNode>

            <TextNode>
              “We had a license for the marriage. I have it here in my pocket.”
            </TextNode>

            <TextNode>
              “Then you got it by a trick. But in any case a forced marriage is
              no marriage, but it is a very serious felony, as you will discover
              before you have finished. You'll have time to think the point out
              during the next ten years or so, unless I am mistaken. As to you,
              Carruthers, you would have done better to keep your pistol in your
              pocket.”
            </TextNode>

            <TextNode>
              “I begin to think so, Mr. Holmes; but when I thought of all the
              precaution I had taken to shield this girl—for I loved her, Mr.
              Holmes, and it is the only time that ever I knew what love was—it
              fairly drove me mad to think that she was in the power of the
              greatest brute and bully in South Africa, a man whose name is a
              holy terror from Kimberley to Johannesburg. Why, Mr. Holmes,
              you'll hardly believe it, but ever since that girl has been in my
              employment I never once let her go past this house, where I knew
              these rascals were lurking, without following her on my bicycle
              just to see that she came to no harm. I kept my distance from her,
              and I wore a beard so that she should not recognise me, for she is
              a good and high-spirited girl, and she wouldn't have stayed in my
              employment long if she had thought that I was following her about
              the country roads.”
            </TextNode>

            <TextNode>“Why didn't you tell her of her danger?”</TextNode>

            <TextNode>
              “Because then, again, she would have left me, and I couldn't bear
              to face that. Even if she couldn't love me it was a great deal to
              me just to see her dainty form about the house, and to hear the
              sound of her voice.”
            </TextNode>

            <TextNode>
              “Well,” said I, “you call that love, Mr. Carruthers, but I should
              call it selfishness.”
            </TextNode>

            <TextNode>
              “Maybe the two things go together. Anyhow, I couldn't let her go.
              Besides, with this crowd about, it was well that she should have
              someone near to look after her. Then when the cable came I knew
              they were bound to make a move.”
            </TextNode>

            <TextNode>“What cable?”</TextNode>

            <TextNode>Carruthers took a telegram from his pocket.</TextNode>

            <TextNode>“That's it,” said he.</TextNode>

            <TextNode>It was short and concise:</TextNode>

            <TextNode>The old man is dead.</TextNode>

            <TextNode>
              “Hum!” said Holmes. “I think I see how things worked, and I can
              understand how this message would, as you say, bring them to a
              head. But while we wait you might tell me what you can.”
            </TextNode>

            <TextNode>
              The old reprobate with the surplice burst into a volley of bad
              language.
            </TextNode>

            <TextNode>
              “By Heaven,” said he, “if you squeal on us, Bob Carruthers, I'll
              serve you as you served Jack Woodley. You can bleat about the girl
              to your heart's content, for that's your own affair, but if you
              round on your pals to this plain-clothes copper it will be the
              worst day's work that ever you did.”
            </TextNode>

            <TextNode>
              “Your reverence need not be excited,” said Holmes, lighting a
              cigarette. “The case is clear enough against you, and all I ask is
              a few details for my private curiosity. However, if there's any
              difficulty in your telling me I'll do the talking, and then you
              will see how far you have a chance of holding back your secrets.
              In the first place, three of you came from South Africa on this
              game—you Williamson, you Carruthers, and Woodley.”
            </TextNode>

            <TextNode>
              “Lie number one,” said the old man; “I never saw either of them
              until two months ago, and I have never been in Africa in my life,
              so you can put that in your pipe and smoke it, Mr. Busybody
              Holmes!”
            </TextNode>

            <TextNode>“What he says is true,” said Carruthers.</TextNode>

            <TextNode>
              “Well, well, two of you came over. His reverence is our own
              home-made article. You had known Ralph Smith in South Africa. You
              had reason to believe he would not live long. You found out that
              his niece would inherit his fortune. How's that—eh?”
            </TextNode>

            <TextNode>Carruthers nodded and Williamson swore.</TextNode>

            <TextNode>
              “She was next-of-kin, no doubt, and you were aware that the old
              fellow would make no will.”
            </TextNode>

            <TextNode>“Couldn't read or write,” said Carruthers.</TextNode>

            <TextNode>
              “So you came over, the two of you, and hunted up the girl. The
              idea was that one of you was to marry her and the other have a
              share of the plunder. For some reason Woodley was chosen as the
              husband. Why was that?”
            </TextNode>

            <TextNode>
              “We played cards for her on the voyage. He won.”
            </TextNode>

            <TextNode>
              “I see. You got the young lady into your service, and there
              Woodley was to do the courting. She recognised the drunken brute
              that he was, and would have nothing to do with him. Meanwhile,
              your arrangement was rather upset by the fact that you had
              yourself fallen in love with the lady. You could no longer bear
              the idea of this ruffian owning her.”
            </TextNode>

            <TextNode>“No, by George, I couldn't!”</TextNode>

            <TextNode>
              “There was a quarrel between you. He left you in a rage, and began
              to make his own plans independently of you.”
            </TextNode>

            <TextNode>
              “It strikes me, Williamson, there isn't very much that we can tell
              this gentleman,” cried Carruthers, with a bitter laugh. “Yes, we
              quarreled, and he knocked me down. I am level with him on that,
              anyhow. Then I lost sight of him. That was when he picked up with
              this cast padre here. I found that they had set up house-keeping
              together at this place on the line that she had to pass for the
              station. I kept my eye on her after that, for I knew there was
              some devilry in the wind. I saw them from time to time, for I was
              anxious to know what they were after. Two days ago Woodley came up
              to my house with this cable, which showed that Ralph Smith was
              dead. He asked me if I would stand by the bargain. I said I would
              not. He asked me if I would marry the girl myself and give him a
              share. I said I would willingly do so, but that she would not have
              me. He said, ‘Let us get her married first, and after a week or
              two she may see things a bit different.’ I said I would have
              nothing to do with violence. So he went off cursing, like the
              foul-mouthed blackguard that he was, and swearing that he would
              have her yet. She was leaving me this week-end, and I had got a
              trap to take her to the station, but I was so uneasy in my mind
              that I followed her on my bicycle. She had got a start, however,
              and before I could catch her the mischief was done. The first
              thing I knew about it was when I saw you two gentlemen driving
              back in her dog-cart.”
            </TextNode>

            <TextNode>
              Holmes rose and tossed the end of his cigarette into the grate. “I
              have been very obtuse, Watson,” said he. “When in your report you
              said that you had seen the cyclist as you thought arrange his
              necktie in the shrubbery, that alone should have told me all.
              However, we may congratulate ourselves upon a curious and in some
              respects a unique case. I perceive three of the county
              constabulary in the drive, and I am glad to see that the little
              ostler is able to keep pace with them; so it is likely that
              neither he nor the interesting bridegroom will be permanently
              damaged by their morning's adventures. I think, Watson, that in
              your medical capacity you might wait upon Miss Smith and tell her
              that if she is sufficiently recovered we shall be happy to escort
              her to her mother's home. If she is not quite convalescent you
              will find that a hint that we were about to telegraph to a young
              electrician in the Midlands would probably complete the cure. As
              to you, Mr. Carruthers, I think that you have done what you could
              to make amends for your share in an evil plot. There is my card,
              sir, and if my evidence can be of help to you in your trial it
              shall be at your disposal.”
            </TextNode>

            <TextNode>
              In the whirl of our incessant activity it has often been difficult
              for me, as the reader has probably observed, to round off my
              narratives, and to give those final details which the curious
              might expect. Each case has been the prelude to another, and the
              crisis once over the actors have passed for ever out of our busy
              lives. I find, however, a short note at the end of my manuscripts
              dealing with this case, in which I have put it upon record that
              Miss Violet Smith did indeed inherit a large fortune, and that she
              is now the wife of Cyril Morton, the senior partner of Morton &
              Kennedy, the famous Westminster electricians. Williamson and
              Woodley were both tried for abduction and assault, the former
              getting seven years and the latter ten. Of the fate of Carruthers
              I have no record, but I am sure that his assault was not viewed
              very gravely by the Court, since Woodley had the reputation of
              being a most dangerous ruffian, and I think that a few months were
              sufficient to satisfy the demands of justice.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page182;

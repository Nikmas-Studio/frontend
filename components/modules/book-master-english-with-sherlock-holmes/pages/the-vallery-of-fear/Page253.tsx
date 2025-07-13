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

function Page253({
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
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “What the devil is the meaning of all this?” he cried. “What are
              you after, anyhow?”
            </TextNode>

            <TextNode>
              Holmes took a swift glance round, and then pounced upon a sodden
              bundle tied together with cord which lay where it had been thrust
              under the writing table.
            </TextNode>

            <TextNode>
              “This is what we are after, Mr. Barker—this bundle, weighted with
              a dumb-bell, which you have just raised from the bottom of the
              moat.”
            </TextNode>

            <TextNode>
              Barker stared at Holmes with amazement in his face. “How in
              thunder came you to know anything about it?” he asked.
            </TextNode>

            <TextNode>“Simply that I put it there.”</TextNode>

            <TextNode>“You put it there! You!”</TextNode>

            <TextNode>
              “Perhaps I should have said ‘replaced it there,’” said Holmes.
              “You will remember, Inspector MacDonald, that I was somewhat
              struck by the absence of a dumb-bell. I drew your attention to it;
              but with the pressure of other events you had hardly the time to
              give it the consideration which would have enabled you to draw
              deductions from it. When water is near and a weight is missing it
              is not a very far-fetched supposition that something has been sunk
              in the water. The idea was at least worth testing; so with the
              help of Ames, who admitted me to the room, and the crook of Dr.
              Watson's umbrella, I was able last night to fish up and inspect
              this bundle.
            </TextNode>

            <TextNode>
              “It was of the first importance, however, that we should be able
              to prove who placed it there. This we accomplished by the very
              obvious device of announcing that the moat would be dried
              to-morrow, which had, of course, the effect that whoever had
              hidden the bundle would most certainly withdraw it the moment that
              darkness enabled him to do so. We have no less than four witnesses
              as to who it was who took advantage of the opportunity, and so,
              Mr. Barker, I think the word lies now with you.”
            </TextNode>

            <TextNode>
              Sherlock Holmes put the sopping bundle upon the table beside the
              lamp and undid the cord which bound it. From within he extracted a
              dumb-bell, which he tossed down to its fellow in the corner. Next
              he drew forth a pair of boots. “American, as you perceive,” he
              remarked, pointing to the toes. Then he laid upon the table a
              long, deadly, sheathed knife. Finally he unravelled a bundle of
              clothing, comprising a complete set of underclothes, socks, a gray
              tweed suit, and a short yellow overcoat.
            </TextNode>

            <TextNode>
              “The clothes are commonplace,” remarked Holmes, “save only the
              overcoat, which is full of suggestive touches.” He held it
              tenderly towards the light. “Here, as you perceive, is the inner
              pocket prolonged into the lining in such fashion as to give ample
              space for the truncated fowling piece. The tailor's tab is on the
              neck—‘Neal, Outfitter, Vermissa, U. S. A.’ I have spent an
              instructive afternoon in the rector's library, and have enlarged
              my knowledge by adding the fact that Vermissa is a flourishing
              little town at the head of one of the best known coal and iron
              valleys in the United States. I have some recollection, Mr.
              Barker, that you associated the coal districts with Mr. Douglas's
              first wife, and it would surely not be too far-fetched an
              inference that the V. V. upon the card by the dead body might
              stand for Vermissa Valley, or that this very valley which sends
              forth emissaries of murder may be that Valley of Fear of which we
              have heard. So much is fairly clear. And now, Mr. Barker, I seem
              to be standing rather in the way of your explanation.”
            </TextNode>

            <TextNode>
              It was a sight to see Cecil Barker's expressive face during this
              exposition of the great detective. Anger, amazement,
              consternation, and indecision swept over it in turn. Finally he
              took refuge in a somewhat acrid irony.
            </TextNode>

            <TextNode>
              “You know such a lot, Mr. Holmes, perhaps you had better tell us
              some more,” he sneered.
            </TextNode>

            <TextNode>
              “I have no doubt that I could tell you a great deal more, Mr.
              Barker; but it would come with a better grace from you.”
            </TextNode>

            <TextNode>
              “Oh, you think so, do you? Well, all I can say is that if there's
              any secret here it is not my secret, and I am not the man to give
              it away.”
            </TextNode>

            <TextNode>
              “Well, if you take that line, Mr. Barker,” said the inspector
              quietly, “we must just keep you in sight until we have the warrant
              and can hold you.”
            </TextNode>

            <TextNode>
              “You can do what you damn please about that,” said Barker
              defiantly.
            </TextNode>

            <TextNode>
              The proceedings seemed to have come to a definite end so far as he
              was concerned; for one had only to look at that granite face to
              realize that no peine forte et dure would ever force him to plead
              against his will. The deadlock was broken, however, by a woman's
              voice. Mrs. Douglas had been standing listening at the half opened
              door, and now she entered the room.
            </TextNode>

            <TextNode>
              “You have done enough for now, Cecil,” said she. “Whatever comes
              of it in the future, you have done enough.”
            </TextNode>

            <TextNode>
              “Enough and more than enough,” remarked Sherlock Holmes gravely.
              “I have every sympathy with you, madam, and should strongly urge
              you to have some confidence in the common sense of our
              jurisdiction and to take the police voluntarily into your complete
              confidence. It may be that I am myself at fault for not following
              up the hint which you conveyed to me through my friend, Dr.
              Watson; but, at that time I had every reason to believe that you
              were directly concerned in the crime. Now I am assured that this
              is not so. At the same time, there is much that is unexplained,
              and I should strongly recommend that you ask Mr. Douglas to tell
              us his own story.”
            </TextNode>

            <TextNode>
              Mrs. Douglas gave a cry of astonishment at Holmes's words. The
              detectives and I must have echoed it, when we were aware of a man
              who seemed to have emerged from the wall, who advanced now from
              the gloom of the corner in which he had appeared. Mrs. Douglas
              turned, and in an instant her arms were round him. Barker had
              seized his outstretched hand.
            </TextNode>

            <TextNode>
              “It's best this way, Jack,” his wife repeated; “I am sure that it
              is best.”
            </TextNode>

            <TextNode>
              “Indeed, yes, Mr. Douglas,” said Sherlock Holmes, “I am sure that
              you will find it best.”
            </TextNode>

            <TextNode>
              The man stood blinking at us with the dazed look of one who comes
              from the dark into the light. It was a remarkable face, bold gray
              eyes, a strong, short-clipped, grizzled moustache, a square,
              projecting chin, and a humorous mouth. He took a good look at us
              all, and then to my amazement he advanced to me and handed me a
              bundle of paper.
            </TextNode>

            <TextNode>
              “I've heard of you,” said he in a voice which was not quite
              English and not quite American, but was altogether mellow and
              pleasing. “You are the historian of this bunch. Well, Dr. Watson,
              you've never had such a story as that pass through your hands
              before, and I'll lay my last dollar on that. Tell it your own way;
              but there are the facts, and you can't miss the public so long as
              you have those. I've been cooped up two days, and I've spent the
              daylight hours—as much daylight as I could get in that rat trap—in
              putting the thing into words. You're welcome to them—you and your
              public. There's the story of the Valley of Fear.”
            </TextNode>

            <TextNode>
              “That's the past, Mr. Douglas,” said Sherlock Holmes quietly.
              “What we desire now is to hear your story of the present.”
            </TextNode>

            <TextNode>
              “You'll have it, sir,” said Douglas. “May I smoke as I talk? Well,
              thank you, Mr. Holmes. You're a smoker yourself, if I remember
              right, and you'll guess what it is to be sitting for two days with
              tobacco in your pocket and afraid that the smell will give you
              away.” He leaned against the mantelpiece and sucked at the cigar
              which Holmes had handed him. “I've heard of you, Mr. Holmes. I
              never guessed that I should meet you. But before you are through
              with that,” he nodded at my papers, “you will say I've brought you
              something fresh.”
            </TextNode>

            <TextNode>
              Inspector MacDonald had been staring at the newcomer with the
              greatest amazement. “Well, this fairly beats me!” he cried at
              last. “If you are Mr. John Douglas of Birlstone Manor, then whose
              death have we been investigating for these two days, and where in
              the world have you sprung from now? You seemed to me to come out
              of the floor like a jack-in-a-box.”
            </TextNode>

            <TextNode>
              “Ah, Mr. Mac,” said Holmes, shaking a reproving forefinger, “you
              would not read that excellent local compilation which described
              the concealment of King Charles. People did not hide in those days
              without excellent hiding places, and the hiding place that has
              once been used may be again. I had persuaded myself that we should
              find Mr. Douglas under this roof.”
            </TextNode>

            <TextNode>
              “And how long have you been playing this trick upon us, Mr.
              Holmes?” said the inspector angrily. “How long have you allowed us
              to waste ourselves upon a search that you knew to be an absurd
              one?”
            </TextNode>

            <TextNode>
              “Not one instant, my dear Mr. Mac. Only last night did I form my
              views of the case. As they could not be put to the proof until
              this evening, I invited you and your colleague to take a holiday
              for the day. Pray what more could I do? When I found the suit of
              clothes in the moat, it at once became apparent to me that the
              body we had found could not have been the body of Mr. John Douglas
              at all, but must be that of the bicyclist from Tunbridge Wells. No
              other conclusion was possible. Therefore I had to determine where
              Mr. John Douglas himself could be, and the balance of probability
              was that with the connivance of his wife and his friend he was
              concealed in a house which had such conveniences for a fugitive,
              and awaiting quieter times when he could make his final escape.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Well, you figured it out about right,” said Douglas approvingly.
              “I thought I'd dodge your British law; for I was not sure how I
              stood under it, and also I saw my chance to throw these hounds
              once for all off my track. Mind you, from first to last I have
              done nothing to be ashamed of, and nothing that I would not do
              again; but you'll judge that for yourselves when I tell you my
              story. Never mind warning me, Inspector: I'm ready to stand pat
              upon the truth.
            </TextNode>

            <TextNode>
              “I'm not going to begin at the beginning. That's all there,” he
              indicated my bundle of papers, “and a mighty queer yarn you'll
              find it. It all comes down to this: That there are some men that
              have good cause to hate me and would give their last dollar to
              know that they had got me. So long as I am alive and they are
              alive, there is no safety in this world for me. They hunted me
              from Chicago to California, then they chased me out of America;
              but when I married and settled down in this quiet spot I thought
              my last years were going to be peaceable.
            </TextNode>

            <TextNode>
              “I never explained to my wife how things were. Why should I pull
              her into it? She would never have a quiet moment again; but would
              always be imagining trouble. I fancy she knew something, for I may
              have dropped a word here or a word there; but until yesterday,
              after you gentlemen had seen her, she never knew the rights of the
              matter. She told you all she knew, and so did Barker here; for on
              the night when this thing happened there was mighty little time
              for explanations. She knows everything now, and I would have been
              a wiser man if I had told her sooner. But it was a hard question,
              dear,” he took her hand for an instant in his own, “and I acted
              for the best.
            </TextNode>

            <TextNode>
              “Well, gentlemen, the day before these happenings I was over in
              Tunbridge Wells, and I got a glimpse of a man in the street. It
              was only a glimpse; but I have a quick eye for these things, and I
              never doubted who it was. It was the worst enemy I had among them
              all—one who has been after me like a hungry wolf after a caribou
              all these years. I knew there was trouble coming, and I came home
              and made ready for it. I guessed I'd fight through it all right on
              my own, my luck was a proverb in the States about '76. I never
              doubted that it would be with me still.
            </TextNode>

            <TextNode>
              “I was on my guard all that next day, and never went out into the
              park. It's as well, or he'd have had the drop on me with that
              buckshot gun of his before ever I could draw on him. After the
              bridge was up—my mind was always more restful when that bridge was
              up in the evenings—I put the thing clear out of my head. I never
              dreamed of his getting into the house and waiting for me. But when
              I made my round in my dressing gown, as was my habit, I had no
              sooner entered the study than I scented danger. I guess when a man
              has had dangers in his life—and I've had more than most in my
              time—there is a kind of sixth sense that waves the red flag. I saw
              the signal clear enough, and yet I couldn't tell you why. Next
              instant I spotted a boot under the window curtain, and then I saw
              why plain enough.
            </TextNode>

            <TextNode>
              “I'd just the one candle that was in my hand; but there was a good
              light from the hall lamp through the open door. I put down the
              candle and jumped for a hammer that I'd left on the mantel. At the
              same moment he sprang at me. I saw the glint of a knife, and I
              lashed at him with the hammer. I got him somewhere; for the knife
              tinkled down on the floor. He dodged round the table as quick as
              an eel, and a moment later he'd got his gun from under his coat. I
              heard him cock it; but I had got hold of it before he could fire.
              I had it by the barrel, and we wrestled for it all ends up for a
              minute or more. It was death to the man that lost his grip.
            </TextNode>

            <TextNode>
              “He never lost his grip; but he got it butt downward for a moment
              too long. Maybe it was I that pulled the trigger. Maybe we just
              jolted it off between us. Anyhow, he got both barrels in the face,
              and there I was, staring down at all that was left of Ted Baldwin.
              I'd recognized him in the township, and again when he sprang for
              me; but his own mother wouldn't recognize him as I saw him then.
              I'm used to rough work; but I fairly turned sick at the sight of
              him.
            </TextNode>

            <TextNode>
              “I was hanging on the side of the table when Barker came hurrying
              down. I heard my wife coming, and I ran to the door and stopped
              her. It was no sight for a woman. I promised I'd come to her soon.
              I said a word or two to Barker—he took it all in at a glance—and
              we waited for the rest to come along. But there was no sign of
              them. Then we understood that they could hear nothing, and that
              all that had happened was known only to ourselves.
            </TextNode>

            <TextNode>
              “It was at that instant that the idea came to me. I was fairly
              dazzled by the brilliance of it. The man's sleeve had slipped up
              and there was the branded mark of the lodge upon his forearm. See
              here!”
            </TextNode>

            <TextNode>
              The man whom we had known as Douglas turned up his own coat and
              cuff to show a brown triangle within a circle exactly like that
              which we had seen upon the dead man.
            </TextNode>

            <TextNode>
              “It was the sight of that which started me on it. I seemed to see
              it all clear at a glance. There were his height and hair and
              figure, about the same as my own. No one could swear to his face,
              poor devil! I brought down this suit of clothes, and in a quarter
              of an hour Barker and I had put my dressing gown on him and he lay
              as you found him. We tied all his things into a bundle, and I
              weighted them with the only weight I could find and put them
              through the window. The card he had meant to lay upon my body was
              lying beside his own.
            </TextNode>

            <TextNode>
              “My rings were put on his finger; but when it came to the wedding
              ring,” he held out his muscular hand, “you can see for yourselves
              that I had struck the limit. I have not moved it since the day I
              was married, and it would have taken a file to get it off. I don't
              know, anyhow, that I should have cared to part with it; but if I
              had wanted to I couldn't. So we just had to leave that detail to
              take care of itself. On the other hand, I brought a bit of plaster
              down and put it where I am wearing one myself at this instant. You
              slipped up there, Mr. Holmes, clever as you are; for if you had
              chanced to take off that plaster you would have found no cut
              underneath it.
            </TextNode>

            <TextNode>
              “Well, that was the situation. If I could lie low for a while and
              then get away where I could be joined by my ‘widow’ we should have
              a chance at last of living in peace for the rest of our lives.
              These devils would give me no rest so long as I was above ground;
              but if they saw in the papers that Baldwin had got his man, there
              would be an end of all my troubles. I hadn't much time to make it
              all clear to Barker and to my wife; but they understood enough to
              be able to help me. I knew all about this hiding place, so did
              Ames; but it never entered his head to connect it with the matter.
              I retired into it, and it was up to Barker to do the rest.
            </TextNode>

            <TextNode>
              “I guess you can fill in for yourselves what he did. He opened the
              window and made the mark on the sill to give an idea of how the
              murderer escaped. It was a tall order, that; but as the bridge was
              up there was no other way. Then, when everything was fixed, he
              rang the bell for all he was worth. What happened afterward you
              know. And so, gentlemen, you can do what you please; but I've told
              you the truth and the whole truth, so help me God! What I ask you
              now is how do I stand by the English law?”
            </TextNode>

            <TextNode>
              There was a silence which was broken by Sherlock Holmes.
            </TextNode>

            <TextNode>
              “The English law is in the main a just law. You will get no worse
              than your deserts from that, Mr. Douglas. But I would ask you how
              did this man know that you lived here, or how to get into your
              house, or where to hide to get you?”
            </TextNode>

            <TextNode>“I know nothing of this.”</TextNode>

            <TextNode>
              Holmes's face was very white and grave. “The story is not over
              yet, I fear,” said he. “You may find worse dangers than the
              English law, or even than your enemies from America. I see trouble
              before you, Mr. Douglas. You'll take my advice and still be on
              your guard.”
            </TextNode>

            <TextNode>
              And now, my long-suffering readers, I will ask you to come away
              with me for a time, far from the Sussex Manor House of Birlstone,
              and far also from the year of grace in which we made our eventful
              journey which ended with the strange story of the man who had been
              known as John Douglas. I wish you to journey back some twenty
              years in time, and westward some thousands of miles in space, that
              I may lay before you a singular and terrible narrative—so singular
              and so terrible that you may find it hard to believe that even as
              I tell it, even so did it occur.
            </TextNode>

            <TextNode>
              Do not think that I intrude one story before another is finished.
              As you read on you will find that this is not so. And when I have
              detailed those distant events and you have solved this mystery of
              the past, we shall meet once more in those rooms on Baker Street,
              where this, like so many other wonderful happenings, will find its
              end.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page253;

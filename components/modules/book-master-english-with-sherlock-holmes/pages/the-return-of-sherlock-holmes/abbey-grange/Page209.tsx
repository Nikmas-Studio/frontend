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

function Page209({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;ABBEY&nbsp;GRANGE'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“What about the wine-glasses?”</TextNode>

            <TextNode>“Can you see them in your mind's eye?”</TextNode>

            <TextNode>“I see them clearly.”</TextNode>

            <TextNode>
              “We are told that three men drank from them. Does that strike you
              as likely?”
            </TextNode>

            <TextNode>“Why not? There was wine in each glass.”</TextNode>

            <TextNode>
              “Exactly; but there was bees-wing only in one glass. You must have
              noticed that fact. What does that suggest to your mind?”
            </TextNode>

            <TextNode>
              “The last glass filled would be most likely to contain bees-wing.”
            </TextNode>

            <TextNode>
              “Not at all. The bottle was full of it, and it is inconceivable
              that the first two glasses were clear and the third heavily
              charged with it. There are two possible explanations, and only
              two. One is that after the second glass was filled the bottle was
              violently agitated, and so the third glass received the bees-wing.
              That does not appear probable. No, no; I am sure that I am right.”
            </TextNode>

            <TextNode>“What, then, do you suppose?”</TextNode>

            <TextNode>
              “That only two glasses were used, and that the dregs of both were
              poured into a third glass, so as to give the false impression that
              three people had been here. In that way all the bees-wing would be
              in the last glass, would it not? Yes, I am convinced that this is
              so. But if I have hit upon the true explanation of this one small
              phenomenon, then in an instant the case rises from the commonplace
              to the exceedingly remarkable, for it can only mean that Lady
              Brackenstall and her maid have deliberately lied to us, that not
              one word of their story is to be believed, that they have some
              very strong reason for covering the real criminal, and that we
              must construct our case for ourselves without any help from them.
              That is the mission which now lies before us, and here, Watson, is
              the Chislehurst train.”
            </TextNode>

            <TextNode>
              The household of the Abbey Grange were much surprised at our
              return, but Sherlock Holmes, finding that Stanley Hopkins had gone
              off to report to head-quarters, took possession of the
              dining-room, locked the door upon the inside, and devoted himself
              for two hours to one of those minute and laborious investigations
              which formed the solid basis on which his brilliant edifices of
              deduction were reared. Seated in a corner like an interested
              student who observes the demonstration of his professor, I
              followed every step of that remarkable research. The window, the
              curtains, the carpet, the chair, the rope—each in turn was
              minutely examined and duly pondered. The body of the unfortunate
              baronet had been removed, but all else remained as we had seen it
              in the morning. Then, to my astonishment, Holmes climbed up on to
              the massive mantelpiece. Far above his head hung the few inches of
              red cord which were still attached to the wire. For a long time he
              gazed upward at it, and then in an attempt to get nearer to it he
              rested his knee upon a wooden bracket on the wall. This brought
              his hand within a few inches of the broken end of the rope, but it
              was not this so much as the bracket itself which seemed to engage
              his attention. Finally he sprang down with an ejaculation of
              satisfaction.
            </TextNode>

            <TextNode>
              “It's all right, Watson,” said he. “We have got our case—one of
              the most remarkable in our collection. But, dear me, how
              slow-witted I have been, and how nearly I have committed the
              blunder of my lifetime! Now, I think that with a few missing links
              my chain is almost complete.”
            </TextNode>

            <TextNode>“You have got your men?”</TextNode>

            <TextNode>
              “Man, Watson, man. Only one, but a very formidable person. Strong
              as a lion—witness the blow that bent that poker. Six foot three in
              height, active as a squirrel, dexterous with his fingers; finally,
              remarkably quick-witted, for this whole ingenious story is of his
              concoction. Yes, Watson, we have come upon the handiwork of a very
              remarkable individual. And yet in that bell-rope he has given us a
              clue which should not have left us a doubt.”
            </TextNode>

            <TextNode>“Where was the clue?”</TextNode>

            <TextNode>
              “Well, if you were to pull down a bell-rope, Watson, where would
              you expect it to break? Surely at the spot where it is attached to
              the wire. Why should it break three inches from the top as this
              one has done?”
            </TextNode>

            <TextNode>“Because it is frayed there?”</TextNode>

            <TextNode>
              “Exactly. This end, which we can examine, is frayed. He was
              cunning enough to do that with his knife. But the other end is not
              frayed. You could not observe that from here, but if you were on
              the mantelpiece you would see that it is cut clean off without any
              mark of fraying whatever. You can reconstruct what occurred. The
              man needed the rope. He would not tear it down for fear of giving
              the alarm by ringing the bell. What did he do? He sprang up on the
              mantelpiece, could not quite reach it, put his knee on the
              bracket—you will see the impression in the dust—and so got his
              knife to bear upon the cord. I could not reach the place by at
              least three inches, from which I infer that he is at least three
              inches a bigger man than I. Look at that mark upon the seat of the
              oaken chair! What is it?”
            </TextNode>

            <TextNode>“Blood.”</TextNode>

            <TextNode>
              “Undoubtedly it is blood. This alone puts the lady's story out of
              court. If she were seated on the chair when the crime was done,
              how comes that mark? No, no; she was placed in the chair after the
              death of her husband. I'll wager that the black dress shows a
              corresponding mark to this. We have not yet met our Waterloo,
              Watson, but this is our Marengo, for it begins in defeat and ends
              in victory. I should like now to have a few words with the nurse
              Theresa. We must be wary for awhile, if we are to get the
              information which we want.”
            </TextNode>

            <TextNode>
              She was an interesting person, this stern Australian nurse.
              Taciturn, suspicious, ungracious, it took some time before
              Holmes's pleasant manner and frank acceptance of all that she said
              thawed her into a corresponding amiability. She did not attempt to
              conceal her hatred for her late employer.
            </TextNode>

            <TextNode>
              “Yes, sir, it is true that he threw the decanter at me. I heard
              him call my mistress a name, and I told him that he would not dare
              to speak so if her brother had been there. Then it was that he
              threw it at me. He might have thrown a dozen if he had but left my
              bonny bird alone. He was for ever illtreating her, and she too
              proud to complain. She will not even tell me all that he has done
              to her. She never told me of those marks on her arm that you saw
              this morning, but I know very well that they come from a stab with
              a hat-pin. The sly fiend—Heaven forgive me that I should speak of
              him so, now that he is dead, but a fiend he was if ever one walked
              the earth. He was all honey when first we met him, only eighteen
              months ago, and we both feel as if it were eighteen years. She had
              only just arrived in London. Yes, it was her first voyage—she had
              never been from home before. He won her with his title and his
              money and his false London ways. If she made a mistake she has
              paid for it, if ever a woman did. What month did we meet him?
              Well, I tell you it was just after we arrived. We arrived in June,
              and it was July. They were married in January of last year. Yes,
              she is down in the morning-room again, and I have no doubt she
              will see you, but you must not ask too much of her, for she has
              gone through all that flesh and blood will stand.”
            </TextNode>

            <TextNode>
              Lady Brackenstall was reclining on the same couch, but looked
              brighter than before. The maid had entered with us, and began once
              more to foment the bruise upon her mistress's brow.
            </TextNode>

            <TextNode>
              “I hope,” said the lady, “that you have not come to cross-examine
              me again?”
            </TextNode>

            <TextNode>
              “No,” Holmes answered, in his gentlest voice, “I will not cause
              you any unnecessary trouble, Lady Brackenstall, and my whole
              desire is to make things easy for you, for I am convinced that you
              are a much-tried woman. If you will treat me as a friend and trust
              me you may find that I will justify your trust.”
            </TextNode>

            <TextNode>“What do you want me to do?”</TextNode>

            <TextNode>“To tell me the truth.”</TextNode>

            <TextNode>“Mr. Holmes!”</TextNode>

            <TextNode>
              “No, no, Lady Brackenstall, it is no use. You may have heard of
              any little reputation which I possess. I will stake it all on the
              fact that your story is an absolute fabrication.”
            </TextNode>

            <TextNode>
              Mistress and maid were both staring at Holmes with pale faces and
              frightened eyes.
            </TextNode>

            <TextNode>
              “You are an impudent fellow!” cried Theresa. “Do you mean to say
              that my mistress has told a lie?”
            </TextNode>

            <TextNode>Holmes rose from his chair.</TextNode>

            <TextNode>“Have you nothing to tell me?”</TextNode>

            <TextNode>“I have told you everything.”</TextNode>

            <TextNode>
              “Think once more, Lady Brackenstall. Would it not be better to be
              frank?”
            </TextNode>

            <TextNode>
              For an instant there was hesitation in her beautiful face. Then
              some new strong thought caused it to set like a mask.
            </TextNode>

            <TextNode>“I have told you all I know.”</TextNode>

            <TextNode>
              Holmes took his hat and shrugged his shoulders. “I am sorry,” he
              said, and without another word we left the room and the house.
              There was a pond in the park, and to this my friend led the way.
              It was frozen over, but a single hole was left for the convenience
              of a solitary swan. Holmes gazed at it and then passed on to the
              lodge gate. There he scribbled a short note for Stanley Hopkins
              and left it with the lodge-keeper.
            </TextNode>

            <TextNode>
              “It may be a hit or it may be a miss, but we are bound to do
              something for friend Hopkins, just to justify this second visit,”
              said he. “I will not quite take him into my confidence yet. I
              think our next scene of operations must be the shipping office of
              the Adelaide-Southampton line, which stands at the end of Pall
              Mall, if I remember right. There is a second line of steamers
              which connect South Australia with England, but we will draw the
              larger cover first.”
            </TextNode>

            <TextNode>
              Holmes's card sent in to the manager ensured instant attention,
              and he was not long in acquiring all the information which he
              needed. In June of '95 only one of their line had reached a home
              port. It was the <span className='italic'>Rock of Gibraltar</span>
              , their largest and best boat. A reference to the passenger list
              showed that Miss Fraser of Adelaide, with her maid, had made the
              voyage in her. The boat was now on her way to Australia, somewhere
              to the south of the Suez Canal. Her officers were the same as in
              '95, with one exception. The first officer, Mr. Jack Croker, had
              been made a captain and was to take charge of their new ship, the
              <span className='italic'>Bass Rock</span>, sailing in two days'
              time from Southampton. He lived at Sydenham, but he was likely to
              be in that morning for instructions, if we cared to wait for him.
            </TextNode>

            <TextNode>
              No; Mr. Holmes had no desire to see him, but would be glad to know
              more about his record and character.
            </TextNode>

            <TextNode>
              His record was magnificent. There was not an officer in the fleet
              to touch him. As to his character, he was reliable on duty, but a
              wild, desperate fellow off the deck of his ship, hot-headed,
              excitable, but loyal, honest, and kind-hearted. That was the pith
              of the information with which Holmes left the office of the
              Adelaide-Southampton company. Thence he drove to Scotland Yard,
              but instead of entering he sat in his cab with his brows drawn
              down, lost in profound thought. Finally he drove round to the
              Charing Cross telegraph office, sent off a message, and then, at
              last, we made for Baker Street once more.
            </TextNode>

            <TextNode>
              “No, I couldn't do it, Watson,” said he, as we re-entered our
              room. “Once that warrant was made out nothing on earth would save
              him. Once or twice in my career I feel that I have done more real
              harm by my discovery of the criminal than ever he had done by his
              crime. I have learned caution now, and I had rather play tricks
              with the law of England than with my own conscience. Let us know a
              little more before we act.”
            </TextNode>

            <TextNode>
              Before evening we had a visit from Inspector Stanley Hopkins.
              Things were not going very well with him.
            </TextNode>

            <TextNode>
              “I believe that you are a wizard, Mr. Holmes. I really do
              sometimes think that you have powers that are not human. Now, how
              on earth could you know that the stolen silver was at the bottom
              of that pond?”
            </TextNode>

            <TextNode>“I didn't know it.”</TextNode>

            <TextNode>“But you told me to examine it.”</TextNode>

            <TextNode>“You got it, then?”</TextNode>

            <TextNode>“Yes, I got it.”</TextNode>

            <TextNode>“I am very glad if I have helped you.”</TextNode>

            <TextNode>
              “But you haven't helped me. You have made the affair far more
              difficult. What sort of burglars are they who steal silver and
              then throw it into the nearest pond?”
            </TextNode>

            <TextNode>
              “It was certainly rather eccentric behaviour. I was merely going
              on the idea that if the silver had been taken by persons who did
              not want it, who merely took it for a blind as it were, then they
              would naturally be anxious to get rid of it.”
            </TextNode>

            <TextNode>“But why should such an idea cross your mind?”</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Well, I thought it was possible. When they came out through the
              French window there was the pond, with one tempting little hole in
              the ice, right in front of their noses. Could there be a better
              hiding-place?”
            </TextNode>

            <TextNode>
              “Ah, a hiding-place—that is better!” cried Stanley Hopkins. “Yes,
              yes, I see it all now! It was early, there were folk upon the
              roads, they were afraid of being seen with the silver, so they
              sank it in the pond, intending to return for it when the coast was
              clear. Excellent, Mr. Holmes—that is better than your idea of a
              blind.”
            </TextNode>
            <TextNode>
              “Quite so; you have got an admirable theory. I have no doubt that
              my own ideas were quite wild, but you must admit that they have
              ended in discovering the silver.”
            </TextNode>

            <TextNode>
              “Yes, sir, yes. It was all your doing. But I have had a bad
              set-back.”
            </TextNode>

            <TextNode>“A set-back?”</TextNode>

            <TextNode>
              “Yes, Mr. Holmes. The Randall gang were arrested in New York this
              morning.”
            </TextNode>

            <TextNode>
              “Dear me, Hopkins! That is certainly rather against your theory
              that they committed a murder in Kent last night.”
            </TextNode>

            <TextNode>
              “It is fatal, Mr. Holmes, absolutely fatal. Still, there are other
              gangs of three besides the Randalls, or it may be some new gang of
              which the police have never heard.”
            </TextNode>

            <TextNode>
              “Quite so; it is perfectly possible. What, are you off?”
            </TextNode>

            <TextNode>
              “Yes, Mr. Holmes; there is no rest for me until I have got to the
              bottom of the business. I suppose you have no hint to give me?”
            </TextNode>

            <TextNode>“I have given you one.”</TextNode>

            <TextNode>“Which?”</TextNode>

            <TextNode>“Well, I suggested a blind.”</TextNode>

            <TextNode>“But why, Mr. Holmes, why?”</TextNode>

            <TextNode>
              “Ah, that's the question, of course. But I commend the idea to
              your mind. You might possibly find that there was something in it.
              You won't stop for dinner? Well, good-bye, and let us know how you
              get on.”
            </TextNode>

            <TextNode>
              Dinner was over and the table cleared before Holmes alluded to the
              matter again. He had lit his pipe and held his slippered feet to
              the cheerful blaze of the fire. Suddenly he looked at his watch.
            </TextNode>

            <TextNode>“I expect developments, Watson.”</TextNode>

            <TextNode>“When?”</TextNode>

            <TextNode>
              “Now—within a few minutes. I dare say you thought I acted rather
              badly to Stanley Hopkins just now?”
            </TextNode>

            <TextNode>“I trust your judgment.”</TextNode>

            <TextNode>
              “A very sensible reply, Watson. You must look at it this way: what
              I know is unofficial; what he knows is official. I have the right
              to private judgment, but he has none. He must disclose all, or he
              is a traitor to his service. In a doubtful case I would not put
              him in so painful a position, and so I reserve my information
              until my own mind is clear upon the matter.”
            </TextNode>

            <TextNode>“But when will that be?”</TextNode>

            <TextNode>
              “The time has come. You will now be present at the last scene of a
              remarkable little drama.”
            </TextNode>

            <TextNode>
              There was a sound upon the stairs, and our door was opened to
              admit as fine a specimen of manhood as ever passed through it. He
              was a very tall young man, golden-moustached, blue-eyed, with a
              skin which had been burned by tropical suns, and a springy step
              which showed that the huge frame was as active as it was strong.
              He closed the door behind him, and then he stood with clenched
              hands and heaving breast, choking down some overmastering emotion.
            </TextNode>

            <TextNode>
              “Sit down, Captain Croker. You got my telegram?”
            </TextNode>

            <TextNode>
              Our visitor sank into an arm-chair and looked from one to the
              other of us with questioning eyes.
            </TextNode>

            <TextNode>
              “I got your telegram, and I came at the hour you said. I heard
              that you had been down to the office. There was no getting away
              from you. Let's hear the worst. What are you going to do with me?
              Arrest me? Speak out, man! You can't sit there and play with me
              like a cat with a mouse.”
            </TextNode>

            <TextNode>
              “Give him a cigar,” said Holmes. “Bite on that, Captain Croker,
              and don't let your nerves run away with you. I should not sit here
              smoking with you if I thought that you were a common criminal, you
              may be sure of that. Be frank with me, and we may do some good.
              Play tricks with me, and I'll crush you.”
            </TextNode>

            <TextNode>“What do you wish me to do?”</TextNode>

            <TextNode>
              “To give me a true account of all that happened at the Abbey
              Grange last night—a true account, mind you, with nothing added and
              nothing taken off. I know so much already that if you go one inch
              off the straight I'll blow this police whistle from my window and
              the affair goes out of my hands for ever.”
            </TextNode>

            <TextNode>
              The sailor thought for a little. Then he struck his leg with his
              great, sun-burned hand.
            </TextNode>

            <TextNode>
              “I'll chance it,” he cried. “I believe you are a man of your word,
              and a white man, and I'll tell you the whole story. But one thing
              I will say first. So far as I am concerned I regret nothing and I
              fear nothing, and I would do it all again and be proud of the job.
              Curse the beast, if he had as many lives as a cat he would owe
              them all to me! But it's the lady, Mary—Mary Fraser—for never will
              I call her by that accursed name. When I think of getting her into
              trouble, I who would give my life just to bring one smile to her
              dear face, it's that that turns my soul into water. And yet—and
              yet—what less could I do? I'll tell you my story, gentlemen, and
              then I'll ask you as man to man what less could I do.
            </TextNode>

            <TextNode>
              “I must go back a bit. You seem to know everything, so I expect
              that you know that I met her when she was a passenger and I was
              first officer of the Rock of Gibraltar. From the first day I met
              her she was the only woman to me. Every day of that voyage I loved
              her more, and many a time since have I kneeled down in the
              darkness of the night watch and kissed the deck of that ship
              because I knew her dear feet had trod it. She was never engaged to
              me. She treated me as fairly as ever a woman treated a man. I have
              no complaint to make. It was all love on my side, and all good
              comradeship and friendship on hers. When we parted she was a free
              woman, but I could never again be a free man.
            </TextNode>

            <TextNode>
              “Next time I came back from sea I heard of her marriage. Well, why
              shouldn't she marry whom she liked? Title and money—who could
              carry them better than she? She was born for all that is beautiful
              and dainty. I didn't grieve over her marriage. I was not such a
              selfish hound as that. I just rejoiced that good luck had come her
              way, and that she had not thrown herself away on a penniless
              sailor. That's how I loved Mary Fraser.
            </TextNode>

            <TextNode>
              “Well, I never thought to see her again; but last voyage I was
              promoted, and the new boat was not yet launched, so I had to wait
              for a couple of months with my people at Sydenham. One day out in
              a country lane I met Theresa Wright, her old maid. She told me
              about her, about him, about everything. I tell you, gentlemen, it
              nearly drove me mad. This drunken hound, that he should dare to
              raise his hand to her whose boots he was not worthy to lick! I met
              Theresa again. Then I met Mary herself—and met her again. Then she
              would meet me no more. But the other day I had a notice that I was
              to start on my voyage within a week, and I determined that I would
              see her once before I left. Theresa was always my friend, for she
              loved Mary and hated this villain almost as much as I did. From
              her I learned the ways of the house. Mary used to sit up reading
              in her own little room downstairs. I crept round there last night
              and scratched at the window. At first she would not open to me,
              but in her heart I know that now she loves me, and she could not
              leave me in the frosty night. She whispered to me to come round to
              the big front window, and I found it open before me so as to let
              me into the dining-room. Again I heard from her own lips things
              that made my blood boil, and again I cursed this brute who
              mishandled the woman that I loved. Well, gentlemen, I was standing
              with her just inside the window, in all innocence, as Heaven is my
              judge, when he rushed like a madman into the room, called her the
              vilest name that a man could use to a woman, and welted her across
              the face with the stick he had in his hand. I had sprung for the
              poker, and it was a fair fight between us. See here on my arm
              where his first blow fell. Then it was my turn, and I went through
              him as if he had been a rotten pumpkin. Do you think I was sorry?
              Not I! It was his life or mine, but far more than that it was his
              life or hers, for how could I leave her in the power of this
              madman? That was how I killed him. Was I wrong? Well, then, what
              would either of you gentlemen have done if you had been in my
              position?
            </TextNode>

            <TextNode>
              “She had screamed when he struck her, and that brought old Theresa
              down from the room above. There was a bottle of wine on the
              sideboard, and I opened it and poured a little between Mary's
              lips, for she was half dead with the shock. Then I took a drop
              myself. Theresa was as cool as ice, and it was her plot as much as
              mine. We must make it appear that burglars had done the thing.
              Theresa kept on repeating our story to her mistress, while I
              swarmed up and cut the rope of the bell. Then I lashed her in her
              chair, and frayed out the end of the rope to make it look natural,
              else they would wonder how in the world a burglar could have got
              up there to cut it. Then I gathered up a few plates and pots of
              silver, to carry out the idea of a robbery, and there I left them
              with orders to give the alarm when I had a quarter of an hour's
              start. I dropped the silver into the pond and made off for
              Sydenham, feeling that for once in my life I had done a real good
              night's work. And that's the truth and the whole truth, Mr.
              Holmes, if it costs me my neck.”
            </TextNode>

            <TextNode>
              Holmes smoked for some time in silence. Then he crossed the room
              and shook our visitor by the hand.
            </TextNode>

            <TextNode>
              “That's what I think,” said he. “I know that every word is true,
              for you have hardly said a word which I did not know. No one but
              an acrobat or a sailor could have got up to that bell-rope from
              the bracket, and no one but a sailor could have made the knots
              with which the cord was fastened to the chair. Only once had this
              lady been brought into contact with sailors, and that was on her
              voyage, and it was someone of her own class of life, since she was
              trying hard to shield him and so showing that she loved him. You
              see how easy it was for me to lay my hands upon you when once I
              had started upon the right trail.”
            </TextNode>

            <TextNode>
              “I thought the police never could have seen through our dodge.”
            </TextNode>

            <TextNode>
              “And the police haven't; nor will they, to the best of my belief.
              Now, look here, Captain Croker, this is a very serious matter,
              though I am willing to admit that you acted under the most extreme
              provocation to which any man could be subjected. I am not sure
              that in defence of your own life your action will not be
              pronounced legitimate. However, that is for a British jury to
              decide. Meanwhile I have so much sympathy for you that if you
              choose to disappear in the next twenty-four hours I will promise
              you that no one will hinder you.”
            </TextNode>

            <TextNode>“And then it will all come out?”</TextNode>

            <TextNode>“Certainly it will come out.”</TextNode>

            <TextNode>The sailor flushed with anger.</TextNode>

            <TextNode>
              “What sort of proposal is that to make a man? I know enough of law
              to understand that Mary would be had as accomplice. Do you think I
              would leave her alone to face the music while I slunk away? No,
              sir; let them do their worst upon me, but for Heaven's sake, Mr.
              Holmes, find some way of keeping my poor Mary out of the courts.”
            </TextNode>

            <TextNode>
              Holmes for a second time held out his hand to the sailor.
            </TextNode>

            <TextNode>
              “I was only testing you, and you ring true every time. Well, it is
              a great responsibility that I take upon myself, but I have given
              Hopkins an excellent hint, and if he can't avail himself of it I
              can do no more. See here, Captain Croker, we'll do this in due
              form of law. You are the prisoner. Watson, you are a British jury,
              and I never met a man who was more eminently fitted to represent
              one. I am the judge. Now, gentleman of the jury, you have heard
              the evidence. Do you find the prisoner guilty or not guilty?”
            </TextNode>

            <TextNode>“Not guilty, my lord,” said I.</TextNode>

            <TextNode>
              “<span className='italic'>Vox populi, vox Dei</span>. You are
              acquitted, Captain Croker. So long as the law does not find some
              other victim you are safe from me. Come back to this lady in a
              year, and may her future and yours justify us in the judgment
              which we have pronounced this night.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page209;

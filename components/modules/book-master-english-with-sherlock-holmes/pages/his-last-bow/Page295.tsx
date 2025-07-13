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

function Page295({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;LADY&nbsp;FRANCES&nbsp;CARFAX'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “But why Turkish?” asked Mr. Sherlock Holmes, gazing fixedly at my
              boots. I was reclining in a cane-backed chair at the moment, and
              my protruded feet had attracted his ever-active attention.
            </TextNode>

            <TextNode>
              “English,” I answered in some surprise. “I got them at Latimer's,
              in Oxford Street.”
            </TextNode>

            <TextNode>
              Holmes smiled with an expression of weary patience.
            </TextNode>

            <TextNode>
              “The bath!” he said; “the bath! Why the relaxing and expensive
              Turkish rather than the invigorating home-made article?”
            </TextNode>

            <TextNode>
              “Because for the last few days I have been feeling rheumatic and
              old. A Turkish bath is what we call an alterative in medicine—a
              fresh starting-point, a cleanser of the system.
            </TextNode>

            <TextNode>
              “By the way, Holmes,” I added, “I have no doubt the connection
              between my boots and a Turkish bath is a perfectly self-evident
              one to a logical mind, and yet I should be obliged to you if you
              would indicate it.”
            </TextNode>

            <TextNode>
              “The train of reasoning is not very obscure, Watson,” said Holmes
              with a mischievous twinkle. “It belongs to the same elementary
              class of deduction which I should illustrate if I were to ask you
              who shared your cab in your drive this morning.”
            </TextNode>

            <TextNode>
              “I don't admit that a fresh illustration is an explanation,” said
              I with some asperity.
            </TextNode>

            <TextNode>
              “Bravo, Watson! A very dignified and logical remonstrance. Let me
              see, what were the points? Take the last one first—the cab. You
              observe that you have some splashes on the left sleeve and
              shoulder of your coat. Had you sat in the centre of a hansom you
              would probably have had no splashes, and if you had they would
              certainly have been symmetrical. Therefore it is clear that you
              sat at the side. Therefore it is equally clear that you had a
              companion.”
            </TextNode>

            <TextNode>“That is very evident.”</TextNode>

            <TextNode>“Absurdly commonplace, is it not?”</TextNode>

            <TextNode>“But the boots and the bath?”</TextNode>

            <TextNode>
              “Equally childish. You are in the habit of doing up your boots in
              a certain way. I see them on this occasion fastened with an
              elaborate double bow, which is not your usual method of tying
              them. You have, therefore, had them off. Who has tied them? A
              bootmaker—or the boy at the bath. It is unlikely that it is the
              bootmaker, since your boots are nearly new. Well, what remains?
              The bath. Absurd, is it not? But, for all that, the Turkish bath
              has served a purpose.”
            </TextNode>

            <TextNode>“What is that?”</TextNode>

            <TextNode>
              “You say that you have had it because you need a change. Let me
              suggest that you take one. How would Lausanne do, my dear
              Watson—first-class tickets and all expenses paid on a princely
              scale?”
            </TextNode>

            <TextNode>“Splendid! But why?”</TextNode>

            <TextNode>
              Holmes leaned back in his armchair and took his notebook from his
              pocket.
            </TextNode>

            <TextNode>
              “One of the most dangerous classes in the world,” said he, “is the
              drifting and friendless woman. She is the most harmless and often
              the most useful of mortals, but she is the inevitable inciter of
              crime in others. She is helpless. She is migratory. She has
              sufficient means to take her from country to country and from
              hotel to hotel. She is lost, as often as not, in a maze of obscure
              pensions and boardinghouses. She is a stray chicken in a world of
              foxes. When she is gobbled up she is hardly missed. I much fear
              that some evil has come to the Lady Frances Carfax.”
            </TextNode>

            <TextNode>
              I was relieved at this sudden descent from the general to the
              particular. Holmes consulted his notes.
            </TextNode>

            <TextNode>
              “Lady Frances,” he continued, “is the sole survivor of the direct
              family of the late Earl of Rufton. The estates went, as you may
              remember, in the male line. She was left with limited means, but
              with some very remarkable old Spanish jewellery of silver and
              curiously cut diamonds to which she was fondly attached—too
              attached, for she refused to leave them with her banker and always
              carried them about with her. A rather pathetic figure, the Lady
              Frances, a beautiful woman, still in fresh middle age, and yet, by
              a strange change, the last derelict of what only twenty years ago
              was a goodly fleet.”
            </TextNode>

            <TextNode>“What has happened to her, then?”</TextNode>

            <TextNode>
              “Ah, what has happened to the Lady Frances? Is she alive or dead?
              There is our problem. She is a lady of precise habits, and for
              four years it has been her invariable custom to write every second
              week to Miss Dobney, her old governess, who has long retired and
              lives in Camberwell. It is this Miss Dobney who has consulted me.
              Nearly five weeks have passed without a word. The last letter was
              from the Hotel National at Lausanne. Lady Frances seems to have
              left there and given no address. The family are anxious, and as
              they are exceedingly wealthy no sum will be spared if we can clear
              the matter up.”
            </TextNode>

            <TextNode>
              “Is Miss Dobney the only source of information? Surely she had
              other correspondents?”
            </TextNode>

            <TextNode>
              “There is one correspondent who is a sure draw, Watson. That is
              the bank. Single ladies must live, and their passbooks are
              compressed diaries. She banks at Silvester's. I have glanced over
              her account. The last check but one paid her bill at Lausanne, but
              it was a large one and probably left her with cash in hand. Only
              one check has been drawn since.”
            </TextNode>

            <TextNode>“To whom, and where?”</TextNode>

            <TextNode>
              “To Miss Marie Devine. There is nothing to show where the check
              was drawn. It was cashed at the Credit Lyonnais at Montpellier
              less than three weeks ago. The sum was fifty pounds.”
            </TextNode>

            <TextNode>“And who is Miss Marie Devine?”</TextNode>

            <TextNode>
              “That also I have been able to discover. Miss Marie Devine was the
              maid of Lady Frances Carfax. Why she should have paid her this
              check we have not yet determined. I have no doubt, however, that
              your researches will soon clear the matter up.”
            </TextNode>

            <TextNode>“My researches!”</TextNode>

            <TextNode>
              “Hence the health-giving expedition to Lausanne. You know that I
              cannot possibly leave London while old Abrahams is in such mortal
              terror of his life. Besides, on general principles it is best that
              I should not leave the country. Scotland Yard feels lonely without
              me, and it causes an unhealthy excitement among the criminal
              classes. Go, then, my dear Watson, and if my humble counsel can
              ever be valued at so extravagant a rate as two pence a word, it
              waits your disposal night and day at the end of the Continental
              wire.”
            </TextNode>

            <TextNode>
              Two days later found me at the Hotel National at Lausanne, where I
              received every courtesy at the hands of M. Moser, the well-known
              manager. Lady Frances, as he informed me, had stayed there for
              several weeks. She had been much liked by all who met her. Her age
              was not more than forty. She was still handsome and bore every
              sign of having in her youth been a very lovely woman. M. Moser
              knew nothing of any valuable jewellery, but it had been remarked
              by the servants that the heavy trunk in the lady's bedroom was
              always scrupulously locked. Marie Devine, the maid, was as popular
              as her mistress. She was actually engaged to one of the head
              waiters in the hotel, and there was no difficulty in getting her
              address. It was 11 Rue de Trajan, Montpellier. All this I jotted
              down and felt that Holmes himself could not have been more adroit
              in collecting his facts.
            </TextNode>

            <TextNode>
              Only one corner still remained in the shadow. No light which I
              possessed could clear up the cause for the lady's sudden
              departure. She was very happy at Lausanne. There was every reason
              to believe that she intended to remain for the season in her
              luxurious rooms overlooking the lake. And yet she had left at a
              single day's notice, which involved her in the useless payment of
              a week's rent. Only Jules Vibart, the lover of the maid, had any
              suggestion to offer. He connected the sudden departure with the
              visit to the hotel a day or two before of a tall, dark, bearded
              man.{' '}
              <span className='italic'>“Un sauvage—un véritable sauvage!”</span>{' '}
              cried Jules Vibart. The man had rooms somewhere in the town. He
              had been seen talking earnestly to Madame on the promenade by the
              lake. Then he had called. She had refused to see him. He was
              English, but of his name there was no record. Madame had left the
              place immediately afterwards. Jules Vibart, and, what was of more
              importance, Jules Vibart's sweetheart, thought that this call and
              the departure were cause and effect. Only one thing Jules would
              not discuss. That was the reason why Marie had left her mistress.
              Of that he could or would say nothing. If I wished to know, I must
              go to Montpellier and ask her.
            </TextNode>

            <TextNode>
              So ended the first chapter of my inquiry. The second was devoted
              to the place which Lady Frances Carfax had sought when she left
              Lausanne. Concerning this there had been some secrecy, which
              confirmed the idea that she had gone with the intention of
              throwing someone off her track. Otherwise why should not her
              luggage have been openly labelled for Baden? Both she and it
              reached the Rhenish spa by some circuitous route. This much I
              gathered from the manager of Cook's local office. So to Baden I
              went, after dispatching to Holmes an account of all my proceedings
              and receiving in reply a telegram of half-humorous commendation.
            </TextNode>

            <TextNode>
              At Baden the track was not difficult to follow. Lady Frances had
              stayed at the Englischer Hof for a fortnight. While there she had
              made the acquaintance of a Dr. Shlessinger and his wife, a
              missionary from South America. Like most lonely ladies, Lady
              Frances found her comfort and occupation in religion. Dr.
              Shlessinger's remarkable personality, his whole hearted devotion,
              and the fact that he was recovering from a disease contracted in
              the exercise of his apostolic duties affected her deeply. She had
              helped Mrs. Shlessinger in the nursing of the convalescent saint.
              He spent his day, as the manager described it to me, upon a
              lounge-chair on the veranda, with an attendant lady upon either
              side of him. He was preparing a map of the Holy Land, with special
              reference to the kingdom of the Midianites, upon which he was
              writing a monograph. Finally, having improved much in health, he
              and his wife had returned to London, and Lady Frances had started
              thither in their company. This was just three weeks before, and
              the manager had heard nothing since. As to the maid, Marie, she
              had gone off some days beforehand in floods of tears, after
              informing the other maids that she was leaving service forever.
              Dr. Shlessinger had paid the bill of the whole party before his
              departure.
            </TextNode>

            <TextNode>
              “By the way,” said the landlord in conclusion, “you are not the
              only friend of Lady Frances Carfax who is inquiring after her just
              now. Only a week or so ago we had a man here upon the same
              errand.”
            </TextNode>

            <TextNode>“Did he give a name?” I asked.</TextNode>

            <TextNode>
              “None; but he was an Englishman, though of an unusual type.”
            </TextNode>

            <TextNode>
              “A savage?” said I, linking my facts after the fashion of my
              illustrious friend.
            </TextNode>

            <TextNode>
              “Exactly. That describes him very well. He is a bulky, bearded,
              sunburned fellow, who looks as if he would be more at home in a
              farmers' inn than in a fashionable hotel. A hard, fierce man, I
              should think, and one whom I should be sorry to offend.”
            </TextNode>

            <TextNode>
              Already the mystery began to define itself, as figures grow
              clearer with the lifting of a fog. Here was this good and pious
              lady pursued from place to place by a sinister and unrelenting
              figure. She feared him, or she would not have fled from Lausanne.
              He had still followed. Sooner or later he would overtake her. Had
              he already overtaken her? Was that the secret of her continued
              silence? Could the good people who were her companions not screen
              her from his violence or his blackmail? What horrible purpose,
              what deep design, lay behind this long pursuit? There was the
              problem which I had to solve.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              To Holmes I wrote showing how rapidly and surely I had got down to
              the roots of the matter. In reply I had a telegram asking for a
              description of Dr. Shlessinger's left ear. Holmes's ideas of
              humour are strange and occasionally offensive, so I took no notice
              of his ill-timed jest—indeed, I had already reached Montpellier in
              my pursuit of the maid, Marie, before his message came.
            </TextNode>

            <TextNode>
              I had no difficulty in finding the ex-servant and in learning all
              that she could tell me. She was a devoted creature, who had only
              left her mistress because she was sure that she was in good hands,
              and because her own approaching marriage made a separation
              inevitable in any case. Her mistress had, as she confessed with
              distress, shown some irritability of temper towards her during
              their stay in Baden, and had even questioned her once as if she
              had suspicions of her honesty, and this had made the parting
              easier than it would otherwise have been. Lady Frances had given
              her fifty pounds as a wedding-present. Like me, Marie viewed with
              deep distrust the stranger who had driven her mistress from
              Lausanne. With her own eyes she had seen him seize the lady's
              wrist with great violence on the public promenade by the lake. He
              was a fierce and terrible man. She believed that it was out of
              dread of him that Lady Frances had accepted the escort of the
              Shlessingers to London. She had never spoken to Marie about it,
              but many little signs had convinced the maid that her mistress
              lived in a state of continual nervous apprehension. So far she had
              got in her narrative, when suddenly she sprang from her chair and
              her face was convulsed with surprise and fear. “See!” she cried.
              “The miscreant follows still! There is the very man of whom I
              speak.”
            </TextNode>

            <TextNode>
              Through the open sitting-room window I saw a huge, swarthy man
              with a bristling black beard walking slowly down the centre of the
              street and staring eagerly at he numbers of the houses. It was
              clear that, like myself, he was on the track of the maid. Acting
              upon the impulse of the moment, I rushed out and accosted him.
            </TextNode>

            <TextNode>“You are an Englishman,” I said.</TextNode>

            <TextNode>
              “What if I am?” he asked with a most villainous scowl.
            </TextNode>

            <TextNode>“May I ask what your name is?”</TextNode>

            <TextNode>“No, you may not,” said he with decision.</TextNode>

            <TextNode>
              The situation was awkward, but the most direct way is often the
              best.
            </TextNode>

            <TextNode>“Where is the Lady Frances Carfax?” I asked.</TextNode>

            <TextNode>He stared at me with amazement.</TextNode>

            <TextNode>
              “What have you done with her? Why have you pursued her? I insist
              upon an answer!” said I.
            </TextNode>

            <TextNode>
              The fellow gave a below of anger and sprang upon me like a tiger.
              I have held my own in many a struggle, but the man had a grip of
              iron and the fury of a fiend. His hand was on my throat and my
              senses were nearly gone before an unshaven French ouvrier in a
              blue blouse darted out from a cabaret opposite, with a cudgel in
              his hand, and struck my assailant a sharp crack over the forearm,
              which made him leave go his hold. He stood for an instant fuming
              with rage and uncertain whether he should not renew his attack.
              Then, with a snarl of anger, he left me and entered the cottage
              from which I had just come. I turned to thank my preserver, who
              stood beside me in the roadway.
            </TextNode>

            <TextNode>
              “Well, Watson,” said he, “a very pretty hash you have made of it!
              I rather think you had better come back with me to London by the
              night express.”
            </TextNode>

            <TextNode>
              An hour afterwards, Sherlock Holmes, in his usual garb and style,
              was seated in my private room at the hotel. His explanation of his
              sudden and opportune appearance was simplicity itself, for,
              finding that he could get away from London, he determined to head
              me off at the next obvious point of my travels. In the disguise of
              a workingman he had sat in the cabaret waiting for my appearance.
            </TextNode>

            <TextNode>
              “And a singularly consistent investigation you have made, my dear
              Watson,” said he. “I cannot at the moment recall any possible
              blunder which you have omitted. The total effect of your
              proceeding has been to give the alarm everywhere and yet to
              discover nothing.”
            </TextNode>

            <TextNode>
              “Perhaps you would have done no better,” I answered bitterly.
            </TextNode>

            <TextNode>
              “There is no ‘perhaps’ about it. I have done better. Here is the
              Hon. Philip Green, who is a fellow-lodger with you in this hotel,
              and we may find him the starting-point for a more successful
              investigation.”
            </TextNode>

            <TextNode>
              A card had come up on a salver, and it was followed by the same
              bearded ruffian who had attacked me in the street. He started when
              he saw me.
            </TextNode>

            <TextNode>
              “What is this, Mr. Holmes?” he asked. “I had your note and I have
              come. But what has this man to do with the matter?”
            </TextNode>

            <TextNode>
              “This is my old friend and associate, Dr. Watson, who is helping
              us in this affair.”
            </TextNode>

            <TextNode>
              The stranger held out a huge, sunburned hand, with a few words of
              apology.
            </TextNode>

            <TextNode>
              “I hope I didn't harm you. When you accused me of hurting her I
              lost my grip of myself. Indeed, I'm not responsible in these days.
              My nerves are like live wires. But this situation is beyond me.
              What I want to know, in the first place, Mr. Holmes, is, how in
              the world you came to hear of my existence at all.”
            </TextNode>

            <TextNode>
              “I am in touch with Miss Dobney, Lady Frances's governess.”
            </TextNode>

            <TextNode>
              “Old Susan Dobney with the mob cap! I remember her well.”
            </TextNode>

            <TextNode>
              “And she remembers you. It was in the days before—before you found
              it better to go to South Africa.”
            </TextNode>

            <TextNode>
              “Ah, I see you know my whole story. I need hide nothing from you.
              I swear to you, Mr. Holmes, that there never was in this world a
              man who loved a woman with a more wholehearted love than I had for
              Frances. I was a wild youngster, I know—not worse than others of
              my class. But her mind was pure as snow. She could not bear a
              shadow of coarseness. So, when she came to hear of things that I
              had done, she would have no more to say to me. And yet she loved
              me—that is the wonder of it!—loved me well enough to remain single
              all her sainted days just for my sake alone. When the years had
              passed and I had made my money at Barberton I thought perhaps I
              could seek her out and soften her. I had heard that she was still
              unmarried, I found her at Lausanne and tried all I knew. She
              weakened, I think, but her will was strong, and when next I called
              she had left the town. I traced her to Baden, and then after a
              time heard that her maid was here. I'm a rough fellow, fresh from
              a rough life, and when Dr. Watson spoke to me as he did I lost
              hold of myself for a moment. But for God's sake tell me what has
              become of the Lady Frances.”
            </TextNode>

            <TextNode>
              “That is for us to find out,” said Sherlock Holmes with peculiar
              gravity. “What is your London address, Mr. Green?”
            </TextNode>

            <TextNode>“The Langham Hotel will find me.”</TextNode>

            <TextNode>
              “Then may I recommend that you return there and be on hand in case
              I should want you? I have no desire to encourage false hopes, but
              you may rest assured that all that can be done will be done for
              the safety of Lady Frances. I can say no more for the instant. I
              will leave you this card so that you may be able to keep in touch
              with us. Now, Watson, if you will pack your bag I will cable to
              Mrs. Hudson to make one of her best efforts for two hungry
              travellers at 7.30 to-morrow.”
            </TextNode>

            <TextNode>
              A telegram was awaiting us when we reached our Baker Street rooms,
              which Holmes read with an exclamation of interest and threw across
              to me. “Jagged or torn,” was the message, and the place of origin,
              Baden.
            </TextNode>

            <TextNode>“What is this?” I asked.</TextNode>

            <TextNode>
              “It is everything,” Holmes answered. “You may remember my
              seemingly irrelevant question as to this clerical gentleman's left
              ear. You did not answer it.”
            </TextNode>

            <TextNode>“I had left Baden and could not inquire.”</TextNode>

            <TextNode>
              “Exactly. For this reason I sent a duplicate to the manager of the
              Englischer Hof, whose answer lies here.”
            </TextNode>

            <TextNode>“What does it show?”</TextNode>

            <TextNode>
              “It shows, my dear Watson, that we are dealing with an
              exceptionally astute and dangerous man. The Rev. Dr. Shlessinger,
              missionary from South America, is none other than Holy Peters, one
              of the most unscrupulous rascals that Australia has ever
              evolved—and for a young country it has turned out some very
              finished types. His particular specialty is the beguiling of
              lonely ladies by playing upon their religious feelings, and his
              so-called wife, an Englishwoman named Fraser, is a worthy
              helpmate. The nature of his tactics suggested his identity to me,
              and this physical peculiarity—he was badly bitten in a
              saloon-fight at Adelaide in '89—confirmed my suspicion. This poor
              lady is in the hands of a most infernal couple, who will stick at
              nothing, Watson. That she is already dead is a very likely
              supposition. If not, she is undoubtedly in some sort of
              confinement and unable to write to Miss Dobney or her other
              friends. It is always possible that she never reached London, or
              that she has passed through it, but the former is improbable, as,
              with their system of registration, it is not easy for foreigners
              to play tricks with the Continental police; and the latter is also
              unlikely, as these rouges could not hope to find any other place
              where it would be as easy to keep a person under restraint. All my
              instincts tell me that she is in London, but as we have at present
              no possible means of telling where, we can only take the obvious
              steps, eat our dinner, and possess our souls in patience. Later in
              the evening I will stroll down and have a word with friend
              Lestrade at Scotland Yard.”
            </TextNode>

            <TextNode>
              But neither the official police nor Holmes's own small but very
              efficient organization sufficed to clear away the mystery. Amid
              the crowded millions of London the three persons we sought were as
              completely obliterated as if they had never lived. Advertisements
              were tried, and failed. Clues were followed, and led to nothing.
              Every criminal resort which Shlessinger might frequent was drawn
              in vain. His old associates were watched, but they kept clear of
              him. And then suddenly, after a week of helpless suspense there
              came a flash of light. A silver-and-brilliant pendant of old
              Spanish design had been pawned at Bovington's, in Westminster
              Road. The pawner was a large, clean-shaven man of clerical
              appearance. His name and address were demonstrably false. The ear
              had escaped notice, but the description was surely that of
              Shlessinger.
            </TextNode>

            <TextNode>
              Three times had our bearded friend from the Langham called for
              news—the third time within an hour of this fresh development. His
              clothes were getting looser on his great body. He seemed to be
              wilting away in his anxiety. “If you will only give me something
              to do!” was his constant wail. At last Holmes could oblige him.
            </TextNode>

            <TextNode>
              “He has begun to pawn the jewels. We should get him now.”
            </TextNode>

            <TextNode>
              “But does this mean that any harm has befallen the Lady Frances?”
            </TextNode>

            <TextNode>Holmes shook his head very gravely.</TextNode>

            <TextNode>
              “Supposing that they have held her prisoner up to now, it is clear
              that they cannot let her loose without their own destruction. We
              must prepare for the worst.”
            </TextNode>

            <TextNode>“What can I do?”</TextNode>

            <TextNode>“These people do not know you by sight?”</TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>
              “It is possible that he will go to some other pawnbroker in the
              future. in that case, we must begin again. On the other hand, he
              has had a fair price and no questions asked, so if he is in need
              of ready-money he will probably come back to Bovington's. I will
              give you a note to them, and they will let you wait in the shop.
              If the fellow comes you will follow him home. But no indiscretion,
              and, above all, no violence. I put you on your honour that you
              will take no step without my knowledge and consent.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page295;

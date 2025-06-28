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

function Page275({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;WISTERIA&nbsp;LODGE'
      />
      <BookMainContainer biggerTopPadding>
        <H4>
          Chapter II.
          <br />
          The Tiger of San Pedro
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              A cold and melancholy walk of a couple of miles brought us to a
              high wooden gate, which opened into a gloomy avenue of chestnuts.
              The curved and shadowed drive led us to a low, dark house,
              pitch-black against a slate-coloured sky. From the front window
              upon the left of the door there peeped a glimmer of a feeble
              light.
            </TextNode>

            <TextNode>
              “There's a constable in possession,” said Baynes. “I'll knock at
              the window.” He stepped across the grass plot and tapped with his
              hand on the pane. Through the fogged glass I dimly saw a man
              spring up from a chair beside the fire, and heard a sharp cry from
              within the room. An instant later a white-faced, hard-breathing
              policeman had opened the door, the candle wavering in his
              trembling hand.
            </TextNode>

            <TextNode>
              “What's the matter, Walters?” asked Baynes sharply.
            </TextNode>

            <TextNode>
              The man mopped his forehead with his handkerchief and agave a long
              sigh of relief.
            </TextNode>

            <TextNode>
              “I am glad you have come, sir. It has been a long evening, and I
              don't think my nerve is as good as it was.”
            </TextNode>

            <TextNode>
              “Your nerve, Walters? I should not have thought you had a nerve in
              your body.”
            </TextNode>

            <TextNode>
              “Well, sir, it's this lonely, silent house and the queer thing in
              the kitchen. Then when you tapped at the window I thought it had
              come again.”
            </TextNode>

            <TextNode>“That what had come again?”</TextNode>

            <TextNode>
              “The devil, sir, for all I know. It was at the window.”
            </TextNode>

            <TextNode>“What was at the window, and when?”</TextNode>

            <TextNode>
              “It was just about two hours ago. The light was just fading. I was
              sitting reading in the chair. I don't know what made me look up,
              but there was a face looking in at me through the lower pane.
              Lord, sir, what a face it was! I'll see it in my dreams.”
            </TextNode>

            <TextNode>
              “Tut, tut, Walters. This is not talk for a police-constable.”
            </TextNode>

            <TextNode>
              “I know, sir, I know; but it shook me, sir, and there's no use to
              deny it. It wasn't black, sir, nor was it white, nor any colour
              that I know but a kind of queer shade like clay with a splash of
              milk in it. Then there was the size of it—it was twice yours, sir.
              And the look of it—the great staring goggle eyes, and the line of
              white teeth like a hungry beast. I tell you, sir, I couldn't move
              a finger, nor get my breath, till it whisked away and was gone.
              Out I ran and through the shrubbery, but thank God there was no
              one there.”
            </TextNode>

            <TextNode>
              “If I didn't know you were a good man, Walters, I should put a
              black mark against you for this. If it were the devil himself a
              constable on duty should never thank God that he could not lay his
              hands upon him. I suppose the whole thing is not a vision and a
              touch of nerves?”
            </TextNode>

            <TextNode>
              “That, at least, is very easily settled,” said Holmes, lighting
              his little pocket lantern. “Yes,” he reported, after a short
              examination of the grass bed, “a number twelve shoe, I should say.
              If he was all on the same scale as his foot he must certainly have
              been a giant.”
            </TextNode>

            <TextNode>“What became of him?”</TextNode>

            <TextNode>
              “He seems to have broken through the shrubbery and made for the
              road.”
            </TextNode>

            <TextNode>
              “Well,” said the inspector with a grave and thoughtful face,
              “whoever he may have been, and whatever he may have wanted, he's
              gone for the present, and we have more immediate things to attend
              to. Now, Mr. Holmes, with your permission, I will show you round
              the house.”
            </TextNode>

            <TextNode>
              The various bedrooms and sitting-rooms had yielded nothing to a
              careful search. Apparently the tenants had brought little or
              nothing with them, and all the furniture down to the smallest
              details had been taken over with the house. A good deal of
              clothing with the stamp of Marx and Co., High Holborn, had been
              left behind. Telegraphic inquiries had been already made which
              showed that Marx knew nothing of his customer save that he was a
              good payer. Odds and ends, some pipes, a few novels, two of them
              in Spanish, and old-fashioned pinfire revolver, and a guitar were
              among the personal property.
            </TextNode>

            <TextNode>
              “Nothing in all this,” said Baynes, stalking, candle in hand, from
              room to room. “But now, Mr. Holmes, I invite your attention to the
              kitchen.”
            </TextNode>

            <TextNode>
              It was a gloomy, high-ceilinged room at the back of the house,
              with a straw litter in one corner, which served apparently as a
              bed for the cook. The table was piled with half-eaten dishes and
              dirty plates, the debris of last night's dinner.
            </TextNode>

            <TextNode>
              “Look at this,” said Baynes. “What do you make of it?”
            </TextNode>

            <TextNode>
              He held up his candle before an extraordinary object which stood
              at the back of the dresser. It was so wrinkled and shrunken and
              withered that it was difficult to say what it might have been. One
              could but say that it was black and leathery and that it bore some
              resemblance to a dwarfish, human figure. At first, as I examined
              it, I thought that it was a mummified negro baby, and then it
              seemed a very twisted and ancient monkey. Finally I was left in
              doubt as to whether it was animal or human. A double band of white
              shells were strung round the centre of it.
            </TextNode>

            <TextNode>
              “Very interesting—very interesting, indeed!” said Holmes, peering
              at this sinister relic. “Anything more?”
            </TextNode>

            <TextNode>
              In silence Baynes led the way to the sink and held forward his
              candle. The limbs and body of some large, white bird, torn
              savagely to pieces with the feathers still on, were littered all
              over it. Holmes pointed to the wattles on the severed head.
            </TextNode>

            <TextNode>
              “A white cock,” said he. “Most interesting! It is really a very
              curious case.”
            </TextNode>

            <TextNode>
              But Mr. Baynes had kept his most sinister exhibit to the last.
              From under the sink he drew a zinc pail which contained a quantity
              of blood. Then from the table he took a platter heaped with small
              pieces of charred bone.
            </TextNode>

            <TextNode>
              “Something has been killed and something has been burned. We raked
              all these out of the fire. We had a doctor in this morning. He
              says that they are not human.”
            </TextNode>

            <TextNode>Holmes smiled and rubbed his hands.</TextNode>

            <TextNode>
              “I must congratulate you, Inspector, on handling so distinctive
              and instructive a case. Your powers, if I may say so without
              offence, seem superior to your opportunities.”
            </TextNode>

            <TextNode>
              Inspector Baynes's small eyes twinkled with pleasure.
            </TextNode>

            <TextNode>
              “You're right, Mr. Holmes. We stagnate in the provinces. A case of
              this sort gives a man a chance, and I hope that I shall take it.
              What do you make of these bones?”
            </TextNode>

            <TextNode>“A lamb, I should say, or a kid.”</TextNode>

            <TextNode>“And the white cock?”</TextNode>

            <TextNode>
              “Curious, Mr. Baynes, very curious. I should say almost unique.”
            </TextNode>

            <TextNode>
              “Yes, sir, there must have been some very strange people with some
              very strange ways in this house. One of them is dead. Did his
              companions follow him and kill him? If they did we should have
              them, for every port is watched. But my own views are different.
              Yes, sir, my own views are very different.”
            </TextNode>

            <TextNode>“You have a theory then?”</TextNode>

            <TextNode>
              “And I'll work it myself, Mr. Holmes. It's only due to my own
              credit to do so. Your name is made, but I have still to make mine.
              I should be glad to be able to say afterwards that I had solved it
              without your help.”
            </TextNode>

            <TextNode>Holmes laughed good-humoredly.</TextNode>

            <TextNode>
              “Well, well, Inspector,” said he. “Do you follow your path and I
              will follow mine. My results are always very much at your service
              if you care to apply to me for them. I think that I have seen all
              that I wish in this house, and that my time may be more profitably
              employed elsewhere. Au revoir and good luck!”
            </TextNode>

            <TextNode>
              I could tell by numerous subtle signs, which might have been lost
              upon anyone but myself, that Holmes was on a hot scent. As
              impassive as ever to the casual observer, there were none the less
              a subdued eagerness and suggestion of tension in his brightened
              eyes and brisker manner which assured me that the game was afoot.
              After his habit he said nothing, and after mine I asked no
              questions. Sufficient for me to share the sport and lend my humble
              help to the capture without distracting that intent brain with
              needless interruption. All would come round to me in due time.
            </TextNode>

            <TextNode>
              I waited, therefore—but to my ever-deepening disappointment I
              waited in vain. Day succeeded day, and my friend took no step
              forward. One morning he spent in town, and I learned from a casual
              reference that he had visited the British Museum. Save for this
              one excursion, he spent his days in long and often solitary walks,
              or in chatting with a number of village gossips whose acquaintance
              he had cultivated.
            </TextNode>

            <TextNode>
              “I'm sure, Watson, a week in the country will be invaluable to
              you,” he remarked. “It is very pleasant to see the first green
              shoots upon the hedges and the catkins on the hazels once again.
              With a spud, a tin box, and an elementary book on botany, there
              are instructive days to be spent.” He prowled about with this
              equipment himself, but it was a poor show of plants which he would
              bring back of an evening.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              Occasionally in our rambles we came across Inspector Baynes. His
              fat, red face wreathed itself in smiles and his small eyes
              glittered as he greeted my companion. He said little about the
              case, but from that little we gathered that he also was not
              dissatisfied at the course of events. I must admit, however, that
              I was somewhat surprised when, some five days after the crime, I
              opened my morning paper to find in large letters:
            </TextNode>

            <TextNode className='text-center italic'>
              The Oxshott Mystery
            </TextNode>
            <TextNode className='text-center italic'>a solution</TextNode>
            <TextNode className='text-center italic'>
              Arrest of Supposed Assassin
            </TextNode>

            <TextNode noIndent>
              Holmes sprang in his chair as if he had been stung when I read the
              headlines.
            </TextNode>

            <TextNode>
              “By Jove!” he cried. “You don't mean that Baynes has got him?”
            </TextNode>

            <TextNode>
              “Apparently,” said I as I read the following report:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “Great excitement was caused in Esher and the neighbouring
                district when it was learned late last night that an arrest had
                been effected in connection with the Oxshott murder. It will be
                remembered that Mr. Garcia, of Wisteria Lodge, was found dead on
                Oxshott Common, his body showing signs of extreme violence, and
                that on the same night his servant and his cook fled, which
                appeared to show their participation in the crime. It was
                suggested, but never proved, that the deceased gentleman may
                have had valuables in the house, and that their abstraction was
                the motive of the crime. Every effort was made by Inspector
                Baynes, who has the case in hand, to ascertain the hiding place
                of the fugitives, and he had good reason to believe that they
                had not gone far but were lurking in some retreat which had been
                already prepared. It was certain from the first, however, that
                they would eventually be detected, as the cook, from the
                evidence of one or two tradespeople who have caught a glimpse of
                him through the window, was a man of most remarkable
                appearance—being a huge and hideous mulatto, with yellowish
                features of a pronounced negroid type. This man has been seen
                since the crime, for he was detected and pursued by Constable
                Walters on the same evening, when he had the audacity to revisit
                Wisteria Lodge. Inspector Baynes, considering that such a visit
                must have some purpose in view and was likely, therefore, to be
                repeated, abandoned the house but left an ambuscade in the
                shrubbery. The man walked into the trap and was captured last
                night after a struggle in which Constable Downing was badly
                bitten by the savage. We understand that when the prison is
                brought before the magistrates a remand will be applied for by
                the police, and that great developments are hoped from his
                capture.”
              </TextNode>
            </Indent>
            <TextNode noIndent>
              “Really we must see Baynes at once,” cried Holmes, picking up his
              hat. “We will just catch him before he starts.” We hurried down
              the village street and found, as we had expected, that the
              inspector was just leaving his lodgings.
            </TextNode>

            <TextNode>
              “You've seen the paper, Mr. Holmes?” he asked, holding one out to
              us.
            </TextNode>

            <TextNode>
              “Yes, Baynes, I've seen it. Pray don't think it a liberty if I
              give you a word of friendly warning.”
            </TextNode>

            <TextNode>“Of warning, Mr. Holmes?”</TextNode>

            <TextNode>
              “I have looked into this case with some care, and I am not
              convinced that you are on the right lines. I don't want you to
              commit yourself too far unless you are sure.”
            </TextNode>

            <TextNode>“You're very kind, Mr. Holmes.”</TextNode>

            <TextNode>“I assure you I speak for your good.”</TextNode>

            <TextNode>
              It seemed to me that something like a wink quivered for an instant
              over one of Mr. Baynes's tiny eyes.
            </TextNode>

            <TextNode>
              “We agreed to work on our own lines, Mr. Holmes. That's what I am
              doing.”
            </TextNode>

            <TextNode>“Oh, very good,” said Holmes. “Don't blame me.”</TextNode>

            <TextNode>
              “No, sir; I believe you mean well by me. But we all have our own
              systems, Mr. Holmes. You have yours, and maybe I have mine.”
            </TextNode>

            <TextNode>“Let us say no more about it.”</TextNode>

            <TextNode>
              “You're welcome always to my news. This fellow is a perfect
              savage, as strong as a cart-horse and as fierce as the devil. He
              chewed Downing's thumb nearly off before they could master him. He
              hardly speaks a word of English, and we can get nothing out of him
              but grunts.”
            </TextNode>

            <TextNode>
              “And you think you have evidence that he murdered his late
              master?”
            </TextNode>

            <TextNode>
              “I didn't say so, Mr. Holmes; I didn't say so. We all have our
              little ways. You try yours and I will try mine. That's the
              agreement.”
            </TextNode>

            <TextNode>
              Holmes shrugged his shoulders as we walked away together. “I can't
              make the man out. He seems to be riding for a fall. Well, as he
              says, we must each try our own way and see what comes of it. But
              there's something in Inspector Baynes which I can't quite
              understand.”
            </TextNode>

            <TextNode>
              “Just sit down in that chair, Watson,” said Sherlock Holmes when
              we had returned to our apartment at the Bull. “I want to put you
              in touch with the situation, as I may need your help to-night. Let
              me show you the evolution of this case so far as I have been able
              to follow it. Simple as it has been in its leading features, it
              has none the less presented surprising difficulties in the way of
              an arrest. There are gaps in that direction which we have still to
              fill.
            </TextNode>

            <TextNode>
              “We will go back to the note which was handed in to Garcia upon
              the evening of his death. We may put aside this idea of Baynes's
              that Garcia's servants were concerned in the matter. The proof of
              this lies in the fact that it was he who had arranged for the
              presence of Scott Eccles, which could only have been done for the
              purpose of an alibi. It was Garcia, then, who had an enterprise,
              and apparently a criminal enterprise, in hand that night in the
              course of which he met his death. I say ‘criminal’ because only a
              man with a criminal enterprise desires to establish an alibi. Who,
              then, is most likely to have taken his life? Surely the person
              against whom the criminal enterprise was directed. So far it seems
              to me that we are on safe ground.
            </TextNode>

            <TextNode>
              “We can now see a reason for the disappearance of Garcia's
              household. They were all confederates in the same unknown crime.
              If it came off when Garcia returned, any possible suspicion would
              be warded off by the Englishman's evidence, and all would be well.
              But the attempt was a dangerous one, and if Garcia did not return
              by a certain hour it was probable that his own life had been
              sacrificed. It had been arranged, therefore, that in such a case
              his two subordinates were to make for some prearranged spot where
              they could escape investigation and be in a position afterwards to
              renew their attempt. That would fully explain the facts, would it
              not?”
            </TextNode>

            <TextNode>
              The whole inexplicable tangle seemed to straighten out before me.
              I wondered, as I always did, how it had not been obvious to me
              before.
            </TextNode>

            <TextNode>“But why should one servant return?”</TextNode>

            <TextNode>
              “We can imagine that in the confusion of flight something
              precious, something which he could not bear to part with, had been
              left behind. That would explain his persistence, would it not?”
            </TextNode>

            <TextNode>“Well, what is the next step?”</TextNode>

            <TextNode>
              “The next step is the note received by Garcia at the dinner. It
              indicates a confederate at the other end. Now, where was the other
              end? I have already shown you that it could only lie in some large
              house, and that the number of large houses is limited. My first
              days in this village were devoted to a series of walks in which in
              the intervals of my botanical researches I made a reconnaissance
              of all the large houses and an examination of the family history
              of the occupants. One house, and only one, riveted my attention.
              It is the famous old Jacobean grange of High Gable, one mile on
              the farther side of Oxshott, and less than half a mile from the
              scene of the tragedy. The other mansions belonged to prosaic and
              respectable people who live far aloof from romance. But Mr.
              Henderson, of High Gable, was by all accounts a curious man to
              whom curious adventures might befall. I concentrated my attention,
              therefore, upon him and his household.
            </TextNode>

            <TextNode>
              “A singular set of people, Watson—the man himself the most
              singular of them all. I managed to see him on a plausible pretext,
              but I seemed to read in his dark, deepset, brooding eyes that he
              was perfectly aware of my true business. He is a man of fifty,
              strong, active, with iron-gray hair, great bunched black eyebrows,
              the step of a deer and the air of an emperor—a fierce, masterful
              man, with a red-hot spirit behind his parchment face. He is either
              a foreigner or has lived long in the tropics, for he is yellow and
              sapless, but tough as whipcord. His friend and secretary, Mr.
              Lucas, is undoubtedly a foreigner, chocolate brown, wily, suave,
              and catlike, with a poisonous gentleness of speech. You see,
              Watson, we have come already upon two sets of foreigners—one at
              Wisteria Lodge and one at High Gable—so our gaps are beginning to
              close.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page275;

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

function Page126({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='SILVER&nbsp;BLAZE'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “I am sorry to say that we have made very little progress,” said
              the Inspector. “We have an open carriage outside, and as you would
              no doubt like to see the place before the light fails, we might
              talk it over as we drive.”
            </TextNode>

            <TextNode>
              A minute later we were all seated in a comfortable landau, and
              were rattling through the quaint old Devonshire city. Inspector
              Gregory was full of his case, and poured out a stream of remarks,
              while Holmes threw in an occasional question or interjection.
              Colonel Ross leaned back with his arms folded and his hat tilted
              over his eyes, while I listened with interest to the dialogue of
              the two detectives. Gregory was formulating his theory, which was
              almost exactly what Holmes had foretold in the train.
            </TextNode>

            <TextNode>
              “The net is drawn pretty close round Fitzroy Simpson,” he
              remarked, “and I believe myself that he is our man. At the same
              time I recognize that the evidence is purely circumstantial, and
              that some new development may upset it.”
            </TextNode>

            <TextNode>“How about Straker's knife?”</TextNode>

            <TextNode>
              “We have quite come to the conclusion that he wounded himself in
              his fall.”
            </TextNode>

            <TextNode>
              “My friend Dr. Watson made that suggestion to me as we came down.
              If so, it would tell against this man Simpson.”
            </TextNode>

            <TextNode>
              “Undoubtedly. He has neither a knife nor any sign of a wound. The
              evidence against him is certainly very strong. He had a great
              interest in the disappearance of the favorite. He lies under
              suspicion of having poisoned the stable-boy, he was undoubtedly
              out in the storm, he was armed with a heavy stick, and his cravat
              was found in the dead man's hand. I really think we have enough to
              go before a jury.”
            </TextNode>

            <TextNode>
              Holmes shook his head. “A clever counsel would tear it all to
              rags,” said he. “Why should he take the horse out of the stable?
              If he wished to injure it why could he not do it there? Has a
              duplicate key been found in his possession? What chemist sold him
              the powdered opium? Above all, where could he, a stranger to the
              district, hide a horse, and such a horse as this? What is his own
              explanation as to the paper which he wished the maid to give to
              the stable-boy?”
            </TextNode>

            <TextNode>
              “He says that it was a ten-pound note. One was found in his purse.
              But your other difficulties are not so formidable as they seem. He
              is not a stranger to the district. He has twice lodged at
              Tavistock in the summer. The opium was probably brought from
              London. The key, having served its purpose, would be hurled away.
              The horse may be at the bottom of one of the pits or old mines
              upon the moor.”
            </TextNode>

            <TextNode>“What does he say about the cravat?”</TextNode>

            <TextNode>
              “He acknowledges that it is his, and declares that he had lost it.
              But a new element has been introduced into the case which may
              account for his leading the horse from the stable.”
            </TextNode>

            <TextNode>Holmes pricked up his ears.</TextNode>

            <TextNode>
              “We have found traces which show that a party of gypsies encamped
              on Monday night within a mile of the spot where the murder took
              place. On Tuesday they were gone. Now, presuming that there was
              some understanding between Simpson and these gypsies, might he not
              have been leading the horse to them when he was overtaken, and may
              they not have him now?”
            </TextNode>

            <TextNode>“It is certainly possible.”</TextNode>

            <TextNode>
              “The moor is being scoured for these gypsies. I have also examined
              every stable and out-house in Tavistock, and for a radius of ten
              miles.”
            </TextNode>

            <TextNode>
              “There is another training-stable quite close, I understand?”
            </TextNode>

            <TextNode>
              “Yes, and that is a factor which we must certainly not neglect. As
              Desborough, their horse, was second in the betting, they had an
              interest in the disappearance of the favorite. Silas Brown, the
              trainer, is known to have had large bets upon the event, and he
              was no friend to poor Straker. We have, however, examined the
              stables, and there is nothing to connect him with the affair.”
            </TextNode>

            <TextNode>
              “And nothing to connect this man Simpson with the interests of the
              Mapleton stables?”
            </TextNode>

            <TextNode>“Nothing at all.”</TextNode>

            <TextNode>
              Holmes leaned back in the carriage, and the conversation ceased. A
              few minutes later our driver pulled up at a neat little red-brick
              villa with overhanging eaves which stood by the road. Some
              distance off, across a paddock, lay a long gray-tiled
              out-building. In every other direction the low curves of the moor,
              bronze-colored from the fading ferns, stretched away to the
              sky-line, broken only by the steeples of Tavistock, and by a
              cluster of houses away to the westward which marked the Mapleton
              stables. We all sprang out with the exception of Holmes, who
              continued to lean back with his eyes fixed upon the sky in front
              of him, entirely absorbed in his own thoughts. It was only when I
              touched his arm that he roused himself with a violent start and
              stepped out of the carriage.
            </TextNode>

            <TextNode>
              “Excuse me,” said he, turning to Colonel Ross, who had looked at
              him in some surprise. “I was day-dreaming.” There was a gleam in
              his eyes and a suppressed excitement in his manner which convinced
              me, used as I was to his ways, that his hand was upon a clue,
              though I could not imagine where he had found it.
            </TextNode>

            <TextNode>
              “Perhaps you would prefer at once to go on to the scene of the
              crime, Mr. Holmes?” said Gregory.
            </TextNode>

            <TextNode>
              “I think that I should prefer to stay here a little and go into
              one or two questions of detail. Straker was brought back here, I
              presume?”
            </TextNode>

            <TextNode>
              “Yes; he lies upstairs. The inquest is to-morrow.”
            </TextNode>

            <TextNode>
              “He has been in your service some years, Colonel Ross?”
            </TextNode>

            <TextNode>“I have always found him an excellent servant.”</TextNode>

            <TextNode>
              “I presume that you made an inventory of what he had in this
              pockets at the time of his death, Inspector?”
            </TextNode>

            <TextNode>
              “I have the things themselves in the sitting-room, if you would
              care to see them.”
            </TextNode>

            <TextNode>
              “I should be very glad.” We all filed into the front room and sat
              round the central table while the Inspector unlocked a square tin
              box and laid a small heap of things before us. There was a box of
              vestas, two inches of tallow candle, an A D P brier-root pipe, a
              pouch of seal-skin with half an ounce of long-cut Cavendish, a
              silver watch with a gold chain, five sovereigns in gold, an
              aluminum pencil-case, a few papers, and an ivory-handled knife
              with a very delicate, inflexible blade marked Weiss & Co., London.
            </TextNode>

            <TextNode>
              “This is a very singular knife,” said Holmes, lifting it up and
              examining it minutely. “I presume, as I see blood-stains upon it,
              that it is the one which was found in the dead man's grasp.
              Watson, this knife is surely in your line?”
            </TextNode>

            <TextNode>“It is what we call a cataract knife,” said I.</TextNode>

            <TextNode>
              “I thought so. A very delicate blade devised for very delicate
              work. A strange thing for a man to carry with him upon a rough
              expedition, especially as it would not shut in his pocket.”
            </TextNode>

            <TextNode>
              “The tip was guarded by a disk of cork which we found beside his
              body,” said the Inspector. “His wife tells us that the knife had
              lain upon the dressing-table, and that he had picked it up as he
              left the room. It was a poor weapon, but perhaps the best that he
              could lay his hands on at the moment.”
            </TextNode>

            <TextNode>“Very possible. How about these papers?”</TextNode>

            <TextNode>
              “Three of them are receipted hay-dealers' accounts. One of them is
              a letter of instructions from Colonel Ross. This other is a
              milliner's account for thirty-seven pounds fifteen made out by
              Madame Lesurier, of Bond Street, to William Derbyshire. Mrs.
              Straker tells us that Derbyshire was a friend of her husband's and
              that occasionally his letters were addressed here.”
            </TextNode>

            <TextNode>
              “Madam Derbyshire had somewhat expensive tastes,” remarked Holmes,
              glancing down the account. “Twenty-two guineas is rather heavy for
              a single costume. However there appears to be nothing more to
              learn, and we may now go down to the scene of the crime.”
            </TextNode>

            <TextNode>
              As we emerged from the sitting-room a woman, who had been waiting
              in the passage, took a step forward and laid her hand upon the
              Inspector's sleeve. Her face was haggard and thin and eager,
              stamped with the print of a recent horror.
            </TextNode>

            <TextNode>
              “Have you got them? Have you found them?” she panted.
            </TextNode>

            <TextNode>
              “No, Mrs. Straker. But Mr. Holmes here has come from London to
              help us, and we shall do all that is possible.”
            </TextNode>

            <TextNode>
              “Surely I met you in Plymouth at a garden-party some little time
              ago, Mrs. Straker?” said Holmes.
            </TextNode>

            <TextNode>“No, sir; you are mistaken.”</TextNode>

            <TextNode>
              “Dear me! Why, I could have sworn to it. You wore a costume of
              dove-colored silk with ostrich-feather trimming.”
            </TextNode>

            <TextNode>
              “I never had such a dress, sir,” answered the lady.
            </TextNode>

            <TextNode>
              “Ah, that quite settles it,” said Holmes. And with an apology he
              followed the Inspector outside. A short walk across the moor took
              us to the hollow in which the body had been found. At the brink of
              it was the furze-bush upon which the coat had been hung.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “There was no wind that night, I understand,” said Holmes.
            </TextNode>

            <TextNode>“None; but very heavy rain.”</TextNode>

            <TextNode>
              “In that case the overcoat was not blown against the furze-bush,
              but placed there.”
            </TextNode>

            <TextNode>“Yes, it was laid across the bush.”</TextNode>

            <TextNode>
              “You fill me with interest, I perceive that the ground has been
              trampled up a good deal. No doubt many feet have been here since
              Monday night.”
            </TextNode>

            <TextNode>
              “A piece of matting has been laid here at the side, and we have
              all stood upon that.”
            </TextNode>

            <TextNode>“Excellent.”</TextNode>

            <TextNode>
              “In this bag I have one of the boots which Straker wore, one of
              Fitzroy Simpson's shoes, and a cast horseshoe of Silver Blaze.”
            </TextNode>

            <TextNode>
              “My dear Inspector, you surpass yourself!” Holmes took the bag,
              and, descending into the hollow, he pushed the matting into a more
              central position. Then stretching himself upon his face and
              leaning his chin upon his hands, he made a careful study of the
              trampled mud in front of him. “Hullo!” said he, suddenly. “What's
              this?” It was a wax vesta half burned, which was so coated with
              mud that it looked at first like a little chip of wood.
            </TextNode>

            <TextNode>
              “I cannot think how I came to overlook it,” said the Inspector,
              with an expression of annoyance.
            </TextNode>

            <TextNode>
              “It was invisible, buried in the mud. I only saw it because I was
              looking for it.”
            </TextNode>

            <TextNode>“What! You expected to find it?”</TextNode>

            <TextNode>“I thought it not unlikely.”</TextNode>

            <TextNode>
              He took the boots from the bag, and compared the impressions of
              each of them with marks upon the ground. Then he clambered up to
              the rim of the hollow, and crawled about among the ferns and
              bushes.
            </TextNode>

            <TextNode>
              “I am afraid that there are no more tracks,” said the Inspector.
              “I have examined the ground very carefully for a hundred yards in
              each direction.”
            </TextNode>

            <TextNode>
              “Indeed!” said Holmes, rising. “I should not have the impertinence
              to do it again after what you say. But I should like to take a
              little walk over the moor before it grows dark, that I may know my
              ground to-morrow, and I think that I shall put this horseshoe into
              my pocket for luck.”
            </TextNode>

            <TextNode>
              Colonel Ross, who had shown some signs of impatience at my
              companion's quiet and systematic method of work, glanced at his
              watch. “I wish you would come back with me, Inspector,” said he.
              “There are several points on which I should like your advice, and
              especially as to whether we do not owe it to the public to remove
              our horse's name from the entries for the Cup.”
            </TextNode>

            <TextNode>
              “Certainly not,” cried Holmes, with decision. “I should let the
              name stand.”
            </TextNode>

            <TextNode>
              The Colonel bowed. “I am very glad to have had your opinion, sir,”
              said he. “You will find us at poor Straker's house when you have
              finished your walk, and we can drive together into Tavistock.”
            </TextNode>

            <TextNode>
              He turned back with the Inspector, while Holmes and I walked
              slowly across the moor. The sun was beginning to sink behind the
              stables of Mapleton, and the long, sloping plain in front of us
              was tinged with gold, deepening into rich, ruddy browns where the
              faded ferns and brambles caught the evening light. But the glories
              of the landscape were all wasted upon my companion, who was sunk
              in the deepest thought.
            </TextNode>

            <TextNode>
              “It's this way, Watson,” said he at last. “We may leave the
              question of who killed John Straker for the instant, and confine
              ourselves to finding out what has become of the horse. Now,
              supposing that he broke away during or after the tragedy, where
              could he have gone to? The horse is a very gregarious creature. If
              left to himself his instincts would have been either to return to
              King's Pyland or go over to Mapleton. Why should he run wild upon
              the moor? He would surely have been seen by now. And why should
              gypsies kidnap him? These people always clear out when they hear
              of trouble, for they do not wish to be pestered by the police.
              They could not hope to sell such a horse. They would run a great
              risk and gain nothing by taking him. Surely that is clear.”
            </TextNode>

            <TextNode>“Where is he, then?”</TextNode>

            <TextNode>
              “I have already said that he must have gone to King's Pyland or to
              Mapleton. He is not at King's Pyland. Therefore he is at Mapleton.
              Let us take that as a working hypothesis and see what it leads us
              to. This part of the moor, as the Inspector remarked, is very hard
              and dry. But it falls away towards Mapleton, and you can see from
              here that there is a long hollow over yonder, which must have been
              very wet on Monday night. If our supposition is correct, then the
              horse must have crossed that, and there is the point where we
              should look for his tracks.”
            </TextNode>

            <TextNode>
              We had been walking briskly during this conversation, and a few
              more minutes brought us to the hollow in question. At Holmes'
              request I walked down the bank to the right, and he to the left,
              but I had not taken fifty paces before I heard him give a shout,
              and saw him waving his hand to me. The track of a horse was
              plainly outlined in the soft earth in front of him, and the shoe
              which he took from his pocket exactly fitted the impression.
            </TextNode>

            <TextNode>
              “See the value of imagination,” said Holmes. “It is the one
              quality which Gregory lacks. We imagined what might have happened,
              acted upon the supposition, and find ourselves justified. Let us
              proceed.”
            </TextNode>

            <TextNode>
              We crossed the marshy bottom and passed over a quarter of a mile
              of dry, hard turf. Again the ground sloped, and again we came on
              the tracks. Then we lost them for half a mile, but only to pick
              them up once more quite close to Mapleton. It was Holmes who saw
              them first, and he stood pointing with a look of triumph upon his
              face. A man's track was visible beside the horse's.
            </TextNode>

            <TextNode>“The horse was alone before,” I cried.</TextNode>

            <TextNode>
              “Quite so. It was alone before. Hullo, what is this?”
            </TextNode>

            <TextNode>
              The double track turned sharp off and took the direction of King's
              Pyland. Holmes whistled, and we both followed along after it. His
              eyes were on the trail, but I happened to look a little to one
              side, and saw to my surprise the same tracks coming back again in
              the opposite direction.
            </TextNode>

            <TextNode>
              “One for you, Watson,” said Holmes, when I pointed it out. “You
              have saved us a long walk, which would have brought us back on our
              own traces. Let us follow the return track.”
            </TextNode>

            <TextNode>
              We had not to go far. It ended at the paving of asphalt which led
              up to the gates of the Mapleton stables. As we approached, a groom
              ran out from them.
            </TextNode>

            <TextNode>
              “We don't want any loiterers about here,” said he.
            </TextNode>

            <TextNode>
              “I only wished to ask a question,” said Holmes, with his finger
              and thumb in his waistcoat pocket. “Should I be too early to see
              your master, Mr. Silas Brown, if I were to call at five o'clock
              to-morrow morning?”
            </TextNode>

            <TextNode>
              “Bless you, sir, if any one is about he will be, for he is always
              the first stirring. But here he is, sir, to answer your questions
              for himself. No, sir, no; it is as much as my place is worth to
              let him see me touch your money. Afterwards, if you like.”
            </TextNode>

            <TextNode>
              As Sherlock Holmes replaced the half-crown which he had drawn from
              his pocket, a fierce-looking elderly man strode out from the gate
              with a hunting-crop swinging in his hand.
            </TextNode>

            <TextNode>
              “What's this, Dawson!” he cried. “No gossiping! Go about your
              business! And you, what the devil do you want here?”
            </TextNode>

            <TextNode>
              “Ten minutes' talk with you, my good sir,” said Holmes in the
              sweetest of voices.
            </TextNode>

            <TextNode>
              “I've no time to talk to every gadabout. We want no stranger here.
              Be off, or you may find a dog at your heels.”
            </TextNode>

            <TextNode>
              Holmes leaned forward and whispered something in the trainer's
              ear. He started violently and flushed to the temples.
            </TextNode>

            <TextNode>“It's a lie!” he shouted, “an infernal lie!”</TextNode>

            <TextNode>
              “Very good. Shall we argue about it here in public or talk it over
              in your parlor?”
            </TextNode>

            <TextNode>“Oh, come in if you wish to.”</TextNode>

            <TextNode>
              Holmes smiled. “I shall not keep you more than a few minutes,
              Watson,” said he. “Now, Mr. Brown, I am quite at your disposal.”
            </TextNode>

            <TextNode>
              It was twenty minutes, and the reds had all faded into grays
              before Holmes and the trainer reappeared. Never have I seen such a
              change as had been brought about in Silas Brown in that short
              time. His face was ashy pale, beads of perspiration shone upon his
              brow, and his hands shook until the hunting-crop wagged like a
              branch in the wind. His bullying, overbearing manner was all gone
              too, and he cringed along at my companion's side like a dog with
              its master.
            </TextNode>

            <TextNode>
              “Your instructions will be done. It shall all be done,” said he.
            </TextNode>

            <TextNode>
              “There must be no mistake,” said Holmes, looking round at him. The
              other winced as he read the menace in his eyes.
            </TextNode>

            <TextNode>
              “Oh no, there shall be no mistake. It shall be there. Should I
              change it first or not?”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page126;

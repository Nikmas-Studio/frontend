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

function Page276({
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
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “These two men, close and confidential friends, are the centre of
              the household; but there is one other person who for our immediate
              purpose may be even more important. Henderson has two
              children—girls of eleven and thirteen. Their governess is a Miss
              Burnet, an Englishwoman of forty or thereabouts. There is also one
              confidential manservant. This little group forms the real family,
              for their travel about together, and Henderson is a great
              traveller, always on the move. It is only within the last weeks
              that he has returned, after a year's absence, to High Gable. I may
              add that he is enormously rich, and whatever his whims may be he
              can very easily satisfy them. For the rest, his house is full of
              butlers, footmen, maidservants, and the usual overfed, underworked
              staff of a large English country house.
            </TextNode>

            <TextNode>
              “So much I learned partly from village gossip and partly from my
              own observation. There are no better instruments than discharged
              servants with a grievance, and I was lucky enough to find one. I
              call it luck, but it would not have come my way had I not been
              looking out for it. As Baynes remarks, we all have our systems. It
              was my system which enabled me to find John Warner, late gardener
              of High Gable, sacked in a moment of temper by his imperious
              employer. He in turn had friends among the indoor servants who
              unite in their fear and dislike of their master. So I had my key
              to the secrets of the establishment.
            </TextNode>

            <TextNode>
              “Curious people, Watson! I don't pretend to understand it all yet,
              but very curious people anyway. It's a double-winged house, and
              the servants live on one side, the family on the other. There's no
              link between the two save for Henderson's own servant, who serves
              the family's meals. Everything is carried to a certain door, which
              forms the one connection. Governess and children hardly go out at
              all, except into the garden. Henderson never by any chance walks
              alone. His dark secretary is like his shadow. The gossip among the
              servants is that their master is terribly afraid of something.
              ‘Sold his soul to the devil in exchange for money,’ says Warner,
              ‘and expects his creditor to come up and claim his own.’ Where
              they came from, or who they are, nobody has an idea. They are very
              violent. Twice Henderson has lashed at folk with his dog-whip, and
              only his long purse and heavy compensation have kept him out of
              the courts.
            </TextNode>

            <TextNode>
              “Well, now, Watson, let us judge the situation by this new
              information. We may take it that the letter came out of this
              strange household and was an invitation to Garcia to carry out
              some attempt which had already been planned. Who wrote the note?
              It was someone within the citadel, and it was a woman. Who then
              but Miss Burnet, the governess? All our reasoning seems to point
              that way. At any rate, we may take it as a hypothesis and see what
              consequences it would entail. I may add that Miss Burnet's age and
              character make it certain that my first idea that there might be a
              love interest in our story is out of the question.
            </TextNode>

            <TextNode>
              “If she wrote the note she was presumably the friend and
              confederate of Garcia. What, then, might she be expected to do if
              she heard of his death? If he met it in some nefarious enterprise
              her lips might be sealed. Still, in her heart, she must retain
              bitterness and hatred against those who had killed him and would
              presumably help so far as she could to have revenge upon them.
              Could we see her, then and try to use her? That was my first
              thought. But now we come to a sinister fact. Miss Burnet has not
              been seen by any human eye since the night of the murder. From
              that evening she has utterly vanished. Is she alive? Has she
              perhaps met her end on the same night as the friend whom she had
              summoned? Or is she merely a prisoner? There is the point which we
              still have to decide.
            </TextNode>

            <TextNode>
              “You will appreciate the difficulty of the situation, Watson.
              There is nothing upon which we can apply for a warrant. Our whole
              scheme might seem fantastic if laid before a magistrate. The
              woman's disappearance counts for nothing, since in that
              extraordinary household any member of it might be invisible for a
              week. And yet she may at the present moment be in danger of her
              life. All I can do is to watch the house and leave my agent,
              Warner, on guard at the gates. We can't let such a situation
              continue. If the law can do nothing we must take the risk
              ourselves.”
            </TextNode>

            <TextNode>“What do you suggest?”</TextNode>

            <TextNode>
              “I know which is her room. It is accessible from the top of an
              outhouse. My suggestion is that you and I go to-night and see if
              we can strike at the very heart of the mystery.”
            </TextNode>

            <TextNode>
              It was not, I must confess, a very alluring prospect. The old
              house with its atmosphere of murder, the singular and formidable
              inhabitants, the unknown dangers of the approach, and the fact
              that we were putting ourselves legally in a false position all
              combined to damp my ardour. But there was something in the
              ice-cold reasoning of Holmes which made it impossible to shrink
              from any adventure which he might recommend. One knew that thus,
              and only thus, could a solution be found. I clasped his hand in
              silence, and the die was cast.
            </TextNode>

            <TextNode>
              But it was not destined that our investigation should have so
              adventurous an ending. It was about five o'clock, and the shadows
              of the March evening were beginning to fall, when an excited
              rustic rushed into our room.
            </TextNode>

            <TextNode>
              “They've gone, Mr. Holmes. They went by the last train. The lady
              broke away, and I've got her in a cab downstairs.”
            </TextNode>

            <TextNode>
              “Excellent, Warner!” cried Holmes, springing to his feet. “Watson,
              the gaps are closing rapidly.”
            </TextNode>

            <TextNode>
              In the cab was a woman, half-collapsed from nervous exhaustion.
              She bore upon her aquiline and emaciated face the traces of some
              recent tragedy. Her head hung listlessly upon her breast, but as
              she raised it and turned her dull eyes upon us I saw that her
              pupils were dark dots in the centre of the broad gray iris. She
              was drugged with opium.
            </TextNode>

            <TextNode>
              “I watched at the gate, same as you advised, Mr. Holmes,” said our
              emissary, the discharged gardener. “When the carriage came out I
              followed it to the station. She was like one walking in her sleep,
              but when they tried to get her into the train she came to life and
              struggled. They pushed her into the carriage. She fought her way
              out again. I took her part, got her into a cab, and here we are. I
              shan't forget the face at the carriage window as I led her away.
              I'd have a short life if he had his way—the black-eyed, scowling,
              yellow devil.”
            </TextNode>

            <TextNode>
              We carried her upstairs, laid her on the sofa, and a couple of
              cups of the strongest coffee soon cleared her brain from the mists
              of the drug. Baynes had been summoned by Holmes, and the situation
              rapidly explained to him.
            </TextNode>

            <TextNode>
              “Why, sir, you've got me the very evidence I want,” said the
              inspector warmly, shaking my friend by the hand. “I was on the
              same scent as you from the first.”
            </TextNode>

            <TextNode>“What! You were after Henderson?”</TextNode>

            <TextNode>
              “Why, Mr. Holmes, when you were crawling in the shrubbery at High
              Gable I was up one of the trees in the plantation and saw you down
              below. It was just who would get his evidence first.”
            </TextNode>

            <TextNode>“Then why did you arrest the mulatto?”</TextNode>

            <TextNode>Baynes chuckled.</TextNode>

            <TextNode>
              “I was sure Henderson, as he calls himself, felt that he was
              suspected, and that he would lie low and make no move so long as
              he thought he was in any danger. I arrested the wrong man to make
              him believe that our eyes were off him. I knew he would be likely
              to clear off then and give us a chance of getting at Miss Burnet.”
            </TextNode>

            <TextNode>
              Holmes laid his hand upon the inspector's shoulder.
            </TextNode>

            <TextNode>
              “You will rise high in your profession. You have instinct and
              intuition,” said he.
            </TextNode>

            <TextNode>Baynes flushed with pleasure.</TextNode>

            <TextNode>
              “I've had a plain-clothes man waiting at the station all the week.
              Wherever the High Gable folk go he will keep them in sight. But he
              must have been hard put to it when Miss Burnet broke away.
              However, your man picked her up, and it all ends well. We can't
              arrest without her evidence, that is clear, so the sooner we get a
              statement the better.”
            </TextNode>

            <TextNode>
              “Every minute she gets stronger,” said Holmes, glancing at the
              governess. “But tell me, Baynes, who is this man Henderson?”
            </TextNode>

            <TextNode>
              “Henderson,” the inspector answered, “is Don Murillo, once called
              the Tiger of San Pedro.”
            </TextNode>

            <TextNode>
              The Tiger of San Pedro! The whole history of the man came back to
              me in a flash. He had made his name as the most lewd and
              bloodthirsty tyrant that had ever governed any country with a
              pretence to civilization. Strong, fearless, and energetic, he had
              sufficient virtue to enable him to impose his odious vices upon a
              cowering people for ten or twelve years. His name was a terror
              through all Central America. At the end of that time there was a
              universal rising against him. But he was as cunning as he was
              cruel, and at the first whisper of coming trouble he had secretly
              conveyed his treasures aboard a ship which was manned by devoted
              adherents. It was an empty palace which was stormed by the
              insurgents next day. The dictator, his two children, his
              secretary, and his wealth had all escaped them. From that moment
              he had vanished from the world, and his identity had been a
              frequent subject for comment in the European press.
            </TextNode>

            <TextNode>
              “Yes, sir, Don Murillo, the Tiger of San Pedro,” said Baynes. “If
              you look it up you will find that the San Pedro colours are green
              and white, same as in the note, Mr. Holmes. Henderson he called
              himself, but I traced him back, Paris and Rome and Madrid to
              Barcelona, where his ship came in in '86. They've been looking for
              him all the time for their revenge, but it is only now that they
              have begun to find him out.”
            </TextNode>

            <TextNode>
              “They discovered him a year ago,” said Miss Burnet, who had sat up
              and was now intently following the conversation. “Once already his
              life has been attempted, but some evil spirit shielded him. Now,
              again, it is the noble, chivalrous Garcia who has fallen, while
              the monster goes safe. But another will come, and yet another,
              until some day justice will be done; that is as certain as the
              rise of to-morrow's sun.” Her thin hands clenched, and her worn
              face blanched with the passion of her hatred.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “But how come you into this matter, Miss Burnet?” asked Holmes.
              “How can an English lady join in such a murderous affair?”
            </TextNode>

            <TextNode>
              “I join in it because there is no other way in the world by which
              justice can be gained. What does the law of England care for the
              rivers of blood shed years ago in San Pedro, or for the shipload
              of treasure which this man has stolen? To you they are like crimes
              committed in some other planet. But we know. We have learned the
              truth in sorrow and in suffering. To us there is no fiend in hell
              like Juan Murillo, and no peace in life while his victims still
              cry for vengeance.”
            </TextNode>

            <TextNode>
              “No doubt,” said Holmes, “he was as you say. I have heard that he
              was atrocious. But how are you affected?”
            </TextNode>

            <TextNode>
              “I will tell you it all. This villain's policy was to murder, on
              one pretext or another, every man who showed such promise that he
              might in time come to be a dangerous rival. My husband—yes, my
              real name is Signora Victor Durando—was the San Pedro minister in
              London. He met me and married me there. A nobler man never lived
              upon earth. Unhappily, Murillo heard of his excellence, recalled
              him on some pretext, and had him shot. With a premonition of his
              fate he had refused to take me with him. His estates were
              confiscated, and I was left with a pittance and a broken heart.
            </TextNode>

            <TextNode>
              “Then came the downfall of the tyrant. He escaped as you have just
              described. But the many whose lives he had ruined, whose nearest
              and dearest had suffered torture and death at his hands, would not
              let the matter rest. They banded themselves into a society which
              should never be dissolved until the work was done. It was my part
              after we had discovered in the transformed Henderson the fallen
              despot, to attach myself to his household and keep the others in
              touch with his movements. This I was able to do by securing the
              position of governess in his family. He little knew that the woman
              who faced him at every meal was the woman whose husband he had
              hurried at an hour's notice into eternity. I smiled on him, did my
              duty to his children, and bided my time. An attempt was made in
              Paris and failed. We zig-zagged swiftly here and there over Europe
              to throw off the pursuers and finally returned to this house,
              which he had taken upon his first arrival in England.
            </TextNode>

            <TextNode>
              “But here also the ministers of justice were waiting. Knowing that
              he would return there, Garcia, who is the son of the former
              highest dignitary in San Pedro, was waiting with two trusty
              companions of humble station, all three fired with the same
              reasons for revenge. He could do little during the day, for
              Murillo took every precaution and never went out save with his
              satellite Lucas, or Lopez as he was known in the days of his
              greatness. At night, however, he slept alone, and the avenger
              might find him. On a certain evening, which had been prearranged,
              I sent my friend final instructions, for the man was forever on
              the alert and continually changed his room. I was to see that the
              doors were open and the signal of a green or white light in a
              window which faced the drive was to give notice if all was safe or
              if the attempt had better be postponed.
            </TextNode>

            <TextNode>
              “But everything went wrong with us. In some way I had excited the
              suspicion of Lopez, the secretary. He crept up behind me and
              sprang upon me just as I had finished the note. He and his master
              dragged me to my room and held judgment upon me as a convicted
              traitress. Then and there they would have plunged their knives
              into me could they have seen how to escape the consequences of the
              deed. Finally, after much debate, they concluded that my murder
              was too dangerous. But they determined to get rid forever of
              Garcia. They had gagged me, and Murillo twisted my arm round until
              I gave him the address. I swear that he might have twisted it off
              had I understood what it would mean to Garcia. Lopez addressed the
              note which I had written, sealed it with his sleeve-link, and sent
              it by the hand of the servant, Jose. How they murdered him I do
              not know, save that it was Murillo's hand who struck him down, for
              Lopez had remained to guard me. I believe he must have waited
              among the gorse bushes through which the path winds and struck him
              down as he passed. At first they were of a mind to let him enter
              the house and to kill him as a detected burglar; but they argued
              that if they were mixed up in an inquiry their own identity would
              at once be publicly disclosed and they would be open to further
              attacks. With the death of Garcia, the pursuit might cease, since
              such a death might frighten others from the task.
            </TextNode>

            <TextNode>
              “All would now have been well for them had it not been for my
              knowledge of what they had done. I have no doubt that there were
              times when my life hung in the balance. I was confined to my room,
              terrorized by the most horrible threats, cruelly ill-used to break
              my spirit—see this stab on my shoulder and the bruises from end to
              end of my arms—and a gag was thrust into my mouth on the one
              occasion when I tried to call from the window. For five days this
              cruel imprisonment continued, with hardly enough food to hold body
              and soul together. This afternoon a good lunch was brought me, but
              the moment after I took it I knew that I had been drugged. In a
              sort of dream I remember being half-led, half-carried to the
              carriage; in the same state I was conveyed to the train. Only
              then, when the wheels were almost moving, did I suddenly realize
              that my liberty lay in my own hands. I sprang out, they tried to
              drag me back, and had it not been for the help of this good man,
              who led me to the cab, I should never had broken away. Now, thank
              God, I am beyond their power forever.”
            </TextNode>

            <TextNode>
              We had all listened intently to this remarkable statement. It was
              Holmes who broke the silence.
            </TextNode>

            <TextNode>
              “Our difficulties are not over,” he remarked, shaking his head.
              “Our police work ends, but our legal work begins.”
            </TextNode>

            <TextNode>
              “Exactly,” said I. “A plausible lawyer could make it out as an act
              of self-defence. There may be a hundred crimes in the background,
              but it is only on this one that they can be tried.”
            </TextNode>

            <TextNode>
              “Come, come,” said Baynes cheerily, “I think better of the law
              than that. Self-defence is one thing. To entice a man in cold
              blood with the object of murdering him is another, whatever danger
              you may fear from him. No, no, we shall all be justified when we
              see the tenants of High Gable at the next Guildford Assizes.”
            </TextNode>

            <TextNode>
              It is a matter of history, however, that a little time was still
              to elapse before the Tiger of San Pedro should meet with his
              deserts. Wily and bold, he and his companion threw their pursuer
              off their track by entering a lodging-house in Edmonton Street and
              leaving by the back-gate into Curzon Square. From that day they
              were seen no more in England. Some six months afterwards the
              Marquess of Montalva and Signor Rulli, his secretary, were both
              murdered in their rooms at the Hotel Escurial at Madrid. The crime
              was ascribed to Nihilism, and the murderers were never arrested.
              Inspector Baynes visited us at Baker Street with a printed
              description of the dark face of the secretary, and of the
              masterful features, the magnetic black eyes, and the tufted brows
              of his master. We could not doubt that justice, if belated, had
              come at last.
            </TextNode>

            <TextNode>
              “A chaotic case, my dear Watson,” said Holmes over an evening
              pipe. “It will not be possible for you to present in that compact
              form which is dear to your heart. It covers two continents,
              concerns two groups of mysterious persons, and is further
              complicated by the highly respectable presence of our friend,
              Scott Eccles, whose inclusion shows me that the deceased Garcia
              had a scheming mind and a well-developed instinct of
              self-preservation. It is remarkable only for the fact that amid a
              perfect jungle of possibilities we, with our worthy collaborator,
              the inspector, have kept our close hold on the essentials and so
              been guided along the crooked and winding path. Is there any point
              which is not quite clear to you?”
            </TextNode>

            <TextNode>“The object of the mulatto cook's return?”</TextNode>

            <TextNode>
              “I think that the strange creature in the kitchen may account for
              it. The man was a primitive savage from the backwoods of San
              Pedro, and this was his fetish. When his companion and he had fled
              to some prearranged retreat—already occupied, no doubt by a
              confederate—the companion had persuaded him to leave so
              compromising an article of furniture. But the mulatto's heart was
              with it, and he was driven back to it next day, when, on
              reconnoitering through the window, he found policeman Walters in
              possession. He waited three days longer, and then his piety or his
              superstition drove him to try once more. Inspector Baynes, who,
              with his usual astuteness, had minimized the incident before me,
              had really recognized its importance and had left a trap into
              which the creature walked. Any other point, Watson?”
            </TextNode>

            <TextNode>
              “The torn bird, the pail of blood, the charred bones, all the
              mystery of that weird kitchen?”
            </TextNode>

            <TextNode>
              Holmes smiled as he turned up an entry in his note-book.
            </TextNode>

            <TextNode>
              “I spent a morning in the British Museum reading up on that and
              other points. Here is a quotation from Eckermann's{' '}
              <span className='italic'>
                Voodooism and the Negroid Religions:
              </span>
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “ ‘The true voodoo-worshipper attempts nothing of importance
                without certain sacrifices which are intended to propitiate his
                unclean gods. In extreme cases these rites take the form of
                human sacrifices followed by cannibalism. The more usual victims
                are a white cock, which is plucked in pieces alive, or a black
                goat, whose throat is cut and body burned.’
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “So you see our savage friend was very orthodox in his ritual. It
              is grotesque, Watson,” Holmes added, as he slowly fastened his
              notebook, “but, as I have had occasion to remark, there is but one
              step from the grotesque to the horrible.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page276;

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

function Page173({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;NORWOOD&nbsp;BUILDER'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “From the point of view of the criminal expert,” said Mr. Sherlock
              Holmes, “London has become a singularly uninteresting city since
              the death of the late lamented Professor Moriarty.”
            </TextNode>

            <TextNode>
              “I can hardly think that you would find many decent citizens to
              agree with you,” I answered.
            </TextNode>

            <TextNode>
              “Well, well, I must not be selfish,” said he, with a smile, as he
              pushed back his chair from the breakfast-table. “The community is
              certainly the gainer, and no one the loser, save the poor
              out-of-work specialist, whose occupation has gone. With that man
              in the field one's morning paper presented infinite possibilities.
              Often it was only the smallest trace, Watson, the faintest
              indication, and yet it was enough to tell me that the great
              malignant brain was there, as the gentlest tremors of the edges of
              the web remind one of the foul spider which lurks in the centre.
              Petty thefts, wanton assaults, purposeless outrage—to the man who
              held the clue all could be worked into one connected whole. To the
              scientific student of the higher criminal world no capital in
              Europe offered the advantages which London then possessed. But
              now—” He shrugged his shoulders in humorous deprecation of the
              state of things which he had himself done so much to produce.
            </TextNode>

            <TextNode>
              At the time of which I speak Holmes had been back for some months,
              and I, at his request, had sold my practice and returned to share
              the old quarters in Baker Street. A young doctor, named Verner,
              had purchased my small Kensington practice, and given with
              astonishingly little demur the highest price that I ventured to
              ask—an incident which only explained itself some years later when
              I found that Verner was a distant relation of Holmes's, and that
              it was my friend who had really found the money.
            </TextNode>

            <TextNode>
              Our months of partnership had not been so uneventful as he had
              stated, for I find, on looking over my notes, that this period
              includes the case of the papers of Ex-President Murillo, and also
              the shocking affair of the Dutch steamship{' '}
              <span className='italic'>Friesland</span>, which so nearly cost us
              both our lives. His cold and proud nature was always averse,
              however, to anything in the shape of public applause, and he bound
              me in the most stringent terms to say no further word of himself,
              his methods, or his successes—a prohibition which, as I have
              explained, has only now been removed.
            </TextNode>

            <TextNode>
              Mr. Sherlock Holmes was leaning back in his chair after his
              whimsical protest, and was unfolding his morning paper in a
              leisurely fashion, when our attention was arrested by a tremendous
              ring at the bell, followed immediately by a hollow drumming sound,
              as if someone were beating on the outer door with his fist. As it
              opened there came a tumultuous rush into the hall, rapid feet
              clattered up the stair, and an instant later a wild-eyed and
              frantic young man, pale, dishevelled, and palpitating, burst into
              the room. He looked from one to the other of us, and under our
              gaze of inquiry he became conscious that some apology was needed
              for this unceremonious entry.
            </TextNode>

            <TextNode>
              “I'm sorry, Mr. Holmes,” he cried. “You mustn't blame me. I am
              nearly mad. Mr. Holmes, I am the unhappy John Hector McFarlane.”
            </TextNode>

            <TextNode>
              He made the announcement as if the name alone would explain both
              his visit and its manner; but I could see by my companion's
              unresponsive face that it meant no more to him than to me.
            </TextNode>

            <TextNode>
              “Have a cigarette, Mr. McFarlane,” said he, pushing his case
              across. “I am sure that with your symptoms my friend Dr. Watson
              here would prescribe a sedative. The weather has been so very warm
              these last few days. Now, if you feel a little more composed, I
              should be glad if you would sit down in that chair and tell us
              very slowly and quietly who you are and what it is that you want.
              You mentioned your name as if I should recognise it, but I assure
              you that, beyond the obvious facts that you are a bachelor, a
              solicitor, a Freemason, and an asthmatic, I know nothing whatever
              about you.”
            </TextNode>

            <TextNode>
              Familiar as I was with my friend's methods, it was not difficult
              for me to follow his deductions, and to observe the untidiness of
              attire, the sheaf of legal papers, the watch-charm, and the
              breathing which had prompted them. Our client, however, stared in
              amazement.
            </TextNode>

            <TextNode>
              “Yes, I am all that, Mr. Holmes, and in addition I am the most
              unfortunate man at this moment in London. For Heaven's sake don't
              abandon me, Mr. Holmes! If they come to arrest me before I have
              finished my story, make them give me time so that I may tell you
              the whole truth. I could go to jail happy if I knew that you were
              working for me outside.”
            </TextNode>

            <TextNode>
              “Arrest you!” said Holmes. “This is really most grati—most
              interesting. On what charge do you expect to be arrested?”
            </TextNode>

            <TextNode>
              “Upon the charge of murdering Mr. Jonas Oldacre, of Lower
              Norwood.”
            </TextNode>

            <TextNode>
              My companion's expressive face showed a sympathy which was not, I
              am afraid, entirely unmixed with satisfaction.
            </TextNode>

            <TextNode>
              “Dear me,” said he; “it was only this moment at breakfast that I
              was saying to my friend, Dr. Watson, that sensational cases had
              disappeared out of our papers.”
            </TextNode>

            <TextNode>
              Our visitor stretched forward a quivering hand and picked up
              <span className='italic'>The Daily Telegraph</span>, which still
              lay upon Holmes's knee.
            </TextNode>

            <TextNode>
              “If you had looked at it, sir, you would have seen at a glance
              what the errand is on which I have come to you this morning. I
              feel as if my name and my misfortune must be in every man's
              mouth.” He turned it over to expose the central page. “Here it is,
              and with your permission I will read it to you. Listen to this,
              Mr. Holmes. The head-lines are: ‘Mysterious Affair at Lower
              Norwood. Disappearance of a Well-known Builder. Suspicion of
              Murder and Arson. A Clue to the Criminal.’ That is the clue which
              they are already following, Mr. Holmes, and I know that it leads
              infallibly to me. I have been followed from London Bridge Station,
              and I am sure that they are only waiting for the warrant to arrest
              me. It will break my mother's heart—it will break her heart!” He
              wrung his hands in an agony of apprehension, and swayed backwards
              and forwards in his chair.
            </TextNode>

            <TextNode>
              I looked with interest upon this man, who was accused of being the
              perpetrator of a crime of violence. He was flaxen-haired and
              handsome in a washed-out negative fashion, with frightened blue
              eyes and a clean-shaven face, with a weak, sensitive mouth. His
              age may have been about twenty-seven; his dress and bearing that
              of a gentleman. From the pocket of his light summer overcoat
              protruded the bundle of endorsed papers which proclaimed his
              profession.
            </TextNode>

            <TextNode>
              “We must use what time we have,” said Holmes. “Watson, would you
              have the kindness to take the paper and to read me the paragraph
              in question?”
            </TextNode>

            <TextNode>
              Underneath the vigorous head-lines which our client had quoted I
              read the following suggestive narrative:—
            </TextNode>

            <TextNode>
              “Late last night, or early this morning, an incident occurred at
              Lower Norwood which points, it is feared, to a serious crime. Mr.
              Jonas Oldacre is a well-known resident of that suburb, where he
              has carried on his business as a builder for many years. Mr.
              Oldacre is a bachelor, fifty-two years of age, and lives in Deep
              Dene House, at the Sydenham end of the road of that name. He has
              had the reputation of being a man of eccentric habits, secretive
              and retiring. For some years he has practically withdrawn from the
              business, in which he is said to have amassed considerable wealth.
              A small timber-yard still exists, however, at the back of the
              house, and last night, about twelve o'clock, an alarm was given
              that one of the stacks was on fire. The engines were soon upon the
              spot, but the dry wood burned with great fury, and it was
              impossible to arrest the conflagration until the stack had been
              entirely consumed. Up to this point the incident bore the
              appearance of an ordinary accident, but fresh indications seem to
              point to serious crime. Surprise was expressed at the absence of
              the master of the establishment from the scene of the fire, and an
              inquiry followed, which showed that he had disappeared from the
              house. An examination of his room revealed that the bed had not
              been slept in, that a safe which stood in it was open, that a
              number of important papers were scattered about the room, and,
              finally, that there were signs of a murderous struggle, slight
              traces of blood being found within the room, and an oaken
              walking-stick, which also showed stains of blood upon the handle.
              It is known that Mr. Jonas Oldacre had received a late visitor in
              his bedroom upon that night, and the stick found has been
              identified as the property of this person, who is a young London
              solicitor named John Hector McFarlane, junior partner of Graham
              and McFarlane, of 426, Gresham Buildings, E.C. The police believe
              that they have evidence in their possession which supplies a very
              convincing motive for the crime, and altogether it cannot be
              doubted that sensational developments will follow.
            </TextNode>
            <TextNode>
              “Later.—It is rumoured as we go to press that Mr. John Hector
              McFarlane has actually been arrested on the charge of the murder
              of Mr. Jonas Oldacre. It is at least certain that a warrant has
              been issued. There have been further and sinister developments in
              the investigation at Norwood. Besides the signs of a struggle in
              the room of the unfortunate builder it is now known that the
              French windows of his bedroom (which is on the ground floor) were
              found to be open, that there were marks as if some bulky object
              had been dragged across to the wood-pile, and, finally, it is
              asserted that charred remains have been found among the charcoal
              ashes of the fire. The police theory is that a most sensational
              crime has been committed, that the victim was clubbed to death in
              his own bedroom, his papers rifled, and his dead body dragged
              across to the wood-stack, which was then ignited so as to hide all
              traces of the crime. The conduct of the criminal investigation has
              been left in the experienced hands of Inspector Lestrade, of
              Scotland Yard, who is following up the clues with his accustomed
              energy and sagacity.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              Sherlock Holmes listened with closed eyes and finger-tips together
              to this remarkable account.
            </TextNode>

            <TextNode>
              “The case has certainly some points of interest,” said he, in his
              languid fashion. “May I ask, in the first place, Mr. McFarlane,
              how it is that you are still at liberty, since there appears to be
              enough evidence to justify your arrest?”
            </TextNode>

            <TextNode>
              “I live at Torrington Lodge, Blackheath, with my parents, Mr.
              Holmes; but last night, having to do business very late with Mr.
              Jonas Oldacre, I stayed at an hotel in Norwood, and came to my
              business from there. I knew nothing of this affair until I was in
              the train, when I read what you have just heard. I at once saw the
              horrible danger of my position, and I hurried to put the case into
              your hands. I have no doubt that I should have been arrested
              either at my City office or at my home. A man followed me from
              London Bridge Station, and I have no doubt—Great Heaven, what is
              that?”
            </TextNode>

            <TextNode>
              It was a clang of the bell, followed instantly by heavy steps upon
              the stair. A moment later our old friend Lestrade appeared in the
              doorway. Over his shoulder I caught a glimpse of one or two
              uniformed policemen outside.
            </TextNode>

            <TextNode>“Mr. John Hector McFarlane?” said Lestrade.</TextNode>

            <TextNode>
              Our unfortunate client rose with a ghastly face.
            </TextNode>

            <TextNode>
              “I arrest you for the wilful murder of Mr. Jonas Oldacre, of Lower
              Norwood.”
            </TextNode>

            <TextNode>
              McFarlane turned to us with a gesture of despair, and sank into
              his chair once more like one who is crushed.
            </TextNode>

            <TextNode>
              “One moment, Lestrade,” said Holmes. “Half an hour more or less
              can make no difference to you, and the gentleman was about to give
              us an account of this very interesting affair, which might aid us
              in clearing it up.”
            </TextNode>

            <TextNode>
              “I think there will be no difficulty in clearing it up,” said
              Lestrade, grimly.
            </TextNode>

            <TextNode>
              “None the less, with your permission, I should be much interested
              to hear his account.”
            </TextNode>

            <TextNode>
              “Well, Mr. Holmes, it is difficult for me to refuse you anything,
              for you have been of use to the force once or twice in the past,
              and we owe you a good turn at Scotland Yard,” said Lestrade. “At
              the same time I must remain with my prisoner, and I am bound to
              warn him that anything he may say will appear in evidence against
              him.”
            </TextNode>

            <TextNode>
              “I wish nothing better,” said our client. “All I ask is that you
              should hear and recognise the absolute truth.”
            </TextNode>

            <TextNode>
              Lestrade looked at his watch. “I'll give you half an hour,” said
              he.
            </TextNode>

            <TextNode>
              “I must explain first,” said McFarlane, “that I knew nothing of
              Mr. Jonas Oldacre. His name was familiar to me, for many years ago
              my parents were acquainted with him, but they drifted apart. I was
              very much surprised, therefore, when yesterday, about three
              o'clock in the afternoon, he walked into my office in the City.
              But I was still more astonished when he told me the object of his
              visit. He had in his hand several sheets of a note-book, covered
              with scribbled writing—here they are—and he laid them on my table.
            </TextNode>

            <TextNode>
              “ ‘Here is my will,’ said he. ‘I want you, Mr. McFarlane, to cast
              it into proper legal shape. I will sit here while you do so.’
            </TextNode>

            <TextNode>
              “I set myself to copy it, and you can imagine my astonishment when
              I found that, with some reservations, he had left all his property
              to me. He was a strange little, ferret-like man, with white
              eyelashes, and when I looked up at him I found his keen grey eyes
              fixed upon me with an amused expression. I could hardly believe my
              own senses as I read the terms of the will; but he explained that
              he was a bachelor with hardly any living relation, that he had
              known my parents in his youth, and that he had always heard of me
              as a very deserving young man, and was assured that his money
              would be in worthy hands. Of course, I could only stammer out my
              thanks. The will was duly finished, signed, and witnessed by my
              clerk. This is it on the blue paper, and these slips, as I have
              explained, are the rough draft. Mr. Jonas Oldacre then informed me
              that there were a number of documents—building leases,
              title-deeds, mortgages, scrip, and so forth—which it was necessary
              that I should see and understand. He said that his mind would not
              be easy until the whole thing was settled, and he begged me to
              come out to his house at Norwood that night, bringing the will
              with me, and to arrange matters. ‘Remember, my boy, not one word
              to your parents about the affair until everything is settled. We
              will keep it as a little surprise for them.’ He was very insistent
              upon this point, and made me promise it faithfully.
            </TextNode>

            <TextNode>
              “You can imagine, Mr. Holmes, that I was not in a humour to refuse
              him anything that he might ask. He was my benefactor, and all my
              desire was to carry out his wishes in every particular. I sent a
              telegram home, therefore, to say that I had important business on
              hand, and that it was impossible for me to say how late I might
              be. Mr. Oldacre had told me that he would like me to have supper
              with him at nine, as he might not be home before that hour. I had
              some difficulty in finding his house, however, and it was nearly
              half-past before I reached it. I found him—”
            </TextNode>

            <TextNode>
              “One moment!” said Holmes. “Who opened the door?”
            </TextNode>

            <TextNode>
              “A middle-aged woman, who was, I suppose, his housekeeper.”
            </TextNode>

            <TextNode>
              “And it was she, I presume, who mentioned your name?”
            </TextNode>

            <TextNode>“Exactly,” said McFarlane.</TextNode>

            <TextNode>“Pray proceed.”</TextNode>

            <TextNode>
              McFarlane wiped his damp brow and then continued his narrative:—
            </TextNode>

            <TextNode>
              “I was shown by this woman into a sitting-room, where a frugal
              supper was laid out. Afterwards Mr. Jonas Oldacre led me into his
              bedroom, in which there stood a heavy safe. This he opened and
              took out a mass of documents, which we went over together. It was
              between eleven and twelve when we finished. He remarked that we
              must not disturb the housekeeper. He showed me out through his own
              French window, which had been open all this time.”
            </TextNode>

            <TextNode>“Was the blind down?” asked Holmes.</TextNode>

            <TextNode>
              “I will not be sure, but I believe that it was only half down.
              Yes, I remember how he pulled it up in order to swing open the
              window. I could not find my stick, and he said, ‘Never mind, my
              boy; I shall see a good deal of you now, I hope, and I will keep
              your stick until you come back to claim it.’ I left him there, the
              safe open, and the papers made up in packets upon the table. It
              was so late that I could not get back to Blackheath, so I spent
              the night at the Anerley Arms, and I knew nothing more until I
              read of this horrible affair in the morning.”
            </TextNode>

            <TextNode>
              “Anything more that you would like to ask, Mr. Holmes?” said
              Lestrade, whose eyebrows had gone up once or twice during this
              remarkable explanation.
            </TextNode>

            <TextNode>“Not until I have been to Blackheath.”</TextNode>

            <TextNode>“You mean to Norwood,” said Lestrade.</TextNode>

            <TextNode>
              “Oh, yes; no doubt that is what I must have meant,” said Holmes,
              with his enigmatical smile. Lestrade had learned by more
              experiences than he would care to acknowledge that that razor-like
              brain could cut through that which was impenetrable to him. I saw
              him look curiously at my companion.
            </TextNode>

            <TextNode>
              “I think I should like to have a word with you presently, Mr.
              Sherlock Holmes,” said he. “Now, Mr. McFarlane, two of my
              constables are at the door and there is a four-wheeler waiting.”
              The wretched young man arose, and with a last beseeching glance at
              us walked from the room. The officers conducted him to the cab,
              but Lestrade remained.
            </TextNode>

            <TextNode>
              Holmes had picked up the pages which formed the rough draft of the
              will, and was looking at them with the keenest interest upon his
              face.
            </TextNode>

            <TextNode>
              “There are some points about that document, Lestrade, are there
              not?” said he, pushing them over.
            </TextNode>

            <TextNode>
              The official looked at them with a puzzled expression.
            </TextNode>

            <TextNode>
              “I can read the first few lines, and these in the middle of the
              second page, and one or two at the end. Those are as clear as
              print,” said he; “but the writing in between is very bad, and
              there are three places where I cannot read it at all.”
            </TextNode>

            <TextNode>“What do you make of that?” said Holmes.</TextNode>

            <TextNode>“Well, what do you make of it?”</TextNode>

            <TextNode>
              “That it was written in a train; the good writing represents
              stations, the bad writing movement, and the very bad writing
              passing over points. A scientific expert would pronounce at once
              that this was drawn up on a suburban line, since nowhere save in
              the immediate vicinity of a great city could there be so quick a
              succession of points. Granting that his whole journey was occupied
              in drawing up the will, then the train was an express, only
              stopping once between Norwood and London Bridge.”
            </TextNode>

            <TextNode>Lestrade began to laugh.</TextNode>

            <TextNode>
              “You are too many for me when you begin to get on your theories,
              Mr. Holmes,” said he. “How does this bear on the case?”
            </TextNode>

            <TextNode>
              “Well, it corroborates the young man's story to the extent that
              the will was drawn up by Jonas Oldacre in his journey yesterday.
              It is curious—is it not?—that a man should draw up so important a
              document in so haphazard a fashion. It suggests that he did not
              think it was going to be of much practical importance. If a man
              drew up a will which he did not intend ever to be effective he
              might do it so.”
            </TextNode>

            <TextNode>
              “Well, he drew up his own death-warrant at the same time,” said
              Lestrade.
            </TextNode>

            <TextNode>“Oh, you think so?”</TextNode>

            <TextNode>“Don't you?”</TextNode>

            <TextNode>
              “Well, it is quite possible; but the case is not clear to me yet.”
            </TextNode>

            <TextNode>
              “Not clear? Well, if that isn't clear, what could be clear? Here
              is a young man who learns suddenly that if a certain older man
              dies he will succeed to a fortune. What does he do? He says
              nothing to anyone, but he arranges that he shall go out on some
              pretext to see his client that night; he waits until the only
              other person in the house is in bed, and then in the solitude of a
              man's room he murders him, burns his body in the wood-pile, and
              departs to a neighbouring hotel. The blood-stains in the room and
              also on the stick are very slight. It is probable that he imagined
              his crime to be a bloodless one, and hoped that if the body were
              consumed it would hide all traces of the method of his
              death—traces which for some reason must have pointed to him. Is
              all this not obvious?”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page173;

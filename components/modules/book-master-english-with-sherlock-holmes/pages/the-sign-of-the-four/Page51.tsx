'use client';

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Page from '@/components/elements/book-master-english-with-sherlock-holmes/Page';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/book-master-english-with-sherlock-holmes/main';
import { useBookVersion } from '@/context/book-version/Context';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { BookVersion } from '@/types/book-version';
import { ReactElement, useRef } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page51({
  pageNumber,
  hidePageNumber,
  viewportHeight,
}: PageProps): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: pageNumber,
    basePath,
  });

  return (
    <Page
      id={`page-${pageNumber}`}
      viewportHeight={viewportHeight}
      className='mb-5'
      ref={sectionRef}
    >
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE SIGN OF THE FOUR'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“What would you do, then?”</TextNode>

            <TextNode>
              “I would engage a launch and go down the river on the track of
              the&nbsp;
              <span className='italic'>Aurora</span>.”
            </TextNode>

            <TextNode>
              “My dear fellow, it would be a colossal task. She may have touched
              at any wharf on either side of the stream between here and
              Greenwich. Below the bridge there is a perfect labyrinth of
              landing-places for miles. It would take you days and days to
              exhaust them, if you set about it alone.”
            </TextNode>

            <TextNode>“Employ the police, then.”</TextNode>

            <TextNode>
              “No. I shall probably call Athelney Jones in at the last moment.
              He is not a bad fellow, and I should not like to do anything which
              would injure him professionally. But I have a fancy for working it
              out myself, now that we have gone so far.”
            </TextNode>

            <TextNode>
              “Could we advertise, then, asking for information from
              wharfingers?”
            </TextNode>

            <TextNode>
              “Worse and worse! Our men would know that the chase was hot at
              their heels, and they would be off out of the country. As it is,
              they are likely enough to leave, but as long as they think they
              are perfectly safe they will be in no hurry. Jones's energy will
              be of use to us there, for his view of the case is sure to push
              itself into the daily press, and the runaways will think that
              every one is off on the wrong scent.”
            </TextNode>

            <TextNode>
              “What are we to do, then?” I asked, as we landed near Millbank
              Penitentiary.
            </TextNode>

            <TextNode>
              “Take this hansom, drive home, have some breakfast, and get an
              hour's sleep. It is quite on the cards that we may be afoot
              to-night again. Stop at a telegraph-office, cabby! We will keep
              Toby, for he may be of use to us yet.”
            </TextNode>

            <TextNode>
              We pulled up at the Great Peter Street post-office, and Holmes
              despatched his wire. “Whom do you think that is to?” he asked, as
              we resumed our journey.
            </TextNode>

            <TextNode>“I am sure I don't know.”</TextNode>

            <TextNode>
              “You remember the Baker Street division of the detective police
              force whom I employed in the Jefferson Hope case?”
            </TextNode>

            <TextNode>“Well,” said I, laughing.</TextNode>

            <TextNode>
              “This is just the case where they might be invaluable. If they
              fail, I have other resources; but I shall try them first. That
              wire was to my dirty little lieutenant, Wiggins, and I expect that
              he and his gang will be with us before we have finished our
              breakfast.”
            </TextNode>

            <TextNode>
              It was between eight and nine o'clock now, and I was conscious of
              a strong reaction after the successive excitements of the night. I
              was limp and weary, befogged in mind and fatigued in body. I had
              not the professional enthusiasm which carried my companion on, nor
              could I look at the matter as a mere abstract intellectual
              problem. As far as the death of Bartholomew Sholto went, I had
              heard little good of him, and could feel no intense antipathy to
              his murderers. The treasure, however, was a different matter.
              That, or part of it, belonged rightfully to Miss Morstan. While
              there was a chance of recovering it I was ready to devote my life
              to the one object. True, if I found it it would probably put her
              forever beyond my reach. Yet it would be a petty and selfish love
              which would be influenced by such a thought as that. If Holmes
              could work to find the criminals, I had a tenfold stronger reason
              to urge me on to find the treasure.
            </TextNode>

            <TextNode>
              A bath at Baker Street and a complete change freshened me up
              wonderfully. When I came down to our room I found the breakfast
              laid and Holmes pouring out the coffee.
            </TextNode>

            <TextNode>
              “Here it is,” said he, laughing, and pointing to an open
              newspaper. “The energetic Jones and the ubiquitous reporter have
              fixed it up between them. But you have had enough of the case.
              Better have your ham and eggs first.”
            </TextNode>

            <TextNode>
              I took the paper from him and read the short notice, which was
              headed “Mysterious Business at Upper Norwood.”
            </TextNode>

            <TextNode>
              “About twelve o'clock last night,” said the&nbsp;
              <span className='italic'>Standard</span>, “Mr. Bartholomew Sholto,
              of Pondicherry Lodge, Upper Norwood, was found dead in his room
              under circumstances which point to foul play. As far as we can
              learn, no actual traces of violence were found upon Mr. Sholto's
              person, but a valuable collection of Indian gems which the
              deceased gentleman had inherited from his father has been carried
              off. The discovery was first made by Mr. Sherlock Holmes and Dr.
              Watson, who had called at the house with Mr. Thaddeus Sholto,
              brother of the deceased. By a singular piece of good fortune, Mr.
              Athelney Jones, the well-known member of the detective police
              force, happened to be at the Norwood Police Station, and was on
              the ground within half an hour of the first alarm. His trained and
              experienced faculties were at once directed towards the detection
              of the criminals, with the gratifying result that the brother,
              Thaddeus Sholto, has already been arrested, together with the
              housekeeper, Mrs. Bernstone, an Indian butler named Lal Rao, and a
              porter, or gatekeeper, named McMurdo. It is quite certain that the
              thief or thieves were well acquainted with the house, for Mr.
              Jones's well-known technical knowledge and his powers of minute
              observation have enabled him to prove conclusively that the
              miscreants could not have entered by the door or by the window,
              but must have made their way across the roof of the building, and
              so through a trap-door into a room which communicated with that in
              which the body was found. This fact, which has been very clearly
              made out, proves conclusively that it was no mere haphazard
              burglary. The prompt and energetic action of the officers of the
              law shows the great advantage of the presence on such occasions of
              a single vigorous and masterful mind. We cannot but think that it
              supplies an argument to those who would wish to see our detectives
              more decentralized, and so brought into closer and more effective
              touch with the cases which it is their duty to investigate.”
            </TextNode>

            <TextNode>
              “Isn't it gorgeous!” said Holmes, grinning over his coffee-cup.
              “What do you think of it?”
            </TextNode>

            <TextNode>
              “I think that we have had a close shave ourselves of being
              arrested for the crime.”
            </TextNode>

            <TextNode>
              “So do I. I wouldn't answer for our safety now, if he should
              happen to have another of his attacks of energy.”
            </TextNode>

            <TextNode>
              At this moment there was a loud ring at the bell, and I could hear
              Mrs. Hudson, our landlady, raising her voice in a wail of
              expostulation and dismay.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “By heaven, Holmes,” I said, half rising, “I believe that they are
              really after us.”
            </TextNode>

            <TextNode>
              “No, it's not quite so bad as that. It is the unofficial
              force,—the Baker Street irregulars.”
            </TextNode>

            <TextNode>
              As he spoke, there came a swift pattering of naked feet upon the
              stairs, a clatter of high voices, and in rushed a dozen dirty and
              ragged little street-Arabs. There was some show of discipline
              among them, despite their tumultuous entry, for they instantly
              drew up in line and stood facing us with expectant faces. One of
              their number, taller and older than the others, stood forward with
              an air of lounging superiority which was very funny in such a
              disreputable little carecrow.
            </TextNode>

            <TextNode>
              “Got your message, sir,” said he, “and brought 'em on sharp. Three
              bob and a tanner for tickets.”
            </TextNode>

            <TextNode>
              “Here you are,” said Holmes, producing some silver. “In future
              they can report to you, Wiggins, and you to me. I cannot have the
              house invaded in this way. However, it is just as well that you
              should all hear the instructions. I want to find the whereabouts
              of a steam launch called the&nbsp;
              <span className='italic'>Aurora</span>, owner Mordecai Smith,
              black with two red streaks, funnel black with a white band. She is
              down the river somewhere. I want one boy to be at Mordecai Smith's
              landing-stage opposite Millbank to say if the boat comes back. You
              must divide it out among yourselves, and do both banks thoroughly.
              Let me know the moment you have news. Is that all clear?”
            </TextNode>

            <TextNode>“Yes, guv'nor,” said Wiggins.</TextNode>

            <TextNode>
              “The old scale of pay, and a guinea to the boy who finds the boat.
              Here's a day in advance. Now off you go!” He handed them a
              shilling each, and away they buzzed down the stairs, and I saw
              them a moment later streaming down the street.
            </TextNode>

            <TextNode>
              “If the launch is above water they will find her,” said Holmes, as
              he rose from the table and lit his pipe. “They can go everywhere,
              see everything, overhear every one. I expect to hear before
              evening that they have spotted her. In the mean while, we can do
              nothing but await results. We cannot pick up the broken trail
              until we find either the&nbsp;
              <span className='italic'>Aurora</span> or Mr. Mordecai Smith.”
            </TextNode>

            <TextNode>
              “Toby could eat these scraps, I dare say. Are you going to bed,
              Holmes?”
            </TextNode>

            <TextNode>
              “No: I am not tired. I have a curious constitution. I never
              remember feeling tired by work, though idleness exhausts me
              completely. I am going to smoke and to think over this queer
              business to which my fair client has introduced us. If ever man
              had an easy task, this of ours ought to be. Wooden-legged men are
              not so common, but the other man must, I should think, be
              absolutely unique.”
            </TextNode>

            <TextNode>“That other man again!”</TextNode>

            <TextNode>
              “I have no wish to make a mystery of him,—to you, anyway. But you
              must have formed your own opinion. Now, do consider the data.
              Diminutive footmarks, toes never fettered by boots, naked feet,
              stone-headed wooden mace, great agility, small poisoned darts.
              What do you make of all this?”
            </TextNode>

            <TextNode>
              “A savage!” I exclaimed. “Perhaps one of those Indians who were
              the associates of Jonathan Small.”
            </TextNode>

            <TextNode>
              “Hardly that,” said he. “When first I saw signs of strange weapons
              I was inclined to think so; but the remarkable character of the
              footmarks caused me to reconsider my views. Some of the
              inhabitants of the Indian Peninsula are small men, but none could
              have left such marks as that. The Hindoo proper has long and thin
              feet. The sandal-wearing Mohammedan has the great toe well
              separated from the others, because the thong is commonly passed
              between. These little darts, too, could only be shot in one way.
              They are from a blow-pipe. Now, then, where are we to find our
              savage?”
            </TextNode>

            <TextNode>“South American,” I hazarded.</TextNode>

            <TextNode>
              He stretched his hand up, and took down a bulky volume from the
              shelf. “This is the first volume of a gazetteer which is now being
              published. It may be looked upon as the very latest authority.
              What have we here? ‘Andaman Islands, situated 340 miles to the
              north of Sumatra, in the Bay of Bengal.’ Hum! hum! What's all
              this? Moist climate, coral reefs, sharks, Port Blair,
              convict-barracks, Rutland Island, cottonwoods—Ah, here we are.
              ‘The aborigines of the Andaman Islands may perhaps claim the
              distinction of being the smallest race upon this earth, though
              some anthropologists prefer the Bushmen of Africa, the Digger
              Indians of America, and the Terra del Fuegians. The average height
              is rather below four feet, although many full-grown adults may be
              found who are very much smaller than this. They are a fierce,
              morose, and intractable people, though capable of forming most
              devoted friendships when their confidence has once been gained.’
              Mark that, Watson. Now, then, listen to this. ‘They are naturally
              hideous, having large, misshapen heads, small, fierce eyes, and
              distorted features. Their feet and hands, however, are remarkably
              small. So intractable and fierce are they that all the efforts of
              the British official have failed to win them over in any degree.
              They have always been a terror to shipwrecked crews, braining the
              survivors with their stone-headed clubs, or shooting them with
              their poisoned arrows. These massacres are invariably concluded by
              a cannibal feast.’ Nice, amiable people, Watson! If this fellow
              had been left to his own unaided devices this affair might have
              taken an even more ghastly turn. I fancy that, even as it is,
              Jonathan Small would give a good deal not to have employed him.”
            </TextNode>

            <TextNode>
              “But how came he to have so singular a companion?”
            </TextNode>

            <TextNode>
              “Ah, that is more than I can tell. Since, however, we had already
              determined that Small had come from the Andamans, it is not so
              very wonderful that this islander should be with him. No doubt we
              shall know all about it in time. Look here, Watson; you look
              regularly done. Lie down there on the sofa, and see if I can put
              you to sleep.”
            </TextNode>

            <TextNode>
              He took up his violin from the corner, and as I stretched myself
              out he began to play some low, dreamy, melodious air,—his own, no
              doubt, for he had a remarkable gift for improvisation. I have a
              vague remembrance of his gaunt limbs, his earnest face, and the
              rise and fall of his bow. Then I seemed to be floated peacefully
              away upon a soft sea of sound, until I found myself in dream-land,
              with the sweet face of Mary Morstan looking down upon me.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page51;

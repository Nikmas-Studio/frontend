import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page47({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE SIGN OF THE FOUR'
      />
      <BookMainContainer>
        <H4>
          Chapter VII.
          <br />
          The Episode of the Barrel
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              The police had brought a cab with them, and in this I escorted
              Miss Morstan back to her home. After the angelic fashion of women,
              she had borne trouble with a calm face as long as there was some
              one weaker than herself to support, and I had found her bright and
              placid by the side of the frightened housekeeper. In the cab,
              however, she first turned faint, and then burst into a passion of
              weeping,—so sorely had she been tried by the adventures of the
              night. She has told me since that she thought me cold and distant
              upon that journey. She little guessed the struggle within my
              breast, or the effort of self-restraint which held me back. My
              sympathies and my love went out to her, even as my hand had in the
              garden. I felt that years of the conventionalities of life could
              not teach me to know her sweet, brave nature as had this one day
              of strange experiences. Yet there were two thoughts which sealed
              the words of affection upon my lips. She was weak and helpless,
              shaken in mind and nerve. It was to take her at a disadvantage to
              obtrude love upon her at such a time. Worse still, she was rich.
              If Holmes's researches were successful, she would be an heiress.
              Was it fair, was it honorable, that a half-pay surgeon should take
              such advantage of an intimacy which chance had brought about?
              Might she not look upon me as a mere vulgar fortune-seeker? I
              could not bear to risk that such a thought should cross her mind.
              This Agra treasure intervened like an impassable barrier between
              us.
            </TextNode>

            <TextNode>
              It was nearly two o'clock when we reached Mrs. Cecil Forrester's.
              The servants had retired hours ago, but Mrs. Forrester had been so
              interested by the strange message which Miss Morstan had received
              that she had sat up in the hope of her return. She opened the door
              herself, a middle-aged, graceful woman, and it gave me joy to see
              how tenderly her arm stole round the other's waist and how
              motherly was the voice in which she greeted her. She was clearly
              no mere paid dependant, but an honored friend. I was introduced,
              and Mrs. Forrester earnestly begged me to step in and tell her our
              adventures. I explained, however, the importance of my errand, and
              promised faithfully to call and report any progress which we might
              make with the case. As we drove away I stole a glance back, and I
              still seem to see that little group on the step, the two graceful,
              clinging figures, the half-opened door, the hall light shining
              through stained glass, the barometer, and the bright stair-rods.
              It was soothing to catch even that passing glimpse of a tranquil
              English home in the midst of the wild, dark business which had
              absorbed us.
            </TextNode>

            <TextNode>
              And the more I thought of what had happened, the wilder and darker
              it grew. I reviewed the whole extraordinary sequence of events as
              I rattled on through the silent gas-lit streets. There was the
              original problem: that at least was pretty clear now. The death of
              Captain Morstan, the sending of the pearls, the advertisement, the
              letter,—we had had light upon all those events. They had only led
              us, however, to a deeper and far more tragic mystery. The Indian
              treasure, the curious plan found among Morstan's baggage, the
              strange scene at Major Sholto's death, the rediscovery of the
              treasure immediately followed by the murder of the discoverer, the
              very singular accompaniments to the crime, the footsteps, the
              remarkable weapons, the words upon the card, corresponding with
              those upon Captain Morstan's chart,—here was indeed a labyrinth in
              which a man less singularly endowed than my fellow-lodger might
              well despair of ever finding the clue.
            </TextNode>

            <TextNode>
              Pinchin Lane was a row of shabby two-storied brick houses in the
              lower quarter of Lambeth. I had to knock for some time at No. 3
              before I could make my impression. At last, however, there was the
              glint of a candle behind the blind, and a face looked out at the
              upper window.
            </TextNode>

            <TextNode>
              “Go on, you drunken vagabone,” said the face. “If you kick up any
              more row I'll open the kennels and let out forty-three dogs upon
              you.”
            </TextNode>

            <TextNode>
              “If you'll let one out it's just what I have come for,” said I.
            </TextNode>

            <TextNode>
              “Go on!” yelled the voice. “So help me gracious, I have a wiper in
              the bag, an' I'll drop it on your 'ead if you don't hook it.”
            </TextNode>

            <TextNode>“But I want a dog,” I cried.</TextNode>

            <TextNode>
              “I won't be argued with!” shouted Mr. Sherman. “Now stand clear,
              for when I say ‘three,’ down goes the wiper.”
            </TextNode>

            <TextNode>
              “Mr. Sherlock Holmes—” I began, but the words had a most magical
              effect, for the window instantly slammed down, and within a minute
              the door was unbarred and open. Mr. Sherman was a lanky, lean old
              man, with stooping shoulders, a stringy neck, and blue-tinted
              glasses.
            </TextNode>

            <TextNode>
              “A friend of Mr. Sherlock is always welcome,” said he. “Step in,
              sir. Keep clear of the badger; for he bites. Ah, naughty, naughty,
              would you take a nip at the gentleman?” This to a stoat which
              thrust its wicked head and red eyes between the bars of its cage.
              “Don't mind that, sir: it's only a slow-worm. It hain't got no
              fangs, so I gives it the run o' the room, for it keeps the bettles
              down. You must not mind my bein' just a little short wi' you at
              first, for I'm guyed at by the children, and there's many a one
              just comes down this lane to knock me up. What was it that Mr.
              Sherlock Holmes wanted, sir?”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“He wanted a dog of yours.”</TextNode>

            <TextNode>“Ah! that would be Toby.”</TextNode>

            <TextNode>“Yes, Toby was the name.”</TextNode>

            <TextNode>
              “Toby lives at No. 7 on the left here.” He moved slowly forward
              with his candle among the queer animal family which he had
              gathered round him. In the uncertain, shadowy light I could see
              dimly that there were glancing, glimmering eyes peeping down at us
              from every cranny and corner. Even the rafters above our heads
              were lined by solemn fowls, who lazily shifted their weight from
              one leg to the other as our voices disturbed their slumbers.
            </TextNode>

            <TextNode>
              Toby proved to an ugly, long-haired, lop-eared creature, half
              spaniel and half lurcher, brown-and-white in color, with a very
              clumsy waddling gait. It accepted after some hesitation a lump of
              sugar which the old naturalist handed to me, and, having thus
              sealed an alliance, it followed me to the cab, and made no
              difficulties about accompanying me. It had just struck three on
              the Palace clock when I found myself back once more at Pondicherry
              Lodge. The ex-prize-fighter McMurdo had, I found, been arrested as
              an accessory, and both he and Mr. Sholto had been marched off to
              the station. Two constables guarded the narrow gate, but they
              allowed me to pass with the dog on my mentioning the detective's
              name.
            </TextNode>

            <TextNode>
              Holmes was standing on the door-step, with his hands in his
              pockets, smoking his pipe.
            </TextNode>

            <TextNode>
              “Ah, you have him there!” said he. “Good dog, then! Athelney Jones
              has gone. We have had an immense display of energy since you left.
              He has arrested not only friend Thaddeus, but the gatekeeper, the
              housekeeper, and the Indian servant. We have the place to
              ourselves, but for a sergeant up-stairs. Leave the dog here, and
              come up.”
            </TextNode>

            <TextNode>
              We tied Toby to the hall table, and reascended the stairs. The
              room was as we had left it, save that a sheet had been draped over
              the central figure. A weary-looking police-sergeant reclined in
              the corner.
            </TextNode>

            <TextNode>
              “Lend me your bull's-eye, sergeant,” said my companion. “Now tie
              this bit of card round my neck, so as to hang it in front of me.
              Thank you. Now I must kick off my boots and stockings.—Just you
              carry them down with you, Watson. I am going to do a little
              climbing. And dip my handkerchief into the creasote. That will do.
              Now come up into the garret with me for a moment.”
            </TextNode>

            <TextNode>
              We clambered up through the hole. Holmes turned his light once
              more upon the footsteps in the dust.
            </TextNode>

            <TextNode>
              “I wish you particularly to notice these footmarks,” he said. “Do
              you observe anything noteworthy about them?”
            </TextNode>

            <TextNode>
              “They belong,” I said, “to a child or a small woman.”
            </TextNode>

            <TextNode>
              “Apart from their size, though. Is there nothing else?”
            </TextNode>

            <TextNode>“They appear to be much as other footmarks.”</TextNode>

            <TextNode>
              “Not at all. Look here! This is the print of a right foot in the
              dust. Now I make one with my naked foot beside it. What is the
              chief difference?”
            </TextNode>

            <TextNode>
              “Your toes are all cramped together. The other print has each toe
              distinctly divided.”
            </TextNode>

            <TextNode>
              “Quite so. That is the point. Bear that in mind. Now, would you
              kindly step over to that flap-window and smell the edge of the
              wood-work? I shall stay here, as I have this handkerchief in my
              hand.”
            </TextNode>

            <TextNode>
              I did as he directed, and was instantly conscious of a strong
              tarry smell.
            </TextNode>

            <TextNode>
              “That is where he put his foot in getting out. If you can trace
              him, I should think that Toby will have no difficulty. Now run
              down-stairs, loose the dog, and look out for Blondin.”
            </TextNode>

            <TextNode>
              By the time that I got out into the grounds Sherlock Holmes was on
              the roof, and I could see him like an enormous glow-worm crawling
              very slowly along the ridge. I lost sight of him behind a stack of
              chimneys, but he presently reappeared, and then vanished once more
              upon the opposite side. When I made my way round there I found him
              seated at one of the corner eaves.
            </TextNode>

            <TextNode>“That You, Watson?” he cried.</TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>
              “This is the place. What is that black thing down there?”
            </TextNode>

            <TextNode>“A water-barrel.”</TextNode>

            <TextNode>“Top on it?”</TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>“No sign of a ladder?”</TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>
              “Confound the fellow! It's a most break-neck place. I ought to be
              able to come down where he could climb up. The water-pipe feels
              pretty firm. Here goes, anyhow.”
            </TextNode>

            <TextNode>
              There was a scuffling of feet, and the lantern began to come
              steadily down the side of the wall. Then with a light spring he
              came on to the barrel, and from there to the earth.
            </TextNode>

            <TextNode>
              “It was easy to follow him,” he said, drawing on his stockings and
              boots. “Tiles were loosened the whole way along, and in his hurry
              he had dropped this. It confirms my diagnosis, as you doctors
              express it.”
            </TextNode>

            <TextNode>
              The object which he held up to me was a small pocket or pouch
              woven out of colored grasses and with a few tawdry beads strung
              round it. In shape and size it was not unlike a cigarette-case.
              Inside were half a dozen spines of dark wood, sharp at one end and
              rounded at the other, like that which had struck Bartholomew
              Sholto.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page47;

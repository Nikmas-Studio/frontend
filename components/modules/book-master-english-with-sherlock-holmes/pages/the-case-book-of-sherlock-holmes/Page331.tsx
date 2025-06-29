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

function Page330({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;CREEPING&nbsp;MAN'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“Then what on earth are we to do?”</TextNode>

            <TextNode>
              “A little patience, Mr. Bennett. Things will soon develop. Unless
              I am mistaken, next Tuesday may mark a crisis. Certainly we shall
              be in Camford on that day. Meanwhile, the general position is
              undeniably unpleasant, and if Miss Presbury can prolong her
              visit—”
            </TextNode>

            <TextNode>“That is easy.”</TextNode>

            <TextNode>
              “Then let her stay till we can assure her that all danger is past.
              Meanwhile, let him have his way and do not cross him. So long as
              he is in a good humour all is well.”
            </TextNode>

            <TextNode>
              “There he is!” said Bennett in a startled whisper. Looking between
              the branches we saw the tall, erect figure emerge from the hall
              door and look around him. He stood leaning forward, his hands
              swinging straight before him, his head turning from side to side.
              The secretary with a last wave slipped off among the trees, and we
              saw him presently rejoin his employer, the two entering the house
              together in what seemed to be animated and even excited
              conversation.
            </TextNode>

            <TextNode>
              “I expect the old gentleman has been putting two and two
              together,” said Holmes as we walked hotelward. “He struck me as
              having a particularly clear and logical brain from the little I
              saw of him. Explosive, no doubt, but then from his point of view
              he has something to explode about if detectives are put on his
              track and he suspects his own household of doing it. I rather
              fancy that friend Bennett is in for an uncomfortable time.”
            </TextNode>

            <TextNode>
              Holmes stopped at a post-office and sent off a telegram on our
              way. The answer reached us in the evening, and he tossed it across
              to me.
            </TextNode>

            <Indent>
              <TextNode noIndent>
                Have visited the Commercial Road and seen Dorak. Suave person,
                Bohemian, elderly. Keeps large general store.
              </TextNode>

              <TextNode noIndent className='italic'>
                — Mercer.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “Mercer is since your time,” said Holmes. “He is my general
              utility man who looks up routine business. It was important to
              know something of the man with whom our professor was so secretly
              corresponding. His nationality connects up with the Prague visit.”
            </TextNode>

            <TextNode>
              “Thank goodness that something connects with something,” said I.
              “At present we seem to be faced by a long series of inexplicable
              incidents with no bearing upon each other. For example, what
              possible connection can there be between an angry wolfhound and a
              visit to Bohemia, or either of them with a man crawling down a
              passage at night? As to your dates, that is the biggest
              mystification of all.”
            </TextNode>

            <TextNode>
              Holmes smiled and rubbed his hands. We were, I may say, seated in
              the old sitting-room of the ancient hotel, with a bottle of the
              famous vintage of which Holmes had spoken on the table between us.
            </TextNode>

            <TextNode>
              “Well, now, let us take the dates first,” said he, his finger-tips
              together and his manner as if he were addressing a class. “This
              excellent young man's diary shows that there was trouble upon July
              2d, and from then onward it seems to have been at nine-day
              intervals, with, so far as I remember, only one exception. Thus
              the last outbreak upon Friday was on September 3d, which also
              falls into the series, as did August 26th, which preceded it. The
              thing is beyond coincidence.”
            </TextNode>

            <TextNode>I was forced to agree.</TextNode>

            <TextNode>
              “Let us, then, form the provisional theory that every nine days
              the professor takes some strong drug which has a passing but
              highly poisonous effect. His naturally violent nature is
              intensified by it. He learned to take this drug while he was in
              Prague, and is now supplied with it by a Bohemian intermediary in
              London. This all hangs together, Watson!”
            </TextNode>

            <TextNode>
              “But the dog, the face at the window, the creeping man in the
              passage?”
            </TextNode>

            <TextNode>
              “Well, well, we have made a beginning. I should not expect any
              fresh developments until next Tuesday. In the meantime we can only
              keep in touch with friend Bennett and enjoy the amenities of this
              charming town.”
            </TextNode>

            <TextNode>
              In the morning Mr. Bennett slipped round to bring us the latest
              report. As Holmes had imagined, times had not been easy with him.
              Without exactly accusing him of being responsible for our
              presence, the professor had been very rough and rude in his
              speech, and evidently felt some strong grievance. This morning he
              was quite himself again, however, and had delivered his usual
              brilliant lecture to a crowded class. “Apart from his queer fits,”
              said Bennett, “he has actually more energy and vitality than I can
              ever remember, nor was his brain ever clearer. But it's not
              he—it's never the man whom we have known.”
            </TextNode>

            <TextNode>
              “I don't think you have anything to fear now for a week at least,”
              Holmes answered. “I am a busy man, and Dr. Watson has his patients
              to attend to. Let us agree that we meet here at this hour next
              Tuesday, and I shall be surprised if before we leave you again we
              are not able to explain, even if we cannot perhaps put an end to,
              your troubles. Meanwhile, keep us posted in what occurs.”
            </TextNode>

            <TextNode>
              I saw nothing of my friend for the next few days, but on the
              following Monday evening I had a short note asking me to meet him
              next day at the train. From what he told me as we travelled up to
              Camford all was well, the peace of the professor's house had been
              unruffled, and his own conduct perfectly normal. This also was the
              report which was given us by Mr. Bennett himself when he called
              upon us that evening at our old quarters in the Chequers. “He
              heard from his London correspondent to-day. There was a letter and
              there was a small packet, each with the cross under the stamp
              which warned me not to touch them. There has been nothing else.”
            </TextNode>

            <TextNode>
              “That may prove quite enough,” said Holmes grimly. “Now, Mr.
              Bennett, we shall, I think, come to some conclusion to-night. If
              my deductions are correct we should have an opportunity of
              bringing matters to a head. In order to do so it is necessary to
              hold the professor under observation. I would suggest, therefore,
              that you remain awake and on the lookout. Should you hear him pass
              your door, do not interrupt him, but follow him as discreetly as
              you can. Dr. Watson and I will not be far off. By the way, where
              is the key of that little box of which you spoke?”
            </TextNode>

            <TextNode>“Upon his watch-chain.”</TextNode>

            <TextNode>
              “I fancy our researches must lie in that direction. At the worst
              the lock should not be very formidable. Have you any other
              able-bodied man on the premises?”
            </TextNode>

            <TextNode>“There is the coachman, Macphail.”</TextNode>

            <TextNode>“Where does he sleep?”</TextNode>

            <TextNode>“Over the stables.”</TextNode>

            <TextNode>
              “We might possibly want him. Well, we can do no more until we see
              how things develop. Good-bye—but I expect that we shall see you
              before morning.”
            </TextNode>

            <TextNode>
              It was nearly midnight before we took our station among some
              bushes immediately opposite the hall door of the professor. It was
              a fine night, but chilly, and we were glad of our warm overcoats.
              There was a breeze, and clouds were scudding across the sky,
              obscuring from time to time the half-moon. It would have been a
              dismal vigil were it not for the expectation and excitement which
              carried us along, and the assurance of my comrade that we had
              probably reached the end of the strange sequence of events which
              had engaged our attention.
            </TextNode>

            <TextNode>
              “If the cycle of nine days holds good then we shall have the
              professor at his worst to-night,” said Holmes. “The fact that
              these strange symptoms began after his visit to Prague, that he is
              in secret correspondence with a Bohemian dealer in London, who
              presumably represents someone in Prague, and that he received a
              packet from him this very day, all point in one direction. What he
              takes and why he takes it are still beyond our ken, but that it
              emanates in some way from Prague is clear enough. He takes it
              under definite directions which regulate this ninth-day system,
              which was the first point which attracted my attention. But his
              symptoms are most remarkable. Did you observe his knuckles?”
            </TextNode>

            <TextNode>I had to confess that I did not.</TextNode>

            <TextNode>
              “Thick and horny in a way which is quite new in my experience.
              Always look at the hands first, Watson. Then cuffs, trouser-knees,
              and boots. Very curious knuckles which can only be explained by
              the mode of progression observed by—” Holmes paused and suddenly
              clapped his hand to his forehead. “Oh, Watson, Watson, what a fool
              I have been! It seems incredible, and yet it must be true. All
              points in one direction. How could I miss seeing the connection of
              ideas? Those knuckles—how could I have passed those knuckles? And
              the dog! And the ivy! It's surely time that I disappeared into
              that little farm of my dreams. Look out, Watson! Here he is! We
              shall have the chance of seeing for ourselves.”
            </TextNode>

            <TextNode>
              The hall door had slowly opened, and against the lamplit
              background we saw the tall figure of Professor Presbury. He was
              clad in his dressing-gown. As he stood outlined in the doorway he
              was erect but leaning forward with dangling arms, as when we saw
              him last.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              Now he stepped forward into the drive, and an extraordinary change
              came over him. He sank down into a crouching position and moved
              along upon his hands and feet, skipping every now and then as if
              he were overflowing with energy and vitality. He moved along the
              face of the house and then round the corner. As he disappeared
              Bennett slipped through the hall door and softly followed him.
            </TextNode>
            <TextNode>
              “Come, Watson, come!” cried Holmes, and we stole as softly as we
              could through the bushes until we had gained a spot whence we
              could see the other side of the house, which was bathed in the
              light of the half-moon. The professor was clearly visible
              crouching at the foot of the ivy-covered wall. As we watched him
              he suddenly began with incredible agility to ascend it. From
              branch to branch he sprang, sure of foot and firm of grasp,
              climbing apparently in mere joy at his own powers, with no
              definite object in view. With his dressing-gown flapping on each
              side of him, he looked like some huge bat glued against the side
              of his own house, a great square dark patch upon the moonlit wall.
              Presently he tired of this amusement, and, dropping from branch to
              branch, he squatted down into the old attitude and moved towards
              the stables, creeping along in the same strange way as before. The
              wolfhound was out now, barking furiously, and more excited than
              ever when it actually caught sight of its master. It was straining
              on its chain and quivering with eagerness and rage. The professor
              squatted down very deliberately just out of reach of the hound and
              began to provoke it in every possible way. He took handfuls of
              pebbles from the drive and threw them in the dog's face, prodded
              him with a stick which he had picked up, flicked his hands about
              only a few inches from the gaping mouth, and endeavoured in every
              way to increase the animal's fury, which was already beyond all
              control. In all our adventures I do not know that I have ever seen
              a more strange sight than this impassive and still dignified
              figure crouching frog-like upon the ground and goading to a wilder
              exhibition of passion the maddened hound, which ramped and raged
              in front of him, by all manner of ingenious and calculated
              cruelty.
            </TextNode>
            <TextNode>
              And then in a moment it happened! It was not the chain that broke,
              but it was the collar that slipped, for it had been made for a
              thick-necked Newfoundland. We heard the rattle of falling metal,
              and the next instant dog and man were rolling on the ground
              together, the one roaring in rage, the other screaming in a
              strange shrill falsetto of terror. It was a very narrow thing for
              the professor's life. The savage creature had him fairly by the
              throat, its fangs had bitten deep, and he was senseless before we
              could reach them and drag the two apart. It might have been a
              dangerous task for us, but Bennett's voice and presence brought
              the great wolfhound instantly to reason. The uproar had brought
              the sleepy and astonished coachman from his room above the
              stables. “I'm not surprised,” said he, shaking his head. “I've
              seen him at it before. I knew the dog would get him sooner or
              later.”
            </TextNode>

            <TextNode>
              The hound was secured, and together we carried the professor up to
              his room, where Bennett, who had a medical degree, helped me to
              dress his torn throat. The sharp teeth had passed dangerously near
              the carotid artery, and the haemorrhage was serious. In half an
              hour the danger was past, I had given the patient an injection of
              morphia, and he had sunk into deep sleep. Then, and only then,
              were we able to look at each other and to take stock of the
              situation.
            </TextNode>

            <TextNode>
              “I think a first-class surgeon should see him,” said I.
            </TextNode>

            <TextNode>
              “For God's sake, no!” cried Bennett. “At present the scandal is
              confined to our own household. It is safe with us. If it gets
              beyond these walls it will never stop. Consider his position at
              the university, his European reputation, the feelings of his
              daughter.”
            </TextNode>

            <TextNode>
              “Quite so,” said Holmes. “I think it may be quite possible to keep
              the matter to ourselves, and also to prevent its recurrence now
              that we have a free hand. The key from the watch-chain, Mr.
              Bennett. Macphail will guard the patient and let us know if there
              is any change. Let us see what we can find in the professor's
              mysterious box.”
            </TextNode>

            <TextNode>
              There was not much, but there was enough—an empty phial, another
              nearly full, a hypodermic syringe, several letters in a crabbed,
              foreign hand. The marks on the envelopes showed that they were
              those which had disturbed the routine of the secretary, and each
              was dated from the Commercial Road and signed “A. Dorak.” They
              were mere invoices to say that a fresh bottle was being sent to
              Professor Presbury, or receipt to acknowledge money. There was one
              other envelope, however, in a more educated hand and bearing the
              Austrian stamp with the postmark of Prague. “Here we have our
              material!” cried Holmes as he tore out the enclosure.
            </TextNode>

            <Indent>
              <TextNode noIndent className='italic'>
                Honoured Colleague [it ran]:
              </TextNode>
              <TextNode noIndent>
                Since your esteemed visit I have thought much of your case, and
                though in your circumstances there are some special reasons for
                the treatment, I would none the less enjoin caution, as my
                results have shown that it is not without danger of a kind.
              </TextNode>
              <TextNode>
                It is possible that the serum of anthropoid would have been
                better. I have, as I explained to you, used black-faced langur
                because a specimen was accessible. Langur is, of course, a
                crawler and climber, while anthropoid walks erect and is in all
                ways nearer.
              </TextNode>
              <TextNode>
                I beg you to take every possible precaution that there be no
                premature revelation of the process. I have one other client in
                England, and Dorak is my agent for both.
              </TextNode>
              <TextNode>Weekly reports will oblige.</TextNode>
              <TextNode noIndent className='italic'>
                Yours with high esteem,
              </TextNode>
              <TextNode noIndent className='italic'>
                H. Lowenstein.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              Lowenstein! The name brought back to me the memory of some snippet
              from a newspaper which spoke of an obscure scientist who was
              striving in some unknown way for the secret of rejuvenescence and
              the elixir of life. Lowenstein of Prague! Lowenstein with the
              wondrous strength-giving serum, tabooed by the profession because
              he refused to reveal its source. In a few words I said what I
              remembered. Bennett had taken a manual of zoology from the
              shelves. “‘Langur,’” he read, “‘the great black-faced monkey of
              the Himalayan slopes, biggest and most human of climbing monkeys.’
              Many details are added. Well, thanks to you, Mr. Holmes, it is
              very clear that we have traced the evil to its source.”
            </TextNode>

            <TextNode>
              “The real source,” said Holmes, “lies, of course, in that untimely
              love affair which gave our impetuous professor the idea that he
              could only gain his wish by turning himself into a younger man.
              When one tries to rise above Nature one is liable to fall below
              it. The highest type of man may revert to the animal if he leaves
              the straight road of destiny.” He sat musing for a little with the
              phial in his hand, looking at the clear liquid within. “When I
              have written to this man and told him that I hold him criminally
              responsible for the poisons which he circulates, we will have no
              more trouble. But it may recur. Others may find a better way.
              There is danger there—a very real danger to humanity. Consider,
              Watson, that the material, the sensual, the worldly would all
              prolong their worthless lives. The spiritual would not avoid the
              call to something higher. It would be the survival of the least
              fit. What sort of cesspool may not our poor world become?”
              Suddenly the dreamer disappeared, and Holmes, the man of action,
              sprang from his chair. “I think there is nothing more to be said,
              Mr. Bennett. The various incidents will now fit themselves easily
              into the general scheme. The dog, of course, was aware of the
              change far more quickly than you. His smell would insure that. It
              was the monkey, not the professor, whom Roy attacked, just as it
              was the monkey who teased Roy. Climbing was a joy to the creature,
              and it was a mere chance, I take it, that the pastime brought him
              to the young lady's window. There is an early train to town,
              Watson, but I think we shall just have time for a cup of tea at
              the Chequers before we catch it.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page330;

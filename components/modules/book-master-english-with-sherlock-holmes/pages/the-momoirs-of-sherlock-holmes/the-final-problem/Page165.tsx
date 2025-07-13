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

function Page165({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE FINAL PROBLEM'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              It is with a heavy heart that I take up my pen to write these the
              last words in which I shall ever record the singular gifts by
              which my friend Mr. Sherlock Holmes was distinguished. In an
              incoherent and, as I deeply feel, an entirely inadequate fashion,
              I have endeavored to give some account of my strange experiences
              in his company from the chance which first brought us together at
              the period of the “Study in Scarlet,” up to the time of his
              interference in the matter of the “Naval Treaty”—an interference
              which had the unquestionable effect of preventing a serious
              international complication. It was my intention to have stopped
              there, and to have said nothing of that event which has created a
              void in my life which the lapse of two years has done little to
              fill. My hand has been forced, however, by the recent letters in
              which Colonel James Moriarty defends the memory of his brother,
              and I have no choice but to lay the facts before the public
              exactly as they occurred. I alone know the absolute truth of the
              matter, and I am satisfied that the time has come when no good
              purpose is to be served by its suppression. As far as I know,
              there have been only three accounts in the public press: that in
              the <span className='italic'>Journal de Genève</span> on May 6th,
              1891, the Reuter's despatch in the English papers on May 7th, and
              finally the recent letters to which I have alluded. Of these the
              first and second were extremely condensed, while the last is, as I
              shall now show, an absolute perversion of the facts. It lies with
              me to tell for the first time what really took place between
              Professor Moriarty and Mr. Sherlock Holmes.
            </TextNode>

            <TextNode>
              It may be remembered that after my marriage, and my subsequent
              start in private practice, the very intimate relations which had
              existed between Holmes and myself became to some extent modified.
              He still came to me from time to time when he desired a companion
              in his investigation, but these occasions grew more and more
              seldom, until I find that in the year 1890 there were only three
              cases of which I retain any record. During the winter of that year
              and the early spring of 1891, I saw in the papers that he had been
              engaged by the French government upon a matter of supreme
              importance, and I received two notes from Holmes, dated from
              Narbonne and from Nimes, from which I gathered that his stay in
              France was likely to be a long one. It was with some surprise,
              therefore, that I saw him walk into my consulting-room upon the
              evening of April 24th. It struck me that he was looking even paler
              and thinner than usual.
            </TextNode>

            <TextNode>
              “Yes, I have been using myself up rather too freely,” he remarked,
              in answer to my look rather than to my words; “I have been a
              little pressed of late. Have you any objection to my closing your
              shutters?”
            </TextNode>

            <TextNode>
              The only light in the room came from the lamp upon the table at
              which I had been reading. Holmes edged his way round the wall and
              flinging the shutters together, he bolted them securely.
            </TextNode>

            <TextNode>“You are afraid of something?” I asked.</TextNode>

            <TextNode>“Well, I am.”</TextNode>

            <TextNode>“Of what?”</TextNode>

            <TextNode>“Of air-guns.”</TextNode>

            <TextNode>“My dear Holmes, what do you mean?”</TextNode>

            <TextNode>
              “I think that you know me well enough, Watson, to understand that
              I am by no means a nervous man. At the same time, it is stupidity
              rather than courage to refuse to recognize danger when it is close
              upon you. Might I trouble you for a match?” He drew in the smoke
              of his cigarette as if the soothing influence was grateful to him.
            </TextNode>

            <TextNode>
              “I must apologize for calling so late,” said he, “and I must
              further beg you to be so unconventional as to allow me to leave
              your house presently by scrambling over your back garden wall.”
            </TextNode>

            <TextNode>“But what does it all mean?” I asked.</TextNode>

            <TextNode>
              He held out his hand, and I saw in the light of the lamp that two
              of his knuckles were burst and bleeding.
            </TextNode>

            <TextNode>
              “It is not an airy nothing, you see,” said he, smiling. “On the
              contrary, it is solid enough for a man to break his hand over. Is
              Mrs. Watson in?”
            </TextNode>

            <TextNode>“She is away upon a visit.”</TextNode>

            <TextNode>“Indeed! You are alone?”</TextNode>

            <TextNode>“Quite.”</TextNode>

            <TextNode>
              “Then it makes it the easier for me to propose that you should
              come away with me for a week to the Continent.”
            </TextNode>

            <TextNode>“Where?”</TextNode>

            <TextNode>“Oh, anywhere. It's all the same to me.”</TextNode>

            <TextNode>
              There was something very strange in all this. It was not Holmes's
              nature to take an aimless holiday, and something about his pale,
              worn face told me that his nerves were at their highest tension.
              He saw the question in my eyes, and, putting his finger-tips
              together and his elbows upon his knees, he explained the
              situation.
            </TextNode>

            <TextNode>
              “You have probably never heard of Professor Moriarty?” said he.
            </TextNode>

            <TextNode>“Never.”</TextNode>

            <TextNode>
              “Aye, there's the genius and the wonder of the thing!” he cried.
              “The man pervades London, and no one has heard of him. That's what
              puts him on a pinnacle in the records of crime. I tell you,
              Watson, in all seriousness, that if I could beat that man, if I
              could free society of him, I should feel that my own career had
              reached its summit, and I should be prepared to turn to some more
              placid line in life. Between ourselves, the recent cases in which
              I have been of assistance to the royal family of Scandinavia, and
              to the French republic, have left me in such a position that I
              could continue to live in the quiet fashion which is most
              congenial to me, and to concentrate my attention upon my chemical
              researches. But I could not rest, Watson, I could not sit quiet in
              my chair, if I thought that such a man as Professor Moriarty were
              walking the streets of London unchallenged.”
            </TextNode>

            <TextNode>“What has he done, then?”</TextNode>

            <TextNode>
              “His career has been an extraordinary one. He is a man of good
              birth and excellent education, endowed by nature with a phenomenal
              mathematical faculty. At the age of twenty-one he wrote a treatise
              upon the Binomial Theorem, which has had a European vogue. On the
              strength of it he won the Mathematical Chair at one of our smaller
              universities, and had, to all appearance, a most brilliant career
              before him. But the man had hereditary tendencies of the most
              diabolical kind. A criminal strain ran in his blood, which,
              instead of being modified, was increased and rendered infinitely
              more dangerous by his extraordinary mental powers. Dark rumors
              gathered round him in the university town, and eventually he was
              compelled to resign his chair and to come down to London, where he
              set up as an army coach. So much is known to the world, but what I
              am telling you now is what I have myself discovered.
            </TextNode>

            <TextNode>
              “As you are aware, Watson, there is no one who knows the higher
              criminal world of London so well as I do. For years past I have
              continually been conscious of some power behind the malefactor,
              some deep organizing power which forever stands in the way of the
              law, and throws its shield over the wrong-doer. Again and again in
              cases of the most varying sorts—forgery cases, robberies,
              murders—I have felt the presence of this force, and I have deduced
              its action in many of those undiscovered crimes in which I have
              not been personally consulted. For years I have endeavored to
              break through the veil which shrouded it, and at last the time
              came when I seized my thread and followed it, until it led me,
              after a thousand cunning windings, to ex-Professor Moriarty of
              mathematical celebrity.
            </TextNode>

            <TextNode>
              “He is the Napoleon of crime, Watson. He is the organizer of half
              that is evil and of nearly all that is undetected in this great
              city. He is a genius, a philosopher, an abstract thinker. He has a
              brain of the first order. He sits motionless, like a spider in the
              center of its web, but that web has a thousand radiations, and he
              knows well every quiver of each of them. He does little himself.
              He only plans. But his agents are numerous and splendidly
              organized. Is there a crime to be done, a paper to be abstracted,
              we will say, a house to be rifled, a man to be removed—the word is
              passed to the Professor, the matter is organized and carried out.
              The agent may be caught. In that case money is found for his bail
              or his defence. But the central power which uses the agent is
              never caught—never so much as suspected. This was the organization
              which I deduced, Watson, and which I devoted my whole energy to
              exposing and breaking up.
            </TextNode>

            <TextNode>
              “But the Professor was fenced round with safeguards so cunningly
              devised that, do what I would, it seemed impossible to get
              evidence which would convict in a court of law. You know my
              powers, my dear Watson, and yet at the end of three months I was
              forced to confess that I had at last met an antagonist who was my
              intellectual equal. My horror at his crimes was lost in my
              admiration at his skill. But at last he made a trip—only a little,
              little trip—but it was more than he could afford when I was so
              close upon him. I had my chance, and, starting from that point, I
              have woven my net round him until now it is all ready to close. In
              three days—that is to say, on Monday next—matters will be ripe,
              and the Professor, with all the principal members of his gang,
              will be in the hands of the police. Then will come the greatest
              criminal trial of the century, the clearing up of over forty
              mysteries, and the rope for all of them; but if we move at all
              prematurely, you understand, they may slip out of our hands even
              at the last moment.
            </TextNode>

            <TextNode>
              “Now, if I could have done this without the knowledge of Professor
              Moriarty, all would have been well. But he was too wily for that.
              He saw every step which I took to draw my toils round him. Again
              and again he strove to break away, but I as often headed him off.
              I tell you, my friend, that if a detailed account of that silent
              contest could be written, it would take its place as the most
              brilliant bit of thrust-and-parry work in the history of
              detection. Never have I risen to such a height, and never have I
              been so hard pressed by an opponent. He cut deep, and yet I just
              undercut him. This morning the last steps were taken, and three
              days only were wanted to complete the business. I was sitting in
              my room thinking the matter over, when the door opened and
              Professor Moriarty stood before me.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “My nerves are fairly proof, Watson, but I must confess to a start
              when I saw the very man who had been so much in my thoughts
              standing there on my threshold. His appearance was quite familiar
              to me. He is extremely tall and thin, his forehead domes out in a
              white curve, and his two eyes are deeply sunken in his head. He is
              clean-shaven, pale, and ascetic-looking, retaining something of
              the professor in his features. His shoulders are rounded from much
              study, and his face protrudes forward, and is forever slowly
              oscillating from side to side in a curiously reptilian fashion. He
              peered at me with great curiosity in his puckered eyes.
            </TextNode>

            <TextNode>
              “ ‘You have less frontal development that I should have expected,’
              said he, at last. ‘It is a dangerous habit to finger loaded
              firearms in the pocket of one's dressing-gown.’
            </TextNode>

            <TextNode>
              “The fact is that upon his entrance I had instantly recognized the
              extreme personal danger in which I lay. The only conceivable
              escape for him lay in silencing my tongue. In an instant I had
              slipped the revolver from the drawer into my pocket, and was
              covering him through the cloth. At his remark I drew the weapon
              out and laid it cocked upon the table. He still smiled and
              blinked, but there was something about his eyes which made me feel
              very glad that I had it there.
            </TextNode>

            <TextNode>“ ‘You evidently don't know me,’ said he.</TextNode>

            <TextNode>
              “ ‘On the contrary,’ I answered, ‘I think it is fairly evident
              that I do. Pray take a chair. I can spare you five minutes if you
              have anything to say.’
            </TextNode>

            <TextNode>
              “ ‘All that I have to say has already crossed your mind,’ said he.
            </TextNode>

            <TextNode>
              “ ‘Then possibly my answer has crossed yours,’ I replied.
            </TextNode>

            <TextNode>“ ‘You stand fast?’</TextNode>

            <TextNode>“ ‘Absolutely.’</TextNode>

            <TextNode>
              “He clapped his hand into his pocket, and I raised the pistol from
              the table. But he merely drew out a memorandum-book in which he
              had scribbled some dates.
            </TextNode>

            <TextNode>
              “ ‘You crossed my path on the 4th of January,’ said he. ‘On the
              23d you incommoded me; by the middle of February I was seriously
              inconvenienced by you; at the end of March I was absolutely
              hampered in my plans; and now, at the close of April, I find
              myself placed in such a position through your continual
              persecution that I am in positive danger of losing my liberty. The
              situation is becoming an impossible one.’
            </TextNode>

            <TextNode>“ ‘Have you any suggestion to make?’ I asked.</TextNode>

            <TextNode>
              “ ‘You must drop it, Mr. Holmes,’ said he, swaying his face about.
              ‘You really must, you know.’
            </TextNode>

            <TextNode>“ ‘After Monday,’ said I.</TextNode>

            <TextNode>
              “ ‘Tut, tut,’ said he. ‘I am quite sure that a man of your
              intelligence will see that there can be but one outcome to this
              affair. It is necessary that you should withdraw. You have worked
              things in such a fashion that we have only one resource left. It
              has been an intellectual treat to me to see the way in which you
              have grappled with this affair, and I say, unaffectedly, that it
              would be a grief to me to be forced to take any extreme measure.
              You smile, sir, but I assure you that it really would.’
            </TextNode>

            <TextNode>“ ‘Danger is part of my trade,’ I remarked.</TextNode>

            <TextNode>
              “ ‘That is not danger,’ said he. ‘It is inevitable destruction.
              You stand in the way not merely of an individual, but of a mighty
              organization, the full extent of which you, with all your
              cleverness, have been unable to realize. You must stand clear, Mr.
              Holmes, or be trodden under foot.’
            </TextNode>

            <TextNode>
              “ ‘I am afraid,’ said I, rising, ‘that in the pleasure of this
              conversation I am neglecting business of importance which awaits
              me elsewhere.’
            </TextNode>

            <TextNode>
              “He rose also and looked at me in silence, shaking his head sadly.
            </TextNode>

            <TextNode>
              “ ‘Well, well,’ said he, at last. ‘It seems a pity, but I have
              done what I could. I know every move of your game. You can do
              nothing before Monday. It has been a duel between you and me, Mr.
              Holmes. You hope to place me in the dock. I tell you that I will
              never stand in the dock. You hope to beat me. I tell you that you
              will never beat me. If you are clever enough to bring destruction
              upon me, rest assured that I shall do as much to you.’
            </TextNode>

            <TextNode>
              “ ‘You have paid me several compliments, Mr. Moriarty,’ said I.
              ‘Let me pay you one in return when I say that if I were assured of
              the former eventuality I would, in the interests of the public,
              cheerfully accept the latter.’
            </TextNode>

            <TextNode>
              “ ‘I can promise you the one, but not the other,’ he snarled, and
              so turned his rounded back upon me, and went peering and blinking
              out of the room.
            </TextNode>

            <TextNode>
              “That was my singular interview with Professor Moriarty. I confess
              that it left an unpleasant effect upon my mind. His soft, precise
              fashion of speech leaves a conviction of sincerity which a mere
              bully could not produce. Of course, you will say: ‘Why not take
              police precautions against him?’ the reason is that I am well
              convinced that it is from his agents the blow would fall. I have
              the best proofs that it would be so.”
            </TextNode>

            <TextNode>“You have already been assaulted?”</TextNode>

            <TextNode>
              “My dear Watson, Professor Moriarty is not a man who lets the
              grass grow under his feet. I went out about mid-day to transact
              some business in Oxford Street. As I passed the corner which leads
              from Bentinck Street on to the Welbeck Street crossing a two-horse
              van furiously driven whizzed round and was on me like a flash. I
              sprang for the foot-path and saved myself by the fraction of a
              second. The van dashed round by Marylebone Lane and was gone in an
              instant. I kept to the pavement after that, Watson, but as I
              walked down Vere Street a brick came down from the roof of one of
              the houses, and was shattered to fragments at my feet. I called
              the police and had the place examined. There were slates and
              bricks piled up on the roof preparatory to some repairs, and they
              would have me believe that the wind had toppled over one of these.
              Of course I knew better, but I could prove nothing. I took a cab
              after that and reached my brother's rooms in Pall Mall, where I
              spent the day. Now I have come round to you, and on my way I was
              attacked by a rough with a bludgeon. I knocked him down, and the
              police have him in custody; but I can tell you with the most
              absolute confidence that no possible connection will ever be
              traced between the gentleman upon whose front teeth I have barked
              my knuckles and the retiring mathematical coach, who is, I dare
              say, working out problems upon a black-board ten miles away. You
              will not wonder, Watson, that my first act on entering your rooms
              was to close your shutters, and that I have been compelled to ask
              your permission to leave the house by some less conspicuous exit
              than the front door.”
            </TextNode>

            <TextNode>
              I had often admired my friend's courage, but never more than now,
              as he sat quietly checking off a series of incidents which must
              have combined to make up a day of horror.
            </TextNode>

            <TextNode>“You will spend the night here?” I said.</TextNode>

            <TextNode>
              “No, my friend, you might find me a dangerous guest. I have my
              plans laid, and all will be well. Matters have gone so far now
              that they can move without my help as far as the arrest goes,
              though my presence is necessary for a conviction. It is obvious,
              therefore, that I cannot do better than get away for the few days
              which remain before the police are at liberty to act. It would be
              a great pleasure to me, therefore, if you could come on to the
              Continent with me.”
            </TextNode>

            <TextNode>
              “The practice is quiet,” said I, “and I have an accommodating
              neighbor. I should be glad to come.”
            </TextNode>

            <TextNode>“And to start to-morrow morning?”</TextNode>

            <TextNode>“If necessary.”</TextNode>

            <TextNode>
              “Oh yes, it is most necessary. Then these are your instructions,
              and I beg, my dear Watson, that you will obey them to the letter,
              for you are now playing a double-handed game with me against the
              cleverest rogue and the most powerful syndicate of criminals in
              Europe. Now listen! You will dispatch whatever luggage you intend
              to take by a trusty messenger unaddressed to Victoria to-night. In
              the morning you will send for a hansom, desiring your man to take
              neither the first nor the second which may present itself. Into
              this hansom you will jump, and you will drive to the Strand end of
              the Lowther Arcade, handing the address to the cabman upon a slip
              of paper, with a request that he will not throw it away. Have your
              fare ready, and the instant that your cab stops, dash through the
              Arcade, timing yourself to reach the other side at a quarter-past
              nine. You will find a small brougham waiting close to the curb,
              driven by a fellow with a heavy black cloak tipped at the collar
              with red. Into this you will step, and you will reach Victoria in
              time for the Continental express.”
            </TextNode>

            <TextNode>“Where shall I meet you?”</TextNode>

            <TextNode>
              “At the station. The second first-class carriage from the front
              will be reserved for us.”
            </TextNode>

            <TextNode>“The carriage is our rendezvous, then?”</TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>
              It was in vain that I asked Holmes to remain for the evening. It
              was evident to me that he thought he might bring trouble to the
              roof he was under, and that that was the motive which impelled him
              to go. With a few hurried words as to our plans for the morrow he
              rose and came out with me into the garden, clambering over the
              wall which leads into Mortimer Street, and immediately whistling
              for a hansom, in which I heard him drive away.
            </TextNode>

            <TextNode>
              In the morning I obeyed Holmes's injunctions to the letter. A
              hansom was procured with such precaution as would prevent its
              being one which was placed ready for us, and I drove immediately
              after breakfast to the Lowther Arcade, through which I hurried at
              the top of my speed. A brougham was waiting with a very massive
              driver wrapped in a dark cloak, who, the instant that I had
              stepped in, whipped up the horse and rattled off to Victoria
              Station. On my alighting there he turned the carriage, and dashed
              away again without so much as a look in my direction.
            </TextNode>

            <TextNode>
              So far all had gone admirably. My luggage was waiting for me, and
              I had no difficulty in finding the carriage which Holmes had
              indicated, the less so as it was the only one in the train which
              was marked “Engaged.” My only source of anxiety now was the
              non-appearance of Holmes. The station clock marked only seven
              minutes from the time when we were due to start. In vain I
              searched among the groups of travellers and leave-takers for the
              lithe figure of my friend. There was no sign of him. I spent a few
              minutes in assisting a venerable Italian priest, who was
              endeavoring to make a porter understand, in his broken English,
              that his luggage was to be booked through to Paris. Then, having
              taken another look round, I returned to my carriage, where I found
              that the porter, in spite of the ticket, had given me my decrepit
              Italian friend as a traveling companion. It was useless for me to
              explain to him that his presence was an intrusion, for my Italian
              was even more limited than his English, so I shrugged my shoulders
              resignedly, and continued to look out anxiously for my friend. A
              chill of fear had come over me, as I thought that his absence
              might mean that some blow had fallen during the night. Already the
              doors had all been shut and the whistle blown, when—
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page165;

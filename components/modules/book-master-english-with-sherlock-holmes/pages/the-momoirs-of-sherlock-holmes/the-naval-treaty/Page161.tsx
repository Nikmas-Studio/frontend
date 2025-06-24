import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Indent from '@/components/elements/book-master-english-with-sherlock-holmes/Indent';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page161({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE NAVAL TREATY'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Then for the first time the horror of my situation came in its
              full force. Hitherto I had been acting, and action had numbed
              thought. I had been so confident of regaining the treaty at once
              that I had not dared to think of what would be the consequence if
              I failed to do so. But now there was nothing more to be done, and
              I had leisure to realize my position. It was horrible. Watson
              there would tell you that I was a nervous, sensitive boy at
              school. It is my nature. I thought of my uncle and of his
              colleagues in the Cabinet, of the shame which I had brought upon
              him, upon myself, upon every one connected with me. What though I
              was the victim of an extraordinary accident? No allowance is made
              for accidents where diplomatic interests are at stake. I was
              ruined, shamefully, hopelessly ruined. I don't know what I did. I
              fancy I must have made a scene. I have a dim recollection of a
              group of officials who crowded round me, endeavoring to soothe me.
              One of them drove down with me to Waterloo, and saw me into the
              Woking train. I believe that he would have come all the way had it
              not been that Dr. Ferrier, who lives near me, was going down by
              that very train. The doctor most kindly took charge of me, and it
              was well he did so, for I had a fit in the station, and before we
              reached home I was practically a raving maniac.
            </TextNode>

            <TextNode>
              “You can imagine the state of things here when they were roused
              from their beds by the doctor's ringing and found me in this
              condition. Poor Annie here and my mother were broken-hearted. Dr.
              Ferrier had just heard enough from the detective at the station to
              be able to give an idea of what had happened, and his story did
              not mend matters. It was evident to all that I was in for a long
              illness, so Joseph was bundled out of this cheery bedroom, and it
              was turned into a sick-room for me. Here I have lain, Mr. Holmes,
              for over nine weeks, unconscious, and raving with brain-fever. If
              it had not been for Miss Harrison here and for the doctor's care I
              should not be speaking to you now. She has nursed me by day and a
              hired nurse has looked after me by night, for in my mad fits I was
              capable of anything. Slowly my reason has cleared, but it is only
              during the last three days that my memory has quite returned.
              Sometimes I wish that it never had. The first thing that I did was
              to wire to Mr. Forbes, who had the case in hand. He came out, and
              assures me that, though everything has been done, no trace of a
              clue has been discovered. The commissionaire and his wife have
              been examined in every way without any light being thrown upon the
              matter. The suspicions of the police then rested upon young Gorot,
              who, as you may remember, stayed over time in the office that
              night. His remaining behind and his French name were really the
              only two points which could suggest suspicion; but, as a matter of
              fact, I did not begin work until he had gone, and his people are
              of Huguenot extraction, but as English in sympathy and tradition
              as you and I are. Nothing was found to implicate him in any way,
              and there the matter dropped. I turn to you, Mr. Holmes, as
              absolutely my last hope. If you fail me, then my honor as well as
              my position are forever forfeited.”
            </TextNode>

            <TextNode>
              The invalid sank back upon his cushions, tired out by this long
              recital, while his nurse poured him out a glass of some
              stimulating medicine. Holmes sat silently, with his head thrown
              back and his eyes closed, in an attitude which might seem listless
              to a stranger, but which I knew betokened the most intense
              self-absorption.
            </TextNode>

            <TextNode>
              “You statement has been so explicit,” said he at last, “that you
              have really left me very few questions to ask. There is one of the
              very utmost importance, however. Did you tell any one that you had
              this special task to perform?”
            </TextNode>

            <TextNode>“No one.”</TextNode>

            <TextNode>“Not Miss Harrison here, for example?”</TextNode>

            <TextNode>
              “No. I had not been back to Woking between getting the order and
              executing the commission.”
            </TextNode>

            <TextNode>
              “And none of your people had by chance been to see you?”
            </TextNode>

            <TextNode>“None.”</TextNode>

            <TextNode>
              “Did any of them know their way about in the office?”
            </TextNode>

            <TextNode>“Oh, yes, all of them had been shown over it.”</TextNode>

            <TextNode>
              “Still, of course, if you said nothing to any one about the treaty
              these inquiries are irrelevant.”
            </TextNode>

            <TextNode>“I said nothing.”</TextNode>

            <TextNode>“Do you know anything of the commissionaire?”</TextNode>

            <TextNode>“Nothing except that he is an old soldier.”</TextNode>

            <TextNode>“What regiment?”</TextNode>

            <TextNode>“Oh, I have heard—Coldstream Guards.”</TextNode>

            <TextNode>
              “Thank you. I have no doubt I can get details from Forbes. The
              authorities are excellent at amassing facts, though they do not
              always use them to advantage. What a lovely thing a rose is!”
            </TextNode>

            <TextNode>
              He walked past the couch to the open window, and held up the
              drooping stalk of a moss-rose, looking down at the dainty blend of
              crimson and green. It was a new phase of his character to me, for
              I had never before seen him show any keen interest in natural
              objects.
            </TextNode>

            <TextNode>
              “There is nothing in which deduction is so necessary as in
              religion,” said he, leaning with his back against the shutters.
              “It can be built up as an exact science by the reasoner. Our
              highest assurance of the goodness of Providence seems to me to
              rest in the flowers. All other things, our powers our desires, our
              food, are all really necessary for our existence in the first
              instance. But this rose is an extra. Its smell and its color are
              an embellishment of life, not a condition of it. It is only
              goodness which gives extras, and so I say again that we have much
              to hope from the flowers.”
            </TextNode>

            <TextNode>
              Percy Phelps and his nurse looked at Holmes during this
              demonstration with surprise and a good deal of disappointment
              written upon their faces. He had fallen into a reverie, with the
              moss-rose between his fingers. It had lasted some minutes before
              the young lady broke in upon it.
            </TextNode>

            <TextNode>
              “Do you see any prospect of solving this mystery, Mr. Holmes?” she
              asked, with a touch of asperity in her voice.
            </TextNode>

            <TextNode>
              “Oh, the mystery!” he answered, coming back with a start to the
              realities of life. “Well, it would be absurd to deny that the case
              is a very abstruse and complicated one, but I can promise you that
              I will look into the matter and let you know any points which may
              strike me.”
            </TextNode>

            <TextNode>“Do you see any clue?”</TextNode>

            <TextNode>
              “You have furnished me with seven, but, of course, I must test
              them before I can pronounce upon their value.”
            </TextNode>

            <TextNode>“You suspect some one?”</TextNode>

            <TextNode>“I suspect myself.”</TextNode>

            <TextNode>“What!”</TextNode>

            <TextNode>“Of coming to conclusions too rapidly.”</TextNode>

            <TextNode>“Then go to London and test your conclusions.”</TextNode>

            <TextNode>
              “Your advice is very excellent, Miss Harrison,” said Holmes,
              rising. “I think, Watson, we cannot do better. Do not allow
              yourself to indulge in false hopes, Mr. Phelps. The affair is a
              very tangled one.”
            </TextNode>

            <TextNode>
              “I shall be in a fever until I see you again,” cried the
              diplomatist.
            </TextNode>

            <TextNode>
              “Well, I'll come out by the same train to-morrow, though it's more
              than likely that my report will be a negative one.”
            </TextNode>

            <TextNode>
              “God bless you for promising to come,” cried our client. “It gives
              me fresh life to know that something is being done. By the way, I
              have had a letter from Lord Holdhurst.”
            </TextNode>

            <TextNode>“Ha! What did he say?”</TextNode>

            <TextNode>
              “He was cold, but not harsh. I dare say my severe illness
              prevented him from being that. He repeated that the matter was of
              the utmost importance, and added that no steps would be taken
              about my future—by which he means, of course, my dismissal—until
              my health was restored and I had an opportunity of repairing my
              misfortune.”
            </TextNode>

            <TextNode>
              “Well, that was reasonable and considerate,” said Holmes. “Come,
              Watson, for we have a good day's work before us in town.”
            </TextNode>

            <TextNode>
              Mr. Joseph Harrison drove us down to the station, and we were soon
              whirling up in a Portsmouth train. Holmes was sunk in profound
              thought, and hardly opened his mouth until we had passed Clapham
              Junction.
            </TextNode>

            <TextNode>
              “It's a very cheery thing to come into London by any of these
              lines which run high, and allow you to look down upon the houses
              like this.”
            </TextNode>

            <TextNode>
              I thought he was joking, for the view was sordid enough, but he
              soon explained himself.
            </TextNode>

            <TextNode>
              “Look at those big, isolated clumps of building rising up above
              the slates, like brick islands in a lead-colored sea.”
            </TextNode>

            <TextNode>“The board-schools.”</TextNode>

            <TextNode>
              “Light-houses, my boy! Beacons of the future! Capsules with
              hundreds of bright little seeds in each, out of which will spring
              the wise, better England of the future. I suppose that man Phelps
              does not drink?”
            </TextNode>

            <TextNode>“I should not think so.”</TextNode>

            <TextNode>
              “Nor should I, but we are bound to take every possibility into
              account. The poor devil has certainly got himself into very deep
              water, and it's a question whether we shall ever be able to get
              him ashore. What did you think of Miss Harrison?”
            </TextNode>

            <TextNode>“A girl of strong character.”</TextNode>

            <TextNode>
              “Yes, but she is a good sort, or I am mistaken. She and her
              brother are the only children of an iron-master somewhere up
              Northumberland way. He got engaged to her when traveling last
              winter, and she came down to be introduced to his people, with her
              brother as escort. Then came the smash, and she stayed on to nurse
              her lover, while brother Joseph, finding himself pretty snug,
              stayed on too. I've been making a few independent inquiries, you
              see. But to-day must be a day of inquiries.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“My practice—” I began.</TextNode>

            <TextNode>
              “Oh, if you find your own cases more interesting than mine—” said
              Holmes, with some asperity.
            </TextNode>

            <TextNode>
              “I was going to say that my practice could get along very well for
              a day or two, since it is the slackest time in the year.”
            </TextNode>

            <TextNode>
              “Excellent,” said he, recovering his good-humor. “Then we'll look
              into this matter together. I think that we should begin by seeing
              Forbes. He can probably tell us all the details we want until we
              know from what side the case is to be approached.”
            </TextNode>

            <TextNode>“You said you had a clue?”</TextNode>

            <TextNode>
              “Well, we have several, but we can only test their value by
              further inquiry. The most difficult crime to track is the one
              which is purposeless. Now this is not purposeless. Who is it who
              profits by it? There is the French ambassador, there is the
              Russian, there is who-ever might sell it to either of these, and
              there is Lord Holdhurst.”
            </TextNode>

            <TextNode>“Lord Holdhurst!”</TextNode>

            <TextNode>
              “Well, it is just conceivable that a statesman might find himself
              in a position where he was not sorry to have such a document
              accidentally destroyed.”
            </TextNode>

            <TextNode>
              “Not a statesman with the honorable record of Lord Holdhurst?”
            </TextNode>

            <TextNode>
              “It is a possibility and we cannot afford to disregard it. We
              shall see the noble lord to-day and find out if he can tell us
              anything. Meanwhile I have already set inquiries on foot.”
            </TextNode>

            <TextNode>“Already?”</TextNode>

            <TextNode>
              “Yes, I sent wires from Woking station to every evening paper in
              London. This advertisement will appear in each of them.”
            </TextNode>

            <TextNode>
              He handed over a sheet torn from a note-book. On it was scribbled
              in pencil:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “£10 reward. The number of the cab which dropped a fare at or
                about the door of the Foreign Office in Charles Street at
                quarter to ten in the evening of May 23d. Apply 221b, Baker
                Street.”
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “You are confident that the thief came in a cab?”
            </TextNode>

            <TextNode>
              “If not, there is no harm done. But if Mr. Phelps is correct in
              stating that there is no hiding-place either in the room or the
              corridors, then the person must have come from outside. If he came
              from outside on so wet a night, and yet left no trace of damp upon
              the linoleum, which was examined within a few minutes of his
              passing, then it is exceeding probably that he came in a cab. Yes,
              I think that we may safely deduce a cab.”
            </TextNode>

            <TextNode>“It sounds plausible.”</TextNode>

            <TextNode>
              “That is one of the clues of which I spoke. It may lead us to
              something. And then, of course, there is the bell—which is the
              most distinctive feature of the case. Why should the bell ring?
              Was it the thief who did it out of bravado? Or was it some one who
              was with the thief who did it in order to prevent the crime? Or
              was it an accident? Or was it—?” He sank back into the state of
              intense and silent thought from which he had emerged; but it
              seemed to me, accustomed as I was to his every mood, that some new
              possibility had dawned suddenly upon him.
            </TextNode>

            <TextNode>
              It was twenty past three when we reached our terminus, and after a
              hasty luncheon at the buffet we pushed on at once to Scotland
              Yard. Holmes had already wired to Forbes, and we found him waiting
              to receive us—a small, foxy man with a sharp but by no means
              amiable expression. He was decidedly frigid in his manner to us,
              especially when he heard the errand upon which we had come.
            </TextNode>

            <TextNode>
              “I've heard of your methods before now, Mr. Holmes,” said he,
              tartly. “You are ready enough to use all the information that the
              police can lay at your disposal, and then you try to finish the
              case yourself and bring discredit on them.”
            </TextNode>

            <TextNode>
              “On the contrary,” said Holmes, “out of my last fifty-three cases
              my name has only appeared in four, and the police have had all the
              credit in forty-nine. I don't blame you for not knowing this, for
              you are young and inexperienced, but if you wish to get on in your
              new duties you will work with me and not against me.”
            </TextNode>

            <TextNode>
              “I'd be very glad of a hint or two,” said the detective, changing
              his manner. “I've certainly had no credit from the case so far.”
            </TextNode>

            <TextNode>“What steps have you taken?”</TextNode>

            <TextNode>
              “Tangey, the commissionaire, has been shadowed. He left the Guards
              with a good character and we can find nothing against him. His
              wife is a bad lot, though. I fancy she knows more about this than
              appears.”
            </TextNode>

            <TextNode>“Have you shadowed her?”</TextNode>

            <TextNode>
              “We have set one of our women on to her. Mrs. Tangey drinks, and
              our woman has been with her twice when she was well on, but she
              could get nothing out of her.”
            </TextNode>

            <TextNode>
              “I understand that they have had brokers in the house?”
            </TextNode>

            <TextNode>“Yes, but they were paid off.”</TextNode>

            <TextNode>“Where did the money come from?”</TextNode>

            <TextNode>
              “That was all right. His pension was due. They have not shown any
              sign of being in funds.”
            </TextNode>

            <TextNode>
              “What explanation did she give of having answered the bell when
              Mr. Phelps rang for the coffee?”
            </TextNode>

            <TextNode>
              “She said that he husband was very tired and she wished to relieve
              him.”
            </TextNode>

            <TextNode>
              “Well, certainly that would agree with his being found a little
              later asleep in his chair. There is nothing against them then but
              the woman's character. Did you ask her why she hurried away that
              night? Her haste attracted the attention of the police constable.”
            </TextNode>

            <TextNode>
              “She was later than usual and wanted to get home.”
            </TextNode>

            <TextNode>
              “Did you point out to her that you and Mr. Phelps, who started at
              least twenty minutes after he, got home before her?”
            </TextNode>

            <TextNode>
              “She explains that by the difference between a 'bus and a hansom.”
            </TextNode>

            <TextNode>
              “Did she make it clear why, on reaching her house, she ran into
              the back kitchen?”
            </TextNode>

            <TextNode>
              “Because she had the money there with which to pay off the
              brokers.”
            </TextNode>

            <TextNode>
              “She has at least an answer for everything. Did you ask her
              whether in leaving she met any one or saw any one loitering about
              Charles Street?”
            </TextNode>

            <TextNode>“She saw no one but the constable.”</TextNode>

            <TextNode>
              “Well, you seem to have cross-examined her pretty thoroughly. What
              else have you done?”
            </TextNode>

            <TextNode>
              “The clerk Gorot has been shadowed all these nine weeks, but
              without result. We can show nothing against him.”
            </TextNode>

            <TextNode>“Anything else?”</TextNode>

            <TextNode>
              “Well, we have nothing else to go upon—no evidence of any kind.”
            </TextNode>

            <TextNode>
              “Have you formed a theory about how that bell rang?”
            </TextNode>

            <TextNode>
              “Well, I must confess that it beats me. It was a cool hand,
              whoever it was, to go and give the alarm like that.”
            </TextNode>

            <TextNode>
              “Yes, it was a queer thing to do. Many thanks to you for what you
              have told me. If I can put the man into your hands you shall hear
              from me. Come along, Watson.”
            </TextNode>

            <TextNode>
              “Where are we going to now?” I asked, as we left the office.
            </TextNode>

            <TextNode>
              “We are now going to interview Lord Holdhurst, the cabinet
              minister and future premier of England.”
            </TextNode>

            <TextNode>
              We were fortunate in finding that Lord Holdhurst was still in his
              chambers in Downing Street, and on Holmes sending in his card we
              were instantly shown up. The statesman received us with that
              old-fashioned courtesy for which he is remarkable, and seated us
              on the two luxuriant lounges on either side of the fireplace.
              Standing on the rug between us, with his slight, tall figure, his
              sharp features, thoughtful face, and curling hair prematurely
              tinged with gray, he seemed to represent that not too common type,
              a nobleman who is in truth noble.
            </TextNode>

            <TextNode>
              “Your name is very familiar to me, Mr. Holmes,” said he, smiling.
              “And, of course, I cannot pretend to be ignorant of the object of
              your visit. There has only been one occurrence in these offices
              which could call for your attention. In whose interest are you
              acting, may I ask?”
            </TextNode>

            <TextNode>“In that of Mr. Percy Phelps,” answered Holmes.</TextNode>

            <TextNode>
              “Ah, my unfortunate nephew! You can understand that our kinship
              makes it the more impossible for me to screen him in any way. I
              fear that the incident must have a very prejudicial effect upon
              his career.”
            </TextNode>

            <TextNode>“But if the document is found?”</TextNode>

            <TextNode>“Ah, that, of course, would be different.”</TextNode>

            <TextNode>
              “I had one or two questions which I wished to ask you, Lord
              Holdhurst.”
            </TextNode>

            <TextNode>
              “I shall be happy to give you any information in my power.”
            </TextNode>

            <TextNode>
              “Was it in this room that you gave your instructions as to the
              copying of the document?”
            </TextNode>

            <TextNode>“It was.”</TextNode>

            <TextNode>“Then you could hardly have been overheard?”</TextNode>

            <TextNode>“It is out of the question.”</TextNode>

            <TextNode>
              “Did you ever mention to any one that it was your intention to
              give any one the treaty to be copied?”
            </TextNode>

            <TextNode>“Never.”</TextNode>

            <TextNode>“You are certain of that?”</TextNode>

            <TextNode>“Absolutely.”</TextNode>

            <TextNode>
              “Well, since you never said so, and Mr. Phelps never said so, and
              nobody else knew anything of the matter, then the thief's presence
              in the room was purely accidental. He saw his chance and he took
              it.”
            </TextNode>

            <TextNode>
              The statesman smiled. “You take me out of my province there,” said
              he.
            </TextNode>

            <TextNode>
              Holmes considered for a moment. “There is another very important
              point which I wish to discuss with you,” said he. “You feared, as
              I understand, that very grave results might follow from the
              details of this treaty becoming known.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page161;

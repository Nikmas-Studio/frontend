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

function Page287({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;BRUCE-PARTINGTON PLANS'
      />
      <BookMainContainer biggestTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              In the third week of November, in the year 1895, a dense yellow
              fog settled down upon London. From the Monday to the Thursday I
              doubt whether it was ever possible from our windows in Baker
              Street to see the loom of the opposite houses. The first day
              Holmes had spent in cross-indexing his huge book of references.
              The second and third had been patiently occupied upon a subject
              which he hand recently made his hobby—the music of the Middle
              Ages. But when, for the fourth time, after pushing back our chairs
              from breakfast we saw the greasy, heavy brown swirl still drifting
              past us and condensing in oily drops upon the window-panes, my
              comrade's impatient and active nature could endure this drab
              existence no longer. He paced restlessly about our sitting-room in
              a fever of suppressed energy, biting his nails, tapping the
              furniture, and chafing against inaction.
            </TextNode>

            <TextNode>
              “Nothing of interest in the paper, Watson?” he said.
            </TextNode>

            <TextNode>
              In was aware that by anything of interest, Holmes meant anything
              of criminal interest. There was the news of a revolution, of a
              possible war, and of an impending change of government; but these
              did not come within the horizon of my companion. I could see
              nothing recorded in the shape of crime which was not commonplace
              and futile. Holmes groaned and resumed hs restless meanderings.
            </TextNode>

            <TextNode>
              “The London criminal is certainly a dull fellow,” said he in the
              querulous voice of the sportsman whose game has failed him. “Look
              out this window, Watson. See how the figures loom up, are dimly
              seen, and then blend once more into the cloud-bank. The thief or
              the murderer could roam London on such a day as the tiger does the
              jungle, unseen until he pounces, and then evident only to his
              victim.”
            </TextNode>

            <TextNode>
              “There have,” said I, “been numerous petty thefts.”
            </TextNode>

            <TextNode>Holmes snorted his contempt.</TextNode>

            <TextNode>
              “This great and sombre stage is set for something more worthy than
              that,” said he. “It is fortunate for this community that I am not
              a criminal.”
            </TextNode>

            <TextNode>“It is, indeed!” said I heartily.</TextNode>

            <TextNode>
              “Suppose that I were Brooks or Woodhouse, or any of the fifty men
              who have good reason for taking my life, how long could I survive
              against my own pursuit? A summons, a bogus appointment, and all
              would be over. It is well they don't have days of fog in the Latin
              countries—the countries of assassination. By Jove! here comes
              something at last to break our dead monotony.”
            </TextNode>

            <TextNode>
              It was the maid with a telegram. Holmes tore it open and burst out
              laughing.
            </TextNode>

            <TextNode>
              “Well, well! What next?” said he. “Brother Mycroft is coming
              round.”
            </TextNode>

            <TextNode>“Why not?” I asked.</TextNode>

            <TextNode>
              “Why not? It is as if you met a tram-car coming down a country
              lane. Mycroft has his rails and he runs on them. His Pall Mall
              lodgings, the Diogenes Club, Whitehall—that is his cycle. Once,
              and only once, he has been here. What upheaval can possibly have
              derailed him?”
            </TextNode>

            <TextNode>“Does he not explain?”</TextNode>

            <TextNode>Holmes handed me his brother's telegram.</TextNode>

            <Indent>
              <TextNode noIndent>
                Must see you over Cadogen West. Coming at once.
              </TextNode>

              <TextNode noIndent className='italic'>
                — Mycroft.
              </TextNode>
            </Indent>

            <TextNode noIndent>“Cadogen West? I have heard the name.”</TextNode>

            <TextNode>
              “It recalls nothing to my mind. But that Mycroft should break out
              in this erratic fashion! A planet might as well leave its orbit.
              By the way, do you know what Mycroft is?”
            </TextNode>

            <TextNode>
              I had some vague recollection of an explanation at the time of the
              Adventure of the Greek Interpreter.
            </TextNode>

            <TextNode>
              “You told me that he had some small office under the British
              government.”
            </TextNode>

            <TextNode>Holmes chuckled.</TextNode>

            <TextNode>
              “I did not know you quite so well in those days. One has to be
              discreet when one talks of high matters of state. You are right in
              thinking that he under the British government. You would also be
              right in a sense if you said that occasionally he is the British
              government.”
            </TextNode>

            <TextNode>“My dear Holmes!”</TextNode>

            <TextNode>
              “I thought I might surprise you. Mycroft draws four hundred and
              fifty pounds a year, remains a subordinate, has no ambitions of
              any kind, will receive neither honour nor title, but remains the
              most indispensable man in the country.”
            </TextNode>

            <TextNode>“But how?”</TextNode>

            <TextNode>
              “Well, his position is unique. He has made it for himself. There
              has never been anything like it before, nor will be again. He has
              the tidiest and most orderly brain, with the greatest capacity for
              storing facts, of any man living. The same great powers which I
              have turned to the detection of crime he has used for this
              particular business. The conclusions of every department are
              passed to him, and he is the central exchange, the clearinghouse,
              which makes out the balance. All other men are specialists, but
              his specialism is omniscience. We will suppose that a minister
              needs information as to a point which involves the Navy, India,
              Canada and the bimetallic question; he could get his separate
              advices from various departments upon each, but only Mycroft can
              focus them all, and say offhand how each factor would affect the
              other. They began by using him as a short-cut, a convenience; now
              he has made himself an essential. In that great brain of his
              everything is pigeon-holed and can be handed out in an instant.
              Again and again his word has decided the national policy. He lives
              in it. He thinks of nothing else save when, as an intellectual
              exercise, he unbends if I call upon him and ask him to advise me
              on one of my little problems. But Jupiter is descending to-day.
              What on earth can it mean? Who is Cadogan West, and what is he to
              Mycroft?”
            </TextNode>

            <TextNode>
              “I have it,” I cried, and plunged among the litter of papers upon
              the sofa. “Yes, yes, here he is, sure enough! Cadogen West was the
              young man who was found dead on the Underground on Tuesday
              morning.”
            </TextNode>

            <TextNode>
              Holmes sat up at attention, his pipe halfway to his lips.
            </TextNode>

            <TextNode>
              “This must be serious, Watson. A death which has caused my brother
              to alter his habits can be no ordinary one. What in the world can
              he have to do with it? The case was featureless as I remember it.
              The young man had apparently fallen out of the train and killed
              himself. He had not been robbed, and there was no particular
              reason to suspect violence. Is that not so?”
            </TextNode>

            <TextNode>
              “There has been an inquest,” said I, “and a good many fresh facts
              have come out. Looked at more closely, I should certainly say that
              it was a curious case.”
            </TextNode>

            <TextNode>
              “Judging by its effect upon my brother, I should think it must be
              a most extraordinary one.” He snuggled down in his armchair. “Now,
              Watson, let us have the facts.”
            </TextNode>

            <TextNode>
              “The man's name was Arthur Cadogan West. He was twenty-seven years
              of age, unmarried, and a clerk at Woolwich Arsenal.”
            </TextNode>

            <TextNode>
              “Government employ. Behold the link with Brother Mycroft!”
            </TextNode>

            <TextNode>
              “He left Woolwich suddenly on Monday night. Was last seen by his
              fiancee, Miss Violet Westbury, whom he left abruptly in the fog
              about 7.30 that evening. There was no quarrel between them and she
              can give no motive for his action. The next thing heard of him was
              when his dead body was discovered by a plate-layer named Mason,
              just outside Aldgate Station on the Underground system in London.”
            </TextNode>

            <TextNode>“When?”</TextNode>

            <TextNode>
              “The body was found at six on Tuesday morning. It was lying wide
              of the metals upon the left hand of the track as one goes
              eastward, at a point close to the station, where the line emerges
              from the tunnel in which it runs. The head was badly crushed—an
              injury which might well have been caused by a fall from the train.
              The body could only have come on the line in that way. Had it been
              carried down from any neighbouring street, it must have passed the
              station barriers, where a collector is always standing. This point
              seems absolutely certain.”
            </TextNode>

            <TextNode>
              “Very good. The case is definite enough. The man, dead or alive,
              either fell or was precipitated from a train. So much is clear to
              me. Continue.”
            </TextNode>

            <TextNode>
              “The trains which traverse the lines of rail beside which the body
              was found are those which run from west to east, some being purely
              Metropolitan, and some from Willesden and outlying junctions. It
              can be stated for certain that this young man, when he met his
              death, was travelling in this direction at some late hour of the
              night, but at what point he entered the train it is impossible to
              state.”
            </TextNode>

            <TextNode>“His ticket, of course, would show that.”</TextNode>

            <TextNode>“There was no ticket in his pockets.”</TextNode>

            <TextNode>
              “No ticket! Dear me, Watson, this is really very singular.
              According to my experience it is not possible to reach the
              platform of a Metropolitan train without exhibiting one's ticket.
              Presumably, then, the young man had one. Was it taken from him in
              order to conceal the station from which he came? It is possible.
              Or did he drop it in the carriage? That is also possible. But the
              point is of curious interest. I understand that there was no sign
              of robbery?”
            </TextNode>

            <TextNode>
              “Apparently not. There is a list here of his possessions. His
              purse contained two pounds fifteen. He had also a check-book on
              the Woolwich branch of the Capital and Counties Bank. Through this
              his identity was established. There were also two dress-circle
              tickets for the Woolwich Theatre, dated for that very evening.
              Also a small packet of technical papers.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              Holmes gave an exclamation of satisfaction.
            </TextNode>

            <TextNode>
              “There we have it at last, Watson! British government—Woolwich.
              Arsenal—technical papers—Brother Mycroft, the chain is complete.
              But here he comes, if I am not mistaken, to speak for himself.”
            </TextNode>

            <TextNode>
              A moment later the tall and portly form of Mycroft Holmes was
              ushered into the room. Heavily built and massive, there was a
              suggestion of uncouth physical inertia in the figure, but above
              this unwieldy frame there was perched a head so masterful in its
              brow, so alert in its steel-gray, deep-set eyes, so firm in its
              lips, and so subtle in its play of expression, that after the
              first glance one forgot the gross body and remembered only the
              dominant mind.
            </TextNode>

            <TextNode>
              At his heels came our old friend Lestrade, of Scotland Yard—thin
              and austere. The gravity of both their faces foretold some weighty
              quest. The detective shook hands without a word. Mycroft Holmes
              struggled out of his overcoat and subsided into an armchair.
            </TextNode>

            <TextNode>
              “A most annoying business, Sherlock,” said he. “I extremely
              dislike altering my habits, but the powers that be would take no
              denial. In the present state of Siam it is most awkward that I
              should be away from the office. But it is a real crisis. I have
              never seen the Prime Minister so upset. As to the Admiralty—it is
              buzzing like an overturned bee-hive. Have you read up the case?”
            </TextNode>

            <TextNode>
              “We have just done so. What were the technical papers?”
            </TextNode>

            <TextNode>
              “Ah, there's the point! Fortunately, it has not come out. The
              press would be furious if it did. The papers which this wretched
              youth had in his pocket were the plans of the Bruce-Partington
              submarine.”
            </TextNode>

            <TextNode>
              Mycroft Holmes spoke with a solemnity which showed his sense of
              the importance of the subject. His brother and I sat expectant.
            </TextNode>

            <TextNode>
              “Surely you have heard of it? I thought everyone had heard of it.”
            </TextNode>

            <TextNode>“Only as a name.”</TextNode>

            <TextNode>
              “Its importance can hardly be exaggerated. It has been the most
              jealously guarded of all government secrets. You may take it from
              me that naval warfare becomes impossible within the radius of a
              Bruce-Partington's operation. Two years ago a very large sum was
              smuggled through the Estimates and was expended in acquiring a
              monopoly of the invention. Every effort has been made to keep the
              secret. The plans, which are exceedingly intricate, comprising
              some thirty separate patents, each essential to the working of the
              whole, are kept in an elaborate safe in a confidential office
              adjoining the arsenal, with burglar-proof doors and windows. Under
              no conceivable circumstances were the plans to be taken from the
              office. If the chief constructor of the Navy desired to consult
              them, even he was forced to go to the Woolwich office for the
              purpose. And yet here we find them in the pocket of a dead junior
              clerk in the heart of London. From an official point of view it's
              simply awful.”
            </TextNode>

            <TextNode>“But you have recovered them?”</TextNode>

            <TextNode>
              “No, Sherlock, no! That's the pinch. We have not. Ten papers were
              taken from Woolwich. There were seven in the pocket of Cadogan
              West. The three most essential are gone—stolen, vanished. You must
              drop everything, Sherlock. Never mind your usual petty puzzles of
              the police-court. It's a vital international problem that you have
              to solve. Why did Cadogan West take the papers, where are the
              missing ones, how did he die, how came his body where it was
              found, how can the evil be set right? Find an answer to all these
              questions, and you will have done good service for your country.”
            </TextNode>

            <TextNode>
              “Why do you not solve it yourself, Mycroft? You can see as far as
              I.”
            </TextNode>

            <TextNode>
              “Possibly, Sherlock. But it is a question of getting details. Give
              me your details, and from an armchair I will return you an
              excellent expert opinion. But to run here and run there, to
              cross-question railway guards, and lie on my face with a lens to
              my eye—it is not my métier. No, you are the one man who can clear
              the matter up. If you have a fancy to see your name in the next
              honours list—”
            </TextNode>

            <TextNode>My friend smiled and shook his head.</TextNode>

            <TextNode>
              “I play the game for the game's own sake,” said he. “But the
              problem certainly presents some points of interest, and I shall be
              very pleased to look into it. Some more facts, please.”
            </TextNode>

            <TextNode>
              “I have jotted down the more essential ones upon this sheet of
              paper, together with a few addresses which you will find of
              service. The actual official guardian of the papers is the famous
              government expert, Sir James Walter, whose decorations and
              sub-titles fill two lines of a book of reference. He has grown
              gray in the service, is a gentleman, a favoured guest in the most
              exalted houses, and, above all, a man whose patriotism is beyond
              suspicion. He is one of two who have a key of the safe. I may add
              that the papers were undoubtedly in the office during working
              hours on Monday, and that Sir James left for London about three
              o'clock taking his key with him. He was at the house of Admiral
              Sinclair at Barclay Square during the whole of the evening when
              this incident occurred.”
            </TextNode>

            <TextNode>“Has the fact been verified?”</TextNode>

            <TextNode>
              “Yes; his brother, Colonel Valentine Walter, has testified to his
              departure from Woolwich, and Admiral Sinclair to his arrival in
              London; so Sir James is no longer a direct factor in the problem.”
            </TextNode>

            <TextNode>“Who was the other man with a key?”</TextNode>

            <TextNode>
              “The senior clerk and draughtsman, Mr. Sidney Johnson. He is a man
              of forty, married, with five children. He is a silent, morose man,
              but he has, on the whole, an excellent record in the public
              service. He is unpopular with his colleagues, but a hard worker.
              According to his own account, corroborated only by the word of his
              wife, he was at home the whole of Monday evening after office
              hours, and his key has never left the watch-chain upon which it
              hangs.”
            </TextNode>

            <TextNode>“Tell us about Cadogan West.”</TextNode>

            <TextNode>
              “He has been ten years in the service and has done good work. He
              has the reputation of being hot-headed and imperious, but a
              straight, honest man. We have nothing against him. He was next
              Sidney Johnson in the office. His duties brought him into daily,
              personal contact with the plans. No one else had the handling of
              them.”
            </TextNode>

            <TextNode>“Who locked up the plans that night?”</TextNode>

            <TextNode>“Mr. Sidney Johnson, the senior clerk.”</TextNode>

            <TextNode>
              “Well, it is surely perfectly clear who took them away. They are
              actually found upon the person of this junior clerk, Cadogan West.
              That seems final, does it not?”
            </TextNode>

            <TextNode>
              “It does, Sherlock, and yet it leaves so much unexplained. In the
              first place, why did he take them?”
            </TextNode>

            <TextNode>“I presume they were of value?”</TextNode>

            <TextNode>
              “He could have got several thousands for them very easily.”
            </TextNode>

            <TextNode>
              “Can you suggest any possible motive for taking the papers to
              London except to sell them?”
            </TextNode>

            <TextNode>“No, I cannot.”</TextNode>

            <TextNode>
              “Then we must take that as our working hypothesis. Young West took
              the papers. Now this could only be done by having a false key—”
            </TextNode>

            <TextNode>
              “Several false keys. He had to open the building and the room.”
            </TextNode>

            <TextNode>
              “He had, then, several false keys. He took the papers to London to
              sell the secret, intending, no doubt, to have the plans themselves
              back in the safe next morning before they were missed. While in
              London on this treasonable mission he met his end.”
            </TextNode>

            <TextNode>“How?”</TextNode>

            <TextNode>
              “We will suppose that he was travelling back to Woolwich when he
              was killed and thrown out of the compartment.”
            </TextNode>

            <TextNode>
              “Aldgate, where the body was found, is considerably past the
              station London Bridge, which would be his route to Woolwich.”
            </TextNode>

            <TextNode>
              “Many circumstances could be imagined under which he would pass
              London Bridge. There was someone in the carriage, for example,
              with whom he was having an absorbing interview. This interview led
              to a violent scene in which he lost his life. Possibly he tried to
              leave the carriage, fell out on the line, and so met his end. The
              other closed the door. There was a thick fog, and nothing could be
              seen.”
            </TextNode>

            <TextNode>
              “No better explanation can be given with our present knowledge;
              and yet consider, Sherlock, how much you leave untouched. We will
              suppose, for argument's sake, that young Cadogan West had
              determined to convey these papers to London. He would naturally
              have made an appointment with the foreign agent and kept his
              evening clear. Instead of that he took two tickets for the
              theatre, escorted his fiancee halfway there, and then suddenly
              disappeared.”
            </TextNode>

            <TextNode>
              “A blind,” said Lestrade, who had sat listening with some
              impatience to the conversation.
            </TextNode>

            <TextNode>
              “A very singular one. That is objection No. 1. Objection No. 2: We
              will suppose that he reaches London and sees the foreign agent. He
              must bring back the papers before morning or the loss will be
              discovered. He took away ten. Only seven were in his pocket. What
              had become of the other three? He certainly would not leave them
              of his own free will. Then, again, where is the price of his
              treason? Once would have expected to find a large sum of money in
              his pocket.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page287;

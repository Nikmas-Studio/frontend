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

function Page212({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;SECOND&nbsp;STAIN'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Mr. Holmes,” she said, and her white-gloved hands clasped and
              unclasped as she spoke—“I will speak frankly to you in the hope
              that it may induce you to speak frankly in return. There is
              complete confidence between my husband and me on all matters save
              one. That one is politics. On this his lips are sealed. He tells
              me nothing. Now, I am aware that there was a most deplorable
              occurrence in our house last night. I know that a paper has
              disappeared. But because the matter is political my husband
              refuses to take me into his complete confidence. Now it is
              essential—essential, I say—that I should thoroughly understand it.
              You are the only other person, save only these politicians, who
              knows the true facts. I beg you, then, Mr. Holmes, to tell me
              exactly what has happened and what it will lead to. Tell me all,
              Mr. Holmes. Let no regard for your client's interests keep you
              silent, for I assure you that his interests, if he would only see
              it, would be best served by taking me into his complete
              confidence. What was this paper which was stolen?”
            </TextNode>

            <TextNode>“Madam, what you ask me is really impossible.”</TextNode>

            <TextNode>She groaned and sank her face in her hands.</TextNode>

            <TextNode>
              “You must see that this is so, madam. If your husband thinks fit
              to keep you in the dark over this matter, is it for me, who has
              only learned the true facts under the pledge of professional
              secrecy, to tell what he has withheld? It is not fair to ask it.
              It is him whom you must ask.”
            </TextNode>

            <TextNode>
              “I have asked him. I come to you as a last resource. But without
              your telling me anything definite, Mr. Holmes, you may do a great
              service if you would enlighten me on one point.”
            </TextNode>

            <TextNode>“What is it, madam?”</TextNode>

            <TextNode>
              “Is my husband's political career likely to suffer through this
              incident?”
            </TextNode>

            <TextNode>
              “Well, madam, unless it is set right it may certainly have a very
              unfortunate effect.”
            </TextNode>

            <TextNode>
              “Ah!” She drew in her breath sharply as one whose doubts are
              resolved.
            </TextNode>

            <TextNode>
              “One more question, Mr. Holmes. From an expression which my
              husband dropped in the first shock of this disaster I understood
              that terrible public consequences might arise from the loss of
              this document.”
            </TextNode>

            <TextNode>“If he said so, I certainly cannot deny it.”</TextNode>

            <TextNode>“Of what nature are they?”</TextNode>

            <TextNode>
              “Nay, madam, there again you ask me more than I can possibly
              answer.”
            </TextNode>

            <TextNode>
              “Then I will take up no more of your time. I cannot blame you, Mr.
              Holmes, for having refused to speak more freely, and you on your
              side will not, I am sure, think the worse of me because I desire,
              even against his will, to share my husband's anxieties. Once more
              I beg that you will say nothing of my visit.” She looked back at
              us from the door, and I had a last impression of that beautiful
              haunted face, the startled eyes, and the drawn mouth. Then she was
              gone.
            </TextNode>

            <TextNode>
              “Now, Watson, the fair sex is your department,” said Holmes, with
              a smile, when the dwindling frou-frou of skirts had ended in the
              slam of the front door. “What was the fair lady's game? What did
              she really want?”
            </TextNode>

            <TextNode>
              “Surely her own statement is clear and her anxiety very natural.”
            </TextNode>

            <TextNode>
              “Hum! Think of her appearance, Watson—her manner, her suppressed
              excitement, her restlessness, her tenacity in asking questions.
              Remember that she comes of a caste who do not lightly show
              emotion.”
            </TextNode>

            <TextNode>“She was certainly much moved.”</TextNode>

            <TextNode>
              “Remember also the curious earnestness with which she assured us
              that it was best for her husband that she should know all. What
              did she mean by that? And you must have observed, Watson, how she
              manoeuvred to have the light at her back. She did not wish us to
              read her expression.”
            </TextNode>

            <TextNode>“Yes; she chose the one chair in the room.”</TextNode>

            <TextNode>
              “And yet the motives of women are so inscrutable. You remember the
              woman at Margate whom I suspected for the same reason. No powder
              on her nose—that proved to be the correct solution. How can you
              build on such a quicksand? Their most trivial action may mean
              volumes, or their most extraordinary conduct may depend upon a
              hairpin or a curling-tongs. Good morning, Watson.”
            </TextNode>

            <TextNode>“You are off?”</TextNode>

            <TextNode>
              “Yes; I will wile away the morning at Godolphin Street with our
              friends of the regular establishment. With Eduardo Lucas lies the
              solution of our problem, though I must admit that I have not an
              inkling as to what form it may take. It is a capital mistake to
              theorize in advance of the facts. Do you stay on guard, my good
              Watson, and receive any fresh visitors. I'll join you at lunch if
              I am able.”
            </TextNode>

            <TextNode>
              All that day and the next and the next Holmes was in a mood which
              his friends would call taciturn, and others morose. He ran out and
              ran in, smoked incessantly, played snatches on his violin, sank
              into reveries, devoured sandwiches at irregular hours, and hardly
              answered the casual questions which I put to him. It was evident
              to me that things were not going well with him or his quest. He
              would say nothing of the case, and it was from the papers that I
              learned the particulars of the inquest, and the arrest with the
              subsequent release of John Mitton, the valet of the deceased. The
              coroner's jury brought in the obvious “Wilful Murder,” but the
              parties remained as unknown as ever. No motive was suggested. The
              room was full of articles of value, but none had been taken. The
              dead man's papers had not been tampered with. They were carefully
              examined, and showed that he was a keen student of international
              politics, an indefatigable gossip, a remarkable linguist, and an
              untiring letter-writer. He had been on intimate terms with the
              leading politicians of several countries. But nothing sensational
              was discovered among the documents which filled his drawers. As to
              his relations with women, they appeared to have been promiscuous
              but superficial. He had many acquaintances among them, but few
              friends, and no one whom he loved. His habits were regular, his
              conduct inoffensive. His death was an absolute mystery, and likely
              to remain so.
            </TextNode>

            <TextNode>
              As to the arrest of John Mitton, the valet, it was a counsel of
              despair as an alternative to absolute inaction. But no case could
              be sustained against him. He had visited friends in Hammersmith
              that night. The alibi was complete. It is true that he started
              home at an hour which should have brought him to Westminster
              before the time when the crime was discovered, but his own
              explanation that he had walked part of the way seemed probable
              enough in view of the fineness of the night. He had actually
              arrived at twelve o'clock, and appeared to be overwhelmed by the
              unexpected tragedy. He had always been on good terms with his
              master. Several of the dead man's possessions—notably a small case
              of razors—had been found in the valet's boxes, but he explained
              that they had been presents from the deceased, and the housekeeper
              was able to corroborate the story. Mitton had been in Lucas's
              employment for three years. It was noticeable that Lucas did not
              take Mitton on the Continent with him. Sometimes he visited Paris
              for three months on end, but Mitton was left in charge of the
              Godolphin Street house. As to the housekeeper, she had heard
              nothing on the night of the crime. If her master had a visitor he
              had himself admitted him.
            </TextNode>

            <TextNode>
              So for three mornings the mystery remained, so far as I could
              follow it in the papers. If Holmes knew more he kept his own
              counsel, but, as he told me that Inspector Lestrade had taken him
              into his confidence in the case, I knew that he was in close touch
              with every development. Upon the fourth day there appeared a long
              telegram from Paris which seemed to solve the whole question.
            </TextNode>

            <TextNode>
              A discovery has just been made by the Parisian police [said{' '}
              <span className='italic'>The Daily Telegraph</span>] which raises
              the veil which hung round the tragic fate of Mr. Eduardo Lucas,
              who met his death by violence last Monday night at Godolphin
              Street, Westminster. Our readers will remember that the deceased
              gentleman was found stabbed in his room, and that some suspicion
              attached to his valet, but that the case broke down on an alibi.
              Yesterday a lady, who has been known as Mme. Henri Fournaye,
              occupying a small villa in the Rue Austerlitz, was reported to the
              authorities by her servants as being insane. An examination showed
              that she had indeed developed mania of a dangerous and permanent
              form. On inquiry the police have discovered that Mme. Henri
              Fournaye only returned from a journey to London on Tuesday last,
              and there is evidence to connect her with the crime at
              Westminster. A comparison of photographs has proved conclusively
              that M. Henri Fournaye and Eduardo Lucas were really one and the
              same person, and that the deceased had for some reason lived a
              double life in London and Paris. Mme. Fournaye, who is of Creole
              origin, is of an extremely excitable nature, and has suffered in
              the past from attacks of jealousy which have amounted to frenzy.
              It is conjectured that it was in one of these that she committed
              the terrible crime which has caused such a sensation in London.
              Her movements upon the Monday night have not yet been traced, but
              it is undoubted that a woman answering to her description
              attracted much attention at Charing Cross Station on Tuesday
              morning by the wildness of her appearance and the violence of her
              gestures. It is probable, therefore, that the crime was either
              committed when insane, or that its immediate effect was to drive
              the unhappy woman out of her mind. At present she is unable to
              give any coherent account of the past, and the doctors hold out no
              hopes of the re-establishment of her reason. There is evidence
              that a woman, who might have been Mme. Fournaye, was seen for some
              hours on Monday night watching the house in Godolphin Street.
            </TextNode>
            <TextNode>
              “What do you think of that, Holmes?” I had read the account aloud
              to him, while he finished his breakfast.
            </TextNode>

            <TextNode>
              “My dear Watson,” said he, as he rose from the table and paced up
              and down the room, “you are most long-suffering, but if I have
              told you nothing in the last three days it is because there is
              nothing to tell. Even now this report from Paris does not help us
              much.”
            </TextNode>

            <TextNode>
              “Surely it is final as regards the man's death.”
            </TextNode>

            <TextNode>
              “The man's death is a mere incident—a trivial episode—in
              comparison with our real task, which is to trace this document and
              save a European catastrophe. Only one important thing has happened
              in the last three days, and that is that nothing has happened. I
              get reports almost hourly from the Government, and it is certain
              that nowhere in Europe is there any sign of trouble. Now, if this
              letter were loose—no, it can't be loose—but if it isn't loose,
              where can it be? Who has it? Why is it held back? That's the
              question that beats in my brain like a hammer. Was it, indeed, a
              coincidence that Lucas should meet his death on the night when the
              letter disappeared? Did the letter ever reach him? If so, why is
              it not among his papers? Did this mad wife of his carry it off
              with her? If so, is it in her house in Paris? How could I search
              for it without the French police having their suspicions aroused?
              It is a case, my dear Watson, where the law is as dangerous to us
              as the criminals are. Every man's hand is against us, and yet the
              interests at stake are colossal. Should I bring it to a successful
              conclusion it will certainly represent the crowning glory of my
              career. Ah, here is my latest from the front!” He glanced
              hurriedly at the note which had been handed in. “Halloa! Lestrade
              seems to have observed something of interest. Put on your hat,
              Watson, and we will stroll down together to Westminster.”
            </TextNode>

            <TextNode>
              It was my first visit to the scene of the crime—a high, dingy,
              narrow-chested house, prim, formal, and solid, like the century
              which gave it birth. Lestrade's bulldog features gazed out at us
              from the front window, and he greeted us warmly when a big
              constable had opened the door and let us in. The room into which
              we were shown was that in which the crime had been committed, but
              no trace of it now remained, save an ugly, irregular stain upon
              the carpet. This carpet was a small square drugget in the centre
              of the room, surrounded by a broad expanse of beautiful,
              old-fashioned wood-flooring in square blocks highly polished. Over
              the fireplace was a magnificent trophy of weapons, one of which
              had been used on that tragic night. In the window was a sumptuous
              writing-desk, and every detail of the apartment, the pictures, the
              rugs, and the hangings, all pointed to a taste which was luxurious
              to the verge of effeminacy.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“Seen the Paris news?” asked Lestrade.</TextNode>

            <TextNode>Holmes nodded.</TextNode>

            <TextNode>
              “Our French friends seem to have touched the spot this time. No
              doubt it's just as they say. She knocked at the door—surprise
              visit, I guess, for he kept his life in water-tight compartments.
              He let her in—couldn't keep her in the street. She told him how
              she had traced him, reproached him, one thing led to another, and
              then with that dagger so handy the end soon came. It wasn't all
              done in an instant, though, for these chairs were all swept over
              yonder, and he had one in his hand as if he had tried to hold her
              off with it. We've got it all clear as if we had seen it.”
            </TextNode>

            <TextNode>Holmes raised his eyebrows.</TextNode>

            <TextNode>“And yet you have sent for me?”</TextNode>

            <TextNode>
              “Ah, yes, that's another matter—a mere trifle, but the sort of
              thing you take an interest in—queer, you know, and what you might
              call freakish. It has nothing to do with the main fact—can't have,
              on the face of it.”
            </TextNode>

            <TextNode>“What is it, then?”</TextNode>

            <TextNode>
              “Well, you know, after a crime of this sort we are very careful to
              keep things in their position. Nothing has been moved. Officer in
              charge here day and night. This morning, as the man was buried and
              the investigation over—so far as this room is concerned—we thought
              we could tidy up a bit. This carpet. You see, it is not fastened
              down; only just laid there. We had occasion to raise it. We
              found—”
            </TextNode>

            <TextNode>“Yes? You found—”</TextNode>

            <TextNode>Holmes's face grew tense with anxiety.</TextNode>

            <TextNode>
              “Well, I'm sure you would never guess in a hundred years what we
              did find. You see that stain on the carpet? Well, a great deal
              must have soaked through, must it not?”
            </TextNode>

            <TextNode>“Undoubtedly it must.”</TextNode>

            <TextNode>
              “Well, you will be surprised to hear that there is no stain on the
              white woodwork to correspond.”
            </TextNode>

            <TextNode>“No stain! But there must—”</TextNode>

            <TextNode>
              “Yes; so you would say. But the fact remains that there isn't.”
            </TextNode>

            <TextNode>
              He took the corner of the carpet in his hand and, turning it over,
              he showed that it was indeed as he said.
            </TextNode>

            <TextNode>
              “But the underside is as stained as the upper. It must have left a
              mark.”
            </TextNode>

            <TextNode>
              Lestrade chuckled with delight at having puzzled the famous
              expert.
            </TextNode>

            <TextNode>
              “Now I'll show you the explanation. There is a second stain, but
              it does not correspond with the other. See for yourself.” As he
              spoke he turned over another portion of the carpet, and there,
              sure enough, was a great crimson spill upon the square white
              facing of the old-fashioned floor. “What do you make of that, Mr.
              Holmes?”
            </TextNode>

            <TextNode>
              “Why, it is simple enough. The two stains did correspond, but the
              carpet has been turned round. As it was square and unfastened it
              was easily done.”
            </TextNode>

            <TextNode>
              “The official police don't need you, Mr. Holmes, to tell them that
              the carpet must have been turned round. That's clear enough, for
              the stains lie above each other—if you lay it over this way. But
              what I want to know is, who shifted the carpet, and why?”
            </TextNode>

            <TextNode>
              I could see from Holmes's rigid face that he was vibrating with
              inward excitement.
            </TextNode>

            <TextNode>
              “Look here, Lestrade,” said he, “has that constable in the passage
              been in charge of the place all the time?”
            </TextNode>

            <TextNode>“Yes, he has.”</TextNode>

            <TextNode>
              “Well, take my advice. Examine him carefully. Don't do it before
              us. We'll wait here. You take him into the back room. You'll be
              more likely to get a confession out of him alone. Ask him how he
              dared to admit people and leave them alone in this room. Don't ask
              him if he has done it. Take it for granted. Tell him you know
              someone has been here. Press him. Tell him that a full confession
              is his only chance of forgiveness. Do exactly what I tell you!”
            </TextNode>

            <TextNode>
              “By George, if he knows I'll have it out of him!” cried Lestrade.
              He darted into the hall, and a few moments later his bullying
              voice sounded from the back room.
            </TextNode>

            <TextNode>
              “Now, Watson, now!” cried Holmes, with frenzied eagerness. All the
              demoniacal force of the man masked behind that listless manner
              burst out in a paroxysm of energy. He tore the drugget from the
              floor, and in an instant was down on his hands and knees clawing
              at each of the squares of wood beneath it. One turned sideways as
              he dug his nails into the edge of it. It hinged back like the lid
              of a box. A small black cavity opened beneath it. Holmes plunged
              his eager hand into it, and drew it out with a bitter snarl of
              anger and disappointment. It was empty.
            </TextNode>

            <TextNode>
              “Quick, Watson, quick! Get it back again!” The wooden lid was
              replaced, and the drugget had only just been drawn straight when
              Lestrade's voice was heard in the passage. He found Holmes leaning
              languidly against the mantelpiece, resigned and patient,
              endeavouring to conceal his irrepressible yawns.
            </TextNode>

            <TextNode>
              “Sorry to keep you waiting, Mr. Holmes. I can see that you are
              bored to death with the whole affair. Well, he has confessed, all
              right. Come in here, MacPherson. Let these gentlemen hear of your
              most inexcusable conduct.”
            </TextNode>

            <TextNode>
              The big constable, very hot and penitent, sidled into the room.
            </TextNode>

            <TextNode>
              “I meant no harm, sir, I'm sure. The young woman came to the door
              last evening—mistook the house, she did. And then we got talking.
              It's lonesome, when you're on duty here all day.”
            </TextNode>

            <TextNode>“Well, what happened then?”</TextNode>

            <TextNode>
              “She wanted to see where the crime was done—had read about it in
              the papers, she said. She was a very respectable, well-spoken
              young woman, sir, and I saw no harm in letting her have a peep.
              When she saw that mark on the carpet, down she dropped on the
              floor, and lay as if she were dead. I ran to the back and got some
              water, but I could not bring her to. Then I went round the corner
              to the Ivy Plant for some brandy, and by the time I had brought it
              back the young woman had recovered and was off—ashamed of herself,
              I dare say, and dared not face me.”
            </TextNode>

            <TextNode>“How about moving that drugget?”</TextNode>

            <TextNode>
              “Well, sir, it was a bit rumpled, certainly, when I came back. You
              see, she fell on it, and it lies on a polished floor with nothing
              to keep it in place. I straightened it out afterwards.”
            </TextNode>

            <TextNode>
              “It's a lesson to you that you can't deceive me, Constable
              MacPherson,” said Lestrade, with dignity. “No doubt you thought
              that your breach of duty could never be discovered, and yet a mere
              glance at that drugget was enough to convince me that someone had
              been admitted to the room. It's lucky for you, my man, that
              nothing is missing, or you would find yourself in Queer Street.
              I'm sorry to have called you down over such a petty business, Mr.
              Holmes, but I thought the point of the second stain not
              corresponding with the first would interest you.”
            </TextNode>

            <TextNode>
              “Certainly, it was most interesting. Has this woman only been here
              once, constable?”
            </TextNode>

            <TextNode>“Yes, sir, only once.”</TextNode>

            <TextNode>“Who was she?”</TextNode>

            <TextNode>
              “Don't know the name, sir. Was answering an advertisement about
              type-writing, and came to the wrong number—very pleasant, genteel
              young woman, sir.”
            </TextNode>

            <TextNode>“Tall? Handsome?”</TextNode>

            <TextNode>
              “Yes, sir; she was a well-grown young woman. I suppose you might
              say she was handsome. Perhaps some would say she was very
              handsome. ‘Oh, officer, do let me have a peep!’ says she. She had
              pretty, coaxing ways, as you might say, and I thought there was no
              harm in letting her just put her head through the door.”
            </TextNode>

            <TextNode>“How was she dressed?”</TextNode>

            <TextNode>“Quiet, sir—a long mantle down to her feet.”</TextNode>

            <TextNode>“What time was it?”</TextNode>

            <TextNode>
              “It was just growing dusk at the time. They were lighting the
              lamps as I came back with the brandy.”
            </TextNode>

            <TextNode>
              “Very good,” said Holmes. “Come, Watson, I think that we have more
              important work elsewhere.”
            </TextNode>

            <TextNode>
              As we left the house Lestrade remained in the front room, while
              the repentant constable opened the door to let us out. Holmes
              turned on the step and held up something in his hand. The
              constable stared intently.
            </TextNode>

            <TextNode>
              “Good Lord, sir!” he cried, with amazement on his face. Holmes put
              his finger on his lips, replaced his hand in his breast-pocket,
              and burst out laughing as we turned down the street. “Excellent!”
              said he. “Come, friend Watson, the curtain rings up for the last
              act. You will be relieved to hear that there will be no war, that
              the Right Honourable Trelawney Hope will suffer no set-back in his
              brilliant career, that the indiscreet Sovereign will receive no
              punishment for his indiscretion, that the Prime Minister will have
              no European complication to deal with, and that with a little tact
              and management upon our part nobody will be a penny the worse for
              what might have been a very ugly incident.”
            </TextNode>

            <TextNode>
              My mind filled with admiration for this extraordinary man.
            </TextNode>

            <TextNode>“You have solved it!” I cried.</TextNode>

            <TextNode>
              “Hardly that, Watson. There are some points which are as dark as
              ever. But we have so much that it will be our own fault if we
              cannot get the rest. We will go straight to Whitehall Terrace and
              bring the matter to a head.”
            </TextNode>

            <TextNode>
              When we arrived at the residence of the European Secretary it was
              for Lady Hilda Trelawney Hope that Sherlock Holmes inquired. We
              were shown into the morning-room.
            </TextNode>

            <TextNode>
              “Mr. Holmes!” said the lady, and her face was pink with her
              indignation, “this is surely most unfair and ungenerous upon your
              part. I desired, as I have explained, to keep my visit to you a
              secret, lest my husband should think that I was intruding into his
              affairs. And yet you compromise me by coming here and so showing
              that there are business relations between us.”
            </TextNode>

            <TextNode>
              “Unfortunately, madam, I had no possible alternative. I have been
              commissioned to recover this immensely important paper. I must
              therefore ask you, madam, to be kind enough to place it in my
              hands.”
            </TextNode>

            <TextNode>
              The lady sprang to her feet, with the colour all dashed in an
              instant from her beautiful face. Her eyes glazed—she tottered—I
              thought that she would faint. Then with a grand effort she rallied
              from the shock, and a supreme astonishment and indignation chased
              every other expression from her features.
            </TextNode>

            <TextNode>“You—you insult me, Mr. Holmes.”</TextNode>

            <TextNode>
              “Come, come, madam, it is useless. Give up the letter.”
            </TextNode>

            <TextNode>She darted to the bell.</TextNode>

            <TextNode>“The butler shall show you out.”</TextNode>

            <TextNode>
              “Do not ring, Lady Hilda. If you do, then all my earnest efforts
              to avoid a scandal will be frustrated. Give up the letter and all
              will be set right. If you will work with me I can arrange
              everything. If you work against me I must expose you.”
            </TextNode>

            <TextNode>
              She stood grandly defiant, a queenly figure, her eyes fixed upon
              his as if she would read his very soul. Her hand was on the bell,
              but she had forborne to ring it.
            </TextNode>

            <TextNode>
              “You are trying to frighten me. It is not a very manly thing, Mr.
              Holmes, to come here and browbeat a woman. You say that you know
              something. What is it that you know?”
            </TextNode>

            <TextNode>
              “Pray sit down, madam. You will hurt yourself there if you fall. I
              will not speak until you sit down. Thank you.”
            </TextNode>

            <TextNode>“I give you five minutes, Mr. Holmes.”</TextNode>

            <TextNode>
              “One is enough, Lady Hilda. I know of your visit to Eduardo Lucas,
              of your giving him this document, of your ingenious return to the
              room last night, and of the manner in which you took the letter
              from the hiding-place under the carpet.”
            </TextNode>
            <TextNode>
              She stared at him with an ashen face and gulped twice before she
              could speak.
            </TextNode>

            <TextNode>
              “You are mad, Mr. Holmes—you are mad!” she cried, at last.
            </TextNode>

            <TextNode>
              He drew a small piece of cardboard from his pocket. It was the
              face of a woman cut out of a portrait.
            </TextNode>

            <TextNode>
              “I have carried this because I thought it might be useful,” said
              he. “The policeman has recognised it.”
            </TextNode>

            <TextNode>
              She gave a gasp and her head dropped back in the chair.
            </TextNode>

            <TextNode>
              “Come, Lady Hilda. You have the letter. The matter may still be
              adjusted. I have no desire to bring trouble to you. My duty ends
              when I have returned the lost letter to your husband. Take my
              advice and be frank with me; it is your only chance.”
            </TextNode>

            <TextNode>
              Her courage was admirable. Even now she would not own defeat.
            </TextNode>

            <TextNode>
              “I tell you again, Mr. Holmes, that you are under some absurd
              illusion.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page212;

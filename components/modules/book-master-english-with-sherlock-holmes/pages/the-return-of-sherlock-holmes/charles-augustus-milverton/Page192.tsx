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

function Page192({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;CHARLES AUGUSTUS&nbsp;MILVERTON'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              It is years since the incidents of which I speak took place, and
              yet it is with diffidence that I allude to them. For a long time,
              even with the utmost discretion and reticence, it would have been
              impossible to make the facts public; but now the principal person
              concerned is beyond the reach of human law, and with due
              suppression the story may be told in such fashion as to injure no
              one. It records an absolutely unique experience in the career both
              of Mr. Sherlock Holmes and of myself. The reader will excuse me if
              I conceal the date or any other fact by which he might trace the
              actual occurrence.
            </TextNode>

            <TextNode>
              We had been out for one of our evening rambles, Holmes and I, and
              had returned about six o'clock on a cold, frosty winter's evening.
              As Holmes turned up the lamp the light fell upon a card on the
              table. He glanced at it, and then, with an ejaculation of disgust,
              threw it on the floor. I picked it up and read:—
            </TextNode>

            <TextNode className='text-center  italic'>
              Charles Augustus Milverton,
            </TextNode>
            <TextNode className='text-center'>Appledore Towers,</TextNode>
            <TextNode className='text-center'>Hampstead.</TextNode>
            <TextNode className='text-center'>Agent.</TextNode>

            <TextNode noIndent>“Who is he?” I asked.</TextNode>

            <TextNode>
              “The worst man in London,” Holmes answered, as he sat down and
              stretched his legs before the fire. “Is anything on the back of
              the card?”
            </TextNode>

            <TextNode>I turned it over.</TextNode>

            <TextNode>“Will call at 6.30—C.A.M.,” I read.</TextNode>

            <TextNode>
              “Hum! He's about due. Do you feel a creeping, shrinking sensation,
              Watson, when you stand before the serpents in the Zoo and see the
              slithery, gliding, venomous creatures, with their deadly eyes and
              wicked, flattened faces? Well, that's how Milverton impresses me.
              I've had to do with fifty murderers in my career, but the worst of
              them never gave me the repulsion which I have for this fellow. And
              yet I can't get out of doing business with him—indeed, he is here
              at my invitation.”
            </TextNode>

            <TextNode>“But who is he?”</TextNode>

            <TextNode>
              “I'll tell you, Watson. He is the king of all the blackmailers.
              Heaven help the man, and still more the woman, whose secret and
              reputation come into the power of Milverton. With a smiling face
              and a heart of marble he will squeeze and squeeze until he has
              drained them dry. The fellow is a genius in his way, and would
              have made his mark in some more savoury trade. His method is as
              follows: He allows it to be known that he is prepared to pay very
              high sums for letters which compromise people of wealth or
              position. He receives these wares not only from treacherous valets
              or maids, but frequently from genteel ruffians who have gained the
              confidence and affection of trusting women. He deals with no
              niggard hand. I happen to know that he paid seven hundred pounds
              to a footman for a note two lines in length, and that the ruin of
              a noble family was the result. Everything which is in the market
              goes to Milverton, and there are hundreds in this great city who
              turn white at his name. No one knows where his grip may fall, for
              he is far too rich and far too cunning to work from hand to mouth.
              He will hold a card back for years in order to play it at the
              moment when the stake is best worth winning. I have said that he
              is the worst man in London, and I would ask you how could one
              compare the ruffian who in hot blood bludgeons his mate with this
              man, who methodically and at his leisure tortures the soul and
              wrings the nerves in order to add to his already swollen
              money-bags?”
            </TextNode>

            <TextNode>
              I had seldom heard my friend speak with such intensity of feeling.
            </TextNode>

            <TextNode>
              “But surely,” said I, “the fellow must be within the grasp of the
              law?”
            </TextNode>

            <TextNode>
              “Technically, no doubt, but practically not. What would it profit
              a woman, for example, to get him a few months' imprisonment if her
              own ruin must immediately follow? His victims dare not hit back.
              If ever he blackmailed an innocent person, then, indeed, we should
              have him; but he is as cunning as the Evil One. No, no; we must
              find other ways to fight him.”
            </TextNode>

            <TextNode>“And why is he here?”</TextNode>

            <TextNode>
              “Because an illustrious client has placed her piteous case in my
              hands. It is the Lady Eva Brackwell, the most beautiful{' '}
              <span className='italic'>debutante</span>
              of last season. She is to be married in a fortnight to the Earl of
              Dovercourt. This fiend has several imprudent letters—imprudent,
              Watson, nothing worse—which were written to an impecunious young
              squire in the country. They would suffice to break off the match.
              Milverton will send the letters to the Earl unless a large sum of
              money is paid him. I have been commissioned to meet him, and—to
              make the best terms I can.”
            </TextNode>

            <TextNode>
              At that instant there was a clatter and a rattle in the street
              below. Looking down I saw a stately carriage and pair, the
              brilliant lamps gleaming on the glossy haunches of the noble
              chestnuts. A footman opened the door, and a small, stout man in a
              shaggy astrachan overcoat descended. A minute later he was in the
              room.
            </TextNode>

            <TextNode>
              Charles Augustus Milverton was a man of fifty, with a large,
              intellectual head, a round, plump, hairless face, a perpetual
              frozen smile, and two keen grey eyes, which gleamed brightly from
              behind broad, golden-rimmed glasses. There was something of Mr.
              Pickwick's benevolence in his appearance, marred only by the
              insincerity of the fixed smile and by the hard glitter of those
              restless and penetrating eyes. His voice was as smooth and suave
              as his countenance, as he advanced with a plump little hand
              extended, murmuring his regret for having missed us at his first
              visit. Holmes disregarded the outstretched hand and looked at him
              with a face of granite. Milverton's smile broadened; he shrugged
              his shoulders, removed his overcoat, folded it with great
              deliberation over the back of a chair, and then took a seat.
            </TextNode>

            <TextNode>
              “This gentleman?” said he, with a wave in my direction. “Is it
              discreet? Is it right?”
            </TextNode>

            <TextNode>“Dr. Watson is my friend and partner.”</TextNode>

            <TextNode>
              “Very good, Mr. Holmes. It is only in your client's interests that
              I protested. The matter is so very delicate—”
            </TextNode>

            <TextNode>“Dr. Watson has already heard of it.”</TextNode>

            <TextNode>
              “Then we can proceed to business. You say that you are acting for
              Lady Eva. Has she empowered you to accept my terms?”
            </TextNode>

            <TextNode>“What are your terms?”</TextNode>

            <TextNode>“Seven thousand pounds.”</TextNode>

            <TextNode>“And the alternative?”</TextNode>

            <TextNode>
              “My dear sir, it is painful for me to discuss it; but if the money
              is not paid on the 14th there certainly will be no marriage on the
              18th.” His insufferable smile was more complacent than ever.
            </TextNode>

            <TextNode>Holmes thought for a little.</TextNode>

            <TextNode>
              “You appear to me,” he said, at last, “to be taking matters too
              much for granted. I am, of course, familiar with the contents of
              these letters. My client will certainly do what I may advise. I
              shall counsel her to tell her future husband the whole story and
              to trust to his generosity.”
            </TextNode>

            <TextNode>Milverton chuckled.</TextNode>

            <TextNode>“You evidently do not know the Earl,” said he.</TextNode>

            <TextNode>
              From the baffled look upon Holmes's face I could see clearly that
              he did.
            </TextNode>

            <TextNode>“What harm is there in the letters?” he asked.</TextNode>

            <TextNode>
              “They are sprightly—very sprightly,” Milverton answered. “The lady
              was a charming correspondent. But I can assure you that the Earl
              of Dovercourt would fail to appreciate them. However, since you
              think otherwise, we will let it rest at that. It is purely a
              matter of business. If you think that it is in the best interests
              of your client that these letters should be placed in the hands of
              the Earl, then you would indeed be foolish to pay so large a sum
              of money to regain them.” He rose and seized his astrachan coat.
            </TextNode>

            <TextNode>Holmes was grey with anger and mortification.</TextNode>

            <TextNode>
              “Wait a little,” he said. “You go too fast. We would certainly
              make every effort to avoid scandal in so delicate a matter.”
            </TextNode>

            <TextNode>Milverton relapsed into his chair.</TextNode>

            <TextNode>
              “I was sure that you would see it in that light,” he purred.
            </TextNode>

            <TextNode>
              “At the same time,” Holmes continued, “Lady Eva is not a wealthy
              woman. I assure you that two thousand pounds would be a drain upon
              her resources, and that the sum you name is utterly beyond her
              power. I beg, therefore, that you will moderate your demands, and
              that you will return the letters at the price I indicate, which
              is, I assure you, the highest that you can get.”
            </TextNode>

            <TextNode>
              Milverton's smile broadened and his eyes twinkled humorously.
            </TextNode>

            <TextNode>
              “I am aware that what you say is true about the lady's resources,”
              said he. “At the same time, you must admit that the occasion of a
              lady's marriage is a very suitable time for her friends and
              relatives to make some little effort upon her behalf. They may
              hesitate as to an acceptable wedding present. Let me assure them
              that this little bundle of letters would give more joy than all
              the candelabra and butter-dishes in London.”
            </TextNode>

            <TextNode>“It is impossible,” said Holmes.</TextNode>

            <TextNode>
              “Dear me, dear me, how unfortunate!” cried Milverton, taking out a
              bulky pocket-book. “I cannot help thinking that ladies are
              ill-advised in not making an effort. Look at this!” He held up a
              little note with a coat-of-arms upon the envelope. “That belongs
              to—well, perhaps it is hardly fair to tell the name until
              to-morrow morning. But at that time it will be in the hands of the
              lady's husband. And all because she will not find a beggarly sum
              which she could get by turning her diamonds into paste. It is such
              a pity. Now, you remember the sudden end of the engagement between
              the Honourable Miss Miles and Colonel Dorking? Only two days
              before the wedding there was a paragraph in the Morning Post to
              say that it was all off. And why? It is almost incredible, but the
              absurd sum of twelve hundred pounds would have settled the whole
              question. Is it not pitiful? And here I find you, a man of sense,
              boggling about terms when your client's future and honour are at
              stake. You surprise me, Mr. Holmes.”
            </TextNode>

            <TextNode>
              “What I say is true,” Holmes answered. “The money cannot be found.
              Surely it is better for you to take the substantial sum which I
              offer than to ruin this woman's career, which can profit you in no
              way?”
            </TextNode>

            <TextNode>
              “There you make a mistake, Mr. Holmes. An exposure would profit me
              indirectly to a considerable extent. I have eight or ten similar
              cases maturing. If it was circulated among them that I had made a
              severe example of the Lady Eva I should find all of them much more
              open to reason. You see my point?”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>Holmes sprang from his chair.</TextNode>

            <TextNode>
              “Get behind him, Watson! Don't let him out! Now, sir, let us see
              the contents of that note-book.”
            </TextNode>

            <TextNode>
              Milverton had glided as quick as a rat to the side of the room,
              and stood with his back against the wall.
            </TextNode>

            <TextNode>
              “Mr. Holmes, Mr. Holmes,” he said, turning the front of his coat
              and exhibiting the butt of a large revolver, which projected from
              the inside pocket. “I have been expecting you to do something
              original. This has been done so often, and what good has ever come
              from it? I assure you that I am armed to the teeth, and I am
              perfectly prepared to use my weapons, knowing that the law will
              support me. Besides, your supposition that I would bring the
              letters here in a note-book is entirely mistaken. I would do
              nothing so foolish. And now, gentlemen, I have one or two little
              interviews this evening, and it is a long drive to Hampstead.” He
              stepped forward, took up his coat, laid his hand on his revolver,
              and turned to the door. I picked up a chair, but Holmes shook his
              head and I laid it down again. With bow, a smile, and a twinkle
              Milverton was out of the room, and a few moments after we heard
              the slam of the carriage door and the rattle of the wheels as he
              drove away.
            </TextNode>

            <TextNode>
              Holmes sat motionless by the fire, his hands buried deep in his
              trouser pockets, his chin sunk upon his breast, his eyes fixed
              upon the glowing embers. For half an hour he was silent and still.
              Then, with the gesture of a man who has taken his decision, he
              sprang to his feet and passed into his bedroom. A little later a
              rakish young workman with a goatee beard and a swagger lit his
              clay pipe at the lamp before descending into the street. “I'll be
              back some time, Watson,” said he, and vanished into the night. I
              understood that he had opened his campaign against Charles
              Augustus Milverton; but I little dreamed the strange shape which
              that campaign was destined to take.
            </TextNode>

            <TextNode>
              For some days Holmes came and went at all hours in this attire,
              but beyond a remark that his time was spent at Hampstead, and that
              it was not wasted, I knew nothing of what he was doing. At last,
              however, on a wild, tempestuous evening, when the wind screamed
              and rattled against the windows, he returned from his last
              expedition, and having removed his disguise he sat before the fire
              and laughed heartily in his silent inward fashion.
            </TextNode>

            <TextNode>“You would not call me a marrying man, Watson?”</TextNode>

            <TextNode>“No, indeed!”</TextNode>

            <TextNode>
              “You'll be interested to hear that I am engaged.”
            </TextNode>

            <TextNode>“My dear fellow! I congrat—”</TextNode>

            <TextNode>“To Milverton's housemaid.”</TextNode>

            <TextNode>“Good heavens, Holmes!”</TextNode>

            <TextNode>“I wanted information, Watson.”</TextNode>

            <TextNode>“Surely you have gone too far?”</TextNode>

            <TextNode>
              “It was a most necessary step. I am a plumber with a rising
              business, Escott by name. I have walked out with her each evening,
              and I have talked with her. Good heavens, those talks! However, I
              have got all I wanted. I know Milverton's house as I know the palm
              of my hand.”
            </TextNode>

            <TextNode>“But the girl, Holmes?”</TextNode>

            <TextNode>He shrugged his shoulders.</TextNode>

            <TextNode>
              “You can't help it, my dear Watson. You must play your cards as
              best you can when such a stake is on the table. However, I rejoice
              to say that I have a hated rival who will certainly cut me out the
              instant that my back is turned. What a splendid night it is!”
            </TextNode>

            <TextNode>“You like this weather?”</TextNode>

            <TextNode>
              “It suits my purpose. Watson, I mean to burgle Milverton's house
              to-night.”
            </TextNode>

            <TextNode>
              I had a catching of the breath, and my skin went cold at the
              words, which were slowly uttered in a tone of concentrated
              resolution. As a flash of lightning in the night shows up in an
              instant every detail of a wide landscape, so at one glance I
              seemed to see every possible result of such an action—the
              detection, the capture, the honoured career ending in irreparable
              failure and disgrace, my friend himself lying at the mercy of the
              odious Milverton.
            </TextNode>

            <TextNode>
              “For Heaven's sake, Holmes, think what you are doing,” I cried.
            </TextNode>

            <TextNode>
              “My dear fellow, I have given it every consideration. I am never
              precipitate in my actions, nor would I adopt so energetic and
              indeed so dangerous a course if any other were possible. Let us
              look at the matter clearly and fairly. I suppose that you will
              admit that the action is morally justifiable, though technically
              criminal. To burgle his house is no more than to forcibly take his
              pocket-book—an action in which you were prepared to aid me.”
            </TextNode>

            <TextNode>I turned it over in my mind.</TextNode>

            <TextNode>
              “Yes,” I said; “it is morally justifiable so long as our object is
              to take no articles save those which are used for an illegal
              purpose.”
            </TextNode>

            <TextNode>
              “Exactly. Since it is morally justifiable I have only to consider
              the question of personal risk. Surely a gentleman should not lay
              much stress upon this when a lady is in most desperate need of his
              help?”
            </TextNode>

            <TextNode>“You will be in such a false position.”</TextNode>

            <TextNode>
              “Well, that is part of the risk. There is no other possible way of
              regaining these letters. The unfortunate lady has not the money,
              and there are none of her people in whom she could confide.
              To-morrow is the last day of grace, and unless we can get the
              letters to-night this villain will be as good as his word and will
              bring about her ruin. I must, therefore, abandon my client to her
              fate or I must play this last card. Between ourselves, Watson,
              it's a sporting duel between this fellow Milverton and me. He had,
              as you saw, the best of the first exchanges; but my self-respect
              and my reputation are concerned to fight it to a finish.”
            </TextNode>

            <TextNode>
              “Well, I don't like it; but I suppose it must be,” said I. “When
              do we start?”
            </TextNode>

            <TextNode>“You are not coming.”</TextNode>

            <TextNode>
              “Then you are not going,” said I. “I give you my word of
              honour—and I never broke it in my life—that I will take a cab
              straight to the police-station and give you away unless you let me
              share this adventure with you.”
            </TextNode>

            <TextNode>“You can't help me.”</TextNode>

            <TextNode>
              “How do you know that? You can't tell what may happen. Anyway, my
              resolution is taken. Other people beside you have self-respect and
              even reputations.”
            </TextNode>

            <TextNode>
              Holmes had looked annoyed, but his brow cleared, and he clapped me
              on the shoulder.
            </TextNode>

            <TextNode>
              “Well, well, my dear fellow, be it so. We have shared the same
              room for some years, and it would be amusing if we ended by
              sharing the same cell. You know, Watson, I don't mind confessing
              to you that I have always had an idea that I would have made a
              highly efficient criminal. This is the chance of my lifetime in
              that direction. See here!” He took a neat little leather case out
              of a drawer, and opening it he exhibited a number of shining
              instruments. “This is a first-class, up-to-date burgling kit, with
              nickel-plated jemmy, diamond-tipped glass-cutter, adaptable keys,
              and every modern improvement which the march of civilization
              demands. Here, too, is my dark lantern. Everything is in order.
              Have you a pair of silent shoes?”
            </TextNode>

            <TextNode>“I have rubber-soled tennis shoes.”</TextNode>

            <TextNode>“Excellent. And a mask?”</TextNode>

            <TextNode>“I can make a couple out of black silk.”</TextNode>

            <TextNode>
              “I can see that you have a strong natural turn for this sort of
              thing. Very good; do you make the masks. We shall have some cold
              supper before we start. It is now nine-thirty. At eleven we shall
              drive as far as Church Row. It is a quarter of an hour's walk from
              there to Appledore Towers. We shall be at work before midnight.
              Milverton is a heavy sleeper and retires punctually at ten-thirty.
              With any luck we should be back here by two, with the Lady Eva's
              letters in my pocket.”
            </TextNode>

            <TextNode>
              Holmes and I put on our dress-clothes, so that we might appear to
              be two theatre-goers homeward bound. In Oxford Street we picked up
              a hansom and drove to an address in Hampstead. Here we paid off
              our cab, and with our great-coats buttoned up, for it was bitterly
              cold and the wind seemed to blow through us, we walked along the
              edge of the Heath.
            </TextNode>

            <TextNode>
              “It's a business that needs delicate treatment,” said Holmes.
              “These documents are contained in a safe in the fellow's study,
              and the study is the ante-room of his bed-chamber. On the other
              hand, like all these stout, little men who do themselves well, he
              is a plethoric sleeper. Agatha—that's my fiancee—says it is a joke
              in the servants' hall that it's impossible to wake the master. He
              has a secretary who is devoted to his interests and never budges
              from the study all day. That's why we are going at night. Then he
              has a beast of a dog which roams the garden. I met Agatha late the
              last two evenings, and she locks the brute up so as to give me a
              clear run. This is the house, this big one in its own grounds.
              Through the gate—now to the right among the laurels. We might put
              on our masks here, I think. You see, there is not a glimmer of
              light in any of the windows, and everything is working
              splendidly.”
            </TextNode>

            <TextNode>
              With our black silk face-coverings, which turned us into two of
              the most truculent figures in London, we stole up to the silent,
              gloomy house. A sort of tiled veranda extended along one side of
              it, lined by several windows and two doors.
            </TextNode>

            <TextNode>
              “That's his bedroom,” Holmes whispered. “This door opens straight
              into the study. It would suit us best, but it is bolted as well as
              locked, and we should make too much noise getting in. Come round
              here. There's a greenhouse which opens into the drawing-room.”
            </TextNode>

            <TextNode>
              The place was locked, but Holmes removed a circle of glass and
              turned the key from the inside. An instant afterwards he had
              closed the door behind us, and we had become felons in the eyes of
              the law. The thick, warm air of the conservatory and the rich,
              choking fragrance of exotic plants took us by the throat. He
              seized my hand in the darkness and led me swiftly past banks of
              shrubs which brushed against our faces. Holmes had remarkable
              powers, carefully cultivated, of seeing in the dark. Still holding
              my hand in one of his he opened a door, and I was vaguely
              conscious that we had entered a large room in which a cigar had
              been smoked not long before. He felt his way among the furniture,
              opened another door, and closed it behind us. Putting out my hand
              I felt several coats hanging from the wall, and I understood that
              I was in a passage. We passed along it, and Holmes very gently
              opened a door upon the right-hand side. Something rushed out at us
              and my heart sprang into my mouth, but I could have laughed when I
              realized that it was the cat. A fire was burning in this new room,
              and again the air was heavy with tobacco smoke. Holmes entered on
              tiptoe, waited for me to follow, and then very gently closed the
              door. We were in Milverton's study, and a portiere at the farther
              side showed the entrance to his bedroom.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page192;

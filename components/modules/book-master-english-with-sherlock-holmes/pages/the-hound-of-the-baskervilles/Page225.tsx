import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page225({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;HOUND OF&nbsp;THE&nbsp;BASKERVILLES'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              The whole steep slope was covered with gray circular rings of
              stone, a score of them at least.
            </TextNode>

            <TextNode>“What are they? Sheep-pens?”</TextNode>

            <TextNode>
              “No, they are the homes of our worthy ancestors. Prehistoric man
              lived thickly on the moor, and as no one in particular has lived
              there since, we find all his little arrangements exactly as he
              left them. These are his wigwams with the roofs off. You can even
              see his hearth and his couch if you have the curiosity to go
              inside.”
            </TextNode>

            <TextNode>
              “But it is quite a town. When was it inhabited?”
            </TextNode>

            <TextNode>“Neolithic man—no date.”</TextNode>

            <TextNode>“What did he do?”</TextNode>

            <TextNode>
              “He grazed his cattle on these slopes, and he learned to dig for
              tin when the bronze sword began to supersede the stone axe. Look
              at the great trench in the opposite hill. That is his mark. Yes,
              you will find some very singular points about the moor, Dr.
              Watson. Oh, excuse me an instant! It is surely Cyclopides.”
            </TextNode>

            <TextNode>
              A small fly or moth had fluttered across our path, and in an
              instant Stapleton was rushing with extraordinary energy and speed
              in pursuit of it. To my dismay the creature flew straight for the
              great mire, and my acquaintance never paused for an instant,
              bounding from tuft to tuft behind it, his green net waving in the
              air. His gray clothes and jerky, zigzag, irregular progress made
              him not unlike some huge moth himself. I was standing watching his
              pursuit with a mixture of admiration for his extraordinary
              activity and fear lest he should lose his footing in the
              treacherous mire, when I heard the sound of steps, and turning
              round found a woman near me upon the path. She had come from the
              direction in which the plume of smoke indicated the position of
              Merripit House, but the dip of the moor had hid her until she was
              quite close.
            </TextNode>

            <TextNode>
              I could not doubt that this was the Miss Stapleton of whom I had
              been told, since ladies of any sort must be few upon the moor, and
              I remembered that I had heard someone describe her as being a
              beauty. The woman who approached me was certainly that, and of a
              most uncommon type. There could not have been a greater contrast
              between brother and sister, for Stapleton was neutral tinted, with
              light hair and gray eyes, while she was darker than any brunette
              whom I have seen in England—slim, elegant, and tall. She had a
              proud, finely cut face, so regular that it might have seemed
              impassive were it not for the sensitive mouth and the beautiful
              dark, eager eyes. With her perfect figure and elegant dress she
              was, indeed, a strange apparition upon a lonely moorland path. Her
              eyes were on her brother as I turned, and then she quickened her
              pace towards me. I had raised my hat and was about to make some
              explanatory remark, when her own words turned all my thoughts into
              a new channel.
            </TextNode>

            <TextNode>
              “Go back!” she said. “Go straight back to London, instantly.”
            </TextNode>

            <TextNode>
              I could only stare at her in stupid surprise. Her eyes blazed at
              me, and she tapped the ground impatiently with her foot.
            </TextNode>

            <TextNode>“Why should I go back?” I asked.</TextNode>

            <TextNode>
              “I cannot explain.” She spoke in a low, eager voice, with a
              curious lisp in her utterance. “But for God's sake do what I ask
              you. Go back and never set foot upon the moor again.”
            </TextNode>

            <TextNode>“But I have only just come.”</TextNode>

            <TextNode>
              “Man, man!” she cried. “Can you not tell when a warning is for
              your own good? Go back to London! Start to-night! Get away from
              this place at all costs! Hush, my brother is coming! Not a word of
              what I have said. Would you mind getting that orchid for me among
              the mares-tails yonder? We are very rich in orchids on the moor,
              though, of course, you are rather late to see the beauties of the
              place.”
            </TextNode>

            <TextNode>
              Stapleton had abandoned the chase and came back to us breathing
              hard and flushed with his exertions.
            </TextNode>

            <TextNode>
              “Halloa, Beryl!” said he, and it seemed to me that the tone of his
              greeting was not altogether a cordial one.
            </TextNode>

            <TextNode>“Well, Jack, you are very hot.”</TextNode>

            <TextNode>
              “Yes, I was chasing a Cyclopides. He is very rare and seldom found
              in the late autumn. What a pity that I should have missed him!” He
              spoke unconcernedly, but his small light eyes glanced incessantly
              from the girl to me.
            </TextNode>

            <TextNode>“You have introduced yourselves, I can see.”</TextNode>

            <TextNode>
              “Yes. I was telling Sir Henry that it was rather late for him to
              see the true beauties of the moor.”
            </TextNode>

            <TextNode>“Why, who do you think this is?”</TextNode>

            <TextNode>
              “I imagine that it must be Sir Henry Baskerville.”
            </TextNode>

            <TextNode>
              “No, no,” said I. “Only a humble commoner, but his friend. My name
              is Dr. Watson.”
            </TextNode>

            <TextNode>
              A flush of vexation passed over her expressive face. “We have been
              talking at cross purposes,” said she.
            </TextNode>

            <TextNode>
              “Why, you had not very much time for talk,” her brother remarked
              with the same questioning eyes.
            </TextNode>

            <TextNode>
              “I talked as if Dr. Watson were a resident instead of being merely
              a visitor,” said she. “It cannot much matter to him whether it is
              early or late for the orchids. But you will come on, will you not,
              and see Merripit House?”
            </TextNode>

            <TextNode>
              A short walk brought us to it, a bleak moorland house, once the
              farm of some grazier in the old prosperous days, but now put into
              repair and turned into a modern dwelling. An orchard surrounded
              it, but the trees, as is usual upon the moor, were stunted and
              nipped, and the effect of the whole place was mean and melancholy.
              We were admitted by a strange, wizened, rusty-coated old
              manservant, who seemed in keeping with the house. Inside, however,
              there were large rooms furnished with an elegance in which I
              seemed to recognize the taste of the lady. As I looked from their
              windows at the interminable granite-flecked moor rolling unbroken
              to the farthest horizon I could not but marvel at what could have
              brought this highly educated man and this beautiful woman to live
              in such a place.
            </TextNode>

            <TextNode>
              “Queer spot to choose, is it not?” said he as if in answer to my
              thought. “And yet we manage to make ourselves fairly happy, do we
              not, Beryl?”
            </TextNode>

            <TextNode>
              “Quite happy,” said she, but there was no ring of conviction in
              her words.
            </TextNode>

            <TextNode>
              “I had a school,” said Stapleton. “It was in the north country.
              The work to a man of my temperament was mechanical and
              uninteresting, but the privilege of living with youth, of helping
              to mould those young minds, and of impressing them with one's own
              character and ideals, was very dear to me. However, the fates were
              against us. A serious epidemic broke out in the school and three
              of the boys died. It never recovered from the blow, and much of my
              capital was irretrievably swallowed up. And yet, if it were not
              for the loss of the charming companionship of the boys, I could
              rejoice over my own misfortune, for, with my strong tastes for
              botany and zoology, I find an unlimited field of work here, and my
              sister is as devoted to Nature as I am. All this, Dr. Watson, has
              been brought upon your head by your expression as you surveyed the
              moor out of our window.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “It certainly did cross my mind that it might be a little
              dull—less for you, perhaps, than for your sister.”
            </TextNode>

            <TextNode>“No, no, I am never dull,” said she, quickly.</TextNode>

            <TextNode>
              “We have books, we have our studies, and we have interesting
              neighbours. Dr. Mortimer is a most learned man in his own line.
              Poor Sir Charles was also an admirable companion. We knew him
              well, and miss him more than I can tell. Do you think that I
              should intrude if I were to call this afternoon and make the
              acquaintance of Sir Henry?”
            </TextNode>

            <TextNode>“I am sure that he would be delighted.”</TextNode>

            <TextNode>
              “Then perhaps you would mention that I propose to do so. We may in
              our humble way do something to make things more easy for him until
              he becomes accustomed to his new surroundings. Will you come
              upstairs, Dr. Watson, and inspect my collection of&nbsp;
              <span className='italic'>Lepidoptera</span>? I think it is the
              most complete one in the south-west of England. By the time that
              you have looked through them lunch will be almost ready.”
            </TextNode>

            <TextNode>
              But I was eager to get back to my charge. The melancholy of the
              moor, the death of the unfortunate pony, the weird sound which had
              been associated with the grim legend of the Baskervilles, all
              these things tinged my thoughts with sadness. Then on the top of
              these more or less vague impressions there had come the definite
              and distinct warning of Miss Stapleton, delivered with such
              intense earnestness that I could not doubt that some grave and
              deep reason lay behind it. I resisted all pressure to stay for
              lunch, and I set off at once upon my return journey, taking the
              grass-grown path by which we had come.
            </TextNode>

            <TextNode>
              It seems, however, that there must have been some short cut for
              those who knew it, for before I had reached the road I was
              astounded to see Miss Stapleton sitting upon a rock by the side of
              the track. Her face was beautifully flushed with her exertions,
              and she held her hand to her side.
            </TextNode>

            <TextNode>
              “I have run all the way in order to cut you off, Dr. Watson,” said
              she. “I had not even time to put on my hat. I must not stop, or my
              brother may miss me. I wanted to say to you how sorry I am about
              the stupid mistake I made in thinking that you were Sir Henry.
              Please forget the words I said, which have no application whatever
              to you.”
            </TextNode>

            <TextNode>
              “But I can't forget them, Miss Stapleton,” said I. “I am Sir
              Henry's friend, and his welfare is a very close concern of mine.
              Tell me why it was that you were so eager that Sir Henry should
              return to London.”
            </TextNode>

            <TextNode>
              “A woman's whim, Dr. Watson. When you know me better you will
              understand that I cannot always give reasons for what I say or
              do.”
            </TextNode>

            <TextNode>
              “No, no. I remember the thrill in your voice. I remember the look
              in your eyes. Please, please, be frank with me, Miss Stapleton,
              for ever since I have been here I have been conscious of shadows
              all round me. Life has become like that great Grimpen Mire, with
              little green patches everywhere into which one may sink and with
              no guide to point the track. Tell me then what it was that you
              meant, and I will promise to convey your warning to Sir Henry.”
            </TextNode>

            <TextNode>
              An expression of irresolution passed for an instant over her face,
              but her eyes had hardened again when she answered me.
            </TextNode>

            <TextNode>
              “You make too much of it, Dr. Watson,” said she. “My brother and I
              were very much shocked by the death of Sir Charles. We knew him
              very intimately, for his favourite walk was over the moor to our
              house. He was deeply impressed with the curse which hung over the
              family, and when this tragedy came I naturally felt that there
              must be some grounds for the fears which he had expressed. I was
              distressed therefore when another member of the family came down
              to live here, and I felt that he should be warned of the danger
              which he will run. That was all which I intended to convey.
            </TextNode>

            <TextNode>“But what is the danger?”</TextNode>

            <TextNode>“You know the story of the hound?”</TextNode>

            <TextNode>“I do not believe in such nonsense.”</TextNode>

            <TextNode>
              “But I do. If you have any influence with Sir Henry, take him away
              from a place which has always been fatal to his family. The world
              is wide. Why should he wish to live at the place of danger?”
            </TextNode>

            <TextNode>
              “Because it is the place of danger. That is Sir Henry's nature. I
              fear that unless you can give me some more definite information
              than this it would be impossible to get him to move.”
            </TextNode>

            <TextNode>
              “I cannot say anything definite, for I do not know anything
              definite.”
            </TextNode>

            <TextNode>
              “I would ask you one more question, Miss Stapleton. If you meant
              no more than this when you first spoke to me, why should you not
              wish your brother to overhear what you said? There is nothing to
              which he, or anyone else, could object.”
            </TextNode>

            <TextNode>
              “My brother is very anxious to have the Hall inhabited, for he
              thinks it is for the good of the poor folk upon the moor. He would
              be very angry if he knew that I have said anything which might
              induce Sir Henry to go away. But I have done my duty now and I
              will say no more. I must get back, or he will miss me and suspect
              that I have seen you. Good-bye!“ She turned and had disappeared in
              a few minutes among the scattered boulders, while I, with my soul
              full of vague fears, pursued my way to Baskerville Hall.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page225;

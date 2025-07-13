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

function Page11({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='A STUDY IN SCARLET'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              At the door of the house we were met by a tall, white-faced,
              flaxen-haired man, with a notebook in his hand, who rushed forward
              and wrung my companion’s hand with effusion. “It is indeed kind of
              you to come,” he said, “I have had everything left untouched.”
            </TextNode>

            <TextNode>
              “Except that!” my friend answered, pointing at the pathway. “If a
              herd of buffaloes had passed along there could not be a greater
              mess. No doubt, however, you had drawn your own conclusions,
              Gregson, before you permitted this.”
            </TextNode>

            <TextNode>
              “I have had so much to do inside the house,” the detective said
              evasively. “My colleague, Mr. Lestrade, is here. I had relied upon
              him to look after this.”
            </TextNode>

            <TextNode>
              Holmes glanced at me and raised his eyebrows sardonically. “With
              two such men as yourself and Lestrade upon the ground, there will
              not be much for a third party to find out,” he said.
            </TextNode>

            <TextNode>
              Gregson rubbed his hands in a self-satisfied way. “I think we have
              done all that can be done,” he answered; “it’s a queer case
              though, and I knew your taste for such things.”
            </TextNode>

            <TextNode>
              “You did not come here in a cab?” asked Sherlock Holmes.
            </TextNode>

            <TextNode>“No, sir.”</TextNode>

            <TextNode>“Nor Lestrade?”</TextNode>

            <TextNode>“No, sir.”</TextNode>

            <TextNode>
              “Then let us go and look at the room.” With which inconsequent
              remark he strode on into the house, followed by Gregson, whose
              features expressed his astonishment.
            </TextNode>

            <TextNode>
              A short passage, bare planked and dusty, led to the kitchen and
              offices. Two doors opened out of it to the left and to the right.
              One of these had obviously been closed for many weeks. The other
              belonged to the dining-room, which was the apartment in which the
              mysterious affair had occurred. Holmes walked in, and I followed
              him with that subdued feeling at my heart which the presence of
              death inspires.
            </TextNode>

            <TextNode>
              It was a large square room, looking all the larger from the
              absence of all furniture. A vulgar flaring paper adorned the
              walls, but it was blotched in places with mildew, and here and
              there great strips had become detached and hung down, exposing the
              yellow plaster beneath. Opposite the door was a showy fireplace,
              surmounted by a mantelpiece of imitation white marble. On one
              corner of this was stuck the stump of a red wax candle. The
              solitary window was so dirty that the light was hazy and
              uncertain, giving a dull grey tinge to everything, which was
              intensified by the thick layer of dust which coated the whole
              apartment.
            </TextNode>

            <TextNode>
              All these details I observed afterwards. At present my attention
              was centred upon the single grim motionless figure which lay
              stretched upon the boards, with vacant sightless eyes staring up
              at the discoloured ceiling. It was that of a man about forty-three
              or forty-four years of age, middle-sized, broad shouldered, with
              crisp curling black hair, and a short stubbly beard. He was
              dressed in a heavy broadcloth frock coat and waistcoat, with
              light-coloured trousers, and immaculate collar and cuffs. A top
              hat, well brushed and trim, was placed upon the floor beside him.
              His hands were clenched and his arms thrown abroad, while his
              lower limbs were interlocked as though his death struggle had been
              a grievous one. On his rigid face there stood an expression of
              horror, and as it seemed to me, of hatred, such as I have never
              seen upon human features. This malignant and terrible contortion,
              combined with the low forehead, blunt nose, and prognathous jaw
              gave the dead man a singularly simious and ape-like appearance,
              which was increased by his writhing, unnatural posture. I have
              seen death in many forms, but never has it appeared to me in a
              more fearsome aspect than in that dark grimy apartment, which
              looked out upon one of the main arteries of suburban London.
            </TextNode>

            <TextNode>
              Lestrade, lean and ferret-like as ever, was standing by the
              doorway, and greeted my companion and myself.
            </TextNode>

            <TextNode>
              “This case will make a stir, sir,” he remarked. “It beats anything
              I have seen, and I am no chicken.”
            </TextNode>

            <TextNode>“There is no clue?” said Gregson.</TextNode>

            <TextNode>“None at all,” chimed in Lestrade.</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              Sherlock Holmes approached the body, and, kneeling down, examined
              it intently. “You are sure that there is no wound?” he asked,
              pointing to numerous gouts and splashes of blood which lay all
              round.
            </TextNode>

            <TextNode>“Positive!” cried both detectives.</TextNode>

            <TextNode>
              “Then, of course, this blood belongs to a second
              individual—presumably the murderer, if murder has been committed.
              It reminds me of the circumstances attendant on the death of Van
              Jansen, in Utrecht, in the year '34. Do you remember the case,
              Gregson?”
            </TextNode>

            <TextNode>“No, sir.”</TextNode>

            <TextNode>
              “Read it up—you really should. There is nothing new under the sun.
              It has all been done before.”
            </TextNode>

            <TextNode>
              As he spoke, his nimble fingers were flying here, there, and
              everywhere, feeling, pressing, unbuttoning, examining, while his
              eyes wore the same far-away expression which I have already
              remarked upon. So swiftly was the examination made, that one would
              hardly have guessed the minuteness with which it was conducted.
              Finally, he sniffed the dead man's lips, and then glanced at the
              soles of his patent leather boots.
            </TextNode>

            <TextNode>“He has not been moved at all?” he asked.</TextNode>

            <TextNode>
              “No more than was necessary for the purposes of our examination.”
            </TextNode>

            <TextNode>
              “You can take him to the mortuary now,” he said. “There is nothing
              more to be learned.”
            </TextNode>

            <TextNode>
              Gregson had a stretcher and four men at hand. At his call they
              entered the room, and the stranger was lifted and carried out. As
              they raised him, a ring tinkled down and rolled across the floor.
              Lestrade grabbed it up and stared at it with mystified eyes.
            </TextNode>

            <TextNode>
              “There's been a woman here,” he cried. “It's a woman's
              wedding-ring.”
            </TextNode>

            <TextNode>
              He held it out, as he spoke, upon the palm of his hand. We all
              gathered round him and gazed at it. There could be no doubt that
              that circlet of plain gold had once adorned the finger of a bride.
            </TextNode>

            <TextNode>
              “This complicates matters,” said Gregson. “Heaven knows, they were
              complicated enough before.”
            </TextNode>

            <TextNode>
              “You're sure it doesn't simplify them?” observed Holmes. “There's
              nothing to be learned by staring at it. What did you find in his
              pockets?”
            </TextNode>

            <TextNode>
              “We have it all here,” said Gregson, pointing to a litter of
              objects upon one of the bottom steps of the stairs. “A gold watch,
              No. 97163, by Barraud, of London. Gold Albert chain, very heavy
              and solid. Gold ring, with masonic device. Gold pin—bull-dog's
              head, with rubies as eyes. Russian leather card-case, with cards
              of Enoch J. Drebber of Cleveland, corresponding with the E. J. D.
              upon the linen. No purse, but loose money to the extent of seven
              pounds thirteen. Pocket edition of Boccaccio's ‘Decameron,’ with
              name of Joseph Stangerson upon the fly-leaf. Two letters—one
              addressed to E. J. Drebber and one to Joseph Stangerson.”
            </TextNode>

            <TextNode>“At what address?”</TextNode>

            <TextNode>
              “American Exchange, Strand—to be left till called for. They are
              both from the Guion Steamship Company, and refer to the sailing of
              their boats from Liverpool. It is clear that this unfortunate man
              was about to return to New York.”
            </TextNode>

            <TextNode>
              “Have you made any inquiries as to this man, Stangerson?”
            </TextNode>

            <TextNode>
              “I did it at once, sir,” said Gregson. “I have had advertisements
              sent to all the newspapers, and one of my men has gone to the
              American Exchange, but he has not returned yet.”
            </TextNode>

            <TextNode>“Have you sent to Cleveland?”</TextNode>

            <TextNode>“We telegraphed this morning.”</TextNode>

            <TextNode>“How did you word your inquiries?”</TextNode>

            <TextNode>
              “We simply detailed the circumstances, and said that we should be
              glad of any information which could help us.”
            </TextNode>

            <TextNode>
              “You did not ask for particulars on any point which appeared to
              you to be crucial?”
            </TextNode>

            <TextNode>“I asked about Stangerson.”</TextNode>

            <TextNode>
              “Nothing else? Is there no circumstance on which this whole case
              appears to hinge? Will you not telegraph again?”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page11;

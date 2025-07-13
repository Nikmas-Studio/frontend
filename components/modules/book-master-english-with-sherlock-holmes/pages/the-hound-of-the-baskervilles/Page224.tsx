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

function Page224({
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
        <H4>
          Chapter VII.
          <br />
          The Stapletons of Merripit House
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              The fresh beauty of the following morning did something to efface
              from our minds the grim and gray impression which had been left
              upon both of us by our first experience of Baskerville Hall. As
              Sir Henry and I sat at breakfast the sunlight flooded in through
              the high mullioned windows, throwing watery patches of colour from
              the coats of arms which covered them. The dark panelling glowed
              like bronze in the golden rays, and it was hard to realize that
              this was indeed the chamber which had struck such a gloom into our
              souls upon the evening before.
            </TextNode>

            <TextNode>
              “I guess it is ourselves and not the house that we have to blame!”
              said the baronet. “We were tired with our journey and chilled by
              our drive, so we took a gray view of the place. Now we are fresh
              and well, so it is all cheerful once more.”
            </TextNode>

            <TextNode>
              “And yet it was not entirely a question of imagination,” I
              answered. “Did you, for example, happen to hear someone, a woman I
              think, sobbing in the night?”
            </TextNode>

            <TextNode>
              “That is curious, for I did when I was half asleep fancy that I
              heard something of the sort. I waited quite a time, but there was
              no more of it, so I concluded that it was all a dream.”
            </TextNode>

            <TextNode>
              “I heard it distinctly, and I am sure that it was really the sob
              of a woman.”
            </TextNode>

            <TextNode>
              “We must ask about this right away.” He rang the bell and asked
              Barrymore whether he could account for our experience. It seemed
              to me that the pallid features of the butler turned a shade paler
              still as he listened to his master's question.
            </TextNode>

            <TextNode>
              “There are only two women in the house, Sir Henry,” he answered.
              “One is the scullery-maid, who sleeps in the other wing. The other
              is my wife, and I can answer for it that the sound could not have
              come from her.”
            </TextNode>

            <TextNode>
              And yet he lied as he said it, for it chanced that after breakfast
              I met Mrs. Barrymore in the long corridor with the sun full upon
              her face. She was a large, impassive, heavy-featured woman with a
              stern set expression of mouth. But her tell-tale eyes were red and
              glanced at me from between swollen lids. It was she, then, who
              wept in the night, and if she did so her husband must know it. Yet
              he had taken the obvious risk of discovery in declaring that it
              was not so. Why had he done this? And why did she weep so
              bitterly? Already round this pale-faced, handsome, black-bearded
              man there was gathering an atmosphere of mystery and of gloom. It
              was he who had been the first to discover the body of Sir Charles,
              and we had only his word for all the circumstances which led up to
              the old man's death. Was it possible that it was Barrymore after
              all whom we had seen in the cab in Regent Street? The beard might
              well have been the same. The cabman had described a somewhat
              shorter man, but such an impression might easily have been
              erroneous. How could I settle the point forever? Obviously the
              first thing to do was to see the Grimpen postmaster, and find
              whether the test telegram had really been placed in Barrymore's
              own hands. Be the answer what it might, I should at least have
              something to report to Sherlock Holmes.
            </TextNode>

            <TextNode>
              Sir Henry had numerous papers to examine after breakfast, so that
              the time was propitious for my excursion. It was a pleasant walk
              of four miles along the edge of the moor, leading me at last to a
              small gray hamlet, in which two larger buildings, which proved to
              be the inn and the house of Dr. Mortimer, stood high above the
              rest. The postmaster, who was also the village grocer, had a clear
              recollection of the telegram.
            </TextNode>

            <TextNode>
              “Certainly, sir,” said he, “I had the telegram delivered to Mr.
              Barrymore exactly as directed.”
            </TextNode>

            <TextNode>“Who delivered it?”</TextNode>

            <TextNode>
              “My boy here. James, you delivered that telegram to Mr. Barrymore
              at the Hall last week, did you not?”
            </TextNode>

            <TextNode>“Yes, father, I delivered it.”</TextNode>

            <TextNode>“Into his own hands?” I asked.</TextNode>

            <TextNode>
              “Well, he was up in the loft at the time, so that I could not put
              it into his own hands, but I gave it into Mrs. Barrymore's hands,
              and she promised to deliver it at once.”
            </TextNode>

            <TextNode>“Did you see Mr. Barrymore?”</TextNode>

            <TextNode>“No, sir; I tell you he was in the loft.”</TextNode>

            <TextNode>
              “If you didn't see him, how do you know he was in the loft?”
            </TextNode>

            <TextNode>
              “Well, surely his own wife ought to know where he is,” said the
              postmaster testily. “Didn't he get the telegram? If there is any
              mistake it is for Mr. Barrymore himself to complain.”
            </TextNode>

            <TextNode>
              It seemed hopeless to pursue the inquiry any farther, but it was
              clear that in spite of Holmes's ruse we had no proof that
              Barrymore had not been in London all the time. Suppose that it
              were so—suppose that the same man had been the last who had seen
              Sir Charles alive, and the first to dog the new heir when he
              returned to England. What then? Was he the agent of others or had
              he some sinister design of his own? What interest could he have in
              persecuting the Baskerville family? I thought of the strange
              warning clipped out of the leading article of the Times. Was that
              his work or was it possibly the doing of someone who was bent upon
              counteracting his schemes? The only conceivable motive was that
              which had been suggested by Sir Henry, that if the family could be
              scared away a comfortable and permanent home would be secured for
              the Barrymores. But surely such an explanation as that would be
              quite inadequate to account for the deep and subtle scheming which
              seemed to be weaving an invisible net round the young baronet.
              Holmes himself had said that no more complex case had come to him
              in all the long series of his sensational investigations. I
              prayed, as I walked back along the gray, lonely road, that my
              friend might soon be freed from his preoccupations and able to
              come down to take this heavy burden of responsibility from my
              shoulders.
            </TextNode>

            <TextNode>
              Suddenly my thoughts were interrupted by the sound of running feet
              behind me and by a voice which called me by name. I turned,
              expecting to see Dr. Mortimer, but to my surprise it was a
              stranger who was pursuing me. He was a small, slim, clean-shaven,
              prim-faced man, flaxen-haired and lean-jawed, between thirty and
              forty years of age, dressed in a gray suit and wearing a straw
              hat. A tin box for botanical specimens hung over his shoulder and
              he carried a green butterfly-net in one of his hands.
            </TextNode>

            <TextNode>
              “You will, I am sure, excuse my presumption, Dr. Watson,” said he,
              as he came panting up to where I stood. “Here on the moor we are
              homely folk and do not wait for formal introductions. You may
              possibly have heard my name from our mutual friend, Mortimer. I am
              Stapleton, of Merripit House.”
            </TextNode>

            <TextNode>
              “Your net and box would have told me as much,” said I, “for I knew
              that Mr. Stapleton was a naturalist. But how did you know me?”
            </TextNode>

            <TextNode>
              “I have been calling on Mortimer, and he pointed you out to me
              from the window of his surgery as you passed. As our road lay the
              same way I thought that I would overtake you and introduce myself.
              I trust that Sir Henry is none the worse for his journey?”
            </TextNode>

            <TextNode>“He is very well, thank you.”</TextNode>

            <TextNode>
              “We were all rather afraid that after the sad death of Sir Charles
              the new baronet might refuse to live here. It is asking much of a
              wealthy man to come down and bury himself in a place of this kind,
              but I need not tell you that it means a very great deal to the
              country-side. Sir Henry has, I suppose, no superstitious fears in
              the matter?”
            </TextNode>

            <TextNode>“I do not think that it is likely.”</TextNode>

            <TextNode>
              “Of course you know the legend of the fiend dog which haunts the
              family?”
            </TextNode>

            <TextNode>“I have heard it.”</TextNode>

            <TextNode>
              “It is extraordinary how credulous the peasants are about here!
              Any number of them are ready to swear that they have seen such a
              creature upon the moor.” He spoke with a smile, but I seemed to
              read in his eyes that he took the matter more seriously. “The
              story took a great hold upon the imagination of Sir Charles, and I
              have no doubt that it led to his tragic end.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“But how?”</TextNode>

            <TextNode>
              “His nerves were so worked up that the appearance of any dog might
              have had a fatal effect upon his diseased heart. I fancy that he
              really did see something of the kind upon that last night in the
              Yew Alley. I feared that some disaster might occur, for I was very
              fond of the old man, and I knew that his heart was weak.”
            </TextNode>

            <TextNode>“How did you know that?”</TextNode>

            <TextNode>“My friend Mortimer told me.”</TextNode>

            <TextNode>
              “You think, then, that some dog pursued Sir Charles, and that he
              died of fright in consequence?”
            </TextNode>

            <TextNode>“Have you any better explanation?”</TextNode>

            <TextNode>“I have not come to any conclusion.”</TextNode>

            <TextNode>“Has Mr. Sherlock Holmes?”</TextNode>

            <TextNode>
              The words took away my breath for an instant, but a glance at the
              placid face and steadfast eyes of my companion showed that no
              surprise was intended.
            </TextNode>

            <TextNode>
              “It is useless for us to pretend that we do not know you, Dr.
              Watson,” said he. “The records of your detective have reached us
              here, and you could not celebrate him without being known
              yourself. When Mortimer told me your name he could not deny your
              identity. If you are here, then it follows that Mr. Sherlock
              Holmes is interesting himself in the matter, and I am naturally
              curious to know what view he may take.”
            </TextNode>

            <TextNode>
              “I am afraid that I cannot answer that question.”
            </TextNode>

            <TextNode>
              “May I ask if he is going to honour us with a visit himself?”
            </TextNode>

            <TextNode>
              “He cannot leave town at present. He has other cases which engage
              his attention.”
            </TextNode>

            <TextNode>
              “What a pity! He might throw some light on that which is so dark
              to us. But as to your own researches, if there is any possible way
              in which I can be of service to you I trust that you will command
              me. If I had any indication of the nature of your suspicions or
              how you propose to investigate the case, I might perhaps even now
              give you some aid or advice.”
            </TextNode>

            <TextNode>
              “I assure you that I am simply here upon a visit to my friend, Sir
              Henry, and that I need no help of any kind.”
            </TextNode>

            <TextNode>
              “Excellent!” said Stapleton. “You are perfectly right to be wary
              and discreet. I am justly reproved for what I feel was an
              unjustifiable intrusion, and I promise you that I will not mention
              the matter again.”
            </TextNode>

            <TextNode>
              We had come to a point where a narrow grassy path struck off from
              the road and wound away across the moor. A steep,
              boulder-sprinkled hill lay upon the right which had in bygone days
              been cut into a granite quarry. The face which was turned towards
              us formed a dark cliff, with ferns and brambles growing in its
              niches. From over a distant rise there floated a gray plume of
              smoke.
            </TextNode>

            <TextNode>
              “A moderate walk along this moor-path brings us to Merripit
              House,” said he. “Perhaps you will spare an hour that I may have
              the pleasure of introducing you to my sister.”
            </TextNode>

            <TextNode>
              My first thought was that I should be by Sir Henry's side. But
              then I remembered the pile of papers and bills with which his
              study table was littered. It was certain that I could not help
              with those. And Holmes had expressly said that I should study the
              neighbours upon the moor. I accepted Stapleton's invitation, and
              we turned together down the path.
            </TextNode>

            <TextNode>
              “It is a wonderful place, the moor,” said he, looking round over
              the undulating downs, long green rollers, with crests of jagged
              granite foaming up into fantastic surges. “You never tire of the
              moor. You cannot think the wonderful secrets which it contains. It
              is so vast, and so barren, and so mysterious.”
            </TextNode>

            <TextNode>“You know it well, then?”</TextNode>

            <TextNode>
              “I have only been here two years. The residents would call me a
              newcomer. We came shortly after Sir Charles settled. But my tastes
              led me to explore every part of the country round, and I should
              think that there are few men who know it better than I do.”
            </TextNode>

            <TextNode>“Is it hard to know?”</TextNode>

            <TextNode>
              “Very hard. You see, for example, this great plain to the north
              here with the queer hills breaking out of it. Do you observe
              anything remarkable about that?”
            </TextNode>

            <TextNode>“It would be a rare place for a gallop.”</TextNode>

            <TextNode>
              “You would naturally think so and the thought has cost several
              their lives before now. You notice those bright green spots
              scattered thickly over it?”
            </TextNode>

            <TextNode>“Yes, they seem more fertile than the rest.”</TextNode>

            <TextNode>Stapleton laughed.</TextNode>

            <TextNode>
              “That is the great Grimpen Mire,” said he. “A false step yonder
              means death to man or beast. Only yesterday I saw one of the moor
              ponies wander into it. He never came out. I saw his head for quite
              a long time craning out of the bog-hole, but it sucked him down at
              last. Even in dry seasons it is a danger to cross it, but after
              these autumn rains it is an awful place. And yet I can find my way
              to the very heart of it and return alive. By George, there is
              another of those miserable ponies!”
            </TextNode>

            <TextNode>
              Something brown was rolling and tossing among the green sedges.
              Then a long, agonized, writhing neck shot upward and a dreadful
              cry echoed over the moor. It turned me cold with horror, but my
              companion's nerves seemed to be stronger than mine.
            </TextNode>

            <TextNode>
              “It's gone!” said he. “The mire has him. Two in two days, and many
              more, perhaps, for they get in the way of going there in the dry
              weather, and never know the difference until the mire has them in
              its clutches. It's a bad place, the great Grimpen Mire.”
            </TextNode>

            <TextNode>“And you say you can penetrate it?”</TextNode>

            <TextNode>
              “Yes, there are one or two paths which a very active man can take.
              I have found them out.”
            </TextNode>

            <TextNode>
              “But why should you wish to go into so horrible a place?”
            </TextNode>

            <TextNode>
              “Well, you see the hills beyond? They are really islands cut off
              on all sides by the impassable mire, which has crawled round them
              in the course of years. That is where the rare plants and the
              butterflies are, if you have the wit to reach them.”
            </TextNode>

            <TextNode>“I shall try my luck some day.”</TextNode>

            <TextNode>He looked at me with a surprised face.</TextNode>

            <TextNode>
              “For God's sake put such an idea out of your mind,” said he. “Your
              blood would be upon my head. I assure you that there would not be
              the least chance of your coming back alive. It is only by
              remembering certain complex landmarks that I am able to do it.”
            </TextNode>

            <TextNode>“Halloa!” I cried. “What is that?”</TextNode>

            <TextNode>
              A long, low moan, indescribably sad, swept over the moor. It
              filled the whole air, and yet it was impossible to say whence it
              came. From a dull murmur it swelled into a deep roar, and then
              sank back into a melancholy, throbbing murmur once again.
              Stapleton looked at me with a curious expression in his face.
            </TextNode>
            <TextNode>“Queer place, the moor!” said he.</TextNode>

            <TextNode>“But what is it?”</TextNode>

            <TextNode>
              “The peasants say it is the Hound of the Baskervilles calling for
              its prey. I've heard it once or twice before, but never quite so
              loud.”
            </TextNode>

            <TextNode>
              I looked round, with a chill of fear in my heart, at the huge
              swelling plain, mottled with the green patches of rushes. Nothing
              stirred over the vast expanse save a pair of ravens, which croaked
              loudly from a tor behind us.
            </TextNode>

            <TextNode>
              “You are an educated man. You don't believe such nonsense as
              that?” said I. “What do you think is the cause of so strange a
              sound?”
            </TextNode>

            <TextNode>
              “Bogs make queer noises sometimes. It's the mud settling, or the
              water rising, or something.”
            </TextNode>

            <TextNode>“No, no, that was a living voice.”</TextNode>

            <TextNode>
              “Well, perhaps it was. Did you ever hear a bittern booming?”
            </TextNode>

            <TextNode>“No, I never did.”</TextNode>

            <TextNode>
              “It's a very rare bird—practically extinct—in England now, but all
              things are possible upon the moor. Yes, I should not be surprised
              to learn that what we have heard is the cry of the last of the
              bitterns.”
            </TextNode>

            <TextNode>
              “It's the weirdest, strangest thing that ever I heard in my life.”
            </TextNode>

            <TextNode>
              “Yes, it's rather an uncanny place altogether. Look at the
              hill-side yonder. What do you make of those?”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page224;

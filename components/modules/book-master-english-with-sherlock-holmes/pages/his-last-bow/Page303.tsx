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

function Page303({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='HIS LAST BOW'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Another glass, Watson!” said Mr. Sherlock Holmes as he extended
              the bottle of Imperial Tokay.
            </TextNode>

            <TextNode>
              The thickset chauffeur, who had seated himself by the table,
              pushed forward his glass with some eagerness.
            </TextNode>

            <TextNode>“It is a good wine, Holmes.”</TextNode>

            <TextNode>
              “A remarkable wine, Watson. Our friend upon the sofa has assured
              me that it is from Franz Josef's special cellar at the Schoenbrunn
              Palace. Might I trouble you to open the window, for chloroform
              vapour does not help the palate.”
            </TextNode>

            <TextNode>
              The safe was ajar, and Holmes standing in front of it was removing
              dossier after dossier, swiftly examining each, and then packing it
              neatly in Von Bork's valise. The German lay upon the sofa sleeping
              stertorously with a strap round his upper arms and another round
              his legs.
            </TextNode>

            <TextNode>
              “We need not hurry ourselves, Watson. We are safe from
              interruption. Would you mind touching the bell? There is no one in
              the house except old Martha, who has played her part to
              admiration. I got her the situation here when first I took the
              matter up. Ah, Martha, you will be glad to hear that all is well.”
            </TextNode>

            <TextNode>
              The pleasant old lady had appeared in the doorway. She curtseyed
              with a smile to Mr. Holmes, but glanced with some apprehension at
              the figure upon the sofa.
            </TextNode>

            <TextNode>
              “It is all right, Martha. He has not been hurt at all.”
            </TextNode>

            <TextNode>
              “I am glad of that, Mr. Holmes. According to his lights he has
              been a kind master. He wanted me to go with his wife to Germany
              yesterday, but that would hardly have suited your plans, would it,
              sir?”
            </TextNode>

            <TextNode>
              “No, indeed, Martha. So long as you were here I was easy in my
              mind. We waited some time for your signal to-night.”
            </TextNode>

            <TextNode>“It was the secretary, sir.”</TextNode>

            <TextNode>“I know. His car passed ours.”</TextNode>

            <TextNode>
              “I thought he would never go. I knew that it would not suit your
              plans, sir, to find him here.”
            </TextNode>

            <TextNode>
              “No, indeed. Well, it only meant that we waited half an hour or so
              until I saw your lamp go out and knew that the coast was clear.
              You can report to me to-morrow in London, Martha, at Claridge's
              Hotel.”
            </TextNode>

            <TextNode>“Very good, sir.”</TextNode>

            <TextNode>“I suppose you have everything ready to leave.”</TextNode>

            <TextNode>
              “Yes, sir. He posted seven letters to-day. I have the addresses as
              usual.”
            </TextNode>

            <TextNode>
              “Very good, Martha. I will look into them to-morrow. Good-night.
              These papers,” he continued as the old lady vanished, “are not of
              very great importance, for, of course, the information which they
              represent has been sent off long ago to the German government.
              These are the originals which cold not safely be got out of the
              country.”
            </TextNode>

            <TextNode>“Then they are of no use.”</TextNode>

            <TextNode>
              “I should not go so far as to say that, Watson. They will at least
              show our people what is known and what is not. I may say that a
              good many of these papers have come through me, and I need not add
              are thoroughly untrustworthy. It would brighten my declining years
              to see a German cruiser navigating the Solent according to the
              mine-field plans which I have furnished. But you, Watson”—he
              stopped his work and took his old friend by the shoulders—“I've
              hardly seen you in the light yet. How have the years used you? You
              look the same blithe boy as ever.”
            </TextNode>

            <TextNode>
              “I feel twenty years younger, Holmes. I have seldom felt so happy
              as when I got your wire asking me to meet you at Harwich with the
              car. But you, Holmes—you have changed very little—save for that
              horrible goatee.”
            </TextNode>

            <TextNode>
              “These are the sacrifices one makes for one's country, Watson,”
              said Holmes, pulling at his little tuft. “To-morrow it will be but
              a dreadful memory. With my hair cut and a few other superficial
              changes I shall no doubt reappear at Claridge's to-morrow as I was
              before this American stunt—I beg your pardon, Watson, my well of
              English seems to be permanently defiled—before this American job
              came my way.”
            </TextNode>

            <TextNode>
              “But you have retired, Holmes. We heard of you as living the life
              of a hermit among your bees and your books in a small farm upon
              the South Downs.”
            </TextNode>

            <TextNode>
              “Exactly, Watson. Here is the fruit of my leisured ease, the
              <span className='italic'>magnum opus</span> of my latter years!”
              He picked up the volume from the table and read out the whole
              title,{' '}
              <span className='italic'>
                Practical Handbook of Bee Culture, with Some Observations upon
                the Segregation of the Queen.
              </span>{' '}
              “Alone I did it. Behold the fruit of pensive nights and laborious
              days when I watched the little working gangs as once I watched the
              criminal world of London.”
            </TextNode>

            <TextNode>“But how did you get to work again?”</TextNode>

            <TextNode>
              “Ah, I have often marvelled at it myself. The Foreign Minister
              alone I could have withstood, but when the Premier also deigned to
              visit my humble roof—! The fact is, Watson, that this gentleman
              upon the sofa was a bit too good for our people. He was in a class
              by himself. Things were going wrong, and no one could understand
              why they were going wrong. Agents were suspected or even caught,
              but there was evidence of some strong and secret central force. It
              was absolutely necessary to expose it. Strong pressure was brought
              upon me to look into the matter. It has cost me two years, Watson,
              but they have not been devoid of excitement. When I say that I
              started my pilgrimage at Chicago, graduated in an Irish secret
              society at Buffalo, gave serious trouble to the constabulary at
              Skibbareen, and so eventually caught the eye of a subordinate
              agent of Von Bork, who recommended me as a likely man, you will
              realize that the matter was complex. Since then I have been
              honoured by his confidence, which has not prevented most of his
              plans going subtly wrong and five of his best agents being in
              prison. I watched them, Watson, and I picked them as they ripened.
              Well, sir, I hope that you are none the worse!”
            </TextNode>

            <TextNode>
              The last remark was addressed to Von Bork himself, who after much
              gasping and blinking had lain quietly listening to Holmes's
              statement. He broke out now into a furious stream of German
              invective, his face convulsed with passion. Holmes continued his
              swift investigation of documents while his prisoner cursed and
              swore.
            </TextNode>

            <TextNode>
              “Though unmusical, German is the most expressive of all
              languages,” he observed when Von Bork had stopped from pure
              exhaustion. “Hullo! Hullo!” he added as he looked hard at the
              corner of a tracing before putting it in the box. “This should put
              another bird in the cage. I had no idea that the paymaster was
              such a rascal, though I have long had an eye upon him. Mister Von
              Bork, you have a great deal to answer for.”
            </TextNode>

            <TextNode>
              The prisoner had raised himself with some difficulty upon the sofa
              and was staring with a strange mixture of amazement and hatred at
              his captor.
            </TextNode>

            <TextNode>
              “I shall get level with you, Altamont,” he said, speaking with
              slow deliberation. “If it takes me all my life I shall get level
              with you!”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “The old sweet song,” said Holmes. “How often have I heard it in
              days gone by. It was a favorite ditty of the late lamented
              Professor Moriarty. Colonel Sebastian Moran has also been known to
              warble it. And yet I live and keep bees upon the South Downs.”
            </TextNode>

            <TextNode>
              “Curse you, you double traitor!” cried the German, straining
              against his bonds and glaring murder from his furious eyes.
            </TextNode>
            <TextNode>
              “No, no, it is not so bad as that,” said Holmes, smiling. “As my
              speech surely shows you, Mr. Altamont of Chicago had no existence
              in fact. I used him and he is gone.”
            </TextNode>

            <TextNode>“Then who are you?”</TextNode>

            <TextNode>
              “It is really immaterial who I am, but since the matter seems to
              interest you, Mr. Von Bork, I may say that this is not my first
              acquaintance with the members of your family. I have done a good
              deal of business in Germany in the past and my name is probably
              familiar to you.”
            </TextNode>

            <TextNode>
              “I would wish to know it,” said the Prussian grimly.
            </TextNode>

            <TextNode>
              “It was I who brought about the separation between Irene Adler and
              the late King of Bohemia when your cousin Heinrich was the
              Imperial Envoy. It was I also who saved from murder, by the
              Nihilist Klopman, Count Von und Zu Grafenstein, who was your
              mother's elder brother. It was I—”
            </TextNode>

            <TextNode>Von Bork sat up in amazement.</TextNode>

            <TextNode>“There is only one man,” he cried.</TextNode>

            <TextNode>“Exactly,” said Holmes.</TextNode>
            <TextNode>
              Von Bork groaned and sank back on the sofa. “And most of that
              information came through you,” he cried. “What is it worth? What
              have I done? It is my ruin forever!”
            </TextNode>

            <TextNode>
              “It is certainly a little untrustworthy,” said Holmes. “It will
              require some checking and you have little time to check it. Your
              admiral may find the new guns rather larger than he expects, and
              the cruisers perhaps a trifle faster.”
            </TextNode>

            <TextNode>Von Bork clutched at his own throat in despair.</TextNode>

            <TextNode>
              “There are a good many other points of detail which will, no
              doubt, come to light in good time. But you have one quality which
              is very rare in a German, Mr. Von Bork: you are a sportsman and
              you will bear me no ill-will when you realize that you, who have
              outwitted so many other people, have at last been outwitted
              yourself. After all, you have done your best for your country, and
              I have done my best for mine, and what could be more natural?
              Besides,” he added, not unkindly, as he laid his hand upon the
              shoulder of the prostrate man, “it is better than to fall before
              some ignoble foe. These papers are now ready, Watson. If you will
              help me with our prisoner, I think that we may get started for
              London at once.”
            </TextNode>

            <TextNode>
              It was no easy task to move Von Bork, for he was a strong and a
              desperate man. Finally, holding either arm, the two friends walked
              him very slowly down the garden walk which he had trod with such
              proud confidence when he received the congratulations of the
              famous diplomatist only a few hours before. After a short, final
              struggle he was hoisted, still bound hand and foot, into the spare
              seat of the little car. His precious valise was wedged in beside
              him.
            </TextNode>

            <TextNode>
              “I trust that you are as comfortable as circumstances permit,”
              said Holmes when the final arrangements were made. “Should I be
              guilty of a liberty if I lit a cigar and placed it between your
              lips?”
            </TextNode>

            <TextNode>
              But all amenities were wasted upon the angry German.
            </TextNode>

            <TextNode>
              “I suppose you realize, Mr. Sherlock Holmes,” said he, “that if
              your government bears you out in this treatment it becomes an act
              of war.”
            </TextNode>

            <TextNode>
              “What about your government and all this treatment?” said Holmes,
              tapping the valise.
            </TextNode>

            <TextNode>
              “You are a private individual. You have no warrant for my arrest.
              The whole proceeding is absolutely illegal and outrageous.”
            </TextNode>

            <TextNode>“Absolutely,” said Holmes.</TextNode>

            <TextNode>“Kidnapping a German subject.”</TextNode>

            <TextNode>“And stealing his private papers.”</TextNode>

            <TextNode>
              “Well, you realize your position, you and your accomplice here. If
              I were to shout for help as we pass through the village—”
            </TextNode>

            <TextNode>
              “My dear sir, if you did anything so foolish you would probably
              enlarge the two limited titles of our village inns by giving us
              ‘The Dangling Prussian’ as a signpost. The Englishman is a patient
              creature, but at present his temper is a little inflamed, and it
              would be as well not to try him too far. No, Mr. Von Bork, you
              will go with us in a quiet, sensible fashion to Scotland Yard,
              whence you can send for your friend, Baron Von Herling, and see if
              even now you may not fill that place which he has reserved for you
              in the ambassadorial suite. As to you, Watson, you are joining us
              with your old service, as I understand, so London won't be out of
              your way. Stand with me here upon the terrace, for it may be the
              last quiet talk that we shall ever have.”
            </TextNode>
            <TextNode>
              The two friends chatted in intimate converse for a few minutes,
              recalling once again the days of the past, while their prisoner
              vainly wriggled to undo the bonds that held him. As they turned to
              the car Holmes pointed back to the moonlit sea and shook a
              thoughtful head.
            </TextNode>

            <TextNode>“There's an east wind coming, Watson.”</TextNode>

            <TextNode>“I think not, Holmes. It is very warm.”</TextNode>

            <TextNode>
              “Good old Watson! You are the one fixed point in a changing age.
              There's an east wind coming all the same, such a wind as never
              blew on England yet. It will be cold and bitter, Watson, and a
              good many of us may wither before its blast. But it's God's own
              wind none the less, and a cleaner, better, stronger land will lie
              in the sunshine when the storm has cleared. Start her up, Watson,
              for it's time that we were on our way. I have a check for five
              hundred pounds which should be cashed early, for the drawer is
              quite capable of stopping it if he can.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page303;

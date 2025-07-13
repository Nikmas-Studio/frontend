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

function Page31({
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
            <TextNode noIndent>“Where are you going?”</TextNode>

            <TextNode>
              “Never mind,” he answered; and, slinging his weapon over his
              shoulder, strode off down the gorge and so away into the heart of
              the mountains to the haunts of the wild beasts. Amongst them all
              there was none so fierce and so dangerous as himself.
            </TextNode>

            <TextNode>
              The prediction of the Mormon was only too well fulfilled. Whether
              it was the terrible death of her father or the effects of the
              hateful marriage into which she had been forced, poor Lucy never
              held up her head again, but pined away and died within a month.
              Her sottish husband, who had married her principally for the sake
              of John Ferrier's property, did not affect any great grief at his
              bereavement; but his other wives mourned over her, and sat up with
              her the night before the burial, as is the Mormon custom. They
              were grouped round the bier in the early hours of the morning,
              when, to their inexpressible fear and astonishment, the door was
              flung open, and a savage-looking, weather-beaten man in tattered
              garments strode into the room. Without a glance or a word to the
              cowering women, he walked up to the white silent figure which had
              once contained the pure soul of Lucy Ferrier. Stooping over her,
              he pressed his lips reverently to her cold forehead, and then,
              snatching up her hand, he took the wedding-ring from her finger.
              “She shall not be buried in that,” he cried with a fierce snarl,
              and before an alarm could be raised sprang down the stairs and was
              gone. So strange and so brief was the episode, that the watchers
              might have found it hard to believe it themselves or persuade
              other people of it, had it not been for the undeniable fact that
              the circlet of gold which marked her as having been a bride had
              disappeared.
            </TextNode>

            <TextNode>
              For some months Jefferson Hope lingered among the mountains,
              leading a strange wild life, and nursing in his heart the fierce
              desire for vengeance which possessed him. Tales were told in the
              City of the weird figure which was seen prowling about the
              suburbs, and which haunted the lonely mountain gorges. Once a
              bullet whistled through Stangerson's window and flattened itself
              upon the wall within a foot of him. On another occasion, as
              Drebber passed under a cliff a great boulder crashed down on him,
              and he only escaped a terrible death by throwing himself upon his
              face. The two young Mormons were not long in discovering the
              reason of these attempts upon their lives, and led repeated
              expeditions into the mountains in the hope of capturing or killing
              their enemy, but always without success. Then they adopted the
              precaution of never going out alone or after nightfall, and of
              having their houses guarded. After a time they were able to relax
              these measures, for nothing was either heard or seen of their
              opponent, and they hoped that time had cooled his vindictiveness.
            </TextNode>

            <TextNode>
              Far from doing so, it had, if anything, augmented it. The hunter's
              mind was of a hard, unyielding nature, and the predominant idea of
              revenge had taken such complete possession of it that there was no
              room for any other emotion. He was, however, above all things
              practical. He soon realized that even his iron constitution could
              not stand the incessant strain which he was putting upon it.
              Exposure and want of wholesome food were wearing him out. If he
              died like a dog among the mountains, what was to become of his
              revenge then? And yet such a death was sure to overtake him if he
              persisted. He felt that that was to play his enemy's game, so he
              reluctantly returned to the old Nevada mines, there to recruit his
              health and to amass money enough to allow him to pursue his object
              without privation.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              His intention had been to be absent a year at the most, but a
              combination of unforeseen circumstances prevented his leaving the
              mines for nearly five. At the end of that time, however, his
              memory of his wrongs and his craving for revenge were quite as
              keen as on that memorable night when he had stood by John
              Ferrier's grave. Disguised, and under an assumed name, he returned
              to Salt Lake City, careless what became of his own life, as long
              as he obtained what he knew to be justice. There he found evil
              tidings awaiting him. There had been a schism among the Chosen
              People a few months before, some of the younger members of the
              Church having rebelled against the authority of the Elders, and
              the result had been the secession of a certain number of the
              malcontents, who had left Utah and become Gentiles. Among these
              had been Drebber and Stangerson; and no one knew whither they had
              gone. Rumour reported that Drebber had managed to convert a large
              part of his property into money, and that he had departed a
              wealthy man, while his companion, Stangerson, was comparatively
              poor. There was no clue at all, however, as to their whereabouts.
            </TextNode>

            <TextNode>
              Many a man, however vindictive, would have abandoned all thought
              of revenge in the face of such a difficulty, but Jefferson Hope
              never faltered for a moment. With the small competence he
              possessed, eked out by such employment as he could pick up, he
              travelled from town to town through the United States in quest of
              his enemies. Year passed into year, his black hair turned
              grizzled, but still he wandered on, a human bloodhound, with his
              mind wholly set upon the one object upon which he had devoted his
              life. At last his perseverance was rewarded. It was but a glance
              of a face in a window, but that one glance told him that Cleveland
              in Ohio possessed the men whom he was in pursuit of. He returned
              to his miserable lodgings with his plan of vengeance all arranged.
              It chanced, however, that Drebber, looking from his window, had
              recognized the vagrant in the street, and had read murder in his
              eyes. He hurried before a justice of the peace, accompanied by
              Stangerson, who had become his private secretary, and represented
              to him that they were in danger of their lives from the jealousy
              and hatred of an old rival. That evening Jefferson Hope was taken
              into custody, and not being able to find sureties, was detained
              for some weeks. When at last he was liberated, it was only to find
              that Drebber's house was deserted, and that he and his secretary
              had departed for Europe.
            </TextNode>

            <TextNode>
              Again the avenger had been foiled, and again his concentrated
              hatred urged him to continue the pursuit. Funds were wanting,
              however, and for some time he had to return to work, saving every
              dollar for his approaching journey. At last, having collected
              enough to keep life in him, he departed for Europe, and tracked
              his enemies from city to city, working his way in any menial
              capacity, but never overtaking the fugitives. When he reached St.
              Petersburg they had departed for Paris; and when he followed them
              there he learned that they had just set off for Copenhagen. At the
              Danish capital he was again a few days late, for they had
              journeyed on to London, where he at last succeeded in running them
              to earth. As to what occurred there, we cannot do better than
              quote the old hunter's own account, as duly recorded in Dr.
              Watson's Journal, to which we are already under such obligations.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page31;

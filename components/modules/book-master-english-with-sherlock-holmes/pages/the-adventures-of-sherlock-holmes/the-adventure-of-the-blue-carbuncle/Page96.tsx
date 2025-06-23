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

function Page96({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;BLUE&nbsp;CARBUNCLE'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Ah, yes, I shall keep the stone. Thank you. And, I say, Peterson,
              just buy a goose on your way back and leave it here with me, for
              we must have one to give to this gentleman in place of the one
              which your family is now devouring.”
            </TextNode>

            <TextNode>
              When the commissionaire had gone, Holmes took up the stone and
              held it against the light. “It's a bonny thing,” said he. “Just
              see how it glints and sparkles. Of course it is a nucleus and
              focus of crime. Every good stone is. They are the devil's pet
              baits. In the larger and older jewels every facet may stand for a
              bloody deed. This stone is not yet twenty years old. It was found
              in the banks of the Amoy River in southern China and is remarkable
              in having every characteristic of the carbuncle, save that it is
              blue in shade instead of ruby red. In spite of its youth, it has
              already a sinister history. There have been two murders, a
              vitriol-throwing, a suicide, and several robberies brought about
              for the sake of this forty-grain weight of crystallised charcoal.
              Who would think that so pretty a toy would be a purveyor to the
              gallows and the prison? I'll lock it up in my strong box now and
              drop a line to the Countess to say that we have it.”
            </TextNode>

            <TextNode>
              “Do you think that this man Horner is innocent?”
            </TextNode>

            <TextNode>“I cannot tell.”</TextNode>

            <TextNode>
              “Well, then, do you imagine that this other one, Henry Baker, had
              anything to do with the matter?”
            </TextNode>

            <TextNode>
              “It is, I think, much more likely that Henry Baker is an
              absolutely innocent man, who had no idea that the bird which he
              was carrying was of considerably more value than if it were made
              of solid gold. That, however, I shall determine by a very simple
              test if we have an answer to our advertisement.”
            </TextNode>

            <TextNode>“And you can do nothing until then?”</TextNode>

            <TextNode>“Nothing.”</TextNode>

            <TextNode>
              “In that case I shall continue my professional round. But I shall
              come back in the evening at the hour you have mentioned, for I
              should like to see the solution of so tangled a business.”
            </TextNode>

            <TextNode>
              “Very glad to see you. I dine at seven. There is a woodcock, I
              believe. By the way, in view of recent occurrences, perhaps I
              ought to ask Mrs. Hudson to examine its crop.”
            </TextNode>

            <TextNode>
              I had been delayed at a case, and it was a little after half-past
              six when I found myself in Baker Street once more. As I approached
              the house I saw a tall man in a Scotch bonnet with a coat which
              was buttoned up to his chin waiting outside in the bright
              semicircle which was thrown from the fanlight. Just as I arrived
              the door was opened, and we were shown up together to Holmes'
              room.
            </TextNode>

            <TextNode>
              “Mr. Henry Baker, I believe,” said he, rising from his armchair
              and greeting his visitor with the easy air of geniality which he
              could so readily assume. “Pray take this chair by the fire, Mr.
              Baker. It is a cold night, and I observe that your circulation is
              more adapted for summer than for winter. Ah, Watson, you have just
              come at the right time. Is that your hat, Mr. Baker?”
            </TextNode>

            <TextNode>“Yes, sir, that is undoubtedly my hat.”</TextNode>

            <TextNode>
              He was a large man with rounded shoulders, a massive head, and a
              broad, intelligent face, sloping down to a pointed beard of
              grizzled brown. A touch of red in nose and cheeks, with a slight
              tremor of his extended hand, recalled Holmes' surmise as to his
              habits. His rusty black frock-coat was buttoned right up in front,
              with the collar turned up, and his lank wrists protruded from his
              sleeves without a sign of cuff or shirt. He spoke in a slow
              staccato fashion, choosing his words with care, and gave the
              impression generally of a man of learning and letters who had had
              ill-usage at the hands of fortune.
            </TextNode>

            <TextNode>
              “We have retained these things for some days,” said Holmes,
              “because we expected to see an advertisement from you giving your
              address. I am at a loss to know now why you did not advertise.”
            </TextNode>

            <TextNode>
              Our visitor gave a rather shamefaced laugh. “Shillings have not
              been so plentiful with me as they once were,” he remarked. “I had
              no doubt that the gang of roughs who assaulted me had carried off
              both my hat and the bird. I did not care to spend more money in a
              hopeless attempt at recovering them.”
            </TextNode>

            <TextNode>
              “Very naturally. By the way, about the bird, we were compelled to
              eat it.”
            </TextNode>

            <TextNode>
              “To eat it!” Our visitor half rose from his chair in his
              excitement.
            </TextNode>

            <TextNode>
              “Yes, it would have been of no use to anyone had we not done so.
              But I presume that this other goose upon the sideboard, which is
              about the same weight and perfectly fresh, will answer your
              purpose equally well?”
            </TextNode>

            <TextNode>
              “Oh, certainly, certainly,” answered Mr. Baker with a sigh of
              relief.
            </TextNode>

            <TextNode>
              “Of course, we still have the feathers, legs, crop, and so on of
              your own bird, so if you wish—”
            </TextNode>

            <TextNode>
              The man burst into a hearty laugh. “They might be useful to me as
              relics of my adventure,” said he, “but beyond that I can hardly
              see what use the disjecta membra of my late acquaintance are going
              to be to me. No, sir, I think that, with your permission, I will
              confine my attentions to the excellent bird which I perceive upon
              the sideboard.”
            </TextNode>

            <TextNode>
              Sherlock Holmes glanced sharply across at me with a slight shrug
              of his shoulders.
            </TextNode>

            <TextNode>
              “There is your hat, then, and there your bird,” said he. “By the
              way, would it bore you to tell me where you got the other one
              from? I am somewhat of a fowl fancier, and I have seldom seen a
              better grown goose.”
            </TextNode>

            <TextNode>
              “Certainly, sir,” said Baker, who had risen and tucked his newly
              gained property under his arm. “There are a few of us who frequent
              the Alpha Inn, near the Museum—we are to be found in the Museum
              itself during the day, you understand. This year our good host,
              Windigate by name, instituted a goose club, by which, on
              consideration of some few pence every week, we were each to
              receive a bird at Christmas. My pence were duly paid, and the rest
              is familiar to you. I am much indebted to you, sir, for a Scotch
              bonnet is fitted neither to my years nor my gravity.” With a
              comical pomposity of manner he bowed solemnly to both of us and
              strode off upon his way.
            </TextNode>

            <TextNode>
              “So much for Mr. Henry Baker,” said Holmes when he had closed the
              door behind him. “It is quite certain that he knows nothing
              whatever about the matter. Are you hungry, Watson?”
            </TextNode>

            <TextNode>“Not particularly.”</TextNode>

            <TextNode>
              “Then I suggest that we turn our dinner into a supper and follow
              up this clue while it is still hot.”
            </TextNode>

            <TextNode>“By all means.”</TextNode>

            <TextNode>
              It was a bitter night, so we drew on our ulsters and wrapped
              cravats about our throats. Outside, the stars were shining coldly
              in a cloudless sky, and the breath of the passers-by blew out into
              smoke like so many pistol shots. Our footfalls rang out crisply
              and loudly as we swung through the doctors' quarter, Wimpole
              Street, Harley Street, and so through Wigmore Street into Oxford
              Street. In a quarter of an hour we were in Bloomsbury at the Alpha
              Inn, which is a small public-house at the corner of one of the
              streets which runs down into Holborn. Holmes pushed open the door
              of the private bar and ordered two glasses of beer from the
              ruddy-faced, white-aproned landlord.
            </TextNode>

            <TextNode>
              “Your beer should be excellent if it is as good as your geese,”
              said he.
            </TextNode>

            <TextNode>“My geese!” The man seemed surprised.</TextNode>

            <TextNode>
              “Yes. I was speaking only half an hour ago to Mr. Henry Baker, who
              was a member of your goose club.”
            </TextNode>

            <TextNode>
              “Ah! yes, I see. But you see, sir, them's not our geese.”
            </TextNode>

            <TextNode>“Indeed! Whose, then?”</TextNode>

            <TextNode>
              “Well, I got the two dozen from a salesman in Covent Garden.”
            </TextNode>

            <TextNode>“Indeed? I know some of them. Which was it?”</TextNode>

            <TextNode>“Breckinridge is his name.”</TextNode>

            <TextNode>
              “Ah! I don't know him. Well, here's your good health landlord, and
              prosperity to your house. Good-night.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Now for Mr. Breckinridge,” he continued, buttoning up his coat as
              we came out into the frosty air. “Remember, Watson that though we
              have so homely a thing as a goose at one end of this chain, we
              have at the other a man who will certainly get seven years' penal
              servitude unless we can establish his innocence. It is possible
              that our inquiry may but confirm his guilt; but, in any case, we
              have a line of investigation which has been missed by the police,
              and which a singular chance has placed in our hands. Let us follow
              it out to the bitter end. Faces to the south, then, and quick
              march!”
            </TextNode>

            <TextNode>
              We passed across Holborn, down Endell Street, and so through a
              zigzag of slums to Covent Garden Market. One of the largest stalls
              bore the name of Breckinridge upon it, and the proprietor a
              horsey-looking man, with a sharp face and trim side-whiskers was
              helping a boy to put up the shutters.
            </TextNode>

            <TextNode>“Good-evening. It's a cold night,” said Holmes.</TextNode>

            <TextNode>
              The salesman nodded and shot a questioning glance at my companion.
            </TextNode>

            <TextNode>
              “Sold out of geese, I see,” continued Holmes, pointing at the bare
              slabs of marble.
            </TextNode>

            <TextNode>“Let you have five hundred to-morrow morning.”</TextNode>

            <TextNode>“That's no good.”</TextNode>

            <TextNode>
              “Well, there are some on the stall with the gas-flare.”
            </TextNode>

            <TextNode>“Ah, but I was recommended to you.”</TextNode>

            <TextNode>“Who by?”</TextNode>

            <TextNode>“The landlord of the Alpha.”</TextNode>

            <TextNode>“Oh, yes; I sent him a couple of dozen.”</TextNode>

            <TextNode>
              “Fine birds they were, too. Now where did you get them from?”
            </TextNode>

            <TextNode>
              To my surprise the question provoked a burst of anger from the
              salesman.
            </TextNode>

            <TextNode>
              “Now, then, mister,” said he, with his head cocked and his arms
              akimbo, “what are you driving at? Let's have it straight, now.”
            </TextNode>

            <TextNode>
              “It is straight enough. I should like to know who sold you the
              geese which you supplied to the Alpha.”
            </TextNode>

            <TextNode>“Well then, I shan't tell you. So now!”</TextNode>

            <TextNode>
              “Oh, it is a matter of no importance; but I don't know why you
              should be so warm over such a trifle.”
            </TextNode>

            <TextNode>
              “Warm! You'd be as warm, maybe, if you were as pestered as I am.
              When I pay good money for a good article there should be an end of
              the business; but it's ‘Where are the geese?’ and ‘Who did you
              sell the geese to?’ and ‘What will you take for the geese?’ One
              would think they were the only geese in the world, to hear the
              fuss that is made over them.”
            </TextNode>

            <TextNode>
              “Well, I have no connection with any other people who have been
              making inquiries,” said Holmes carelessly. “If you won't tell us
              the bet is off, that is all. But I'm always ready to back my
              opinion on a matter of fowls, and I have a fiver on it that the
              bird I ate is country bred.”
            </TextNode>

            <TextNode>
              “Well, then, you've lost your fiver, for it's town bred,” snapped
              the salesman.
            </TextNode>

            <TextNode>“It's nothing of the kind.”</TextNode>

            <TextNode>“I say it is.”</TextNode>

            <TextNode>“I don't believe it.”</TextNode>

            <TextNode>
              “D'you think you know more about fowls than I, who have handled
              them ever since I was a nipper? I tell you, all those birds that
              went to the Alpha were town bred.”
            </TextNode>

            <TextNode>“You'll never persuade me to believe that.”</TextNode>

            <TextNode>“Will you bet, then?”</TextNode>

            <TextNode>
              “It's merely taking your money, for I know that I am right. But
              I'll have a sovereign on with you, just to teach you not to be
              obstinate.”
            </TextNode>

            <TextNode>
              The salesman chuckled grimly. “Bring me the books, Bill,” said he.
            </TextNode>

            <TextNode>
              The small boy brought round a small thin volume and a great
              greasy-backed one, laying them out together beneath the hanging
              lamp.
            </TextNode>

            <TextNode>
              “Now then, Mr. Cocksure,” said the salesman, “I thought that I was
              out of geese, but before I finish you'll find that there is still
              one left in my shop. You see this little book?”
            </TextNode>

            <TextNode>“Well?”</TextNode>

            <TextNode>
              “That's the list of the folk from whom I buy. D'you see? Well,
              then, here on this page are the country folk, and the numbers
              after their names are where their accounts are in the big ledger.
              Now, then! You see this other page in red ink? Well, that is a
              list of my town suppliers. Now, look at that third name. Just read
              it out to me.”
            </TextNode>

            <TextNode>
              “Mrs. Oakshott, 117, Brixton Road—249,” read Holmes.
            </TextNode>

            <TextNode>“Quite so. Now turn that up in the ledger.”</TextNode>

            <TextNode>
              Holmes turned to the page indicated. “Here you are, ‘Mrs.
              Oakshott, 117, Brixton Road, egg and poultry supplier.’”
            </TextNode>

            <TextNode>“Now, then, what's the last entry?”</TextNode>

            <TextNode>
              “ ‘December 22nd. Twenty-four geese at 7s. 6d.’”
            </TextNode>

            <TextNode>“Quite so. There you are. And underneath?”</TextNode>

            <TextNode>
              “ ‘Sold to Mr. Windigate of the Alpha, at 12s.’”
            </TextNode>

            <TextNode>“What have you to say now?”</TextNode>

            <TextNode>
              Sherlock Holmes looked deeply chagrined. He drew a sovereign from
              his pocket and threw it down upon the slab, turning away with the
              air of a man whose disgust is too deep for words. A few yards off
              he stopped under a lamp-post and laughed in the hearty, noiseless
              fashion which was peculiar to him.
            </TextNode>

            <TextNode>
              “When you see a man with whiskers of that cut and the ‘Pink 'un’
              protruding out of his pocket, you can always draw him by a bet,”
              said he. “I daresay that if I had put £100 down in front of him,
              that man would not have given me such complete information as was
              drawn from him by the idea that he was doing me on a wager. Well,
              Watson, we are, I fancy, nearing the end of our quest, and the
              only point which remains to be determined is whether we should go
              on to this Mrs. Oakshott to-night, or whether we should reserve it
              for to-morrow. It is clear from what that surly fellow said that
              there are others besides ourselves who are anxious about the
              matter, and I should—”
            </TextNode>

            <TextNode>
              His remarks were suddenly cut short by a loud hubbub which broke
              out from the stall which we had just left. Turning round we saw a
              little rat-faced fellow standing in the centre of the circle of
              yellow light which was thrown by the swinging lamp, while
              Breckinridge, the salesman, framed in the door of his stall, was
              shaking his fists fiercely at the cringing figure.
            </TextNode>

            <TextNode>
              “I've had enough of you and your geese,” he shouted. “I wish you
              were all at the devil together. If you come pestering me any more
              with your silly talk I'll set the dog at you. You bring Mrs.
              Oakshott here and I'll answer her, but what have you to do with
              it? Did I buy the geese off you?”
            </TextNode>

            <TextNode>
              “No; but one of them was mine all the same,” whined the little
              man.
            </TextNode>

            <TextNode>“Well, then, ask Mrs. Oakshott for it.”</TextNode>

            <TextNode>“She told me to ask you.”</TextNode>

            <TextNode>
              “Well, you can ask the King of Proosia, for all I care. I've had
              enough of it. Get out of this!” He rushed fiercely forward, and
              the inquirer flitted away into the darkness.
            </TextNode>

            <TextNode>
              “Ha! this may save us a visit to Brixton Road,” whispered Holmes.
              “Come with me, and we will see what is to be made of this fellow.”
              Striding through the scattered knots of people who lounged round
              the flaring stalls, my companion speedily overtook the little man
              and touched him upon the shoulder. He sprang round, and I could
              see in the gas-light that every vestige of colour had been driven
              from his face.
            </TextNode>

            <TextNode>
              “Who are you, then? What do you want?” he asked in a quavering
              voice.
            </TextNode>

            <TextNode>
              “You will excuse me,” said Holmes blandly, “but I could not help
              overhearing the questions which you put to the salesman just now.
              I think that I could be of assistance to you.”
            </TextNode>

            <TextNode>
              “You? Who are you? How could you know anything of the matter?”
            </TextNode>

            <TextNode>
              “My name is Sherlock Holmes. It is my business to know what other
              people don't know.”
            </TextNode>

            <TextNode>“But you can know nothing of this?”</TextNode>

            <TextNode>
              “Excuse me, I know everything of it. You are endeavouring to trace
              some geese which were sold by Mrs. Oakshott, of Brixton Road, to a
              salesman named Breckinridge, by him in turn to Mr. Windigate, of
              the Alpha, and by him to his club, of which Mr. Henry Baker is a
              member.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page96;

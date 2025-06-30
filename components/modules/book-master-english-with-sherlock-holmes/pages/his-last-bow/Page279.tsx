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

function Page279({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;CARDBOARD&nbsp;BOX'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “About your second sister, Sarah,” said he. “I wonder, since you
              are both maiden ladies, that you do not keep house together.”
            </TextNode>

            <TextNode>
              “Ah! you don't know Sarah's temper or you would wonder no more. I
              tried it when I came to Croydon, and we kept on until about two
              months ago, when we had to part. I don't want to say a word
              against my own sister, but she was always meddlesome and hard to
              please, was Sarah.”
            </TextNode>

            <TextNode>
              “You say that she quarrelled with your Liverpool relations.”
            </TextNode>

            <TextNode>
              “Yes, and they were the best of friends at one time. Why, she went
              up there to live in order to be near them. And now she has no word
              hard enough for Jim Browner. The last six months that she was here
              she would speak of nothing but his drinking and his ways. He had
              caught her meddling, I suspect, and given her a bit of his mind,
              and that was the start of it.”
            </TextNode>

            <TextNode>
              “Thank you, Miss Cushing,” said Holmes, rising and bowing. “Your
              sister Sarah lives, I think you said, at New Street, Wallington?
              Good-bye, and I am very sorry that you should have been troubled
              over a case with which, as you say, you have nothing whatever to
              do.”
            </TextNode>

            <TextNode>
              There was a cab passing as we came out, and Holmes hailed it.
            </TextNode>

            <TextNode>“How far to Wallington?” he asked.</TextNode>

            <TextNode>“Only about a mile, sir.”</TextNode>

            <TextNode>
              “Very good. Jump in, Watson. We must strike while the iron is hot.
              Simple as the case is, there have been one or two very instructive
              details in connection with it. Just pull up at a telegraph office
              as you pass, cabby.”
            </TextNode>

            <TextNode>
              Holmes sent off a short wire and for the rest of the drive lay
              back in the cab, with his hat tilted over his nose to keep the sun
              from his face. Our drive pulled up at a house which was not unlike
              the one which we had just quitted. My companion ordered him to
              wait, and had his hand upon the knocker, when the door opened and
              a grave young gentleman in black, with a very shiny hat, appeared
              on the step.
            </TextNode>

            <TextNode>“Is Miss Cushing at home?” asked Holmes.</TextNode>

            <TextNode>
              “Miss Sarah Cushing is extremely ill,” said he. “She has been
              suffering since yesterday from brain symptoms of great severity.
              As her medical adviser, I cannot possibly take the responsibility
              of allowing anyone to see her. I should recommend you to call
              again in ten days.” He drew on his gloves, closed the door, and
              marched off down the street.
            </TextNode>

            <TextNode>
              “Well, if we can't we can't,” said Holmes, cheerfully.
            </TextNode>

            <TextNode>
              “Perhaps she could not or would not have told you much.”
            </TextNode>

            <TextNode>
              “I did not wish her to tell me anything. I only wanted to look at
              her. However, I think that I have got all that I want. Drive us to
              some decent hotel, cabby, where we may have some lunch, and
              afterwards we shall drop down upon friend Lestrade at the
              police-station.”
            </TextNode>

            <TextNode>
              We had a pleasant little meal together, during which Holmes would
              talk about nothing but violins, narrating with great exultation
              how he had purchased his own Stradivarius, which was worth at
              least five hundred guineas, at a Jew broker's in Tottenham Court
              Road for fifty-five shillings. This led him to Paganini, and we
              sat for an hour over a bottle of claret while he told me anecdote
              after anecdote of that extraordinary man. The afternoon was far
              advanced and the hot glare had softened into a mellow glow before
              we found ourselves at the police-station. Lestrade was waiting for
              us at the door.
            </TextNode>

            <TextNode>“A telegram for you, Mr. Holmes,” said he.</TextNode>

            <TextNode>
              “Ha! It is the answer!” He tore it open, glanced his eyes over it,
              and crumpled it into his pocket. “That's all right,” said he.
            </TextNode>

            <TextNode>“Have you found out anything?”</TextNode>

            <TextNode>“I have found out everything!”</TextNode>

            <TextNode>
              “What!” Lestrade stared at him in amazement. “You are joking.”
            </TextNode>

            <TextNode>
              “I was never more serious in my life. A shocking crime has been
              committed, and I think I have now laid bare every detail of it.”
            </TextNode>

            <TextNode>“And the criminal?”</TextNode>

            <TextNode>
              Holmes scribbled a few words upon the back of one of his visiting
              cards and threw it over to Lestrade.
            </TextNode>

            <TextNode>
              “That is the name,” he said. “You cannot effect an arrest until
              to-morrow night at the earliest. I should prefer that you do not
              mention my name at all in connection with the case, as I choose to
              be only associated with those crimes which present some difficulty
              in their solution. Come on, Watson.” We strode off together to the
              station, leaving Lestrade still staring with a delighted face at
              the card which Holmes had thrown him.
            </TextNode>

            <TextNode>
              “The case,” said Sherlock Holmes as we chatted over or cigars that
              night in our rooms at Baker Street, “is one where, as in the
              investigations which you have chronicled under the names of ‘A
              Study in Scarlet’ and of ‘The Sign of Four,’ we have been
              compelled to reason backward from effects to causes. I have
              written to Lestrade asking him to supply us with the details which
              are now wanting, and which he will only get after he had secured
              his man. That he may be safely trusted to do, for although he is
              absolutely devoid of reason, he is as tenacious as a bulldog when
              he once understands what he has to do, and indeed, it is just this
              tenacity which has brought him to the top at Scotland Yard.”
            </TextNode>

            <TextNode>“Your case is not complete, then?” I asked.</TextNode>

            <TextNode>
              “It is fairly complete in essentials. We know who the author of
              the revolting business is, although one of the victims still
              escapes us. Of course, you have formed your own conclusions.”
            </TextNode>

            <TextNode>
              “I presume that this Jim Browner, the steward of a Liverpool boat,
              is the man whom you suspect?”
            </TextNode>

            <TextNode>“Oh! it is more than a suspicion.”</TextNode>

            <TextNode>
              “And yet I cannot see anything save very vague indications.”
            </TextNode>

            <TextNode>
              “On the contrary, to my mind nothing could be more clear. Let me
              run over the principal steps. We approached the case, you
              remember, with an absolutely blank mind, which is always an
              advantage. We had formed no theories. We were simply there to
              observe and to draw inferences from our observations. What did we
              see first? A very placid and respectable lady, who seemed quite
              innocent of any secret, and a portrait which showed me that she
              had two younger sisters. It instantly flashed across my mind that
              the box might have been meant for one of these. I set the idea
              aside as one which could be disproved or confirmed at our leisure.
              Then we went to the garden, as you remember, and we saw the very
              singular contents of the little yellow box.
            </TextNode>

            <TextNode>
              “The string was of the quality which is used by sail-makers aboard
              ship, and at once a whiff of the sea was perceptible in our
              investigation. When I observed that the knot was one which is
              popular with sailors, that the parcel had been posted at a port,
              and that the male ear was pierced for an earring which is so much
              more common among sailors than landsmen, I was quite certain that
              all the actors in the tragedy were to be found among our seafaring
              classes.
            </TextNode>

            <TextNode>
              “When I came to examine the address of the packet I observed that
              it was to Miss S. Cushing. Now, the oldest sister would, of
              course, be Miss Cushing, and although her initial was ‘S’ it might
              belong to one of the others as well. In that case we should have
              to commence our investigation from a fresh basis altogether. I
              therefore went into the house with the intention of clearing up
              this point. I was about to assure Miss Cushing that I was
              convinced that a mistake had been made when you may remember that
              I came suddenly to a stop. The fact was that I had just seen
              something which filled me with surprise and at the same time
              narrowed the field of our inquiry immensely.
            </TextNode>

            <TextNode>
              “As a medical man, you are aware, Watson, that there is no part of
              the body which varies so much as the human ear. Each ear is as a
              rule quite distinctive and differs from all other ones. In last
              year's <span className='italic'>Anthropological Journal</span> you
              will find two short monographs from my pen upon the subject. I
              had, therefore, examined the ears in the box with the eyes of an
              expert and had carefully noted their anatomical peculiarities.
              Imagine my surprise, then, when on looking at Miss Cushing I
              perceived that her ear corresponded exactly with the female ear
              which I had just inspected. The matter was entirely beyond
              coincidence. There was the same shortening of the pinna, the same
              broad curve of the upper lobe, the same convolution of the inner
              cartilage. In all essentials it was the same ear.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “In the first place, her sister's name was Sarah, and her address
              had until recently been the same, so that it was quite obvious how
              the mistake had occurred and for whom the packet was meant. Then
              we heard of this steward, married to the third sister, and learned
              that he had at one time been so intimate with Miss Sarah that she
              had actually gone up to Liverpool to be near the Browners, but a
              quarrel had afterwards divided them. This quarrel had put a stop
              to all communications for some months, so that if Browner had
              occasion to address a packet to Miss Sarah, he would undoubtedly
              have done so to her old address.
            </TextNode>

            <TextNode>
              “And now the matter had begun to straighten itself out
              wonderfully. We had learned of the existence of this steward, an
              impulsive man, of strong passions—you remember that he threw up
              what must have been a very superior berth in order to be nearer to
              his wife—subject, too, to occasional fits of hard drinking. We had
              reason to believe that his wife had been murdered, and that a
              man—presumably a seafaring man—had been murdered at the same time.
              Jealousy, of course, at once suggests itself as the motive for the
              crime. And why should these proofs of the deed be sent to Miss
              Sarah Cushing? Probably because during her residence in Liverpool
              she had some hand in bringing about the events which led to the
              tragedy. You will observe that this line of boats call at Belfast,
              Dublin, and Waterford; so that, presuming that Browner had
              committed the deed and had embarked at once upon his steamer,
              the&nbsp;
              <span className='italic'>May Day</span>, Belfast would be the
              first place at which he could post his terrible packet.
            </TextNode>

            <TextNode>
              “A second solution was at this stage obviously possible, and
              although I thought it exceedingly unlikely, I was determined to
              elucidate it before going further. An unsuccessful lover might
              have killed Mr. and Mrs. Browner, and the male ear might have
              belonged to the husband. There were many grave objections to this
              theory, but it was conceivable. I therefore sent off a telegram to
              my friend Algar, of the Liverpool force, and asked him to find out
              if Mrs. Browner were at home, and if Browner had departed in
              the&nbsp;
              <span className='italic'>May Day</span>. Then we went on to
              Wallington to visit Miss Sarah.
            </TextNode>

            <TextNode>
              “I was curious, in the first place, to see how far the family ear
              had been reproduced in her. Then, of course, she might give us
              very important information, but I was not sanguine that she would.
              She must have heard of the business the day before, since all
              Croydon was ringing with it, and she alone could have understood
              for whom the packet was meant. If she had been willing to help
              justice she would probably have communicated with the police
              already. However, it was clearly our duty to see her, so we went.
              We found that the news of the arrival of the packet—for her
              illness dated from that time—had such an effect upon her as to
              bring on brain fever. It was clearer than ever that she understood
              its full significance, but equally clear that we should have to
              wait some time for any assistance from her.
            </TextNode>

            <TextNode>
              “However, we were really independent of her help. Our answers were
              waiting for us at the police-station, where I had directed Algar
              to send them. Nothing could be more conclusive. Mrs. Browner's
              house had been closed for more than three days, and the neighbours
              were of opinion that she had gone south to see her relatives. It
              had been ascertained at the shipping offices that Browner had left
              aboard of the&nbsp;<span className='italic'>May Day</span>, and I
              calculate that she is due in the Thames tomorrow night. When he
              arrives he will be met by the obtuse but resolute Lestrade, and I
              have no doubt that we shall have all our details filled in.”
            </TextNode>

            <TextNode>
              Sherlock Holmes was not disappointed in his expectations. Two days
              later he received a bulky envelope, which contained a short note
              from the detective, and a typewritten document, which covered
              several pages of foolscap.
            </TextNode>

            <TextNode>
              “Lestrade has got him all right,” said Holmes, glancing up at me.
              “Perhaps it would interest you to hear what he says.
            </TextNode>

            <Indent>
              <TextNode noIndent className='italic'>
                “My dear Mr. Holmes:
              </TextNode>
              <TextNode noIndent>
                “In accordance with the scheme which we had formed in order to
                test our theories” [“the ‘we’ is rather fine, Watson, is it
                not?”] “I went down to the Albert Dock yesterday at 6 p.m., and
                boarded the S.S. May Day, belonging to the Liverpool, Dublin,
                and London Steam Packet Company. On inquiry, I found that there
                was a steward on board of the name of James Browner and that he
                had acted during the voyage in such an extraordinary manner that
                the captain had been compelled to relieve him of his duties. On
                descending to his berth, I found him seated upon a chest with
                his head sunk upon his hands, rocking himself to and fro. He is
                a big, powerful chap, clean-shaven, and very swarthy—something
                like Aldrige, who helped us in the bogus laundry affair. He
                jumped up when he heard my business, and I had my whistle to my
                lips to call a couple of river police, who were round the
                corner, but he seemed to have no heart in him, and he held out
                his hands quietly enough for the darbies. We brought him along
                to the cells, and his box as well, for we thought there might be
                something incriminating; but, bar a big sharp knife such as most
                sailors have, we got nothing for our trouble. However, we find
                that we shall want no more evidence, for on being brought before
                the inspector at the station he asked leave to make a statement,
                which was, of course, taken down, just as he made it, by our
                shorthand man. We had three copies typewritten, one of which I
                enclose. The affair proves, as I always thought it would, to be
                an extremely simple one, but I am obliged to you for assisting
                me in my investigation. With kind regards,
              </TextNode>
              <TextNode noIndent className='italic'>
                “Yours very truly,
              </TextNode>
              <TextNode noIndent className='italic'>
                “G. Lestrade.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “Hum! The investigation really was a very simple one,” remarked
              Holmes, “but I don't think it struck him in that light when he
              first called us in. However, let us see what Jim Browner has to
              say for himself. This is his statement as made before Inspector
              Montgomery at the Shadwell Police Station, and it has the
              advantage of being verbatim.”
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “ ‘Have I anything to say? Yes, I have a deal to say. I have to
                make a clean breast of it all. You can hang me, or you can leave
                me alone. I don't care a plug which you do. I tell you I've not
                shut an eye in sleep since I did it, and I don't believe I ever
                will again until I get past all waking. Sometimes it's his face,
                but most generally it's hers. I'm never without one or the other
                before me. He looks frowning and black-like, but she has a kind
                o' surprise upon her face. Ay, the white lamb, she might well be
                surprised when she read death on a face that had seldom looked
                anything but love upon her before.
              </TextNode>

              <TextNode>
                “ ‘But it was Sarah's fault, and may the curse of a broken man
                put a blight on her and set the blood rotting in her veins! It's
                not that I want to clear myself. I know that I went back to
                drink, like the beast that I was. But she would have forgiven
                me; she would have stuck as close to me as a rope to a block if
                that woman had never darkened our door. For Sarah Cushing loved
                me—that's the root of the business—she loved me until all her
                love turned to poisonous hate when she knew that I thought more
                of my wife's footmark in the mud than I did of her whole body
                and soul.
              </TextNode>

              <TextNode>
                “ ‘There were three sisters altogether. The old one was just a
                good woman, the second was a devil, and the third was an angel.
                Sarah was thirty-three, and Mary was twenty-nine when I married.
                We were just as happy as the day was long when we set up house
                together, and in all Liverpool there was no better woman than my
                Mary. And then we asked Sarah up for a week, and the week grew
                into a month, and one thing led to another, until she was just
                one of ourselves.
              </TextNode>

              <TextNode>
                “ ‘I was blue ribbon at that time, and we were putting a little
                money by, and all was as bright as a new dollar. My God, whoever
                would have thought that it could have come to this? Whoever
                would have dreamed it?
              </TextNode>

              <TextNode>
                “ ‘I used to be home for the week-ends very often, and sometimes
                if the ship were held back for cargo I would have a whole week
                at a time, and in this way I saw a deal of my sister-in-law,
                Sarah. She was a fine tall woman, black and quick and fierce,
                with a proud way of carrying her head, and a glint from her eye
                like a spark from a flint. But when little Mary was there I had
                never a thought of her, and that I swear as I hope for God's
                mercy.
              </TextNode>
            </Indent>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page279;

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

function Page108({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;NOBLE&nbsp;BACHELOR'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              The Lord St. Simon marriage, and its curious termination, have
              long ceased to be a subject of interest in those exalted circles
              in which the unfortunate bridegroom moves. Fresh scandals have
              eclipsed it, and their more piquant details have drawn the gossips
              away from this four-year-old drama. As I have reason to believe,
              however, that the full facts have never been revealed to the
              general public, and as my friend Sherlock Holmes had a
              considerable share in clearing the matter up, I feel that no
              memoir of him would be complete without some little sketch of this
              remarkable episode.
            </TextNode>

            <TextNode>
              It was a few weeks before my own marriage, during the days when I
              was still sharing rooms with Holmes in Baker Street, that he came
              home from an afternoon stroll to find a letter on the table
              waiting for him. I had remained indoors all day, for the weather
              had taken a sudden turn to rain, with high autumnal winds, and the
              Jezail bullet which I had brought back in one of my limbs as a
              relic of my Afghan campaign throbbed with dull persistence. With
              my body in one easy-chair and my legs upon another, I had
              surrounded myself with a cloud of newspapers until at last,
              saturated with the news of the day, I tossed them all aside and
              lay listless, watching the huge crest and monogram upon the
              envelope upon the table and wondering lazily who my friend's noble
              correspondent could be.
            </TextNode>

            <TextNode>
              “Here is a very fashionable epistle,” I remarked as he entered.
              “Your morning letters, if I remember right, were from a
              fish-monger and a tide-waiter.”
            </TextNode>

            <TextNode>
              “Yes, my correspondence has certainly the charm of variety,” he
              answered, smiling, “and the humbler are usually the more
              interesting. This looks like one of those unwelcome social
              summonses which call upon a man either to be bored or to lie.”
            </TextNode>

            <TextNode>
              He broke the seal and glanced over the contents.
            </TextNode>

            <TextNode>
              “Oh, come, it may prove to be something of interest, after all.”
            </TextNode>

            <TextNode>“Not social, then?”</TextNode>

            <TextNode>“No, distinctly professional.”</TextNode>

            <TextNode>“And from a noble client?”</TextNode>

            <TextNode>“One of the highest in England.”</TextNode>

            <TextNode>“My dear fellow, I congratulate you.”</TextNode>

            <TextNode>
              “I assure you, Watson, without affectation, that the status of my
              client is a matter of less moment to me than the interest of his
              case. It is just possible, however, that that also may not be
              wanting in this new investigation. You have been reading the
              papers diligently of late, have you not?”
            </TextNode>

            <TextNode>
              “It looks like it,” said I ruefully, pointing to a huge bundle in
              the corner. “I have had nothing else to do.”
            </TextNode>

            <TextNode>
              “It is fortunate, for you will perhaps be able to post me up. I
              read nothing except the criminal news and the agony column. The
              latter is always instructive. But if you have followed recent
              events so closely you must have read about Lord St. Simon and his
              wedding?”
            </TextNode>

            <TextNode>“Oh, yes, with the deepest interest.”</TextNode>

            <TextNode>
              “That is well. The letter which I hold in my hand is from Lord St.
              Simon. I will read it to you, and in return you must turn over
              these papers and let me have whatever bears upon the matter. This
              is what he says:
            </TextNode>

            <TextNode className='pl-14' noIndent>
              <span className='italic'>“ ‘My dear Mr. Sherlock Holmes:</span>
              <br /> “ ‘Lord Backwater tells me that I may place implicit
              reliance upon your judgment and discretion. I have determined,
              therefore, to call upon you and to consult you in reference to the
              very painful event which has occurred in connection with my
              wedding. Mr. Lestrade, of Scotland Yard, is acting already in the
              matter, but he assures me that he sees no objection to your
              co-operation, and that he even thinks that it might be of some
              assistance. I will call at four o'clock in the afternoon, and,
              should you have any other engagement at that time, I hope that you
              will postpone it, as this matter is of paramount importance.
              <br />
              <span className='italic'>
                “ ‘Yours faithfully,
                <br /> “ ‘St. Simon.’
              </span>
            </TextNode>

            <TextNode noIndent>
              “It is dated from Grosvenor Mansions, written with a quill pen,
              and the noble lord has had the misfortune to get a smear of ink
              upon the outer side of his right little finger,” remarked Holmes
              as he folded up the epistle.
            </TextNode>

            <TextNode>
              “He says four o'clock. It is three now. He will be here in an
              hour.”
            </TextNode>

            <TextNode>
              “Then I have just time, with your assistance, to get clear upon
              the subject. Turn over those papers and arrange the extracts in
              their order of time, while I take a glance as to who our client
              is.” He picked a red-covered volume from a line of books of
              reference beside the mantelpiece. “Here he is,” said he, sitting
              down and flattening it out upon his knee. “ ‘Lord Robert
              Walsingham de Vere St. Simon, second son of the Duke of Balmoral.’
              Hum! ‘Arms: Azure, three caltrops in chief over a fess sable. Born
              in 1846.’ He's forty-one years of age, which is mature for
              marriage. Was Under-Secretary for the colonies in a late
              administration. The Duke, his father, was at one time Secretary
              for Foreign Affairs. They inherit Plantagenet blood by direct
              descent, and Tudor on the distaff side. Ha! Well, there is nothing
              very instructive in all this. I think that I must turn to you
              Watson, for something more solid.”
            </TextNode>

            <TextNode>
              “I have very little difficulty in finding what I want,” said I,
              “for the facts are quite recent, and the matter struck me as
              remarkable. I feared to refer them to you, however, as I knew that
              you had an inquiry on hand and that you disliked the intrusion of
              other matters.”
            </TextNode>

            <TextNode>
              “Oh, you mean the little problem of the Grosvenor Square furniture
              van. That is quite cleared up now—though, indeed, it was obvious
              from the first. Pray give me the results of your newspaper
              selections.”
            </TextNode>

            <TextNode>
              “Here is the first notice which I can find. It is in the personal
              column of the <span className='italic'>Morning Post</span>, and
              dates, as you see, some weeks back:
            </TextNode>

            <TextNode className='pl-14' noIndent>
              “ ‘A marriage has been arranged [it says] and will, if rumour is
              correct, very shortly take place, between Lord Robert St. Simon,
              second son of the Duke of Balmoral, and Miss Hatty Doran, the only
              daughter of Aloysius Doran. Esq., of San Francisco, Cal., U.S.A.’
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode>That is all.”</TextNode>

            <TextNode>
              “Terse and to the point,” remarked Holmes, stretching his long,
              thin legs towards the fire.
            </TextNode>

            <TextNode>
              “There was a paragraph amplifying this in one of the society
              papers of the same week. Ah, here it is:
            </TextNode>

            <TextNode className='pl-14' noIndent>
              “ ‘There will soon be a call for protection in the marriage
              market, for the present free-trade principle appears to tell
              heavily against our home product. One by one the management of the
              noble houses of Great Britain is passing into the hands of our
              fair cousins from across the Atlantic. An important addition has
              been made during the last week to the list of the prizes which
              have been borne away by these charming invaders. Lord St. Simon,
              who has shown himself for over twenty years proof against the
              little god's arrows, has now definitely announced his approaching
              marriage with Miss Hatty Doran, the fascinating daughter of a
              California millionaire. Miss Doran, whose graceful figure and
              striking face attracted much attention at the Westbury House
              festivities, is an only child, and it is currently reported that
              her dowry will run to considerably over the six figures, with
              expectancies for the future. As it is an open secret that the Duke
              of Balmoral has been compelled to sell his pictures within the
              last few years, and as Lord St. Simon has no property of his own
              save the small estate of Birchmoor, it is obvious that the
              Californian heiress is not the only gainer by an alliance which
              will enable her to make the easy and common transition from a
              Republican lady to a British peeress.’”
            </TextNode>

            <TextNode noIndent>
              “Anything else?” asked Holmes, yawning.
            </TextNode>

            <TextNode>
              “Oh, yes; plenty. Then there is another note in the Morning Post
              to say that the marriage would be an absolutely quiet one, that it
              would be at St. George's, Hanover Square, that only half a dozen
              intimate friends would be invited, and that the party would return
              to the furnished house at Lancaster Gate which has been taken by
              Mr. Aloysius Doran. Two days later—that is, on Wednesday
              last—there is a curt announcement that the wedding had taken
              place, and that the honeymoon would be passed at Lord Backwater's
              place, near Petersfield. Those are all the notices which appeared
              before the disappearance of the bride.”
            </TextNode>

            <TextNode>“Before the what?” asked Holmes with a start.</TextNode>

            <TextNode>“The vanishing of the lady.”</TextNode>

            <TextNode>“When did she vanish, then?”</TextNode>

            <TextNode>“At the wedding breakfast.”</TextNode>

            <TextNode>
              “Indeed. This is more interesting than it promised to be; quite
              dramatic, in fact.”
            </TextNode>

            <TextNode>
              “Yes; it struck me as being a little out of the common.”
            </TextNode>

            <TextNode>
              “They often vanish before the ceremony, and occasionally during
              the honeymoon; but I cannot call to mind anything quite so prompt
              as this. Pray let me have the details.”
            </TextNode>

            <TextNode>“I warn you that they are very incomplete.”</TextNode>

            <TextNode>“Perhaps we may make them less so.”</TextNode>

            <TextNode>
              “Such as they are, they are set forth in a single article of a
              morning paper of yesterday, which I will read to you. It is
              headed, ‘Singular Occurrence at a Fashionable Wedding’:
            </TextNode>

            <div className='pl-14'>
              <TextNode noIndent>
                “ ‘The family of Lord Robert St. Simon has been thrown into the
                greatest consternation by the strange and painful episodes which
                have taken place in connection with his wedding. The ceremony,
                as shortly announced in the papers of yesterday, occurred on the
                previous morning; but it is only now that it has been possible
                to confirm the strange rumours which have been so persistently
                floating about. In spite of the attempts of the friends to hush
                the matter up, so much public attention has now been drawn to it
                that no good purpose can be served by affecting to disregard
                what is a common subject for conversation.
              </TextNode>
              <TextNode>
                “ ‘The ceremony, which was performed at St. George's, Hanover
                Square, was a very quiet one, no one being present save the
                father of the bride, Mr. Aloysius Doran, the Duchess of
                Balmoral, Lord Backwater, Lord Eustace and Lady Clara St. Simon
                (the younger brother and sister of the bridegroom), and Lady
                Alicia Whittington. The whole party proceeded afterwards to the
                house of Mr. Aloysius Doran, at Lancaster Gate, where breakfast
                had been prepared. It appears that some little trouble was
                caused by a woman, whose name has not been ascertained, who
                endeavoured to force her way into the house after the bridal
                party, alleging that she had some claim upon Lord St. Simon. It
                was only after a painful and prolonged scene that she was
                ejected by the butler and the footman. The bride, who had
                fortunately entered the house before this unpleasant
                interruption, had sat down to breakfast with the rest, when she
                complained of a sudden indisposition and retired to her room.
                Her prolonged absence having caused some comment, her father
                followed her, but learned from her maid that she had only come
                up to her chamber for an instant, caught up an ulster and
                bonnet, and hurried down to the passage. One of the footmen
                declared that he had seen a lady leave the house thus
                apparelled, but had refused to credit that it was his mistress,
                believing her to be with the company. On ascertaining that his
                daughter had disappeared, Mr. Aloysius Doran, in conjunction
                with the bridegroom, instantly put themselves in communication
                with the police, and very energetic inquiries are being made,
                which will probably result in a speedy clearing up of this very
                singular business. Up to a late hour last night, however,
                nothing had transpired as to the whereabouts of the missing
                lady. There are rumours of foul play in the matter, and it is
                said that the police have caused the arrest of the woman who had
                caused the original disturbance, in the belief that, from
                jealousy or some other motive, she may have been concerned in
                the strange disappearance of the bride.’”
              </TextNode>
            </div>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page108;

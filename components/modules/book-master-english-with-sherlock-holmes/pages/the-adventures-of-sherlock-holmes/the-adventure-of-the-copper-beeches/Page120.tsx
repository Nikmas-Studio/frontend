import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Indent from '@/components/elements/book-master-english-with-sherlock-holmes/Indent';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page120({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;COPPER&nbsp;BEECHES'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “I could hardly believe my ears. As you may observe, Mr. Holmes,
              my hair is somewhat luxuriant, and of a rather peculiar tint of
              chestnut. It has been considered artistic. I could not dream of
              sacrificing it in this offhand fashion.
            </TextNode>

            <TextNode>
              “ ‘I am afraid that that is quite impossible,’ said I. He had been
              watching me eagerly out of his small eyes, and I could see a
              shadow pass over his face as I spoke.
            </TextNode>

            <TextNode>
              “ ‘I am afraid that it is quite essential,’ said he. ‘It is a
              little fancy of my wife's, and ladies' fancies, you know, madam,
              ladies' fancies must be consulted. And so you won't cut your
              hair?’
            </TextNode>

            <TextNode>
              “ ‘No, sir, I really could not,’ I answered firmly.
            </TextNode>

            <TextNode>
              “ ‘Ah, very well; then that quite settles the matter. It is a
              pity, because in other respects you would really have done very
              nicely. In that case, Miss Stoper, I had best inspect a few more
              of your young ladies.’
            </TextNode>

            <TextNode>
              “The manageress had sat all this while busy with her papers
              without a word to either of us, but she glanced at me now with so
              much annoyance upon her face that I could not help suspecting that
              she had lost a handsome commission through my refusal.
            </TextNode>

            <TextNode>
              “ ‘Do you desire your name to be kept upon the books?’ she asked.
            </TextNode>

            <TextNode>“ ‘If you please, Miss Stoper.’</TextNode>

            <TextNode>
              “ ‘Well, really, it seems rather useless, since you refuse the
              most excellent offers in this fashion,’ said she sharply. ‘You can
              hardly expect us to exert ourselves to find another such opening
              for you. Good-day to you, Miss Hunter.’ She struck a gong upon the
              table, and I was shown out by the page.
            </TextNode>

            <TextNode>
              “Well, Mr. Holmes, when I got back to my lodgings and found little
              enough in the cupboard, and two or three bills upon the table. I
              began to ask myself whether I had not done a very foolish thing.
              After all, if these people had strange fads and expected obedience
              on the most extraordinary matters, they were at least ready to pay
              for their eccentricity. Very few governesses in England are
              getting £100 a year. Besides, what use was my hair to me? Many
              people are improved by wearing it short and perhaps I should be
              among the number. Next day I was inclined to think that I had made
              a mistake, and by the day after I was sure of it. I had almost
              overcome my pride so far as to go back to the agency and inquire
              whether the place was still open when I received this letter from
              the gentleman himself. I have it here and I will read it to you:
            </TextNode>

            <Indent>
              <TextNode className='italic' noIndent>
                “ ‘The Copper Beeches, near Winchester.
              </TextNode>
              <TextNode className='italic' noIndent>
                “ ‘Dear Miss Hunter:
              </TextNode>
              <TextNode noIndent>
                “ ‘Miss Stoper has very kindly given me your address, and I
                write from here to ask you whether you have reconsidered your
                decision. My wife is very anxious that you should come, for she
                has been much attracted by my description of you. We are willing
                to give £30 a quarter, or £120 a year, so as to recompense you
                for any little inconvenience which our fads may cause you. They
                are not very exacting, after all. My wife is fond of a
                particular shade of electric blue and would like you to wear
                such a dress indoors in the morning. You need not, however, go
                to the expense of purchasing one, as we have one belonging to my
                dear daughter Alice (now in Philadelphia), which would, I should
                think, fit you very well. Then, as to sitting here or there, or
                amusing yourself in any manner indicated, that need cause you no
                inconvenience. As regards your hair, it is no doubt a pity,
                especially as I could not help remarking its beauty during our
                short interview, but I am afraid that I must remain firm upon
                this point, and I only hope that the increased salary may
                recompense you for the loss. Your duties, as far as the child is
                concerned, are very light. Now do try to come, and I shall meet
                you with the dog-cart at Winchester. Let me know your train.
              </TextNode>
              <TextNode className='italic' noIndent>
                “ ‘Yours faithfully,
              </TextNode>
              <TextNode className='italic' noIndent>
                “ ‘Jephro Rucastle.’
              </TextNode>
            </Indent>
            <TextNode noIndent>
              “That is the letter which I have just received, Mr. Holmes, and my
              mind is made up that I will accept it. I thought, however, that
              before taking the final step I should like to submit the whole
              matter to your consideration.”
            </TextNode>

            <TextNode>
              “Well, Miss Hunter, if your mind is made up, that settles the
              question,” said Holmes, smiling.
            </TextNode>

            <TextNode>“But you would not advise me to refuse?”</TextNode>

            <TextNode>
              “I confess that it is not the situation which I should like to see
              a sister of mine apply for.”
            </TextNode>

            <TextNode>“What is the meaning of it all, Mr. Holmes?”</TextNode>

            <TextNode>
              “Ah, I have no data. I cannot tell. Perhaps you have yourself
              formed some opinion?”
            </TextNode>

            <TextNode>
              “Well, there seems to me to be only one possible solution. Mr.
              Rucastle seemed to be a very kind, good-natured man. Is it not
              possible that his wife is a lunatic, that he desires to keep the
              matter quiet for fear she should be taken to an asylum, and that
              he humours her fancies in every way in order to prevent an
              outbreak?”
            </TextNode>

            <TextNode>
              “That is a possible solution—in fact, as matters stand, it is the
              most probable one. But in any case it does not seem to be a nice
              household for a young lady.”
            </TextNode>

            <TextNode>“But the money, Mr. Holmes, the money!”</TextNode>

            <TextNode>
              “Well, yes, of course the pay is good—too good. That is what makes
              me uneasy. Why should they give you £120 a year, when they could
              have their pick for £40? There must be some strong reason behind.”
            </TextNode>

            <TextNode>
              “I thought that if I told you the circumstances you would
              understand afterwards if I wanted your help. I should feel so much
              stronger if I felt that you were at the back of me.”
            </TextNode>

            <TextNode>
              “Oh, you may carry that feeling away with you. I assure you that
              your little problem promises to be the most interesting which has
              come my way for some months. There is something distinctly novel
              about some of the features. If you should find yourself in doubt
              or in danger—”
            </TextNode>

            <TextNode>“Danger! What danger do you foresee?”</TextNode>

            <TextNode>
              Holmes shook his head gravely. “It would cease to be a danger if
              we could define it,” said he. “But at any time, day or night, a
              telegram would bring me down to your help.”
            </TextNode>

            <TextNode>
              “That is enough.” She rose briskly from her chair with the anxiety
              all swept from her face. “I shall go down to Hampshire quite easy
              in my mind now. I shall write to Mr. Rucastle at once, sacrifice
              my poor hair to-night, and start for Winchester to-morrow.” With a
              few grateful words to Holmes she bade us both good-night and
              bustled off upon her way.
            </TextNode>

            <TextNode>
              “At least,” said I as we heard her quick, firm steps descending
              the stairs, “she seems to be a young lady who is very well able to
              take care of herself.”
            </TextNode>

            <TextNode>
              “And she would need to be,” said Holmes gravely. “I am much
              mistaken if we do not hear from her before many days are past.”
            </TextNode>

            <TextNode>
              It was not very long before my friend's prediction was fulfilled.
              A fortnight went by, during which I frequently found my thoughts
              turning in her direction and wondering what strange side-alley of
              human experience this lonely woman had strayed into. The unusual
              salary, the curious conditions, the light duties, all pointed to
              something abnormal, though whether a fad or a plot, or whether the
              man were a philanthropist or a villain, it was quite beyond my
              powers to determine. As to Holmes, I observed that he sat
              frequently for half an hour on end, with knitted brows and an
              abstracted air, but he swept the matter away with a wave of his
              hand when I mentioned it. “Data! data! data!” he cried
              impatiently. “I can't make bricks without clay.” And yet he would
              always wind up by muttering that no sister of his should ever have
              accepted such a situation.
            </TextNode>

            <TextNode>
              The telegram which we eventually received came late one night just
              as I was thinking of turning in and Holmes was settling down to
              one of those all-night chemical researches which he frequently
              indulged in, when I would leave him stooping over a retort and a
              test-tube at night and find him in the same position when I came
              down to breakfast in the morning. He opened the yellow envelope,
              and then, glancing at the message, threw it across to me.
            </TextNode>

            <TextNode>
              “Just look up the trains in Bradshaw,” said he, and turned back to
              his chemical studies.
            </TextNode>

            <TextNode>The summons was a brief and urgent one.</TextNode>

            <Indent>
              <TextNode noIndent>
                Please be at the Black Swan Hotel at Winchester at midday
                to-morrow [it said]. Do come! I am at my wit's end.
              </TextNode>
              <TextNode className='italic' noIndent>
                Hunter.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “Will you come with me?” asked Holmes, glancing up.
            </TextNode>

            <TextNode>“I should wish to.”</TextNode>

            <TextNode>“Just look it up, then.”</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “There is a train at half-past nine,” said I, glancing over my
              Bradshaw. “It is due at Winchester at 11.30.”
            </TextNode>

            <TextNode>
              “That will do very nicely. Then perhaps I had better postpone my
              analysis of the acetones, as we may need to be at our best in the
              morning.”
            </TextNode>

            <TextNode>
              By eleven o'clock the next day we were well upon our way to the
              old English capital. Holmes had been buried in the morning papers
              all the way down, but after we had passed the Hampshire border he
              threw them down and began to admire the scenery. It was an ideal
              spring day, a light blue sky, flecked with little fleecy white
              clouds drifting across from west to east. The sun was shining very
              brightly, and yet there was an exhilarating nip in the air, which
              set an edge to a man's energy. All over the countryside, away to
              the rolling hills around Aldershot, the little red and grey roofs
              of the farm-steadings peeped out from amid the light green of the
              new foliage.
            </TextNode>

            <TextNode>
              “Are they not fresh and beautiful?” I cried with all the
              enthusiasm of a man fresh from the fogs of Baker Street.
            </TextNode>

            <TextNode>But Holmes shook his head gravely.</TextNode>

            <TextNode>
              “Do you know, Watson,” said he, “that it is one of the curses of a
              mind with a turn like mine that I must look at everything with
              reference to my own special subject. You look at these scattered
              houses, and you are impressed by their beauty. I look at them, and
              the only thought which comes to me is a feeling of their isolation
              and of the impunity with which crime may be committed there.”
            </TextNode>

            <TextNode>
              “Good heavens!” I cried. “Who would associate crime with these
              dear old homesteads?”
            </TextNode>

            <TextNode>
              “They always fill me with a certain horror. It is my belief,
              Watson, founded upon my experience, that the lowest and vilest
              alleys in London do not present a more dreadful record of sin than
              does the smiling and beautiful countryside.”
            </TextNode>

            <TextNode>“You horrify me!”</TextNode>

            <TextNode>
              “But the reason is very obvious. The pressure of public opinion
              can do in the town what the law cannot accomplish. There is no
              lane so vile that the scream of a tortured child, or the thud of a
              drunkard's blow, does not beget sympathy and indignation among the
              neighbours, and then the whole machinery of justice is ever so
              close that a word of complaint can set it going, and there is but
              a step between the crime and the dock. But look at these lonely
              houses, each in its own fields, filled for the most part with poor
              ignorant folk who know little of the law. Think of the deeds of
              hellish cruelty, the hidden wickedness which may go on, year in,
              year out, in such places, and none the wiser. Had this lady who
              appeals to us for help gone to live in Winchester, I should never
              have had a fear for her. It is the five miles of country which
              makes the danger. Still, it is clear that she is not personally
              threatened.”
            </TextNode>

            <TextNode>
              “No. If she can come to Winchester to meet us she can get away.”
            </TextNode>

            <TextNode>“Quite so. She has her freedom.”</TextNode>

            <TextNode>
              “What can be the matter, then? Can you suggest no explanation?”
            </TextNode>

            <TextNode>
              “I have devised seven separate explanations, each of which would
              cover the facts as far as we know them. But which of these is
              correct can only be determined by the fresh information which we
              shall no doubt find waiting for us. Well, there is the tower of
              the cathedral, and we shall soon learn all that Miss Hunter has to
              tell.”
            </TextNode>

            <TextNode>
              The Black Swan is an inn of repute in the High Street, at no
              distance from the station, and there we found the young lady
              waiting for us. She had engaged a sitting-room, and our lunch
              awaited us upon the table.
            </TextNode>

            <TextNode>
              “I am so delighted that you have come,” she said earnestly. “It is
              so very kind of you both; but indeed I do not know what I should
              do. Your advice will be altogether invaluable to me.”
            </TextNode>

            <TextNode>“Pray tell us what has happened to you.”</TextNode>

            <TextNode>
              “I will do so, and I must be quick, for I have promised Mr.
              Rucastle to be back before three. I got his leave to come into
              town this morning, though he little knew for what purpose.”
            </TextNode>

            <TextNode>
              “Let us have everything in its due order.” Holmes thrust his long
              thin legs out towards the fire and composed himself to listen.
            </TextNode>

            <TextNode>
              “In the first place, I may say that I have met, on the whole, with
              no actual ill-treatment from Mr. and Mrs. Rucastle. It is only
              fair to them to say that. But I cannot understand them, and I am
              not easy in my mind about them.”
            </TextNode>

            <TextNode>“What can you not understand?”</TextNode>

            <TextNode>
              “Their reasons for their conduct. But you shall have it all just
              as it occurred. When I came down, Mr. Rucastle met me here and
              drove me in his dog-cart to the Copper Beeches. It is, as he said,
              beautifully situated, but it is not beautiful in itself, for it is
              a large square block of a house, whitewashed, but all stained and
              streaked with damp and bad weather. There are grounds round it,
              woods on three sides, and on the fourth a field which slopes down
              to the Southampton highroad, which curves past about a hundred
              yards from the front door. This ground in front belongs to the
              house, but the woods all round are part of Lord Southerton's
              preserves. A clump of copper beeches immediately in front of the
              hall door has given its name to the place.
            </TextNode>

            <TextNode>
              “I was driven over by my employer, who was as amiable as ever, and
              was introduced by him that evening to his wife and the child.
              There was no truth, Mr. Holmes, in the conjecture which seemed to
              us to be probable in your rooms at Baker Street. Mrs. Rucastle is
              not mad. I found her to be a silent, pale-faced woman, much
              younger than her husband, not more than thirty, I should think,
              while he can hardly be less than forty-five. From their
              conversation I have gathered that they have been married about
              seven years, that he was a widower, and that his only child by the
              first wife was the daughter who has gone to Philadelphia. Mr.
              Rucastle told me in private that the reason why she had left them
              was that she had an unreasoning aversion to her stepmother. As the
              daughter could not have been less than twenty, I can quite imagine
              that her position must have been uncomfortable with her father's
              young wife.
            </TextNode>

            <TextNode>
              “Mrs. Rucastle seemed to me to be colourless in mind as well as in
              feature. She impressed me neither favourably nor the reverse. She
              was a nonentity. It was easy to see that she was passionately
              devoted both to her husband and to her little son. Her light grey
              eyes wandered continually from one to the other, noting every
              little want and forestalling it if possible. He was kind to her
              also in his bluff, boisterous fashion, and on the whole they
              seemed to be a happy couple. And yet she had some secret sorrow,
              this woman. She would often be lost in deep thought, with the
              saddest look upon her face. More than once I have surprised her in
              tears. I have thought sometimes that it was the disposition of her
              child which weighed upon her mind, for I have never met so utterly
              spoiled and so ill-natured a little creature. He is small for his
              age, with a head which is quite disproportionately large. His
              whole life appears to be spent in an alternation between savage
              fits of passion and gloomy intervals of sulking. Giving pain to
              any creature weaker than himself seems to be his one idea of
              amusement, and he shows quite remarkable talent in planning the
              capture of mice, little birds, and insects. But I would rather not
              talk about the creature, Mr. Holmes, and, indeed, he has little to
              do with my story.”
            </TextNode>

            <TextNode>
              “I am glad of all details,” remarked my friend, “whether they seem
              to you to be relevant or not.”
            </TextNode>

            <TextNode>
              “I shall try not to miss anything of importance. The one
              unpleasant thing about the house, which struck me at once, was the
              appearance and conduct of the servants. There are only two, a man
              and his wife. Toller, for that is his name, is a rough, uncouth
              man, with grizzled hair and whiskers, and a perpetual smell of
              drink. Twice since I have been with them he has been quite drunk,
              and yet Mr. Rucastle seemed to take no notice of it. His wife is a
              very tall and strong woman with a sour face, as silent as Mrs.
              Rucastle and much less amiable. They are a most unpleasant couple,
              but fortunately I spend most of my time in the nursery and my own
              room, which are next to each other in one corner of the building.
            </TextNode>

            <TextNode>
              “For two days after my arrival at the Copper Beeches my life was
              very quiet; on the third, Mrs. Rucastle came down just after
              breakfast and whispered something to her husband.
            </TextNode>

            <TextNode>
              “ ‘Oh, yes,’ said he, turning to me, ‘we are very much obliged to
              you, Miss Hunter, for falling in with our whims so far as to cut
              your hair. I assure you that it has not detracted in the tiniest
              iota from your appearance. We shall now see how the electric-blue
              dress will become you. You will find it laid out upon the bed in
              your room, and if you would be so good as to put it on we should
              both be extremely obliged.’
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page120;

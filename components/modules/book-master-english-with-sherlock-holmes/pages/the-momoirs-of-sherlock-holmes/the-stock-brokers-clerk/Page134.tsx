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

function Page134({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title="THE STOCK-BROKER'S CLERK"
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              Shortly after my marriage I had bought a connection in the
              Paddington district. Old Mr. Farquhar, from whom I purchased it,
              had at one time an excellent general practice; but his age, and an
              affliction of the nature of St. Vitus's dance from which he
              suffered, had very much thinned it. The public not unnaturally
              goes on the principle that he who would heal others must himself
              be whole, and looks askance at the curative powers of the man
              whose own case is beyond the reach of his drugs. Thus as my
              predecessor weakened his practice declined, until when I purchased
              it from him it had sunk from twelve hundred to little more than
              three hundred a year. I had confidence, however, in my own youth
              and energy, and was convinced that in a very few years the concern
              would be as flourishing as ever.
            </TextNode>

            <TextNode>
              For three months after taking over the practice I was kept very
              closely at work, and saw little of my friend Sherlock Holmes, for
              I was too busy to visit Baker Street, and he seldom went anywhere
              himself save upon professional business. I was surprised,
              therefore, when, one morning in June, as I sat reading the&nbsp;
              <span className='italic'>British Medical Journal</span> after
              breakfast, I heard a ring at the bell, followed by the high,
              somewhat strident tones of my old companion's voice.
            </TextNode>

            <TextNode>
              “Ah, my dear Watson,” said he, striding into the room, “I am very
              delighted to see you! I trust that Mrs. Watson has entirely
              recovered from all the little excitements connected with our
              adventure of the Sign of Four.”
            </TextNode>

            <TextNode>
              “Thank you, we are both very well,” said I, shaking him warmly by
              the hand.
            </TextNode>

            <TextNode>
              “And I hope, also,” he continued, sitting down in the
              rocking-chair, “that the cares of medical practice have not
              entirely obliterated the interest which you used to take in our
              little deductive problems.”
            </TextNode>

            <TextNode>
              “On the contrary,” I answered, “it was only last night that I was
              looking over my old notes, and classifying some of our past
              results.”
            </TextNode>

            <TextNode>
              “I trust that you don't consider your collection closed.”
            </TextNode>

            <TextNode>
              “Not at all. I should wish nothing better than to have some more
              of such experiences.”
            </TextNode>

            <TextNode>“To-day, for example?”</TextNode>

            <TextNode>“Yes, to-day, if you like.”</TextNode>

            <TextNode>“And as far off as Birmingham?”</TextNode>

            <TextNode>“Certainly, if you wish it.”</TextNode>

            <TextNode>“And the practice?”</TextNode>

            <TextNode>
              “I do my neighbor's when he goes. He is always ready to work off
              the debt.”
            </TextNode>

            <TextNode>
              “Ha! Nothing could be better,” said Holmes, leaning back in his
              chair and looking keenly at me from under his half closed lids. “I
              perceive that you have been unwell lately. Summer colds are always
              a little trying.”
            </TextNode>

            <TextNode>
              “I was confined to the house by a severe chill for three days last
              week. I thought, however, that I had cast off every trace of it.”
            </TextNode>

            <TextNode>“So you have. You look remarkably robust.”</TextNode>

            <TextNode>“How, then, did you know of it?”</TextNode>

            <TextNode>“My dear fellow, you know my methods.”</TextNode>

            <TextNode>“You deduced it, then?”</TextNode>

            <TextNode>“Certainly.”</TextNode>

            <TextNode>“And from what?”</TextNode>

            <TextNode>“From your slippers.”</TextNode>

            <TextNode>
              I glanced down at the new patent leathers which I was wearing.
              “How on earth—” I began, but Holmes answered my question before it
              was asked.
            </TextNode>

            <TextNode>
              “Your slippers are new,” he said. “You could not have had them
              more than a few weeks. The soles which you are at this moment
              presenting to me are slightly scorched. For a moment I thought
              they might have got wet and been burned in the drying. But near
              the instep there is a small circular wafer of paper with the
              shopman's hieroglyphics upon it. Damp would of course have removed
              this. You had, then, been sitting with our feet outstretched to
              the fire, which a man would hardly do even in so wet a June as
              this if he were in his full health.”
            </TextNode>

            <TextNode>
              Like all Holmes's reasoning the thing seemed simplicity itself
              when it was once explained. He read the thought upon my features,
              and his smile had a tinge of bitterness.
            </TextNode>

            <TextNode>
              “I am afraid that I rather give myself away when I explain,” said
              he. “Results without causes are much more impressive. You are
              ready to come to Birmingham, then?”
            </TextNode>

            <TextNode>“Certainly. What is the case?”</TextNode>

            <TextNode>
              “You shall hear it all in the train. My client is outside in a
              four-wheeler. Can you come at once?”
            </TextNode>

            <TextNode>
              “In an instant.” I scribbled a note to my neighbor, rushed
              upstairs to explain the matter to my wife, and joined Holmes upon
              the door-step.
            </TextNode>

            <TextNode>
              “Your neighbor is a doctor,” said he, nodding at the brass plate.
            </TextNode>

            <TextNode>“Yes; he bought a practice as I did.”</TextNode>

            <TextNode>“An old-established one?”</TextNode>

            <TextNode>
              “Just the same as mine. Both have been ever since the houses were
              built.”
            </TextNode>

            <TextNode>“Ah! Then you got hold of the best of the two.”</TextNode>

            <TextNode>“I think I did. But how do you know?”</TextNode>

            <TextNode>
              “By the steps, my boy. Yours are worn three inches deeper than
              his. But this gentleman in the cab is my client, Mr. Hall Pycroft.
              Allow me to introduce you to him. Whip your horse up, cabby, for
              we have only just time to catch our train.”
            </TextNode>

            <TextNode>
              The man whom I found myself facing was a well built,
              fresh-complexioned young fellow, with a frank, honest face and a
              slight, crisp, yellow mustache. He wore a very shiny top hat and a
              neat suit of sober black, which made him look what he was—a smart
              young City man, of the class who have been labeled cockneys, but
              who give us our crack volunteer regiments, and who turn out more
              fine athletes and sportsmen than any body of men in these islands.
              His round, ruddy face was naturally full of cheeriness, but the
              corners of his mouth seemed to me to be pulled down in a
              half-comical distress. It was not, however, until we were all in a
              first-class carriage and well started upon our journey to
              Birmingham that I was able to learn what the trouble was which had
              driven him to Sherlock Holmes.
            </TextNode>

            <TextNode>
              “We have a clear run here of seventy minutes,” Holmes remarked. “I
              want you, Mr. Hall Pycroft, to tell my friend your very
              interesting experience exactly as you have told it to me, or with
              more detail if possible. It will be of use to me to hear the
              succession of events again. It is a case, Watson, which may prove
              to have something in it, or may prove to have nothing, but which,
              at least, presents those unusual and&nbsp;
              <span className='italic'>outré</span> features which are as dear
              to you as they are to me. Now, Mr. Pycroft, I shall not interrupt
              you again.”
            </TextNode>

            <TextNode>
              Our young companion looked at me with a twinkle in his eye.
            </TextNode>

            <TextNode>
              “The worst of the story is,” said he, “that I show myself up as
              such a confounded fool. Of course it may work out all right, and I
              don't see that I could have done otherwise; but if I have lost my
              crib and get nothing in exchange I shall feel what a soft Johnnie
              I have been. I'm not very good at telling a story, Dr. Watson, but
              it is like this with me:
            </TextNode>

            <TextNode>
              “I used to have a billet at Coxon & Woodhouse's, of Draper's
              Gardens, but they were let in early in the spring through the
              Venezuelan loan, as no doubt you remember, and came a nasty
              cropper. I had been with them five years, and old Coxon gave me a
              ripping good testimonial when the smash came, but of course we
              clerks were all turned adrift, the twenty-seven of us. I tried
              here and tried there, but there were lots of other chaps on the
              same lay as myself, and it was a perfect frost for a long time. I
              had been taking three pounds a week at Coxon's, and I had saved
              about seventy of them, but I soon worked my way through that and
              out at the other end. I was fairly at the end of my tether at
              last, and could hardly find the stamps to answer the
              advertisements or the envelopes to stick them to. I had worn out
              my boots paddling up office stairs, and I seemed just as far from
              getting a billet as ever.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “At last I saw a vacancy at Mawson & Williams's, the great
              stock-broking firm in Lombard Street. I dare say E. C. is not much
              in your line, but I can tell you that this is about the richest
              house in London. The advertisement was to be answered by letter
              only. I sent in my testimonial and application, but without the
              least hope of getting it. Back came an answer by return, saying
              that if I would appear next Monday I might take over my new duties
              at once, provided that my appearance was satisfactory. No one
              knows how these things are worked. Some people say that the
              manager just plunges his hand into the heap and takes the first
              that comes. Anyhow it was my innings that time, and I don't ever
              wish to feel better pleased. The screw was a pound a week rise,
              and the duties just about the same as at Coxon's.
            </TextNode>

            <TextNode>
              “And now I come to the queer part of the business. I was in
              diggings out Hampstead way, 17 Potter's Terrace. Well, I was
              sitting doing a smoke that very evening after I had been promised
              the appointment, when up came my landlady with a card which had
              “Arthur Pinner, Financial Agent,” printed upon it. I had never
              heard the name before and could not imagine what he wanted with
              me; but, of course, I asked her to show him up. In he walked, a
              middle-sized, dark-haired, dark-eyed, black-bearded man, with a
              touch of the sheeny about his nose. He had a brisk kind of way
              with him and spoke sharply, like a man who knew the value of time.
            </TextNode>

            <TextNode>“ ‘Mr. Hall Pycroft, I believe?’ said he.</TextNode>

            <TextNode>
              “ ‘Yes, sir,’ I answered, pushing a chair towards him.
            </TextNode>

            <TextNode>“ ‘Lately engaged at Coxon & Woodhouse's?’</TextNode>

            <TextNode>“ ‘Yes, sir.’</TextNode>

            <TextNode>“ ‘And now on the staff of Mawson's.’</TextNode>

            <TextNode>“ ‘Quite so.’</TextNode>

            <TextNode>
              “ ‘Well,’ said he, ‘the fact is that I have heard some really
              extraordinary stories about your financial ability. You remember
              Parker, who used to be Coxon's manager? He can never say enough
              about it.’
            </TextNode>

            <TextNode>
              “Of course I was pleased to hear this. I had always been pretty
              sharp in the office, but I had never dreamed that I was talked
              about in the City in this fashion.
            </TextNode>

            <TextNode>“ ‘You have a good memory?’ said he.</TextNode>

            <TextNode>“ ‘Pretty fair,’ I answered, modestly.</TextNode>

            <TextNode>
              “ ‘Have you kept in touch with the market while you have been out
              of work?’ he asked.
            </TextNode>

            <TextNode>
              “ ‘Yes. I read the stock exchange list every morning.’
            </TextNode>

            <TextNode>
              “ ‘Now that shows real application!’ he cried. ‘That is the way to
              prosper! You won't mind my testing you, will you? Let me see. How
              are Ayrshires?’
            </TextNode>

            <TextNode>
              “ ‘A hundred and six and a quarter to a hundred and five and
              seven-eighths.’
            </TextNode>

            <TextNode>“ ‘And New Zealand consolidated?’</TextNode>

            <TextNode>“ ‘A hundred and four.’</TextNode>

            <TextNode>“ ‘And British Broken Hills?’</TextNode>

            <TextNode>“ ‘Seven to seven-and-six.’</TextNode>

            <TextNode>
              “ ‘Wonderful!’ he cried, with his hands up. ‘This quite fits in
              with all that I had heard. My boy, my boy, you are very much too
              good to be a clerk at Mawson's!’
            </TextNode>

            <TextNode>
              “This outburst rather astonished me, as you can think. ‘Well,’
              said I, ‘other people don't think quite so much of me as you seem
              to do, Mr. Pinner. I had a hard enough fight to get this berth,
              and I am very glad to have it.’
            </TextNode>

            <TextNode>
              “ ‘Pooh, man; you should soar above it. You are not in your true
              sphere. Now, I'll tell you how it stands with me. What I have to
              offer is little enough when measured by your ability, but when
              compared with Mawson's, it's light to dark. Let me see. When do
              you go to Mawson's?’
            </TextNode>

            <TextNode>“ ‘On Monday.’</TextNode>

            <TextNode>
              “ ‘Ha, ha! I think I would risk a little sporting flutter that you
              don't go there at all.’
            </TextNode>

            <TextNode>“ ‘Not go to Mawson's?’</TextNode>

            <TextNode>
              “ ‘No, sir. By that day you will be the business manager of the
              Franco-Midland Hardware Company, Limited, with a hundred and
              thirty-four branches in the towns and villages of France, not
              counting one in Brussels and one in San Remo.’
            </TextNode>

            <TextNode>
              “This took my breath away. ‘I never heard of it,’ said I.
            </TextNode>

            <TextNode>
              “ ‘Very likely not. It has been kept very quiet, for the capital
              was all privately subscribed, and it's too good a thing to let the
              public into. My brother, Harry Pinner, is promoter, and joins the
              board after allotment as managing director. He knew I was in the
              swim down here, and asked me to pick up a good man cheap. A young,
              pushing man with plenty of snap about him. Parker spoke of you,
              and that brought me here tonight. We can only offer you a beggarly
              five hundred to start with.’
            </TextNode>

            <TextNode>“ ‘Five hundred a year!’ I shouted.</TextNode>

            <TextNode>
              “ ‘Only that at the beginning; but you are to have an overriding
              commission of one per cent on all business done by your agents,
              and you may take my word for it that this will come to more than
              your salary.’
            </TextNode>

            <TextNode>“ ‘But I know nothing about hardware.’</TextNode>

            <TextNode>“ ‘Tut, my boy; you know about figures.’</TextNode>

            <TextNode>
              “My head buzzed, and I could hardly sit still in my chair. But
              suddenly a little chill of doubt came upon me.
            </TextNode>

            <TextNode>
              “ ‘I must be frank with you,’ said I. ‘Mawson only gives me two
              hundred, but Mawson is safe. Now, really, I know so little about
              your company that—’
            </TextNode>

            <TextNode>
              “ ‘Ah, smart, smart!’ he cried, in a kind of ecstasy of delight.
              ‘You are the very man for us. You are not to be talked over, and
              quite right, too. Now, here's a note for a hundred pounds, and if
              you think that we can do business you may just slip it into your
              pocket as an advance upon your salary.’
            </TextNode>

            <TextNode>
              “ ‘That is very handsome,’ said I. ‘When should I take over my new
              duties?’
            </TextNode>

            <TextNode>
              “ ‘Be in Birmingham to-morrow at one,’ said he. ‘I have a note in
              my pocket here which you will take to my brother. You will find
              him at 126b Corporation Street, where the temporary offices of the
              company are situated. Of course he must confirm your engagement,
              but between ourselves it will be all right.’
            </TextNode>

            <TextNode>
              “ ‘Really, I hardly know how to express my gratitude, Mr. Pinner,’
              said I.
            </TextNode>

            <TextNode>
              “ ‘Not at all, my boy. You have only got your desserts. There are
              one or two small things—mere formalities—which I must arrange with
              you. You have a bit of paper beside you there. Kindly write upon
              it “I am perfectly willing to act as business manager to the
              Franco-Midland Hardware Company, Limited, at a minimum salary of
              £500.”’
            </TextNode>

            <TextNode>
              “I did as he asked, and he put the paper in his pocket.
            </TextNode>

            <TextNode>
              “ ‘There is one other detail,’ said he. ‘What do you intend to do
              about Mawson's?’
            </TextNode>

            <TextNode>
              “I had forgotten all about Mawson's in my joy. ‘I'll write and
              resign,’ said I.
            </TextNode>

            <TextNode>
              “ ‘Precisely what I don't want you to do. I had a row over you
              with Mawson's manager. I had gone up to ask him about you, and he
              was very offensive; accused me of coaxing you away from the
              service of the firm, and that sort of thing. At last I fairly lost
              my temper. “If you want good men you should pay them a good
              price,” said I.
            </TextNode>

            <TextNode>
              “ ‘ “He would rather have our small price than your big one,” said
              he.
            </TextNode>

            <TextNode>
              “ ‘ “I'll lay you a fiver,” said I, “that when he has my offer
              you'll never so much as hear from him again.”
            </TextNode>

            <TextNode>
              “ ‘ “Done!” said he. “We picked him out of the gutter, and he
              won't leave us so easily.” Those were his very words.’
            </TextNode>

            <TextNode>
              “ ‘The impudent scoundrel!’ I cried. ‘I've never so much as seen
              him in my life. Why should I consider him in any way? I shall
              certainly not write if you would rather I didn't.’
            </TextNode>

            <TextNode>
              “ ‘Good! That's a promise,’ said he, rising from his chair. ‘Well,
              I'm delighted to have got so good a man for my brother. Here's
              your advance of a hundred pounds, and here is the letter. Make a
              note of the address, 126b Corporation Street, and remember that
              one o'clock to-morrow is your appointment. Good-night; and may you
              have all the fortune that you deserve!’
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page134;

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

function Page245({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;VALLEY&nbsp;OF&nbsp;FEAR'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “You mean that someone waded across the moat?”
            </TextNode>

            <TextNode>“Exactly!”</TextNode>

            <TextNode>
              “Then if you were in the room within half a minute of the crime,
              he must have been in the water at that very moment.”
            </TextNode>

            <TextNode>
              “I have not a doubt of it. I wish to heaven that I had rushed to
              the window! But the curtain screened it, as you can see, and so it
              never occurred to me. Then I heard the step of Mrs. Douglas, and I
              could not let her enter the room. It would have been too
              horrible.”
            </TextNode>

            <TextNode>
              “Horrible enough!” said the doctor, looking at the shattered head
              and the terrible marks which surrounded it. “I've never seen such
              injuries since the Birlstone railway smash.”
            </TextNode>

            <TextNode>
              “But, I say,” remarked the police sergeant, whose slow, bucolic
              common sense was still pondering the open window. “It's all very
              well your saying that a man escaped by wading this moat, but what
              I ask you is, how did he ever get into the house at all if the
              bridge was up?”
            </TextNode>

            <TextNode>“Ah, that's the question,” said Barker.</TextNode>

            <TextNode>“At what o'clock was it raised?”</TextNode>

            <TextNode>
              “It was nearly six o'clock,” said Ames, the butler.
            </TextNode>

            <TextNode>
              “I've heard,” said the sergeant, “that it was usually raised at
              sunset. That would be nearer half-past four than six at this time
              of year.”
            </TextNode>

            <TextNode>
              “Mrs. Douglas had visitors to tea,” said Ames. “I couldn't raise
              it until they went. Then I wound it up myself.”
            </TextNode>

            <TextNode>
              “Then it comes to this,” said the sergeant: “If anyone came from
              outside—if they did—they must have got in across the bridge before
              six and been in hiding ever since, until Mr. Douglas came into the
              room after eleven.”
            </TextNode>

            <TextNode>
              “That is so! Mr. Douglas went round the house every night the last
              thing before he turned in to see that the lights were right. That
              brought him in here. The man was waiting and shot him. Then he got
              away through the window and left his gun behind him. That's how I
              read it; for nothing else will fit the facts.”
            </TextNode>

            <TextNode>
              The sergeant picked up a card which lay beside the dead man on the
              floor. The initials V. V. and under them the number 341 were
              rudely scrawled in ink upon it.
            </TextNode>

            <TextNode>“What's this?” he asked, holding it up.</TextNode>

            <TextNode>
              Barker looked at it with curiosity. “I never noticed it before,”
              he said. “The murderer must have left it behind him.”
            </TextNode>

            <TextNode>“V. V.—341. I can make no sense of that.”</TextNode>

            <TextNode>
              The sergeant kept turning it over in his big fingers. “What's V.
              V.? Somebody's initials, maybe. What have you got there, Dr.
              Wood?”
            </TextNode>

            <TextNode>
              It was a good-sized hammer which had been lying on the rug in
              front of the fireplace—a substantial, workmanlike hammer. Cecil
              Barker pointed to a box of brass-headed nails upon the
              mantelpiece.
            </TextNode>

            <TextNode>
              “Mr. Douglas was altering the pictures yesterday,” he said. “I saw
              him myself, standing upon that chair and fixing the big picture
              above it. That accounts for the hammer.”
            </TextNode>

            <TextNode>
              “We'd best put it back on the rug where we found it,” said the
              sergeant, scratching his puzzled head in his perplexity. “It will
              want the best brains in the force to get to the bottom of this
              thing. It will be a London job before it is finished.” He raised
              the hand lamp and walked slowly round the room. “Hullo!” he cried,
              excitedly, drawing the window curtain to one side. “What o'clock
              were those curtains drawn?”
            </TextNode>

            <TextNode>
              “When the lamps were lit,” said the butler. “It would be shortly
              after four.”
            </TextNode>

            <TextNode>
              “Someone had been hiding here, sure enough.” He held down the
              light, and the marks of muddy boots were very visible in the
              corner. “I'm bound to say this bears out your theory, Mr. Barker.
              It looks as if the man got into the house after four when the
              curtains were drawn and before six when the bridge was raised. He
              slipped into this room, because it was the first that he saw.
              There was no other place where he could hide, so he popped in
              behind this curtain. That all seems clear enough. It is likely
              that his main idea was to burgle the house; but Mr. Douglas
              chanced to come upon him, so he murdered him and escaped.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “That's how I read it,” said Barker. “But, I say, aren't we
              wasting precious time? Couldn't we start out and scour the country
              before the fellow gets away?”
            </TextNode>

            <TextNode>The sergeant considered for a moment.</TextNode>
            <TextNode>
              “There are no trains before six in the morning; so he can't get
              away by rail. If he goes by road with his legs all dripping, it's
              odds that someone will notice him. Anyhow, I can't leave here
              myself until I am relieved. But I think none of you should go
              until we see more clearly how we all stand.”
            </TextNode>

            <TextNode>
              The doctor had taken the lamp and was narrowly scrutinizing the
              body. “What's this mark?” he asked. “Could this have any
              connection with the crime?”
            </TextNode>

            <TextNode>
              The dead man's right arm was thrust out from his dressing gown,
              and exposed as high as the elbow. About halfway up the forearm was
              a curious brown design, a triangle inside a circle, standing out
              in vivid relief upon the lard-coloured skin.
            </TextNode>
            <TextNode>
              “It's not tattooed,” said the doctor, peering through his glasses.
              “I never saw anything like it. The man has been branded at some
              time as they brand cattle. What is the meaning of this?”
            </TextNode>

            <TextNode>
              “I don't profess to know the meaning of it,” said Cecil Barker;
              “but I have seen the mark on Douglas many times this last ten
              years.”
            </TextNode>

            <TextNode>
              “And so have I,” said the butler. “Many a time when the master has
              rolled up his sleeves I have noticed that very mark. I've often
              wondered what it could be.”
            </TextNode>

            <TextNode>
              “Then it has nothing to do with the crime, anyhow,” said the
              sergeant. “But it's a rum thing all the same. Everything about
              this case is rum. Well, what is it now?”
            </TextNode>

            <TextNode>
              The butler had given an exclamation of astonishment and was
              pointing at the dead man's outstretched hand.
            </TextNode>

            <TextNode>“They've taken his wedding ring!” he gasped.</TextNode>

            <TextNode>“What!”</TextNode>

            <TextNode>
              “Yes, indeed. Master always wore his plain gold wedding ring on
              the little finger of his left hand. That ring with the rough
              nugget on it was above it, and the twisted snake ring on the third
              finger. There's the nugget and there's the snake, but the wedding
              ring is gone.”
            </TextNode>

            <TextNode>“He's right,” said Barker.</TextNode>

            <TextNode>
              “Do you tell me,” said the sergeant, “that the wedding ring was
              below the other?”
            </TextNode>

            <TextNode>“Always!”</TextNode>

            <TextNode>
              “Then the murderer, or whoever it was, first took off this ring
              you call the nugget ring, then the wedding ring, and afterwards
              put the nugget ring back again.”
            </TextNode>

            <TextNode>“That is so!”</TextNode>

            <TextNode>
              The worthy country policeman shook his head. “Seems to me the
              sooner we get London on to this case the better,” said he. “White
              Mason is a smart man. No local job has ever been too much for
              White Mason. It won't be long now before he is here to help us.
              But I expect we'll have to look to London before we are through.
              Anyhow, I'm not ashamed to say that it is a deal too thick for the
              likes of me.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page245;

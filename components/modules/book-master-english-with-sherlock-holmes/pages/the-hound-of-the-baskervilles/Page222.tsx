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

function Page222({
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
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Exactly. I have wired to get his name and address from the
              Official Registry. I should not be surprised if this were an
              answer to my question.”
            </TextNode>

            <TextNode>
              The ring at the bell proved to be something even more satisfactory
              than an answer, however, for the door opened and a rough-looking
              fellow entered who was evidently the man himself.
            </TextNode>

            <TextNode>
              “I got a message from the head office that a gent at this address
              had been inquiring for 2704,” said he. “I've driven my cab this
              seven years and never a word of complaint. I came here straight
              from the Yard to ask you to your face what you had against me.”
            </TextNode>

            <TextNode>
              “I have nothing in the world against you, my good man,” said
              Holmes. “On the contrary, I have half a sovereign for you if you
              will give me a clear answer to my questions.”
            </TextNode>

            <TextNode>
              “Well, I've had a good day and no mistake,” said the cabman, with
              a grin. “What was it you wanted to ask, sir?”
            </TextNode>

            <TextNode>
              “First of all your name and address, in case I want you again.”
            </TextNode>

            <TextNode>
              “John Clayton, 3 Turpey Street, the Borough. My cab is out of
              Shipley's Yard, near Waterloo Station.”
            </TextNode>

            <TextNode>Sherlock Holmes made a note of it.</TextNode>

            <TextNode>
              “Now, Clayton, tell me all about the fare who came and watched
              this house at ten o'clock this morning and afterwards followed the
              two gentlemen down Regent Street.”
            </TextNode>

            <TextNode>
              The man looked surprised and a little embarrassed. “Why, there's
              no good my telling you things, for you seem to know as much as I
              do already,” said he. “The truth is that the gentleman told me
              that he was a detective and that I was to say nothing about him to
              anyone.”
            </TextNode>

            <TextNode>
              “My good fellow, this is a very serious business, and you may find
              yourself in a pretty bad position if you try to hide anything from
              me. You say that your fare told you that he was a detective?”
            </TextNode>

            <TextNode>“Yes, he did.”</TextNode>

            <TextNode>“When did he say this?”</TextNode>

            <TextNode>“When he left me.”</TextNode>

            <TextNode>“Did he say anything more?”</TextNode>

            <TextNode>“He mentioned his name.”</TextNode>

            <TextNode>
              Holmes cast a swift glance of triumph at me. “Oh, he mentioned his
              name, did he? That was imprudent. What was the name that he
              mentioned?”
            </TextNode>

            <TextNode>
              “His name,” said the cabman, “was Mr. Sherlock Holmes.”
            </TextNode>

            <TextNode>
              Never have I seen my friend more completely taken aback than by
              the cabman's reply. For an instant he sat in silent amazement.
              Then he burst into a hearty laugh.
            </TextNode>

            <TextNode>
              “A touch, Watson—an undeniable touch!” said he. “I feel a foil as
              quick and supple as my own. He got home upon me very prettily that
              time. So his name was Sherlock Holmes, was it?”
            </TextNode>

            <TextNode>“Yes, sir, that was the gentleman's name.”</TextNode>

            <TextNode>
              “Excellent! Tell me where you picked him up and all that
              occurred.”
            </TextNode>

            <TextNode>
              “He hailed me at half-past nine in Trafalgar Square. He said that
              he was a detective, and he offered me two guineas if I would do
              exactly what he wanted all day and ask no questions. I was glad
              enough to agree. First we drove down to the Northumberland Hotel
              and waited there until two gentlemen came out and took a cab from
              the rank. We followed their cab until it pulled up somewhere near
              here.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“This very door,” said Holmes.</TextNode>

            <TextNode>
              “Well, I couldn't be sure of that, but I dare say my fare knew all
              about it. We pulled up half-way down the street and waited an hour
              and a half. Then the two gentlemen passed us, walking, and we
              followed down Baker Street and along—”
            </TextNode>

            <TextNode>“I know,” said Holmes.</TextNode>

            <TextNode>
              “Until we got three-quarters down Regent Street. Then my gentleman
              threw up the trap, and he cried that I should drive right away to
              Waterloo Station as hard as I could go. I whipped up the mare and
              we were there under the ten minutes. Then he paid up his two
              guineas, like a good one, and away he went into the station. Only
              just as he was leaving he turned round and he said: ‘It might
              interest you to know that you have been driving Mr. Sherlock
              Holmes.’ That's how I come to know the name.”
            </TextNode>
            <TextNode>“I see. And you saw no more of him?”</TextNode>

            <TextNode>“Not after he went into the station.”</TextNode>

            <TextNode>
              “And how would you describe Mr. Sherlock Holmes?”
            </TextNode>

            <TextNode>
              The cabman scratched his head. “Well, he wasn't altogether such an
              easy gentleman to describe. I'd put him at forty years of age, and
              he was of a middle height, two or three inches shorter than you,
              sir. He was dressed like a toff, and he had a black beard, cut
              square at the end, and a pale face. I don't know as I could say
              more than that.”
            </TextNode>

            <TextNode>“Colour of his eyes?”</TextNode>

            <TextNode>“No, I can't say that.”</TextNode>

            <TextNode>“Nothing more that you can remember?”</TextNode>

            <TextNode>“No, sir; nothing.”</TextNode>

            <TextNode>
              “Well, then, here is your half-sovereign. There's another one
              waiting for you if you can bring any more information. Good
              night!”
            </TextNode>

            <TextNode>“Good night, sir, and thank you!”</TextNode>

            <TextNode>
              John Clayton departed chuckling, and Holmes turned to me with a
              shrug of his shoulders and a rueful smile.
            </TextNode>

            <TextNode>
              “Snap goes our third thread, and we end where we began,” said he.
              “The cunning rascal! He knew our number, knew that Sir Henry
              Baskerville had consulted me, spotted who I was in Regent Street,
              conjectured that I had got the number of the cab and would lay my
              hands on the driver, and so sent back this audacious message. I
              tell you, Watson, this time we have got a foeman who is worthy of
              our steel. I've been checkmated in London. I can only wish you
              better luck in Devonshire. But I'm not easy in my mind about it.”
            </TextNode>

            <TextNode>“About what?”</TextNode>

            <TextNode>
              “About sending you. It's an ugly business, Watson, an ugly
              dangerous business, and the more I see of it the less I like it.
              Yes, my dear fellow, you may laugh, but I give you my word that I
              shall be very glad to have you back safe and sound in Baker Street
              once more.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page222;

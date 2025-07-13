import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
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

function Page265({
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
        <H4>
          Chapter VI.
          <br />
          Danger
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              It was the height of the reign of terror. McMurdo, who had already
              been appointed Inner Deacon, with every prospect of some day
              succeeding McGinty as Bodymaster, was now so necessary to the
              councils of his comrades that nothing was done without his help
              and advice. The more popular he became, however, with the Freemen,
              the blacker were the scowls which greeted him as he passed along
              the streets of Vermissa. In spite of their terror the citizens
              were taking heart to band themselves together against their
              oppressors. Rumours had reached the lodge of secret gatherings in
              <span className='italic'>The Herald</span> office and of
              distribution of firearms among the law-abiding people. But McGinty
              and his men were undisturbed by such reports. They were numerous,
              resolute, and well armed. Their opponents were scattered and
              powerless. It would all end, as it had done in the past, in
              aimless talk and possibly in impotent arrests. So said McGinty,
              McMurdo, and all the bolder spirits.
            </TextNode>

            <TextNode>
              It was a Saturday evening in May. Saturday was always the lodge
              night, and McMurdo was leaving his house to attend it when Morris,
              the weaker brother of the order, came to see him. His brow was
              creased with care, and his kindly face was drawn and haggard.
            </TextNode>

            <TextNode>“Can I speak with you freely, Mr. McMurdo?”</TextNode>

            <TextNode>“Sure.”</TextNode>

            <TextNode>
              “I can't forget that I spoke my heart to you once, and that you
              kept it to yourself, even though the Boss himself came to ask you
              about it.”
            </TextNode>

            <TextNode>
              “What else could I do if you trusted me? It wasn't that I agreed
              with what you said.”
            </TextNode>

            <TextNode>
              “I know that well. But you are the one that I can speak to and be
              safe. I've a secret here,” he put his hand to his breast, “and it
              is just burning the life out of me. I wish it had come to any one
              of you but me. If I tell it, it will mean murder, for sure. If I
              don't, it may bring the end of us all. God help me, but I am near
              out of my wits over it!”
            </TextNode>

            <TextNode>
              McMurdo looked at the man earnestly. He was trembling in every
              limb. He poured some whisky into a glass and handed it to him.
              “That's the physic for the likes of you,” said he. “Now let me
              hear of it.”
            </TextNode>

            <TextNode>
              Morris drank, and his white face took a tinge of colour. “I can
              tell it to you all in one sentence,” said he. “There's a detective
              on our trail.”
            </TextNode>

            <TextNode>
              McMurdo stared at him in astonishment. “Why, man, you're crazy,”
              he said. “Isn't the place full of police and detectives and what
              harm did they ever do us?”
            </TextNode>

            <TextNode>
              “No, no, it's no man of the district. As you say, we know them,
              and it is little that they can do. But you've heard of
              Pinkerton's?”
            </TextNode>

            <TextNode>“I've read of some folk of that name.”</TextNode>

            <TextNode>
              “Well, you can take it from me you've no show when they are on
              your trail. It's not a take-it-or-miss-it government concern. It's
              a dead earnest business proposition that's out for results and
              keeps out till by hook or crook it gets them. If a Pinkerton man
              is deep in this business, we are all destroyed.”
            </TextNode>

            <TextNode>“We must kill him.”</TextNode>

            <TextNode>
              “Ah, it's the first thought that came to you! So it will be up at
              the lodge. Didn't I say to you that it would end in murder?”
            </TextNode>

            <TextNode>
              “Sure, what is murder? Isn't it common enough in these parts?”
            </TextNode>

            <TextNode>
              “It is, indeed; but it's not for me to point out the man that is
              to be murdered. I'd never rest easy again. And yet it's our own
              necks that may be at stake. In God's name what shall I do?” He
              rocked to and fro in his agony of indecision.
            </TextNode>

            <TextNode>
              But his words had moved McMurdo deeply. It was easy to see that he
              shared the other's opinion as to the danger, and the need for
              meeting it. He gripped Morris's shoulder and shook him in his
              earnestness.
            </TextNode>

            <TextNode>
              “See here, man,” he cried, and he almost screeched the words in
              his excitement, “you won't gain anything by sitting keening like
              an old wife at a wake. Let's have the facts. Who is the fellow?
              Where is he? How did you hear of him? Why did you come to me?”
            </TextNode>

            <TextNode>
              “I came to you; for you are the one man that would advise me. I
              told you that I had a store in the East before I came here. I left
              good friends behind me, and one of them is in the telegraph
              service. Here's a letter that I had from him yesterday. It's this
              part from the top of the page. You can read it yourself.”
            </TextNode>

            <TextNode>This was what McMurdo read:</TextNode>

            <Indent>
              <TextNode noIndent>
                How are the Scowrers getting on in your parts? We read plenty of
                them in the papers. Between you and me I expect to hear news
                from you before long. Five big corporations and the two
                railroads have taken the thing up in dead earnest. They mean it,
                and you can bet they'll get there! They are right deep down into
                it. Pinkerton has taken hold under their orders, and his best
                man, Birdy Edwards, is operating. The thing has got to be
                stopped right now.
              </TextNode>
            </Indent>

            <TextNode noIndent>“Now read the postscript.”</TextNode>

            <Indent>
              <TextNode noIndent>
                Of course, what I give you is what I learned in business; so it
                goes no further. It's a queer cipher that you handle by the yard
                every day and can get no meaning from.
              </TextNode>
            </Indent>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              McMurdo sat in silence for some time, with the letter in his
              listless hands. The mist had lifted for a moment, and there was
              the abyss before him.
            </TextNode>

            <TextNode>“Does anyone else know of this?” he asked.</TextNode>

            <TextNode>“I have told no one else.”</TextNode>

            <TextNode>
              “But this man—your friend—has he any other person that he would be
              likely to write to?”
            </TextNode>

            <TextNode>“Well, I dare say he knows one or two more.”</TextNode>

            <TextNode>“Of the lodge?”</TextNode>

            <TextNode>“It's likely enough.”</TextNode>

            <TextNode>
              “I was asking because it is likely that he may have given some
              description of this fellow Birdy Edwards—then we could get on his
              trail.”
            </TextNode>

            <TextNode>
              “Well, it's possible. But I should not think he knew him. He is
              just telling me the news that came to him by way of business. How
              would he know this Pinkerton man?”
            </TextNode>

            <TextNode>McMurdo gave a violent start.</TextNode>

            <TextNode>
              “By Gar!” he cried, “I've got him. What a fool I was not to know
              it. Lord! but we're in luck! We will fix him before he can do any
              harm. See here, Morris, will you leave this thing in my hands?”
            </TextNode>

            <TextNode>“Sure, if you will only take it off mine.”</TextNode>

            <TextNode>
              “I'll do that. You can stand right back and let me run it. Even
              your name need not be mentioned. I'll take it all on myself, as if
              it were to me that this letter has come. Will that content you?”
            </TextNode>

            <TextNode>“It's just what I would ask.”</TextNode>

            <TextNode>
              “Then leave it at that and keep your head shut. Now I'll get down
              to the lodge, and we'll soon make old man Pinkerton sorry for
              himself.”
            </TextNode>

            <TextNode>“You wouldn't kill this man?”</TextNode>

            <TextNode>
              “The less you know, Friend Morris, the easier your conscience will
              be, and the better you will sleep. Ask no questions, and let these
              things settle themselves. I have hold of it now.”
            </TextNode>

            <TextNode>
              Morris shook his head sadly as he left. “I feel that his blood is
              on my hands,” he groaned.
            </TextNode>

            <TextNode>
              “Self-protection is no murder, anyhow,” said McMurdo, smiling
              grimly. “It's him or us. I guess this man would destroy us all if
              we left him long in the valley. Why, Brother Morris, we'll have to
              elect you Bodymaster yet; for you've surely saved the lodge.”
            </TextNode>

            <TextNode>
              And yet it was clear from his actions that he thought more
              seriously of this new intrusion than his words would show. It may
              have been his guilty conscience, it may have been the reputation
              of the Pinkerton organization, it may have been the knowledge that
              great, rich corporations had set themselves the task of clearing
              out the Scowrers; but, whatever his reason, his actions were those
              of a man who is preparing for the worst. Every paper which would
              incriminate him was destroyed before he left the house. After that
              he gave a long sigh of satisfaction; for it seemed to him that he
              was safe. And yet the danger must still have pressed somewhat upon
              him; for on his way to the lodge he stopped at old man Shafter's.
              The house was forbidden him; but when he tapped at the window
              Ettie came out to him. The dancing Irish deviltry had gone from
              her lover's eyes. She read his danger in his earnest face.
            </TextNode>

            <TextNode>
              “Something has happened!” she cried. “Oh, Jack, you are in
              danger!”
            </TextNode>

            <TextNode>
              “Sure, it is not very bad, my sweetheart. And yet it may be wise
              that we make a move before it is worse.”
            </TextNode>

            <TextNode>“Make a move?”</TextNode>

            <TextNode>
              “I promised you once that I would go some day. I think the time is
              coming. I had news to-night, bad news, and I see trouble coming.”
            </TextNode>

            <TextNode>“The police?”</TextNode>

            <TextNode>
              “Well, a Pinkerton. But, sure, you wouldn't know what that is,
              acushla, nor what it may mean to the likes of me. I'm too deep in
              this thing, and I may have to get out of it quick. You said you
              would come with me if I went.”
            </TextNode>

            <TextNode>“Oh, Jack, it would be the saving of you!”</TextNode>

            <TextNode>
              “I'm an honest man in some things, Ettie. I wouldn't hurt a hair
              of your bonny head for all that the world can give, nor ever pull
              you down one inch from the golden throne above the clouds where I
              always see you. Would you trust me?”
            </TextNode>

            <TextNode>
              She put her hand in his without a word. “Well, then, listen to
              what I say, and do as I order you, for indeed it's the only way
              for us. Things are going to happen in this valley. I feel it in my
              bones. There may be many of us that will have to look out for
              ourselves. I'm one, anyhow. If I go, by day or night, it's you
              that must come with me!”
            </TextNode>

            <TextNode>“I'd come after you, Jack.”</TextNode>

            <TextNode>
              “No, no, you shall come with me. If this valley is closed to me
              and I can never come back, how can I leave you behind, and me
              perhaps in hiding from the police with never a chance of a
              message? It's with me you must come. I know a good woman in the
              place I come from, and it's there I'd leave you till we can get
              married. Will you come?”
            </TextNode>

            <TextNode>“Yes, Jack, I will come.”</TextNode>

            <TextNode>
              “God bless you for your trust in me! It's a fiend out of hell that
              I should be if I abused it. Now, mark you, Ettie, it will be just
              a word to you, and when it reaches you, you will drop everything
              and come right down to the waiting room at the depot and stay
              there till I come for you.”
            </TextNode>

            <TextNode>“Day or night, I'll come at the word, Jack.”</TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page265;

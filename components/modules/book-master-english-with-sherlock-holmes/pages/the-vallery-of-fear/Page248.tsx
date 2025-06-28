import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page248({
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
      <BookMainContainer biggerTopPadding>
        <H4>
          Chapter V.
          <br />
          The People Of the Drama
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Have you seen all you want of the study?” asked White Mason as we
              reentered the house.
            </TextNode>

            <TextNode>
              “For the time,” said the inspector, and Holmes nodded.
            </TextNode>

            <TextNode>
              “Then perhaps you would now like to hear the evidence of some of
              the people in the house. We could use the dining-room, Ames.
              Please come yourself first and tell us what you know.”
            </TextNode>

            <TextNode>
              The butler's account was a simple and a clear one, and he gave a
              convincing impression of sincerity. He had been engaged five years
              before, when Douglas first came to Birlstone. He understood that
              Mr. Douglas was a rich gentleman who had made his money in
              America. He had been a kind and considerate employer—not quite
              what Ames was used to, perhaps; but one can't have everything. He
              never saw any signs of apprehension in Mr. Douglas: on the
              contrary, he was the most fearless man he had ever known. He
              ordered the drawbridge to be pulled up every night because it was
              the ancient custom of the old house, and he liked to keep the old
              ways up.
            </TextNode>

            <TextNode>
              Mr. Douglas seldom went to London or left the village; but on the
              day before the crime he had been shopping at Tunbridge Wells. He
              (Ames) had observed some restlessness and excitement on the part
              of Mr. Douglas that day; for he had seemed impatient and
              irritable, which was unusual with him. He had not gone to bed that
              night; but was in the pantry at the back of the house, putting
              away the silver, when he heard the bell ring violently. He heard
              no shot; but it was hardly possible he would, as the pantry and
              kitchens were at the very back of the house and there were several
              closed doors and a long passage between. The housekeeper had come
              out of her room, attracted by the violent ringing of the bell.
              They had gone to the front of the house together.
            </TextNode>

            <TextNode>
              As they reached the bottom of the stair he had seen Mrs. Douglas
              coming down it. No, she was not hurrying; it did not seem to him
              that she was particularly agitated. Just as she reached the bottom
              of the stair Mr. Barker had rushed out of the study. He had
              stopped Mrs. Douglas and begged her to go back.
            </TextNode>

            <TextNode>
              “For God's sake, go back to your room!” he cried. “Poor Jack is
              dead! You can do nothing. For God's sake, go back!”
            </TextNode>

            <TextNode>
              After some persuasion upon the stairs Mrs. Douglas had gone back.
              She did not scream. She made no outcry whatever. Mrs. Allen, the
              housekeeper, had taken her upstairs and stayed with her in the
              bedroom. Ames and Mr. Barker had then returned to the study, where
              they had found everything exactly as the police had seen it. The
              candle was not lit at that time; but the lamp was burning. They
              had looked out of the window; but the night was very dark and
              nothing could be seen or heard. They had then rushed out into the
              hall, where Ames had turned the windlass which lowered the
              drawbridge. Mr. Barker had then hurried off to get the police.
            </TextNode>

            <TextNode>
              Such, in its essentials, was the evidence of the butler.
            </TextNode>

            <TextNode>
              The account of Mrs. Allen, the housekeeper, was, so far as it
              went, a corroboration of that of her fellow servant. The
              housekeeper's room was rather nearer to the front of the house
              than the pantry in which Ames had been working. She was preparing
              to go to bed when the loud ringing of the bell had attracted her
              attention. She was a little hard of hearing. Perhaps that was why
              she had not heard the shot; but in any case the study was a long
              way off. She remembered hearing some sound which she imagined to
              be the slamming of a door. That was a good deal earlier—half an
              hour at least before the ringing of the bell. When Mr. Ames ran to
              the front she went with him. She saw Mr. Barker, very pale and
              excited, come out of the study. He intercepted Mrs. Douglas, who
              was coming down the stairs. He entreated her to go back, and she
              answered him, but what she said could not be heard.
            </TextNode>

            <TextNode>
              “Take her up! Stay with her!” he had said to Mrs. Allen.
            </TextNode>

            <TextNode>
              She had therefore taken her to the bedroom, and endeavoured to
              soothe her. She was greatly excited, trembling all over, but made
              no other attempt to go downstairs. She just sat in her dressing
              gown by her bedroom fire, with her head sunk in her hands. Mrs.
              Allen stayed with her most of the night. As to the other servants,
              they had all gone to bed, and the alarm did not reach them until
              just before the police arrived. They slept at the extreme back of
              the house, and could not possibly have heard anything.
            </TextNode>

            <TextNode>
              So far the housekeeper could add nothing on cross-examination save
              lamentations and expressions of amazement.
            </TextNode>

            <TextNode>
              Cecil Barker succeeded Mrs. Allen as a witness. As to the
              occurrences of the night before, he had very little to add to what
              he had already told the police. Personally, he was convinced that
              the murderer had escaped by the window. The bloodstain was
              conclusive, in his opinion, on that point. Besides, as the bridge
              was up, there was no other possible way of escaping. He could not
              explain what had become of the assassin or why he had not taken
              his bicycle, if it were indeed his. He could not possibly have
              been drowned in the moat, which was at no place more than three
              feet deep.
            </TextNode>

            <TextNode>
              In his own mind he had a very definite theory about the murder.
              Douglas was a reticent man, and there were some chapters in his
              life of which he never spoke. He had emigrated to America when he
              was a very young man. He had prospered well, and Barker had first
              met him in California, where they had become partners in a
              successful mining claim at a place called Benito Canyon. They had
              done very well; but Douglas had suddenly sold out and started for
              England. He was a widower at that time. Barker had afterwards
              realized his money and come to live in London. Thus they had
              renewed their friendship.
            </TextNode>

            <TextNode>
              Douglas had given him the impression that some danger was hanging
              over his head, and he had always looked upon his sudden departure
              from California, and also his renting a house in so quiet a place
              in England, as being connected with this peril. He imagined that
              some secret society, some implacable organization, was on
              Douglas's track, which would never rest until it killed him. Some
              remarks of his had given him this idea; though he had never told
              him what the society was, nor how he had come to offend it. He
              could only suppose that the legend upon the placard had some
              reference to this secret society.
            </TextNode>

            <TextNode>
              “How long were you with Douglas in California?” asked Inspector
              MacDonald.
            </TextNode>

            <TextNode>“Five years altogether.”</TextNode>

            <TextNode>“He was a bachelor, you say?”</TextNode>

            <TextNode>“A widower.”</TextNode>

            <TextNode>
              “Have you ever heard where his first wife came from?”
            </TextNode>

            <TextNode>
              “No, I remember his saying that she was of German extraction, and
              I have seen her portrait. She was a very beautiful woman. She died
              of typhoid the year before I met him.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “You don't associate his past with any particular part of
              America?”
            </TextNode>

            <TextNode>
              “I have heard him talk of Chicago. He knew that city well and had
              worked there. I have heard him talk of the coal and iron
              districts. He had travelled a good deal in his time.”
            </TextNode>

            <TextNode>
              “Was he a politician? Had this secret society to do with
              politics?”
            </TextNode>

            <TextNode>“No, he cared nothing about politics.”</TextNode>

            <TextNode>“You have no reason to think it was criminal?”</TextNode>

            <TextNode>
              “On the contrary, I never met a straighter man in my life.”
            </TextNode>

            <TextNode>
              “Was there anything curious about his life in California?”
            </TextNode>

            <TextNode>
              “He liked best to stay and to work at our claim in the mountains.
              He would never go where other men were if he could help it. That's
              why I first thought that someone was after him. Then when he left
              so suddenly for Europe I made sure that it was so. I believe that
              he had a warning of some sort. Within a week of his leaving half a
              dozen men were inquiring for him.”
            </TextNode>
            <TextNode>“What sort of men?”</TextNode>

            <TextNode>
              “Well, they were a mighty hard-looking crowd. They came up to the
              claim and wanted to know where he was. I told them that he was
              gone to Europe and that I did not know where to find him. They
              meant him no good—it was easy to see that.”
            </TextNode>

            <TextNode>“Were these men Americans—Californians?”</TextNode>

            <TextNode>
              “Well, I don't know about Californians. They were Americans, all
              right. But they were not miners. I don't know what they were, and
              was very glad to see their backs.”
            </TextNode>

            <TextNode>“That was six years ago?”</TextNode>

            <TextNode>“Nearer seven.”</TextNode>

            <TextNode>
              “And then you were together five years in California, so that this
              business dates back not less than eleven years at the least?”
            </TextNode>

            <TextNode>“That is so.”</TextNode>

            <TextNode>
              “It must be a very serious feud that would be kept up with such
              earnestness for as long as that. It would be no light thing that
              would give rise to it.”
            </TextNode>

            <TextNode>
              “I think it shadowed his whole life. It was never quite out of his
              mind.”
            </TextNode>

            <TextNode>
              “But if a man had a danger hanging over him, and knew what it was,
              don't you think he would turn to the police for protection?”
            </TextNode>

            <TextNode>
              “Maybe it was some danger that he could not be protected against.
              There's one thing you should know. He always went about armed. His
              revolver was never out of his pocket. But, by bad luck, he was in
              his dressing gown and had left it in the bedroom last night. Once
              the bridge was up, I guess he thought he was safe.”
            </TextNode>

            <TextNode>
              “I should like these dates a little clearer,” said MacDonald. “It
              is quite six years since Douglas left California. You followed him
              next year, did you not?”
            </TextNode>

            <TextNode>“That is so.”</TextNode>

            <TextNode>
              “And he had been married five years. You must have returned about
              the time of his marriage.”
            </TextNode>

            <TextNode>“About a month before. I was his best man.”</TextNode>

            <TextNode>
              “Did you know Mrs. Douglas before her marriage?”
            </TextNode>

            <TextNode>
              “No, I did not. I had been away from England for ten years.”
            </TextNode>

            <TextNode>“But you have seen a good deal of her since.”</TextNode>

            <TextNode>
              Barker looked sternly at the detective. “I have seen a good deal
              of him since,” he answered. “If I have seen her, it is because you
              cannot visit a man without knowing his wife. If you imagine there
              is any connection—”
            </TextNode>

            <TextNode>
              “I imagine nothing, Mr. Barker. I am bound to make every inquiry
              which can bear upon the case. But I mean no offense.”
            </TextNode>

            <TextNode>
              “Some inquiries are offensive,” Barker answered angrily.
            </TextNode>

            <TextNode>
              “It's only the facts that we want. It is in your interest and
              everyone's interest that they should be cleared up. Did Mr.
              Douglas entirely approve your friendship with his wife?”
            </TextNode>

            <TextNode>
              Barker grew paler, and his great, strong hands were clasped
              convulsively together. “You have no right to ask such questions!”
              he cried. “What has this to do with the matter you are
              investigating?”
            </TextNode>

            <TextNode>“I must repeat the question.”</TextNode>

            <TextNode>“Well, I refuse to answer.”</TextNode>

            <TextNode>
              “You can refuse to answer; but you must be aware that your refusal
              is in itself an answer, for you would not refuse if you had not
              something to conceal.”
            </TextNode>

            <TextNode>
              Barker stood for a moment with his face set grimly and his strong
              black eyebrows drawn low in intense thought. Then he looked up
              with a smile. “Well, I guess you gentlemen are only doing your
              clear duty after all, and I have no right to stand in the way of
              it. I'd only ask you not to worry Mrs. Douglas over this matter;
              for she has enough upon her just now. I may tell you that poor
              Douglas had just one fault in the world, and that was his
              jealousy. He was fond of me—no man could be fonder of a friend.
              And he was devoted to his wife. He loved me to come here, and was
              forever sending for me. And yet if his wife and I talked together
              or there seemed any sympathy between us, a kind of wave of
              jealousy would pass over him, and he would be off the handle and
              saying the wildest things in a moment. More than once I've sworn
              off coming for that reason, and then he would write me such
              penitent, imploring letters that I just had to. But you can take
              it from me, gentlemen, if it was my last word, that no man ever
              had a more loving, faithful wife—and I can say also no friend
              could be more loyal than I!”
            </TextNode>

            <TextNode>
              It was spoken with fervour and feeling, and yet Inspector
              MacDonald could not dismiss the subject.
            </TextNode>

            <TextNode>
              “You are aware,” said he, “that the dead man's wedding ring has
              been taken from his finger?”
            </TextNode>

            <TextNode>“So it appears,” said Barker.</TextNode>

            <TextNode>
              “What do you mean by ‘appears’? You know it as a fact.”
            </TextNode>

            <TextNode>
              The man seemed confused and undecided. “When I said ‘appears’ I
              meant that it was conceivable that he had himself taken off the
              ring.”
            </TextNode>

            <TextNode>
              “The mere fact that the ring should be absent, whoever may have
              removed it, would suggest to anyone's mind, would it not, that the
              marriage and the tragedy were connected?”
            </TextNode>

            <TextNode>
              Barker shrugged his broad shoulders. “I can't profess to say what
              it means.” he answered. “But if you mean to hint that it could
              reflect in any way upon this lady's honour”—his eyes blazed for an
              instant, and then with an evident effort he got a grip upon his
              own emotions—“well, you are on the wrong track, that's all.”
            </TextNode>

            <TextNode>
              “I don't know that I've anything else to ask you at present,” said
              MacDonald, coldly.
            </TextNode>

            <TextNode>
              “There was one small point,” remarked Sherlock Holmes. “When you
              entered the room there was only a candle lighted on the table, was
              there not?”
            </TextNode>

            <TextNode>“Yes, that was so.”</TextNode>

            <TextNode>
              “By its light you saw that some terrible incident had occurred?”
            </TextNode>

            <TextNode>“Exactly.”</TextNode>

            <TextNode>“You at once rang for help?”</TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>“And it arrived very speedily?”</TextNode>

            <TextNode>“Within a minute or so.”</TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page248;

'use client';

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Page from '@/components/elements/book-master-english-with-sherlock-holmes/Page';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/book-master-english-with-sherlock-holmes/main';
import { useBookVersion } from '@/context/book-version/Context';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { BookVersion } from '@/types/book-version';
import { ReactElement, useRef } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page82({
  pageNumber,
  hidePageNumber,
  viewportHeight,
}: PageProps): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: pageNumber,
    basePath,
  });

  return (
    <Page
      id={`page-${pageNumber}`}
      viewportHeight={viewportHeight}
      className='mb-5'
      ref={sectionRef}
    >
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE BOSCOMBE VALLEY MYSTERY'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “The Coroner: What did you understand by that?
            </TextNode>
            <TextNode>
              “Witness: It conveyed no meaning to me. I thought that he was
              delirious.
            </TextNode>
            <TextNode>
              “The Coroner: What was the point upon which you and your father
              had this final quarrel?
            </TextNode>
            <TextNode>“Witness: I should prefer not to answer.</TextNode>
            <TextNode>“The Coroner: I am afraid that I must press it.</TextNode>
            <TextNode>
              “Witness: It is really impossible for me to tell you. I can assure
              you that it has nothing to do with the sad tragedy which followed.
            </TextNode>
            <TextNode>
              “The Coroner: That is for the court to decide. I need not point
              out to you that your refusal to answer will prejudice your case
              considerably in any future proceedings which may arise.
            </TextNode>
            <TextNode>“Witness: I must still refuse.</TextNode>
            <TextNode>
              “The Coroner: I understand that the cry of ‘Cooee’ was a common
              signal between you and your father?
            </TextNode>
            <TextNode>“Witness: It was.</TextNode>
            <TextNode>
              “The Coroner: How was it, then, that he uttered it before he saw
              you, and before he even knew that you had returned from Bristol?
            </TextNode>
            <TextNode>
              “Witness (with considerable confusion): I do not know.
            </TextNode>
            <TextNode>
              “A Juryman: Did you see nothing which aroused your suspicions when
              you returned on hearing the cry and found your father fatally
              injured?
            </TextNode>
            <TextNode>“Witness: Nothing definite.</TextNode>
            <TextNode>“The Coroner: What do you mean?</TextNode>
            <TextNode>
              “Witness: I was so disturbed and excited as I rushed out into the
              open, that I could think of nothing except of my father. Yet I
              have a vague impression that as I ran forward something lay upon
              the ground to the left of me. It seemed to me to be something grey
              in colour, a coat of some sort, or a plaid perhaps. When I rose
              from my father I looked round for it, but it was gone.
            </TextNode>
            <TextNode>
              “ ‘Do you mean that it disappeared before you went for help?’
            </TextNode>
            <TextNode>“ ‘Yes, it was gone.’</TextNode>
            <TextNode>“ ‘You cannot say what it was?’</TextNode>
            <TextNode>“ ‘No, I had a feeling something was there.’</TextNode>
            <TextNode>“ ‘How far from the body?’</TextNode>
            <TextNode>“ ‘A dozen yards or so.’</TextNode>
            <TextNode>“ ‘And how far from the edge of the wood?’</TextNode>
            <TextNode>“ ‘About the same.’</TextNode>
            <TextNode>
              “ ‘Then if it was removed it was while you were within a dozen
              yards of it?’
            </TextNode>
            <TextNode>“ ‘Yes, but with my back towards it.’</TextNode>
            <TextNode>
              “This concluded the examination of the witness.”
            </TextNode>
            <TextNode>
              “I see,” said I as I glanced down the column, “that the coroner in
              his concluding remarks was rather severe upon young McCarthy. He
              calls attention, and with reason, to the discrepancy about his
              father having signalled to him before seeing him, also to his
              refusal to give details of his conversation with his father, and
              his singular account of his father's dying words. They are all, as
              he remarks, very much against the son.”
            </TextNode>

            <TextNode>
              Holmes laughed softly to himself and stretched himself out upon
              the cushioned seat. “Both you and the coroner have been at some
              pains,” said he, “to single out the very strongest points in the
              young man's favour. Don't you see that you alternately give him
              credit for having too much imagination and too little? Too little,
              if he could not invent a cause of quarrel which would give him the
              sympathy of the jury; too much, if he evolved from his own inner
              consciousness anything so outré as a dying reference to a rat, and
              the incident of the vanishing cloth. No, sir, I shall approach
              this case from the point of view that what this young man says is
              true, and we shall see whither that hypothesis will lead us. And
              now here is my pocket Petrarch, and not another word shall I say
              of this case until we are on the scene of action. We lunch at
              Swindon, and I see that we shall be there in twenty minutes.”
            </TextNode>

            <TextNode>
              It was nearly four o'clock when we at last, after passing through
              the beautiful Stroud Valley, and over the broad gleaming Severn,
              found ourselves at the pretty little country-town of Ross. A lean,
              ferret-like man, furtive and sly-looking, was waiting for us upon
              the platform. In spite of the light brown dustcoat and
              leather-leggings which he wore in deference to his rustic
              surroundings, I had no difficulty in recognising Lestrade, of
              Scotland Yard. With him we drove to the Hereford Arms where a room
              had already been engaged for us.
            </TextNode>

            <TextNode>
              “I have ordered a carriage,” said Lestrade as we sat over a cup of
              tea. “I knew your energetic nature, and that you would not be
              happy until you had been on the scene of the crime.”
            </TextNode>

            <TextNode>
              “It was very nice and complimentary of you,” Holmes answered. “It
              is entirely a question of barometric pressure.”
            </TextNode>

            <TextNode>
              Lestrade looked startled. “I do not quite follow,” he said.
            </TextNode>

            <TextNode>
              “How is the glass? Twenty-nine, I see. No wind, and not a cloud in
              the sky. I have a caseful of cigarettes here which need smoking,
              and the sofa is very much superior to the usual country hotel
              abomination. I do not think that it is probable that I shall use
              the carriage to-night.”
            </TextNode>

            <TextNode>
              Lestrade laughed indulgently. “You have, no doubt, already formed
              your conclusions from the newspapers,” he said. “The case is as
              plain as a pikestaff, and the more one goes into it the plainer it
              becomes. Still, of course, one can't refuse a lady, and such a
              very positive one, too. She has heard of you, and would have your
              opinion, though I repeatedly told her that there was nothing which
              you could do which I had not already done. Why, bless my soul!
              here is her carriage at the door.”
            </TextNode>

            <TextNode>
              He had hardly spoken before there rushed into the room one of the
              most lovely young women that I have ever seen in my life. Her
              violet eyes shining, her lips parted, a pink flush upon her
              cheeks, all thought of her natural reserve lost in her
              overpowering excitement and concern.
            </TextNode>

            <TextNode>
              “Oh, Mr. Sherlock Holmes!” she cried, glancing from one to the
              other of us, and finally, with a woman's quick intuition,
              fastening upon my companion, “I am so glad that you have come. I
              have driven down to tell you so. I know that James didn't do it. I
              know it, and I want you to start upon your work knowing it, too.
              Never let yourself doubt upon that point. We have known each other
              since we were little children, and I know his faults as no one
              else does; but he is too tender-hearted to hurt a fly. Such a
              charge is absurd to anyone who really knows him.”
            </TextNode>

            <TextNode>
              “I hope we may clear him, Miss Turner,” said Sherlock Holmes. “You
              may rely upon my doing all that I can.”
            </TextNode>

            <TextNode>
              “But you have read the evidence. You have formed some conclusion?
              Do you not see some loophole, some flaw? Do you not yourself think
              that he is innocent?”
            </TextNode>

            <TextNode>“I think that it is very probable.”</TextNode>

            <TextNode>
              “There, now!” she cried, throwing back her head and looking
              defiantly at Lestrade. “You hear! He gives me hopes.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              Lestrade shrugged his shoulders. “I am afraid that my colleague
              has been a little quick in forming his conclusions,” he said.
            </TextNode>

            <TextNode>
              “But he is right. Oh! I know that he is right. James never did it.
              And about his quarrel with his father, I am sure that the reason
              why he would not speak about it to the coroner was because I was
              concerned in it.”
            </TextNode>

            <TextNode>“In what way?” asked Holmes.</TextNode>

            <TextNode>
              “It is no time for me to hide anything. James and his father had
              many disagreements about me. Mr. McCarthy was very anxious that
              there should be a marriage between us. James and I have always
              loved each other as brother and sister; but of course he is young
              and has seen very little of life yet, and—and—well, he naturally
              did not wish to do anything like that yet. So there were quarrels,
              and this, I am sure, was one of them.”
            </TextNode>

            <TextNode>
              “And your father?” asked Holmes. “Was he in favour of such a
              union?”
            </TextNode>

            <TextNode>
              “No, he was averse to it also. No one but Mr. McCarthy was in
              favour of it.” A quick blush passed over her fresh young face as
              Holmes shot one of his keen, questioning glances at her.
            </TextNode>

            <TextNode>
              “Thank you for this information,” said he. “May I see your father
              if I call to-morrow?”
            </TextNode>

            <TextNode>“I am afraid the doctor won't allow it.”</TextNode>

            <TextNode>“The doctor?”</TextNode>

            <TextNode>
              “Yes, have you not heard? Poor father has never been strong for
              years back, but this has broken him down completely. He has taken
              to his bed, and Dr. Willows says that he is a wreck and that his
              nervous system is shattered. Mr. McCarthy was the only man alive
              who had known dad in the old days in Victoria.”
            </TextNode>

            <TextNode>“Ha! In Victoria! That is important.”</TextNode>

            <TextNode>“Yes, at the mines.”</TextNode>

            <TextNode>
              “Quite so; at the gold-mines, where, as I understand, Mr. Turner
              made his money.”
            </TextNode>

            <TextNode>“Yes, certainly.”</TextNode>

            <TextNode>
              “Thank you, Miss Turner. You have been of material assistance to
              me.”
            </TextNode>

            <TextNode>
              “You will tell me if you have any news to-morrow. No doubt you
              will go to the prison to see James. Oh, if you do, Mr. Holmes, do
              tell him that I know him to be innocent.”
            </TextNode>

            <TextNode>“I will, Miss Turner.”</TextNode>

            <TextNode>
              “I must go home now, for dad is very ill, and he misses me so if I
              leave him. Good-bye, and God help you in your undertaking.” She
              hurried from the room as impulsively as she had entered, and we
              heard the wheels of her carriage rattle off down the street.
            </TextNode>

            <TextNode>
              “I am ashamed of you, Holmes,” said Lestrade with dignity after a
              few minutes' silence. “Why should you raise up hopes which you are
              bound to disappoint? I am not over-tender of heart, but I call it
              cruel.”
            </TextNode>

            <TextNode>
              “I think that I see my way to clearing James McCarthy,” said
              Holmes. “Have you an order to see him in prison?”
            </TextNode>

            <TextNode>“Yes, but only for you and me.”</TextNode>

            <TextNode>
              “Then I shall reconsider my resolution about going out. We have
              still time to take a train to Hereford and see him to-night?”
            </TextNode>

            <TextNode>“Ample.”</TextNode>

            <TextNode>
              “Then let us do so. Watson, I fear that you will find it very
              slow, but I shall only be away a couple of hours.”
            </TextNode>

            <TextNode>
              I walked down to the station with them, and then wandered through
              the streets of the little town, finally returning to the hotel,
              where I lay upon the sofa and tried to interest myself in a
              yellow-backed novel. The puny plot of the story was so thin,
              however, when compared to the deep mystery through which we were
              groping, and I found my attention wander so continually from the
              action to the fact, that I at last flung it across the room and
              gave myself up entirely to a consideration of the events of the
              day. Supposing that this unhappy young man's story were absolutely
              true, then what hellish thing, what absolutely unforeseen and
              extraordinary calamity could have occurred between the time when
              he parted from his father, and the moment when, drawn back by his
              screams, he rushed into the glade? It was something terrible and
              deadly. What could it be? Might not the nature of the injuries
              reveal something to my medical instincts? I rang the bell and
              called for the weekly county paper, which contained a verbatim
              account of the inquest. In the surgeon's deposition it was stated
              that the posterior third of the left parietal bone and the left
              half of the occipital bone had been shattered by a heavy blow from
              a blunt weapon. I marked the spot upon my own head. Clearly such a
              blow must have been struck from behind. That was to some extent in
              favour of the accused, as when seen quarrelling he was face to
              face with his father. Still, it did not go for very much, for the
              older man might have turned his back before the blow fell. Still,
              it might be worth while to call Holmes' attention to it. Then
              there was the peculiar dying reference to a rat. What could that
              mean? It could not be delirium. A man dying from a sudden blow
              does not commonly become delirious. No, it was more likely to be
              an attempt to explain how he met his fate. But what could it
              indicate? I cudgelled my brains to find some possible explanation.
              And then the incident of the grey cloth seen by young McCarthy. If
              that were true the murderer must have dropped some part of his
              dress, presumably his overcoat, in his flight, and must have had
              the hardihood to return and to carry it away at the instant when
              the son was kneeling with his back turned not a dozen paces off.
              What a tissue of mysteries and improbabilities the whole thing
              was! I did not wonder at Lestrade's opinion, and yet I had so much
              faith in Sherlock Holmes' insight that I could not lose hope as
              long as every fresh fact seemed to strengthen his conviction of
              young McCarthy's innocence.
            </TextNode>

            <TextNode>
              It was late before Sherlock Holmes returned. He came back alone,
              for Lestrade was staying in lodgings in the town.
            </TextNode>

            <TextNode>
              “The glass still keeps very high,” he remarked as he sat down. “It
              is of importance that it should not rain before we are able to go
              over the ground. On the other hand, a man should be at his very
              best and keenest for such nice work as that, and I did not wish to
              do it when fagged by a long journey. I have seen young McCarthy.”
            </TextNode>

            <TextNode>“And what did you learn from him?”</TextNode>

            <TextNode>“Nothing.”</TextNode>

            <TextNode>“Could he throw no light?”</TextNode>

            <TextNode>
              “None at all. I was inclined to think at one time that he knew who
              had done it and was screening him or her, but I am convinced now
              that he is as puzzled as everyone else. He is not a very
              quick-witted youth, though comely to look at and, I should think,
              sound at heart.”
            </TextNode>

            <TextNode>
              “I cannot admire his taste,” I remarked, “if it is indeed a fact
              that he was averse to a marriage with so charming a young lady as
              this Miss Turner.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page82;

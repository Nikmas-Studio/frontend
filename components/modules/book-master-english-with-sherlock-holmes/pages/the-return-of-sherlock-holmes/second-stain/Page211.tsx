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

function Page211({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;SECOND&nbsp;STAIN'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              I had intended “The Adventure of the Abbey Grange” to be the last
              of those exploits of my friend, Mr. Sherlock Holmes, which I
              should ever communicate to the public. This resolution of mine was
              not due to any lack of material, since I have notes of many
              hundreds of cases to which I have never alluded, nor was it caused
              by any waning interest on the part of my readers in the singular
              personality and unique methods of this remarkable man. The real
              reason lay in the reluctance which Mr. Holmes has shown to the
              continued publication of his experiences. So long as he was in
              actual professional practice the records of his successes were of
              some practical value to him; but since he has definitely retired
              from London and betaken himself to study and bee-farming on the
              Sussex Downs, notoriety has become hateful to him, and he has
              peremptorily requested that his wishes in this matter should be
              strictly observed. It was only upon my representing to him that I
              had given a promise that “The Adventure of the Second Stain”
              should be published when the times were ripe, and pointing out to
              him that it is only appropriate that this long series of episodes
              should culminate in the most important international case which he
              has ever been called upon to handle, that I at last succeeded in
              obtaining his consent that a carefully-guarded account of the
              incident should at last be laid before the public. If in telling
              the story I seem to be somewhat vague in certain details the
              public will readily understand that there is an excellent reason
              for my reticence.
            </TextNode>

            <TextNode>
              It was, then, in a year, and even in a decade, that shall be
              nameless, that upon one Tuesday morning in autumn we found two
              visitors of European fame within the walls of our humble room in
              Baker Street. The one, austere, high-nosed, eagle-eyed, and
              dominant, was none other than the illustrious Lord Bellinger,
              twice Premier of Britain. The other, dark, clear-cut, and elegant,
              hardly yet of middle age, and endowed with every beauty of body
              and of mind, was the Right Honourable Trelawney Hope, Secretary
              for European Affairs, and the most rising statesman in the
              country. They sat side by side upon our paper-littered settee, and
              it was easy to see from their worn and anxious faces that it was
              business of the most pressing importance which had brought them.
              The Premier's thin, blue-veined hands were clasped tightly over
              the ivory head of his umbrella, and his gaunt, ascetic face looked
              gloomily from Holmes to me. The European Secretary pulled
              nervously at his moustache and fidgeted with the seals of his
              watch-chain.
            </TextNode>

            <TextNode>
              “When I discovered my loss, Mr. Holmes, which was at eight o'clock
              this morning, I at once informed the Prime Minister. It was at his
              suggestion that we have both come to you.”
            </TextNode>

            <TextNode>“Have you informed the police?”</TextNode>

            <TextNode>
              “No, sir,” said the Prime Minister, with the quick, decisive
              manner for which he was famous. “We have not done so, nor is it
              possible that we should do so. To inform the police must, in the
              long run, mean to inform the public. This is what we particularly
              desire to avoid.”
            </TextNode>

            <TextNode>“And why, sir?”</TextNode>

            <TextNode>
              “Because the document in question is of such immense importance
              that its publication might very easily—I might almost say
              probably—lead to European complications of the utmost moment. It
              is not too much to say that peace or war may hang upon the issue.
              Unless its recovery can be attended with the utmost secrecy, then
              it may as well not be recovered at all, for all that is aimed at
              by those who have taken it is that its contents should be
              generally known.”
            </TextNode>

            <TextNode>
              “I understand. Now, Mr. Trelawney Hope, I should be much obliged
              if you would tell me exactly the circumstances under which this
              document disappeared.”
            </TextNode>

            <TextNode>
              “That can be done in a very few words, Mr. Holmes. The letter—for
              it was a letter from a foreign potentate—was received six days
              ago. It was of such importance that I have never left it in my
              safe, but I have taken it across each evening to my house in
              Whitehall Terrace, and kept it in my bedroom in a locked
              despatch-box. It was there last night. Of that I am certain. I
              actually opened the box while I was dressing for dinner, and saw
              the document inside. This morning it was gone. The despatch-box
              had stood beside the glass upon my dressing-table all night. I am
              a light sleeper, and so is my wife. We are both prepared to swear
              that no one could have entered the room during the night. And yet
              I repeat that the paper is gone.”
            </TextNode>

            <TextNode>“What time did you dine?”</TextNode>

            <TextNode>“Half-past seven.”</TextNode>

            <TextNode>“How long was it before you went to bed?”</TextNode>

            <TextNode>
              “My wife had gone to the theatre. I waited up for her. It was
              half-past eleven before we went to our room.”
            </TextNode>

            <TextNode>
              “Then for four hours the despatch-box had lain unguarded?”
            </TextNode>

            <TextNode>
              “No one is ever permitted to enter that room save the housemaid in
              the morning, and my valet, or my wife's maid, during the rest of
              the day. They are both trusty servants who have been with us for
              some time. Besides, neither of them could possibly have known that
              there was anything more valuable than the ordinary departmental
              papers in my despatch-box.”
            </TextNode>

            <TextNode>“Who did know of the existence of that letter?”</TextNode>

            <TextNode>“No one in the house.”</TextNode>

            <TextNode>“Surely your wife knew?”</TextNode>

            <TextNode>
              “No, sir; I had said nothing to my wife until I missed the paper
              this morning.”
            </TextNode>

            <TextNode>The Premier nodded approvingly.</TextNode>

            <TextNode>
              “I have long known, sir, how high is your sense of public duty,”
              said he. “I am convinced that in the case of a secret of this
              importance it would rise superior to the most intimate domestic
              ties.”
            </TextNode>

            <TextNode>The European Secretary bowed.</TextNode>

            <TextNode>
              “You do me no more than justice, sir. Until this morning I have
              never breathed one word to my wife upon this matter.”
            </TextNode>

            <TextNode>“Could she have guessed?”</TextNode>

            <TextNode>
              “No, Mr. Holmes, she could not have guessed—nor could anyone have
              guessed.”
            </TextNode>

            <TextNode>“Have you lost any documents before?”</TextNode>

            <TextNode>“No, sir.”</TextNode>

            <TextNode>
              “Who is there in England who did know of the existence of this
              letter?”
            </TextNode>

            <TextNode>
              “Each member of the Cabinet was informed of it yesterday; but the
              pledge of secrecy which attends every Cabinet meeting was
              increased by the solemn warning which was given by the Prime
              Minister. Good heavens, to think that within a few hours I should
              myself have lost it!” His handsome face was distorted with a spasm
              of despair, and his hands tore at his hair. For a moment we caught
              a glimpse of the natural man, impulsive, ardent, keenly sensitive.
              The next the aristocratic mask was replaced, and the gentle voice
              had returned. “Besides the members of the Cabinet there are two,
              or possibly three, departmental officials who know of the letter.
              No one else in England, Mr. Holmes, I assure you.”
            </TextNode>

            <TextNode>“But abroad?”</TextNode>

            <TextNode>
              “I believe that no one abroad has seen it save the man who wrote
              it. I am well convinced that his Ministers—that the usual official
              channels have not been employed.”
            </TextNode>

            <TextNode>Holmes considered for some little time.</TextNode>

            <TextNode>
              “Now, sir, I must ask you more particularly what this document is,
              and why its disappearance should have such momentous
              consequences?”
            </TextNode>

            <TextNode>
              The two statesmen exchanged a quick glance and the Premier's
              shaggy eyebrows gathered in a frown.
            </TextNode>

            <TextNode>
              “Mr. Holmes, the envelope is a long, thin one of pale blue colour.
              There is a seal of red wax stamped with a crouching lion. It is
              addressed in large, bold handwriting to—”
            </TextNode>

            <TextNode>
              “I fear, sir,” said Holmes, “that, interesting and indeed
              essential as these details are, my inquiries must go more to the
              root of things. What was the letter?”
            </TextNode>

            <TextNode>
              “That is a State secret of the utmost importance, and I fear that
              I cannot tell you, nor do I see that it is necessary. If by the
              aid of the powers which you are said to possess you can find such
              an envelope as I describe with its enclosure, you will have
              deserved well of your country, and earned any reward which it lies
              in our power to bestow.”
            </TextNode>

            <TextNode>Sherlock Holmes rose with a smile.</TextNode>

            <TextNode>
              “You are two of the most busy men in the country,” said he, “and
              in my own small way I have also a good many calls upon me. I
              regret exceedingly that I cannot help you in this matter, and any
              continuation of this interview would be a waste of time.”
            </TextNode>

            <TextNode>
              The Premier sprang to his feet with that quick, fierce gleam of
              his deep-set eyes before which a Cabinet has cowered. “I am not
              accustomed, sir—” he began, but mastered his anger and resumed his
              seat. For a minute or more we all sat in silence. Then the old
              statesman shrugged his shoulders.
            </TextNode>

            <TextNode>
              “We must accept your terms, Mr. Holmes. No doubt you are right,
              and it is unreasonable for us to expect you to act unless we give
              you our entire confidence.”
            </TextNode>

            <TextNode>
              “I agree with you, sir,” said the younger statesman.
            </TextNode>

            <TextNode>
              “Then I will tell you, relying entirely upon your honour and that
              of your colleague, Dr. Watson. I may appeal to your patriotism
              also, for I could not imagine a greater misfortune for the country
              than that this affair should come out.”
            </TextNode>

            <TextNode>“You may safely trust us.”</TextNode>

            <TextNode>
              “The letter, then, is from a certain foreign potentate who has
              been ruffled by some recent Colonial developments of this country.
              It has been written hurriedly and upon his own responsibility
              entirely. Inquiries have shown that his Ministers know nothing of
              the matter. At the same time it is couched in so unfortunate a
              manner, and certain phrases in it are of so provocative a
              character, that its publication would undoubtedly lead to a most
              dangerous state of feeling in this country. There would be such a
              ferment, sir, that I do not hesitate to say that within a week of
              the publication of that letter this country would be involved in a
              great war.”
            </TextNode>

            <TextNode>
              Holmes wrote a name upon a slip of paper and handed it to the
              Premier.
            </TextNode>

            <TextNode>
              “Exactly. It was he. And it is this letter—this letter which may
              well mean the expenditure of a thousand millions and the lives of
              a hundred thousand men—which has become lost in this unaccountable
              fashion.”
            </TextNode>

            <TextNode>“Have you informed the sender?”</TextNode>

            <TextNode>
              “Yes, sir, a cipher telegram has been despatched.”
            </TextNode>

            <TextNode>
              “Perhaps he desires the publication of the letter.”
            </TextNode>

            <TextNode>
              “No, sir, we have strong reason to believe that he already
              understands that he has acted in an indiscreet and hot-headed
              manner. It would be a greater blow to him and to his country than
              to us if this letter were to come out.”
            </TextNode>

            <TextNode>
              “If this is so, whose interest is it that the letter should come
              out? Why should anyone desire to steal it or to publish it?”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “There, Mr. Holmes, you take me into regions of high international
              politics. But if you consider the European situation you will have
              no difficulty in perceiving the motive. The whole of Europe is an
              armed camp. There is a double league which makes a fair balance of
              military power. Great Britain holds the scales. If Britain were
              driven into war with one confederacy, it would assure the
              supremacy of the other confederacy, whether they joined in the war
              or not. Do you follow?”
            </TextNode>

            <TextNode>
              “Very clearly. It is then the interest of the enemies of this
              potentate to secure and publish this letter, so as to make a
              breach between his country and ours?”
            </TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>
              “And to whom would this document be sent if it fell into the hands
              of an enemy?”
            </TextNode>

            <TextNode>
              “To any of the great Chancelleries of Europe. It is probably
              speeding on its way thither at the present instant as fast as
              steam can take it.”
            </TextNode>

            <TextNode>
              Mr. Trelawney Hope dropped his head on his chest and groaned
              aloud. The Premier placed his hand kindly upon his shoulder.
            </TextNode>

            <TextNode>
              “It is your misfortune, my dear fellow. No one can blame you.
              There is no precaution which you have neglected. Now, Mr. Holmes,
              you are in full possession of the facts. What course do you
              recommend?”
            </TextNode>

            <TextNode>Holmes shook his head mournfully.</TextNode>

            <TextNode>
              “You think, sir, that unless this document is recovered there will
              be war?”
            </TextNode>

            <TextNode>“I think it is very probable.”</TextNode>

            <TextNode>“Then, sir, prepare for war.”</TextNode>

            <TextNode>“That is a hard saying, Mr. Holmes.”</TextNode>

            <TextNode>
              “Consider the facts, sir. It is inconceivable that it was taken
              after eleven-thirty at night, since I understand that Mr. Hope and
              his wife were both in the room from that hour until the loss was
              found out. It was taken, then, yesterday evening between
              seven-thirty and eleven-thirty, probably near the earlier hour,
              since whoever took it evidently knew that it was there and would
              naturally secure it as early as possible. Now, sir, if a document
              of this importance were taken at that hour, where can it be now?
              No one has any reason to retain it. It has been passed rapidly on
              to those who need it. What chance have we now to overtake or even
              to trace it? It is beyond our reach.”
            </TextNode>

            <TextNode>The Prime Minister rose from the settee.</TextNode>

            <TextNode>
              “What you say is perfectly logical, Mr. Holmes. I feel that the
              matter is indeed out of our hands.”
            </TextNode>

            <TextNode>
              “Let us presume, for argument's sake, that the document was taken
              by the maid or by the valet—”
            </TextNode>

            <TextNode>“They are both old and tried servants.”</TextNode>

            <TextNode>
              “I understand you to say that your room is on the second floor,
              that there is no entrance from without, and that from within no
              one could go up unobserved. It must, then, be somebody in the
              house who has taken it. To whom would the thief take it? To one of
              several international spies and secret agents, whose names are
              tolerably familiar to me. There are three who may be said to be
              the heads of their profession. I will begin my research by going
              round and finding if each of them is at his post. If one is
              missing—especially if he has disappeared since last night—we will
              have some indication as to where the document has gone.”
            </TextNode>

            <TextNode>
              “Why should he be missing?” asked the European Secretary. “He
              would take the letter to an Embassy in London, as likely as not.”
            </TextNode>

            <TextNode>
              “I fancy not. These agents work independently, and their relations
              with the Embassies are often strained.”
            </TextNode>

            <TextNode>The Prime Minister nodded his acquiescence.</TextNode>

            <TextNode>
              “I believe you are right, Mr. Holmes. He would take so valuable a
              prize to head-quarters with his own hands. I think that your
              course of action is an excellent one. Meanwhile, Hope, we cannot
              neglect all our other duties on account of this one misfortune.
              Should there be any fresh developments during the day we shall
              communicate with you, and you will no doubt let us know the
              results of your own inquiries.”
            </TextNode>

            <TextNode>
              The two statesmen bowed and walked gravely from the room.
            </TextNode>

            <TextNode>
              When our illustrious visitors had departed Holmes lit his pipe in
              silence, and sat for some time lost in the deepest thought. I had
              opened the morning paper and was immersed in a sensational crime
              which had occurred in London the night before, when my friend gave
              an exclamation, sprang to his feet, and laid his pipe down upon
              the mantelpiece.
            </TextNode>

            <TextNode>
              “Yes,” said he, “there is no better way of approaching it. The
              situation is desperate, but not hopeless. Even now, if we could be
              sure which of them has taken it, it is just possible that it has
              not yet passed out of his hands. After all, it is a question of
              money with these fellows, and I have the British Treasury behind
              me. If it's on the market I'll buy it—if it means another penny on
              the income-tax. It is conceivable that the fellow might hold it
              back to see what bids come from this side before he tries his luck
              on the other. There are only those three capable of playing so
              bold a game; there are Oberstein, La Rothiere, and Eduardo Lucas.
              I will see each of them.”
            </TextNode>

            <TextNode>I glanced at my morning paper.</TextNode>

            <TextNode>“Is that Eduardo Lucas of Godolphin Street?”</TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>“You will not see him.”</TextNode>

            <TextNode>“Why not?”</TextNode>

            <TextNode>“He was murdered in his house last night.”</TextNode>

            <TextNode>
              My friend has so often astonished me in the course of our
              adventures that it was with a sense of exultation that I realized
              how completely I had astonished him. He stared in amazement, and
              then snatched the paper from my hands. This was the paragraph
              which I had been engaged in reading when he rose from his chair:
            </TextNode>

            <Indent>
              <TextNode noIndent className='italic'>
                Murder in Westminster
              </TextNode>
              <TextNode noIndent>
                A crime of mysterious character was committed last night at 16,
                Godolphin Street, one of the old-fashioned and secluded rows of
                eighteenth-century houses which lie between the river and the
                Abbey, almost in the shadow of the great Tower of the Houses of
                Parliament. This small but select mansion has been inhabited for
                some years by Mr. Eduardo Lucas, well known in society circles
                both on account of his charming personality and because he has
                the well-deserved reputation of being one of the best amateur
                tenors in the country. Mr. Lucas is an unmarried man,
                thirty-four years of age, and his establishment consists of Mrs.
                Pringle, an elderly housekeeper, and of Mitton, his valet. The
                former retires early and sleeps at the top of the house. The
                valet was out for the evening, visiting a friend at Hammersmith.
                From ten o'clock onwards Mr. Lucas had the house to himself.
                What occurred during that time has not yet transpired, but at a
                quarter to twelve Police-constable Barrett, passing along
                Godolphin Street, observed that the door of No. 16 was ajar. He
                knocked, but received no answer. Perceiving a light in the front
                room he advanced into the passage and again knocked, but without
                reply. He then pushed open the door and entered. The room was in
                a state of wild disorder, the furniture being all swept to one
                side, and one chair lying on its back in the centre. Beside this
                chair, and still grasping one of its legs, lay the unfortunate
                tenant of the house. He had been stabbed to the heart and must
                have died instantly. The knife with which the crime had been
                committed was a curved Indian dagger, plucked down from a trophy
                of Oriental arms which adorned one of the walls. Robbery does
                not appear to have been the motive of the crime, for there had
                been no attempt to remove the valuable contents of the room. Mr.
                Eduardo Lucas was so well known and popular that his violent and
                mysterious fate will arouse painful interest and intense
                sympathy in a wide-spread circle of friends.
              </TextNode>
            </Indent>
            <TextNode noIndent>
              “Well, Watson, what do you make of this?” asked Holmes, after a
              long pause.
            </TextNode>

            <TextNode>“It is an amazing coincidence.”</TextNode>

            <TextNode>
              “A coincidence! Here is one of the three men whom we had named as
              possible actors in this drama, and he meets a violent death during
              the very hours when we know that that drama was being enacted. The
              odds are enormous against its being coincidence. No figures could
              express them. No, my dear Watson, the two events are
              connected—must be connected. It is for us to find the connection.”
            </TextNode>

            <TextNode>“But now the official police must know all.”</TextNode>

            <TextNode>
              “Not at all. They know all they see at Godolphin Street. They
              know—and shall know—nothing of Whitehall Terrace. Only we know of
              both events, and can trace the relation between them. There is one
              obvious point which would, in any case, have turned my suspicions
              against Lucas. Godolphin Street, Westminster, is only a few
              minutes' walk from Whitehall Terrace. The other secret agents whom
              I have named live in the extreme West-end. It was easier,
              therefore, for Lucas than for the others to establish a connection
              or receive a message from the European Secretary's household—a
              small thing, and yet where events are compressed into a few hours
              it may prove essential. Halloa! what have we here?”
            </TextNode>

            <TextNode>
              Mrs. Hudson had appeared with a lady's card upon her salver.
              Holmes glanced at it, raised his eyebrows, and handed it over to
              me.
            </TextNode>

            <TextNode>
              “Ask Lady Hilda Trelawney Hope if she will be kind enough to step
              up,” said he.
            </TextNode>

            <TextNode>
              A moment later our modest apartment, already so distinguished that
              morning, was further honoured by the entrance of the most lovely
              woman in London. I had often heard of the beauty of the youngest
              daughter of the Duke of Belminster, but no description of it, and
              no contemplation of colourless photographs, had prepared me for
              the subtle, delicate charm and the beautiful colouring of that
              exquisite head. And yet as we saw it that autumn morning, it was
              not its beauty which would be the first thing to impress the
              observer. The cheek was lovely, but it was paled with emotion; the
              eyes were bright, but it was the brightness of fever; the
              sensitive mouth was tight and drawn in an effort after
              self-command. Terror—not beauty—was what sprang first to the eye
              as our fair visitor stood framed for an instant in the open door.
            </TextNode>

            <TextNode>“Has my husband been here, Mr. Holmes?”</TextNode>

            <TextNode>“Yes, madam, he has been here.”</TextNode>

            <TextNode>
              “Mr. Holmes, I implore you not to tell him that I came here.”
              Holmes bowed coldly, and motioned the lady to a chair.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page211;

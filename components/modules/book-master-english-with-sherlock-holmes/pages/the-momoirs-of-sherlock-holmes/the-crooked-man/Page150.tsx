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

function Page150({
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
        title='THE CROOKED MAN'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“His companion!”</TextNode>

            <TextNode>
              Holmes pulled a large sheet of tissue-paper out of his pocket and
              carefully unfolded it upon his knee.
            </TextNode>

            <TextNode>“What do you make of that?” he asked.</TextNode>

            <TextNode>
              The paper was covered with the tracings of the foot-marks of some
              small animal. It had five well-marked foot-pads, an indication of
              long nails, and the whole print might be nearly as large as a
              dessert-spoon.
            </TextNode>

            <TextNode>“It's a dog,” said I.</TextNode>

            <TextNode>
              “Did you ever hear of a dog running up a curtain? I found distinct
              traces that this creature had done so.”
            </TextNode>

            <TextNode>“A monkey, then?”</TextNode>

            <TextNode>“But it is not the print of a monkey.”</TextNode>

            <TextNode>“What can it be, then?”</TextNode>

            <TextNode>
              “Neither dog nor cat nor monkey nor any creature that we are
              familiar with. I have tried to reconstruct it from the
              measurements. Here are four prints where the beast has been
              standing motionless. You see that it is no less than fifteen
              inches from fore-foot to hind. Add to that the length of neck and
              head, and you get a creature not much less than two feet
              long—probably more if there is any tail. But now observe this
              other measurement. The animal has been moving, and we have the
              length of its stride. In each case it is only about three inches.
              You have an indication, you see, of a long body with very short
              legs attached to it. It has not been considerate enough to leave
              any of its hair behind it. But its general shape must be what I
              have indicated, and it can run up a curtain, and it is
              carnivorous.”
            </TextNode>

            <TextNode>“How do you deduce that?”</TextNode>

            <TextNode>
              “Because it ran up the curtain. A canary's cage was hanging in the
              window, and its aim seems to have been to get at the bird.”
            </TextNode>

            <TextNode>“Then what was the beast?”</TextNode>

            <TextNode>
              “Ah, if I could give it a name it might go a long way towards
              solving the case. On the whole, it was probably some creature of
              the weasel and stoat tribe—and yet it is larger than any of these
              that I have seen.”
            </TextNode>

            <TextNode>“But what had it to do with the crime?”</TextNode>

            <TextNode>
              “That, also, is still obscure. But we have learned a good deal,
              you perceive. We know that a man stood in the road looking at the
              quarrel between the Barclays—the blinds were up and the room
              lighted. We know, also, that he ran across the lawn, entered the
              room, accompanied by a strange animal, and that he either struck
              the Colonel or, as is equally possible, that the Colonel fell down
              from sheer fright at the sight of him, and cut his head on the
              corner of the fender. Finally, we have the curious fact that the
              intruder carried away the key with him when he left.”
            </TextNode>

            <TextNode>
              “Your discoveries seem to have left the business more obscure that
              it was before,” said I.
            </TextNode>

            <TextNode>
              “Quite so. They undoubtedly showed that the affair was much deeper
              than was at first conjectured. I thought the matter over, and I
              came to the conclusion that I must approach the case from another
              aspect. But really, Watson, I am keeping you up, and I might just
              as well tell you all this on our way to Aldershot to-morrow.”
            </TextNode>

            <TextNode>
              “Thank you, you have gone rather too far to stop.”
            </TextNode>

            <TextNode>
              “It is quite certain that when Mrs. Barclay left the house at
              half-past seven she was on good terms with her husband. She was
              never, as I think I have said, ostentatiously affectionate, but
              she was heard by the coachman chatting with the Colonel in a
              friendly fashion. Now, it was equally certain that, immediately on
              her return, she had gone to the room in which she was least likely
              to see her husband, had flown to tea as an agitated woman will,
              and finally, on his coming in to her, had broken into violent
              recriminations. Therefore something had occurred between
              seven-thirty and nine o'clock which had completely altered her
              feelings towards him. But Miss Morrison had been with her during
              the whole of that hour and a half. It was absolutely certain,
              therefore, in spite of her denial, that she must know something of
              the matter.
            </TextNode>

            <TextNode>
              “My first conjecture was, that possibly there had been some
              passages between this young lady and the old soldier, which the
              former had now confessed to the wife. That would account for the
              angry return, and also for the girl's denial that anything had
              occurred. Nor would it be entirely incompatible with most of the
              words overhead. But there was the reference to David, and there
              was the known affection of the Colonel for his wife, to weigh
              against it, to say nothing of the tragic intrusion of this other
              man, which might, of course, be entirely disconnected with what
              had gone before. It was not easy to pick one's steps, but, on the
              whole, I was inclined to dismiss the idea that there had been
              anything between the Colonel and Miss Morrison, but more than ever
              convinced that the young lady held the clue as to what it was
              which had turned Mrs. Barclay to hatred of her husband. I took the
              obvious course, therefore, of calling upon Miss M., of explaining
              to her that I was perfectly certain that she held the facts in her
              possession, and of assuring her that her friend, Mrs. Barclay,
              might find herself in the dock upon a capital charge unless the
              matter were cleared up.
            </TextNode>

            <TextNode>
              “Miss Morrison is a little ethereal slip of a girl, with timid
              eyes and blond hair, but I found her by no means wanting in
              shrewdness and common-sense. She sat thinking for some time after
              I had spoken, and then, turning to me with a brisk air of
              resolution, she broke into a remarkable statement which I will
              condense for your benefit.
            </TextNode>

            <TextNode>
              “‘I promised my friend that I would say nothing of the matter, and
              a promise is a promise,’ said she; ‘but if I can really help her
              when so serious a charge is laid against her, and when her own
              mouth, poor darling, is closed by illness, then I think I am
              absolved from my promise. I will tell you exactly what happened
              upon Monday evening.
            </TextNode>

            <TextNode>
              “‘We were returning from the Watt Street Mission about a quarter
              to nine o'clock. On our way we had to pass through Hudson Street,
              which is a very quiet thoroughfare. There is only one lamp in it,
              upon the left-hand side, and as we approached this lamp I saw a
              man coming towards us with is back very bent, and something like a
              box slung over one of his shoulders. He appeared to be deformed,
              for he carried his head low and walked with his knees bent. We
              were passing him when he raised his face to look at us in the
              circle of light thrown by the lamp, and as he did so he stopped
              and screamed out in a dreadful voice, “My God, it's Nancy!” Mrs.
              Barclay turned as white as death, and would have fallen down had
              the dreadful-looking creature not caught hold of her. I was going
              to call for the police, but she, to my surprise, spoke quite
              civilly to the fellow.
            </TextNode>

            <TextNode>
              “‘“I thought you had been dead this thirty years, Henry,” said
              she, in a shaking voice.
            </TextNode>

            <TextNode>
              “‘“So I have,” said he, and it was awful to hear the tones that he
              said it in. He had a very dark, fearsome face, and a gleam in his
              eyes that comes back to me in my dreams. His hair and whiskers
              were shot with gray, and his face was all crinkled and puckered
              like a withered apple.
            </TextNode>

            <TextNode>
              “‘“Just walk on a little way, dear,” said Mrs. Barclay; “I want to
              have a word with this man. There is nothing to be afraid of.” She
              tried to speak boldly, but she was still deadly pale and could
              hardly get her words out for the trembling of her lips.
            </TextNode>

            <TextNode>
              “‘I did as she asked me, and they talked together for a few
              minutes. Then she came down the street with her eyes blazing, and
              I saw the crippled wretch standing by the lamp-post and shaking
              his clenched fists in the air as if he were mad with rage. She
              never said a word until we were at the door here, when she took me
              by the hand and begged me to tell no one what had happened.
            </TextNode>

            <TextNode>
              “‘“It's an old acquaintance of mine who has come down in the
              world,” said she. When I promised her I would say nothing she
              kissed me, and I have never seen her since. I have told you now
              the whole truth, and if I withheld it from the police it is
              because I did not realize then the danger in which my dear friend
              stood. I know that it can only be to her advantage that everything
              should be known.’
            </TextNode>

            <TextNode>
              “There was her statement, Watson, and to me, as you can imagine,
              it was like a light on a dark night. Everything which had been
              disconnected before began at once to assume its true place, and I
              had a shadowy presentiment of the whole sequence of events. My
              next step obviously was to find the man who had produced such a
              remarkable impression upon Mrs. Barclay. If he were still in
              Aldershot it should not be a very difficult matter. There are not
              such a very great number of civilians, and a deformed man was sure
              to have attracted attention. I spent a day in the search, and by
              evening—this very evening, Watson—I had run him down. The man's
              name is Henry Wood, and he lives in lodgings in this same street
              in which the ladies met him. He has only been five days in the
              place. In the character of a registration-agent I had a most
              interesting gossip with his landlady. The man is by trade a
              conjurer and performer, going round the canteens after nightfall,
              and giving a little entertainment at each. He carries some
              creature about with him in that box; about which the landlady
              seemed to be in considerable trepidation, for she had never seen
              an animal like it. He uses it in some of his tricks according to
              her account. So much the woman was able to tell me, and also that
              it was a wonder the man lived, seeing how twisted he was, and that
              he spoke in a strange tongue sometimes, and that for the last two
              nights she had heard him groaning and weeping in his bedroom. He
              was all right, as far as money went, but in his deposit he had
              given her what looked like a bad florin. She showed it to me,
              Watson, and it was an Indian rupee.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “So now, my dear fellow, you see exactly how we stand and why it
              is I want you. It is perfectly plain that after the ladies parted
              from this man he followed them at a distance, that he saw the
              quarrel between husband and wife through the window, that he
              rushed in, and that the creature which he carried in his box got
              loose. That is all very certain. But he is the only person in this
              world who can tell us exactly what happened in that room.”
            </TextNode>

            <TextNode>“And you intend to ask him?”</TextNode>

            <TextNode>
              “Most certainly—but in the presence of a witness.”
            </TextNode>

            <TextNode>“And I am the witness?”</TextNode>

            <TextNode>
              “If you will be so good. If he can clear the matter up, well and
              good. If he refuses, we have no alternative but to apply for a
              warrant.”
            </TextNode>

            <TextNode>
              “But how do you know he'll be there when we return?”
            </TextNode>

            <TextNode>
              “You may be sure that I took some precautions. I have one of my
              Baker Street boys mounting guard over him who would stick to him
              like a burr, go where he might. We shall find him in Hudson Street
              to-morrow, Watson, and meanwhile I should be the criminal myself
              if I kept you out of bed any longer.”
            </TextNode>

            <TextNode>
              It was midday when we found ourselves at the scene of the tragedy,
              and, under my companion's guidance, we made our way at once to
              Hudson Street. In spite of his capacity for concealing his
              emotions, I could easily see that Holmes was in a state of
              suppressed excitement, while I was myself tingling with that
              half-sporting, half-intellectual pleasure which I invariably
              experienced when I associated myself with him in his
              investigations.
            </TextNode>

            <TextNode>
              “This is the street,” said he, as we turned into a short
              thoroughfare lined with plain two-storied brick houses. “Ah, here
              is Simpson to report.”
            </TextNode>

            <TextNode>
              “He's in all right, Mr. Holmes,” cried a small street Arab,
              running up to us.
            </TextNode>

            <TextNode>
              “Good, Simpson!” said Holmes, patting him on the head. “Come
              along, Watson. This is the house.” He sent in his card with a
              message that he had come on important business, and a moment later
              we were face to face with the man whom we had come to see. In
              spite of the warm weather he was crouching over a fire, and the
              little room was like an oven. The man sat all twisted and huddled
              in his chair in a way which gave an indescribably impression of
              deformity; but the face which he turned towards us, though worn
              and swarthy, must at some time have been remarkable for its
              beauty. He looked suspiciously at us now out of yellow-shot,
              bilious eyes, and, without speaking or rising, he waved towards
              two chairs.
            </TextNode>

            <TextNode>
              “Mr. Henry Wood, late of India, I believe,” said Holmes, affably.
              “I've come over this little matter of Colonel Barclay's death.”
            </TextNode>

            <TextNode>“What should I know about that?”</TextNode>

            <TextNode>
              “That's what I want to ascertain. You know, I suppose, that unless
              the matter is cleared up, Mrs. Barclay, who is an old friend of
              yours, will in all probability be tried for murder.”
            </TextNode>

            <TextNode>The man gave a violent start.</TextNode>

            <TextNode>
              “I don't know who you are,” he cried, “nor how you come to know
              what you do know, but will you swear that this is true that you
              tell me?”
            </TextNode>

            <TextNode>
              “Why, they are only waiting for her to come to her senses to
              arrest her.”
            </TextNode>

            <TextNode>“My God! Are you in the police yourself?”</TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>“What business is it of yours, then?”</TextNode>

            <TextNode>
              “It's every man's business to see justice done.”
            </TextNode>

            <TextNode>“You can take my word that she is innocent.”</TextNode>

            <TextNode>“Then you are guilty.”</TextNode>

            <TextNode>“No, I am not.”</TextNode>

            <TextNode>“Who killed Colonel James Barclay, then?”</TextNode>

            <TextNode>
              “It was a just providence that killed him. But, mind you this,
              that if I had knocked his brains out, as it was in my heart to do,
              he would have had no more than his due from my hands. If his own
              guilty conscience had not struck him down it is likely enough that
              I might have had his blood upon my soul. You want me to tell the
              story. Well, I don't know why I shouldn't, for there's no cause
              for me to be ashamed of it.
            </TextNode>

            <TextNode>
              “It was in this way, sir. You see me now with my back like a camel
              and by ribs all awry, but there was a time when Corporal Henry
              Wood was the smartest man in the 117th foot. We were in India
              then, in cantonments, at a place we'll call Bhurtee. Barclay, who
              died the other day, was sergeant in the same company as myself,
              and the belle of the regiment, ay, and the finest girl that ever
              had the breath of life between her lips, was Nancy Devoy, the
              daughter of the color-sergeant. There were two men that loved her,
              and one that she loved, and you'll smile when you look at this
              poor thing huddled before the fire, and hear me say that it was
              for my good looks that she loved me.
            </TextNode>

            <TextNode>
              “Well, though I had her heart, her father was set upon her
              marrying Barclay. I was a harum-scarum, reckless lad, and he had
              had an education, and was already marked for the sword-belt. But
              the girl held true to me, and it seemed that I would have had her
              when the Mutiny broke out, and all hell was loose in the country.
            </TextNode>

            <TextNode>
              “We were shut up in Bhurtee, the regiment of us with half a
              battery of artillery, a company of Sikhs, and a lot of civilians
              and women-folk. There were ten thousand rebels round us, and they
              were as keen as a set of terriers round a rat-cage. About the
              second week of it our water gave out, and it was a question
              whether we could communicate with General Neill's column, which
              was moving up country. It was our only chance, for we could not
              hope to fight our way out with all the women and children, so I
              volunteered to go out and to warn General Neill of our danger. My
              offer was accepted, and I talked it over with Sergeant Barclay,
              who was supposed to know the ground better than any other man, and
              who drew up a route by which I might get through the rebel lines.
              At ten o'clock the same night I started off upon my journey. There
              were a thousand lives to save, but it was of only one that I was
              thinking when I dropped over the wall that night.
            </TextNode>

            <TextNode>
              “My way ran down a dried-up watercourse, which we hoped would
              screen me from the enemy's sentries; but as I crept round the
              corner of it I walked right into six of them, who were crouching
              down in the dark waiting for me. In an instant I was stunned with
              a blow and bound hand and foot. But the real blow was to my heart
              and not to my head, for as I came to and listened to as much as I
              could understand of their talk, I heard enough to tell me that my
              comrade, the very man who had arranged the way that I was to take,
              had betrayed me by means of a native servant into the hands of the
              enemy.
            </TextNode>

            <TextNode>
              “Well, there's no need for me to dwell on that part of it. You
              know now what James Barclay was capable of. Bhurtee was relieved
              by Neill next day, but the rebels took me away with them in their
              retreat, and it was many a long year before ever I saw a white
              face again. I was tortured and tried to get away, and was captured
              and tortured again. You can see for yourselves the state in which
              I was left. Some of them that fled into Nepal took me with them,
              and then afterwards I was up past Darjeeling. The hill-folk up
              there murdered the rebels who had me, and I became their slave for
              a time until I escaped; but instead of going south I had to go
              north, until I found myself among the Afghans. There I wandered
              about for many a year, and at last came back to the Punjaub, where
              I lived mostly among the natives and picked up a living by the
              conjuring tricks that I had learned. What use was it for me, a
              wretched cripple, to go back to England or to make myself known to
              my old comrades? Even my wish for revenge would not make me do
              that. I had rather that Nancy and my old pals should think of
              Harry Wood as having died with a straight back, than see him
              living and crawling with a stick like a chimpanzee. They never
              doubted that I was dead, and I meant that they never should. I
              heard that Barclay had married Nancy, and that he was rising
              rapidly in the regiment, but even that did not make me speak.
            </TextNode>

            <TextNode>
              “But when one gets old one has a longing for home. For years I've
              been dreaming of the bright green fields and the hedges of
              England. At last I determined to see them before I died. I saved
              enough to bring me across, and then I came here where the soldiers
              are, for I know their ways and how to amuse them and so earn
              enough to keep me.”
            </TextNode>

            <TextNode>
              “Your narrative is most interesting,” said Sherlock Holmes. “I
              have already heard of your meeting with Mrs. Barclay, and your
              mutual recognition. You then, as I understand, followed her home
              and saw through the window an altercation between her husband and
              her, in which she doubtless cast his conduct to you in his teeth.
              Your own feelings overcame you, and you ran across the lawn and
              broke in upon them.”
            </TextNode>

            <TextNode>
              “I did, sir, and at the sight of me he looked as I have never seen
              a man look before, and over he went with his head on the fender.
              But he was dead before he fell. I read death on his face as plain
              as I can read that text over the fire. The bare sight of me was
              like a bullet through his guilty heart.”
            </TextNode>

            <TextNode>“And then?”</TextNode>

            <TextNode>
              “Then Nancy fainted, and I caught up the key of the door from her
              hand, intending to unlock it and get help. But as I was doing it
              it seemed to me better to leave it alone and get away, for the
              thing might look black against me, and any way my secret would be
              out if I were taken. In my haste I thrust the key into my pocket,
              and dropped my stick while I was chasing Teddy, who had run up the
              curtain. When I got him into his box, from which he had slipped, I
              was off as fast as I could run.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page150;

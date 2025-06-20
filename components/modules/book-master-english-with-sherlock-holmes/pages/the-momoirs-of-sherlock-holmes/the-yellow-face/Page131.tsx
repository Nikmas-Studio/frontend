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

function Page131({
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
        title='THE&nbsp;YELLOW&nbsp;FACE'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “‘What may you be wantin'?’ she asked, in a Northern accent.
            </TextNode>

            <TextNode>
              “‘I am your neighbor over yonder,’ said I, nodding towards my
              house. ‘I see that you have only just moved in, so I thought that
              if I could be of any help to you in any—’
            </TextNode>

            <TextNode>
              “‘Ay, we'll just ask ye when we want ye,’ said she, and shut the
              door in my face. Annoyed at the churlish rebuff, I turned my back
              and walked home. All evening, though I tried to think of other
              things, my mind would still turn to the apparition at the window
              and the rudeness of the woman. I determined to say nothing about
              the former to my wife, for she is a nervous, highly strung woman,
              and I had no wish that she would share the unpleasant impression
              which had been produced upon myself. I remarked to her, however,
              before I fell asleep, that the cottage was now occupied, to which
              she returned no reply.
            </TextNode>

            <TextNode>
              “I am usually an extremely sound sleeper. It has been a standing
              jest in the family that nothing could ever wake me during the
              night. And yet somehow on that particular night, whether it may
              have been the slight excitement produced by my little adventure or
              not I know not, but I slept much more lightly than usual. Half in
              my dreams I was dimly conscious that something was going on in the
              room, and gradually became aware that my wife had dressed herself
              and was slipping on her mantle and her bonnet. My lips were parted
              to murmur out some sleepy words of surprise or remonstrance at
              this untimely preparation, when suddenly my half-opened eyes fell
              upon her face, illuminated by the candle-light, and astonishment
              held me dumb. She wore an expression such as I had never seen
              before—such as I should have thought her incapable of assuming.
              She was deadly pale and breathing fast, glancing furtively towards
              the bed as she fastened her mantle, to see if she had disturbed
              me. Then, thinking that I was still asleep, she slipped
              noiselessly from the room, and an instant later I heard a sharp
              creaking which could only come from the hinges of the front door.
              I sat up in bed and rapped my knuckles against the rail to make
              certain that I was truly awake. Then I took my watch from under
              the pillow. It was three in the morning. What on this earth could
              my wife be doing out on the country road at three in the morning?
            </TextNode>

            <TextNode>
              “I had sat for about twenty minutes turning the thing over in my
              mind and trying to find some possible explanation. The more I
              thought, the more extraordinary and inexplicable did it appear. I
              was still puzzling over it when I heard the door gently close
              again, and her footsteps coming up the stairs.
            </TextNode>

            <TextNode>
              “‘Where in the world have you been, Effie?’ I asked as she
              entered.
            </TextNode>

            <TextNode>
              “She gave a violent start and a kind of gasping cry when I spoke,
              and that cry and start troubled me more than all the rest, for
              there was something indescribably guilty about them. My wife had
              always been a woman of a frank, open nature, and it gave me a
              chill to see her slinking into her own room, and crying out and
              wincing when her own husband spoke to her.
            </TextNode>

            <TextNode>
              “‘You awake, Jack!’ she cried, with a nervous laugh. ‘Why, I
              thought that nothing could awake you.’
            </TextNode>

            <TextNode>“‘Where have you been?’ I asked, more sternly.</TextNode>

            <TextNode>
              “‘I don't wonder that you are surprised,’ said she, and I could
              see that her fingers were trembling as she undid the fastenings of
              her mantle. ‘Why, I never remember having done such a thing in my
              life before. The fact is that I felt as though I were choking, and
              had a perfect longing for a breath of fresh air. I really think
              that I should have fainted if I had not gone out. I stood at the
              door for a few minutes, and now I am quite myself again.’
            </TextNode>

            <TextNode>
              “All the time that she was telling me this story she never once
              looked in my direction, and her voice was quite unlike her usual
              tones. It was evident to me that she was saying what was false. I
              said nothing in reply, but turned my face to the wall, sick at
              heart, with my mind filled with a thousand venomous doubts and
              suspicions. What was it that my wife was concealing from me? Where
              had she been during that strange expedition? I felt that I should
              have no peace until I knew, and yet I shrank from asking her again
              after once she had told me what was false. All the rest of the
              night I tossed and tumbled, framing theory after theory, each more
              unlikely than the last.
            </TextNode>

            <TextNode>
              “I should have gone to the City that day, but I was too disturbed
              in my mind to be able to pay attention to business matters. My
              wife seemed to be as upset as myself, and I could see from the
              little questioning glances which she kept shooting at me that she
              understood that I disbelieved her statement, and that she was at
              her wits' end what to do. We hardly exchanged a word during
              breakfast, and immediately afterwards I went out for a walk, that
              I might think the matter out in the fresh morning air.
            </TextNode>

            <TextNode>
              “I went as far as the Crystal Palace, spent an hour in the
              grounds, and was back in Norbury by one o'clock. It happened that
              my way took me past the cottage, and I stopped for an instant to
              look at the windows, and to see if I could catch a glimpse of the
              strange face which had looked out at me on the day before. As I
              stood there, imagine my surprise, Mr. Holmes, when the door
              suddenly opened and my wife walked out.
            </TextNode>

            <TextNode>
              “I was struck dumb with astonishment at the sight of her; but my
              emotions were nothing to those which showed themselves upon her
              face when our eyes met. She seemed for an instant to wish to
              shrink back inside the house again; and then, seeing how useless
              all concealment must be, she came forward, with a very white face
              and frightened eyes which belied the smile upon her lips.
            </TextNode>

            <TextNode>
              “‘Ah, Jack,’ she said, ‘I have just been in to see if I can be of
              any assistance to our new neighbors. Why do you look at me like
              that, Jack? You are not angry with me?’
            </TextNode>

            <TextNode>
              “‘So,’ said I, ‘this is where you went during the night.’
            </TextNode>

            <TextNode>“‘What do you mean?’ she cried.</TextNode>

            <TextNode>
              “‘You came here. I am sure of it. Who are these people, that you
              should visit them at such an hour?’
            </TextNode>

            <TextNode>“‘I have not been here before.’</TextNode>

            <TextNode>
              “‘How can you tell me what you know is false?’ I cried. ‘Your very
              voice changes as you speak. When have I ever had a secret from
              you? I shall enter that cottage, and I shall probe the matter to
              the bottom.’
            </TextNode>

            <TextNode>
              “‘No, no, Jack, for God's sake!’ she gasped, in uncontrollable
              emotion. Then, as I approached the door, she seized my sleeve and
              pulled me back with convulsive strength.
            </TextNode>

            <TextNode>
              “‘I implore you not to do this, Jack,’ she cried. ‘I swear that I
              will tell you everything some day, but nothing but misery can come
              of it if you enter that cottage.’ Then, as I tried to shake her
              off, she clung to me in a frenzy of entreaty.
            </TextNode>

            <TextNode>
              “‘Trust me, Jack!’ she cried. ‘Trust me only this once. You will
              never have cause to regret it. You know that I would not have a
              secret from you if it were not for your own sake. Our whole lives
              are at stake in this. If you come home with me, all will be well.
              If you force your way into that cottage, all is over between us.’
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “There was such earnestness, such despair, in her manner that her
              words arrested me, and I stood irresolute before the door.
            </TextNode>

            <TextNode>
              “‘I will trust you on one condition, and on one condition only,’
              said I at last. ‘It is that this mystery comes to an end from now.
              You are at liberty to preserve your secret, but you must promise
              me that there shall be no more nightly visits, no more doings
              which are kept from my knowledge. I am willing to forget those
              which are passed if you will promise that there shall be no more
              in the future.’
            </TextNode>

            <TextNode>
              “‘I was sure that you would trust me,’ she cried, with a great
              sigh of relief. ‘It shall be just as you wish. Come away—oh, come
              away up to the house.’
            </TextNode>

            <TextNode>
              “Still pulling at my sleeve, she led me away from the cottage. As
              we went I glanced back, and there was that yellow livid face
              watching us out of the upper window. What link could there be
              between that creature and my wife? Or how could the coarse, rough
              woman whom I had seen the day before be connected with her? It was
              a strange puzzle, and yet I knew that my mind could never know
              ease again until I had solved it.
            </TextNode>

            <TextNode>
              “For two days after this I stayed at home, and my wife appeared to
              abide loyally by our engagement, for, as far as I know, she never
              stirred out of the house. On the third day, however, I had ample
              evidence that her solemn promise was not enough to hold her back
              from this secret influence which drew her away from her husband
              and her duty.
            </TextNode>

            <TextNode>
              “I had gone into town on that day, but I returned by the 2.40
              instead of the 3.36, which is my usual train. As I entered the
              house the maid ran into the hall with a startled face.
            </TextNode>

            <TextNode>“‘Where is your mistress?’ I asked.</TextNode>

            <TextNode>
              “‘I think that she has gone out for a walk,’ she answered.
            </TextNode>

            <TextNode>
              “My mind was instantly filled with suspicion. I rushed upstairs to
              make sure that she was not in the house. As I did so I happened to
              glance out of one of the upper windows, and saw the maid with whom
              I had just been speaking running across the field in the direction
              of the cottage. Then of course I saw exactly what it all meant. My
              wife had gone over there, and had asked the servant to call her if
              I should return. Tingling with anger, I rushed down and hurried
              across, determined to end the matter once and forever. I saw my
              wife and the maid hurrying back along the lane, but I did not stop
              to speak with them. In the cottage lay the secret which was
              casting a shadow over my life. I vowed that, come what might, it
              should be a secret no longer. I did not even knock when I reached
              it, but turned the handle and rushed into the passage.
            </TextNode>

            <TextNode>
              “It was all still and quiet upon the ground floor. In the kitchen
              a kettle was singing on the fire, and a large black cat lay coiled
              up in the basket; but there was no sign of the woman whom I had
              seen before. I ran into the other room, but it was equally
              deserted. Then I rushed up the stairs, only to find two other
              rooms empty and deserted at the top. There was no one at all in
              the whole house. The furniture and pictures were of the most
              common and vulgar description, save in the one chamber at the
              window of which I had seen the strange face. That was comfortable
              and elegant, and all my suspicions rose into a fierce bitter flame
              when I saw that on the mantelpiece stood a copy of a full-length
              photograph of my wife, which had been taken at my request only
              three months ago.
            </TextNode>

            <TextNode>
              “I stayed long enough to make certain that the house was
              absolutely empty. Then I left it, feeling a weight at my heart
              such as I had never had before. My wife came out into the hall as
              I entered my house; but I was too hurt and angry to speak with
              her, and pushing past her, I made my way into my study. She
              followed me, however, before I could close the door.
            </TextNode>

            <TextNode>
              “‘I am sorry that I broke my promise, Jack,’ said she; ‘but if you
              knew all the circumstances I am sure that you would forgive me.’
            </TextNode>

            <TextNode>“‘Tell me everything, then,’ said I.</TextNode>

            <TextNode>“‘I cannot, Jack, I cannot,’ she cried.</TextNode>

            <TextNode>
              “‘Until you tell me who it is that has been living in that
              cottage, and who it is to whom you have given that photograph,
              there can never be any confidence between us,’ said I, and
              breaking away from her, I left the house. That was yesterday, Mr.
              Holmes, and I have not seen her since, nor do I know anything more
              about this strange business. It is the first shadow that has come
              between us, and it has so shaken me that I do not know what I
              should do for the best. Suddenly this morning it occurred to me
              that you were the man to advise me, so I have hurried to you now,
              and I place myself unreservedly in your hands. If there is any
              point which I have not made clear, pray question me about it. But,
              above all, tell me quickly what I am to do, for this misery is
              more than I can bear.”
            </TextNode>

            <TextNode>
              Holmes and I had listened with the utmost interest to this
              extraordinary statement, which had been delivered in the jerky,
              broken fashion of a man who is under the influence of extreme
              emotions. My companion sat silent for some time, with his chin
              upon his hand, lost in thought.
            </TextNode>

            <TextNode>
              “Tell me,” said he at last, “could you swear that this was a man's
              face which you saw at the window?”
            </TextNode>

            <TextNode>
              “Each time that I saw it I was some distance away from it, so that
              it is impossible for me to say.”
            </TextNode>

            <TextNode>
              “You appear, however, to have been disagreeably impressed by it.”
            </TextNode>

            <TextNode>
              “It seemed to be of an unnatural color, and to have a strange
              rigidity about the features. When I approached, it vanished with a
              jerk.”
            </TextNode>

            <TextNode>
              “How long is it since your wife asked you for a hundred pounds?”
            </TextNode>

            <TextNode>“Nearly two months.”</TextNode>

            <TextNode>
              “Have you ever seen a photograph of her first husband?”
            </TextNode>

            <TextNode>
              “No; there was a great fire at Atlanta very shortly after his
              death, and all her papers were destroyed.”
            </TextNode>

            <TextNode>
              “And yet she had a certificate of death. You say that you saw it.”
            </TextNode>

            <TextNode>“Yes; she got a duplicate after the fire.”</TextNode>

            <TextNode>
              “Did you ever meet any one who knew her in America?”
            </TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>“Did she ever talk of revisiting the place?”</TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>“Or get letters from it?”</TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>
              “Thank you. I should like to think over the matter a little now.
              If the cottage is now permanently deserted we may have some
              difficulty. If, on the other hand, as I fancy is more likely, the
              inmates were warned of your coming, and left before you entered
              yesterday, then they may be back now, and we should clear it all
              up easily. Let me advise you, then, to return to Norbury, and to
              examine the windows of the cottage again. If you have reason to
              believe that is inhabited, do not force your way in, but send a
              wire to my friend and me. We shall be with you within an hour of
              receiving it, and we shall then very soon get to the bottom of the
              business.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page131;

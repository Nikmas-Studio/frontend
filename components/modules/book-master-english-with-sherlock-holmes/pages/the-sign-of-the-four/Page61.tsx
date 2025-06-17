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
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page61({
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
        title='THE SIGN OF THE FOUR'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “It was rather a queer position that we found ourselves in then.
              There we were all four tied by the leg and with precious little
              chance of ever getting out again, while we each held a secret
              which might have put each of us in a palace if we could only have
              made use of it. It was enough to make a man eat his heart out to
              have to stand the kick and the cuff of every petty jack-in-office,
              to have rice to eat and water to drink, when that gorgeous fortune
              was ready for him outside, just waiting to be picked up. It might
              have driven me mad; but I was always a pretty stubborn one, so I
              just held on and bided my time.
            </TextNode>

            <TextNode>
              “At last it seemed to me to have come. I was changed from Agra to
              Madras, and from there to Blair Island in the Andamans. There are
              very few white convicts at this settlement, and, as I had behaved
              well from the first, I soon found myself a sort of privileged
              person. I was given a hut in Hope Town, which is a small place on
              the slopes of Mount Harriet, and I was left pretty much to myself.
              It is a dreary, fever-stricken place, and all beyond our little
              clearings was infested with wild cannibal natives, who were ready
              enough to blow a poisoned dart at us if they saw a chance. There
              was digging, and ditching, and yam-planting, and a dozen other
              things to be done, so we were busy enough all day; though in the
              evening we had a little time to ourselves. Among other things, I
              learned to dispense drugs for the surgeon, and picked up a
              smattering of his knowledge. All the time I was on the lookout for
              a chance of escape; but it is hundreds of miles from any other
              land, and there is little or no wind in those seas: so it was a
              terribly difficult job to get away.
            </TextNode>

            <TextNode>
              “The surgeon, Dr. Somerton, was a fast, sporting young chap, and
              the other young officers would meet in his rooms of an evening and
              play cards. The surgery, where I used to make up my drugs, was
              next to his sitting-room, with a small window between us. Often,
              if I felt lonesome, I used to turn out the lamp in the surgery,
              and then, standing there, I could hear their talk and watch their
              play. I am fond of a hand at cards myself, and it was almost as
              good as having one to watch the others. There was Major Sholto,
              Captain Morstan, and Lieutenant Bromley Brown, who were in command
              of the native troops, and there was the surgeon himself, and two
              or three prison-officials, crafty old hands who played a nice sly
              safe game. A very snug little party they used to make.
            </TextNode>

            <TextNode>
              “Well, there was one thing which very soon struck me, and that was
              that the soldiers used always to lose and the civilians to win.
              Mind, I don't say that there was anything unfair, but so it was.
              These prison-chaps had done little else than play cards ever since
              they had been at the Andamans, and they knew each other's game to
              a point, while the others just played to pass the time and threw
              their cards down anyhow. Night after night the soldiers got up
              poorer men, and the poorer they got the more keen they were to
              play. Major Sholto was the hardest hit. He used to pay in notes
              and gold at first, but soon it came to notes of hand and for big
              sums. He sometimes would win for a few deals, just to give him
              heart, and then the luck would set in against him worse than ever.
              All day he would wander about as black as thunder, and he took to
              drinking a deal more than was good for him.
            </TextNode>

            <TextNode>
              “One night he lost even more heavily than usual. I was sitting in
              my hut when he and Captain Morstan came stumbling along on the way
              to their quarters. They were bosom friends, those two, and never
              far apart. The major was raving about his losses.
            </TextNode>

            <TextNode>
              “‘It's all up, Morstan,’ he was saying, as they passed my hut. ‘I
              shall have to send in my papers. I am a ruined man.’
            </TextNode>

            <TextNode>
              “‘Nonsense, old chap!’ said the other, slapping him upon the
              shoulder. ‘I've had a nasty facer myself, but—’ That was all I
              could hear, but it was enough to set me thinking.
            </TextNode>

            <TextNode>
              A couple of days later Major Sholto was strolling on the beach: so
              I took the chance of speaking to him.
            </TextNode>

            <TextNode>“‘I wish to have your advice, major,’ said I.</TextNode>

            <TextNode>
              “‘Well, Small, what is it?’ he asked, taking his cheroot from his
              lips.
            </TextNode>

            <TextNode>
              “‘I wanted to ask you, sir,’ said I, ‘who is the proper person to
              whom hidden treasure should be handed over. I know where half a
              million worth lies, and, as I cannot use it myself, I thought
              perhaps the best thing that I could do would be to hand it over to
              the proper authorities, and then perhaps they would get my
              sentence shortened for me.’
            </TextNode>

            <TextNode>
              “‘Half a million, Small?’ he gasped, looking hard at me to see if
              I was in earnest.
            </TextNode>

            <TextNode>
              “‘Quite that, sir,—in jewels and pearls. It lies there ready for
              anyone. And the queer thing about it is that the real owner is
              outlawed and cannot hold property, so that it belongs to the first
              comer.’
            </TextNode>

            <TextNode>
              “‘To government, Small,’ he stammered,—‘to government.’ But he
              said it in a halting fashion, and I knew in my heart that I had
              got him.
            </TextNode>

            <TextNode>
              “‘You think, then, sir, that I should give the information to the
              Governor-General?’ said I, quietly.
            </TextNode>

            <TextNode>
              “‘Well, well, you must not do anything rash, or that you might
              repent. Let me hear all about it, Small. Give me the facts.’
            </TextNode>

            <TextNode>
              “I told him the whole story, with small changes so that he could
              not identify the places. When I had finished he stood stock still
              and full of thought. I could see by the twitch of his lip that
              there was a struggle going on within him.
            </TextNode>

            <TextNode>
              “‘This is a very important matter, Small,’ he said, at last. ‘You
              must not say a word to any one about it, and I shall see you again
              soon.’
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Two nights later he and his friend Captain Morstan came to my hut
              in the dead of the night with a lantern.
            </TextNode>

            <TextNode>
              “‘I want you just to let Captain Morstan hear that story from your
              own lips, Small,’ said he.
            </TextNode>

            <TextNode>“I repeated it as I had told it before.</TextNode>

            <TextNode>
              “‘It rings true, eh?’ said he. ‘It's good enough to act upon?’
            </TextNode>

            <TextNode>“Captain Morstan nodded.</TextNode>

            <TextNode>
              “‘Look here, Small,’ said the major. ‘We have been talking it
              over, my friend here and I, and we have come to the conclusion
              that this secret of yours is hardly a government matter, after
              all, but is a private concern of your own, which of course you
              have the power of disposing of as you think best. Now, the
              question is, what price would you ask for it? We might be inclined
              to take it up, and at least look into it, if we could agree as to
              terms.’ He tried to speak in a cool, careless way, but his eyes
              were shining with excitement and greed.
            </TextNode>

            <TextNode>
              “‘Why, as to that, gentlemen,’ I answered, trying also to be cool,
              but feeling as excited as he did, ‘there is only one bargain which
              a man in my position can make. I shall want you to help me to my
              freedom, and to help my three companions to theirs. We shall then
              take yo into partnership, and give you a fifth share to divide
              between you.’
            </TextNode>

            <TextNode>
              “‘Hum!’ said he. ‘A fifth share! That is not very tempting.’
            </TextNode>

            <TextNode>
              “‘It would come to fifty thousand apiece,’ said I.
            </TextNode>

            <TextNode>
              “‘But how can we gain your freedom? You know very well that you
              ask an impossibility.’
            </TextNode>

            <TextNode>
              “‘Nothing of the sort,’ I answered. ‘I have thought it all out to
              the last detail. The only bar to our escape is that we can get no
              boat fit for the voyage, and no provisions to last us for so long
              a time. There are plenty of little yachts and yawls at Calcutta or
              Madras which would serve our turn well. Do you bring one over. We
              shall engage to get aboard her by night, and if you will drop us
              on any part of the Indian coast you will have done your part of
              the bargain.’
            </TextNode>

            <TextNode>“‘If there were only one,’ he said.</TextNode>

            <TextNode>
              “‘None or all,’ I answered. ‘We have sworn it. The four of us must
              always act together.’
            </TextNode>

            <TextNode>
              “‘You see, Morstan,’ said he, ‘Small is a man of his word. He does
              not flinch from his friend. I think we may very well trust him.’
            </TextNode>

            <TextNode>
              “‘It's a dirty business,’ the other answered. ‘Yet, as you say,
              the money would save our commissions handsomely.’
            </TextNode>

            <TextNode>
              “‘Well, Small,’ said the major, ‘we must, I suppose, try and meet
              you. We must first, of course, test the truth of your story. Tell
              me where the box is hid, and I shall get leave of absence and go
              back to India in the monthly relief-boat to inquire into the
              affair.’
            </TextNode>

            <TextNode>
              “‘Not so fast,’ said I, growing colder as he got hot. ‘I must have
              the consent of my three comrades. I tell you that it is four or
              none with us.’
            </TextNode>

            <TextNode>
              “‘Nonsense!’ he broke in. ‘What have three black fellows to do
              with our agreement?’
            </TextNode>

            <TextNode>
              “‘Black or blue,’ said I, ‘they are in with me, and we all go
              together.’
            </TextNode>

            <TextNode>
              “Well, the matter ended by a second meeting, at which Mahomet
              Singh, Abdullah Khan, and Dost Akbar were all present. We talked
              the matter over again, and at last we came to an arrangement. We
              were to provide both the officers with charts of the part of the
              Agra fort and mark the place in the wall where the treasure was
              hid. Major Sholto was to go to India to test our story. If he
              found the box he was to leave it there, to send out a small yacht
              provisioned for a voyage, which was to lie off Rutland Island, and
              to which we were to make our way, and finally to return to his
              duties. Captain Morstan was then to apply for leave of absence, to
              meet us at Agra, and there we were to have a final division of the
              treasure, he taking the major's share as well as his own. All this
              we sealed by the most solemn oaths that the mind could think or
              the lips utter. I sat up all night with paper and ink, and by the
              morning I had the two charts all ready, signed with the sign of
              four,—that is, of Abdullah, Akbar, Mahomet, and myself.
            </TextNode>

            <TextNode>
              “Well, gentlemen, I weary you with my long story, and I know that
              my friend Mr. Jones is impatient to get me safely stowed in
              chokey. I'll make it as short as I can. The villain Sholto went
              off to India, but he never came back again. Captain Morstan showed
              me his name among a list of passengers in one of the mail-boats
              very shortly afterwards. His uncle had died, leaving him a
              fortune, and he had left the army, yet he could stoop to treat
              five men as he had treated us. Morstan went over to Agra shortly
              afterwards, and found, as we expected, that the treasure was
              indeed gone. The scoundrel had stolen it all, without carrying out
              one of the conditions on which we had sold him the secret. From
              that day I lived only for vengeance. I thought of it by day and I
              nursed it by night. It became an overpowering, absorbing passion
              with me. I cared nothing for the law,—nothing for the gallows. To
              escape, to track down Sholto, to have my hand upon his
              throat,—that was my one thought. Even the Agra treasure had come
              to be a smaller thing in my mind than the slaying of Sholto.
            </TextNode>

            <TextNode>
              “Well, I have set my mind on many things in this life, and never
              one which I did not carry out. But it was weary years before my
              time came. I have told you that I had picked up something of
              medicine. One day when Dr. Somerton was down with a fever a little
              Andaman Islander was picked up by a convict-gang in the woods. He
              was sick to death, and had gone to a lonely place to die. I took
              him in hand, though he was as venomous as a young snake, and after
              a couple of months I got him all right and able to walk. He took a
              kind of fancy to me then, and would hardly go back to his woods,
              but was always hanging about my hut. I learned a little of his
              lingo from him, and this made him all the fonder of me.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page61;

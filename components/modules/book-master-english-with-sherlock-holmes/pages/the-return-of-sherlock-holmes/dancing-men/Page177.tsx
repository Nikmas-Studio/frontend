import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import dancingMenDark1 from '@/public/images/sherlock-danc-1-dark.jpg';
import dancingMenLight1 from '@/public/images/sherlock-danc-1-light.jpg';
import dancingMenDark2 from '@/public/images/sherlock-danc-2-dark.jpg';
import dancingMenLight2 from '@/public/images/sherlock-danc-2-light.jpg';
import dancingMenDark3 from '@/public/images/sherlock-danc-3-dark.jpg';
import dancingMenLight3 from '@/public/images/sherlock-danc-3-light.jpg';
import dancingMenDark4 from '@/public/images/sherlock-danc-4-dark.jpg';
import dancingMenLight4 from '@/public/images/sherlock-danc-4-light.jpg';
import Image from 'next/image';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page177({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;DANCING&nbsp;MEN'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              Holmes had been seated for some hours in silence with his long,
              thin back curved over a chemical vessel in which he was brewing a
              particularly malodorous product. His head was sunk upon his
              breast, and he looked from my point of view like a strange, lank
              bird, with dull grey plumage and a black top-knot.
            </TextNode>

            <TextNode>
              “So, Watson,” said he, suddenly, “you do not propose to invest in
              South African securities?”
            </TextNode>

            <TextNode>
              I gave a start of astonishment. Accustomed as I was to Holmes's
              curious faculties, this sudden intrusion into my most intimate
              thoughts was utterly inexplicable.
            </TextNode>

            <TextNode>“How on earth do you know that?” I asked.</TextNode>

            <TextNode>
              He wheeled round upon his stool, with a steaming test-tube in his
              hand and a gleam of amusement in his deep-set eyes.
            </TextNode>

            <TextNode>
              “Now, Watson, confess yourself utterly taken aback,” said he.
            </TextNode>

            <TextNode>“I am.”</TextNode>

            <TextNode>
              “I ought to make you sign a paper to that effect.”
            </TextNode>

            <TextNode>“Why?”</TextNode>

            <TextNode>
              “Because in five minutes you will say that it is all so absurdly
              simple.”
            </TextNode>

            <TextNode>
              “I am sure that I shall say nothing of the kind.”
            </TextNode>

            <TextNode>
              “You see, my dear Watson”—he propped his test-tube in the rack and
              began to lecture with the air of a professor addressing his
              class—“it is not really difficult to construct a series of
              inferences, each dependent upon its predecessor and each simple in
              itself. If, after doing so, one simply knocks out all the central
              inferences and presents one's audience with the starting-point and
              the conclusion, one may produce a startling, though possibly a
              meretricious, effect. Now, it was not really difficult, by an
              inspection of the groove between your left forefinger and thumb,
              to feel sure that you did not propose to invest your small capital
              in the goldfields.”
            </TextNode>

            <TextNode>“I see no connection.”</TextNode>

            <TextNode>
              “Very likely not; but I can quickly show you a close connection.
              Here are the missing links of the very simple chain: 1. You had
              chalk between your left finger and thumb when you returned from
              the club last night. 2. You put chalk there when you play
              billiards to steady the cue. 3. You never play billiards except
              with Thurston. 4. You told me four weeks ago that Thurston had an
              option on some South African property which would expire in a
              month, and which he desired you to share with him. 5. Your
              cheque-book is locked in my drawer, and you have not asked for the
              key. 6. You do not propose to invest your money in this manner.”
            </TextNode>

            <TextNode>“How absurdly simple!” I cried.</TextNode>

            <TextNode>
              “Quite so!” said he, a little nettled. “Every problem becomes very
              childish when once it is explained to you. Here is an unexplained
              one. See what you can make of that, friend Watson.” He tossed a
              sheet of paper upon the table and turned once more to his chemical
              analysis.
            </TextNode>

            <TextNode>
              I looked with amazement at the absurd hieroglyphics upon the
              paper.
            </TextNode>

            <TextNode>
              “Why, Holmes, it is a child's drawing,” I cried.
            </TextNode>

            <TextNode>“Oh, that's your idea!”</TextNode>

            <TextNode>“What else should it be?”</TextNode>

            <TextNode>
              “That is what Mr. Hilton Cubitt, of Ridling Thorpe Manor, Norfolk,
              is very anxious to know. This little conundrum came by the first
              post, and he was to follow by the next train. There's a ring at
              the bell, Watson. I should not be very much surprised if this were
              he.”
            </TextNode>

            <TextNode>
              A heavy step was heard upon the stairs, and an instant later there
              entered a tall, ruddy, clean-shaven gentleman, whose clear eyes
              and florid cheeks told of a life led far from the fogs of Baker
              Street. He seemed to bring a whiff of his strong, fresh, bracing,
              east-coast air with him as he entered. Having shaken hands with
              each of us, he was about to sit down when his eye rested upon the
              paper with the curious markings, which I had just examined and
              left upon the table.
            </TextNode>

            <TextNode>
              “Well, Mr. Holmes, what do you make of these?” he cried. “They
              told me that you were fond of queer mysteries, and I don't think
              you can find a queerer one than that. I sent the paper on ahead so
              that you might have time to study it before I came.”
            </TextNode>

            <TextNode>
              “It is certainly rather a curious production,” said Holmes. “At
              first sight it would appear to be some childish prank. It consists
              of a number of absurd little figures dancing across the paper upon
              which they are drawn. Why should you attribute any importance to
              so grotesque an object?”
            </TextNode>

            <TextNode>
              “I never should, Mr. Holmes. But my wife does. It is frightening
              her to death. She says nothing, but I can see terror in her eyes.
              That's why I want to sift the matter to the bottom.”
            </TextNode>

            <TextNode>
              Holmes held up the paper so that the sunlight shone full upon it.
              It was a page torn from a note-book. The markings were done in
              pencil, and ran in this way:—
            </TextNode>

            <Image
              className='mx-auto  h-[4.75rem]  w-auto  max-2md:h-auto  dark:hidden'
              alt='dancing men'
              src={dancingMenLight1}
              quality={100}
            />
            <Image
              className='mx-auto  hidden  h-[4.75rem]  w-auto  max-2md:h-auto  dark:block'
              alt='dancing men'
              src={dancingMenDark1}
              quality={100}
            />

            <TextNode className='mt-2' noIndent>
              Holmes examined it for some time, and then, folding it carefully
              up, he placed it in his pocket-book.
            </TextNode>

            <TextNode>
              “This promises to be a most interesting and unusual case,” said
              he. “You gave me a few particulars in your letter, Mr. Hilton
              Cubitt, but I should be very much obliged if you would kindly go
              over it all again for the benefit of my friend, Dr. Watson.”
            </TextNode>

            <TextNode>
              “I'm not much of a story-teller,” said our visitor, nervously
              clasping and unclasping his great, strong hands. “You'll just ask
              me anything that I don't make clear. I'll begin at the time of my
              marriage last year; but I want to say first of all that, though
              I'm not a rich man, my people have been at Ridling Thorpe for a
              matter of five centuries, and there is no better known family in
              the County of Norfolk. Last year I came up to London for the
              Jubilee, and I stopped at a boarding-house in Russell Square,
              because Parker, the vicar of our parish, was staying in it. There
              was an American young lady there—Patrick was the name—Elsie
              Patrick. In some way we became friends, until before my month was
              up I was as much in love as a man could be. We were quietly
              married at a registry office, and we returned to Norfolk a wedded
              couple. You'll think it very mad, Mr. Holmes, that a man of a good
              old family should marry a wife in this fashion, knowing nothing of
              her past or of her people; but if you saw her and knew her it
              would help you to understand.
            </TextNode>

            <TextNode>
              “She was very straight about it, was Elsie. I can't say that she
              did not give me every chance of getting out of it if I wished to
              do so. ‘I have had some very disagreeable associations in my
              life,’ said she; ‘I wish to forget all about them. I would rather
              never allude to the past, for it is very painful to me. If you
              take me, Hilton, you will take a woman who has nothing that she
              need be personally ashamed of; but you will have to be content
              with my word for it, and to allow me to be silent as to all that
              passed up to the time when I became yours. If these conditions are
              too hard, then go back to Norfolk and leave me to the lonely life
              in which you found me.’ It was only the day before our wedding
              that she said those very words to me. I told her that I was
              content to take her on her own terms, and I have been as good as
              my word.
            </TextNode>

            <TextNode>
              “Well, we have been married now for a year, and very happy we have
              been. But about a month ago, at the end of June, I saw for the
              first time signs of trouble. One day my wife received a letter
              from America. I saw the American stamp. She turned deadly white,
              read the letter, and threw it into the fire. She made no allusion
              to it afterwards, and I made none, for a promise is a promise; but
              she has never known an easy hour from that moment. There is always
              a look of fear upon her face—a look as if she were waiting and
              expecting. She would do better to trust me. She would find that I
              was her best friend. But until she speaks I can say nothing. Mind
              you, she is a truthful woman, Mr. Holmes, and whatever trouble
              there may have been in her past life it has been no fault of hers.
              I am only a simple Norfolk squire, but there is not a man in
              England who ranks his family honour more highly than I do. She
              knows it well, and she knew it well before she married me. She
              would never bring any stain upon it—of that I am sure.
            </TextNode>

            <TextNode>
              “Well, now I come to the queer part of my story. About a week
              ago—it was the Tuesday of last week—I found on one of the
              window-sills a number of absurd little dancing figures, like these
              upon the paper. They were scrawled with chalk. I thought that it
              was the stable-boy who had drawn them, but the lad swore he knew
              nothing about it. Anyhow, they had come there during the night. I
              had them washed out, and I only mentioned the matter to my wife
              afterwards. To my surprise she took it very seriously, and begged
              me if any more came to let her see them. None did come for a week,
              and then yesterday morning I found this paper lying on the
              sun-dial in the garden. I showed it to Elsie, and down she dropped
              in a dead faint. Since then she has looked like a woman in a
              dream, half dazed, and with terror always lurking in her eyes. It
              was then that I wrote and sent the paper to you, Mr. Holmes. It
              was not a thing that I could take to the police, for they would
              have laughed at me, but you will tell me what to do. I am not a
              rich man; but if there is any danger threatening my little woman I
              would spend my last copper to shield her.”
            </TextNode>

            <TextNode>
              He was a fine creature, this man of the old English soil, simple,
              straight, and gentle, with his great, earnest blue eyes and broad,
              comely face. His love for his wife and his trust in her shone in
              his features. Holmes had listened to his story with the utmost
              attention, and now he sat for some time in silent thought.
            </TextNode>

            <TextNode>
              “Don't you think, Mr. Cubitt,” said he, at last, “that your best
              plan would be to make a direct appeal to your wife, and to ask her
              to share her secret with you?”
            </TextNode>

            <TextNode>Hilton Cubitt shook his massive head.</TextNode>

            <TextNode>
              “A promise is a promise, Mr. Holmes. If Elsie wished to tell me
              she would. If not, it is not for me to force her confidence. But I
              am justified in taking my own line—and I will.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Then I will help you with all my heart. In the first place, have
              you heard of any strangers being seen in your neighbourhood?”
            </TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>
              “I presume that it is a very quiet place. Any fresh face would
              cause comment?”
            </TextNode>

            <TextNode>
              “In the immediate neighbourhood, yes. But we have several small
              watering-places not very far away. And the farmers take in
              lodgers.”
            </TextNode>

            <TextNode>
              “These hieroglyphics have evidently a meaning. If it is a purely
              arbitrary one it may be impossible for us to solve it. If, on the
              other hand, it is systematic, I have no doubt that we shall get to
              the bottom of it. But this particular sample is so short that I
              can do nothing, and the facts which you have brought me are so
              indefinite that we have no basis for an investigation. I would
              suggest that you return to Norfolk, that you keep a keen look-out,
              and that you take an exact copy of any fresh dancing men which may
              appear. It is a thousand pities that we have not a reproduction of
              those which were done in chalk upon the window-sill. Make a
              discreet inquiry also as to any strangers in the neighbourhood.
              When you have collected some fresh evidence come to me again. That
              is the best advice which I can give you, Mr. Hilton Cubitt. If
              there are any pressing fresh developments I shall be always ready
              to run down and see you in your Norfolk home.”
            </TextNode>
            <TextNode>
              The interview left Sherlock Holmes very thoughtful, and several
              times in the next few days I saw him take his slip of paper from
              his note-book and look long and earnestly at the curious figures
              inscribed upon it. He made no allusion to the affair, however,
              until one afternoon a fortnight or so later. I was going out when
              he called me back.
            </TextNode>

            <TextNode>“You had better stay here, Watson.”</TextNode>

            <TextNode>“Why?”</TextNode>

            <TextNode>
              “Because I had a wire from Hilton Cubitt this morning—you remember
              Hilton Cubitt, of the dancing men? He was to reach Liverpool
              Street at one-twenty. He may be here at any moment. I gather from
              his wire that there have been some new incidents of importance.”
            </TextNode>

            <TextNode>
              We had not long to wait, for our Norfolk squire came straight from
              the station as fast as a hansom could bring him. He was looking
              worried and depressed, with tired eyes and a lined forehead.
            </TextNode>

            <TextNode>
              “It's getting on my nerves, this business, Mr. Holmes,” said he,
              as he sank, like a wearied man, into an arm-chair. “It's bad
              enough to feel that you are surrounded by unseen, unknown folk,
              who have some kind of design upon you; but when, in addition to
              that, you know that it is just killing your wife by inches, then
              it becomes as much as flesh and blood can endure. She's wearing
              away under it—just wearing away before my eyes.”
            </TextNode>

            <TextNode>“Has she said anything yet?”</TextNode>

            <TextNode>
              “No, Mr. Holmes, she has not. And yet there have been times when
              the poor girl has wanted to speak, and yet could not quite bring
              herself to take the plunge. I have tried to help her; but I dare
              say I did it clumsily, and scared her off from it. She has spoken
              about my old family, and our reputation in the county, and our
              pride in our unsullied honour, and I always felt it was leading to
              the point; but somehow it turned off before we got there.”
            </TextNode>

            <TextNode>
              “But you have found out something for yourself?”
            </TextNode>

            <TextNode>
              “A good deal, Mr. Holmes. I have several fresh dancing men
              pictures for you to examine, and, what is more important, I have
              seen the fellow.”
            </TextNode>

            <TextNode>“What, the man who draws them?”</TextNode>

            <TextNode>
              “Yes, I saw him at his work. But I will tell you everything in
              order. When I got back after my visit to you, the very first thing
              I saw next morning was a fresh crop of dancing men. They had been
              drawn in chalk upon the black wooden door of the tool-house, which
              stands beside the lawn in full view of the front windows. I took
              an exact copy, and here it is.” He unfolded a paper and laid it
              upon the table. Here is a copy of the hieroglyphics:—
            </TextNode>

            <Image
              className='mx-auto  h-[4.75rem]  w-auto  max-2md:h-auto  dark:hidden'
              alt='dancing men'
              src={dancingMenLight2}
              quality={100}
            />
            <Image
              className='mx-auto  hidden  h-[4.75rem]  w-auto  max-2md:h-auto  dark:block'
              alt='dancing men'
              src={dancingMenDark2}
              quality={100}
            />

            <TextNode className='mt-2' noIndent>
              “Excellent!” said Holmes. “Excellent! Pray continue.”
            </TextNode>

            <TextNode>
              “When I had taken the copy I rubbed out the marks; but two
              mornings later a fresh inscription had appeared. I have a copy of
              it here”:—
            </TextNode>

            <Image
              className='mx-auto  h-[4.75rem]  w-auto  max-2md:h-auto  dark:hidden'
              alt='dancing men'
              src={dancingMenLight3}
              quality={100}
            />
            <Image
              className='mx-auto  hidden  h-[4.75rem]  w-auto  max-2md:h-auto  dark:block'
              alt='dancing men'
              src={dancingMenDark3}
              quality={100}
            />

            <TextNode className='mt-2' noIndent>
              Holmes rubbed his hands and chuckled with delight.
            </TextNode>

            <TextNode>
              “Our material is rapidly accumulating,” said he.
            </TextNode>

            <TextNode>
              “Three days later a message was left scrawled upon paper, and
              placed under a pebble upon the sun-dial. Here it is. The
              characters are, as you see, exactly the same as the last one.
              After that I determined to lie in wait; so I got out my revolver
              and I sat up in my study, which overlooks the lawn and garden.
              About two in the morning I was seated by the window, all being
              dark save for the moonlight outside, when I heard steps behind me,
              and there was my wife in her dressing-gown. She implored me to
              come to bed. I told her frankly that I wished to see who it was
              who played such absurd tricks upon us. She answered that it was
              some senseless practical joke, and that I should not take any
              notice of it.
            </TextNode>

            <TextNode>
              “ ‘If it really annoys you, Hilton, we might go and travel, you
              and I, and so avoid this nuisance.’
            </TextNode>

            <TextNode>
              “ ‘What, be driven out of our own house by a practical joker?’
              said I. ‘Why, we should have the whole county laughing at us.’
            </TextNode>

            <TextNode>
              “ ‘Well, come to bed,’ said she, ‘and we can discuss it in the
              morning.’
            </TextNode>

            <TextNode>
              “Suddenly, as she spoke, I saw her white face grow whiter yet in
              the moonlight, and her hand tightened upon my shoulder. Something
              was moving in the shadow of the tool-house. I saw a dark, creeping
              figure which crawled round the corner and squatted in front of the
              door. Seizing my pistol I was rushing out, when my wife threw her
              arms round me and held me with convulsive strength. I tried to
              throw her off, but she clung to me most desperately. At last I got
              clear, but by the time I had opened the door and reached the house
              the creature was gone. He had left a trace of his presence,
              however, for there on the door was the very same arrangement of
              dancing men which had already twice appeared, and which I have
              copied on that paper. There was no other sign of the fellow
              anywhere, though I ran all over the grounds. And yet the amazing
              thing is that he must have been there all the time, for when I
              examined the door again in the morning he had scrawled some more
              of his pictures under the line which I had already seen.”
            </TextNode>

            <TextNode>“Have you that fresh drawing?”</TextNode>

            <TextNode>
              “Yes; it is very short, but I made a copy of it, and here it is.”
            </TextNode>

            <TextNode>
              Again he produced a paper. The new dance was in this form:—
            </TextNode>

            <Image
              className='mx-auto  h-[4.75rem]  w-auto  max-2md:h-auto  dark:hidden'
              alt='dancing men'
              src={dancingMenLight4}
              quality={100}
            />
            <Image
              className='mx-auto  hidden  h-[4.75rem]  w-auto  max-2md:h-auto  dark:block'
              alt='dancing men'
              src={dancingMenDark4}
              quality={100}
            />

            <TextNode className='mt-2' noIndent>
              “Tell me,” said Holmes—and I could see by his eyes that he was
              much excited—“was this a mere addition to the first, or did it
              appear to be entirely separate?”
            </TextNode>

            <TextNode>“It was on a different panel of the door.”</TextNode>

            <TextNode>
              “Excellent! This is far the most important of all for our purpose.
              It fills me with hopes. Now, Mr. Hilton Cubitt, please continue
              your most interesting statement.”
            </TextNode>

            <TextNode>
              “I have nothing more to say, Mr. Holmes, except that I was angry
              with my wife that night for having held me back when I might have
              caught the skulking rascal. She said that she feared that I might
              come to harm. For an instant it had crossed my mind that perhaps
              what she really feared was that he might come to harm, for I could
              not doubt that she knew who this man was and what he meant by
              these strange signals. But there is a tone in my wife's voice, Mr.
              Holmes, and a look in her eyes which forbid doubt, and I am sure
              that it was indeed my own safety that was in her mind. There's the
              whole case, and now I want your advice as to what I ought to do.
              My own inclination is to put half-a-dozen of my farm lads in the
              shrubbery, and when this fellow comes again to give him such a
              hiding that he will leave us in peace for the future.”
            </TextNode>

            <TextNode>
              “I fear it is too deep a case for such simple remedies,” said
              Holmes. “How long can you stay in London?”
            </TextNode>

            <TextNode>
              “I must go back to-day. I would not leave my wife alone all night
              for anything. She is very nervous and begged me to come back.”
            </TextNode>

            <TextNode>
              “I dare say you are right. But if you could have stopped I might
              possibly have been able to return with you in a day or two.
              Meanwhile you will leave me these papers, and I think that it is
              very likely that I shall be able to pay you a visit shortly and to
              throw some light upon your case.”
            </TextNode>

            <TextNode>
              Sherlock Holmes preserved his calm professional manner until our
              visitor had left us, although it was easy for me, who knew him so
              well, to see that he was profoundly excited. The moment that
              Hilton Cubitt's broad back had disappeared through the door my
              comrade rushed to the table, laid out all the slips of paper
              containing dancing men in front of him, and threw himself into an
              intricate and elaborate calculation. For two hours I watched him
              as he covered sheet after sheet of paper with figures and letters,
              so completely absorbed in his task that he had evidently forgotten
              my presence. Sometimes he was making progress and whistled and
              sang at his work; sometimes he was puzzled, and would sit for long
              spells with a furrowed brow and a vacant eye. Finally he sprang
              from his chair with a cry of satisfaction, and walked up and down
              the room rubbing his hands together. Then he wrote a long telegram
              upon a cable form. “If my answer to this is as I hope, you will
              have a very pretty case to add to your collection, Watson,” said
              he. “I expect that we shall be able to go down to Norfolk
              to-morrow, and to take our friend some very definite news as to
              the secret of his annoyance.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page177;

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

function Page312({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE BLANCHED SOLDIER'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“Did you make any local inquiries?”</TextNode>

            <TextNode>
              “Yes, I did. I spoke to the station-master and also to the
              innkeeper in the village. I simply asked if they knew anything of
              my old comrade, Godfrey Emsworth. Both of them assured me that he
              had gone for a voyage round the world. He had come home and then
              had almost at once started off again. The story was evidently
              universally accepted.”
            </TextNode>

            <TextNode>“You said nothing of your suspicions?”</TextNode>

            <TextNode>“Nothing.”</TextNode>

            <TextNode>
              “That was very wise. The matter should certainly be inquired into.
              I will go back with you to Tuxbury Old Park.”
            </TextNode>

            <TextNode>“To-day?”</TextNode>

            <TextNode>
              It happened that at the moment I was clearing up the case which my
              friend Watson has described as that of the Abbey School, in which
              the Duke of Greyminster was so deeply involved. I had also a
              commission from the Sultan of Turkey which called for immediate
              action, as political consequences of the gravest kind might arise
              from its neglect. Therefore it was not until the beginning of the
              next week, as my diary records, that I was able to start forth on
              my mission to Bedfordshire in company with Mr. James M. Dodd. As
              we drove to Euston we picked up a grave and taciturn gentleman of
              iron-gray aspect, with whom I had made the necessary arrangements.
            </TextNode>

            <TextNode>
              “This is an old friend,” said I to Dodd. “It is possible that his
              presence may be entirely unnecessary, and, on the other hand, it
              may be essential. It is not necessary at the present stage to go
              further into the matter.”
            </TextNode>

            <TextNode>
              The narratives of Watson have accustomed the reader, no doubt, to
              the fact that I do not waste words or disclose my thoughts while a
              case is actually under consideration. Dodd seemed surprised, but
              nothing more was said, and the three of us continued our journey
              together. In the train I asked Dodd one more question which I
              wished our companion to hear.
            </TextNode>

            <TextNode>
              “You say that you saw your friend's face quite clearly at the
              window, so clearly that you are sure of his identity?”
            </TextNode>

            <TextNode>
              “I have no doubt about it whatever. His nose was pressed against
              the glass. The lamplight shone full upon him.”
            </TextNode>

            <TextNode>
              “It could not have been someone resembling him?”
            </TextNode>

            <TextNode>“No, no, it was he.”</TextNode>

            <TextNode>“But you say he was changed?”</TextNode>

            <TextNode>
              “Only in colour. His face was—how shall I describe it?—it was of a
              fish-belly whiteness. It was bleached.”
            </TextNode>

            <TextNode>“Was it equally pale all over?”</TextNode>

            <TextNode>
              “I think not. It was his brow which I saw so clearly as it was
              pressed against the window.”
            </TextNode>

            <TextNode>“Did you call to him?”</TextNode>

            <TextNode>
              “I was too startled and horrified for the moment. Then I pursued
              him, as I have told you, but without result.”
            </TextNode>

            <TextNode>
              My case was practically complete, and there was only one small
              incident needed to round it off. When, after a considerable drive,
              we arrived at the strange old rambling house which my client had
              described, it was Ralph, the elderly butler, who opened the door.
              I had requisitioned the carriage for the day and had asked my
              elderly friend to remain within it unless we should summon him.
              Ralph, a little wrinkled old fellow, was in the conventional
              costume of black coat and pepper-and-salt trousers, with only one
              curious variant. He wore brown leather gloves, which at sight of
              us he instantly shuffled off, laying them down on the hall-table
              as we passed in. I have, as my friend Watson may have remarked, an
              abnormally acute set of senses, and a faint but incisive scent was
              apparent. It seemed to centre on the hall-table. I turned, placed
              my hat there, knocked it off, stooped to pick it up, and contrived
              to bring my nose within a foot of the gloves. Yes, it was
              undoubtedly from them that the curious tarry odour was oozing. I
              passed on into the study with my case complete. Alas, that I
              should have to show my hand so when I tell my own story! It was by
              concealing such links in the chain that Watson was enabled to
              produce his meretricious finales.
            </TextNode>

            <TextNode>
              Colonel Emsworth was not in his room, but he came quickly enough
              on receipt of Ralph's message. We heard his quick, heavy step in
              the passage. The door was flung open and he rushed in with
              bristling beard and twisted features, as terrible an old man as
              ever I have seen. He held our cards in his hand, and he tore them
              up and stamped on the fragments.
            </TextNode>

            <TextNode>
              “Have I not told you, you infernal busybody, that you are warned
              off the premises? Never dare to show your damned face here again.
              If you enter again without my leave I shall be within my rights if
              I use violence. I'll shoot you, sir! By God, I will! As to you,
              sir,” turning upon me, “I extend the same warning to you. I am
              familiar with your ignoble profession, but you must take your
              reputed talents to some other field. There is no opening for them
              here.”
            </TextNode>

            <TextNode>
              “I cannot leave here,” said my client firmly, “until I hear from
              Godfrey's own lips that he is under no restraint.”
            </TextNode>

            <TextNode>Our involuntary host rang the bell.</TextNode>

            <TextNode>
              “Ralph,” he said, “telephone down to the county police and ask the
              inspector to send up two constables. Tell him there are burglars
              in the house.”
            </TextNode>

            <TextNode>
              “One moment,” said I. “You must be aware, Mr. Dodd, that Colonel
              Emsworth is within his rights and that we have no legal status
              within his house. On the other hand, he should recognize that your
              action is prompted entirely by solicitude for his son. I venture
              to hope that if I were allowed to have five minutes’ conversation
              with Colonel Emsworth I could certainly alter his view of the
              matter.”
            </TextNode>

            <TextNode>
              “I am not so easily altered,” said the old soldier. “Ralph, do
              what I have told you. What the devil are you waiting for? Ring up
              the police!”
            </TextNode>

            <TextNode>
              “Nothing of the sort,” I said, putting my back to the door. “Any
              police interference would bring about the very catastrophe which
              you dread.” I took out my notebook and scribbled one word upon a
              loose sheet. “That,” said I as I handed it to Colonel Emsworth,
              “is what has brought us here.”
            </TextNode>

            <TextNode>
              He stared at the writing with a face from which every expression
              save amazement had vanished.
            </TextNode>

            <TextNode>
              “How do you know?” he gasped, sitting down heavily in his chair.
            </TextNode>

            <TextNode>
              “It is my business to know things. That is my trade.”
            </TextNode>

            <TextNode>
              He sat in deep thought, his gaunt hand tugging at his straggling
              beard. Then he made a gesture of resignation.
            </TextNode>

            <TextNode>
              “Well, if you wish to see Godfrey, you shall. It is no doing of
              mine, but you have forced my hand. Ralph, tell Mr. Godfrey and Mr.
              Kent that in five minutes we shall be with them.”
            </TextNode>

            <TextNode>
              At the end of that time we passed down the garden path and found
              ourselves in front of the mystery house at the end. A small
              bearded man stood at the door with a look of considerable
              astonishment upon his face.
            </TextNode>

            <TextNode>
              “This is very sudden, Colonel Emsworth,” said he. “This will
              disarrange all our plans.”
            </TextNode>

            <TextNode>
              “I can't help it, Mr. Kent. Our hands have been forced. Can Mr.
              Godfrey see us?”
            </TextNode>

            <TextNode>
              “Yes, he is waiting inside.” He turned and led us into a large,
              plainly furnished front room. A man was standing with his back to
              the fire, and at the sight of him my client sprang forward with
              outstretched hand.
            </TextNode>

            <TextNode>“Why, Godfrey, old man, this is fine!”</TextNode>

            <TextNode>But the other waved him back.</TextNode>

            <TextNode>
              “Don't touch me, Jimmie. Keep your distance. Yes, you may well
              stare! I don't quite look the smart Lance-Corporal Emsworth, of B
              Squadron, do I?”
            </TextNode>

            <TextNode>
              His appearance was certainly extraordinary. One could see that he
              had indeed been a handsome man with clear-cut features sunburned
              by an African sun, but mottled in patches over this darker surface
              were curious whitish patches which had bleached his skin.
            </TextNode>

            <TextNode>
              “That's why I don't court visitors,” said he. “I don't mind you,
              Jimmie, but I could have done without your friend. I suppose there
              is some good reason for it, but you have me at a disadvantage.”
            </TextNode>

            <TextNode>
              “I wanted to be sure that all was well with you, Godfrey. I saw
              you that night when you looked into my window, and I could not let
              the matter rest till I had cleared things up.”
            </TextNode>

            <TextNode>
              “Old Ralph told me you were there, and I couldn't help taking a
              peep at you. I hoped you would not have seen me, and I had to run
              to my burrow when I heard the window go up.”
            </TextNode>

            <TextNode>“But what in heaven's name is the matter?”</TextNode>

            <TextNode>
              “Well, it's not a long story to tell,” said he, lighting a
              cigarette. “You remember that morning fight at Buffelsspruit,
              outside Pretoria, on the Eastern railway line? You heard I was
              hit?”
            </TextNode>

            <TextNode>
              “Yes, I heard that, but I never got particulars.”
            </TextNode>

            <TextNode>
              “Three of us got separated from the others. It was very broken
              country, you may remember. There was Simpson—the fellow we called
              Baldy Simpson— and Anderson, and I. We were clearing brother Boer,
              but he lay low and got the three of us. The other two were killed.
              I got an elephant bullet through my shoulder. I stuck on to my
              horse, however, and he galloped several miles before I fainted and
              rolled off the saddle.
            </TextNode>

            <TextNode>
              “When I came to myself it was nightfall, and I raised myself up,
              feeling very weak and ill. To my surprise there was a house close
              beside me, a fairly large house with a broad stoep and many
              windows. It was deadly cold. You remember the kind of numb cold
              which used to come at evening, a deadly, sickening sort of cold,
              very different from a crisp healthy frost. Well, I was chilled to
              the bone, and my only hope seemed to lie in reaching that house. I
              staggered to my feet and dragged myself along, hardly conscious of
              what I did. I have a dim memory of slowly ascending the steps,
              entering a wide-opened door, passing into a large room which
              contained several beds, and throwing myself down with a gasp of
              satisfaction upon one of them. It was unmade, but that troubled me
              not at all. I drew the clothes over my shivering body and in a
              moment I was in a deep sleep.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “It was morning when I wakened, and it seemed to me that instead
              of coming out into a world of sanity I had emerged into some
              extraordinary nightmare. The African sun flooded through the big,
              curtainless windows, and every detail of the great, bare,
              whitewashed dormitory stood out hard and clear. In front of me was
              standing a small, dwarf-like man with a huge, bulbous head, who
              was jabbering excitedly in Dutch, waving two horrible hands which
              looked to me like brown sponges. Behind him stood a group of
              people who seemed to be intensely amused by the situation, but a
              chill came over me as I looked at them. Not one of them was a
              normal human being. Every one was twisted or swollen or disfigured
              in some strange way. The laughter of these strange monstrosities
              was a dreadful thing to hear.
            </TextNode>

            <TextNode>
              “It seemed that none of them could speak English, but the
              situation wanted clearing up, for the creature with the big head
              was growing furiously angry, and, uttering wild-beast cries, he
              had laid his deformed hands upon me and was dragging me out of
              bed, regardless of the fresh flow of blood from my wound. The
              little monster was as strong as a bull, and I don't know what he
              might have done to me had not an elderly man who was clearly in
              authority been attracted to the room by the hubbub. He said a few
              stern words in Dutch, and my persecutor shrank away. Then he
              turned upon me, gazing at me in the utmost amazement.
            </TextNode>

            <TextNode>
              “ ‘How in the world did you come here?’ he asked in amazement.
              ‘Wait a bit! I see that you are tired out and that wounded
              shoulder of yours wants looking after. I am a doctor, and I'll
              soon have you tied up. But, man alive! you are in far greater
              danger here than ever you were on the battlefield. You are in the
              Leper Hospital, and you have slept in a leper's bed.’
            </TextNode>

            <TextNode>
              “Need I tell you more, Jimmie? It seems that in view of the
              approaching battle all these poor creatures had been evacuated the
              day before. Then, as the British advanced, they had been brought
              back by this, their medical superintendent, who assured me that,
              though he believed he was immune to the disease, he would none the
              less never have dared to do what I had done. He put me in a
              private room, treated me kindly, and within a week or so I was
              removed to the general hospital at Pretoria.
            </TextNode>
            <TextNode>
              “So there you have my tragedy. I hoped against hope, but it was
              not until I had reached home that the terrible signs which you see
              upon my face told me that I had not escaped. What was I to do? I
              was in this lonely house. We had two servants whom we could
              utterly trust. There was a house where I could live. Under pledge
              of secrecy, Mr. Kent, who is a surgeon, was prepared to stay with
              me. It seemed simple enough on those lines. The alternative was a
              dreadful one—segregation for life among strangers with never a
              hope of release. But absolute secrecy was necessary, or even in
              this quiet countryside there would have been an outcry, and I
              should have been dragged to my horrible doom. Even you,
              Jimmie—even you had to be kept in the dark. Why my father has
              relented I cannot imagine.”
            </TextNode>

            <TextNode>Colonel Emsworth pointed to me.</TextNode>

            <TextNode>
              “This is the gentleman who forced my hand.” He unfolded the scrap
              of paper on which I had written the word “Leprosy.” “It seemed to
              me that if he knew so much as that it was safer that he should
              know all.”
            </TextNode>

            <TextNode>
              “And so it was,” said I. “Who knows but good may come of it? I
              understand that only Mr. Kent has seen the patient. May I ask,
              sir, if you are an authority on such complaints, which are, I
              understand, tropical or semi-tropical in their nature?”
            </TextNode>

            <TextNode>
              “I have the ordinary knowledge of the educated medical man,” he
              observed with some stiffness.
            </TextNode>

            <TextNode>
              “I have no doubt, sir, that you are fully competent, but I am sure
              that you will agree that in such a case a second opinion is
              valuable. You have avoided this, I understand, for fear that
              pressure should be put upon you to segregate the patient.”
            </TextNode>

            <TextNode>“That is so,” said Colonel Emsworth.</TextNode>

            <TextNode>
              “I foresaw this situation,” I explained, “and I have brought with
              me a friend whose discretion may absolutely be trusted. I was able
              once to do him a professional service, and he is ready to advise
              as a friend rather than as a specialist. His name is Sir James
              Saunders.”
            </TextNode>

            <TextNode>
              The prospect of an interview with Lord Roberts would not have
              excited greater wonder and pleasure in a raw subaltern than was
              now reflected upon the face of Mr. Kent.
            </TextNode>

            <TextNode>“I shall indeed be proud,” he murmured.</TextNode>

            <TextNode>
              “Then I will ask Sir James to step this way. He is at present in
              the carriage outside the door. Meanwhile, Colonel Emsworth, we may
              perhaps assemble in your study, where I could give the necessary
              explanations.”
            </TextNode>

            <TextNode>
              And here it is that I miss my Watson. By cunning questions and
              ejaculations of wonder he could elevate my simple art, which is
              but systematized common sense, into a prodigy. When I tell my own
              story I have no such aid. And yet I will give my process of
              thought even as I gave it to my small audience, which included
              Godfrey's mother in the study of Colonel Emsworth.
            </TextNode>

            <TextNode>
              “That process,” said I, “starts upon the supposition that when you
              have eliminated all which is impossible, then whatever remains,
              however improbable, must be the truth. It may well be that several
              explanations remain, in which case one tries test after test until
              one or other of them has a convincing amount of support. We will
              now apply this principle to the case in point. As it was first
              presented to me, there were three possible explanations of the
              seclusion or incarceration of this gentleman in an outhouse of his
              father's mansion. There was the explanation that he was in hiding
              for a crime, or that he was mad and that they wished to avoid an
              asylum, or that he had some disease which caused his segregation.
              I could think of no other adequate solutions. These, then, had to
              be sifted and balanced against each other.
            </TextNode>

            <TextNode>
              “The criminal solution would not bear inspection. No unsolved
              crime had been reported from that district. I was sure of that. If
              it were some crime not yet discovered, then clearly it would be to
              the interest of the family to get rid of the delinquent and send
              him abroad rather than keep him concealed at home. I could see no
              explanation for such a line of conduct.
            </TextNode>

            <TextNode>
              “Insanity was more plausible. The presence of the second person in
              the outhouse suggested a keeper. The fact that he locked the door
              when he came out strengthened the supposition and gave the idea of
              constraint. On the other hand, this constraint could not be severe
              or the young man could not have got loose and come down to have a
              look at his friend. You will remember, Mr. Dodd, that I felt round
              for points, asking you, for example, about the paper which Mr.
              Kent was reading. Had it been the Lancet or{' '}
              <span className='italic'>The British Medical Journal</span> it
              would have helped me. It is not illegal, however, to keep a
              lunatic upon private premises so long as there is a qualified
              person in attendance and that the authorities have been duly
              notified. Why, then, all this desperate desire for secrecy? Once
              again I could not get the theory to fit the facts.
            </TextNode>

            <TextNode>
              “There remained the third possibility, into which, rare and
              unlikely as it was, everything seemed to fit. Leprosy is not
              uncommon in South Africa. By some extraordinary chance this youth
              might have contracted it. His people would be placed in a very
              dreadful position, since they would desire to save him from
              segregation. Great secrecy would be needed to prevent rumours from
              getting about and subsequent interference by the authorities. A
              devoted medical man, if sufficiently paid, would easily be found
              to take charge of the sufferer. There would be no reason why the
              latter should not be allowed freedom after dark. Bleaching of the
              skin is a common result of the disease. The case was a strong
              one—so strong that I determined to act as if it were actually
              proved. When on arriving here I noticed that Ralph, who carries
              out the meals, had gloves which are impregnated with
              disinfectants, my last doubts were removed. A single word showed
              you, sir, that your secret was discovered, and if I wrote rather
              than said it, it was to prove to you that my discretion was to be
              trusted.”
            </TextNode>

            <TextNode>
              I was finishing this little analysis of the case when the door was
              opened and the austere figure of the great dermatologist was
              ushered in. But for once his sphinx-like features had relaxed and
              there was a warm humanity in his eyes. He strode up to Colonel
              Emsworth and shook him by the hand.
            </TextNode>

            <TextNode>
              “It is often my lot to bring ill-tidings and seldom good,” said
              he. “This occasion is the more welcome. It is not leprosy.”
            </TextNode>

            <TextNode>“What?”</TextNode>

            <TextNode>
              “A well-marked case of pseudo-leprosy or ichthyosis, a scale-like
              affection of the skin, unsightly, obstinate, but possibly curable,
              and certainly noninfective. Yes, Mr. Holmes, the coincidence is a
              remarkable one. But is it coincidence? Are there not subtle forces
              at work of which we know little? Are we assured that the
              apprehension from which this young man has no doubt suffered
              terribly since his exposure to its contagion may not produce a
              physical effect which simulates that which it fears? At any rate,
              I pledge my professional reputation— But the lady has fainted! I
              think that Mr. Kent had better be with her until she recovers from
              this joyous shock.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page312;

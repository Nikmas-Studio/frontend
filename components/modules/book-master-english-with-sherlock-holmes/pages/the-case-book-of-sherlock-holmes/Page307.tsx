import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
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

function Page307({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE ILLUSTRIOUS CLIENT'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “It can't hurt now,” was Mr. Sherlock Holmes's comment when, for
              the tenth time in as many years, I asked his leave to reveal the
              following narrative. So it was that at last I obtained permission
              to put on record what was, in some ways, the supreme moment of my
              friend's career.
            </TextNode>

            <TextNode>
              Both Holmes and I had a weakness for the Turkish bath. It was over
              a smoke in the pleasant lassitude of the drying-room that I have
              found him less reticent and more human than anywhere else. On the
              upper floor of the Northumberland Avenue establishment there is an
              isolated corner where two couches lie side by side, and it was on
              these that we lay upon September 3, 1902, the day when my
              narrative begins. I had asked him whether anything was stirring,
              and for answer he had shot his long, thin, nervous arm out of the
              sheets which enveloped him and had drawn an envelope from the
              inside pocket of the coat which hung beside him.
            </TextNode>

            <TextNode>
              “It may be some fussy, self-important fool; it may be a matter of
              life or death,” said he as he handed me the note. “I know no more
              than this message tells me.”
            </TextNode>

            <TextNode>
              It was from the Carlton Club and dated the evening before. This is
              what I read:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                Sir James Damery presents his compliments to Mr. Sherlock Holmes
                and will call upon him at 4.30 to-morrow. Sir James begs to say
                that the matter upon which he desires to consult Mr. Holmes is
                very delicate and also very important. He trusts, therefore,
                that Mr. Holmes will make every effort to grant this interview,
                and that he will confirm it over the telephone to the Carlton
                Club.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “I need not say that I have confirmed it, Watson,” said Holmes as
              I returned the paper. “Do you know anything of this man Damery?”
            </TextNode>

            <TextNode>
              “Only that this name is a household word in society.”
            </TextNode>

            <TextNode>
              “Well, I can tell you a little more than that. He has rather a
              reputation for arranging delicate matters which are to be kept out
              of the papers. You may remember his negotiations with Sir George
              Lewis over the Hammerford Will case. He is a man of the world with
              a natural turn for diplomacy. I am bound, therefore, to hope that
              it is not a false scent and that he has some real need for our
              assistance.”
            </TextNode>

            <TextNode>“Our?”</TextNode>

            <TextNode>“Well, if you will be so good, Watson.”</TextNode>

            <TextNode>“I shall be honoured.”</TextNode>

            <TextNode>
              “Then you have the hour—4.30. Until then we can put the matter out
              of our heads.”
            </TextNode>

            <TextNode>
              I was living in my own rooms in Queen Anne Street at the time, but
              I was round at Baker Street before the time named. Sharp to the
              half-hour, Colonel Sir James Damery was announced. It is hardly
              necessary to describe him, for many will remember that large,
              bluff, honest personality, that broad, clean-shaven face, and,
              above all, that pleasant, mellow voice. Frankness shone from his
              gray Irish eyes, and good humour played round his mobile, smiling
              lips. His lucent top-hat, his dark frock-coat, indeed, every
              detail, from the pearl pin in the black satin cravat to the
              lavender spats over the varnished shoes, spoke of the meticulous
              care in dress for which he was famous. The big, masterful
              aristocrat dominated the little room.
            </TextNode>

            <TextNode>
              “Of course, I was prepared to find Dr. Watson,” he remarked with a
              courteous bow. “His collaboration may be very necessary, for we
              are dealing on this occasion, Mr. Holmes, with a man to whom
              violence is familiar and who will, literally, stick at nothing. I
              should say that there is no more dangerous man in Europe.”
            </TextNode>

            <TextNode>
              “I have had several opponents to whom that flattering term has
              been applied,” said Holmes with a smile. “Don't you smoke? Then
              you will excuse me if I light my pipe. If your man is more
              dangerous than the late Professor Moriarty, or than the living
              Colonel Sebastian Moran, then he is indeed worth meeting. May I
              ask his name?”
            </TextNode>

            <TextNode>“Have you ever heard of Baron Gruner?”</TextNode>

            <TextNode>“You mean the Austrian murderer?”</TextNode>

            <TextNode>
              Colonel Damery threw up his kid-gloved hands with a laugh. “There
              is no getting past you, Mr. Holmes! Wonderful! So you have already
              sized him up as a murderer?”
            </TextNode>

            <TextNode>
              “It is my business to follow the details of Continental crime. Who
              could possibly have read what happened at Prague and have any
              doubts as to the man's guilt! It was a purely technical legal
              point and the suspicious death of a witness that saved him! I am
              as sure that he killed his wife when the so-called ‘accident’
              happened in the Splugen Pass as if I had seen him do it. I knew,
              also, that he had come to England and had a presentiment that
              sooner or later he would find me some work to do. Well, what has
              Baron Gruner been up to? I presume it is not this old tragedy
              which has come up again?”
            </TextNode>

            <TextNode>
              “No, it is more serious than that. To revenge crime is important,
              but to prevent it is more so. It is a terrible thing, Mr. Holmes,
              to see a dreadful event, an atrocious situation, preparing itself
              before your eyes, to clearly understand whither it will lead and
              yet to be utterly unable to avert it. Can a human being be placed
              in a more trying position?”
            </TextNode>

            <TextNode>“Perhaps not.”</TextNode>

            <TextNode>
              “Then you will sympathize with the client in whose interests I am
              acting.”
            </TextNode>

            <TextNode>
              “I did not understand that you were merely an intermediary. Who is
              the principal?”
            </TextNode>

            <TextNode>
              “Mr. Holmes, I must beg you not to press that question. It is
              important that I should be able to assure him that his honoured
              name has been in no way dragged into the matter. His motives are,
              to the last degree, honourable and chivalrous, but he prefers to
              remain unknown. I need not say that your fees will be assured and
              that you will be given a perfectly free hand. Surely the actual
              name of your client is immaterial?”
            </TextNode>

            <TextNode>
              “I am sorry,” said Holmes. “I am accustomed to have mystery at one
              end of my cases, but to have it at both ends is too confusing. I
              fear, Sir James, that I must decline to act.”
            </TextNode>

            <TextNode>
              Our visitor was greatly disturbed. His large, sensitive face was
              darkened with emotion and disappointment.
            </TextNode>

            <TextNode>
              “You hardly realize the effect of your own action, Mr. Holmes,”
              said he. “You place me in a most serious dilemma, for I am
              perfectly certain that you would be proud to take over the case if
              I could give you the facts, and yet a promise forbids me from
              revealing them all. May I, at least, lay all that I can before
              you?”
            </TextNode>

            <TextNode>
              “By all means, so long as it is understood that I commit myself to
              nothing.”
            </TextNode>

            <TextNode>
              “That is understood. In the first place, you have no doubt heard
              of General de Merville?”
            </TextNode>

            <TextNode>
              “De Merville of Khyber fame? Yes, I have heard of him.”
            </TextNode>

            <TextNode>
              “He has a daughter, Violet de Merville, young, rich, beautiful,
              accomplished, a wonder-woman in every way. It is this daughter,
              this lovely, innocent girl, whom we are endeavouring to save from
              the clutches of a fiend.”
            </TextNode>

            <TextNode>“Baron Gruner has some hold over her, then?”</TextNode>

            <TextNode>
              “The strongest of all holds where a woman is concerned—the hold of
              love. The fellow is, as you may have heard, extraordinarily
              handsome, with a most fascinating manner, a gentle voice, and that
              air of romance and mystery which means so much to a woman. He is
              said to have the whole sex at his mercy and to have made ample use
              of the fact.”
            </TextNode>

            <TextNode>
              “But how came such a man to meet a lady of the standing of Miss
              Violet de Merville?”
            </TextNode>

            <TextNode>
              “It was on a Mediterranean yachting voyage. The company, though
              select, paid their own passages. No doubt the promoters hardly
              realized the Baron's true character until it was too late. The
              villain attached himself to the lady, and with such effect that he
              has completely and absolutely won her heart. To say that she loves
              him hardly expresses it. She dotes upon him; she is obsessed by
              him. Outside of him there is nothing on earth. She will not hear
              one word against him. Everything has been done to cure her of her
              madness, but in vain. To sum up, she proposes to marry him next
              month. As she is of age and has a will of iron, it is hard to know
              how to prevent her.”
            </TextNode>

            <TextNode>“Does she know about the Austrian episode?”</TextNode>

            <TextNode>
              “The cunning devil has told her every unsavoury public scandal of
              his past life, but always in such a way as to make himself out to
              be an innocent martyr. She absolutely accepts his version and will
              listen to no other.”
            </TextNode>

            <TextNode>
              “Dear me! But surely you have inadvertently let out the name of
              your client? It is no doubt General de Merville.”
            </TextNode>

            <TextNode>Our visitor fidgeted in his chair.</TextNode>

            <TextNode>
              “I could deceive you by saying so, Mr. Holmes, but it would not be
              true. De Merville is a broken man. The strong soldier has been
              utterly demoralized by this incident. He has lost the nerve which
              never failed him on the battlefield and has become a weak,
              doddering old man, utterly incapable of contending with a
              brilliant, forceful rascal like this Austrian. My client, however,
              is an old friend, one who has known the General intimately for
              many years and taken a paternal interest in this young girl since
              she wore short frocks. He cannot see this tragedy consummated
              without some attempt to stop it. There is nothing in which
              Scotland Yard can act. It was his own suggestion that you should
              be called in, but it was, as I have said, on the express
              stipulation that he should not be personally involved in the
              matter. I have no doubt, Mr. Holmes, with your great powers you
              could easily trace my client back through me, but I must ask you,
              as a point of honour, to refrain from doing so, and not to break
              in upon his incognito.”
            </TextNode>

            <TextNode>Holmes gave a whimsical smile.</TextNode>

            <TextNode>
              “I think I may safely promise that,” said he. “I may add that your
              problem interests me, and that I shall be prepared to look into
              it. How shall I keep in touch with you?”
            </TextNode>

            <TextNode>
              “The Carlton Club will find me. But in case of emergency, there is
              a private telephone call, ‘XX.31.’”
            </TextNode>

            <TextNode>
              Holmes noted it down and sat, still smiling, with the open
              memorandum-book upon his knee.
            </TextNode>

            <TextNode>“The Baron's present address, please?”</TextNode>

            <TextNode>
              “Vernon Lodge, near Kingston. It is a large house. He has been
              fortunate in some rather shady speculations and is a rich man,
              which naturally makes him a more dangerous antagonist.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“Is he at home at present?”</TextNode>
            <TextNode>“Yes.”</TextNode>
            <TextNode>
              “Apart from what you have told me, can you give me any further
              information about the man?”
            </TextNode>
            <TextNode>
              “He has expensive tastes. He is a horse fancier. For a short time
              he played polo at Hurlingham, but then this Prague affair got
              noised about and he had to leave. He collects books and pictures.
              He is a man with a considerable artistic side to his nature. He
              is, I believe, a recognized authority upon Chinese pottery and has
              written a book upon the subject.”
            </TextNode>
            <TextNode>
              “A complex mind,” said Holmes. “All great criminals have that. My
              old friend Charlie Peace was a violin virtuoso. Wainwright was no
              mean artist. I could quote many more. Well, Sir James, you will
              inform your client that I am turning my mind upon Baron Gruner. I
              can say no more. I have some sources of information of my own, and
              I dare say we may find some means of opening the matter up.”
            </TextNode>
            <TextNode>
              When our visitor had left us Holmes sat so long in deep thought
              that it seemed to me that he had forgotten my presence. At last,
              however, he came briskly back to earth.
            </TextNode>
            <TextNode>“Well, Watson, any views?” he asked.</TextNode>
            <TextNode>
              “I should think you had better see the young lady herself.”
            </TextNode>
            <TextNode>
              “My dear Watson, if her poor old broken father cannot move her,
              how shall I, a stranger, prevail? And yet there is something in
              the suggestion if all else fails. But I think we must begin from a
              different angle. I rather fancy that Shinwell Johnson might be a
              help.”
            </TextNode>
            <TextNode>
              I have not had occasion to mention Shinwell Johnson in these
              memoirs because I have seldom drawn my cases from the latter
              phases of my friend's career. During the first years of the
              century he became a valuable assistant. Johnson, I grieve to say,
              made his name first as a very dangerous villain and served two
              terms at Parkhurst. Finally he repented and allied himself to
              Holmes, acting as his agent in the huge criminal underworld of
              London and obtaining information which often proved to be of vital
              importance. Had Johnson been a “nark” of the police he would soon
              have been exposed, but as he dealt with cases which never came
              directly into the courts, his activities were never realized by
              his companions. With the glamour of his two convictions upon him,
              he had the entree of every night-club, doss house, and
              gambling-den in the town, and his quick observation and active
              brain made him an ideal agent for gaining information. It was to
              him that Sherlock Holmes now proposed to turn.
            </TextNode>
            <TextNode>
              It was not possible for me to follow the immediate steps taken by
              my friend, for I had some pressing professional business of my
              own, but I met him by appointment that evening at Simpson's,
              where, sitting at a small table in the front window and looking
              down at the rushing stream of life in the Strand, he told me
              something of what had passed.
            </TextNode>
            <TextNode>
              “Johnson is on the prowl,” said he. “He may pick up some garbage
              in the darker recesses of the underworld, for it is down there,
              amid the black roots of crime, that we must hunt for this man's
              secrets.”
            </TextNode>
            <TextNode>
              “But if the lady will not accept what is already known, why should
              any fresh discovery of yours turn her from her purpose?”
            </TextNode>
            <TextNode>
              “Who knows, Watson? Woman's heart and mind are insoluble puzzles
              to the male. Murder might be condoned or explained, and yet some
              smaller offence might rankle. Baron Gruner remarked to me—”
            </TextNode>
            <TextNode>“He remarked to you!”</TextNode>
            <TextNode>
              “Oh, to be sure, I had not told you of my plans. Well, Watson, I
              love to come to close grips with my man. I like to meet him eye to
              eye and read for myself the stuff that he is made of. When I had
              given Johnson his instructions I took a cab out to Kingston and
              found the Baron in a most affable mood.”
            </TextNode>
            <TextNode>“Did he recognize you?”</TextNode>
            <TextNode>
              “There was no difficulty about that, for I simply sent in my card.
              He is an excellent antagonist, cool as ice, silky voiced and
              soothing as one of your fashionable consultants, and poisonous as
              a cobra. He has breeding in him—a real aristocrat of crime, with a
              superficial suggestion of afternoon tea and all the cruelty of the
              grave behind it. Yes, I am glad to have had my attention called to
              Baron Adelbert Gruner.”
            </TextNode>
            <TextNode>“You say he was affable?”</TextNode>
            <TextNode>
              “A purring cat who thinks he sees prospective mice. Some people's
              affability is more deadly than the violence of coarser souls. His
              greeting was characteristic. ‘I rather thought I should see you
              sooner or later, Mr. Holmes,’ said he. ‘You have been engaged, no
              doubt by General de Merville, to endeavour to stop my marriage
              with his daughter, Violet. That is so, is it not?’
            </TextNode>
            <TextNode>“I acquiesced.</TextNode>
            <TextNode>
              “ ‘My dear man,’ said he, ‘you will only ruin your own
              well-deserved reputation. It is not a case in which you can
              possibly succeed. You will have barren work, to say nothing of
              incurring some danger. Let me very strongly advise you to draw off
              at once.’
            </TextNode>
            <TextNode>
              “ ‘It is curious,’ I answered, ‘but that was the very advice which
              I had intended to give you. I have a respect for your brains,
              Baron, and the little which I have seen of your personality has
              not lessened it. Let me put it to you as man to man. No one wants
              to rake up your past and make you unduly uncomfortable. It is
              over, and you are now in smooth waters, but if you persist in this
              marriage you will raise up a swarm of powerful enemies who will
              never leave you alone until they have made England too hot to hold
              you. Is the game worth it? Surely you would be wiser if you left
              the lady alone. It would not be pleasant for you if these facts of
              your past were brought to her notice.’
            </TextNode>
            <TextNode>
              “The Baron has little waxed tips of hair under his nose, like the
              short antennae of an insect. These quivered with amusement as he
              listened, and he finally broke into a gentle chuckle.
            </TextNode>
            <TextNode>
              “ ‘Excuse my amusement, Mr. Holmes,’ said he, ‘but it is really
              funny to see you trying to play a hand with no cards in it. I
              don't think anyone could do it better, but it is rather pathetic,
              all the same. Not a colour card there, Mr. Holmes, nothing but the
              smallest of the small.’
            </TextNode>
            <TextNode>“ ‘So you think.’</TextNode>
            <TextNode>
              “ ‘So I know. Let me make the thing clear to you, for my own hand
              is so strong that I can afford to show it. I have been fortunate
              enough to win the entire affection of this lady. This was given to
              me in spite of the fact that I told her very clearly of all the
              unhappy incidents in my past life. I also told her that certain
              wicked and designing persons—I hope you recognize yourself—would
              come to her and tell her these things, and I warned her how to
              treat them. You have heard of post-hypnotic suggestion, Mr.
              Holmes? Well, you will see how it works, for a man of personality
              can use hypnotism without any vulgar passes or tomfoolery. So she
              is ready for you and, I have no doubt, would give you an
              appointment, for she is quite amenable to her father's will—save
              only in the one little matter.’
            </TextNode>
            <TextNode>
              “Well, Watson, there seemed to be no more to say, so I took my
              leave with as much cold dignity as I could summon, but, as I had
              my hand on the door-handle, he stopped me.
            </TextNode>
            <TextNode>
              “ ‘By the way, Mr. Holmes,’ said he, ‘did you know Le Brun, the
              French agent?’
            </TextNode>
            <TextNode>“ ‘Yes,’ said I.</TextNode>
            <TextNode>“ ‘Do you know what befell him?’</TextNode>
            <TextNode>
              “ ‘I heard that he was beaten by some Apaches in the Montmartre
              district and crippled for life.’
            </TextNode>
            <TextNode>
              “ ‘Quite true, Mr. Holmes. By a curious coincidence he had been
              inquiring into my affairs only a week before. Don't do it, Mr.
              Holmes; it's not a lucky thing to do. Several have found that out.
              My last word to you is, go your own way and let me go mine.
              Good-bye!’
            </TextNode>
            <TextNode>
              “So there you are, Watson. You are up to date now.”
            </TextNode>
            <TextNode>“The fellow seems dangerous.”</TextNode>
            <TextNode>
              “Mighty dangerous. I disregard the blusterer, but this is the sort
              of man who says rather less than he means.”
            </TextNode>
            <TextNode>
              “Must you interfere? Does it really matter if he marries the
              girl?”
            </TextNode>
            <TextNode>
              “Considering that he undoubtedly murdered his last wife, I should
              say it mattered very much. Besides, the client! Well, well, we
              need not discuss that. When you have finished your coffee you had
              best come home with me, for the blithe Shinwell will be there with
              his report.”
            </TextNode>
            <TextNode>
              We found him sure enough, a huge, coarse, red-faced, scorbutic
              man, with a pair of vivid black eyes which were the only external
              sign of the very cunning mind within. It seems that he had dived
              down into what was peculiarly his kingdom, and beside him on the
              settee was a brand which he had brought up in the shape of a slim,
              flame-like young woman with a pale, intense face, youthful, and
              yet so worn with sin and sorrow that one read the terrible years
              which had left their leprous mark upon her.
            </TextNode>
            <TextNode>
              “This is Miss Kitty Winter,” said Shinwell Johnson, waving his fat
              hand as an introduction. “What she don't know—well, there, she'll
              speak for herself. Put my hand right on her, Mr. Holmes, within an
              hour of your message.”
            </TextNode>
            <TextNode>
              “I'm easy to find,” said the young woman. “Hell, London, gets me
              every time. Same address for Porky Shinwell. We're old mates,
              Porky, you and I. But, by cripes! there is another who ought to be
              down in a lower hell than we if there was any justice in the
              world! That is the man you are after, Mr. Holmes.”
            </TextNode>
            <TextNode>
              Holmes smiled. “I gather we have your good wishes, Miss Winter.”
            </TextNode>
            <TextNode>
              “If I can help to put him where he belongs, I'm yours to the
              rattle,” said our visitor with fierce energy. There was an
              intensity of hatred in her white, set face and her blazing eyes
              such as woman seldom and man never can attain. “You needn't go
              into my past, Mr. Holmes. That's neither here nor there. But what
              I am Adelbert Gruner made me. If I could pull him down!” She
              clutched frantically with her hands into the air. “Oh, if I could
              only pull him into the pit where he has pushed so many!”
            </TextNode>

            <TextNode>“You know how the matter stands?”</TextNode>

            <TextNode>
              “Porky Shinwell has been telling me. He's after some other poor
              fool and wants to marry her this time. You want to stop it. Well,
              you surely know enough about this devil to prevent any decent girl
              in her senses wanting to be in the same parish with him.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page307;

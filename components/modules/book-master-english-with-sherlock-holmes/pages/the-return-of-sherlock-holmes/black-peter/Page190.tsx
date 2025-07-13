import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page190({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;BLACK&nbsp;PETER'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              The man pulled himself together and faced us with an effort at
              self-composure.
            </TextNode>

            <TextNode>
              “You are detectives, I suppose?” said he. “You imagine I am
              connected with the death of Captain Peter Carey. I assure you that
              I am innocent.”
            </TextNode>

            <TextNode>
              “We'll see about that,” said Hopkins. “First of all, what is your
              name?”
            </TextNode>

            <TextNode>“It is John Hopley Neligan.”</TextNode>

            <TextNode>
              I saw Holmes and Hopkins exchange a quick glance.
            </TextNode>

            <TextNode>“What are you doing here?”</TextNode>

            <TextNode>“Can I speak confidentially?”</TextNode>

            <TextNode>“No, certainly not.”</TextNode>

            <TextNode>“Why should I tell you?”</TextNode>

            <TextNode>
              “If you have no answer it may go badly with you at the trial.”
            </TextNode>

            <TextNode>The young man winced.</TextNode>

            <TextNode>
              “Well, I will tell you,” he said. “Why should I not? And yet I
              hate to think of this old scandal gaining a new lease of life. Did
              you ever hear of Dawson and Neligan?”
            </TextNode>

            <TextNode>
              I could see from Hopkins's face that he never had; but Holmes was
              keenly interested.
            </TextNode>

            <TextNode>
              “You mean the West-country bankers,” said he. “They failed for a
              million, ruined half the county families of Cornwall, and Neligan
              disappeared.”
            </TextNode>

            <TextNode>“Exactly. Neligan was my father.”</TextNode>

            <TextNode>
              At last we were getting something positive, and yet it seemed a
              long gap between an absconding banker and Captain Peter Carey
              pinned against the wall with one of his own harpoons. We all
              listened intently to the young man's words.
            </TextNode>

            <TextNode>
              “It was my father who was really concerned. Dawson had retired. I
              was only ten years of age at the time, but I was old enough to
              feel the shame and horror of it all. It has always been said that
              my father stole all the securities and fled. It is not true. It
              was his belief that if he were given time in which to realize them
              all would be well and every creditor paid in full. He started in
              his little yacht for Norway just before the warrant was issued for
              his arrest. I can remember that last night when he bade farewell
              to my mother. He left us a list of the securities he was taking,
              and he swore that he would come back with his honour cleared, and
              that none who had trusted him would suffer. Well, no word was ever
              heard from him again. Both the yacht and he vanished utterly. We
              believed, my mother and I, that he and it, with the securities
              that he had taken with him, were at the bottom of the sea. We had
              a faithful friend, however, who is a business man, and it was he
              who discovered some time ago that some of the securities which my
              father had with him have reappeared on the London market. You can
              imagine our amazement. I spent months in trying to trace them, and
              at last, after many doublings and difficulties, I discovered that
              the original seller had been Captain Peter Carey, the owner of
              this hut.
            </TextNode>

            <TextNode>
              “Naturally, I made some inquiries about the man. I found that he
              had been in command of a whaler which was due to return from the
              Arctic seas at the very time when my father was crossing to
              Norway. The autumn of that year was a stormy one, and there was a
              long succession of southerly gales. My father's yacht may well
              have been blown to the north, and there met by Captain Peter
              Carey's ship. If that were so, what had become of my father? In
              any case, if I could prove from Peter Carey's evidence how these
              securities came on the market it would be a proof that my father
              had not sold them, and that he had no view to personal profit when
              he took them.
            </TextNode>

            <TextNode>
              “I came down to Sussex with the intention of seeing the captain,
              but it was at this moment that his terrible death occurred. I read
              at the inquest a description of his cabin, in which it stated that
              the old log-books of his vessel were preserved in it. It struck me
              that if I could see what occurred in the month of August, 1883, on
              board the&nbsp;<span className='italic'>Sea Unicorn</span>, I
              might settle the mystery of my father's fate. I tried last night
              to get at these log-books, but was unable to open the door.
              To-night I tried again, and succeeded; but I find that the pages
              which deal with that month have been torn from the book. It was at
              that moment I found myself a prisoner in your hands.”
            </TextNode>

            <TextNode>“Is that all?” asked Hopkins.</TextNode>

            <TextNode>
              “Yes, that is all.” His eyes shifted as he said it.
            </TextNode>

            <TextNode>“You have nothing else to tell us?”</TextNode>

            <TextNode>He hesitated.</TextNode>

            <TextNode>“No; there is nothing.”</TextNode>

            <TextNode>“You have not been here before last night?”</TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>
              “Then how do you account for that?” cried Hopkins, as he held up
              the damning note-book, with the initials of our prisoner on the
              first leaf and the blood-stain on the cover.
            </TextNode>

            <TextNode>
              The wretched man collapsed. He sank his face in his hands and
              trembled all over.
            </TextNode>

            <TextNode>
              “Where did you get it?” he groaned. “I did not know. I thought I
              had lost it at the hotel.”
            </TextNode>

            <TextNode>
              “That is enough,” said Hopkins, sternly. “Whatever else you have
              to say you must say in court. You will walk down with me now to
              the police-station. Well, Mr. Holmes, I am very much obliged to
              you and to your friend for coming down to help me. As it turns out
              your presence was unnecessary, and I would have brought the case
              to this successful issue without you; but none the less I am very
              grateful. Rooms have been reserved for you at the Brambletye
              Hotel, so we can all walk down to the village together.”
            </TextNode>

            <TextNode>
              “Well, Watson, what do you think of it?” asked Holmes, as we
              travelled back next morning.
            </TextNode>

            <TextNode>“I can see that you are not satisfied.”</TextNode>

            <TextNode>
              “Oh, yes, my dear Watson, I am perfectly satisfied. At the same
              time Stanley Hopkins's methods do not commend themselves to me. I
              am disappointed in Stanley Hopkins. I had hoped for better things
              from him. One should always look for a possible alternative and
              provide against it. It is the first rule of criminal
              investigation.”
            </TextNode>

            <TextNode>“What, then, is the alternative?”</TextNode>

            <TextNode>
              “The line of investigation which I have myself been pursuing. It
              may give us nothing. I cannot tell. But at least I shall follow it
              to the end.”
            </TextNode>

            <TextNode>
              Several letters were waiting for Holmes at Baker Street. He
              snatched one of them up, opened it, and burst out into a
              triumphant chuckle of laughter.
            </TextNode>

            <TextNode>
              “Excellent, Watson. The alternative develops. Have you telegraph
              forms? Just write a couple of messages for me: ‘Sumner, Shipping
              Agent, Ratcliff Highway. Send three men on, to arrive ten
              to-morrow morning.—Basil.’ That's my name in those parts. The
              other is: ‘Inspector Stanley Hopkins, 46, Lord Street, Brixton.
              Come breakfast to-morrow at nine-thirty. Important. Wire if unable
              to come.—Sherlock Holmes.’ There, Watson, this infernal case has
              haunted me for ten days. I hereby banish it completely from my
              presence. To-morrow I trust that we shall hear the last of it for
              ever.”
            </TextNode>

            <TextNode>
              Sharp at the hour named Inspector Stanley Hopkins appeared, and we
              sat down together to the excellent breakfast which Mrs. Hudson had
              prepared. The young detective was in high spirits at his success.
            </TextNode>

            <TextNode>
              “You really think that your solution must be correct?” asked
              Holmes.
            </TextNode>

            <TextNode>“I could not imagine a more complete case.”</TextNode>

            <TextNode>“It did not seem to me conclusive.”</TextNode>

            <TextNode>
              “You astonish me, Mr. Holmes. What more could one ask for?”
            </TextNode>

            <TextNode>“Does your explanation cover every point?”</TextNode>

            <TextNode>
              “Undoubtedly. I find that young Neligan arrived at the Brambletye
              Hotel on the very day of the crime. He came on the pretence of
              playing golf. His room was on the ground-floor, and he could get
              out when he liked. That very night he went down to Woodman's Lee,
              saw Peter Carey at the hut, quarrelled with him, and killed him
              with the harpoon. Then, horrified by what he had done, he fled out
              of the hut, dropping the note-book which he had brought with him
              in order to question Peter Carey about these different securities.
              You may have observed that some of them were marked with ticks,
              and the others—the great majority—were not. Those which are ticked
              have been traced on the London market; but the others presumably
              were still in the possession of Carey, and young Neligan,
              according to his own account, was anxious to recover them in order
              to do the right thing by his father's creditors. After his flight
              he did not dare to approach the hut again for some time; but at
              last he forced himself to do so in order to obtain the information
              which he needed. Surely that is all simple and obvious?”
            </TextNode>

            <TextNode>Holmes smiled and shook his head.</TextNode>

            <TextNode>
              “It seems to me to have only one drawback, Hopkins, and that is
              that it is intrinsically impossible. Have you tried to drive a
              harpoon through a body? No? Tut, tut, my dear sir, you must really
              pay attention to these details. My friend Watson could tell you
              that I spent a whole morning in that exercise. It is no easy
              matter, and requires a strong and practised arm. But this blow was
              delivered with such violence that the head of the weapon sank deep
              into the wall. Do you imagine that this anaemic youth was capable
              of so frightful an assault? Is he the man who hobnobbed in rum and
              water with Black Peter in the dead of the night? Was it his
              profile that was seen on the blind two nights before? No, no,
              Hopkins; it is another and a more formidable person for whom we
              must seek.”
            </TextNode>

            <TextNode>
              The detective's face had grown longer and longer during Holmes's
              speech. His hopes and his ambitions were all crumbling about him.
              But he would not abandon his position without a struggle.
            </TextNode>

            <TextNode>
              “You can't deny that Neligan was present that night, Mr. Holmes.
              The book will prove that. I fancy that I have evidence enough to
              satisfy a jury, even if you are able to pick a hole in it.
              Besides, Mr. Holmes, I have laid my hand upon my man. As to this
              terrible person of yours, where is he?”
            </TextNode>

            <TextNode>
              “I rather fancy that he is on the stair,” said Holmes, serenely.
              “I think, Watson, that you would do well to put that revolver
              where you can reach it.” He rose, and laid a written paper upon a
              side-table. “Now we are ready,” said he.
            </TextNode>

            <TextNode>
              There had been some talking in gruff voices outside, and now Mrs.
              Hudson opened the door to say that there were three men inquiring
              for Captain Basil.
            </TextNode>

            <TextNode>“Show them in one by one,” said Holmes.</TextNode>

            <TextNode>
              The first who entered was a little ribston-pippin of a man, with
              ruddy cheeks and fluffy white side-whiskers. Holmes had drawn a
              letter from his pocket.
            </TextNode>

            <TextNode>“What name?” he asked.</TextNode>

            <TextNode>“James Lancaster.”</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “I am sorry, Lancaster, but the berth is full. Here is half a
              sovereign for your trouble. Just step into this room and wait
              there for a few minutes.”
            </TextNode>

            <TextNode>
              The second man was a long, dried-up creature, with lank hair and
              sallow cheeks. His name was Hugh Pattins. He also received his
              dismissal, his half-sovereign, and the order to wait.
            </TextNode>

            <TextNode>
              The third applicant was a man of remarkable appearance. A fierce
              bull-dog face was framed in a tangle of hair and beard, and two
              bold dark eyes gleamed behind the cover of thick, tufted, overhung
              eyebrows. He saluted and stood sailor-fashion, turning his cap
              round in his hands.
            </TextNode>

            <TextNode>“Your name?” asked Holmes.</TextNode>

            <TextNode>“Patrick Cairns.”</TextNode>

            <TextNode>“Harpooner?”</TextNode>

            <TextNode>“Yes, sir. Twenty-six voyages.”</TextNode>

            <TextNode>“Dundee, I suppose?”</TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>“And ready to start with an exploring ship?”</TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>“What wages?”</TextNode>

            <TextNode>“Eight pounds a month.”</TextNode>

            <TextNode>“Could you start at once?”</TextNode>

            <TextNode>“As soon as I get my kit.”</TextNode>

            <TextNode>“Have you your papers?”</TextNode>
            <TextNode>
              “Yes, sir.” He took a sheaf of worn and greasy forms from his
              pocket. Holmes glanced over them and returned them.
            </TextNode>

            <TextNode>
              “You are just the man I want,” said he. “Here's the agreement on
              the side-table. If you sign it the whole matter will be settled.”
            </TextNode>

            <TextNode>
              The seaman lurched across the room and took up the pen.
            </TextNode>

            <TextNode>
              “Shall I sign here?” he asked, stooping over the table.
            </TextNode>

            <TextNode>
              Holmes leaned over his shoulder and passed both hands over his
              neck.
            </TextNode>

            <TextNode>“This will do,” said he.</TextNode>

            <TextNode>
              I heard a click of steel and a bellow like an enraged bull. The
              next instant Holmes and the seaman were rolling on the ground
              together. He was a man of such gigantic strength that, even with
              the handcuffs which Holmes had so deftly fastened upon his wrists,
              he would have very quickly overpowered my friend had Hopkins and I
              not rushed to his rescue. Only when I pressed the cold muzzle of
              the revolver to his temple did he at last understand that
              resistance was vain. We lashed his ankles with cord and rose
              breathless from the struggle.
            </TextNode>
            <TextNode>
              “I must really apologize, Hopkins,” said Sherlock Holmes; “I fear
              that the scrambled eggs are cold. However, you will enjoy the rest
              of your breakfast all the better, will you not, for the thought
              that you have brought your case to a triumphant conclusion.”
            </TextNode>

            <TextNode>Stanley Hopkins was speechless with amazement.</TextNode>

            <TextNode>
              “I don't know what to say, Mr. Holmes,” he blurted out at last,
              with a very red face. “It seems to me that I have been making a
              fool of myself from the beginning. I understand now, what I should
              never have forgotten, that I am the pupil and you are the master.
              Even now I see what you have done, but I don't know how you did
              it, or what it signifies.”
            </TextNode>

            <TextNode>
              “Well, well,” said Holmes, good-humouredly. “We all learn by
              experience, and your lesson this time is that you should never
              lose sight of the alternative. You were so absorbed in young
              Neligan that you could not spare a thought to Patrick Cairns, the
              true murderer of Peter Carey.”
            </TextNode>

            <TextNode>
              The hoarse voice of the seaman broke in on our conversation.
            </TextNode>

            <TextNode>
              “See here, mister,” said he, “I make no complaint of being
              man-handled in this fashion, but I would have you call things by
              their right names. You say I murdered Peter Carey; I say I killed
              Peter Carey, and there's all the difference. Maybe you don't
              believe what I say. Maybe you think I am just slinging you a
              yarn.”
            </TextNode>

            <TextNode>
              “Not at all,” said Holmes. “Let us hear what you have to say.”
            </TextNode>

            <TextNode>
              “It's soon told, and, by the Lord, every word of it is truth. I
              knew Black Peter, and when he pulled out his knife I whipped a
              harpoon through him sharp, for I knew that it was him or me.
              That's how he died. You can call it murder. Anyhow, I'd as soon
              die with a rope round my neck as with Black Peter's knife in my
              heart.”
            </TextNode>
            <TextNode>“How came you there?” asked Holmes.</TextNode>

            <TextNode>
              “I'll tell it you from the beginning. Just sit me up a little so
              as I can speak easy. It was in '83 that it happened—August of that
              year. Peter Carey was master of the&nbsp;
              <span className='italic'>Sea Unicorn</span>, and I was spare
              harpooner. We were coming out of the ice-pack on our way home,
              with head winds and a week's southerly gale, when we picked up a
              little craft that had been blown north. There was one man on her—a
              landsman. The crew had thought she would founder, and had made for
              the Norwegian coast in the dinghy. I guess they were all drowned.
              Well, we took him on board, this man, and he and the skipper had
              some long talks in the cabin. All the baggage we took off with him
              was one tin box. So far as I know, the man's name was never
              mentioned, and on the second night he disappeared as if he had
              never been. It was given out that he had either thrown himself
              overboard or fallen overboard in the heavy weather that we were
              having. Only one man knew what had happened to him, and that was
              me, for with my own eyes I saw the skipper tip up his heels and
              put him over the rail in the middle watch of a dark night, two
              days before we sighted the Shetland lights.
            </TextNode>

            <TextNode>
              “Well, I kept my knowledge to myself and waited to see what would
              come of it. When we got back to Scotland it was easily hushed up,
              and nobody asked any questions. A stranger died by an accident,
              and it was nobody's business to inquire. Shortly after Peter Carey
              gave up the sea, and it was long years before I could find where
              he was. I guessed that he had done the deed for the sake of what
              was in that tin box, and that he could afford now to pay me well
              for keeping my mouth shut.
            </TextNode>

            <TextNode>
              “I found out where he was through a sailor man that had met him in
              London, and down I went to squeeze him. The first night he was
              reasonable enough, and was ready to give me what would make me
              free of the sea for life. We were to fix it all two nights later.
              When I came I found him three parts drunk and in a vile temper. We
              sat down and we drank and we yarned about old times, but the more
              he drank the less I liked the look on his face. I spotted that
              harpoon upon the wall, and I thought I might need it before I was
              through. Then at last he broke out at me, spitting and cursing,
              with murder in his eyes and a great clasp-knife in his hand. He
              had not time to get it from the sheath before I had the harpoon
              through him. Heavens! what a yell he gave; and his face gets
              between me and my sleep! I stood there, with his blood splashing
              round me, and I waited for a bit; but all was quiet, so I took
              heart once more. I looked round, and there was the tin box on a
              shelf. I had as much right to it as Peter Carey, anyhow, so I took
              it with me and left the hut. Like a fool I left my baccy-pouch
              upon the table.
            </TextNode>

            <TextNode>
              “Now I'll tell you the queerest part of the whole story. I had
              hardly got outside the hut when I heard someone coming, and I hid
              among the bushes. A man came slinking along, went into the hut,
              gave a cry as if he had seen a ghost, and legged it as hard as he
              could run until he was out of sight. Who he was or what he wanted
              is more than I can tell. For my part I walked ten miles, got a
              train at Tunbridge Wells, and so reached London, and no one the
              wiser.
            </TextNode>

            <TextNode>
              “Well, when I came to examine the box I found there was no money
              in it, and nothing but papers that I would not dare to sell. I had
              lost my hold on Black Peter, and was stranded in London without a
              shilling. There was only my trade left. I saw these advertisements
              about harpooners and high wages, so I went to the shipping agents,
              and they sent me here. That's all I know, and I say again that if
              I killed Black Peter the law should give me thanks, for I saved
              them the price of a hempen rope.”
            </TextNode>

            <TextNode>
              “A very clear statement,” said Holmes, rising and lighting his
              pipe. “I think, Hopkins, that you should lose no time in conveying
              your prisoner to a place of safety. This room is not well adapted
              for a cell, and Mr. Patrick Cairns occupies too large a proportion
              of our carpet.”
            </TextNode>

            <TextNode>
              “Mr. Holmes,” said Hopkins, “I do not know how to express my
              gratitude. Even now I do not understand how you attained this
              result.”
            </TextNode>

            <TextNode>
              “Simply by having the good fortune to get the right clue from the
              beginning. It is very possible if I had known about this note-book
              it might have led away my thoughts, as it did yours. But all I
              heard pointed in the one direction. The amazing strength, the
              skill in the use of the harpoon, the rum and water, the seal-skin
              tobacco-pouch, with the coarse tobacco—all these pointed to a
              seaman, and one who had been a whaler. I was convinced that the
              initials ‘P.C.’ upon the pouch were a coincidence, and not those
              of Peter Carey, since he seldom smoked, and no pipe was found in
              his cabin. You remember that I asked whether whisky and brandy
              were in the cabin. You said they were. How many landsmen are there
              who would drink rum when they could get these other spirits? Yes,
              I was certain it was a seaman.”
            </TextNode>

            <TextNode>“And how did you find him?”</TextNode>

            <TextNode>
              “My dear sir, the problem had become a very simple one. If it were
              a seaman, it could only be a seaman who had been with him on the
              <span className='italic'>Sea Unicorn</span>. So far as I could
              learn he had sailed in no other ship. I spent three days in wiring
              to Dundee, and at the end of that time I had ascertained the names
              of the crew of the <span className='italic'>Sea Unicorn</span> in
              1883. When I found Patrick Cairns among the harpooners my research
              was nearing its end. I argued that the man was probably in London,
              and that he would desire to leave the country for a time. I
              therefore spent some days in the East-end, devised an Arctic
              expedition, put forth tempting terms for harpooners who would
              serve under Captain Basil—and behold the result!”
            </TextNode>

            <TextNode>“Wonderful!” cried Hopkins. “Wonderful!”</TextNode>

            <TextNode>
              “You must obtain the release of young Neligan as soon as
              possible,” said Holmes. “I confess that I think you owe him some
              apology. The tin box must be returned to him, but, of course, the
              securities which Peter Carey has sold are lost for ever. There's
              the cab, Hopkins, and you can remove your man. If you want me for
              the trial, my address and that of Watson will be somewhere in
              Norway—I'll send particulars later.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page190;

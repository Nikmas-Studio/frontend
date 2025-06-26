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

function Page195({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;SIX&nbsp;NAPOLEONS'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              It was no very unusual thing for Mr. Lestrade, of Scotland Yard,
              to look in upon us of an evening, and his visits were welcome to
              Sherlock Holmes, for they enabled him to keep in touch with all
              that was going on at the police head-quarters. In return for the
              news which Lestrade would bring, Holmes was always ready to listen
              with attention to the details of any case upon which the detective
              was engaged, and was able occasionally, without any active
              interference, to give some hint or suggestion drawn from his own
              vast knowledge and experience.
            </TextNode>

            <TextNode>
              On this particular evening Lestrade had spoken of the weather and
              the newspapers. Then he had fallen silent, puffing thoughtfully at
              his cigar. Holmes looked keenly at him.
            </TextNode>

            <TextNode>“Anything remarkable on hand?” he asked.</TextNode>

            <TextNode>“Oh, no, Mr. Holmes, nothing very particular.”</TextNode>

            <TextNode>“Then tell me about it.”</TextNode>

            <TextNode>Lestrade laughed.</TextNode>

            <TextNode>
              “Well, Mr. Holmes, there is no use denying that there is something
              on my mind. And yet it is such an absurd business that I hesitated
              to bother you about it. On the other hand, although it is trivial,
              it is undoubtedly queer, and I know that you have a taste for all
              that is out of the common. But in my opinion it comes more in Dr.
              Watson's line than ours.”
            </TextNode>

            <TextNode>“Disease?” said I.</TextNode>

            <TextNode>
              “Madness, anyhow. And a queer madness too! You wouldn't think
              there was anyone living at this time of day who had such a hatred
              of Napoleon the First that he would break any image of him that he
              could see.”
            </TextNode>

            <TextNode>Holmes sank back in his chair.</TextNode>

            <TextNode>“That's no business of mine,” said he.</TextNode>

            <TextNode>
              “Exactly. That's what I said. But then, when the man commits
              burglary in order to break images which are not his own, that
              brings it away from the doctor and on to the policeman.”
            </TextNode>

            <TextNode>Holmes sat up again.</TextNode>

            <TextNode>
              “Burglary! This is more interesting. Let me hear the details.”
            </TextNode>

            <TextNode>
              Lestrade took out his official note-book and refreshed his memory
              from its pages.
            </TextNode>

            <TextNode>
              “The first case reported was four days ago,” said he. “It was at
              the shop of Morse Hudson, who has a place for the sale of pictures
              and statues in the Kennington Road. The assistant had left the
              front shop for an instant when he heard a crash, and hurrying in
              he found a plaster bust of Napoleon, which stood with several
              other works of art upon the counter, lying shivered into
              fragments. He rushed out into the road, but, although several
              passers-by declared that they had noticed a man run out of the
              shop, he could neither see anyone nor could he find any means of
              identifying the rascal. It seemed to be one of those senseless
              acts of Hooliganism which occur from time to time, and it was
              reported to the constable on the beat as such. The plaster cast
              was not worth more than a few shillings, and the whole affair
              appeared to be too childish for any particular investigation.
            </TextNode>

            <TextNode>
              ”The second case, however, was more serious and also more
              singular. It occurred only last night.
            </TextNode>

            <TextNode>
              “In Kennington Road, and within a few hundred yards of Morse
              Hudson's shop, there lives a well-known medical practitioner,
              named Dr. Barnicot, who has one of the largest practices upon the
              south side of the Thames. His residence and principal
              consulting-room is at Kennington Road, but he has a branch surgery
              and dispensary at Lower Brixton Road, two miles away. This Dr.
              Barnicot is an enthusiastic admirer of Napoleon, and his house is
              full of books, pictures, and relics of the French Emperor. Some
              little time ago he purchased from Morse Hudson two duplicate
              plaster casts of the famous head of Napoleon by the French
              sculptor, Devine. One of these he placed in his hall in the house
              at Kennington Road, and the other on the mantelpiece of the
              surgery at Lower Brixton. Well, when Dr. Barnicot came down this
              morning he was astonished to find that his house had been burgled
              during the night, but that nothing had been taken save the plaster
              head from the hall. It had been carried out and had been dashed
              savagely against the garden wall, under which its splintered
              fragments were discovered.”
            </TextNode>

            <TextNode>Holmes rubbed his hands.</TextNode>

            <TextNode>“This is certainly very novel,” said he.</TextNode>

            <TextNode>
              “I thought it would please you. But I have not got to the end yet.
              Dr. Barnicot was due at his surgery at twelve o'clock, and you can
              imagine his amazement when, on arriving there, he found that the
              window had been opened in the night, and that the broken pieces of
              his second bust were strewn all over the room. It had been smashed
              to atoms where it stood. In neither case were there any signs
              which could give us a clue as to the criminal or lunatic who had
              done the mischief. Now, Mr. Holmes, you have got the facts.”
            </TextNode>

            <TextNode>
              “They are singular, not to say grotesque,” said Holmes. “May I ask
              whether the two busts smashed in Dr. Barnicot's rooms were the
              exact duplicates of the one which was destroyed in Morse Hudson's
              shop?”
            </TextNode>

            <TextNode>“They were taken from the same mould.”</TextNode>

            <TextNode>
              “Such a fact must tell against the theory that the man who breaks
              them is influenced by any general hatred of Napoleon. Considering
              how many hundreds of statues of the great Emperor must exist in
              London, it is too much to suppose such a coincidence as that a
              promiscuous iconoclast should chance to begin upon three specimens
              of the same bust.”
            </TextNode>

            <TextNode>
              “Well, I thought as you do,” said Lestrade. “On the other hand,
              this Morse Hudson is the purveyor of busts in that part of London,
              and these three were the only ones which had been in his shop for
              years. So, although, as you say, there are many hundreds of
              statues in London, it is very probable that these three were the
              only ones in that district. Therefore, a local fanatic would begin
              with them. What do you think, Dr. Watson?”
            </TextNode>

            <TextNode>
              “There are no limits to the possibilities of monomania,” I
              answered. “There is the condition which the modern French
              psychologists have called the&nbsp;
              <span className='italic'>‘idée fixe,’</span> which may be trifling
              in character, and accompanied by complete sanity in every other
              way. A man who had read deeply about Napoleon, or who had possibly
              received some hereditary family injury through the great war,
              might conceivably form such an&nbsp;
              <span className='italic'>idée fixe</span> and under its influence
              be capable of any fantastic outrage.”
            </TextNode>

            <TextNode>
              “That won't do, my dear Watson,” said Holmes, shaking his head;
              “for no amount of <span className='italic'>idée fixe</span> would
              enable your interesting monomaniac to find out where these busts
              were situated.”
            </TextNode>

            <TextNode>“Well, how do you explain it?”</TextNode>

            <TextNode>
              “I don't attempt to do so. I would only observe that there is a
              certain method in the gentleman's eccentric proceedings. For
              example, in Dr. Barnicot's hall, where a sound might arouse the
              family, the bust was taken outside before being broken, whereas in
              the surgery, where there was less danger of an alarm, it was
              smashed where it stood. The affair seems absurdly trifling, and
              yet I dare call nothing trivial when I reflect that some of my
              most classic cases have had the least promising commencement. You
              will remember, Watson, how the dreadful business of the Abernetty
              family was first brought to my notice by the depth which the
              parsley had sunk into the butter upon a hot day. I can't afford,
              therefore, to smile at your three broken busts, Lestrade, and I
              shall be very much obliged to you if you will let me hear of any
              fresh developments of so singular a chain of events.”
            </TextNode>

            <TextNode>
              The development for which my friend had asked came in a quicker
              and an infinitely more tragic form than he could have imagined. I
              was still dressing in my bedroom next morning when there was a tap
              at the door and Holmes entered, a telegram in his hand. He read it
              aloud:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “Come instantly, 131, Pitt Street, Kensington.
              </TextNode>

              <TextNode className='italic' noIndent>
                — “Lestrade.”
              </TextNode>
            </Indent>

            <TextNode noIndent>“What is it, then?” I asked.</TextNode>

            <TextNode>
              “Don't know—may be anything. But I suspect it is the sequel of the
              story of the statues. In that case our friend, the image-breaker,
              has begun operations in another quarter of London. There's coffee
              on the table, Watson, and I have a cab at the door.”
            </TextNode>

            <TextNode>
              In half an hour we had reached Pitt Street, a quiet little
              backwater just beside one of the briskest currents of London life.
              No. 131 was one of a row, all flat-chested, respectable, and most
              unromantic dwellings. As we drove up we found the railings in
              front of the house lined by a curious crowd. Holmes whistled.
            </TextNode>

            <TextNode>
              “By George! it's attempted murder at the least. Nothing less will
              hold the London message-boy. There's a deed of violence indicated
              in that fellow's round shoulders and outstretched neck. What's
              this, Watson? The top steps swilled down and the other ones dry.
              Footsteps enough, anyhow! Well, well, there's Lestrade at the
              front window, and we shall soon know all about it.”
            </TextNode>

            <TextNode>
              The official received us with a very grave face and showed us into
              a sitting-room, where an exceedingly unkempt and agitated elderly
              man, clad in a flannel dressing-gown, was pacing up and down. He
              was introduced to us as the owner of the house—Mr. Horace Harker,
              of the Central Press Syndicate.
            </TextNode>

            <TextNode>
              “It's the Napoleon bust business again,” said Lestrade. “You
              seemed interested last night, Mr. Holmes, so I thought perhaps you
              would be glad to be present now that the affair has taken a very
              much graver turn.”
            </TextNode>

            <TextNode>“What has it turned to, then?”</TextNode>

            <TextNode>
              “To murder. Mr. Harker, will you tell these gentlemen exactly what
              has occurred?”
            </TextNode>

            <TextNode>
              The man in the dressing-gown turned upon us with a most melancholy
              face.
            </TextNode>

            <TextNode>
              “It's an extraordinary thing,” said he, “that all my life I have
              been collecting other people's news, and now that a real piece of
              news has come my own way I am so confused and bothered that I
              can't put two words together. If I had come in here as a
              journalist I should have interviewed myself and had two columns in
              every evening paper. As it is I am giving away valuable copy by
              telling my story over and over to a string of different people,
              and I can make no use of it myself. However, I've heard your name,
              Mr. Sherlock Holmes, and if you'll only explain this queer
              business I shall be paid for my trouble in telling you the story.”
            </TextNode>

            <TextNode>Holmes sat down and listened.</TextNode>

            <TextNode>
              “It all seems to centre round that bust of Napoleon which I bought
              for this very room about four months ago. I picked it up cheap
              from Harding Brothers, two doors from the High Street Station. A
              great deal of my journalistic work is done at night, and I often
              write until the early morning. So it was to-day. I was sitting in
              my den, which is at the back of the top of the house, about three
              o'clock, when I was convinced that I heard some sounds downstairs.
              I listened, but they were not repeated, and I concluded that they
              came from outside. Then suddenly, about five minutes later, there
              came a most horrible yell—the most dreadful sound, Mr. Holmes,
              that ever I heard. It will ring in my ears as long as I live. I
              sat frozen with horror for a minute or two. Then I seized the
              poker and went downstairs. When I entered this room I found the
              window wide open, and I at once observed that the bust was gone
              from the mantelpiece. Why any burglar should take such a thing
              passes my understanding, for it was only a plaster cast and of no
              real value whatever.
            </TextNode>

            <TextNode>
              “You can see for yourself that anyone going out through that open
              window could reach the front doorstep by taking a long stride.
              This was clearly what the burglar had done, so I went round and
              opened the door. Stepping out into the dark I nearly fell over a
              dead man who was lying there. I ran back for a light, and there
              was the poor fellow, a great gash in his throat and the whole
              place swimming in blood. He lay on his back, his knees drawn up,
              and his mouth horribly open. I shall see him in my dreams. I had
              just time to blow on my police-whistle, and then I must have
              fainted, for I knew nothing more until I found the policeman
              standing over me in the hall.”
            </TextNode>

            <TextNode>“Well, who was the murdered man?” asked Holmes.</TextNode>

            <TextNode>
              “There's nothing to show who he was,” said Lestrade. “You shall
              see the body at the mortuary, but we have made nothing of it up to
              now. He is a tall man, sunburned, very powerful, not more than
              thirty. He is poorly dressed, and yet does not appear to be a
              labourer. A horn-handled clasp knife was lying in a pool of blood
              beside him. Whether it was the weapon which did the deed, or
              whether it belonged to the dead man, I do not know. There was no
              name on his clothing, and nothing in his pockets save an apple,
              some string, a shilling map of London, and a photograph. Here it
              is.”
            </TextNode>

            <TextNode>
              It was evidently taken by a snap-shot from a small camera. It
              represented an alert, sharp-featured simian man with thick
              eyebrows, and a very peculiar projection of the lower part of the
              face like the muzzle of a baboon.
            </TextNode>

            <TextNode>
              “And what became of the bust?” asked Holmes, after a careful study
              of this picture.
            </TextNode>

            <TextNode>
              “We had news of it just before you came. It has been found in the
              front garden of an empty house in Campden House Road. It was
              broken into fragments. I am going round now to see it. Will you
              come?”
            </TextNode>

            <TextNode>
              “Certainly. I must just take one look round.” He examined the
              carpet and the window. “The fellow had either very long legs or
              was a most active man,” said he. “With an area beneath, it was no
              mean feat to reach that window-ledge and open that window. Getting
              back was comparatively simple. Are you coming with us to see the
              remains of your bust, Mr. Harker?”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              The disconsolate journalist had seated himself at a writing-table.
            </TextNode>

            <TextNode>
              “I must try and make something of it,” said he, “though I have no
              doubt that the first editions of the evening papers are out
              already with full details. It's like my luck! You remember when
              the stand fell at Doncaster? Well, I was the only journalist in
              the stand, and my journal the only one that had no account of it,
              for I was too shaken to write it. And now I'll be too late with a
              murder done on my own doorstep.”
            </TextNode>

            <TextNode>
              As we left the room we heard his pen travelling shrilly over the
              foolscap.
            </TextNode>

            <TextNode>
              The spot where the fragments of the bust had been found was only a
              few hundred yards away. For the first time our eyes rested upon
              this presentment of the great Emperor, which seemed to raise such
              frantic and destructive hatred in the mind of the unknown. It lay
              scattered in splintered shards upon the grass. Holmes picked up
              several of them and examined them carefully. I was convinced from
              his intent face and his purposeful manner that at last he was upon
              a clue.
            </TextNode>

            <TextNode>“Well?” asked Lestrade.</TextNode>

            <TextNode>Holmes shrugged his shoulders.</TextNode>

            <TextNode>
              “We have a long way to go yet,” said he. “And yet—and yet—well, we
              have some suggestive facts to act upon. The possession of this
              trifling bust was worth more in the eyes of this strange criminal
              than a human life. That is one point. Then there is the singular
              fact that he did not break it in the house, or immediately outside
              the house, if to break it was his sole object.”
            </TextNode>

            <TextNode>
              “He was rattled and bustled by meeting this other fellow. He
              hardly knew what he was doing.”
            </TextNode>

            <TextNode>
              “Well, that's likely enough. But I wish to call your attention
              very particularly to the position of this house in the garden of
              which the bust was destroyed.”
            </TextNode>

            <TextNode>Lestrade looked about him.</TextNode>

            <TextNode>
              “It was an empty house, and so he knew that he would not be
              disturbed in the garden.”
            </TextNode>

            <TextNode>
              “Yes, but there is another empty house farther up the street which
              he must have passed before he came to this one. Why did he not
              break it there, since it is evident that every yard that he
              carried it increased the risk of someone meeting him?”
            </TextNode>

            <TextNode>“I give it up,” said Lestrade.</TextNode>

            <TextNode>
              Holmes pointed to the street lamp above our heads.
            </TextNode>

            <TextNode>
              “He could see what he was doing here and he could not there. That
              was his reason.”
            </TextNode>

            <TextNode>
              “By Jove! that's true,” said the detective. “Now that I come to
              think of it, Dr. Barnicot's bust was broken not far from his red
              lamp. Well, Mr. Holmes, what are we to do with that fact?”
            </TextNode>

            <TextNode>
              “To remember it—to docket it. We may come on something later which
              will bear upon it. What steps do you propose to take now,
              Lestrade?”
            </TextNode>

            <TextNode>
              “The most practical way of getting at it, in my opinion, is to
              identify the dead man. There should be no difficulty about that.
              When we have found who he is and who his associates are, we should
              have a good start in learning what he was doing in Pitt Street
              last night, and who it was who met him and killed him on the
              doorstep of Mr. Horace Harker. Don't you think so?”
            </TextNode>

            <TextNode>
              “No doubt; and yet it is not quite the way in which I should
              approach the case.”
            </TextNode>

            <TextNode>“What would you do, then?”</TextNode>

            <TextNode>
              “Oh, you must not let me influence you in any way! I suggest that
              you go on your line and I on mine. We can compare notes
              afterwards, and each will supplement the other.”
            </TextNode>

            <TextNode>“Very good,” said Lestrade.</TextNode>

            <TextNode>
              “If you are going back to Pitt Street you might see Mr. Horace
              Harker. Tell him from me that I have quite made up my mind, and
              that it is certain that a dangerous homicidal lunatic with
              Napoleonic delusions was in his house last night. It will be
              useful for his article.”
            </TextNode>

            <TextNode>Lestrade stared.</TextNode>

            <TextNode>“You don't seriously believe that?”</TextNode>

            <TextNode>Holmes smiled.</TextNode>

            <TextNode>
              “Don't I? Well, perhaps I don't. But I am sure that it will
              interest Mr. Horace Harker and the subscribers of the Central
              Press Syndicate. Now, Watson, I think that we shall find that we
              have a long and rather complex day's work before us. I should be
              glad, Lestrade, if you could make it convenient to meet us at
              Baker Street at six o'clock this evening. Until then I should like
              to keep this photograph found in the dead man's pocket. It is
              possible that I may have to ask your company and assistance upon a
              small expedition which will have be undertaken to-night, if my
              chain of reasoning should prove to be correct. Until then,
              good-bye and good luck!”
            </TextNode>

            <TextNode>
              Sherlock Holmes and I walked together to the High Street, where he
              stopped at the shop of Harding Brothers, whence the bust had been
              purchased. A young assistant informed us that Mr. Harding would be
              absent until after noon, and that he was himself a newcomer who
              could give us no information. Holmes's face showed his
              disappointment and annoyance.
            </TextNode>

            <TextNode>
              “Well, well, we can't expect to have it all our own way, Watson,”
              he said, at last. “We must come back in the afternoon if Mr.
              Harding will not be here until then. I am, as you have no doubt
              surmised, endeavouring to trace these busts to their source, in
              order to find if there is not something peculiar which may account
              for their remarkable fate. Let us make for Mr. Morse Hudson, of
              the Kennington Road, and see if he can throw any light upon the
              problem.”
            </TextNode>

            <TextNode>
              A drive of an hour brought us to the picture-dealer's
              establishment. He was a small, stout man with a red face and a
              peppery manner.
            </TextNode>

            <TextNode>
              “Yes, sir. On my very counter, sir,” said he. “What we pay rates
              and taxes for I don't know, when any ruffian can come in and break
              one's goods. Yes, sir, it was I who sold Dr. Barnicot his two
              statues. Disgraceful, sir! A Nihilist plot, that's what I make it.
              No one but an Anarchist would go about breaking statues. Red
              republicans, that's what I call 'em. Who did I get the statues
              from? I don't see what that has to do with it. Well, if you really
              want to know, I got them from Gelder & Co., in Church Street,
              Stepney. They are a well-known house in the trade, and have been
              this twenty years. How many had I? Three—two and one are three—two
              of Dr. Barnicot's and one smashed in broad daylight on my own
              counter. Do I know that photograph? No, I don't. Yes, I do,
              though. Why, it's Beppo. He was a kind of Italian piece-work man,
              who made himself useful in the shop. He could carve a bit and gild
              and frame, and do odd jobs. The fellow left me last week, and I've
              heard nothing of him since. No, I don't know where he came from
              nor where he went to. I have nothing against him while he was
              here. He was gone two days before the bust was smashed.”
            </TextNode>

            <TextNode>
              “Well, that's all we could reasonably expect to get from Morse
              Hudson,” said Holmes, as we emerged from the shop. “We have this
              Beppo as a common factor, both in Kennington and in Kensington, so
              that is worth a ten-mile drive. Now, Watson, let us make for
              Gelder & Co., of Stepney, the source and origin of busts. I shall
              be surprised if we don't get some help down there.”
            </TextNode>

            <TextNode>
              In rapid succession we passed through the fringe of fashionable
              London, hotel London, theatrical London, literary London,
              commercial London, and, finally, maritime London, till we came to
              a riverside city of a hundred thousand souls, where the tenement
              houses swelter and reek with the outcasts of Europe. Here, in a
              broad thoroughfare, once the abode of wealthy City merchants, we
              found the sculpture works for which we searched. Outside was a
              considerable yard full of monumental masonry. Inside was a large
              room in which fifty workers were carving or moulding. The manager,
              a big blond German, received us civilly, and gave a clear answer
              to all Holmes's questions. A reference to his books showed that
              hundreds of casts had been taken from a marble copy of Devine's
              head of Napoleon, but that the three which had been sent to Morse
              Hudson a year or so before had been half of a batch of six, the
              other three being sent to Harding Brothers, of Kensington. There
              was no reason why those six should be different to any of the
              other casts. He could suggest no possible cause why anyone should
              wish to destroy them—in fact, he laughed at the idea. Their
              wholesale price was six shillings, but the retailer would get
              twelve or more. The cast was taken in two moulds from each side of
              the face, and then these two profiles of plaster of Paris were
              joined together to make the complete bust. The work was usually
              done by Italians in the room we were in. When finished the busts
              were put on a table in the passage to dry, and afterwards stored.
              That was all he could tell us.
            </TextNode>

            <TextNode>
              But the production of the photograph had a remarkable effect upon
              the manager. His face flushed with anger, and his brows knotted
              over his blue Teutonic eyes.
            </TextNode>

            <TextNode>
              “Ah, the rascal!” he cried. “Yes, indeed, I know him very well.
              This has always been a respectable establishment, and the only
              time that we have ever had the police in it was over this very
              fellow. It was more than a year ago now. He knifed another Italian
              in the street, and then he came to the works with the police on
              his heels, and he was taken here. Beppo was his name—his second
              name I never knew. Serve me right for engaging a man with such a
              face. But he was a good workman, one of the best.”
            </TextNode>

            <TextNode>“What did he get?”</TextNode>

            <TextNode>
              “The man lived and he got off with a year. I have no doubt he is
              out now; but he has not dared to show his nose here. We have a
              cousin of his here, and I dare say he could tell you where he is.”
            </TextNode>

            <TextNode>
              “No, no,” cried Holmes, “not a word to the cousin—not a word, I
              beg you. The matter is very important, and the farther I go with
              it the more important it seems to grow. When you referred in your
              ledger to the sale of those casts I observed that the date was
              June 3rd of last year. Could you give me the date when Beppo was
              arrested?”
            </TextNode>

            <TextNode>
              “I could tell you roughly by the pay-list,” the manager answered.
              “Yes,” he continued, after some turning over of pages, “he was
              paid last on May 20th.”
            </TextNode>

            <TextNode>
              “Thank you,” said Holmes. “I don't think that I need intrude upon
              your time and patience any more.” With a last word of caution that
              he should say nothing as to our researches we turned our faces
              westward once more.
            </TextNode>

            <TextNode>
              The afternoon was far advanced before we were able to snatch a
              hasty luncheon at a restaurant. A news-bill at the entrance
              announced “Kensington Outrage. Murder by a Madman,” and the
              contents of the paper showed that Mr. Horace Harker had got his
              account into print after all. Two columns were occupied with a
              highly sensational and flowery rendering of the whole incident.
              Holmes propped it against the cruet-stand and read it while he
              ate. Once or twice he chuckled.
            </TextNode>

            <TextNode>
              “This is all right, Watson,” said he. “Listen to this:
            </TextNode>

            <TextNode>
              “It is satisfactory to know that there can be no difference of
              opinion upon this case, since Mr. Lestrade, one of the most
              experienced members of the official force, and Mr. Sherlock
              Holmes, the well-known consulting expert, have each come to the
              conclusion that the grotesque series of incidents, which have
              ended in so tragic a fashion, arise from lunacy rather than from
              deliberate crime. No explanation save mental aberration can cover
              the facts.
            </TextNode>
            <TextNode>
              “The Press, Watson, is a most valuable institution if you only
              know how to use it. And now, if you have quite finished, we will
              hark back to Kensington and see what the manager of Harding
              Brothers has to say to the matter.”
            </TextNode>

            <TextNode>
              The founder of that great emporium proved to be a brisk, crisp
              little person, very dapper and quick, with a clear head and a
              ready tongue.
            </TextNode>

            <TextNode>
              “Yes, sir, I have already read the account in the evening papers.
              Mr. Horace Harker is a customer of ours. We supplied him with the
              bust some months ago. We ordered three busts of that sort from
              Gelder & Co., of Stepney. They are all sold now. To whom? Oh, I
              dare say by consulting our sales book we could very easily tell
              you. Yes, we have the entries here. One to Mr. Harker, you see,
              and one to Mr. Josiah Brown, of Laburnum Lodge, Laburnum Vale,
              Chiswick, and one to Mr. Sandeford, of Lower Grove Road, Reading.
              No, I have never seen this face which you show me in the
              photograph. You would hardly forget it, would you, sir, for I've
              seldom seen an uglier. Have we any Italians on the staff? Yes,
              sir, we have several among our workpeople and cleaners. I dare say
              they might get a peep at that sales book if they wanted to. There
              is no particular reason for keeping a watch upon that book. Well,
              well, it's a very strange business, and I hope that you'll let me
              know if anything comes of your inquiries.”
            </TextNode>

            <TextNode>
              Holmes had taken several notes during Mr. Harding's evidence, and
              I could see that he was thoroughly satisfied by the turn which
              affairs were taking. He made no remark, however, save that, unless
              we hurried, we should be late for our appointment with Lestrade.
              Sure enough, when we reached Baker Street the detective was
              already there, and we found him pacing up and down in a fever of
              impatience. His look of importance showed that his day's work had
              not been in vain.
            </TextNode>

            <TextNode>“Well?” he asked. “What luck, Mr. Holmes?”</TextNode>

            <TextNode>
              “We have had a very busy day, and not entirely a wasted one,” my
              friend explained. “We have seen both the retailers and also the
              wholesale manufacturers. I can trace each of the busts now from
              the beginning.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page195;

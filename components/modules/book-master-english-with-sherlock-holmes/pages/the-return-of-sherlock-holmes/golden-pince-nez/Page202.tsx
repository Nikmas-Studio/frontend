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

function Page202({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;GOLDEN&nbsp;PINCE&#8209;NEZ'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Yes,” I said, “I can follow each of your arguments. I confess,
              however, that I am unable to understand how you arrive at the
              double visit to the optician.”
            </TextNode>

            <TextNode>Holmes took the glasses in his hand.</TextNode>

            <TextNode>
              “You will perceive,” he said, “that the clips are lined with tiny
              bands of cork to soften the pressure upon the nose. One of these
              is discoloured and worn to some slight extent, but the other is
              new. Evidently one has fallen off and been replaced. I should
              judge that the older of them has not been there more than a few
              months. They exactly correspond, so I gather that the lady went
              back to the same establishment for the second.”
            </TextNode>

            <TextNode>
              “By George, it's marvellous!” cried Hopkins, in an ecstasy of
              admiration. “To think that I had all that evidence in my hand and
              never knew it! I had intended, however, to go the round of the
              London opticians.”
            </TextNode>

            <TextNode>
              “Of course you would. Meanwhile, have you anything more to tell us
              about the case?”
            </TextNode>

            <TextNode>
              “Nothing, Mr. Holmes. I think that you know as much as I do
              now—probably more. We have had inquiries made as to any stranger
              seen on the country roads or at the railway station. We have heard
              of none. What beats me is the utter want of all object in the
              crime. Not a ghost of a motive can anyone suggest.”
            </TextNode>

            <TextNode>
              “Ah! there I am not in a position to help you. But I suppose you
              want us to come out to-morrow?”
            </TextNode>

            <TextNode>
              “If it is not asking too much, Mr. Holmes. There's a train from
              Charing Cross to Chatham at six in the morning, and we should be
              at Yoxley Old Place between eight and nine.”
            </TextNode>

            <TextNode>
              “Then we shall take it. Your case has certainly some features of
              great interest, and I shall be delighted to look into it. Well,
              it's nearly one, and we had best get a few hours' sleep. I dare
              say you can manage all right on the sofa in front of the fire.
              I'll light my spirit-lamp and give you a cup of coffee before we
              start.”
            </TextNode>

            <TextNode>
              The gale had blown itself out next day, but it was a bitter
              morning when we started upon our journey. We saw the cold winter
              sun rise over the dreary marshes of the Thames and the long,
              sullen reaches of the river, which I shall ever associate with our
              pursuit of the Andaman Islander in the earlier days of our career.
              After a long and weary journey we alighted at a small station some
              miles from Chatham. While a horse was being put into a trap at the
              local inn we snatched a hurried breakfast, and so we were all
              ready for business when we at last arrived at Yoxley Old Place. A
              constable met us at the garden gate.
            </TextNode>

            <TextNode>“Well, Wilson, any news?”</TextNode>

            <TextNode>“No, sir, nothing.”</TextNode>

            <TextNode>“No reports of any stranger seen?”</TextNode>

            <TextNode>
              “No, sir. Down at the station they are certain that no stranger
              either came or went yesterday.”
            </TextNode>

            <TextNode>
              “Have you had inquiries made at inns and lodgings?”
            </TextNode>

            <TextNode>
              “Yes, sir; there is no one that we cannot account for.”
            </TextNode>

            <TextNode>
              “Well, it's only a reasonable walk to Chatham. Anyone might stay
              there, or take a train without being observed. This is the garden
              path of which I spoke, Mr. Holmes. I'll pledge my word there was
              no mark on it yesterday.”
            </TextNode>

            <TextNode>“On which side were the marks on the grass?”</TextNode>

            <TextNode>
              “This side, sir. This narrow margin of grass between the path and
              the flower-bed. I can't see the traces now, but they were clear to
              me then.”
            </TextNode>

            <TextNode>
              “Yes, yes; someone has passed along,” said Holmes, stooping over
              the grass border. “Our lady must have picked her steps carefully,
              must she not, since on the one side she would leave a track on the
              path, and on the other an even clearer one on the soft bed?”
            </TextNode>

            <TextNode>“Yes, sir, she must have been a cool hand.”</TextNode>

            <TextNode>I saw an intent look pass over Holmes's face.</TextNode>

            <TextNode>
              “You say that she must have come back this way?”
            </TextNode>

            <TextNode>“Yes, sir; there is no other.”</TextNode>

            <TextNode>“On this strip of grass?”</TextNode>

            <TextNode>“Certainly, Mr. Holmes.”</TextNode>

            <TextNode>
              “Hum! It was a very remarkable performance—very remarkable. Well,
              I think we have exhausted the path. Let us go farther. This garden
              door is usually kept open, I suppose? Then this visitor had
              nothing to do but to walk in. The idea of murder was not in her
              mind, or she would have provided herself with some sort of weapon,
              instead of having to pick this knife off the writing-table. She
              advanced along this corridor, leaving no traces upon the cocoanut
              matting. Then she found herself in this study. How long was she
              there? We have no means of judging.”
            </TextNode>

            <TextNode>
              “Not more than a few minutes, sir. I forgot to tell you that Mrs.
              Marker, the housekeeper, had been in there tidying not very long
              before—about a quarter of an hour, she says.”
            </TextNode>

            <TextNode>
              “Well, that gives us a limit. Our lady enters this room and what
              does she do? She goes over to the writing-table. What for? Not for
              anything in the drawers. If there had been anything worth her
              taking it would surely have been locked up. No; it was for
              something in that wooden bureau. Halloa! what is that scratch upon
              the face of it? Just hold a match, Watson. Why did you not tell me
              of this, Hopkins?”
            </TextNode>

            <TextNode>
              The mark which he was examining began upon the brass work on the
              right-hand side of the keyhole, and extended for about four
              inches, where it had scratched the varnish from the surface.
            </TextNode>

            <TextNode>
              “I noticed it, Mr. Holmes. But you'll always find scratches round
              a keyhole.”
            </TextNode>

            <TextNode>
              “This is recent, quite recent. See how the brass shines where it
              is cut. An old scratch would be the same colour as the surface.
              Look at it through my lens. There's the varnish, too, like earth
              on each side of a furrow. Is Mrs. Marker there?”
            </TextNode>

            <TextNode>A sad-faced, elderly woman came into the room.</TextNode>

            <TextNode>“Did you dust this bureau yesterday morning?”</TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>“Did you notice this scratch?”</TextNode>

            <TextNode>“No, sir, I did not.”</TextNode>

            <TextNode>
              “I am sure you did not, for a duster would have swept away these
              shreds of varnish. Who has the key of this bureau?”
            </TextNode>

            <TextNode>“The Professor keeps it on his watch-chain.”</TextNode>

            <TextNode>“Is it a simple key?”</TextNode>

            <TextNode>“No, sir; it is a Chubb's key.”</TextNode>

            <TextNode>
              “Very good. Mrs. Marker, you can go. Now we are making a little
              progress. Our lady enters the room, advances to the bureau, and
              either opens it or tries to do so. While she is thus engaged young
              Willoughby Smith enters the room. In her hurry to withdraw the key
              she makes this scratch upon the door. He seizes her, and she,
              snatching up the nearest object, which happens to be this knife,
              strikes at him in order to make him let go his hold. The blow is a
              fatal one. He falls and she escapes, either with or without the
              object for which she has come. Is Susan the maid there? Could
              anyone have got away through that door after the time that you
              heard the cry, Susan?”
            </TextNode>

            <TextNode>
              “No sir; it is impossible. Before I got down the stair I'd have
              seen anyone in the passage. Besides, the door never opened, for I
              would have heard it.”
            </TextNode>

            <TextNode>
              “That settles this exit. Then no doubt the lady went out the way
              she came. I understand that this other passage leads only to the
              Professor's room. There is no exit that way?”
            </TextNode>

            <TextNode>“No, sir.”</TextNode>

            <TextNode>
              “We shall go down it and make the acquaintance of the Professor.
              Halloa, Hopkins! this is very important, very important indeed.
              The Professor's corridor is also lined with cocoanut matting.”
            </TextNode>

            <TextNode>“Well, sir, what of that?”</TextNode>

            <TextNode>
              “Don't you see any bearing upon the case? Well, well, I don't
              insist upon it. No doubt I am wrong. And yet it seems to me to be
              suggestive. Come with me and introduce me.”
            </TextNode>

            <TextNode>
              We passed down the passage, which was of the same length as that
              which led to the garden. At the end was a short flight of steps
              ending in a door. Our guide knocked, and then ushered us into the
              Professor's bedroom.
            </TextNode>

            <TextNode>
              It was a very large chamber, lined with innumerable volumes, which
              had overflowed from the shelves and lay in piles in the corners,
              or were stacked all round at the base of the cases. The bed was in
              the centre of the room, and in it, propped up with pillows, was
              the owner of the house. I have seldom seen a more
              remarkable-looking person. It was a gaunt, aquiline face which was
              turned towards us, with piercing dark eyes, which lurked in deep
              hollows under overhung and tufted brows. His hair and beard were
              white, save that the latter was curiously stained with yellow
              around his mouth. A cigarette glowed amid the tangle of white
              hair, and the air of the room was fetid with stale tobacco-smoke.
              As he held out his hand to Holmes I perceived that it also was
              stained yellow with nicotine.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “A smoker, Mr. Holmes?” said he, speaking well-chosen English with
              a curious little mincing accent. “Pray take a cigarette. And you,
              sir? I can recommend them, for I have them especially prepared by
              Ionides of Alexandria. He sends me a thousand at a time, and I
              grieve to say that I have to arrange for a fresh supply every
              fortnight. Bad, sir, very bad, but an old man has few pleasures.
              Tobacco and my work—that is all that is left to me.”
            </TextNode>

            <TextNode>
              Holmes had lit a cigarette, and was shooting little darting
              glances all over the room.
            </TextNode>

            <TextNode>
              “Tobacco and my work, but now only tobacco,” the old man
              exclaimed. “Alas! what a fatal interruption! Who could have
              foreseen such a terrible catastrophe? So estimable a young man! I
              assure you that after a few months' training he was an admirable
              assistant. What do you think of the matter, Mr. Holmes?”
            </TextNode>

            <TextNode>“I have not yet made up my mind.”</TextNode>

            <TextNode>
              “I shall indeed be indebted to you if you can throw a light where
              all is so dark to us. To a poor bookworm and invalid like myself
              such a blow is paralyzing. I seem to have lost the faculty of
              thought. But you are a man of action—you are a man of affairs. It
              is part of the everyday routine of your life. You can preserve
              your balance in every emergency. We are fortunate indeed in having
              you at our side.”
            </TextNode>

            <TextNode>
              Holmes was pacing up and down one side of the room whilst the old
              Professor was talking. I observed that he was smoking with
              extraordinary rapidity. It was evident that he shared our host's
              liking for the fresh Alexandrian cigarettes.
            </TextNode>

            <TextNode>
              “Yes, sir, it is a crushing blow,” said the old man. “That is my
              magnum opus—the pile of papers on the side table yonder. It is my
              analysis of the documents found in the Coptic monasteries of Syria
              and Egypt, a work which will cut deep at the very foundations of
              revealed religion. With my enfeebled health I do not know whether
              I shall ever be able to complete it now that my assistant has been
              taken from me. Dear me, Mr. Holmes; why, you are even a quicker
              smoker than I am myself.”
            </TextNode>

            <TextNode>Holmes smiled.</TextNode>

            <TextNode>
              “I am a connoisseur,” said he, taking another cigarette from the
              box—his fourth—and lighting it from the stub of that which he had
              finished. “I will not trouble you with any lengthy
              cross-examination, Professor Coram, since I gather that you were
              in bed at the time of the crime and could know nothing about it. I
              would only ask this. What do you imagine that this poor fellow
              meant by his last words: ‘The Professor—it was she’?”
            </TextNode>

            <TextNode>The Professor shook his head.</TextNode>

            <TextNode>
              “Susan is a country girl,” said he, “and you know the incredible
              stupidity of that class. I fancy that the poor fellow murmured
              some incoherent delirious words, and that she twisted them into
              this meaningless message.”
            </TextNode>

            <TextNode>
              “I see. You have no explanation yourself of the tragedy?”
            </TextNode>

            <TextNode>
              “Possibly an accident; possibly—I only breathe it among
              ourselves—a suicide. Young men have their hidden troubles—some
              affair of the heart, perhaps, which we have never known. It is a
              more probable supposition than murder.”
            </TextNode>

            <TextNode>“But the eye-glasses?”</TextNode>

            <TextNode>
              “Ah! I am only a student—a man of dreams. I cannot explain the
              practical things of life. But still, we are aware, my friend, that
              love-gages may take strange shapes. By all means take another
              cigarette. It is a pleasure to see anyone appreciate them so. A
              fan, a glove, glasses—who knows what article may be carried as a
              token or treasured when a man puts an end to his life? This
              gentleman speaks of footsteps in the grass; but, after all, it is
              easy to be mistaken on such a point. As to the knife, it might
              well be thrown far from the unfortunate man as he fell. It is
              possible that I speak as a child, but to me it seems that
              Willoughby Smith has met his fate by his own hand.”
            </TextNode>

            <TextNode>
              Holmes seemed struck by the theory thus put forward, and he
              continued to walk up and down for some time, lost in thought and
              consuming cigarette after cigarette.
            </TextNode>

            <TextNode>
              “Tell me, Professor Coram,” he said, at last, “what is in that
              cupboard in the bureau?”
            </TextNode>

            <TextNode>
              “Nothing that would help a thief. Family papers, letters from my
              poor wife, diplomas of Universities which have done me honour.
              Here is the key. You can look for yourself.”
            </TextNode>

            <TextNode>
              Holmes picked up the key and looked at it for an instant; then he
              handed it back.
            </TextNode>

            <TextNode>
              “No; I hardly think that it would help me,” said he. “I should
              prefer to go quietly down to your garden and turn the whole matter
              over in my head. There is something to be said for the theory of
              suicide which you have put forward. We must apologize for having
              intruded upon you, Professor Coram, and I promise that we won't
              disturb you until after lunch. At two o'clock we will come again
              and report to you anything which may have happened in the
              interval.”
            </TextNode>

            <TextNode>
              Holmes was curiously distrait, and we walked up and down the
              garden path for some time in silence.
            </TextNode>

            <TextNode>“Have you a clue?” I asked, at last.</TextNode>

            <TextNode>
              “It depends upon those cigarettes that I smoked,” said he. “It is
              possible that I am utterly mistaken. The cigarettes will show me.”
            </TextNode>

            <TextNode>“My dear Holmes,” I exclaimed, “how on earth—”</TextNode>

            <TextNode>
              “Well, well, you may see for yourself. If not, there's no harm
              done. Of course, we always have the optician clue to fall back
              upon, but I take a short cut when I can get it. Ah, here is the
              good Mrs. Marker! Let us enjoy five minutes of instructive
              conversation with her.”
            </TextNode>

            <TextNode>
              I may have remarked before that Holmes had, when he liked, a
              peculiarly ingratiating way with women, and that he very readily
              established terms of confidence with them. In half the time which
              he had named he had captured the housekeeper's goodwill, and was
              chatting with her as if he had known her for years.
            </TextNode>

            <TextNode>
              “Yes, Mr. Holmes, it is as you say, sir. He does smoke something
              terrible. All day and sometimes all night, sir. I've seen that
              room of a morning—well, sir, you'd have thought it was a London
              fog. Poor young Mr. Smith, he was a smoker also, but not as bad as
              the Professor. His health—well, I don't know that it's better nor
              worse for the smoking.”
            </TextNode>

            <TextNode>“Ah!” said Holmes, “but it kills the appetite.”</TextNode>

            <TextNode>“Well, I don't know about that, sir.”</TextNode>

            <TextNode>“I suppose the Professor eats hardly anything?”</TextNode>

            <TextNode>“Well, he is variable. I'll say that for him.”</TextNode>

            <TextNode>
              “I'll wager he took no breakfast this morning, and won't face his
              lunch after all the cigarettes I saw him consume.”
            </TextNode>

            <TextNode>
              “Well, you're out there, sir, as it happens, for he ate a
              remarkable big breakfast this morning. I don't know when I've
              known him make a better one, and he's ordered a good dish of
              cutlets for his lunch. I'm surprised myself, for since I came into
              that room yesterday and saw young Mr. Smith lying there on the
              floor I couldn't bear to look at food. Well, it takes all sorts to
              make a world, and the Professor hasn't let it take his appetite
              away.”
            </TextNode>

            <TextNode>
              We loitered the morning away in the garden. Stanley Hopkins had
              gone down to the village to look into some rumours of a strange
              woman who had been seen by some children on the Chatham Road the
              previous morning. As to my friend, all his usual energy seemed to
              have deserted him. I had never known him handle a case in such a
              half-hearted fashion. Even the news brought back by Hopkins that
              he had found the children and that they had undoubtedly seen a
              woman exactly corresponding with Holmes's description, and wearing
              either spectacles or eye-glasses, failed to rouse any sign of keen
              interest. He was more attentive when Susan, who waited upon us at
              lunch, volunteered the information that she believed Mr. Smith had
              been out for a walk yesterday morning, and that he had only
              returned half an hour before the tragedy occurred. I could not
              myself see the bearing of this incident, but I clearly perceived
              that Holmes was weaving it into the general scheme which he had
              formed in his brain. Suddenly he sprang from his chair and glanced
              at his watch. “Two o'clock, gentlemen,” said he. “We must go up
              and have it out with our friend the Professor.”
            </TextNode>

            <TextNode>
              The old man had just finished his lunch, and certainly his empty
              dish bore evidence to the good appetite with which his housekeeper
              had credited him. He was, indeed, a weird figure as he turned his
              white mane and his glowing eyes towards us. The eternal cigarette
              smouldered in his mouth. He had been dressed and was seated in an
              arm-chair by the fire.
            </TextNode>

            <TextNode>
              “Well, Mr. Holmes, have you solved this mystery yet?” He shoved
              the large tin of cigarettes which stood on a table beside him
              towards my companion. Holmes stretched out his hand at the same
              moment, and between them they tipped the box over the edge. For a
              minute or two we were all on our knees retrieving stray cigarettes
              from impossible places. When we rose again I observed that
              Holmes's eyes were shining and his cheeks tinged with colour. Only
              at a crisis have I seen those battle-signals flying.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page202;

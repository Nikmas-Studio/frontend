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

function Page116({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;BERYL&nbsp;CORONET'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Your son had no shoes or slippers on when you saw him?”
            </TextNode>
            <TextNode>
              “He had nothing on save only his trousers and shirt.”
            </TextNode>
            <TextNode>
              “Thank you. We have certainly been favoured with extraordinary
              luck during this inquiry, and it will be entirely our own fault if
              we do not succeed in clearing the matter up. With your permission,
              Mr. Holder, I shall now continue my investigations outside.”
            </TextNode>
            <TextNode>
              He went alone, at his own request, for he explained that any
              unnecessary footmarks might make his task more difficult. For an
              hour or more he was at work, returning at last with his feet heavy
              with snow and his features as inscrutable as ever.
            </TextNode>
            <TextNode>
              “I think that I have seen now all that there is to see, Mr.
              Holder,” said he; “I can serve you best by returning to my rooms.”
            </TextNode>
            <TextNode>“But the gems, Mr. Holmes. Where are they?”</TextNode>
            <TextNode>“I cannot tell.”</TextNode>
            <TextNode>
              The banker wrung his hands. “I shall never see them again!” he
              cried. “And my son? You give me hopes?”
            </TextNode>
            <TextNode>“My opinion is in no way altered.”</TextNode>
            <TextNode>
              “Then, for God's sake, what was this dark business which was acted
              in my house last night?”
            </TextNode>
            <TextNode>
              “If you can call upon me at my Baker Street rooms to-morrow
              morning between nine and ten I shall be happy to do what I can to
              make it clearer. I understand that you give me carte blanche to
              act for you, provided only that I get back the gems, and that you
              place no limit on the sum I may draw.”
            </TextNode>
            <TextNode>“I would give my fortune to have them back.”</TextNode>
            <TextNode>
              “Very good. I shall look into the matter between this and then.
              Good-bye; it is just possible that I may have to come over here
              again before evening.”
            </TextNode>
            <TextNode>
              It was obvious to me that my companion's mind was now made up
              about the case, although what his conclusions were was more than I
              could even dimly imagine. Several times during our homeward
              journey I endeavoured to sound him upon the point, but he always
              glided away to some other topic, until at last I gave it over in
              despair. It was not yet three when we found ourselves in our rooms
              once more. He hurried to his chamber and was down again in a few
              minutes dressed as a common loafer. With his collar turned up, his
              shiny, seedy coat, his red cravat, and his worn boots, he was a
              perfect sample of the class.
            </TextNode>
            <TextNode>
              “I think that this should do,” said he, glancing into the glass
              above the fireplace. “I only wish that you could come with me,
              Watson, but I fear that it won't do. I may be on the trail in this
              matter, or I may be following a will-o'-the-wisp, but I shall soon
              know which it is. I hope that I may be back in a few hours.” He
              cut a slice of beef from the joint upon the sideboard, sandwiched
              it between two rounds of bread, and thrusting this rude meal into
              his pocket he started off upon his expedition.
            </TextNode>
            <TextNode>
              I had just finished my tea when he returned, evidently in
              excellent spirits, swinging an old elastic-sided boot in his hand.
              He chucked it down into a corner and helped himself to a cup of
              tea.
            </TextNode>
            <TextNode>
              “I only looked in as I passed,” said he. “I am going right on.”
            </TextNode>
            <TextNode>“Where to?”</TextNode>
            <TextNode>
              “Oh, to the other side of the West End. It may be some time before
              I get back. Don't wait up for me in case I should be late.”
            </TextNode>
            <TextNode>“How are you getting on?”</TextNode>
            <TextNode>
              “Oh, so so. Nothing to complain of. I have been out to Streatham
              since I saw you last, but I did not call at the house. It is a
              very sweet little problem, and I would not have missed it for a
              good deal. However, I must not sit gossiping here, but must get
              these disreputable clothes off and return to my highly respectable
              self.”
            </TextNode>
            <TextNode>
              I could see by his manner that he had stronger reasons for
              satisfaction than his words alone would imply. His eyes twinkled,
              and there was even a touch of colour upon his sallow cheeks. He
              hastened upstairs, and a few minutes later I heard the slam of the
              hall door, which told me that he was off once more upon his
              congenial hunt.
            </TextNode>
            <TextNode>
              I waited until midnight, but there was no sign of his return, so I
              retired to my room. It was no uncommon thing for him to be away
              for days and nights on end when he was hot upon a scent, so that
              his lateness caused me no surprise. I do not know at what hour he
              came in, but when I came down to breakfast in the morning there he
              was with a cup of coffee in one hand and the paper in the other,
              as fresh and trim as possible.
            </TextNode>
            <TextNode>
              “You will excuse my beginning without you, Watson,” said he, “but
              you remember that our client has rather an early appointment this
              morning.”
            </TextNode>
            <TextNode>
              “Why, it is after nine now,” I answered. “I should not be
              surprised if that were he. I thought I heard a ring.”
            </TextNode>
            <TextNode>
              It was, indeed, our friend the financier. I was shocked by the
              change which had come over him, for his face which was naturally
              of a broad and massive mould, was now pinched and fallen in, while
              his hair seemed to me at least a shade whiter. He entered with a
              weariness and lethargy which was even more painful than his
              violence of the morning before, and he dropped heavily into the
              armchair which I pushed forward for him.
            </TextNode>
            <TextNode>
              “I do not know what I have done to be so severely tried,” said he.
              “Only two days ago I was a happy and prosperous man, without a
              care in the world. Now I am left to a lonely and dishonoured age.
              One sorrow comes close upon the heels of another. My niece, Mary,
              has deserted me.”
            </TextNode>
            <TextNode>“Deserted you?”</TextNode>
            <TextNode>
              “Yes. Her bed this morning had not been slept in, her room was
              empty, and a note for me lay upon the hall table. I had said to
              her last night, in sorrow and not in anger, that if she had
              married my boy all might have been well with him. Perhaps it was
              thoughtless of me to say so. It is to that remark that she refers
              in this note:
            </TextNode>
            <Indent>
              <TextNode className='italic' noIndent>
                “ ‘My dearest Uncle:
              </TextNode>
              <TextNode noIndent>
                “ ‘I feel that I have brought trouble upon you, and that if I
                had acted differently this terrible misfortune might never have
                occurred. I cannot, with this thought in my mind, ever again be
                happy under your roof, and I feel that I must leave you forever.
                Do not worry about my future, for that is provided for; and,
                above all, do not search for me, for it will be fruitless labour
                and an ill-service to me. In life or in death, I am ever
              </TextNode>
              <TextNode className='italic' noIndent>
                “ ‘Your loving
              </TextNode>
              <TextNode className='italic' noIndent>
                “ ‘Mary.’
              </TextNode>
            </Indent>
            <TextNode noIndent>
              “What could she mean by that note, Mr. Holmes? Do you think it
              points to suicide?”
            </TextNode>
            <TextNode>
              “No, no, nothing of the kind. It is perhaps the best possible
              solution. I trust, Mr. Holder, that you are nearing the end of
              your troubles.”
            </TextNode>

            <TextNode>
              “Ha! You say so! You have heard something, Mr. Holmes; you have
              learned something! Where are the gems?”
            </TextNode>

            <TextNode>
              “You would not think £1000 pounds apiece an excessive sum for
              them?”
            </TextNode>

            <TextNode>“I would pay ten.”</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “That would be unnecessary. Three thousand will cover the matter.
              And there is a little reward, I fancy. Have you your check-book?
              Here is a pen. Better make it out for £4000.”
            </TextNode>

            <TextNode>
              With a dazed face the banker made out the required check. Holmes
              walked over to his desk, took out a little triangular piece of
              gold with three gems in it, and threw it down upon the table.
            </TextNode>

            <TextNode>With a shriek of joy our client clutched it up.</TextNode>

            <TextNode>
              “You have it!” he gasped. “I am saved! I am saved!”
            </TextNode>

            <TextNode>
              The reaction of joy was as passionate as his grief had been, and
              he hugged his recovered gems to his bosom.
            </TextNode>

            <TextNode>
              “There is one other thing you owe, Mr. Holder,” said Sherlock
              Holmes rather sternly.
            </TextNode>

            <TextNode>
              “Owe!” He caught up a pen. “Name the sum, and I will pay it.”
            </TextNode>

            <TextNode>
              “No, the debt is not to me. You owe a very humble apology to that
              noble lad, your son, who has carried himself in this matter as I
              should be proud to see my own son do, should I ever chance to have
              one.”
            </TextNode>

            <TextNode>“Then it was not Arthur who took them?”</TextNode>

            <TextNode>
              “I told you yesterday, and I repeat to-day, that it was not.”
            </TextNode>

            <TextNode>
              “You are sure of it! Then let us hurry to him at once to let him
              know that the truth is known.”
            </TextNode>

            <TextNode>
              “He knows it already. When I had cleared it all up I had an
              interview with him, and finding that he would not tell me the
              story, I told it to him, on which he had to confess that I was
              right and to add the very few details which were not yet quite
              clear to me. Your news of this morning, however, may open his
              lips.”
            </TextNode>

            <TextNode>
              “For heaven's sake, tell me, then, what is this extraordinary
              mystery!”
            </TextNode>

            <TextNode>
              “I will do so, and I will show you the steps by which I reached
              it. And let me say to you, first, that which it is hardest for me
              to say and for you to hear: there has been an understanding
              between Sir George Burnwell and your niece Mary. They have now
              fled together.”
            </TextNode>

            <TextNode>“My Mary? Impossible!”</TextNode>

            <TextNode>
              “It is unfortunately more than possible; it is certain. Neither
              you nor your son knew the true character of this man when you
              admitted him into your family circle. He is one of the most
              dangerous men in England—a ruined gambler, an absolutely desperate
              villain, a man without heart or conscience. Your niece knew
              nothing of such men. When he breathed his vows to her, as he had
              done to a hundred before her, she flattered herself that she alone
              had touched his heart. The devil knows best what he said, but at
              least she became his tool and was in the habit of seeing him
              nearly every evening.”
            </TextNode>

            <TextNode>
              “I cannot, and I will not, believe it!” cried the banker with an
              ashen face.
            </TextNode>

            <TextNode>
              “I will tell you, then, what occurred in your house last night.
              Your niece, when you had, as she thought, gone to your room,
              slipped down and talked to her lover through the window which
              leads into the stable lane. His footmarks had pressed right
              through the snow, so long had he stood there. She told him of the
              coronet. His wicked lust for gold kindled at the news, and he bent
              her to his will. I have no doubt that she loved you, but there are
              women in whom the love of a lover extinguishes all other loves,
              and I think that she must have been one. She had hardly listened
              to his instructions when she saw you coming downstairs, on which
              she closed the window rapidly and told you about one of the
              servants' escapade with her wooden-legged lover, which was all
              perfectly true.
            </TextNode>

            <TextNode>
              “Your boy, Arthur, went to bed after his interview with you but he
              slept badly on account of his uneasiness about his club debts. In
              the middle of the night he heard a soft tread pass his door, so he
              rose and, looking out, was surprised to see his cousin walking
              very stealthily along the passage until she disappeared into your
              dressing-room. Petrified with astonishment, the lad slipped on
              some clothes and waited there in the dark to see what would come
              of this strange affair. Presently she emerged from the room again,
              and in the light of the passage-lamp your son saw that she carried
              the precious coronet in her hands. She passed down the stairs, and
              he, thrilling with horror, ran along and slipped behind the
              curtain near your door, whence he could see what passed in the
              hall beneath. He saw her stealthily open the window, hand out the
              coronet to someone in the gloom, and then closing it once more
              hurry back to her room, passing quite close to where he stood hid
              behind the curtain.
            </TextNode>

            <TextNode>
              “As long as she was on the scene he could not take any action
              without a horrible exposure of the woman whom he loved. But the
              instant that she was gone he realised how crushing a misfortune
              this would be for you, and how all-important it was to set it
              right. He rushed down, just as he was, in his bare feet, opened
              the window, sprang out into the snow, and ran down the lane, where
              he could see a dark figure in the moonlight. Sir George Burnwell
              tried to get away, but Arthur caught him, and there was a struggle
              between them, your lad tugging at one side of the coronet, and his
              opponent at the other. In the scuffle, your son struck Sir George
              and cut him over the eye. Then something suddenly snapped, and
              your son, finding that he had the coronet in his hands, rushed
              back, closed the window, ascended to your room, and had just
              observed that the coronet had been twisted in the struggle and was
              endeavouring to straighten it when you appeared upon the scene.”
            </TextNode>

            <TextNode>“Is it possible?” gasped the banker.</TextNode>

            <TextNode>
              “You then roused his anger by calling him names at a moment when
              he felt that he had deserved your warmest thanks. He could not
              explain the true state of affairs without betraying one who
              certainly deserved little enough consideration at his hands. He
              took the more chivalrous view, however, and preserved her secret.”
            </TextNode>

            <TextNode>
              “And that was why she shrieked and fainted when she saw the
              coronet,” cried Mr. Holder. “Oh, my God! what a blind fool I have
              been! And his asking to be allowed to go out for five minutes! The
              dear fellow wanted to see if the missing piece were at the scene
              of the struggle. How cruelly I have misjudged him!”
            </TextNode>

            <TextNode>
              “When I arrived at the house,” continued Holmes, “I at once went
              very carefully round it to observe if there were any traces in the
              snow which might help me. I knew that none had fallen since the
              evening before, and also that there had been a strong frost to
              preserve impressions. I passed along the tradesmen's path, but
              found it all trampled down and indistinguishable. Just beyond it,
              however, at the far side of the kitchen door, a woman had stood
              and talked with a man, whose round impressions on one side showed
              that he had a wooden leg. I could even tell that they had been
              disturbed, for the woman had run back swiftly to the door, as was
              shown by the deep toe and light heel marks, while Wooden-leg had
              waited a little, and then had gone away. I thought at the time
              that this might be the maid and her sweetheart, of whom you had
              already spoken to me, and inquiry showed it was so. I passed round
              the garden without seeing anything more than random tracks, which
              I took to be the police; but when I got into the stable lane a
              very long and complex story was written in the snow in front of
              me.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page116;

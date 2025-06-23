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

function Page138({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE “GLORIA SCOTT”'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “ ‘You horrify me, Trevor!’ I cried. ‘What then could have been in
              this letter to cause so dreadful a result?’
            </TextNode>

            <TextNode>
              “ ‘Nothing. There lies the inexplicable part of it. The message
              was absurd and trivial. Ah, my God, it is as I feared!’
            </TextNode>

            <TextNode>
              “As he spoke we came round the curve of the avenue, and saw in the
              fading light that every blind in the house had been drawn down. As
              we dashed up to the door, my friend's face convulsed with grief, a
              gentleman in black emerged from it.
            </TextNode>

            <TextNode>“ ‘When did it happen, doctor?’ asked Trevor.</TextNode>

            <TextNode>“ ‘Almost immediately after you left.’</TextNode>

            <TextNode>“ ‘Did he recover consciousness?’</TextNode>

            <TextNode>“ ‘For an instant before the end.’</TextNode>

            <TextNode>“ ‘Any message for me?’</TextNode>

            <TextNode>
              “ ‘Only that the papers were in the back drawer of the Japanese
              cabinet.’
            </TextNode>

            <TextNode>
              “My friend ascended with the doctor to the chamber of death, while
              I remained in the study, turning the whole matter over and over in
              my head, and feeling as sombre as ever I had done in my life. What
              was the past of this Trevor, pugilist, traveler, and gold-digger,
              and how had he placed himself in the power of this acid-faced
              seaman? Why, too, should he faint at an allusion to the
              half-effaced initials upon his arm, and die of fright when he had
              a letter from Fordingham? Then I remembered that Fordingham was in
              Hampshire, and that this Mr. Beddoes, whom the seaman had gone to
              visit and presumably to blackmail, had also been mentioned as
              living in Hampshire. The letter, then, might either come from
              Hudson, the seaman, saying that he had betrayed the guilty secret
              which appeared to exist, or it might come from Beddoes, warning an
              old confederate that such a betrayal was imminent. So far it
              seemed clear enough. But then how could this letter be trivial and
              grotesque, as described by the son? He must have misread it. If
              so, it must have been one of those ingenious secret codes which
              mean one thing while they seem to mean another. I must see this
              letter. If there were a hidden meaning in it, I was confident that
              I could pluck it forth. For an hour I sat pondering over it in the
              gloom, until at last a weeping maid brought in a lamp, and close
              at her heels came my friend Trevor, pale but composed, with these
              very papers which lie upon my knee held in his grasp. He sat down
              opposite to me, drew the lamp to the edge of the table, and handed
              me a short note scribbled, as you see, upon a single sheet of gray
              paper. ‘The supply of game for London is going steadily up,’ it
              ran. ‘Head-keeper Hudson, we believe, has been now told to receive
              all orders for fly-paper and for preservation of your
              hen-pheasant's life.’
            </TextNode>

            <TextNode>
              “I dare say my face looked as bewildered as yours did just now
              when first I read this message. Then I reread it very carefully.
              It was evidently as I had thought, and some secret meaning must
              lie buried in this strange combination of words. Or could it be
              that there was a prearranged significance to such phrases as
              ‘fly-paper’ and ‘hen-pheasant’? Such a meaning would be arbitrary
              and could not be deduced in any way. And yet I was loath to
              believe that this was the case, and the presence of the word
              Hudson seemed to show that the subject of the message was as I had
              guessed, and that it was from Beddoes rather than the sailor. I
              tried it backwards, but the combination ‘life pheasant's hen’ was
              not encouraging. Then I tried alternate words, but neither ‘the of
              for’ nor ‘supply game London’ promised to throw any light upon it.
            </TextNode>

            <TextNode>
              “And then in an instant the key of the riddle was in my hands, and
              I saw that every third word, beginning with the first, would give
              a message which might well drive old Trevor to despair.
            </TextNode>

            <TextNode>
              “It was short and terse, the warning, as I now read it to my
              companion:
            </TextNode>

            <TextNode>
              “ ‘The game is up. Hudson has told all. Fly for your life.’
            </TextNode>

            <TextNode>
              “Victor Trevor sank his face into his shaking hands, ‘It must be
              that, I suppose,’ said he. “This is worse than death, for it means
              disgrace as well. But what is the meaning of these “head-keepers”
              and “hen-pheasants”?
            </TextNode>

            <TextNode>
              “ ‘It means nothing to the message, but it might mean a good deal
              to us if we had no other means of discovering the sender. You see
              that he has begun by writing “The … game … is,” and so on.
              Afterwards he had, to fulfill the prearranged cipher, to fill in
              any two words in each space. He would naturally use the first
              words which came to his mind, and if there were so many which
              referred to sport among them, you may be tolerably sure that he is
              either an ardent shot or interested in breeding. Do you know
              anything of this Beddoes?’
            </TextNode>

            <TextNode>
              “ ‘Why, now that you mention it,’ said he, ‘I remember that my
              poor father used to have an invitation from him to shoot over his
              preserves every autumn.’
            </TextNode>

            <TextNode>
              “ ‘Then it is undoubtedly from him that the note comes,’ said I.
              ‘It only remains for us to find out what this secret was which the
              sailor Hudson seems to have held over the heads of these two
              wealthy and respected men.’
            </TextNode>

            <TextNode>
              “ ‘Alas, Holmes, I fear that it is one of sin and shame!’ cried my
              friend. ‘But from you I shall have no secrets. Here is the
              statement which was drawn up by my father when he knew that the
              danger from Hudson had become imminent. I found it in the Japanese
              cabinet, as he told the doctor. Take it and read it to me, for I
              have neither the strength nor the courage to do it myself.’
            </TextNode>

            <TextNode>
              “These are the very papers, Watson, which he handed to me, and I
              will read them to you, as I read them in the old study that night
              to him. They are endorsed outside, as you see, ‘Some particulars
              of the voyage of the bark{' '}
              <span className='italic'>Gloria&nbsp;Scott</span>, from her
              leaving Falmouth on the 8th October, 1855, to her destruction in
              N. Lat. 15° 20', W. Long. 25° 14' on Nov. 6th.’ It is in the form
              of a letter, and runs in this way:
            </TextNode>

            <TextNode>
              “ ‘My dear, dear son, now that approaching disgrace begins to
              darken the closing years of my life, I can write with all truth
              and honesty that it is not the terror of the law, it is not the
              loss of my position in the county, nor is it my fall in the eyes
              of all who have known me, which cuts me to the heart; but it is
              the thought that you should come to blush for me—you who love me
              and who have seldom, I hope, had reason to do other than respect
              me. But if the blow falls which is forever hanging over me, then I
              should wish you to read this, that you may know straight from me
              how far I have been to blame. On the other hand, if all should go
              well (which may kind God Almighty grant!), then if by any chance
              this paper should be still undestroyed and should fall into your
              hands, I conjure you, by all you hold sacred, by the memory of
              your dear mother, and by the love which had been between us, to
              hurl it into the fire and to never give one thought to it again.
            </TextNode>

            <TextNode>
              “ ‘If then your eye goes onto read this line, I know that I shall
              already have been exposed and dragged from my home, or as is more
              likely, for you know that my heart is weak, by lying with my
              tongue sealed forever in death. In either case the time for
              suppression is past, and every word which I tell you is the naked
              truth, and this I swear as I hope for mercy.
            </TextNode>

            <TextNode>
              “ ‘My name, dear lad, is not Trevor. I was James Armitage in my
              younger days, and you can understand now the shock that it was to
              me a few weeks ago when your college friend addressed me in words
              which seemed to imply that he had surprised my secret. As Armitage
              it was that I entered a London banking-house, and as Armitage I
              was convicted of breaking my country's laws, and was sentenced to
              transportation. Do not think very harshly of me, laddie. It was a
              debt of honor, so called, which I had to pay, and I used money
              which was not my own to do it, in the certainty that I could
              replace it before there could be any possibility of its being
              missed. But the most dreadful ill-luck pursued me. The money which
              I had reckoned upon never came to hand, and a premature
              examination of accounts exposed my deficit. The case might have
              been dealt leniently with, but the laws were more harshly
              administered thirty years ago than now, and on my twenty-third
              birthday I found myself chained as a felon with thirty-seven other
              convicts in 'tween-decks of the bark{' '}
              <span className='italic'>Gloria&nbsp;Scott</span>, bound for
              Australia.
            </TextNode>

            <TextNode>
              “ ‘It was the year '55 when the Crimean war was at its height, and
              the old convict ships had been largely used as transports in the
              Black Sea. The government was compelled, therefore, to use smaller
              and less suitable vessels for sending out their prisoners.
              The&nbsp;<span className='italic'>Gloria&nbsp;Scott</span> had
              been in the Chinese tea-trade, but she was an old-fashioned,
              heavy-bowed, broad-beamed craft, and the new clippers had cut her
              out. She was a five-hundred-ton boat; and besides her thirty-eight
              jail-birds, she carried twenty-six of a crew, eighteen soldiers, a
              captain, three mates, a doctor, a chaplain, and four warders.
              Nearly a hundred souls were in her, all told, when we set sail
              from Falmouth.
            </TextNode>

            <TextNode>
              “ ‘The partitions between the cells of the convicts, instead of
              being of thick oak, as is usual in convict-ships, were quite thin
              and frail. The man next to me, upon the aft side, was one whom I
              had particularly noticed when we were led down the quay. He was a
              young man with a clear, hairless face, a long, thin nose, and
              rather nut-cracker jaws. He carried his head very jauntily in the
              air, had a swaggering style of walking, and was, above all else,
              remarkable for his extraordinary height. I don't think any of our
              heads would have come up to his shoulder, and I am sure that he
              could not have measured less than six and a half feet. It was
              strange among so many sad and weary faces to see one which was
              full of energy and resolution. The sight of it was to me like a
              fire in a snow-storm. I was glad, then, to find that he was my
              neighbor, and gladder still when, in the dead of the night, I
              heard a whisper close to my ear, and found that he had managed to
              cut an opening in the board which separated us.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “ ‘ “Hullo, chummy!” said he, “what's your name, and what are you
              here for?”
            </TextNode>

            <TextNode>
              “ ‘I answered him, and asked in turn who I was talking with.
            </TextNode>

            <TextNode>
              “ ‘ “I'm Jack Prendergast,” said he, “and by God! You'll learn to
              bless my name before you've done with me.”
            </TextNode>

            <TextNode>
              “ ‘I remembered hearing of his case, for it was one which had made
              an immense sensation throughout the country some time before my
              own arrest. He was a man of good family and of great ability, but
              of incurably vicious habits, who had, by an ingenious system of
              fraud, obtained huge sums of money from the leading London
              merchants.
            </TextNode>

            <TextNode>
              “ ‘ “Ha, ha! You remember my case!” said he proudly.
            </TextNode>

            <TextNode>“ ‘ “Very well, indeed.”</TextNode>

            <TextNode>
              “ ‘ “Then maybe you remember something queer about it?”
            </TextNode>

            <TextNode>“ ‘ “What was that, then?”</TextNode>

            <TextNode>
              “ ‘ “I'd had nearly a quarter of a million, hadn't I?”
            </TextNode>

            <TextNode>“ ‘ “So it was said.”</TextNode>

            <TextNode>“ ‘ “But none was recovered, eh?”</TextNode>

            <TextNode>“ ‘ “No.”</TextNode>

            <TextNode>
              “ ‘ “Well, where d'ye suppose the balance is?” he asked.
            </TextNode>

            <TextNode>“ ‘ “I have no idea,” said I.</TextNode>

            <TextNode>
              “ ‘ “Right between my finger and thumb,” he cried. “By God! I've
              got more pounds to my name than you've hairs on your head. And if
              you've money, my son, and know how to handle it and spread it, you
              can do anything. Now, you don't think it likely that a man who
              could do anything is going to wear his breeches out sitting in the
              stinking hold of a rat-gutted, beetle-ridden, mouldy old coffin of
              a Chin China coaster. No, sir, such a man will look after himself
              and will look after his chums. You may lay to that! You hold on to
              him, and you may kiss the book that he'll haul you through.”
            </TextNode>

            <TextNode>
              “ ‘That was his style of talk, and at first I thought it meant
              nothing; but after a while, when he had tested me and sworn me in
              with all possible solemnity, he let me understand that there
              really was a plot to gain command of the vessel. A dozen of the
              prisoners had hatched it before they came aboard, Prendergast was
              the leader, and his money was the motive power.
            </TextNode>

            <TextNode>
              “ ‘ “I'd a partner,” said he, “a rare good man, as true as a stock
              to a barrel. He's got the dibbs, he has, and where do you think he
              is at this moment? Why, he's the chaplain of this ship—the
              chaplain, no less! He came aboard with a black coat, and his
              papers right, and money enough in his box to buy the thing right
              up from keel to main-truck. The crew are his, body and soul. He
              could buy 'em at so much a gross with a cash discount, and he did
              it before ever they signed on. He's got two of the warders and
              Mercer, the second mate, and he'd get the captain himself, if he
              thought him worth it.”
            </TextNode>

            <TextNode>“ ‘ “What are we to do, then?” I asked.</TextNode>

            <TextNode>
              “ ‘ “What do you think?” said he. “We'll make the coats of some of
              these soldiers redder than ever the tailor did.”
            </TextNode>

            <TextNode>“ ‘ “But they are armed,” said I.</TextNode>

            <TextNode>
              “ ‘ “And so shall we be, my boy. There's a brace of pistols for
              every mother's son of us, and if we can't carry this ship, with
              the crew at our back, it's time we were all sent to a young
              misses' boarding-school. You speak to your mate upon the left
              to-night, and see if he is to be trusted.”
            </TextNode>

            <TextNode>
              “ ‘I did so, and found my other neighbor to be a young fellow in
              much the same position as myself, whose crime had been forgery.
              His name was Evans, but he afterwards changed it, like myself, and
              he is now a rich and prosperous man in the south of England. He
              was ready enough to join the conspiracy, as the only means of
              saving ourselves, and before we had crossed the Bay there were
              only two of the prisoners who were not in the secret. One of these
              was of weak mind, and we did not dare to trust him, and the other
              was suffering from jaundice, and could not be of any use to us.
            </TextNode>

            <TextNode>
              “ ‘From the beginning there was really nothing to prevent us from
              taking possession of the ship. The crew were a set of ruffians,
              specially picked for the job. The sham chaplain came into our
              cells to exhort us, carrying a black bag, supposed to be full of
              tracts, and so often did he come that by the third day we had each
              stowed away at the foot of our beds a file, a brace of pistols, a
              pound of powder, and twenty slugs. Two of the warders were agents
              of Prendergast, and the second mate was his right-hand man. The
              captain, the two mates, two warders Lieutenant Martin, his
              eighteen soldiers, and the doctor were all that we had against us.
              Yet, safe as it was, we determined to neglect no precaution, and
              to make our attack suddenly by night. It came, however, more
              quickly than we expected, and in this way.
            </TextNode>

            <TextNode>
              “ ‘One evening, about the third week after our start, the doctor
              had come down to see one of the prisoners who was ill, and putting
              his hand down on the bottom of his bunk he felt the outline of the
              pistols. If he had been silent he might have blown the whole
              thing, but he was a nervous little chap, so he gave a cry of
              surprise and turned so pale that the man knew what was up in an
              instant and seized him. He was gagged before he could give the
              alarm, and tied down upon the bed. He had unlocked the door that
              led to the deck, and we were through it in a rush. The two
              sentries were shot down, and so was a corporal who came running to
              see what was the matter. There were two more soldiers at the door
              of the state-room, and their muskets seemed not to be loaded, for
              they never fired upon us, and they were shot while trying to fix
              their bayonets. Then we rushed on into the captain's cabin, but as
              we pushed open the door there was an explosion from within, and
              there he lay with his brains smeared over the chart of the
              Atlantic which was pinned upon the table, while the chaplain stood
              with a smoking pistol in his hand at his elbow. The two mates had
              both been seized by the crew, and the whole business seemed to be
              settled.
            </TextNode>

            <TextNode>
              “ ‘The state-room was next the cabin, and we flocked in there and
              flopped down on the settees, all speaking together, for we were
              just mad with the feeling that we were free once more. There were
              lockers all round, and Wilson, the sham chaplain, knocked one of
              them in, and pulled out a dozen of brown sherry. We cracked off
              the necks of the bottles, poured the stuff out into tumblers, and
              were just tossing them off, when in an instant without warning
              there came the roar of muskets in our ears, and the saloon was so
              full of smoke that we could not see across the table. When it
              cleared again the place was a shambles. Wilson and eight others
              were wriggling on the top of each other on the floor, and the
              blood and the brown sherry on that table turn me sick now when I
              think of it. We were so cowed by the sight that I think we should
              have given the job up if had not been for Prendergast. He bellowed
              like a bull and rushed for the door with all that were left alive
              at his heels. Out we ran, and there on the poop were the
              lieutenent and ten of his men. The swing skylights above the
              saloon table had been a bit open, and they had fired on us through
              the slit. We got on them before they could load, and they stood to
              it like men; but we had the upper hand of them, and in five
              minutes it was all over. My God! Was there ever a slaughter-house
              like that ship! Predergast was like a raging devil, and he picked
              the soldiers up as if they had been children and threw them
              overboard alive or dead. There was one sergeant that was horribly
              wounded and yet kept on swimming for a surprising time, until some
              one in mercy blew out his brains. When the fighting was over there
              was no one left of our enemies except just the warders, the mates,
              and the doctor.
            </TextNode>

            <TextNode>
              “ ‘It was over them that the great quarrel arose. There were many
              of us who were glad enough to win back our freedom, and yet who
              had no wish to have murder on our souls. It was one thing to knock
              the soldiers over with their muskets in their hands, and it was
              another to stand by while men were being killed in cold blood.
              Eight of us, five convicts and three sailors, said that we would
              not see it done. But there was no moving Predergast and those who
              were with him. Our only chance of safety lay in making a clean job
              of it, said he, and he would not leave a tongue with power to wag
              in a witness-box. It nearly came to our sharing the fate of the
              prisoners, but at last he said that if we wished we might take a
              boat and go. We jumped at the offer, for we were already sick of
              these blookthirsty doings, and we saw that there would be worse
              before it was done. We were given a suit of sailor togs each, a
              barrel of water, two casks, one of junk and one of biscuits, and a
              compass. Prendergast threw us over a chart, told us that we were
              shipwrecked mariners whose ship had foundered in Lat. 15° and
              Long. 25° west, and then cut the painter and let us go.
            </TextNode>

            <TextNode>
              “ ‘And now I come to the most surprising part of my story, my dear
              son. The seamen had hauled the fore-yard aback during the rising,
              but now as we left them they brought it square again, and as there
              was a light wind from the north and east the bark began to draw
              slowly away from us. Our boat lay, rising and falling, upon the
              long, smooth rollers, and Evans and I, who were the most educated
              of the party, were sitting in the sheets working out our position
              and planning what coast we should make for. It was a nice
              question, for the Cape de Verds were about five hundred miles to
              the north of us, and the African coast about seven hundred to the
              east. On the whole, as the wind was coming round to the north, we
              thought that Sierra Leone might be best, and turned our head in
              that direction, the bark being at that time nearly hull down on
              our starboard quarter. Suddenly as we looked at her we saw a dense
              black cloud of smoke shoot up from her, which hung like a
              monstrous tree upon the sky line. A few seconds later a roar like
              thunder burst upon our ears, and as the smoke thinned away there
              was no sign left of the&nbsp;
              <span className='italic'>Gloria&nbsp;Scott</span>. In an instant
              we swept the boat's head round again and pulled with all our
              strength for the place where the haze still trailing over the
              water marked the scene of this catastrophe.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page138;

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
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

function Page259({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;VALLEY&nbsp;OF&nbsp;FEAR'
      />
      <BookMainContainer>
        <H4>
          Chapter III.
          <br />
          Lodge 341, Vermissa
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              On the day following the evening which had contained so many
              exciting events, McMurdo moved his lodgings from old Jacob
              Shafter's and took up his quarters at the Widow MacNamara's on the
              extreme outskirts of the town. Scanlan, his original acquaintance
              aboard the train, had occasion shortly afterwards to move into
              Vermissa, and the two lodged together. There was no other boarder,
              and the hostess was an easy-going old Irishwoman who left them to
              themselves; so that they had a freedom for speech and action
              welcome to men who had secrets in common.
            </TextNode>

            <TextNode>
              Shafter had relented to the extent of letting McMurdo come to his
              meals there when he liked; so that his intercourse with Ettie was
              by no means broken. On the contrary, it drew closer and more
              intimate as the weeks went by.
            </TextNode>

            <TextNode>
              In his bedroom at his new abode McMurdo felt it safe to take out
              the coining moulds, and under many a pledge of secrecy a number of
              brothers from the lodge were allowed to come in and see them, each
              carrying away in his pocket some examples of the false money, so
              cunningly struck that there was never the slightest difficulty or
              danger in passing it. Why, with such a wonderful art at his
              command, McMurdo should condescend to work at all was a perpetual
              mystery to his companions; though he made it clear to anyone who
              asked him that if he lived without any visible means it would very
              quickly bring the police upon his track.
            </TextNode>

            <TextNode>
              One policeman was indeed after him already; but the incident, as
              luck would have it, did the adventurer a great deal more good than
              harm. After the first introduction there were few evenings when he
              did not find his way to McGinty's saloon, there to make closer
              acquaintance with “the boys,” which was the jovial title by which
              the dangerous gang who infested the place were known to one
              another. His dashing manner and fearlessness of speech made him a
              favourite with them all; while the rapid and scientific way in
              which he polished off his antagonist in an “all in” bar-room scrap
              earned the respect of that rough community. Another incident,
              however, raised him even higher in their estimation.
            </TextNode>

            <TextNode>
              Just at the crowded hour one night, the door opened and a man
              entered with the quiet blue uniform and peaked cap of the mine
              police. This was a special body raised by the railways and
              colliery owners to supplement the efforts of the ordinary civil
              police, who were perfectly helpless in the face of the organized
              ruffianism which terrorized the district. There was a hush as he
              entered, and many a curious glance was cast at him; but the
              relations between policemen and criminals are peculiar in some
              parts of the States, and McGinty himself standing behind his
              counter, showed no surprise when the policeman enrolled himself
              among his customers.
            </TextNode>

            <TextNode>
              “A straight whisky, for the night is bitter,” said the police
              officer. “I don't think we have met before, Councillor?”
            </TextNode>

            <TextNode>“You'll be the new captain?” said McGinty.</TextNode>

            <TextNode>
              “That's so. We're looking to you, Councillor, and to the other
              leading citizens, to help us in upholding law and order in this
              township. Captain Marvin is my name.”
            </TextNode>

            <TextNode>
              “We'd do better without you, Captain Marvin,” said McGinty coldly;
              “for we have our own police of the township, and no need for any
              imported goods. What are you but the paid tool of the capitalists,
              hired by them to club or shoot your poorer fellow citizen?”
            </TextNode>

            <TextNode>
              “Well, well, we won't argue about that,” said the police officer
              good-humouredly. “I expect we all do our duty same as we see it;
              but we can't all see it the same.” He had drunk off his glass and
              had turned to go, when his eyes fell upon the face of Jack
              McMurdo, who was scowling at his elbow. “Hullo! Hullo!” he cried,
              looking him up and down. “Here's an old acquaintance!”
            </TextNode>

            <TextNode>
              McMurdo shrank away from him. “I was never a friend to you nor any
              other cursed copper in my life,” said he.
            </TextNode>

            <TextNode>
              “An acquaintance isn't always a friend,” said the police captain,
              grinning. “You're Jack McMurdo of Chicago, right enough, and don't
              you deny it!”
            </TextNode>

            <TextNode>
              McMurdo shrugged his shoulders. “I'm not denying it,” said he.
              “D'ye think I'm ashamed of my own name?”
            </TextNode>

            <TextNode>“You've got good cause to be, anyhow.”</TextNode>

            <TextNode>
              “What the devil d'you mean by that?” he roared with his fists
              clenched.
            </TextNode>

            <TextNode>
              “No, no, Jack, bluster won't do with me. I was an officer in
              Chicago before ever I came to this darned coal bunker, and I know
              a Chicago crook when I see one.”
            </TextNode>

            <TextNode>
              McMurdo's face fell. “Don't tell me that you're Marvin of the
              Chicago Central!” he cried.
            </TextNode>

            <TextNode>
              “Just the same old Teddy Marvin, at your service. We haven't
              forgotten the shooting of Jonas Pinto up there.”
            </TextNode>

            <TextNode>“I never shot him.”</TextNode>

            <TextNode>
              “Did you not? That's good impartial evidence, ain't it? Well, his
              death came in uncommon handy for you, or they would have had you
              for shoving the queer. Well, we can let that be bygones; for,
              between you and me—and perhaps I'm going further than my duty in
              saying it—they could get no clear case against you, and Chicago's
              open to you to-morrow.”
            </TextNode>

            <TextNode>“I'm very well where I am.”</TextNode>

            <TextNode>
              “Well, I've given you the pointer, and you're a sulky dog not to
              thank me for it.”
            </TextNode>

            <TextNode>
              “Well, I suppose you mean well, and I do thank you,” said McMurdo
              in no very gracious manner.
            </TextNode>

            <TextNode>
              “It's mum with me so long as I see you living on the straight,”
              said the captain. “But, by the Lord! if you get off after this,
              it's another story! So good-night to you—and goodnight,
              Councillor.”
            </TextNode>

            <TextNode>
              He left the bar-room; but not before he had created a local hero.
              McMurdo's deeds in far Chicago had been whispered before. He had
              put off all questions with a smile, as one who did not wish to
              have greatness thrust upon him. But now the thing was officially
              confirmed. The bar loafers crowded round him and shook him
              heartily by the hand. He was free of the community from that time
              on. He could drink hard and show little trace of it; but that
              evening, had his mate Scanlan not been at hand to lead him home,
              the feted hero would surely have spent his night under the bar.
            </TextNode>

            <TextNode>
              On a Saturday night McMurdo was introduced to the lodge. He had
              thought to pass in without ceremony as being an initiate of
              Chicago; but there were particular rites in Vermissa of which they
              were proud, and these had to be undergone by every postulant. The
              assembly met in a large room reserved for such purposes at the
              Union House. Some sixty members assembled at Vermissa; but that by
              no means represented the full strength of the organization, for
              there were several other lodges in the valley, and others across
              the mountains on each side, who exchanged members when any serious
              business was afoot, so that a crime might be done by men who were
              strangers to the locality. Altogether there were not less than
              five hundred scattered over the coal district.
            </TextNode>

            <TextNode>
              In the bare assembly room the men were gathered round a long
              table. At the side was a second one laden with bottles and
              glasses, on which some members of the company were already turning
              their eyes. McGinty sat at the head with a flat black velvet cap
              upon his shock of tangled black hair, and a coloured purple stole
              round his neck, so that he seemed to be a priest presiding over
              some diabolical ritual. To right and left of him were the higher
              lodge officials, the cruel, handsome face of Ted Baldwin among
              them. Each of these wore some scarf or medallion as emblem of his
              office.
            </TextNode>

            <TextNode>
              They were, for the most part, men of mature age; but the rest of
              the company consisted of young fellows from eighteen to
              twenty-five, the ready and capable agents who carried out the
              commands of their seniors. Among the older men were many whose
              features showed the tigerish, lawless souls within; but looking at
              the rank and file it was difficult to believe that these eager and
              open-faced young fellows were in very truth a dangerous gang of
              murderers, whose minds had suffered such complete moral perversion
              that they took a horrible pride in their proficiency at the
              business, and looked with deepest respect at the man who had the
              reputation of making what they called “a clean job.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              To their contorted natures it had become a spirited and chivalrous
              thing to volunteer for service against some man who had never
              injured them, and whom in many cases they had never seen in their
              lives. The crime committed, they quarrelled as to who had actually
              struck the fatal blow, and amused one another and the company by
              describing the cries and contortions of the murdered man.
            </TextNode>

            <TextNode>
              At first they had shown some secrecy in their arrangements; but at
              the time which this narrative describes their proceedings were
              extraordinarily open, for the repeated failures of the law had
              proved to them that, on the one hand, no one would dare to witness
              against them, and on the other they had an unlimited number of
              stanch witnesses upon whom they could call, and a well-filled
              treasure chest from which they could draw the funds to engage the
              best legal talent in the state. In ten long years of outrage there
              had been no single conviction, and the only danger that ever
              threatened the Scowrers lay in the victim himself—who, however
              outnumbered and taken by surprise, might and occasionally did
              leave his mark upon his assailants.
            </TextNode>

            <TextNode>
              McMurdo had been warned that some ordeal lay before him; but no
              one would tell him in what it consisted. He was led now into an
              outer room by two solemn brothers. Through the plank partition he
              could hear the murmur of many voices from the assembly within.
              Once or twice he caught the sound of his own name, and he knew
              that they were discussing his candidacy. Then there entered an
              inner guard with a green and gold sash across his chest.
            </TextNode>

            <TextNode>
              “The Bodymaster orders that he shall be trussed, blinded, and
              entered,” said he.
            </TextNode>

            <TextNode>
              The three of them removed his coat, turned up the sleeve of his
              right arm, and finally passed a rope round above the elbows and
              made it fast. They next placed a thick black cap right over his
              head and the upper part of his face, so that he could see nothing.
              He was then led into the assembly hall.
            </TextNode>

            <TextNode>
              It was pitch dark and very oppressive under his hood. He heard the
              rustle and murmur of the people round him, and then the voice of
              McGinty sounded dull and distant through the covering of his ears.
            </TextNode>

            <TextNode>
              “John McMurdo,” said the voice, “are you already a member of the
              Ancient Order of Freemen?”
            </TextNode>

            <TextNode>He bowed in assent.</TextNode>

            <TextNode>“Is your lodge No. 29, Chicago?”</TextNode>

            <TextNode>He bowed again.</TextNode>

            <TextNode>“Dark nights are unpleasant,” said the voice.</TextNode>

            <TextNode>“Yes, for strangers to travel,” he answered.</TextNode>

            <TextNode>“The clouds are heavy.”</TextNode>

            <TextNode>“Yes, a storm is approaching.”</TextNode>

            <TextNode>
              “Are the brethren satisfied?” asked the Bodymaster.
            </TextNode>

            <TextNode>There was a general murmur of assent.</TextNode>

            <TextNode>
              “We know, Brother, by your sign and by your countersign that you
              are indeed one of us,” said McGinty. “We would have you know,
              however, that in this county and in other counties of these parts
              we have certain rites, and also certain duties of our own which
              call for good men. Are you ready to be tested?”
            </TextNode>

            <TextNode>“I am.”</TextNode>

            <TextNode>“Are you of stout heart?”</TextNode>

            <TextNode>“I am.”</TextNode>

            <TextNode>“Take a stride forward to prove it.”</TextNode>

            <TextNode>
              As the words were said he felt two hard points in front of his
              eyes, pressing upon them so that it appeared as if he could not
              move forward without a danger of losing them. None the less, he
              nerved himself to step resolutely out, and as he did so the
              pressure melted away. There was a low murmur of applause.
            </TextNode>

            <TextNode>
              “He is of stout heart,” said the voice. “Can you bear pain?”
            </TextNode>

            <TextNode>“As well as another,” he answered.</TextNode>

            <TextNode>“Test him!”</TextNode>

            <TextNode>
              It was all he could do to keep himself from screaming out, for an
              agonizing pain shot through his forearm. He nearly fainted at the
              sudden shock of it; but he bit his lip and clenched his hands to
              hide his agony.
            </TextNode>

            <TextNode>“I can take more than that,” said he.</TextNode>

            <TextNode>
              This time there was loud applause. A finer first appearance had
              never been made in the lodge. Hands clapped him on the back, and
              the hood was plucked from his head. He stood blinking and smiling
              amid the congratulations of the brothers.
            </TextNode>

            <TextNode>
              “One last word, Brother McMurdo,” said McGinty. “You have already
              sworn the oath of secrecy and fidelity, and you are aware that the
              punishment for any breach of it is instant and inevitable death?”
            </TextNode>

            <TextNode>“I am,” said McMurdo.</TextNode>

            <TextNode>
              “And you accept the rule of the Bodymaster for the time being
              under all circumstances?”
            </TextNode>

            <TextNode>“I do.”</TextNode>

            <TextNode>
              “Then in the name of Lodge 341, Vermissa, I welcome you to its
              privileges and debates. You will put the liquor on the table,
              Brother Scanlan, and we will drink to our worthy brother.”
            </TextNode>

            <TextNode>
              McMurdo's coat had been brought to him; but before putting it on
              he examined his right arm, which still smarted heavily. There on
              the flesh of the forearm was a circle with a triangle within it,
              deep and red, as the branding iron had left it. One or two of his
              neighbours pulled up their sleeves and showed their own lodge
              marks.
            </TextNode>

            <TextNode>
              “We've all had it,” said one; “but not all as brave as you over
              it.”
            </TextNode>

            <TextNode>
              “Tut! It was nothing,” said he; but it burned and ached all the
              same.
            </TextNode>

            <TextNode>
              When the drinks which followed the ceremony of initiation had all
              been disposed of, the business of the lodge proceeded. McMurdo,
              accustomed only to the prosaic performances of Chicago, listened
              with open ears and more surprise than he ventured to show to what
              followed.
            </TextNode>

            <TextNode>
              “The first business on the agenda paper,” said McGinty, “is to
              read the following letter from Division Master Windle of Merton
              County Lodge 249. He says:
            </TextNode>

            <Indent>
              <TextNode noIndent className='italic'>
                “Dear Sir:
              </TextNode>
              <TextNode noIndent>
                “There is a job to be done on Andrew Rae of Rae & Sturmash, coal
                owners near this place. You will remember that your lodge owes
                us a return, having had the service of two brethren in the
                matter of the patrolman last fall. You will send two good men,
                they will be taken charge of by Treasurer Higgins of this lodge,
                whose address you know. He will show them when to act and where.
                Yours in freedom,
              </TextNode>
              <TextNode noIndent className='italic'>
                “J. W. Windle D. M. A. O. F.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “Windle has never refused us when we have had occasion to ask for
              the loan of a man or two, and it is not for us to refuse him.”
              McGinty paused and looked round the room with his dull, malevolent
              eyes. “Who will volunteer for the job?”
            </TextNode>

            <TextNode>
              Several young fellows held up their hands. The Bodymaster looked
              at them with an approving smile.
            </TextNode>

            <TextNode>
              “You'll do, Tiger Cormac. If you handle it as well as you did the
              last, you won't be wrong. And you, Wilson.”
            </TextNode>

            <TextNode>
              “I've no pistol,” said the volunteer, a mere boy in his teens.
            </TextNode>

            <TextNode>
              “It's your first, is it not? Well, you have to be blooded some
              time. It will be a great start for you. As to the pistol, you'll
              find it waiting for you, or I'm mistaken. If you report yourselves
              on Monday, it will be time enough. You'll get a great welcome when
              you return.”
            </TextNode>

            <TextNode>
              “Any reward this time?” asked Cormac, a thick-set, dark-faced,
              brutal-looking young man, whose ferocity had earned him the
              nickname of “Tiger.”
            </TextNode>

            <TextNode>
              “Never mind the reward. You just do it for the honour of the
              thing. Maybe when it is done there will be a few odd dollars at
              the bottom of the box.”
            </TextNode>

            <TextNode>“What has the man done?” asked young Wilson.</TextNode>

            <TextNode>
              “Sure, it's not for the likes of you to ask what the man has done.
              He has been judged over there. That's no business of ours. All we
              have to do is to carry it out for them, same as they would for us.
              Speaking of that, two brothers from the Merton lodge are coming
              over to us next week to do some business in this quarter.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page259;

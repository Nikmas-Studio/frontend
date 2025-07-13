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

function Page341({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;RETIRED&nbsp;COLOURMAN'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              Sherlock Holmes was in a melancholy and philosophic mood that
              morning. His alert practical nature was subject to such reactions.
            </TextNode>

            <TextNode>“Did you see him?” he asked.</TextNode>

            <TextNode>
              “You mean the old fellow who has just gone out?”
            </TextNode>

            <TextNode>“Precisely.”</TextNode>

            <TextNode>“Yes, I met him at the door.”</TextNode>

            <TextNode>“What did you think of him?”</TextNode>

            <TextNode>“A pathetic, futile, broken creature.”</TextNode>

            <TextNode>
              “Exactly, Watson. Pathetic and futile. But is not all life
              pathetic and futile? Is not his story a microcosm of the whole? We
              reach. We grasp. And what is left in our hands at the end? A
              shadow. Or worse than a shadow—misery.”
            </TextNode>

            <TextNode>“Is he one of your clients?”</TextNode>

            <TextNode>
              “Well, I suppose I may call him so. He has been sent on by the
              Yard. Just as medical men occasionally send their incurables to a
              quack. They argue that they can do nothing more, and that whatever
              happens the patient can be no worse than he is.”
            </TextNode>

            <TextNode>“What is the matter?”</TextNode>

            <TextNode>
              Holmes took a rather soiled card from the table. “Josiah Amberley.
              He says he was junior partner of Brickfall and Amberley, who are
              manufacturers of artistic materials. You will see their names upon
              paint-boxes. He made his little pile, retired from business at the
              age of sixty-one, bought a house at Lewisham, and settled down to
              rest after a life of ceaseless grind. One would think his future
              was tolerably assured.”
            </TextNode>

            <TextNode>“Yes, indeed.”</TextNode>

            <TextNode>
              Holmes glanced over some notes which he had scribbled upon the
              back of an envelope.
            </TextNode>

            <TextNode>
              “Retired in 1896, Watson. Early in 1897 he married a woman twenty
              years younger than himself—a good-looking woman, too, if the
              photograph does not flatter. A competence, a wife, leisure—it
              seemed a straight road which lay before him. And yet within two
              years he is, as you have seen, as broken and miserable a creature
              as crawls beneath the sun.”
            </TextNode>

            <TextNode>“But what has happened?”</TextNode>

            <TextNode>
              “The old story, Watson. A treacherous friend and a fickle wife. It
              would appear that Amberley has one hobby in life, and it is chess.
              Not far from him at Lewisham there lives a young doctor who is
              also a chess-player. I have noted his name as Dr. Ray Ernest.
              Ernest was frequently in the house, and an intimacy between him
              and Mrs. Amberley was a natural sequence, for you must admit that
              our unfortunate client has few outward graces, whatever his inner
              virtues may be. The couple went off together last week—destination
              untraced. What is more, the faithless spouse carried off the old
              man's deed-box as her personal luggage with a good part of his
              life's savings within. Can we find the lady? Can we save the
              money? A commonplace problem so far as it has developed, and yet a
              vital one for Josiah Amberley.”
            </TextNode>

            <TextNode>“What will you do about it?”</TextNode>

            <TextNode>
              “Well, the immediate question, my dear Watson, happens to be, What
              will you do?—if you will be good enough to understudy me. You know
              that I am preoccupied with this case of the two Coptic Patriarchs,
              which should come to a head to-day. I really have not time to go
              out to Lewisham, and yet evidence taken on the spot has a special
              value. The old fellow was quite insistent that I should go, but I
              explained my difficulty. He is prepared to meet a representative.”
            </TextNode>

            <TextNode>
              “By all means,” I answered. “I confess I don't see that I can be
              of much service, but I am willing to do my best.” And so it was
              that on a summer afternoon I set forth to Lewisham, little
              dreaming that within a week the affair in which I was engaging
              would be the eager debate of all England.
            </TextNode>

            <TextNode>
              It was late that evening before I returned to Baker Street and
              gave an account of my mission. Holmes lay with his gaunt figure
              stretched in his deep chair, his pipe curling forth slow wreaths
              of acrid tobacco, while his eyelids drooped over his eyes so
              lazily that he might almost have been asleep were it not that at
              any halt or questionable passage of my narrative they half lifted,
              and two gray eyes, as bright and keen as rapiers, transfixed me
              with their searching glance.
            </TextNode>

            <TextNode>
              “The Haven is the name of Mr. Josiah Amberley's house,” I
              explained. “I think it would interest you, Holmes. It is like some
              penurious patrician who has sunk into the company of his
              inferiors. You know that particular quarter, the monotonous brick
              streets, the weary suburban highways. Right in the middle of them,
              a little island of ancient culture and comfort, lies this old
              home, surrounded by a high sun-baked wall mottled with lichens and
              topped with moss, the sort of wall—”
            </TextNode>

            <TextNode>
              “Cut out the poetry, Watson,” said Holmes severely. “I note that
              it was a high brick wall.”
            </TextNode>

            <TextNode>
              “Exactly. I should not have known which was The Haven had I not
              asked a lounger who was smoking in the street. I have a reason for
              mentioning him. He was a tall, dark, heavily moustached, rather
              military-looking man. He nodded in answer to my inquiry and gave
              me a curiously questioning glance, which came back to my memory a
              little later.
            </TextNode>

            <TextNode>
              “I had hardly entered the gateway before I saw Mr. Amberley coming
              down the drive. I only had a glimpse of him this morning, and he
              certainly gave me the impression of a strange creature, but when I
              saw him in full light his appearance was even more abnormal.”
            </TextNode>

            <TextNode>
              “I have, of course, studied it, and yet I should be interested to
              have your impression,” said Holmes.
            </TextNode>

            <TextNode>
              “He seemed to me like a man who was literally bowed down by care.
              His back was curved as though he carried a heavy burden. Yet he
              was not the weakling that I had at first imagined, for his
              shoulders and chest have the framework of a giant, though his
              figure tapers away into a pair of spindled legs.”
            </TextNode>

            <TextNode>“Left shoe wrinkled, right one smooth.”</TextNode>

            <TextNode>“I did not observe that.”</TextNode>

            <TextNode>
              “No, you wouldn't. I spotted his artificial limb. But proceed.”
            </TextNode>

            <TextNode>
              “I was struck by the snaky locks of grizzled hair which curled
              from under his old straw hat, and his face with its fierce, eager
              expression and the deeply lined features.”
            </TextNode>

            <TextNode>“Very good, Watson. What did he say?”</TextNode>

            <TextNode>
              “He began pouring out the story of his grievances. We walked down
              the drive together, and of course I took a good look round. I have
              never seen a worse-kept place. The garden was all running to seed,
              giving me an impression of wild neglect in which the plants had
              been allowed to find the way of Nature rather than of art. How any
              decent woman could have tolerated such a state of things, I don't
              know. The house, too, was slatternly to the last degree, but the
              poor man seemed himself to be aware of it and to be trying to
              remedy it, for a great pot of green paint stood in the centre of
              the hall, and he was carrying a thick brush in his left hand. He
              had been working on the woodwork.
            </TextNode>

            <TextNode>
              “He took me into his dingy sanctum, and we had a long chat. Of
              course, he was disappointed that you had not come yourself. ‘I
              hardly expected,’ he said, ‘that so humble an individual as
              myself, especially after my heavy financial loss, could obtain the
              complete attention of so famous a man as Mr. Sherlock Holmes.’
            </TextNode>

            <TextNode>
              “I assured him that the financial question did not arise. ‘No, of
              course, it is art for art's sake with him,’ said he, ‘but even on
              the artistic side of crime he might have found something here to
              study. And human nature, Dr. Watson—the black ingratitude of it
              all! When did I ever refuse one of her requests? Was ever a woman
              so pampered? And that young man—he might have been my own son. He
              had the run of my house. And yet see how they have treated me! Oh,
              Dr. Watson, it is a dreadful, dreadful world!’
            </TextNode>

            <TextNode>
              “That was the burden of his song for an hour or more. He had, it
              seems, no suspicion of an intrigue. They lived alone save for a
              woman who comes in by the day and leaves every evening at six. On
              that particular evening old Amberley, wishing to give his wife a
              treat, had taken two upper circle seats at the Haymarket Theatre.
              At the last moment she had complained of a headache and had
              refused to go. He had gone alone. There seemed to be no doubt
              about the fact, for he produced the unused ticket which he had
              taken for his wife.”
            </TextNode>

            <TextNode>
              “That is remarkable—most remarkable,” said Holmes, whose interest
              in the case seemed to be rising. “Pray continue, Watson. I find
              your narrative most arresting. Did you personally examine this
              ticket? You did not, perchance, take the number?”
            </TextNode>

            <TextNode>
              “It so happens that I did,” I answered with some pride. “It
              chanced to be my old school number, thirty-one, and so is stuck in
              my head.”
            </TextNode>

            <TextNode>
              “Excellent, Watson! His seat, then, was either thirty or
              thirty-two.”
            </TextNode>

            <TextNode>
              “Quite so,” I answered with some mystification. “And on B row.”
            </TextNode>

            <TextNode>
              “That is most satisfactory. What else did he tell you?”
            </TextNode>

            <TextNode>
              “He showed me his strong-room, as he called it. It really is a
              strong-room—like a bank—with iron door and shutter—burglar-proof,
              as he claimed. However, the woman seems to have had a duplicate
              key, and between them they had carried off some seven thousand
              pounds' worth of cash and securities.”
            </TextNode>

            <TextNode>“Securities! How could they dispose of those?”</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “He said that he had given the police a list and that he hoped
              they would be unsaleable. He had got back from the theatre about
              midnight and found the place plundered, the door and window open,
              and the fugitives gone. There was no letter or message, nor has he
              heard a word since. He at once gave the alarm to the police.”
            </TextNode>

            <TextNode>Holmes brooded for some minutes.</TextNode>

            <TextNode>
              “You say he was painting. What was he painting?”
            </TextNode>
            <TextNode>
              “Well, he was painting the passage. But he had already painted the
              door and woodwork of this room I spoke of.”
            </TextNode>

            <TextNode>
              “Does it not strike you as a strange occupation in the
              circumstances?”
            </TextNode>

            <TextNode>
              “ ‘One must do something to ease an aching heart.’ That was his
              own explanation. It was eccentric, no doubt, but he is clearly an
              eccentric man. He tore up one of his wife's photographs in my
              presence—tore it up furiously in a tempest of passion. ‘I never
              wish to see her damned face again,’ he shrieked.”
            </TextNode>

            <TextNode>“Anything more, Watson?”</TextNode>

            <TextNode>
              “Yes, one thing which struck me more than anything else. I had
              driven to the Blackheath Station and had caught my train there
              when, just as it was starting, I saw a man dart into the carriage
              next to my own. You know that I have a quick eye for faces,
              Holmes. It was undoubtedly the tall, dark man whom I had addressed
              in the street. I saw him once more at London Bridge, and then I
              lost him in the crowd. But I am convinced that he was following
              me.”
            </TextNode>

            <TextNode>
              “No doubt! No doubt!” said Holmes. “A tall, dark, heavily
              moustached man, you say, with gray-tinted sun-glasses?”
            </TextNode>

            <TextNode>
              “Holmes, you are a wizard. I did not say so, but he had
              gray-tinted sun-glasses.”
            </TextNode>

            <TextNode>“And a Masonic tie-pin?”</TextNode>

            <TextNode>“Holmes!”</TextNode>

            <TextNode>
              “Quite simple, my dear Watson. But let us get down to what is
              practical. I must admit to you that the case, which seemed to me
              to be so absurdly simple as to be hardly worth my notice, is
              rapidly assuming a very different aspect. It is true that though
              in your mission you have missed everything of importance, yet even
              those things which have obtruded themselves upon your notice give
              rise to serious thought.”
            </TextNode>
            <TextNode>“What have I missed?”</TextNode>

            <TextNode>
              “Don't be hurt, my dear fellow. You know that I am quite
              impersonal. No one else would have done better. Some possibly not
              so well. But clearly you have missed some vital points. What is
              the opinion of the neighbours about this man Amberley and his
              wife? That surely is of importance. What of Dr. Ernest? Was he the
              gay Lothario one would expect? With your natural advantages,
              Watson, every lady is your helper and accomplice. What about the
              girl at the post-office, or the wife of the greengrocer? I can
              picture you whispering soft nothings with the young lady at the
              Blue Anchor, and receiving hard somethings in exchange. All this
              you have left undone.”
            </TextNode>

            <TextNode>“It can still be done.”</TextNode>

            <TextNode>
              “It has been done. Thanks to the telephone and the help of the
              Yard, I can usually get my essentials without leaving this room.
              As a matter of fact, my information confirms the man's story. He
              has the local repute of being a miser as well as a harsh and
              exacting husband. That he had a large sum of money in that
              strong-room of his is certain. So also is it that young Dr.
              Ernest, an unmarried man, played chess with Amberley, and probably
              played the fool with his wife. All this seems plain sailing, and
              one would think that there was no more to be said—and yet!—and
              yet!”
            </TextNode>

            <TextNode>“Where lies the difficulty?”</TextNode>

            <TextNode>
              “In my imagination, perhaps. Well, leave it there, Watson. Let us
              escape from this weary workaday world by the side door of music.
              Carina sings to-night at the Albert Hall, and we still have time
              to dress, dine, and enjoy.”
            </TextNode>

            <TextNode>
              In the morning I was up betimes, but some toast crumbs and two
              empty egg-shells told me that my companion was earlier still. I
              found a scribbled note upon the table.
            </TextNode>

            <Indent>
              <TextNode noIndent className='italic'>
                Dear Watson:
              </TextNode>
              <TextNode noIndent>
                There are one or two points of contact which I should wish to
                establish with Mr. Josiah Amberley. When I have done so we can
                dismiss the case—or not. I would only ask you to be on hand
                about three o'clock, as I conceive it possible that I may want
                you.
              </TextNode>
              <TextNode noIndent className='italic'>
                S. H.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              I saw nothing of Holmes all day, but at the hour named he
              returned, grave, preoccupied, and aloof. At such times it was
              wiser to leave him to himself.
            </TextNode>

            <TextNode>“Has Amberley been here yet?”</TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>“Ah! I am expecting him.”</TextNode>

            <TextNode>
              He was not disappointed, for presently the old fellow arrived with
              a very worried and puzzled expression upon his austere face.
            </TextNode>

            <TextNode>
              “I've had a telegram, Mr. Holmes. I can make nothing of it.” He
              handed it over, and Holmes read it aloud.
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “Come at once without fail. Can give you information as to your
                recent loss.
              </TextNode>
              <TextNode noIndent className='italic'>
                “Elman.
              </TextNode>
              <TextNode noIndent className='italic'>
                “The Vicarage.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “Dispatched at 2.10 from Little Purlington,” said Holmes. “Little
              Purlington is in Essex, I believe, not far from Frinton. Well, of
              course you will start at once. This is evidently from a
              responsible person, the vicar of the place. Where is my Crockford?
              Yes, here we have him: ‘J. C. Elman, M. A., Living of Moosmoor cum
              Little Purlington.’ Look up the trains, Watson.”
            </TextNode>

            <TextNode>“There is one at 5.20 from Liverpool Street.”</TextNode>

            <TextNode>
              “Excellent. You had best go with him, Watson. He may need help or
              advice. Clearly we have come to a crisis in this affair.”
            </TextNode>

            <TextNode>
              But our client seemed by no means eager to start.
            </TextNode>

            <TextNode>
              “It's perfectly absurd, Mr. Holmes,” he said. “What can this man
              possibly know of what has occurred? It is waste of time and
              money.”
            </TextNode>

            <TextNode>
              “He would not have telegraphed to you if he did not know
              something. Wire at once that you are coming.”
            </TextNode>

            <TextNode>“I don't think I shall go.”</TextNode>

            <TextNode>Holmes assumed his sternest aspect.</TextNode>

            <TextNode>
              “It would make the worst possible impression both on the police
              and upon myself, Mr. Amberley, if when so obvious a clue arose you
              should refuse to follow it up. We should feel that you were not
              really in earnest in this investigation.”
            </TextNode>

            <TextNode>Our client seemed horrified at the suggestion.</TextNode>

            <TextNode>
              “Why, of course I shall go if you look at it in that way,” said
              he. “On the face of it, it seems absurd to suppose that this
              person knows anything, but if you think—”
            </TextNode>

            <TextNode>
              “I do think,” said Holmes with emphasis, and so we were launched
              upon our journey. Holmes took me aside before we left the room and
              gave me one word of counsel, which showed that he considered the
              matter to be of importance. “Whatever you do, see that he really
              does go,” said he. “Should he break away or return, get to the
              nearest telephone exchange and send the single word ‘Bolted.’ I
              will arrange here that it shall reach me wherever I am.”
            </TextNode>

            <TextNode>
              Little Purlington is not an easy place to reach, for it is on a
              branch line. My remembrance of the journey is not a pleasant one,
              for the weather was hot, the train slow, and my companion sullen
              and silent, hardly talking at all save to make an occasional
              sardonic remark as to the futility of our proceedings. When we at
              last reached the little station it was a two-mile drive before we
              came to the Vicarage, where a big, solemn, rather pompous
              clergyman received us in his study. Our telegram lay before him.
            </TextNode>

            <TextNode>
              “Well, gentlemen,” he asked, “what can I do for you?”
            </TextNode>

            <TextNode>
              “We came,” I explained, “in answer to your wire.”
            </TextNode>

            <TextNode>“My wire! I sent no wire.”</TextNode>

            <TextNode>
              “I mean the wire which you sent to Mr. Josiah Amberley about his
              wife and his money.”
            </TextNode>

            <TextNode>
              “If this is a joke, sir, it is a very questionable one,” said the
              vicar angrily. “I have never heard of the gentleman you name, and
              I have not sent a wire to anyone.”
            </TextNode>

            <TextNode>
              Our client and I looked at each other in amazement.
            </TextNode>

            <TextNode>
              “Perhaps there is some mistake,” said I; “are there perhaps two
              vicarages? Here is the wire itself, signed Elman and dated from
              the Vicarage.”
            </TextNode>

            <TextNode>
              “There is only one vicarage, sir, and only one vicar, and this
              wire is a scandalous forgery, the origin of which shall certainly
              be investigated by the police. Meanwhile, I can see no possible
              object in prolonging this interview.”
            </TextNode>

            <TextNode>
              So Mr. Amberley and I found ourselves on the roadside in what
              seemed to me to be the most primitive village in England. We made
              for the telegraph office, but it was already closed. There was a
              telephone, however, at the little Railway Arms, and by it I got
              into touch with Holmes, who shared in our amazement at the result
              of our journey.
            </TextNode>

            <TextNode>
              “Most singular!” said the distant voice. “Most remarkable! I much
              fear, my dear Watson, that there is no return train to-night. I
              have unwittingly condemned you to the horrors of a country inn.
              However, there is always Nature, Watson—Nature and Josiah
              Amberley—you can be in close commune with both.” I heard his dry
              chuckle as he turned away.
            </TextNode>

            <TextNode>
              It was soon apparent to me that my companion's reputation as a
              miser was not undeserved. He had grumbled at the expense of the
              journey, had insisted upon travelling third-class, and was now
              clamorous in his objections to the hotel bill. Next morning, when
              we did at last arrive in London, it was hard to say which of us
              was in the worse humour.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page341;

'use client';

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Page from '@/components/elements/book-master-english-with-sherlock-holmes/Page';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/book-master-english-with-sherlock-holmes/main';
import { useBookVersion } from '@/context/book-version/Context';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { BookVersion } from '@/types/book-version';
import { ReactElement, useRef } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page105({
  pageNumber,
  hidePageNumber,
  viewportHeight,
}: PageProps): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: pageNumber,
    basePath,
  });

  return (
    <Page
      id={`page-${pageNumber}`}
      viewportHeight={viewportHeight}
      className='mb-5'
      ref={sectionRef}
    >
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title="THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;ENGINEER'S THUMB"
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“ ‘I have already given you my word.’</TextNode>

            <TextNode>
              “ ‘Very good.’ He suddenly sprang up, and darting like lightning
              across the room he flung open the door. The passage outside was
              empty.
            </TextNode>

            <TextNode>
              “ ‘That's all right,’ said he, coming back. ‘I know that clerks
              are sometimes curious as to their master's affairs. Now we can
              talk in safety.’ He drew up his chair very close to mine and began
              to stare at me again with the same questioning and thoughtful
              look.
            </TextNode>

            <TextNode>
              “A feeling of repulsion, and of something akin to fear had begun
              to rise within me at the strange antics of this fleshless man.
              Even my dread of losing a client could not restrain me from
              showing my impatience.
            </TextNode>

            <TextNode>
              “ ‘I beg that you will state your business, sir,’ said I; ‘my time
              is of value.’ Heaven forgive me for that last sentence, but the
              words came to my lips.
            </TextNode>

            <TextNode>
              “ ‘How would fifty guineas for a night's work suit you?’ he asked.
            </TextNode>

            <TextNode>“ ‘Most admirably.’</TextNode>

            <TextNode>
              “ ‘I say a night's work, but an hour's would be nearer the mark. I
              simply want your opinion about a hydraulic stamping machine which
              has got out of gear. If you show us what is wrong we shall soon
              set it right ourselves. What do you think of such a commission as
              that?’
            </TextNode>

            <TextNode>
              “ ‘The work appears to be light and the pay munificent.’
            </TextNode>

            <TextNode>
              “ ‘Precisely so. We shall want you to come to-night by the last
              train.’
            </TextNode>

            <TextNode>“ ‘Where to?’</TextNode>

            <TextNode>
              “ ‘To Eyford, in Berkshire. It is a little place near the borders
              of Oxfordshire, and within seven miles of Reading. There is a
              train from Paddington which would bring you there at about 11.15.’
            </TextNode>

            <TextNode>“ ‘Very good.’</TextNode>

            <TextNode>
              “ ‘I shall come down in a carriage to meet you.’
            </TextNode>

            <TextNode>“ ‘There is a drive, then?’</TextNode>

            <TextNode>
              “ ‘Yes, our little place is quite out in the country. It is a good
              seven miles from Eyford Station.’
            </TextNode>

            <TextNode>
              “ ‘Then we can hardly get there before midnight. I suppose there
              would be no chance of a train back. I should be compelled to stop
              the night.’
            </TextNode>

            <TextNode>“ ‘Yes, we could easily give you a shake-down.’</TextNode>

            <TextNode>
              “ ‘That is very awkward. Could I not come at some more convenient
              hour?’
            </TextNode>

            <TextNode>
              “ ‘We have judged it best that you should come late. It is to
              recompense you for any inconvenience that we are paying to you, a
              young and unknown man, a fee which would buy an opinion from the
              very heads of your profession. Still, of course, if you would like
              to draw out of the business, there is plenty of time to do so.’
            </TextNode>

            <TextNode>
              “I thought of the fifty guineas, and of how very useful they would
              be to me. ‘Not at all,’ said I, ‘I shall be very happy to
              accommodate myself to your wishes. I should like, however, to
              understand a little more clearly what it is that you wish me to
              do.’
            </TextNode>

            <TextNode>
              “ ‘Quite so. It is very natural that the pledge of secrecy which
              we have exacted from you should have aroused your curiosity. I
              have no wish to commit you to anything without your having it all
              laid before you. I suppose that we are absolutely safe from
              eavesdroppers?’
            </TextNode>

            <TextNode>“ ‘Entirely.’</TextNode>

            <TextNode>
              “ ‘Then the matter stands thus. You are probably aware that
              fuller's-earth is a valuable product, and that it is only found in
              one or two places in England?’
            </TextNode>

            <TextNode>“ ‘I have heard so.’</TextNode>

            <TextNode>
              “ ‘Some little time ago I bought a small place—a very small
              place—within ten miles of Reading. I was fortunate enough to
              discover that there was a deposit of fuller's-earth in one of my
              fields. On examining it, however, I found that this deposit was a
              comparatively small one, and that it formed a link between two
              very much larger ones upon the right and left—both of them,
              however, in the grounds of my neighbours. These good people were
              absolutely ignorant that their land contained that which was quite
              as valuable as a gold-mine. Naturally, it was to my interest to
              buy their land before they discovered its true value, but
              unfortunately I had no capital by which I could do this. I took a
              few of my friends into the secret, however, and they suggested
              that we should quietly and secretly work our own little deposit
              and that in this way we should earn the money which would enable
              us to buy the neighbouring fields. This we have now been doing for
              some time, and in order to help us in our operations we erected a
              hydraulic press. This press, as I have already explained, has got
              out of order, and we wish your advice upon the subject. We guard
              our secret very jealously, however, and if it once became known
              that we had hydraulic engineers coming to our little house, it
              would soon rouse inquiry, and then, if the facts came out, it
              would be good-bye to any chance of getting these fields and
              carrying out our plans. That is why I have made you promise me
              that you will not tell a human being that you are going to Eyford
              to-night. I hope that I make it all plain?’
            </TextNode>

            <TextNode>
              “ ‘I quite follow you,’ said I. ‘The only point which I could not
              quite understand was what use you could make of a hydraulic press
              in excavating fuller's-earth, which, as I understand, is dug out
              like gravel from a pit.’
            </TextNode>

            <TextNode>
              “ ‘Ah!’ said he carelessly, ‘we have our own process. We compress
              the earth into bricks, so as to remove them without revealing what
              they are. But that is a mere detail. I have taken you fully into
              my confidence now, Mr. Hatherley, and I have shown you how I trust
              you.’ He rose as he spoke. ‘I shall expect you, then, at Eyford at
              11.15.’
            </TextNode>

            <TextNode>“ ‘I shall certainly be there.’</TextNode>

            <TextNode>
              “ ‘And not a word to a soul.’ He looked at me with a last long,
              questioning gaze, and then, pressing my hand in a cold, dank
              grasp, he hurried from the room.
            </TextNode>

            <TextNode>
              “Well, when I came to think it all over in cool blood I was very
              much astonished, as you may both think, at this sudden commission
              which had been intrusted to me. On the one hand, of course, I was
              glad, for the fee was at least tenfold what I should have asked
              had I set a price upon my own services, and it was possible that
              this order might lead to other ones. On the other hand, the face
              and manner of my patron had made an unpleasant impression upon me,
              and I could not think that his explanation of the fuller's-earth
              was sufficient to explain the necessity for my coming at midnight,
              and his extreme anxiety lest I should tell anyone of my errand.
              However, I threw all fears to the winds, ate a hearty supper,
              drove to Paddington, and started off, having obeyed to the letter
              the injunction as to holding my tongue.
            </TextNode>

            <TextNode>
              “At Reading I had to change not only my carriage but my station.
              However, I was in time for the last train to Eyford, and I reached
              the little dim-lit station after eleven o'clock. I was the only
              passenger who got out there, and there was no one upon the
              platform save a single sleepy porter with a lantern. As I passed
              out through the wicket gate, however, I found my acquaintance of
              the morning waiting in the shadow upon the other side. Without a
              word he grasped my arm and hurried me into a carriage, the door of
              which was standing open. He drew up the windows on either side,
              tapped on the wood-work, and away we went as fast as the horse
              could go.”
            </TextNode>

            <TextNode>“One horse?” interjected Holmes.</TextNode>

            <TextNode>“Yes, only one.”</TextNode>

            <TextNode>“Did you observe the colour?”</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Yes, I saw it by the side-lights when I was stepping into the
              carriage. It was a chestnut.”
            </TextNode>

            <TextNode>“Tired-looking or fresh?”</TextNode>

            <TextNode>“Oh, fresh and glossy.”</TextNode>

            <TextNode>
              “Thank you. I am sorry to have interrupted you. Pray continue your
              most interesting statement.”
            </TextNode>

            <TextNode>
              “Away we went then, and we drove for at least an hour. Colonel
              Lysander Stark had said that it was only seven miles, but I should
              think, from the rate that we seemed to go, and from the time that
              we took, that it must have been nearer twelve. He sat at my side
              in silence all the time, and I was aware, more than once when I
              glanced in his direction, that he was looking at me with great
              intensity. The country roads seem to be not very good in that part
              of the world, for we lurched and jolted terribly. I tried to look
              out of the windows to see something of where we were, but they
              were made of frosted glass, and I could make out nothing save the
              occasional bright blur of a passing light. Now and then I hazarded
              some remark to break the monotony of the journey, but the colonel
              answered only in monosyllables, and the conversation soon flagged.
              At last, however, the bumping of the road was exchanged for the
              crisp smoothness of a gravel-drive, and the carriage came to a
              stand. Colonel Lysander Stark sprang out, and, as I followed after
              him, pulled me swiftly into a porch which gaped in front of us. We
              stepped, as it were, right out of the carriage and into the hall,
              so that I failed to catch the most fleeting glance of the front of
              the house. The instant that I had crossed the threshold the door
              slammed heavily behind us, and I heard faintly the rattle of the
              wheels as the carriage drove away.
            </TextNode>

            <TextNode>
              “It was pitch dark inside the house, and the colonel fumbled about
              looking for matches and muttering under his breath. Suddenly a
              door opened at the other end of the passage, and a long, golden
              bar of light shot out in our direction. It grew broader, and a
              woman appeared with a lamp in her hand, which she held above her
              head, pushing her face forward and peering at us. I could see that
              she was pretty, and from the gloss with which the light shone upon
              her dark dress I knew that it was a rich material. She spoke a few
              words in a foreign tongue in a tone as though asking a question,
              and when my companion answered in a gruff monosyllable she gave
              such a start that the lamp nearly fell from her hand. Colonel
              Stark went up to her, whispered something in her ear, and then,
              pushing her back into the room from whence she had come, he walked
              towards me again with the lamp in his hand.
            </TextNode>

            <TextNode>
              “ ‘Perhaps you will have the kindness to wait in this room for a
              few minutes,’ said he, throwing open another door. It was a quiet,
              little, plainly furnished room, with a round table in the centre,
              on which several German books were scattered. Colonel Stark laid
              down the lamp on the top of a harmonium beside the door. ‘I shall
              not keep you waiting an instant,’ said he, and vanished into the
              darkness.
            </TextNode>

            <TextNode>
              “I glanced at the books upon the table, and in spite of my
              ignorance of German I could see that two of them were treatises on
              science, the others being volumes of poetry. Then I walked across
              to the window, hoping that I might catch some glimpse of the
              country-side, but an oak shutter, heavily barred, was folded
              across it. It was a wonderfully silent house. There was an old
              clock ticking loudly somewhere in the passage, but otherwise
              everything was deadly still. A vague feeling of uneasiness began
              to steal over me. Who were these German people, and what were they
              doing living in this strange, out-of-the-way place? And where was
              the place? I was ten miles or so from Eyford, that was all I knew,
              but whether north, south, east, or west I had no idea. For that
              matter, Reading, and possibly other large towns, were within that
              radius, so the place might not be so secluded, after all. Yet it
              was quite certain, from the absolute stillness, that we were in
              the country. I paced up and down the room, humming a tune under my
              breath to keep up my spirits and feeling that I was thoroughly
              earning my fifty-guinea fee.
            </TextNode>

            <TextNode>
              “Suddenly, without any preliminary sound in the midst of the utter
              stillness, the door of my room swung slowly open. The woman was
              standing in the aperture, the darkness of the hall behind her, the
              yellow light from my lamp beating upon her eager and beautiful
              face. I could see at a glance that she was sick with fear, and the
              sight sent a chill to my own heart. She held up one shaking finger
              to warn me to be silent, and she shot a few whispered words of
              broken English at me, her eyes glancing back, like those of a
              frightened horse, into the gloom behind her.
            </TextNode>

            <TextNode>
              “ ‘I would go,’ said she, trying hard, as it seemed to me, to
              speak calmly; ‘I would go. I should not stay here. There is no
              good for you to do.’
            </TextNode>

            <TextNode>
              “ ‘But, madam,’ said I, ‘I have not yet done what I came for. I
              cannot possibly leave until I have seen the machine.’
            </TextNode>

            <TextNode>
              “ ‘It is not worth your while to wait,’ she went on. ‘You can pass
              through the door; no one hinders.’ And then, seeing that I smiled
              and shook my head, she suddenly threw aside her constraint and
              made a step forward, with her hands wrung together. ‘For the love
              of Heaven!’ she whispered, ‘get away from here before it is too
              late!’
            </TextNode>

            <TextNode>
              “But I am somewhat headstrong by nature, and the more ready to
              engage in an affair when there is some obstacle in the way. I
              thought of my fifty-guinea fee, of my wearisome journey, and of
              the unpleasant night which seemed to be before me. Was it all to
              go for nothing? Why should I slink away without having carried out
              my commission, and without the payment which was my due? This
              woman might, for all I knew, be a monomaniac. With a stout
              bearing, therefore, though her manner had shaken me more than I
              cared to confess, I still shook my head and declared my intention
              of remaining where I was. She was about to renew her entreaties
              when a door slammed overhead, and the sound of several footsteps
              was heard upon the stairs. She listened for an instant, threw up
              her hands with a despairing gesture, and vanished as suddenly and
              as noiselessly as she had come.
            </TextNode>

            <TextNode>
              “The newcomers were Colonel Lysander Stark and a short thick man
              with a chinchilla beard growing out of the creases of his double
              chin, who was introduced to me as Mr. Ferguson.
            </TextNode>

            <TextNode>
              “ ‘This is my secretary and manager,’ said the colonel. ‘By the
              way, I was under the impression that I left this door shut just
              now. I fear that you have felt the draught.’
            </TextNode>

            <TextNode>
              “ ‘On the contrary,’ said I, ‘I opened the door myself because I
              felt the room to be a little close.’
            </TextNode>

            <TextNode>
              “He shot one of his suspicious looks at me. ‘Perhaps we had better
              proceed to business, then,’ said he. ‘Mr. Ferguson and I will take
              you up to see the machine.’
            </TextNode>

            <TextNode>“ ‘I had better put my hat on, I suppose.’</TextNode>

            <TextNode>“ ‘Oh, no, it is in the house.’</TextNode>

            <TextNode>“ ‘What, you dig fuller's-earth in the house?’</TextNode>

            <TextNode>
              “ ‘No, no. This is only where we compress it. But never mind that.
              All we wish you to do is to examine the machine and to let us know
              what is wrong with it.’
            </TextNode>

            <TextNode>
              “We went upstairs together, the colonel first with the lamp, the
              fat manager and I behind him. It was a labyrinth of an old house,
              with corridors, passages, narrow winding staircases, and little
              low doors, the thresholds of which were hollowed out by the
              generations who had crossed them. There were no carpets and no
              signs of any furniture above the ground floor, while the plaster
              was peeling off the walls, and the damp was breaking through in
              green, unhealthy blotches. I tried to put on as unconcerned an air
              as possible, but I had not forgotten the warnings of the lady,
              even though I disregarded them, and I kept a keen eye upon my two
              companions. Ferguson appeared to be a morose and silent man, but I
              could see from the little that he said that he was at least a
              fellow-countryman.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page105;

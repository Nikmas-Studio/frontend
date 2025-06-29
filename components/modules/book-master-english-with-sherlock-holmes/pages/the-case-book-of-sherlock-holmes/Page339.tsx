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

function Page339({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;SHOSCOMBE&nbsp;OLD&nbsp;PLACE'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“But the crypt?”</TextNode>

            <TextNode>
              “Ah, yes, the crypt! Let us suppose, Watson—it is merely a
              scandalous supposition, a hypothesis put forward for argument's
              sake—that Sir Robert has done away with his sister.”
            </TextNode>

            <TextNode>“My dear Holmes, it is out of the question.”</TextNode>

            <TextNode>
              “Very possibly, Watson. Sir Robert is a man of an honourable
              stock. But you do occasionally find a carrion crow among the
              eagles. Let us for a moment argue upon this supposition. He could
              not fly the country until he had realized his fortune, and that
              fortune could only be realized by bringing off this coup with
              Shoscombe Prince. Therefore, he has still to stand his ground. To
              do this he would have to dispose of the body of his victim, and he
              would also have to find a substitute who would impersonate her.
              With the maid as his confidante that would not be impossible. The
              woman's body might be conveyed to the crypt, which is a place so
              seldom visited, and it might be secretly destroyed at night in the
              furnace, leaving behind it such evidence as we have already seen.
              What say you to that, Watson?”
            </TextNode>

            <TextNode>
              “Well, it is all possible if you grant the original monstrous
              supposition.”
            </TextNode>

            <TextNode>
              “I think that there is a small experiment which we may try
              to-morrow, Watson, in order to throw some light on the matter.
              Meanwhile, if we mean to keep up our characters, I suggest that we
              have our host in for a glass of his own wine and hold some high
              converse upon eels and dace, which seems to be the straight road
              to his affections. We may chance to come upon some useful local
              gossip in the process.”
            </TextNode>

            <TextNode>
              In the morning Holmes discovered that we had come without our
              spoon-bait for jack, which absolved us from fishing for the day.
              About eleven o'clock we started for a walk, and he obtained leave
              to take the black spaniel with us.
            </TextNode>

            <TextNode>
              “This is the place,” said he as we came to two high park gates
              with heraldic griffins towering above them. “About midday, Mr.
              Barnes informs me, the old lady takes a drive, and the carriage
              must slow down while the gates are opened. When it comes through,
              and before it gathers speed, I want you, Watson, to stop the
              coachman with some question. Never mind me. I shall stand behind
              this holly-bush and see what I can see.”
            </TextNode>

            <TextNode>
              It was not a long vigil. Within a quarter of an hour we saw the
              big open yellow barouche coming down the long avenue, with two
              splendid, high-stepping gray carriage horses in the shafts. Holmes
              crouched behind his bush with the dog. I stood unconcernedly
              swinging a cane in the roadway. A keeper ran out and the gates
              swung open.
            </TextNode>

            <TextNode>
              The carriage had slowed to a walk, and I was able to get a good
              look at the occupants. A highly coloured young woman with flaxen
              hair and impudent eyes sat on the left. At her right was an
              elderly person with rounded back and a huddle of shawls about her
              face and shoulders which proclaimed the invalid. When the horses
              reached the highroad I held up my hand with an authoritative
              gesture, and as the coachman pulled up I inquired if Sir Robert
              was at Shoscombe Old Place.
            </TextNode>

            <TextNode>
              At the same moment Holmes stepped out and released the spaniel.
              With a joyous cry it dashed forward to the carriage and sprang
              upon the step. Then in a moment its eager greeting changed to
              furious rage, and it snapped at the black skirt above it.
            </TextNode>

            <TextNode>
              “Drive on! Drive on!” shrieked a harsh voice. The coachman lashed
              the horses, and we were left standing in the roadway.
            </TextNode>

            <TextNode>
              “Well, Watson, that's done it,” said Holmes as he fastened the
              lead to the neck of the excited spaniel. “He thought it was his
              mistress, and he found it was a stranger. Dogs don't make
              mistakes.”
            </TextNode>

            <TextNode>“But it was the voice of a man!” I cried.</TextNode>

            <TextNode>
              “Exactly! We have added one card to our hand, Watson, but it needs
              careful playing, all the same.”
            </TextNode>

            <TextNode>
              My companion seemed to have no further plans for the day, and we
              did actually use our fishing tackle in the mill-stream, with the
              result that we had a dish of trout for our supper. It was only
              after that meal that Holmes showed signs of renewed activity. Once
              more we found ourselves upon the same road as in the morning,
              which led us to the park gates. A tall, dark figure was awaiting
              us there, who proved to be our London acquaintance, Mr. John
              Mason, the trainer.
            </TextNode>

            <TextNode>
              “Good-evening, gentlemen,” said he. “I got your note, Mr. Holmes.
              Sir Robert has not returned yet, but I hear that he is expected
              to-night.”
            </TextNode>

            <TextNode>
              “How far is this crypt from the house?” asked Holmes.
            </TextNode>

            <TextNode>“A good quarter of a mile.”</TextNode>

            <TextNode>“Then I think we can disregard him altogether.”</TextNode>

            <TextNode>
              “I can't afford to do that, Mr. Holmes. The moment he arrives he
              will want to see me to get the last news of Shoscombe Prince.”
            </TextNode>

            <TextNode>
              “I see! In that case we must work without you, Mr. Mason. You can
              show us the crypt and then leave us.”
            </TextNode>

            <TextNode>
              It was pitch-dark and without a moon, but Mason led us over the
              grass-lands until a dark mass loomed up in front of us which
              proved to be the ancient chapel. We entered the broken gap which
              was once the porch, and our guide, stumbling among heaps of loose
              masonry, picked his way to the corner of the building, where a
              steep stair led down into the crypt. Striking a match, he
              illuminated the melancholy place—dismal and evil-smelling, with
              ancient crumbling walls of rough-hewn stone, and piles of coffins,
              some of lead and some of stone, extending upon one side right up
              to the arched and groined roof which lost itself in the shadows
              above our heads. Holmes had lit his lantern, which shot a tiny
              tunnel of vivid yellow light upon the mournful scene. Its rays
              were reflected back from the coffin-plates, many of them adorned
              with the griffin and coronet of this old family which carried its
              honours even to the gate of Death.
            </TextNode>

            <TextNode>
              “You spoke of some bones, Mr. Mason. Could you show them before
              you go?”
            </TextNode>

            <TextNode>
              “They are here in this corner.” The trainer strode across and then
              stood in silent surprise as our light was turned upon the place.
              “They are gone,” said he.
            </TextNode>

            <TextNode>
              “So I expected,” said Holmes, chuckling. “I fancy the ashes of
              them might even now be found in that oven which had already
              consumed a part.”
            </TextNode>

            <TextNode>
              “But why in the world would anyone want to burn the bones of a man
              who has been dead a thousand years?” asked John Mason.
            </TextNode>

            <TextNode>
              “That is what we are here to find out,” said Holmes. “It may mean
              a long search, and we need not detain you. I fancy that we shall
              get our solution before morning.”
            </TextNode>

            <TextNode>
              When John Mason had left us, Holmes set to work making a very
              careful examination of the graves, ranging from a very ancient
              one, which appeared to be Saxon, in the centre, through a long
              line of Norman Hugos and Odos, until we reached the Sir William
              and Sir Denis Falder of the eighteenth century. It was an hour or
              more before Holmes came to a leaden coffin standing on end before
              the entrance to the vault. I heard his little cry of satisfaction
              and was aware from his hurried but purposeful movements that he
              had reached a goal. With his lens he was eagerly examining the
              edges of the heavy lid. Then he drew from his pocket a short
              jemmy, a box-opener, which he thrust into a chink, levering back
              the whole front, which seemed to be secured by only a couple of
              clamps. There was a rending, tearing sound as it gave way, but it
              had hardly hinged back and partly revealed the contents before we
              had an unforeseen interruption.
            </TextNode>

            <TextNode>
              Someone was walking in the chapel above. It was the firm, rapid
              step of one who came with a definite purpose and knew well the
              ground upon which he walked. A light streamed down the stairs, and
              an instant later the man who bore it was framed in the Gothic
              archway. He was a terrible figure, huge in stature and fierce in
              manner. A large stable-lantern which he held in front of him shone
              upward upon a strong, heavily moustached face and angry eyes,
              which glared round him into every recess of the vault, finally
              fixing themselves with a deadly stare upon my companion and
              myself.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Who the devil are you?” he thundered. “And what are you doing
              upon my property?” Then, as Holmes returned no answer, he took a
              couple of steps forward and raised a heavy stick which he carried.
              “Do you hear me?” he cried. “Who are you? What are you doing
              here?” His cudgel quivered in the air.
            </TextNode>

            <TextNode>
              But instead of shrinking Holmes advanced to meet him.
            </TextNode>

            <TextNode>
              “I also have a question to ask you, Sir Robert,” he said in his
              sternest tone. “Who is this? And what is it doing here?”
            </TextNode>

            <TextNode>
              He turned and tore open the coffin-lid behind him. In the glare of
              the lantern I saw a body swathed in a sheet from head to foot,
              with dreadful, witch-like features, all nose and chin, projecting
              at one end, the dim, glazed eyes staring from a discoloured and
              crumbling face.
            </TextNode>

            <TextNode>
              The baronet had staggered back with a cry and supported himself
              against a stone sarcophagus.
            </TextNode>

            <TextNode>
              “How came you to know of this?” he cried. And then, with some
              return of his truculent manner: “What business is it of yours?”
            </TextNode>

            <TextNode>
              “My name is Sherlock Holmes,” said my companion. “Possibly it is
              familiar to you. In any case, my business is that of every other
              good citizen—to uphold the law. It seems to me that you have much
              to answer for.”
            </TextNode>

            <TextNode>
              Sir Robert glared for a moment, but Holmes's quiet voice and cool,
              assured manner had their effect.
            </TextNode>

            <TextNode>
              “‘Fore God, Mr. Holmes, it's all right,” said he. “Appearances are
              against me, I'll admit, but I could act no otherwise.”
            </TextNode>

            <TextNode>
              “I should be happy to think so, but I fear your explanations must
              be before the police.”
            </TextNode>

            <TextNode>Sir Robert shrugged his broad shoulders.</TextNode>

            <TextNode>
              “Well, if it must be, it must. Come up to the house and you can
              judge for yourself how the matter stands.”
            </TextNode>

            <TextNode>
              A quarter of an hour later we found ourselves in what I judge,
              from the lines of polished barrels behind glass covers, to be the
              gun-room of the old house. It was comfortably furnished, and here
              Sir Robert left us for a few moments. When he returned he had two
              companions with him; the one, the florid young woman whom we had
              seen in the carriage; the other, a small rat-faced man with a
              disagreeably furtive manner. These two wore an appearance of utter
              bewilderment, which showed that the baronet had not yet had time
              to explain to them the turn events had taken.
            </TextNode>

            <TextNode>
              “There,” said Sir Robert with a wave of his hand, “are Mr. and
              Mrs. Norlett. Mrs. Norlett, under her maiden name of Evans, has
              for some years been my sister's confidential maid. I have brought
              them here because I feel that my best course is to explain the
              true position to you, and they are the two people upon earth who
              can substantiate what I say.”
            </TextNode>

            <TextNode>
              “Is this necessary, Sir Robert? Have you thought what you are
              doing?” cried the woman.
            </TextNode>

            <TextNode>
              “As to me, I entirely disclaim all responsibility,” said her
              husband.
            </TextNode>

            <TextNode>
              Sir Robert gave him a glance of contempt. “I will take all
              responsibility,” said he. “Now, Mr. Holmes, listen to a plain
              statement of the facts.
            </TextNode>

            <TextNode>
              “You have clearly gone pretty deeply into my affairs or I should
              not have found you where I did. Therefore, you know already, in
              all probability, that I am running a dark horse for the Derby and
              that everything depends upon my success. If I win, all is easy. If
              I lose—well, I dare not think of that!”
            </TextNode>

            <TextNode>“I understand the position,” said Holmes.</TextNode>

            <TextNode>
              “I am dependent upon my sister, Lady Beatrice, for everything. But
              it is well known that her interest in the estate is for her own
              life only. For myself, I am deeply in the hands of the Jews. I
              have always known that if my sister were to die my creditors would
              be on to my estate like a flock of vultures. Everything would be
              seized—my stables, my horses—everything. Well, Mr. Holmes, my
              sister did die just a week ago.”
            </TextNode>

            <TextNode>“And you told no one!”</TextNode>

            <TextNode>
              “What could I do? Absolute ruin faced me. If I could stave things
              off for three weeks all would be well. Her maid's husband—this man
              here—is an actor. It came into our heads—it came into my head—that
              he could for that short period personate my sister. It was but a
              case of appearing daily in the carriage, for no one need enter her
              room save the maid. It was not difficult to arrange. My sister
              died of the dropsy which had long afflicted her.”
            </TextNode>

            <TextNode>“That will be for a coroner to decide.”</TextNode>

            <TextNode>
              “Her doctor would certify that for months her symptoms have
              threatened such an end.”
            </TextNode>

            <TextNode>“Well, what did you do?”</TextNode>

            <TextNode>
              “The body could not remain there. On the first night Norlett and I
              carried it out to the old well-house, which is now never used. We
              were followed, however, by her pet spaniel, which yapped
              continually at the door, so I felt some safer place was needed. I
              got rid of the spaniel, and we carried the body to the crypt of
              the church. There was no indignity or irreverence, Mr. Holmes. I
              do not feel that I have wronged the dead.”
            </TextNode>

            <TextNode>
              “Your conduct seems to me inexcusable, Sir Robert.”
            </TextNode>

            <TextNode>
              The baronet shook his head impatiently. “It is easy to preach,”
              said he. “Perhaps you would have felt differently if you had been
              in my position. One cannot see all one's hopes and all one's plans
              shattered at the last moment and make no effort to save them. It
              seemed to me that it would be no unworthy resting-place if we put
              her for the time in one of the coffins of her husband's ancestors
              lying in what is still consecrated ground. We opened such a
              coffin, removed the contents, and placed her as you have seen her.
              As to the old relics which we took out, we could not leave them on
              the floor of the crypt. Norlett and I removed them, and he
              descended at night and burned them in the central furnace. There
              is my story, Mr. Holmes, though how you forced my hand so that I
              have to tell it is more than I can say.”
            </TextNode>

            <TextNode>Holmes sat for some time lost in thought.</TextNode>

            <TextNode>
              “There is one flaw in your narrative, Sir Robert,” he said at
              last. “Your bets on the race, and therefore your hopes for the
              future, would hold good even if your creditors seized your
              estate.”
            </TextNode>

            <TextNode>
              “The horse would be part of the estate. What do they care for my
              bets? As likely as not they would not run him at all. My chief
              creditor is, unhappily, my most bitter enemy—a rascally fellow,
              Sam Brewer, whom I was once compelled to horsewhip on Newmarket
              Heath. Do you suppose that he would try to save me?”
            </TextNode>

            <TextNode>
              “Well, Sir Robert,” said Holmes, rising, “this matter must, of
              course, be referred to the police. It was my duty to bring the
              facts to light, and there I must leave it. As to the morality or
              decency of your conduct, it is not for me to express an opinion.
              It is nearly midnight, Watson, and I think we may make our way
              back to our humble abode.”
            </TextNode>

            <TextNode>
              It is generally known now that this singular episode ended upon a
              happier note than Sir Robert's actions deserved. Shoscombe Prince
              did win the Derby, the sporting owner did net eighty thousand
              pounds in bets, and the creditors did hold their hand until the
              race was over, when they were paid in full, and enough was left to
              reestablish Sir Robert in a fair position in life. Both police and
              coroner took a lenient view of the transaction, and beyond a mild
              censure for the delay in registering the lady's decease, the lucky
              owner got away scatheless from this strange incident in a career
              which has now outlived its shadows and promises to end in an
              honoured old&nbsp;age.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page339;

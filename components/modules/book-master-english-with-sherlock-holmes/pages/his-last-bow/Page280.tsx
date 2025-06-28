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

function Page280({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;CARDBOARD&nbsp;BOX'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <Indent>
              <TextNode noIndent>
                “‘It had seemed to me sometimes that she liked to be alone with
                me, or to coax me out for a walk with her, but I had never
                thought anything of that. But one evening my eyes were opened. I
                had come up from the ship and found my wife out, but Sarah at
                home. “Where's Mary?” I asked. “Oh, she has gone to pay some
                accounts.” I was impatient and paced up and down the room.
                “Can't you be happy for five minutes without Mary, Jim?” says
                she. “It's a bad compliment to me that you can't be contented
                with my society for so short a time.” “That's all right, my
                lass,” said I, putting out my hand towards her in a kindly way,
                but she had it in both hers in an instant, and they burned as if
                they were in a fever. I looked into her eyes and I read it all
                there. There was no need for her to speak, nor for me either. I
                frowned and drew my hand away. Then she stood by my side in
                silence for a bit, and then put up her hand and patted me on the
                shoulder. “Steady old Jim!” said she, and with a kind o' mocking
                laugh, she ran out of the room.
              </TextNode>

              <TextNode>
                “‘Well, from that time Sarah hated me with her whole heart and
                soul, and she is a woman who can hate, too. I was a fool to let
                her go on biding with us—a besotted fool—but I never said a word
                to Mary, for I knew it would grieve her. Things went on much as
                before, but after a time I began to find that there was a bit of
                a change in Mary herself. She had always been so trusting and so
                innocent, but now she became queer and suspicious, wanting to
                know where I had been and what I had been doing, and whom my
                letters were from, and what I had in my pockets, and a thousand
                such follies. Day by day she grew queerer and more irritable,
                and we had ceaseless rows about nothing. I was fairly puzzled by
                it all. Sarah avoided me now, but she and Mary were just
                inseparable. I can see now how she was plotting and scheming and
                poisoning my wife's mind against me, but I was such a blind
                beetle that I could not understand it at the time. Then I broke
                my blue ribbon and began to drink again, but I think I should
                not have done it if Mary had been the same as ever. She had some
                reason to be disgusted with me now, and the gap between us began
                to be wider and wider. And then this Alec Fairbairn chipped in,
                and things became a thousand times blacker.
              </TextNode>

              <TextNode>
                “‘It was to see Sarah that he came to my house first, but soon
                it was to see us, for he was a man with winning ways, and he
                made friends wherever he went. He was a dashing, swaggering
                chap, smart and curled, who had seen half the world and could
                talk of what he had seen. He was good company, I won't deny it,
                and he had wonderful polite ways with him for a sailor man, so
                that I think there must have been a time when he knew more of
                the poop than the forecastle. For a month he was in and out of
                my house, and never once did it cross my mind that harm might
                come of his soft, tricky ways. And then at last something made
                me suspect, and from that day my peace was gone forever.
              </TextNode>

              <TextNode>
                “‘It was only a little thing, too. I had come into the parlour
                unexpected, and as I walked in at the door I saw a light of
                welcome on my wife's face. But as she saw who it was it faded
                again, and she turned away with a look of disappointment. That
                was enough for me. There was no one but Alec Fairbairn whose
                step she could have mistaken for mine. If I could have seen him
                then I should have killed him, for I have always been like a
                madman when my temper gets loose. Mary saw the devil's light in
                my eyes, and she ran forward with her hands on my sleeve.
                “Don't, Jim, don't!” says she. “Where's Sarah?” I asked. “In the
                kitchen,” says she. “Sarah,” says I as I went in, “this man
                Fairbairn is never to darken my door again.” “Why not?” says
                she. “Because I order it.” “Oh!” says she, “if my friends are
                not good enough for this house, then I am not good enough for it
                either.” “You can do what you like,” says I, “but if Fairbairn
                shows his face here again I'll send you one of his ears for a
                keepsake.” She was frightened by my face, I think, for she never
                answered a word, and the same evening she left my house.
              </TextNode>

              <TextNode>
                “‘Well, I don't know now whether it was pure devilry on the part
                of this woman, or whether she thought that she could turn me
                against my wife by encouraging her to misbehave. Anyway, she
                took a house just two streets off and let lodgings to sailors.
                Fairbairn used to stay there, and Mary would go round to have
                tea with her sister and him. How often she went I don't know,
                but I followed her one day, and as I broke in at the door
                Fairbairn got away over the back garden wall, like the cowardly
                skunk that he was. I swore to my wife that I would kill her if I
                found her in his company again, and I led her back with me,
                sobbing and trembling, and as white as a piece of paper. There
                was no trace of love between us any longer. I could see that she
                hated me and feared me, and when the thought of it drove me to
                drink, then she despised me as well.
              </TextNode>
            </Indent>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <Indent>
              <TextNode noIndent>
                “‘Well, Sarah found that she could not make a living in
                Liverpool, so she went back, as I understand, to live with her
                sister in Croydon, and things jogged on much the same as ever at
                home. And then came this week and all the misery and ruin.
              </TextNode>

              <TextNode>
                “‘It was in this way. We had gone on the&nbsp;
                <span className='italic'>May Day</span> for a round voyage of
                seven days, but a hogshead got loose and started one of our
                plates, so that we had to put back into port for twelve hours. I
                left the ship and came home, thinking what a surprise it would
                be for my wife, and hoping that maybe she would be glad to see
                me so soon. The thought was in my head as I turned into my own
                street, and at that moment a cab passed me, and there she was,
                sitting by the side of Fairbairn, the two chatting and laughing,
                with never a thought for me as I stood watching them from the
                footpath.
              </TextNode>
              <TextNode noIndent>
                “‘I tell you, and I give you my word for it, that from that
                moment I was not my own master, and it is all like a dim dream
                when I look back on it. I had been drinking hard of late, and
                the two things together fairly turned my brain. There's
                something throbbing in my head now, like a docker's hammer, but
                that morning I seemed to have all Niagara whizzing and buzzing
                in my ears.
              </TextNode>

              <TextNode>
                “‘Well, I took to my heels, and I ran after the cab. I had a
                heavy oak stick in my hand, and I tell you I saw red from the
                first; but as I ran I got cunning, too, and hung back a little
                to see them without being seen. They pulled up soon at the
                railway station. There was a good crowd round the
                booking-office, so I got quite close to them without being seen.
                They took tickets for New Brighton. So did I, but I got in three
                carriages behind them. When we reached it they walked along the
                Parade, and I was never more than a hundred yards from them. At
                last I saw them hire a boat and start for a row, for it was a
                very hot day, and they thought, no doubt, that it would be
                cooler on the water.
              </TextNode>

              <TextNode>
                “‘It was just as if they had been given into my hands. There was
                a bit of a haze, and you could not see more than a few hundred
                yards. I hired a boat for myself, and I pulled after them. I
                could see the blur of their craft, but they were going nearly as
                fast as I, and they must have been a long mile from the shore
                before I caught them up. The haze was like a curtain all round
                us, and there were we three in the middle of it. My God, shall I
                ever forget their faces when they saw who was in the boat that
                was closing in upon them? She screamed out. He swore like a
                madman and jabbed at me with an oar, for he must have seen death
                in my eyes. I got past it and got one in with my stick that
                crushed his head like an egg. I would have spared her, perhaps,
                for all my madness, but she threw her arms round him, crying out
                to him, and calling him “Alec.” I struck again, and she lay
                stretched beside him. I was like a wild beast then that had
                tasted blood. If Sarah had been there, by the Lord, she should
                have joined them. I pulled out my knife, and—well, there! I've
                said enough. It gave me a kind of savage joy when I thought how
                Sarah would feel when she had such signs as these of what her
                meddling had brought about. Then I tied the bodies into the
                boat, stove a plank, and stood by until they had sunk. I knew
                very well that the owner would think that they had lost their
                bearings in the haze, and had drifted off out to sea. I cleaned
                myself up, got back to land, and joined my ship without a soul
                having a suspicion of what had passed. That night I made up the
                packet for Sarah Cushing, and next day I sent it from Belfast.
              </TextNode>

              <TextNode>
                “‘There you have the whole truth of it. You can hang me, or do
                what you like with me, but you cannot punish me as I have been
                punished already. I cannot shut my eyes but I see those two
                faces staring at me—staring at me as they stared when my boat
                broke through the haze. I killed them quick, but they are
                killing me slow; and if I have another night of it I shall be
                either mad or dead before morning. You won't put me alone into a
                cell, sir? For pity's sake don't, and may you be treated in your
                day of agony as you treat me now.’
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “What is the meaning of it, Watson?” said Holmes solemnly as he
              laid down the paper. “What object is served by this circle of
              misery and violence and fear? It must tend to some end, or else
              our universe is ruled by chance, which is unthinkable. But what
              end? There is the great standing perennial problem to which human
              reason is as far from an answer as ever.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page280;

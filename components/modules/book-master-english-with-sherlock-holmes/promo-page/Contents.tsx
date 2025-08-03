import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { libreBaskerville } from '@/fonts';
import { ReactElement } from 'react';

function Contents(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <MainContainer>
        <div className='flex  items-center'>
          <hr
            className='hidden  flex-1  border-gray-light
                         lg:block  dark:border-gray-dark'
          />
          <H2
            className={`${libreBaskerville.className}  bg-white  !leading-snug  lg:px-7  dark:bg-black`}
          >
            The&nbsp;Complete Collection
          </H2>
          <hr
            className='hidden  flex-1  border-gray-light
                         lg:block  dark:border-gray-dark'
          />
        </div>
        <div
          className='mt-7  flex  flex-col  gap-10  lg:mt-11  
                     lg:flex-row  lg:justify-between'
        >
          <div className='flex  flex-col  gap-10'>
            <div>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                A Study in Scarlet
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-0`}>
                The Sign of the Four
              </TextNode>
            </div>
            <div>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                THE ADVENTURES OF SHERLOCK HOLMES
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                A Scandal in Bohemia
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Red-Headed League
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                A Case of Identity
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Boscombe Valley Mystery
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Five Orange Pips
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Man with the Twisted Lip
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Blue Carbuncle
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Speckled Band
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Engineer’s Thumb
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Noble Bachelor
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Beryl Coronet
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-0`}>
                The Adventure of the Copper Beeches
              </TextNode>
            </div>
            <div>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                THE MEMOIRS OF SHERLOCK HOLMES
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                Silver Blaze
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Yellow Face
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Stock-Broker’s Clerk
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The “Gloria Scott”
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Musgrave Ritual
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Reigate Squires
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Crooked Man
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Resident Patient
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Greek Interpreter
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Naval Treaty
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-0`}>
                The Final Problem
              </TextNode>
            </div>
          </div>
          <div className='flex  flex-col  gap-10'>
            <div>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                THE RETURN OF SHERLOCK HOLMES
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Empty House
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Norwood Builder
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Dancing Men
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Solitary Cyclist
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Priory School
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of Black Peter
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of Charles Augustus Milverton
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Six Napoleons
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Three Students
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Golden Pince-Nez
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Missing Three-Quarter
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Abbey Grange
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-0`}>
                The Adventure of the Second Stain
              </TextNode>
            </div>
            <div>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Hound of the Baskervilles
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-0`}>
                The Valley of Fear
              </TextNode>
            </div>
            <div>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                HIS LAST BOW
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of Wisteria Lodge
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Cardboard Box
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Red Circle
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Bruce-Partington Plans
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Dying Detective
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Disappearance of Lady Frances Carfax
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Devil’s Foot
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-0`}>
                His Last Bow
              </TextNode>
            </div>
          </div>
          <div className='flex  flex-col  gap-10'>
            <div>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                THE CASE-BOOK OF SHERLOCK HOLMES
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Illustrious Client
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Blanched Soldier
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Mazarin Stone
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Three Gables
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Sussex Vampire
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Three Garridebs
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Problem of Thor Bridge
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Creeping Man
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Lion’s Mane
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of the Veiled Lodger
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-3`}>
                The Adventure of Shoscombe Old Place
              </TextNode>
              <TextNode className={`${libreBaskerville.className}  !mb-0`}>
                The Adventure of the Retired Colourman
              </TextNode>
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default Contents;

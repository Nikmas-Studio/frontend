'use client';

import BasicTextNode from '@/components/elements/BasicTextNode';
import LoadingFullPageSpinner from '@/components/elements/LoadingFullPageSpinner';
import MainContainer from '@/components/elements/MainContainer';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Footer from '@/components/modules/Footer';
import HeaderDefault from '@/components/modules/header/header-element/HeaderDefault';
import {
  READER_FULL_NAME_MAX_LENGTH,
  UPDATE_READER_FULL_NAME_ROUTE,
} from '@/constants/general';
import { useSession, useSessionDispatch } from '@/context/session/Context';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import {
  ChangeEvent,
  FormEvent,
  ReactElement,
  useEffect,
  useState,
} from 'react';

function Profile(): ReactElement {
  const { session, loading } = useSession();
  const { setSession } = useSessionDispatch();
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [submitError, setSubmitError] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  function handleFullNameChange(e: ChangeEvent<HTMLInputElement>): void {
    const newFullName = e.target.value;

    if (newFullName.length > READER_FULL_NAME_MAX_LENGTH) {
      return;
    }

    setFullName(newFullName);
  }

  async function handleFormSubmit(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    if (fullName === (session!.readerFullName ?? '')) {
      return;
    }

    try {
      setSubmitLoading(true);
      await axios.patch(UPDATE_READER_FULL_NAME_ROUTE, {
        fullName: fullName === '' ? null : fullName,
      });
      setTimeout(() => {
        setSubmitLoading(false);
        setSession({
          ...session!,
          readerFullName: fullName === '' ? null : fullName,
        });
      }, 1000);
    } catch (error) {
      setSubmitError(true);
    }
  }

  useEffect(() => {
    if (session !== null) {
      setFullName(session.readerFullName ?? '');
    }
  }, [session]);

  if (loading) {
    return <LoadingFullPageSpinner />;
  }

  if (session === null) {
    router.push('/');
    return <LoadingFullPageSpinner />;
  }

  const saveBtnClasses = classNames(
    `
    button  bg-black  text-white
    hover:bg-blue  dark:bg-white
    dark:text-black  dark:hover:text-white
  `,
    {
      '!bg-[#A1A1A1]  dark:!bg-gray-dark-lighter2  !text-white':
        fullName === (session.readerFullName ?? ''),
      'hover:!bg-black  dark:hover:!bg-white  cursor-default': submitLoading,
    },
  );

  const saveBtnSpinnerWrapperClasses = classNames(
    'inline-block  mt-[11px]  ml-[15px]',
    {
      hidden: !submitLoading,
    },
  );

  return (
    <DefaultLayout>
      <div className='flex  min-h-screen  flex-col  justify-between  pt-[5.118rem]'>
        <HeaderDefault hideHeader={false} />
        <MainContainer className='flex  flex-col  sm:items-center'>
          <div className='mt-5  w-[23rem]  max-w-full'>
            <h1
              className='mb-9  text-4xl  font-bold  leading-tight  
                         lg:text-[2.7rem]  dark:text-white'
            >
              Bio
            </h1>
            <form onSubmit={handleFormSubmit}>
              <div className='mb-8'>
                <label htmlFor='profile-full-name'>
                  <BasicTextNode className='text-xl  font-bold'>
                    Full name
                  </BasicTextNode>
                </label>
                <input
                  id='profile-full-name'
                  type='text'
                  value={fullName}
                  onChange={handleFullNameChange}
                  className='h-[2.53125rem]  w-full  rounded-[5px]
                         border  border-[#CFCFCF]
                         bg-white  px-4  pb-2  pt-1.5  text-xl  font-normal
                         leading-none text-black  placeholder:text-[#A1A1A1]  
                         focus:border-[#000000]  focus:outline-none  
                         dark:border-gray-dark-lighter2  dark:bg-black
                         dark:text-white  dark:focus:border-[#FFFFFF]'
                />
              </div>
              <div>
                <BasicTextNode className='mb-1  text-xl  font-bold'>
                  Email
                </BasicTextNode>
                <BasicTextNode className='text-xl  font-normal'>
                  {session.readerEmail}
                </BasicTextNode>
              </div>
              <div className='mt-10  flex'>
                <button
                  className={saveBtnClasses}
                  disabled={fullName === (session.readerFullName ?? '')}
                >
                  Save
                </button>
                <div className={saveBtnSpinnerWrapperClasses}>
                  <CircularProgress className='!size-[20px]  !text-black  dark:!text-white' />
                </div>
              </div>
              {submitError && (
                <BasicTextNode className='mt-2  text-lg  text-red-600'>
                  An error occurred. Please try again.
                </BasicTextNode>
              )}
            </form>
          </div>
        </MainContainer>
        <Footer className='!mt-24' />
      </div>
    </DefaultLayout>
  );
}

export default Profile;

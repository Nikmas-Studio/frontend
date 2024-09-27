import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

interface TouchDeviceContextProps {
  isTouchDevice: boolean;
}

interface TouchDeviceDispatchContextProps {
  setIsTouchDevice: Dispatch<SetStateAction<boolean>>;
}

const TouchDeviceContext = createContext<TouchDeviceContextProps | null>(null);

const TouchDeviceDispatchContext =
  createContext<TouchDeviceDispatchContextProps | null>(null);

export function TouchDeviceProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const handleTouchStart = (): void => {
      setIsTouchDevice(true);
    };

    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <TouchDeviceContext.Provider value={{ isTouchDevice }}>
      <TouchDeviceDispatchContext.Provider value={{ setIsTouchDevice }}>
        {children}
      </TouchDeviceDispatchContext.Provider>
    </TouchDeviceContext.Provider>
  );
}

export function useTouchDevice(): TouchDeviceContextProps {
  const context = useContext(TouchDeviceContext);

  if (!context) {
    throw new Error(
      'TouchDeviceContext must be used within a TouchDeviceContextProvider',
    );
  }

  return context;
}

export function useTouchDeviceDispatch(): TouchDeviceDispatchContextProps {
  const context = useContext(TouchDeviceDispatchContext);

  if (!context) {
    throw new Error(
      'TouchDeviceDispatchContext must be used within a TouchDeviceDispatchContextProvider',
    );
  }

  return context;
}

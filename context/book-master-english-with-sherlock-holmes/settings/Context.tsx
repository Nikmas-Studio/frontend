import {
  createContext,
  Dispatch,
  MutableRefObject,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from 'react';

interface SettingsDropdownPosition {
  top: number;
  left: number;
}

interface SettingsContextProps {
  settingsDropdownIsOpened: boolean;
  settingsDropdownPosition: SettingsDropdownPosition;
  toggleButtonRef: MutableRefObject<HTMLButtonElement | null>;
  dropdownElementRef: MutableRefObject<HTMLDivElement | null>;
  outsideClickIsActive: MutableRefObject<boolean>;
}

interface SettingsDropdownDispatchContextProps {
  setSettingsDropdownIsOpened: Dispatch<SetStateAction<boolean>>;
  setSettingsDropdownPosition: Dispatch<
    SetStateAction<SettingsDropdownPosition>
  >;
}

const SettingsContext = createContext<SettingsContextProps | null>(null);
const SettingsDispatchContext =
  createContext<SettingsDropdownDispatchContextProps | null>(null);

export function SettingsProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [settingsDropdownIsOpened, setSettingsDropdownIsOpened] =
    useState(false);
  const [settingsDropdownPosition, setSettingsDropdownPosition] = useState({
    top: 0,
    left: 0,
  });
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownElementRef = useRef<HTMLDivElement | null>(null);
  const outsideClickIsActive = useRef(false);

  return (
    <SettingsContext.Provider
      value={{
        settingsDropdownIsOpened,
        toggleButtonRef,
        settingsDropdownPosition,
        dropdownElementRef,
        outsideClickIsActive,
      }}
    >
      <SettingsDispatchContext.Provider
        value={{ setSettingsDropdownIsOpened, setSettingsDropdownPosition }}
      >
        {children}
      </SettingsDispatchContext.Provider>
    </SettingsContext.Provider>
  );
}

export function useSettings(): SettingsContextProps {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(
      'SettingsContext must be used within a SettingsContextProvider',
    );
  }

  return context;
}

export function useSettingsDispatch(): SettingsDropdownDispatchContextProps {
  const context = useContext(SettingsDispatchContext);

  if (!context) {
    throw new Error(
      'SettingsDispatchContext must be used within a SettingsContextProvider',
    );
  }

  return context;
}

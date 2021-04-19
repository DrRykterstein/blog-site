import { useEffect, useState, createContext, Dispatch, SetStateAction } from "react";

// Define alias for setState/dispatcher type
type screenSizeDispatcher<S> = Dispatch<SetStateAction<S>>;

export type ScreenSizeContext = {
  screenWidth: number;
  setScreenWidth: screenSizeDispatcher<number>;
};

export const ScreenSizeContext = createContext<ScreenSizeContext>({
  screenWidth: null,
  setScreenWidth: (): void => {}
});

const ScreenSizeProvider: React.FC = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState<number>(null);

  // Listen for screen size change and set new screen width
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
  });

  return (
    <ScreenSizeContext.Provider value={{ screenWidth, setScreenWidth }}>
      {children}
    </ScreenSizeContext.Provider>
  );
}

export default ScreenSizeProvider;
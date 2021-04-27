import { useEffect, useState, createContext, useContext } from "react";

export type ScreenSizeModel = {
	screenWidth: number;
};

const ScreenSizeContext = createContext<ScreenSizeModel>({
	screenWidth: null,
});

export const ScreenSizeProvider: React.FC = ({ children }) => {
	const [screenWidth, setScreenWidth] = useState<number>(null);

	// Listen for screen size change and set new screen width
	useEffect(() => {
		setScreenWidth(window.innerWidth);
		window.addEventListener("resize", () => {
			setScreenWidth(window.innerWidth);
		});
	});

	return (
		<ScreenSizeContext.Provider value={{ screenWidth }}>
			{children}
		</ScreenSizeContext.Provider>
	);
};

export const useScreenSize = () => useContext(ScreenSizeContext);

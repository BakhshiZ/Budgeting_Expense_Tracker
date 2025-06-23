import { createContext, useContext } from "react";
import useFindWH from "../hooks/find-window-size";

const WinSizeContext = createContext();

// Provider to wrap app
function WinSizeProvider({ children }) {
    const { winWidth, winHeight } = useFindWH();

    return (
        <WinSizeContext.Provider value={{ winWidth, winHeight }}>
            {children}
        </WinSizeContext.Provider>
    );
};

// Hook to use context
function useWinSizeContext() {
    return useContext(WinSizeContext);
}

export { WinSizeProvider, useWinSizeContext };
import React from "react";
import { MatchaMoodType } from "../pages/about";

// cr. https://non-traditional.dev/adding-the-konami-code-to-your-react-app-using-hooks-6dc90e9e589c

type HotKeysType = Array<string>;

const createKeyChecker = (hotkeys: HotKeysType = []) => {
    let index = 0;
    const TAIL = hotkeys.length - 1;

    // Returns a callback
    return key => {
        if (key !== hotkeys[index]) {
            index = 0;
            return false;
        }

        if (index === TAIL) {
            index = 0;
            return true;
        }

        index++;
        return false;
    };
};

function useHotKey(hotKeys: HotKeysType, onMatch: React.Dispatch<React.SetStateAction<MatchaMoodType>>) {
    const keyCrawler = React.useMemo(() => createKeyChecker([].concat(hotKeys)), [
        hotKeys
    ]);

    const listen = ({ key }) => {
        if (keyCrawler(key)) {
            onMatch("wild");
        }
    };

    React.useEffect(() => {
        window.addEventListener("keydown", listen);
        return () => window.removeEventListener("keydown", listen);
    });
}

export default useHotKey;

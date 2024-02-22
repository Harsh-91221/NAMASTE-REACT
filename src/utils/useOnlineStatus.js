import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const onlineFunc = () => setIsOnline(true);
        const offlineFunc = () => setIsOnline(false);

        window.addEventListener("online", onlineFunc);
        window.addEventListener("offline", offlineFunc);

        return () => {
            window.removeEventListener("online", onlineFunc);
            window.removeEventListener("offline", offlineFunc);
        };
    }, []);

    return isOnline;
};

export default useOnlineStatus;

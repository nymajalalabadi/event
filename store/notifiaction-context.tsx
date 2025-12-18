'use client';

import { createContext, useState, useEffect } from "react";

type Notification = {
    title: string;
    message: string;
    status: string;
};

type NotificationContextType = {
    notification: Notification | null;
    showNotification: (notificationData: Notification) => void;
    hideNotification: () => void;
};

export const NotificationContext = createContext<NotificationContextType>({
    notification: null,
    showNotification: function(notificationData: Notification){},
    hideNotification: function(){},
});

export function NotificationContextProvider(props: { children: React.ReactNode }) {

    const [activeNotification, setActiveNotification] = useState<{ title: string, message: string, status: string } | null>(null);

    useEffect(() => {
        if (activeNotification && (activeNotification.status === 'success' || activeNotification.status === 'error')) {
            const timer = setTimeout(() => {
                setActiveNotification(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [activeNotification]);

    function showNotification(notificationData: Notification) {
        setActiveNotification(notificationData);
    }

    function hideNotification() {
        setActiveNotification(null);
    }


    const context = {
        notification: activeNotification,
        showNotification: showNotification,
        hideNotification: hideNotification,
    }
    

    return <NotificationContext.Provider value={context}>
        {props.children}
    </NotificationContext.Provider>
}   
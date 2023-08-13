"use client";
import { useEffect, useState } from "react";

export const UseAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState();

    useEffect(() => {
        const sendAuthData = (): Boolean | undefined | null => {
            if (typeof localStorage !== 'undefined') {
                const isUserAuthenticated = localStorage.getItem('isAuthenticated');
    
                if (isUserAuthenticated) {
                    const authObject = JSON.parse(isUserAuthenticated);
                    setIsAuthenticated(authObject);
                    console.log(isAuthenticated);
                    
                    return isAuthenticated;
                }
            };
    
            return null;
        }

        sendAuthData();
    }, []);
};
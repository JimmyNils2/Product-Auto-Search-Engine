import {useEffect, useState} from 'react';

/**
 * It's a custom hook to delay a callback until time has elapsed.
 * @param {string} value a dependency to check
 * @param {number} timeout a time to wait
 * @param {function} callback a function to invoke
 */
export const useDebounce = (value, timeout, callback) => {
    
    // Init state
    const [timer, setTimer] = useState(null);

    /**
     * Clear any existing timer before setting a new one
     */
    const clearTimer = () => {
        if(timer) clearTimeout(timer);
    }

    // When the value changes invoke the callback
    useEffect(() => {
        clearTimer();
        if(value && callback){
            const newTimer = setTimeout(callback, timeout);
            setTimer(newTimer);
        }
    }, [value])
}
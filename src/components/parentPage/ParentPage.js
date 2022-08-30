import './style.css';
import {useCount} from "../conext/context";
import {useEffect, useState} from "react";

export const ParentPage = ({children}) => {
    const [count, setCount] = useCount();
    const [state, setState] = useState(true);
    const toggleState = () => {
        setState(!state)
    }
    useEffect(() => {
        setCount(count + 1)
    }, [state])

    return (
        <>
            <div className='wrapper'>
                <h3> Parent Component </h3>
                <button onClick={toggleState}>
                    Click for update Parent component
                </button>
            </div>
            {children}
        </>
    )
}
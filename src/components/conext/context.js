import React, {useContext, useMemo, useState} from 'react';

const CountContext = React.createContext();

function useCount() {
    const context = useContext(CountContext)
    if (!context) {
        throw new Error('useCount must be used within a CountProvider')
    } else {
        return context
    }
}

function CountProvider(props) {
    const [count, setCount] = useState(0);
    const value = useMemo(() => [count, setCount], [count]);

    return <CountContext.Provider value={value} {...props} />
}

export {CountProvider, useCount}
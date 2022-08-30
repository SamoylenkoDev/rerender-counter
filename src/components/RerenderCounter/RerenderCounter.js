import './style.css'
import {useCount} from "../conext/context";

export const RerenderCounter = () => {

    const [count, setCount] = useCount()
    const increment = (e) => {
        setCount(count + 1)
    }
    return (
        <div className='wrapperRerenderCounter'>
            <h3>Children Component</h3>
            <h4>Component render {count} times</h4>
            <button onClick={increment}>
                Click for Rerender
            </button>
        </div>

    )
}
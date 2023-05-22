import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="flex items-center justify-center h-80 gap-2">
            <button type="button" className="py-3 px-6" onClick={() => dispatch(decrement())}>-</button>
            <span className="py-3 px-6 font-semibold">Counter: { count }</span>
            <button type="button" className="py-3 px-6" onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}

export default Counter;
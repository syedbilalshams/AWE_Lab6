import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/actions";
import Card from "./Card";
import Button from "./Button";

// Consumes Redux (counter state)
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <Card title="Counter (Redux)">
      <p className="count">{count}</p>
      <div className="row">
        <Button onClick={() => dispatch(decrement())}>− Decrement</Button>
        <Button onClick={() => dispatch(increment())}>+ Increment</Button>
        <Button variant="secondary" onClick={() => dispatch(reset())}>Reset</Button>
      </div>
    </Card>
  );
};

export default Counter;

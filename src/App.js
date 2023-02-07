import Time from "./Time/Time.js";
import Container from "./Container/Container";
import React, {useState, useEffect} from "react";
import Button from "./Button/Button.js";

const App = () => {
    const [time, setTime] = useState(0);

    const [timer, setTimer] = useState(null);

    const start = (e) => {
        setTimer(
            setInterval(() => {
                setTime((prevValue) => prevValue + 4);
            }, 1)
        );
    };

    const stop = (e) => {
        if (timer) clearInterval(timer);
    };

    const reset = (e) => {
        setTime(0);
        if (timer) clearInterval(timer);
    };

    useEffect(() => {
        return () => {
            if (timer) clearInterval(timer);
        };
    }, [timer]);

    return (
        <Container>
            <Time time={time} />
            <Button onClick={start}>Start</Button>
            <Button onClick={stop}>Stop</Button>
            <Button onClick={reset}>Reset</Button>
        </Container>
    );
};

export default App;
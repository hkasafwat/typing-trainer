import { useTimer } from 'react-timer-hook';

interface TimerProps {
    timerType: "stopwatch" | "countdown";
}

export default function Timer({ timerType }: TimerProps) {

    if (timerType === "countdown") {
        const {
            totalSeconds,
            milliseconds,
            seconds,
            minutes,
            hours,
            days,
            isRunning,
            start,
            pause,
            resume,
            restart,
        } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called'), interval: 20 });
    } else {
        const {
            totalSeconds,
            milliseconds,
            seconds,
            minutes,
            hours,
            days,
            isRunning,
            start,
            pause,
            reset,
        } = useStopwatch({ autoStart: true, interval: 20 });
    }

    return (
        <div>
            <p> Timer</p>
        </div>
    )
}
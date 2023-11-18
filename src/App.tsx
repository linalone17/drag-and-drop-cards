import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./App.module.css";
import {
    DragAndDrop,
    DragAndDropCard,
} from "./components/DragAndDrop/DragAndDrop";

const colors: string[] = [];

for (let i = 40; i >= 0; i--) {
    const b = Math.round(40 + (i / 40) * 215);
    colors.push(`RGB(150 20 ${b})`);
}

type RafThrottleState = 'ready' | 'waiting' | 'scheduledCb' | 'tailCalled';

// sync debouce with RequestAnimationFrame
function useRafThrottle(cb: (...args: any) => void) {
    const ref = useRef<{
        state: RafThrottleState,
    }>({
        state: ready,
        scheduledCb: null
    });

    useEffect(() => {
        let isMounted = true;


        function recursive() {
            requestAnimationFrame(() => {
                ref.current.readyToCall = true;
                if (ref.current.scheduledCb) {
                    ref.current.scheduledCb();
                }
            });

            recursive();
        }

        recursive();


        return () => {
            isMounted = false;
        }
    }, []);

    const memoizedCb = useCallback(() => {
        if (ref.current.readyToCall) {

        }
    }, [])
}

function useResize(onResize: () => void) {

}

const Title: React.FC<{
    color: string;
}> = ({ color }) => {
    return (
        <div
            style={{
                backgroundColor: color,
            }}
            className={styles["Title"]}
        ></div>
    );
};

function App() {
    return (
        <div className={styles["App"]}>
            <DragAndDrop>
                {colors.map((color) => (
                    <DragAndDropCard>
                        <Title color={color} />
                    </DragAndDropCard>
                ))}
            </DragAndDrop>
        </div>
    );
}

export default App;

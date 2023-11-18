import styles from "./DragAndDrop.module.css";
import React, { PropsWithChildren } from "react";

export const DragAndDrop: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles["DragAndDrop"]}>{children}</div>;
};

export const DragAndDropCard: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles["DragAndDropCard"]}>{children}</div>;
};

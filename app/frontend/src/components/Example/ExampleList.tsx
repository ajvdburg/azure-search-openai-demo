import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Heb ik recht op vervoerskosten?",
        value: "Heb ik recht op vervoerskosten?"
    },
    { 
        text: "Heb ik een aanvullend pensioen?", 
        value: "Heb ik een aanvullend pensioen?" 
    },
    { 
        text: "Welke regels zijn er rondom ontslag?", 
        value: "Welke regels zijn er rondom ontslag?" 
    }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};

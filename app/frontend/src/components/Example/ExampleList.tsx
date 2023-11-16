import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Heeft een werknemer recht op een tussenkomst voor reiskosten?",
        value: "Heeft een werknemer recht op een tussenkomst voor reiskosten?"
    },
    { 
        text: "Heeft een werknemer recht op een aanvullend pensioen?", 
        value: "Heeft een werknemer recht op een aanvullend pensioen?" 
    },
    { 
        text: "Geniet een werknemer ontslagbescherming?", 
        value: "Geniet een werknemer ontslagbescherming?" 
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

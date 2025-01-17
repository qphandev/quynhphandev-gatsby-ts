import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import { isArrayMatched } from '../helpers/shallowCompareArray';

import "../styles/about.scss"

export type MatchaMoodType = "sleepy" | "wild";

export interface IKey {
    key: string
}

const KONAMI_SEQUENCE = [
    "arrowup",
    "arrowup",
    "arrowdown",
    "arrowdown",
    "arrowleft",
    "arrowright",
    "arrowleft",
    "arrowright",
    "b",
    "a",
    "enter"
];

const About = () => {

    const [matcha, setMatcha] = useState<MatchaMoodType>("sleepy");

    const sequenceArray: Array<string> = [];

    const listen = ({ key }: IKey) => {
        sequenceArray.push(key.toLowerCase());
        if (sequenceArray.length > KONAMI_SEQUENCE.length) {
            sequenceArray.shift();
        }
        if (isArrayMatched(KONAMI_SEQUENCE, sequenceArray)) {
            setMatcha("wild");
        }
    }

    // Konami Cheat Event
    useEffect(() => {
        window.addEventListener("keydown", listen);
        return () => window.removeEventListener("keydown", listen);
    });

    return (
        <Layout>
            <div className="about-container">
                <p>
                    Hi! I'm Quynh. I work as a frontend web developer. I'm acquainted with design tools such as Adobe XD, Inkscape, and GIMP. Working directly with other developers has helped expose me to different approaches to problem solving. Currently, I'm learning C# with Unity and involving myself more with the backend web side of things. On the side, I’m following along with the first half of Robert Nystrom’s “Crafting Interpreters” to explore more on how language works under the hood.
                </p>
                <p>
                    I enjoy going to Meetups, reading self-help books, talking to a friend, reading articles, listening to podcast, and keeping a log/diary to help me actively engage in understanding myself more. This helps me fight the insecurities, imposter syndrome, frustration, and/or loss of confidence that can arise from being stuck on a problem for too long.

                    I’m always open to learning new ways to actively stay engaged! Of course learning when to take breaks is important too.

                </p>
                <p>
                    I’m working on getting out of my comfort zone. I think I will start by keeping a public dev log (coming soon!) to help me pursue this goal. The challenge after that is keeping consistent.
                </p>
                <p>
                    Cheesy lines I keep close to heart:
                </p>
                <ul>
                    <li>“Do what you can at the moment; live in the present.”</li>
                    <li>“Don’t panic at slow starts, you’re moving slowly to adapt to move more fluently.”</li>
                    <li>“Productivity is a state of mind.”</li>
                    <li>“Don’t be in a rush to immerse yourself in a problem solving environment.”</li>
                </ul>

                <p>
                    My hobbies include jogging, playing badminton, going wakeboarding, video games, boardgames, going to meetups, drawing, writing, watching anime, reading manga and webtoons, and playing with my dog Matcha.
                </p>

                <p>
                    Big upcoming event I’m looking forward to attending as I am a huge fan of Nobuo Uematsu -- {<Link to="https://ffdistantworlds.com/concert/dw35-orlando/" target="_blank">Distant Worlds</Link>}
                </p>

                <div className="image-container">
                    {
                        matcha === "sleepy" &&
                        <>
                            <StaticImage src="../images/matchaSleeping.jpg" alt="sleeping dog" />
                            Matcha sleeping while I work
                        </>
                    }
                    {
                        matcha === "wild" &&
                        <>
                            <StaticImage src="../images/matchaAwake.jpg" alt="dog" />
                            <h3>YOU'VE WOKEN UP THE DOG</h3>
                        </>
                    }

                </div>
            </div>
        </Layout>
    )
}

export default About
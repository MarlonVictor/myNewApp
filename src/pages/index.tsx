import Head from 'next/head';

import { CountdownProvider } from '../contexts/CountdownContext';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { ExperienceBar } from '../components/ExperienceBar';
import { ChallengeBox } from '../components/ChallengeBox';
import { Countdown } from '../components/Countdown';
import { Profile } from '../components/Profile';

import { Container, Section } from '../styles/pages/home';


export default function Home() {
    return (
        <Container>
            <Head>
                <title>Home | moveNow</title>
            </Head>

            <ExperienceBar />

            <CountdownProvider>
                <Section>
                    <div>
                        <Profile />
                        <CompletedChallenges />
                        <Countdown />
                    </div>
                    <div>
                        <ChallengeBox />
                    </div>
                </Section>
            </CountdownProvider>
        </Container>
    )
}
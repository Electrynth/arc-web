import {
    Typography,
    Divider
} from '@mui/material';

export default function Faq({ breakpoints }) {
    return (
        <div style={{ gap: 36, padding: 24, display: 'flex', flexFlow: 'column nowrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexFlow: 'column nowrap', 'alignItems': 'center' }}>
                <Typography variant="h4">Are you going to produce new content?</Typography>
                <br />
                <Typography>
                    Yes. For 2 main reasons:
                    <br />
                    <ul>
                        <li>
                            In order to keep long-term interest in the game, we believe new content should be released at some point in time.
                            Some players have left the game in recent years due to lack of new releases.
                            While we recognize this need for new releases we also believe it is necessary to take our time in the design and playtesting phases, so new content may arrive slowly.
                        </li>
                        <br />
                        <li>
                            There is an asymmetry in competitive variety between the Galactic Civil War (Rebels and Empire) factions and the Clone Wars (Republic and Separatists) factions.
                            To address this asymmetry, we believe the Clone Wars factions have a higher priority when it comes to new content.
                        </li>
                    </ul>
                </Typography>
            </div>
            <Divider />
            <div style={{ display: 'flex', flexFlow: 'column nowrap', 'alignItems': 'center' }}>
                <Typography variant="h4">Are you going to do X or add Y to the game?</Typography>
                <br />
                <Typography>
                    &emsp;&emsp;Our primary driver is game balance.
                    We will create new content where we feel there is a need for it at a competitive level, and not necessarily because it would be thematic.
                </Typography>
            </div>
            <Divider />
            <div style={{ display: 'flex', flexFlow: 'column nowrap', 'alignItems': 'center' }}>
                <Typography variant="h4">Are you going to use content from other groups?</Typography>
                <br />
                <Typography>
                    &emsp;&emsp;As there are multiple groups that make their own content, we cannot pick and choose from everyone.
                    While some items may be balanced in their own respective ecosystems, they may not be balanced with respect to other ARC content that is in the pipeline.
                    Additionally, since we will create sets of content that we feel satisfies a specific &quot;need&quot; in the game, it is unlikely new sets content from other groups will fulfill that &quot;need&quot; to a degree we are satisfied with.
                </Typography>
            </div>
            <Divider />
            <div style={{ display: 'flex', flexFlow: 'column nowrap', 'alignItems': 'center' }}>
                <Typography variant="h4">Why should I choose you over other groups?</Typography>
                <br />
                <Typography>
                    &emsp;&emsp;You don&apos;t have to choose ARC over other groups, they are not mutually exclusive. ARC&apos;s primary focus is on a competitively balanced ruleset.
                    To achieve this, we have assembled a team of judges, tournament organizers, and top players that have been involved in the highest level competitions over the lifetime of the game.
                    Our playtest team contains many former FFG playtesters and some who were involved with Armada&apos;s design at its conception.
                    We have years of experience with different facets of the game, beyond being avid players. We intend to keep the spirit and design philosophy of the game alive and well to the best of our ability.
                </Typography>
            </div>
        </div>
    );
}
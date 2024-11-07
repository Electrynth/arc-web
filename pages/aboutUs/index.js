import {
    Typography,
    Divider
} from '@mui/material';

export default function AboutUs({ breakpoints }) {
    return (
        <div style={{ gap: 36, padding: 24, display: 'flex', flexFlow: 'column nowrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexFlow: 'column nowrap', 'alignItems': 'center' }}>
                <Typography>
                    &emsp;&emsp;The Armada Ruleset Collective (ARC) is a coalition of judges, tournament organizers, and competitive players dedicated to stewarding the competitive season of Star Wars: Armada by helping maintain a high level of organized play.
                    Our primary goal is to maintain a balanced ruleset that players will use to keep the game flourishing for years to come.
                </Typography>
            </div>
            <div style={{ display: 'flex', flexFlow: 'column nowrap', 'alignItems': 'center' }}>
                <Typography variant="h4">The Team</Typography>
                <Typography>Description about the differences between Core and Mid Rim and all the other stuff.</Typography>
                <div
                    style={{
                        margin: 16,
                        gap: 16,
                        display: 'flex',
                        flexFlow: breakpoints.lg ? 'row nowrap' : 'column nowrap',
                        justifyContent: 'space-between'
                    }}
                >
                    <div style={{ width: '100%' }}>
                        <Typography variant="h5">Nicholas Brown</Typography>
                        <Typography variant="subtitle1">@cactus.cooler</Typography>
                        <Divider />
                        <Typography>

                        </Typography>
                    </div>
                    <div style={{ width: '100%' }}>
                        <Typography variant="h5">Nicholas Larson</Typography>
                        <Typography variant="subtitle1">@unskilledfirstofficer</Typography>
                        <Divider />
                        <Typography>

                        </Typography>
                    </div>
                    <div style={{ width: '100%' }}>
                        <Typography variant="h5">Simon Girard</Typography>
                        <Typography variant="subtitle1">@cptawesomer</Typography>
                        <Divider />
                        <Typography>
                            
                        </Typography>
                    </div>
                    <div style={{ width: '100%' }}>
                        <Typography variant="h5">Mackenzie Dalla Lana</Typography>
                        <Typography variant="subtitle1">@largepackage</Typography>
                        <Divider />
                        <Typography>
                            
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}
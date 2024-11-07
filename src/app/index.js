import { useState } from 'react';
import {
    Typography,
    Divider,
    Box,
    Tabs,
    Tab,
    useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Home from './home';
import AboutUs from './aboutUs';
import Faq from './faq';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

export default function Arc() {
    const [tabValue, setTabValue] = useState(0);
    const theme = useTheme();
    const breakpoints = {
        sm: useMediaQuery(theme.breakpoints.up('sm')),
        md: useMediaQuery(theme.breakpoints.up('md')),
        lg: useMediaQuery(theme.breakpoints.up('lg'))
    };

    return (
        <div style={{ gap: 36, padding: 24, display: 'flex', flexFlow: 'column nowrap', alignItems: 'center' }}>
            <Typography variant="h2">
                Armada Ruleset Collective
            </Typography>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs variant="fullWidth" value={tabValue} onChange={(e, v) => setTabValue(v)}>
                        <Tab label="Home" />
                        <Tab label="About Us" />
                        <Tab label="FAQ" />
                    </Tabs>
                </Box>
                <CustomTabPanel value={tabValue} index={0}>
                    <Home breakpoints={breakpoints} />
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={1}>
                    <AboutUs breakpoints={breakpoints} />
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={2}>
                    <Faq breakpoints={breakpoints} />
                </CustomTabPanel>
            </Box>
        </div>
    )
}
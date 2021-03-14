
import * as React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import   { INavStaus } from '../layout/Dashboard';
 

const Placeholder = <T extends INavStaus>( props: T ) => {
    return (
        <Container  >
            <Grid container spacing={4} style={{ backgroundColor: "", margin: "auto" }} justify="center">
                {/* Chart */}
                <Grid item xs={12} md={8} lg={4} >
                    <Paper>
                        <img src="https://media.giphy.com/media/26AHqZycSplGWWPAI/giphy.gif" style={{ display: "block", margin: "auto", padding: 10, maxWidth: "100%" }} />
                        {JSON.stringify(props)}
                    </Paper>
                        
                </Grid>
            </Grid>
        </Container>
    );
}

export default Placeholder;

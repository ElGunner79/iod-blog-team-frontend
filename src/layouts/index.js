import Grid from '@material-ui/material/Grid';
import { styled } from '@material-ui/material/styles';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Outlet />
            </Grid>
        </Grid>
    );
}

export default Layout;
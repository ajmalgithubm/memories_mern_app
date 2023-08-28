import React from 'react';
import {Container, Grid, AppBar, Typography, Grow} from '@mui/material';
import memories from './images/memories.jpg';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import classes from './App.module.css';
import { useDispatch} from 'react-redux'
const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar className={ classes.appBar} position='static' color='inherit'>
        <Typography className = {classes.heading} variant='h2' align='center'>Memories</Typography>
        <img className = {classes.image} src={memories} alt='memories' height="60"></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid display="flex" justifyContent= "space-between" alignItems="stretch" spacing={3}>
            <Grid items xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid items xs={12} sm={7}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App

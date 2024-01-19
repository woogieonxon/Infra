import React, { useContext } from 'react'

import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';

import { Menu, Container, Icon } from 'semantic-ui-react'
import MusicsList from './component/MusicsList'
import MusicDetails from './component/MusicDetails'
import { AuthContext } from './context/Auth.context';


function Dashboard() {

    const { logout } = useContext(AuthContext)
    const onLogout = (e) => {
        e.preventDefault();
        logout();
    }
  
    return (
        <div>
            <Router>
            <Menu fixed='top' color='goldenrod' inverted>
                <Menu.Menu>
                <Menu.Item header href='/'><Icon name='play'/>beatonclOud</Menu.Item>
                </Menu.Menu>
                <Menu.Menu position='right'>
                <Menu.Item link>Contact to us</Menu.Item>
                <Menu.Item link onClick={onLogout}>Log out</Menu.Item>
                </Menu.Menu>
            </Menu>

            <Container style={{ marginTop: 70 }}>
                <h1>Music is my Life</h1>
                
            </Container>

            <Container style={{ marginTop: 70 }}>
                <Route path='/' exact component={() => 
                <MusicsList/>
                }/>
                <Route path='/musics/:musicId' render={props => 
                <MusicDetails id={props.match.params.musicId} locationState={props.location.state}/>
                }/>
                {/* <Route path='/login' exact component={() => <Login />} /> */}
            </Container>
            </Router>
        </div>
    );
  }

  export default Dashboard;

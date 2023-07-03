import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes , Route } from 'react-router-dom';

import { Actors, MovieInfo, Movies, NavBar, Profile } from './';

const App = () =>(
    <div>
        <CssBaseline/>
        <NavBar/>
        <main>
            <Routes>
                <Route  path="/movie"
                   element ={<MovieInfo/>} 
                />
                <Route  path="/actors" element={<Actors/>}/>
                    
                <Route  path="/profile" element= {<Profile/>} />
 
                <Route  path="/" element= {<Movies/>} /> 
                
            </Routes> 
        </main>
    </div>
);

export default App;

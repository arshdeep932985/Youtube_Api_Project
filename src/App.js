
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Box} from '@mui/material'
import React from 'react'
import{ Navbar,Feed ,SearchFeed,VideoDetail,ChannelDetail} from './components'

const App = () => 
(
   <BrowserRouter>
   <Box sx={{backgroundColor:"#000"}}>
<Navbar/>
<Routes>
  <Route path="/" exact element={<Feed/>}/>
  <Route path="/video/:id"  element={<VideoDetail/>}/>
  <Route path="/channel/:id"  element={<ChannelDetail/>}/>
  <Route path="/search/:searchTerm"  element={<SearchFeed/>}/>
  <Route path="/search/:searchTerm/channel/:id"  element={<ChannelDetail/>}/>
  <Route path="/search/:searchTerm/video/:id"  element={<VideoDetail/>}/>
  <Route path="/search/:searchTerm/channel/:id/video/:id"  element={<VideoDetail/>}/>
</Routes>
   </Box>
   </BrowserRouter>
  )


export default App


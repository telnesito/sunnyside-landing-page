import { Box } from '@mui/material'
import Hero from './components/Hero'
import Egg from './components/Egg'
import Couple from './components/Couple'
import Graphic from './components/Graphic'
import Comments from './components/Comments'

function App() {

  return (
    <Box
      boxSizing={'border-box'}
      width={'100%'}
      height={'auto'}
      bgcolor={'gray'}
    >
      <Hero />
      <Egg />
      <Couple />
      <Graphic />
      <Comments />
    </Box>
  )
}

export default App

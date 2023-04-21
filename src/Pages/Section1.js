import { Box, Typography } from '@mui/material';
import React from 'react';

import hero from '../../src/imges/hero_s.png'

const Section1 = () => {
    return (
        
        <Box>
            <Typography align="center" variant='h3' sx={{fontWeight:900 }}  >
              Fashions<b style={{color:"red"}}>Blog</b>
            </Typography>
            <Typography align='center' variant="body2" sx={{fontWeight:100}}>
                We Make you Look the better of you!

            </Typography>


         <Box 
         
             sx={{

                 backgroundImage:`url(${hero})`,
                 backgroundRepeat:'no-repeat',
                 backgroundColor:"#171A53",
                 backgroundPosition:'center',
                 backgroundSize:"cover",
                 height:600,
                 width:'100%',
             }}
         >

         </Box>

             
        </Box>
    );
};

export default Section1;
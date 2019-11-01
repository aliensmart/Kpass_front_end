import React from 'react';
import {Flex, Box} from 'rebass';
import {Link} from 'react-router-dom'


const Header = ()=>{
    return(
        <Flex>
            <Box p={3} width={1/2} bg='secondary'>
                <p>Logo</p>
            </Box>

            <Box p={3} width={1/2} bg='secondary'>
            <Flex>
                    <Box p={3} width={2/8} bg='secondary'>
                        <Link type="nav" to='/'>Home</Link>
                    </Box>

                    <Box p={3} width={2/8} bg='secondary'>
                        <Link type="nav" to='/news'>News</Link>
                    </Box>

                    <Box p={3} width={2/8} bg='secondary'>
                        <Link type="nav" to='/weakpass'>WeakPass</Link>
                    </Box>

                    <Box p={3} width={2/8} bg='secondary'>
                        <Link type="nav" to='/login'>Login/Register</Link>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}


export default Header
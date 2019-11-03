import React from 'react';
import {Flex, Box} from 'rebass';
import {Link} from 'react-router-dom'
import './Header.css'


const Header = ()=>{
    return(
        <Flex className="main_nav">
            <Box p={3} width={1/2} bg='secondary'>
                <p>Logo</p>
            </Box>

            <Box width={1/2} bg='secondary'>
            <Flex>
                    <Box className="items" p={3} width={2/8} bg='secondary'>
                        <Link className="main_link" type="nav" to='/'>Home</Link>
                    </Box>

                    <Box className="items" p={3} width={2/8} bg='secondary'>
                        <Link className="main_link" type="nav" to='/news'>News</Link>
                    </Box>

                    <Box className="items" p={3} width={2/8} bg='secondary'>
                        <Link className="main_link" type="nav" to='/weakpass'>WeakPass</Link>
                    </Box>

                    <Box className="items" p={3} width={2/8} bg='secondary'>
                        <Link className="main_link" type="nav" to='/login'>Login/Register</Link>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}


export default Header
import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { House } from 'react-bootstrap-icons';


const Navibar = (props) =>{

    return(
        <Navbar collapseOnSelect bg='light'>
            <Navbar.Brand className="ml-5" href="/"><House size={30}/></Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                <Nav.Link href="/RandomQuote">Random Quote</Nav.Link>
                <Nav.Link href="/MarkdownPreviewer">Markdown Previewer</Nav.Link>
                <Nav.Link href="/DrumMachine">Drum Machine</Nav.Link>
                <Nav.Link href="/Calculator">Calculator</Nav.Link>
                <Nav.Link href="/TomatoTimer">Tomato Timer</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navibar;
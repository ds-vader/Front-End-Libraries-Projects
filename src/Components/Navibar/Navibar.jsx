import React from 'react'
import {Navbar, Nav, Link} from 'react-bootstrap'


const Navibar = (props) =>{

    return(
        <Navbar collapseOnSelect bg='light'>
            <Navbar.Brand className="ml-5" href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                <Nav.Link href="/RandomQuote">Random Quote</Nav.Link>
                <Nav.Link href="/MarkdownPreviewer">Markdown Previewer</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navibar;
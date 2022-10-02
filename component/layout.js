import React from "react";
import {
    Container,
    Header,
    Footer,
    FooterTab,
    Left,
    Right,
    Body,
} from 'native-base';

export const Layout = props => (
    <Container>
        <Header>
            <Left>
            {props.left}
            </Left>
            <body><title>{props.title}</title></body>
            <Right>{props.right}</Right>
        </Header>
        {props.children}
        <Footer>{props.footer}</Footer>
    </Container>
)
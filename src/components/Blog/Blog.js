import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>


            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>what is cors? #1</Accordion.Header>
                    <Accordion.Body>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication? #2</Accordion.Header>
                    <Accordion.Body>
                        Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Monitor App Performance. For Mobile or Web Apps. Build Extraordinary Apps. <br />
                        Other Options:=>
                        Single-Factor/Primary Authentication. ...
                        Two-Factor Authentication (2FA) ...
                        Single Sign-On (SSO) ...
                        Multi-Factor Authentication (MFA) ...
                        Password Authentication Protocol (PAP) ...
                        Challenge Handshake Authentication Protocol (CHAP) ...
                        Extensible Authentication Protocol (EAP)
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> How does the private route work? #2</Accordion.Header>
                    <Accordion.Body>
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default Blog;
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
                        Other Options:-
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
                    <Accordion.Header> How does the private route work? #3</Accordion.Header>
                    <Accordion.Body>
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is Node? How does Node work? #4</Accordion.Header>
                    <Accordion.Body>
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default Blog;
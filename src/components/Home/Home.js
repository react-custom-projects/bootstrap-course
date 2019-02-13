import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {bComponents} from '../../import-all-bootstrap-components';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <bComponents.Container>
                <bComponents.Row>
                    <bComponents.Col>
                        <bComponents.Jumbotron>
                            <h2>Welcome to codeLife.io</h2>
                            <p>This is how to build a website with React, React-Router & React-Bootstrap</p>
                            <Link to="/about">
                                <bComponents.Button variant="primary">About</bComponents.Button>
                            </Link>
                        </bComponents.Jumbotron>
                    </bComponents.Col>
                </bComponents.Row>
                <bComponents.Row className="text-center">
                    <bComponents.Col xs={12} sm={4} className="person-wrapper">
                        <bComponents.Image src="assets/person-1.jpg" roundedCircle  className="profile-pic"/>
                        <h3>Frank</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                    </bComponents.Col>
                    <bComponents.Col xs={12} sm={4} className="person-wrapper">
                        <bComponents.Image src="assets/person-2.jpg" roundedCircle  className="profile-pic"/>
                        <h3>Vanessa</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                    </bComponents.Col>
                    <bComponents.Col xs={12} sm={4} className="person-wrapper">
                        <bComponents.Image src="assets/person-3.jpg" roundedCircle  className="profile-pic"/>
                        <h3>Riff</h3>
                        <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                    </bComponents.Col>
                </bComponents.Row>
            </bComponents.Container>
        );
    }
}

export default Home;
import React, {Component} from 'react';
import {bComponents} from '../../import-all-bootstrap-components';

import './About.css';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <bComponents.Image src="assets/dog-people.jpg" className="header-image"/>
                <bComponents.Container>
                    <bComponents.Row>
                        <bComponents.Col xs={12} sm={{ span: 8, offset: 2 }}>
                            <bComponents.Image src="assets/person-1.jpg" rounded className="about-profile-pic"/>
                            <h3>Frank The Tank</h3>
                            <p>Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Maecenas nec odio et ante tincidunt tempus. In dui magna, posuere eget, vestibulum et, tempor
                                auctor, justo. Aenean massa. Phasellus tempus.</p>
                            <p>Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Maecenas nec odio et ante tincidunt tempus. In dui magna, posuere eget, vestibulum et, tempor
                                auctor, justo. Aenean massa. Phasellus tempus.</p>
                            <p>Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Maecenas nec odio et ante tincidunt tempus. In dui magna, posuere eget, vestibulum et, tempor
                                auctor, justo. Aenean massa. Phasellus tempus.</p>
                            <p>Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Maecenas nec odio et ante tincidunt tempus. In dui magna, posuere eget, vestibulum et, tempor
                                auctor, justo. Aenean massa. Phasellus tempus.</p>
                        </bComponents.Col>
                    </bComponents.Row>
                </bComponents.Container>
            </React.Fragment>
        );
    }
}

export default About;
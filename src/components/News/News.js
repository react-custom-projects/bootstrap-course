import React, {Component} from 'react';
import {bComponents} from '../../import-all-bootstrap-components';

import './News.css';

class News extends Component {
    render() {
        return (
            <React.Fragment>
                <bComponents.Image src="assets/mountain-man.jpg" className="header-image"/>
                <bComponents.Container>
                    <h2>News</h2>
                    <bComponents.Row>
                        <bComponents.Col xs={12} sm={8} className="main-section">
                            <p>Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Maecenas nec odio et ante tincidunt tempus. In dui magna, posuere eget, vestibulum et, tempor
                                auctor, justo. Aenean massa. Phasellus tempus.</p>
                            <p>Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Maecenas nec odio et ante tincidunt tempus. In dui magna, posuere eget, vestibulum et, tempor
                                auctor, justo. Aenean massa. Phasellus tempus.</p>
                            <p>Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Maecenas nec odio et ante tincidunt tempus. In dui magna, posuere eget, vestibulum et, tempor
                                auctor, justo. Aenean massa. Phasellus tempus.</p>
                            <p>Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Maecenas nec odio et ante tincidunt tempus. In dui magna, posuere eget, vestibulum et, tempor
                                auctor, justo. Aenean massa. Phasellus tempus.</p>
                        </bComponents.Col>
                        <bComponents.Col xs={12} sm={4} className="main-section">
                            <bComponents.Image src="assets/dog-people.jpg" className="header-image"/>
                            <p>Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Maecenas nec odio et ante tincidunt tempus. In dui magna, posuere eget, vestibulum et, tempor
                                auctor, justo. Aenean massa. Phasellus tempus.</p>
                        </bComponents.Col>
                    </bComponents.Row>
                </bComponents.Container>
            </React.Fragment>
        );
    }
}

export default News;
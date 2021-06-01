import React, { Component } from 'react';
import {Row, Col, Image, Button, Card} from 'react-bootstrap';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';

class sampleProjects extends Component {
    render() {
        return (
            <div className="textArea">
                <div className="card">
                <Card style={{ width: '25rem', height:'28rem' }}>
                    <Card.Img variant="top"src= {image4}
                    height = "220"
                    width = "150" />
                    <Card.Body>
                        <h3>Large Scale corn farm</h3>
                        <Card.Text>
                            <p>Bati, Mbouda, West Region <br />
                            73 <b>Views</b><br /> 
                            Budget range FCFA 250,000 - 300,000</p>
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className="card">
                <Card style={{ width: '25rem', height:'28rem' }}>
                    <Card.Img variant="top" src= {image5} 
                    height = "220"
                    width = "150"/>
                    <Card.Body>
                        <Card.Title>Invest in Agriculture</Card.Title>
                        <Card.Text>
                            Find and invest in real, lucrative farm projects from accross Cameroon. Want to be a part of an exciting agricultural initiative, the perfect farm projects for you are just a button click away. 
                        </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className="card">
                <Card style={{ width: '25rem', height:'28rem' }}>
                    <Card.Img variant="top" src= {image6} 
                    height = "220"
                    width = "150"/>
                    <Card.Body>
                        <Card.Title >Find funding for your farm project</Card.Title>
                        <Card.Text>
                            Have a real farm project that you're starting to work on, but looking for investors to invest in your work? Register your project to enjoy the outstanding benefits of out platform. 
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
                </div>
            </div>

        );
    }
    };

export default sampleProjects;
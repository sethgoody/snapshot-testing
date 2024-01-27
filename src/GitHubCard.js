import React from "react";
import { Card } from "react-bootstrap";
import github from '../src/github.jpg'

function GitHubCard() {
    return (
        <Card style={{ width: '28rem', margin: 'auto' }}>
            <Card.Img variant="top" src={github} />
            <Card.Body>
                <Card.Title>Seth Goodman</Card.Title>
                <Card.Text>
                    Seth likes to code
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default GitHubCard
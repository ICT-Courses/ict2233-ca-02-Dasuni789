import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

export default function ProjectCard({ title, description, tags = [], image, demoLink, repoLink }) {
  return (
    <Card className="project-card h-100 shadow-sm">
      {image && <Card.Img variant="top" src={image} className="project-img" alt={title} />}
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
        <div className="mb-3 project-tags">
          {tags.map((t, i) => (
            <Badge bg="success" key={i} className="me-2 tag-badge">
              {t}
            </Badge>
          ))}
        </div>
        <div className="btn-demo mt-auto d-flex gap-2">
  {demoLink && (
    <Button
      className="custom-btn"
      href={demoLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      Live Demo
    </Button>
  )}
  {repoLink && (
    <Button
      className="custom-btn"
      href={repoLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      Source Code
    </Button>
  )}
</div>

       
      </Card.Body>
    </Card>
  );
}
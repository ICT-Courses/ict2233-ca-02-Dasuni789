import React, { useEffect, useState } from 'react';
import { Container ,Row ,Col,Card,Spinner, CardTitle } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard.jsx';

import p1 from "../assets/coffeewebsite.png";
import p2 from "../assets/companyexpenseve.png";
import p3 from "../assets/furnituerfigma.png";


export default function Projects() {
    const featured = [
        {
            title: "Protfolio Website",
            description: "A Coffeee Menu Web Site built with React+ Vite and tailwincss. Responsive design and menu showcase.",
            tags: ["React", "Vite", "Tailwincss", "JavaScript", "HTML"],
            image: p1,
            demoLink: "https://drive.google.com/file/d/1UD6GdSL1gWL1o-ZsIqA8FEG597V6vdu9/view?usp=sharing ",
           repoLink: "https://github.com/ICT-Courses/ict2233-ca-01-Dasuni789"
        },
        {
            title: "Company Expense Tracker",
            description: "A Company Expense Tracker built with Visual Studio and Vite.",
            tags: ["Visual Studio", "Vite", "C#"],
            image: p2,
            demoLink: "https://drive.google.com/file/d/1ovYwUb27vkJSNI16IzFWrS4Uwu5dKIqI/view?usp=drive_link",
            repoLink: " https://github.com/ICT-Courses/application-development-ca1-Dasuni789"
        },
        {
            title: "Furniture Website Design",
            description: "A furniture Web Site design with Figma. User can give feedback, see product list, filter, search option there.",
            tags: ["Express.js", "JavaScript", "Node.js", "MongoDB", "HTML", "CSS", "Figma"],
            image: p3,
            demoLink: "https://drive.google.com/file/d/18mbwk7vSDJoOZb4MHXkOWNZasC_wdlkV/view?usp=sharing ",
            repoLink: "https://github.com/HasiniPrabodika/Furniture-Hub"
        }
    ];

    const GITHUB_USERNAME = "Dasuni789";

    const [repo, setRepo] = useState([]);
    const [loadingRepo, setLoadingRepo] = useState(false);
    const [repoError, setRepoError] = useState(null);

    useEffect(() => {
        async function fetchRepo() {
            try {
                setLoadingRepo(true);
                setRepoError(null);
                const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`);
                if (!res.ok) throw new Error(`Error:${res.status}`);
                const data = await res.json();
                setRepo(data);
            } catch (err) {
                setRepoError(err.message);
            } finally {
                setLoadingRepo(false);
            }
        }
        fetchRepo();
    }, [GITHUB_USERNAME]);

    return (
        <>
            <main>
                <section className="prjects-hero text-center py-5">
                    <Container>
                        <h1 className=" pro-name mb-3"> My Project </h1>
                        <p className=" text-muted">
                            Here are some of the project I've worked on. Each one represents a learning journey and showcases different aspects of modern web development.
                        </p>
                    </Container>
                </section>

                <section className="feature container py-5">
                    <h3 className="mb-4 text-center"> Featured Projects</h3>
                    <Container>
                        <Row className="g-4">
                            {featured.map((p, i) => (
                                <Col md={6} lg={4} key={i}>
                                    <ProjectCard {...p} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                <section className="latest  container py-5">
                    <h3 className="mb-4 text-center"> Latest GitHub projects</h3>
                    <p className=" text-muted  text-center mb-4">
                        Here are some of my recent repositories from GitHub, automatically updated via the GitHub API.
                    </p>
                    <Container>
                        {loadingRepo && (
                            <div className="text-center py-4">
                                <Spinner animation="border" />
                            </div>
                        )}

                        {repoError && (
                            <div className="alert alert-warning text-center">{repoError}</div>
                        )}
                        <Row className="g-4">
                            {repo.map((r) => (
                                <Col md={6} lg={4} key={r.id}>
                                    <Card className="h-100 repo-card shadow-sm">
                                        <Card.Body>
                                            <Card.Title>{r.name}</Card.Title>
                                            <Card.Text className="mt-auto d-flex justify-content-between align-items-center">
                                                <div className="small text-muted">
                                                    {r.language ? <span className="me-2">{r.language}</span> : null}
                                                    ★ {r.stargazers_count}
                                                </div>
                                                <a href={`https://github.com/${GITHUB_USERNAME}/${r.name}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary btn-sm">View Repo</a>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                <section className="footer-cta py-5"></section>
                <div className="footer-cta-text p-4 rounded-3 text-center shadow-sm" style={{ background: "#fff"}}>
                    <h4 className=" footer-tit"> Want to see more ? </h4>
                    <p className="text">Check my GitHub for more repositories and contributions.</p>
                    <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="btn btn-success">View GitHub Profile </a>
                </div>
            </main>
        </>
    );
}

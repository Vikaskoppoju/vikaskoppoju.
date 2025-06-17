import React from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Project One',
        description: 'This is the description for project one.',
        image: "../assets/images/5.png",
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'This is the description for project two.',
        image: "../assets/images/5.png",
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'This is the description for project three.',
        image: "../assets/images/5.png",
    },
    {
        id: 4,
        title: 'Project Four',
        description: 'This is the description for project three.',
        image: "../assets/images/5.png",
    },
];

const NewWork: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'center', padding: '20px' }} id='work'>
            {projects.map((project) => (
                <div
                    key={project.id}
                    style={{
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        width: '300px',
                        padding: '16px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                    id='work'
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: '100%', borderRadius: '8px' }}
                    />
                    <h3 style={{ margin: '16px 0 8px', color:'#fff' }}>{project.title}</h3>
                    <p style={{ color:'#fff' }}>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default NewWork;
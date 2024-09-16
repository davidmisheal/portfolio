import React, { useState } from 'react'
import { Nav } from './components/Nav'
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Home = () => {
    const [hover, setHover] = useState(false)
    const downloadFile = () => {
        fetch(require('./assets/resume final assiut.pdf'))
            .then(response => response.blob())
            .then(blob => {
                // Create a URL for the file
                const fileURL = window.URL.createObjectURL(blob);
                // Create a temporary link to download the file
                const link = document.createElement('a');
                link.href = fileURL;
                link.download = 'resume final assiut.pdf';
                link.click();
            })
            .catch(error => console.log('Error downloading the file', error));
    };

    return (
        <>
            <Nav />
            <div className='body'>
                <div id='home' className='home'>
                    <section className='home-left'>
                        <h3>Hello!</h3>
                        <h2>
                            I'm <strong>David Misheal</strong>
                        </h2>
                        <p>A Front End Developer</p>
                        <span>
                            <a href='#contact'>
                                <button className='hirebtn'>HIRE ME</button>
                            </a>
                            <a href='#projects'>
                                <button className='prbtn'>PROJECTS</button>
                            </a>
                        </span>
                    </section>
                    <section className='home-right'>
                        <img src={require('../src/assets/IMG-20240519-WA0025.jpg')} />
                    </section>
                </div>
                <div id='about' className='about'>
                    <h2>
                        About Me
                    </h2>
                    <h3>
                        About
                    </h3>
                    <p>I'm David, a frontend developer focused on crafting clean, user-friendly websites. Below are my contact details.</p>
                    <section>
                        <strong>Name:<p>David Misheal</p></strong>
                        <strong>Date of birth:<p>December 17,2001</p></strong>
                        <strong>Address:<p>Assiut,Egypt</p></strong>
                        <strong>Email:<p>davidmichealll67@gmail.com</p></strong>
                        <strong>Phone:<p>+20 1142505777</p></strong>
                    </section>
                    <button onClick={downloadFile}>DOWNLOAD CV</button>
                </div>
                <div id='resume' className='resume'>
                    <h2>
                        Resume
                    </h2>
                    <h3>
                        Resume
                    </h3>
                    <p>Here's a quick look at my experience and skills as a frontend developer.</p>
                    <section>
                        <div>
                            <h4>Projects</h4>
                            <ul>
                                <a href='https://github.com/davidmisheal/graduationproject'><li>MeetThePharaohs</li></a>
                                <a href='https://evengreener.vercel.app/'><li>Evengreener</li></a>
                                <a href='https://eclipse-five-eta.vercel.app/'><li>Eclipse</li></a>
                            </ul>
                        </div>
                        <div>
                            <h4>Core Skills</h4>
                            <ul>
                                <li>HTML/CSS</li>
                                <li>Javascript</li>
                                <li>React.js</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Languages</h4>
                            <ul>
                                <li>Arabic</li>
                                <li>English</li>
                                <li>German</li>
                            </ul>
                        </div>
                        <div>
                            <h4>My Github</h4>
                            <a href='https://github.com/davidmisheal/'>https://github.com/davidmisheal/</a>
                        </div>
                        <div>
                            <h4>Certificates</h4>
                            <p className='major'>The Web Development Challenger Track</p>
                            <p>Ministry of Communication and Information Technology</p>
                        </div>
                        <div>
                            <h4>Oct 2020 - Jul 2024</h4>
                            <p className='major'>Bachelor of Computer Science</p>
                            <p>Assiut University</p>
                        </div>
                    </section>
                    <button onClick={downloadFile}>DOWNLOAD CV</button>
                </div>
                <div id='projects' className='projects'>
                    <h2>Projects</h2>
                    <h3>Projects</h3>
                    <p>Check out some of the projects I've worked on as a frontend developer.</p>
                    <section>
                        <a href='https://github.com/davidmisheal/graduationproject'>
                            <span className="project-wrapper">
                                <div>
                                    <img src={require('../src/assets/Egypt-History-Egypt-Tours-Portal.jpg')} />
                                </div>
                                <h4 className='project-25'>MeetThePharaohs</h4>
                            </span>
                        </a>
                        <section>
                            <a href='https://evengreener.vercel.app/'>
                                <div className="project-wrapper">
                                    <img src={require('../src/assets/even.jpeg')} />
                                    <h4 className='project-50'>Evengreener</h4>
                                </div>
                            </a>
                            <a href='https://eclipse-five-eta.vercel.app/'>
                                <div className="project-wrapper">
                                    <img src={require('../src/assets/eclipse.jpg')} />
                                    <h4 className='project-50'>Eclipse</h4>
                                </div>
                            </a>
                        </section>
                    </section>
                </div>
                <div id='contact' className='contact'>
                    <h2>Contact Me</h2>
                    <h3>Contact</h3>
                    <p>Feel free to reach out to me for any collaboration or inquiries.</p>
                    <section>
                        <ul>
                            <li>
                                <i class="fa-solid fa-map-location fa-2xl"></i>
                                <h6>ADDRESS</h6>
                                <p>Assiut,Egypt</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-phone fa-2xl"></i>
                                <h6>CONTACT NUMBER</h6>
                                <p>+20 1142505777</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-paper-plane fa-2xl"></i>
                                <h6>EMAIL ADDRESS</h6>
                                <p>davidmichealll67@gamil.conm</p>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}

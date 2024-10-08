import React, { useState } from 'react'
import { Nav } from './components/Nav'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../src/mobile.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    // Home section animation
    // Animating home-right without scroll trigger
    // Ensure the non-scroll animations restart on page reload
    gsap.fromTo('.home-right',
        { x: 200 },
        {
            x: 0,
            duration: 1, onStart: () => gsap.set('.home-right', { clearProps: 'all' }) // Clear inline styles on start
        }
    );

    // Ensure the non-scroll animations restart on page reload
    gsap.fromTo('.home-left h2',
        { opacity: 0 },
        {
            opacity: 1,
            duration: 1.5,
            onStart: () => gsap.set('.home-left h2', { clearProps: 'all' }) // Clear inline styles on start
        }
    );

    // About section scroll-triggered animation
    gsap.fromTo('.about section',
        { y: -200, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.about',
                start: 'top bottom',
                end: '+=1000',
                scrub: true,
                onEnter: () => gsap.set('.about section', { clearProps: 'all' }) // Clear inline styles on enter
            }
        }
    );

    // Resume section scroll-triggered animation
    gsap.fromTo('.resume section',
        { y: -200, opacity: 0 },
        {
            y: 0,
            opacity: 1, duration: 2,
            scrollTrigger: {
                trigger: '.resume',
                start: 'top center',
                end: '+=500',
                scrub: true,
                onEnter: () => gsap.set('.resume section', { clearProps: 'all' }) // Clear inline styles on enter
            }
        }
    );
    gsap.fromTo('.projects section span',
        { opacity: 0 },
        {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '.projects',
                start: 'top top', // When the top of `.projects` hits the top of the viewport
                end: '+=500',    // Scroll 800px further from the start point
                scrub: true,     // Links animation progress to scroll position
            }
        }
    );
    // Animation for `.projects section section`
    gsap.fromTo('.projects section section',
        { opacity: 0 },
        {
            opacity: 1,
            duration: 1,
            delay: 1, // Delay the animation start
            scrollTrigger: {
                trigger: '.projects',
                start: 'top top', // When the top of `.projects` hits the top of the viewport
                end: '+=500',    // Scroll 800px further from the start point
                scrub: true,     // Links animation progress to scroll position
            }
        }
    );

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
                        <img src={require('../src/assets/cropped.jpg')} />
                    </section>
                </div>
                <div id='about' className='about'>
                    <h2>
                        About Me
                    </h2>
                    <h3>
                        About
                    </h3>
                    <p className='desc'>I'm David, a frontend developer focused on crafting clean, user-friendly websites. Below are my contact details.</p>
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
                    <p className='desc'>Here's a quick look at my experience and skills as a frontend developer.</p>
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
                    <p className='desc'>Check out some of the projects I've worked on as a frontend developer.</p>
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
                    <p className='desc'>Feel free to reach out to me for any collaboration or inquiries.</p>
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

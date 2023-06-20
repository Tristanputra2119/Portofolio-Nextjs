import React from "react"

const AboutPage = () => {
    return (
        <section id="about" className=" mt-0 pb-6 " >
            <div className="md:pt-5 md:pb-5 p-10 lg:p-2">
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 mr-auto ml-auto justify-between p-6">
                        <h1 className="text-center text-2xl md:text-4xl font-bold mb-6 md:text-center text-[#1E1E1E] font-['Concert One']">
                            ABOUT ME
                        </h1>
                        <hr className="w-12 h-1 mx-auto my-4 bg-gray-300 border-0 rounded text"></hr>
                        <p className="text-[#1E1E1E] mb:text-lg text-lg">
                            My name is <span>Made Ngurah Tristan Putra</span>, you can call me <span>Tristan</span> for short. I am a 3rd year Vocational High School student majoring in Software Engineering at SMKN 1 Denpasar.
                        </p>
                        <br />
                        <p className="mb:text-lg text-lg" >
                        I am a passionate software engineer with a keen interest in exploring and embracing new technologies. With a background in software engineering, I thrive on the challenges of developing innovative solutions and solving complex problems through logical thinking.
                        </p>
                        <br />
                        <p className="mb-10 text-lg">
                        I am constantly seeking opportunities to expand my knowledge and skills in the ever-evolving field of technology. 
                            </p>
                    </div> 
                    <div className="text-center md:w-1/2 md:text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb">SKILLS</h1>
            <hr className="w-12 h-1 mx-auto my-4 bg-[#FFF] border-0 rounded"></hr>
            <div className="flex flex-wrap flex-row z-10  items-center justify-center">
                <div className="skill-box">
                    <p>HTML</p>
                    <img src="/images/html.png" alt="" />
                </div>
                <div className="skill-box">
                    <p>CSS</p>
                    <img src="/images/css.png" alt="" />
                </div>
                <div className="skill-box">
                    <p>JavaScript</p>
                    <img className="js-img" src="/images/js.png" alt="" />
                </div>
                <div className="skill-box">
                    <p>Tailwind CSS</p>
                    <img src="/images/tailwind-css.png" alt="" />
                </div>
                <div className="skill-box">
                    <p>PHP</p>
                    <img className="php-img" src="/images/php.png" alt="" />
                </div>
                <div className="skill-box">
                    <p>MySQL</p>
                    <img src="/images/MySQL.png" alt="" />
                </div>
                <div className="skill-box">
                    <p>Laravel</p>
                    <img src="/images/Laravel.svg.png" alt="" />
                </div>
                <div className="skill-box">
                    <p>Github</p>
                    <img src="/images/github.png" alt=""  />
                </div>
            </div>
        </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage

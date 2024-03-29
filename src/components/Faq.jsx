import React from 'react'
import CollapsingBox from './CollapsingBox'
const Faq = () => {
    const data = [
        {
            ques : "What skills should a web developer have?",
            ans: `A web developer should have a strong understanding of the following skills:

            Front-end development: This includes languages like HTML, CSS, and JavaScript, as well as libraries and frameworks like React, Vue, and Angular. Front-end developers are responsible for the look, feel, and functionality of the website.
            Back-end development: This includes languages like Python, Java, PHP, and Ruby, as well as frameworks like Django, Spring, and Rails. Back-end developers are responsible for the server-side logic that powers the website, such as databases, user authentication, and e-commerce.
            Version control: Version control systems like Git and Mercurial are essential for tracking changes to code and collaborating with other developers.
            Debugging: Web developers need to be able to debug their code to find and fix errors.
            Problem-solving: Web developers need to be able to solve problems creatively and efficiently.
            Kreativan Technologies is a leading digital marketing and web development training company in India. They offer a variety of training programs for both beginners and experienced professionals. Kreativan Technologies' training programs are designed to help you learn the skills you need to succeed in a career in web development.`
        },
        {
            ques: "Can I be a digital marketer and web developer?",
            ans: `Yes, it is possible to be both a digital marketer and a web developer. In fact, many people find that these two roles complement each other well.

            Digital marketers are responsible for promoting and growing businesses online. They use a variety of channels, such as search engine optimization (SEO), social media marketing, and email marketing, to reach their target audiences.
            
            Web developers are responsible for building and maintaining websites. They use a variety of programming languages and tools to create websites that are both functional and visually appealing.`
        },
        {
            ques:"Is Digital Marketing a stable carrier?",
            ans: `Yes, digital marketing is a stable career. The digital marketing industry is growing rapidly, and there is a high demand for skilled digital marketers. In fact, the Bureau of Labor Statistics projects that the employment of web developers and digital designers will grow 23% from 2020 to 2030, much faster than the average for all occupations.

            There are a number of reasons why digital marketing is a stable career choice. First, digital marketing is essential for businesses of all sizes. In today's digital world, businesses need to have a strong online presence in order to reach their target audience and grow their business. This means that there is a high demand for digital marketers who can help businesses develop and implement effective digital marketing campaigns.`
        },
        {
            ques: "How long do digital marketers have to work?",
            ans: `Whether or not it is easy to get a job as a digital marketer depends on a number of factors, including your skills and experience, the job market in your area, and the company you are applying to.

            However, in general, the digital marketing industry is growing rapidly, and there is a high demand for skilled digital marketers. In fact, the Bureau of Labor Statistics projects that employment of web developers and digital designers will grow 23% from 2020 to 2030, much faster than the average for all occupations.
            
            This means that there are many opportunities for people to get jobs in digital marketing. However, it is important to have the necessary skills and experience in order to be competitive in the job market.`
        }
    ]
    return (
        <div className='faq-box w-full lg:max-w-[45%] px-6 bg-[#2F5AA8] py-32 flex flex-col gap-5'>
            <p className="text text-[#00FCFF] text-[2rem] font-bold ml-8">FAQ</p>
            <div className="faqs flex flex-col gap-5">
                {
                    data.map((item)=>{
                        return <CollapsingBox ques={item.ques} ans={item.ans} />
                    })
                }
            </div>
        </div>
    )
}

export default Faq

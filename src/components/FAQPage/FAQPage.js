import React from 'react';
import Faq from "react-faq-component";

const FAQPage = () => {

    const data = {
        title: "FAQ (How it works)",
        rows: [
            {
                title: "Is it Life Time Access,",
                content: "Yes you can access it lifetime "
            },
            {
                title: "How We Support",
                content:
                    "we support by social media and live class"
            },
            {
                title: "Is This Course Helpfull",
                content:
                    "Yes it's design by professional"
            },
            {
                title: "Do You Have Any App",
                content: "Yes, LearnEasy in app stor and playsote available"
            }
        ]
    };


    return (
        <div className='p-4 rounded m-5 course-details'>
            <section className="title-center p-4 rounded">
				<Faq data={data} />
			</section>
			
			
            
        </div>
    );
};

export default FAQPage;
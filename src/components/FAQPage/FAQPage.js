import React from 'react';
import Faq from "react-faq-component";

const FAQPage = () => {

    const data = {
        title: "FAQ (How it works)",
        rows: [
            {
                title: "Lorem ipsum dolor sit amet,",
                content: "Lorem ipsum dolor sit amet, consectetur "
            },
            {
                title: "Nunc maximus, magna at ultricies elementum",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
            },
            {
                title: "Curabitur laoreet, mauris vel blandit fringilla",
                content:
                    "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
            },
            {
                title: "What is the package version",
                content: "v1.0.5"
            }
        ]
    };


    return (
        <div>
            <section className="title-center">
				<Faq data={data} />
			</section>
			<br />
			<br />
			<br />
			<br />
			<section className="center">
				<Faq data={data} />
			</section>
            
        </div>
    );
};

export default FAQPage;
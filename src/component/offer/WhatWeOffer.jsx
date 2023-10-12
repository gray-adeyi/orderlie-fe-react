import OfferItem from './OfferItem';
import offerImg1 from '../../assets/offer-img1.png'
import offerImg2 from '../../assets/offer-img2.png'
import offerImg3 from '../../assets/offer-img3.png'
import './whatWeOffer.css';

const WhatWeOffer = () => {
    return (
        <section className="offer-container px-6  md:px-20 ">
            <h3 className="offer-head font-semibold text-lg md:text-3xl">
                What We Offer
            </h3>
            <div className="offer-body px-0 py-10 md:py-20  md:px-20 ">
                <OfferItem
                    reverse={true}
                    image={offerImg1}
                    title='Streamline Classroom Attendance'
                    text='Orderlie is the ultimate solution for students seeking a hassle-free way to access their class registers. Say goodbye to manual sign-ins and paper-based records. With Orderlie, students can simply fill out forms on the app, ensuring accurate attendance records for every class. This innovative tool not only saves time but also reduces the risk of errors, making it the go-to choice for modern classrooms.' />
                <OfferItem
                    reverse={false}
                    image={offerImg2}
                    title='Effortless Data Management'
                    text='Orderlie empowers class representatives to effortlessly manage attendance data. Once students input their attendance information through the app, class reps can quickly generate comprehensive reports in various formats, including Word documents, Excel spreadsheets, or PDF files. This flexibility ensures that attendance records are readily available for submission to lecturers, simplifying administrative tasks for both students and educators.' />
                <OfferItem
                    reverse={true}
                    image={offerImg3}
                    title='Enhancing Academic Efficiency'
                    text=' By embracing Orderlie, academic institutions can enhance their efficiency and accuracy in recording student attendance. This user-friendly app promotes transparency and accountability, fostering a collaborative learning environment. With the ability to generate reports in preferred formats, lecturers can access attendance data with ease, ultimately contributing to a more streamlined and effective educational experience. Orderlie is the smart choice for modernizing classroom attendance tracking.' />
            </div>
        </section>
    )
}

export default WhatWeOffer
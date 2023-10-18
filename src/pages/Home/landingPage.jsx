import WhatWeOffer from '../../component/offer/WhatWeOffer'
import './landingPage.css'
import Footer from '../../component/Footer'
import frameImg from '../../assets/Frame 6.png'
import sponsorOne from '../../assets/Oculus.png'
import sponsorTwo from '../../assets/Aven.png'
import Arrow from '../../assets/Arrow 1.svg'


const LandingPage = () => {
    return (
        <div className='w-screen h-auto items-center font-serrat'>
            <div className='flex flex-col gap-y-5 mb-5'>
                <div className='bg-bgColor flex pt-5 px-4 md:items-center md:justify-between md:px-5 md:py-0 h-45 md:h-60'>
                    <div className='flex flex-col gap-y-3 md:gap-y-4 text-white w-3/4 md:max-w-max'>
                        <p className='text-2xl md:text-40  font-bold'>Get things done the easy way</p>
                        <p className='text-base md:text-2xl md:w-11/12 md:font-medium'>Just what you need to get things done quickly, faster and less time consuming</p>
                        <button className='get-started'>
                            <span className='font-bold text-bgColor'>Get Started</span> 
                            <svg className='w-10 md:w-73' height="24" viewBox="0 0 75 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M74.0607 13.0607C74.6464 12.4749 74.6464 11.5251 74.0607 10.9393L64.5147 1.3934C63.9289 0.807611 62.9792 0.807611 62.3934 1.3934C61.8076 1.97919 61.8076 2.92893 62.3934 3.51472L70.8787 12L62.3934 20.4853C61.8076 21.0711 61.8076 22.0208 62.3934 22.6066C62.9792 23.1924 63.9289 23.1924 64.5147 22.6066L74.0607 13.0607ZM0 13.5H73V10.5H0V13.5Z" fill="#0A39E0"/>
                            </svg>
                        </button>
                    </div>
                    <div className='frame'>
                        <img src={frameImg} alt="a frame containing 3 shapes" />
                    </div>
                </div>

                <div className='flex items-center w-3/4 self-center justify-between'>
                    <div className='flex flex-col gap-y-2.5'>
                        <p className='text-xs text-sponsors font-normal font-roboto md:text-2xl  '>Powered by:</p>
                        <div className='sponsor-img'>
                            <img className='w-full h-full' src={sponsorOne} alt="powered by oculus" />
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-2.5'>
                        <p className='text-xs text-sponsors font-normal font-roboto md:text-2xl '>Powered by:</p>
                        <div className='sponsor-img'>
                            <img className='w-full h-full' src={sponsorTwo} alt="powered by aven" />
                        </div>
                    </div>
                </div>
            </div>

            <WhatWeOffer />

            <section className="ready-for-dev-container flex justify-center  py-20 bg-bgColorLight">
                <div className="ready-for-dev flex flex-col text-center">
                    <h3>Ready to try different work experience now?</h3>
                    <p>Get the best  working experience that you never feel  before</p>
                    <div className='flex justify-center'>
                        <button className='bg-bgColor font-bold'>SIGN UP NOW</button>
                    </div>
                </div>
            </section>
			<Footer />
        </div>
    )
}

export default LandingPage
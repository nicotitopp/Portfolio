import React from 'react'; 
import BlurText from '../../TextAnimations/BlurText/BlurText'; 




const Home: React.FC = () => 
    { 
    return (
        <section className="min-h-screen flex items-center justify-center px-4"> 
            <div className="max-w-4xl text-center"> 
                <h1>
                    <BlurText 
                        text="Dev-Peña" 
                        delay={300} 
                        animateBy="letters" 
                        direction="bottom" 
                        className="cursor-target text-8xl md:text-9xl font-extrabold text-gray-100 leading-tight"
                    />
                </h1>
            </div> 
        </section>
            ); 
}; 

    
    
export default Home;
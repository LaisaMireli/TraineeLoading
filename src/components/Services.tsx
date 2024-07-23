import React from 'react';


interface ServicesProps {
    title: string;
    subtitle: string;
    description: string;
}

const Services: React.FC<ServicesProps> = ({ title, subtitle, description }) => {
    return (
        <div className="flex flex-col items-center justify-center h-64 bg-white">
            <div className="text-center">
                <div className="flex items-center justify-center">
                    <div className="w-4 h-4 flex items-center justify-center text-MediumPurple font-montserrat font-bold text-4xl">+</div>
                    <span className="text-black text-4xl ml-1 font-montserrat font-medium">{title}</span>
                </div>
                <div className="text-4xl text-MediumPurple font-montserrat font-extrabold my-4">{subtitle}</div>
                <div className="text-black font-montserrat font-medium text-center text-xl md:text-2xl justify-center">
                    {description}
                </div>
            </div>
        </div>
    );
};


export default Services;
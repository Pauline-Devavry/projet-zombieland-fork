import React, { useState } from 'react';
import Container from '../components/Container';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-backgroundColor max-w-[35rem] mx-auto rounded-lg shadow-lg mb-6">
      <Container>
        <div className="border-t border-gray-300">
          <div
            className="flex justify-between items-center p-4 cursor-pointer bg-[#323232] text-white hover:bg-gray-700"
            onClick={toggleAccordion}
          >
            <h3 className="text-lg font-semibold">{title}</h3>
            <span className="text-lg">{isOpen ? '-' : '+'}</span>
          </div>
          {isOpen && (
            <div className="p-4 bg-gray-800 text-white">
              <p>{content}</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

const Accordion = () => {
  const faqItems = [
    {
      title: "Quelles sont les attractions phares de l'été?",
      content: 'Le Zombie... Le Zombie.... Le Zombie...Le Zombie...',
    },
    {
      title: "Quels sont les horaires d'ouverture du Parc?",
      content: 'Le parc ouvre de 10h00 et ferme a 21h00 hors periode été.',
    },
    {
      title: "Jai un handicap reconnu, ai-je un accès adapté aux attractions?",
      content: 'Bien sur ! notre parc est entierement accessible aux personnes handicapé.',
    },
  ];

  return (
    <div className="bg-backgroundColor py-8">
      <Container>
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">
          Questions Fréquemment Posées
        </h2>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-2/3">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
          </div>
          <div>
            <img 
              src="https://img.freepik.com/vecteurs-libre/zombie-vert-effrayant-style-cartoon_1308-132924.jpg?t=st=1726239478~exp=1726243078~hmac=c64a79fa90d45d7daa2ae4033370d136815d5da083641f056d41ded7a53288a1&w=740" 
              alt="Image zombie" 
              className="rounded-lg mb-4 w-1/3 mx-auto border-[2px] border-[#72232D]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};


export default Accordion;
import React, { useState } from 'react';


const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item text-2xl font-bold  text-white ml-20">
      <div className="accordion-title text-2xl font-bold  text-white" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
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
    <div className="accordion">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};


export default Accordion;
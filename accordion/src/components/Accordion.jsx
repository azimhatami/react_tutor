import { useState } from 'react';

const data = [
  {
    id: 1,
    title: 'Accordion one',
    text: 'Lorem 1 ipsum dolor sit amet. Ad tempore necessitatibus ut molestiae temporibus nam aperiam quaerat ex cupiditate voluptatibus in optio magnam? At f'
  },
  {
    id: 2,
    title: 'Accordion two',
    text: 'Lorem 2 ipsum dolor sit amet. Ad tempore necessitatibus ut molestiae temporibus nam aperiam quaerat ex cupiditate voluptatibus in optio magnam? At f'
  },
  {
    id: 3,
    title: 'Accordion three',
    text: 'Lorem 3 ipsum dolor sit amet. Ad tempore necessitatibus ut molestiae temporibus nam aperiam quaerat ex cupiditate voluptatibus in optio magnam? At f'
  }
];



function Accordion() {
  return (
    <>
      <div className='accordion'>
        {
          data.map((item) => <AccordionItem key={item.id} item={item}/>)
        }
      </div>
    </>
  );
}


export default Accordion;


function AccordionItem({item}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div key={item.id} className={`accordion_item ${isOpen ? 'accordion_expanded' : ''}`}>
        <div 
        className='accordion_header'
        onClick={() => setIsOpen((is) => !is)}
        >
          { item.title }
        </div>
        <div className='accordion_content'>
          { item.text}
        </div>
      </div>
    </>
  );
}

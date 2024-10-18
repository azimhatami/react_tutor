import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'

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
  const [open, setOpen] = useState(null);
  return (
    <>
      <div className='accordion'>
        {
          data.map((item) => <AccordionItem 
                              key={item.id} 
                              id={item.id} 
                              title={item.title}
                              text={item.text}
                              setOpen={setOpen} 
                              open={open}
                              />)
        }
      </div>
    </>
  );
}


export default Accordion;


function AccordionItem({id, title, text, open, setOpen}) {
  const isOpen = id === open;
  return (
    <>
      <div key={id} className={`accordion_item ${isOpen ? 'accordion_expanded' : ''}`}>
        <div 
        className='accordion_header'
        onClick={() => setOpen(id === open ? null : id)}
        >
          <div>{ title }</div>
          <ChevronDownIcon style={{width: '1.2rem', transition: 'all 0.2s ease-out', rotate: isOpen ? '180deg' : '0deg'}} />
        </div>
        <div className='accordion_content'>
          { text}
        </div>
      </div>
    </>
  );
}

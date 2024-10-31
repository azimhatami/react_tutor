import { XCircleIcon } from '@heroicons/react/24/outline';

function Modal({title, open, onOpen, children}) {

  if (!open) return null

  return (
    <>
      <div className='backdrop' onClick={() => onOpen(false)}></div>
      <div className='modal'>
        <div className='modal_header'>
          <h2 className='title'>{title}</h2>
          <button onClick={() => onOpen(false)}>
            <XCircleIcon className='icon'/>
          </button>
        </div>
        <div className='modal_body'>
          {children}
        </div>
      </div>
    </>
  );
}


export default Modal;

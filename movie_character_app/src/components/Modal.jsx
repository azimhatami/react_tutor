import { xCircleIcon } from '@heroicons/react/24/outline'

function Modal() {
  return(
    <>
      <div className='backdrop'></div>
      <div className='modal'>
        <div className='modal_header'>
          <h2 className='title'>{title}</h2>
          <button>
            <xCircleIcon />
          </button>
        </div>
      </div>
    </>
  );
}


export default Modal;

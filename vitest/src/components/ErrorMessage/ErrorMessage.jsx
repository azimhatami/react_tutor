function ErrorMessage({ count }) {
  return(
    <p>
      {count} {count === 1 ? 'Error' : 'Errors'} occurred
    {/* <span>hi</span> */}
    </p>
  );
}


export default ErrorMessage

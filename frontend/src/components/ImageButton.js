import image from  '../assets/question_mark.png';

function ImageButton({text}) {
  const showText = () => {
    
  }

  return (
    <button onClick={showText}>
      <img src={image} height="20"/>
    </button>
  );
}

export default ImageButton;
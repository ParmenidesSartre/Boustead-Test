const LeafCard = ({ index }) => {
    const getHighlightClass = (index) => {
      if (index % 2 === 0 && index % 6 === 0) {
        return 'bg-custom-yellow';
      } else if (index % 2 === 0) {
        return 'bg-custom-magenta';
      } else {
        return '';
      }
    };
  
    return (
      <div
        className={`w-card h-card border-2 border-leaf-green ${getHighlightClass(index)}
                    rounded-tl-leaf rounded-br-leaf mr-2 mb-2 flex justify-center items-center
                    text-2xl cursor-pointer`}
        onClick={() => alert(`Hi I’m card number ${index}`)}
      >
        {index}
      </div>
    );
};

export default LeafCard;

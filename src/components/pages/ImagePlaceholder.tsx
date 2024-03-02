import './imagecard.css'
function ImagePlaceholder() {

    const renderAnimatedDivs = () => {
        const divs = [];
        for (let i = 0; i < 20; i++) {
            divs.push(
                <div key={i} className="animated-bg"></div>
            );
        }
        return divs;
    };

  return (
    <div className="gallery-container">
        {renderAnimatedDivs()}
    </div>
    
  )
}

export default ImagePlaceholder
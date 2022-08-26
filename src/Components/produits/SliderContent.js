


function SliderContent({ activeIndex, imageSlider }) {
    return (
        <section>
            {imageSlider.map((slide, index) => (
                <div key={index}
                    className={ index === activeIndex ? 'slides active' : 'inactive'}>
                    <img className='slide-image' src={slide.urls} alt="caroussel d'images"/>
                    <h2 className='slide-title'>{slide.title}</h2>
                    <h4 className='slide-text'>{slide.description}</h4>
                    
                </div>

            ))}
        </section>
    );
}

export default SliderContent;
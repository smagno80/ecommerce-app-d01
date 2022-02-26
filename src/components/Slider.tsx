import { ReactElement, useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';

import { ApiSlides } from '../apifolder/SliderApi';
import './Slider.css';

type Props = {};

const Slider = (props: Props): ReactElement => {
	// useState hooks
	const [slides] = useState(ApiSlides);
	const [activeSlide, setActiveSlide] = useState(0);

	// style
	const slideStyle = 'slide flex items-center justify-center h-[100%]';
	const arrowStyle =
		'rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer';

	const prevSlide = (): void => {
		if (activeSlide === 0) {
			setActiveSlide(slides.length - 1);
		} else {
			setActiveSlide(activeSlide - 1);
		}
	};

	const nextSlide = (): void => {
		if (activeSlide === slides.length - 1) {
			setActiveSlide(0);
		} else {
			setActiveSlide(activeSlide + 1);
		}
	};

	return (
		<div className='slider h-[540px] bg-white flex items-center justify-between mobile:hidden'>
			{/* left Arrow */}
			<div className={arrowStyle} onClick={prevSlide}>
				<ArrowLeftOutlined style={{ fontSize: '50px' }} />
			</div>

			{/* Slide */}
			{slides.map((slide, index): ReactElement | null => {
				if (index === activeSlide) {
					return (
						<div
							className={
								`wrapper flex w-[100%] h-[500px] items-center justify-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` +
								slide.background
							}
							key={index}
						>
							<div className={slideStyle}>
								<div className='flex-1 flex justify-center items-center h-[100%]'>
									<img
										className=' h-[100%] object-cover'
										src={slide.src}
										alt='man'
									/>
								</div>
								<div className='discription flex flex-col flex-1 place-items-start justify-center ml-11'>
									<h2 className='text-[55px]'>{slide.content.h2}</h2>
									<p className=' text-[30px]'>{slide.content.p}</p>
									<button className='btn'>Shop Now</button>
								</div>
							</div>
						</div>
					);
				} else {
					return null;
				}
			})}

			{/* rightarrow div  */}
			<div className={arrowStyle} onClick={nextSlide}>
				<ArrowRightOutlined style={{ fontSize: '50px' }} />
			</div>
		</div>
	);
};

export default Slider;

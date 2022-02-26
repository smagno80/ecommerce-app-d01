import { ReactElement } from 'react';

type Props = {
	item: {
		src: string;
		title: string;
	};
};

const Category = ({ item }: Props): ReactElement => {
	return (
		<div className='flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'>
			<img className='w-[100%]' src={item.src} alt='category_img' />
			<div className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
				<h2 className='text-white font-medium text-[30px]'>{item.title}</h2>
				<button className='btn'>See more</button>
			</div>
		</div>
	);
};

export default Category;

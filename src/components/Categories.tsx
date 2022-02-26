import { ReactElement } from 'react';

import { ApiCategories } from '../apifolder/CategoryApi';
import Category from './Category';

const Categories = (): ReactElement => {
	return (
		<div className='flex justify-between items-center p-5'>
			{ApiCategories.map((category, index): ReactElement => {
				return <Category item={category} key={index} />;
			})}
		</div>
	);
};
export default Categories;

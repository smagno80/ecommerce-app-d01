import { ReactElement, useState } from 'react';
import { Close } from '@material-ui/icons';

type Props = {};

const Announce = (props: Props): ReactElement => {
	const [announceStyle, setAnnounceStyle] = useState(
		'bg-[#8a4af3] font-bold text-white flex items-center justify-center'
	);

	const handleClose = (): void => {
		setAnnounceStyle(announceStyle + ' hidden');
	};

	return (
		<div className={announceStyle}>
			<h2>Hurry up it&apos;s 40% off now</h2>
			<Close className='cursor-pointer' onClick={handleClose} />
		</div>
	);
};

export default Announce;

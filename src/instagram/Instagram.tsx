import React, { useEffect, useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

export default function Instagram() {
	const [randomReelUrl, setRandomReelUrl] = useState('');

	useEffect(() => {
		const fetchRandomReel = async () => {
			try {
				const result = await fetchRandomInstagramReel();

				setRandomReelUrl(result);
			} catch (error) {
				console.error(error);
			}
		};

		fetchRandomReel();
	}, []);

	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<InstagramEmbed url="https://www.instagram.com/p/C0B5snHMpNQ/" width={328} />
		</div>
	)
}

const fetchRandomInstagramReel = async () => {
  return 'https://www.instagram.com/p/C0B5snHMpNQ/';
};

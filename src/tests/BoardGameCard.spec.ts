// @vitest-environment jsdom

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import BoardGameCard from '../lib/components/BoardGameCard.svelte';

describe('BoardGameCard', () => {
	it('should render', () => {
		const result = render(BoardGameCard, {
			props: {
				boardGame: {
					id: '1234',
					name: 'Ticket to Ride',
					thumbnail:
						'https://cf.geekdo-images.com/ZWJg0dCdrWHxVnc0eFXK8w__itemrep/img/iiTIuTtuneM3tbDCjALecsgyizA=/fit-in/246x300/filters:strip_icc()/pic38668.jpg',
					yearpublished: '2004'
				}
			}
		});

		expect(() => result.getByText('Ticket to Ride')).not.toThrow();
	});
});

import type { BoardGame } from '$lib/types';
import { writable } from 'svelte-local-storage-store';
import omit from 'lodash.omit';

type Bookmark = Pick<BoardGame, 'id' | 'name'>;

type Bookmarks = {
	bookmarks: Record<string, Bookmark>;
};

export const bookmarks = writable<Bookmarks>('bookmarks', {
	bookmarks: {}
});

export const toggleBookmarked = (bookmark: Bookmark) => {
	bookmarks.update((current) => {
		if (current.bookmarks[bookmark.id]) {
			return { bookmarks: omit(current.bookmarks, bookmark.id) };
		}

		return { bookmarks: { ...current.bookmarks, [bookmark.id]: bookmark } };
	});
};

import { derived, readable } from 'svelte/store';

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

const start = new Date();

export const elapsed = derived(time, ($time) =>
	Math.round(($time - start) / 1000)
);

// derived의 4가지 형태. 최대 3개의 파라미터를 가질 수 있음
// store = derived(a, callback: (a: any) => any)
// store = derived(a, callback: (a: any, set: (value: any) => void) => void | () => void, initial_value: any)
// store = derived([a, ...b], callback: ([a: any, ...b: any[]]) => any)
// store = derived([a, ...b], callback: ([a: any, ...b: any[]], set: (value: any) => void) => void | () => void, initial_value: any)

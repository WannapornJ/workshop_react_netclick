/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			Inter: ["Inter", "system-ui"],
			Playwrite: ["Playwrite MX", "cursive"]
		},

		extend: {},
	},
	plugins: [],
}


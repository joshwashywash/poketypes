import './app.postcss';
import App from './App.svelte';

const app = new App({
	intro: true,
	target: document.getElementById('app'),
});

export default app;

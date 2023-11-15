import { css } from "@linaria/core";

export const globals = css`
  :global() {
	/* rokkitt-200 - latin */
	@font-face {
		font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
		font-family: 'Rokkitt';
		font-style: normal;
		font-weight: 200;
		src: url('../fonts/rokkitt-v36-latin-200.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* rokkitt-200italic - latin */
	@font-face {
		font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
		font-family: 'Rokkitt';
		font-style: italic;
		font-weight: 200;
		src: url('../fonts/rokkitt-v36-latin-200italic.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* rokkitt-regular - latin */
	@font-face {
		font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
		font-family: 'Rokkitt';
		font-style: normal;
		font-weight: 400;
		src: url('../fonts/rokkitt-v36-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* rokkitt-italic - latin */
	@font-face {
		font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
		font-family: 'Rokkitt';
		font-style: italic;
		font-weight: 400;
		src: url('../fonts/rokkitt-v36-latin-italic.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* rokkitt-600 - latin */
	@font-face {
		font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
		font-family: 'Rokkitt';
		font-style: normal;
		font-weight: 600;
		src: url('../fonts/rokkitt-v36-latin-600.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* rokkitt-600italic - latin */
	@font-face {
		font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
		font-family: 'Rokkitt';
		font-style: italic;
		font-weight: 600;
		src: url('../fonts/rokkitt-v36-latin-600italic.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* rokkitt-800 - latin */
	@font-face {
		font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
		font-family: 'Rokkitt';
		font-style: normal;
		font-weight: 800;
		src: url('../fonts/rokkitt-v36-latin-800.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* rokkitt-800italic - latin */
	@font-face {
		font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
		font-family: 'Rokkitt';
		font-style: italic;
		font-weight: 800;
		src: url('../fonts/rokkitt-v36-latin-800italic.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* niconne-regular - latin */
	@font-face {
		font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
		font-family: 'Niconne';
		font-style: normal;
		font-weight: 400;
		src: url('../fonts/niconne-v15-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* telex-regular - latin */
	@font-face {
		font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
		font-family: 'Telex';
		font-style: normal;
		font-weight: 400;
		src: url('../fonts/telex-v17-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}

    /* Box sizing rules */
	*,
	*::before,
	*::after {
	box-sizing: border-box;
	}

	/* Prevent font size inflation */
	html {
	-moz-text-size-adjust: none;
	-webkit-text-size-adjust: none;
	text-size-adjust: none;
	}

	/* Remove default margin in favour of better control in authored CSS */
	body, h1, h2, h3, h4, p,
	figure, blockquote, dl, dd {
	margin-block-end: 0;
	}

	/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
	ul[role='list'],
	ol[role='list'] {
	list-style: none;
	}

	/* Set core body defaults */
	body {
	min-height: 100vh;
	line-height: 1.5;
	}

	/* Set shorter line heights on headings and interactive elements */
	h1, h2, h3, h4,
	button, input, label {
	line-height: 1.1;
	}

	/* Balance text wrapping on headings */
	h1, h2,
	h3, h4 {
	text-wrap: balance;
	}

	/* A elements that don't have a class get default styles */
	a:not([class]) {
	text-decoration-skip-ink: auto;
	color: currentColor;
	}

	/* Make images easier to work with */
	img,
	picture {
	max-width: 100%;
	display: block;
	}

	/* Inherit fonts for inputs and buttons */
	input, button,
	textarea, select {
	font: inherit;
	}

	/* Make sure textareas without a rows attribute are not tiny */
	textarea:not([rows]) {
	min-height: 10em;
	}

	/* Anything that has been anchored to should have extra scroll margin */
	:target {
	scroll-margin-block: 5ex;
	}

	h1, h2 {
		font-family: 'Telex';
	}

	h3, h4, h5, h6 {
		font-family: 'Niconne';
	}

	body {
		font-family: 'Rokkitt';
	}
  }
`;

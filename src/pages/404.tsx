import { css } from "@linaria/core";
import { tokens } from "@shopify/polaris-tokens";
import { HeadFC, Link, PageProps } from "gatsby";
import * as React from "react";

const NotFoundPage: React.FC<PageProps> = () => {
	return (
		<main className={container}>
			<h1 className={title}>Page not found</h1>
			<p className={text}>
				Sorry 😔, we couldn’t find what you were looking for.
				<br />
				{process.env.NODE_ENV === "development" ? (
					<>
						<br />
						Try creating a page in <code className={code}>src/pages/</code>.
						<br />
					</>
				) : null}
				<br />
				<Link to="/">Go home</Link>.
			</p>
		</main>
	);
};

const container = css`
	padding: ${tokens.space["space-2"]};
`;
const title = css`
	margin-top: ${tokens.space["space-0"]};
    margin-bottom: ${tokens.space["space-10"]};
`;
const text = css`
	margin-bottom: ${tokens.space["space-8"]};
`;
const code = css`
	color: ${tokens.color["color-text-info"]};
	padding: ${tokens.space["space-05"]};
	background-color: ${tokens.color["color-bg-info-strong"]};
	font-size: ${tokens.font["font-size-200"]};
	border-radius: ${tokens.border["border-radius-1"]};
`;

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;

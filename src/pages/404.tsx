import "../styles/404.scss";
import { HeadFC, Link, PageProps } from "gatsby";
import * as React from "react";

const NotFoundPage: React.FC<PageProps> = () => {
	return (
		<main className="container">
			<h1 className="container__title">Page not found</h1>
			<p className="container__text">
				Sorry 😔, we couldn’t find what you were looking for.
				<br />
				{process.env.NODE_ENV === "development" ? (
					<>
						<br />
						Try creating a page in{" "}
						<code className="container__code">src/pages/</code>.
						<br />
					</>
				) : null}
				<br />
				<Link to="/">Go home</Link>.
			</p>
		</main>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;

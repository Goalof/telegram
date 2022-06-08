import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Link, Section } from "@quarkly/widgets";
const defaultProps = {
	"background": "--color-indigo",
	"padding": "80px 0 500px 0",
	"lg-padding": "80px 0 300px 0",
	"md-padding": "40px 0 160px 0"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"color": "--white",
			"font": "--headline2",
			"lg-font": "normal 300 50px/1.2 \"Lato\", sans-serif",
			"md-font": "normal 300 32px/1.2 \"Lato\", sans-serif",
			"children": <>
				Want to learn more?
				<br />
				Get in touch with us
				<br />
				<Link href="mailto:info@quarkly.io" text-decoration-line="initial" color="inherit" hover-opacity=".8">
					info@quarkly.io{"\n\n"}
				</Link>
			</>
		}
	}
};

const BlockMail = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Text {...override("text")} />
		{children}
	</Section>;
};

Object.assign(BlockMail, { ...Section,
	defaultProps,
	overrides
});
export default BlockMail;
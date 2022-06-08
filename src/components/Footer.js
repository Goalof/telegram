import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Link, Box, Section } from "@quarkly/widgets";
const defaultProps = {
	"padding": "80px 0 160px 0",
	"md-padding": "80px 0 80px 0"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"justify-content": "flex-start",
			"align-items": "flex-start",
			"flex-direction": "column"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "--lead",
			"color": "--dark",
			"max-width": "350px",
			"children": <>
				For work inquires feel free to get in touch with me info@quarkly.io{"\n\n"}
			</>
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "tel:+3867005555575",
			"color": "--dark",
			"font": "--lead",
			"text-decoration-line": "initial",
			"hover-opacity": ".8",
			"margin": "20px 0px 0px 0px",
			"children": <>
				+386 700 555-55-75{"\n\n"}
			</>
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"margin": "160px 0px 0px 0px",
			"display": "grid",
			"grid-gap": "20px",
			"grid-template-columns": "repeat(3, 1fr)",
			"md-margin": "40px 0px 0px 0px"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "tel:+3867005555575",
			"color": "--dark",
			"font": "--lead",
			"text-decoration-line": "initial",
			"hover-opacity": ".8",
			"margin": "0px 0px 0px 0px",
			"children": <>
				LinkedIn{"\n\n"}
			</>
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "tel:+3867005555575",
			"color": "--dark",
			"font": "--lead",
			"text-decoration-line": "initial",
			"hover-opacity": ".8",
			"margin": "0px 0px 0px 0px",
			"children": <>
				Behance{"\n\n"}
			</>
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"href": "tel:+3867005555575",
			"color": "--dark",
			"font": "--lead",
			"text-decoration-line": "initial",
			"hover-opacity": ".8",
			"margin": "0px 0px 0px 0px",
			"children": <>
				Dribbble{"\n\n"}
			</>
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"display": "grid",
			"justify-content": "flex-start",
			"align-items": "flex-start",
			"flex-direction": "column"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "--headline2",
			"color": "--dark",
			"width": "100%",
			"lg-font": "normal 300 50px/1.2 \"Lato\", sans-serif",
			"md-font": "normal 300 32px/1.2 \"Lato\", sans-serif",
			"children": <>
				Let’s talk{"\n\n"}
			</>
		}
	}
};

const Footer = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			max-width="1200px"
			display="grid"
			grid-gap="40px 100px"
			grid-template-columns="5fr 6fr"
			md-grid-template-columns="1fr"
		/>
		<Box {...override("box")}>
			<Text {...override("text")} />
			<Link {...override("link")} />
			<Box {...override("box1")}>
				<Link {...override("link1")} />
				<Link {...override("link2")} />
				<Link {...override("link3")} />
			</Box>
		</Box>
		<Box {...override("box2")}>
			<Text {...override("text1")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(Footer, { ...Section,
	defaultProps,
	overrides
});
export default Footer;
import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Span, Box, Link, Section } from "@quarkly/widgets";
import QuarklycommunityKitMenu from "./QuarklycommunityKitMenu";
import QuarklycommunityKitMobileSidePanel from "./QuarklycommunityKitMobileSidePanel";
const defaultProps = {
	"padding": "50px 0 50px 0",
	"position": "relative",
	"z-index": "1",
	"lg-padding": "40px 0 40px 0",
	"md-padding": "20px 0 20px 0"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "--headline1",
			"color": "--dark",
			"lg-font": "normal 300 60px/1.2 \"Lato\", sans-serif",
			"sm-font": "normal 300 40px/1.2 \"Lato\", sans-serif",
			"children": <>
				I'm a{" "}
				<Span
					color="--indigo"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					ux/ai{" "}
				</Span>
				designer
				<br />
				based in Kazakhstan{"\n\n"}
			</>
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"justify-content": "center",
			"align-items": "flex-start",
			"md-order": "-1",
			"sm-width": "100%",
			"sm-display": "flex"
		}
	},
	"quarklycommunityKitMobileSidePanel": {
		"kind": "QuarklycommunityKitMobileSidePanel",
		"props": {
			"breakpoint": "all",
			"justify-content": "center",
			"position": "static",
			"md-justify-content": "flex-end",
			"sm-width": "100%",
			"sm-max-width": "100%"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride": {
		"kind": "Override",
		"props": {
			"slot": "Content",
			"min-width": "70%",
			"z-index": "9",
			"background": "--color-light",
			"padding": "50px 50px 50px 50px"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride1": {
		"kind": "Override",
		"props": {
			"slot": "Button Text",
			"display": "none"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride2": {
		"kind": "Override",
		"props": {
			"slot": "Button",
			"height": "60px",
			"width": "60px",
			"justify-content": "center",
			"background": "--color-indigo",
			"border-radius": "50%",
			"padding": "0px 0px 0px 0px",
			"z-index": "9",
			"sm-width": "42px",
			"sm-height": "42px",
			"sm-position": "static"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride3": {
		"kind": "Override",
		"props": {
			"slot": "Button Icon :closed",
			"color": "#ffffff",
			"size": "32px"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride4": {
		"kind": "Override",
		"props": {
			"slot": "Content :open",
			"top": "0px",
			"width": "70%"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride5": {
		"kind": "Override",
		"props": {
			"slot": "Wrapper",
			"z-index": "8"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride6": {
		"kind": "Override",
		"props": {
			"slot": "Overlay",
			"z-index": "9",
			"background": "rgba(114, 64, 255, 0.75)"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride7": {
		"kind": "Override",
		"props": {
			"slot": "Button :open",
			"position": "absolute",
			"top": "50px",
			"right": "50px",
			"left": "auto",
			"bottom": "auto",
			"sm-width": "42px",
			"sm-height": "42px"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride8": {
		"kind": "Override",
		"props": {
			"slot": "Button Icon :open",
			"color": "#ffffff",
			"size": "32px"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride9": {
		"kind": "Override",
		"props": {
			"slot": "Button Icon",
			"sm-font": "24px sans-serif"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"display": "grid",
			"grid-template-columns": "repeat(2, 1fr)",
			"grid-gap": "32px",
			"sm-grid-template-columns": "1fr",
			"sm-grid-gap": "80px"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "--headline2",
			"color": "--dark",
			"md-font": "normal 300 32px/1.2 \"Lato\", sans-serif",
			"children": <>
				Let’s chat{" "}
				<br />
				<Link href="mailto:info@quarky.io" color="inherit" text-decoration-line="initial">
					info@quarky.io{"\n\n"}
				</Link>
			</>
		}
	},
	"quarklycommunityKitMenu": {
		"kind": "QuarklycommunityKitMenu",
		"props": {
			"margin": "300px 0px 0px 0px",
			"sm-margin": "0px 0px 0px 0px",
			"sm-padding": "6px 6px 6px 0px"
		}
	},
	"quarklycommunityKitMenuOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"text-decoration-line": "initial",
			"font": "--headline4",
			"color": "--darkL2"
		}
	},
	"quarklycommunityKitMenuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"color": "--indigo"
		}
	},
	"quarklycommunityKitMenuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"text-align": "right",
			"sm-text-align": "left",
			"sm-padding": "6px 12px 6px 0px"
		}
	},
	"quarklycommunityKitMenuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link-index",
			"children": "Home"
		}
	}
};

const Header = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			display="grid"
			grid-template-columns="5fr 1fr"
			grid-gap="32px"
			max-width="1200px"
			md-grid-template-columns="1fr"
			md-grid-gap="40px"
		/>
		<Box {...override("box")}>
			<Text {...override("text")} />
		</Box>
		<Box {...override("box1")}>
			<QuarklycommunityKitMobileSidePanel {...override("quarklycommunityKitMobileSidePanel")}>
				<Override {...override("quarklycommunityKitMobileSidePanelOverride")} />
				<Override {...override("quarklycommunityKitMobileSidePanelOverride1")} />
				<Override {...override("quarklycommunityKitMobileSidePanelOverride2")} />
				<Override {...override("quarklycommunityKitMobileSidePanelOverride3")} />
				<Override {...override("quarklycommunityKitMobileSidePanelOverride4")} />
				<Override {...override("quarklycommunityKitMobileSidePanelOverride5")} />
				<Override {...override("quarklycommunityKitMobileSidePanelOverride6")} />
				<Override {...override("quarklycommunityKitMobileSidePanelOverride7")} />
				<Override {...override("quarklycommunityKitMobileSidePanelOverride8")} />
				<Override {...override("quarklycommunityKitMobileSidePanelOverride9")} />
				<Box {...override("box2")}>
					<Text {...override("text1")} />
					<QuarklycommunityKitMenu {...override("quarklycommunityKitMenu")}>
						<Override {...override("quarklycommunityKitMenuOverride")} />
						<Override {...override("quarklycommunityKitMenuOverride1")} />
						<Override {...override("quarklycommunityKitMenuOverride2")} />
						<Override {...override("quarklycommunityKitMenuOverride3")} />
					</QuarklycommunityKitMenu>
				</Box>
			</QuarklycommunityKitMobileSidePanel>
		</Box>
		{children}
	</Section>;
};

Object.assign(Header, { ...Section,
	defaultProps,
	overrides
});
export default Header;
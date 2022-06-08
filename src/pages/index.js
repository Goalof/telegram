import React from "react";
import theme from "theme";
import { Theme, Box, Link, Text, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Michael Vovuchic product designer
			</title>
			<meta name={"description"} content={"I'm a product designer who creates mobile and web experiences people find inspiring."} />
			<meta property={"og:title"} content={"Michael Vovuchic product designer"} />
			<meta property={"og:description"} content={"I'm a product designer who creates mobile and web experiences people find inspiring."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/OG-image.png?v=2022-01-12T13:10:17.592Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/favicon32.png?v=2022-01-12T13:10:32.960Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/favicon152.png?v=2022-01-12T13:10:32.953Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/favicon152.png?v=2022-01-12T13:10:32.953Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/favicon152.png?v=2022-01-12T13:10:32.953Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/favicon152.png?v=2022-01-12T13:10:32.953Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/favicon270.png?v=2022-01-12T13:10:32.959Z"} />
			<meta name={"msapplication-TileColor"} content={"#7240FF"} />
		</Helmet>
		<Components.EmbedHTML />
		<Section
			padding="50px 0 50px 0"
			position="relative"
			z-index="1"
			lg-padding="40px 0 40px 0"
			md-padding="20px 0 20px 0"
		>
			<Override
				slot="SectionContent"
				display="grid"
				grid-template-columns="5fr 1fr"
				grid-gap="32px"
				max-width="1200px"
				md-grid-template-columns="1fr"
				md-grid-gap="40px"
			/>
			<Box />
			<Box
				display="flex"
				justify-content="center"
				align-items="flex-start"
				md-order="-1"
				sm-width="100%"
				sm-display="flex"
			>
				<Components.QuarklycommunityKitMobileSidePanel
					breakpoint="all"
					justify-content="center"
					position="static"
					md-justify-content="flex-end"
					sm-width="100%"
					sm-max-width="100%"
				>
					<Override
						slot="Content"
						min-width="70%"
						z-index="9"
						background="--color-light"
						padding="50px 50px 50px 50px"
					/>
					<Override slot="Button Text" display="none" />
					<Override
						slot="Button"
						height="60px"
						width="60px"
						justify-content="center"
						background="--color-indigo"
						border-radius="50%"
						padding="0px 0px 0px 0px"
						z-index="9"
						sm-width="42px"
						sm-height="42px"
						sm-position="static"
					/>
					<Override slot="Button Icon :closed" color="#ffffff" size="32px" />
					<Override slot="Content :open" top="0px" width="70%" />
					<Override slot="Wrapper" z-index="8" />
					<Override slot="Overlay" z-index="9" background="rgba(114, 64, 255, 0.75)" />
					<Override
						slot="Button :open"
						position="absolute"
						top="50px"
						right="50px"
						left="auto"
						bottom="auto"
						sm-width="42px"
						sm-height="42px"
					/>
					<Override slot="Button Icon :open" color="#ffffff" size="32px" />
					<Override slot="Button Icon" sm-font="24px sans-serif" />
					<Box
						min-width="100px"
						min-height="100px"
						display="grid"
						grid-template-columns="repeat(2, 1fr)"
						grid-gap="32px"
						sm-grid-template-columns="1fr"
						sm-grid-gap="80px"
					>
						<Text margin="0px 0px 0px 0px" font="--headline2" color="--dark" md-font="normal 300 32px/1.2 &quot;Lato&quot;, sans-serif">
							Let’s chat{" "}
							<br />
							<Link href="mailto:info@quarky.io" color="inherit" text-decoration-line="initial">
								info@quarky.io{"\n\n"}
							</Link>
						</Text>
						<Components.QuarklycommunityKitMenu margin="300px 0px 0px 0px" sm-margin="0px 0px 0px 0px" sm-padding="6px 6px 6px 0px">
							<Override slot="link" text-decoration-line="initial" font="--headline4" color="--darkL2" />
							<Override slot="link-active" color="--indigo" />
							<Override slot="item" text-align="right" sm-text-align="left" sm-padding="6px 12px 6px 0px" />
							<Override slot="link-index">
								Home
							</Override>
						</Components.QuarklycommunityKitMenu>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
			<Box min-width="100px" min-height="100px">
				<Components.QuarklycommunityKitLoopText
					font="--headline1"
					color="--dark"
					padding="0px 0px 0px 0px"
					slides="graphic,web,product,ux/ui"
					intervalProp="2000"
					adjustingSpeedProp="1000"
					fade
					noWrap
				>
					<Override slot="Before Text" margin="0px 0px 0px 0px">
						I'm a
					</Override>
					<Override slot="After Text" margin="0px 0px 0px 0px">
						designer 
based in Kazakhstan{"\n\n\n\n"}
					</Override>
					<Override slot="Looped Text" color="--indigo" margin="0px 0px 0px 0px" />
				</Components.QuarklycommunityKitLoopText>
			</Box>
		</Section>
		<Section padding="30px 0 30px 0" md-padding="20px 0 20px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Components.QuarklycommunityKitVimeo
				video="https://vimeo.com/658597072"
				showTitle={false}
				showPortrait={false}
				showByline={false}
				controls={false}
				responsive
			/>
		</Section>
		<Section padding="50px 0 50px 0" lg-padding="40px 0 40px 0" md-padding="20px 0 20px 0">
			<Override
				slot="SectionContent"
				display="grid"
				grid-template-columns="repeat(2, 1fr)"
				max-width="1200px"
				lg-grid-template-columns="1fr"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				grid-column="2 / 2"
				padding="0px 118px 0px 0px"
				lg-grid-column="auto / auto"
				md-padding="0px 0px 0px 0px"
			>
				<Text margin="0px 0px 20px 0px" font="--headline4" md-font="normal 400 26px/120% &quot;Lato&quot;, sans-serif">
					12 years of experience{"\n\n"}
				</Text>
				<Text margin="0px 0px 0px 0px" font="--base" md-font="normal 400 16px/1.5 &quot;Lato&quot;, sans-serif">
					I'm constantly searching for innovative ideas in order to deliver what is the best in terms of interaction and user experience. Also I relish the opportunity to be involved in projects at the concept stage where I can introduce my ideas and help to shape the course of projects from start to end.{"\n\n"}
				</Text>
			</Box>
		</Section>
		<Section padding="110px 0 80px 0" lg-padding="60px 0 60px 0" md-padding="60px 0 40px 0">
			<Override
				slot="SectionContent"
				max-width="1200px"
				display="grid"
				grid-gap="80px 100px"
				grid-template-columns="5fr 6fr"
				md-grid-gap="40px"
				md-grid-template-columns="1fr"
			/>
			<Box
				display="flex"
				justify-content="flex-start"
				align-items="flex-start"
				flex-direction="column"
				grid-column="1 / span 2"
				md-grid-column="auto / auto"
			>
				<Text
					margin="0px 0px 0px 0px"
					padding="10px 42px 10px 42px"
					border-width="1px"
					border-style="solid"
					border-color="--color-orange"
					border-radius="90px"
					color="--orange"
					font="--lead"
					md-font="normal 400 14px/1.3 &quot;Lato&quot;, sans-serif"
					md-padding="8px 32px 8px 32px"
				>
					web
				</Text>
				<Text
					margin="40px 0px 0px 0px"
					font="--headline3"
					color="--dark"
					md-font="normal 500 32px/120% &quot;Lato&quot;, sans-serif"
					md-margin="20px 0px 0px 0px"
				>
					Latest projects{"\n\n"}
				</Text>
			</Box>
			<Box display="flex" justify-content="flex-start" align-items="flex-start" flex-direction="column">
				<Box min-width="100px" min-height="100px" md-width="100%">
					<Image src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/image1.png?v=2022-02-01T10:34:21.272Z" display="block" width="100%" />
					<Box display="grid" grid-template-columns="2fr 1fr" margin="20px 0px 0px 0px" lg-grid-template-columns="2fr 1fr">
						<Box display="flex" align-items="center" justify-content="flex-start">
							<Text
								margin="0px 0px 0px 0px"
								font="--headline4"
								color="--dark"
								lg-font="normal 400 24px/120% &quot;Lato&quot;, sans-serif"
								md-font="normal 400 26px/120% &quot;Lato&quot;, sans-serif"
							>
								CVC Tour operator{"\n\n"}
							</Text>
						</Box>
						<Box display="flex" align-items="center" justify-content="flex-end">
							<Text
								margin="0px 0px 0px 0px"
								padding="12px 20px 12px 20px"
								border-width="1px"
								border-style="solid"
								border-color="--color-orange"
								border-radius="90px"
								color="--orange"
								font="normal 400 14px/16px --fontFamily-googleLato"
								lg-padding="10px 16px 10px 16px"
							>
								website{"\n\n"}
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box display="flex" justify-content="flex-start" align-items="flex-start" flex-direction="column">
				<Box min-width="100px" min-height="100px" margin="135px 0px 0px 0px" md-margin="0px 0px 0px 0px">
					<Image src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/image2.png?v=2022-02-01T10:34:21.272Z" display="block" width="100%" />
					<Box display="grid" grid-template-columns="2fr 1fr" margin="20px 0px 0px 0px">
						<Box display="flex" align-items="center" justify-content="flex-start">
							<Text
								margin="0px 0px 0px 0px"
								font="--headline4"
								color="--dark"
								lg-font="normal 400 24px/120% &quot;Lato&quot;, sans-serif"
								md-font="normal 400 26px/120% &quot;Lato&quot;, sans-serif"
							>
								Avianca global system{"\n\n"}
							</Text>
						</Box>
						<Box display="flex" align-items="center" justify-content="flex-end">
							<Text
								margin="0px 0px 0px 0px"
								padding="12px 20px 12px 20px"
								border-width="1px"
								border-style="solid"
								border-color="--color-orange"
								border-radius="90px"
								color="--orange"
								font="normal 400 14px/16px --fontFamily-googleLato"
								lg-padding="10px 16px 10px 16px"
							>
								case study{"\n\n"}
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" lg-padding="60px 0 60px 0" md-padding="40px 0 40px 0">
			<Override
				slot="SectionContent"
				max-width="1200px"
				display="grid"
				grid-gap="40px 100px"
				grid-template-columns="5fr 6fr"
				lg-grid-template-columns="1fr"
			/>
			<Box
				display="flex"
				justify-content="flex-start"
				align-items="flex-start"
				flex-direction="column"
				grid-column="1 / span 2"
			>
				<Text
					margin="0px 0px 0px 0px"
					padding="10px 35px 10px 35px"
					border-width="1px"
					border-style="solid"
					border-color="--color-orange"
					border-radius="90px"
					color="--orange"
					font="--lead"
					md-font="normal 400 14px/1.3 &quot;Lato&quot;, sans-serif"
					md-padding="8px 24px 8px 24px"
				>
					in our competence{"\n\n"}
				</Text>
			</Box>
			<Box
				display="grid"
				justify-content="flex-start"
				align-items="flex-start"
				flex-direction="column"
				grid-gap="20px"
			>
				<Text margin="0px 0px 0px 0px" font="--headline2" color="--dark" md-font="normal 300 32px/1.2 &quot;Lato&quot;, sans-serif">
					User experience{"\n\n"}
				</Text>
				<Text margin="0px 0px 0px 0px" font="--headline2" color="--dark" md-font="normal 300 32px/1.2 &quot;Lato&quot;, sans-serif">
					Strategy{"\n\n"}
				</Text>
				<Text margin="0px 0px 0px 0px" font="--headline2" color="--dark" md-font="normal 300 32px/1.2 &quot;Lato&quot;, sans-serif">
					User interface{"\n\n"}
				</Text>
				<Text font="--headline2" color="--dark" margin="0px 0px 0px 0px" md-font="normal 300 32px/1.2 &quot;Lato&quot;, sans-serif">
					Leadership{"\n\n"}
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" md-padding="40px 0 20px 0">
			<Override
				slot="SectionContent"
				max-width="1200px"
				display="grid"
				grid-gap="40px 100px"
				grid-template-columns="5fr 6fr"
				md-grid-template-columns="1fr"
			/>
			<Box display="flex" justify-content="flex-start" align-items="flex-start" flex-direction="column">
				<Text margin="0px 0px 0px 0px" font="--headline3" color="--dark" md-font="normal 500 32px/120% &quot;Lato&quot;, sans-serif">
					All design is a redesign{"\n\n"}
				</Text>
			</Box>
			<Box
				display="grid"
				justify-content="flex-start"
				align-items="flex-start"
				flex-direction="column"
				grid-gap="80px 60px"
				grid-template-columns="1fr 1fr"
				lg-grid-template-columns="1fr"
				lg-grid-gap="40px"
			>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 0px 0px" font="--headline4" color="--dark" md-font="normal 400 26px/120% &quot;Lato&quot;, sans-serif">
						Human-centric{"\n\n"}
					</Text>
					<Text margin="20px 0px 0px 0px" font="--base" color="--dark" md-font="normal 400 16px/1.5 &quot;Lato&quot;, sans-serif">
						No matter what the context, all design activity is social in nature, and any social innovation will bring us back to the human-centric point of view{"\n\n"}
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 0px 0px" font="--headline4" color="--dark" md-font="normal 400 26px/120% &quot;Lato&quot;, sans-serif">
						The tangibility rule{"\n\n"}
					</Text>
					<Text margin="20px 0px 0px 0px" font="--base" color="--dark" md-font="normal 400 16px/1.5 &quot;Lato&quot;, sans-serif">
						Making ideas tangible in the form of prototypes enables people to communicate more effectively throughout the design process{"\n\n"}
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 0px 0px" font="--headline4" color="--dark" md-font="normal 400 26px/120% &quot;Lato&quot;, sans-serif">
						Business driven{"\n\n"}
					</Text>
					<Text margin="20px 0px 0px 0px" font="--base" color="--dark" md-font="normal 400 16px/1.5 &quot;Lato&quot;, sans-serif">
						Measure business success and transform customer experience in fact is a matter to be able to connect and communicate with stakeholders in order to understand the most important business needs{"\n\n"}
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 169px 0" lg-padding="40px 0 129px 0" sm-padding="40px 0 98px 0">
			<Override
				slot="SectionContent"
				max-width="1200px"
				flex-direction="row"
				justify-content="center"
				align-items="flex-end"
			/>
			<Image
				src="https://images.unsplash.com/photo-1613980790147-f4f449df0dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
				display="block"
				max-width="390px"
				position="relative"
				left="89px"
				lg-max-width="300px"
				md-max-width="180px"
				sm-max-width="150px"
				sm-left="40px"
				md-left="60px"
			/>
			<Image
				src=" https://images.unsplash.com/photo-1612556810513-617a5a892418?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
				display="block"
				max-width="580px"
				position="relative"
				bottom="-89px"
				lg-max-width="390px"
				md-max-width="270px"
				sm-max-width="200px"
				sm-bottom="-18px"
			/>
		</Section>
		<Components.BlockMail />
		<Components.Footer />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"61ded21593089d001f40f0a3"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});
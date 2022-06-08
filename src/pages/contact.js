import React from "react";
import theme from "theme";
import { Theme, Span, Link, Text, Box, Section, Button, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"contact"} />
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
				md-grid-gap="30px"
			/>
			<Box display="flex" flex-direction="column" align-items="flex-start" md-justify-content="flex-start">
				<Text
					margin="0px 0px 0px 0px"
					font="--headline2"
					color="--dark"
					lg-font="normal 300 60px/1.2 &quot;Lato&quot;, sans-serif"
					sm-font="normal 300 40px/1.2 &quot;Lato&quot;, sans-serif"
					md-font="normal 300 24px/1.2 &quot;Lato&quot;, sans-serif"
				>
					<Link
						href="tel:+3867005555575"
						color="--dark"
						text-decoration-line="initial"
						hover-opacity="0.8"
						md-font="300 24px/72px Lato, sans-serif"
						lg-font="300 46px/72px Lato, sans-serif"
					>
						<Span
							color="--indigo"
							border-width="3px"
							border-style="solid"
							border-color="--color-indigo"
							border-radius="90px"
							padding="16px 48px 16px 48px"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							+386
						</Span>
						{" \n\t\t\t\t"}700 555-55-75
					</Link>
				</Text>
				<Link
					href="mailto:info@quarkly.io"
					color="--dark"
					font="--headline2"
					margin="40px 0px 0px 0px"
					text-decoration-line="initial"
					border-style="solid"
					border-width="0 0 1px 0"
					border-color="--color-dark"
					hover-opacity=".8"
					md-font="normal 300 24px/1.2 &quot;Lato&quot;, sans-serif"
					md-margin="20px 0px 0px 0px"
				>
					info@quarkly.io
				</Link>
			</Box>
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
								info@quarky.io
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
		</Section>
		<Section padding="160px 0 160px 0" lg-padding="80px 0 80px 0" md-padding="40px 0 40px 0">
			<Override
				slot="SectionContent"
				max-width="1200px"
				display="flex"
				grid-gap="160px 0px"
				grid-template-columns="2fr 1fr"
				lg-display="flex"
				lg-grid-gap="80px"
			/>
			<Box grid-column="2 / span 2" width="50%" align-self="flex-end" lg-width="100%">
				<Text margin="0px 0px 0px 0px" font="--headline4" color="--dark">
					Interested in hiring me?
					<br />
					Have a chat? Get in touch
				</Text>
				<Button
					margin="40px 0px 0px 0px"
					padding="24px 42px 24px 42px"
					background="--color-indigo"
					font="--base"
					color="--white"
					border-radius="90px"
				>
					Write me
				</Button>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				md-width="100%"
				grid-column="1 / span 1"
				width="50%"
				lg-width="100%"
			>
				<Image
					src="https://images.unsplash.com/photo-1558274862-fb21bb917cd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
					display="block"
					width="100%"
					max-width="600px"
					height="600px"
					object-fit="cover"
					border-radius="30px 0px 0px 0px"
					lg-max-width="none"
				/>
				<Box display="grid" grid-template-columns="2fr 1fr" margin="40px 0px 0px 0px" lg-grid-template-columns="2fr 1fr">
					<Box display="flex" align-items="center" justify-content="flex-start">
						<Text
							margin="0px 0px 0px 0px"
							font="--headline4"
							color="--dark"
							lg-font="normal 400 24px/120% &quot;Lato&quot;, sans-serif"
							md-font="normal 400 26px/120% &quot;Lato&quot;, sans-serif"
						>
							Almaty, Biyahny str, 252{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" align-items="center" justify-content="flex-end">
						<Text
							margin="0px 0px 0px 0px"
							padding="12px 24px 12px 24px"
							border-width="1px"
							border-style="solid"
							border-color="--color-orange"
							border-radius="90px"
							color="--orange"
							font="normal 400 14px/16px --fontFamily-googleLato"
							lg-padding="10px 16px 10px 16px"
						>
							current location{"\n\n"}
						</Text>
					</Box>
				</Box>
			</Box>
			<Box
				display="flex"
				grid-gap="20px"
				width="50%"
				align-self="flex-end"
				lg-width="100%"
				lg-align-items="flex-end"
			>
				<Text margin="0px 0px 0px 0px" font="--headline2" color="--dark" sm-font="normal 300 40px/1.2 &quot;Lato&quot;, sans-serif">
					Follow me
					<br />
					on Dribbble{"\n\n"}
				</Text>
				<Image src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/VectorDirible.svg?v=2022-02-03T09:39:22.923Z" display="block" lg-margin="0px 0px 7px 0px" />
			</Box>
		</Section>
		<Components.BlockMail />
		<Components.Footer />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"61ded21593089d001f40f0a3"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
			<script place={"endOfBody"} rawKey={"62a098b0c2b1264f52078081"}>
				{"      function soundClick() {\n  \tvar audio = document.getElementById('audio');\n        audio.play();\n    }\n"}
			</script>
		</RawHtml>
	</Theme>;
});
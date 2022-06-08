import React from "react";
import theme from "theme";
import { Theme, Image, Section, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"projects"} />
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
		<Components.Header>
			<Override slot="text">
				I'm Michail Vovuchic
				<br />
				a product designer currently working
				<br />
				at Quarkly company
			</Override>
		</Components.Header>
		<Section padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Image
				src="https://images.unsplash.com/photo-1532660621034-fb55e2e59762?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
				display="block"
				max-height="800px"
				object-fit="cover"
				object-position="0% 10%"
				md-max-height="350px"
				sm-max-height="250px"
			/>
		</Section>
		<Section padding="50px 0 120px 0" md-padding="40px 0 20px 0">
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
					All design is a redesign
				</Text>
			</Box>
			<Box
				display="grid"
				justify-content="flex-start"
				align-items="flex-start"
				flex-direction="column"
				grid-gap="40px"
				grid-template-columns="1fr"
				lg-grid-template-columns="1fr"
				lg-grid-gap="40px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					border-style="solid"
					border-width="0px 0px 1px 0px"
					border-color="#EEEEEE"
				>
					<Text margin="0px 0px 0px 0px" font="--headline4" color="--dark" md-font="normal 400 26px/120% &quot;Lato&quot;, sans-serif">
						Fjord{"\n\n"}
					</Text>
					<Text margin="20px 0px 40px 0px" font="--base" color="--dark" md-font="normal 400 16px/1.5 &quot;Lato&quot;, sans-serif">
						Leading teams in the Digital Age 2021{"\n\n"}
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					border-style="solid"
					border-width="0px 0px 1px 0px"
					border-color="#EEEEEE"
				>
					<Text margin="0px 0px 0px 0px" font="--headline4" color="--dark" md-font="normal 400 26px/120% &quot;Lato&quot;, sans-serif">
						Huge{"\n\n"}
					</Text>
					<Text margin="20px 0px 40px 0px" font="--base" color="--dark" md-font="normal 400 16px/1.5 &quot;Lato&quot;, sans-serif">
						Master design thinking 2020{"\n\n"}
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					border-style="solid"
					border-width="0px 0px 1px 0px"
					border-color="#EEEEEE"
				>
					<Text margin="0px 0px 0px 0px" font="--headline4" color="--dark" md-font="normal 400 26px/120% &quot;Lato&quot;, sans-serif">
						Xp Inc{"\n\n"}
					</Text>
					<Text margin="20px 0px 40px 0px" font="--base" color="--dark" md-font="normal 400 16px/1.5 &quot;Lato&quot;, sans-serif">
						Business english 2016 – 2019{"\n\n"}
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 0px 0px" font="--headline4" color="--dark" md-font="normal 400 26px/120% &quot;Lato&quot;, sans-serif">
						Creditas{"\n\n"}
					</Text>
					<Text margin="20px 0px 40px 0px" font="--base" color="--dark" md-font="normal 400 16px/1.5 &quot;Lato&quot;, sans-serif">
						Industrial design 2012 – 2015{"\n\n"}
					</Text>
				</Box>
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
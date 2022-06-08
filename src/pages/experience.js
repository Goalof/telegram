import React from "react";
import theme from "theme";
import { Theme, Image, Section, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"experience"} />
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
				CVC
				<br />
				Tour operator{"\n\n"}
			</Override>
		</Components.Header>
		<Section padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Image
				src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/658597072.png?v=2022-02-04T08:28:48.914Z"
				display="block"
				max-height="800px"
				md-max-height="350px"
				sm-max-height="250px"
			/>
		</Section>
		<Section padding="50px 0 40px 0" md-padding="40px 0 0px 0">
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
					Search engine to find avia tickets{"\n\n\n\n"}
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
						Role{"\n\n"}
					</Text>
					<Text margin="20px 0px 40px 0px" font="--base" color="--dark" md-font="normal 400 16px/1.5 &quot;Lato&quot;, sans-serif">
						Product & Interaction design, Prototyping, Design system{"\n\n"}
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
						Team{"\n\n"}
					</Text>
					<Text margin="20px 0px 40px 0px" font="--base" color="--dark" md-font="normal 400 16px/1.5 &quot;Lato&quot;, sans-serif">
						Design director, interaction designers, product designers{"\n\n"}
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 0px 0px" font="--headline4" color="--dark" md-font="normal 400 26px/120% &quot;Lato&quot;, sans-serif">
						About{"\n\n"}
					</Text>
					<Text margin="20px 0px 40px 0px" font="--base" color="--dark" md-font="normal 400 16px/1.5 &quot;Lato&quot;, sans-serif">
						CVC does everything for a good trip. That is why it works to make this experience the best achievement of its life, through new trends and a wide network of tourism products and services.{"\n\n"}
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" md-padding="40px 0 40px 0">
			<Override
				slot="SectionContent"
				max-width="1200px"
				display="grid"
				grid-gap="45px"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-gap="12px"
			/>
			<Image src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/image%2054.png?v=2022-02-04T09:38:01.717Z" display="block" max-height="250px" width="100%" />
			<Image src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/image%2055.png?v=2022-02-04T09:38:13.083Z" display="block" width="100%" min-height="250px" />
			<Image src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/image%2056.png?v=2022-02-04T09:38:38.915Z" display="block" max-height="250px" width="100%" />
			<Image src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/image%2061.png?v=2022-02-04T09:39:54.043Z" display="block" max-height="250px" width="100%" />
			<Image src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/image%2057.png?v=2022-02-04T09:39:08.609Z" display="block" max-height="250px" width="100%" />
			<Image src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/image%2058.png?v=2022-02-04T09:39:20.415Z" display="block" max-height="250px" width="100%" />
			<Image src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/image%2059.png?v=2022-02-04T09:39:26.979Z" display="block" max-height="250px" width="100%" />
			<Image src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/image%2060.png?v=2022-02-04T09:39:33.644Z" display="block" max-height="250px" width="100%" />
			<Image src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/image%2062.png?v=2022-02-04T09:39:43.322Z" display="block" max-height="250px" width="100%" />
		</Section>
		<Section padding="80px 0 160px 0" md-padding="40px 0 80px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Box max-width="305px" margin="0px 0px 80px 0px" md-max-width="none" md-margin="0px 0px 40px 0px">
				<Text margin="0px 0px 20px 0px" font="--headline4" color="--dark">
					Exploring all offerings{"\n\n"}
				</Text>
				<Text font="--base" color="--dark">
					Have been done with a simple and intuitive navigation leading users through a visual experience{"\n\n"}
				</Text>
			</Box>
			<Image src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/502024675.png?v=2022-02-04T09:40:35.660Z" display="block" max-height="800px" object-fit="cover" />
			<Image src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/cover%201.png?v=2022-02-04T09:40:45.866Z" display="block" max-height="600px" object-fit="cover" />
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
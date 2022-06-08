import React from "react";
import theme from "theme";
import { Theme, Image, Section, Text, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"avianca"} />
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
				Avianca
				<br />
				Global system
			</Override>
		</Components.Header>
		<Section padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Image
				src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/658597072.png?v=2022-02-04T09:43:22.509Z"
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
					Design system
					<br />
					for Avianca Airlines
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
						Role
					</Text>
					<Text margin="20px 0px 40px 0px" font="--base" color="--dark" md-font="normal 400 16px/1.5 &quot;Lato&quot;, sans-serif">
						Product & Interaction design, Prototyping, Design system
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
						Team
					</Text>
					<Text margin="20px 0px 40px 0px" font="--base" color="--dark" md-font="normal 400 16px/1.5 &quot;Lato&quot;, sans-serif">
						Design director, interaction designers, product designers
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 0px 0px" font="--headline4" color="--dark" md-font="normal 400 26px/120% &quot;Lato&quot;, sans-serif">
						About
					</Text>
					<Text margin="20px 0px 40px 0px" font="--base" color="--dark" md-font="normal 400 16px/1.5 &quot;Lato&quot;, sans-serif">
						CVC does everything for a good trip. That is why it works to make this experience the best achievement of its life, through new trends and a wide network of tourism products and services.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" md-padding="40px 0 20px 0">
			<Override
				slot="SectionContent"
				max-width="1200px"
				display="grid"
				grid-gap="80px 100px"
				grid-template-columns="5fr 6fr"
				md-grid-template-columns="1fr"
				md-grid-gap="40px"
			/>
			<Box display="flex" justify-content="flex-start" align-items="flex-start" flex-direction="column">
				<Image
					src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/Rectangle%2058.png?v=2022-02-04T09:43:22.501Z"
					display="block"
					border-radius="30px 0px 0px 0px"
					max-height="450px"
					width="100%"
				/>
			</Box>
			<Box
				display="flex"
				justify-content="flex-start"
				align-items="flex-start"
				flex-direction="column"
				grid-gap="80px 60px"
				grid-template-columns="1fr 1fr"
				lg-grid-template-columns="1fr"
				lg-grid-gap="40px"
			>
				<Image
					src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/Rectangle%2059.png?v=2022-02-04T09:43:22.502Z"
					display="block"
					border-radius="30px 0px 0px 0px"
					max-height="450px"
					margin="225px 0px 0px 0px"
					width="100%"
					md-margin="0px 0px 0px 0px"
				/>
			</Box>
			<Box
				display="flex"
				justify-content="flex-start"
				align-items="flex-start"
				flex-direction="column"
				grid-gap="80px 60px"
				grid-template-columns="1fr 1fr"
				lg-grid-template-columns="1fr"
				lg-grid-gap="40px"
			>
				<Image
					src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/Rectangle%2060.png?v=2022-02-04T09:43:22.505Z"
					display="block"
					border-radius="30px 0px 0px 0px"
					max-height="450px"
					margin="0px 0px 0px 0px"
					width="100%"
				/>
			</Box>
			<Box
				display="flex"
				justify-content="flex-start"
				align-items="flex-start"
				flex-direction="column"
				grid-gap="80px 60px"
				grid-template-columns="1fr 1fr"
				lg-grid-template-columns="1fr"
				lg-grid-gap="40px"
			>
				<Image
					src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/Rectangle%2061.png?v=2022-02-04T09:43:22.508Z"
					display="block"
					border-radius="30px 0px 0px 0px"
					max-height="450px"
					margin="225px 0px 0px 0px"
					width="100%"
					md-margin="0px 0px 0px 0px"
				/>
			</Box>
		</Section>
		<Section padding="80px 0 40px 0" md-padding="40px 0 20px 0">
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
					Coherent experiences follow principles & guidelines
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
						Emotive
					</Text>
					<Text margin="20px 0px 0px 0px" font="--base" color="--dark" md-font="normal 400 16px/1.5 &quot;Lato&quot;, sans-serif">
						Evokes real delight and sensorial pleasure. Gives customers a sense of ease and control. Speaks to emotional.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 0px 0px" font="--headline4" color="--dark" md-font="normal 400 26px/120% &quot;Lato&quot;, sans-serif">
						Informative
					</Text>
					<Text margin="20px 0px 0px 0px" font="--base" color="--dark" md-font="normal 400 16px/1.5 &quot;Lato&quot;, sans-serif">
						Give you facts, figures and clear explanations. Useful suggestions and affordance for acting on information.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 0px 0px" font="--headline4" color="--dark" md-font="normal 400 26px/120% &quot;Lato&quot;, sans-serif">
						Flexible
					</Text>
					<Text margin="20px 0px 0px 0px" font="--base" color="--dark" md-font="normal 400 16px/1.5 &quot;Lato&quot;, sans-serif">
						Able to evolve. Responsive to user feedback. Self-learning. Modular. Extensible. Scalable.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 0px 0px" font="--headline4" color="--dark" md-font="normal 400 26px/120% &quot;Lato&quot;, sans-serif">
						Pro-active
					</Text>
					<Text margin="20px 0px 0px 0px" font="--base" color="--dark" md-font="normal 400 16px/1.5 &quot;Lato&quot;, sans-serif">
						Evokes real delight and sensorial pleasure. Gives customers a sense of ease and control.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="40px 0 80px 0" md-padding="40px 0 40px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Image src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/cover%202.png?v=2022-02-04T09:43:22.507Z" display="block" max-height="800px" object-fit="cover" />
		</Section>
		<Section padding="80px 0 120px 0" lg-padding="80px 0 80px 0" md-padding="40px 0 40px 0">
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
				<Text margin="0px 0px 0px 0px" font="--headline4" color="--dark" max-width="400px">
					What would happen if users could know when their IFE would stop working?{"\n\n"}
				</Text>
				<Button
					margin="40px 0px 0px 0px"
					padding="24px 42px 24px 42px"
					background="--color-indigo"
					font="--base"
					color="--white"
					border-radius="90px"
				>
					Nothing good{"\n\n"}
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
					src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/unsplash_m3kOyzCIQvE%20%281%29.png?v=2022-02-04T09:43:22.517Z"
					display="block"
					width="100%"
					max-width="600px"
					height="600px"
					object-fit="cover"
					border-radius="30px 0px 0px 0px"
					lg-max-width="none"
				/>
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
					Avianca takes care of the small things{"\n\n"}
				</Text>
			</Box>
		</Section>
		<Section padding="40px 0 160px 0" md-padding="40px 0 80px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Image src="https://uploads.quarkly.io/61ded21593089d001f40f0a5/images/cover%202.png?v=2022-02-04T09:43:22.507Z" display="block" max-height="800px" object-fit="cover" />
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
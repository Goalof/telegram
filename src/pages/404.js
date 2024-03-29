import React from "react";
import theme from "theme";
import { Theme } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
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
		<RawHtml>
			<style place={"endOfHead"} rawKey={"61ded21593089d001f40f0a3"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}\n\ndiv[class*=\"bgmusic\"] { \n    cursor: pointer;\n    z-index:99 !important;\n}"}
			</style>
			<script place={"endOfBody"} rawKey={"62a098b0c2b1264f52078081"}>
				{"$(document).ready(function(){\nmyAudio=document.getElementById(\"bg-sound\");\nlet fadeTime = 300;//Врямя смены иконок\nmyAudio.volume=0.4;//Задаём громкость\n$(\".stopbgmusic\").hide();\n$(\".playbgmusic\").click(function(e) {\n    myAudio.play(); $(this).fadeOut(fadeTime);\n    $(\".stopbgmusic\").fadeIn(fadeTime);\n})\n$(\".stopbgmusic\").click(function(e) {e.preventDefault();\n    myAudio.pause();  $(this).fadeOut(fadeTime);\n    $(\".playbgmusic\").fadeIn(fadeTime);\n});\n$(\"#bg-sound\").on(\"ended\", function() {\n    $(\".stopbgmusic\").fadeOut(fadeTime);\n    $(\".playbgmusic\").fadeIn(fadeTime);\n});\n});"}
			</script>
		</RawHtml>
	</Theme>;
});
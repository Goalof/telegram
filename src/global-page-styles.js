import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "background": "--color-light"
    },
    "index": {
        "background": "--color-light"
    },
    "projects": {
        "background": "--color-light"
    },
    "experience": {
        "background": "--color-light"
    },
    "avianca": {
        "background": "--color-light"
    },
    "contact": {
        "background": "--color-light"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />

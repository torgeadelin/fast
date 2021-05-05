import { css } from "@microsoft/fast-element";
import { SystemColors } from "@microsoft/fast-web-utilities";
import { focusVisible, forcedColorsStylesheetBehavior } from "@microsoft/fast-foundation";
import {
    neutralFocusBehavior,
    neutralForegroundActiveBehavior,
    neutralForegroundRestBehavior,
} from "../styles/recipes";
import {
    bodyFont,
    cornerRadius,
    designUnit,
    outlineWidth,
    typeRampBaseFontSize,
    typeRampBaseLineHeight,
} from "../design-tokens";

export const DataGridCellStyles = css`
    :host {
        padding: calc(${designUnit} * 1px) calc(${designUnit} * 3px);
        color: ${neutralForegroundRestBehavior.var};
        box-sizing: border-box;
        font-family: ${bodyFont};
        font-size: ${typeRampBaseFontSize};
        line-height: ${typeRampBaseLineHeight};
        font-weight: 400;
        border: transparent calc(${outlineWidth} * 1px) solid;
        overflow: hidden;
        white-space: nowrap;
        border-radius: calc(${cornerRadius} * 1px);
    }

    :host(.column-header) {
        font-weight: 600;
    }

    :host(:${focusVisible}) {
        border: ${neutralFocusBehavior.var} calc(${outlineWidth} * 1px) solid;
        color: ${neutralForegroundActiveBehavior.var};
    }

`.withBehaviors(
    neutralFocusBehavior,
    neutralForegroundActiveBehavior,
    neutralForegroundRestBehavior,
    forcedColorsStylesheetBehavior(
        css`
        :host {
            forced-color-adjust: none;
            border-color: transparent;
            background: ${SystemColors.Field};
            color: ${SystemColors.FieldText};
        }

        :host(:${focusVisible}) {
            border-color: ${SystemColors.FieldText};
            box-shadow: 0 0 0 2px inset ${SystemColors.Field};
            color: ${SystemColors.FieldText};
        }
        `
    )
);

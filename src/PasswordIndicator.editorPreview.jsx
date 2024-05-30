import { createElement } from "react";

export function preview({
    containDigit,
    containLowercase,
    containUppercase,
    containMinimalChars,
    containSpecialChars
}) {
    return (
        <div className="password-indicator">
            {containDigit === true && <div className="password-indicator__level"></div>}
            {containLowercase === true && <div className="password-indicator__level"></div>}
            {containUppercase === true && <div className="password-indicator__level"></div>}
            {containMinimalChars === true && <div className="password-indicator__level"></div>}
            {containSpecialChars === true && <div className="password-indicator__level"></div>}
            <span className="mx-text password-indicator__text"></span>
        </div>
    );
}

export function getPreviewCss() {
    return require("./ui/PasswordIndicator.css");
}

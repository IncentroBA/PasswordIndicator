/* eslint-disable no-unused-expressions */
import "./ui/PasswordIndicator.css";
import { createElement } from "react";
import { waitFor } from "./helpers/waitFor";

export default function PasswordIndicator({
    className,
    containDigit,
    containLowercase,
    containUppercase,
    containMinimalChars,
    containSpecialChars,
    lvl1Txt,
    lvl2Txt,
    lvl3Txt,
    lvl4Txt,
    lvl5Txt
}) {
    let maxLevels = 0;

    if (containDigit === true) {
        maxLevels += 1;
    }
    if (containLowercase === true) {
        maxLevels += 1;
    }
    if (containUppercase === true) {
        maxLevels += 1;
    }
    if (containMinimalChars === true) {
        maxLevels += 1;
    }
    if (containSpecialChars === true) {
        maxLevels += 1;
    }

    function addIndicator() {
        setTimeout(() => {
            const passwordField = document.querySelector("." + className);
            const digit = new RegExp("^(?=.*[0-9]).{1,}$");
            const lowercase = new RegExp("^(?=.*[a-z]).{1,}$");
            const uppercase = new RegExp("^(?=.*[A-Z]).{1,}$");
            const minimalChars = new RegExp("^(?=.*[a-zA-Z]).{8,}$");
            const specialChars = new RegExp("^(?=.*[!@#$%^&*]).{1,}$");
            const passwordStrength = new Set();

            function feedbackTxt(text) {
                const feedbackText = document.querySelector(".password-indicator__text");
                feedbackText.innerHTML = text;
            }

            function updateIndicator(level) {
                const indicator = document.querySelector(".password-indicator");
                indicator.dataset.level = level;
                if (maxLevels === 5) {
                    level === 0 && feedbackTxt("");
                    level === 1 && feedbackTxt(lvl1Txt.value);
                    level === 2 && feedbackTxt(lvl2Txt.value);
                    level === 3 && feedbackTxt(lvl3Txt.value);
                    level === 4 && feedbackTxt(lvl4Txt.value);
                    level === 5 && feedbackTxt(lvl5Txt.value);
                }
            }

            function handleInputChange(event) {
                const value = event.target.value;

                digit.test(value) ? passwordStrength.add("digit") : passwordStrength.delete("digit");
                lowercase.test(value) ? passwordStrength.add("lowercase") : passwordStrength.delete("lowercase");
                uppercase.test(value) ? passwordStrength.add("uppercase") : passwordStrength.delete("uppercase");
                minimalChars.test(value)
                    ? passwordStrength.add("minimalChars")
                    : passwordStrength.delete("minimalChars");
                specialChars.test(value)
                    ? passwordStrength.add("specialChars")
                    : passwordStrength.delete("specialChars");

                updateIndicator(passwordStrength.size);
            }

            passwordField.addEventListener("input", handleInputChange);
        }, 300);
    }

    waitFor("." + className, addIndicator, document);
    return (
        <div className="password-indicator">
            {[...Array(maxLevels)].map(index => (
                <div className="password-indicator__level" key={index}></div>
            ))}
            <span className="mx-text password-indicator__text"></span>
        </div>
    );
}

define(['react'], (function (react) { 'use strict';

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".password-indicator {\n  display: flex;\n  padding-bottom: calc(24px - 8px);\n  position: relative;\n}\n\n.password-indicator__level {\n  background-color: #515151;\n  flex: 1;\n  height: 4px;\n  margin-bottom: 8px;\n}\n\n.password-indicator__level + .password-indicator__level {\n  margin-left: 4px;\n}\n\n.password-indicator__text {\n  bottom: 0;\n  position: absolute;\n  right: 0;\n}\n\n.password-indicator[data-level=\"1\"] {color: red;}\n\n.password-indicator[data-level=\"1\"] .password-indicator__level:nth-child(5n+1) {\n  background-color: currentColor;\n}\n\n.password-indicator[data-level=\"2\"] {color: orange;}\n\n.password-indicator[data-level=\"2\"] .password-indicator__level:nth-child(5n+1),\n.password-indicator[data-level=\"2\"] .password-indicator__level:nth-child(5n+2) {\n  background-color: currentColor;\n}\n\n.password-indicator[data-level=\"3\"] {color: green;}\n\n.password-indicator[data-level=\"3\"] .password-indicator__level:nth-child(5n+1),\n.password-indicator[data-level=\"3\"] .password-indicator__level:nth-child(5n+2),\n.password-indicator[data-level=\"3\"] .password-indicator__level:nth-child(5n+3) {\n  background-color: currentColor;\n}\n\n.password-indicator[data-level=\"4\"] {color: green;}\n\n.password-indicator[data-level=\"4\"] .password-indicator__level:nth-child(5n+1),\n.password-indicator[data-level=\"4\"] .password-indicator__level:nth-child(5n+2),\n.password-indicator[data-level=\"4\"] .password-indicator__level:nth-child(5n+3),\n.password-indicator[data-level=\"4\"] .password-indicator__level:nth-child(5n+4) {\n  background-color: currentColor;\n}\n\n.password-indicator[data-level=\"5\"] {color: green;}\n\n.password-indicator[data-level=\"5\"] .password-indicator__level:nth-child(5n+1),\n.password-indicator[data-level=\"5\"] .password-indicator__level:nth-child(5n+2),\n.password-indicator[data-level=\"5\"] .password-indicator__level:nth-child(5n+3),\n.password-indicator[data-level=\"5\"] .password-indicator__level:nth-child(5n+4),\n.password-indicator[data-level=\"5\"] .password-indicator__level:nth-child(5n+5) {\n  background-color: currentColor;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhc3N3b3JkSW5kaWNhdG9yLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLE9BQU87RUFDUCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUEscUNBQXFDLFVBQVUsQ0FBQzs7QUFDaEQ7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUEscUNBQXFDLGFBQWEsQ0FBQzs7QUFDbkQ7O0VBRUUsOEJBQThCO0FBQ2hDOztBQUVBLHFDQUFxQyxZQUFZLENBQUM7O0FBQ2xEOzs7RUFHRSw4QkFBOEI7QUFDaEM7O0FBRUEscUNBQXFDLFlBQVksQ0FBQzs7QUFDbEQ7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUEscUNBQXFDLFlBQVksQ0FBQzs7QUFDbEQ7Ozs7O0VBS0UsOEJBQThCO0FBQ2hDIiwiZmlsZSI6IlBhc3N3b3JkSW5kaWNhdG9yLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXNzd29yZC1pbmRpY2F0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYygyNHB4IC0gOHB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGFzc3dvcmQtaW5kaWNhdG9yX19sZXZlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTUxNTE7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5wYXNzd29yZC1pbmRpY2F0b3JfX2xldmVsICsgLnBhc3N3b3JkLWluZGljYXRvcl9fbGV2ZWwge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4ucGFzc3dvcmQtaW5kaWNhdG9yX190ZXh0IHtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuXG4ucGFzc3dvcmQtaW5kaWNhdG9yW2RhdGEtbGV2ZWw9XCIxXCJdIHtjb2xvcjogcmVkO31cbi5wYXNzd29yZC1pbmRpY2F0b3JbZGF0YS1sZXZlbD1cIjFcIl0gLnBhc3N3b3JkLWluZGljYXRvcl9fbGV2ZWw6bnRoLWNoaWxkKDVuKzEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xufVxuXG4ucGFzc3dvcmQtaW5kaWNhdG9yW2RhdGEtbGV2ZWw9XCIyXCJdIHtjb2xvcjogb3JhbmdlO31cbi5wYXNzd29yZC1pbmRpY2F0b3JbZGF0YS1sZXZlbD1cIjJcIl0gLnBhc3N3b3JkLWluZGljYXRvcl9fbGV2ZWw6bnRoLWNoaWxkKDVuKzEpLFxuLnBhc3N3b3JkLWluZGljYXRvcltkYXRhLWxldmVsPVwiMlwiXSAucGFzc3dvcmQtaW5kaWNhdG9yX19sZXZlbDpudGgtY2hpbGQoNW4rMikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG59XG5cbi5wYXNzd29yZC1pbmRpY2F0b3JbZGF0YS1sZXZlbD1cIjNcIl0ge2NvbG9yOiBncmVlbjt9XG4ucGFzc3dvcmQtaW5kaWNhdG9yW2RhdGEtbGV2ZWw9XCIzXCJdIC5wYXNzd29yZC1pbmRpY2F0b3JfX2xldmVsOm50aC1jaGlsZCg1bisxKSxcbi5wYXNzd29yZC1pbmRpY2F0b3JbZGF0YS1sZXZlbD1cIjNcIl0gLnBhc3N3b3JkLWluZGljYXRvcl9fbGV2ZWw6bnRoLWNoaWxkKDVuKzIpLFxuLnBhc3N3b3JkLWluZGljYXRvcltkYXRhLWxldmVsPVwiM1wiXSAucGFzc3dvcmQtaW5kaWNhdG9yX19sZXZlbDpudGgtY2hpbGQoNW4rMykge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG59XG5cbi5wYXNzd29yZC1pbmRpY2F0b3JbZGF0YS1sZXZlbD1cIjRcIl0ge2NvbG9yOiBncmVlbjt9XG4ucGFzc3dvcmQtaW5kaWNhdG9yW2RhdGEtbGV2ZWw9XCI0XCJdIC5wYXNzd29yZC1pbmRpY2F0b3JfX2xldmVsOm50aC1jaGlsZCg1bisxKSxcbi5wYXNzd29yZC1pbmRpY2F0b3JbZGF0YS1sZXZlbD1cIjRcIl0gLnBhc3N3b3JkLWluZGljYXRvcl9fbGV2ZWw6bnRoLWNoaWxkKDVuKzIpLFxuLnBhc3N3b3JkLWluZGljYXRvcltkYXRhLWxldmVsPVwiNFwiXSAucGFzc3dvcmQtaW5kaWNhdG9yX19sZXZlbDpudGgtY2hpbGQoNW4rMyksXG4ucGFzc3dvcmQtaW5kaWNhdG9yW2RhdGEtbGV2ZWw9XCI0XCJdIC5wYXNzd29yZC1pbmRpY2F0b3JfX2xldmVsOm50aC1jaGlsZCg1bis0KSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbn1cblxuLnBhc3N3b3JkLWluZGljYXRvcltkYXRhLWxldmVsPVwiNVwiXSB7Y29sb3I6IGdyZWVuO31cbi5wYXNzd29yZC1pbmRpY2F0b3JbZGF0YS1sZXZlbD1cIjVcIl0gLnBhc3N3b3JkLWluZGljYXRvcl9fbGV2ZWw6bnRoLWNoaWxkKDVuKzEpLFxuLnBhc3N3b3JkLWluZGljYXRvcltkYXRhLWxldmVsPVwiNVwiXSAucGFzc3dvcmQtaW5kaWNhdG9yX19sZXZlbDpudGgtY2hpbGQoNW4rMiksXG4ucGFzc3dvcmQtaW5kaWNhdG9yW2RhdGEtbGV2ZWw9XCI1XCJdIC5wYXNzd29yZC1pbmRpY2F0b3JfX2xldmVsOm50aC1jaGlsZCg1biszKSxcbi5wYXNzd29yZC1pbmRpY2F0b3JbZGF0YS1sZXZlbD1cIjVcIl0gLnBhc3N3b3JkLWluZGljYXRvcl9fbGV2ZWw6bnRoLWNoaWxkKDVuKzQpLFxuLnBhc3N3b3JkLWluZGljYXRvcltkYXRhLWxldmVsPVwiNVwiXSAucGFzc3dvcmQtaW5kaWNhdG9yX19sZXZlbDpudGgtY2hpbGQoNW4rNSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG59Il19 */";
  styleInject(css_248z);

  function waitFor(elementClass, callback, parent) {
    const context = parent || document;

    if (context.querySelector(elementClass)) {
      callback();
    } else {
      const observer = new MutationObserver(() => {
        if (context.querySelector(elementClass)) {
          observer.disconnect();
          callback();
        }
      }); // Start observing

      observer.observe(context, {
        childList: true,
        //This is a must have for the observer with subtree
        subtree: true //Set to true if changes must also be observed in descendants.

      });
    }
  }

  /* eslint-disable no-unused-expressions */
  function PasswordIndicator({
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
    const [canRender, setCanRender] = react.useState(false);
    const passwordIndicator = react.useRef(null);
    const passwordText = react.useRef(null);
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
          passwordText.current.innerHTML = text;
        }

        function updateIndicator(level) {
          passwordIndicator.current.dataset.level = level;

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
          minimalChars.test(value) ? passwordStrength.add("minimalChars") : passwordStrength.delete("minimalChars");
          specialChars.test(value) ? passwordStrength.add("specialChars") : passwordStrength.delete("specialChars");
          updateIndicator(passwordStrength.size);
        }

        passwordField.addEventListener("input", handleInputChange);
      }, 300);
    }

    react.useEffect(() => {
      console.info({
        passwordIndicator
      });

      if (passwordIndicator) {
        setCanRender(true);
        waitFor("." + className, addIndicator, document);
      }
    }, [passwordIndicator]);

    if (canRender) {
      return react.createElement("div", {
        className: "password-indicator",
        ref: passwordIndicator
      }, [...Array(maxLevels)].map(index => react.createElement("div", {
        className: "password-indicator__level",
        key: index
      })), react.createElement("span", {
        className: "mx-text password-indicator__text",
        ref: passwordText
      }));
    } else {
      return react.createElement("div", {
        className: "password-indicator"
      });
    }
  }

  return PasswordIndicator;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFzc3dvcmRJbmRpY2F0b3IuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1pbmplY3QvZGlzdC9zdHlsZS1pbmplY3QuZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvaGVscGVycy93YWl0Rm9yLmpzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL1Bhc3N3b3JkSW5kaWNhdG9yLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzdHlsZUluamVjdChjc3MsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0ge307XG4gIHZhciBpbnNlcnRBdCA9IHJlZi5pbnNlcnRBdDtcblxuICBpZiAoIWNzcyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxuXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuICBpZiAoaW5zZXJ0QXQgPT09ICd0b3AnKSB7XG4gICAgaWYgKGhlYWQuZmlyc3RDaGlsZCkge1xuICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlSW5qZWN0O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHdhaXRGb3IoZWxlbWVudENsYXNzLCBjYWxsYmFjaywgcGFyZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHBhcmVudCB8fCBkb2N1bWVudDtcblxuICAgIGlmIChjb250ZXh0LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudENsYXNzKSkge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQucXVlcnlTZWxlY3RvcihlbGVtZW50Q2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFN0YXJ0IG9ic2VydmluZ1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSwgLy9UaGlzIGlzIGEgbXVzdCBoYXZlIGZvciB0aGUgb2JzZXJ2ZXIgd2l0aCBzdWJ0cmVlXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlIC8vU2V0IHRvIHRydWUgaWYgY2hhbmdlcyBtdXN0IGFsc28gYmUgb2JzZXJ2ZWQgaW4gZGVzY2VuZGFudHMuXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuaW1wb3J0IFwiLi91aS9QYXNzd29yZEluZGljYXRvci5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2FpdEZvciB9IGZyb20gXCIuL2hlbHBlcnMvd2FpdEZvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXNzd29yZEluZGljYXRvcih7XG4gICAgY2xhc3NOYW1lLFxuICAgIGNvbnRhaW5EaWdpdCxcbiAgICBjb250YWluTG93ZXJjYXNlLFxuICAgIGNvbnRhaW5VcHBlcmNhc2UsXG4gICAgY29udGFpbk1pbmltYWxDaGFycyxcbiAgICBjb250YWluU3BlY2lhbENoYXJzLFxuICAgIGx2bDFUeHQsXG4gICAgbHZsMlR4dCxcbiAgICBsdmwzVHh0LFxuICAgIGx2bDRUeHQsXG4gICAgbHZsNVR4dFxufSkge1xuICAgIGNvbnN0IFtjYW5SZW5kZXIsIHNldENhblJlbmRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgcGFzc3dvcmRJbmRpY2F0b3IgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgcGFzc3dvcmRUZXh0ID0gdXNlUmVmKG51bGwpO1xuICAgIGxldCBtYXhMZXZlbHMgPSAwO1xuXG4gICAgaWYgKGNvbnRhaW5EaWdpdCA9PT0gdHJ1ZSkge1xuICAgICAgICBtYXhMZXZlbHMgKz0gMTtcbiAgICB9XG4gICAgaWYgKGNvbnRhaW5Mb3dlcmNhc2UgPT09IHRydWUpIHtcbiAgICAgICAgbWF4TGV2ZWxzICs9IDE7XG4gICAgfVxuICAgIGlmIChjb250YWluVXBwZXJjYXNlID09PSB0cnVlKSB7XG4gICAgICAgIG1heExldmVscyArPSAxO1xuICAgIH1cbiAgICBpZiAoY29udGFpbk1pbmltYWxDaGFycyA9PT0gdHJ1ZSkge1xuICAgICAgICBtYXhMZXZlbHMgKz0gMTtcbiAgICB9XG4gICAgaWYgKGNvbnRhaW5TcGVjaWFsQ2hhcnMgPT09IHRydWUpIHtcbiAgICAgICAgbWF4TGV2ZWxzICs9IDE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkSW5kaWNhdG9yKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGRpZ2l0ID0gbmV3IFJlZ0V4cChcIl4oPz0uKlswLTldKS57MSx9JFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGxvd2VyY2FzZSA9IG5ldyBSZWdFeHAoXCJeKD89LipbYS16XSkuezEsfSRcIik7XG4gICAgICAgICAgICBjb25zdCB1cHBlcmNhc2UgPSBuZXcgUmVnRXhwKFwiXig/PS4qW0EtWl0pLnsxLH0kXCIpO1xuICAgICAgICAgICAgY29uc3QgbWluaW1hbENoYXJzID0gbmV3IFJlZ0V4cChcIl4oPz0uKlthLXpBLVpdKS57OCx9JFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHNwZWNpYWxDaGFycyA9IG5ldyBSZWdFeHAoXCJeKD89LipbIUAjJCVeJipdKS57MSx9JFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkU3RyZW5ndGggPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGZlZWRiYWNrVHh0KHRleHQpIHtcbiAgICAgICAgICAgICAgICBwYXNzd29yZFRleHQuY3VycmVudC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVJbmRpY2F0b3IobGV2ZWwpIHtcbiAgICAgICAgICAgICAgICBwYXNzd29yZEluZGljYXRvci5jdXJyZW50LmRhdGFzZXQubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgICAgICAgICBpZiAobWF4TGV2ZWxzID09PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsID09PSAwICYmIGZlZWRiYWNrVHh0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbCA9PT0gMSAmJiBmZWVkYmFja1R4dChsdmwxVHh0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPT09IDIgJiYgZmVlZGJhY2tUeHQobHZsMlR4dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsID09PSAzICYmIGZlZWRiYWNrVHh0KGx2bDNUeHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbCA9PT0gNCAmJiBmZWVkYmFja1R4dChsdmw0VHh0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPT09IDUgJiYgZmVlZGJhY2tUeHQobHZsNVR4dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShldmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgZGlnaXQudGVzdCh2YWx1ZSkgPyBwYXNzd29yZFN0cmVuZ3RoLmFkZChcImRpZ2l0XCIpIDogcGFzc3dvcmRTdHJlbmd0aC5kZWxldGUoXCJkaWdpdFwiKTtcbiAgICAgICAgICAgICAgICBsb3dlcmNhc2UudGVzdCh2YWx1ZSkgPyBwYXNzd29yZFN0cmVuZ3RoLmFkZChcImxvd2VyY2FzZVwiKSA6IHBhc3N3b3JkU3RyZW5ndGguZGVsZXRlKFwibG93ZXJjYXNlXCIpO1xuICAgICAgICAgICAgICAgIHVwcGVyY2FzZS50ZXN0KHZhbHVlKSA/IHBhc3N3b3JkU3RyZW5ndGguYWRkKFwidXBwZXJjYXNlXCIpIDogcGFzc3dvcmRTdHJlbmd0aC5kZWxldGUoXCJ1cHBlcmNhc2VcIik7XG4gICAgICAgICAgICAgICAgbWluaW1hbENoYXJzLnRlc3QodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgID8gcGFzc3dvcmRTdHJlbmd0aC5hZGQoXCJtaW5pbWFsQ2hhcnNcIilcbiAgICAgICAgICAgICAgICAgICAgOiBwYXNzd29yZFN0cmVuZ3RoLmRlbGV0ZShcIm1pbmltYWxDaGFyc1wiKTtcbiAgICAgICAgICAgICAgICBzcGVjaWFsQ2hhcnMudGVzdCh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgPyBwYXNzd29yZFN0cmVuZ3RoLmFkZChcInNwZWNpYWxDaGFyc1wiKVxuICAgICAgICAgICAgICAgICAgICA6IHBhc3N3b3JkU3RyZW5ndGguZGVsZXRlKFwic3BlY2lhbENoYXJzXCIpO1xuXG4gICAgICAgICAgICAgICAgdXBkYXRlSW5kaWNhdG9yKHBhc3N3b3JkU3RyZW5ndGguc2l6ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhc3N3b3JkRmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGhhbmRsZUlucHV0Q2hhbmdlKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmluZm8oeyBwYXNzd29yZEluZGljYXRvciB9KTtcbiAgICAgICAgaWYgKHBhc3N3b3JkSW5kaWNhdG9yKSB7XG4gICAgICAgICAgICBzZXRDYW5SZW5kZXIodHJ1ZSk7XG4gICAgICAgICAgICB3YWl0Rm9yKFwiLlwiICsgY2xhc3NOYW1lLCBhZGRJbmRpY2F0b3IsIGRvY3VtZW50KTtcbiAgICAgICAgfVxuICAgIH0sIFtwYXNzd29yZEluZGljYXRvcl0pO1xuXG4gICAgaWYgKGNhblJlbmRlcikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXNzd29yZC1pbmRpY2F0b3JcIiByZWY9e3Bhc3N3b3JkSW5kaWNhdG9yfT5cbiAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KG1heExldmVscyldLm1hcChpbmRleCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFzc3dvcmQtaW5kaWNhdG9yX19sZXZlbFwiIGtleT17aW5kZXh9PjwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LXRleHQgcGFzc3dvcmQtaW5kaWNhdG9yX190ZXh0XCIgcmVmPXtwYXNzd29yZFRleHR9Pjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBhc3N3b3JkLWluZGljYXRvclwiPjwvZGl2PjtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsic3R5bGVJbmplY3QiLCJjc3MiLCJyZWYiLCJpbnNlcnRBdCIsImRvY3VtZW50IiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJ3YWl0Rm9yIiwiZWxlbWVudENsYXNzIiwiY2FsbGJhY2siLCJwYXJlbnQiLCJjb250ZXh0IiwicXVlcnlTZWxlY3RvciIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsIlBhc3N3b3JkSW5kaWNhdG9yIiwiY2xhc3NOYW1lIiwiY29udGFpbkRpZ2l0IiwiY29udGFpbkxvd2VyY2FzZSIsImNvbnRhaW5VcHBlcmNhc2UiLCJjb250YWluTWluaW1hbENoYXJzIiwiY29udGFpblNwZWNpYWxDaGFycyIsImx2bDFUeHQiLCJsdmwyVHh0IiwibHZsM1R4dCIsImx2bDRUeHQiLCJsdmw1VHh0IiwiY2FuUmVuZGVyIiwic2V0Q2FuUmVuZGVyIiwidXNlU3RhdGUiLCJwYXNzd29yZEluZGljYXRvciIsInVzZVJlZiIsInBhc3N3b3JkVGV4dCIsIm1heExldmVscyIsImFkZEluZGljYXRvciIsInNldFRpbWVvdXQiLCJwYXNzd29yZEZpZWxkIiwiZGlnaXQiLCJSZWdFeHAiLCJsb3dlcmNhc2UiLCJ1cHBlcmNhc2UiLCJtaW5pbWFsQ2hhcnMiLCJzcGVjaWFsQ2hhcnMiLCJwYXNzd29yZFN0cmVuZ3RoIiwiU2V0IiwiZmVlZGJhY2tUeHQiLCJ0ZXh0IiwiY3VycmVudCIsImlubmVySFRNTCIsInVwZGF0ZUluZGljYXRvciIsImxldmVsIiwiZGF0YXNldCIsInZhbHVlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInRlc3QiLCJhZGQiLCJkZWxldGUiLCJzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJpbmZvIiwiQXJyYXkiLCJtYXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7RUFBQSxTQUFTQSxXQUFULENBQXFCQyxHQUFyQixFQUEwQkMsR0FBMUIsRUFBK0I7RUFDN0IsTUFBS0EsR0FBRyxLQUFLLEtBQUssQ0FBbEIsRUFBc0JBLEdBQUcsR0FBRyxFQUFOO0VBQ3RCLE1BQUlDLFFBQVEsR0FBR0QsR0FBRyxDQUFDQyxRQUFuQjs7RUFFQSxNQUFJLENBQUNGLEdBQUQsSUFBUSxPQUFPRyxRQUFQLEtBQW9CLFdBQWhDLEVBQTZDO0VBQUU7RUFBUzs7RUFFeEQsTUFBSUMsSUFBSSxHQUFHRCxRQUFRLENBQUNDLElBQVQsSUFBaUJELFFBQVEsQ0FBQ0Usb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBNUI7RUFDQSxNQUFJQyxLQUFLLEdBQUdILFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixPQUF2QixDQUFaO0VBQ0FELEVBQUFBLEtBQUssQ0FBQ0UsSUFBTixHQUFhLFVBQWI7O0VBRUEsTUFBSU4sUUFBUSxLQUFLLEtBQWpCLEVBQXdCO0VBQ3RCLFFBQUlFLElBQUksQ0FBQ0ssVUFBVCxFQUFxQjtFQUNuQkwsTUFBQUEsSUFBSSxDQUFDTSxZQUFMLENBQWtCSixLQUFsQixFQUF5QkYsSUFBSSxDQUFDSyxVQUE5QjtFQUNELEtBRkQsTUFFTztFQUNMTCxNQUFBQSxJQUFJLENBQUNPLFdBQUwsQ0FBaUJMLEtBQWpCO0VBQ0Q7RUFDRixHQU5ELE1BTU87RUFDTEYsSUFBQUEsSUFBSSxDQUFDTyxXQUFMLENBQWlCTCxLQUFqQjtFQUNEOztFQUVELE1BQUlBLEtBQUssQ0FBQ00sVUFBVixFQUFzQjtFQUNwQk4sSUFBQUEsS0FBSyxDQUFDTSxVQUFOLENBQWlCQyxPQUFqQixH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

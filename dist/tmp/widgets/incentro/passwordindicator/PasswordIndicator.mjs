import { useState, useRef, useEffect, createElement } from 'react';

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
  const [canRender, setCanRender] = useState(false);
  const passwordIndicator = useRef(null);
  const passwordText = useRef(null);
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

  useEffect(() => {
    console.info({
      passwordIndicator
    });

    if (passwordIndicator) {
      setCanRender(true);
      waitFor("." + className, addIndicator, document);
    }
  }, [passwordIndicator]);

  if (canRender) {
    return createElement("div", {
      className: "password-indicator",
      ref: passwordIndicator
    }, [...Array(maxLevels)].map(index => createElement("div", {
      className: "password-indicator__level",
      key: index
    })), createElement("span", {
      className: "mx-text password-indicator__text",
      ref: passwordText
    }));
  } else {
    return createElement("div", {
      className: "password-indicator"
    });
  }
}

export { PasswordIndicator as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFzc3dvcmRJbmRpY2F0b3IubWpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtaW5qZWN0L2Rpc3Qvc3R5bGUtaW5qZWN0LmVzLmpzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL2hlbHBlcnMvd2FpdEZvci5qcyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9QYXNzd29yZEluZGljYXRvci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3R5bGVJbmplY3QoY3NzLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IHt9O1xuICB2YXIgaW5zZXJ0QXQgPSByZWYuaW5zZXJ0QXQ7XG5cbiAgaWYgKCFjc3MgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgaWYgKGluc2VydEF0ID09PSAndG9wJykge1xuICAgIGlmIChoZWFkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZUluamVjdDtcbiIsImV4cG9ydCBmdW5jdGlvbiB3YWl0Rm9yKGVsZW1lbnRDbGFzcywgY2FsbGJhY2ssIHBhcmVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBwYXJlbnQgfHwgZG9jdW1lbnQ7XG5cbiAgICBpZiAoY29udGV4dC5xdWVyeVNlbGVjdG9yKGVsZW1lbnRDbGFzcykpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudENsYXNzKSkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTdGFydCBvYnNlcnZpbmdcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsIC8vVGhpcyBpcyBhIG11c3QgaGF2ZSBmb3IgdGhlIG9ic2VydmVyIHdpdGggc3VidHJlZVxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSAvL1NldCB0byB0cnVlIGlmIGNoYW5nZXMgbXVzdCBhbHNvIGJlIG9ic2VydmVkIGluIGRlc2NlbmRhbnRzLlxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbmltcG9ydCBcIi4vdWkvUGFzc3dvcmRJbmRpY2F0b3IuY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdhaXRGb3IgfSBmcm9tIFwiLi9oZWxwZXJzL3dhaXRGb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFzc3dvcmRJbmRpY2F0b3Ioe1xuICAgIGNsYXNzTmFtZSxcbiAgICBjb250YWluRGlnaXQsXG4gICAgY29udGFpbkxvd2VyY2FzZSxcbiAgICBjb250YWluVXBwZXJjYXNlLFxuICAgIGNvbnRhaW5NaW5pbWFsQ2hhcnMsXG4gICAgY29udGFpblNwZWNpYWxDaGFycyxcbiAgICBsdmwxVHh0LFxuICAgIGx2bDJUeHQsXG4gICAgbHZsM1R4dCxcbiAgICBsdmw0VHh0LFxuICAgIGx2bDVUeHRcbn0pIHtcbiAgICBjb25zdCBbY2FuUmVuZGVyLCBzZXRDYW5SZW5kZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHBhc3N3b3JkSW5kaWNhdG9yID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHBhc3N3b3JkVGV4dCA9IHVzZVJlZihudWxsKTtcbiAgICBsZXQgbWF4TGV2ZWxzID0gMDtcblxuICAgIGlmIChjb250YWluRGlnaXQgPT09IHRydWUpIHtcbiAgICAgICAgbWF4TGV2ZWxzICs9IDE7XG4gICAgfVxuICAgIGlmIChjb250YWluTG93ZXJjYXNlID09PSB0cnVlKSB7XG4gICAgICAgIG1heExldmVscyArPSAxO1xuICAgIH1cbiAgICBpZiAoY29udGFpblVwcGVyY2FzZSA9PT0gdHJ1ZSkge1xuICAgICAgICBtYXhMZXZlbHMgKz0gMTtcbiAgICB9XG4gICAgaWYgKGNvbnRhaW5NaW5pbWFsQ2hhcnMgPT09IHRydWUpIHtcbiAgICAgICAgbWF4TGV2ZWxzICs9IDE7XG4gICAgfVxuICAgIGlmIChjb250YWluU3BlY2lhbENoYXJzID09PSB0cnVlKSB7XG4gICAgICAgIG1heExldmVscyArPSAxO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEluZGljYXRvcigpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBkaWdpdCA9IG5ldyBSZWdFeHAoXCJeKD89LipbMC05XSkuezEsfSRcIik7XG4gICAgICAgICAgICBjb25zdCBsb3dlcmNhc2UgPSBuZXcgUmVnRXhwKFwiXig/PS4qW2Etel0pLnsxLH0kXCIpO1xuICAgICAgICAgICAgY29uc3QgdXBwZXJjYXNlID0gbmV3IFJlZ0V4cChcIl4oPz0uKltBLVpdKS57MSx9JFwiKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbmltYWxDaGFycyA9IG5ldyBSZWdFeHAoXCJeKD89LipbYS16QS1aXSkuezgsfSRcIik7XG4gICAgICAgICAgICBjb25zdCBzcGVjaWFsQ2hhcnMgPSBuZXcgUmVnRXhwKFwiXig/PS4qWyFAIyQlXiYqXSkuezEsfSRcIik7XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZFN0cmVuZ3RoID0gbmV3IFNldCgpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBmZWVkYmFja1R4dCh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmRUZXh0LmN1cnJlbnQuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlSW5kaWNhdG9yKGxldmVsKSB7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmRJbmRpY2F0b3IuY3VycmVudC5kYXRhc2V0LmxldmVsID0gbGV2ZWw7XG4gICAgICAgICAgICAgICAgaWYgKG1heExldmVscyA9PT0gNSkge1xuICAgICAgICAgICAgICAgICAgICBsZXZlbCA9PT0gMCAmJiBmZWVkYmFja1R4dChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPT09IDEgJiYgZmVlZGJhY2tUeHQobHZsMVR4dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsID09PSAyICYmIGZlZWRiYWNrVHh0KGx2bDJUeHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbCA9PT0gMyAmJiBmZWVkYmFja1R4dChsdmwzVHh0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPT09IDQgJiYgZmVlZGJhY2tUeHQobHZsNFR4dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsID09PSA1ICYmIGZlZWRiYWNrVHh0KGx2bDVUeHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICAgICAgICAgIGRpZ2l0LnRlc3QodmFsdWUpID8gcGFzc3dvcmRTdHJlbmd0aC5hZGQoXCJkaWdpdFwiKSA6IHBhc3N3b3JkU3RyZW5ndGguZGVsZXRlKFwiZGlnaXRcIik7XG4gICAgICAgICAgICAgICAgbG93ZXJjYXNlLnRlc3QodmFsdWUpID8gcGFzc3dvcmRTdHJlbmd0aC5hZGQoXCJsb3dlcmNhc2VcIikgOiBwYXNzd29yZFN0cmVuZ3RoLmRlbGV0ZShcImxvd2VyY2FzZVwiKTtcbiAgICAgICAgICAgICAgICB1cHBlcmNhc2UudGVzdCh2YWx1ZSkgPyBwYXNzd29yZFN0cmVuZ3RoLmFkZChcInVwcGVyY2FzZVwiKSA6IHBhc3N3b3JkU3RyZW5ndGguZGVsZXRlKFwidXBwZXJjYXNlXCIpO1xuICAgICAgICAgICAgICAgIG1pbmltYWxDaGFycy50ZXN0KHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICA/IHBhc3N3b3JkU3RyZW5ndGguYWRkKFwibWluaW1hbENoYXJzXCIpXG4gICAgICAgICAgICAgICAgICAgIDogcGFzc3dvcmRTdHJlbmd0aC5kZWxldGUoXCJtaW5pbWFsQ2hhcnNcIik7XG4gICAgICAgICAgICAgICAgc3BlY2lhbENoYXJzLnRlc3QodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgID8gcGFzc3dvcmRTdHJlbmd0aC5hZGQoXCJzcGVjaWFsQ2hhcnNcIilcbiAgICAgICAgICAgICAgICAgICAgOiBwYXNzd29yZFN0cmVuZ3RoLmRlbGV0ZShcInNwZWNpYWxDaGFyc1wiKTtcblxuICAgICAgICAgICAgICAgIHVwZGF0ZUluZGljYXRvcihwYXNzd29yZFN0cmVuZ3RoLnNpemUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXNzd29yZEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBoYW5kbGVJbnB1dENoYW5nZSk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5pbmZvKHsgcGFzc3dvcmRJbmRpY2F0b3IgfSk7XG4gICAgICAgIGlmIChwYXNzd29yZEluZGljYXRvcikge1xuICAgICAgICAgICAgc2V0Q2FuUmVuZGVyKHRydWUpO1xuICAgICAgICAgICAgd2FpdEZvcihcIi5cIiArIGNsYXNzTmFtZSwgYWRkSW5kaWNhdG9yLCBkb2N1bWVudCk7XG4gICAgICAgIH1cbiAgICB9LCBbcGFzc3dvcmRJbmRpY2F0b3JdKTtcblxuICAgIGlmIChjYW5SZW5kZXIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFzc3dvcmQtaW5kaWNhdG9yXCIgcmVmPXtwYXNzd29yZEluZGljYXRvcn0+XG4gICAgICAgICAgICAgICAge1suLi5BcnJheShtYXhMZXZlbHMpXS5tYXAoaW5kZXggPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhc3N3b3JkLWluZGljYXRvcl9fbGV2ZWxcIiBrZXk9e2luZGV4fT48L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC10ZXh0IHBhc3N3b3JkLWluZGljYXRvcl9fdGV4dFwiIHJlZj17cGFzc3dvcmRUZXh0fT48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJwYXNzd29yZC1pbmRpY2F0b3JcIj48L2Rpdj47XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInN0eWxlSW5qZWN0IiwiY3NzIiwicmVmIiwiaW5zZXJ0QXQiLCJkb2N1bWVudCIsImhlYWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImNyZWF0ZVRleHROb2RlIiwid2FpdEZvciIsImVsZW1lbnRDbGFzcyIsImNhbGxiYWNrIiwicGFyZW50IiwiY29udGV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJQYXNzd29yZEluZGljYXRvciIsImNsYXNzTmFtZSIsImNvbnRhaW5EaWdpdCIsImNvbnRhaW5Mb3dlcmNhc2UiLCJjb250YWluVXBwZXJjYXNlIiwiY29udGFpbk1pbmltYWxDaGFycyIsImNvbnRhaW5TcGVjaWFsQ2hhcnMiLCJsdmwxVHh0IiwibHZsMlR4dCIsImx2bDNUeHQiLCJsdmw0VHh0IiwibHZsNVR4dCIsImNhblJlbmRlciIsInNldENhblJlbmRlciIsInVzZVN0YXRlIiwicGFzc3dvcmRJbmRpY2F0b3IiLCJ1c2VSZWYiLCJwYXNzd29yZFRleHQiLCJtYXhMZXZlbHMiLCJhZGRJbmRpY2F0b3IiLCJzZXRUaW1lb3V0IiwicGFzc3dvcmRGaWVsZCIsImRpZ2l0IiwiUmVnRXhwIiwibG93ZXJjYXNlIiwidXBwZXJjYXNlIiwibWluaW1hbENoYXJzIiwic3BlY2lhbENoYXJzIiwicGFzc3dvcmRTdHJlbmd0aCIsIlNldCIsImZlZWRiYWNrVHh0IiwidGV4dCIsImN1cnJlbnQiLCJpbm5lckhUTUwiLCJ1cGRhdGVJbmRpY2F0b3IiLCJsZXZlbCIsImRhdGFzZXQiLCJ2YWx1ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ0ZXN0IiwiYWRkIiwiZGVsZXRlIiwic2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwiaW5mbyIsIkFycmF5IiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsV0FBVCxDQUFxQkMsR0FBckIsRUFBMEJDLEdBQTFCLEVBQStCO0FBQzdCLE1BQUtBLEdBQUcsS0FBSyxLQUFLLENBQWxCLEVBQXNCQSxHQUFHLEdBQUcsRUFBTjtBQUN0QixNQUFJQyxRQUFRLEdBQUdELEdBQUcsQ0FBQ0MsUUFBbkI7O0FBRUEsTUFBSSxDQUFDRixHQUFELElBQVEsT0FBT0csUUFBUCxLQUFvQixXQUFoQyxFQUE2QztBQUFFO0FBQVM7O0FBRXhELE1BQUlDLElBQUksR0FBR0QsUUFBUSxDQUFDQyxJQUFULElBQWlCRCxRQUFRLENBQUNFLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQTVCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHSCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUNBRCxFQUFBQSxLQUFLLENBQUNFLElBQU4sR0FBYSxVQUFiOztBQUVBLE1BQUlOLFFBQVEsS0FBSyxLQUFqQixFQUF3QjtBQUN0QixRQUFJRSxJQUFJLENBQUNLLFVBQVQsRUFBcUI7QUFDbkJMLE1BQUFBLElBQUksQ0FBQ00sWUFBTCxDQUFrQkosS0FBbEIsRUFBeUJGLElBQUksQ0FBQ0ssVUFBOUI7QUFDRCxLQUZELE1BRU87QUFDTEwsTUFBQUEsSUFBSSxDQUFDTyxXQUFMLENBQWlCTCxLQUFqQjtBQUNEO0FBQ0YsR0FORCxNQU1PO0FBQ0xGLElBQUFBLElBQUksQ0FBQ08sV0FBTCxDQUFpQkwsS0FBakI7QUFDRDs7QUFFRCxNQUFJQSxLQUFLLENBQUNNLFVBQVYsRUFBc0I7QUFDcEJOLElBQUFBLEtBQUssQ0FBQ00sVUFBTixDQUFpQkMsT0FBakIs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

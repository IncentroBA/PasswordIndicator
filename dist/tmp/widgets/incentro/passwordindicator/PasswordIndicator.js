define(['react'], (function (react) { 'use strict';

  

  function ___$insertStyle(css) {
      if (!css || !window) {
          return;
      }
      const style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      style.innerHTML = css;
      document.head.appendChild(style);
      return css;
  }

  ___$insertStyle(".password-indicator {\n  display: flex;\n  padding-bottom: 16px;\n  position: relative;\n}\n\n.password-indicator__level {\n  background-color: #515151;\n  flex: 1;\n  height: 4px;\n  margin-bottom: 8px;\n}\n\n.password-indicator__level + .password-indicator__level {\n  margin-left: 4px;\n}\n\n.password-indicator__text {\n  bottom: 0;\n  position: absolute;\n  right: 0;\n}\n\n.password-indicator[data-level=\"1\"] {\n  color: red;\n}\n\n.password-indicator[data-level=\"1\"] .password-indicator__level:nth-child(5n+1) {\n  background-color: currentColor;\n}\n\n.password-indicator[data-level=\"2\"] {\n  color: orange;\n}\n\n.password-indicator[data-level=\"2\"] .password-indicator__level:nth-child(5n+1),\n.password-indicator[data-level=\"2\"] .password-indicator__level:nth-child(5n+2) {\n  background-color: currentColor;\n}\n\n.password-indicator[data-level=\"3\"] {\n  color: green;\n}\n\n.password-indicator[data-level=\"3\"] .password-indicator__level:nth-child(5n+1),\n.password-indicator[data-level=\"3\"] .password-indicator__level:nth-child(5n+2),\n.password-indicator[data-level=\"3\"] .password-indicator__level:nth-child(5n+3) {\n  background-color: currentColor;\n}\n\n.password-indicator[data-level=\"4\"] {\n  color: green;\n}\n\n.password-indicator[data-level=\"4\"] .password-indicator__level:nth-child(5n+1),\n.password-indicator[data-level=\"4\"] .password-indicator__level:nth-child(5n+2),\n.password-indicator[data-level=\"4\"] .password-indicator__level:nth-child(5n+3),\n.password-indicator[data-level=\"4\"] .password-indicator__level:nth-child(5n+4) {\n  background-color: currentColor;\n}\n\n.password-indicator[data-level=\"5\"] {\n  color: green;\n}\n\n.password-indicator[data-level=\"5\"] .password-indicator__level:nth-child(5n+1),\n.password-indicator[data-level=\"5\"] .password-indicator__level:nth-child(5n+2),\n.password-indicator[data-level=\"5\"] .password-indicator__level:nth-child(5n+3),\n.password-indicator[data-level=\"5\"] .password-indicator__level:nth-child(5n+4),\n.password-indicator[data-level=\"5\"] .password-indicator__level:nth-child(5n+5) {\n  background-color: currentColor;\n}");

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
          minimalChars.test(value) ? passwordStrength.add("minimalChars") : passwordStrength.delete("minimalChars");
          specialChars.test(value) ? passwordStrength.add("specialChars") : passwordStrength.delete("specialChars");
          updateIndicator(passwordStrength.size);
        }

        passwordField.addEventListener("input", handleInputChange);
      }, 300);
    }

    waitFor("." + className, addIndicator, document);
    return react.createElement("div", {
      className: "password-indicator"
    }, [...Array(maxLevels)].map(index => react.createElement("div", {
      className: "password-indicator__level",
      key: index
    })), react.createElement("span", {
      className: "mx-text password-indicator__text"
    }));
  }

  return PasswordIndicator;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFzc3dvcmRJbmRpY2F0b3IuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9oZWxwZXJzL3dhaXRGb3IuanMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvUGFzc3dvcmRJbmRpY2F0b3IuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB3YWl0Rm9yKGVsZW1lbnRDbGFzcywgY2FsbGJhY2ssIHBhcmVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBwYXJlbnQgfHwgZG9jdW1lbnQ7XG5cbiAgICBpZiAoY29udGV4dC5xdWVyeVNlbGVjdG9yKGVsZW1lbnRDbGFzcykpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudENsYXNzKSkge1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTdGFydCBvYnNlcnZpbmdcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsIC8vVGhpcyBpcyBhIG11c3QgaGF2ZSBmb3IgdGhlIG9ic2VydmVyIHdpdGggc3VidHJlZVxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSAvL1NldCB0byB0cnVlIGlmIGNoYW5nZXMgbXVzdCBhbHNvIGJlIG9ic2VydmVkIGluIGRlc2NlbmRhbnRzLlxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbmltcG9ydCBcIi4vdWkvUGFzc3dvcmRJbmRpY2F0b3IuY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB3YWl0Rm9yIH0gZnJvbSBcIi4vaGVscGVycy93YWl0Rm9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhc3N3b3JkSW5kaWNhdG9yKHtcbiAgICBjbGFzc05hbWUsXG4gICAgY29udGFpbkRpZ2l0LFxuICAgIGNvbnRhaW5Mb3dlcmNhc2UsXG4gICAgY29udGFpblVwcGVyY2FzZSxcbiAgICBjb250YWluTWluaW1hbENoYXJzLFxuICAgIGNvbnRhaW5TcGVjaWFsQ2hhcnMsXG4gICAgbHZsMVR4dCxcbiAgICBsdmwyVHh0LFxuICAgIGx2bDNUeHQsXG4gICAgbHZsNFR4dCxcbiAgICBsdmw1VHh0XG59KSB7XG4gICAgbGV0IG1heExldmVscyA9IDA7XG5cbiAgICBpZiAoY29udGFpbkRpZ2l0ID09PSB0cnVlKSB7XG4gICAgICAgIG1heExldmVscyArPSAxO1xuICAgIH1cbiAgICBpZiAoY29udGFpbkxvd2VyY2FzZSA9PT0gdHJ1ZSkge1xuICAgICAgICBtYXhMZXZlbHMgKz0gMTtcbiAgICB9XG4gICAgaWYgKGNvbnRhaW5VcHBlcmNhc2UgPT09IHRydWUpIHtcbiAgICAgICAgbWF4TGV2ZWxzICs9IDE7XG4gICAgfVxuICAgIGlmIChjb250YWluTWluaW1hbENoYXJzID09PSB0cnVlKSB7XG4gICAgICAgIG1heExldmVscyArPSAxO1xuICAgIH1cbiAgICBpZiAoY29udGFpblNwZWNpYWxDaGFycyA9PT0gdHJ1ZSkge1xuICAgICAgICBtYXhMZXZlbHMgKz0gMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRJbmRpY2F0b3IoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBjbGFzc05hbWUpO1xuICAgICAgICAgICAgY29uc3QgZGlnaXQgPSBuZXcgUmVnRXhwKFwiXig/PS4qWzAtOV0pLnsxLH0kXCIpO1xuICAgICAgICAgICAgY29uc3QgbG93ZXJjYXNlID0gbmV3IFJlZ0V4cChcIl4oPz0uKlthLXpdKS57MSx9JFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHVwcGVyY2FzZSA9IG5ldyBSZWdFeHAoXCJeKD89LipbQS1aXSkuezEsfSRcIik7XG4gICAgICAgICAgICBjb25zdCBtaW5pbWFsQ2hhcnMgPSBuZXcgUmVnRXhwKFwiXig/PS4qW2EtekEtWl0pLns4LH0kXCIpO1xuICAgICAgICAgICAgY29uc3Qgc3BlY2lhbENoYXJzID0gbmV3IFJlZ0V4cChcIl4oPz0uKlshQCMkJV4mKl0pLnsxLH0kXCIpO1xuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRTdHJlbmd0aCA9IG5ldyBTZXQoKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gZmVlZGJhY2tUeHQodGV4dCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZlZWRiYWNrVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFzc3dvcmQtaW5kaWNhdG9yX190ZXh0XCIpO1xuICAgICAgICAgICAgICAgIGZlZWRiYWNrVGV4dC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVJbmRpY2F0b3IobGV2ZWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3N3b3JkLWluZGljYXRvclwiKTtcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3IuZGF0YXNldC5sZXZlbCA9IGxldmVsO1xuICAgICAgICAgICAgICAgIGlmIChtYXhMZXZlbHMgPT09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPT09IDAgJiYgZmVlZGJhY2tUeHQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsID09PSAxICYmIGZlZWRiYWNrVHh0KGx2bDFUeHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbCA9PT0gMiAmJiBmZWVkYmFja1R4dChsdmwyVHh0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPT09IDMgJiYgZmVlZGJhY2tUeHQobHZsM1R4dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsID09PSA0ICYmIGZlZWRiYWNrVHh0KGx2bDRUeHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbCA9PT0gNSAmJiBmZWVkYmFja1R4dChsdmw1VHh0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBkaWdpdC50ZXN0KHZhbHVlKSA/IHBhc3N3b3JkU3RyZW5ndGguYWRkKFwiZGlnaXRcIikgOiBwYXNzd29yZFN0cmVuZ3RoLmRlbGV0ZShcImRpZ2l0XCIpO1xuICAgICAgICAgICAgICAgIGxvd2VyY2FzZS50ZXN0KHZhbHVlKSA/IHBhc3N3b3JkU3RyZW5ndGguYWRkKFwibG93ZXJjYXNlXCIpIDogcGFzc3dvcmRTdHJlbmd0aC5kZWxldGUoXCJsb3dlcmNhc2VcIik7XG4gICAgICAgICAgICAgICAgdXBwZXJjYXNlLnRlc3QodmFsdWUpID8gcGFzc3dvcmRTdHJlbmd0aC5hZGQoXCJ1cHBlcmNhc2VcIikgOiBwYXNzd29yZFN0cmVuZ3RoLmRlbGV0ZShcInVwcGVyY2FzZVwiKTtcbiAgICAgICAgICAgICAgICBtaW5pbWFsQ2hhcnMudGVzdCh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgPyBwYXNzd29yZFN0cmVuZ3RoLmFkZChcIm1pbmltYWxDaGFyc1wiKVxuICAgICAgICAgICAgICAgICAgICA6IHBhc3N3b3JkU3RyZW5ndGguZGVsZXRlKFwibWluaW1hbENoYXJzXCIpO1xuICAgICAgICAgICAgICAgIHNwZWNpYWxDaGFycy50ZXN0KHZhbHVlKVxuICAgICAgICAgICAgICAgICAgICA/IHBhc3N3b3JkU3RyZW5ndGguYWRkKFwic3BlY2lhbENoYXJzXCIpXG4gICAgICAgICAgICAgICAgICAgIDogcGFzc3dvcmRTdHJlbmd0aC5kZWxldGUoXCJzcGVjaWFsQ2hhcnNcIik7XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVJbmRpY2F0b3IocGFzc3dvcmRTdHJlbmd0aC5zaXplKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFzc3dvcmRGaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgaGFuZGxlSW5wdXRDaGFuZ2UpO1xuICAgICAgICB9LCAzMDApO1xuICAgIH1cblxuICAgIHdhaXRGb3IoXCIuXCIgKyBjbGFzc05hbWUsIGFkZEluZGljYXRvciwgZG9jdW1lbnQpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFzc3dvcmQtaW5kaWNhdG9yXCI+XG4gICAgICAgICAgICB7Wy4uLkFycmF5KG1heExldmVscyldLm1hcChpbmRleCA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXNzd29yZC1pbmRpY2F0b3JfX2xldmVsXCIga2V5PXtpbmRleH0+PC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LXRleHQgcGFzc3dvcmQtaW5kaWNhdG9yX190ZXh0XCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIndhaXRGb3IiLCJlbGVtZW50Q2xhc3MiLCJjYWxsYmFjayIsInBhcmVudCIsImNvbnRleHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJQYXNzd29yZEluZGljYXRvciIsImNsYXNzTmFtZSIsImNvbnRhaW5EaWdpdCIsImNvbnRhaW5Mb3dlcmNhc2UiLCJjb250YWluVXBwZXJjYXNlIiwiY29udGFpbk1pbmltYWxDaGFycyIsImNvbnRhaW5TcGVjaWFsQ2hhcnMiLCJsdmwxVHh0IiwibHZsMlR4dCIsImx2bDNUeHQiLCJsdmw0VHh0IiwibHZsNVR4dCIsIm1heExldmVscyIsImFkZEluZGljYXRvciIsInNldFRpbWVvdXQiLCJwYXNzd29yZEZpZWxkIiwiZGlnaXQiLCJSZWdFeHAiLCJsb3dlcmNhc2UiLCJ1cHBlcmNhc2UiLCJtaW5pbWFsQ2hhcnMiLCJzcGVjaWFsQ2hhcnMiLCJwYXNzd29yZFN0cmVuZ3RoIiwiU2V0IiwiZmVlZGJhY2tUeHQiLCJ0ZXh0IiwiZmVlZGJhY2tUZXh0IiwiaW5uZXJIVE1MIiwidXBkYXRlSW5kaWNhdG9yIiwibGV2ZWwiLCJpbmRpY2F0b3IiLCJkYXRhc2V0IiwidmFsdWUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidGVzdCIsImFkZCIsImRlbGV0ZSIsInNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwiY3JlYXRlRWxlbWVudCIsIkFycmF5IiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQU8sU0FBU0EsT0FBVCxDQUFpQkMsWUFBakIsRUFBK0JDLFFBQS9CLEVBQXlDQyxNQUF6QyxFQUFpRDtFQUNwRCxRQUFNQyxPQUFPLEdBQUdELE1BQU0sSUFBSUUsUUFBMUI7O0VBRUEsTUFBSUQsT0FBTyxDQUFDRSxhQUFSLENBQXNCTCxZQUF0QixDQUFKLEVBQXlDO0VBQ3JDQyxJQUFBQSxRQUFRO0VBQ1gsR0FGRCxNQUVPO0VBQ0gsVUFBTUssUUFBUSxHQUFHLElBQUlDLGdCQUFKLENBQXFCLE1BQU07RUFDeEMsVUFBSUosT0FBTyxDQUFDRSxhQUFSLENBQXNCTCxZQUF0QixDQUFKLEVBQXlDO0VBQ3JDTSxRQUFBQSxRQUFRLENBQUNFLFVBQVQ7RUFDQVAsUUFBQUEsUUFBUTtFQUNYO0VBQ0osS0FMZ0IsQ0FBakIsQ0FERzs7RUFTSEssSUFBQUEsUUFBUSxDQUFDRyxPQUFULENBQWlCTixPQUFqQixFQUEwQjtFQUN0Qk8sTUFBQUEsU0FBUyxFQUFFLElBRFc7RUFDTDtFQUNqQkMsTUFBQUEsT0FBTyxFQUFFLElBRmE7O0VBQUEsS0FBMUI7RUFJSDtFQUNKOztFQ25CRDtFQUtlLFNBQVNDLGlCQUFULENBQTJCO0VBQ3RDQyxFQUFBQSxTQURzQztFQUV0Q0MsRUFBQUEsWUFGc0M7RUFHdENDLEVBQUFBLGdCQUhzQztFQUl0Q0MsRUFBQUEsZ0JBSnNDO0VBS3RDQyxFQUFBQSxtQkFMc0M7RUFNdENDLEVBQUFBLG1CQU5zQztFQU90Q0MsRUFBQUEsT0FQc0M7RUFRdENDLEVBQUFBLE9BUnNDO0VBU3RDQyxFQUFBQSxPQVRzQztFQVV0Q0MsRUFBQUEsT0FWc0M7RUFXdENDLEVBQUFBO0VBWHNDLENBQTNCLEVBWVo7RUFDQyxNQUFJQyxTQUFTLEdBQUcsQ0FBaEI7O0VBRUEsTUFBSVYsWUFBWSxLQUFLLElBQXJCLEVBQTJCO0VBQ3ZCVSxJQUFBQSxTQUFTLElBQUksQ0FBYjtFQUNIOztFQUNELE1BQUlULGdCQUFnQixLQUFLLElBQXpCLEVBQStCO0VBQzNCUyxJQUFBQSxTQUFTLElBQUksQ0FBYjtFQUNIOztFQUNELE1BQUlSLGdCQUFnQixLQUFLLElBQXpCLEVBQStCO0VBQzNCUSxJQUFBQSxTQUFTLElBQUksQ0FBYjtFQUNIOztFQUNELE1BQUlQLG1CQUFtQixLQUFLLElBQTVCLEVBQWtDO0VBQzlCTyxJQUFBQSxTQUFTLElBQUksQ0FBYjtFQUNIOztFQUNELE1BQUlOLG1CQUFtQixLQUFLLElBQTVCLEVBQWtDO0VBQzlCTSxJQUFBQSxTQUFTLElBQUksQ0FBYjtFQUNIOztFQUVELFdBQVNDLFlBQVQsR0FBd0I7RUFDcEJDLElBQUFBLFVBQVUsQ0FBQyxNQUFNO0VBQ2IsWUFBTUMsYUFBYSxHQUFHdkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQU1RLFNBQTdCLENBQXRCO0VBQ0EsWUFBTWUsS0FBSyxHQUFHLElBQUlDLE1BQUosQ0FBVyxvQkFBWCxDQUFkO0VBQ0EsWUFBTUMsU0FBUyxHQUFHLElBQUlELE1BQUosQ0FBVyxvQkFBWCxDQUFsQjtFQUNBLFlBQU1FLFNBQVMsR0FBRyxJQUFJRixNQUFKLENBQVcsb0JBQVgsQ0FBbEI7RUFDQSxZQUFNRyxZQUFZLEdBQUcsSUFBSUgsTUFBSixDQUFXLHVCQUFYLENBQXJCO0VBQ0EsWUFBTUksWUFBWSxHQUFHLElBQUlKLE1BQUosQ0FBVyx5QkFBWCxDQUFyQjtFQUNBLFlBQU1LLGdCQUFnQixHQUFHLElBQUlDLEdBQUosRUFBekI7O0VBRUEsZUFBU0MsV0FBVCxDQUFxQkMsSUFBckIsRUFBMkI7RUFDdkIsY0FBTUMsWUFBWSxHQUFHbEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLDJCQUF2QixDQUFyQjtFQUNBaUMsUUFBQUEsWUFBWSxDQUFDQyxTQUFiLEdBQXlCRixJQUF6QjtFQUNIOztFQUVELGVBQVNHLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0VBQzVCLGNBQU1DLFNBQVMsR0FBR3RDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBbEI7RUFDQXFDLFFBQUFBLFNBQVMsQ0FBQ0MsT0FBVixDQUFrQkYsS0FBbEIsR0FBMEJBLEtBQTFCOztFQUNBLFlBQUlqQixTQUFTLEtBQUssQ0FBbEIsRUFBcUI7RUFDakJpQixVQUFBQSxLQUFLLEtBQUssQ0FBVixJQUFlTCxXQUFXLENBQUMsRUFBRCxDQUExQjtFQUNBSyxVQUFBQSxLQUFLLEtBQUssQ0FBVixJQUFlTCxXQUFXLENBQUNqQixPQUFPLENBQUN5QixLQUFULENBQTFCO0VBQ0FILFVBQUFBLEtBQUssS0FBSyxDQUFWLElBQWVMLFdBQVcsQ0FBQ2hCLE9BQU8sQ0FBQ3dCLEtBQVQsQ0FBMUI7RUFDQUgsVUFBQUEsS0FBSyxLQUFLLENBQVYsSUFBZUwsV0FBVyxDQUFDZixPQUFPLENBQUN1QixLQUFULENBQTFCO0VBQ0FILFVBQUFBLEtBQUssS0FBSyxDQUFWLElBQWVMLFdBQVcsQ0FBQ2QsT0FBTyxDQUFDc0IsS0FBVCxDQUExQjtFQUNBSCxVQUFBQSxLQUFLLEtBQUssQ0FBVixJQUFlTCxXQUFXLENBQUNiLE9BQU8sQ0FBQ3FCLEtBQVQsQ0FBMUI7RUFDSDtFQUNKOztFQUVELGVBQVNDLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztFQUM5QixjQUFNRixLQUFLLEdBQUdFLEtBQUssQ0FBQ0MsTUFBTixDQUFhSCxLQUEzQjtFQUVBaEIsUUFBQUEsS0FBSyxDQUFDb0IsSUFBTixDQUFXSixLQUFYLElBQW9CVixnQkFBZ0IsQ0FBQ2UsR0FBakIsQ0FBcUIsT0FBckIsQ0FBcEIsR0FBb0RmLGdCQUFnQixDQUFDZ0IsTUFBakIsQ0FBd0IsT0FBeEIsQ0FBcEQ7RUFDQXBCLFFBQUFBLFNBQVMsQ0FBQ2tCLElBQVYsQ0FBZUosS0FBZixJQUF3QlYsZ0JBQWdCLENBQUNlLEdBQWpCLENBQXFCLFdBQXJCLENBQXhCLEdBQTREZixnQkFBZ0IsQ0FBQ2dCLE1BQWpCLENBQXdCLFdBQXhCLENBQTVEO0VBQ0FuQixRQUFBQSxTQUFTLENBQUNpQixJQUFWLENBQWVKLEtBQWYsSUFBd0JWLGdCQUFnQixDQUFDZSxHQUFqQixDQUFxQixXQUFyQixDQUF4QixHQUE0RGYsZ0JBQWdCLENBQUNnQixNQUFqQixDQUF3QixXQUF4QixDQUE1RDtFQUNBbEIsUUFBQUEsWUFBWSxDQUFDZ0IsSUFBYixDQUFrQkosS0FBbEIsSUFDTVYsZ0JBQWdCLENBQUNlLEdBQWpCLENBQXFCLGNBQXJCLENBRE4sR0FFTWYsZ0JBQWdCLENBQUNnQixNQUFqQixDQUF3QixjQUF4QixDQUZOO0VBR0FqQixRQUFBQSxZQUFZLENBQUNlLElBQWIsQ0FBa0JKLEtBQWxCLElBQ01WLGdCQUFnQixDQUFDZSxHQUFqQixDQUFxQixjQUFyQixDQUROLEdBRU1mLGdCQUFnQixDQUFDZ0IsTUFBakIsQ0FBd0IsY0FBeEIsQ0FGTjtFQUlBVixRQUFBQSxlQUFlLENBQUNOLGdCQUFnQixDQUFDaUIsSUFBbEIsQ0FBZjtFQUNIOztFQUVEeEIsTUFBQUEsYUFBYSxDQUFDeUIsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0NQLGlCQUF4QztFQUNILEtBNUNTLEVBNENQLEdBNUNPLENBQVY7RUE2Q0g7O0VBRUQ5QyxFQUFBQSxPQUFPLENBQUMsTUFBTWMsU0FBUCxFQUFrQlksWUFBbEIsRUFBZ0NyQixRQUFoQyxDQUFQO0VBQ0EsU0FDSWlEO0VBQUssSUFBQSxTQUFTLEVBQUM7RUFBZixLQUNLLENBQUMsR0FBR0MsS0FBSyxDQUFDOUIsU0FBRCxDQUFULEVBQXNCK0IsR0FBdEIsQ0FBMEJDLEtBQUssSUFDNUJIO0VBQUssSUFBQSxTQUFTLEVBQUMsMkJBQWY7RUFBMkMsSUFBQSxHQUFHLEVBQUVHO0VBQWhELElBREgsQ0FETCxFQUlJSDtFQUFNLElBQUEsU0FBUyxFQUFDO0VBQWhCLElBSkosQ0FESjtFQVFIOzs7Ozs7OzsifQ==

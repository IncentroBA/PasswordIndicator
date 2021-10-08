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

import { createElement } from 'react';

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
  return createElement("div", {
    className: "password-indicator"
  }, [...Array(maxLevels)].map(index => createElement("div", {
    className: "password-indicator__level",
    key: index
  })), createElement("span", {
    className: "mx-text password-indicator__text"
  }));
}

export { PasswordIndicator as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFzc3dvcmRJbmRpY2F0b3IubWpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaGVscGVycy93YWl0Rm9yLmpzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL1Bhc3N3b3JkSW5kaWNhdG9yLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gd2FpdEZvcihlbGVtZW50Q2xhc3MsIGNhbGxiYWNrLCBwYXJlbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gcGFyZW50IHx8IGRvY3VtZW50O1xuXG4gICAgaWYgKGNvbnRleHQucXVlcnlTZWxlY3RvcihlbGVtZW50Q2xhc3MpKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5xdWVyeVNlbGVjdG9yKGVsZW1lbnRDbGFzcykpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU3RhcnQgb2JzZXJ2aW5nXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoY29udGV4dCwge1xuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLCAvL1RoaXMgaXMgYSBtdXN0IGhhdmUgZm9yIHRoZSBvYnNlcnZlciB3aXRoIHN1YnRyZWVcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWUgLy9TZXQgdG8gdHJ1ZSBpZiBjaGFuZ2VzIG11c3QgYWxzbyBiZSBvYnNlcnZlZCBpbiBkZXNjZW5kYW50cy5cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5pbXBvcnQgXCIuL3VpL1Bhc3N3b3JkSW5kaWNhdG9yLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2FpdEZvciB9IGZyb20gXCIuL2hlbHBlcnMvd2FpdEZvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXNzd29yZEluZGljYXRvcih7XG4gICAgY2xhc3NOYW1lLFxuICAgIGNvbnRhaW5EaWdpdCxcbiAgICBjb250YWluTG93ZXJjYXNlLFxuICAgIGNvbnRhaW5VcHBlcmNhc2UsXG4gICAgY29udGFpbk1pbmltYWxDaGFycyxcbiAgICBjb250YWluU3BlY2lhbENoYXJzLFxuICAgIGx2bDFUeHQsXG4gICAgbHZsMlR4dCxcbiAgICBsdmwzVHh0LFxuICAgIGx2bDRUeHQsXG4gICAgbHZsNVR4dFxufSkge1xuICAgIGxldCBtYXhMZXZlbHMgPSAwO1xuXG4gICAgaWYgKGNvbnRhaW5EaWdpdCA9PT0gdHJ1ZSkge1xuICAgICAgICBtYXhMZXZlbHMgKz0gMTtcbiAgICB9XG4gICAgaWYgKGNvbnRhaW5Mb3dlcmNhc2UgPT09IHRydWUpIHtcbiAgICAgICAgbWF4TGV2ZWxzICs9IDE7XG4gICAgfVxuICAgIGlmIChjb250YWluVXBwZXJjYXNlID09PSB0cnVlKSB7XG4gICAgICAgIG1heExldmVscyArPSAxO1xuICAgIH1cbiAgICBpZiAoY29udGFpbk1pbmltYWxDaGFycyA9PT0gdHJ1ZSkge1xuICAgICAgICBtYXhMZXZlbHMgKz0gMTtcbiAgICB9XG4gICAgaWYgKGNvbnRhaW5TcGVjaWFsQ2hhcnMgPT09IHRydWUpIHtcbiAgICAgICAgbWF4TGV2ZWxzICs9IDE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkSW5kaWNhdG9yKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGRpZ2l0ID0gbmV3IFJlZ0V4cChcIl4oPz0uKlswLTldKS57MSx9JFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGxvd2VyY2FzZSA9IG5ldyBSZWdFeHAoXCJeKD89LipbYS16XSkuezEsfSRcIik7XG4gICAgICAgICAgICBjb25zdCB1cHBlcmNhc2UgPSBuZXcgUmVnRXhwKFwiXig/PS4qW0EtWl0pLnsxLH0kXCIpO1xuICAgICAgICAgICAgY29uc3QgbWluaW1hbENoYXJzID0gbmV3IFJlZ0V4cChcIl4oPz0uKlthLXpBLVpdKS57OCx9JFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHNwZWNpYWxDaGFycyA9IG5ldyBSZWdFeHAoXCJeKD89LipbIUAjJCVeJipdKS57MSx9JFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkU3RyZW5ndGggPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGZlZWRiYWNrVHh0KHRleHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmZWVkYmFja1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3N3b3JkLWluZGljYXRvcl9fdGV4dFwiKTtcbiAgICAgICAgICAgICAgICBmZWVkYmFja1RleHQuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlSW5kaWNhdG9yKGxldmVsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXNzd29yZC1pbmRpY2F0b3JcIik7XG4gICAgICAgICAgICAgICAgaW5kaWNhdG9yLmRhdGFzZXQubGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgICAgICAgICBpZiAobWF4TGV2ZWxzID09PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsID09PSAwICYmIGZlZWRiYWNrVHh0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbCA9PT0gMSAmJiBmZWVkYmFja1R4dChsdmwxVHh0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPT09IDIgJiYgZmVlZGJhY2tUeHQobHZsMlR4dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsID09PSAzICYmIGZlZWRiYWNrVHh0KGx2bDNUeHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBsZXZlbCA9PT0gNCAmJiBmZWVkYmFja1R4dChsdmw0VHh0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwgPT09IDUgJiYgZmVlZGJhY2tUeHQobHZsNVR4dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZShldmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgZGlnaXQudGVzdCh2YWx1ZSkgPyBwYXNzd29yZFN0cmVuZ3RoLmFkZChcImRpZ2l0XCIpIDogcGFzc3dvcmRTdHJlbmd0aC5kZWxldGUoXCJkaWdpdFwiKTtcbiAgICAgICAgICAgICAgICBsb3dlcmNhc2UudGVzdCh2YWx1ZSkgPyBwYXNzd29yZFN0cmVuZ3RoLmFkZChcImxvd2VyY2FzZVwiKSA6IHBhc3N3b3JkU3RyZW5ndGguZGVsZXRlKFwibG93ZXJjYXNlXCIpO1xuICAgICAgICAgICAgICAgIHVwcGVyY2FzZS50ZXN0KHZhbHVlKSA/IHBhc3N3b3JkU3RyZW5ndGguYWRkKFwidXBwZXJjYXNlXCIpIDogcGFzc3dvcmRTdHJlbmd0aC5kZWxldGUoXCJ1cHBlcmNhc2VcIik7XG4gICAgICAgICAgICAgICAgbWluaW1hbENoYXJzLnRlc3QodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgID8gcGFzc3dvcmRTdHJlbmd0aC5hZGQoXCJtaW5pbWFsQ2hhcnNcIilcbiAgICAgICAgICAgICAgICAgICAgOiBwYXNzd29yZFN0cmVuZ3RoLmRlbGV0ZShcIm1pbmltYWxDaGFyc1wiKTtcbiAgICAgICAgICAgICAgICBzcGVjaWFsQ2hhcnMudGVzdCh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgPyBwYXNzd29yZFN0cmVuZ3RoLmFkZChcInNwZWNpYWxDaGFyc1wiKVxuICAgICAgICAgICAgICAgICAgICA6IHBhc3N3b3JkU3RyZW5ndGguZGVsZXRlKFwic3BlY2lhbENoYXJzXCIpO1xuXG4gICAgICAgICAgICAgICAgdXBkYXRlSW5kaWNhdG9yKHBhc3N3b3JkU3RyZW5ndGguc2l6ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhc3N3b3JkRmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGhhbmRsZUlucHV0Q2hhbmdlKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9XG5cbiAgICB3YWl0Rm9yKFwiLlwiICsgY2xhc3NOYW1lLCBhZGRJbmRpY2F0b3IsIGRvY3VtZW50KTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhc3N3b3JkLWluZGljYXRvclwiPlxuICAgICAgICAgICAge1suLi5BcnJheShtYXhMZXZlbHMpXS5tYXAoaW5kZXggPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFzc3dvcmQtaW5kaWNhdG9yX19sZXZlbFwiIGtleT17aW5kZXh9PjwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC10ZXh0IHBhc3N3b3JkLWluZGljYXRvcl9fdGV4dFwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ3YWl0Rm9yIiwiZWxlbWVudENsYXNzIiwiY2FsbGJhY2siLCJwYXJlbnQiLCJjb250ZXh0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiUGFzc3dvcmRJbmRpY2F0b3IiLCJjbGFzc05hbWUiLCJjb250YWluRGlnaXQiLCJjb250YWluTG93ZXJjYXNlIiwiY29udGFpblVwcGVyY2FzZSIsImNvbnRhaW5NaW5pbWFsQ2hhcnMiLCJjb250YWluU3BlY2lhbENoYXJzIiwibHZsMVR4dCIsImx2bDJUeHQiLCJsdmwzVHh0IiwibHZsNFR4dCIsImx2bDVUeHQiLCJtYXhMZXZlbHMiLCJhZGRJbmRpY2F0b3IiLCJzZXRUaW1lb3V0IiwicGFzc3dvcmRGaWVsZCIsImRpZ2l0IiwiUmVnRXhwIiwibG93ZXJjYXNlIiwidXBwZXJjYXNlIiwibWluaW1hbENoYXJzIiwic3BlY2lhbENoYXJzIiwicGFzc3dvcmRTdHJlbmd0aCIsIlNldCIsImZlZWRiYWNrVHh0IiwidGV4dCIsImZlZWRiYWNrVGV4dCIsImlubmVySFRNTCIsInVwZGF0ZUluZGljYXRvciIsImxldmVsIiwiaW5kaWNhdG9yIiwiZGF0YXNldCIsInZhbHVlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInRlc3QiLCJhZGQiLCJkZWxldGUiLCJzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkFycmF5IiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPLFNBQVNBLE9BQVQsQ0FBaUJDLFlBQWpCLEVBQStCQyxRQUEvQixFQUF5Q0MsTUFBekMsRUFBaUQ7QUFDcEQsUUFBTUMsT0FBTyxHQUFHRCxNQUFNLElBQUlFLFFBQTFCOztBQUVBLE1BQUlELE9BQU8sQ0FBQ0UsYUFBUixDQUFzQkwsWUFBdEIsQ0FBSixFQUF5QztBQUNyQ0MsSUFBQUEsUUFBUTtBQUNYLEdBRkQsTUFFTztBQUNILFVBQU1LLFFBQVEsR0FBRyxJQUFJQyxnQkFBSixDQUFxQixNQUFNO0FBQ3hDLFVBQUlKLE9BQU8sQ0FBQ0UsYUFBUixDQUFzQkwsWUFBdEIsQ0FBSixFQUF5QztBQUNyQ00sUUFBQUEsUUFBUSxDQUFDRSxVQUFUO0FBQ0FQLFFBQUFBLFFBQVE7QUFDWDtBQUNKLEtBTGdCLENBQWpCLENBREc7O0FBU0hLLElBQUFBLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQk4sT0FBakIsRUFBMEI7QUFDdEJPLE1BQUFBLFNBQVMsRUFBRSxJQURXO0FBQ0w7QUFDakJDLE1BQUFBLE9BQU8sRUFBRSxJQUZhOztBQUFBLEtBQTFCO0FBSUg7QUFDSjs7QUNuQkQ7QUFLZSxTQUFTQyxpQkFBVCxDQUEyQjtBQUN0Q0MsRUFBQUEsU0FEc0M7QUFFdENDLEVBQUFBLFlBRnNDO0FBR3RDQyxFQUFBQSxnQkFIc0M7QUFJdENDLEVBQUFBLGdCQUpzQztBQUt0Q0MsRUFBQUEsbUJBTHNDO0FBTXRDQyxFQUFBQSxtQkFOc0M7QUFPdENDLEVBQUFBLE9BUHNDO0FBUXRDQyxFQUFBQSxPQVJzQztBQVN0Q0MsRUFBQUEsT0FUc0M7QUFVdENDLEVBQUFBLE9BVnNDO0FBV3RDQyxFQUFBQTtBQVhzQyxDQUEzQixFQVlaO0FBQ0MsTUFBSUMsU0FBUyxHQUFHLENBQWhCOztBQUVBLE1BQUlWLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUN2QlUsSUFBQUEsU0FBUyxJQUFJLENBQWI7QUFDSDs7QUFDRCxNQUFJVCxnQkFBZ0IsS0FBSyxJQUF6QixFQUErQjtBQUMzQlMsSUFBQUEsU0FBUyxJQUFJLENBQWI7QUFDSDs7QUFDRCxNQUFJUixnQkFBZ0IsS0FBSyxJQUF6QixFQUErQjtBQUMzQlEsSUFBQUEsU0FBUyxJQUFJLENBQWI7QUFDSDs7QUFDRCxNQUFJUCxtQkFBbUIsS0FBSyxJQUE1QixFQUFrQztBQUM5Qk8sSUFBQUEsU0FBUyxJQUFJLENBQWI7QUFDSDs7QUFDRCxNQUFJTixtQkFBbUIsS0FBSyxJQUE1QixFQUFrQztBQUM5Qk0sSUFBQUEsU0FBUyxJQUFJLENBQWI7QUFDSDs7QUFFRCxXQUFTQyxZQUFULEdBQXdCO0FBQ3BCQyxJQUFBQSxVQUFVLENBQUMsTUFBTTtBQUNiLFlBQU1DLGFBQWEsR0FBR3ZCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUFNUSxTQUE3QixDQUF0QjtBQUNBLFlBQU1lLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVcsb0JBQVgsQ0FBZDtBQUNBLFlBQU1DLFNBQVMsR0FBRyxJQUFJRCxNQUFKLENBQVcsb0JBQVgsQ0FBbEI7QUFDQSxZQUFNRSxTQUFTLEdBQUcsSUFBSUYsTUFBSixDQUFXLG9CQUFYLENBQWxCO0FBQ0EsWUFBTUcsWUFBWSxHQUFHLElBQUlILE1BQUosQ0FBVyx1QkFBWCxDQUFyQjtBQUNBLFlBQU1JLFlBQVksR0FBRyxJQUFJSixNQUFKLENBQVcseUJBQVgsQ0FBckI7QUFDQSxZQUFNSyxnQkFBZ0IsR0FBRyxJQUFJQyxHQUFKLEVBQXpCOztBQUVBLGVBQVNDLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTJCO0FBQ3ZCLGNBQU1DLFlBQVksR0FBR2xDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QiwyQkFBdkIsQ0FBckI7QUFDQWlDLFFBQUFBLFlBQVksQ0FBQ0MsU0FBYixHQUF5QkYsSUFBekI7QUFDSDs7QUFFRCxlQUFTRyxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM1QixjQUFNQyxTQUFTLEdBQUd0QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQWxCO0FBQ0FxQyxRQUFBQSxTQUFTLENBQUNDLE9BQVYsQ0FBa0JGLEtBQWxCLEdBQTBCQSxLQUExQjs7QUFDQSxZQUFJakIsU0FBUyxLQUFLLENBQWxCLEVBQXFCO0FBQ2pCaUIsVUFBQUEsS0FBSyxLQUFLLENBQVYsSUFBZUwsV0FBVyxDQUFDLEVBQUQsQ0FBMUI7QUFDQUssVUFBQUEsS0FBSyxLQUFLLENBQVYsSUFBZUwsV0FBVyxDQUFDakIsT0FBTyxDQUFDeUIsS0FBVCxDQUExQjtBQUNBSCxVQUFBQSxLQUFLLEtBQUssQ0FBVixJQUFlTCxXQUFXLENBQUNoQixPQUFPLENBQUN3QixLQUFULENBQTFCO0FBQ0FILFVBQUFBLEtBQUssS0FBSyxDQUFWLElBQWVMLFdBQVcsQ0FBQ2YsT0FBTyxDQUFDdUIsS0FBVCxDQUExQjtBQUNBSCxVQUFBQSxLQUFLLEtBQUssQ0FBVixJQUFlTCxXQUFXLENBQUNkLE9BQU8sQ0FBQ3NCLEtBQVQsQ0FBMUI7QUFDQUgsVUFBQUEsS0FBSyxLQUFLLENBQVYsSUFBZUwsV0FBVyxDQUFDYixPQUFPLENBQUNxQixLQUFULENBQTFCO0FBQ0g7QUFDSjs7QUFFRCxlQUFTQyxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFDOUIsY0FBTUYsS0FBSyxHQUFHRSxLQUFLLENBQUNDLE1BQU4sQ0FBYUgsS0FBM0I7QUFFQWhCLFFBQUFBLEtBQUssQ0FBQ29CLElBQU4sQ0FBV0osS0FBWCxJQUFvQlYsZ0JBQWdCLENBQUNlLEdBQWpCLENBQXFCLE9BQXJCLENBQXBCLEdBQW9EZixnQkFBZ0IsQ0FBQ2dCLE1BQWpCLENBQXdCLE9BQXhCLENBQXBEO0FBQ0FwQixRQUFBQSxTQUFTLENBQUNrQixJQUFWLENBQWVKLEtBQWYsSUFBd0JWLGdCQUFnQixDQUFDZSxHQUFqQixDQUFxQixXQUFyQixDQUF4QixHQUE0RGYsZ0JBQWdCLENBQUNnQixNQUFqQixDQUF3QixXQUF4QixDQUE1RDtBQUNBbkIsUUFBQUEsU0FBUyxDQUFDaUIsSUFBVixDQUFlSixLQUFmLElBQXdCVixnQkFBZ0IsQ0FBQ2UsR0FBakIsQ0FBcUIsV0FBckIsQ0FBeEIsR0FBNERmLGdCQUFnQixDQUFDZ0IsTUFBakIsQ0FBd0IsV0FBeEIsQ0FBNUQ7QUFDQWxCLFFBQUFBLFlBQVksQ0FBQ2dCLElBQWIsQ0FBa0JKLEtBQWxCLElBQ01WLGdCQUFnQixDQUFDZSxHQUFqQixDQUFxQixjQUFyQixDQUROLEdBRU1mLGdCQUFnQixDQUFDZ0IsTUFBakIsQ0FBd0IsY0FBeEIsQ0FGTjtBQUdBakIsUUFBQUEsWUFBWSxDQUFDZSxJQUFiLENBQWtCSixLQUFsQixJQUNNVixnQkFBZ0IsQ0FBQ2UsR0FBakIsQ0FBcUIsY0FBckIsQ0FETixHQUVNZixnQkFBZ0IsQ0FBQ2dCLE1BQWpCLENBQXdCLGNBQXhCLENBRk47QUFJQVYsUUFBQUEsZUFBZSxDQUFDTixnQkFBZ0IsQ0FBQ2lCLElBQWxCLENBQWY7QUFDSDs7QUFFRHhCLE1BQUFBLGFBQWEsQ0FBQ3lCLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDUCxpQkFBeEM7QUFDSCxLQTVDUyxFQTRDUCxHQTVDTyxDQUFWO0FBNkNIOztBQUVEOUMsRUFBQUEsT0FBTyxDQUFDLE1BQU1jLFNBQVAsRUFBa0JZLFlBQWxCLEVBQWdDckIsUUFBaEMsQ0FBUDtBQUNBLFNBQ0k7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0ssQ0FBQyxHQUFHaUQsS0FBSyxDQUFDN0IsU0FBRCxDQUFULEVBQXNCOEIsR0FBdEIsQ0FBMEJDLEtBQUssSUFDNUI7QUFBSyxJQUFBLFNBQVMsRUFBQywyQkFBZjtBQUEyQyxJQUFBLEdBQUcsRUFBRUE7QUFBaEQsSUFESCxDQURMLEVBSUk7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQixJQUpKLENBREo7QUFRSDs7OzsifQ==

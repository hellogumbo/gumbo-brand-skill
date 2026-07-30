export async function auditGumboPage(page) {
  return page.evaluate(() => {
    const issues = [];
    const allowedAcronyms = new Set([
      "AI", "API", "CMS", "CSS", "HTML", "MCP", "PDF", "QA", "SOW", "UI", "URL", "UX",
    ]);
    const textSelector = [
      "h1", "h2", "h3", "h4", "h5", "h6", "p", "li", "button",
      ".overline", ".card__number", "footer span",
    ].join(",");

    function visible(element) {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== "none"
        && style.visibility !== "hidden"
        && Number(style.opacity) !== 0
        && rect.width > 0
        && rect.height > 0;
    }

    function label(element) {
      const text = element.textContent?.replace(/\s+/g, " ").trim() || "";
      return `${element.tagName.toLowerCase()}${element.className ? `.${String(element.className).trim().replace(/\s+/g, ".")}` : ""}${text ? ` “${text.slice(0, 80)}”` : ""}`;
    }

    const textElements = [...document.querySelectorAll(textSelector)].filter(visible);

    for (const element of textElements) {
      const text = element.textContent?.replace(/\s+/g, " ").trim() || "";
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      const pageElement = element.closest(".page");

      if (/^\s*\/\//.test(text) || /\s\/\/\s/.test(text)) {
        issues.push(`decorative slash label: ${label(element)}`);
      }

      const letters = text.replace(/[^A-Za-z]/g, "");
      if (
        letters.length >= 2
        && text === text.toUpperCase()
        && text !== text.toLowerCase()
        && !allowedAcronyms.has(text)
      ) {
        issues.push(`all-caps text: ${label(element)}`);
      }

      if (style.textTransform === "uppercase") {
        issues.push(`CSS uppercase transform: ${label(element)}`);
      }

      const letterSpacing = Number.parseFloat(style.letterSpacing);
      if (Number.isFinite(letterSpacing) && Math.abs(letterSpacing) > 0.1) {
        issues.push(`non-zero letter spacing (${style.letterSpacing}): ${label(element)}`);
      }

      const lineHeight = Number.parseFloat(style.lineHeight);
      const fontSize = Number.parseFloat(style.fontSize);
      if (Number.isFinite(lineHeight) && Number.isFinite(fontSize) && fontSize > 0) {
        const ratio = lineHeight / fontSize;
        const minimum = /^H[1-6]$/.test(element.tagName) ? 1.08 : 1.35;
        if (ratio + 0.005 < minimum) {
          issues.push(`crowded line height (${ratio.toFixed(2)}, minimum ${minimum}): ${label(element)}`);
        }
        if (/^H[1-6]$/.test(element.tagName)) {
          const lineCount = Math.round(rect.height / lineHeight);
          if (lineCount > 3) {
            issues.push(`heading wraps to ${lineCount} lines (maximum 3): ${label(element)}`);
          }
        }
      }

      const clipsOverflow = ["auto", "clip", "hidden", "scroll"].includes(style.overflowX)
        || ["auto", "clip", "hidden", "scroll"].includes(style.overflowY);
      if (
        clipsOverflow
        && (element.scrollWidth > element.clientWidth + 2 || element.scrollHeight > element.clientHeight + 2)
      ) {
        issues.push(`clipped text container (${element.scrollWidth}×${element.scrollHeight} inside ${element.clientWidth}×${element.clientHeight}): ${label(element)}`);
      }

      if (pageElement) {
        const pageRect = pageElement.getBoundingClientRect();
        if (
          rect.left < pageRect.left - 1
          || rect.top < pageRect.top - 1
          || rect.right > pageRect.right + 1
          || rect.bottom > pageRect.bottom + 1
        ) {
          issues.push(`text outside fixed canvas: ${label(element)}`);
        }
      }
    }

    for (let firstIndex = 0; firstIndex < textElements.length; firstIndex += 1) {
      const first = textElements[firstIndex];
      const firstRect = first.getBoundingClientRect();
      for (let secondIndex = firstIndex + 1; secondIndex < textElements.length; secondIndex += 1) {
        const second = textElements[secondIndex];
        if (first.contains(second) || second.contains(first)) continue;
        if (first.closest(".page") !== second.closest(".page")) continue;
        const secondRect = second.getBoundingClientRect();
        const overlapWidth = Math.min(firstRect.right, secondRect.right) - Math.max(firstRect.left, secondRect.left);
        const overlapHeight = Math.min(firstRect.bottom, secondRect.bottom) - Math.max(firstRect.top, secondRect.top);
        if (overlapWidth > 2 && overlapHeight > 2) {
          issues.push(`overlapping text: ${label(first)} ↔ ${label(second)}`);
        }
      }
    }

    for (const image of [...document.images].filter(visible)) {
      if (!image.complete || image.naturalWidth === 0) {
        issues.push(`missing image: ${image.getAttribute("src")?.slice(0, 100) || "(empty src)"}`);
      }
    }

    return [...new Set(issues)];
  });
}

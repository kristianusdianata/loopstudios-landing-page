export function setCreationItemText() {
  const listItems = document.querySelectorAll(`.creations__caption-text`);

  for (const item of listItems) {
    const text = item.textContent;
    const listText = text.trim().split(/\s+/);

    if (listText.length <= 2) {
      const line1 = listText[0] ?? "";
      const line2 = listText[1] ?? "";
      item.innerHTML = `${line1}<br>${line2}`;
    }

    if (listText.length === 3) {
      const line1 = listText.slice(0, 2).join(" ");
      const line2 = listText.slice(2).join(" ");

      if (line1.length > line2.length) {
        const newLine1 = listText.slice(0, 1).join(" ");
        const newLine2 = listText.slice(1).join(" ");
        item.innerHTML = `${newLine1}<br>${newLine2}`;
      } else {
        item.innerHTML = `${line1}<br>${line2}`;
      }
    }

    if (listText.length === 4) {
      const line1 = listText.slice(0, 2).join(" ");
      const line2 = listText.slice(2).join(" ");

      item.innerHTML = `${line1}<br>${line2}`;
    }
  }
}

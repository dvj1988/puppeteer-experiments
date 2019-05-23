const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1500, height: 768 });

  await page.goto("", { waitUntil: "networkidle2" });

  const buttonClasses = await page.evaluate(() => {
    return [...document.querySelectorAll("button")].find(
      b => b.innerText.toLowerCase().indexOf("cart") !== -1
    ).classList.value;
  });

  await page.click(`.${buttonClasses.split(" ").join(".")}`);
})();

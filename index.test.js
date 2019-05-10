it('should contain the text "Hello, world"', async () => {
  await page.goto('http://localhost:3000');
  await expect(page).toMatch('Hello, world')
});

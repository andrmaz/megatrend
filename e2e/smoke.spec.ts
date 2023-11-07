import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Home Page/);
  await expect(page.getByRole('heading', { name: 'Megatrend' })).toBeVisible();
});

test('has link', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Trending Stocks' })).toBeVisible();
  await page.getByRole('link', { name: 'Late Filings' }).click();
  await expect(page.getByRole('heading', { name: 'Late Filings' })).toBeVisible();
});

import { test, expect } from '@playwright/test';

test('To-Do List Test @smoke', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await  expect(page.locator('h1')).toBeVisible();
  await page.getByTestId('text-input').fill('Do Homework');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Complete Assignment');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Practice Aptitude');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Buy Groceries');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Prepare PPt');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Practice Aptitude' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'Complete Assignment' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
});
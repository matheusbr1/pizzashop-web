import { expect, test } from '@playwright/test';

test('update profile sucessfuly', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle'
  })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.locator('input[name="name"]').fill('Rocket Pizza')
  await page.getByLabel('Descrição').fill('Another Description')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso!')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await page.waitForTimeout(1000)

  expect(page.getByRole('button', { name: 'Rocket Pizza' })).toBeVisible()

  await page.waitForTimeout(1000)
})
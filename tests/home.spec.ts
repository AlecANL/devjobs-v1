import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173'

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LOCALHOST_URL)
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('has title', async ({ page }) => {
    const title = await page.getByRole('link', { name: /Devjobs/ }).textContent()
    expect(title).toBeTruthy()
  })

  test('Has show devJobs title', async ({ page }) => {
    const title = await page.getByRole('link', { name: /Devjobs/ }).textContent()
    expect(title).toContain('Devjobs')
  })

  test('Has show devJobs cards length', async ({ page }) => {
    await page.waitForFunction(() => {
      return document.querySelectorAll('li').length > 0
    })
    const cards = await page.$$('li')
    expect(cards.length).toBe(15)
  })

  test('Show only one card job', async ({ page }) => {
    const input = page.getByTestId('title')
    await input.fill('Frontend')
    const cards = await page.$$('li')
    expect(cards.length).toBe(1)
  })

  test('Show 9 card jobs fullTime', async ({ page }) => {
    const checkbox = page.getByTestId('fullTime')
    await checkbox.check()
    const cards = await page.$$('li')
    expect(cards.length).toBe(7)
  })

  test('Show 2 card jobs select value', async ({ page }) => {
    const select = page.getByTestId('location')
    await select.selectOption({ label: 'New Zealand' })
    const cards = await page.$$('li')
    expect(cards.length).toBe(2)
  })
})

test.describe('Test mobile', () => {
  test.use({ viewport: { width: 320, height: 480 } })

  test.beforeEach(async ({ page }) => {
    await page.goto(LOCALHOST_URL)
  })

  test.afterEach(async ({ page }) => {
    await page.close()
  })

  test('Show modal', async ({ page }) => {
    const button = page.getByTestId('modal-filters')
    await button.click()

    const modal = page.getByTestId('form-modal-filters')
    expect(modal).toBeTruthy()
  })

  test('Show 9 card jobs fullTime mobile', async ({ page }) => {
    const button = page.getByTestId('modal-filters')
    await button.click()

    await page.waitForFunction(() => {
      return document.querySelector('form')
    })

    const divCheck = await page.$('.full-time-mobile')
    const checkbox = await divCheck?.$('label')
    await checkbox?.check()
    const cards = await page.$$('li')
    expect(cards.length).toBe(7)
  })

  test('Show 2 card jobs select value mobile', async ({ page }) => {
    const button = page.getByTestId('modal-filters')
    await button.click()

    await page.waitForFunction(() => {
      return document.querySelector('form')
    })

    const divSelect = await page.$('.location-mobile')
    const select = await divSelect?.$('select')
    await select?.selectOption({ label: 'New Zealand' })
    const cards = await page.$$('li')
    expect(cards.length).toBe(2)
  })
})

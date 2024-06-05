import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { IconButton } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('IconButton', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a icon button element', () => {
    render(<IconButton ariaLabel="test button">it works</IconButton>)
    expect(screen.getByText(/it works/i)).toBeTruthy()
    expect(screen.getByLabelText(/test button/i)).toBeTruthy()
  })

  test('should render a action icon button', () => {
    render(<IconButton ariaLabel="test button">it works</IconButton>)
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-icon-btn--palette_action'),
    ).toBeTrue()
  })

  test('should render a danger icon button', () => {
    render(
      <IconButton ariaLabel="test button" palette="danger">
        it works
      </IconButton>,
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-icon-btn--palette_danger'),
    ).toBeTrue()
  })

  test('should render a text icon button', () => {
    render(
      <IconButton ariaLabel="test button" usage="text">
        it works
      </IconButton>,
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-icon-btn--usage_text'),
    ).toBeTrue()
  })

  test('should render a filled icon button', () => {
    render(
      <IconButton ariaLabel="test button" usage="filled">
        it works
      </IconButton>,
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-icon-btn--usage_filled'),
    ).toBeTrue()
  })

  test('should render a circle icon button', () => {
    render(
      <IconButton ariaLabel="test button" shape="circle">
        it works
      </IconButton>,
    )
    expect(
      screen
        .getByText(/it works/i)
        .classList.contains('cerberus-icon-btn--shape_circle'),
    ).toBeTrue()
  })
})

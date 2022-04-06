import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('Check that SignUp is present on the dom', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Signup/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('Check that Thank slider item 2 exist... is present on the dom', () => {
    render(<Home />)

    const heading = screen.getByRole('button', {
      name: /slide item 2/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

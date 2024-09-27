import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FAQ from "../components/main/resources/faq";
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<FAQ />)
    const textExists = screen.getByText("Q: Who can join GDSC?")
    expect(textExists).toBeInTheDocument()
  })
})
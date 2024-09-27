import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FAQ from "../../components/main/resources/faq";
 
describe('FAQ component', () => {
  it('renders the FAQ component and checks if all the questions exist', () => {
    render(<FAQ />)
    const textExists = screen.getByText("Q: Who can join GDSC?")
    expect(textExists).toBeInTheDocument()
  })
})
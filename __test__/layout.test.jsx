import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
//import { prettyDOM } from '@testing-library/react'
import Layout from '../components/layout'

test('renders name in layout', () => {
    const element = render(<Layout />).container
    //screen.getByText('Josema Sarrión')
    // eslint-disable-next-line testing-library/no-node-access
    const h2 = element.querySelector('h2')
    //console.log(prettyDOM(h2))
    expect(element).toHaveTextContent('Josema Sarrión')
})

test('renders profile picture', () => {
    render(<Layout />).container
    const profilePicture = screen.getByRole('img')
    expect(profilePicture).toBeInTheDocument()
})

test('back to home button renders', () => {
    render(<Layout />).container
    const button = screen.getByRole('backToHome')
    expect(button).toBeInTheDocument()
})

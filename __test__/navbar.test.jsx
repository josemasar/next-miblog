import { render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar'

test('NavBar renders', () => {
    render(<Navbar />)
    screen.getByText('Images')
})

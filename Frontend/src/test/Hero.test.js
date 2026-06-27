

import '@testing-library/jest-dom/extend-expect'


describe('Hero Component', () => {

    test('renders hero image', () => {
        render(<Hero/>)
        const heroImage = screen.getByAltText('Hero Image');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', './media/images/homeHero.png')
    })
})
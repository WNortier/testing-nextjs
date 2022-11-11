import { render, screen } from "@testing-library/react";
import { UserReservations } from '@/components/user/UserReservations';

test('reservation page shows correct number of available seats', async () => {
    render(<UserReservations userId={1} />)
    const buttonText = await screen.findByRole("button", { name: /purchase more tickets/i })
    expect(buttonText).toBeInTheDocument()
})

test('reservation page shows correct number of available seats', async () => {
    render(<UserReservations userId={0} />)
    const buttonText = await screen.findByRole("button", { name: /purchase tickets/i })
    expect(buttonText).toBeInTheDocument()
    const yourTicketsHeading = screen.queryByRole("heading", { name: /your tickets/i })
    expect(yourTicketsHeading).not.toBeInTheDocument()
})

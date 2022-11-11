import { render, screen } from "@testing-library/react";

import { readFakeData } from '../__mocks__/fakeData';
import BandComponent from '@/pages/bands/[bandId]'

test("band component displays correct band information", async () => {
    const { fakeBands } = await readFakeData()
    render(<BandComponent band={fakeBands[0]} error={null} />)

    const heading = screen.getByRole("heading", {
        name: /the wandering bunnies/i
    })
    expect(heading).toBeInTheDocument()
})

test("band component displays error", () => {
    render(<BandComponent band={null} error="An error occured" />)
    const error = screen.getByRole("heading", { name: /an error occured/i })
    expect(error).toBeInTheDocument()
})

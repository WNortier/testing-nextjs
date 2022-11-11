import { rest } from 'msw'
import { readFakeData } from '../fakeData'
import { fakeUserReservations } from '../fakeData/userReservations'

export const handlers = [
    rest.get('http://localhost:3000/api/shows/:showId', async (req, res, ctx) => {
        const { fakeShows } = await readFakeData()
        const { showId } = req.params
        //showId 0 has seats available in fake data
        //showId 1 has NO seats available
        return res(ctx.json({ show: fakeShows[+showId] }))
    }),
    rest.get('http://localhost:3000/api/users/:userId/reservations', async (req, res, ctx) => {
        const { userId } = req.params
        if (+userId === 0) return res(ctx.json({ userReservations: [] }))
        else return res(ctx.json({ userReservations: fakeUserReservations }))
    })
]

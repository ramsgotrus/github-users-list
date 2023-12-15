import React from 'react'
import { screen, render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import fetchMock from "jest-fetch-mock"
import { Users } from '../../Home/index'
import { USERS, navigator } from '../../../data/data'

const UsersPage = (users = {}) => {
    return (
        <Router location={{}} navigator={navigator}>
            <Users />
        </Router>
    )
}

describe('Users Component', () => {
    beforeEach(() => {
        fetchMock.resetMocks()
    })

    test('Should component render without error', async () => {
        fetchMock.resetMocks()
        render(UsersPage())
        expect(await screen.findByText('Github Users')).toBeInTheDocument()
    })

    test('Should component render with users list', async () => {
        fetchMock.mockResponse(JSON.stringify(USERS))
        render(UsersPage())
        for (let i = 0; i < USERS.length; i++) {
            const name = USERS[i].login.charAt(0).toUpperCase() + USERS[i].login.slice(0)
            const mockedUser = await screen.findByText(name);
            expect(mockedUser).toBeInTheDocument();
        }

    })

})
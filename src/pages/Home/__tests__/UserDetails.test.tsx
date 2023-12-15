import { render, screen } from '@testing-library/react'
import React, { useDebugValue } from 'react'
import { Router } from 'react-router-dom'
import fetchMock from "jest-fetch-mock"
import { USERS, ORGANIZATIONS, FOLLOWERS, navigator } from '../../../data/data'
import { UserDetails } from '../index'


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: 'mojombo',
    }),
}))

const UserDetailPage = (users = {}) => {
    return (
        <Router location={{}} navigator={navigator}>
            <UserDetails />
        </Router>
    )
}


describe('User Details Component', () => {
    beforeEach(() => {
        fetchMock.resetMocks()
    })

    test('Should render component without error', async () => {
        render(UserDetailPage())
        expect(await screen.findByText('User Details')).toBeInTheDocument()
    })

    test('Should render component with Loading', async () => {
        render(UserDetailPage())
        expect(await screen.findByText('Loading...')).toBeInTheDocument()
    })
    test('Should render component with users list', async () => {
        render(UserDetailPage())
        fetchMock.mockResponse(JSON.stringify(USERS))
        fetchMock.mockResponse(JSON.stringify(ORGANIZATIONS))
        fetchMock.mockResponse(JSON.stringify(FOLLOWERS))
        const name = USERS[0].login.charAt(0).toUpperCase() + USERS[0].login.slice(0)
        const orgName = ORGANIZATIONS[0].login
        const mockedUserName = await screen.findAllByText(name);
        expect(mockedUserName).toHaveLength(5)
       expect(orgName).toMatch(orgName)
    })


})
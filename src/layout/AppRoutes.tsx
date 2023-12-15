import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Users, UserDetails, MoveList } from '../pages/Home/index'

const Loading = () => <p>Loading ...</p>

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<Users />} />
                <Route path='user/:id/*' element={<UserDetails />} />
            </Routes>
        </Suspense>
    )
}

export default AppRoutes

import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './pages/root'
import { createHashRouter, RouterProvider, } from 'react-router-dom'

import ErrorPage from './pages/error-page'
import './style.css'

const Sample01 = React.lazy(() => import('./pages/sample-01.jsx'))
const Sample02 = React.lazy(() => import('./pages/sample-02.jsx'))
const Sample03 = React.lazy(() => import('./pages/sample-03.jsx'))
const Sample04 = React.lazy(() => import('./pages/sample-04.jsx'))

const router = createHashRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        
        children: [
            {
                path: 'samples/01',
                element:
                    <Sample01 />
            },
            {
                path: 'samples/02',
                element:
                    <Sample02 />
            },
            {
                path: 'samples/03',
                element:
                    <Sample03 />
            },
            {
                path: 'samples/04',
                element:
                    <Sample04 />
            },
        ],
    },

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

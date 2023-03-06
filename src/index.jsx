
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider, } from 'react-router-dom'

import Root from './pages/root.jsx'
import Introduction from './pages/introduction.jsx'
import ErrorPage from './pages/error-page.jsx'
import './style.css'

const Sample01 = React.lazy(() => import('./pages/sample-01.jsx'))
const Sample02 = React.lazy(() => import('./pages/sample-02.jsx'))
const Sample03 = React.lazy(() => import('./pages/sample-03.jsx'))
const Sample04 = React.lazy(() => import('./pages/sample-04.jsx'))
const Sample05 = React.lazy(() => import('./pages/sample-05.jsx'))
const Sample06 = React.lazy(() => import('./pages/sample-06.jsx'))

const router = createHashRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        
        children: [
            {
                path: '/',
                element:
                    <Introduction />
            },
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
            {
                path: 'samples/05',
                element:
                    <Sample05 />
            },
            {
                path: 'samples/06',
                element:
                    <Sample06 />
            },
        ],
    },

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

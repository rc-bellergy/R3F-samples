
import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './pages/root'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'

import ErrorPage from './pages/error-page'
import Sample01 from './pages/sample-01.jsx'
import Sample02 from './pages/sample-02.jsx'
import Sample03 from './pages/sample-03.jsx'

import './style.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'samples/01',
                element: <Sample01 />
            },
            {
                path: 'samples/02',
                element: <Sample02 />
            },
            {
                path: 'samples/03',
                element: <Sample03 />
            },
        ],
    },

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

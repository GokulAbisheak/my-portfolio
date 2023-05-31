import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Views from '../views';

const FrontendRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Views />} />
                </Routes>
            </Router>
        </>
    );
}

export default FrontendRoutes;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Dealership = React.lazy(() => import('../page/dealership'))
const Home = React.lazy(() => import('../page/home/index'))
const Buy = React.lazy(() => import('../page/buy/index'))



export default function Rotas() {
    return (
        <Router>

            <Routes>

                <Route path="/"
                    element={
                        <React.Suspense fallback='Carregando...'>
                            <Home />
                        </React.Suspense>
                    } />

                <Route path="/car"
                    element={
                        <React.Suspense fallback='Carregando...'>
                            <Dealership />
                        </React.Suspense>
                    } />

                <Route path="/buy"
                    element={
                        <React.Suspense fallback='Carregando...'>
                            <Buy />
                        </React.Suspense>
                    } />


            </Routes>

        </Router >
    )
}
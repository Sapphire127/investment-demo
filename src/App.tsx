import React from 'react';
import './App.css';
import Home from './main/home/components/Home/Home.tsx';
import Fund from './main/fund/components/Fund/Fund.tsx';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';

function App() {
    return (
        <ConfigProvider>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/*" element={
                        <Routes>
                            <Route path="myfund" element={<Fund />}></Route>
                        </Routes>
                    }
                    ></Route>
                </Routes>
            </HashRouter>
        </ConfigProvider>
    );
}

export default App;

import React from "react";

import Section from '../Section/Section';
import Header from '../../components/Header/Header';

export interface LayoutProps {
    children: React.ReactNode
  }

function Layout() {
    return (
        <>
            <Section>
                <Header></Header>
            </Section>
        </>
    );
}
export default Layout
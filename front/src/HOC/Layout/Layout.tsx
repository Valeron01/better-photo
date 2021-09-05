import React from "react";

import Section from '../Section/Section';
import Header from '../../components/Header/Header';
import classes from "./Layout.module.scss";

export interface LayoutProps {
    children: React.ReactNode
  }

function Layout() {
    return (
        <>
            <div className={classes.wrapper}>
                <Section>
                    <Header></Header>
                </Section>
            </div>
        </>
    );
}
export default Layout
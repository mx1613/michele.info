import Head from 'next/head'
import { Footer } from "../footer/footer";
import { Header } from '../header/header';


export const Layout = ({ children, title = "Info@Michele", description = "A basic intro to myself", isDarkMode }) => {
    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <title>{title}</title>
            </Head>
            <main>
                {children}
            </main>
            <Header isDarkMode={isDarkMode} />
            <Footer isDarkMode={isDarkMode} />
        </>
    );

}
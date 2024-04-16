import styles from "./Layout.module.css"

function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <h1>Book App</h1>
                <p>
                    <a href="https://uniword.ir">Uniword</a> | Your digital partner
                </p>
            </header>
            { children }
            <footer className={styles.footer}><p>Developed by Ali with ❤️</p></footer>
        </>)

}

export default Layout
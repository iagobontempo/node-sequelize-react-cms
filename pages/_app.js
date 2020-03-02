function MyApp({ Component, pageProps }) {
    return (
        <div>
            <h1>nav</h1>

            <Component {...pageProps} />

        </div>
    )
}

export default MyApp
import './AppHeader.css'
const AppHeader = ({allPosts,liked}) => {
    return (
        <div className="app-header d-flex">
            <h1>Jurayev Twitgram</h1>
            <h2>{allPosts} Posts | {liked} Like</h2>
        </div>
    )
}

export default AppHeader
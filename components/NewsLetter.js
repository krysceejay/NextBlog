const NewsLetter = () => {
    return (
        <div className="newsletter-sub">
            <h2>Sign up for newsletter</h2>
            <form action="">
            <div className="newsletter-sub-form my-1">
                <input type="email" placeholder="your email" />
                <button type="submit" className="btn btn-main py-07">Submit</button>
                <p>YOUR EMAIL ADDRESS WILL NEVER BE SHARED</p>
            </div>
            </form>
        </div>
    )
}

export default NewsLetter

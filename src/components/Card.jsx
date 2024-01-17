import "../App.css"

export default function Card({ content }) {

    const date = new Date(content.date)

    return (
        <>
            <div class="p-card" style={{ boxShadow: "0px 1px 20px #adadad, 0px -5px #772953" }}>
                <h2 class="p-card__inner">
                    {content._embedded["wp:term"][1][0].name.toUpperCase()}
                </h2>
                <hr style={{ borderTop: "2px dotted #adadad" }} />
                <img class="p-card__inner" src={content.featured_media} />
                <div class="p-card__inner">
                    <h3>{content.title.rendered}</h3>
                    <p className="it">By <a target="_Blank" className="bl" href={content._embedded.author[0].link}>{content._embedded.author[0].name}</a> on {date.getDate()} {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</p>
                </div>
                <hr style={{ borderTop: "2px dotted #adadad" }} />
                <p class="p-card__inner">
                    {content.type.charAt(0).toUpperCase()}{content.type.slice(1)}
                </p>
            </div>
        </>
    )
}
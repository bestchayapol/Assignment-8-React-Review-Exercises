import "../styles/Gallery.css"

function Gallery() {
    return (
        <div className="gallery">
            <section>
                <h2>Gallery</h2>
                <ul>
                    <li><img width={200} src="./assets/shibuya-crossing.jpeg" /></li>
                    <li><img width={200} src="./assets/shibuya-crossing.jpeg" /></li>
                    <li><img width={200} src="./assets/shibuya-crossing.jpeg" /></li>
                </ul>
            </section>
        </div>
    )
}
export default Gallery
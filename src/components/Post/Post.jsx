import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <img
          src="https://wallpaperaccess.com/full/925524.jpg"
          alt=""
          className="postImg"
        />
        <div className="postCats">
          <span className="postCat">Музыка</span>
          <span className="postCat">Жизнь</span>
        </div>
        <h1 className="postTitle">Lorem ipsum dolor sit amet</h1>
        <span className="postDate">1 час назад</span>
        <p className="postDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
          possimus earum dignissimos, harum iure consectetur facere nihil
          dolorem repellendus quae totam animi quod eum recusandae corrupti
          minus iusto atque nobis perferendis dolorum quas nam! Voluptatem odio
          debitis ut nulla tenetur doloremque nesciunt harum molestiae laborum
          voluptas unde, tempore facilis? Aliquam fugit voluptatem ipsam, porro
          nihil ducimus quibusdam praesentium error quisquam pariatur
          dignissimos, veritatis est necessitatibus voluptatum omnis autem
          molestiae! Officia tempore animi deserunt voluptas minima dolorum nam
          fuga recusandae magnam.
        </p>
      </div>
    </div>
  );
}

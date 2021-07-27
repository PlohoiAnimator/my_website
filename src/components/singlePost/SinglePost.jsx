import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <img
        src="https://i.pinimg.com/originals/15/be/33/15be33d514f99d4cb6bc453e405cbb6d.jpg"
        alt=""
        className="singlePostImg"
      />
      <div className="singlePostTitle">
        <span>Lorem, ipsum dolor sit amet</span>
        <div className="singlePostEdit">
          <i class="singlePostIcon far fa-edit"></i>
          <i class="singlePostIcon far fa-trash-alt"></i>
        </div>
      </div>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Автор: <b>Дмитрий</b>
        </span>
        <span className="singlePostDate">1 час назад</span>
      </div>
      <p className="singlePostDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
        modi labore, ullam ex rerum similique odit reprehenderit nam laborum
        amet iusto. Voluptates praesentium totam maiores fuga ratione? Ipsa, sit
        voluptatum quasi tempora esse a perspiciatis quidem. Optio harum est
        doloremque quia dolores commodi id ea laudantium, eum asperiores nemo
        nam incidunt ab. Sed voluptas minus ratione dolores et officiis
        assumenda vel esse? Qui delectus, sit molestias reprehenderit id autem
        voluptas sed a minima mollitia! Dicta aspernatur voluptatibus,
        reprehenderit tempora rerum nisi neque quaerat quibusdam vel adipisci
        natus explicabo laboriosam. Magnam sapiente nihil sint at quibusdam
        autem corporis veniam, libero quod repellat repellendus perspiciatis vel
        minus possimus maiores nisi totam officia sunt unde eum. Vitae
        consequatur magni expedita accusamus ut. Molestias fuga enim, ipsum
        libero dolorem natus optio? Repellendus debitis porro incidunt facere ad
        provident, at quam cumque sed accusamus officia molestias, quia,
        asperiores amet dolorem sapiente ratione officiis! Perspiciatis
        asperiores, fugit nesciunt, minus, sunt vel accusamus dignissimos itaque
        dolorem quaerat ipsam ea amet sint reiciendis mollitia temporibus
        repellendus ut accusantium quam. Rem doloremque error commodi quo
        delectus a numquam ratione, vero veritatis debitis perspiciatis!
        Sapiente eaque, itaque natus numquam distinctio perferendis reiciendis,
        minima tempore suscipit accusamus repellat deserunt sed ad.
      </p>
    </div>
  );
}

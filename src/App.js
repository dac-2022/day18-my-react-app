import { useState } from "react";

function App() {
  let [login] = useState(false);

  return (
    <div>
      <h1>Conditional Block</h1>

      {login ? "You are logged In" : "Please Login!"}
      {login ? <h1>you are logged in</h1> : <h1>Please Login!</h1>}
      {login ? (
        <div>
          <h1>You are logged in</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            reprehenderit tempora, neque nam itaque, corporis ut error quo nulla
            ipsam harum, totam sit ex! Labore deleniti assumenda quaerat
            reprehenderit, eos delectus enim ex culpa ullam qui cumque optio
            praesentium, molestias rem doloremque itaque earum animi. Numquam
            nobis dolor sit ea vero quod harum perspiciatis quisquam! Rem quos
            similique, labore fugiat repellendus molestias et nulla. Quidem
            debitis, sint animi sunt delectus fuga dolorem sed eaque laboriosam
            porro facilis autem ipsum ducimus, placeat cupiditate natus atque,
            optio facere! Unde perferendis consectetur pariatur libero ratione
            nihil eaque eveniet quidem quibusdam. Officiis, asperiores autem.
          </p>
        </div>
      ) : (
        <div>
          <h1>not logged in</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            error libero laborum, ab sit nobis obcaecati suscipit. Ex ducimus
            minus possimus, odit excepturi voluptatum sint necessitatibus saepe
            eum veniam molestiae amet cupiditate aperiam magnam autem
            consequuntur voluptate fugiat voluptatibus alias accusamus
            quibusdam! Fugiat eius placeat vel dolorem, quasi deleniti rerum,
            odit, iure quas labore obcaecati repudiandae nobis magnam voluptatum
            repellendus similique recusandae eligendi aspernatur in architecto
            esse? Ex minus nobis et rem at nostrum nemo architecto maxime
            minima, dolores facere? Doloribus dolore sunt quam magni, nostrum
            repellendus ut corrupti soluta quo. Ex accusantium maiores odio
            voluptatibus ullam maxime aliquid repudiandae?
          </p>
        </div>
      )}

      {/** IF  */}
      {!login && (
        <p>
          Login Page. Please login with your creedntials. ELse create an Account
          wiht us.
        </p>
      )}

      {/** IF */}
      {login && (
        <p>
          Home Page :: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ducimus minima, velit totam et asperiores laborum assumenda omnis
          voluptates. Vitae consectetur sequi natus cupiditate non officia
          veniam recusandae suscipit illo doloribus.
        </p>
      )}
    </div>
  );
}

export default App;

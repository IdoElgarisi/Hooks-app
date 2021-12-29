import { NavLink, Route } from "react-router-dom"

export function About() {

  const Vision = () => {
    return (
      <div>
        <ul>
          <li>Take Over The World with Robots</li>
          <li>Take Care The World with Robots</li>
        </ul>
      </div>
    )
  }

  const Teams = () => {
    return (
      <div>
        <ul>
          <li>Moshe Ben moshe</li>
          <li>Elhanan Ben Elhanan</li>
          <li>Popo Anderson</li>
        </ul>
      </div>
    )
  }

  return (
    <div className="about">
      <h1>About Robots</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae recusandae accusamus nulla consectetur voluptas fugiat labore? Unde excepturi dolores ratione quae velit quam iste reprehenderit earum vitae quis. Optio?</p>
      <nav>
        <NavLink to="/about/vision">Vision</NavLink>
        <NavLink to="/about/teams">Teams</NavLink>
      </nav>
      <section>
        <Route path="/about/vision" component={Vision} />
        <Route path="/about/teams" component={Teams} />
      </section>

    </div>
  )
}

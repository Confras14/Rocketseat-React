import style from './Post.module.scss'

export function Post () {
  return(
    <article className={style.post}>
      <header>
          <div>
            <img src="https://github.com/confras14.png" />
            <div className={style.author}>
              <strong>Jane Cooper</strong>
              <span>Dev Front-end</span>
            </div>
          </div>
          
          <span>Públicado há 1h</span>
      </header>

      <main>
        <div className="texts">
          <h2>Fala Galera ✌</h2>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

          <p><span>👉 jane.design/doctorcare</span></p>

          <p><span>#novoprojeto #nlw #rocketseat</span></p>
        </div>

        <div className="feedback">
          <p>Deixe seu feedback</p>
          <textarea placeholder='Escreva aqui seu feedback!'></textarea>
          <button>Publicar</button>
        </div>
      </main>
    </article>
  )
}
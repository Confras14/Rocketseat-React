import style from './Post.module.scss'

export function Post () {
  let dateDay = `2024/04/04`
  let dateTime = `21:28`
  let date = `${dateDay} ${dateTime}`

  return(
    <article className={style.post}>
      <header className={style.header}>
          <div>
            <img className={style.a} src="https://github.com/confras14.png" />
            <div>
              <strong>Jane Cooper</strong>
              <span>Dev Front-end</span>
            </div>
          </div>
          
          <time
            title={`${dateDay} às ${dateTime}h`}
            dateTime={date}
          >
            Públicado há 1h
          </time>
      </header>

      <div className={style.content}>
        <p>Fala Galera ✌</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href=''>👉 jane.design/doctorcare</a></p>
        <p><a href=''>#novoprojeto #nlw #rocketseat</a></p>
      </div>

      <div className={style.feedback}>
        <p>Deixe seu feedback</p>
        <textarea placeholder='Escreva aqui seu feedback!'></textarea>
        <input type="button" value="Publicar" />
      </div>
    </article>
  )
}
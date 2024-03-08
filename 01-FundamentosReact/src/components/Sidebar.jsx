import style from './Sidebar.module.scss'

import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return(
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1709362631898-cb6357711e84?q=40&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      />
      
      <div className={style.profile}>
        <img src="https://github.com/Confras14.png" />

        <strong>Lucas Conrado</strong>
        <span>Dev Front-end</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
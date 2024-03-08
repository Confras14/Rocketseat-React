import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import "./global.scss"
import styles from "./App.module.scss"

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <h2>asdasda</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic perferendis adipisci quo fugiat voluptas laborum itaque, in ex eum quae voluptatum beatae totam, laboriosam, commodi rem quis nostrum similique impedit!</p>
          <h2>asdasda</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic perferendis adipisci quo fugiat voluptas laborum itaque, in ex eum quae voluptatum beatae totam, laboriosam, commodi rem quis nostrum similique impedit!</p>
          <h2>asdasda</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic perferendis adipisci quo fugiat voluptas laborum itaque, in ex eum quae voluptatum beatae totam, laboriosam, commodi rem quis nostrum similique impedit!</p>
          <h2>asdasda</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic perferendis adipisci quo fugiat voluptas laborum itaque, in ex eum quae voluptatum beatae totam, laboriosam, commodi rem quis nostrum similique impedit!</p>
        </main>
      </div>
    </>
  )
}

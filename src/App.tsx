// LOGIQUE : composant racine — placeholder Étape 0 prouvant que le build fonctionne.
// Les vrais modules viendront dans les commits suivants.
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header>
        <h1>🌳 RH AbracadaParc — refonte 2026</h1>
        <p className="badge">Preview canary · /v2/</p>
      </header>

      <main>
        <section className="status">
          <h2>État du build</h2>
          <ul>
            <li>✅ Vite + React 18 + TypeScript</li>
            <li>✅ Déploiement automatique sur push <code>refonte-2026</code></li>
            <li>⏳ Modules à venir : auth, planning, temps, historique, export paie</li>
          </ul>
        </section>

        <section className="test">
          <h2>Test interactif</h2>
          <p>Ce bouton prouve que React fonctionne :</p>
          <button onClick={() => setCount((c) => c + 1)}>
            Cliqué {count} fois
          </button>
        </section>

        <section className="info">
          <p>
            L'ancienne app reste accessible sur{' '}
            <a href="/rh/" target="_blank" rel="noreferrer">
              abracadaparc.github.io/rh/
            </a>
            . Cette version <code>/v2/</code> sera la nouvelle app à la fin de la refonte.
          </p>
        </section>
      </main>

      <footer>
        <small>AbracadaParc · IDCC 1790 · contact@abracadaparc.fr</small>
      </footer>
    </div>
  )
}

export default App

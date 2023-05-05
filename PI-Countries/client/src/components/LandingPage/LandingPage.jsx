import React from 'react'
import { Link } from 'react-router-dom'
import styles from './LandingPage.module.css'



export default function LandingPage() {
    return (
        <div className={styles.Div}>
            <h1>Henry Countries</h1>
            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    )
}

import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function AdminDashboard() {
  return (
    <>
      <Header />
      <main>
        <section className="dashboard-page">
          <div className="dashboard-container">
            <h1>Admin Dashboard</h1>
            <p>Welcome, admin. Manage users, review reports, and monitor activity from here.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

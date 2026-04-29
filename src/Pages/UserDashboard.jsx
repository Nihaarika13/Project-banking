import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
                                                                  
export default function UserDashboard() {
  return (
    <>
      <Header />
      <main>
        <section className="dashboard-page">
          <div className="dashboard-container">
            <h1>User Dashboard</h1>
            <p>Welcome to your account. View your balance, manage your profile, and access banking services.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

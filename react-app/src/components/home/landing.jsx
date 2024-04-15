import React, { useState } from 'react';

function Home() {
  return (
    <main>
          <section className="jumbotron text-center">
            <div className="container">
              <h1 className="jumbotron-heading">Welcome to Net Banking</h1>
              <p className="lead text-muted">Experience secure and convenient online banking services with us.</p>
              <p>
                <a href="/register" className="btn btn-primary mr-2">Sign Up</a>
                <a href="/login"  className="btn btn-outline-primary">Log In</a>
              </p>
            </div>
          </section>

          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title">Secure Transactions</h3>
                    <p className="card-text">Your transactions are encrypted and protected with advanced security measures.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title">Convenient Banking</h3>
                    <p className="card-text">Access your accounts anytime, anywhere with our user-friendly platform.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title">Dedicated Support</h3>
                    <p className="card-text">Our team is here to assist you with any queries or concerns you may have.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
  );
}
export default Landing;
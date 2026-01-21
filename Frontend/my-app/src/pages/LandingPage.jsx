import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LandingPage.css';
import AlgorandLogo from '../assets/image.png';

export default function LandingPage() {
  const features = [
    {
      icon: '🎯',
      title: 'Smart Bounties',
      description: 'Create and manage task bounties with Algorand smart contracts ensuring secure, trustless payments.',
      gradient: 'gradient-1'
    },
    {
      icon: '🔐',
      title: 'Escrow Protection',
      description: 'Funds are locked in smart contract escrow until work is verified and approved.',
      gradient: 'gradient-2'
    },
    {
      icon: '⚖️',
      title: 'Decentralized Disputes',
      description: 'Fair dispute resolution through community voting with token-based governance.',
      gradient: 'gradient-3'
    },
    {
      icon: '💎',
      title: 'Instant Payments',
      description: 'Receive payments instantly in ALGO tokens directly to your Pera Wallet.',
      gradient: 'gradient-4'
    },
    {
      icon: '⭐',
      title: 'Reputation System',
      description: 'Build your reputation through successful completions and quality work.',
      gradient: 'gradient-5'
    },
    {
      icon: '🌐',
      title: 'Global Marketplace',
      description: 'Connect with clients and freelancers worldwide in a decentralized ecosystem.',
      gradient: 'gradient-6'
    }
  ];

  const stats = [
    { value: '100+', label: 'Active Bounties' },
    { value: '500+', label: 'Freelancers' },
    { value: '50K+', label: 'ALGO Paid' },
    { value: '99%', label: 'Success Rate' }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Create or Find Bounties',
      description: 'Clients post bounties with detailed requirements. Freelancers browse and apply for tasks matching their skills.'
    },
    {
      step: '02',
      title: 'Smart Contract Escrow',
      description: 'Once matched, funds are locked in an Algorand smart contract, ensuring security for both parties.'
    },
    {
      step: '03',
      title: 'Complete & Submit',
      description: 'Freelancers complete the work and submit for review. Real-time chat keeps everyone aligned.'
    },
    {
      step: '04',
      title: 'Review & Release',
      description: 'Clients review and approve work. Payment is automatically released from escrow to the freelancer.'
    }
  ];

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="nav-content">
          <div className="nav-logo">
            <img src={AlgorandLogo} alt="BlockHire Logo" />
            <span>BlockHire</span>
          </div>
          <div className="nav-actions">
            <Link to="/login" className="nav-link">Sign In</Link>
            <Link to="/register" className="nav-btn-primary">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">⚡</span>
            Powered by Algorand Blockchain
          </div>
          <h1 className="hero-title">
            The Future of
            <span className="gradient-text"> Freelance Work</span>
          </h1>
          <p className="hero-subtitle">
            Connect, collaborate, and get paid securely with blockchain-powered smart contracts. 
            No middlemen, no delays, just trustless transactions.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="btn-primary">
              Start Hiring
              <span className="btn-arrow">→</span>
            </Link>
            <Link to="/register" className="btn-secondary">
              Find Work
            </Link>
          </div>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-card card-1">
            <div className="card-icon">💼</div>
            <div className="card-content">
              <span className="card-title">New Bounty Created</span>
              <span className="card-amount">+250 ALGO</span>
            </div>
          </div>
          <div className="visual-card card-2">
            <div className="card-icon">✅</div>
            <div className="card-content">
              <span className="card-title">Payment Released</span>
              <span className="card-amount">150 ALGO</span>
            </div>
          </div>
          <div className="visual-card card-3">
            <div className="card-icon">⭐</div>
            <div className="card-content">
              <span className="card-title">5-Star Review</span>
              <span className="card-amount">Excellent work!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <span className="section-badge">Features</span>
          <h2 className="section-title">Everything You Need to Succeed</h2>
          <p className="section-subtitle">
            A complete ecosystem for decentralized freelance work, built on trust and transparency.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className={`feature-card ${feature.gradient}`}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-header">
          <span className="section-badge">Process</span>
          <h2 className="section-title">How BlockHire Works</h2>
          <p className="section-subtitle">
            Simple, secure, and transparent workflow from start to finish.
          </p>
        </div>
        <div className="steps-container">
          {howItWorks.map((item, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{item.step}</div>
              <h3 className="step-title">{item.title}</h3>
              <p className="step-description">{item.description}</p>
              {index < howItWorks.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtitle">
            Join thousands of freelancers and clients already using BlockHire 
            for secure, decentralized work.
          </p>
          <div className="cta-actions">
            <Link to="/register" className="btn-primary btn-large">
              Create Free Account
              <span className="btn-arrow">→</span>
            </Link>
            <Link to="/login" className="btn-ghost">
              Already have an account? Sign In
            </Link>
          </div>
        </div>
        <div className="cta-glow"></div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={AlgorandLogo} alt="BlockHire" />
            <span>BlockHire</span>
          </div>
          <p className="footer-text">
            © 2025 BlockHire · Built on Algorand · Decentralized Freelance Marketplace
          </p>
        </div>
      </footer>
    </div>
  );
}

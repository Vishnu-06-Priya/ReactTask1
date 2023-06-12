
import './App.css';
import Cards from "./Cards";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  let cardsprops = [{
    plan: 'FREE',
    usd: '$0',
    features: [{
      title: 'Single User',
      txtpro: false
    }, {
      title: '5GB Storage',
      txtpro: false
    }, {
      title: 'Unlimited Public Projects',
      txtpro: false
    }, {
      title: 'Community Access',
      txtpro: false
    }, {
      title: 'Unlimited Private Projects',
      txtpro: true
    }, {
      title: 'Dedicated Phone Support',
      txtpro: true
    }, {
      title: 'Free Subdomain',
      txtpro: true
    }, {
      title: 'Monthly Status Reports',
      txtpro: true
    }]
  }, {
    plan: 'PLUS',
    usd: '$9',
    features: [{
      title: '5 User',
      txtpro: false
    }, {
      title: '50GB Storage',
      txtpro: false
    }, {
      title: 'Unlimited Public Projects',
      txtpro: false
    }, {
      title: 'Community Access',
      txtpro: false
    }, {
      title: 'Unlimited Private Projects',
      txtpro: false
    }, {
      title: 'Dedicated Phone Support',
      txtpro: false
    }, {
      title: 'Free Subdomain',
      txtpro: false
    }, {
      title: 'Monthly Status Reports',
      txtpro: true
    }]
  }, {
    plan: 'PRO',
    usd: '$49',
    features: [{
      title: 'Unlimited User',
      txtpro: false
    }, {
      title: '150GB Storage',
      txtpro: false
    }, {
      title: 'Unlimited Public Projects',
      txtpro: false
    }, {
      title: 'Community Access',
      txtpro: false
    }, {
      title: 'Unlimited Private Projects',
      txtpro: false
    }, {
      title: 'Dedicated Phone Support',
      txtpro: false
    }, {
      title: 'Unlimited Free Subdomain',
      txtpro: false
    }, {
      title: 'Monthly Status Reports',
      txtpro: false
    }]
  }];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className ="row">
          {cardsprops.map((pro) => < Cards list={pro} />)}
        </div>
      </div>
    </section>  
  )
}

export default App;

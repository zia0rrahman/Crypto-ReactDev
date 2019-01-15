import React, { Component } from 'react'
import Currency from './Currency';
import axios from 'axios'



// class component 
class Crypto extends Component {
    constructor(props){
        super(props)
        this.state = {
            // dummy data
            data: [
                {
                    id: 'bitcoin',
                    name: 'Bitcoin',
                    symbol: 'BTC',
                    price_usd: '1',
                    percent_change_1h: '0',
                    percent_change_24h: '0',
                    percent_change_7d: '0',
                  },
                  {
                    id: 'ethereum',
                    name: 'Ethereum',
                    symbol: 'ETH',
                    price_usd: '1',
                    percent_change_1h: '0',
                    percent_change_24h: '0',
                    percent_change_7d: '0',
                  }
            ]
        }
    }

    //get data throw api
    fetchCurrencyData = () => {
        //make request
        axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
            .then(response => {
              const wanted = ['bitcoin', 'ethereum', 'ripple', 'eos', 'litecoin', 'tron', 'tether', 'stellar', 'bitcoin-cash', 'bitcoin-sv']
              const result = response.data.filter(currency =>
           wanted.includes(currency.id),
          )
          this.setState({data: result})
         })
          .catch(err => console.log(err))
        }

    
    componentDidMount(){
        this.fetchCurrencyData()
        this.interval = setInterval(() => this.fetchCurrencyData(), 60 *1000)
        }



  render() {
    const crypto = this.state.data.map(currency => (
        <Currency data={currency} key={currency.id}/>
    ))
    
    
    return (
      <div>
          <ul className="crypto">{crypto}</ul>
      </div>
    )
  }
}

export default Crypto
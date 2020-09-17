import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
          {this.props.pet.name} {' '}
          {
          this.props.pet.gender === 'female' ? '♀' : '♂'
          }

          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button>
<<<<<<< HEAD
          :<button onClick={ () =>this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>}
=======
          :<button onClick={this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>}
>>>>>>> 0837c34f5ba96426aaf37b9507f5eb841e5379d3


        </div>
      </div>
    )
  }
}

export default Pet
